(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/pull-down-refresh/pull-down-refresh"],{3956:function(t,n,o){"use strict";o.r(n);var a=o("71dd"),e=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(n,t,function(){return a[t]})}(i);n["default"]=e.a},4782:function(t,n,o){"use strict";o.r(n);var a=o("cb39"),e=o("3956");for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);o("4c2b");var u=o("2877"),r=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},"4c2b":function(t,n,o){"use strict";var a=o("70f6"),e=o.n(a);e.a},"70f6":function(t,n,o){},"71dd":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout(function(){t.setDate()},300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"),this.initData()},methods:{initData:function(){var n=this;setTimeout(function(){n.max=0,n.data=[];var o=[];n.max+=10;for(var a=n.max-9;a<n.max+1;a++)o.push(a);n.data=n.data.concat(o),t.stopPullDownRefresh()},300)},setDate:function(){var t=[];this.max+=10;for(var n=this.max-9;n<this.max+1;n++)t.push(n);this.data=this.data.concat(t)}}};n.default=o}).call(this,o("543d")["default"])},cb39:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},e=[];o.d(n,"a",function(){return a}),o.d(n,"b",function(){return e})}},[["9efa","common/runtime","common/vendor"]]]);