import{ae as f}from"./story-_2qqwocf.js";function m(t,e,n=0){const r=f(t,0,i);for(let o=0;o<4;o++)e[n+o]=Math.floor(256*u(r*l[o]))}function a(t,e=0){let n=0;for(let r=0;r<4;r++)n+=t[e+r]*c[r];return n}const l=[1,256,65536,16777216],c=[1/256,1/65536,1/16777216,1/4294967296],i=a(new Uint8ClampedArray([255,255,255,255]));function u(t){return t-Math.floor(t)}export{a as f,m as l};