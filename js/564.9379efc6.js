"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[564],{3564:function(e,t,o){o.r(t),o.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("img",{staticClass:"logo",attrs:{alt:"Component logo",src:o(6785)}}),n("home-list",{attrs:{list:e.list}})],1)},l=[],i=o(438),a=JSON.parse('{"a":{"elements":[{"title":"操作条","name":"bar","color":"purple","icon":"vipcard"},{"title":"导航栏 ","name":"nav","color":"mauve","icon":"formfill"},{"title":"列表","name":"list","color":"pink","icon":"list"},{"title":"卡片","name":"card","color":"brown","icon":"newsfill"},{"title":"表单","name":"form","color":"red","icon":"formfill"},{"title":"时间轴","name":"timeline","color":"orange","icon":"timefill"},{"title":"聊天","name":"chat","color":"green","icon":"messagefill"},{"title":"轮播","name":"swiper","color":"olive","icon":"album"},{"title":"模态框","name":"modal","color":"grey","icon":"squarecheckfill"},{"title":"步骤条","name":"steps","color":"cyan","icon":"roundcheckfill"}]}}');function c(){return Promise.resolve(a.a)}var r={name:"componentHome",data(){return{list:[]}},components:{HomeList:i.Z},methods:{async getHomeSucc(){const e=localStorage.getItem("componentList"),t=await Promise.try((()=>JSON.parse(e))).catch((()=>[]));if(Array.isArray(t)&&t.length){const e=t;this.list=e}else c().then((({elements:e})=>{this.list=e,localStorage.setItem("componentList",JSON.stringify(e))}))}},created(){this.getHomeSucc()}},s=r,m=o(1001),p=(0,m.Z)(s,n,l,!1,null,null,null),u=p.exports},6785:function(e,t,o){e.exports=o.p+"img/componentBg.293aa16a.png"}}]);
//# sourceMappingURL=564.9379efc6.js.map