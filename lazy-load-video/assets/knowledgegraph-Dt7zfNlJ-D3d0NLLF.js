const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./knowledgeGraphService-DOJz0fzA-z25a3Kzm.js","./main-B3PZTcgA.js","./main-khothZKc.css","./story-DukCeLi3.js","./story-CajWDOD6.css","./Relationship-Db9GUmYx-Yf6a6Ccq.js"])))=>i.map(i=>d[i]);
import{_ as D}from"./main-B3PZTcgA.js";import{r as _,C as E,J as $,d as k,d6 as N,b7 as j}from"./story-DukCeLi3.js";import{t as q,N as I}from"./arcadeUtils-DpP0k7IY-BGdbvQcl.js";import{w as P,T as c,n as l,M as T,y as w,F as J,g as M,C as S,e as O,S as C,d as b,c as V,h as K,a as L,R as A,ak as Q}from"./languageUtils-BYxF9hRA-VNsSKAB8.js";import{n as U}from"./portalUtils-CKN9iXwH-C-vcMHwP.js";import{_ as z,W as B,K as H}from"./projection-BA9M1R7d-CbsPsXgq.js";import X from"./PortalItem-CctGdnxF-D7pLHoS7.js";import{f as Y,j as Z}from"./project-DQKhruav-BNhHBgpc.js";import{j as tt,w as nt,x as rt,b as et,k as it}from"./Relationship-Db9GUmYx-Yf6a6Ccq.js";import"./TimeOnly-DSMefxKy-DEzHs29Z.js";import"./UnknownTimeZone-C--TOcPG-2EFmQ3II.js";import"./ImmutableArray-CiJxhY8_-Kqx7aWRu.js";import"./featureConversionUtils-D6hFQ4Af-YsCppts8.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./FieldsIndex-HmzMbJQG-Cqb66zI7.js";import"./number-eRKYXfX9-OZtgvGjJ.js";import"./shared-D1w-26bA-D5nWlkQg.js";import"./Field-C6hA1tZj-B7J_PAy2.js";import"./fieldType-CD2CL2hr-CrSdNyN_.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./Query-BrwMGK8U-Bo6aEy1A.js";import"./TimeExtent-Cn0Jofqr-BuW5m--f.js";import"./projectBuffer-CvCBvJ6W-h7QFg6yE.js";import"./utils-9sQxfkoa-D7rN0BHG.js";import"./utils-Bq23Xwmj-Nei1QMJm.js";let u=null;async function ot(t){const n=E.geometryServiceUrl??"";if(!n){z()||await B();for(const r of t)r.container[r.indexer]=H(r.container[r.indexer],$.WGS84);return}const e=t.map(r=>r.container[r.indexer]),o=new Y({geometries:e,outSpatialReference:$.WGS84}),s=await Z(n,o);for(let r=0;r<s.length;r++){const i=t[r];i.container[i.indexer]=s[r]}}async function W(t,n){const e=new X({portal:t,id:n});return await e.load(),u===null&&(u=await D(()=>import("./knowledgeGraphService-DOJz0fzA-z25a3Kzm.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.k)),await u.fetchKnowledgeGraph(e.url)}function R(t,n,e,o,s){if(t===null)return null;if(w(t)||C(t))return t;if(b(t)||b(t))return t.toJSDate();if(V(t))return t.toStorageFormat();if(K(t))return t.toStorageString();if(L(t)){const r={};for(const i of t.keys())r[i]=R(t.field(i),n,e,o,s),r[i]instanceof k&&s.push({container:r,indexer:i});return r}if(S(t)){const r=t.map(i=>R(i,n,e,o,s));for(let i=0;i<r.length;i++)r[i]instanceof k&&s.push({container:r,indexer:i});return r}return A(t)?t.spatialReference.isWGS84?t:t.spatialReference.isWebMercator&&n?N(t):t:void 0}function at(t,n){if(!t)return t;if(t.spatialReference.isWGS84&&n.spatialReference.isWebMercator)return j(t);if(t.spatialReference.equals(n.spatialReference))return t;throw new c(n,l.WrongSpatialReference,null)}function v(t,n){if(!t)return null;const e={};for(const o in t)e[o]=m(t[o],n);return e}function m(t,n){return t===null?null:S(t)?t.map(e=>m(e,n)):t instanceof nt?{graphTypeName:t.typeName,id:t.id,graphType:"entity",properties:v(t.properties,n)}:t instanceof rt?{graphType:"object",properties:v(t.properties,n)}:t instanceof et?{graphTypeName:t.typeName,id:t.id,graphType:"relationship",originId:t.originId??null,destinationId:t.destinationId??null,properties:v(t.properties,n)}:t instanceof it?{graphType:"path",path:t.path?t.path.map(e=>m(e,n)):null}:A(t)?at(t,n):w(t)||C(t)||Q(t)?t:null}function At(t){t.mode==="async"&&(t.functions.knowledgegraphbyportalitem=function(n,e){return t.standardFunctionAsync(n,e,(o,s,r)=>{if(P(r,2,2,n,e),r[0]===null)throw new c(n,l.PortalRequired,e);if(r[0]instanceof q){const d=T(r[1]);let f;return f=n.services?.portal?n.services.portal:_.getDefault(),W(U(r[0],f),d)}if(w(r[0])===!1)throw new c(n,l.InvalidParameter,e);const i=T(r[0]);return W(n.services?.portal??_.getDefault(),i)})},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,e){return t.standardFunctionAsync(n,e,async(o,s,r)=>{P(r,2,4,n,e);const i=r[0];if(!J(i))throw new c(n,l.InvalidParameter,e);const d=r[1];if(!w(d))throw new c(n,l.InvalidParameter,e);u===null&&(u=await D(()=>import("./knowledgeGraphService-DOJz0fzA-z25a3Kzm.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(a=>a.k));let f=null;const h=M(r[2],null);if(!(h instanceof I||h===null))throw new c(n,l.InvalidParameter,e);if(h){let a=[];f=R(h,!0,!1,n,a),a=a.filter(p=>!p.container[p.indexer].spatialReference.isWGS84),a.length>0&&await ot(a)}const x=new tt({openCypherQuery:d,bindParameters:f});(i?.serviceDefinition?.currentVersion??11.3)>11.2&&(x.outputSpatialReference=n.spatialReference);const F=(await u.executeQueryStreaming(i,x)).resultRowsStream.getReader(),y=[];try{for(;;){const{done:a,value:p}=await F.read();if(a)break;if(S(p))for(const g of p)y.push(m(g,n));else{const g=[];for(const G of p)g.push(m(p[G],n));y.push(g)}}}catch(a){throw a}return I.convertJsonToArcade(y,O(n),!1,!0)})},t.signatures.push({name:"querygraph",min:2,max:4}))}export{At as registerFunctions};
