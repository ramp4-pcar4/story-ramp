import{y as m}from"./utils-9sQxfkoa-C20tsXNG.js";import{f as p,bM as y}from"./story-CeSwA6O5.js";import{f as j}from"./query-DFW9-NG_-CDdOYAFd.js";import{O as R}from"./FeatureSet-BkVNthuN-6ijpdIxP.js";import{d as f}from"./RelationshipQuery-DJsz3K0U-f33cFTKp.js";import"./main-B2WqJNyC.js";import"./normalizeUtils-Bxmy9MNI-BXSbnv5E.js";import"./normalizeUtilsCommon-CRJlkfEA-BCTdtNwJ.js";import"./utils-Bq23Xwmj-CEXeQ5m1.js";import"./pbfQueryUtils-F4ZE8-K8-CLqEXYDG.js";import"./pbf-D-y3_eZO-S0WDz8gr.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-CF6tKruk.js";import"./projection-BA9M1R7d-Jq_GJJGp.js";import"./projectBuffer-CvCBvJ6W-BtND5RbS.js";import"./Field-C6hA1tZj-D5Z-bhHm.js";import"./fieldType-CD2CL2hr-86CBtY8F.js";import"./Query-BrwMGK8U-DEUZK5Tg.js";import"./TimeExtent-Cn0Jofqr-DWTx1oxs.js";function b(r,e){const t=r.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function F(r,e,t){const n=await l(r,e,t),o=n.data,s=o.geometryType,a=o.spatialReference,i={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)i[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(i[c[u]]=d)}return{...n,data:i}}async function h(r,e,t){const n=await l(r,e,t,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function l(r,e,t={},n){const o=j({...r.query,f:"json",...n,...b(e,n)});return p(r.path+"/queryRelatedRecords",{...t,query:{...t.query,...o}})}async function V(r,e,t){e=f.from(e);const n=m(r);return F(n,e,t).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(i=>a[i]=R.fromJSON(s[i])),a})}async function $(r,e,t){e=f.from(e);const n=m(r);return h(n,e,{...t}).then(o=>o.data)}export{V as executeRelationshipQuery,$ as executeRelationshipQueryForCount};
