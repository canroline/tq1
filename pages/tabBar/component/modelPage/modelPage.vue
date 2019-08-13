<template>
	<view>
		 <!-- <model-obj src="/static/LeePerrySmith.obj"></model-obj> -->
		 <!-- https://threejs.org/examples/#webgl_loader_obj2 -->
		 <!-- https://uniapp.dcloud.io/static/web-view.html -->
		 <web-view :webview-styles="webviewStyles" src="http://localhost:8080/#/manageUsers/userFund"></web-view>
	</view>
</template>

<script>
	// import { ModelObj } from 'vue-3d-model';
	export default {
		// components: { ModelObj }, 
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
