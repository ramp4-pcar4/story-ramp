import{aQ as n,v as o,S as i,i as l,o as a}from"./story-OUarUCIt.js";import{m as d}from"./MultiOriginJSONSupport-DKRh9P6w-5uoyVjWd.js";import{D as u}from"./Layer-ChoECxvZ-DxWUU3pP.js";import{C as y}from"./PortalLayer-CElnYuSQ-B2e-CURI.js";import"./main-lj2zzr_L.js";import"./TimeExtent-Cn0Jofqr-BYNqT7sE.js";import"./PortalItem-CctGdnxF-DgukgleB.js";import"./portalItemUtils-B8bw6SAG-DkJqoRnI.js";import"./projection-BA9M1R7d-Cytmrlsd.js";import"./projectBuffer-CvCBvJ6W-CiwR2FyN.js";let t=class extends y(d(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,s)=>{n(()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let p="Unsupported layer type";r&&(p+=" "+r),s(new a("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,s){const r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,s)}write(e,s){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};o([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),o([i({type:["show","hide"]})],t.prototype,"listMode",void 0),o([i({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),o([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=o([l("esri.layers.UnsupportedLayer")],t);const j=t;export{j as default};
