const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-oq2ZVtwf-Ptm0BGJv.js","./story-CeSwA6O5.js","./main-B2WqJNyC.js","./main-Blpl9308.css","./story-DyPwkWXT.css"])))=>i.map(i=>d[i]);
import{_ as n}from"./main-B2WqJNyC.js";import{eT as l,fH as a,fu as h,eW as p,fw as g,fq as v,eX as f,eY as m,e_ as u,e$ as d,f0 as x,f1 as $,f2 as e,f4 as b}from"./story-CeSwA6O5.js";class w extends v{}const A=l({__name:"nav-button",setup(s){const{t}=f(),o=m("iApi"),i=()=>{o?.panel.toggle("geosearch")};return(E,r)=>{const c=u("mapnav-button");return d(),x(c,{onClickFunction:i,tooltip:b(t)("geosearch.title")},{default:$(()=>r[0]||(r[0]=[e("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),e("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["tooltip"])}}}),_={en:{"geosearch.title":"Geolocation Search","geosearch.noResults":"No results to show for ","geosearch.searchText":"Search for a location...","geosearch.visible":"Visible on map","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Clear filters","geosearch.serviceError":"No response from {services} service(s)","geosearch.badChars":"The character(s) {chars} are not supported and will be ignored"},fr:{"geosearch.title":"Recherche géolocalisée","geosearch.noResults":"Aucun résultat à afficher pour ","geosearch.searchText":"Rechercher un emplacement...","geosearch.visible":"Visible sur la carte","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Effacer les filtres","geosearch.serviceError":"Pas de réponse de la part des services de {services}","geosearch.badChars":"Les caractères {chars} ne sont pas pris en charge et seront ignorés"}};class S extends w{async added(){a(this.$vApp.$pinia).initService(this.$iApi.language,this.config),this.$iApi.component("geosearch-nav-button",A),this.$iApi.panel.register({id:"geosearch",config:{screens:{"geosearch-component":()=>h(n(()=>import("./screen-oq2ZVtwf-Ptm0BGJv.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url))},button:{tooltip:"geosearch.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"geosearch.title"}},{i18n:{messages:_}}),this.handlePanelTeleports(["geosearch"])}removed(){this.$iApi.fixture.exists("appbar")&&p(this.$vApp.$pinia).removeButton("geosearch"),this.$iApi.fixture.exists("mapnav")&&g(this.$vApp.$pinia).removeItem("geosearch"),a(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("geosearch")}}export{S as default};
