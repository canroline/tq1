(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/left-category/left-category"],{"0389":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0,name:"七月_"}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.subCategoryList=t.subCategoryList,this.scrollTop=-this.scrollHeight*e},getCategory:function(){for(var t=1;t<21;t++){for(var e=[],o=1;o<31;o++)e.push({NAME:"分类"+t+":商品"+o,LOGO:"http://placehold.it/50x50"});this.categoryList.push({NAME:"分类"+t,subCategoryList:e})}this.subCategoryList=this.categoryList[0].subCategoryList}},onLoad:function(){this.getCategory(),this.height=t.getSystemInfoSync().windowHeight}};e.default=o}).call(this,o("543d")["default"])},"4f7d":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},"7f52":function(t,e,o){"use strict";o.r(e);var i=o("4f7d"),n=o("a2f8");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("af3f");var a=o("2877"),c=Object(a["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},a2f8:function(t,e,o){"use strict";o.r(e);var i=o("0389"),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);e["default"]=n.a},af3f:function(t,e,o){"use strict";var i=o("c27d"),n=o.n(i);n.a},c27d:function(t,e,o){}},[["7320","common/runtime","common/vendor"]]]);