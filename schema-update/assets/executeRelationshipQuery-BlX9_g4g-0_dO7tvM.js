import{y as m}from"./utils-9sQxfkoa-BHsg9s5l.js";import{f as p,bM as y}from"./story-B9xumwLI.js";import{f as j}from"./query-DFW9-NG_-avK70x88.js";import{O as R}from"./FeatureSet-BkVNthuN-DDAOElnu.js";import{d as f}from"./RelationshipQuery-DJsz3K0U-x7R9qCP_.js";import"./main-BtP7c6vW.js";import"./normalizeUtils-Bxmy9MNI-B1v54_Bu.js";import"./normalizeUtilsCommon-CRJlkfEA-CMf8Gut4.js";import"./utils-Bq23Xwmj-6AleoKWv.js";import"./pbfQueryUtils-F4ZE8-K8-CX5bJAuq.js";import"./pbf-D-y3_eZO-Cw1qfCZL.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-D5A58oFg.js";import"./projection-BA9M1R7d-CK-kkTrr.js";import"./projectBuffer-CvCBvJ6W-wbw8juri.js";import"./Field-C6hA1tZj-Ar4pRAUR.js";import"./fieldType-CD2CL2hr-CtTAS2HB.js";import"./Query-BrwMGK8U-HrjFrIut.js";import"./TimeExtent-Cn0Jofqr-Djstchdc.js";function b(r,e){const t=r.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function F(r,e,t){const n=await l(r,e,t),o=n.data,s=o.geometryType,a=o.spatialReference,i={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)i[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(i[c[u]]=d)}return{...n,data:i}}async function h(r,e,t){const n=await l(r,e,t,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function l(r,e,t={},n){const o=j({...r.query,f:"json",...n,...b(e,n)});return p(r.path+"/queryRelatedRecords",{...t,query:{...t.query,...o}})}async function V(r,e,t){e=f.from(e);const n=m(r);return F(n,e,t).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(i=>a[i]=R.fromJSON(s[i])),a})}async function $(r,e,t){e=f.from(e);const n=m(r);return h(n,e,{...t}).then(o=>o.data)}export{V as executeRelationshipQuery,$ as executeRelationshipQueryForCount};
