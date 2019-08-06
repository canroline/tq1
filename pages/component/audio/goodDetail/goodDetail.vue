<template>
	<view style="background: #EFEFF3;height: 100%;">
		<view style="height: 270px;background: #fff;">
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change">
					<swiper-item v-for="(item ,index) in good.pics" :key="index">
						<view class="swiper-item">
							<image :src="item.path" style="width:100%;height: 150px;"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
			<view style="padding: 5px 10px;">
				<text style="font-size: 12pt;"> {{ good.title }} </text>
			</view>
			<view style="padding: 5px 10px;">
				<text style="color: #CE3C39;"> ¥{{ good.newPrice }}  </text>
			</view>
			<view class="uni-flex" style="padding: 0px 10px;">
				<text style="color: #6C6C6C;font-size: 11px;text-decoration: line-through;"> 
					{{ good.Price }} 
				</text>
				<text style="color: #6C6C6C;font-size: 11px;padding-left: 10px;"> 
					库存：{{ good.hasNum }} 
				</text>
			</view>
		</view>
		
		<div style="color: #999;text-align: center;width: 100%;font-size: 15px;padding: 10px 0px;"> 
			-------------商品介绍---------------
		</div>
		
		<view style="background: #fff;" >
			<image v-for="i in 3" :key="i" :src=" '/static/c' + (i+1) + '.png' "
			 style="width: 80%;height: 100px;">
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
			<view class="uni-flex uni-column" 
				style="font-size: 10px;margin: 0px 20px;">
				<img src="/static/shopBag.png" style="width: 20px;height: 20px;"></img>
				购物车
			</view>
			
			<view class="uni-flex" 
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
		
	</view>
</template>

<script>
	import {uniSwiperDot} from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
	export default {
		components:{
			uniSwiperDot
		},
		data() {
			return {
				good:{
					title: 'qina亓那眼镜迪丽热巴同款太阳镜 女圆脸墨镜防紫外线',
					newPrice: 299,
					Price: 399,
					hasNum: 568,
					pics:[{
							content: '详情 A',
							path: '/static/shuijiao.jpg'
						}, {
							content: '详情 B',
							path: '/static/c2.png'
						}, {
							content: '详情 C',
							path: '/static/c3.png'
					}],
				},
				current: 0,
				mode: 'long',
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
