(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/datachecker/datachecker"],{"9e8b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("f65d"),c={data:function(){return{title:"表单验证"}},methods:{formSubmit:function(n){var t=[{name:"nickname",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"gender",checkType:"in",checkRule:"男,女",errorMsg:"请选择性别"},{name:"loves",checkType:"notnull",checkRule:"",errorMsg:"请选择爱好"}],c=n.detail.value,o=a.check(c,t);o?e.showToast({title:"验证通过!",icon:"none"}):e.showToast({title:a.error,icon:"none"})},formReset:function(e){console.log("清空数据"),this.chosen=""}}};n.default=c}).call(this,t("543d")["default"])},a4fd:function(e,n,t){"use strict";t.r(n);var a=t("b017"),c=t("adaa");for(var o in c)"default"!==o&&function(e){t.d(n,e,function(){return c[e]})}(o);var r=t("2877"),u=Object(r["a"])(c["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports},adaa:function(e,n,t){"use strict";t.r(n);var a=t("9e8b"),c=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=c.a},b017:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return c})}},[["50b0","common/runtime","common/vendor"]]]);