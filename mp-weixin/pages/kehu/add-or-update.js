(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kehu/add-or-update"],{"157a":function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.ruleForm.touxiang.split(","));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},"1cdf":function(e,t,n){"use strict";n.r(t);var i=n("157a"),r=n("fde7");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("4865");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"8a9e302c",null,!1,i["a"],u);t["default"]=s.exports},3384:function(e,t,n){},4865:function(e,t,n){"use strict";var i=n("3384"),r=n.n(i);r.a},"6b62":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");i(n("66fd"));var t=i(n("1cdf"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"9b98":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},s=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},c=function(){return n.e("components/momo-multipleSelect/momo-multipleSelect").then(n.bind(null,"bd56"))},l={data:function(){return{cross:"",ruleForm:{zhanghao:"",xingming:"",mima:"",xingbie:"",touxiang:"",shoujihaoma:"",youxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,mima:!1,xingbie:!1,touxiang:!1,shoujihaoma:!1,youxiang:!1}}},components:{wPicker:o,xiaEditor:s,multipleSelect:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("kehu",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(this.cross=n.cross,!n.cross){t.next=50;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 18:if((t.t1=t.t0()).done){t.next=50;break}if(o=t.t1.value,"zhanghao"!=o){t.next=24;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,t.abrupt("continue",18);case 24:if("xingming"!=o){t.next=28;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,t.abrupt("continue",18);case 28:if("mima"!=o){t.next=32;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,t.abrupt("continue",18);case 32:if("xingbie"!=o){t.next=36;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,t.abrupt("continue",18);case 36:if("touxiang"!=o){t.next=40;break}return this.ruleForm.touxiang=u[o].split(",")[0],this.ro.touxiang=!0,t.abrupt("continue",18);case 40:if("shoujihaoma"!=o){t.next=44;break}return this.ruleForm.shoujihaoma=u[o],this.ro.shoujihaoma=!0,t.abrupt("continue",18);case 44:if("youxiang"!=o){t.next=48;break}return this.ruleForm.youxiang=u[o],this.ro.youxiang=!0,t.abrupt("continue",18);case 48:t.next=18;break;case 50:this.styleChange(),this.$forceUpdate();case 52:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){var n,r,a,u,o,s,c,l,h,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){t.next=3;break}return this.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 3:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){t.next=6;break}return this.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 6:if(!this.cross){t.next=23;break}if(e.setStorageSync("crossCleanType",!0),o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=23;break}if(n||(n=e.getStorageSync("crossObj")),o.startsWith("[")){t.next=19;break}for(c in n)c==o&&(n[c]=s);return l=e.getStorageSync("crossTable"),t.next=17,this.$api.update("".concat(l),n);case 17:t.next=23;break;case 19:r=Number(e.getStorageSync("userid")),a=n["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 23:if(!a||!r){t.next=46;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=29,this.$api.list("kehu",h);case 29:if(f=t.sent,!(f.data.total>=u)){t.next=36;break}return this.$utils.msg(e.getStorageSync("tips")),e.removeStorageSync("crossCleanType"),t.abrupt("return",!1);case 36:if(!this.ruleForm.id){t.next=41;break}return t.next=39,this.$api.update("kehu",this.ruleForm);case 39:t.next=43;break;case 41:return t.next=43,this.$api.add("kehu",this.ruleForm);case 43:this.$utils.msgBack("提交成功");case 44:t.next=54;break;case 46:if(!this.ruleForm.id){t.next=51;break}return t.next=49,this.$api.update("kehu",this.ruleForm);case 49:t.next=53;break;case 51:return t.next=53,this.$api.add("kehu",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=l}).call(this,n("543d")["default"])},fde7:function(e,t,n){"use strict";n.r(t);var i=n("9b98"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a}},[["6b62","common/runtime","common/vendor"]]]);