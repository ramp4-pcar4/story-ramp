import{es as u,et as l,ae as m}from"./story-OUarUCIt.js";import{A as p}from"./vec42-D8CJyqHG-DnfLTeQH.js";import{o as A}from"./vec4f64-hf2nxvhQ-CaAr8PTM.js";const s=2.4;function g(o){return u(o*s)}function x(o){return l(o)/s}function h(o,n,i,a){let{color:c,ratio:e}=n,{color:r,ratio:t}=i;t===e&&(t===1?e-=1e-6:t+=1e-6);const f=m((a-e)/(t-e),0,1);p(o,c.toArray(),r.toArray(),f)}function P(o){const n=new Uint8ClampedArray(2048);if(o=o.filter(({ratio:r})=>r>=0&&r<=1).sort((r,t)=>r.ratio-t.ratio).map(({color:r,ratio:t})=>({color:r,ratio:Math.max(t,.001)})),o.length<1)return n;let i=o[0],a=o[0],c=1;const e=A();for(let r=0;r<512;r++){const t=(r+.5)/512;for(;t>a.ratio&&c<o.length;)i=a,a=o[c++];h(e,i,a,t),n.set(e,4*r)}return n}function q(o,n,i){const a=Math.sqrt(o**2+n**2)/i;return a>1?0:3/(Math.PI*i**2)*(1-a**2)**2}function w(o){return typeof o=="function"?o:o?n=>+n[o]:()=>1}export{q as A,w as M,s as c,x as d,P as x,g as y};
