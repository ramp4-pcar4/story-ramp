const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./libtess-asm-CEhQARv_-C8K5Bmv1.js","./_commonjsHelpers-BITg13Vk-KnjfkSck.js","./libtess-DHRgJTgB-4cw3_oA4.js"])))=>i.map(i=>d[i]);
import{_ as wt}from"./main-Dqar6lJ9.js";import{K as bt,bw as pt}from"./story-BAzleJnS.js";import{i as S,t as D}from"./enums-CpSG_SL3-BMD3Tb1v.js";import{d as Rt}from"./definitions-DJSdSb77-DkoRHaVx.js";const Mt=128e3;let dt=null,gt=null;async function It(){return dt||(dt=Ut()),dt}async function Ut(){gt=await(bt("esri-csp-restrictions")?await wt(()=>import("./libtess-asm-CEhQARv_-C8K5Bmv1.js"),__vite__mapDeps([0,1]),import.meta.url).then(r=>r.l):await wt(()=>import("./libtess-DHRgJTgB-4cw3_oA4.js"),__vite__mapDeps([2,1]),import.meta.url).then(r=>r.l)).default({locateFile:r=>pt(`esri/core/libs/libtess/${r}`)})}function Pt(r,i){const x=Math.max(r.length,Mt);return gt.triangulate(r,i,x)}function Vt(r,i){return r.x===i.x&&r.y===i.y}function kt(r){if(!r)return;const i=r.length;if(i<=1)return;let x=0;for(let f=1;f<i;f++)Vt(r[f],r[x])||++x===f||(r[x]=r[f]);r.length=x+1}function k(r,i){return r.x=i.y,r.y=-i.x,r}function p(r,i){return r.x=-i.y,r.y=i.x,r}function Tt(r,i){return r.x=i.x,r.y=i.y,r}function ft(r,i){return r.x=-i.x,r.y=-i.y,r}function vt(r){return Math.sqrt(r.x*r.x+r.y*r.y)}function Bt(r,i){return r.x*i.y-r.y*i.x}function mt(r,i){return r.x*i.x+r.y*i.y}function et(r,i,x,f){return r.x=i.x*x+i.y*f,r.y=i.x*f-i.y*x,r}class St{constructor(i,x,f){this._writeVertex=i,this._writeTriangle=x,this._canUseThinTessellation=f,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(i,x,f=this._canUseThinTessellation){kt(i),f&&x.halfWidth<Rt&&!x.offset?this._tessellateThin(i,x):this._tessellate(i,x)}_tessellateThin(i,x){if(i.length<2)return;const f=x.wrapDistance||65535;let E=x.initialDistance||0,W=!1,z=i[0].x,F=i[0].y;const B=i.length;for(let j=1;j<B;++j){W&&(W=!1,E=0);let q=i[j].x,Q=i[j].y,b=q-z,v=Q-F,T=Math.sqrt(b*b+v*v);if(b/=T,v/=T,E+T>f){W=!0;const t=(f-E)/T;T=f-E,q=(1-t)*z+t*q,Q=(1-t)*F+t*Q,--j}const o=this._writeVertex(z,F,0,0,b,v,v,-b,0,-1,E),n=this._writeVertex(z,F,0,0,b,v,-v,b,0,1,E);E+=T;const G=this._writeVertex(q,Q,0,0,b,v,v,-b,0,-1,E),e=this._writeVertex(q,Q,0,0,b,v,-v,b,0,1,E);this._writeTriangle(o,n,G),this._writeTriangle(n,G,e),z=q,F=Q}}_tessellate(i,x){const f=i[0],E=i[i.length-1],W=Vt(f,E),z=W?3:2;if(i.length<z)return;const F=x.pixelCoordRatio,B=x.capType!=null?x.capType:S.BUTT,j=x.joinType!=null?x.joinType:D.MITER,q=x.miterLimit!=null?Math.min(x.miterLimit,4):2,Q=x.roundLimit!=null?Math.min(x.roundLimit,1.05):1.05,b=x.halfWidth!=null?x.halfWidth:2,v=!!x.textured;let T,o,n,G=null;const e=this._prevNormal,t=this._nextNormal;let Y=-1,C=-1;const y=this._joinNormal;let _,c;const xt=this._textureNormalLeft,st=this._textureNormalRight,w=this._textureNormal;let u=-1,l=-1;const _t=x.wrapDistance||65535;let h=x.initialDistance||0;const Nt=this._writeVertex,Et=this._writeTriangle,d=(R,yt,H,g,L,A)=>{const O=Nt(o,n,_,c,H,g,R,yt,L,A,h);return u>=0&&l>=0&&O>=0&&Et(u,l,O),u=l,l=O,O};W&&(T=i[i.length-2],t.x=E.x-T.x,t.y=E.y-T.y,C=vt(t),t.x/=C,t.y/=C);let Z=!1;for(let R=0;R<i.length;++R){if(Z&&(Z=!1,h=0),T&&(e.x=-t.x,e.y=-t.y,Y=C,h+Y>_t&&(Z=!0)),Z){const s=(_t-h)/Y;Y=_t-h,T={x:(1-s)*T.x+s*i[R].x,y:(1-s)*T.y+s*i[R].y},--R}else T=i[R];o=T.x,n=T.y;const yt=R<=0&&!Z,H=R===i.length-1;if(yt||(h+=Y),G=H?W?i[1]:null:i[R+1],G?(t.x=G.x-o,t.y=G.y-n,C=vt(t),t.x/=C,t.y/=C):(t.x=void 0,t.y=void 0),!W){if(yt){p(y,t),_=y.x,c=y.y,B===S.SQUARE&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,0,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,0,1)),B===S.ROUND&&(d(-t.y-t.x,t.x-t.y,t.x,t.y,-1,-1),d(t.y-t.x,-t.x-t.y,t.x,t.y,-1,1)),B!==S.ROUND&&B!==S.BUTT||(d(-t.y,t.x,t.x,t.y,0,-1),d(t.y,-t.x,t.x,t.y,0,1));continue}if(H){k(y,e),_=y.x,c=y.y,B!==S.ROUND&&B!==S.BUTT||(d(e.y,-e.x,-e.x,-e.y,0,-1),d(-e.y,e.x,-e.x,-e.y,0,1)),B===S.SQUARE&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,0,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,0,1)),B===S.ROUND&&(d(e.y-e.x,-e.x-e.y,-e.x,-e.y,1,-1),d(-e.y-e.x,e.x-e.y,-e.x,-e.y,1,1));continue}}let g,L,A=-Bt(e,t);if(Math.abs(A)<.01)mt(e,t)>0?(y.x=e.x,y.y=e.y,A=1,g=Number.MAX_VALUE,L=!0):(p(y,t),A=1,g=1,L=!1);else{y.x=(e.x+t.x)/A,y.y=(e.y+t.y)/A,g=vt(y);const s=(g-1)*b*F;L=g>4||s>Y&&s>C}_=y.x,c=y.y;let O=j;switch(j){case D.BEVEL:g<1.05&&(O=D.MITER);break;case D.ROUND:g<Q&&(O=D.MITER);break;case D.MITER:g>q&&(O=D.BEVEL)}switch(O){case D.MITER:if(d(y.x,y.y,-e.x,-e.y,0,-1),d(-y.x,-y.y,-e.x,-e.y,0,1),H)break;if(v){const s=Z?0:h;u=this._writeVertex(o,n,_,c,t.x,t.y,y.x,y.y,0,-1,s),l=this._writeVertex(o,n,_,c,t.x,t.y,-y.x,-y.y,0,1,s)}break;case D.BEVEL:{const s=A<0;let m,V,K,M;if(s){const a=u;u=l,l=a,m=xt,V=st}else m=st,V=xt;if(L)K=s?p(this._innerPrev,e):k(this._innerPrev,e),M=s?k(this._innerNext,t):p(this._innerNext,t);else{const a=s?ft(this._inner,y):Tt(this._inner,y);K=a,M=a}const U=s?k(this._bevelStart,e):p(this._bevelStart,e);d(K.x,K.y,-e.x,-e.y,m.x,m.y);const nt=d(U.x,U.y,-e.x,-e.y,V.x,V.y);if(H)break;const I=s?p(this._bevelEnd,t):k(this._bevelEnd,t);if(L){const a=this._writeVertex(o,n,_,c,-e.x,-e.y,0,0,0,0,h);u=this._writeVertex(o,n,_,c,t.x,t.y,M.x,M.y,m.x,m.y,h),l=this._writeVertex(o,n,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h),this._writeTriangle(nt,a,l)}else{if(v){const a=this._bevelMiddle;a.x=(U.x+I.x)/2,a.y=(U.y+I.y)/2,et(w,a,-e.x,-e.y),d(a.x,a.y,-e.x,-e.y,w.x,w.y),et(w,a,t.x,t.y),u=this._writeVertex(o,n,_,c,t.x,t.y,a.x,a.y,w.x,w.y,h),l=this._writeVertex(o,n,_,c,t.x,t.y,M.x,M.y,m.x,m.y,h)}else{const a=u;u=l,l=a}d(I.x,I.y,t.x,t.y,V.x,V.y)}if(s){const a=u;u=l,l=a}break}case D.ROUND:{const s=A<0;let m,V;if(s){const N=u;u=l,l=N,m=xt,V=st}else m=st,V=xt;const K=s?ft(this._inner,y):Tt(this._inner,y);let M,U;L?(M=s?p(this._innerPrev,e):k(this._innerPrev,e),U=s?k(this._innerNext,t):p(this._innerNext,t)):(M=K,U=K);const nt=s?k(this._roundStart,e):p(this._roundStart,e),I=s?p(this._roundEnd,t):k(this._roundEnd,t),a=d(M.x,M.y,-e.x,-e.y,m.x,m.y),ot=d(nt.x,nt.y,-e.x,-e.y,V.x,V.y);if(H)break;const X=this._writeVertex(o,n,_,c,-e.x,-e.y,0,0,0,0,h);L||this._writeTriangle(u,l,X);const P=ft(this._outer,K),J=this._writeVertex(o,n,_,c,t.x,t.y,I.x,I.y,V.x,V.y,h);let $,tt;const lt=g>2;if(lt){let N;g!==Number.MAX_VALUE?(P.x/=g,P.y/=g,N=mt(e,P),N=(g*(N*N-1)+1)/N):N=-1,$=s?k(this._startBreak,e):p(this._startBreak,e),$.x+=e.x*N,$.y+=e.y*N,tt=s?p(this._endBreak,t):k(this._endBreak,t),tt.x+=t.x*N,tt.y+=t.y*N}et(w,P,-e.x,-e.y);const ht=this._writeVertex(o,n,_,c,-e.x,-e.y,P.x,P.y,w.x,w.y,h);et(w,P,t.x,t.y);const ct=v?this._writeVertex(o,n,_,c,t.x,t.y,P.x,P.y,w.x,w.y,h):ht,ut=X,at=v?this._writeVertex(o,n,_,c,t.x,t.y,0,0,0,0,h):X;let it=-1,rt=-1;if(lt&&(et(w,$,-e.x,-e.y),it=this._writeVertex(o,n,_,c,-e.x,-e.y,$.x,$.y,w.x,w.y,h),et(w,tt,t.x,t.y),rt=this._writeVertex(o,n,_,c,t.x,t.y,tt.x,tt.y,w.x,w.y,h)),v?lt?(this._writeTriangle(ut,ot,it),this._writeTriangle(ut,it,ht),this._writeTriangle(at,ct,rt),this._writeTriangle(at,rt,J)):(this._writeTriangle(ut,ot,ht),this._writeTriangle(at,ct,J)):lt?(this._writeTriangle(X,ot,it),this._writeTriangle(X,it,rt),this._writeTriangle(X,rt,J)):(this._writeTriangle(X,ot,ht),this._writeTriangle(X,ct,J)),L?(u=this._writeVertex(o,n,_,c,t.x,t.y,U.x,U.y,m.x,m.y,h),l=J):(u=v?this._writeVertex(o,n,_,c,t.x,t.y,U.x,U.y,m.x,m.y,h):a,this._writeTriangle(u,at,J),l=J),s){const N=u;u=l,l=N}break}}}}}export{St as D,It as M,Pt as k};
