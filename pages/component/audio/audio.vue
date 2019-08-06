<template>
	<!-- <view> -->
		<!-- <page-head title="智能商超"></page-head> -->
		<view class="uni-flex uni-column" 
			style="height: 100%; justify-content: center;align-items: center;">
			<view style="position: relative;" @click="GoScan">
				<img src="/static/circleBg.png" 
					style="width: 177px;height: 177px;">
				</img>
				<img src="/static/scan.png" 
					style="position: absolute;left: 60px; top: 50px; width: 59px;height: 59px;">
				</img>
				<div class="uni-h4" 
					style="position: absolute;left: 50px; top: 115px;color: #fff;">
					扫码购物
				</div>
			</view>
			
			<view class="uni-flex" 
				style="position: absolute;left: 0px;bottom: 0px;width: 100%;">
				<view class="uni-flex uni-column" 
					style="flex: 1;align-items: center;font-size: 10px;">
					<img src="/static/home.png" style="width: 20px;height: 20px;"></img>
					首页 
				</view>
				
				<view class="uni-flex uni-column" @click="GoBag"
					style="flex: 1; align-items: center;font-size: 10px;">
					<img src="/static/shopBag.png" style="width: 20px;height: 20px;"></img>
					购物车
				</view>
			</view>
			
			
			
			<!-- <view class="uni-center">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author"
				    :action="audioAction" controls></audio>
			</view> -->
			
			<!-- <view>
				<camera mode="scanCode" device-position="back" flash="off" @error="error" 
					style="width: 100%; height: 300px;" @scancode="scancode"></camera>
				<button type="primary" @click="takePhoto">拍照</button>
				<view>预览</view>
				<image mode="widthFix" :src="src"></image>
			</view>
			
			<view class="uni-column" v-for="(value,index) in footBtns" :key="index">
				<icon :type="value" size="26"/>
				<text>{{value}}</text>
			</view> -->
	
		</view>
	<!-- </view> -->
</template>
<script>
	export default {
		data() {
			return {
				src: '',
				footBtns: ['info', 'warn'],
				current: {
					poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
				},
				audioAction: {
					method: 'pause'
				}
			}
		},
		methods: {
			GoBag() {
				uni.navigateTo({
					url: '/pages/component/audio/shopBag/shopBag'  
				})
				
			},
			GoScan() {
				uni.navigateTo({
					url: '/pages/component/audio/goodDetail/goodDetail'  
				})
				// uni.navigateTo({
				// 	url: '/pages/component/' + e + '/' + e
				// })
				uni.request({
					url: 'http://tqlovewh66.hicp.net/gs_h5/pay/queryGoodsInfos?goods_no=P2019080320125301',//http://tqshopbest.cn/gs_h5/pay/queryGoodsInfos', 
					// data: {
					// 	goods_no: 'P2019080320125301'
					// },
					// method:"POST",
					// header: {
					// 	'content-type': 'application/x-www-form-urlencoded', 
					// },
					success: (res) => {
						console.log(res.data);
						// this.text = 'request success';
					}
				});
			},
			 takePhoto() {
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
						console.log("res=", res)
						this.src = res.tempImagePath
					}
				});
			},
			error(e) {
				console.log(e.detail);
			},
			scancode(e) {
				console.log("scancode e=", e);
			}
		}
	}
</script>