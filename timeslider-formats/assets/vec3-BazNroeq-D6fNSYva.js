import"./story-BJQwqSiV.js";function q(t,n,e){b(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function b(t,n,e,f=3,r=f){if(t.length/f!==Math.ceil(n.length/r))return t;const l=t.length/f,o=e[0],i=e[1],u=e[2],d=e[4],c=e[5],h=e[6],y=e[8],S=e[9],m=e[10],B=e[12],s=e[13],M=e[14];let a=0,p=0;for(let g=0;g<l;g++){const w=n[a],V=n[a+1],_=n[a+2];t[p]=o*w+d*V+y*_+B,t[p+1]=i*w+c*V+S*_+s,t[p+2]=u*w+h*V+m*_+M,a+=r,p+=f}return t}function v(t,n,e){z(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function z(t,n,e,f=3,r=f){if(t.length/f!==Math.ceil(n.length/r))return;const l=t.length/f,o=e[0],i=e[1],u=e[2],d=e[3],c=e[4],h=e[5],y=e[6],S=e[7],m=e[8];let B=0,s=0;for(let M=0;M<l;M++){const a=n[B],p=n[B+1],g=n[B+2];t[s]=o*a+d*p+y*g,t[s+1]=i*a+c*p+S*g,t[s+2]=u*a+h*p+m*g,B+=r,s+=f}}function x(t,n,e){j(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function j(t,n,e,f=3,r=f){const l=Math.min(t.length/f,n.length/r);let o=0,i=0;for(let u=0;u<l;u++)t[i]=e*n[o],t[i+1]=e*n[o+1],t[i+2]=e*n[o+2],o+=r,i+=f;return t}function P(t,n,e,f=3,r=f){const l=t.length/f;if(l!==Math.ceil(n.length/r))return t;let o=0,i=0;for(let u=0;u<l;u++)t[i]=n[o]+e[0],t[i+1]=n[o+1]+e[1],t[i+2]=n[o+2]+e[2],o+=r,i+=f;return t}function R(t,n){O(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function O(t,n,e=3,f=e){const r=Math.min(t.length/e,n.length/f);let l=0,o=0;for(let i=0;i<r;i++){const u=n[l],d=n[l+1],c=n[l+2],h=u*u+d*d+c*c;if(h>0){const y=1/Math.sqrt(h);t[o]=y*u,t[o+1]=y*d,t[o+2]=y*c}l+=f,o+=e}}function T(t,n,e){const f=Math.min(t.count,n.count),r=t.typedBuffer,l=t.typedBufferStride,o=n.typedBuffer,i=n.typedBufferStride;let u=0,d=0;for(let c=0;c<f;c++)r[d]=o[u]>>e,r[d+1]=o[u+1]>>e,r[d+2]=o[u+2]>>e,u+=i,d+=l}Object.freeze(Object.defineProperty({__proto__:null,normalize:O,normalizeView:R,scale:j,scaleView:x,shiftRight:T,transformMat3:z,transformMat3View:v,transformMat4:b,transformMat4View:q,translate:P},Symbol.toStringTag,{value:"Module"}));export{O,P,R,b,j,q,v,x,z};
