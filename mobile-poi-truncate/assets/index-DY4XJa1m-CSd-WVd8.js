import{a}from"./fabric-Df28hv38-ZgxCl9Ub.js";import{fq as n,fz as s}from"./story-BAzleJnS.js";import"./main-Dqar6lJ9.js";class p extends n{get config(){return this.$iApi.fixture.get("export").config?.title}make(o){const t=this.config,e={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};t?.value!==void 0&&(e.text=t.value);const i=s(e,o||{}),r=new a.fabric.Textbox(i.text,i);return Promise.resolve(r)}}export{p as default};
