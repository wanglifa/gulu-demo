(window.webpackJsonp=window.webpackJsonp||[]).push([[8,43],{223:function(t,s,n){},224:function(t,s,n){"use strict";n.r(s);var o={name:"collspse-demo",data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}}},e=(n(227),n(1)),a=Object(e.a)(o,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"toggle-line"},[n("div",{staticClass:"bottom",class:{active:t.isActive}},[t._t("one"),t._v(" "),n("pre",[t._t("two")],2)],2),t._v(" "),n("div",{staticClass:"control",on:{click:t.toggle}},[t.isActive?n("div",[t._v("\n            ▲"),n("span",[t._v("隐藏代码")])]):n("div",[t._v("\n            ▼"),n("span",[t._v("显示代码")])])])])},[],!1,null,"1cbd7bc8",null);s.default=a.exports},226:function(t,s,n){"use strict";var o=n(3),e=n(13),a=n(18),l=n(66),i=n(64),c=n(6),r=n(87).f,f=n(88).f,d=n(8).f,u=n(229).trim,v=o.Number,p=v,m=v.prototype,C="Number"==a(n(65)(m)),g="trim"in String.prototype,h=function(t){var s=i(t,!1);if("string"==typeof s&&s.length>2){var n,o,e,a=(s=g?s.trim():u(s,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(s.charCodeAt(1)){case 66:case 98:o=2,e=49;break;case 79:case 111:o=8,e=55;break;default:return+s}for(var l,c=s.slice(2),r=0,f=c.length;r<f;r++)if((l=c.charCodeAt(r))<48||l>e)return NaN;return parseInt(c,o)}}return+s};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var s=arguments.length<1?0:t,n=this;return n instanceof v&&(C?c(function(){m.valueOf.call(n)}):"Number"!=a(n))?l(new p(h(s)),n,v):h(s)};for(var _,w=n(7)?r(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)e(p,_=w[b])&&!e(v,_)&&d(v,_,f(p,_));v.prototype=m,m.constructor=v,n(11)(o,"Number",v)}},227:function(t,s,n){"use strict";var o=n(223);n.n(o).a},229:function(t,s,n){var o=n(10),e=n(17),a=n(6),l=n(230),i="["+l+"]",c=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),f=function(t,s,n){var e={},i=a(function(){return!!l[t]()||"​"!="​"[t]()}),c=e[t]=i?s(d):l[t];n&&(e[n]=c),o(o.P+o.F*i,"String",e)},d=f.trim=function(t,s){return t=String(e(t)),1&s&&(t=t.replace(c,"")),2&s&&(t=t.replace(r,"")),t};t.exports=f},230:function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},241:function(t,s,n){},242:function(t,s,n){},247:function(t,s,n){"use strict";var o=n(10),e=n(89)(!0);o(o.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),n(90)("includes")},248:function(t,s,n){"use strict";var o=n(10),e=n(257);o(o.P+o.F*n(258)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},257:function(t,s,n){var o=n(67),e=n(17);t.exports=function(t,s,n){if(o(s))throw TypeError("String#"+n+" doesn't accept regex!");return String(e(t))}},258:function(t,s,n){var o=n(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(n){try{return s[o]=!1,!"/./"[t](s)}catch(t){}}return!0}},259:function(t,s,n){"use strict";var o=n(241);n.n(o).a},260:function(t,s,n){"use strict";var o=n(242);n.n(o).a},268:function(t,s,n){"use strict";n(14),n(247),n(248),n(226);var o={name:"LiFaRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){var t=this.align;return t&&"align-".concat(t)}},mounted:function(){var t=this;this.$children.forEach(function(s){s.gutter=t.gutter})}},e=(n(259),n(1)),a=Object(e.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle,attrs:{gutter:this.gutter,align:this.align}},[this._t("default")],2)},[],!1,null,"78d20aa0",null);s.a=a.exports},269:function(t,s,n){"use strict";var o=n(9),e=(n(226),n(247),n(248),n(14),n(19),n(25),function(t){var s=Object.keys(t),n=!0;return s.forEach(function(t){["span","offset"].includes(t)||(n=!1)}),n}),a={name:"LiFaCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:{type:[Number,String]}}},methods:{createClasses:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return t&&(t.span&&n.push("col-".concat(s).concat(t.span)),t.offset&&n.push("offset-".concat(s).concat(t.offset))),n}},computed:{colClass:function(){var t=this.span,s=this.offset,n=this.ipad,e=this.narrowPc,a=this.pc,l=this.widePc,i=this.createClasses;return Object(o.a)(i({span:t,offset:s})).concat(Object(o.a)(i(n,"ipad-")),Object(o.a)(i(e,"narrow-pc-")),Object(o.a)(i(a,"pc-")),Object(o.a)(i(l,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},l=(n(260),n(1)),i=Object(l.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"ab62a136",null);s.a=i.exports},293:function(t,s,n){},377:function(t,s,n){"use strict";var o=n(293);n.n(o).a},432:function(t,s,n){"use strict";n.r(s);n(22);var o=n(268),e=n(269),a=n(224),l={components:{LfRow:o.a,LfCol:e.a,LfCollaspe:a.default},data:function(){return{content:'\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="8">\n            <div class="demoCol">8</div>\n          </lf-col>\n          <lf-col span="8" offset="8">\n            <div class="demoCol">8</div>\n          </lf-col>\n        </lf-row>\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n          <lf-col span="6" offset="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n        </lf-row>\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="4">\n            <div class="demoCol">4</div>\n          </lf-col>\n          <lf-col span="4" offset="4">\n            <div class="demoCol">4</div>\n          </lf-col>\n          <lf-col span="4" offset="8">\n            <div class="demoCol">4</div>\n          </lf-col>\n        </lf-row>\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n          <lf-col span="2" offset="2">\n            <div class="demoCol">2</div>\n          </lf-col>\n        </lf-row>\n    '.replace(/^ {8}/gm,"").trim()}}},i=(n(377),n(1)),c=Object(i.a)(l,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("使用offset属性设置空隙")]),t._v(" "),n("div",{staticClass:"demo-box"},[n("div",{staticClass:"top"},[n("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("lf-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("lf-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("lf-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("lf-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),n("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("lf-col",{attrs:{span:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("lf-col",{attrs:{span:"4",offset:"4"}},[n("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),n("lf-col",{attrs:{span:"4",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),n("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("lf-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),n("lf-col",{attrs:{span:"2",offset:"2"}},[n("div",{staticClass:"demoCol"},[t._v("2")])])],1)],1),t._v(" "),n("lf-collaspe",[n("p",{attrs:{slot:"one"},slot:"one"}),t._v(" "),n("code",{attrs:{slot:"two"},slot:"two"},[t._v(t._s(t.content))])])],1)])},[],!1,null,"62bbe527",null);s.default=c.exports}}]);