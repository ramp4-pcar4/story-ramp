import{hZ as w,i8 as E,cf as rt,ha as st,i9 as _,dg as N,a1 as at}from"./story-DYUJZqY7.js";import{X as O,p as ct}from"./sphere-BenPORjV-KOeQrgyx.js";import{z as ut,G as gt,K as bt}from"./mat4-DX7gBViE-BzbGm9jG.js";import{t as L}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{A as u,L as l,j as p,_ as M,g as ft,b as I,W as lt,y as h,r as z,R as A,Y as m,l as D,v as G}from"./vec32-D9GsKZ1t-BNmjVLpx.js";import{u as pt,j as H,x as dt}from"./lineSegment-CcqvCARM-CF7z99YM.js";import{y,a as mt,j as ht,T as F,f as s,H as It,M as $t,S as Nt,m as Mt,g as X,D as Pt,l as P,N as T,h as Tt}from"./plane-Dt8R0KeE-C6AftV0p.js";const Y=()=>at.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class xt{constructor(){this.plane=y(),this.origin=N(),this.basis1=N(),this.basis2=N()}}const yt=xt;function $(t=ot){return{plane:y(t.plane),origin:E(t.origin),basis1:E(t.basis1),basis2:E(t.basis2)}}function jt(t,n,i){const e=Dt.get();return e.origin=t,e.basis1=n,e.basis2=i,e.plane=mt(0,0,0,0),S(e),e}function j(t,n=$()){return Z(t.origin,t.basis1,t.basis2,n)}function St(t,n){u(n.origin,t.origin),u(n.basis1,t.basis1),u(n.basis2,t.basis2),ht(n.plane,t.plane)}function Z(t,n,i,e=$()){return u(e.origin,t),u(e.basis1,n),u(e.basis2,i),S(e),Ct(e,"fromValues()"),e}function S(t){F(t.basis2,t.basis1,t.origin,t.plane)}function U(t,n,i){t!==i&&j(t,i);const e=l(s.get(),f(t),n);return p(i.origin,i.origin,e),i.plane[3]-=n,i}function vt(t,n,i){return W(n,i),U(i,B(t,t.origin),i),i}function wt(t,n){const i=t.basis1[0],e=t.basis2[1],[o,r]=t.origin;return rt(o-i,r-e,o+i,r+e,n)}function W(t,n=$()){const i=(t[2]-t[0])/2,e=(t[3]-t[1])/2;return M(n.origin,t[0]+i,t[1]+e,0),M(n.basis1,i,0,0),M(n.basis2,0,e,0),It(0,0,1,0,n.plane),n}function R(t,n,i){return!!$t(t.plane,n,i)&&nt(t,i)}function Et(t,n,i){if(R(t,n,i))return i;const e=Q(t,n,s.get());return p(i,n.origin,l(s.get(),n.direction,ft(n.origin,e)/I(n.direction))),i}function Q(t,n,i){const e=x.get();et(t,n,e,x.get());let o=Number.POSITIVE_INFINITY;for(const r of k){const a=C(t,r,v.get()),g=s.get();if(Nt(e,a,g)){const c=lt(s.get(),n.origin,g),b=Math.abs(st(h(n.direction,c)));b<o&&(o=b,u(i,g))}}return o===Number.POSITIVE_INFINITY?J(t,n,i):i}function _t(t,n){return(n-t)/n}function J(t,n,i){if(R(t,n,i))return i;const e=x.get(),o=x.get();et(t,n,e,o);let r=Number.POSITIVE_INFINITY;for(const a of k){const g=C(t,a,v.get()),c=s.get();if(Mt(e,g,c)){const b=ct(n,c);if(!X(o,c))continue;b<r&&(r=b,u(i,c))}}return q(t,n.origin)<r&&tt(t,n.origin,i),i}function tt(t,n,i){const e=Pt(t.plane,n,s.get()),o=H(K(t,t.basis1),e,-1,1,s.get()),r=H(K(t,t.basis2),e,-1,1,s.get());return z(i,p(s.get(),o,r),t.origin),i}function it(t,n,i){const{origin:e,basis1:o,basis2:r}=t,a=z(s.get(),n,e),g=P(o,a),c=P(r,a),b=P(f(t),a);return M(i,g,c,b)}function q(t,n){const i=it(t,n,s.get()),{basis1:e,basis2:o}=t,r=I(e),a=I(o),g=Math.max(Math.abs(i[0])-r,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function At(t,n){return Math.sqrt(q(t,n))}function Yt(t,n){let i=Number.NEGATIVE_INFINITY;for(const e of k){const o=C(t,e,v.get()),r=dt(o,n);r>i&&(i=r)}return Math.sqrt(i)}function Vt(t,n){return X(t.plane,n)&&nt(t,n)}function Ft(t,n,i,e){return Bt(t,i,e)}function B(t,n){const i=-t.plane[3];return P(f(t),n)-i}function Ot(t,n,i,e){const o=B(t,n),r=l(kt,f(t),i-o);return p(e,n,r),e}function zt(t,n){return A(t.basis1,n.basis1)&&A(t.basis2,n.basis2)&&A(t.origin,n.origin)}function Rt(t,n,i){return t!==i&&j(t,i),ut(d,n),gt(d,d),m(i.basis1,t.basis1,d),m(i.basis2,t.basis2,d),m(T(i.plane),T(t.plane),d),m(i.origin,t.origin,n),Tt(i.plane,i.plane,i.origin),i}function qt(t,n,i,e){return t!==e&&j(t,e),bt(V,n,i),m(e.basis1,t.basis1,V),m(e.basis2,t.basis2,V),S(e),e}function f(t){return T(t.plane)}function Bt(t,n,i){switch(n){case _.X:u(i,t.basis1),D(i,i);break;case _.Y:u(i,t.basis2),D(i,i);break;case _.Z:u(i,f(t))}return i}function nt(t,n){const i=z(s.get(),n,t.origin),e=G(t.basis1),o=G(t.basis2),r=h(t.basis1,i),a=h(t.basis2,i);return-r-e<0&&r-e<0&&-a-o<0&&a-o<0}function K(t,n){const i=v.get();return u(i.origin,t.origin),u(i.vector,n),i}function C(t,n,i){const{basis1:e,basis2:o,origin:r}=t,a=l(s.get(),e,n.origin[0]),g=l(s.get(),o,n.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,r);const c=l(s.get(),e,n.direction[0]),b=l(s.get(),o,n.direction[1]);return l(i.vector,p(c,c,b),2),i}function Ct(t,n){Math.abs(h(t.basis1,t.basis2)/(I(t.basis1)*I(t.basis2)))>1e-6&&Y().warn(n,"Provided basis vectors are not perpendicular"),Math.abs(h(t.basis1,f(t)))>1e-6&&Y().warn(n,"Basis vectors and plane normal are not perpendicular"),Math.abs(-h(f(t),t.origin)-t.plane[3])>1e-6&&Y().warn(n,"Plane offset is not consistent with plane origin")}function et(t,n,i,e){const o=f(t);F(o,n.direction,n.origin,i),F(T(i),o,n.origin,e)}const ot={plane:y(),origin:w(0,0,0),basis1:w(1,0,0),basis2:w(0,1,0)},x=new O(y),v=new O(pt),kt=N(),Dt=new O(()=>$()),k=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=L(),V=L(),Wt=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:yt,altitudeAt:B,axisAt:Ft,cameraFrustumCoverage:_t,closestPoint:J,closestPointOnSilhouette:Q,copy:j,copyWithoutVerify:St,create:$,distance:At,distance2:q,distanceToSilhouette:Yt,elevate:U,equals:zt,extrusionContainsPoint:Vt,fromAABoundingRect:W,fromValues:Z,getExtent:wt,intersectRay:R,intersectRayClosestSilhouette:Et,normal:f,projectPoint:tt,projectPointLocal:it,rotate:qt,setAltitudeAt:Ot,setExtent:vt,transform:Rt,up:ot,updateUnboundedPlane:S,wrap:jt},Symbol.toStringTag,{value:"Module"}));export{j as M,S as N,Wt as R,$ as h,Z as q};
