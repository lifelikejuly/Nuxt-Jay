(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{242:function(e,t,n){var content=n(415);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(40).default)("3a81b978",content,!0,{sourceMap:!1})},414:function(e,t,n){"use strict";var o=n(242);n.n(o).a},415:function(e,t,n){(e.exports=n(39)(!1)).push([e.i,"[v-cloak]{display:none;color:red}",""])},442:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{user:{lastName:"hahaha-lastName",firstName:"hahah-firstName",test:"hahha-test"},message:"message"}}},r=(n(414),n(16)),c=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._t("header")],2),e._v(" "),n("div",[e._t("default"),e._v(" "),n("div",[e._t("content",[n("p",[e._v(e._s(e.user.lastName))])],{user:e.user}),e._v(" "),n("span",{pre:!0},[e._v("{{ this will not be compiled }}")]),e._v(" "),n("div",{},[e._v(e._s(e.message))]),e._v(" "),n("button",{on:{click:function(t){return e.$emit("enlarge-text")}}},[e._v(" click1")]),e._v(" "),n("button",{on:{click:function(t){return e.$emit("enlarge-text2",.2)}}},[e._v(" click2")])],2)],2),e._v(" "),n("div",[e._t("footer")],2)])},[],!1,null,null,null).exports,l=n(20),d={components:{demo:c},data:function(){return{checked:!1,message:"333",postFontSize:1}},methods:{beforeRead:function(e){return"image/jpeg"===e.type||(Object(l.a)("请上传 jpg 格式图片"),!1)},afterRead:function(e){console.log(e)},tip:function(){console.log("enlarge-text")},next:function(){}}},v=Object(r.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{fontSize:e.postFontSize+"em"}},[n("demo",{on:{"enlarge-text":function(t){e.postFontSize+=.1},"enlarge-text2":function(t){e.postFontSize+=t}},scopedSlots:e._u([{key:"header",fn:function(){return[n("h1",[e._v("Here might be a page title")])]},proxy:!0},{key:"content",fn:function(t){return[n("p",[e._v("Content."+e._s(t.user.test))])]}},{key:"footer",fn:function(){return[n("p",[e._v("Here's some contact info")])]},proxy:!0}])},[e._v(" "),n("p",[e._v("A paragraph for the main content.")]),e._v(" "),n("p",[e._v("And another one.")])]),e._v(" "),n("van-uploader",{attrs:{"before-read":e.beforeRead,"after-read":e.afterRead}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.message,expression:"message",modifiers:{trim:!0}}],attrs:{placeholder:"edit me"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("p",[e._v("Message is: "+e._s(e.message))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.checked=n.concat([null])):c>-1&&(e.checked=n.slice(0,c).concat(n.slice(c+1)))}else e.checked=r}}}),e._v(" "),n("label",{attrs:{for:"checkbox"}},[e._v(e._s(e.checked))]),e._v(" "),n("div",[e._v("HAHAHAHAHAH")]),e._v(" "),"true"==this.$route.query.title?n("div",[e._v("SHOW ME")]):e._e(),e._v(" "),n("nuxt-link",{attrs:{to:"/demo/test"}},[e._v("Next")])],1)},[],!1,null,null,null);t.default=v.exports}}]);