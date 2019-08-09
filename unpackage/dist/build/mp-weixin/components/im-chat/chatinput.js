(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"048e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},n=this;t.engine="iFly",n.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t),n.inputValue+=t},function(t){console.log("语音识别失败："+t.message)})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=u},"325b":function(t,n,e){},"5e38":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},b3ea:function(t,n,e){"use strict";e.r(n);var u=e("5e38"),a=e("fccc");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("d393");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},d393:function(t,n,e){"use strict";var u=e("325b"),a=e.n(u);a.a},fccc:function(t,n,e){"use strict";e.r(n);var u=e("048e"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b3ea"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);                
