import{J as g,n as A,B as _,hZ as u,dq as E,o as j,W as S,f as N,a1 as M,v as d,S as c,i as V,dg as v}from"./story-OUarUCIt.js";import{m as k}from"./MultiOriginJSONSupport-DKRh9P6w-5uoyVjWd.js";import{r as z,j as p,Y as L,A as $,D,E as R,k as f}from"./vec32-D9GsKZ1t-iWg2zFa3.js";import{n as I}from"./projectBuffer-CvCBvJ6W-CiwR2FyN.js";import{D as U}from"./Layer-ChoECxvZ-DxWUU3pP.js";import{n as X}from"./APIKeyMixin-BUMSx9ny-CLspp1LR.js";import{a as W}from"./ArcGISService-BYA-y6X6-6EgTwM9y.js";import{i as C}from"./CustomParametersMixin-vdKsTHer-DdP_vchN.js";import{E as q}from"./OperationalLayer-B5IXiMa2-Dgb3Hr2c.js";import{C as F}from"./PortalLayer-CElnYuSQ-B2e-CURI.js";import{S as G}from"./ScaleRangeLayer-Bz0DcnvM-Bs4L4KCV.js";import{$ as P,Z as K}from"./commonProperties-BtIqvFU_-CGeXCscf.js";import{k as T,R as Z,j as B}from"./elevationInfoUtils-mOZsPH2J-CN_TctvZ.js";import"./main-lj2zzr_L.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./TimeExtent-Cn0Jofqr-BYNqT7sE.js";import"./arcgisLayerUrl-HNYh8jvG-DDFS2Vkh.js";import"./PortalItem-CctGdnxF-DgukgleB.js";import"./portalItemUtils-B8bw6SAG-DkJqoRnI.js";import"./projection-BA9M1R7d-Cytmrlsd.js";import"./ElevationInfo-yv2-9tj6-CvgTP051.js";import"./lengthUtils-DKpMe5qR-BJJJQeiz.js";let m=class extends W(q(F(G(k(C(X(U))))))){constructor(r){super(r),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new g({wkid:4326,vcsWkid:115700}),this.fullExtent=new A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(r){this._set("elevationInfo",r),this._validateElevationInfo()}_verifyArray(r,i){if(!Array.isArray(r)||r.length<i)return!1;for(const n of r)if(typeof n!="number")return!1;return!0}_initFullExtent(r){const i=r.root?.boundingVolume;if(!i)return;if(i.box){const t=i?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=r.root?.transform,w=v();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),s=_(t[1]),o=t[4],a=_(t[2]),e=_(t[3]),y=t[5];this.fullExtent=new A({xmin:l,ymin:s,zmin:o,xmax:a,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=u(t[0],t[1],t[2]),s=t[3]/Math.sqrt(3),o=v();z(o,l,u(s,s,s));const a=v();if(p(a,l,u(s,s,s)),n&&this._verifyArray(n,16)){const x=n;L(w,o,x),$(o,w),L(w,a,x),$(a,w)}I(o,E,0,o,g.WGS84,0),I(a,E,0,a,g.WGS84,0);const e=v(),y=v();D(e,o,a),R(y,o,a),this.fullExtent=new A({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=u(t[0],t[1],t[2]),s=u(t[3],t[4],t[5]),o=u(t[6],t[7],t[8]),a=u(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(v());if(p(e[0],l,s),p(e[0],e[0],o),p(e[0],e[0],a),f(e[1],l,s),p(e[1],e[1],o),p(e[1],e[1],a),p(e[2],l,s),f(e[2],e[2],o),p(e[2],e[2],a),f(e[3],l,s),f(e[3],e[3],o),p(e[3],e[3],a),p(e[4],l,s),p(e[4],e[4],o),f(e[4],e[4],a),f(e[5],l,s),p(e[5],e[5],o),f(e[5],e[5],a),p(e[6],l,s),f(e[6],e[6],o),f(e[6],e[6],a),f(e[7],l,s),f(e[7],e[7],o),f(e[7],e[7],a),n&&this._verifyArray(n,16)){const h=n;for(let b=0;b<8;++b)L(e[b],e[b],h)}const y=u(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),x=u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)I(e[h],E,0,e[h],g.WGS84,0),D(x,x,e[h]),R(y,y,e[h]);this.fullExtent=new A({xmin:x[0],ymin:x[1],zmin:x[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(r){return this.addResolvingPromise(this._doLoad(r)),this}async _doLoad(r){const i=r!=null?r.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{if(n.typeKeywords?.includes("IntegratedMesh"))return!0;throw new j("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},r)}catch(n){S(n)}this.url&&await N(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(n=>{this._initFullExtent(n.data)},n=>{S(n)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const r=this.elevationInfo,i="Integrated mesh 3d tiles layers";T(M.getLogger(this),Z(i,"absolute-height",r)),T(M.getLogger(this),B(i,r))}};d([c({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),d([c({type:g})],m.prototype,"spatialReference",void 0),d([c({type:A})],m.prototype,"fullExtent",void 0),d([c(P)],m.prototype,"elevationInfo",null),d([c({type:["show","hide"]})],m.prototype,"listMode",void 0),d([c(K)],m.prototype,"url",void 0),d([c({readOnly:!0})],m.prototype,"type",void 0),d([c({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),d([c({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),d([c({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=d([V("esri.layers.IntegratedMesh3DTilesLayer")],m);const xe=m;export{xe as default};
