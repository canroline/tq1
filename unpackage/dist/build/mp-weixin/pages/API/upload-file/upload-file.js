(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{1710:function(e,o,n){},"24fb":function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var o=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(n){console.log("chooseImage success, temp path is",n.tempFilePaths[0]);var t=n.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:t,fileType:"image",name:"data",success:function(n){console.log("uploadImage success, res is:",n),e.showToast({title:"上传成功",icon:"success",duration:1e3}),o.imageSrc=t},fail:function(o){console.log("uploadImage fail",o),e.showModal({content:o.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}};o.default=n}).call(this,n("543d")["default"])},"55a5":function(e,o,n){"use strict";var t=n("1710"),a=n.n(t);a.a},"8dea":function(e,o,n){"use strict";var t=function(){var e=this,o=e.$createElement;e._self._c},a=[];n.d(o,"a",function(){return t}),n.d(o,"b",function(){return a})},"8e81":function(e,o,n){"use strict";n.r(o);var t=n("8dea"),a=n("9e64");for(var c in a)"default"!==c&&function(e){n.d(o,e,function(){return a[e]})}(c);n("55a5");var u=n("2877"),s=Object(u["a"])(a["default"],t["a"],t["b"],!1,null,null,null);o["default"]=s.exports},"9e64":function(e,o,n){"use strict";n.r(o);var t=n("24fb"),a=n.n(t);for(var c in t)"default"!==c&&function(e){n.d(o,e,function(){return t[e]})}(c);o["default"]=a.a}},[["3c73","common/runtime","common/vendor"]]]);