(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{"26b6":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){console.log(e),n.screen=(100*e.value).toFixed(),console.log("屏幕亮度值："+n.screen)},fail:function(e){console.log(e)}})},methods:{sliderChange:function(n){var t=n.detail.value;this.screen!==t&&(console.log("当前数值："+n.detail.value),e.setScreenBrightness({value:t/100,success:function(){console.log("success")},fail:function(e){console.log(e)}}),this.screen=t)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=t}).call(this,t("543d")["default"])},"5b09":function(e,n,t){"use strict";var c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o})},"7d96":function(e,n,t){"use strict";var c=t("f3cb"),o=t.n(c);o.a},b1ea:function(e,n,t){"use strict";t.r(n);var c=t("26b6"),o=t.n(c);for(var s in c)"default"!==s&&function(e){t.d(n,e,function(){return c[e]})}(s);n["default"]=o.a},d8f5:function(e,n,t){"use strict";t.r(n);var c=t("5b09"),o=t("b1ea");for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);t("7d96");var r=t("2877"),u=Object(r["a"])(o["default"],c["a"],c["b"],!1,null,null,null);n["default"]=u.exports},f3cb:function(e,n,t){}},[["70ba","common/runtime","common/vendor"]]]);