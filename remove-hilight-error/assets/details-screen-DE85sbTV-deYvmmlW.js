import{eT as F,eU as se,f6 as L,f8 as ie,e$ as t,fb as a,f2 as h,fl as R,fm as Y,f3 as U,fF as ve,f5 as O,fg as I,fx as X,eZ as M,fa as N,fc as A,fo as le,gb as pe,eX as Z,gj as ne,fi as J,f7 as G,f9 as Q,f0 as V,f4 as w,eY as ee,fn as _e,eV as W,fG as ae,e_ as Te,f1 as de,gq as me,fK as je,gp as Me}from"./story-CeSwA6O5.js";import{Z as ze}from"./toggle-switch-control-B4JzuvHa-BIxmj1Mu.js";import"./main-B2WqJNyC.js";const He={key:0,class:"relative"},$e={key:0,class:"relative"},qe=["innerHTML"],Ee=["src"],Ie={key:1,class:"w-32 h-32"},Oe={class:"symbologyIcon"},Ce=["innerHTML"],Be=["src"],De={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Ae={key:0,class:"px-5"},Ne={key:1,class:"inline-flex justify-center items-center relative"},Pe=F({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(v){const k=v,i=L([]);return ie(()=>{i.value=k.layer.legend}),(d,p)=>v.result.loaded?(t(),a("div",He,[h("div",{class:U(v.result.items.length===0?"opacity-50":"")},[i.value.length>1?(t(),a("div",$e,[(t(!0),a(R,null,Y(i.value.slice(0,3).reverse(),(_,y)=>(t(),a("div",{class:U(["absolute",[y==0?"symbol-0":y==1?"left-3":"left-6"]]),style:ve({"z-index":3-y}),key:y},[i.value[y].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:i.value[y].svgcode},null,8,qe)):i.value[y].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:i.value[y].imgUrl},null,8,Ee)):O("",!0)],6))),128))])):i.value.length>0?(t(),a("div",Ie,[h("div",Oe,[i.value[0].svgcode?(t(),a("span",{key:0,innerHTML:i.value[0].svgcode},null,8,Ce)):i.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:i.value[0].imgUrl},null,8,Be)):O("",!0)])])):O("",!0)],2),h("div",De,[v.result.loaded?(t(),a("div",Ae,I(v.result.items.length),1)):O("",!0)])])):(t(),a("div",Ne,p[0]||(p[0]=[h("div",{class:"symbologyIcon h-32 w-32"},[h("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Fe=se(Pe,[["__scopeId","data-v-496d788d"]]),Se=["content"],Ge={class:"symbologyLayerName truncate"},Ue=F({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(v){const k=X(),i=M(()=>k.properties),d=v,p=()=>{const _=d.layer;return _&&i.value[_.id]&&i.value[_.id].name?i.value[_.id].name:_?.name??""};return(_,y)=>{const b=N("tippy");return A((t(),a("button",{class:U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",v.selected?"detailsButtonSelected":"px-11"]),onClick:y[0]||(y[0]=pe(()=>{},["stop"])),content:p()},[le(Fe,{class:"symbStack w-32 h-32 mr-10",layer:v.layer,result:v.result},null,8,["layer","result"]),h("div",Ge,I(p()),1)],10,Se)),[[b,{placement:"right",sticky:!0}]])}}}),Ve=["content"],Ze=F({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(v,{emit:k}){const{t:i}=Z(),d=ne(),p=L(),_=()=>{p.value._tippy.hide()},y=f=>{f.key==="Tab"&&p.value?.matches(":focus")&&p.value._tippy.show()},b=k,o=v,r=L(""),c=L([]),u=L(!1),e=L(!1),n=f=>d.getLayerByUid(f),z=f=>{r.value=f,b("selection-changed",f),u.value=!1},C=()=>{e.value||setTimeout(()=>{u.value=e.value},500),e.value=!0},E=()=>{u.value=e.value=!1},m=()=>{e.value||(u.value=!0),e.value=!0},H=()=>{u.value=e.value=!1};return J(()=>{c.value.push(G(o,()=>{r.value=o.selected}))}),ie(()=>{p.value?.addEventListener("blur",_),p.value?.addEventListener("keyup",y)}),Q(()=>{c.value.forEach(f=>f()),p.value?.removeEventListener("blur",_),p.value?.removeEventListener("keyup",y)}),(f,P)=>{const D=N("focus-item"),q=N("focus-list"),$=N("tippy");return A((t(),a("div",{class:U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":u.value}]),onMouseover:C,onMouseleave:E,onFocus:m,onBlur:pe(H,["self"]),content:w(i)("details.layers.results.list.tooltip"),ref_key:"el",ref:p},[(t(!0),a(R,null,Y(o.results,(l,g)=>(t(),a("div",{class:"flex justify-start relative",key:g},[A((t(),V(Ue,{key:l.uid,layer:n(l.uid),result:l,selected:l.uid===r.value,onClick:x=>z(l.uid)},null,8,["layer","result","selected","onClick"])),[[D]])]))),128))],42,Ve)),[[q],[$,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Re={class:"inline font-bold"},Ke=["innerHTML"],We=F({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(v){const{t:k}=Z(),i=ee("iApi"),d=v,p=(r,c,u,e)=>{const n=r.find(z=>z[c].toLowerCase()===u.toLowerCase());n&&delete e[n.name]},_=()=>{const r=Object.assign({},d.identifyData.data);p(d.fields,"type","geometry",r),i?.ui.exposeOids||p(d.fields,"type","oid",r),i?.ui.exposeMeasurements||(p(d.fields,"name","shape_length",r),p(d.fields,"name","shape_area",r));const c={};d.fields.forEach(e=>{const n=d.fixtureFields?.find(z=>e.name===z.field);c[e.name]={name:n?.alias||e.alias||e.name,type:e.type,visible:n?.visible??!0}});const u={};Object.keys(r).forEach(e=>{const n=c[e];if(n&&n.visible){const z=r[e];u[e]={value:typeof z=="number"?i?.ui.formatNumber(z):z,alias:n.name,type:n.type}}});for(const[e]of Object.entries(u))i.ui.isPlainText(u[e].value)&&(u[e].value=i.ui.escapeHtml(u[e].value));return u},y=(r,c,u)=>{switch(u){case"date":return o(r);default:return b(r,c)}},b=(r,c)=>{if(!r)return r;if(r.trim().match(/\.(jpeg|jpg|gif|png)$/)||r.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${r}" alt="${k("details.item.alert.defaultAltText",{alias:c})}" />`;const u="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=r.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=u,e.innerHTML):me(r,{className:u,target:"_blank",validate:{url:n=>/^https?:\/\//.test(n)}})},o=r=>{const c=parseInt(r);return isNaN(c)?r:new Date(c).toISOString().split("T")[0]};return(r,c)=>(t(),a("div",null,[(t(!0),a(R,null,Y(_(),(u,e,n)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:n},[h("span",Re,I(u.alias),1),c[0]||(c[0]=h("span",{class:"flex-auto"},null,-1)),h("span",{class:"inline",innerHTML:y(u.value,u.alias,u.type)},null,8,Ke)]))),128))]))}}),Ye=["innerHTML"],Xe={key:1},Je=F({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(v){const{t:k}=Z();return(i,d)=>v.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:v.identifyData.data.data??v.identifyData.data},null,8,Ye)):(t(),a("div",Xe,I(w(k)("details.layers.results.empty")),1))}}),Qe={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},lt=["innerHTML"],at={key:1,class:"symbologyIcon p-6"},st=["content","innerHTML","tabindex"],it={key:1,class:"flex p-6 flex-grow"},nt={key:2,class:"zoomButton text-center p-3"},ut=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ot={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},dt={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},ct=["innerHTML"],ce=F({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(v){const k=ne(),i=v,d=ee("iApi"),p=L([]),_=X(),{t:y}=Z(),b=L(""),o=L("none"),r=L(),c=()=>k.getLayerByUid(i.uid),u=M(()=>_.properties),e=M(()=>_.defaultTemplates),n=M(()=>c()?.supportsFeatures??!1),z=M(()=>c()?.mapLayer??!1),C=M(()=>{const l=c()?.nameField;let g=l&&i.data.loaded?i.data.data[l]:d.$i18n.t("details.items.title");return d.ui.isPlainText(g)&&(g=d.ui.escapeHtml(g)),g}),E=l=>{if(typeof l=="string"){const g="underline text-blue-700 break-all",x=document.createElement("div");return x.innerHTML=l.trim(),x.firstElementChild?.tagName=="A"?(x.firstElementChild.className=g,x.innerHTML):me(l,{className:g,target:"_blank",validate:{url:T=>/^https?:\/\//.test(T)}})}return l},m=()=>{q("none"),i.data.loaded?H():i.data.load().then(()=>{H()})},H=()=>{if(b.value="",!(i.data&&i.data.loaded))return;const l=c();if(l===void 0){console.warn(`could not find layer for uid ${i.uid} during icon lookup`);return}if(l.supportsFeatures){const g=l.oidField;l.getIcon(i.data.data[g]).then(x=>{b.value=x})}},f=M(()=>{const l=c();return l&&u.value[l.id]&&u.value[l.id].template?u.value[l.id].template:e.value&&e.value[i.data.format]?e.value[i.data.format]:n.value?We:Je}),P=M(()=>n.value?c()?.fields||[]:[]),D=M(()=>{const l=c();if(l&&u.value[l.id]&&u.value[l.id].fields)return u.value[l.id].fields}),q=l=>{l==="zoomed"||l==="error"?setTimeout(()=>{o.value=l,r.value?._tippy.show(),setTimeout(()=>{r.value?._tippy.hide(),o.value="none"},3e3)},300):o.value=l},$=()=>{if(o.value!=="none")return;q("zooming");const l=c();if(l===void 0||!l.isLoaded){console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`),q("error");return}if(!i.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),q("error");return}const g=i.data.data[l.oidField],x=()=>{const T={getGeom:!0};l.getGraphic(g,T).then(B=>{B.geometry.invalid()?(console.error(`Could not find graphic for objectid ${g}`),q("error")):(d.geo.map.zoomMapTo(B.geometry),q("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom")))}).catch(()=>{q("error")})};l.layerType===je.FEATURE&&l.geomType!==Me.POINT?l.getGraphicExtent(g).then(T=>{d.geo.map.zoomMapTo(T),q("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom"))}).catch(()=>{x()}):x()};return J(()=>{p.value.push(G(i,()=>{m()},{deep:!1,immediate:!0}))}),Q(()=>{p.value.forEach(l=>l())}),(l,g)=>{const x=N("truncate"),T=N("tippy");return t(),a(R,null,[h("div",Qe,[n.value?(t(),a("div",et,[h("div",tt,[v.data.loaded&&b.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:b.value},null,8,lt)):(t(),a("div",at,g[1]||(g[1]=[h("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),v.data.loaded?A((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:C.value,innerHTML:E(C.value),tabindex:v.inList?-1:0},null,8,st)),[[x,{options:{placement:"right"}}]]):(t(),a("div",it,I(w(y)("details.loading")),1)),v.data.loaded?(t(),a("span",nt,[z.value?A((t(),a("button",{key:0,type:"button",content:w(y)(`details.item.zoom${o.value==="none"?"":`.${o.value}`}`),"aria-label":w(y)(`grid.cells.zoom${o.value==="none"?"":`.${o.value}`}`),ref_key:"zoomButton",ref:r,onClick:g[0]||(g[0]=B=>{B.stopPropagation(),$()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[o.value==="zooming"?(t(),a("div",rt)):o.value==="zoomed"?(t(),a("svg",ot,g[2]||(g[2]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):o.value==="error"?(t(),a("svg",dt,g[3]||(g[3]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:w(d).ui.getZoomIcon()},null,8,ct))],8,ut)),[[T,{placement:"bottom"}]]):O("",!0)])):O("",!0)])):O("",!0)]),v.open?(t(),V(_e(f.value),{key:0,identifyData:v.data,fields:P.value,fixtureFields:D.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):O("",!0)],64)}}}),vt={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},mt={for:"toggle"},yt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},ft={class:"flex"},gt=["aria-label"],ht=["content","aria-label","disabled"],bt={class:"px-3 text-center flex-grow"},kt=["content","aria-label","disabled"],xt={key:3},wt={key:0},Lt=["content"],_t=["onClick"],Tt={key:1,class:"text-center"},jt={key:4,class:"p-5"},Mt=F({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(v){const k=L(),i=()=>{k.value._tippy.hide()},d=s=>{s.key==="Tab"&&k.value?.matches(":focus")&&k.value._tippy.show()},p=ee("iApi"),_=X(),y=ne(),b=v,{t:o}=Z(),r=L(!1),c=L(p.fixture.get("details")),u=L(!0),e=L(!1),n=L(0),z=L(20),C=L([]),E=L([]),m=M(()=>_.activeGreedy),H=M(()=>_.properties),f=M(()=>n.value+z.value),P=()=>y.getLayerByUid(b.uid),D=()=>b.results.find(s=>s.uid===b.uid),q=M(()=>D()?.loaded??!1),$=M(()=>D()?.requestTime),l=M(()=>r.value&&(!e.value&&T().length>1||e.value&&T().length>z.value)),g=M(()=>{const s=P();return s&&H.value[s.id]&&H.value[s.id].name?H.value[s.id].name:s?.name??""}),x=M(()=>b.uid),T=()=>{const s=D();return s?s.items:[]},B=M(()=>T()[n.value]),ue=M(()=>{if(c.value.hasHilighter()){const s=P();if(s)return s.mapLayer&&s.supportsFeatures}return!1}),ye=s=>{u.value=s,_.hilightToggle=s,S()},fe=()=>{const s=P();n.value=n.value??0,u.value=_.hilightToggle??u.value,e.value=!1,r.value=!!s,S()},re=s=>{e.value?(n.value+=s*z.value,S()):n.value+=s},S=()=>{const s=T();if(u.value&&q.value&&s.length>0&&ue.value)if(e.value)c.value.hilightDetailsItems(s.slice(n.value,f.value),b.uid);else{const j=s[n.value];j&&c.value.hilightDetailsItems([j],b.uid)}else c.value.removeDetailsHilight()},ge=()=>{e.value=!0,n.value=Math.floor(n.value/z.value)*z.value,S()},he=()=>{c.value.removeDetailsHilight()},be=()=>{c.value.removeDetailsHilight()},ke=s=>{const j=n.value;n.value=s,e.value=!1,j===s&&S()};return ie(()=>{C.value.push(p.event.on(W.LAYER_REMOVE,s=>{const j=p.panel.get("details");b.uid===s.uid&&j&&j.close()})),C.value.push(p.event.on(W.PANEL_CLOSED,s=>{s.id==="details"&&he()})),C.value.push(p.event.on(W.PANEL_MINIMIZED,s=>{s.id==="details"&&be()})),C.value.push(p.event.on(W.MAP_BASEMAPCHANGE,s=>{u.value&&s.schemaChanged&&S()})),k.value?.addEventListener("blur",i),k.value?.addEventListener("keyup",d)}),J(()=>{E.value.push(G(B,()=>{e.value||(fe(),B.value===void 0&&c.value.removeDetailsHilight())},{deep:!1,immediate:!0})),E.value.push(G(x,()=>{const s=b.uid;if(e.value&&s){const j=D();j&&j.loading.then(()=>{b.uid===s&&e.value&&S()})}},{deep:!1,immediate:!0})),E.value.push(G($,()=>{n.value=0})),E.value.push(G(()=>b.uid,()=>{n.value=0}))}),Q(()=>{E.value.forEach(s=>s()),C.value.forEach(s=>p.event.off(s)),k.value?.removeEventListener("blur",i),k.value?.removeEventListener("keyup",d)}),(s,j)=>{const xe=N("truncate"),te=N("tippy"),we=N("focus-item"),Le=N("focus-list");return q.value&&m.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:ve(v.results.length>1?{"margin-left":"42px"}:"")},[r.value?A((t(),a("h1",vt,[ae(I(g.value),1)])),[[xe,{options:{placement:"top-start"}}]]):O("",!0),ue.value?(t(),a("div",pt,[h("label",mt,I(w(o)("details.togglehilight.title")),1),le(ze,{config:{value:u.value,disabled:!1},onToggled:ye},null,8,["config"])])):O("",!0),l.value?(t(),a("div",yt,[h("div",ft,[e.value?O("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":w(o)("details.item.see.list"),onClick:j[0]||(j[0]=K=>ge())},I(w(o)("details.item.see.list")),9,gt)),h("div",{class:U(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[A((t(),a("button",{type:"button",content:w(o)(e.value?"details.items.previous":"details.item.previous.item"),onClick:j[1]||(j[1]=K=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":w(o)(e.value?"details.items.previous":"details.item.previous.item"),disabled:n.value===0},j[3]||(j[3]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[te,{placement:"top"}]]),h("span",bt,I(e.value?w(o)("details.items.range",[n.value+1,Math.min(f.value,T().length),T().length]):w(o)("details.item.count",[n.value+1,T().length])),1),A((t(),a("button",{type:"button",content:w(o)(e.value?"details.items.next":"details.item.next.item"),onClick:j[2]||(j[2]=K=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":w(o)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&n.value===T().length-1||e.value&&f.value>=T().length},j[4]||(j[4]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,kt)),[[te,{placement:"top"}]])],2)])])):O("",!0),r.value?(t(),a("div",xt,[T().length>0?(t(),a("div",wt,[e.value?A((t(),a("div",{key:0,class:"flex flex-col",content:w(o)("details.layers.results.list.tooltip"),ref_key:"el",ref:k},[(t(!0),a(R,null,Y(T().slice(n.value,f.value),(K,oe)=>A((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:oe,onClick:Et=>ke(n.value+oe)},[le(ce,{data:K,uid:v.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,_t)),[[we,"show-truncate"]])),128))],8,Lt)),[[Le],[te,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),V(ce,{key:1,data:B.value,uid:v.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",Tt,I(w(o)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",jt,I(w(o)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:U(["flex justify-center py-10 items-center",v.results.length>1?"ml-42":""])},[j[5]||(j[5]=h("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),ae(" "+I(w(o)("details.item.loading")),1)],2))}}}),zt=se(Mt,[["__scopeId","data-v-3a47d6ad"]]),Ht={class:"relative h-full"},$t={class:"detailsContentSection overflow-y-auto h-full"},qt=F({__name:"details-screen",props:{panel:{type:Object}},setup(v){const{t:k}=Z(),i=ee("iApi"),d=X(),p=L([]),_=L([]),y=L([]),b=L(!1),o=L(""),r=M(()=>d.activeGreedy),c=M(()=>d.payload),u=M(()=>d.properties),e=m=>{o.value=m},n=m=>y.value.find(H=>H.uid===m),z=m=>{m!==void 0&&(d.activeGreedy=m.length===0?0:m[0].requestTime,y.value=m,C(m))},C=m=>{if(o.value){const H=n(o.value);H?H.loading.then(()=>{H.requestTime===r.value&&(H.items.length>0?(d.activeGreedy=0,b.value=!1):E(m))}):E(m)}else E(m)},E=(m,H)=>{let f;if(H)f=H;else{const $=d.properties,l=m.map(x=>[$[x.layerId]?.priority??50,x.layerId]),g=new Set(l.map(x=>x[0]));f=[],g.forEach(x=>{const T=l.filter(B=>B[0]===x).map(B=>B[1]);f.push([x,T])}),f.sort((x,T)=>T[0]-x[0])}if(f.length===0){d.activeGreedy=0,b.value=!0;return}const P=f[f.length-1][1],D=m.filter($=>P.includes($.layerId)).map($=>$.loading.then(()=>$.items.length>0?Promise.resolve($):Promise.reject())),q=m.length===0?0:m[0].requestTime;Promise.any(D).then($=>{$.requestTime===r.value&&(d.activeGreedy=0,o.value=$.uid,b.value=!1)}).catch(()=>{q===r.value&&(f.pop(),E(m,f))})};return J(()=>{_.value.push(G(c,m=>{z(m)},{deep:!1,immediate:!0}))}),Q(()=>{p.value.forEach(m=>i.event.off(m)),_.value.forEach(m=>m())}),(m,H)=>{const f=Te("panel-screen");return t(),V(f,{panel:v.panel},{header:de(()=>[ae(I(w(d).origin==="toggleEvent"?w(k)("details.layers.title.gridOrigin"):w(k)("details.layers.title.identifyOrigin")),1)]),content:de(()=>[h("div",Ht,[y.value.length>1?(t(),V(Ze,{key:0,results:y.value,detailsProperties:u.value,selected:o.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):O("",!0),h("div",$t,[b.value?(t(),a("div",{key:1,class:U(["text-center",{"ml-42":y.value.length>1}])},I(y.value.length>=1?w(k)("details.layers.results.empty"):w(k)("details.layers.results.empty.noLayers")),3)):(t(),V(zt,{key:0,uid:o.value,results:y.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),Bt=se(qt,[["__scopeId","data-v-2a8a1e06"]]);export{Bt as default};
