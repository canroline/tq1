(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/file/file"],{"3e51":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},4272:function(t,e,n){"use strict";n.r(e);var a=n("50cb"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"50cb":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"saveFile",tempFilePath:"",savedFilePath:""}},onLoad:function(){this.savedFilePath=t.getStorageSync("savedFilePath")},methods:{chooseImage:function(){var e=this;t.chooseImage({count:1,success:function(t){e.tempFilePath=t.tempFilePaths[0]}})},saveFile:function(){var e=this;this.tempFilePath.length>0?t.saveFile({tempFilePath:this.tempFilePath,success:function(n){e.savedFilePath=n.savedFilePath,t.setStorageSync("savedFilePath",n.savedFilePath),t.showModal({title:"保存成功",content:"下次进入页面时，此文件仍可用",showCancel:!1})},fail:function(e){t.showModal({title:"保存失败",content:"失败原因: "+JSON.stringify(e),showCancel:!1})}}):t.showModal({content:"请选择文件",showCancel:!1})},clear:function(){t.setStorageSync("savedFilePath",""),this.tempFilePath="",this.savedFilePath=""},openDocument:function(){t.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/helloworld.pdf",success:function(e){t.openDocument({filePath:e.tempFilePath,success:function(){console.log("打开文档成功")}})}})}}};e.default=n}).call(this,n("543d")["default"])},7117:function(t,e,n){"use strict";var a=n("8b08"),i=n.n(a);i.a},"8b08":function(t,e,n){},b3cb:function(t,e,n){"use strict";n.r(e);var a=n("3e51"),i=n("4272");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("7117");var c=n("2877"),l=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports}},[["ab2c","common/runtime","common/vendor"]]]);