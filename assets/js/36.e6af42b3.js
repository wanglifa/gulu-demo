(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{226:function(t,e,n){"use strict";var o=n(3),s=n(13),i=n(18),a=n(66),l=n(64),r=n(6),c=n(87).f,u=n(88).f,f=n(8).f,p=n(229).trim,d=o.Number,v=d,h=d.prototype,m="Number"==i(n(65)(h)),b="trim"in String.prototype,C=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,o,s,i=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+e}for(var a,r=e.slice(2),c=0,u=r.length;c<u;c++)if((a=r.charCodeAt(c))<48||a>s)return NaN;return parseInt(r,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?r(function(){h.valueOf.call(n)}):"Number"!=i(n))?a(new v(C(e)),n,d):C(e)};for(var _,g=n(7)?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;g.length>N;N++)s(v,_=g[N])&&!s(d,_)&&f(d,_,u(v,_));d.prototype=h,h.constructor=d,n(11)(o,"Number",d)}},229:function(t,e,n){var o=n(10),s=n(17),i=n(6),a=n(230),l="["+a+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(t,e,n){var s={},l=i(function(){return!!a[t]()||"​"!="​"[t]()}),r=s[t]=l?e(f):a[t];n&&(s[n]=r),o(o.P+o.F*l,"String",s)},f=u.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(r,"")),2&e&&(t=t.replace(c,"")),t};t.exports=u},230:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},246:function(t,e,n){},264:function(t,e,n){"use strict";var o=n(246);n.n(o).a},265:function(t,e,n){"use strict";n(226);var o,s={name:"LiFaToast",props:{autoClose:{type:[Boolean,Number],default:5,validator:function(t){return!1===t||"number"==typeof t}},enableHtml:{type:Boolean,default:!1},closeBtn:{type:Object,default:function(){return{text:"关闭",callback:void 0}}},position:{type:String,default:"top",validator:function(t){return["top","middle","bottom"].indexOf(t)>=0}}},created:function(){},computed:{toastClasses:function(){return"position-".concat(this.position)}},mounted:function(){this.updateStyles(),this.execAutoClose()},methods:{updateStyles:function(){this.$nextTick(function(){this.$refs.a.style.height=this.$refs.b.offsetHeight+"px"})},execAutoClose:function(){var t=this;this.autoClose&&setTimeout(function(){t.close()},1e3*this.autoClose)},close:function(){this.$el.remove(),this.$emit("close"),this.$destroy()},log:function(){console.log("aaaa")},onClickClose:function(){this.close(),this.closeBtn&&"function"==typeof this.closeBtn.callback&&this.closeBtn.callback(this)}}},i=(n(264),n(1)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:t.toastClasses},[n("div",{ref:"b",staticClass:"toast",on:{click:t.onClickClose}},[n("div",{staticClass:"message"},[t.enableHtml?n("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default")],2),t._v(" "),n("div",{ref:"a",staticClass:"line"}),t._v(" "),t.closeBtn?n("span",{staticClass:"close"},[t._v("\n        "+t._s(t.closeBtn.text)+"\n    ")]):t._e()])])},[],!1,null,"610cb11b",null).exports;e.a={install:function(t,e){t.prototype.$toast=function(e,n){o&&o.close(),o=function(t,e,n,o){var s=new(t.extend(a))({propsData:n});return s.$slots.default=[e],s.$mount(),s.$on("close",o),document.body.appendChild(s.$el),s}(t,e,n,function(){o=null})}}}},334:function(t,e,n){},415:function(t,e,n){"use strict";var o=n(334);n.n(o).a},458:function(t,e,n){"use strict";n.r(e);n(22);var o=n(265),s=n(238),i=n(0),a=n(224);i.a.use(o.a);var l={components:{LfButton:s.a,LfCollaspe:a.default},data:function(){return{content:'\n<style>\n\n</style>\n        \n        <div>\n          <lf-button @click="onClickClose">上方弹出</lf-button>\n        </div>\n\n        methods: {\n            onClickClose () {\n                this.$toast(\'<strong style="color:red;">加粗的提示</strong>\', {\n                    enableHtml: true\n                })\n            }\n        }\n      '.replace(/^ {8}/gm,"").trim()}},methods:{onClickClose:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},r=(n(415),n(1)),c=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("支持 HTML")]),t._v(" "),n("div",{staticClass:"demo-box"},[n("div",{staticClass:"top"},[n("lf-button",{on:{click:t.onClickClose}},[t._v("上方弹出")])],1),t._v(" "),n("lf-collaspe",[n("p",{attrs:{slot:"one"},slot:"one"},[t._v("\n        通过给"),n("code",[t._v("$toast")]),t._v("的第二个参数设置一个"),n("code",[t._v("enableHtml: true")]),t._v("就可以支持html。\n      ")]),t._v(" "),n("code",{attrs:{slot:"two"},slot:"two"},[t._v(t._s(t.content))])])],1)])},[],!1,null,"388e24af",null);e.default=c.exports}}]);