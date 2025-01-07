import{e as R,P as v,v as l,S as i,i as b,n as S,J as m,w as I,c as h,o as x,eL as M,cA as U,k as L,f as w,c2 as W,a0 as g,ac as D}from"./story-OUarUCIt.js";import{m as E}from"./MultiOriginJSONSupport-DKRh9P6w-5uoyVjWd.js";import{D as $}from"./Layer-ChoECxvZ-DxWUU3pP.js";import{u as O}from"./BlendLayer-D1WkSmwP-Ci8H7GFA.js";import{E as A}from"./OperationalLayer-B5IXiMa2-Dgb3Hr2c.js";import{C as z}from"./PortalLayer-CElnYuSQ-B2e-CURI.js";import{T as V}from"./RefreshableLayer-a8BQ58Xh-BK6RT4lC.js";import{S as q}from"./ScaleRangeLayer-Bz0DcnvM-Bs4L4KCV.js";import{u as T}from"./imageBitmapUtils-DA36kg39-zZ47VIK5.js";import{V as j,d as r}from"./TileInfo-CWIRDhZl-561xzxdP.js";import"./main-lj2zzr_L.js";import"./TimeExtent-Cn0Jofqr-BYNqT7sE.js";import"./jsonUtils-wIllKWI4-DQMnFF3M.js";import"./parser-DyDJ-rlI-BZnJ9Tpt.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-d6nV0_rZ.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./commonProperties-BtIqvFU_-CGeXCscf.js";import"./ElevationInfo-yv2-9tj6-CvgTP051.js";import"./lengthUtils-DKpMe5qR-BJJJQeiz.js";import"./PortalItem-CctGdnxF-DgukgleB.js";import"./portalItemUtils-B8bw6SAG-DkJqoRnI.js";import"./projection-BA9M1R7d-Cytmrlsd.js";import"./projectBuffer-CvCBvJ6W-CiwR2FyN.js";import"./TileKey-B_6qmYK--BtZdR-Xy.js";var d;let c=d=class extends R{constructor(e){super(e)}clone(){return new d({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([i({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),l([i({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=d=l([b("esri.layers.support.WMTSLayerInfo")],c);var f;let o=f=class extends O(V(q(A(z(E($)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new S(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,m.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=m.WebMercator,this.subDomains=null,this.tileInfo=new j({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new I({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:m.WebMercator}),spatialReference:m.WebMercator,lods:[new r({level:0,scale:591657527591555e-6,resolution:156543.033928}),new r({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new r({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new r({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new r({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new r({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new r({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new r({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new r({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new r({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new r({level:10,scale:577790.554289,resolution:152.874056570411}),new r({level:11,scale:288895.277144,resolution:76.4370282850732}),new r({level:12,scale:144447.638572,resolution:38.2185141425366}),new r({level:13,scale:72223.819286,resolution:19.1092570712683}),new r({level:14,scale:36111.909643,resolution:9.55462853563415}),new r({level:15,scale:18055.954822,resolution:4.77731426794937}),new r({level:16,scale:9027.977411,resolution:2.38865713397468}),new r({level:17,scale:4513.988705,resolution:1.19432856685505}),new r({level:18,scale:2256.994353,resolution:.597164283559817}),new r({level:19,scale:1128.497176,resolution:.298582141647617}),new r({level:20,scale:564.248588,resolution:.14929107082380833}),new r({level:21,scale:282.124294,resolution:.07464553541190416}),new r({level:22,scale:141.062147,resolution:.03732276770595208}),new r({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let s="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const a=new h(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&a.authority?.includes("{subDomain}")&&(s="is missing 'subDomains' property")}else s="spatialReference must match tileInfo.spatialReference";else s="is missing the required 'urlTemplate' property value";if(s)throw new x("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${s}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||m.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:s}=this,a=new h(t),n=a.scheme?a.scheme+"://":"//",u=n+a.authority+"/",p=a.authority;if(p?.includes("{subDomain}")){if(s&&s.length>0&&p.split(".").length>1)for(const y of s)e.push(n+p.replaceAll(/\{subDomain\}/gi,y)+"/")}else e.push(u);return e.map(M)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new h(e),s=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.slice(s.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){U(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=L(e)),t.templateUrl=e}fetchTile(e,t,s,a={}){const{signal:n}=a,u=this.getTileUrl(e,t,s),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return w(u,p).then(y=>y.data)}async fetchImageBitmapTile(e,t,s,a={}){const{signal:n}=a;if(this.fetchTile!==f.prototype.fetchTile){const P=await this.fetchTile(e,t,s,a);return T(P,e,t,s,n)}const u=this.getTileUrl(e,t,s),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:y}=await w(u,p);return T(y,e,t,s,n)}getTileUrl(e,t,s){const{levelValues:a,tileServers:n,urlPath:u}=this;if(!a||!n||!u)return"";const p=a[e];return n[t%n.length]+W(u,{level:p,z:p,col:s,x:s,row:t,y:t})}};l([i({type:String,value:"",json:{write:!0}})],o.prototype,"copyright",void 0),l([i({type:S,json:{write:!0},nonNullable:!0})],o.prototype,"fullExtent",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),l([i({type:["show","hide"]})],o.prototype,"listMode",void 0),l([i({json:{read:!0,write:!0}})],o.prototype,"blendMode",void 0),l([i()],o.prototype,"levelValues",null),l([i({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],o.prototype,"isReference",void 0),l([i({type:["WebTiledLayer"],value:"WebTiledLayer"})],o.prototype,"operationalLayerType",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"popupEnabled",void 0),l([i({type:m})],o.prototype,"spatialReference",void 0),l([g("spatialReference",["spatialReference","fullExtent.spatialReference"])],o.prototype,"readSpatialReference",null),l([i({type:[String],json:{write:!0}})],o.prototype,"subDomains",void 0),l([i({type:j,json:{write:!0}})],o.prototype,"tileInfo",void 0),l([i({readOnly:!0})],o.prototype,"tileServers",null),l([i({json:{read:!1}})],o.prototype,"type",void 0),l([i()],o.prototype,"urlPath",null),l([i({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],o.prototype,"urlTemplate",void 0),l([g("urlTemplate",["urlTemplate","templateUrl"])],o.prototype,"readUrlTemplate",null),l([D("urlTemplate",{templateUrl:{type:String}})],o.prototype,"writeUrlTemplate",null),l([i({type:c,json:{write:!0}})],o.prototype,"wmtsInfo",void 0),o=f=l([b("esri.layers.WebTileLayer")],o);const _=o,me=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as I,me as W,c as p};
