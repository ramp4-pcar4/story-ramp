const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./meshFeatureSet-zeR2pNmE-kc8V18xO.js","./story-CqzOZAFN.js","./main-jn20pd5b.js","./main-Cypivj38.css","./story-BEIr-4fY.css","./Mesh-DLzjDUIO-BbV53wn4.js","./MeshTransform-C--IG09w-DMNTOFcz.js","./mat4-DX7gBViE-CKkIyT9Y.js","./common-CYWrYyJl-E8-sukrT.js","./mat4f64-Dn1WEGBx-C99QVUMW.js","./quat-BODLR7mS-DOQOMPfP.js","./mat3f64-Dh9_zhFu-BIT-k8Dm.js","./quatf64-C16JxGFv-BKWK1F8U.js","./vec32-D9GsKZ1t-5J-OO_fI.js","./vec42-D8CJyqHG-DnfLTeQH.js","./imageUtils-BA2D6Uf1--HIiHxnx.js","./MeshVertexAttributes-CbNpPur2-C6veRYrr.js","./MeshLocalVertexSpace-BqgocsoS-CIhp_mSs.js","./meshVertexSpaceUtils-B4l_Zo0M-ChO_oHHS.js","./earcut-XDcq3zAf-BcwyrT7l.js","./Indices-DEr2HrWx-bd5mKG-_.js","./plane-Dt8R0KeE-CgTCZDeB.js","./vec2f64-CeODonrJ-CkkJCdRC.js","./vec4f64-hf2nxvhQ-CaAr8PTM.js","./deduplicate-D2d-E5Pw-CPzc1m1k.js","./projectPointToVector-B2UUY9SE-CWxdUH7S.js","./projection-BA9M1R7d-Bb6He4B9.js","./projectBuffer-CvCBvJ6W-B2MCidMM.js","./vertexSpaceConversion-CiKaVq_u-CS2csscT.js","./mat3-CC4Foazl-BWjyqE2v.js","./spatialReferenceEllipsoidUtils-DUrKTvup-CaFGD9Yo.js","./computeTranslationToOriginAndRotation-wF0y9WQG-BX_rhiev.js","./vec3-BazNroeq-CIKUcqfz.js","./BufferView-PQoE3GL7-xfiYTVtw.js","./vec2-tHZ6OaOy-xCj1obDt.js","./vec4-DWDdg1fj-D8s2G2_C.js","./External-D_wl4XAw-BSHCs9ks.js","./infoFor3D-DIuYZyyK-BtH19JJ7.js","./FeatureSet-BkVNthuN-CkT7ilV0.js","./Field-C6hA1tZj-CqcqORvP.js","./fieldType-CD2CL2hr-B7_Wxp4e.js","./meshFeatureAttributes-BwKR5odo-DdEAG6iM.js","./RelationshipQuery-DJsz3K0U-CYOm5kmc.js","./Query-BrwMGK8U-hZhhG7bf.js","./TimeExtent-Cn0Jofqr-BktY_eU3.js","./executeRelationshipQuery-BlX9_g4g-1MCO0Z-E.js","./utils-9sQxfkoa-BIkzD6xJ.js","./query-DFW9-NG_-i8M-MSND.js","./normalizeUtils-Bxmy9MNI-8zWW_Axc.js","./normalizeUtilsCommon-CRJlkfEA-yYX157n0.js","./utils-Bq23Xwmj-D9xLuC35.js","./pbfQueryUtils-F4ZE8-K8-BQ5Hxg_i.js","./pbf-D-y3_eZO-C6Sh_C81.js","./OptimizedFeature-EIithYlr-Cq64mIT3.js","./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js","./queryZScale-BiYV6Pr6-GAwPeRhj.js","./queryAttachments-Bgvu3RnK-059sL-mP.js","./AttachmentInfo-D9RFO8W2-rumXPOcO.js","./executeBinsQuery-26-59HNS-BBffBW2q.js","./BinsQuery-DjwQZqB8-CxxGEHpQ.js","./queryUtils-Brxu6254-mzcr1Zo4.js","./json-BI97KiBB-Ce5cWfI2.js","./executeTopFeaturesQuery-CjTd36wS-DNN1TDzL.js","./queryTopFeatures-IbhAPJlP-DV9zPYKe.js","./TopFeaturesQuery-Ckj_IYM7-sEuBj8zi.js","./executeForTopIds-BWxBZygF-BoyNY2ZX.js","./executeForTopExtents-3NOTiZTn-BbrTsDzY.js","./executeForTopCount-Dx1gCDe1-BcvSbM1y.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./main-jn20pd5b.js";import{v as u,S as c,i as R,j as E,a as V,K as v,a_ as l,o as d,aC as I}from"./story-CqzOZAFN.js";import{f as T,C as w}from"./infoFor3D-DIuYZyyK-BtH19JJ7.js";import{K as f,b as A}from"./Query-BrwMGK8U-hZhhG7bf.js";import{y as Q}from"./utils-9sQxfkoa-BIkzD6xJ.js";import{i as j,e as P}from"./executeForIds-Z1gkLduF-C2kRQItk.js";import{T as q,g as L}from"./executeQueryPBF-o8010HS9-DVPdPm66.js";import{s as C}from"./executeQueryJSON-CcHnccia-khmGCskG.js";import{O as z}from"./FeatureSet-BkVNthuN-CkT7ilV0.js";let i=class extends E{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return V(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),s=e.outStatistics?.[0]!=null,n=v("featurelayer-pbf-statistics"),o=!s||n;let p;if(this.pbfSupported&&o)try{p=await q(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&o||(p=await C(this.url,r,t)),this._normalizeFields(p.fields),p}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return z.fromJSON(t);const{meshFeatureSetFromJSON:s}=await l(a(()=>import("./meshFeatureSet-zeR2pNmE-kc8V18xO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return j(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return L(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return P(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await l(Promise.all([a(()=>import("./RelationshipQuery-DJsz3K0U-CYOm5kmc.js"),__vite__mapDeps([42,1,2,3,4,43,39,40,44]),import.meta.url).then(n=>n.R),a(()=>import("./executeRelationshipQuery-BlX9_g4g-1MCO0Z-E.js"),__vite__mapDeps([45,46,1,2,3,4,47,48,49,50,51,52,53,54,55,26,27,38,39,40,42,43,44]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await l(Promise.all([a(()=>import("./RelationshipQuery-DJsz3K0U-CYOm5kmc.js"),__vite__mapDeps([42,1,2,3,4,43,39,40,44]),import.meta.url).then(n=>n.R),a(()=>import("./executeRelationshipQuery-BlX9_g4g-1MCO0Z-E.js"),__vite__mapDeps([45,46,1,2,3,4,47,48,49,50,51,52,53,54,55,26,27,38,39,40,42,43,44]),import.meta.url)]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:n}=await l(a(()=>import("./queryAttachments-Bgvu3RnK-059sL-mP.js"),__vite__mapDeps([56,1,2,3,4,47,48,49,46,50,51,52,53,54,55,26,27,57]),import.meta.url),t),o=Q(this.url);return n(o,await(this.queryAttachmentsSupported?r(o,e,t):s(o,e,t)))}async executeBinsQuery(e,t){const{executeBinsQuery:r}=await l(a(()=>import("./executeBinsQuery-26-59HNS-BBffBW2q.js"),__vite__mapDeps([58,46,1,2,3,4,48,49,50,47,51,52,53,54,55,26,27,59,60,61,43,39,40,44,38]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await l(a(()=>import("./executeTopFeaturesQuery-CjTd36wS-DNN1TDzL.js"),__vite__mapDeps([62,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,38,39,40,64,44]),import.meta.url),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await l(a(()=>import("./executeForTopIds-BWxBZygF-BoyNY2ZX.js"),__vite__mapDeps([65,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await l(a(()=>import("./executeForTopExtents-3NOTiZTn-BbrTsDzY.js"),__vite__mapDeps([66,1,2,3,4,46,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await l(a(()=>import("./executeForTopCount-Dx1gCDe1-BcvSbM1y.js"),__vite__mapDeps([67,46,1,2,3,4,63,48,49,50,47,51,52,53,54,55,26,27,64,44]),import.meta.url),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?f.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const s=T(r),n=w(r);for(const o of r.queryFormats){if(o===s){t.formatOf3DObjects=o;break}o!==n||t.formatOf3DObjects||(t.formatOf3DObjects=o)}if(!t.formatOf3DObjects)throw new d("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!I(t.outSpatialReference,this.sourceSpatialReference))throw new d("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:o,originY:p,originZ:m,translationX:h,translationY:y,translationZ:_,scaleX:S,scaleY:D,scaleZ:F,rotationX:O,rotationY:b,rotationZ:x,rotationDeg:g}=r.transformFieldRoles;t.outFields.push(o,p,m,h,y,_,S,D,F,O,b,x,g)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};u([c({type:f})],i.prototype,"dynamicDataSource",void 0),u([c()],i.prototype,"fieldsIndex",void 0),u([c()],i.prototype,"gdbVersion",void 0),u([c()],i.prototype,"infoFor3D",void 0),u([c({readOnly:!0})],i.prototype,"parsedUrl",null),u([c()],i.prototype,"pbfSupported",void 0),u([c()],i.prototype,"queryAttachmentsSupported",void 0),u([c()],i.prototype,"sourceSpatialReference",void 0),u([c({type:String})],i.prototype,"url",void 0),i=u([R("esri.layers.graphics.sources.support.QueryTask")],i);const K=i;export{K as C};
