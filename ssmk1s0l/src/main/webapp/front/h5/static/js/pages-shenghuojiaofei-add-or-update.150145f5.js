(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shenghuojiaofei-add-or-update"],{"0476":function(e,i,r){var t=r("24fb");i=t(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-484a4600]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},"2fd3":function(e,i,r){"use strict";r.r(i);var t=r("84f8"),n=r("65de");for(var a in n)"default"!==a&&function(e){r.d(i,e,(function(){return n[e]}))}(a);r("a624");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"484a4600",null,!1,t["a"],o);i["default"]=u.exports},"65de":function(e,i,r){"use strict";r.r(i);var t=r("71ba"),n=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(i,e,(function(){return t[e]}))}(a);i["default"]=n.a},"71ba":function(e,i,r){"use strict";var t=r("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("96cf");var n=t(r("3b8d")),a=t(r("e2b1")),o=t(r("064f")),s=t(r("bd56")),u={data:function(){return{cross:"",ruleForm:{bianhao:"",yuefen:"",zhanghao:"",xingming:"",jiaofeileixing:"",jiaofeijine:"",jiaofeishijian:"",ispay:""},user:{},ro:{bianhao:!1,yuefen:!1,zhanghao:!1,xingming:!1,jiaofeileixing:!1,jiaofeijine:!1,jiaofeishijian:!1,ispay:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var r,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(t=e.sent,this.user=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=13;break}return this.ruleForm.id=i.id,e.next=11,this.$api.info("shenghuojiaofei",this.ruleForm.id);case 11:t=e.sent,this.ruleForm=t.data;case 13:if(this.cross=i.cross,!i.cross){e.next=49;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=49;break}if(a=e.t1.value,"bianhao"!=a){e.next=23;break}return this.ruleForm.bianhao=n[a],this.ro.bianhao=!0,e.abrupt("continue",17);case 23:if("yuefen"!=a){e.next=27;break}return this.ruleForm.yuefen=n[a],this.ro.yuefen=!0,e.abrupt("continue",17);case 27:if("zhanghao"!=a){e.next=31;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",17);case 31:if("xingming"!=a){e.next=35;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",17);case 35:if("jiaofeileixing"!=a){e.next=39;break}return this.ruleForm.jiaofeileixing=n[a],this.ro.jiaofeileixing=!0,e.abrupt("continue",17);case 39:if("jiaofeijine"!=a){e.next=43;break}return this.ruleForm.jiaofeijine=n[a],this.ro.jiaofeijine=!0,e.abrupt("continue",17);case 43:if("jiaofeishijian"!=a){e.next=47;break}return this.ruleForm.jiaofeishijian=n[a],this.ro.jiaofeishijian=!0,e.abrupt("continue",17);case 47:e.next=17;break;case 49:this.styleChange(),this.$forceUpdate();case 51:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jiaofeishijianConfirm:function(e){console.log(e),this.ruleForm.jiaofeishijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,r,t,n,a,o,s,u,d,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yuefen){e.next=3;break}return this.$utils.msg("月份不能为空"),e.abrupt("return");case 3:if(this.ruleForm.jiaofeileixing){e.next=6;break}return this.$utils.msg("缴费类型不能为空"),e.abrupt("return");case 6:if(this.ruleForm.jiaofeijine){e.next=9;break}return this.$utils.msg("缴费金额不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.jiaofeijine||this.$validate.isNumber(this.ruleForm.jiaofeijine)){e.next=12;break}return this.$utils.msg("缴费金额应输入数字"),e.abrupt("return");case 12:if(!this.cross){e.next=29;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=29;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=25;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(u),i);case 23:e.next=29;break;case 25:r=Number(uni.getStorageSync("userid")),t=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 29:if(!t||!r){e.next=52;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=t,d={page:1,limit:10,crossuserid:r,crossrefid:t},e.next=35,this.$api.list("shenghuojiaofei",d);case 35:if(l=e.sent,!(l.data.total>=n)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("shenghuojiaofei",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("shenghuojiaofei",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:e.next=60;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("shenghuojiaofei",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("shenghuojiaofei",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,r=i.getFullYear(),t=i.getMonth()+1,n=i.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(r,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u},"84f8":function(e,i,r){"use strict";var t={"w-picker":r("e2b1").default},n=function(){var e=this,i=e.$createElement,r=e._self._c||i;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"0px 0 80rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20230301/28586bd575de4721a42223a6e1d4b118.png) fixed",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"60rpx 40rpx",background:"none",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("编号")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.bianhao,placeholder:"编号"},model:{value:e.ruleForm.bianhao,callback:function(i){e.$set(e.ruleForm,"bianhao",i)},expression:"ruleForm.bianhao"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("月份")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.yuefen,placeholder:"月份"},model:{value:e.ruleForm.yuefen,callback:function(i){e.$set(e.ruleForm,"yuefen",i)},expression:"ruleForm.yuefen"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("账号")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(i){e.$set(e.ruleForm,"zhanghao",i)},expression:"ruleForm.zhanghao"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("姓名")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(i){e.$set(e.ruleForm,"xingming",i)},expression:"ruleForm.xingming"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("缴费类型")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.jiaofeileixing,placeholder:"缴费类型"},model:{value:e.ruleForm.jiaofeileixing,callback:function(i){e.$set(e.ruleForm,"jiaofeileixing",i)},expression:"ruleForm.jiaofeileixing"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("缴费金额")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.jiaofeijine,placeholder:"缴费金额"},model:{value:e.ruleForm.jiaofeijine,callback:function(i){e.$set(e.ruleForm,"jiaofeijine",i)},expression:"ruleForm.jiaofeijine"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 0 20rpx",borderColor:"#f7d3ba",borderRadius:"0px",borderWidth:"0 0 6rpx",background:"#fff",display:"flex",width:"100%",lineHeight:"100rpx",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("缴费时间")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#666",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"缴费时间"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.toggleTab("jiaofeishijian")}},model:{value:e.ruleForm.jiaofeishijian,callback:function(i){e.$set(e.ruleForm,"jiaofeishijian",i)},expression:"ruleForm.jiaofeishijian"}})],1),r("v-uni-view",{staticClass:"btn",style:{padding:"0",margin:"60rpx 0 0 0",background:"none",display:"flex",width:"100%",justifyContent:"center",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"2rpx 8rpx 8rpx #ddd",margin:"0 40rpx 0 0",borderColor:"#fb9a40",color:"#333",display:"inline",minWidth:"200rpx",borderRadius:"0px",background:"linear-gradient(23deg, rgba(255,255,255,1) 0%, rgba(247,211,186,1) 100%)",borderWidth:"0px 6rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"jiaofeishijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.jiaofeishijianConfirm.apply(void 0,arguments)}}})],1)],1)},a=[];r.d(i,"b",(function(){return n})),r.d(i,"c",(function(){return a})),r.d(i,"a",(function(){return t}))},a211:function(e,i,r){var t=r("0476");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=r("4f06").default;n("3235afde",t,!0,{sourceMap:!1,shadowMode:!1})},a624:function(e,i,r){"use strict";var t=r("a211"),n=r.n(t);n.a}}]);