import{a as r}from"./fabric-Df28hv38-BZgNR7KR.js";import{fq as n,fz as s}from"./story-C_BD4NO7.js";import"./main-C59lxR2D.js";class x extends n{get config(){return this.$iApi.fixture.get("export").config?.timestamp}make(o){const t=this.config,e={text:new Date().toLocaleString("en-CA"),fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0,left:0,originX:"left"};t?.value!==void 0&&(e.text=t.value);const i=s(e,o||{}),a=new r.fabric.Textbox(i.text,i);return Promise.resolve(a)}}export{x as default};
