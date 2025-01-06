import{v as r,S as i,i as y,bB as C,bz as h,P as u,dK as B,W as _,iC as x,o as l,bX as L,f as N,a1 as F,bL as E,a0 as V,ac as O,e as A}from"./story-DYUJZqY7.js";import{m as D}from"./MultiOriginJSONSupport-DKRh9P6w-BoLkzMH-.js";import{D as K}from"./Layer-ChoECxvZ-C907m40k.js";import{n as k}from"./APIKeyMixin-BUMSx9ny-lwHpRGR4.js";import{a as G}from"./ArcGISService-BYA-y6X6-CsB6pXMv.js";import{i as M}from"./CustomParametersMixin-vdKsTHer-DPCaUhV8.js";import{E as U}from"./OperationalLayer-B5IXiMa2-CD8-Gd1Y.js";import{C as z}from"./PortalLayer-CElnYuSQ-D06IuUq4.js";import{S as W}from"./ScaleRangeLayer-Bz0DcnvM-DjUpVKF2.js";import{W as X,f as P}from"./SceneService-BZqGtWmG-BtJI-XhR.js";import{X as H,$ as J,_ as Q}from"./commonProperties-BtIqvFU_-C1Jf2CSA.js";import{y as g}from"./Field-C6hA1tZj-CS5v4A7y.js";import{f as Y}from"./fieldProperties-Bq26w7gt-8wpHVCA1.js";import{r as q,F as Z,U as ee,G as te}from"./PointCloudUniqueValueRenderer-C-5hwEaR-Ya5fJuMg.js";import{k as T,R as re,j as ie}from"./elevationInfoUtils-mOZsPH2J-DVL2Iipi.js";import{w as oe}from"./popupUtils-B0uZcXX0-CZ0lYgKw.js";import"./main-yJk-x1BV.js";import"./TimeExtent-Cn0Jofqr-BMzfBI72.js";import"./arcgisLayerUrl-HNYh8jvG-R4DtL3gC.js";import"./PortalItem-CctGdnxF-BQH0EZnv.js";import"./portalItemUtils-B8bw6SAG-Cyanm9Xh.js";import"./projection-BA9M1R7d-B2decpX5.js";import"./projectBuffer-CvCBvJ6W-BhVrilLT.js";import"./originUtils-BLsWtgV9-B4sclfuf.js";import"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import"./HeightModelInfo-C5vFqzyF-CrRAiovN.js";import"./jsonContext-BA8GHqVk-SQ_Kv-EO.js";import"./resourceUtils-BmW6QqlX-Ron5dZyc.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./resourceUtils-rTM6Iemx-CpMI5HM2.js";import"./saveUtils-CIYk-dsQ-jQy-7mHT.js";import"./ElevationInfo-yv2-9tj6-QY0RAtjk.js";import"./lengthUtils-DKpMe5qR-CTxj54ms.js";import"./fieldType-CD2CL2hr-CML2lmOi.js";import"./FieldsIndex-HmzMbJQG-KYft1eoV.js";import"./UnknownTimeZone-C--TOcPG-BUTRcTSn.js";import"./RendererLegendOptions-K3md58-X-CDIG2zk5.js";let c=class extends A{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([y("esri.layers.pointCloudFilters.PointCloudFilter")],c);const v=c;var w;let p=w=class extends v{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new w({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([i({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),r([i({type:[C],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),r([h({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=w=r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const se=p;var b;let f=b=class extends v{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new b({field:this.field,includedReturns:u(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([h({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=b=r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const ne=f;var I;let d=I=class extends v{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new I({field:this.field,mode:this.mode,values:u(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"mode",void 0),r([h({pointCloudValueFilter:"value"})],d.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"values",void 0),d=I=r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")],d);const ae=d,le={key:"type",base:v,typeMap:{value:ae,bitfield:se,return:ne}};var S;let m=S=class extends q{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new S({...this.cloneProperties(),field:u(this.field)})}};r([h({pointCloudRGBRenderer:"point-cloud-rgb"})],m.prototype,"type",void 0),r([i({type:String,json:{write:!0}})],m.prototype,"field",void 0),m=S=r([y("esri.renderers.PointCloudRGBRenderer")],m);const pe=m,R={key:"type",base:q,typeMap:{"point-cloud-class-breaks":Z,"point-cloud-rgb":pe,"point-cloud-stretch":ee,"point-cloud-unique-value":te},errorContext:"renderer"},j=Y();let o=class extends X(G(U(z(W(D(M(k(K)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new g;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new g({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){B("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=oe(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const n=e.fieldInfos?.find(a=>a.fieldName===t.name);if(!n)return;const s=new x({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const a=L(this.parsedUrl?.path??"",`./statistics/${s.key}`);return N(a,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then($=>$.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;T(F.getLogger(this),re("Point cloud layers","absolute-height",e)),T(F.getLogger(this),ie("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(H)],o.prototype,"popupEnabled",void 0),r([i({type:E,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[le],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[g]})],o.prototype,"fields",void 0),r([i(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([V("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(j.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(J)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(Q)],o.prototype,"legendEnabled",void 0),r([i({types:R,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:R},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([O("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([y("esri.layers.PointCloudLayer")],o);const We=o;export{We as default};
