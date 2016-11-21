!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.VueMaterial=i():t.VueMaterial=i()}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var d=e[n]={exports:{},id:n,loaded:!1};return t[n].call(d.exports,d,d.exports,i),d.loaded=!0,d.exports}var e={};return i.m=t,i.c=e,i.p="/",i(0)}({0:function(t,i,e){t.exports=e(16)},16:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function d(t){t.component("md-list",t.extend(s.default)),t.component("md-list-item",t.extend(m.default)),t.component("md-list-expand",t.extend(a.default)),t.material.styles.push(u.default)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=d;var o=e(135),s=n(o),r=e(137),m=n(r),l=e(136),a=n(l),c=e(102),u=n(c);t.exports=i.default},47:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{height:0}},methods:{calculatePadding:function(){this.height=-this.$el.offsetHeight+"px"}},mounted:function(){this.calculatePadding()}},t.exports=i.default},48:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:{href:String,target:String,disabled:Boolean},render:function(t){var i=this,e="md-button md-list-item-container",n="md-list-item-holder",d=this.$slots.default,o=d[0].componentOptions,s=void 0,r=void 0,m={staticClass:"md-list-item",on:{click:function(){i.$emit("click")}}},l=function(i){return t("div",{staticClass:n},i)},a=function(){return d[0].data.staticClass=e+" "+n,d[0].data.directives=[{name:"md-ink-ripple"}],t("li",m,d)},c=function(){d.some(function(t,i){if(t.componentOptions&&"md-list-expand"===t.componentOptions.tag)return s=t,r=i,!0})},u=function(){return t("md-icon",{staticClass:"md-list-expand-indicator"},"keyboard_arrow_down")},f=function(t){t.$children.some(function(t){t.$el.classList.contains("md-list-expand")&&t.calculatePadding()})},p=function(t){var i=void 0;t.$parent.$children.some(function(t){var e=t.$el.classList;if(e.contains("md-list-item-expand")&&e.contains("md-active"))return i=t,e.remove("md-active"),f(t),!0}),i&&t.$el===i.$el||t.$el.classList.add("md-active")},E=function(){return d.splice(r,1),d.push(u()),t("button",{staticClass:e,on:{click:function(){p(i),i.$emit("click")}},directives:[{name:"md-ink-ripple"}]},[l(d)])},M=function(){return m.staticClass+=" md-list-item-expand",t("li",m,[E(),s])};if(o&&"router-link"===o.tag)return a();if(c(),s)return M();var A=t("md-button",{staticClass:e,attrs:{target:this.target,href:this.href,disabled:this.disabled}},[l(d)]);return this.target&&(A.data.attrs.rel="noopener"),t("li",m,[A])}},t.exports=i.default},81:function(t,i){},102:function(t,i){t.exports=".THEME_NAME .md-list,.THEME_NAME.md-list{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}.THEME_NAME .md-list.md-transparent,.THEME_NAME.md-list.md-transparent{background-color:transparent;color:inherit}.THEME_NAME .md-list .md-list-item .router-link-active.md-list-item-container,.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item .router-link-active.md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-primary .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-primary .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-accent .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container{color:ACCENT-COLOR}.THEME_NAME .md-list .md-list-item.md-accent .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container>.md-icon{color:ACCENT-COLOR}.THEME_NAME .md-list .md-list-item.md-warn .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container{color:WARN-COLOR}.THEME_NAME .md-list .md-list-item.md-warn .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container>.md-icon{color:WARN-COLOR}.THEME_NAME .md-list .md-list-item-expand .md-list-item-container,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container{background-color:BACKGROUND-COLOR-A100}.THEME_NAME .md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME .md-list .md-list-item-expand .md-list-item-container:focus,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus{background-color:rgba(153,153,153,0.2)}\n"},135:function(t,i,e){var n,d;e(81);var o=e(178);d=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(d=n=n.default),"function"==typeof d&&(d=d.options),d.render=o.render,d.staticRenderFns=o.staticRenderFns,t.exports=n},136:function(t,i,e){var n,d;n=e(47);var o=e(166);d=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(d=n=n.default),"function"==typeof d&&(d=d.options),d.render=o.render,d.staticRenderFns=o.staticRenderFns,t.exports=n},137:function(t,i,e){var n,d;n=e(48),d=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(d=n=n.default),"function"==typeof d&&(d=d.options),t.exports=n},166:function(t,i){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"md-list-expand",style:{"margin-bottom":t.height}},[t._t("default")])},staticRenderFns:[]}},178:function(t,i){t.exports={render:function(){var t=this;return t._h("ul",{staticClass:"md-list"},[t._t("default")])},staticRenderFns:[]}}})});