import{jR as V,q as U,eh as J,nA as z,nB as ee,nC as te,aI as ne,aj as K,jH as se,a8 as ae,a7 as ie}from"./story-u82SUoyt.js";function L(e){if(!e)return null;const n=e.wkid;if(n)return ee[n];const t=e.wkt2??e.wkt;return t?oe(t):null}function oe(e){const n=te.exec(e);if(!n||n.length!==2)return null;const t=n[1].split(",");if(!t||t.length<3)return null;const c=parseFloat(t[1]),s=parseFloat(t[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function W(e){const n=L(e);if(re(n))return n;const t=n.a*(1-n.f);return Object.assign(n,{b:t,eSq:1-(t/n.a)**2,radius:(2*n.a+t)/3,densificationRatio:1e4/((2*n.a+t)/3)})}function re(e){return e!=null&&"b"in e&&"eSq"in e&&"radius"in e}function G(e,n,t){const{a:c,eSq:s}=W(t),a=Math.sqrt(s),i=Math.sin(n[1]*z),l=c*n[0]*z;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,e[0]=l,e[1]=r,e}function H(e){return V(e)&&!!L(e)}function le(e,n="square-meters"){if(e.some(i=>!H(i.spatialReference)))throw new U("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const t=[];for(let i=0;i<e.length;i++){const l=e[i],r=l.spatialReference,{radius:h,densificationRatio:u}=W(r),o=h*u;t.push(he(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<t.length;i++){const{rings:l,spatialReference:r}=t[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];G(s,o[0],r),G(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)G(s,o[d+1],r),G(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=J(h,"square-meters",n),c.push(h/-2)}return c}function ue(e,n="meters"){if(!e)throw new U("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some(c=>!H(c.spatialReference)))throw new U("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const t=[];for(let c=0;c<e.length;c++){const s=e[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new Q;T(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=J(l,"meters",n),t.push(l)}return t}function he(e,n){if(e.type!=="polyline"&&e.type!=="polygon")throw new U("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:t}=e;if(!H(t))throw new U("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=e.type==="polyline"?e.paths:e.rings,s=[],a=[0,0],i=new Q;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];T(i,[M,d],[u,o],t);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let N=1;N<=w-1;N++)C(a,g,p,N*n,t),h.push(a.slice());C(a,g,p,(v+Math.floor(w-1)*n)/2,t),h.push(a.slice())}C(a,g,p,v,t),h.push(a.slice()),M=a[0],d=a[1]}}const l=se(K,t);return e.type==="polyline"?new ae({paths:s,spatialReference:l}):new ie({rings:s,spatialReference:l})}class Q{constructor(n=0,t=void 0,c=void 0){this.distance=n,this.azimuth=t,this.reverseAzimuth=c}}function C(e,n,t,c,s){const a=n[0],i=n[1],l=a*z,r=i*z,h=(t??0)*z,{a:u,b:o,f:M}=W(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),N=p*d,S=N*N,q=1-S,f=q*(u*u-o*o)/(o*o),I=1+f/16384*(4096+f*(f*(320-175*f)-768)),x=f/1024*(256+f*(f*(74-47*f)-128));let R,k,y,B,j=c/(o*I),b=2*Math.PI;for(;Math.abs(j-b)>1e-12;)y=Math.cos(2*w+j),R=Math.sin(j),k=Math.cos(j),B=x*R*(y+x/4*(k*(2*y*y-1)-x/6*y*(4*R*R-3)*(4*y*y-3))),b=j,j=c/(o*I)+B;const A=v*R-p*k*m,F=Math.atan2(v*k+p*R*m,(1-M)*Math.sqrt(S+A*A)),O=Math.atan2(R*d,p*k-v*R*m),P=M/16*q*(4+M*(4-3*q)),X=F/z,Y=(l+(O-(1-P)*M*N*(j+P*R*(y+P*k*(2*y*y-1)))))/z;return e[0]=Y,e[1]=X,e}function T(e,n,t,c){const s=n[0]*z,a=n[1]*z,i=t[0]*z,l=t[1]*z,{a:r,b:h,f:u,radius:o}=W(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let N,S,q,f,I,x,R,k,y,B,j=1e3,b=M;do{if(R=Math.sin(b),k=Math.cos(b),q=Math.sqrt(w*R*(w*R)+(p*v-g*w*k)*(p*v-g*w*k)),q===0)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;I=g*v+p*w*k,x=Math.atan2(q,I),y=p*w*R/q,S=1-y*y,f=I-2*g*v/S,isNaN(f)&&(f=0),B=u/16*S*(4+u*(4-3*S)),N=b,b=M+(1-B)*u*y*(x+B*q*(f+B*I*(2*f*f-1)))}while(Math.abs(b-N)>1e-12&&--j>0);if(j===0){const Y=o,Z=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*Y,E=i-s,_=Math.sin(E)*Math.cos(l),$=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(E),D=Math.atan2(_,$);return e.azimuth=D/z,e.distance=Z,e.reverseAzimuth=void 0,e}const A=S*(r*r-h*h)/(h*h),F=A/1024*(256+A*(A*(74-47*A)-128)),O=h*(1+A/16384*(4096+A*(A*(320-175*A)-768)))*(x-F*q*(f+F/4*(I*(2*f*f-1)-F/6*f*(4*q*q-3)*(4*f*f-3)))),P=Math.atan2(w*Math.sin(b),p*v-g*w*Math.cos(b)),X=Math.atan2(p*Math.sin(b),p*v*Math.cos(b)-g*w);return e.azimuth=P/z,e.distance=O,e.reverseAzimuth=X/z,e}function fe(e){return H(e)?e:ne(e)?K.WGS84:null}export{H as $,C as O,Q as Z,T as _,ue as c,le as h,fe as u};
