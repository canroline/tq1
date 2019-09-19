<template>
	<view style="background: #EFEFF3;height: 100%;">
		<scroll-view style="height: 70%;background: #EFEFF3;" scroll-y="true" >
			<template v-if="no_bag_data">
				<view class="uni-flex uni-column" style="color:#999999; align-items: center;justify-content: center;height: 100%;" >
					<image src="/static/shopBag.png" style="width: 80px; height: 80px;"></image>
					<view style="padding-top: 20px;">当前还没有商品，请扫码添加商品</view>
				</view>
			</template>
			<template v-else>
				<view style="background: #fff;height: 20px;padding: 15px;
					border-bottom: 1px solid #DDDDDD;border-top: 1px solid #DDDDDD;">
					<checkbox-group @change="allCheck">
						<label>
							<checkbox value="all" :checked="check_all" />全选
						</label>
					</checkbox-group>
				</view>
				
				<!-- orderCarList == {{ orderCarList }} -->
				
				<checkbox-group @change="ListCheck">
					<view v-for="(item,index) in orderCarList" :key="index"
						class="uni-flex" 
						style="align-items: center; height: 85px;padding: 5px;
							background: #fff;margin-bottom: 7px;">
							
						<checkbox style="padding-left: 10px;" :value="item.goods_no + '_' + item.goods_model" 
						:checked="item.checked" />
						
						<view style="flex: 1;padding-left: 10px;"> 
							<image :src="item.small_img" style="width: 70px;height: 70px;">
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
								 <uni-number-box :value="item.goods_num" 
									min="1" 
									@change="changeNum($event, item)" >
								 </uni-number-box>
							 </view>
						</view>
					</view>
				</checkbox-group>
			</template>
		</scroll-view>
		
		<!-- <checkbox-group @change="checkboxChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
                    <view>
                        <checkbox :value="item.value" :checked="item.checked" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </checkbox-group> -->
		
		<view class="uni-flex uni-column" 
			style="background: #fff; position: absolute;left: 0px;bottom: 0px;
			width: 100%;height: 110px;justify-content: flex-end;">
			
			<view class="uni-flex" style="position: relative;top: -30px; margin-left: 20px;" >
				<view class="uni-flex" @click="GoScan">
					<img src="/static/circleBg.png" 
						style="width: 59pt;height: 59pt;">
					</img>
					<img src="/static/scan.png" 
						style=" margin-top: 25px;margin-left: -53px;
						width: 29px;height: 29px;">
					</img>
				</view>
				
				
				<view class="uni-flex" style="align-items: flex-end;
					margin-left: 30px; margin-bottom: -15px; width: 90%;" >
					<view style="margin-bottom: 10px;flex: 1;">
						合计：<text style="color: #CE3C39;"> ¥{{ sumMoney }}</text>
					</view>
					<button class="mini-btn" type="warn"  @click="payOrder"
						style="height: 30px; width: 80pt; right: 10px;
						font-size:13px;border-radius: 15px;margin-bottom: 10px;" >
						结算
					</button>
				</view>
			</view>
			
			
			<view class="uni-flex" style="width: 100%;">
				<view class="uni-flex uni-column" @click="GoHome"
					style="flex: 1;align-items: center;font-size: 10px;">
					<img src="/static/home2.png" style="width: 25px;height: 25px;"></img>
					首页 
				</view>
				<view class="uni-flex uni-column" 
					style="flex: 1; align-items: center;font-size: 10px;">
					<img src="/static/shopBag2.png" style="width: 25px;height: 25px;"></img>
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
				check_all: true,
				orderCarList:[],
				// val: 1,
				// IPData:{},
				wxPayData: {},
				no_bag_data: false, //背包没数据
				inited: 0,
				host_url: this.$store.state.host_url
			}
		},
		computed: {
			sumMoney() {
				let Add = this.$store.state.Add
				let Multiply = this.$store.state.Multiply
				let sumMoney = 0
				this.orderCarList.forEach( item => {
					if( item.checked ){
						// sumMoney = Number( item.goods_price ) * Number( item.goods_num ) + sumMoney
						sumMoney = Add( Multiply( Number( item.goods_price ), Number( item.goods_num ) ) , sumMoney )
					}
				})
				return sumMoney
			}
		},
		onShow(data) {
				uni.showLoading({
					title:"获取中..."
				})
				this.$store.dispatch("getBagList").then(  data=>{
					console.log("获取购物车列表 getBagList=", data );
					uni.hideLoading()
					this.orderCarList = this.$store.state.orderCarList
					if( this.orderCarList.length<1 ){
						this.no_bag_data = true
					}
				}).catch( err=> {
					uni.hideLoading()
					this.no_bag_data = true  
					uni.showToast({ title: err, icon:'none', duration: 2000 });
				})
				
				// setTimeout( ()=>{
				// 	this.inited = true
				// 	console.log("inited !!!!")
				// }, 1000)
		},
		methods: {
			ListCheck(e) {
				console.log("ListCheck =", e  )
				let values = e.detail.value;
				if(values.length == this.orderCarList.length){
					this.check_all = true
				} else {
					this.check_all = false
				}
				this.orderCarList.forEach(item => {
					if( values.includes(item.goods_no + "_" + item.goods_model) ){
						item.checked = true
					}else{
						item.checked = false
					}
				})
				console.log("this.orderCarList =", this.check_all, this.orderCarList)
			},
			allCheck: function (e) {
				console.log("allCheck =", e, this.check_all )
                    let values = e.detail.value;
					let check = false
					if(values.includes('all')){
						check = true
					}
					this.check_all = check
					
					this.orderCarList.forEach( item => {
						item.checked = check
					})
					console.log("this.orderCarList =", this.orderCarList)
            },
			
			changeNum(val, item) {
				console.log("bindChange val=", val, item, this.inited )
				if(val<1) return
				this.flag = val> item.goods_num ? 1 : 2
				item.goods_num = val
				if( this.inited < this.orderCarList.length ){
					this.inited = this.inited + 1
					return
				} 
				console.log("bindChange inited=", this.inited )
				this.addBag(item, val )
			},
			
			addBag(goodInfo, count ) {
				// if(Number(count) > Number(goodInfo.good_stock) ){
				// 	uni.showToast({ title: '您购买数量超过库存！', icon:'none', duration: 2000 });
				// 	return
				// }
				uni.showLoading({
					title: '添加中'  
				});
		
				let request_params = {
					goods_no: goodInfo.goods_no,
					goods_model: goodInfo.goods_model,
					goods_num: count ,
					goods_name: goodInfo.goods_name,
					openid: this.$store.state.sysOpenid,
					goods_price: goodInfo.goods_price,
				}
				this.$store.dispatch( "addBag", request_params ).then( res => {
					console.log("shopBag res =", res)
					if(res.code!=0){  
						if( res.stock && goodInfo.goods_num> res.stock){
							goodInfo.goods_num = res.stock //goodInfo.goods_num -1
						}
						// setTimeout( ()=>{
						// 	uni.showToast({ title: err.msg || '添加购物车失败！', icon:'none', duration: 3000 })
						// }, 1000)
					}
				}).catch ( err =>{
					if( err.stock && goodInfo.goods_num> err.stock ){
						goodInfo.goods_num = err.stock // goodInfo.goods_num -1
					}
					// setTimeout( ()=>{
					// 	uni.showToast({ title: err.msg || '添加购物车失败！', icon:'none', duration: 3000 })
					// }, 1000)
					
				})
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
				let openid = this.$store.state.sysOpenid
				let price = 0.1//this.sumMoney
				let allList = []
				this.orderCarList.forEach( item => {
					if( item.checked ){
						let _d = {
							"good_num":item.goods_num, 
							"good_no": item.goods_no, 
							"amt": item.goods_price, 
							"good_name": item.goods_name, 
							"good_model": item.goods_model, 
						}
						allList.push( _d )
					}
				})
				if( allList.length<1 ){
					uni.showToast({ title: '请选择要支付的商品！！', icon:'none', duration: 2000 });
					return 
				}
				
				uni.showLoading({
					title:"付款中..."
				})
				
			
				uni.request({
					url: this.host_url + '/pay/wxArPayOrder',
					data: {
						openid, 
						price, 
						allList: JSON.stringify( allList ), 
						// ip: this.$store.state.IPData.cip
					},
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("付钱 pay=", res, openid, price, allList);
						if( res.statusCode==200 && res.data.code=='0000' ){
							this.wxPayData = res.data 
							this.GoWXPay()
						} else {
							uni.hideLoading()
							uni.showToast({ title: '创建订单失败！', icon:'none', duration: 2000 });
						}
					}
				});
			},
			GoWXPay() {
				let page_url_path = "/pages/component/audio/shopBag/PayPage/PayPage?payCode="
				
				uni.requestPayment({
					provider: 'wxpay',
					timeStamp: this.wxPayData.timeStamp,
					nonceStr: this.wxPayData.nonceStr,
					package: 'prepay_id=' + this.wxPayData.prepay_id,
					signType: this.wxPayData.signType,
					paySign: this.wxPayData.paySign,
					success:  (res)=> {
						uni.hideLoading()
						console.log('GoWXPay success:' + JSON.stringify(res));
						// this.$store.dispatch("getBagList")//重新初始化购物车
						uni.navigateTo({
							url: page_url_path + 0 + '&msg=' + res.errMsg
						})
						this.$store.dispatch("getBagList")//重新初始化购物车
					},
					fail:  (res)=> {
						console.log('GoWXPay fail:' + JSON.stringify(res));
						uni.hideLoading()
						uni.navigateTo({
							url: page_url_path + 1 + '&msg=' + res.errMsg 
						})
						this.updateStock()
					}
				});
				
			},
			
			updateStock() {
				this.$store.dispatch("updateStock", this.wxPayData.order_no)
			},
			GoHome() {
				uni.reLaunch({ url: '/pages/tabBar/component/component'});
				// uni.navigateTo({
				// 	url: '/pages/tabBar/component/component' 
				// })
			},
			GoScan() {
				
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						let goods_no = res.result
						if(!goods_no){
							uni.showToast({ title: '请检查二维码是否正确！', icon:'none', duration: 2000 });
							return 
						}
						
						console.log('goods_no：' + goods_no );
						
						uni.request({
							url: this.host_url + '/pay/queryGoodsInfos',
							data: {
								goods_no: goods_no
							}, 
							method:"GET",  
							header: {
								'content-type': 'application/x-www-form-urlencoded', 
							},
							success: (res) => {
								console.log("queryGoodsInfos=", res.data);
								if( res.data.code=="0000" ){
									var goodInfo = encodeURIComponent( JSON.stringify(res.data.goodinfo) )
									var modelInfo= encodeURIComponent( JSON.stringify(res.data.modelList) )
									uni.navigateTo({
										url: '/pages/component/audio/goodDetail/goodDetail?goodInfo=' + goodInfo + '&modelInfo=' + modelInfo 
									})
								} else {
									uni.showToast({ title: '获取商品信息失败！', icon:'none', duration: 2000 });
								}
							}
						});
						
					}
				});
			},
		}
	}
</script>

<style>

</style>
