(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{1461:function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o})},"472d":function(e,n,t){"use strict";t.r(n);var c=t("6ec1"),o=t.n(c);for(var s in c)"default"!==s&&function(e){t.d(n,e,function(){return c[e]})}(s);n["default"]=o.a},4805:function(e,n,t){"use strict";t.r(n);var c=t("1461"),o=t("472d");for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);t("9249");var r=t("2877"),u=Object(r["a"])(o["default"],c["a"],c["b"],!1,null,null,null);n["default"]=u.exports},"6ec1":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){console.log(e),n.screen=(100*e.value).toFixed(),console.log("屏幕亮度值："+n.screen)},fail:function(e){console.log(e)}})},methods:{sliderChange:function(n){var t=n.detail.value;this.screen!==t&&(console.log("当前数值："+n.detail.value),e.setScreenBrightness({value:t/100,success:function(){console.log("success")},fail:function(e){console.log(e)}}),this.screen=t)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=t}).call(this,t("543d")["default"])},8104:function(e,n,t){},9249:function(e,n,t){"use strict";var c=t("8104"),o=t.n(c);o.a}},[["0e91","common/runtime","common/vendor"]]]);