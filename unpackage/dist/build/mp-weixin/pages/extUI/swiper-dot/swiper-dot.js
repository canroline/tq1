(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swiper-dot/swiper-dot"],{7748:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/uni-swiper-dot/uni-swiper-dot").then(n.bind(null,"50bb"))},r={components:{uniSwiperDot:o},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],dotStyle:[{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},{backgroundColor:"rgba(83, 200, 249,0.3)",border:"1px rgba(83, 200, 249,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(83, 200, 249,0.9)",selectedBorder:"1px rgba(83, 200, 249,0.9) solid"}],modeIndex:-1,styleIndex:-1,current:0,mode:"default",dotsStyles:{}}},onLoad:function(){},methods:{change:function(e){this.current=e.detail.current},selectStyle:function(e){this.dotsStyles=this.dotStyle[e],this.styleIndex=e},selectMode:function(e,t){this.mode=e,this.modeIndex=t,this.styleIndex=-1,this.dotsStyles=this.dotStyle[0]}}};t.default=r},"7e50":function(e,t,n){"use strict";n.r(t);var o=n("d86b"),r=n("a7cf");for(var d in r)"default"!==d&&function(e){n.d(t,e,function(){return r[e]})}(d);n("e292");var u=n("2877"),i=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports},a1d9:function(e,t,n){},a7cf:function(e,t,n){"use strict";n.r(t);var o=n("7748"),r=n.n(o);for(var d in o)"default"!==d&&function(e){n.d(t,e,function(){return o[e]})}(d);t["default"]=r.a},d86b:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},e292:function(e,t,n){"use strict";var o=n("a1d9"),r=n.n(o);r.a}},[["f0f6","common/runtime","common/vendor"]]]);