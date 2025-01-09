import{I as k,bA as L,ai as f,ah as y,av as p,aw as v,n as d,bG as _,ag as m,v as r,S as o,jH as F,a0 as h,i as c,J as g,gK as O,W as j,ac as M,aB as I}from"./story-BRwEvu2S.js";import{f as R}from"./CollectionFlattener-DkHuHn5E-BeR0WUKu.js";import{m as T}from"./MultiOriginJSONSupport-DKRh9P6w-CEOFOg6X.js";import{D as C}from"./Layer-ChoECxvZ-DkwXoWsA.js";import{u as N}from"./BlendLayer-D1WkSmwP-Bn3f37de.js";import{E as K}from"./OperationalLayer-B5IXiMa2-BfaEYE2k.js";import{C as P}from"./PortalLayer-CElnYuSQ-B8TuiTBW.js";import{T as A}from"./RefreshableLayer-a8BQ58Xh-Bo83WwTa.js";import{S as J}from"./ScaleRangeLayer-Bz0DcnvM-C5dOh6td.js";import{Z as W}from"./commonProperties-BtIqvFU_-D1Ouv9Cv.js";import{G as $,N as S,j as w,T as E}from"./kmlUtils-C5oIEoOy-C8PisfIc.js";import"./main-BqOhRcj8.js";import"./TimeExtent-Cn0Jofqr--9ucgkmY.js";import"./jsonUtils-wIllKWI4-CEQ2Fved.js";import"./parser-DyDJ-rlI-CJiE5Ov_.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-BCHGyGI8.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./PortalItem-CctGdnxF-BwHH9alh.js";import"./portalItemUtils-B8bw6SAG-EPSIVKpU.js";import"./projection-BA9M1R7d-cWsUMj6A.js";import"./projectBuffer-CvCBvJ6W-CbGU9o22.js";import"./ElevationInfo-yv2-9tj6-DWmquHEq.js";import"./lengthUtils-DKpMe5qR-6xqZInFX.js";import"./jsonUtils-C64Zfu7c-eqei-QmT.js";import"./UniqueValueRenderer-fS5V0Ej1-BXwI1fuv.js";import"./RendererLegendOptions-K3md58-X-Bxlgy9by.js";import"./diffUtils-Cz3Fi8Xb-CVOLDCqG.js";import"./colorRamps-q0bZVhs2-CSKO8cx3.js";import"./sizeVariableUtils-t52KcLLi-D0hbQF8b.js";import"./visualVariableUtils-D3kZJRyn-DCnr_3TL.js";import"./compilerUtils-CV1QYWI8-DwrXJ3eY.js";import"./styleUtils-BtpNqZyT-BxXn2r6K.js";import"./LRUCache-C3erQTWv-BLNUOh6t.js";import"./Version-CoKzbupV-BUjaZapl.js";import"./FieldsIndex-HmzMbJQG-B4572ECv.js";import"./UnknownTimeZone-C--TOcPG-CNI1xBDr.js";import"./OverrideHelper-DWRbVlj1-BlnNDvkW.js";import"./colorUtils-Cthpxcks-CL5SeMM3.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./utils-SPbpQbmm-DRfTXhR2.js";import"./enums-CpSG_SL3-BMD3Tb1v.js";import"./quantizationUtils-bJy1cRwp-BBjyVzg2.js";import"./heatmapUtils-seiMkkkR-C-hetltL.js";import"./FeatureSet-BkVNthuN-BlwO5f4_.js";import"./Field-C6hA1tZj-BYTR5znb.js";import"./fieldType-CD2CL2hr-CZXcUd2A.js";var u;let a=u=class extends k.EventedMixin(L(I)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([f(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},p),f(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},p),y(()=>this.sublayers,(e,i)=>{if(i)for(const s of i)s.layer=s.parent=null;if(e)for(const s of e)s.parent=this,s.layer=this.layer},p),y(()=>this.layer,e=>{if(this.sublayers)for(const i of this.sublayers)i.layer=e},p)])}initialize(){v(()=>this.networkLink).then(()=>v(()=>this.visible===!0)).then(()=>this.load())}load(t){if(!this.networkLink||this.networkLink.viewFormat)return;const e=t!=null?t.signal:null,i=this._fetchService(this._get("networkLink")?.href??"",e).then(s=>{const n=$(s.sublayers);this.fullExtent=d.fromJSON(n),this.sourceJSON=s;const b=_(m.ofType(u),S(u,s));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}_fetchService(t,e){return w(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(i=>E(i.data))}};r([o()],a.prototype,"description",void 0),r([o({type:d})],a.prototype,"fullExtent",void 0),r([o()],a.prototype,"id",void 0),r([o({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([o({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([o({type:m.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([o({value:null,json:{read:{source:"name",reader:t=>F(t)}}})],a.prototype,"title",void 0),r([o({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([o()],a.prototype,"sourceJSON",void 0),r([o()],a.prototype,"layer",void 0),a=u=r([c("esri.layers.support.KMLSublayer")],a);const x=a,z=["kml","xml"];let l=class extends N(A(J(K(P(T(C)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new R({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=g.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(t,e)=>{e&&e.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},p),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,i){return S(x,e,i,this._visibleFolders)}writeSublayers(t,e){const i=[],s=t.toArray();for(;s.length;){const n=s[0];n.networkLink||(n.visible&&i.push(n.id),n.sublayers&&s.push(...n.sublayers.toArray())),s.shift()}e.visibleFolders=i}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?O(this.url,z)||"KML":t}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],i=s=>{s.visible&&(e.push(s),s.sublayers&&s.sublayers.forEach(i))};return t&&t.forEach(i),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(j).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const e=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:w(this.url??"",this.outSpatialReference,this.refreshInterval,t)),i=E(e.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const e=i=>{if(i.sublayers)for(const s of i.sublayers.items)e(s),s.visible&&s.fullExtent&&(t!=null?t.union(s.fullExtent):t=s.fullExtent.clone())};return e(this),t}};r([o({readOnly:!0})],l.prototype,"allSublayers",void 0),r([o({type:g})],l.prototype,"outSpatialReference",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),r([o({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"legendEnabled",void 0),r([o({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),r([o({type:["KML"]})],l.prototype,"operationalLayerType",void 0),r([o({})],l.prototype,"resourceInfo",void 0),r([o({type:m.ofType(x),json:{write:{ignoreOrigin:!0}}})],l.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],l.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],l.prototype,"readSublayers",null),r([M("sublayers")],l.prototype,"writeSublayers",null),r([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),r([o({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],l.prototype,"title",null),r([o(W)],l.prototype,"url",void 0),r([o({readOnly:!0})],l.prototype,"visibleSublayers",null),r([o({type:d})],l.prototype,"extent",void 0),r([o()],l.prototype,"fullExtent",null),l=r([c("esri.layers.KMLLayer")],l);const Pt=l;export{Pt as default};
