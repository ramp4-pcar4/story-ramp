const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./resourceUtils-PAYBmvyK-CMqEQrGd.js","./story-u82SUoyt.js","./main-CmCzAIzx.js","./main-Ci7vwlHy.css","./story-Dafnv89Y.css"])))=>i.map(i=>d[i]);
import{_ as g}from"./main-CmCzAIzx.js";import{ad as y,rD as S,D as v,q as O,kY as E}from"./story-u82SUoyt.js";import{getSiblingOfSameTypeI as T,contentToBlob as m}from"./resourceUtils-PAYBmvyK-CMqEQrGd.js";async function P(s,t,r){const o=await w(s,t,r);await I(o,t,r)}async function R(s,t,r,o,a){const c=await w(r,o,a);await s.update({data:t}),await I(c,o,a)}async function w(s,t,r){if(!t?.resources)return;const o=t.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,f=[];a.forEach(e=>{o.delete(e),s.paths.push(e)});const p=[],h=[],u=[];for(const e of t.resources.toUpdate)if(o.delete(e.resource.path),a.has(e.resource.path)||c.has(e.resource.path)){const{resource:n,content:_,finish:d}=e,i=T(n,y());s.paths.push(i.path),p.push({resource:i,content:await m(_),compress:e.compress}),d&&u.push(()=>d(i))}else{s.paths.push(e.resource.path),h.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource)),c.add(e.resource.path)}for(const e of t.resources.toAdd)if(s.paths.push(e.resource.path),o.has(e.resource.path))o.delete(e.resource.path);else{p.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource))}if(p.length||h.length){const{addOrUpdateResources:e}=await g(()=>import("./resourceUtils-PAYBmvyK-CMqEQrGd.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);await e(t.portalItem,p,"add",r),await e(t.portalItem,h,"update",r)}if(u.forEach(e=>e()),f.length===0)return o;const l=await S(f);if(v(r),l.length>0)throw new O("save:resources","Failed to save one or more resources",{errors:l});return o}async function I(s,t,r){if(!s||!t.portalItem)return;const o=[];for(const a of s){const c=t.portalItem.resourceFromPath(a);o.push(c.portalItem.removeResource(c,r))}await E(o)}export{P as F,R as O};
