import{eT as g,eU as _,eX as y,eY as z,fa as i,e$ as s,fb as l,fc as o,f3 as v,f4 as m,f2 as a,f5 as x,fg as k,gb as d,gc as j,fd as C,fv as B,eZ as E,f6 as G,f8 as I,e_ as K,f0 as M,f1 as w,fG as Z,fl as $,fm as q,fo as A,fE as O}from"./story-CF27ueXF.js";import"./main-BCz1fOgT.js";const P={class:"mt-10"},U=["aria-label"],W=["alt","src"],X=["alt"],Y={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},D={class:"pl-5"},H={class:"ml-auto pr-5"},L=["content"],Q=g({__name:"item",props:{area:{type:Object,required:!0},showThumbnail:{type:Boolean}},setup(e){const{t:c}=y(),p=z("iApi"),r=n=>{if(!n.extent){console.error("selected area of interest doesn't have an extent specified.");return}p?.geo.map.zoomMapTo(O.fromConfig("area-of-interest-extent",n.extent))};return(n,t)=>{const h=i("truncate"),u=i("tippy"),f=i("focus-item");return s(),l("div",P,[o((s(),l("button",{type:"button",class:v(["area-of-interest-item-button bg-gray-300 w-full",{"border border-gray-300":e.showThumbnail}]),"aria-label":m(c)("areas-of-interest.select"),onClick:t[2]||(t[2]=b=>r(e.area))},[a("div",null,[a("div",{class:v(["flex hover:opacity-50 area-of-interest-item-image",e.showThumbnail?"h-180":"h-30"])},[e.area.thumbnail?(s(),l("img",{key:0,class:"w-full bg-white object-contain",alt:e.area.altText||e.area.title,src:e.area.thumbnail},null,8,W)):e.showThumbnail?(s(),l("img",{key:1,class:"w-full bg-white object-contain py-30",alt:e.area.altText||e.area.title,src:"https://openclipart.org/image/800px/160615"},null,8,X)):x("",!0)],2)]),a("div",Y,[o((s(),l("div",D,[a("span",null,k(e.area.title),1)])),[[h]]),o(a("div",H,[o((s(),l("a",{onClick:t[0]||(t[0]=d(()=>{},["stop"])),onKeydown:t[1]||(t[1]=j(d(()=>{},["prevent"]),["enter","space"])),content:e.area.description},t[3]||(t[3]=[a("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,L)),[[u,{placement:"bottom",trigger:"click focus"}]])],512),[[C,e.area.description]])])],10,U)),[[f]])])}}}),R=_(Q,[["__scopeId","data-v-06be115a"]]),S={class:"h-600 overflow-y-auto"},V={class:"mx-5"},F={key:0},ee=g({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:c}=y(),p=B(),r=E(()=>p.areas);let n=G(!1);return I(()=>{n.value=!!r.value?.some(t=>t.thumbnail)}),(t,h)=>{const u=K("panel-screen"),f=i("focus-list");return s(),M(u,{panel:e.panel},{header:w(()=>[Z(k(m(c)("areas-of-interest.title")),1)]),content:w(()=>[a("div",S,[a("div",V,[r.value.length>0?o((s(),l("ul",F,[(s(!0),l($,null,q(r.value,(b,T)=>(s(),l("li",{key:T},[A(R,{area:b,"show-thumbnail":m(n),class:"block relative overflow-hidden"},null,8,["area","show-thumbnail"])]))),128))])),[[f]]):x("",!0)])])]),_:1},8,["panel"])}}});export{ee as default};
