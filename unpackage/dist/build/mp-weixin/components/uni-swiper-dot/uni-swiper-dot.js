(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-swiper-dot/uni-swiper-dot"],{"3bef":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},4194:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=o},"50bb":function(t,e,n){"use strict";n.r(e);var o=n("3bef"),i=n("6871");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("e9b6");var r=n("2877"),d=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=d.exports},6871:function(t,e,n){"use strict";n.r(e);var o=n("4194"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},aa55:function(t,e,n){},e9b6:function(t,e,n){"use strict";var o=n("aa55"),i=n.n(o);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-swiper-dot/uni-swiper-dot-create-component',
    {
        'components/uni-swiper-dot/uni-swiper-dot-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("50bb"))
        })
    },
    [['components/uni-swiper-dot/uni-swiper-dot-create-component']]
]);                