(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/ibeacon/ibeacon"],{"049d":function(e,n,o){},4327:function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c},c=[];o.d(n,"a",function(){return t}),o.d(n,"b",function(){return c})},"4e2c":function(e,n,o){"use strict";o.r(n);var t=o("9368"),c=o.n(t);for(var s in t)"default"!==s&&function(e){o.d(n,e,function(){return t[e]})}(s);n["default"]=c.a},9368:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o="FDA50693-A4E2-4FB1-AFCF-C6EB07647825",t={data:function(){return{title:"iBeacon",isOpen:!1,isStarted:!1,deviceList:[],isPageOpened:!1}},onLoad:function(){this.onBeaconUpdate()},onShow:function(){this.isPageOpened=!0},methods:{maskclose:function(){this.maskShow=!1},openBluetoothAdapter:function(){var n=this;e.openBluetoothAdapter({success:function(e){console.log("初始化蓝牙成功:"+e.errMsg),console.log(e),n.isOpen=!0,n.deviceList=[]},fail:function(e){console.log("初始化蓝牙失败，错误码："+(e.errCode||e.errMsg)),0!==e.errCode&&c(e.errCode,e.errMsg)}})},closeBluetoothAdapter:function(e){var n=this;this.stopBeaconDiscovery(),wx.closeBluetoothAdapter({success:function(e){n.isOpen=!1,console.log("断开蓝牙模块成功")}})},onBeaconUpdate:function(){var n=this;e.onBeaconUpdate(function(e){n.isPageOpened&&n.isOpen&&n.isStarted&&(console.log(e),e.beacons&&e.beacons.length>0?n.getBeacons():e.connected||(n.deviceList=[]))})},startBeaconDiscovery:function(){var n=this;e.startBeaconDiscovery({uuids:this.getUUIDList(),success:function(e){n.isStarted=!0,console.log(e)},fail:function(e){console.error(e)}})},stopBeaconDiscovery:function(n){var o=this;this.isStarted&&e.stopBeaconDiscovery({success:function(e){o.isStarted=!1},fail:function(e){console.error(e)}})},getBeacons:function(){var n=this;e.getBeacons({success:function(e){e.beacons&&e.beacons.length>0&&(console.log(e.beacons),n.deviceList=e.beacons)},fail:function(e){console.log("获取设备服务失败，错误码："+e.errCode),0!==errCode.errCode&&c(errCode.errCode)}})},getUUIDList:function(){return[o]}},onUnload:function(){this.isPageOpened=!1}};function c(e,n){switch(e){case 1e4:s("未初始化蓝牙适配器");break;case 10001:s("未检测到蓝牙，请打开蓝牙重试！");break;case 10002:s("没有找到指定设备");break;case 10003:s("连接失败");break;case 10004:s("没有找到指定服务");break;case 10005:s("没有找到指定特征值");break;case 10006:s("当前连接已断开");break;case 10007:s("当前特征值不支持此操作");break;case 10008:s("其余所有系统上报的异常");break;case 10009:s("Android 系统特有，系统版本低于 4.3 不支持 BLE");break;default:s(n)}}function s(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.showModal({title:"提示",content:n,showCancel:o})}n.default=t}).call(this,o("543d")["default"])},e792:function(e,n,o){"use strict";var t=o("049d"),c=o.n(t);c.a},ec99:function(e,n,o){"use strict";o.r(n);var t=o("4327"),c=o("4e2c");for(var s in c)"default"!==s&&function(e){o.d(n,e,function(){return c[e]})}(s);o("e792");var a=o("2877"),i=Object(a["a"])(c["default"],t["a"],t["b"],!1,null,null,null);n["default"]=i.exports}},[["7ef6","common/runtime","common/vendor"]]]);