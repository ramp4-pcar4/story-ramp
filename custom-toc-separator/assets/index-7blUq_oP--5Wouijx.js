import{a as i}from"./fabric-Df28hv38-DklIek-Q.js";import{fq as a}from"./story-OUarUCIt.js";import"./main-lj2zzr_L.js";class m extends a{get config(){return this.$iApi.fixture.get("export").config?.mapElements}make(o){const t=this.$iApi.geo.map.caption.scaleHelper(),r=[];for(let e=0;e<2;e++){const n=new i.fabric.Text(this.$iApi.$i18n.t("export.scaleBar.approx",[`${this.$iApi.$i18n.n(t[e].distance,"number")}${t[e].units}`]),{fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:16,top:e*50,left:0,originX:"left",originY:"top"}),s=new i.fabric.Line([0,e===0?30:40,t[e].pixels,e===0?30:40],{stroke:"black",strokeWidth:3});r.push(new i.fabric.Group([s,n]))}return Promise.resolve(new i.fabric.Group(r,o))}}export{m as default};
