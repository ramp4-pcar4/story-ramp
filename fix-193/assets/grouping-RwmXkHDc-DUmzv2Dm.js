import{hm as o}from"./story-FpFPbiXi.js";function i(e,r){let t;if(typeof e=="string")t=o(e+`-seed(${r})`);else{let n=12;t=e^r;do t=107*(t>>8^t)+n|0;while(--n!=0)}return(1+t/(1<<31))/2}function c(e){return Math.floor(i(e,f)*l)}const f=53290320,l=10;export{i,c as r};
