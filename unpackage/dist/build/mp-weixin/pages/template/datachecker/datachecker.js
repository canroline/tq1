(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/datachecker/datachecker"],{"1ddd":function(e,n,t){"use strict";t.r(n);var c=t("d08d"),o=t.n(c);for(var r in c)"default"!==r&&function(e){t.d(n,e,function(){return c[e]})}(r);n["default"]=o.a},"6a6c":function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o})},8437:function(e,n,t){"use strict";t.r(n);var c=t("6a6c"),o=t("1ddd");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);var a=t("2877"),u=Object(a["a"])(o["default"],c["a"],c["b"],!1,null,null,null);n["default"]=u.exports},d08d:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=t("e090"),o={data:function(){return{title:"表单验证"}},methods:{formSubmit:function(n){var t=[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}],o=n.detail.value,r=c.check(o,t);r?e.showToast({title:"验证通过!",icon:"none"}):e.showToast({title:c.error,icon:"none"})},formReset:function(e){console.log("清空数据"),this.chosen=""}}};n.default=o}).call(this,t("543d")["default"])}},[["bd3d","common/runtime","common/vendor"]]]);