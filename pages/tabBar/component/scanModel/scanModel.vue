<template>
	<view style="width: 100%;height: 100%;">
		<image src="/static/model_bg.png" 
			style="position: absolute;top:0px;left:0px; width:100%; 
			min-height:100%;border-top: 1px solid #EEEEEE;">
		</image>
		
		<view style="position: absolute;bottom:0px;left:0px;right: 0px;">
			<view style="position: relative;text-align: center;" @click="GoScan">
				<img src="/static/circleBg.png" 
					style="width: 177px;height: 177px;margin-bottom: 110px;">
				</img>
				<view style="position: absolute; top: 50px; width: 100%;height: 59px;">
					<img src="/static/scan.png" 
						style="left: 60px; top: 50px; width: 59px;height: 59px;">
					</img>
				</view>
				<div class="uni-h4" 
					style="letter-spacing: 2px; position: absolute;width: 100%; top: 110px;color: #fff;">
					扫描二维码
				</div>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			GoScan() {
				
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						
						
						uni.navigateTo({
							url: "/pages/tabBar/component/modelPage/modelPage"
						})
						
						// uni.request({
						// 	url: 'https://feiwuar.goho.co/pay/queryGoodsInfos',
						// 	data: {
						// 		goods_no: goods_no
						// 	},
						// 	method:"GET",
						// 	header: {
						// 		'content-type': 'application/x-www-form-urlencoded', 
						// 	},
						// 	success: (res) => {
						// 		console.log("queryGoodsInfos=", res.data);
						// 		if( res.data.code=="0000" ){
						// 			var goodInfo = encodeURIComponent( JSON.stringify(res.data.goodinfo) )
						// 			var modelInfo= encodeURIComponent( JSON.stringify(res.data.modelList) )
						// 			uni.navigateTo({
						// 				url: '/pages/component/audio/goodDetail/goodDetail?goodInfo=' + goodInfo + '&modelInfo=' + modelInfo 
						// 			})
						// 		} else {
						// 			uni.showToast({ title: '获取商品信息失败！', icon:'none', duration: 2000 });
						// 		}
						// 	}
						// });
						
					}
				});
			},
		}
	}
</script>

<style>

</style>
