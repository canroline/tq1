<template>
	<view style="background: #EFEFF3;height: 100%;width: 100%;font-size: 20px;">
		<view class="uni-flex" style="height: 100%;width: 100%;justify-content: center;align-items: center;">
			<view v-if="payCode==0" class="uni-flex" style="align-items: center;margin-top: -20px;;">
				<icon type="success" size="36"/>
				<text style="color: #1AAD19;font-size: 30px;" > 支付成功  </text>
			</view>
			
			<view v-else class="uni-flex uni-column" style="width: 100%;height: 100%;align-items: center;">
				<image src="/static/cry.png" style="width: 200px; height: 200px;margin-top: 120px;">
				</image>
				<view class="uni-flex" style="align-items: center;margin-top: 40px;">
					<icon type="warn" size="40"/>
					<text style="color: #333333;font-size: 30px;"> 
						支付失败  
					</text>
				</view>
				<text v-if="errMSg" style="color: #CE3C39;font-size: 20px;"> 
					(错误码：{{ errMSg }})  
				</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payCode: -1,//【0】成功 【1】失败
				errMSg: ''
			}
		},
		onLoad(data) {
			this.payCode = data.payCode
			this.errMSg = data.msg
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
