import{jA as I,jB as $,jy as N,dY as h,jC as b,bO as A,cx as O,jD as P,cO as v,jE as x,o as S,bX as R,jF as B,gF as F,jG as C}from"./story-DleBxxVb.js";import{k as D}from"./MD5-CHHr-oed-SuyrCYQ0.js";import{n as J}from"./multiOriginJSONSupportUtils-DGETddQl-BrWaY9_8.js";import{r as K}from"./uuid-Dj9mdEVg-BaKSCiyT.js";import{e as y}from"./resourceExtension-CdQvIDKV-DRn9XXn4.js";function L(e){const t=e?.origins??[void 0];return(o,n)=>{const r=Y(e,o,n);for(const c of t){const i=I(o,c,n);for(const s in r)i[s]=r[s]}}}function Y(e,t,o){if(e?.type==="resource")return k(e,t,o);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:r}=C;return{read:n,write:r}}}}function k(e,t,o){const n=$(t,o);return{type:String,read:(r,c,i)=>{const s=N(r,c,i);return n.type===String?s:typeof n.type=="function"?new n.type({url:s}):void 0},write:{writer(r,c,i,s){if(!s?.resources)return typeof r=="string"?void(c[i]=h(r,s)):void(c[i]=r.write({},s));const p=E(r),a=h(p,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!J(this)||s?.origin&&this.originIdOf(o)>A(s.origin)),u={object:this,propertyName:o,value:r,targetUrl:a,dest:c,targetPropertyName:i,context:s,params:e};s?.portalItem&&a&&!O(a)?d&&e?.contentAddressed?g(u):d?q(u):z(u):s?.portalItem&&(a==null||P(a)!=null||v(a)||d)?g(u):c[i]=a}}}}function g(e){const{targetUrl:t,params:o,value:n,context:r,dest:c,targetPropertyName:i}=e;if(!r.portalItem)return;const s=x(t),p=U(n,t,r);if(o?.contentAddressed&&p.type!=="json")return void r.messages?.push(new S("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${p.type} with content addressing. Content addressing is only supported for json resources.`,{content:p}));const a=o?.contentAddressed&&p.type==="json"?D(p.jsonString):s?.filename??K(),d=R(o?.prefix??s?.prefix,a),u=`${d}.${y(p)}`;if(o?.contentAddressed&&r.resources&&p.type==="json"){const f=r.resources.toKeep.find(({resource:m})=>m.path===u)??r.resources.toAdd.find(({resource:m})=>m.path===u);if(f)return void(c[i]=f.resource.itemRelativeUrl)}const l=r.portalItem.resourceFromPath(u);v(t)&&r.resources&&r.resources.pendingOperations.push(B(t).then(f=>{l.path=`${d}.${y({type:"blob",blob:f})}`,c[i]=l.itemRelativeUrl}).catch(()=>{}));const w=o?.compress??!1;r.resources&&j({...e,resource:l,content:p,compress:w,updates:r.resources.toAdd}),c[i]=l.itemRelativeUrl}function q(e){const{context:t,targetUrl:o,params:n,value:r,dest:c,targetPropertyName:i}=e;if(!t.portalItem)return;const s=t.portalItem.resourceFromPath(o),p=U(r,o,t),a=y(p),d=F(s.path),u=n?.compress??!1;a===d?(t.resources&&j({...e,resource:s,content:p,compress:u,updates:t.resources.toUpdate}),c[i]=o):g(e)}function z({context:e,targetUrl:t,dest:o,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),o[n]=t)}function j({object:e,propertyName:t,updates:o,resource:n,content:r,compress:c}){const i=s=>{G(e,t,s)};o.push({resource:n,content:r,compress:c,finish:i})}function U(e,t,o){return typeof e=="string"?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}function E(e){return e==null?null:typeof e=="string"?e:e.url}function G(e,t,o){typeof e[t]=="string"?e[t]=o.url:e[t].url=o.url}export{L as C};
