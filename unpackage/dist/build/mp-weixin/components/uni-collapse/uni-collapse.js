(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"351b":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=a},"3931d":function(n,t,e){"use strict";e.r(t);var a=e("351b"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},"3a1f":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"3adf":function(n,t,e){},"8ceb":function(n,t,e){"use strict";e.r(t);var a=e("3a1f"),u=e("3931d");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("f749");var c=e("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},f749:function(n,t,e){"use strict";var a=e("3adf"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8ceb"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
