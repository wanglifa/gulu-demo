(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{226:function(t,e,n){"use strict";var i=n(3),r=n(13),a=n(18),s=n(66),o=n(64),l=n(6),u=n(87).f,c=n(88).f,f=n(8).f,p=n(229).trim,d=i.Number,v=d,m=d.prototype,h="Number"==a(n(65)(m)),g="trim"in String.prototype,L=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,a=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,l=e.slice(2),u=0,c=l.length;u<c;u++)if((s=l.charCodeAt(u))<48||s>r)return NaN;return parseInt(l,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(h?l(function(){m.valueOf.call(n)}):"Number"!=a(n))?s(new v(L(e)),n,d):L(e)};for(var N,y=n(7)?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)r(v,N=y[_])&&!r(d,N)&&f(d,N,c(v,N));d.prototype=m,m.constructor=d,n(11)(i,"Number",d)}},229:function(t,e,n){var i=n(10),r=n(17),a=n(6),s=n(230),o="["+s+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var r={},o=a(function(){return!!s[t]()||"​"!="​"[t]()}),l=r[t]=o?e(f):s[t];n&&(r[n]=l),i(i.P+i.F*o,"String",r)},f=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},230:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},254:function(t,e,n){},335:function(t,e,n){"use strict";var i=n(15),r=n(10),a=n(23),s=n(91),o=n(92),l=n(20),u=n(336),c=n(93);r(r.S+r.F*!n(68)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,p=a(t),d="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,h=void 0!==m,g=0,L=c(p);if(h&&(m=i(m,v>2?arguments[2]:void 0,2)),null==L||d==Array&&o(L))for(n=new d(e=l(p.length));e>g;g++)u(n,g,h?m(p[g],g):p[g]);else for(f=L.call(p),n=new d;!(r=f.next()).done;g++)u(n,g,h?s(f,m,[r.value,g],!0):r.value);return n.length=g,n}})},336:function(t,e,n){"use strict";var i=n(8),r=n(49);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},337:function(t,e,n){"use strict";var i=n(254);n.n(i).a},339:function(t,e,n){},340:function(t,e,n){"use strict";var i=n(9),r=(n(335),n(70)),a=(n(48),n(226),n(228));var s={get:function(){},post:function(t,e){return function(t,e,n){var i=new XMLHttpRequest;i.open(t,e),i.onload=function(){n.success&&n.success(i.response)},i.onerror=function(){n.fail&&n.fail(i,i.status)},i.send(n.data)}("post",t,e)},put:function(){},delete:function(){},patch:function(){}},o={name:"LiFaUpload",props:{name:{type:String,required:!0},action:{type:String,required:!0},method:{type:String,default:"post"},fileList:{type:Array,default:function(){return[]}},parseResponse:{type:Function,required:!0},sizeLimit:{type:Number,default:3145728},multiple:{type:Boolean,default:!1},accept:{type:String,default:"image/png"}},components:{LfIcon:a.a},data:function(){return{url:"about:blank"}},methods:{onClickUpload:function(){var t=this,e=this.createInput();e.addEventListener("change",function(){var n=e.files;e.remove(),t.uploadFiles(n)}),e.click()},createInput:function(){this.$refs.tmp.innerHTML="";var t=document.createElement("input");return t.type="file",t.accept=this.accept,t.multiple=this.multiple,this.$refs.tmp.appendChild(t),t},uploadFiles:function(t){for(var e=this,n=[],i=0;i<t.length;i++){var a=t[i],s=a.name,o=(a.size,a.type,this.generateName(s));n[i]=o}if(this.beforeuploadFiles(t,n))for(var l=function(i){var a=t[i],s=n[i],o=new FormData;o.append(e.name,a),e.doUploadFiles(o,function(t){var n;n="object"!==Object(r.a)(t)?e.parseResponse(t):e.parseResponse(JSON.stringify(t)),e.url=n,e.afterUploadFiles(s,n)},function(t){e.uploadError(t,s)})},u=0;u<t.length;u++)l(u)},uploadError:function(t,e){var n=this.fileList.filter(function(t){return t.name===e})[0],i=this.fileList.indexOf(n),r=JSON.parse(JSON.stringify(n));r.status="fail";var a=JSON.parse(JSON.stringify(this.fileList));a.splice(i,1,r),this.$emit("update:fileList",a);var s="";0===t.status&&(s="网络无法连接"),this.$emit("error",s)},generateName:function(t){for(;this.fileList.filter(function(e){return e.name===t}).length>0;){var e=t.lastIndexOf("."),n=t.substring(0,e),i=t.substring(e);t=n+"(1)"+i}return t},doUploadFiles:function(t,e,n){s[this.method.toLowerCase()](this.action,{success:e,fail:n,data:t})},beforeuploadFiles:function(t,e){for(var n=this,a=function(r){var a=t[r],s=a.size,o=a.type;if(s>n.sizeLimit)return n.$emit("error","文件大小不能超过".concat(n.sizeLimit)),{v:!1};var l=Array.from(t).map(function(t,n){return{name:e[n],type:o,size:s,status:"uploading"}});return n.$emit("update:fileList",Object(i.a)(n.fileList).concat(Object(i.a)(l))),{v:!0}},s=0;s<t.length;s++){var o=a(s);if("object"===Object(r.a)(o))return o.v}},afterUploadFiles:function(t,e){var n=this.fileList.filter(function(e){return e.name===t})[0],r=this.fileList.indexOf(n),a=JSON.parse(JSON.stringify(n));a.url=e,a.status="success";var s=Object(i.a)(this.fileList);s.splice(r,1,a),this.$emit("update:fileList",s),this.$emit("uploaded")},onRemoveFile:function(t){var e=JSON.parse(JSON.stringify(this.fileList));window.confirm("你确定要删除吗？")&&(e.splice(t,1),this.$emit("update:fileList",e),this.$emit("error",""))}}},l=(n(337),n(1)),u=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lifa-upload"},[n("div",{on:{click:t.onClickUpload}},[t._t("default")],2),t._v(" "),n("ol",{staticClass:"lifa-upload-fileList"},t._l(t.fileList,function(e,i){return n("li",{key:e.name},["uploading"===e.status?[n("lf-icon",{staticClass:"lifa-upload-spin",attrs:{name:"loading"}})]:0===e.type.indexOf("image")?[n("img",{staticClass:"lifa-uploader-image",attrs:{src:e.url,alt:e.name,width:"80",height:"80"}})]:[n("div",{staticClass:"lifa-upload-defaultImage"})],t._v(" "),n("span",{staticClass:"lifa-upload-name",class:(r={},r[e.status]=e.status,r)},[t._v(t._s(e.name))]),t._v(" "),n("button",{staticClass:"lifa-upload-remove",on:{click:function(e){return t.onRemoveFile(i)}}},[t._v("x")])],2);var r}),0),t._v(" "),n("div",{ref:"tmp",staticStyle:{width:"0",height:"0",overflow:"hidden"}})])},[],!1,null,"8c708dda",null);e.a=u.exports},417:function(t,e,n){"use strict";var i=n(339);n.n(i).a},440:function(t,e,n){"use strict";n.r(e);n(22);var i=n(340),r=n(238),a=n(224),s={components:{"lf-upload":i.a,"lf-button":r.a,"lf-collaspe":a.default},data:function(){return{content:'\n<lf-upload accept="image/*" action="https://node-server-19.herokuapp.com/upload" name="file"\n   :file-list.sync="fileList" :parse-response="parseResponse" multiple>\n  <lf-button icon="upload">上传</lf-button>\n</lf-upload>\n\n<script>\nexport default {\n  data() {\n    return {\n      fileList: [\n        {\n                    name: \'小改改.jpg\',\n                    status: \'success\',\n                    url: \'https://i.loli.net/2019/09/11/SAf9C37r8TuVZqJ.jpg\',\n                    type: \'image/jpeg\'\n        }\n      ]\n    }\n  },\n  methods: {\n    parseResponse(response){\n      let {id} = JSON.parse(response)\n      let url = \'https://node-server-19.herokuapp.com/preview/\' + id\n      return url\n    },\n  }\n}\n<script>\n'.replace(/^ {10}/gm,"").trim(),fileList:[{name:"小改改.jpg",status:"success",url:"https://i.loli.net/2019/09/11/SAf9C37r8TuVZqJ.jpg",size:171078,type:"image/jpeg"}],error:""}},methods:{parseResponse:function(t){var e=JSON.parse(t).id;return"https://node-server-19.herokuapp.com/preview/".concat(e)},alert:function(t){window.alert(t||"上传失败")}},watch:{error:function(){var t=this;""!==this.error&&setTimeout(function(){t.error=""},2e3)}}},o=(n(417),n(1)),l=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("多文件上传（展示默认列表）")]),t._v(" "),n("div",{staticClass:"demo-box"},[n("div",{staticClass:"top"},[n("lf-upload",{attrs:{accept:"image/*",action:"https://node-server-19.herokuapp.com/upload",name:"file","file-list":t.fileList,"parse-response":t.parseResponse,multiple:""},on:{"update:fileList":function(e){t.fileList=e},"update:file-list":function(e){t.fileList=e}}},[n("lf-button",{attrs:{icon:"upload"}},[t._v("上传")])],1)],1),t._v(" "),n("lf-collaspe",[n("p",{attrs:{slot:"one"},slot:"one"},[t._v("在单文件基础上添加一个"),n("code",[t._v("multiple")]),t._v("字段就可以支持多文件上传了。给"),n("code",[t._v("fileList")]),t._v("可以设置默认值，用来显示你初始化的数据列表。")]),t._v(" "),n("code",{attrs:{slot:"two"},slot:"two"},[t._v(t._s(t.content))])])],1)])},[],!1,null,"9aafedd6",null);e.default=l.exports}}]);