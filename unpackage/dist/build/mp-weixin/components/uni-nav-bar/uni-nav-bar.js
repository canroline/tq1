(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"55d1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"e2d0"))},a=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"67da"))},i={name:"UniNavBar",components:{uniStatusBar:u,uniIcon:a},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};n.default=i},"598c":function(t,n,e){},"6fc9":function(t,n,e){"use strict";e.r(n);var u=e("55d1"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"87d5":function(t,n,e){"use strict";var u=e("598c"),a=e.n(u);a.a},"9e98":function(t,n,e){"use strict";e.r(n);var u=e("fbaa"),a=e("6fc9");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("87d5");var o=e("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=r.exports},fbaa:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9e98"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);                
