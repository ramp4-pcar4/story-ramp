import{kI as p,kJ as f,kK as I,kG as i,L as h}from"./story-u82SUoyt.js";import"./main-CmCzAIzx.js";function l(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function b(s,t){const e={};for(const n of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=n;for(const c of r){const{id:m}=c,d=p(f(`${s.path}/${a}/attachments/${m}`)),u=I.fromJSON(c);u.set({url:d,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(u):e[a]=[u]}}return e}function k(s,t,e){let n={query:i({...s.query,f:"json",...l(t)})};return e&&(n={...e,...n,query:{...e.query,...n.query}}),h(s.path+"/queryAttachments",n).then(a=>a.data.attachmentGroups)}async function q(s,t,e){const{objectIds:n}=t,a=[];for(const o of n)a.push(h(s.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>n.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{k as executeAttachmentQuery,q as fetchAttachments,b as processAttachmentQueryResult};
