(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/choose-location/choose-location"],{"2d61":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n("2b13"),c=a.formatLocation,e={data:function(){return{title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}},methods:{chooseLocation:function(){var o=this;t.chooseLocation({success:function(t){o.hasLocation=!0,o.location=c(t.longitude,t.latitude),o.locationAddress=t.address}})},clear:function(){this.hasLocation=!1}}};o.default=e}).call(this,n("543d")["default"])},"3cfa":function(t,o,n){"use strict";n.r(o);var a=n("2d61"),c=n.n(a);for(var e in a)"default"!==e&&function(t){n.d(o,t,function(){return a[t]})}(e);o["default"]=c.a},"854a":function(t,o,n){},bd51:function(t,o,n){"use strict";var a=function(){var t=this,o=t.$createElement;t._self._c},c=[];n.d(o,"a",function(){return a}),n.d(o,"b",function(){return c})},f5f7:function(t,o,n){"use strict";n.r(o);var a=n("bd51"),c=n("3cfa");for(var e in c)"default"!==e&&function(t){n.d(o,t,function(){return c[t]})}(e);n("f6b1");var i=n("2877"),u=Object(i["a"])(c["default"],a["a"],a["b"],!1,null,null,null);o["default"]=u.exports},f6b1:function(t,o,n){"use strict";var a=n("854a"),c=n.n(a);c.a}},[["3156","common/runtime","common/vendor"]]]);