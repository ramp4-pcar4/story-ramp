import{K as L}from"./story-BJQwqSiV.js";import{D as i}from"./basicInterfaces-Dsf65ICa-DkQ9Rsnx.js";class h{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=i.KTX2_ENCODING}}function v(t){return t?.type==="encoded-mesh-texture"}async function w(t){const r=new Blob([t]),o=await r.text();return JSON.parse(o)}async function p(t,r){if(r===i.KTX2_ENCODING)return new h(t);const o=new Blob([t],{type:r}),n=URL.createObjectURL(o),e=new Image;if(L("esri-iPhone"))return new Promise((d,m)=>{const c=()=>{a(),d(e)},s=u=>{a(),m(u)},a=()=>{URL.revokeObjectURL(n),e.removeEventListener("load",c),e.removeEventListener("error",s)};e.addEventListener("load",c),e.addEventListener("error",s),e.src=n});try{e.src=n,await e.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),e}export{h as d,v as f,w as h,p as l};
