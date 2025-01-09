import{l as V}from"./floatRGBA-4pIJN00G-BAXq3JYd.js";import{eQ as X}from"./story-BRwEvu2S.js";import{o as U}from"./UpdateTracking2D-Du_WIf4G-CTSvxGSr.js";import{C as D,n as Y}from"./definitions-DJSdSb77-DkoRHaVx.js";const _=.45;function j(n,t=.5){switch(n.type){case"CIMPointSymbol":{const r=n.symbolLayers;if(!r||r.length!==1)return null;const o=r[0];return o.type!=="CIMVectorMarker"?null:j(o)}case"CIMVectorMarker":{const r=n.markerGraphics;if(!r||r.length!==1)return null;const o=r[0];if(!o)return null;const e=o.geometry;if(!e)return null;const i=o.symbol;return!i||i.type!=="CIMPolygonSymbol"&&i.type!=="CIMLineSymbol"||i.symbolLayers?.some(l=>!!l.effects)?null:{type:"sdf",geom:e,sdfPaddingRatio:t,asFill:i.type==="CIMPolygonSymbol"}}}}function q(n){return n?n.rings?n.rings:n.paths?n.paths:n.xmin!==void 0&&n.ymin!==void 0&&n.xmax!==void 0&&n.ymax!==void 0?[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]:null:null}function B(n){let t=1/0,r=-1/0,o=1/0,e=-1/0;for(const i of n)for(const l of i)l[0]<t&&(t=l[0]),l[0]>r&&(r=l[0]),l[1]<o&&(o=l[1]),l[1]>e&&(e=l[1]);return new U(t,o,r-t,e-o)}function L(n){let t=1/0,r=-1/0,o=1/0,e=-1/0;for(const i of n)for(const l of i)l[0]<t&&(t=l[0]),l[0]>r&&(r=l[0]),l[1]<o&&(o=l[1]),l[1]>e&&(e=l[1]);return[t,o,r,e]}function E(n){return n?n.rings?L(n.rings):n.paths?L(n.paths):X(n)?[n.xmin,n.ymin,n.xmax,n.ymax]:null:null}function N(n,t){const[r,o,e,i]=E(n),l=e-r,a=i-o,m=D,c=Y,s=Math.floor(.5*(m*t-c)),f=(m-2*(s+c))/Math.max(l,a),d=Math.round(l*f),h=Math.round(a*f);return{pixelDimensions:[l,a],texelDimensions:[Math.round((d+2*s)/f),Math.round((h+2*s)/f)]}}function O(n,t,r,o,e,i,l){const[a,m,c,s]=n;if(c<a||s<m)return{frameSizeRatio:0,anchorX:0,anchorY:0,widthRatio:1,sdfPaddingRatio:.5};const f=c-a,d=s-m,h=Math.max(f,d);let u=.5;if(i!=null&&r!=null){!l&&t!=null&&(i*=(t.ymax-t.ymin)/r);const b=i/(i+h);b>_&&b<1&&(u=Math.min(b+.1,.99))}const x=D,M=Y,p=Math.floor(.5*(x*u-M)),g=(x-2*(p+M))/h,I=Math.round(f*g)+2*p,w=Math.round(d*g)+2*p;let y=1;t&&(y=w*(1-u)/((t.ymax-t.ymin)*g));let P=0,R=0,C=1;o&&(e?t&&r&&t.ymax-t.ymin>0&&(C=(t.xmax-t.xmin)/(t.ymax-t.ymin),P=o.x/(r*C),R=o.y/r):(P=o.x,R=o.y)),t&&(P=.5*(t.xmax+t.xmin)+P*(t.xmax-t.xmin),R=.5*(t.ymax+t.ymin)+R*(t.ymax-t.ymin)),P-=a,R-=m,P*=g,R*=g,P+=p,R+=p;let S=P/I-.5,v=R/w-.5;return e&&r&&(S*=r*C,v*=r),{frameSizeRatio:y,anchorX:S,anchorY:v,widthRatio:C,sdfPaddingRatio:u}}function T(n){const t=q(n.geom),r=B(t),o=D,e=Y,i=Math.floor(.5*(o*n.sdfPaddingRatio-e)),l=o-2*(i+e),a=l/Math.max(r.width,r.height),m=Math.round(r.width*a)+2*i,c=Math.round(r.height*a)+2*i,s=[];for(const d of t)if(d&&d.length>1){const h=[];for(const u of d){let[x,M]=u;x-=r.x,M-=r.y,x*=a,M*=a,x+=i-.5,M+=i-.5,n.asFill?h.push([x,M]):h.push([Math.round(x),Math.round(M)])}if(n.asFill){const u=h.length-1;h[0][0]===h[u][0]&&h[0][1]===h[u][1]||h.push(h[0])}s.push(h)}const f=G(s,m,c,i);return n.asFill&&H(s,m,c,i,f),{data:K(f,i),width:m,height:c,sdfPaddingRatio:n.sdfPaddingRatio,sdfDecodeCoeff:2*i/l}}function G(n,t,r,o){const e=t*r,i=new Array(e),l=o*o+1;for(let a=0;a<e;++a)i[a]=l;for(const a of n){const m=a.length;for(let c=1;c<m;++c){const s=a[c-1],f=a[c];let d,h,u,x;s[0]<f[0]?(d=s[0],h=f[0]):(d=f[0],h=s[0]),s[1]<f[1]?(u=s[1],x=f[1]):(u=f[1],x=s[1]);let M=Math.floor(d)-o,p=Math.floor(h)+o,g=Math.floor(u)-o,I=Math.floor(x)+o;M<0&&(M=0),p>t&&(p=t),g<0&&(g=0),I>r&&(I=r);const w=f[0]-s[0],y=f[1]-s[1],P=w*w+y*y;for(let R=M;R<p;R++)for(let C=g;C<I;C++){const S=R+.5,v=C+.5;let b,F,z=(S-s[0])*w+(v-s[1])*y;z<0?(b=s[0],F=s[1]):z>P?(b=f[0],F=f[1]):(z/=P,b=s[0]+z*w,F=s[1]+z*y);const k=(S-b)*(S-b)+(v-F)*(v-F),A=(r-C-1)*t+R;k<i[A]&&(i[A]=k)}}}for(let a=0;a<e;++a)i[a]=Math.sqrt(i[a]);return i}function H(n,t,r,o,e){for(const i of n){const l=i.length;for(let a=1;a<l;++a){const m=i[a-1],c=i[a];let s,f,d,h;m[0]<c[0]?(s=m[0],f=c[0]):(s=c[0],f=m[0]),m[1]<c[1]?(d=m[1],h=c[1]):(d=c[1],h=m[1]);let u=Math.floor(s),x=Math.floor(f)+1,M=Math.floor(d),p=Math.floor(h)+1;u<o&&(u=o),x>t-o&&(x=t-o),M<o&&(M=o),p>r-o&&(p=r-o);for(let g=M;g<p;++g){if(m[1]>g==c[1]>g)continue;const I=g+.5,w=(r-g-1)*t;for(let y=u;y<x;++y)y+.5<(c[0]-m[0])*(I-m[1])/(c[1]-m[1])+m[0]&&(e[w+y]=-e[w+y]);for(let y=o;y<u;++y)e[w+y]=-e[w+y]}}}}function K(n,t){const r=2*t,o=n.length,e=new Uint8Array(4*o);for(let i=0;i<o;++i){const l=.5-n[i]/r;V(l,e,4*i)}return e}export{N as E,O as H,T as K,j as V,E as Y};
