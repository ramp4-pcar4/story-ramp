const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./gif-BZzSowd2-0DthQ_xi.js","./story-_2qqwocf.js","./main-C0sSK5MQ.js","./main-Cpjm6T2D.css","./story-D48M3uHB.css","./apng-DuERAVke-CSVngagG.js","./_commonjsHelpers-BITg13Vk-KnjfkSck.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./main-C0sSK5MQ.js";import{dG as d,dH as p,f,aU as w,o as y}from"./story-_2qqwocf.js";let r=null,o=!0;function E(a,e,t){if(!a||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(a,e)}catch{o=!1}return m(a,e,t)}function I(a,e,t,n){if(!e||!t)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(a,e,t)}catch{o=!1}const i=m(e,t,n);return i.data.set(a,0),i}function g(){return r||(r=document.createElement("canvas"),r.width=1,r.height=1),r}function m(a,e,t){return t||(t=g()),t.getContext("2d").createImageData(a,e)}async function h(a,e){const t=window.URL.createObjectURL(a);try{const{data:n}=await f(t,{...e,responseType:"image"});return n}catch(n){throw w(n)?n:new y("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function v(a,e){const{arrayBuffer:t,mediaType:n}=await l(a,e),i=n==="image/png";if(n==="image/gif"){const{isAnimatedGIF:c,parseGif:s}=await u(()=>import("./gif-BZzSowd2-0DthQ_xi.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);if(c(t))return s(t,e)}if(i){const{isAnimatedPNG:c,parseApng:s}=await u(()=>import("./apng-DuERAVke-CSVngagG.js"),__vite__mapDeps([5,6,1,2,3,4]),import.meta.url);if(c(t))return s(t,e)}return h(new Blob([t],{type:n}),e)}async function l(a,e){const t=d(a);if(t?.isBase64)return{arrayBuffer:p(t.data),mediaType:t.mediaType};const n=await f(a,{responseType:"array-buffer",...e});return{arrayBuffer:n.data,mediaType:n.getHeader?.("Content-Type")??""}}export{v as T,I as g,E as y};