(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"056b":function(t,n,e){"use strict";e.r(n);var u=e("3cd7"),a=e("db49");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("761b");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"0c34":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var t={},n=this;t.engine="iFly",n.inputValue="",plus.speech.startRecognize(t,function(t){console.log(t),n.inputValue+=t},function(t){console.log("语音识别失败："+t.message)})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=u},"3cd7":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"761b":function(t,n,e){"use strict";var u=e("a434"),a=e.n(u);a.a},a434:function(t,n,e){},db49:function(t,n,e){"use strict";e.r(n);var u=e("0c34"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("056b"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);                