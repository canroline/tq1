<template>
	<view class="uni-flex uni-column" style="height: 100%;">
		
		<image src="/static/bg.png" 
			style="position: absolute;top:0px;left:0px; width:100%; min-height:100%;">
		</image>
		
		<view class="uni-flex" 
			style="background:#F5F5F5; color: #333333;letter-spacing: 1px;
			position: absolute;bottom:0rpx;left:0px;justify-content: center;width: 100%;padding: 8px 0px;">
			@南京飞屋信息科技有限公司
		</view>
		
		<view class="uni-flex uni-column" style="justify-content: center;height: 100%;padding: 20px;margin-top: -80px;">
			
			<button class="primary-btn" 
				style="background: linear-gradient(to right, #3A7CF6 , #55A7F8);" >
				AR冷链物流车
			</button>
			
			<button class="primary-btn" @click="goDetailPage('audio')"
				style="background: linear-gradient(to right, #3A7CF6 , #55A7F8);" >
				智能商超
			</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				imageURL: '/static/bg.png',
			}
		},
		onShow(){
			console.log("HOME onShow！！！");
			uni.getStorage({
				key: 'AROpenid',  
				success:  (res)=> {
					console.log("获取本地保存的sysOpenid=", res.data);
					if(res.data){
						this.$store.state.sysOpenid = res.data
						this.$store.dispatch("getBagList").then(  data=>{
							console.log("获取购物车列表 getBagList=", data );
							if(data=='0000') {
								this.$store.state.orderCarList = data.orderCarList
							}
						}).catch( err=> {
							uni.showToast({ title: err, icon:'none', duration: 2000 });
						})
					}else {
						this.$store.dispatch("getUserOpenId").then( code =>{
							this.getOpenId( code ) 
						}).catch( err=>{ 
							uni.showToast({ title: '初始化用户信息失败！', icon:'none', duration: 2000 });
						})
					}
						
				},
				fail:  (res)=> {
					this.$store.dispatch("getUserOpenId").then( code =>{
						this.getOpenId( code ) 
					}).catch( err=>{ 
						uni.showToast({ title: '初始化用户信息失败！', icon:'none', duration: 2000 });
					})
				}
					
			});
			
		},
		onShareAppMessage() {  
			return {
				title: '欢迎体验AR1资源仿真平台',
				path: '/pages/tabBar/component/component'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '/pages/about/about'
			});
		},
		methods: {
			getOpenId(code) {
				uni.request({
					url: 'https://feiwuar.goho.co/pay/getOpenId',
					data: {
						code
					},
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("getOpenId=", res.data );
						this.$store.commit("setSysOpenid", res.data.openid )
						console.log("系统自己的 sysOpenid=", this.$store.state.sysOpenid ); 
						uni.setStorage({
							key: 'AROpenid',
							data: res.data.openid,
							success: function () {
								console.log('保存openid成功！');
							}
						});
						
						this.$store.dispatch("getBagList").then(  data=>{
							console.log("获取购物车列表 getBagList=", data );
						}).catch( err=> {
							uni.showToast({ title: err, icon:'none', duration: 2000 });
						})
						
					}
				});
			},
			triggerCollapse(e) {
				if (!this.lists[e].pages) {
					this.goDetailPage(this.lists[e].url);
					return;
				}
				for (var i = 0; i < this.lists.length; ++i) {
					if (e === i) {
						this.lists[i].open = !this.lists[e].open;
					} else {
						this.lists[i].open = false;
					}
				}
			},
			goDetailPage(e) {
				// pages/tabBar/API/API 
				
				// uni.request({
				// 	
				// 	url: 'http://tqlovewh66.hicp.net/gs_h5/pay/queryGoodsInfos?goods_no=P2019080320125301',//http://tqshopbest.cn/gs_h5/pay/queryGoodsInfos', 
				// 	// data: {
				// 	// 	goods_no: 'P2019080320125301'
				// 	// },
				// 	// method:"POST",
				// 	// header: {
				// 	// 	'content-type': 'application/x-www-form-urlencoded', 
				// 	// },
				// 	success: (res) => {
				// 		console.log(res.data);
				// 		// this.text = 'request success';
				// 	}
				// });
				
				
				
				if (typeof e === 'string') {
					uni.navigateTo({
						url: '/pages/component/' + e + '/' + e
					})
				} else {
					uni.navigateTo({
						url: e.url
					})
				}
			}
		}
	}
</script>

<style>
	/* page {
		height: auto;
		min-height: 100%;
	} */
	
	.primary-btn{
		margin: 20px 0px;
		background-repeat: no-repeat; 
		background-size: 100% 100%; 
		color:#fff;
	}
	.primary-btn:hover{
		color: #f5f5f5;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}
</style>
