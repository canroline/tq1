(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/fab/fab"],{"0202":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("components/uni-fab/uni-fab").then(e.bind(null,"996e"))},i={components:{uniFab:o},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/component.png",selectedIconPath:"/static/componentHL.png",text:"组件",active:!1},{iconPath:"/static/api.png",selectedIconPath:"/static/apiHL.png",text:"API",active:!1},{iconPath:"/static/template.png",selectedIconPath:"/static/templateHL.png",text:"模版",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(n){console.log(n),this.content[n.index].active=!n.item.active,t.showModal({title:"提示",content:"您".concat(this.content[n.index].active?"选中了":"取消了").concat(n.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},switchBtn:function(t,n){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=n),this.$forceUpdate()}}};n.default=i}).call(this,e("543d")["default"])},"2fba":function(t,n,e){"use strict";e.r(n);var o=e("4628"),i=e("32b3");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("5d80");var a=e("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"32b3":function(t,n,e){"use strict";e.r(n);var o=e("0202"),i=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=i.a},4628:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},"5d80":function(t,n,e){"use strict";var o=e("96f2"),i=e.n(o);i.a},"96f2":function(t,n,e){}},[["51d0","common/runtime","common/vendor"]]]);