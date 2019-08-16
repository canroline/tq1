<template>
	<view>
		 <!-- <model-obj :src="model_path"></model-obj> -->
		 <!-- https://threejs.org/examples/#webgl_loader_obj2 -->
		 <!-- https://uniapp.dcloud.io/static/web-view.html -->
		 <web-view :webview-styles="webviewStyles" 
		 src="https://feiwuar.goho.co/uploadFiles/threejs/jordan-click-to-spin.html"></web-view>
	</view>
</template>  

<!-- <script src="https://unpkg.com/vue-3d-model/dist/vue-3d-model.umd.js"></script> -->

<script>
	// import { ModelObj } from '@/components/vue-3D/vue-3d-model';
	// import { ModelObj } from 'vue-3d-model';
	// import package from 'packageName'
	// const ModelObj1 = require('vue-3d-model')
	export default {
		components: {
			// ModelObj    
		},
		data() {
			return {
				webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
				// model_path: 'static/model/LeePerrySmith.obj',
			}
		},
		onShow() {
			console.log("ModelObj=" )
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
