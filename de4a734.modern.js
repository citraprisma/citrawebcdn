(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7,8],{261:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function filter(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var path=i>=0?arguments[i]:t.cwd();if("string"!=typeof path)throw new TypeError("Arguments to path.resolve must be strings");path&&(e=path+"/"+e,r="/"===path.charAt(0))}return(r?"/":"")+(e=n(filter(e.split("/"),(function(p){return!!p})),!r).join("/"))||"."},e.normalize=function(path){var t=e.isAbsolute(path),l="/"===r(path,-1);return(path=n(filter(path.split("/"),(function(p){return!!p})),!t).join("/"))||t||(path="."),path&&l&&(path+="/"),(t?"/":"")+path},e.isAbsolute=function(path){return"/"===path.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(filter(t,(function(p,t){if("string"!=typeof p)throw new TypeError("Arguments to path.join must be strings");return p})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var l=r(t.split("/")),o=r(n.split("/")),c=Math.min(l.length,o.length),f=c,i=0;i<c;i++)if(l[i]!==o[i]){f=i;break}var m=[];for(i=f;i<l.length;i++)m.push("..");return(m=m.concat(o.slice(f))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(path){if("string"!=typeof path&&(path+=""),0===path.length)return".";for(var code=path.charCodeAt(0),t=47===code,e=-1,n=!0,i=path.length-1;i>=1;--i)if(47===(code=path.charCodeAt(i))){if(!n){e=i;break}}else n=!1;return-1===e?t?"/":".":t&&1===e?"/":path.slice(0,e)},e.basename=function(path,t){var e=function(path){"string"!=typeof path&&(path+="");var i,t=0,e=-1,n=!0;for(i=path.length-1;i>=0;--i)if(47===path.charCodeAt(i)){if(!n){t=i+1;break}}else-1===e&&(n=!1,e=i+1);return-1===e?"":path.slice(t,e)}(path);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},e.extname=function(path){"string"!=typeof path&&(path+="");for(var t=-1,e=0,n=-1,r=!0,l=0,i=path.length-1;i>=0;--i){var code=path.charCodeAt(i);if(47!==code)-1===n&&(r=!1,n=i+1),46===code?-1===t?t=i:1!==l&&(l=1):-1!==t&&(l=-1);else if(!r){e=i+1;break}}return-1===t||-1===n||0===l||1===l&&t===n-1&&t===e+1?"":path.slice(t,n)};var r="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(174))},262:function(t,e,n){t.exports={}},263:function(t,e,n){"use strict";n.r(e);n(18),n(54);var r=n(261),l={props:{n:{type:[String,Number],default:3,validation:t=>!/\D/.test(parseInt(t))},src:String,cols:{type:[String,Number],default:12},sm:{type:[String,Number],default:4}},computed:{alt(){return Object(r.basename)(this.src)}}},o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("row",t._l(parseInt(t.n),(function(i){return n("column",{key:i,attrs:{cols:t.cols,md:t.sm}},[n("nuxt-img",{staticClass:"service-img",attrs:{alt:t.alt+"_"+i,src:t.src+"_"+i+".jpg",loading:"lazy",sizes:"sm:90vw md:430px"}})],1)})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Column:n(172).default,Row:n(173).default})},264:function(t,e,n){"use strict";n(262)},265:function(t,e,n){"use strict";n.r(e);var r={props:{content:Array,title:String}},l=(n(264),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table-fixed table-2-column w-full"},[t.title?n("thead",[n("tr",[n("th",{staticClass:"text-left pl-0",attrs:{colspan:"2"}},[t._v(t._s(t.title))])])]):t._e(),t._v(" "),n("tbody",t._l(t.content,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"pl-0"},[t._v(t._s(e.left))]),t._v(" "),n("td",{staticClass:"pr-0"},[n("ul",[n("li",[t._v(t._s(e.right))])])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"page":{"title":"Services"},"subtitle":"Epoxy & PU Flooring","subsubtitle":"Used to beautify floors for factory, kitchen and public areas. Also available in Food Grades speciality","section1":{"title":"Floor Coating","content":"The clean environment comes from the clean floor. Create pure and pleasant atmosphere with the clean floor.","table1":{"title":"A. Epoxy coating & Lining","content":{"0":"Epoxy anti dust floor coating","1":"High intensity epoxy resin mortar","2":"Epoxy Embo coat","3":"Waterbourne epoxy floor coating","4":"Chemical resistance epoxy floor coating"}},"table2":{"title":"B. Urethane Coating","content":{"0":"Urethane anti dust floor coating"}},"table3":{"title":"C. Polyurea Floor Coating","content":{"0":"Polyurea waterproofing & floor coating"}}},"section2":{"title":"PU Flooring","content":"Tested and certified by TUV SUB PSB Singapore :JIS Z 2801:2000 Anti Microbial and SIRIM QAS:BS 6920:Port 1:2000 (Suitability of Non metallic Product for use in Contact with Water Intended for Human Cunsumption)","table4":{"content":{"0":"A highly durable polyurethane resin flooring coating"}}}},"id":{"page":{"title":"Layanan"},"subtitle":"Lantai Epoxy & PU","subsubtitle":"Digunakan untuk mempercantik lantai untuk pabrik, dapur dan area publik. Tersedia juga dalam spesialisasi Food Grade","section1":{"title":"Pelapis Lantai","content":"Lingkungan yang bersih berasal dari lantai yang bersih. Ciptakan suasana yang murni dan menyenangkan dengan lantai yang bersih.","table1":{"title":"A. Lapisan epoksi","content":{"0":"Pelapis lantai epoxy anti debu","1":"mortir resin epoksi intensitas tinggi","2":"Mantel epoksi Embo","3":"Pelapis lantai epoksi Waterbourne","4":"Pelapis lantai epoksi tahan kimia"}},"table2":{"title":"B. Lapisan Uretan","content":{"0":"Lapisan lantai anti debu Uretan"}},"table3":{"title":"C. Pelapis Lantai Polyurea","content":{"0":"Kedap air poliurea & pelapis lantai"}}},"section2":{"title":"Lantai PU","content":"Diuji dan disertifikasi oleh TUV SUB PSB Singapura :JIS Z 2801:2000 Anti Mikroba dan SIRIM QAS:BS 6920:Port 1:2000 (Kesesuaian Produk Non logam untuk digunakan dalam Kontak dengan Air yang Ditujukan untuk Konsumsi Manusia)","table4":{"content":{"0":"Pelapis lantai resin poliuretan yang sangat tahan lama"}}}}}'),delete t.options._Ctor}},293:function(t,e,n){"use strict";var r=n(273),l=n.n(r);e.default=l.a},305:function(t,e,n){"use strict";n.r(e);var r={head(){var t=this.$nuxtI18nHead({addSeoAttributes:!0});return{title:this.$t("page.title"),htmlAttrs:t.htmlAttrs,meta:t.meta,link:t.link}},computed:{table1(){return["KCC Unipoxy Floor Coating & Lining","KCC Unipoxy Resin Mortar","KCC Unipoxy Embo","KCC Supro Sunipoxy Coating","KCC Unipoxy Chemical Resistance"].map(((t,i)=>({left:t,right:this.$t("section1.table1.content."+i)})))},table2(){return["KCC Sporthane"].map(((t,i)=>({left:t,right:this.$t("section1.table2.content."+i)})))},table3(){return["KCC Hyperurea"].map(((t,i)=>({left:t,right:this.$t("section1.table3.content."+i)})))},table4(){return["KCC I-Krete"].map(((t,i)=>({left:t,right:this.$t("section2.table4.content."+i)})))}}},l=n(11),o=n(293),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("container",{staticClass:"my-2"},[n("h1",{staticClass:"text-3xl"},[t._v(t._s(t.$t("page.title")))]),t._v(" "),n("h2",{staticClass:"text-xl"},[t._v(t._s(t.$t("subtitle")))]),t._v(" "),n("p",{staticClass:"mb-6"},[t._v(t._s(t.$t("subsubtitle")))]),t._v(" "),n("h3",{staticClass:"text-xl text-orange underline mb-3"},[t._v(t._s(t.$t("section1.title")))]),t._v(" "),n("gallery-simple",{attrs:{src:"services/epoxy/coating"}}),t._v(" "),n("p",{staticClass:"mb-3"},[t._v(t._s(t.$t("section1.content")))]),t._v(" "),n("table-simple",{staticClass:"mb-3",attrs:{title:t.$t("section1.table1.title"),content:t.table1}}),t._v(" "),n("table-simple",{staticClass:"mb-3",attrs:{title:t.$t("section1.table2.title"),content:t.table2}}),t._v(" "),n("table-simple",{staticClass:"mb-6",attrs:{title:t.$t("section1.table3.title"),content:t.table3}}),t._v(" "),n("h3",{staticClass:"text-xl text-orange underline mb-3"},[t._v(t._s(t.$t("section2.title")))]),t._v(" "),n("gallery-simple",{attrs:{src:"services/epoxy/flooring"}}),t._v(" "),n("table-simple",{staticClass:"mb-3",attrs:{title:"",content:t.table4}}),t._v(" "),n("p",{staticClass:"mb-6"},[t._v(t._s(t.$t("section1.content")))])],1)],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{GallerySimple:n(263).default,TableSimple:n(265).default,Container:n(117).default})}}]);