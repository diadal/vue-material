!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}({0:function(t,e,n){t.exports=n(28)},2:function(t,e){"use strict";function n(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n(),t.exports=e.default},3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=8,o=function(t,e){return e.top<=n-parseInt(getComputedStyle(t).marginTop,10)},i=function(t,e){return e.top+t.offsetHeight+n>=window.innerHeight-parseInt(getComputedStyle(t).marginTop,10)},r=function(t,e){return e.left<=n-parseInt(getComputedStyle(t).marginLeft,10)},s=function(t,e){return e.left+t.offsetWidth+n>=window.innerWidth-parseInt(getComputedStyle(t).marginLeft,10)},l=function(t,e){var l=getComputedStyle(t);return o(t,e)&&(e.top=n-parseInt(l.marginTop,10)),r(t,e)&&(e.left=n-parseInt(l.marginLeft,10)),s(t,e)&&(e.left=window.innerWidth-n-t.offsetWidth-parseInt(l.marginLeft,10)),i(t,e)&&(e.top=window.innerHeight-n-t.offsetHeight-parseInt(l.marginTop,10)),e};e.default=l,t.exports=e.default},28:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){t.component("md-tooltip",t.extend(s.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(176),s=o(r);t.exports=e.default},74:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),s=o(r),l=n(3),a=o(l);e.default={props:{mdDirection:{type:String,default:"bottom"},mdDelay:{type:String,default:"0"}},data:function(){return{active:!1,parentClass:null,transitionOff:!1,topPosition:!1,leftPosition:!1}},computed:{classes:function(){var t={"md-active":this.active,"md-transition-off":this.transitionOff,"md-tooltip-top":"top"===this.mdDirection,"md-tooltip-right":"right"===this.mdDirection,"md-tooltip-bottom":"bottom"===this.mdDirection,"md-tooltip-left":"left"===this.mdDirection};return this.parentClass&&(t[this.parentClass]=!0),t},style:function(){return{"transition-delay":this.mdDelay+"ms",top:this.topPosition+"px",left:this.leftPosition+"px"}}},watch:{mdDirection:function(){this.calculateTooltipPosition()}},methods:{removeTooltips:function(){var t=[].concat(i(document.querySelectorAll(".md-tooltip")));t.forEach(function(t){t.parentNode.removeChild(t)})},calculateTooltipPosition:function(){var t=this.parentElement.getBoundingClientRect(),e={};switch(this.mdDirection){case"top":e.top=t.top-this.$el.offsetHeight,e.left=t.left+t.width/2;break;case"right":e.top=t.top,e.left=t.left+t.width;break;case"bottom":e.top=t.bottom,e.left=t.left+t.width/2;break;case"left":e.top=t.top,e.left=t.left-this.$el.offsetWidth;break;default:console.warn("Invalid "+this.mdDirection+" option to md-direction option")}e=(0,a.default)(this.tooltipElement,e),this.topPosition=e.top,this.leftPosition=e.left},generateTooltipClasses:function(){var t=[];this.parentElement.classList.forEach(function(e){e.indexOf("md-")>=0&&"md-active"!==e&&t.push(e+"-tooltip")}),this.parentClass=t.join(" ")},open:function(){var t=this;this.removeTooltips(),this.$nextTick(function(){t.rootElement.appendChild(t.tooltipElement),getComputedStyle(t.tooltipElement).top,t.transitionOff=!0,t.generateTooltipClasses(),t.calculateTooltipPosition(),window.setTimeout(function(){t.transitionOff=!1,t.active=!0},10)})},close:function(){var t=this,e=function e(){t.tooltipElement.removeEventListener(s.default,e),t.tooltipElement.parentNode&&!t.tooltipElement.classList.contains("md-active")&&t.rootElement.removeChild(t.tooltipElement)};this.active=!1,this.tooltipElement.removeEventListener(s.default,e),this.tooltipElement.addEventListener(s.default,e)}},mounted:function(){var t=this;this.$nextTick(function(){t.tooltipElement=t.$el,t.parentElement=t.tooltipElement.parentNode,t.rootElement=t.$root.$el,t.$el.parentNode.removeChild(t.$el),t.parentElement.addEventListener("mouseenter",t.open),t.parentElement.addEventListener("focus",t.open),t.parentElement.addEventListener("mouseleave",t.close),t.parentElement.addEventListener("blur",t.close)})},beforeDestroy:function(){this.active=!1,this.removeTooltips(),this.parentElement&&(this.parentElement.removeEventListener("mouseenter",this.open),this.parentElement.removeEventListener("focus",this.open),this.parentElement.removeEventListener("mouseleave",this.close),this.parentElement.removeEventListener("blur",this.close))}},t.exports=e.default},86:function(t,e){},176:function(t,e,n){var o,i;n(86),o=n(74);var r=n(196);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},196:function(t,e){t.exports={render:function(){var t=this;return t._h("span",{staticClass:"md-tooltip",class:t.classes,style:t.style},[t._t("default")])},staticRenderFns:[]}}})});