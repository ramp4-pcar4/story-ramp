import{cZ as $,o as T,di as H,dd as ee,J,aO as te,m as ne,l as se}from"./story-BALhSCU7.js";import{i as q,d as ae,t as ie}from"./projectBuffer-CvCBvJ6W-bHGRmyyJ.js";function L(e){if(!e)return null;const n=e.wkid;if(n)return ae[n];const t=e.wkt2??e.wkt;return t?oe(t):null}function oe(e){const n=ie.exec(e);if(!n||n.length!==2)return null;const t=n[1].split(",");if(!t||t.length<3)return null;const c=parseFloat(t[1]),s=parseFloat(t[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function B(e){const n=L(e);if(re(n))return n;const t=n.a*(1-n.f);return Object.assign(n,{b:t,eSq:1-(t/n.a)**2,radius:(2*n.a+t)/3,densificationRatio:1e4/((2*n.a+t)/3)})}function re(e){return e!=null&&"b"in e&&"eSq"in e&&"radius"in e}function W(e,n,t){const{a:c,eSq:s}=B(t),a=Math.sqrt(s),i=Math.sin(n[1]*q),l=c*n[0]*q;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,e[0]=l,e[1]=r,e}function C(e){return $(e)&&!!L(e)}function ue(e,n="square-meters"){if(e.some(i=>!C(i.spatialReference)))throw new T("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const t=[];for(let i=0;i<e.length;i++){const l=e[i],r=l.spatialReference,{radius:h,densificationRatio:u}=B(r),o=h*u;t.push(he(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<t.length;i++){const{rings:l,spatialReference:r}=t[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];W(s,o[0],r),W(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)W(s,o[d+1],r),W(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=H(h,"square-meters",n),c.push(h/-2)}return c}function fe(e,n="meters"){if(!e)throw new T("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some(c=>!C(c.spatialReference)))throw new T("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const t=[];for(let c=0;c<e.length;c++){const s=e[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new V;X(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=H(l,"meters",n),t.push(l)}return t}function he(e,n){if(e.type!=="polyline"&&e.type!=="polygon")throw new T("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:t}=e;if(!C(t))throw new T("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=e.type==="polyline"?e.paths:e.rings,s=[],a=[0,0],i=new V;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];X(i,[M,d],[u,o],t);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let S=1;S<=w-1;S++)Z(a,g,p,S*n,t),h.push(a.slice());Z(a,g,p,(v+Math.floor(w-1)*n)/2,t),h.push(a.slice())}Z(a,g,p,v,t),h.push(a.slice()),M=a[0],d=a[1]}}const l=te(J,t);return e.type==="polyline"?new ne({paths:s,spatialReference:l}):new se({rings:s,spatialReference:l})}class V{constructor(n=0,t=void 0,c=void 0){this.distance=n,this.azimuth=t,this.reverseAzimuth=c}}function Z(e,n,t,c,s){const a=n[0],i=n[1],l=a*q,r=i*q,h=(t??0)*q,{a:u,b:o,f:M}=B(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),S=p*d,F=S*S,z=1-F,f=z*(u*u-o*o)/(o*o),I=1+f/16384*(4096+f*(f*(320-175*f)-768)),O=f/1024*(256+f*(f*(74-47*f)-128));let R,N,y,x,k=c/(o*I),A=2*Math.PI;for(;Math.abs(k-A)>1e-12;)y=Math.cos(2*w+k),R=Math.sin(k),N=Math.cos(k),x=O*R*(y+O/4*(N*(2*y*y-1)-O/6*y*(4*R*R-3)*(4*y*y-3))),A=k,k=c/(o*I)+x;const b=v*R-p*N*m,j=Math.atan2(v*N+p*R*m,(1-M)*Math.sqrt(F+b*b)),D=Math.atan2(R*d,p*N-v*R*m),G=M/16*z*(4+M*(4-3*z)),P=j/q,U=(l+(D-(1-G)*M*S*(k+G*R*(y+G*N*(2*y*y-1)))))/q;return e[0]=U,e[1]=P,e}function X(e,n,t,c){const s=n[0]*q,a=n[1]*q,i=t[0]*q,l=t[1]*q,{a:r,b:h,f:u,radius:o}=B(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let S,F,z,f,I,O,R,N,y,x,k=1e3,A=M;do{if(R=Math.sin(A),N=Math.cos(A),z=Math.sqrt(w*R*(w*R)+(p*v-g*w*N)*(p*v-g*w*N)),z===0)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;I=g*v+p*w*N,O=Math.atan2(z,I),y=p*w*R/z,F=1-y*y,f=I-2*g*v/F,isNaN(f)&&(f=0),x=u/16*F*(4+u*(4-3*F)),S=A,A=M+(1-x)*u*y*(O+x*z*(f+x*I*(2*f*f-1)))}while(Math.abs(A-S)>1e-12&&--k>0);if(k===0){const U=o,Y=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*U,E=i-s,_=Math.sin(E)*Math.cos(l),K=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(E),Q=Math.atan2(_,K);return e.azimuth=Q/q,e.distance=Y,e.reverseAzimuth=void 0,e}const b=F*(r*r-h*h)/(h*h),j=b/1024*(256+b*(b*(74-47*b)-128)),D=h*(1+b/16384*(4096+b*(b*(320-175*b)-768)))*(O-j*z*(f+j/4*(I*(2*f*f-1)-j/6*f*(4*z*z-3)*(4*f*f-3)))),G=Math.atan2(w*Math.sin(A),p*v-g*w*Math.cos(A)),P=Math.atan2(p*Math.sin(A),p*v*Math.cos(A)-g*w);return e.azimuth=G/q,e.distance=D,e.reverseAzimuth=P/q,e}function pe(e){return C(e)?e:ee(e)?J.WGS84:null}export{V as D,X as E,Z as O,C as P,fe as c,ue as h,pe as u};
