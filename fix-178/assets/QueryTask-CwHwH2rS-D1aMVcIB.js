const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./meshFeatureSet-zeR2pNmE-CMQu5TRn.js","./story-BLxSf89q.js","./main-CYSS3xlj.js","./main-Cypivj38.css","./story-DnycVwut.css","./Mesh-DLzjDUIO-CrBs0twi.js","./MeshTransform-C--IG09w-DzftH7A6.js","./mat4-DX7gBViE-Di5_MXEG.js","./common-CYWrYyJl-E8-sukrT.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./quat-BODLR7mS-CIx_-vDw.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./quatf64-C16JxGFv-BKWK1F8U.js","./vec32-D9GsKZ1t-CUrr96dK.js","./vec42-D8CJyqHG-DnfLTeQH.js","./imageUtils-BA2D6Uf1-D3m5akD5.js","./MeshVertexAttributes-CbNpPur2-CpR55yli.js","./MeshLocalVertexSpace-BqgocsoS-CDK_vXGT.js","./meshVertexSpaceUtils-B4l_Zo0M-C0BQZFtP.js","./earcut-XDcq3zAf-BcwyrT7l.js","./Indices-DEr2HrWx-CS3YCa6B.js","./plane-Dt8R0KeE-DZvTbdsx.js","./vec2f64-CeODonrJ-CkkJCdRC.js","./vec4f64-hf2nxvhQ-CaAr8PTM.js","./deduplicate-D2d-E5Pw-BH_w5T4x.js","./projectPointToVector-B2UUY9SE-DILjJ9Wu.js","./projection-BA9M1R7d-CPQOwsSQ.js","./projectBuffer-CvCBvJ6W-BwklEwff.js","./vertexSpaceConversion-CiKaVq_u-DjODs5g8.js","./mat3-CC4Foazl-BWjyqE2v.js","./spatialReferenceEllipsoidUtils-DUrKTvup-Cib__tTB.js","./computeTranslationToOriginAndRotation-wF0y9WQG-9-jB6MxU.js","./vec3-BazNroeq-C9f1sn5I.js","./BufferView-PQoE3GL7-yAE0eHII.js","./vec2-tHZ6OaOy-xCj1obDt.js","./vec4-DWDdg1fj-DlP1O1QU.js","./External-D_wl4XAw-C4Yj0w24.js","./infoFor3D-DIuYZyyK-BtH19JJ7.js","./FeatureSet-BkVNthuN-DdrlQlF-.js","./Field-C6hA1tZj-DXFIMk7w.js","./fieldType-CD2CL2hr-D-RzECoS.js","./meshFeatureAttributes-BwKR5odo-Cn3aTw-k.js","./RelationshipQuery-DJsz3K0U-D-eGTyyi.js","./Query-BrwMGK8U-DEcHzwFv.js","./TimeExtent-Cn0Jofqr-BCYLzpIt.js","./executeRelationshipQuery-BlX9_g4g-CImnaiCk.js","./utils-9sQxfkoa-DMD1YNOp.js","./query-DFW9-NG_-DYR5VVWR.js","./normalizeUtils-Bxmy9MNI-CzhvWcX3.js","./normalizeUtilsCommon-CRJlkfEA-BRSq5sv4.js","./utils-Bq23Xwmj-xpQmTUAE.js","./pbfQueryUtils-F4ZE8-K8-DAaZgW0v.js","./pbf-D-y3_eZO-DSN-JUIg.js","./OptimizedFeature-EIithYlr-Cq64mIT3.js","./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js","./queryZScale-BiYV6Pr6-C8FOMxEA.js","./queryAttachments-Bgvu3RnK-Cvyl760X.js","./AttachmentInfo-D9RFO8W2-D0NHED1y.js","./executeBinsQuery-26-59HNS-DtGPbwkl.js","./BinsQuery-DjwQZqB8-CZiYGs29.js","./queryUtils-Brxu6254-abicMmpk.js","./json-BI97KiBB-Ce5cWfI2.js","./executeTopFeaturesQuery-CjTd36wS-qhtD1ClJ.js","./queryTopFeatures-IbhAPJlP-Bg_GnZuz.js","./TopFeaturesQuery-Ckj_IYM7-BkxM4kg1.js","./executeForTopIds-BWxBZygF-DgGyONje.js","./executeForTopExtents-3NOTiZTn-LgMKaeX3.js","./executeForTopCount-Dx1gCDe1-ChNIGHPB.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./main-CYSS3xlj.js";import{v as u,S as c,i as R,j as E,a as V,K as v,a_ as l,o as d,aC as I}from"./story-BLxSf89q.js";import{f as T,C as w}from"./infoFor3D-DIuYZyyK-BtH19JJ7.js";import{K as f,b as A}from"./Query-BrwMGK8U-DEcHzwFv.js";import{y as Q}from"./utils-9sQxfkoa-DMD1YNOp.js";import{i as j,e as P}from"./executeForIds-Z1gkLduF-C73uNQgt.js";import{T as q,g as L}from"./executeQueryPBF-o8010HS9-DRN4rxZy.js";import{s as C}from"./executeQueryJSON-CcHnccia-D0fQSOHL.js";import{O as z}from"./FeatureSet-BkVNthuN-DdrlQlF-.js";let i=class extends E{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return V(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),s=e.outStatistics?.[0]!=null,n=v("featurelayer-pbf-statistics"),o=!s||n;let p;if(this.pbfSupported&&o)try{p=await q(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&o||(p=await C(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return z.fromJSON(t);const{meshFeatureSetFromJSON:s}=await l(a(()=>import("./meshFeatureSet-zeR2pNmE-CMQu5TRn.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return j(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return P(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await l(Promise.all([a(()=>import("./RelationshipQuery-DJsz3K0U-D-eGTyyi.js"),__vite__mapDeps([42,1,2,3,4,43,39,40,44]),import.meta.url).then(n=>n.R),a(()=>import("./executeRelationshipQuery-BlX9_g4g-CImnaiCk.js"),__vite__mapDeps([45,46,1,2,3,4,47,48,49,50,51,52,53,54,55,26,27,38,39,40,42,43,44]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await l(Promise.all([a(()=>import("./RelationshipQuery-DJsz3K0U-D-eGTyyi.js"),__vite__mapDeps([42,1,2,3,4,43,39,40,44]),import.meta.url).then(n=>n.R),a(()=>import("./executeRelationshipQuery-BlX9_g4g-CImnaiCk.js"),__vite__mapDeps([45,46,1,2,3,4,47,48,49,50,51,52,53,54,55,26,27,38,39,40,42,43,44]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:n}=await l(a(()=>import("./queryAttachments-Bgvu3RnK-Cvyl760X.js"),__vite__mapDeps([56,1,2,3,4,47,48,49,46,50,51,52,53,54,55,26,27,57]),import.meta.url),t),o=Q(this.url);return n(o,await(this.queryAttachmentsSupported?r(o,e,t):s(o,e,t)))}async executeBinsQuery(e,t){const{executeBinsQuery:r}=await l(a(()=>import("./executeBinsQuery-26-59HNS-DtGPbwkl.js"),__vite__mapDeps([58,46,1,2,3,4,48,49,50,47,51,52,53,54,55,26,27,59,60,61,43,39,40,44,38]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await l(a(()=>import("./executeTopFeaturesQuery-CjTd36wS-qhtD1ClJ.js"),__vite__mapDeps([62,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,38,39,40,64,44]),import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await l(a(()=>import("./executeForTopIds-BWxBZygF-DgGyONje.js"),__vite__mapDeps([65,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await l(a(()=>import("./executeForTopExtents-3NOTiZTn-LgMKaeX3.js"),__vite__mapDeps([66,1,2,3,4,46,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await l(a(()=>import("./executeForTopCount-Dx1gCDe1-ChNIGHPB.js"),__vite__mapDeps([67,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?f.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const s=T(r),n=w(r);for(const o of r.queryFormats){if(o===s){t.formatOf3DObjects=o;break}o!==n||t.formatOf3DObjects||(t.formatOf3DObjects=o)}if(!t.formatOf3DObjects)throw new d("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!I(t.outSpatialReference,this.sourceSpatialReference))throw new d("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:o,originY:p,originZ:m,translationX:h,translationY:y,translationZ:_,scaleX:S,scaleY:D,scaleZ:F,rotationX:O,rotationY:b,rotationZ:x,rotationDeg:g}=r.transformFieldRoles;t.outFields.push(o,p,m,h,y,_,S,D,F,O,b,x,g)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};u([c({type:f})],i.prototype,"dynamicDataSource",void 0),u([c()],i.prototype,"fieldsIndex",void 0),u([c()],i.prototype,"gdbVersion",void 0),u([c()],i.prototype,"infoFor3D",void 0),u([c({readOnly:!0})],i.prototype,"parsedUrl",null),u([c()],i.prototype,"pbfSupported",void 0),u([c()],i.prototype,"queryAttachmentsSupported",void 0),u([c()],i.prototype,"sourceSpatialReference",void 0),u([c({type:String})],i.prototype,"url",void 0),i=u([R("esri.layers.graphics.sources.support.QueryTask")],i);const K=i;export{K as C};
