(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/uparse-html/uparse-html"],{"2bcf":function(n,t,e){"use strict";var l=e("ad38"),o=e.n(l);o.a},4166:function(n,t,e){"use strict";var l=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return l}),e.d(t,"b",function(){return o})},"45ec":function(n,t,e){"use strict";e.r(t);var l=e("9962"),o=e.n(l);for(var r in l)"default"!==r&&function(n){e.d(t,n,function(){return l[n]})}(r);t["default"]=o.a},"663f":function(n,t,e){"use strict";e.r(t);var l=e("4166"),o=e("45ec");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("2bcf");var a=e("2877"),i=Object(a["a"])(o["default"],l["a"],l["b"],!1,null,null,null);t["default"]=i.exports},9962:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){return Promise.all([e.e("common/vendor"),e.e("components/uParse/src/wxParse")]).then(e.bind(null,"dc16"))},o='\n<p>很多资讯页面，服务端返回的数据都是 markdown 字符串或 html 字符串，使用本模板可直接解析 html 为符合 uni-app 规范的富文本界面。下文为示例：</p>\n<p>HBuilderX堪称markdown书写编辑的最佳工具，本文简单介绍HBuilderX里markdown的使用技巧。更多详情请在HBuilderX里点菜单帮助-markdown语法帮助。</p>\n<p>markdown的标题是行首以#号开头，空格分割的，不同级别的标题，在HX里着色也不同。如下：</p>\n<h1>标题1</h1>\n<h2>标题2</h2>\n<h3>标题3</h3>\n<h4>标题4</h4>\n<h5>标题5</h5>\n<p>HBuilderX标题编辑技巧：</p>\n<ol>\n<li>Emmet快速输入：敲h2+Tab即可生成二级标题【同HTML里的emmet写法，不止标题，HX里所有可对应tag的markdown语法均支持emmet写法】。仅行首生效</li>\n<li>智能双击：双击#号可选中整个标题段落</li>\n<li>智能回车：行尾回车或行中Ctrl+Enter强制换行后会自动在下一行补#</li>\n<li>回车后再次按Tab可递进一层标题，再按Tab切换列表符</li>\n<li>在# 后回车，可上插一个空标题行【同word】，任意位置按Ctrl+Shift+Enter也可以</li>\n</ol>\n<ul>\n<li>折叠：点标题前的-号可折叠该标题段落，快捷键是Alt+-（展开折叠是Alt+=）</li>\n<li>折叠：多层折叠时折叠或展开子节点，快捷键是Alt+Shift+-或=</li>\n</ul>\n<p><strong>加粗</strong> 【快捷键：Ctrl+B，支持多光标；Emmet：b后敲Tab】</p>\n<p><em>倾斜</em>【Emmet：i后敲Tab；前后包围：选中文字按Ctrl+是在选区两侧添加光标，可以继续输入_】</p>\n<p><del>删除线</del>【前后包围：选中文字按Ctrl+是在选区两侧添加光标，可以继续输入~~，会在2侧同时输入】</p>\n<blockquote>\n<p>引用</p>\n</blockquote>\n<p><a href="https://dcloud.io">超链接</a></p>\n<p><img src="https://img-cdn-qiniu.dcloud.net.cn/newpage/images/logo4.png" alt="logo"></p>\n<p>=======================</p>\n<pre><code class="language-javascript">    var a = document; //代码</code></pre>\n    ',r={components:{uParse:l},data:function(){return{article:o}},methods:{preview:function(n,t){console.log("src: "+n)},navigate:function(t,e){console.log("href: "+t),n.showModal({content:"点击链接为："+t,showCancel:!1})}}};t.default=r}).call(this,e("543d")["default"])},ad38:function(n,t,e){}},[["7cae","common/runtime","common/vendor"]]]);