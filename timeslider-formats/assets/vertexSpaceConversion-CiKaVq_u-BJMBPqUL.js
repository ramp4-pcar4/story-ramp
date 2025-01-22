import{hd as ur,he as sr,di as cr,hf as J,hg as fr,de as pr,du as mr,dv as Ar,dg as L,a1 as gr,hh as Tr}from"./story-CF27ueXF.js";import{U as b,P as K}from"./mat3-CC4Foazl-BWjyqE2v.js";import{n as Q}from"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import{u as yr,k as Rr,B as $,N as X,z as v}from"./mat4-DX7gBViE-CKuOZ48A.js";import{u as rr,t as x}from"./mat4f64-Dn1WEGBx-C99QVUMW.js";import{O as nr,Z as W,l as Er,r as dr,Y as Or}from"./vec32-D9GsKZ1t-ChQ8pM0h.js";import{x as tr,m as Fr}from"./spatialReferenceEllipsoidUtils-DUrKTvup-DUs2YLf1.js";import{G as P}from"./computeTranslationToOriginAndRotation-wF0y9WQG-CnDTJZ2-.js";import{p as q}from"./projectPointToVector-B2UUY9SE-DtoRANOb.js";import{t as Nr,S as Pr}from"./meshVertexSpaceUtils-B4l_Zo0M-BPPxgHJs.js";import{P as S,b as V,z as k,O as er}from"./vec3-BazNroeq-BwMWiZqM.js";import{n as or}from"./projectBuffer-CvCBvJ6W-t60zPFpz.js";import{l as O,m as F}from"./BufferView-PQoE3GL7-CNKW-jrL.js";import{L as _r}from"./vec4-DWDdg1fj-DvE6LP-S.js";const an="Projection may be possible after calling projection.load().";function y(r,n,t,e){r.error(`Failed to project from (wkid:${n.wkid}) to (wkid:${t.wkid}).${e?" ":""}${e}`)}function hr(r,n,t,e,o,l){return G(d.TO_PCPF,O.fromTypedArray(r),E.NORMAL,F.fromTypedArray(n),t,F.fromTypedArray(e),o,O.fromTypedArray(l))?l:null}function Sr(r,n,t,e,o,l){return G(d.FROM_PCPF,O.fromTypedArray(r),E.NORMAL,F.fromTypedArray(n),t,F.fromTypedArray(e),o,O.fromTypedArray(l))?l:null}function Mr(r,n,t,e){return or(r,n,0,t,e,0)?t:null}function wr(r,n,t,e){return or(r,n,0,t,e,0)?t:null}function ar(r,n,t){return b(f,t),k(n,r,f),J(f)&&er(n,n),n}function lr(r,n,t){return K(f,t),_r(n,r,f),J(f)&&er(n,n,4),n}function Cr(r,n,t,e,o,l){if(!G(d.TO_PCPF,O.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),E.TANGENT,F.fromTypedArray(n),t,F.fromTypedArray(e),o,O.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<r.length;a+=4)l[a]=r[a];return l}function vr(r,n,t,e,o,l){if(!G(d.FROM_PCPF,O.fromTypedArray(r,16),E.TANGENT,F.fromTypedArray(n),t,F.fromTypedArray(e),o,O.fromTypedArray(l,16)))return null;for(let a=3;a<r.length;a+=4)l[a]=r[a];return l}var E,d;function H(r,n,t,e,o){switch(P(e,t,_,e),r===d.FROM_PCPF&&v(_,_),n){case E.NORMAL:return b(o,_);case E.TANGENT:return K(o,_)}}function G(r,n,t,e,o,l,a,i){if(!n)return;const c=e.count;if(xr(o))for(let u=0;u<c;u++)l.getVec(u,C),n.getVec(u,T),W(T,T,H(r,t,C,a,f)),i.setVec(u,T);else for(let u=0;u<c;u++){l.getVec(u,C),n.getVec(u,T);const p=fr(e.get(u,1));let s=Math.cos(p);t===E.TANGENT!=(r===d.TO_PCPF)&&(s=1/s),H(r,t,C,a,f),r===d.TO_PCPF?(f[0]*=s,f[1]*=s,f[2]*=s,f[3]*=s,f[4]*=s,f[5]*=s):(f[0]*=s,f[3]*=s,f[6]*=s,f[1]*=s,f[4]*=s,f[7]*=s),W(T,T,f),Er(T,T),i.setVec(u,T)}return i}function xr(r){return r.isWGS84||pr(r)||mr(r)||Ar(r)}(function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"})(E||(E={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(d||(d={}));const C=L(),T=L(),_=x(),f=Q(),A=()=>gr.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function ln(r,n,{vertexSpace:t,spatialReference:e}){if(t.type==="georeferenced"){const u=r;if(!q(n,u,e))return!1;const{origin:p}=t;return dr(r,u,p),!0}const o=tr(e),l=r;if(!q(n,l,o))return!1;const{origin:a}=t,i=Z;if(!P(e,a,i,o))return!1;const c=v(Z,i);return c!=null&&(Or(r,l,c),!0)}function un(r,n,t){const{vertexSpace:e,transform:o,vertexAttributes:l}=r,a=Nr(e)?o:null,i=U(r.spatialReference,t,R.SOURCE_AND_TARGET);if(Pr(e,n)&&(!a||yr(a.localMatrix,rr))&&M(i)){const{position:c,normal:u,tangent:p}=l,s=t?.allowBufferReuse;return{position:s?c:c.slice(),normal:s?u:u?.slice(),tangent:s?p:p?.slice()}}switch(r.vertexSpace.type){case"local":return n.type==="local"?br(r,r.vertexSpace,n.origin,t):Ur(r,r.vertexSpace,n.origin,t);case"georeferenced":return n.type==="local"?$r(r,r.vertexSpace,n.origin,t):Gr(r,r.vertexSpace,n.origin,t)}}function Gr({vertexAttributes:r,transform:n,spatialReference:t},{origin:e},o,l){const a=U(t,l,R.SOURCE_AND_TARGET),i=e||!M(a)?Rr(m,n?.localMatrix??rr):null;i&&B(i,t,l,R.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:p}=i?D(r,i):r,s=l?.allowBufferReuse,N=s?c:new Float64Array(c.length);let g=c;if(e&&(g=S(N,g,e)),o){const w=nr(ir,o);g=S(N,g,w)}return{position:g!==r.position||s?g:g.slice(),normal:u!==r.normal||s?u:u?.slice(),tangent:p!==r.tangent||s?p:p?.slice()}}function j(r,n){return n?.useEllipsoid&&Tr(r)?Fr:tr(r)}function Ur({spatialReference:r,vertexAttributes:n,transform:t},{origin:e},o,l){const a=j(r,l);if(!P(r,e,m,a))return y(A(),r,a),null;t&&$(m,m,t.localMatrix),B(m,r,l,R.SOURCE);const i=new Float64Array(n.position.length),c=Vr(n.position,m,r,i,a);if(!c)return null;const u=kr(c,r,i,a,n.normal,m);if(n.normal&&!u)return null;const p=jr(c,r,i,a,n.tangent,m);if(n.tangent&&!p)return null;if(o){const s=nr(ir,o);S(c,c,s)}return{position:c,normal:u,tangent:p}}function $r({vertexAttributes:r,spatialReference:n,transform:t},{origin:e},o,l){const a=j(n,l);if(!P(n,o,m,a))return y(A(),n,a),null;const i=1/U(n,l,R.TARGET);X(m,m,[i,i,i]);const c=v(h,m),{position:u,normal:p,tangent:s}=Lr(r,e,t),N=new Float64Array(u.length),g=Dr(u,n,c,N,a);if(!g)return null;const w=b(zr,c),Y=Br(p,u,n,N,a,w,p!==r.normal?p:void 0);if(!Y&&p)return null;const z=Yr(s,u,n,N,a,w,s!==r.tangent?s:void 0);return!z&&s?null:{position:g,normal:Y,tangent:z}}function Lr(r,n,t){if(!n)return r;if(!t){const{position:o,normal:l,tangent:a}=r;return{position:S(new Float64Array(o.length),o,n),tangent:a,normal:l}}const e=D(r,t.localMatrix);return S(e.position,e.position,n),e}function br({vertexAttributes:r,spatialReference:n,transform:t},{origin:e},o,l){const a=j(n,l);if(!P(n,e,m,a))return y(A(),n,a),null;if(t&&$(m,m,t.localMatrix),!P(n,o,h,a))return y(A(),a,n),null;v(h,h);const i=$(m,h,m);return B(i,n,l,R.SOURCE_AND_TARGET),D(r,i)}function D(r,n){const t=new Float64Array(r.position.length);V(t,r.position,n);const e=r.normal?new Float32Array(r.normal.length):null,o=r.tangent?new Float32Array(r.tangent.length):null;return e&&r.normal&&ar(r.normal,e,n),o&&r.tangent&&lr(r.tangent,o,n),{position:t,normal:e,tangent:o}}function Vr(r,n,t,e,o){V(e,r,n);const l=new Float64Array(r.length);return wr(e,o,l,t)?l:(y(A(),o,t),null)}function kr(r,n,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return ar(o,a,l),Sr(a,r,n,t,e,a)?a:(y(A(),e,n),null)}function jr(r,n,t,e,o,l){if(o==null)return null;const a=new Float32Array(o.length);return lr(o,a,l),vr(a,r,n,t,e,a)?a:(y(A(),e,n),null)}function B(r,n,t,e){const o=U(n,t,e);M(o)||X(r,r,[o,o,o])}function U(r,n,t){const e=!!(t&R.SOURCE),o=!!(t&R.TARGET),l=n?.sourceUnit,a=n?.targetUnit;if(!l&&!a)return 1;let i=I(l,r);e||!l||M(i)||(A().warn("source unit conversion not supported"),i=1);let c=1/I(a,r);return o||!a||M(c)||(A().warn("target unit conversion not supported"),c=1),i*c}function M(r){return ur(r,1)}function Dr(r,n,t,e,o){const l=Mr(r,n,e,o);if(!l)return y(A(),n,o),null;const a=new Float64Array(l.length);return V(a,l,t),a}function Br(r,n,t,e,o,l,a){if(r==null)return null;const i=a??new Float32Array(r.length);return hr(r,n,t,e,o,i)?(k(i,i,l),i):(y(A(),t,o),null)}function Yr(r,n,t,e,o,l,a){if(r==null)return null;const i=a??new Float32Array(r.length);return Cr(r,n,t,e,o,i)?(k(i,i,l,4),i):(y(A(),t,o),null)}function I(r,n){if(r==null)return 1;const t=sr(n);return 1/cr(t,"meters",r)}const m=x(),h=x(),zr=Q(),ir=L(),Z=x();var R;(function(r){r[r.NONE=0]="NONE",r[r.SOURCE=1]="SOURCE",r[r.TARGET=2]="TARGET",r[r.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(R||(R={}));export{ln as L,an as M,I as Y,Mr as a,un as b,Cr as c,hr as e,vr as f,y as g,wr as l,Sr as o};
