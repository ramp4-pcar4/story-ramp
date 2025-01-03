import{eT as T,eU as F,eV as te,eW as S,eX as W,eY as V,eZ as q,e_ as G,e$ as l,f0 as k,f1 as X,f2 as A,f3 as E,f4 as O,f5 as L,f6 as I,f7 as ae,f8 as J,f9 as Q,fa as N,fb as g,fc as P,fd as ee,fe as ne,ff as ie,fg as se,fh as oe,fi as le,fj as re,fk as R,fl as x,fm as M,fn as K,fo as U,fp as pe,fq as ue,fr as ce,fs as j,ft as de}from"./story-_2qqwocf.js";import"./main-C0sSK5MQ.js";class D{id;options;componentId;constructor(a){const r={options:{},...a};({id:this.id,options:this.options,componentId:this.componentId}=r)}}const fe=["innerHTML"],H=T({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(v){const{t:a}=W(),r=V("iApi"),n=v,d=q(()=>r?.panel.get(n.panelId)?.button),o=()=>{n.minimize?r?.panel.toggleMinimize(n.panelId):r?.panel.toggle(n.panelId)};return(e,y)=>{const p=G("appbar-button");return d.value?(l(),k(p,{key:0,onClickFunction:o,tooltip:O(a)(d.value.tooltip),id:v.panelId},{default:X(()=>[A("div",{class:E(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":v.overflow}]),innerHTML:d.value.icon},null,10,fe)]),_:1},8,["tooltip","id"])):L("",!0)}}}),me={},ve={class:"border-b p-0 self-center w-2/3"};function he(v,a){return l(),g("span",ve)}const Y=F(me,[["render",he],["__scopeId","data-v-5d32b715"]]);var ge={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(v){var a=v.state,r=v.name,n=v.options,d=de(a,n),o=a.modifiersData.preventOverflow||{x:0,y:0},e=o.x,y=o.y,p=a.rects.popper,u=p.width,h=p.height,z=a.placement.split("-"),w=z[0],_=w==="left"?"left":"right",m=w==="top"?"top":"bottom";a.modifiersData[r]={width:u-d[_]-e,height:h-d[m]-y}}};const be=["content","aria-label"],$e=T({__name:"more-button",props:{position:{type:String,default:"right-end"},popperOptions:{type:Object,default(){return{}}},numItems:{type:Number,default:1},renderWatch:{type:Number,default:0}},emits:["updateParent"],setup(v,{expose:a,emit:r}){const{t:n}=W(),d=V("iApi"),o=v,e=r;function y(){e("updateParent")}const p=I(!1),u=I(0),h=I(),z=I(),w=I();function _(){y(),R(()=>{m(),p.value=!p.value})}ae(()=>o.renderWatch,()=>{_()});const m=()=>{p.value=!p.value;const c=d.$vApp.$el.querySelector(".inner-shell"),b={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:f}){const{width:i}=f.modifiersData.maxSize;f.styles.popper={...f.styles.popper,maxWidth:`${i}px`,maxHeight:`${c.offsetHeight-45}px`};const $=Math.min(o.numItems<=0?0:55+44*(o.numItems-1),c.offsetHeight-45);f.styles.popper.height=`${$}px`,w?.value?.offsetHeight&&(w.value.style.height=`${$}px`),f.styles.popper.overflowY="auto",f.styles.popper.overflowX="hidden"}};z.value&&w.value&&(u.value++,ce(z.value,w.value,{placement:o.position||"right-end",modifiers:[{...ge,options:{boundary:c}},b,{name:"offset",options:{offset:[0,5]}},{name:"preventOverflow",enabled:!0,options:{boundary:c}}],...o.popperOptions})),u.value===1&&_()};return J(()=>{window.addEventListener("click",c=>{c.target instanceof HTMLElement&&!h.value?.contains(c.target)&&(p.value=!1)},{capture:!0})}),Q(()=>{window.removeEventListener("click",c=>{c.target instanceof HTMLElement&&!h.value?.contains(c.target)&&(p.value=!1)},{capture:!0})}),a({rerender:_}),(c,b)=>{const f=N("focus-item"),i=N("tippy");return l(),g("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:h},[P((l(),g("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:b[0]||(b[0]=$=>m()),content:O(n)("appbar.more"),"aria-label":O(n)("appbar.more"),ref_key:"dropdownTrigger",ref:z},b[1]||(b[1]=[A("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[A("path",{d:"M0 0h24v24H0z",fill:"none"}),A("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)]),8,be)),[[f],[i,{placement:"right-end"}]]),P(A("div",{id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",ref_key:"dropdown",ref:w},[ne(c.$slots,"default",{},void 0,!0)],512),[[ee,p.value]])],512)}}}),ye=F($e,[["__scopeId","data-v-93661050"]]),we={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},xe=T({__name:"appbar-button",setup(v){const a=ie(),{t:r}=W(),n=V("iApi"),d=q(()=>a.notificationNumber),o=()=>{n.panel.toggle("notifications")};return(e,y)=>{const p=G("appbar-button",!0);return l(),k(p,{onClickFunction:o,tooltip:O(r)("notifications.title"),class:"notification-button",id:""},{default:X(()=>[y[0]||(y[0]=A("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[A("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),d.value&&d.value>0?(l(),g("span",we,se(d.value),1)):L("",!0)]),_:1},8,["tooltip"])}}}),ke=F(xe,[["__scopeId","data-v-787da765"]]),Ie=["content"],Ee=T({__name:"appbar",setup(v){const a=oe(),r=S(),n=I(0),d=I(0),o=q(()=>r.visible),e=q(()=>r.temporary),{t:y}=W(),p=I(!1),u=I({}),h=I(),z=()=>{R(()=>{j()?.proxy?.$forceUpdate()})},w=()=>{h.value._tippy.hide()},_=m=>{m.key==="Tab"&&h.value?.matches(":focus")&&h.value._tippy.show()};return J(()=>{h.value?.addEventListener("blur",w),h.value?.addEventListener("keyup",_)}),le(()=>{const m=j();window.addEventListener("resize",()=>m?.proxy?.$forceUpdate())}),Q(()=>{const m=j();window.removeEventListener("resize",()=>m?.proxy?.$forceUpdate()),h.value?.removeEventListener("blur",w),h.value?.removeEventListener("keyup",_)}),re(()=>{R(()=>{const m=h.value;let c,b=[...m.children],f=b[b.length-2].getBoundingClientRect().top;a.mobileView||(f=m.getBoundingClientRect().bottom-38);let i=m.querySelector("#dropdown");for(let s=b.length-4;s>=0;s--){let C=b[s].getBoundingClientRect().bottom;if(f&&i&&(C>f||p.value&&C+56>f))b[s].classList.forEach(B=>{B.includes("identifier")&&(c=B.slice(11))}),c&&(u.value[c]=!0,c.includes("divider")||n.value++,d.value++),p.value||(p.value=!0);else if(C!==0)break}let $=m.querySelector("#more"),t=$.getBoundingClientRect().bottom;if(c=void 0,p.value&&f&&$&&i&&t!==0&&(t<=f-56||i.childElementCount==1&&t<=f)){let s=i.childElementCount,C=0;for(;t<=f-56||s==1;){let B=i.children[C];if(B&&(B.classList.forEach(Z=>{Z.includes("identifier")&&(c=Z.slice(11))}),c&&(u.value[c]=!1,c.includes("divider")||n.value--),t+=48,s-=1,C+=1),s===0){p.value=!1;break}}}Object.keys(u.value).forEach(s=>{m.querySelector(`.identifier-${s}`)||(delete u.value[s],s.includes("divider")||(n.value=Math.max(0,n.value-1)),d.value++)})})}),(m,c)=>{const b=N("focus-list"),f=N("tippy");return P((l(),g("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",content:O(y)("panels.controls.items"),ref_key:"el",ref:h},[(l(!0),g(x,null,M(o.value,(i,$)=>(l(),g(x,null,[(l(!0),g(x,null,M(i,(t,s)=>(l(),g(x,null,[typeof t=="string"&&u.value[`${t}-${s}`]!==!0?(l(),k(H,{key:`${t}-${s}-default`,panelId:t,class:E(["appbar-item h-48",`identifier-${t}-${s}`])},null,8,["panelId","class"])):u.value[`${t}-${s}`]!==!0?(l(),k(K(t.componentId),{key:`${t}-${s}-custom`,options:t.options,class:E(["appbar-item h-48",`identifier-${t}-${s}`]),id:t.id},null,8,["options","id","class"])):L("",!0)],64))),256)),u.value[`divider-${$}`]!==!0?(l(),k(Y,{class:E(["appbar-item",`identifier-divider-${$}`]),key:`${i}-${$}-default`},null,8,["class"])):L("",!0)],64))),256)),(l(!0),g(x,null,M(e.value?.filter(i=>u.value[`${i}-temp`]!==!0),i=>(l(),k(H,{panelId:i,minimize:!0,key:`${i}-temp`,class:E([`identifier-${i}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),P(U(ye,{id:"more",numItems:n.value,renderWatch:d.value,onUpdateParent:z},{default:X(()=>[(l(!0),g(x,null,M(o.value,(i,$)=>(l(),g(x,{key:$},[(l(!0),g(x,null,M(i,(t,s)=>(l(),g(x,null,[typeof t=="string"&&u.value[`${t}-${s}`]?(l(),k(H,{key:`${t}-${s}-default`,panelId:t,class:E(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${s}`]),overflow:""},null,8,["panelId","class"])):u.value[`${t}-${s}`]?(l(),k(K(t.componentId),{key:`${t}-${s}-custom`,options:t.options,id:t.id,class:E(["appbar-item h-48",`identifier-${t}-${s}`])},null,8,["options","id","class"])):L("",!0)],64))),256)),u.value[`divider-${$}`]?(l(),k(Y,{key:0,class:E(["border-black my-4",`identifier-divider-${$}`])},null,8,["class"])):L("",!0)],64))),128)),(l(!0),g(x,null,M(e.value?.filter(i=>u.value[`${i}-temp`]),i=>(l(),k(H,{panelId:i,minimize:!0,key:`${i}-temp`,class:E([`identifier-${i}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},8,["numItems","renderWatch"]),[[ee,p.value]]),U(ke,{class:"appbar-item bottom-48 h-48 sm:display-none"}),U(pe,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})],8,Ie)),[[b],[f,{trigger:"manual",touch:!1,placement:"top-end",popperOptions:{placement:"top",modifiers:[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["top"]}}]}}]])}}});class _e extends ue{get config(){return super.config}_parseConfig(a){if(!a)return;const r=S(this.$vApp.$pinia);let n;Array.isArray(a.items[0])?n=a.items:n=[a.items];const d=[];n.forEach(o=>{d.push(o.map(e=>typeof e=="string"?e:new D(e)))}),r.items=d.flat().reduce((o,e)=>(o[e instanceof D?e.id:e]=e,o),{}),r.order=d.map(o=>o.map(e=>e instanceof D?e.id:e)),this._validateItems()}_validateItems(){const a=S(this.$vApp.$pinia);a.order.flat().forEach(r=>{typeof a.items[r]!="string"&&[r].some(n=>{this.$iApi.fixture.exists(n)&&!a.items[r]&&(a.items[r].componentId=`${n}-appbar-button`)})})}}const ze={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Me extends _e{initialized(){}async added(){Object.entries(ze).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e));const{destroy:a,el:r}=this.mount(Ee,{app:this.$element}),n=this.$vApp.$el.getElementsByClassName("inner-shell")[0];n.insertBefore(r.childNodes[0],n.querySelector(".panel-stack")),this._parseConfig(this.config);const d=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),o=[];o.push(this.$iApi.event.on(te.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const e=S(this.$vApp.$pinia);d(),o.forEach(u=>this.$iApi.event.off(u));const y={...e.items},p=[...e.temporary];Object.keys(y).forEach(u=>e.removeButton(u)),p.forEach(u=>e.removeButton(u)),a(),e.$reset()}}}export{Me as default};
