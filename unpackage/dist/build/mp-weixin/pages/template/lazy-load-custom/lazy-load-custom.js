(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/lazy-load-custom/lazy-load-custom"],{"1d14":function(t,n,o){},"29db":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})},"505f":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){for(var t=["shuijiao","muwu","cbd"],n=[],o=0;o<20;o++)n.push({src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/".concat(t[o%3],".jpg"),show:!1,loaded:!1});return{windowHeight:0,placeholderSrc:"../../../static/60x60.png",list:n,show:!1}},methods:{load:function(){var n=this;t.createSelectorQuery().selectAll(".lazy").boundingClientRect(function(t){t.forEach(function(t,o){t.top<=n.windowHeight&&(n.list[t.dataset.index].show=!0)})}).exec()},imageLoad:function(t){this.list[t.target.dataset.index].loaded=!0}},onLoad:function(){this.windowHeight=t.getSystemInfoSync().windowHeight},onShow:function(){var t=this;this.show||(this.show=!0,setTimeout(function(){t.load()},100))},onPageScroll:function(){this.load()}};n.default=o}).call(this,o("543d")["default"])},5614:function(t,n,o){"use strict";o.r(n);var e=o("29db"),i=o("d03f");for(var a in i)"default"!==a&&function(t){o.d(n,t,function(){return i[t]})}(a);o("7dcf");var c=o("2877"),u=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},"7dcf":function(t,n,o){"use strict";var e=o("1d14"),i=o.n(e);i.a},d03f:function(t,n,o){"use strict";o.r(n);var e=o("505f"),i=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=i.a}},[["8aca","common/runtime","common/vendor"]]]);