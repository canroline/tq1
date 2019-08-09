<template>
	<view style="background: #EFEFF3;height: 100%;">
		<scroll-view style="height: 70%;background: #EFEFF3;" scroll-y="true" >
			<template v-if="orderCarList.length<1">
				<view class="uni-flex uni-column" style="color:#999999; align-items: center;justify-content: center;height: 100%;" >
					<image src="/static/shopBag.png" style="width: 80px; height: 80px;"></image>
					<view style="padding-top: 20px;">当前还没有商品，请扫码添加商品</view>
				</view>
			</template>
			<template v-else>
				<view v-for="(item,index) in orderCarList" :key="index"
					class="uni-flex" 
					style="align-items: center; height: 85px;padding: 5px;
						background: #fff;margin-bottom: 7px;">
					<view style="flex: 1;padding-left: 20px;">
						<image :src="item.small_img" style="width: 50px;height: 50px;">
						</image>
					</view>
					<view style="flex: 3;"> 
						 <text>  {{ item.goods_name }} </text>
						 <div style="color:#BBBBBB;font-size: 12px;"> 
							规格：{{ item.goods_model || '--' }}
						 </div>
						 
						 <view class="uni-flex" style="align-items: center;justify-content: space-between;">
							 <div style="color: #CE3C39;font-size: 12px;">
								 ¥{{ item.goods_price || 0 }}
							 </div>
							 <!-- <div>  item.goods_num={{item.goods_num}}</div> -->
							 <uni-number-box :min="1" :max="9"  @change="changeNum($event, item)" >
							 </uni-number-box>
						 </view>
					</view>
				</view>
			</template>
		</scroll-view>
		
		<view class="uni-flex uni-column" 
			style="background: #fff; position: absolute;left: 0px;bottom: 0px;
			width: 100%;height: 100px;justify-content: flex-end;">
			<view class="uni-flex" style="align-items: baseline;">
				<view style="position: relative;padding-left: 20px;" @click="GoScan">
					<img src="/static/circleBg.png" 
						style="width: 59pt;height: 59pt;">
					</img>
					<img src="/static/scan.png" 
						style="position: absolute;left: 45px; top: 25px; 
						width: 29px;height: 29px;">
					</img>
				</view>
				<view style="margin-bottom: 10px;flex: 1;">
					合计：<text style="color: #CE3C39;"> ¥{{ sumMoney }}</text>
				</view>
				<button class="mini-btn" type="warn"  @click="payOrder"
					style="height: 30px; width: 80pt; right: 10px;
					font-size:13px;border-radius: 15px;margin-bottom: 10px;" >
					结算
				</button>
			</view>
		 
			<view class="uni-flex" style="width: 100%;">
				<view class="uni-flex uni-column" @click="GoHome"
					style="flex: 1;align-items: center;font-size: 10px;">
					<img src="/static/home2.png" style="width: 20px;height: 20px;"></img>
					首页 
				</view>
				<view class="uni-flex uni-column" 
					style="flex: 1; align-items: center;font-size: 10px;">
					<img src="/static/shopBag2.png" style="width: 20px;height: 20px;"></img>
					购物车
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	
	export default {
		components:{
			uniNumberBox,
		},
		data() {
			return {
				orderCarList:[],
				val: 1,
			}
		},
		computed: {
			sumMoney() {
				let sumMoney = 0
				this.orderCarList.forEach( item => {
					sumMoney = Number( item.goods_price ) * Number( item.goods_num ) + sumMoney
				})
				return sumMoney
			}
		},
		onShow(data) {
			if( this.$store.state.orderCarList.length<1 ){
				this.$store.dispatch("getBagList").then(  data=>{
					console.log("获取购物车列表 getBagList=", data );
				}).catch( err=> {
					uni.showToast({ title: err, icon:'none', duration: 2000 });
				})
			} else {
				this.orderCarList = this.$store.state.orderCarList
			}
		},
		methods: {
			changeNum(val, item) {
				console.log("bindChange val=", val, item )
				item.goods_num = val
			},
			payOrder() {
				if(this.sumMoney==0){
					uni.showToast( { title: '暂无商品需要付款！', icon:'none', duration: 2000 });
					return
				} else {
					this.pay()
				}
			},
			pay() {
				
				// 仅作为示例，非真实参数信息。
				// uni.requestPayment({
				// 	provider: 'wxpay',
				// 	timeStamp: String(Date.now()),
				// 	nonceStr: 'A1B2C3D4E5',
				// 	package: 'prepay_id=wx20180101abcdefg',
				// 	signType: 'MD5',
				// 	paySign: '',
				// 	success: function (res) {
				// 		console.log('success:' + JSON.stringify(res));
				// 	},
				// 	fail: function (err) {
				// 		console.log('fail:' + JSON.stringify(err));
				// 	}
				// });
				
				uni.showToast({ title: '模拟数据 支付成功！！', icon:'none', duration: 2000 });
				return 
				
				
				
				let openid = this.$store.state.sysOpenid
				let price = this.sumMoney
				let allList = []
				this.orderCarList.forEach( item => {
					let _d = {
						"good_num":item.goods_num, 
						"good_no": item.goods_no, 
						"amt": item.goods_price, 
						"good_name": item.goods_name, 
						"good_model": item.goods_model,
					}
					allList.push( _d )
				})
			
				uni.request({
					url: 'https://feiwuar.goho.co/pay/wxGzPayOrder',
					data: {
						openid, price, allList
					},
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("付钱 pay=", res.data);
						// if( res.data.code=="0000" ){
						// 	uni.navigateTo({
						// 		url: '/pages/component/audio/goodDetail/goodDetail?goodInfo=' + encodeURIComponent( JSON.stringify(res.data.goodinfo) ) 
						// 	})
						// } else {
						// 	uni.showToast({ title: '获取商品信息失败！', icon:'none', duration: 2000 });
						// }
					}
				});
			},
			GoHome() {
				uni.navigateTo({
					url: '/pages/tabBar/component/component' 
				})
			},
		}
	}
</script>

<style>

</style>
