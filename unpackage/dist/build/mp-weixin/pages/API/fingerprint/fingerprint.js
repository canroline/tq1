(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/fingerprint/fingerprint"],{"18de":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},5634:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"指纹",result:"",disabled:!0}},onLoad:function(){this.disabled=!1,this.result="请在微信真机中使用，模拟器不支持"},methods:{fingerprint:function(){wx.startSoterAuthentication({requestAuthModes:["fingerPrint"],challenge:"123456",authContent:"请用指纹解锁",success:function(n){t.showToast({title:"识别成功",mask:!1,duration:1500})}})}}};n.default=e}).call(this,e("543d")["default"])},"927d":function(t,n,e){"use strict";e.r(n);var u=e("18de"),r=e("ec8c");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);var o=e("2877"),a=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=a.exports},ec8c:function(t,n,e){"use strict";e.r(n);var u=e("5634"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a}},[["249d","common/runtime","common/vendor"]]]);