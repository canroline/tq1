<template>
	<view style="background: #EFEFF3;height: 100%;">
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" 
                @scroll="scroll"> -->
		<view v-if="goodInfo.goods_title" style="height: 500px;background: #fff;">
			<uni-swiper-dot :info="goodInfo.goods_img_Arr" :current="current" field="content" mode="indexes">
				<swiper class="swiper-box" style="height: 420px;" @change="change">
					<swiper-item v-for="(item,index) in goodInfo.goods_img_Arr" :key="index">
						<view class="swiper-item">
							
							<video v-if="item.indexOf('.mp4')>-1" 
								id="myVideo" 
								style="width:100%;height: 385px;"
								:src="item"
								@error="videoErrorCallback" 
								controls>
							</video>
							<image v-else :src="item" style="width:100%;height: 385px;"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
			<view style="padding: 0px 15px;">
				<text style="font-size: 12pt;"> {{ goodInfo.goods_title }} </text>
			</view>
			<view style="padding: 0px 15px;">
				<text style="color: #CE3C39;"> ¥{{ goodInfo.goods_price }}  </text>
			</view>
			<view class="uni-flex" style="padding: 0px 15px;">
				<text style="color: #6C6C6C;font-size: 11px;text-decoration: line-through;"> 
					{{ goodInfo.base_price }} 
				</text>
				<text style="color: #6C6C6C;font-size: 11px;padding-left: 10px;"> 
					库存：{{ goodInfo.good_stock }} 
				</text>
			</view>
		</view>
		
		<view class="uni-flex uni-row" style="width: 100%;padding: 5px;background: #fff;margin-top: 10px;">
			<view class="flex-item " style="flex: 1;text-align: center;padding: 5px 0px;"
				@click="activeTab=1">
				<span>详情</span>
				<div v-if="activeTab==1" style="position: relative;left: 40%; width:20%; border: 1px solid #CE3C39;"></div>
			</view>
			<view class="flex-item " style="flex: 1;text-align: center;padding: 5px 0px;"
				@click="getTjGoods">
				推荐
				<div v-if="activeTab==2" style="position: relative;left: 40%; width:20%; border: 1px solid #CE3C39;"></div>
			</view>
		</view>
		
		<view v-if="activeTab==1">
			<div style="color: #999;text-align: center;width: 100%;font-size: 13px;padding: 10px 0px;"> 
				-------------商品介绍-------------
			</div>
			
			<view style="background: #fff;align-items: center;padding: 10px;height: 460px;" >
				<!-- <image v-for="item in goodInfo.img_list_Arr" :key="item" :src="item"
				 style="width: 100%;height: 300px;">
				</image> -->
				
				<!-- goodInfo.img_list_Arr=={{ goodInfo.img_list_Arr }} -->
				
				<uni-swiper-dot :info="goodInfo.img_list_Arr" :current="d_current" 
					field="content" mode="indexes">
					<swiper class="swiper-box"  style="height: 420px;" @change="change_d">
						<swiper-item v-for="(d_item) in goodInfo.img_list_Arr" :key="d_item">
							<view class="swiper-item">
								<image :src="d_item" style="width:100%;height: 385px;"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				
				
			</view>
			
		</view>
		
		<view v-if="activeTab==2">
			<div style="color: #999;text-align: center;width: 100%;font-size: 13px;padding: 10px 0px;"> 
				-------------看了又看-------------
			</div>
			<view style="background: #fff;align-items: center;padding: 10px;height: 460px;" >
				<template v-for="line in TjData">
					<view class="uni-flex uni-row"  >
						<template v-for="item in line">
							<view @click="getGoodDetailInfo(item.goods_no)"
								style="flex: 1;height: 200px;margin-top: 10px;padding: 2px;" >
								<image :src="item.small_img" style="width: 100%; height: 140px;"></image>
								<div> {{item.goods_title}} </div>
								<div style="color: #DC7004;"> ¥ {{item.goods_price}}</div>
							</view>
						</template>
					</view>
				</template>
				
				
			</view>
		</view>
		
		
		
		<view class="uni-flex" 
			style="width: 100%;height: 50px; background: #F2F2F2; align-items: center;
			position: fixed;bottom: 0px;left: 0px;">
			<view class="uni-flex uni-column" @click="GoHome"
				style="font-size: 10px;padding-left: 20px;">
				<img src="/static/home2.png" style="width: 20px;height: 20px;"></img>
				首页 
			</view>
			<!-- <uni-badge text="1" type="purple" size="small"> -->
			<view class="uni-flex uni-column" @click="GoBag"
				style="font-size: 10px;margin: 0px 20px;position: relative;">
				<img src="/static/shopBag.png" style="width: 20px;height: 20px;"></img>
				购物车
				<uni-badge :text="bagCount" type="error" size="small" 
					style="position: absolute;left: 15px;top: 0px;"> 
				</uni-badge>
			</view>
			
			<!-- <view>
				<span style="color: #CE3C39;"> [ {{ bagCount }} ] </span>
			</view> -->
			
			
			<view @click="openModel(0)" class="uni-flex" 
				style="background: #DC7004;height: 100%;flex: 1;color: #fff;font-size: 15px;
					align-items: center;justify-content: center;">
				加入购物车
			</view>
			
			<view class="uni-flex" @click="openModel(1)"
				style="background: #CE3C39; height: 100%;flex: 1;color: #fff;font-size: 15px;
					align-items: center;justify-content: center;">
				立即购买
			</view>
		</view>
		
	
		
		<uni-popup :show="isShowModel" position="bottom" @hidePopup="closePopup('')">
			<view style="display: block;height: 330px;width: 100%;">
				<view  @click="closePopup" style="width: 100%; text-align: right;margin-top: 10px;margin-left: -10px;">
					 <icon type="clear" size="26"/>
				</view>
				<view class="uni-flex uni-column" style="align-items: flex-start;padding:20px;">
					<view style="font-size:18px;color:#333333;">规格</view>
					<radio-group @change="radioChange" class="uni-flex">
						<!-- class="uni-list-cell uni-list-cell-pd" -->
						<label  v-for="(item, index) in modelInfo" :key="item.goods_model">
							<view>
								<radio :value="item.goods_model" :checked="index == current" />
							</view>
							<view>{{item.goods_model}}</view>
						</label>
					</radio-group>
				</view>
				<view style="border-bottom-style:dashed;color: #e6e6e6;margin: 5px 20px;"></view>
				<view class="uni-flex" style="padding: 20px;">
					<view style="font-size:18px;color:#333333;">购买数量</view>
					<!-- buyCount=={{ buyCount }} -->
					<uni-number-box ref="numBox" style="flex: 1;text-align: right;" 
						min="1" max="9"  @change="changeNum"
						:value="buyCount" >
					</uni-number-box>
				</view>
				<view style="width: 100%;text-align: center;">
					<button type="warn" style="width: 80%;" @click="addBag"> 
						确认
					</button>
				</view>
				
				
				
				<!-- <view>
					<view v-for="(item, index) in bottomData" :key="index" >
						<view :class="item.name" >
							<text class="icon">{{ item.icon }}</text>
						</view>
						<view >{{ item.text }}</view>
					</view>
				</view> -->
				<!-- <view  @click="closePopup('')">取消分享</view> -->
			</view>
		</uni-popup>
	
	<!-- </scroll-view> -->
		
	</view>
</template>

<script>
	import {uniSwiperDot} from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	
	export default {
		components:{
			uniSwiperDot, uniBadge, uniPopup, uniNumberBox,
		},
		data() {
			return {
				goodInfo: {},
				modelInfo: [],
				current: 0,
				d_current: 0,
				bagCount: this.$store.state.orderCarList.length || 0, //购物车种类
				buyCount: 1,
				isShowModel: false, 
				// model_checked: null,
				cur_handle:-1, // 【0】加入购物车 【2】立即购买
				activeTab: 1,
				TjData:[],//推荐数据
				// scrollTop: 0,
				// old: {
				// 	scrollTop: 0
				// }
			}
		},
		onLoad(data) {
			console.log("onLoad=", data )
			this.modelInfo = JSON.parse(decodeURIComponent(data.modelInfo)) // [{"goods_model":"A"},{"goods_model":"B"}] //
			let goodInfo = JSON.parse(decodeURIComponent(data.goodInfo))
            console.log("onLoad modelInfo, goodInfo=", this.modelInfo , goodInfo )
			this.goodInfo = goodInfo
			// this.goodInfo.img_list_Arr = goodInfo.img_list.split(",")
			// this.goodInfo.goods_img_Arr = goodInfo.goods_img.split(",")
			this.initPage()
        },
		onShow() {
			uni.$on('updateBag', (data)=>{
				this.bagCount = this.$store.state.orderCarList.length || 0
			})
		},
		methods: {
			initPage(){
				this.goodInfo.img_list_Arr = this.goodInfo.img_list.split(",")
				this.goodInfo.goods_img_Arr = this.goodInfo.goods_img.split(",")
				this.current = 0
				this.d_current = 0
			},
			change(e) {
				this.current = e.detail.current
			},
			change_d(e) {
				console.log("chage d =", e)
				this.d_current = e.detail.current
			},
			changeNum( val ) {
				if(val<1) return
				this.flag = val>= this.buyCount ? 1 : 2
				this.buyCount = val
			},
			GoHome() {
				// uni.navigateTo({
				// 	url: '/pages/tabBar/component/component' 
				// })
				uni.reLaunch({ url: '/pages/tabBar/component/component'});
			},
			GoBag() {
				uni.navigateTo({
					url: '/pages/component/audio/shopBag/shopBag'  
				})
				
			},
			radioChange(evt) {
				for (let i = 0; i < this.modelInfo.length; i++) {
					if (this.modelInfo[i].goods_model === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			closePopup(){
				this.isShowModel = false 
			},
			openModel( handleIndex ) {
				console.log("openModel")
				this.isShowModel = true
				this.cur_handle = handleIndex
				this.buyCount = 1
				this.$refs.numBox.set
			},
			videoErrorCallback(){
				uni.showToast({ title: '视频加载出错！', icon:'none', duration: 2000 });
			},
			addBag() {
				if( this.cur_handle==1 ){
					let data = this.goodInfo
					data.goods_model = this.modelInfo[this.current].goods_model
					data.goods_num = this.buyCount 
					data.flag = 1
					uni.showLoading({
						title:"支付中..."
					})
					this.$store.dispatch("payGood", data).then( res => {
						console.log("立即购买 成功=", res )
						this.wxPayData = res
						this.GoWXPay()
					}).catch (err => {
						console.log("立即购买 失败=", err )
						uni.hideLoading()
					})
					
					return 
				} 
				
				console.log("cur_handle=", this.cur_handle )
				
				if(Number(this.buyCount) > Number(this.goodInfo.good_stock) ){
					uni.showToast({ title: '您购买数量超过库存！', icon:'none', duration: 2000 });
					return
				}
				uni.showLoading({
					title: '添加中'
				});
				let request_params = {
					goods_no: this.goodInfo.goods_no,
					goods_model: this.modelInfo[this.current].goods_model,
					goods_num: this.buyCount ,
					goods_name: this.goodInfo.goods_name,
					openid: this.$store.state.sysOpenid,
					goods_price: this.goodInfo.goods_price,
					flag: this.flag
				}
				this.$store.dispatch( "addBag", request_params ).then( res => {
					if(res.code==0){
						
					}
					this.closePopup()
					uni.hideLoading()
					if( this.cur_handle==1 ){
						this.GoBag()
					}
				}).catch ( err =>{
					
				})
			},
			// scroll: function(e) {
			// 	console.log(e)
			// 	this.old.scrollTop = e.detail.scrollTop
			// },
			// goTop: function(e) {
			// 	this.scrollTop = this.old.scrollTop
			// 	this.$nextTick(function() {
			// 		this.scrollTop = 0
			// 	});
			// 	uni.showToast({
			// 		icon:"none",
			// 		title:"纵向滚动 scrollTop 值已被修改为 0"
			// 	})
			// },
			getGoodDetailInfo(goods_no){
				this.activeTab = 1
				// this.goTop()
				let host_url = this.$store.state.host_url
				uni.request({
					url: host_url + '/pay/queryGoodsInfos',
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
							this.modelInfo = res.data.modelList
							this.goodInfo  = res.data.goodinfo
							this.initPage()
							// var goodInfo = encodeURIComponent( JSON.stringify(res.data.goodinfo) )
							// var modelInfo= encodeURIComponent( JSON.stringify(res.data.modelList) )
							// uni.navigateTo({
							// 	url: '/pages/component/audio/goodDetail/goodDetail?goodInfo=' + goodInfo + '&modelInfo=' + modelInfo 
							// })
						} else {
							uni.showToast({ title: '加载商品详细信息失败！', icon:'none', duration: 2000 });
						}
					}
				});
			},
			getTjGoods() {
				this.activeTab=2
				let host_url = this.$store.state.host_url
				uni.request({
					url: host_url + '/pay/queryTjGoodInfos',
					data: {
						goods_no: this.goodInfo.goods_no,
						good_type: this.goodInfo.good_type
					},
					method:"GET",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("queryTjGoodInfos=", res.data);
						if( res.data.code=="0000" ){
							let goodinfos = res.data.goodinfos
							this.TjData = []
							for(let i=0; i<goodinfos.length;){
								let temp = []
								temp.push( goodinfos[i] )
								if( goodinfos[i+1] ){
									temp.push( goodinfos[i+1] )
								}
								this.TjData.push(temp)
								i = i + 2
							}
							console.log("TjData=", this.TjData);
							
							// var goodInfo = encodeURIComponent( JSON.stringify(res.data.goodinfo) )
							// var modelInfo= encodeURIComponent( JSON.stringify(res.data.modelList) )
							// uni.navigateTo({
							// 	url: '/pages/component/audio/goodDetail/goodDetail?goodInfo=' + goodInfo + '&modelInfo=' + modelInfo 
							// })
						} else {
							uni.showToast({ title: '获取推荐失败！', icon:'none', duration: 2000 });
						}
					}
				});
			},
			GoWXPay() {
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
						let page_url = "/pages/component/audio/shopBag/PayPage/PayPage?payCode="
						uni.redirectTo({
							url: page_url + 0 + '&msg=' + res.errMsg
						})
						this.$store.dispatch("getBagList")//重新初始化购物车
					},
					fail:  (res)=> {
						console.log('GoWXPay fail:' + JSON.stringify(res));
						uni.hideLoading()
						let page_url = "/pages/component/audio/shopBag/PayPage/PayPage?payCode="
						uni.redirectTo({
							url: page_url + 1 + '&msg=' + res.errMsg 
						})
						this.$store.dispatch("updateStock", this.wxPayData.order_no)
					}
				});
				
			},
		}
	}
</script>

<style>
	/* 弹出层形式的广告 */
	.uni-banner {
		width: 70%;
		position: fixed;
		left: 15%;
		margin-top: -400upx;
		z-index: 99;
	}
	.uni-mask{
		 z-index: 1;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.active-tab{
		color: red;
	}

</style>
