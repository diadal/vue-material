!function(t,d){"object"==typeof exports&&"object"==typeof module?module.exports=d():"function"==typeof define&&define.amd?define([],d):"object"==typeof exports?exports.VueMaterial=d():t.VueMaterial=d()}(this,function(){return function(t){function d(n){if(o[n])return o[n].exports;var e=o[n]={exports:{},id:n,loaded:!1};return t[n].call(e.exports,e,e.exports,d),e.loaded=!0,e.exports}var o={};return d.m=t,d.c=o,d.p="/",d(0)}({0:function(t,d,o){t.exports=o(10)},10:function(t,d,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function e(t){t.component("md-button",t.extend(r.default)),t.material.styles.push(i.default)}Object.defineProperty(d,"__esModule",{value:!0}),d.default=e;var a=o(128),r=n(a),m=o(105),i=n(m);t.exports=d.default},38:function(t,d){"use strict";function o(t){if(Array.isArray(t)){for(var d=0,o=Array(t.length);d<t.length;d++)o[d]=t[d];return o}return Array.from(t)}Object.defineProperty(d,"__esModule",{value:!0}),d.default={props:{href:String,type:String,disabled:Boolean},render:function(t){var d=this,n=Boolean(this.disabled),e=Boolean(this.href),a="button",r={staticClass:"md-button",attrs:{type:this.type||"button",disabled:n},on:{click:function(t){d.$emit("click",t)}}},m=t("md-ink-ripple",{attrs:{mdDisabled:n}});return e&&(a="a",r.attrs.href=this.href,delete r.attrs.type),t(a,r,[].concat(o(this.$slots.default),[m]))}},t.exports=d.default},95:function(t,d){},105:function(t,d){t.exports=".THEME_NAME .md-button:not([disabled]).md-raised:not(.md-icon-button),.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button){color:BACKGROUND-COLOR-900;background-color:BACKGROUND-COLOR-50}.THEME_NAME .md-button:not([disabled]).md-raised:not(.md-icon-button):hover,.THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME .md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised),.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised){color:BACKGROUND-COLOR}.THEME_NAME .md-button:not([disabled]).md-fab,.THEME_NAME.md-button:not([disabled]).md-fab{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME .md-button:not([disabled]).md-fab:hover,.THEME_NAME.md-button:not([disabled]).md-fab:hover{background-color:ACCENT-COLOR-600}.THEME_NAME .md-button:not([disabled]).md-fab.md-clean,.THEME_NAME.md-button:not([disabled]).md-fab.md-clean{color:BACKGROUND-COLOR-900;background-color:BACKGROUND-COLOR-50}.THEME_NAME .md-button:not([disabled]).md-fab.md-clean:hover,.THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover{background-color:BACKGROUND-COLOR-200}.THEME_NAME .md-button:not([disabled]).md-primary:not(.md-icon-button),.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button){color:PRIMARY-COLOR}.THEME_NAME .md-button:not([disabled]).md-primary.md-raised,.THEME_NAME .md-button:not([disabled]).md-primary.md-fab,.THEME_NAME.md-button:not([disabled]).md-primary.md-raised,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME .md-button:not([disabled]).md-primary.md-raised:hover,.THEME_NAME .md-button:not([disabled]).md-primary.md-fab:hover,.THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover{background-color:PRIMARY-COLOR-600}.THEME_NAME .md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised),.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised){color:PRIMARY-COLOR}.THEME_NAME .md-button:not([disabled]).md-accent:not(.md-icon-button),.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button){color:ACCENT-COLOR}.THEME_NAME .md-button:not([disabled]).md-accent.md-raised,.THEME_NAME.md-button:not([disabled]).md-accent.md-raised{background-color:ACCENT-COLOR;color:ACCENT-CONTRAST}.THEME_NAME .md-button:not([disabled]).md-accent.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover{background-color:ACCENT-COLOR-600}.THEME_NAME .md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised),.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised){color:ACCENT-COLOR}.THEME_NAME .md-button:not([disabled]).md-warn:not(.md-icon-button),.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button){color:WARN-COLOR}.THEME_NAME .md-button:not([disabled]).md-warn.md-raised,.THEME_NAME .md-button:not([disabled]).md-warn.md-fab,.THEME_NAME.md-button:not([disabled]).md-warn.md-raised,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab{background-color:WARN-COLOR;color:WARN-CONTRAST}.THEME_NAME .md-button:not([disabled]).md-warn.md-raised:hover,.THEME_NAME .md-button:not([disabled]).md-warn.md-fab:hover,.THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover,.THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover{background-color:WARN-COLOR-600}.THEME_NAME .md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised),.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised){color:WARN-COLOR}\n"},128:function(t,d,o){var n,e;o(95),n=o(38),e=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(e=n=n.default),"function"==typeof e&&(e=e.options),t.exports=n}})});