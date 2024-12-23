import{p0 as g,p1 as C,p4 as y,p5 as _,pj as i,p8 as s,pk as l,pl as o,pc as v,pd as h,pb as t,pe as x,pp as k,qk as d,ql as j,pm as z,pE as $,p6 as q,pf as G,ph as H,p7 as M,p9 as P,pa as w,pP as R,pu as V,pv as B,px as D,pN as E}from"./story-u82SUoyt.js";import"./main-CmCzAIzx.js";const K={class:"mt-10"},O=["aria-label"],S=["alt","src"],W=["alt"],Y={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},A={class:"pl-5"},F={class:"ml-auto pr-5"},I=["content"],L=g({__name:"item",props:{area:{type:Object,required:!0},showThumbnail:{type:Boolean}},setup(e){const{t:p}=y(),c=_("iApi"),n=r=>{if(!r.extent){console.error("selected area of interest doesn't have an extent specified.");return}c?.geo.map.zoomMapTo(E.fromConfig("area-of-interest-extent",r.extent))};return(r,a)=>{const b=i("truncate"),u=i("tippy"),m=i("focus-item");return s(),l("div",K,[o((s(),l("button",{type:"button",class:v(["area-of-interest-item-button bg-gray-300 w-full",{"border border-gray-300":e.showThumbnail}]),"aria-label":h(p)("areas-of-interest.select"),onClick:a[2]||(a[2]=f=>n(e.area))},[t("div",null,[t("div",{class:v(["flex hover:opacity-50 area-of-interest-item-image",e.showThumbnail?"h-180":"h-30"])},[e.area.thumbnail?(s(),l("img",{key:0,class:"w-full bg-white object-contain",alt:e.area.altText||e.area.title,src:e.area.thumbnail},null,8,S)):e.showThumbnail?(s(),l("img",{key:1,class:"w-full bg-white object-contain py-30",alt:e.area.altText||e.area.title,src:"https://openclipart.org/image/800px/160615"},null,8,W)):x("",!0)],2)]),t("div",Y,[o((s(),l("div",A,[t("span",null,k(e.area.title),1)])),[[b]]),o(t("div",F,[o((s(),l("a",{onClick:a[0]||(a[0]=d(()=>{},["stop"])),onKeydown:a[1]||(a[1]=j(d(()=>{},["prevent"]),["enter","space"])),content:e.area.description},a[3]||(a[3]=[t("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("path",{d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,I)),[[u,{placement:"bottom",trigger:"click focus"}]])],512),[[z,e.area.description]])])],10,O)),[[m]])])}}}),N=C(L,[["__scopeId","data-v-06be115a"]]),Q={class:"h-600 overflow-y-auto"},U={class:"mx-5"},X={key:0},ee=g({__name:"screen",props:{panel:{type:Object}},setup(e){const{t:p}=y(),c=$(),n=q(()=>c.areas);let r=G(!1);return H(()=>{r.value=!!n.value?.some(a=>a.thumbnail)}),(a,b)=>{const u=M("panel-screen"),m=i("focus-list");return s(),P(u,{panel:e.panel},{header:w(()=>[R(k(h(p)("areas-of-interest.title")),1)]),content:w(()=>[t("div",Q,[t("div",U,[n.value.length>0?o((s(),l("ul",X,[(s(!0),l(V,null,B(n.value,(f,T)=>(s(),l("li",{key:T},[D(N,{area:f,"show-thumbnail":h(r),class:"block relative overflow-hidden"},null,8,["area","show-thumbnail"])]))),128))])),[[m]]):x("",!0)])])]),_:1},8,["panel"])}}});export{ee as default};
