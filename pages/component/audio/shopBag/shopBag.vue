<template>
	<view>
		<scroll-view style="height: 70%;background: #EFEFF3;" scroll-y="true" >
			<view v-for="(item,index) in bagList" :key="index"
				class="uni-flex" 
				style="align-items: center; height: 85px;padding: 5px;
					background: #fff;margin-bottom: 7px;">
				<view style="flex: 1;padding-left: 20px;">
					<image src="/static/uni.png" style="width: 50px;height: 50px;">
					</image>
				</view>
				<view style="flex: 3;"> 
					 <text>  {{ item.title }} </text>
					 <div style="color:#BBBBBB;font-size: 12px;"> 
						规格：{{ item.kind || '--' }}
					 </div>
					 
					 <view class="uni-flex" style="align-items: center;justify-content: space-between;">
						 <div style="color: #CE3C39;font-size: 12px;">
							 ¥{{ item.price || 0 }}
						 </div>
						 <div></div>
						 <uni-number-box :min="0" :max="9"></uni-number-box>
					 </view>
				</view>
			</view>
		</scroll-view>
		
		<view class="uni-flex uni-column" 
			style="background: #fff; position: absolute;left: 0px;bottom: 0px;
			width: 100%;height: 100px;justify-content: flex-end;">
			<view class="uni-flex" style="align-items: baseline;">
				<view style="position: relative;padding-left: 20px;" @click="GoScan">
					<img src="/static/circleBg.png" 
						style="width: 59pt;height: 59pt;">
					</img>
					<img src="/static/scan.png" 
						style="position: absolute;left: 45px; top: 25px; 
						width: 29px;height: 29px;">
					</img>
				</view>
				<view style="margin-bottom: 10px;flex: 1;">
					合计：<text style="color: #CE3C39;"> ¥{{ sumMoney }}</text>
				</view>
				<button class="mini-btn" type="warn" 
					style="height: 30px; width: 80pt; right: 10px;
					font-size:13px;border-radius: 15px;margin-bottom: 10px;" >
					结算
				</button>
			</view>
		 
			<view class="uni-flex" style="width: 100%;">
				<view class="uni-flex uni-column" @click="GoHome"
					style="flex: 1;align-items: center;font-size: 10px;">
					<img src="/static/home2.png" style="width: 20px;height: 20px;"></img>
					首页 
				</view>
				<view class="uni-flex uni-column" 
					style="flex: 1; align-items: center;font-size: 10px;">
					<img src="/static/shopBag2.png" style="width: 20px;height: 20px;"></img>
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
				bagList:[
					{title: '女士眼镜', kind: 'A', price: 123},
					{title: '男士眼镜', price:  234},
					{title: '儿童眼镜', price: 567},
					{title: '老人眼镜'},
				],
				sumMoney: 299
			}
		},
		methods: {
			GoHome() {
				uni.navigateTo({
					url: '/pages/tabBar/component/component' 
				})
			},
		}
	}
</script>

<style>

</style>
