(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{445:function(e,t,n){"use strict";n.r(t);n(60);var c={mounted:function(){var video=document.getElementById("video");if(navigator.mediaDevices.getUserMedia)(p=navigator.mediaDevices.getUserMedia({video:!0})).then(function(e){try{video.srcObject=e}catch(t){video.src=window.URL.createObjectURL(e)}video.onloadedmetadata=function(e){video.play()}}),p.catch(function(e){console.log(e.name)});else if(navigator.mediaDevices.webkitGetUserMedia){var p;(p=navigator.mediaDevices.webkitGetUserMedia({video:!0})).then(function(e){video.src=window.URL.createObjectURL(e),video.onloadedmetadata=function(e){video.play()}}),p.catch(function(e){console.log(e.name)})}}},o=n(16),component=Object(o.a)(c,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"background-color":"gray"}},[t("video",{staticStyle:{width:"640px",height:"480px"},attrs:{id:"video",autoplay:""}}),this._v(" "),t("canvas",{attrs:{id:"canvas",width:"640",height:"480"}})])}],!1,null,null,null);t.default=component.exports}}]);