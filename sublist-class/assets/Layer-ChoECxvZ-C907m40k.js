const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalLayers-Bh9bAhk4-BfGpIy8N.js","./story-DYUJZqY7.js","./main-yJk-x1BV.js","./main-DDHzzIZe.css","./story-BOAlCe0K.css","./associatedFeatureServiceUtils-Bu76-Sxs-Brnu2x2R.js","./arcgisLayerUrl-HNYh8jvG-R4DtL3gC.js","./PortalItem-CctGdnxF-BQH0EZnv.js","./fetchService-DbaKmJhP-qxvs6ljG.js","./portalItemUtils-B8bw6SAG-Cyanm9Xh.js","./projection-BA9M1R7d-B2decpX5.js","./projectBuffer-CvCBvJ6W-BhVrilLT.js","./arcgisLayers-CL8_MH7S-DjKrmwVb.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./main-yJk-x1BV.js";import{I as h,bR as b,n as y,J as l,aU as m,a1 as d,a as f,f as v,o as g,v as r,C as E,S as i,i as w,aB as I}from"./story-DYUJZqY7.js";import{k as _}from"./TimeExtent-Cn0Jofqr-BMzfBI72.js";async function L(t){const o="portalItem"in t?t:{portalItem:t},{fromItem:n}=await p(async()=>{const{fromItem:a}=await import("./portalLayers-Bh9bAhk4-BfGpIy8N.js");return{fromItem:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url).then(a=>a.p);try{return await n(o)}catch(a){const s=o?.portalItem,u=s?.id||"unset",c=s?.portal?.url||E.portalUrl;throw d.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+c+"', id: '"+u+"')",a),a}}let D=0,e=class extends h.EventedMixin(b(I)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+D++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(t){const o=typeof t=="string"?{url:t}:t;return(await p(async()=>{const{fromUrl:n}=await import("./arcgisLayers-CL8_MH7S-DjKrmwVb.js");return{fromUrl:n}},__vite__mapDeps([12,2,3,1,4,6,5,7,8]),import.meta.url)).fromUrl(o)}static fromPortalItem(t){return L(t)}initialize(){this.when().catch(t=>{m(t)||d.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){const t=this.parent;if(t){const o=this;"layers"in t&&t.layers.includes(o)?t.layers.remove(o):"tables"in t&&t.tables.includes(o)?t.tables.remove(o):"baseLayers"in t&&t.baseLayers.includes(o)?t.baseLayers.remove(o):"referenceLayers"in t&&t.referenceLayers.includes(o)&&t.referenceLayers.remove(o),this._set("parent",null)}}get effectiveVisible(){let t=this.visible;const o=this.parent;return t&&o&&"effectiveVisible"in o&&(t&&=o.effectiveVisible),t}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return f(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await v(t,{query:{f:"json"},responseType:"json"})).data;throw new g("layer:no-attribution-data","Layer does not have attribution data")}};r([i({type:String})],e.prototype,"attributionDataUrl",void 0),r([i({readOnly:!0})],e.prototype,"effectiveVisible",null),r([i({type:y})],e.prototype,"fullExtent",void 0),r([i({readOnly:!0})],e.prototype,"hasAttributionData",null),r([i({type:String,clonable:!1})],e.prototype,"id",void 0),r([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),r([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),r([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),r([i({clonable:!1})],e.prototype,"parent",void 0),r([i({readOnly:!0})],e.prototype,"parsedUrl",null),r([i({type:Boolean,readOnly:!0})],e.prototype,"persistenceEnabled",void 0),r([i({type:Boolean})],e.prototype,"popupEnabled",void 0),r([i({type:Boolean})],e.prototype,"attributionVisible",void 0),r([i({type:l})],e.prototype,"spatialReference",void 0),r([i({type:String})],e.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),r([i()],e.prototype,"url",void 0),r([i({type:_})],e.prototype,"visibilityTimeExtent",void 0),r([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=r([w("esri.layers.Layer")],e);const V=e;export{V as D};
