(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{239:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(40).default)("6bdbf3cb",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";var o=r(239);r.n(o).a},409:function(t,e,r){(t.exports=r(39)(!1)).push([t.i,".main{padding:5px 10px;display:fixed;background-color:#ffebcd}.display-board{border:2px solid #708090;border-radius:5px;min-height:200px;height:30%;font-size:30px;font-weight:700;padding:10px;text-align:right}.key-board{height:70%;table-layout:fixed;width:100%}.key-board td{border:1px solid snow;background-color:snow;border-radius:5px;text-align:center;font-weight:700;font-size:30px;height:50px}.key-board td:active{background-color:#e6e6e6}.key-board :first-child td{border:1px solid grey;background-color:grey;border-radius:5px;text-align:center;color:#fff;font-weight:700;height:50px}.key-board :first-child td:active{background-color:#686767}",""])},444:function(t,e,r){"use strict";r.r(e);r(404),r(57),r(98),r(135),r(136),r(33);var o=r(407),l=r.n(o),v={layout:"app_layout",data:function(){return{value1:"0",value2:"0",operator:"",tag:"value1"}},methods:{inputBoxValue:function(){var text="0";switch(this.tag){case"value1":case"operator":text=this.value1;break;case"value2":text=this.value2}console.log("inputBoxValue "+this.tag+"--"+text+"--"+this.value1);var t=(text=text.toString()).split("."),e=t[0].replace("-",""),r="";for(var o in e)(o+1)%3==0&&o!=e.length-1?r+=e[o]+",":r+=e[o];return(text.indexOf("-")>-1?"-":"")+r+(t.length>1?"."+t[1]:"")},inputValue:function(t){var text="0";switch(this.tag){case"value1":text=this.value1;break;case"operator":case"value2":text=this.value2,this.tag="value2"}text=text.toString(),"."==t&&-1!=text.indexOf(".")||("0"!==text?this.addValue(t):this.changeValue(t))},addValue:function(t){"value1"==this.tag?this.value1+=t:this.value2+=t,console.log("changeValue "+this.value1+"--"+this.value2)},changeValue:function(t){"value1"==this.tag?this.value1=t:this.value2=t,console.log("changeValue "+this.value1+"--"+this.value2)},isPositiveNum:function(){"value1"==this.tag?this.value1=this.positiveNum(this.value1):"value2"==this.tag&&(this.value2=this.positiveNum(this.value2))},positiveNum:function(t){return t=t>0?"-"+t:t.replace("-",""),console.log("positiveNum "+t),t},calculation:function(){if("value1"!=this.tag){var t="";switch(this.operator){case"x":t=Number(this.value1)*Number(this.value2);break;case"÷":t=Number(this.value1)%Number(this.value2);break;case"-":t=Number(this.value1)-Number(this.value2);break;case"+":t=Number(this.value1)+Number(this.value2)}this.operator="",this.value2="",this.value1=t,this.text=t,this.tag="value1",console.log("value1: "+this.value1)}},setOperator:function(t){this.operator=t,this.tag="operator"},clear:function(){this.operator="",this.value1="0",this.value2="",this.tag="value1"}},mounted:function(){var t=this.inputValue,e=this.clear,r=this.isPositiveNum,o=this.setOperator,v=this.calculation;l()("td").click(function(c){var n=l()(c.target).text();switch(n){case".":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":t(n);break;case"-":case"+":case"x":case"÷":o(n);break;case"±":r();break;case"=":v();break;default:e()}})}},c=(r(408),r(16)),component=Object(c.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("div",{staticClass:"display-board"},[this._v(this._s(this.inputBoxValue()))]),this._v(" "),this._m(0)])},[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"key-board"},[r("tr",[r("td",[t._v("AC")]),t._v(" "),r("td",[t._v("±")]),t._v(" "),r("td",[t._v("÷")]),t._v(" "),r("td",[t._v("x")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("8")]),t._v(" "),r("td",[t._v("9")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("+")])]),t._v(" "),r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",{attrs:{rowspan:"2"}},[t._v("=")])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[t._v("0")]),t._v(" "),r("td",[t._v(".")])])])}],!1,null,null,null);e.default=component.exports}}]);