(window.webpackJsonp=window.webpackJsonp||[]).push([[7,43],{223:function(t,n,e){},224:function(t,n,e){"use strict";e.r(n);var s={name:"collspse-demo",data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}}},r=(e(227),e(1)),a=Object(r.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toggle-line"},[e("div",{staticClass:"bottom",class:{active:t.isActive}},[t._t("one"),t._v(" "),e("pre",[t._t("two")],2)],2),t._v(" "),e("div",{staticClass:"control",on:{click:t.toggle}},[t.isActive?e("div",[t._v("\n            ▲"),e("span",[t._v("隐藏代码")])]):e("div",[t._v("\n            ▼"),e("span",[t._v("显示代码")])])])])},[],!1,null,"1cbd7bc8",null);n.default=a.exports},226:function(t,n,e){"use strict";var s=e(3),r=e(13),a=e(18),i=e(66),o=e(64),c=e(6),l=e(87).f,u=e(88).f,f=e(8).f,v=e(229).trim,d=s.Number,p=d,g=d.prototype,h="Number"==a(e(65)(g)),_="trim"in String.prototype,m=function(t){var n=o(t,!1);if("string"==typeof n&&n.length>2){var e,s,r,a=(n=_?n.trim():v(n,3)).charCodeAt(0);if(43===a||45===a){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+n}for(var i,c=n.slice(2),l=0,u=c.length;l<u;l++)if((i=c.charCodeAt(l))<48||i>r)return NaN;return parseInt(c,s)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(h?c(function(){g.valueOf.call(e)}):"Number"!=a(e))?i(new p(m(n)),e,d):m(n)};for(var C,w=e(7)?l(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)r(p,C=w[b])&&!r(d,C)&&f(d,C,u(p,C));d.prototype=g,g.constructor=d,e(11)(s,"Number",d)}},227:function(t,n,e){"use strict";var s=e(223);e.n(s).a},229:function(t,n,e){var s=e(10),r=e(17),a=e(6),i=e(230),o="["+i+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),u=function(t,n,e){var r={},o=a(function(){return!!i[t]()||"​"!="​"[t]()}),c=r[t]=o?n(f):i[t];e&&(r[e]=c),s(s.P+s.F*o,"String",r)},f=u.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(l,"")),t};t.exports=u},230:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},241:function(t,n,e){},242:function(t,n,e){},247:function(t,n,e){"use strict";var s=e(10),r=e(89)(!0);s(s.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(90)("includes")},248:function(t,n,e){"use strict";var s=e(10),r=e(257);s(s.P+s.F*e(258)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},257:function(t,n,e){var s=e(67),r=e(17);t.exports=function(t,n,e){if(s(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(r(t))}},258:function(t,n,e){var s=e(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[s]=!1,!"/./"[t](n)}catch(t){}}return!0}},259:function(t,n,e){"use strict";var s=e(241);e.n(s).a},260:function(t,n,e){"use strict";var s=e(242);e.n(s).a},268:function(t,n,e){"use strict";e(14),e(247),e(248),e(226);var s={name:"LiFaRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){var t=this.align;return t&&"align-".concat(t)}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},r=(e(259),e(1)),a=Object(r.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle,attrs:{gutter:this.gutter,align:this.align}},[this._t("default")],2)},[],!1,null,"78d20aa0",null);n.a=a.exports},269:function(t,n,e){"use strict";var s=e(9),r=(e(226),e(247),e(248),e(14),e(19),e(25),function(t){var n=Object.keys(t),e=!0;return n.forEach(function(t){["span","offset"].includes(t)||(e=!1)}),e}),a={name:"LiFaCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:r},narrowPc:{type:Object,validator:r},pc:{type:Object,validator:r},widePc:{type:Object,validator:r}},data:function(){return{gutter:{type:[Number,String]}}},methods:{createClasses:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=[];return t&&(t.span&&e.push("col-".concat(n).concat(t.span)),t.offset&&e.push("offset-".concat(n).concat(t.offset))),e}},computed:{colClass:function(){var t=this.span,n=this.offset,e=this.ipad,r=this.narrowPc,a=this.pc,i=this.widePc,o=this.createClasses;return Object(s.a)(o({span:t,offset:n})).concat(Object(s.a)(o(e,"ipad-")),Object(s.a)(o(r,"narrow-pc-")),Object(s.a)(o(a,"pc-")),Object(s.a)(o(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(e(260),e(1)),o=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"ab62a136",null);n.a=o.exports},292:function(t,n,e){},376:function(t,n,e){"use strict";var s=e(292);e.n(s).a},433:function(t,n,e){"use strict";e.r(n);e(22);var s=e(268),r=e(269),a=e(224),i={components:{LfRow:s.a,LfCol:r.a,LfCollaspe:a.default},data:function(){return{content:'\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="8">\n            <div class="demoCol">8</div>\n          </lf-col>\n          <lf-col span="8">\n            <div class="demoCol">8</div>\n          </lf-col>\n          <lf-col span="8">\n            <div class="demoCol">8</div>\n          </lf-col>\n        </lf-row>\n\n        <lf-row class="demoRow" gutter="10">\n          <lf-col span="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n          <lf-col span="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n          <lf-col span="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n          <lf-col span="6">\n            <div class="demoCol">6</div>\n          </lf-col>\n        </lf-row>\n    '.replace(/^ {8}/gm,"").trim()}}},o=(e(376),e(1)),c=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("设置 gutter")]),t._v(" "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"top"},[e("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("lf-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("lf-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),e("lf-col",{attrs:{span:"8"}},[e("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),e("lf-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[e("lf-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("lf-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("lf-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),e("lf-col",{attrs:{span:"6"}},[e("div",{staticClass:"demoCol"},[t._v("6")])])],1)],1),t._v(" "),e("lf-collaspe",[e("p",{attrs:{slot:"one"},slot:"one"},[t._v("\n        通过给"),e("code",[t._v("lf-row")]),t._v("标签添加"),e("code",[t._v("gutter")]),t._v("属性来设置"),e("code",[t._v("lf-col")]),t._v("之间的间隔。\n      ")]),t._v(" "),e("code",{attrs:{slot:"two"},slot:"two"},[t._v(t._s(t.content))])])],1)])},[],!1,null,"01273880",null);n.default=c.exports}}]);