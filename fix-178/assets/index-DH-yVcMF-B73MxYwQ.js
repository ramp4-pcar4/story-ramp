import{eT as w,eU as E,fq as y,eX as T,eY as _,f6 as h,fY as f,f8 as M,eV as p,f9 as A,e$ as x,fb as R,f2 as $,fg as I,f4 as P}from"./story-BLxSf89q.js";import"./main-CYSS3xlj.js";const D={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},L={class:"pg-label"},S=w({__name:"map-panguard",setup(m){const{t:r}=T(),t=_("iApi"),s=h(),u=h(-1),o=f([]),n=f([]);M(()=>{c(),n.push(t.event.on(p.MAP_CREATED,()=>{c()})),n.push(t.event.on(p.MAP_DESTROYED,()=>{o.forEach(e=>e.remove())})),n.push(t.event.on(p.MAP_REFRESH_START,()=>{o.forEach(e=>e.remove())})),n.push(t.event.on(p.MAP_REFRESH_END,()=>{c()}))}),A(()=>{n.forEach(e=>t.event.off(e)),o.forEach(e=>e.remove())});const c=()=>{const e=new Map;t.geo.map.viewPromise.then(()=>{o.push(t.geo.map.esriView.on("pointer-down",a=>{a.pointerType==="touch"&&e.set(a.pointerId,{x:a.x,y:a.y})})),o.push(t.geo.map.esriView.on(["pointer-up","pointer-leave"],a=>{a.pointerType==="touch"&&window.setTimeout(()=>{e.delete(a.pointerId)},200)})),o.push(t.geo.map.esriView.on("pointer-move",a=>{const{pointerId:v,pointerType:g,x:l,y:d}=a,i=e.get(v);if(!i||g!=="touch"||e.size!==1){s.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(l-i.x,2)+Math.pow(d-i.y,2))<20||(s.value.classList.add("pg-active"),u.value!==-1&&clearTimeout(u.value),u.value=window.setTimeout(()=>{s.value.classList.remove("pg-active")},2e3),window.scrollBy(i.x-l,i.y-d))}))})};return(e,a)=>(x(),R("div",{class:"pg",ref_key:"panGuard",ref:s},[$("p",L,I(P(r)("panguard.instructions")),1)],512))}}),V=E(S,[["__scopeId","data-v-e91f9000"]]);class C extends y{added(){Object.entries(D).forEach(s=>this.$iApi.$i18n.mergeLocaleMessage(...s));const{destroy:r,el:t}=this.mount(V,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this.removed=()=>{r()}}}export{C as default};
