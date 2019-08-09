import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		sysOpenid: null, //系统openid
		orderCarList: [], //购物车列表
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
	}
})

export default store
