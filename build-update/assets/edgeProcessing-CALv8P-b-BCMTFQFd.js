import{v as It}from"./deduplicate-D2d-E5Pw-DCg2-G-V.js";import{R as F}from"./InterleavedLayout-DXzw3B2n-tfCXc6uz.js";import{T as l}from"./VertexAttribute-DqD5S0a2-3q90nikV.js";import{p as Q}from"./glUtil-n1JOrdV3-CRAZdee5.js";import{c$ as tt,ha as St,dg as w,bj as ht,ae as Ot,eE as At}from"./story-_2qqwocf.js";import{g as Et,_ as j,A as st,y as H,W as wt,S as dt,r as rt,l as pt,j as Tt}from"./vec32-D9GsKZ1t-BJTEeoJ0.js";const Mt=F().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(),Rt=F().vec2u8(l.SIDENESS).freeze();Q(Rt);const q=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET,{glNormalized:!0}).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION,{glNormalized:!0}).freeze();l.POSITION0,l.POSITION1,l.COMPONENTINDEX,l.VARIANTOFFSET,l.VARIANTSTROKE,l.VARIANTEXTENSION,l.NORMALCOMPRESSED,l.NORMAL2COMPRESSED,l.SIDENESS;let yt=class{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}};const U=-1;function vt(t,n,o){const r=t.vertices.position,i=t.vertices.componentIndex,c=S.position0,d=S.position1,g=S.faceNormal0,m=S.faceNormal1,{edges:a,normals:h}=Ct(t),N=a.length/4,A=n.allocate(N);let V=0;const _=N,T=o?.allocate(_);let B=0,e=0,s=0;W.length=0;for(let p=0;p<N;++p){const R=4*p;r.getVec(a.data[R],c),r.getVec(a.data[R+1],d);const C=W.pushNew();C.index=4*p,C.length=Et(c,d)}W.sort((p,R)=>R.length-p.length);const f=new Array,u=new Array;W.forAll(({length:p,index:R})=>{const C=a.data[R],mt=a.data[R+1],et=a.data[R+2],nt=a.data[R+3],ot=nt===U;if(r.getVec(C,c),r.getVec(mt,d),ot){const E=3*et;j(g,h.data[E],h.data[E+1],h.data[E+2]),st(m,g),S.componentIndex=i.get(C),S.cosAngle=H(g,m)}else{let E=3*et;if(j(g,h.data[E],h.data[E+1],h.data[E+2]),E=3*nt,j(m,h.data[E],h.data[E+1],h.data[E+2]),S.componentIndex=i.get(C),S.cosAngle=H(g,m),Vt(S,Lt))return;S.cosAngle<-.9999&&st(m,g)}e+=p,s++,ot||Pt(S,_t)?(n.write(A,V++,S),f.push(p)):Dt(S,gt)&&(T&&o&&o.write(T,B++,S),u.push(p))});const O=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),y=T&&o?{instancesData:T.slice(0,B),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,V),lodInfo:{lengths:O}},silhouette:y,averageEdgeLength:e/s}}function Pt(t,n){return t.cosAngle<n}function Vt(t,n){return t.cosAngle>n}function Dt(t,n){const o=St(t.cosAngle);return wt(it,t.position1,t.position0),o*(H(dt(xt,t.faceNormal0,t.faceNormal1),it)>0?-1:1)>n}function Ct(t){const n=t.faces.length/3,o=t.faces,r=t.neighbors,i=t.vertices.position;I.length=k.length=0;for(let c=0;c<n;c++){const d=3*c,g=r[d],m=r[d+1],a=r[d+2],h=o[d],N=o[d+1],A=o[d+2];i.getVec(h,D),i.getVec(N,X),i.getVec(A,z),rt(X,X,D),rt(z,z,D),dt(D,X,z),pt(D,D),k.pushArray(D),(g===U||h<N)&&(I.push(h),I.push(N),I.push(c),I.push(g)),(m===U||N<A)&&(I.push(N),I.push(A),I.push(c),I.push(m)),(a===U||A<h)&&(I.push(A),I.push(h),I.push(c),I.push(a))}return{edges:I,normals:k}}class bt{constructor(){this.index=0,this.length=0}}const W=new tt({allocator:t=>t||new bt,deallocator:null}),I=new tt({deallocator:null}),k=new tt({deallocator:null}),S=new yt,xt=w(),it=w(),D=w(),X=w(),z=w(),gt=ht(4),Lt=Math.cos(gt),Ft=ht(35),_t=Math.cos(Ft);function at(t,n,o){const r=n/3,i=new Uint32Array(o+1),c=new Uint32Array(o+1),d=(e,s)=>{e<s?i[e+1]++:c[s+1]++};for(let e=0;e<r;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];d(s,f),d(f,u),d(u,s)}let g=0,m=0;for(let e=0;e<o;e++){const s=i[e+1],f=c[e+1];i[e+1]=g,c[e+1]=m,g+=s,m+=f}const a=new Uint32Array(6*r),h=i[o],N=(e,s,f)=>{if(e<s){const u=i[e+1]++;a[2*u]=s,a[2*u+1]=f}else{const u=c[s+1]++;a[2*h+2*u]=e,a[2*h+2*u+1]=f}};for(let e=0;e<r;e++){const s=t[3*e],f=t[3*e+1],u=t[3*e+2];N(s,f,e),N(f,u,e),N(u,s,e)}const A=(e,s)=>{const f=2*e,u=s-e;for(let O=1;O<u;O++){const M=a[f+2*O],y=a[f+2*O+1];let p=O-1;for(;p>=0&&a[f+2*p]>M;p--)a[f+2*p+2]=a[f+2*p],a[f+2*p+3]=a[f+2*p+1];a[f+2*p+2]=M,a[f+2*p+3]=y}};for(let e=0;e<o;e++)A(i[e],i[e+1]),A(h+c[e],h+c[e+1]);const V=new Int32Array(3*r),_=(e,s)=>e===t[3*s]?0:e===t[3*s+1]?1:e===t[3*s+2]?2:-1,T=(e,s)=>{const f=_(e,s);V[3*s+f]=-1},B=(e,s,f,u)=>{const O=_(e,s);V[3*s+O]=u;const M=_(f,u);V[3*u+M]=s};for(let e=0;e<o;e++){let s=i[e];const f=i[e+1];let u=c[e];const O=c[e+1];for(;s<f&&u<O;){const M=a[2*s],y=a[2*h+2*u];M===y?(B(e,a[2*s+1],y,a[2*h+2*u+1]),s++,u++):M<y?(T(e,a[2*s+1]),s++):(T(y,a[2*h+2*u+1]),u++)}for(;s<f;)T(e,a[2*s+1]),s++;for(;u<O;)T(a[2*h+2*u],a[2*h+2*u+1]),u++}return V}function J(t,n,o,r,i,c=2){const d=1/(Math.abs(o)+Math.abs(r)+Math.abs(i)),g=o*d,m=r*d,a=i<=0?(g>=0?1:-1)*(1-Math.abs(m)):g,h=i<=0?(m>=0?1:-1)*(1-Math.abs(g)):m,N=n*c;t[N]=ct(a),t[N+1]=ct(h)}function ct(t){return Ot(Math.round(32767*t),-32767,32767)}const K=.7;let Nt=class{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?Wt:Bt}write(t,n,o){$.seed=this._edgeHashFunction(o);const r=$.getIntRange(0,255),i=$.getIntRange(0,this.settings.variants-1),c=$.getFloat(),d=255*(.5*Xt(-(1-Math.min(c/K,1))+Math.max(0,c-K)/(1-K),1.2)+.5);t.position0.setVec(n,o.position0),t.position1.setVec(n,o.position1),t.componentIndex.set(n,o.componentIndex),t.variantOffset.set(n,r),t.variantStroke.set(n,i),t.variantExtension.set(n,d)}};const v=new Float32Array(6),P=new Uint32Array(v.buffer),L=new Uint32Array(1);function Bt(t){return v[0]=t.position0[0],v[1]=t.position0[1],v[2]=t.position0[2],v[3]=t.position1[0],v[4]=t.position1[1],v[5]=t.position1[2],L[0]=31*(31*(31*(31*(31*(166811+P[0])+P[1])+P[2])+P[3])+P[4])+P[5],L[0]}function Wt(t){const n=v;n[0]=b(t.position0[0]),n[1]=b(t.position0[1]),n[2]=b(t.position0[2]),n[3]=b(t.position1[0]),n[4]=b(t.position1[1]),n[5]=b(t.position1[2]),L[0]=5381;for(let o=0;o<P.length;o++)L[0]=31*L[0]+P[o];return L[0]}const lt=1e4;function b(t){return Math.round(t*lt)/lt}function Xt(t,n){return Math.abs(t)**n*Math.sign(t)}class Y{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return q.createBuffer(n)}write(n,o,r){this._commonWriter.write(n,o,r),Tt(x,r.faceNormal0,r.faceNormal1),pt(x,x);const{typedBuffer:i,typedBufferStride:c}=n.normalCompressed;J(i,o,x[0],x[1],x[2],c)}}Y.Layout=q,Y.glLayout=Q(q,1);class Z{constructor(){this._commonWriter=new Nt}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,o,r){this._commonWriter.write(n,o,r);{const{typedBuffer:i,typedBufferStride:c}=n.normalCompressed;J(i,o,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],c)}{const{typedBuffer:i,typedBufferStride:c}=n.normal2Compressed;J(i,o,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],c)}}}Z.Layout=G,Z.glLayout=Q(G,1);const x=w(),$=new At;function Gt(t){const n=zt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ut.updateSettings(t.writerSettings),ft.updateSettings(t.writerSettings),vt(n,ut,ft)}function zt(t,n,o,r){if(n){const d=at(o,r,t.count);return new $t(o,r,d,t)}const i=It(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:r}),c=at(i.indices,r,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:c,vertices:Mt.createView(i.buffer)}}class $t{constructor(n,o,r,i){this.faces=n,this.facesLength=o,this.neighbors=r,this.vertices=i}}const ut=new Y,ft=new Z,Jt=F().vec3f(l.POSITION0).vec3f(l.POSITION1),Yt=F().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);export{Jt as H,Gt as W,Yt as k,Mt as l,zt as m,vt as u};