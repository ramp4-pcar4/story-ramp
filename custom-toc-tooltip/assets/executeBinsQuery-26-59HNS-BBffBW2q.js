import{y as u}from"./utils-9sQxfkoa-BIkzD6xJ.js";import{a as p,f,bX as y,bM as m,bK as S,aC as c}from"./story-CqzOZAFN.js";import{B as l}from"./normalizeUtils-Bxmy9MNI-8zWW_Axc.js";import{f as R}from"./query-DFW9-NG_-i8M-MSND.js";import g from"./BinsQuery-DjwQZqB8-CxxGEHpQ.js";import{O}from"./FeatureSet-BkVNthuN-CkT7ilV0.js";import"./main-jn20pd5b.js";import"./normalizeUtilsCommon-CRJlkfEA-yYX157n0.js";import"./utils-Bq23Xwmj-D9xLuC35.js";import"./pbfQueryUtils-F4ZE8-K8-BQ5Hxg_i.js";import"./pbf-D-y3_eZO-C6Sh_C81.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-GAwPeRhj.js";import"./projection-BA9M1R7d-Bb6He4B9.js";import"./projectBuffer-CvCBvJ6W-B2MCidMM.js";import"./queryUtils-Brxu6254-mzcr1Zo4.js";import"./json-BI97KiBB-Ce5cWfI2.js";import"./Query-BrwMGK8U-hZhhG7bf.js";import"./Field-C6hA1tZj-CqcqORvP.js";import"./fieldType-CD2CL2hr-B7_Wxp4e.js";import"./TimeExtent-Cn0Jofqr-BktY_eU3.js";function N(i){const r=i.geometry,e=i.toJSON(),t=e;let n,o,a;return r!=null&&(o=r.spatialReference,a=m(o),t.geometryType=S(r),t.geometry=JSON.stringify(r),t.inSR=a),e.outSR?(t.outSR=m(e.outSR),n=i.outSpatialReference):r&&(t.outSR=t.inSR,n=o),t.bin&&=JSON.stringify(t.bin),t.quantizationParameters&&=JSON.stringify(t.quantizationParameters),t.outStatistics&&=JSON.stringify(t.outStatistics),t.outTimeReference&&=JSON.stringify(t.outTimeReference),i.defaultSpatialReference&&c(o,n)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function d(i,r,e){return q(i,r,e)}async function q(i,r,e={}){const t=typeof i=="string"?p(i):i,n=r.geometry?[r.geometry]:[],o=await l(n,null,{signal:e.signal}),a=o?.[0];a!=null&&((r=r.clone()).geometry=a);const s=R({...t.query,f:"json",...N(r)});return f(y(t.path,"queryBins"),{...e,query:{...s,...e.query}})}async function D(i,r,e){const{data:t}=await d(u(i),g.from(r),e);return O.fromJSON(t)}export{D as executeBinsQuery};
