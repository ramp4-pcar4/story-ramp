import{a as o}from"./fabric-Df28hv38-DiAJjBj1.js";import{fq as s}from"./story-CF27ueXF.js";import"./main-BCz1fOgT.js";class f extends s{get config(){return this.$iApi.fixture.get("export").config?.map}async make(t){const e=await this.$iApi.geo.map.takeScreenshot({quality:1,format:"png"}),a=new Image;a.src=e.dataUrl;const r=await new Promise(i=>a.onload=()=>i(a));return new o.fabric.Image(r,t)}}export{f as default};
