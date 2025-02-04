import{o as d,r as w,a as f,a4 as b,a5 as N,a6 as $,a7 as x,a8 as g,a9 as h}from"./story-FpFPbiXi.js";import{i as B,m as S}from"./devEnvironmentUtils-CxrVv3RG-CX5aoxVE.js";import{g as F,f as j,j as D,A as O,q as A}from"./styleUtils-BtpNqZyT-DzFqbykf.js";import"./main-C_7ateg5.js";function W(e,t,l,a){const n=e.name;return n==null?Promise.reject(new d("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName==="Esri2DPointSymbolsStyle"?M(n,t,a):F(e,t,a).then(o=>I(o,n,t,l,A,a))}function E(e,t){return t.items.find(l=>l.name===e)}function I(e,t,l,a,n,o){const s=l?.portal!=null?l.portal:w.getDefault(),p={portal:s,url:f(e.baseUrl),origin:"portal-item"},m=E(t,e.data);if(!m){const y=`The symbol name '${t}' could not be found`;return Promise.reject(new d("symbolstyleutils:symbol-name-not-found",y,{symbolName:t}))}let i=b(n(m,a),p),u=m.thumbnail?.href??null;const c=m.thumbnail?.imageData;B()&&(i=S(i)??"",u=S(u));const P={portal:s,url:f(N(i)),origin:"portal-item"};return j(i,o).then(y=>{const U=a==="cimRef"?D(y.data):y.data,r=$(U,P);if(r&&x(r)){if(u){const q=b(u,p);r.thumbnail=new g({url:q})}else c&&(r.thumbnail=new g({url:`data:image/png;base64,${c}`}));e.styleUrl?r.styleOrigin=new h({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new h({portal:l.portal,styleName:e.styleName,name:t}))}return r})}function M(e,t,l){const a=O.replaceAll(/\{SymbolName\}/gi,e),n=t.portal!=null?t.portal:w.getDefault();return j(a,l).then(o=>{const s=D(o.data);return $(s,{portal:n,url:f(N(a)),origin:"portal-item"})})}export{I as fetchSymbolFromStyle,E as getStyleItemFromStyle,W as resolveWebStyleSymbol};
