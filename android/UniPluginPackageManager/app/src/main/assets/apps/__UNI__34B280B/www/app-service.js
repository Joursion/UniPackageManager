(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0de9":function(t,e,n){"use strict";function o(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function i(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[i].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=o(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),a="";if(u.length>1){var c=u.pop();a=u.join("---COMMA---"),0===c.indexOf(" at ")?a+=c:a+="---COMMA---"+c}else a=u[0];console[i](a)}n.r(e),n.d(e,"log",(function(){return i})),n.d(e,"default",(function(){return u}))},"2ac4":function(t,e,n){"use strict";n("d0a7");var o=i(n("8bbf")),r=i(n("f5ed"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,r.default.mpType="app";var s=new o.default(a({},r.default));s.$mount()},"4db1":function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","text-area"),attrs:{_i:1}},[n("button",{attrs:{_i:2},on:{click:t.isRoot}}),n("button",{attrs:{_i:3},on:{click:t.install}}),n("button",{attrs:{_i:4},on:{click:t.uninstall}}),n("button",{attrs:{_i:5},on:{click:t.isRunning}}),n("button",{attrs:{_i:6},on:{click:t.openApp}}),n("button",{attrs:{_i:7},on:{click:t.getAppList}})])])},i=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}))},6446:function(t,e,n){"use strict";n.r(e);var o=n("ecd9"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"7afe":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.requireNativePlugin("Fvv-UniPackageManager"),o={data:function(){return{}},methods:{isRoot:function(){t("log",n.isRoot()," at pages/index/index.vue:23")},install:function(){n.install("/sdcard/1.apk",(function(e){t("log",e," at pages/index/index.vue:27")}))},uninstall:function(){n.uninstall("com.example.uniplugin_packagemanager",(function(e){t("log",e," at pages/index/index.vue:32")}))},isRunning:function(){t("log",n.isRunning("com.android.browser")," at pages/index/index.vue:36")},openApp:function(){n.openApp("com.android.browser")},getAppList:function(){n.getAppList((function(e){t("log",e," at pages/index/index.vue:43")}))}}};e.default=o}).call(this,n("0de9")["default"])},"7d75":function(t,e,n){"use strict";n.r(e);var o=n("7afe"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"8af9":function(t,e,n){"use strict";n.r(e);var o=n("4db1"),r=n("7d75");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var u,a=n("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=c.exports},"8bbf":function(t,e){t.exports=Vue},d0a7:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("8af9").default)}))},ecd9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function o(t,e,n,o,r,i,u,a,c,s){var f,l="function"===typeof t?t.options:t;if(c){l.components||(l.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(l.components,d)&&(l.components[d]=c[d])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(l.mixins||(l.mixins=[])).push(s)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=f):r&&(f=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(t,e){return f.call(e),v(t,e)}}else{var b=l.beforeCreate;l.beforeCreate=b?[].concat(b,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return o}))},f5ed:function(t,e,n){"use strict";n.r(e);var o=n("6446");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var i,u,a,c,s=n("f0c5"),f=Object(s["a"])(o["default"],i,u,!1,null,null,null,!1,a,c);e["default"]=f.exports}},[["2ac4","app-config"]]]);