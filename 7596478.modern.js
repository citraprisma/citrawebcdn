(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{164:function(t,e,r){"use strict";var n=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(t,e){return!1!==e.clone&&e.isMergeableObject(t)?y((r=t,Array.isArray(r)?[]:{}),t,e):t;var r}function f(t,source,e){return t.concat(source).map((function(element){return c(element,e)}))}function l(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(symbol){return t.propertyIsEnumerable(symbol)})):[]}(t))}function d(object,t){try{return t in object}catch(t){return!1}}function h(t,source,e){var r={};return e.isMergeableObject(t)&&l(t).forEach((function(n){r[n]=c(t[n],e)})),l(source).forEach((function(n){(function(t,e){return d(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,n)||(d(t,n)&&e.isMergeableObject(source[n])?r[n]=function(t,e){if(!e.customMerge)return y;var r=e.customMerge(t);return"function"==typeof r?r:y}(n,e)(t[n],source[n],e):r[n]=c(source[n],e))})),r}function y(t,source,e){(e=e||{}).arrayMerge=e.arrayMerge||f,e.isMergeableObject=e.isMergeableObject||n,e.cloneUnlessOtherwiseSpecified=c;var r=Array.isArray(source);return r===Array.isArray(t)?r?e.arrayMerge(t,source,e):h(t,source,e):c(source,e)}y.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,r){return y(t,r,e)}),{})};var v=y;t.exports=v},165:function(t,e,r){"use strict";r.r(e),r.d(e,"getImage",(function(){return y}));r(67),r(18),r(44),r(51);var n=r(13),o=r(70),c=r(30),f=t=>t.startsWith("#")?t.replace("#","rgb_"):t,l=t=>t.replace(/\.[^/.]+$/,""),d=Object(c.a)({keyMap:{fit:"c",width:"w",height:"h",format:"f",quality:"q",background:"b",rotate:"a",roundCorner:"r",gravity:"g",effect:"e",color:"co",flags:"fl",dpr:"dpr",opacity:"o",overlay:"l",underlay:"u",transformation:"t",zoom:"z",colorSpace:"cs",customFunc:"fn",density:"dpi"},valueMap:{fit:{fill:"fill",inside:"pad",outside:"lpad",cover:"fit",contain:"scale",minCover:"mfit",minInside:"mpad",thumbnail:"thumb",cropping:"crop",coverLimit:"limit"},format:{jpeg:"jpg"},background:t=>f(t),color:t=>f(t),gravity:{auto:"auto",subject:"auto:subject",face:"face",sink:"sink",faceCenter:"face:center",multipleFaces:"faces",multipleFacesCenter:"faces:center",north:"north",northEast:"north_east",northWest:"north_west",west:"west",southWest:"south_west",south:"south",southEast:"south_east",east:"east",center:"center"}},joinWith:",",formatter:(t,e)=>"".concat(t,"_").concat(e)}),h={format:"auto",quality:"auto"},y=function(t){var{modifiers:e={},baseURL:r="/"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Object(o.a)(e,h),f=d(c),y=r.match(/\/image\/upload\/(.*)/);if((null==y?void 0:y.length)>=1){var v=y[1],m=r.replace(v,"");return{url:Object(n.e)(m,f,v,t)}}return t=/\/image\/fetch\/?/.test(r)?Object(n.b)(t):l(t),{url:Object(n.e)(r,f,t)}}},171:function(t,e,r){"use strict";r.r(e),r.d(e,"getImage",(function(){return h})),r.d(e,"supportsAlias",(function(){return y}));var n=r(10),o=r(13),c=r(30),f=Object(c.a)({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:",",formatter:(t,e)=>Object(o.a)(t)+"_"+Object(o.a)(e)});function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=(t,e,r)=>d(d({},function(t){var{modifiers:e={},baseURL:r="/_ipx"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{nuxtContext:{base:n="/"}={}}=arguments.length>2?arguments[2]:void 0;e.width&&e.height&&(e.resize="".concat(e.width,"x").concat(e.height),delete e.width,delete e.height);var c=f(e)||"_";return{url:Object(o.e)(n,r,c,Object(o.b)(t))}}(t,e,r)),{},{isStatic:!0}),y=!0},177:function(t,e,r){(function(t){t.installComponents=function(component,t){var r="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(r.components=component.exports.options.components),r.components=r.components||{},t)r.components[i]=r.components[i]||t[i];r.functional&&function(component,t){if(component.exports[e])return;component.exports[e]=!0;var r=component.exports.render;component.exports.render=function(e,n){return r(e,Object.assign({},n,{_c:function(e,a,b){return n._c(t[e]||e,a,b)}}))}}(component,r.components)};var e="_functionalComponents"}).call(this,r(37))},260:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r(4),o=r(10),c=(r(67),r(15),r(17),r(18),r(45),r(251),r(43),r(54),r(155),r(162),r(70)),f=r(13);r(25);function l(t,e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)((function*(t,e){var r=v(t),n="image:meta:"+e;if(r.has(n))return r.get(n);var meta=yield h(e).catch((t=>(console.error("Failed to get image meta for "+e,t+""),{width:0,height:0,ratio:0})));return r.set(n,meta),meta}))).apply(this,arguments)}function h(t){return y.apply(this,arguments)}function y(){return(y=Object(n.a)((function*(t){if("undefined"==typeof Image)throw new TypeError("Image not supported");return new Promise(((e,r)=>{var img=new Image;img.onload=()=>{var meta={width:img.width,height:img.height,ratio:img.width/img.height};e(meta)},img.onerror=t=>r(t),img.src=t}))}))).apply(this,arguments)}function v(t){if(!t.nuxtContext.cache)if(t.nuxtContext.ssrContext&&t.nuxtContext.ssrContext.cache)t.nuxtContext.cache=t.nuxtContext.ssrContext.cache;else{var e={};t.nuxtContext.cache={get:t=>e[t],set:(t,r)=>{e[t]=r},has:t=>void 0!==e[t]}}return t.nuxtContext.cache}var m=r(30),O={};function j(){if(void 0!==window.$nuxt){var t,e,r,n=(null===(t=window.$nuxt._pagePayload)||void 0===t||null===(e=t.data)||void 0===e||null===(r=e[0])||void 0===r?void 0:r._img)||{};Object.assign(O,n)}else if(void 0!==window.__NUXT__){var o,c=(null===(o=window.__NUXT__)||void 0===o?void 0:o._img)||{};Object.assign(O,c)}}function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function x(t,e){var r=function(t){var e;return j(),t&&(null===(e=t.app.router)||void 0===e||e.afterEach(j)),window.onNuxtReady&&window.onNuxtReady(j),O}(e),n={options:t,nuxtContext:e},o=function(input){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},image=_(n,input,t);return image.isStatic&&l(image,input),image},f=function(input){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o(input,S(S({},e),{},{modifiers:Object(c.a)(t,e.modifiers||{})})).url};function l(image,input){if("fetchPayload"in window.$nuxt){var t=r[image.url];return image.url=t||input,image}}var d=function(e){f[e]=(source,r,n)=>f(source,r,S(S({},t.presets[e]),n))};for(var h in t.presets)d(h);return f.options=t,f.getImage=o,f.getMeta=(input,t)=>function(t,e,r){return P.apply(this,arguments)}(n,input,t),f.getSizes=(input,t)=>function(t,input,e){var r,n,o=Object(m.c)(null===(r=e.modifiers)||void 0===r?void 0:r.width),c=Object(m.c)(null===(n=e.modifiers)||void 0===n?void 0:n.height),f=o&&c?c/o:0,l=[],d={};if("string"==typeof e.sizes)for(var h of e.sizes.split(/[\s,]+/).filter((t=>t))){var s=h.split(":");2===s.length&&(d[s[0].trim()]=s[1].trim())}else Object.assign(d,e.sizes);for(var y in d){var v=t.options.screens&&t.options.screens[y]||parseInt(y),O=String(d[y]),j=O.endsWith("vw");if(!j&&/^\d+$/.test(O)&&(O+="px"),j||O.endsWith("px")){var w=parseInt(O);if(v&&w){j&&(w=Math.round(w/100*v));var x=f?Math.round(w*f):c;l.push({width:w,size:O,screenMaxWidth:v,media:"(max-width: ".concat(v,"px)"),src:t.$img(input,S(S({},e.modifiers),{},{width:w,height:x}),e)})}}}l.sort(((t,e)=>t.screenMaxWidth-e.screenMaxWidth));var P=l[l.length-1];P&&(P.media="");return{sizes:l.map((t=>"".concat(t.media?t.media+" ":"").concat(t.size))).join(", "),srcset:l.map((t=>"".concat(t.src," ").concat(t.width,"w"))).join(", "),src:null==P?void 0:P.src}}(n,input,t),n.$img=f,f}function P(){return(P=Object(n.a)((function*(t,input,e){var image=_(t,input,S({},e));return"function"==typeof image.getMeta?yield image.getMeta():yield l(t,image.url)}))).apply(this,arguments)}function _(t,input,e){var r,n;if("string"!=typeof input||""===input)throw new TypeError("input must be a string (received ".concat(typeof input,": ").concat(JSON.stringify(input),")"));if(input.startsWith("data:"))return{url:input};var{provider:o,defaults:l}=function(t,e){var r=t.options.providers[e];if(!r)throw new Error("Unknown provider: "+e);return r}(t,e.provider||t.options.provider),d=function(t,e){if(!e)return{};if(!t.options.presets[e])throw new Error("Unknown preset: "+e);return t.options.presets[e]}(t,e.preset);if(input=Object(f.c)(input)?input:Object(f.h)(input),!o.supportsAlias)for(var base in t.options.alias)input.startsWith(base)&&(input=Object(f.e)(t.options.alias[base],input.substr(base.length)));if(o.validateDomains&&Object(f.c)(input)){var h=Object(f.g)(input).host;if(!t.options.domains.find((t=>t===h)))return{url:input}}var y=Object(c.a)(e,d,l);y.modifiers=S({},y.modifiers);var v=y.modifiers.format;null!==(r=y.modifiers)&&void 0!==r&&r.width&&(y.modifiers.width=Object(m.c)(y.modifiers.width)),null!==(n=y.modifiers)&&void 0!==n&&n.height&&(y.modifiers.height=Object(m.c)(y.modifiers.height));var image=o.getImage(input,y,t);return image.format=image.format||v||"",image}},30:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return f}));r(25),r(54),r(18),r(45),r(44),r(15),r(17),r(51);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split(/[?#]/).shift().split("/").pop().split(".").pop();return e}function o(map){return t=>t?map[t]||t:map.missingValue}function c(){var{formatter:t,keyMap:e,joinWith:r="/",valueMap:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t||(t=(t,e)=>"".concat(t,"=").concat(e)),e&&"function"!=typeof e&&(e=o(e));var map=n||{};return Object.keys(map).forEach((t=>{"function"!=typeof map[t]&&(map[t]=o(map[t]))})),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.entries(n).filter((t=>{var[e,r]=t;return void 0!==r})).map((r=>{var[o,c]=r,f=map[o];return"function"==typeof f&&(c=f(n[o])),o="function"==typeof e?e(o):o,t(o,c)}));return o.join(r)}}function f(){var input=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"number"==typeof input?input:"string"==typeof input&&input.replace("px","").match(/^\d+$/g)?parseInt(input,10):void 0}},53:function(t,e,r){"use strict";function n(t,e,r){"object"==typeof r.value&&(r.value=o(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==e?t[e]=r.value:Object.defineProperty(t,e,r)}function o(t){if("object"!=typeof t)return t;var e,r,c,i=0,f=Object.prototype.toString.call(t);if("[object Object]"===f?c=Object.create(t.__proto__||null):"[object Array]"===f?c=Array(t.length):"[object Set]"===f?(c=new Set,t.forEach((function(t){c.add(o(t))}))):"[object Map]"===f?(c=new Map,t.forEach((function(t,e){c.set(o(e),o(t))}))):"[object Date]"===f?c=new Date(+t):"[object RegExp]"===f?c=new RegExp(t.source,t.flags):"[object DataView]"===f?c=new t.constructor(o(t.buffer)):"[object ArrayBuffer]"===f?c=t.slice(0):"Array]"===f.slice(-6)&&(c=new t.constructor(t)),c){for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n(c,r[i],Object.getOwnPropertyDescriptor(t,r[i]));for(i=0,r=Object.getOwnPropertyNames(t);i<r.length;i++)Object.hasOwnProperty.call(c,e=r[i])&&c[e]===t[e]||n(c,e,Object.getOwnPropertyDescriptor(t,e))}return c||t}r.d(e,"a",(function(){return o}))},70:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));r(43),r(50),r(146);function n(t){return null!==t&&"object"==typeof t}function o(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",c=arguments.length>3?arguments[3]:void 0;if(!n(e))return o(t,{},r,c);var f=Object.assign({},e);for(var l in t)if("__proto__"!==l&&"constructor"!==l){var d=t[l];null!=d&&(c&&c(f,l,d,r)||(Array.isArray(d)&&Array.isArray(f[l])?f[l]=f[l].concat(d):n(d)&&n(f[l])?f[l]=o(d,f[l],(r?"".concat(r,"."):"")+l.toString(),c):f[l]=d))}return f}function c(t){return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(((p,e)=>o(p,e,"",t)),{})}}var f=c();f.fn=c(((t,e,r,n)=>{if(void 0!==t[e]&&"function"==typeof r)return t[e]=r(t[e]),!0})),f.arrayFn=c(((t,e,r,n)=>{if(Array.isArray(t[e])&&"function"==typeof r)return t[e]=r(t[e]),!0})),f.extend=c},86:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(10),o=(r(33),r(30));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},loading:{type:String,default:void 0},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)}},computed:{nImgAttrs(){return{width:Object(o.c)(this.width),height:Object(o.c)(this.height),alt:this.alt,referrerpolicy:this.referrerpolicy,usemap:this.usemap,longdesc:this.longdesc,ismap:this.ismap,crossorigin:!0===this.crossorigin?"anonymous":this.crossorigin||void 0,loading:this.loading,decoding:this.decoding}},nModifiers(){return f(f({},this.modifiers),{},{width:Object(o.c)(this.width),height:Object(o.c)(this.height),format:this.format,quality:this.quality,background:this.background,fit:this.fit})},nOptions(){return{provider:this.provider,preset:this.preset}}}}},88:function(t,e,r){"use strict";var n=r(10),o=r(86),c=r(30);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"NuxtImg",mixins:[o.a],head(){if(!0===this.preload)return{link:[{rel:"preload",as:"image",href:this.nSrc}]}},computed:{nAttrs(){var t=this.nImgAttrs;if(this.sizes){var{sizes:e,srcset:r}=this.nSizes;t.sizes=e,t.srcset=r}return t},nSrc(){return this.sizes?this.nSizes.src:this.$img(this.src,this.nModifiers,this.nOptions)},nSizes(){return this.$img.getSizes(this.src,l(l({},this.nOptions),{},{sizes:this.sizes,modifiers:l(l({},this.nModifiers),{},{width:Object(c.c)(this.width),height:Object(c.c)(this.height)})}))}},created(){0}},h=r(11),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",t._g(t._b({key:t.nSrc,attrs:{src:t.nSrc}},"img",t.nAttrs,!1),t.$listeners))}),[],!1,null,null,null);e.a=component.exports},89:function(t,e,r){"use strict";var n=r(10),o=(r(33),r(86)),c=r(30);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"NuxtPicture",mixins:[o.a],props:{legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},head(){if(!0===this.preload){var t=void 0!==this.nSources[1]?1:0,link={rel:"preload",as:"image",imagesrcset:this.nSources[t].srcset};return void 0!==this.nSources[t].sizes&&(link.imagesizes=this.nSources[t].sizes),{link:[link]}}},computed:{isTransparent(){return["png","webp","gif"].includes(this.originalFormat)},originalFormat(){return Object(c.b)(this.src)},nFormat(){return this.format?this.format:"svg"===this.originalFormat?"svg":"webp"},nLegacyFormat(){return this.legacyFormat?this.legacyFormat:{webp:this.isTransparent?"png":"jpeg",svg:"png"}[this.nFormat]||this.originalFormat},nSources(){return"svg"===this.nFormat?[{srcset:this.src}]:(this.nLegacyFormat!==this.nFormat?[this.nLegacyFormat,this.nFormat]:[this.nFormat]).map((t=>{var{srcset:e,sizes:r,src:n}=this.$img.getSizes(this.src,l(l({},this.nOptions),{},{sizes:this.sizes||this.$img.options.screens,modifiers:l(l({},this.nModifiers),{},{format:t})}));return{src:n,type:"image/".concat(t),sizes:r,srcset:e}}))}},created(){0}},h=r(11),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{key:t.nSources[0].src},[t.nSources[1]?r("source",{attrs:{type:t.nSources[1].type,srcset:t.nSources[1].srcset,sizes:t.nSources[1].sizes}}):t._e(),t._v(" "),r("img",t._g(t._b({attrs:{src:t.nSources[0].src,srcset:t.nSources[0].srcset,sizes:t.nSources[0].sizes}},"img",Object.assign({},t.nImgAttrs,t.imgAttrs),!1),t.$listeners))])}),[],!1,null,null,null);e.a=component.exports}}]);