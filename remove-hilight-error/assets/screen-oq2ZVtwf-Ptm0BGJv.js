import{eT as j,eU as Y,eX as F,fH as H,fh as D,eZ as w,fZ as U,fa as A,e$ as a,fb as l,f2 as n,f3 as J,f4 as i,gc as G,gb as X,fc as x,fG as C,f5 as _,eY as z,f6 as R,fi as Q,f7 as ee,f8 as O,f9 as W,fg as h,fl as I,fm as Z,eV as ae,e_ as te,f0 as B,f1 as N,fo as K,fe as le,gd as re,ge as se}from"./story-CeSwA6O5.js";import"./main-B2WqJNyC.js";const ne={class:"rv-geosearch-bar relative h-26 mx-8 mb-8"},oe=["placeholder","value","aria-label"],ie={class:"absolute inset-y-0 right-8 grid w-10 place-content-center"},ce=["aria-label","content"],ue=j({__name:"search-bar",setup($){const{t:r}=F(),u=H(),c=D(),m=w(()=>u.searchVal),s=w(()=>['"',"$","!","*","+","?","^","{","}","(",")","|","[","]"].filter(p=>u.searchVal.includes(p)).join("")),o=p=>{u.setSearchTerm(p),u.setSearchRegex(p)},g=U(500,p=>{o(p)});return(p,t)=>{const e=A("tippy");return a(),l("div",ne,[n("input",{type:"text",class:J(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",{"border-yellow-500":s.value}]),placeholder:i(r)("geosearch.searchText"),value:m.value,onInput:t[0]||(t[0]=v=>i(g)(v.target.value)),onKeyup:t[1]||(t[1]=G(v=>{i(c).mobileView&&v.target.blur()},["enter"])),"aria-label":i(r)("geosearch.searchText"),onKeypress:t[2]||(t[2]=G(X(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,42,oe),n("span",ie,[s.value?x((a(),l("button",{key:0,class:"cursor-default","aria-label":i(r)("geosearch.badChars",{chars:s.value}),content:i(r)("geosearch.badChars",{chars:s.value})},t[3]||(t[3]=[C(" ⚠ ")]),8,ce)),[[e]]):_("",!0)])])}}}),pe={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},ve=["value","aria-label"],be={value:"",disabled:"",hidden:""},de={class:"sm:w-1/2 h-26 sm:mx-16 flex"},fe=["value","aria-label"],ge={value:"",disabled:"",hidden:""},he=["disabled","content","aria-label"],me=j({__name:"top-filters",setup($){const{t:r}=F(),u=z("iApi"),c=H(),m=R(),s=R(),o=R(),g=R([]),p=R([]),t=R([]),e=w(()=>c.queryParams),v=w(()=>u.language),L=f=>c.setProvince(f),E=f=>c.setType(f),S=()=>{L({}),E({})},M=()=>{c.initService(u.language,u.fixture.get("geosearch").config);const f=g.value.find(d=>e.value.province===d.name)?.code,k=p.value.find(d=>e.value.type===d.name)?.code;c.getProvinces.then(d=>{g.value=d,L({province:d.find(T=>T.code===f)?.name,forceReRun:!0})}),c.getTypes.then(d=>{p.value=d,E({type:d.find(T=>T.code===k)?.name,forceReRun:!0})})},b=()=>{s.value._tippy.hide()},P=()=>{o.value._tippy.hide()},V=f=>{f.key==="Tab"&&s.value?.matches(":focus")&&navigator.userAgent.includes("Firefox")?s.value._tippy.show():s.value._tippy.hide()},q=f=>{f.key==="Tab"&&o.value?.matches(":focus")&&navigator.userAgent.includes("Firefox")?o.value._tippy.show():o.value._tippy.hide()};return Q(()=>{M(),t.value.push(ee(v,M))}),O(()=>{s.value?.addEventListener("blur",b),s.value?.addEventListener("keyup",V),o.value?.addEventListener("blur",P),o.value?.addEventListener("keyup",q)}),W(()=>{t.value.forEach(f=>f()),s.value?.removeEventListener("blur",b),s.value?.removeEventListener("keyup",V),o.value?.removeEventListener("blur",P),o.value?.removeEventListener("keyup",q)}),(f,k)=>{const d=A("truncate"),T=A("tippy");return a(),l("div",{class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14",ref_key:"el",ref:m},[n("div",pe,[x((a(),l("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:e.value.province,"aria-label":i(r)("geosearch.filters.province"),onChange:k[0]||(k[0]=y=>L({province:y.target.value})),ref_key:"selectProvince",ref:s},[x((a(),l("option",be,[C(h(i(r)("geosearch.filters.province")),1)])),[[d]]),(a(!0),l(I,null,Z(g.value,y=>x((a(),l("option",{key:y.code},[C(h(y.name),1)])),[[d]])),128))],40,ve)),[[d],[T,{content:i(r)("select.items"),trigger:"manual",placement:"top-start"}]])]),n("div",de,[x((a(),l("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:e.value.type,"aria-label":i(r)("geosearch.filters.type"),onChange:k[1]||(k[1]=y=>E({type:y.target.value})),ref_key:"selectFilter",ref:o},[n("option",ge,h(i(r)("geosearch.filters.type")),1),(a(!0),l(I,null,Z(p.value,y=>(a(),l("option",{key:y.code},h(y.name),1))),128))],40,fe)),[[d],[T,{content:i(r)("select.items"),trigger:"manual",placement:"top-start"}]]),x((a(),l("button",{type:"button",class:"text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!e.value.type&&!e.value.province,onClick:S,content:i(r)("geosearch.filters.clear"),"aria-label":i(r)("geosearch.filters.clear")},k[2]||(k[2]=[n("div",{class:"rv-geosearch-icon"},[n("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[n("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1)]),8,he)),[[T,{placement:"bottom"}]])])],512)}}}),ye={class:"rv-geosearch-bottom-filters"},xe={class:"bg-white"},we={class:"ml-8 cursor-pointer font-normal"},Le=["checked"],ke=j({__name:"bottom-filters",setup($){const{t:r}=F(),u=z("iApi"),c=H(),m=w(()=>c.resultsVisible),s=U(300,t=>{g(t).then(e=>{o({extent:e,visible:m.value})})}),o=t=>{c.setMapExtent(t)},g=async t=>t.sr.wkid===4326?t:await u.geo.proj.projectGeometry(4326,t),p=t=>{g(u.geo.map.getExtent()).then(e=>{o({extent:e,visible:t})})};return O(()=>{u.event.on(ae.MAP_EXTENTCHANGE,s,"geosearch_map_extent")}),W(()=>{u.event.off("geosearch_map_extent")}),(t,e)=>(a(),l("div",ye,[n("div",xe,[n("label",we,[n("input",{type:"checkbox",class:"border-2 mx-8 border-gray-600 cursor-pointer",checked:m.value,onChange:e[0]||(e[0]=v=>p(v.target.checked)),onKeypress:e[1]||(e[1]=G(X(()=>{},["prevent"]),["enter"]))},null,40,Le),C(h(i(r)("geosearch.visible")),1)])])]))}}),_e={},Ee={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},Te={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},Ce={class:"flex items-center h-full"};function $e($,r){return a(),l("div",Ee,[n("div",Te,[n("span",Ce,[le($.$slots,"default",{},void 0,!0)])])])}const Re=Y(_e,[["render",$e],["__scopeId","data-v-0a8d1c36"]]),Ae={class:"flex flex-col h-full"},Me={key:1,class:"text-red-900 text-xs px-8 mb-10"},Pe={key:2,class:"px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"},je={class:"relative h-48"},Fe={class:"font-bold text-blue-600"},He={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Se=["onClick"],Ve={class:"rv-result-description px-8"},Ke={class:"flex-1 text-left truncate font-bold leading-tight"},Ge=["innerHTML"],Ie={key:0,class:"text-gray-600 text-sm"},Ze={key:1,class:"hidden"},ze={key:2,class:"text-sm font-normal"},Ne=j({__name:"screen",props:{panel:{type:Object}},setup($){const{t:r}=F(),u=z("iApi"),c=H(),m=w(()=>c.searchVal.replace(/["!*$+?^{}()|[\]\\]/g,"").trim()),s=w(()=>c.searchResults),o=w(()=>c.loadingResults),g=w(()=>c.failedServices),p=e=>{let v=new re("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],se.latLongSR(),!0);u.geo.map.zoomMapTo(v)},t=(e,v)=>{const L=e.replace(new RegExp(`${c.searchRegex}`,"gi"),E=>'<span class="font-bold text-blue-600">'+E+"</span>");return v?L+",":L};return(e,v)=>{const L=te("panel-screen"),E=A("truncate"),S=A("focus-item"),M=A("focus-list");return a(),B(L,{panel:$.panel},{header:N(()=>[C(h(i(r)("geosearch.title")),1)]),content:N(()=>[n("div",Ae,[K(ue),K(me),o.value?(a(),B(Re,{key:0,class:"flex-none"})):_("",!0),g.value.length>0&&!o.value?(a(),l("div",Me,h(i(r)("geosearch.serviceError",{services:g.value.join(", ")})),1)):_("",!0),m.value&&s.value.length===0&&!o.value?(a(),l("div",Pe,[n("span",je,[C(h(i(r)("geosearch.noResults")),1),n("span",Fe,'"'+h(m.value)+'"',1)])])):_("",!0),s.value.length>0?x((a(),l("ul",He,[(a(!0),l(I,null,Z(s.value,(b,P)=>(a(),l("li",{class:"relative h-56",key:P},[x((a(),l("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:V=>p(b),style:{"border-bottom":"1px solid lightgray"},"truncate-trigger":""},[n("div",Ve,[x((a(),l("div",Ke,[n("span",{innerHTML:t(b.name,b.location.province)},null,8,Ge),b.location.province?(a(),l("span",Ie,h(b.location.city?" "+b.location.city+", "+b.location.province.abbr:" "+b.location.province.abbr),1)):_("",!0),b.type?(a(),l("span",Ze,"; ")):_("",!0),b.type?(a(),l("span",ze,[v[0]||(v[0]=n("br",null,null,-1)),C(h(b.type),1)])):_("",!0)])),[[E,{externalTrigger:!0,options:{placement:"top-start"}}]])])],8,Se)),[[S,"show-truncate"]])]))),128))])),[[M]]):_("",!0),K(ke,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{Ne as default};
