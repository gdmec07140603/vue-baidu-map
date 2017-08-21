webpackJsonp([38],{"2UAk":function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[[s("h1",[t._v("步行路线规划")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("示例")]),t._v(" "),s("h3",[t._v("检索百度大厦到北京邮电大学西门的步行路线规划")]),t._v(" "),s("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),s("h4",[t._v("预览")]),t._v(" "),s("doc-preview",[s("baidu-map",[s("bm-view",{staticClass:"map"}),t._v(" "),s("bm-walking",{attrs:{start:"百度大厦",end:"北京邮电大学西门","auto-viewport":!0,location:"北京"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("BmWalking")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("location")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, None")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。")])]),t._v(" "),s("tr",[s("td",[t._v("start")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。")])]),t._v(" "),s("tr",[s("td",[t._v("end")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String, Point, LocalResultPoi")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。")])]),t._v(" "),s("tr",[s("td",[t._v("panel")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",[t._v("是否选展现检索结果面板。")])]),t._v(" "),s("tr",[s("td",[t._v("autoViewport")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("检索结束后是否自动调整地图视野。")])]),t._v(" "),s("tr",[s("td",[t._v("selectFirstResult")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",[t._v("是否选择第一个检索结果。")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("markersset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{pois: Array}")]),t._v(" "),s("td",[t._v("标注添加完成后的回调函数。")])]),t._v(" "),s("tr",[s("td",[t._v("infohtmlset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{poi: LocalResultPoi, html: HTMLElement}")]),t._v(" "),s("td",[t._v("标注气泡内容创建后的回调函数。")])]),t._v(" "),s("tr",[s("td",[t._v("resultshtmlset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{container: HTMLElement}")]),t._v(" "),s("td",[t._v("结果列表添加完成后的回调函数。")])]),t._v(" "),s("tr",[s("td",[t._v("searchcomplete")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{results: WalkingRouteResult}")]),t._v(" "),s("td",[t._v("检索完成后的回调函数。如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致")])]),t._v(" "),s("tr",[s("td",[t._v("polylinesset")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("{routes: Array}")]),t._v(" "),s("td",[t._v("折线添加完成后的回调函数。")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-walking")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"百度大厦"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"北京邮电大学西门"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-walking")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},"B+0f":function(t,a,s){var e=s("VU/8")(null,s("2UAk"),null,null);t.exports=e.exports},U8Pk:function(t,a,s){t.exports=s("B+0f")}});