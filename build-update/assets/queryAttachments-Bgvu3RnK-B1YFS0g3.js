import{bZ as f,jo as u,f as p}from"./story-_2qqwocf.js";import{f as d}from"./query-DFW9-NG_-T0QPF1YB.js";import{h as y}from"./AttachmentInfo-D9RFO8W2-MaRRDLzM.js";import"./main-C0sSK5MQ.js";import"./normalizeUtils-Bxmy9MNI-LxE2kY-t.js";import"./normalizeUtilsCommon-CRJlkfEA-DnAkLSlZ.js";import"./utils-9sQxfkoa-BagUpzfV.js";import"./utils-Bq23Xwmj-eS9Z43Ef.js";import"./pbfQueryUtils-F4ZE8-K8-CaJidMRN.js";import"./pbf-D-y3_eZO-DlXjFTA0.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./queryZScale-BiYV6Pr6-MU1OMS1o.js";import"./projection-BA9M1R7d-BNPaubfz.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";function I(r){const t=r.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function J(r,t){const o={};for(const n of t){const{parentObjectId:e,parentGlobalId:a,attachmentInfos:c}=n;for(const s of c){const{id:i}=s,h=f(u(`${r.path}/${e}/attachments/${i}`)),m=y.fromJSON(s);m.set({url:h,parentObjectId:e,parentGlobalId:a}),o[e]?o[e].push(m):o[e]=[m]}}return o}function N(r,t,o){let n={query:d({...r.query,f:"json",...I(t)})};return o&&(n={...o,...n,query:{...o.query,...n.query}}),p(r.path+"/queryAttachments",n).then(e=>e.data.attachmentGroups)}async function Q(r,t,o){const{objectIds:n}=t,e=[];for(const a of n)e.push(p(r.path+"/"+a+"/attachments",o));return Promise.all(e).then(a=>n.map((c,s)=>({parentObjectId:c,attachmentInfos:a[s].data.attachmentInfos})))}export{N as executeAttachmentQuery,Q as fetchAttachments,J as processAttachmentQueryResult};