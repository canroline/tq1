(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/save-media/save-media"],{"594b":function(e,t,a){"use strict";var o=a("8faa"),n=a.n(o);n.a},"86f6":function(e,t,a){"use strict";a.r(t);var o=a("ffca"),n=a("90d7");for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);a("594b");var c=a("2877"),s=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},"8a7e":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"saveImage/saveVideo",imagePath:"",videoPath:""}},onLoad:function(){},methods:{videoErrorCallback:function(t){e.showModal({content:t.target.errMsg,showCancel:!1})},saveImage:function(){var t=this;e.chooseImage({count:1,sourceType:["camera"],success:function(e){t.imagePath=e.tempFilePaths[0],t.getTempFilePath(e.tempFilePaths[0],"imageTempPath")}})},saveVideo:function(){var t=this;e.chooseVideo({count:1,sourceType:["camera"],success:function(e){console.log(e.tempFilePath),t.videoPath=e.tempFilePath,t.getTempFilePath(e.tempFilePath,"videoTempPath")}})},getTempFilePath:function(t,a){var o={filePath:t,success:function(){console.log("save success"),e.showModal({content:"保存成功",showCancel:!1}),e.hideLoading()},fail:function(t){e.hideLoading(),e.showModal({content:"保存失败",showCancel:!1})}};e.showLoading({title:"保存中..."}),"videoTempPath"===a?e.saveVideoToPhotosAlbum(o):e.saveImageToPhotosAlbum(o)}}};t.default=a}).call(this,a("543d")["default"])},"8faa":function(e,t,a){},"90d7":function(e,t,a){"use strict";a.r(t);var o=a("8a7e"),n=a.n(o);for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);t["default"]=n.a},ffca:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},n=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n})}},[["6d0f","common/runtime","common/vendor"]]]);