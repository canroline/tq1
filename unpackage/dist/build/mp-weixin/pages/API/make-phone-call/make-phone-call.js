(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/make-phone-call/make-phone-call"],{4852:function(n,t,e){"use strict";var a=e("f7aa"),u=e.n(a);u.a},"5b58":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(n){this.inputValue=n.target.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){n.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}}};t.default=e}).call(this,e("543d")["default"])},7136:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"938b":function(n,t,e){"use strict";e.r(t);var a=e("7136"),u=e("cc33");for(var l in u)"default"!==l&&function(n){e.d(t,n,function(){return u[n]})}(l);e("4852");var i=e("2877"),o=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports},cc33:function(n,t,e){"use strict";e.r(t);var a=e("5b58"),u=e.n(a);for(var l in a)"default"!==l&&function(n){e.d(t,n,function(){return a[n]})}(l);t["default"]=u.a},f7aa:function(n,t,e){}},[["6956","common/runtime","common/vendor"]]]);