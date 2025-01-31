import{a1 as T}from"./story-BLxSf89q.js";const k=()=>T.getLogger("esri.views.3d.support.buffer.math");function A(n,o,e){if(n.count!==o.count)return;const t=n.count,c=e[0],r=e[1],s=e[2],f=e[3],u=e[4],i=e[5],p=e[6],a=e[7],y=e[8],v=e[9],B=e[10],m=e[11],h=e[12],z=e[13],w=e[14],_=e[15],d=n.typedBuffer,O=n.typedBufferStride,l=o.typedBuffer,V=o.typedBufferStride;for(let j=0;j<t;j++){const g=j*O,S=j*V,M=l[S],b=l[S+1],L=l[S+2],q=l[S+3];d[g]=c*M+u*b+y*L+h*q,d[g+1]=r*M+i*b+v*L+z*q,d[g+2]=s*M+p*b+B*L+w*q,d[g+3]=f*M+a*b+m*L+_*q}}function D(n,o,e,t=4,c=t){if(n.length/t!=o.length/c)return void k().error("source and destination buffers need to have the same number of elements");const r=n.length/t,s=e[0],f=e[1],u=e[2],i=e[3],p=e[4],a=e[5],y=e[6],v=e[7],B=e[8],m=e[9],h=e[10],z=e[11],w=e[12],_=e[13],d=e[14],O=e[15];let l=0,V=0;for(let j=0;j<r;j++){const g=o[l],S=o[l+1],M=o[l+2],b=o[l+3];n[V]=s*g+p*S+B*M+w*b,n[V+1]=f*g+a*S+m*M+_*b,n[V+2]=u*g+y*S+h*M+d*b,n[V+3]=i*g+v*S+z*M+O*b,l+=c,V+=t}}function E(n,o,e){x(n.typedBuffer,o.typedBuffer,e,n.typedBufferStride,o.typedBufferStride)}function x(n,o,e,t=4,c=t){if(n.length/t!=o.length/c)return;const r=n.length/t,s=e[0],f=e[1],u=e[2],i=e[3],p=e[4],a=e[5],y=e[6],v=e[7],B=e[8];let m=0,h=0;for(let z=0;z<r;z++){const w=o[m],_=o[m+1],d=o[m+2],O=o[m+3];n[h]=s*w+i*_+y*d,n[h+1]=f*w+p*_+v*d,n[h+2]=u*w+a*_+B*d,n[h+3]=O,m+=c,h+=t}}function $(n,o){const e=Math.min(n.count,o.count),t=n.typedBuffer,c=n.typedBufferStride,r=o.typedBuffer,s=o.typedBufferStride;for(let f=0;f<e;f++){const u=f*c,i=f*s,p=r[i],a=r[i+1],y=r[i+2],v=p*p+a*a+y*y;if(v>0){const B=1/Math.sqrt(v);t[u]=B*p,t[u+1]=B*a,t[u+2]=B*y}}}function C(n,o,e){P(n.typedBuffer,o,e,n.typedBufferStride)}function P(n,o,e,t=4){const c=Math.min(n.length/t,o.count),r=o.typedBuffer,s=o.typedBufferStride;let f=0,u=0;for(let i=0;i<c;i++)n[u]=e*r[f],n[u+1]=e*r[f+1],n[u+2]=e*r[f+2],n[u+3]=e*r[f+3],f+=s,u+=t}Object.freeze(Object.defineProperty({__proto__:null,normalize:$,scale:P,scaleView:C,transformMat3:x,transformMat3View:E,transformMat4:D,transformMat4View:A},Symbol.toStringTag,{value:"Module"}));export{C as A,x as L,P,E as T,$ as k};
