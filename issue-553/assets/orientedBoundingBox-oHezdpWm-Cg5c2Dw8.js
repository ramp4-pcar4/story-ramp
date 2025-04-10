import{K as $t,G as Jt}from"./mat3-CC4Foazl-BWjyqE2v.js";import{n as Kt,o as Ut}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{t as ta}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{T as aa,v as U,_ as sa}from"./quat-BODLR7mS-BPMGC5ih.js";import{n as Zt,e as xt}from"./quatf64-C16JxGFv-BKWK1F8U.js";import{_ as k,w,I as mt,C as At,G as ia,Z as na,j as lt,k as Rt,E as ra,L as nt,D as ea,b as Ct,N as gt,P as oa,q as ha}from"./vec32-D9GsKZ1t-0yVS_Uxm.js";import{h_ as ca,dp as vt,dg as u,h$ as ua,i0 as fa,hZ as zt,i1 as Gt}from"./story-C_BD4NO7.js";import{D as da}from"./vec42-D8CJyqHG-DnfLTeQH.js";import{o as ma}from"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import{x as _t}from"./spatialReferenceEllipsoidUtils-DUrKTvup-OARiwrPA.js";import{G as la}from"./computeTranslationToOriginAndRotation-wF0y9WQG-CsDuPIN8.js";import{n as St,G as Bt}from"./projectBuffer-CvCBvJ6W-DEUQb9PP.js";import{f as Ft,i as _a,N as It}from"./plane-Dt8R0KeE-C2k0WRpx.js";import{l as ga}from"./ViewingMode-CyR_b1T8-_s7_Gbsk.js";import{o as ba}from"./vec2f64-CeODonrJ-CkkJCdRC.js";class yt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class ss extends yt{constructor(t,a,s,r=!1,n=s){super(t,s,n),this.indices=a,this.exclusive=r}}const rt=1e-6,et=u(),bt=u();function Ma(i,t){const{data:a,size:s}=i,r=a.length/s;if(r<=0)return;const n=new qa(i);qt(et,n.minProj,n.maxProj),ft(et,et,.5),y(bt,n.maxProj,n.minProj);const h=Nt(bt),e=new wa;e.quality=h,r<14&&(i=new yt(new Float64Array(n.buffer,112,42),3));const o=u(),f=u(),b=u(),l=u(),z=u(),A=u(),M=u();switch(Pa(n,i,M,o,f,b,l,z,A,e)){case 1:return void Yt(et,bt,t);case 2:return void $a(i,l,t)}ja(i,M,o,f,b,l,z,A,e),Ot(i,e.b0,e.b1,e.b2,at,st);const E=u();y(E,st,at),e.quality=Nt(E),e.quality<h?Wt(e.b0,e.b1,e.b2,at,st,E,t):Yt(et,bt,t)}function Pa(i,t,a,s,r,n,h,e,o,f){return xa(i,s,r),wt(s,r)<rt?1:(y(h,s,r),g(h,h),Sa(t,s,h,n)<rt?2:(y(e,r,n),g(e,e),y(o,n,s),g(o,o),V(a,e,h),g(a,a),W(t,a,h,e,o,f),0))}const ot=u(),ht=u(),I=u(),$=u(),N=u(),H=u(),Z=u(),R=u();function ja(i,t,a,s,r,n,h,e,o){pa(i,t,a,ot,ht),ot[0]!==void 0&&(y(I,ot,a),g(I,I),y($,ot,s),g($,$),y(N,ot,r),g(N,N),V(H,$,n),g(H,H),V(Z,N,h),g(Z,Z),V(R,I,e),g(R,R),W(i,H,n,$,I,o),W(i,Z,h,N,$,o),W(i,R,e,I,N,o)),ht[0]!==void 0&&(y(I,ht,a),g(I,I),y($,ht,s),g($,$),y(N,ht,r),g(N,N),V(H,$,n),g(H,H),V(Z,N,h),g(Z,Z),V(R,I,e),g(R,R),W(i,H,n,$,I,o),W(i,Z,h,N,$,o),W(i,R,e,I,N,o))}function xa(i,t,a){let s=wt(i.maxVert[0],i.minVert[0]),r=0;for(let n=1;n<7;++n){const h=wt(i.maxVert[n],i.minVert[n]);h>s&&(s=h,r=n)}p(t,i.minVert[r]),p(a,i.maxVert[r])}const q=[0,0,0];function Sa(i,t,a,s){const{data:r,size:n}=i;let h=Number.NEGATIVE_INFINITY,e=0;for(let o=0;o<r.length;o+=n){q[0]=r[o]-t[0],q[1]=r[o+1]-t[1],q[2]=r[o+2]-t[2];const f=a[0]*q[0]+a[1]*q[1]+a[2]*q[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],l=q[0]*q[0]+q[1]*q[1]+q[2]*q[2]-f*f/b;l>h&&(h=l,e=o)}return p(s,r,e),h}const _=ba();function pa(i,t,a,s,r){Ia(i,t,_,r,s);const n=Lt(a,t);_[1]-rt<=n&&(s[0]=void 0),_[0]+rt>=n&&(r[0]=void 0)}const Tt=u(),Et=u(),Qt=u(),L=u(),X=u(),Mt=u();function W(i,t,a,s,r,n){if(kt(t)<rt)return;V(Tt,a,t),V(Et,s,t),V(Qt,r,t),tt(i,t,_),X[1]=_[0],L[1]=_[1],Mt[1]=L[1]-X[1];const h=[a,s,r],e=[Tt,Et,Qt];for(let o=0;o<3;++o){tt(i,h[o],_),X[0]=_[0],L[0]=_[1],tt(i,e[o],_),X[2]=_[0],L[2]=_[1],Mt[0]=L[0]-X[0],Mt[2]=L[2]-X[2];const f=Nt(Mt);f<n.quality&&(p(n.b0,h[o]),p(n.b1,t),p(n.b2,e[o]),n.quality=f)}}const za=u();function tt(i,t,a){const{data:s,size:r}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let n=0;n<s.length;n+=r){const h=s[n]*t[0]+s[n+1]*t[1]+s[n+2]*t[2];a[0]=Math.min(a[0],h),a[1]=Math.max(a[1],h)}}function Ia(i,t,a,s,r){const{data:n,size:h}=i;p(s,n),p(r,s),a[0]=Lt(za,t),a[1]=a[0];for(let e=h;e<n.length;e+=h){const o=n[e]*t[0]+n[e+1]*t[1]+n[e+2]*t[2];o<a[0]&&(a[0]=o,p(s,n,e)),o>a[1]&&(a[1]=o,p(r,n,e))}}function Yt(i,t,a){a.center=i,a.halfSize=nt(t,t,.5),a.quaternion=Zt}const Q=u(),J=u(),ct=u(),at=u(),st=u(),Dt=u();function $a(i,t,a){p(Q,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?Q[0]=0:Math.abs(t[1])>Math.abs(t[2])?Q[1]=0:Q[2]=0,kt(Q)<rt&&(Q[0]=Q[1]=Q[2]=1),V(J,t,Q),g(J,J),V(ct,t,J),g(ct,ct),Ot(i,t,J,ct,at,st),y(Dt,st,at),Wt(t,J,ct,at,st,Dt,a)}function Ot(i,t,a,s,r,n){tt(i,t,_),r[0]=_[0],n[0]=_[1],tt(i,a,_),r[1]=_[0],n[1]=_[1],tt(i,s,_),r[2]=_[0],n[2]=_[1]}const B=u(),ut=u(),Pt=u(),F=Ut(1,0,0,0,1,0,0,0,1),Na=xt();function Wt(i,t,a,s,r,n,h){F[0]=i[0],F[1]=i[1],F[2]=i[2],F[3]=t[0],F[4]=t[1],F[5]=t[2],F[6]=a[0],F[7]=a[1],F[8]=a[2],h.quaternion=ya(Na,F),qt(B,s,r),ft(B,B,.5),ft(ut,i,B[0]),ft(Pt,t,B[1]),qt(ut,ut,Pt),ft(Pt,a,B[2]),h.center=lt(ut,ut,Pt),h.halfSize=nt(B,n,.5)}const j=7;let qa=class{constructor(i){this.minVert=new Array(j),this.maxVert=new Array(j);const t=64*j;this.buffer=new ArrayBuffer(t);let a=0;this.minProj=new Float64Array(this.buffer,a,j),a+=8*j,this.maxProj=new Float64Array(this.buffer,a,j),a+=8*j;for(let e=0;e<j;++e)this.minVert[e]=new Float64Array(this.buffer,a,3),a+=24;for(let e=0;e<j;++e)this.maxVert[e]=new Float64Array(this.buffer,a,3),a+=24;for(let e=0;e<j;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const s=new Array(j),r=new Array(j),{data:n,size:h}=i;for(let e=0;e<n.length;e+=h){let o=n[e];o<this.minProj[0]&&(this.minProj[0]=o,s[0]=e),o>this.maxProj[0]&&(this.maxProj[0]=o,r[0]=e),o=n[e+1],o<this.minProj[1]&&(this.minProj[1]=o,s[1]=e),o>this.maxProj[1]&&(this.maxProj[1]=o,r[1]=e),o=n[e+2],o<this.minProj[2]&&(this.minProj[2]=o,s[2]=e),o>this.maxProj[2]&&(this.maxProj[2]=o,r[2]=e),o=n[e]+n[e+1]+n[e+2],o<this.minProj[3]&&(this.minProj[3]=o,s[3]=e),o>this.maxProj[3]&&(this.maxProj[3]=o,r[3]=e),o=n[e]+n[e+1]-n[e+2],o<this.minProj[4]&&(this.minProj[4]=o,s[4]=e),o>this.maxProj[4]&&(this.maxProj[4]=o,r[4]=e),o=n[e]-n[e+1]+n[e+2],o<this.minProj[5]&&(this.minProj[5]=o,s[5]=e),o>this.maxProj[5]&&(this.maxProj[5]=o,r[5]=e),o=n[e]-n[e+1]-n[e+2],o<this.minProj[6]&&(this.minProj[6]=o,s[6]=e),o>this.maxProj[6]&&(this.maxProj[6]=o,r[6]=e)}for(let e=0;e<j;++e){let o=s[e];p(this.minVert[e],n,o),o=r[e],p(this.maxVert[e],n,o)}}},wa=class{constructor(){this.b0=zt(1,0,0),this.b1=zt(0,1,0),this.b2=zt(0,0,1),this.quality=0}};function Nt(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function qt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function y(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function ft(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function p(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],r=t[1],n=t[2],h=a[0],e=a[1],o=a[2];i[0]=r*o-n*e,i[1]=n*h-s*o,i[2]=s*e-r*h}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function kt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function wt(i,t){const a=t[0]-i[0],s=t[1]-i[1],r=t[2]-i[2];return a*a+s*s+r*r}function Lt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ya(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const r=(s+1)%3,n=(s+2)%3;let h=Math.sqrt(t[3*s+s]-t[3*r+r]-t[3*n+n]+1);i[s]=.5*h,h=.5/h,i[3]=(t[3*r+n]-t[3*n+r])*h,i[r]=(t[3*r+s]+t[3*s+r])*h,i[n]=(t[3*n+s]+t[3*s+n])*h}return i}class dt{constructor(t=ca,a=Ya,s=Zt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new dt;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new dt;return a._data=t.slice(),a}static fromJSON(t){return new dt(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return k(Ft.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return k(Ft.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return aa(_a.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=m,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let r=0;r<8;++r){const n=t[r];n[0]=(1&r?-1:1)*s[3],n[1]=(2&r?-1:1)*s[4],n[2]=(4&r?-1:1)*s[5],w(n,n,a),n[0]+=s[0],n[1]+=s[1],n[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){c[0]=this._data[0]-t[0],c[1]=this._data[1]-t[1],c[2]=this._data[2]-t[2];const a=this.getQuaternion(D);return U(m,a),w(c,c,m),mt(c,c),Y[0]=Math.min(c[0],this._data[3]),Y[1]=Math.min(c[1],this._data[4]),Y[2]=Math.min(c[2],this._data[5]),At(Y,c)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;c[0]=s[0]-t[0],c[1]=s[1]-t[1],c[2]=s[2]-t[2];const r=t[3],n=r+a;return!(ia(c)>n*n)&&(m[0]=-s[6],m[1]=-s[7],m[2]=-s[8],m[3]=s[9],w(c,c,m),mt(c,c),Y[0]=Math.min(c[0],s[3]),Y[1]=Math.min(c[1],s[4]),Y[2]=Math.min(c[2],s[5]),At(Y,c)<r*r)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(It(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const r=this._data,n=m;n[0]=-r[6],n[1]=-r[7],n[2]=-r[8],n[3]=r[9],c[0]=t[0]-r[0],c[1]=t[1]-r[1],c[2]=t[2]-r[2];const h=w(c,c,m),e=w(Y,a,m);let o=-1/0,f=1/0;const b=this.getHalfSize(it);for(let l=0;l<3;l++){const z=h[l],A=e[l],M=b[l]+s;if(Math.abs(A)>1e-6){const E=(M-z)/A,P=(-M-z)/A;o=Math.max(o,Math.min(E,P)),f=Math.min(f,Math.max(E,P))}else if(z>M||z<-M)return!1}return o<=f}projectedArea(t,a,s,r){const n=this.getQuaternion(D);U(m,n),c[0]=t[0]-this._data[0],c[1]=t[1]-this._data[1],c[2]=t[2]-this._data[2],w(c,c,m);const h=this.getHalfSize(it),e=c[0]<-h[0]?-1:c[0]>h[0]?1:0,o=c[1]<-h[1]?-1:c[1]>h[1]?1:0,f=c[2]<-h[2]?-1:c[2]>h[2]?1:0,b=Math.abs(e)+Math.abs(o)+Math.abs(f);if(b===0)return 1/0;const l=b===1?4:6,z=6*(e+3*o+9*f+13);$t(K,n),Jt(K,K,h);const A=this.getCenter(G);for(let P=0;P<l;P++){const pt=Ca[z+P];k(c,((1&pt)<<1)-1,(2&pt)-1,((4&pt)>>1)-1),na(c,c,K),lt(O,A,c),O[3]=1,da(O,O,a);const Vt=1/Math.max(1e-6,O[3]);C[2*P]=O[0]*Vt,C[2*P+1]=O[1]*Vt}const M=2*l-2;let E=C[0]*(C[3]-C[M+1])+C[M]*(C[1]-C[M-1]);for(let P=2;P<M;P+=2)E+=C[P]*(C[P+3]-C[P-1]);return Math.abs(E)*s*r*.125}projectedRadius(t){const a=this.getQuaternion(D);return U(m,a),w(c,t,m),Math.abs(c[0]*this._data[3])+Math.abs(c[1]*this._data[4])+Math.abs(c[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(It(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(It(t))}toAaBoundingBox(t){const a=this.getQuaternion(D),s=$t(K,a),r=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),n=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),h=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-r,t[1]=this._data[1]-n,t[2]=this._data[2]-h,t[3]=this._data[0]+r,t[4]=this._data[1]+n,t[5]=this._data[2]+h}transform(t,a,s,r=0,n=_t(s),h=_t(a),e=Bt(a,h)){if(s===n)a.isGeographic?Ta(this,t,a,r,h):Fa(this,t,a,r,h,e);else if(a.isWGS84&&(s.isWebMercator||vt(s)))va(a,this,s,t,r);else if(a.isWebMercator&&vt(s))Ga(a,this,s,t,r);else{const o=this.getCenter(G);o[2]+=r,St(o,a,0,o,s,0),t.center=o,this!==t&&(t.quaternion=this.getQuaternion(D),t.halfSize=this.getHalfSize(it))}}}const m=xt(),D=xt(),Va=xt(),c=u(),Y=u(),O=ma();function Aa(i,t=new dt){return Ma(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ca=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let r=0;r<s.length;r++)i[t+r]=s[r];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function is(i,t,a,s,r){const n=i.getQuaternion(D);r.quaternion=n,U(m,n);const h=i.getCenter(G),e=i.getHalfSize(it);if(s===ga.Global){w(d,h,m),mt(v,d),ea(S,v,e),Rt(S,v,S);const o=Ct(S);lt(S,v,e);const f=Ct(S);if(o<a)r.center=h,k(d,a,a,a),r.halfSize=lt(d,e,d);else{const b=f>0?1+t/f:1,l=o>0?1+a/o:1,z=(l+b)/2,A=(l-b)/2;nt(S,v,A),r.halfSize=gt(S,S,e,z),nt(S,v,z),gt(S,S,e,A),oa(d,d),ha(d,S,d);const M=i.getQuaternion(Va);r.center=w(d,d,M)}}else{r.center=gt(d,h,Gt,(a+t)/2);const o=w(d,Gt,m);mt(o,o),r.halfSize=gt(v,e,o,(a-t)/2)}return r}function va(i,t,a,s,r){t.getCenter(G),G[2]+=r;const n=_t(a);St(G,i,0,G,n,0),Xt(n,t,G,a,s)}function Ga(i,t,a,s,r){t.getCenter(G),G[2]+=r,Xt(i,t,G,a,s)}function Xt(i,t,a,s,r){const n=t.getQuaternion(D),h=$t(K,n),e=t.getHalfSize(it);for(let o=0;o<8;++o){for(let f=0;f<3;++f)T[f]=e[f]*(o&1<<f?-1:1);for(let f=0;f<3;++f){let b=a[f];for(let l=0;l<3;++l)b+=T[l]*h[3*l+f];jt[3*o+f]=b}}St(jt,i,0,jt,s,0,8),Aa(Ea,r)}function Fa(i,t,a,s,r=_t(a),n=Bt(a,r)){i.getCorners(Ht),i.getCenter(T),T[2]+=s,la(a,T,x,r),t.setCenter(x[12],x[13],x[14]);const h=2*Math.sqrt(1+x[0]+x[5]+x[10]);m[0]=(x[6]-x[9])/h,m[1]=(x[8]-x[2])/h,m[2]=(x[1]-x[4])/h,m[3]=.25*h;const e=i.getQuaternion(D);t.quaternion=sa(m,m,e),U(m,m),k(v,0,0,0);const o=t.getCenter(Qa);for(const f of Ht)f[2]+=s,n(f,0,f,0),Rt(d,f,o),w(d,d,m),mt(d,d),ra(v,v,d);t.halfSize=v}function Ta(i,t,a,s,r=_t(a)){const n=ua(a),h=1+Math.max(0,s)/(n.radius+i.centerZ);i.getCenter(T),T[2]+=s,St(T,a,0,T,r,0),t.center=T;const e=i.getQuaternion(D);t.quaternion=e,U(m,e),k(d,0,0,1),w(d,d,m);const o=i.getHalfSize(it);k(d,o[0]*Math.abs(d[0]),o[1]*Math.abs(d[1]),o[2]*Math.abs(d[2])),nt(d,d,n.inverseFlattening),lt(d,o,d),t.halfSize=nt(d,d,h)}const jt=new Array(24),Ea=new yt(jt,3),T=u(),G=u(),Qa=u(),it=u(),K=Kt(),x=ta(),Ht=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],d=u(),v=u(),S=u(),Ya=fa(-1,-1,-1);export{ss as M,dt as i,is as v};
