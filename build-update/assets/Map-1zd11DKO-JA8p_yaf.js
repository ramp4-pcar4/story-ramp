const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-qAsmERYh-CedWFewN.js","./story-_2qqwocf.js","./main-C0sSK5MQ.js","./main-Cpjm6T2D.css","./story-D48M3uHB.css","./projection-BA9M1R7d-BNPaubfz.js","./projectBuffer-CvCBvJ6W-CjFsH9Cb.js","./TileKey-B_6qmYK--BtZdR-Xy.js","./layersCreator-CW56kDKc-SAj0xMTc.js","./portalLayers-Bh9bAhk4-DDpJeIjx.js","./associatedFeatureServiceUtils-Bu76-Sxs-DsC-WIPh.js","./arcgisLayerUrl-HNYh8jvG-BDFw5rva.js","./PortalItem-CctGdnxF-BsZcaSxd.js","./fetchService-DbaKmJhP-CPITVTqe.js","./portalItemUtils-B8bw6SAG-D4M_JjPO.js","./styleUtils-ChrJTYIw-W1_p5gXa.js"])))=>i.map(i=>d[i]);
import{_ as b}from"./main-C0sSK5MQ.js";import{v as s,bz as B,i as C,bA as N,aB as P,ag as D,aU as G,a1 as m,aA as f,am as U,o as R,$ as w,P as E,S as i,ac as M,bB as T,bC as V,bD as z,ar as J,I as Q,j as W,ad as S,e as Z,bE as q,bF as H,C as K,bG as F,ah as k,ax as X,a2 as Y}from"./story-_2qqwocf.js";import{F as c,s as A}from"./Basemap-BEqqSTw9-ShpGK2ya.js";import{o as ee}from"./compilerUtils-CV1QYWI8-8J_jrmC-.js";import{y as te}from"./loadAll-e978YItg-DA8EhtZC.js";import{f as $}from"./CollectionFlattener-DkHuHn5E-BwdSxxdX.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-B6zP77UN.js";import{x as re,L as ae,g as se}from"./TablesMixin-C8RojhYs-BtSxMcJq.js";import"./PortalItem-CctGdnxF-BsZcaSxd.js";import"./writeUtils-D5qlLkwk-CUd7zHcC.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./Layer-ChoECxvZ-ydCoq6Yp.js";import"./TimeExtent-Cn0Jofqr-BkSLp2ff.js";var _;let h=_=class extends Z{constructor(e){super(e),this.type="none"}clone(){return new _({type:this.type})}};s([B({none:"none",stayAbove:"stay-above"})],h.prototype,"type",void 0),h=_=s([C("esri.ground.NavigationConstraint")],h);var I;let d=I=class extends N(P){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new D;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&m.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},a=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>a(r.item))])}initialize(){this.when().catch(e=>{G(e)||m.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)f(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",U(e,this._get("layers")))}writeLayers(e,t,a,r){const n=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(l=>{if("write"in l){const p={};ee(l)().write(p,r)&&n.push(p)}else r?.messages&&r.messages.push(new R("layer:unsupported",`Layers (${l.title}, ${l.id}) of type '${l.declaredClass}' cannot be persisted in the ground`,{layer:l}))})),t.layers=n}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return te(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await b(()=>import("./ElevationQuery-qAsmERYh-CedWFewN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);w(t);const r=new a,n=this.layers.filter(O).toArray();return r.queryAll(n,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await b(()=>import("./ElevationQuery-qAsmERYh-CedWFewN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);w(t);const r=new a,n=this.layers.filter(O).toArray();return r.createSamplerAll(n,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:E(this.surfaceColor),navigationConstraint:E(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new I({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,a){const r=t?.origin||"web-scene",n=t?.portal||null,l=t?.url||null,{populateOperationalLayers:p}=await b(async()=>{const{populateOperationalLayers:v}=await import("./layersCreator-CW56kDKc-SAj0xMTc.js");return{populateOperationalLayers:v}},__vite__mapDeps([8,1,2,3,4,9,10,11,12,13,14,5,6,15]),import.meta.url);w(a);const y=[];if(e.layers&&Array.isArray(e.layers)){const v={context:{origin:r,url:l,portal:n,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};y.push(p(this.layers,e.layers,v))}await Promise.allSettled(y)}};function oe(e){return e&&"createElevationSampler"in e}function O(e){return e.type==="elevation"||oe(e)}s([i({json:{read:!1}})],d.prototype,"layers",null),s([M("layers")],d.prototype,"writeLayers",null),s([i({readOnly:!0})],d.prototype,"resourceInfo",void 0),s([i({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:T,read:{reader:V,source:"transparency"},write:{writer:(e,t)=>{t.transparency=z(e)},target:"transparency"}}})],d.prototype,"opacity",void 0),s([i({type:J,json:{type:[T],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],d.prototype,"surfaceColor",void 0),s([i({type:h,json:{write:!0}})],d.prototype,"navigationConstraint",void 0),d=I=s([C("esri.Ground")],d);const g=d,u=new WeakMap;function j(e){return!e.destroyed&&(u.has(e)||e.addHandles([k(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||j(t))},t=>u.set(e,t),X),Y(()=>u.delete(e))]),u.get(e))}function ie(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ne(e){return!(!ie(e)||!q(e)?.operations?.supportsEditing||"editingEnabled"in e&&!H(e)||j(e))}const L=()=>m.getLogger("esri.support.basemapUtils");function le(){return{}}function de(e){for(const t in e){const a=e[t];f(a),delete e[t]}}function pe(e,t){let a;if(typeof e=="string"){const r=e in A,n=!r&&e.includes("/");if(!r&&!n){if(K.apiKey)L().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(A).filter(([p,y])=>y.classic||y.is3d).map(([p])=>`"${p}"`).sort().join(", ");L().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}t&&(a=t[e]),a||(a=r?c.fromId(e):new c({style:{id:e}}),t&&(t[e]=a))}else a=F(c,e);return a?.destroyed&&(L().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}const x={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function ye(e){let t=null;if(typeof e=="string")if(e in x){const a=x[e];t=new g({resourceInfo:{data:{layers:[a]}}})}else m.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=F(g,e);return t}let o=class extends re(ae(Q.EventedMixin(W))){constructor(e){super(e),this.allLayers=new $({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=se(this),this.basemap=null,this.editableLayers=new $({getCollections:()=>[this.allLayers],itemFilterFunction:ne}),this.ground=new g,this._basemapCache=le()}destroy(){de(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=f(this.basemap),f(this.ground),this._set("ground",null)}castBasemap(e){return pe(e,this._basemapCache)}castGround(e){return ye(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};s([i({readOnly:!0,dependsOn:[]})],o.prototype,"allLayers",void 0),s([i({readOnly:!0})],o.prototype,"allTables",void 0),s([i({type:c,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],o.prototype,"basemap",void 0),s([S("basemap")],o.prototype,"castBasemap",null),s([i({readOnly:!0})],o.prototype,"editableLayers",void 0),s([i({type:g,nonNullable:!0})],o.prototype,"ground",void 0),s([S("ground")],o.prototype,"castGround",null),s([i()],o.prototype,"undoRedo",void 0),o=s([C("esri.Map")],o);const Te=o;export{Te as default};