<template>
	<view style="background: #EFEFF3;height: 100%;">
		<view v-if="goodInfo.goods_title" style="height: 370px;background: #fff;">
			<uni-swiper-dot :current="current" field="content" mode="indexes">
				<swiper style="height: 290px;">
					<swiper-item v-for="(item,index) in goodInfo.goods_img_Arr" :key="index">
						<view class="swiper-item">
							<image :src="item" style="width:100%;height: 280px;"></image>
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
		
		<div style="color: #999;text-align: center;width: 100%;font-size: 15px;padding: 10px 0px;"> 
			-------------商品介绍---------------
		</div>
		
		<view class="uni-flex uni-column" style="background: #fff;align-items: center;" >
			<image v-for="item in goodInfo.img_list_Arr" :key="item" :src="item"
			 style="width: 100%;height: 300px;">
			</image>
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
			<view class="uni-flex uni-column" 
				style="font-size: 10px;margin: 0px 20px;">
				<img src="/static/shopBag.png" style="width: 20px;height: 20px;"></img>
				购物车
			</view>
			<view>
				<span style="color: #CE3C39;"> [ {{ bagCount }} ] </span>
			</view>
			<!-- </uni-badge> -->
			
			<view @click="openModel" class="uni-flex" 
				style="background: #DC7004;height: 100%;flex: 1;color: #fff;font-size: 15px;
					align-items: center;justify-content: center;">
				加入购物车
			</view>
			
			<view class="uni-flex" 
				style="background: #CE3C39; height: 100%;flex: 1;color: #fff;font-size: 15px;
					align-items: center;justify-content: center;">
				立即购买
			</view>
		</view>
		
		
		
		<!-- <uni-popup :show="isShowModel" ref="popup" type="bottom"
			mode="fixed"
			style="height: 500px; width: 100%;">
			
			<view style="height: 100%; background: #fff;width: 100%;">
				弹出层示例123213
				<button @click="closePopup">关闭弹出层</button>     
			</view>
			
		</uni-popup> -->
		
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
					<uni-number-box style="flex: 1;text-align: right;" :min="1" :max="9"  value="buyCount" >
					</uni-number-box>
				</view>
				<view style="width: 100%;text-align: right;">
					<button type="warn" plain="true" @click="addBag">
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
				bagCount: this.$store.state.orderCarList.length || 0, //购物车种类
				buyCount: 1,
				isShowModel: false, 
				model_checked: null,
			}
		},
		onShow(data) {
			this.modelInfo = JSON.parse(decodeURIComponent(data.modelInfo)) // [{"goods_model":"A"},{"goods_model":"B"}] //
			let goodInfo = JSON.parse(decodeURIComponent(data.goodInfo))
            console.log("onShow data=", data , goodInfo )
			this.goodInfo = goodInfo
			this.goodInfo.img_list_Arr = goodInfo.img_list.split(",")
			this.goodInfo.goods_img_Arr = goodInfo.goods_img.split(",")
			this.model_checked =  this.modelInfo[0].goods_model
			
        },
		methods: {
			radioChange(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			closePopup(){
				this.isShowModel = false 
			},
			openModel() {
				this.isShowModel = true
			},
			addBag() {
				// TODO: goodInfo.good_stock 库存是0判断
				let request_params = {
					goods_no: this.goodInfo.goods_no,
					goods_model: this.modelInfo[this.current].goods_model,
					goods_num: buyCount ,
					goods_name: this.goodInfo.goods_name,
					openid: this.$store.state.sysOpenid,
					goods_price: this.goodInfo.goods_price
				}
				uni.request({
					url: 'https://feiwuar.goho.co/pay/addOrderCar', 
					data: request_params,
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded', 
					},
					success: (res) => {
						console.log("addBag=",request_params, res.data);
						if( res.data.code=="0000" ){
							this.bagCount = this.bagCount + 1
							this.$store.dispatch("getBagList").then( res=> {
								this.bagCount = this.$store.state.orderCarList.length || 0
							})
							this.closePopup()
						} else {
							uni.showToast({ title: '添加购物车失败！', icon:'none', duration: 2000 });
						}
					}
				});
				
			}
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

</style>
