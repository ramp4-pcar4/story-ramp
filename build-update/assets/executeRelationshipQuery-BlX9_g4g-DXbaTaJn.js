import{y as m}from"./utils-9sQxfkoa-BagUpzfV.js";import{f as p,bM as y}from"./story-_2qqwocf.js";import{f as j}from"./query-DFW9-NG_-T0QPF1YB.js";import{O as R}from"./FeatureSet-BkVNthuN-BkVqZBKW.js";import{d as f}from"./RelationshipQuery-DJsz3K0U-Vq4QvV3p.js";import"./main-C0sSK5MQ.js";import"./normalizeUtils-Bxmy9MNI-LxE2kY-t.js";import"./normalizeUtilsCommon-CRJlkfEA-DnAkLSlZ.js";import"./utils-Bq23Xwmj-eS9Z43Ef.js";import"./pbfQueryUtils-F4ZE8-K8-CaJidMRN.js";import"./pbf-D-y3_eZO-DlXjFTA0.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-MU1OMS1o.js";import"./projection-BA9M1R7d-BNPaubfz.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";import"./Field-C6hA1tZj-0h4zvHrA.js";import"./fieldType-CD2CL2hr-jFb-atFW.js";import"./Query-BrwMGK8U-CFn_2Vls.js";import"./TimeExtent-Cn0Jofqr-BkSLp2ff.js";function b(r,e){const t=r.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function F(r,e,t){const n=await l(r,e,t),o=n.data,s=o.geometryType,a=o.spatialReference,i={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)i[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(i[c[u]]=d)}return{...n,data:i}}async function h(r,e,t){const n=await l(r,e,t,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function l(r,e,t={},n){const o=j({...r.query,f:"json",...n,...b(e,n)});return p(r.path+"/queryRelatedRecords",{...t,query:{...t.query,...o}})}async function V(r,e,t){e=f.from(e);const n=m(r);return F(n,e,t).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(i=>a[i]=R.fromJSON(s[i])),a})}async function $(r,e,t){e=f.from(e);const n=m(r);return h(n,e,{...t}).then(o=>o.data)}export{V as executeRelationshipQuery,$ as executeRelationshipQueryForCount};
