import{aQ as p,v as t,S as s,i as a,o as l}from"./story-BRwEvu2S.js";import{m as y}from"./MultiOriginJSONSupport-DKRh9P6w-CEOFOg6X.js";import{D as m}from"./Layer-ChoECxvZ-DkwXoWsA.js";import{C as u}from"./PortalLayer-CElnYuSQ-B8TuiTBW.js";import"./main-BqOhRcj8.js";import"./TimeExtent-Cn0Jofqr--9ucgkmY.js";import"./PortalItem-CctGdnxF-BwHH9alh.js";import"./portalItemUtils-B8bw6SAG-EPSIVKpU.js";import"./projection-BA9M1R7d-cWsUMj6A.js";import"./projectBuffer-CvCBvJ6W-CbGU9o22.js";let e=class extends u(y(m)){constructor(o){super(o),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((o,r)=>{p(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unknown layer type";n&&(i+=" "+n),r(new l("layer:unknown-layer-type",i,{layerType:n}))})}))}read(o,r){super.read({resourceInfo:o},r)}write(o,r){return null}};t([s({readOnly:!0})],e.prototype,"resourceInfo",void 0),t([s({type:["show","hide"]})],e.prototype,"listMode",void 0),t([s({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=t([a("esri.layers.UnknownLayer")],e);const P=e;export{P as default};
