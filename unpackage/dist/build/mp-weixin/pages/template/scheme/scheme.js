(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/scheme/scheme"],{"16e7":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i})},"3e0d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{}},methods:{openBrowser:function(e){plus.runtime.openURL(e)},openMarket:function(e){var n;n="Android"==plus.os.name?"market://details?id=io.dcloud.HelloH5":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8","undefined"==typeof e?plus.runtime.openURL(n,function(e){console.log(e)}):"Android"==plus.os.name?plus.runtime.openURL(n,function(e){plus.nativeUI.alert("本机没有安装应用宝")},e):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao:function(n){plus.runtime.openURL(n,function(n){e.showModal({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(e){e.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})})},openMap:function(){var e="";if("Android"==plus.os.name){var n=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),t=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),a="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",i="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";t&&n?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},function(e){switch(e.index){case 1:plus.runtime.openURL(a);break;case 2:plus.runtime.openURL(i);break}}):t?plus.runtime.openURL(i):n?plus.runtime.openURL(a):(e="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(e))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},function(n){switch(console.log("e.index: "+n.index),n.index){case 1:e="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:e="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:e="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";break;default:break}""!=e&&plus.runtime.openURL(e,function(e){plus.nativeUI.alert("本机未安装指定的地图应用")})})},openQQ:function(e){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+e.detail.value.qqNumType+"&uin="+e.detail.value.qqNum,function(e){plus.nativeUI.alert("本机没有安装QQ，无法启动")})}}};n.default=t}).call(this,t("543d")["default"])},"7a5f":function(e,n,t){},"8ac9":function(e,n,t){"use strict";t.r(n);var a=t("3e0d"),i=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=i.a},a9ee:function(e,n,t){"use strict";t.r(n);var a=t("16e7"),i=t("8ac9");for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);t("e10f");var u=t("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=l.exports},e10f:function(e,n,t){"use strict";var a=t("7a5f"),i=t.n(a);i.a}},[["9eab","common/runtime","common/vendor"]]]);