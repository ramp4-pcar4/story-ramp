import{o as c,$ as l}from"./story-DleBxxVb.js";async function u(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new c("request:server",`Unable to load ${e}`,{url:e,error:o})}return l(t),r}async function w(a,e,t,r,o){let n;try{n=await createImageBitmap(a)}catch(i){throw new c("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:i,level:e,row:t,col:r})}return l(o),n}export{u as i,w as u};
