import{p0 as c,p1 as d,qf as i,p4 as u,p5 as h,pf as v,p6 as g,ph as $,p2 as m,pi as f,p8 as A,pk as w,pb as b,pp as C,pd as _,pz as y}from"./story-u82SUoyt.js";import"./main-CmCzAIzx.js";const E={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},L={class:"sg-label"},q=c({__name:"map-scrollguard",setup(p){const e=i(),{t:r}=u(),s=h("iApi"),t=v(),o=g(()=>e.enabled);$(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",l,{capture:!0}),s.event.on(m.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",l,{capture:!0})})}),f(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",l,{capture:!0})});const l=n=>{if(!o.value)return;const a=t.value.classList;n.ctrlKey?(a.remove("sg-active"),a.add("sg-scrolling")):(n.stopPropagation(),a.remove("sg-scrolling"),a.add("sg-active"),window.setTimeout(()=>a.remove("sg-active"),2e3))};return(n,a)=>(A(),w("div",{class:"sg",ref_key:"scrollGuard",ref:t},[b("p",L,C(_(r)("scrollguard.instructions")),1)],512))}}),x=d(q,[["__scopeId","data-v-bf6386a4"]]);class z extends y{setEnabled(e){i(this.$vApp.$pinia).enabled=e}_parseConfig(e){i(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class P extends z{added(){Object.entries(E).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:r,el:s}=this.mount(x,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),r(),i(this.$vApp.$pinia).$reset()}}}export{P as default};
