(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/component/component"],{6990:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{imageURL:"/static/bg.png"}},onShareAppMessage:function(){return{title:"欢迎体验AR资源仿真平台",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(n){t.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.lists[t].pages)for(var n=0;n<this.lists.length;++n)this.lists[n].open=t===n&&!this.lists[t].open;else this.goDetailPage(this.lists[t].url)},goDetailPage:function(n){"string"===typeof n?t.navigateTo({url:"/pages/component/"+n+"/"+n}):t.navigateTo({url:n.url})}}};n.default=e}).call(this,e("543d")["default"])},"859c":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},c0cb:function(t,n,e){"use strict";var a=e("ebcd"),o=e.n(a);o.a},d5ff:function(t,n,e){"use strict";e.r(n);var a=e("6990"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},dcb1:function(t,n,e){"use strict";e.r(n);var a=e("859c"),o=e("d5ff");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("c0cb");var u=e("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},ebcd:function(t,n,e){}},[["2f76","common/runtime","common/vendor"]]]);