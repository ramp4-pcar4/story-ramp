let e=1e-6;function o(){return e}function r(t){e=t}const a=Math.random,u=Math.PI/180,i=180/Math.PI;function l(t){return t*u}function c(t){return t*i}function s(t,n){return Math.abs(t-n)<=e*Math.max(1,Math.abs(t),Math.abs(n))}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:a,equals:s,getEpsilon:o,setEpsilon:r,toDegree:c,toRadian:l},Symbol.toStringTag,{value:"Module"}));export{o as n,a as o,l as r,c as u};