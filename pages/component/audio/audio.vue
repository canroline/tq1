<template>
	<!-- <view> -->
		<!-- <page-head title="智能商超"></page-head> -->
		<view class="uni-flex uni-column" 
			style="height: 100%; background: #FFFFFF; 
			justify-content: flex-end;align-items: center;">
			<image src="/static/scanbg.png" 
				style="position: absolute;top:0px;left:0px; width:100%; height:60%;">
			</image>
			
			<view style="position: relative;" @click="GoScan">
				<img src="/static/circleBg.png" 
					style="width: 177px;height: 177px;margin-bottom: 110px;">
				</img>
				<img src="/static/scan.png" 
					style="position: absolute;left: 60px; top: 50px; width: 59px;height: 59px;">
				</img>
				<div class="uni-h4" 
					style="letter-spacing: 2px; position: absolute;left: 52px; top: 110px;color: #fff;">
					扫码购物
				</div>
			</view>
			
			<view class="uni-flex" 
				style="position: absolute;left: 0px;bottom: 0px;width: 100%;">
				<view class="uni-flex uni-column" 
					style="flex: 1;align-items: center;font-size: 10px;">
					<img src="/static/home.png" style="width: 25px;height: 25px;"></img>
					首页 
				</view>
				
				<view class="uni-flex uni-column" @click="GoBag"
					style="flex: 1; align-items: center;font-size: 10px;">
					<img src="/static/shopBag.png" style="width: 25px;height: 25px;"></img>
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
				},
				host_url: this.$store.state.host_url
			}
		},
		methods: {
			GoBag() {
				uni.navigateTo({
					url: '/pages/component/audio/shopBag/shopBag'  
				})
				
			},
			GoScan() {
				let host_url = this.host_url
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