<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			// 检测升级
			uni.request({
				url: 'https://uniapp.dcloud.io/update', //检查更新的服务器地址
				data: {
					appid: plus.runtime.appid,
					version: plus.runtime.version,
					imei: plus.device.imei
				},
				success: (res) => {
					console.log('success', res);
					if (res.statusCode == 200 && res.data.isUpdate) {
						let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
						// 提醒用户更新
						uni.showModal({
							title: '更新提示',
							content: res.data.note ? res.data.note : '是否选择更新',
							success: (showResult) => {
								if (showResult.confirm) {
									plus.runtime.openURL(openUrl);
								}
							}
						})
					}
				}
			})
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			uni.showLoading({
				title:'程序初始化中...'
			})
			// this.initIP()
			this.InitOpenId()
			// uni.reLaunch({ url: '/pages/tabBar/component/component'});
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			initIP(){
				uni.request({
					url: 'http://pv.sohu.com/cityjson?ie=utf-8',
					dataType: "script", 
					method:"GET",
					header: {
						'content-type': 'application/json',  
					},
					success: (res) => {
						uni.hideLoading()
						console.log("获取IP=", res )
						console.log( "data=", res.data,  res.data.split(" = ")[1] )
						this.$store.state.IPData = JSON.parse( res.data.split(" = ")[1].replace(";","") )
						console.log( "APP IPData=", this.$store.state.IPData ) 
					},
					fail: res =>{
						uni.hideLoading()
					}
				})
			},
			
			InitOpenId() {
				uni.getStorage({
					key: 'AROpenid',  
					success:  (res)=> {
						console.log("APP 获取本地保存的sysOpenid=", res.data);
						uni.hideLoading()
						if(res.data){
							this.$store.state.sysOpenid = res.data
						}else {
							this.getOpenId()
						}
					},
					fail:  (res)=> {
						this.getOpenId()
						uni.hideLoading()
					}
						
				});
			},
			
			getOpenId() {
				this.$store.dispatch("getUserOpenId").then( code =>{
					this.getSysOpenId( code ) 
				}).catch( err=>{ 
					uni.showToast({ title: '初始化用户信息失败！', icon:'none', duration: 2000 })
				})
			},
			
			getSysOpenId(code) {
				uni.request({
					url: 'https://feiwuar.goho.co/pay/getOpenId',
					data: { code },
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("getSysOpenId=", res.data );
						this.$store.commit("setSysOpenid", res.data.openid )
						console.log("系统自己的 sysOpenid=", this.$store.state.sysOpenid ); 
						uni.setStorage({
							key: 'AROpenid',
							data: res.data.openid,
							success: function () {
								console.log('保存openid成功！');
							}
						});
						
						// this.$store.dispatch("getBagList").then(  data=>{
						// 	console.log("获取购物车列表 getBagList=", data );
						// }).catch( err=> {
						// 	uni.showToast({ title: err, icon:'none', duration: 2000 });
						// })
					}
				})
			},
			
		},
	}
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}

	.uni-header-logo {
		padding: 30upx;
		text-align: center;
		margin-top: 10upx;
	}

	.uni-header-logo image {
		width: 140upx;
		height: 140upx;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}
    /* #endif*/
</style>
