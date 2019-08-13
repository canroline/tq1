import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



//修改之后的加法
  let  Add = (arg1, arg2) => {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
  }
  
  //修改之后的减法
  let Minus = (arg1, arg2) => {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  }
  //修改之后的乘法
  let Multiply = (arg1, arg2) => {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
  }
  //修改之后的除法
  let Division = (arg1, arg2) => {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    // with (Math) {
      r1 = Number(arg1.toString().replace(".", ""))
      r2 = Number(arg2.toString().replace(".", ""))
      return (r1 / r2) * Math.pow(10, t2 - t1);
    // }
  }


const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		sysOpenid: null, //系统openid
		orderCarList: [], //购物车列表
		IPData: {cip:''}, //IP
		Add,Minus,Multiply,Division 
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setSysOpenid(state, openid) {
			state.sysOpenid = openid
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function ({commit,	state}) {
			console.log("call getUserOpenId>>")
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						provider: 'weixin', 
						success: (data) => {
							console.log("微信获取login success=", data )
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = data.code
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000) 
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		getBagList: async function ({commit, state}) {
				return await new Promise((resolve, reject) => {
					let openid = state.sysOpenid
					uni.request({
						url: 'https://feiwuar.goho.co/pay/queryOrderCar',
						data: {
							openid
						},
						method:"POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						success: (res) => {
							console.log("getBagList=", res.data);
							if( res.data.code=="0000" ){
								res.data.orderCarList.forEach( item => {
									item.checked = true
								})
								state.orderCarList = res.data.orderCarList
								setTimeout(function () { //模拟异步请求服务器获取 openid
									resolve(res.data.orderCarList)
								}, 1000)
							} else {
								reject('获取购物车信息失败！')
							}
						}
					});
				})
		},
		
		addBag: async function ({commit, state, dispatch}, data ) {
				if( !data.openid ){
					uni.showToast({ title: '用户未初始化，请退出重新登录！', icon:'none', duration: 3000 });
					return 
				}
			
				return await new Promise((resolve, reject) => {
					uni.request({
						url: 'https://feiwuar.goho.co/pay/addOrderCar', 
						data,
						method:"POST", 
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						success: (res) => {
							console.log("addBag=",data, JSON.stringify( data ), res);
							uni.hideLoading(); 
							if( res.data.code=="0000" ){
								resolve( {code:0, stock: res.data.stock})
								dispatch("getBagList").then( res=>{
									uni.$emit('updateBag', res)
								})
							} else {
								reject( {code:1, msg: res.data.msg || '添加购物车失败！', stock: res.data.stock } )
								setTimeout( ()=>{
									uni.showToast({ title: res.data.msg || '添加购物车失败！', icon:'none', duration: 3000 })
								}, 500)
							}
						},
						fail: ( err ) => {
							reject( {code:1, msg: '添加购物车异常！', stock: res.data.stock } )
							setTimeout( ()=>{
								uni.showToast({ title: '添加购物车异常', icon:'none', duration: 3000 })
							}, 500)
						}
					});
				})
		},
		
		payGood: async function ({commit, state, dispatch}, data ) { //立即购买
				let openid = state.sysOpenid
				if( !openid ){
					uni.showToast({ title: '用户未初始化，请退出重新登录！', icon:'none', duration: 3000 });
					return 
				}
				
				let price = 0.1 // data.sumMoney
				let allList = []
				let _d = {
					"good_num":data.goods_num, 
					"good_no": data.goods_no, 
					"amt": data.goods_price, 
					"good_name": data.goods_name, 
					"good_model": data.goods_model, 
				}
				// if(data.flag){
				// 	_d.flag = data.flag
				// }
				let flag = data.flag ? data.flag : -1
				allList.push( _d )
				console.log(" allList =", allList )
				return await new Promise((resolve, reject) => {
					uni.request({
						url: 'https://feiwuar.goho.co/pay/wxArPayOrder',
						data: {
							openid, 
							price, 
							flag,
							allList: JSON.stringify( allList ), 
							// ip: state.IPData.cip
						},
						method:"POST",
						header: {
							'content-type': 'application/x-www-form-urlencoded', 
						},
						success: (res) => {
							console.log("付钱 pay=", res, openid, price, allList );
							if( res.statusCode==200 && res.data.code=='0000' ){
								resolve( res.data )
							} else {
								uni.showToast({ title: res.data.msg || '创建订单失败！', icon:'none', duration: 2000 });
								reject( res.data )
							}
						}
					});
				})
		},
		updateStock: async function ({commit, state, dispatch}, data ) {
			console.log("释放库存订单号=", data )
			return await new Promise((resolve, reject) => {
				uni.request({
					url: 'https://feiwuar.goho.co/pay/updateStock',
					data: {
						order_no: data
					},
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("释放库存 updateStock =", res );
					}
				});
			})
			
		},
	}
})

export default store
