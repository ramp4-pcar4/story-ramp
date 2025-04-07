import{o as $}from"./WGLContainer-LxgEo4I_-DxR6cFF-.js";import{v as c,hF as I,K as Wt,j as W,S as f,i as X,w as xt,I as Te,as as ke,dg as ue,aF as he,aA as mt,ae as L,ih as Fe,hZ as Se}from"./story-CfV_Vu_Z.js";import{t as Mt,v as w,A as De,ax as Ct,C as ot,ay as Tt,L as y,bf as Ee,a7 as G,F as C,N as D,S as h,aa as Z,a4 as b,bg as d,ab as ce,az as Nt,aL as F,au as P,a6 as me,a5 as Qt,bh as Kt,bi as Ve,ap as Xt,aw as A,ar as S,aV as Le,aB as ze,aQ as Bt,bj as Jt,bk as te,am as de,bl as Re,ak as $e,a_ as j,b9 as kt,aW as Ie,aC as Pe,bm as Ae,aX as Ze,bn as Ne,aA as Be,a3 as Oe,a2 as qe,M as Ue,bd as Ft}from"./UpdateTracking2D-Du_WIf4G-CXiNaGyK.js";import{i as Ge}from"./CircularArray-DaQg3PQl-BXS52LZy.js";import{b as je}from"./testSVGPremultipliedAlpha-DoZe_f0d-Zc506vKV.js";import{D as We,b as Xe,g as Ye}from"./definitions-DJSdSb77-DkoRHaVx.js";import{f as St,_ as ee,d as pe,k as ft,g as He,G as Qe,$ as Ke,j as Ot,p as Je,n as ie,L as ti}from"./MapView-BGOJJ8ch-CGHGPf5s.js";import{B as ei}from"./AttributeStore-DjyP9U7y-Bp0LydT2.js";import{L as ge,_ as ii,b as si}from"./vec32-D9GsKZ1t-D3wZeaI1.js";import{m as qt,b as ni,d as oi}from"./vec2-tHZ6OaOy-xCj1obDt.js";import{o as nt}from"./vec2f64-CeODonrJ-CkkJCdRC.js";const $i={shaders:{vertexShader:$("bitBlit/bitBlit.vert"),fragmentShader:$("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])},Ii={shaders:{vertexShader:$("stencil/stencil.vert"),fragmentShader:$("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])};class _e extends Ct{}c([Mt(0,S)],_e.prototype,"position",void 0);class ai extends Ft{}class J extends ot{}c([w(j)],J.prototype,"layerTexture",void 0),c([w(j)],J.prototype,"backbufferTexture",void 0),c([w(h)],J.prototype,"opacity",void 0),c([w(h)],J.prototype,"inFadeOpacity",void 0);class dt extends Tt{vertex(e){return{uv:e.position,glPosition:new y(Ee(e.position),0,1)}}fragment(e){const i=new kt,s=G(this.config.layerTexture,e.uv),a=G(this.config.backbufferTexture,e.uv),o=C(D(s.a,new h(0)),s.rgb,s.rgb.divide(s.a)),n=C(D(a.a,new h(0)),a.rgb,a.rgb.divide(a.a)),l=this.config.opacity.multiply(s.a),r=a.a;switch(this.blendMode){case"destination-over":i.glFragColor=new y(o.multiply(l).multiply(d(r)).add(n.multiply(r)),l.add(r).subtract(l.multiply(r)));break;case"source-in":{const u=new y(o.multiply(l).multiply(r),l.multiply(r)),m=new y(n.multiply(r),r).multiply(d(this.config.opacity)).multiply(this.config.inFadeOpacity);i.glFragColor=u.add(m)}break;case"destination-in":{const u=new y(n.multiply(r).multiply(l),r.multiply(l)),m=new y(n.multiply(r),r).multiply(new y(d(this.config.opacity).multiply(this.config.inFadeOpacity)));i.glFragColor=u.add(m)}break;case"source-out":i.glFragColor=new y(o.multiply(l).multiply(d(r)),l.multiply(d(r)));break;case"destination-out":i.glFragColor=new y(n.multiply(r).multiply(d(l)),r.multiply(d(l)));break;case"source-atop":i.glFragColor=new y(o.multiply(l).multiply(r).add(n.multiply(r.multiply(d(l)))),r);break;case"destination-atop":i.glFragColor=new y(o.multiply(l.multiply(d(r))).add(n.multiply(r).multiply(l)),l);break;case"xor":i.glFragColor=new y(o.multiply(l.multiply(d(r))).add(n.multiply(r.multiply(d(l)))),l.multiply(d(r)).add(r.multiply(d(l))));break;case"multiply":i.glFragColor=new y(o.multiply(l).multiply(n.multiply(r)).add(o.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"screen":i.glFragColor=new y(o.add(n).subtract(o.multiply(n)).multiply(l.multiply(r)).add(o.multiply(l).multiply(d(r))).add(n.multiply(r).multiply(d(l))),l.add(r.multiply(d(l))));break;case"overlay":{const u=new b(Dt(n.r,o.r),Dt(n.g,o.g),Dt(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"darken":{const u=F(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"lighter":i.glFragColor=new y(o.multiply(l).add(n.multiply(r)),l.add(r));break;case"lighten":{const u=Nt(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"color-dodge":{const u=Z(new b(wt(n.r,o.r),wt(n.g,o.g),wt(n.b,o.b)),new b(0),new b(1));i.glFragColor=x(u,o,n,l,r)}break;case"color-burn":{const u=new b(vt(n.r,o.r),vt(n.g,o.g),vt(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"hard-light":{const u=new b(Et(n.r,o.r),Et(n.g,o.g),Et(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"soft-light":{const u=new b(Vt(n.r,o.r),Vt(n.g,o.g),Vt(n.b,o.b));i.glFragColor=x(u,o,n,l,r)}break;case"difference":{const u=ce(n.subtract(o));i.glFragColor=x(u,o,n,l,r)}break;case"exclusion":{const u=o.add(n).subtract(new h(2).multiply(o).multiply(n));i.glFragColor=x(u,o,n,l,r)}break;case"invert":i.glFragColor=new y(new b(1).subtract(n).multiply(l).multiply(r).add(n.multiply(r).multiply(d(l))),r);break;case"vivid-light":{const u=new b(Z(Lt(n.r,o.r),new h(0),new h(1)),Z(Lt(n.g,o.g),new h(0),new h(1)),Z(Lt(n.b,o.b),new h(0),new h(1)));i.glFragColor=x(u,o,n,l,r)}break;case"hue":{const u=ne(o,n,n);i.glFragColor=x(u,o,n,l,r)}break;case"saturation":{const u=ne(n,o,n);i.glFragColor=x(u,o,n,l,r)}break;case"color":{const u=Gt(o,n);i.glFragColor=x(u,o,n,l,r)}break;case"luminosity":{const u=Gt(n,o);i.glFragColor=x(u,o,n,l,r)}break;case"plus":i.glFragColor=Z(new y(s.r.add(n.r),s.g.add(n.g),s.b.add(n.b),l.add(r)),new y(0),new y(1));break;case"minus":i.glFragColor=new y(Z(new b(n.r.subtract(s.r),n.g.subtract(s.g),n.b.subtract(s.b)),new b(0),new b(1)),r.multiply(l));break;case"average":{const u=n.add(o).divide(2);i.glFragColor=x(u,o,n,l,r)}break;case"reflect":{const u=Z(new b(zt(n.r,o.r),zt(n.g,o.g),zt(n.b,o.b)),new b(0),new b(1));i.glFragColor=x(u,o,n,l,r)}break;default:i.glFragColor=s.multiply(this.config.opacity)}return i}}function x(t,e,i,s,a){return new y(t.multiply(s).multiply(a).add(e.multiply(s).multiply(d(a))).add(i.multiply(a).multiply(d(s))),s.add(a.multiply(d(s))))}function Dt(t,e){return new h(1).subtract(P(new h(.5),e)).multiply(d(new h(2).multiply(d(e).multiply(d(t))))).add(P(new h(.5),e).multiply(new h(2).multiply(e).multiply(t)))}function wt(t,e){return C(D(t,new h(0)),new h(0),C(D(e,new h(1)),new h(1),F(new h(1),t.divide(new h(1).subtract(e)))))}function vt(t,e){return C(D(t,new h(1)),new h(1),C(D(e,new h(0)),new h(0),d(F(new h(1),d(t).divide(e)))))}function Et(t,e){return new h(1).subtract(P(new h(.5),e)).multiply(new h(2).multiply(e).multiply(t)).add(P(new h(.5),e).multiply(d(new h(2).multiply(d(e).multiply(d(t))))))}function Vt(t,e){return me([Qt(e,new h(.5)),()=>{const i=new h(2).multiply(e),s=d(i),a=d(t);return t.subtract(s.multiply(t).multiply(a))}],[Qt(t,new h(.25)),()=>{const i=new h(2).multiply(e),s=Kt(i).multiply(t),a=new h(16).multiply(t).subtract(new h(12)).multiply(t).add(new h(3));return t.add(s.multiply(a))}],[!0,()=>{const i=new h(2).multiply(e),s=Kt(i),a=Ie(t).subtract(t);return t.add(s.multiply(a))}])}function Lt(t,e){const i=d(P(new h(.5),e)).multiply(vt(t,new h(2).multiply(e))),s=P(new h(.5),e).multiply(wt(t,new h(2).multiply(Ve(e,.5))));return i.add(s)}function Yt(t){return F(F(t.r,t.g),t.b)}function ye(t){return Nt(Nt(t.r,t.g),t.b)}function Ut(t){return Pe(t,new b(.3,.59,.11))}function se(t){return ye(t).subtract(Yt(t))}function ri(t){const e=Ut(t),i=Yt(t),s=ye(t);return me([de(i,new h(0)),()=>{const a=t.subtract(e).multiply(e),o=e.subtract(i);return e.add(a.divide(o))}],[Xt(s,new h(1)),()=>{const a=t.subtract(e),o=d(e),n=a.multiply(o),l=s.subtract(e);return e.add(n.divide(l))}],[!0,t])}function Gt(t,e){const i=Ut(t),s=Ut(e).subtract(i);return ri(t.add(new b(s)))}function ne(t,e,i){const s=Yt(t),a=se(t),o=se(e);return Gt(C(Xt(a,new h(0)),()=>t.subtract(s).multiply(o).divide(a),new b(0)),i)}function zt(t,e){return C(D(e,new h(1)),e,()=>{const i=d(e),s=t.multiply(t).divide(i);return F(s,new h(1))})}c([De],dt.prototype,"blendMode",void 0),c([w(J)],dt.prototype,"config",void 0),c([I(0,A(_e))],dt.prototype,"vertex",null),c([I(0,A(ai))],dt.prototype,"fragment",null);class we extends Ct{}c([Mt(0,S)],we.prototype,"position",void 0);class li extends Ft{}let jt=class extends ot{};c([w(j)],jt.prototype,"layerTexture",void 0),c([w(h)],jt.prototype,"opacity",void 0);let Rt=class extends Tt{vertex(t){return{uv:t.position,glPosition:new y(t.position.subtract(new S(.5)).multiply(2),0,1)}}fragment(t){const e=new kt;return e.glFragColor=G(this.config.layerTexture,t.uv).multiply(this.config.opacity),e}};c([w(jt)],Rt.prototype,"config",void 0),c([I(0,A(we))],Rt.prototype,"vertex",null),c([I(0,A(li))],Rt.prototype,"fragment",null);const Pi={shaders:{vertexShader:$("highlight/textured.vert"),fragmentShader:$("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Ai={shaders:{vertexShader:$("highlight/textured.vert"),fragmentShader:$("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},k=!!Wt("esri-2d-profiler");let Zi=class{constructor(t,e){if(this._events=new Te,this._entries=new Map,this._timings=new Ge(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!k)return;this._ext=je(t.gl,{}),this._debugOutput=e;const i=t.gl;if(!this.enableCommandLogging)return;let s;for(s in i)if(typeof i[s]=="function"){const a=i[s],o=s.includes("draw");i[s]=(...n)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:s,args:n,isDrawCommand:o}),this._currentSummary&&(this._currentSummary.commands++,o&&this._currentSummary.drawCommands++),a.apply(i,n))}}get enableCommandLogging(){return!(typeof k=="object"&&k.disableCommands)}recordContainerStart(t){k&&(this._currentContainer=t)}recordContainerEnd(){k&&(this._currentContainer=null)}recordPassStart(t){k&&(this._currentPass=t,this._initSummary())}recordPassEnd(){k&&(this._currentPass=null,this._emitSummary())}recordBrushStart(t){k&&(this._currentBrush=t)}recordBrushEnd(){k&&(this._currentBrush=null)}recordStart(t){if(k&&this._ext!=null){if(this._entries.has(t)){const i=this._entries.get(t),s=this._ext.resultAvailable(i.query),a=this._ext.disjoint();if(s&&!a){const o=this._ext.getResult(i.query)/1e6;let n=0;if(this._timings.enqueue(o)!=null){const u=this._timings.entries,m=u.length;let _=0;for(const p of u)_+=p;n=_/m}const l=o.toFixed(2),r=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${t}, ${l} ms (${r} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${t}, ${l} ms (${r} last 10 avg)`),this._debugOutput.innerHTML=`${l} (${r})`}for(const o of i.handles)o.remove();this._ext.deleteQuery(i.query),this._entries.delete(t)}const e={name:t,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(e.handles.push(this._events.on("command",i=>{e.commandsLen++,e.commands.push(i),i.isDrawCommand&&e.drawCommands++})),e.handles.push(this._events.on("summary",i=>{e.summaries.push(i)}))),this._ext.beginTimeElapsed(e.query),this._entries.set(t,e)}}recordEnd(t){k&&this._ext!=null&&this._entries.has(t)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}};const E=1,bt=0,it=1,st=2;let ui=class{constructor(t,e,i){this._width=t*i,this._height=e*i,this._pixelRatio=i;const s=Math.ceil(this._width/E),a=Math.ceil(this._height/E);this._cols=s,this._rows=a,this._cells=ei.create(s*a)}insertMetrics(t){this._markMetrics(t)}hasCollision(t){let e=0;for(const{transformedX:i,transformedY:s,width:a,height:o}of t.bounds){const n=a*this._pixelRatio,l=o*this._pixelRatio,r=i*this._pixelRatio,u=s*this._pixelRatio;switch(this._collide(r,u,n,l)){case st:return st;case it:e++}}return e===t.bounds.length?it:bt}getCellId(t,e){return t+e*this._cols}has(t){return this._cells.has(t)}hasRange(t,e){return this._cells.hasRange(t,e)}set(t){this._cells.set(t)}setRange(t,e){this._cells.setRange(t,e)}_collide(t,e,i,s){const a=t-i/2,o=e-s/2,n=a+i,l=o+s;if(n<0||l<0||a>this._width||o>this._height)return it;const r=L(Math.floor(a/E),0,this._cols),u=L(Math.floor(o/E),0,this._rows),m=L(Math.ceil(n/E),0,this._cols),_=L(Math.ceil(l/E),0,this._rows);for(let p=u;p<=_;p++)for(let g=r;g<=m;g++){const v=this.getCellId(g,p);if(this.has(v))return st}return bt}_mark(t,e,i,s){const a=t-i/2,o=e-s/2,n=a+i,l=o+s,r=L(Math.floor(a/E),0,this._cols),u=L(Math.floor(o/E),0,this._rows),m=L(Math.ceil(n/E),0,this._cols),_=L(Math.ceil(l/E),0,this._rows);for(let p=u;p<=_;p++)for(let g=r;g<=m;g++){const v=this.getCellId(g,p);this.set(v)}return!1}_markMetrics(t){for(const{transformedX:e,transformedY:i,width:s,height:a}of t.bounds){const o=s*this._pixelRatio,n=a*this._pixelRatio,l=e*this._pixelRatio,r=i*this._pixelRatio;this._mark(l,r,o,n)}}};const H=254,pt=255,Q=0;function B(t,e){const i=t.children.slice();i.sort((s,a)=>s.tileAge-a.tileAge),i.forEach(s=>{s.labelMetrics!=null&&s.isReady&&e(s,s.labelMetrics)})}function oe(t,e){return(!t.minScale||t.minScale>=e)&&(!t.maxScale||t.maxScale<=e)}class hi{run(e,i,s,a){const o=[];for(let n=e.length-1;n>=0;n--){const l=e[n];l.labelingCollisionInfos?.length&&o.push(...l.labelingCollisionInfos)}Wt("esri-2d-update-debug")&&o.length&&console.debug("CollisionEngine.run"),this._transformMetrics(o),this._runCollision(o,i,s,a);for(const n of o)n.container.requestRender()}_runCollision(e,i,s,a){const[o,n]=i.state.size,l=new ui(o,n,i.pixelRatio);for(const{container:r,deconflictionEnabled:u,visible:m}of e){const _=r.attributeView;u?m?(this._prepare(r),this._collideVisible(l,r,s,a),this._collideInvisible(l,r)):B(r,(p,g)=>{for(const v of g)_.setLabelMinZoom(v.entityTexel,pt)}):B(r,(p,g)=>{for(const v of g)oe(v,s)?(_.setLabelMinZoom(v.entityTexel,Q),m&&l.insertMetrics(v)):_.setLabelMinZoom(v.entityTexel,H)})}}_isFiltered(e,i,s){const a=i.getFilterFlags(e),o=!s.hasFilter||!!(a&We),n=s.featureEffect==null||s.featureEffect.excludedLabelsVisible||!!(a&Xe);return!(o&&n)}_prepare(e){const i=e.attributeView,s=new Set;B(e,(a,o)=>{for(const n of o){const l=n.entityTexel;if(!s.has(l)){if(s.add(l),this._isFiltered(l,i,e.layerView)){i.setLabelMinZoom(l,H);continue}i.getLabelMinZoom(l)!==Q?i.setLabelMinZoom(l,pt):i.setLabelMinZoom(l,Q)}}})}_collideVisible(e,i,s,a){const o=i.attributeView,n=new Set;B(i,(l,r)=>{for(let u=0;u<r.length;u++){const m=r[u].entityTexel;if(n.has(m))continue;if(l.key.level!==a){o.setLabelMinZoom(m,H),n.add(m);continue}if(!oe(r[u],s)){o.setLabelMinZoom(m,H),n.add(m);continue}if(o.getLabelMinZoom(m)!==0){n.add(m);continue}let _=!1,p=!0;const g=u;let v=u;for(;v<r.length;v++){const T=r[v];if(T.entityTexel!==m)break;if(!_)switch(e.hasCollision(T)){case it:break;case st:_=!0,p=!1;break;case bt:p=!1}}if(!_)for(let T=g;T<v;T++)e.insertMetrics(r[T]);u=v-1,p||(n.add(m),o.setLabelMinZoom(m,_?H:Q))}})}_collideInvisible(e,i){const s=i.attributeView,a=new Set;B(i,(o,n)=>{for(let l=0;l<n.length;l++){const r=n[l].entityTexel;if(a.has(r))continue;if(s.getLabelMinZoom(r)!==pt){a.add(r);continue}let u=!1,m=!0;const _=l;let p=l;for(;p<n.length;p++){const g=n[p];if(g.entityTexel!==r)break;if(!u)switch(e.hasCollision(g)){case it:break;case st:u=!0,m=!1;break;case bt:m=!1}}if(!u)for(let g=_;g<p;g++)e.insertMetrics(n[g]);l=p-1,m||(a.add(r),s.setLabelMinZoom(r,u?pt:Q))}})}_transformMetrics(e){for(const{container:i,geometryType:s,vvEvaluators:a}of e)B(i,(o,n)=>{const l=i.attributeView,r=o.transforms.labelMat2d;r[4]=Math.round(r[4]),r[5]=Math.round(r[5]);const u=s==="polyline";for(const m of n){const{entityTexel:_,anchorX:p,anchorY:g}=m;let v=m.referenceBounds?.size??0;const T=a[0];if(T!=null){const M=T(l.getVisualVariableData(_,ti.SIZE));v=isNaN(M)||M==null||M===1/0?v:M}const at=Ye+v/2,rt=m.directionX*at,Y=m.directionY*at;for(const M of m.bounds){let lt=p,ut=g;if(u){const ht=p+M.x+rt,ct=g+M.y+Y;lt=r[0]*ht+r[2]*ct+r[4],ut=r[1]*ht+r[3]*ct+r[5];const Me=lt,Ce=ut;M.transformedX=Math.floor(Me),M.transformedY=Math.floor(Ce)}else{lt=r[0]*p+r[2]*g+r[4],ut=r[1]*p+r[3]*g+r[5];const ht=lt+M.x+rt,ct=ut+M.y+Y;M.transformedX=ht,M.transformedY=ct}}}})}}const ci=32;let K=class extends W{constructor(t){super(t),this._lastUpdate=0,this.collisionEngine=new hi,this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}get updating(){return Wt("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(t){const e=performance.now();e-this._lastUpdate>=ci?(this._lastUpdate=e,this.doUpdate(t)):this.requestUpdate()}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view?.requestUpdate())}processUpdate(t){this.updateRequested&&(this.updateRequested=!1,this.update(t))}doUpdate(t){const e=this.view;if(e)try{const i=t.state.scale,s=e.featuresTilingScheme.getClosestInfoForScale(i).level;this.collisionEngine.run(e.allLayerViews.items,t,i,s)}catch{}}};c([f()],K.prototype,"updateRequested",void 0),c([f()],K.prototype,"updating",null),c([f()],K.prototype,"view",void 0),K=c([X("esri.views.2d.LabelManager")],K);const gt="esri-zoom-box",_t={container:`${gt}__container`,overlay:`${gt}__overlay`,background:`${gt}__overlay-background`,box:`${gt}__outline`},$t={zoom:"Shift",counter:"Control"};let tt=class extends W{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this.removeAllHandles(),this._destroyOverlay(),this._set("view",t),t&&this.addHandles([t.on("drag",[$t.zoom],e=>this._handleDrag(e,1),ee.INTERNAL),t.on("drag",[$t.zoom,$t.counter],e=>this._handleDrag(e,-1),ee.INTERNAL)])}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,a){const o=this.view,n=o.toMap(ke(t+.5*i,e+.5*s));let l=Math.max(i/o.width,s/o.height);a===-1&&(l=1/l),this._destroyOverlay(),this.navigation.end(),o.goTo({center:n,scale:o.scale*l},{animationMode:"always",duration:pe()})}_updateBox(t,e,i,s){const a=this._boxShape;a.setAttributeNS(null,"x",""+t),a.setAttributeNS(null,"y",""+e),a.setAttributeNS(null,"width",""+i),a.setAttributeNS(null,"height",""+s),a.setAttributeNS(null,"class",_t.box)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=_t.container,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",_t.background);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttributeNS(null,"class",_t.overlay),a.appendChild(i),a.appendChild(s),this._container.appendChild(a),this._backgroundShape=i,this._boxShape=s,this._overlay=a}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,a,o){const n=t+i,l=e+s;return"M 0 0 L "+a+" 0 L "+a+" "+o+" L 0 "+o+" ZM "+t+" "+e+" L "+t+" "+l+" L "+n+" "+l+" L "+n+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,a=t.origin.x,o=t.origin.y;let n,l,r,u;switch(i>a?(n=a,r=i-a):(n=i,r=a-i),s>o?(l=o,u=s-o):(l=s,u=o-s),t.action){case"start":this._start();break;case"update":this._update(n,l,r,u);break;case"end":this._end(n,l,r,u,e)}t.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};c([f()],tt.prototype,"navigation",void 0),c([f()],tt.prototype,"view",null),tt=c([X("esri.views.2d.navigation.ZoomBox")],tt);const mi=tt;let R=class{constructor(t){this._gain=t,this.lastValue=void 0,this.filteredDelta=void 0}update(t){if(this.hasLastValue()){const e=this.computeDelta(t);this._updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(t){return this.lastValue===void 0?NaN:t-this.lastValue}_updateDelta(t){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*t:this.filteredDelta=t}};class Ht{constructor(e,i,s){this._initialVelocity=e,this._stopVelocity=i,this._friction=s,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(e){return e>this.duration}get friction(){return this._friction}value(e){return this.valueFromInitialVelocity(this._initialVelocity,e)}valueDelta(e,i){const s=this.value(e);return this.value(e+i)-s}valueFromInitialVelocity(e,i){i=Math.min(i,this.duration);const s=1-this.friction;return e*(s**i-1)/Math.log(s)}}class di extends Ht{constructor(e,i,s,a,o){super(e,i,s),this._sceneVelocity=a,this.direction=o}value(e){return super.valueFromInitialVelocity(this._sceneVelocity,e)}}class pi{constructor(e=300,i=12,s=.84){this._minimumInitialVelocity=e,this._stopVelocity=i,this._friction=s,this.enabled=!0,this._time=new R(.6),this._screen=[new R(.4),new R(.4)],this._scene=[new R(.6),new R(.6),new R(.6)],this._tmpDirection=ue()}add(e,i,s){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(s)<.015)return;this._screen[0].update(e[0]),this._screen[1].update(e[1]),this._scene[0].update(i[0]),this._scene[1].update(i[1]),this._scene[2].update(i[2]),this._time.update(s)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const e=this._screen[0].filteredDelta,i=this._screen[1].filteredDelta,s=e==null||i==null?0:Math.sqrt(e*e+i*i),a=this._time.filteredDelta,o=a==null||s==null?0:s/a;return Math.abs(o)<this._minimumInitialVelocity?null:this.createMomentum(o,this._stopVelocity,this._friction)}createMomentum(e,i,s){ii(this._tmpDirection,this._scene[0].filteredDelta??0,this._scene[1].filteredDelta??0,this._scene[2].filteredDelta??0);const a=si(this._tmpDirection);a>0&&ge(this._tmpDirection,this._tmpDirection,1/a);const o=this._time.filteredDelta;return new di(e,i,s,o==null?0:a/o,this._tmpDirection)}}let q=class extends W{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new pi(500,6,.92),this.momentum=null,this.tmpMomentum=ue(),this.momentumFinished=!1,this.viewpoint=new St({targetGeometry:new xt,scale:0,rotation:0}),this._previousDrag=null,he(()=>this.momentumFinished,()=>this.navigation.stop())}begin(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(t,e){this.addToEstimator(e);let i=e.center.x,s=e.center.y;const a=this._previousDrag;i=a?a.center.x-i:-i,s=a?s-a.center.y:s,t.viewpoint=ft(this.viewpoint,t.viewpoint,[i||0,s||0]),this._previousDrag=e}end(t,e){this.addToEstimator(e);const i=t.navigation.effectiveMomentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this._previousDrag=null,this.navigation.end()}addToEstimator(t){const e=t.center.x,i=t.center.y,s=Fe(-e,i),a=Se(-e,i,0);this.momentumEstimator.add(s,a,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const{momentum:s,animationTime:a,tmpMomentum:o}=this,n=.001*i;if(!(this.momentumFinished=!s||s.isFinished(a))){const l=s.valueDelta(a,n);ge(o,s.direction,l),ft(e,e,o),t.constraints.constrainByGeometry(e)}this.animationTime+=n})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};c([f()],q.prototype,"momentumFinished",void 0),c([f()],q.prototype,"viewpoint",void 0),c([f()],q.prototype,"navigation",void 0),q=c([X("esri.views.2d.navigation.actions.Pan")],q);const gi=q;let ve=class{constructor(t=2.5,e=.01,i=.95,s=12){this._minimumInitialVelocity=t,this._stopVelocity=e,this._friction=i,this._maxVelocity=s,this.enabled=!0,this.value=new R(.8),this.time=new R(.3)}add(t,e){if(this.enabled&&e!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let t=this.value.filteredDelta/this.time.filteredDelta;return t=L(t,-this._maxVelocity,this._maxVelocity),Math.abs(t)<this._minimumInitialVelocity?null:this.createMomentum(t,this._stopVelocity,this._friction)}createMomentum(t,e,i){return new Ht(t,e,i)}};class _i extends ve{constructor(e=3,i=.01,s=.95,a=12){super(e,i,s,a)}add(e,i){const s=this.value.lastValue;if(s!=null){let a=e-s;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;e=s+a}super.add(e,i)}}class yi extends Ht{constructor(e,i,s){super(e,i,s)}value(e){const i=super.value(e);return Math.exp(i)}valueDelta(e,i){const s=super.value(e),a=super.value(e+i)-s;return Math.exp(a)}}class wi extends ve{constructor(e=2.5,i=.01,s=.95,a=12){super(e,i,s,a)}add(e,i){super.add(Math.log(e),i)}createMomentum(e,i,s){return new yi(e,i,s)}}let U=class extends W{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new _i(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new wi,this._zoomOnly=null,this.viewpoint=new St({targetGeometry:new xt,scale:0,rotation:0}),this.zoomMomentum=null,this.rotateMomentum=null,this.addHandles(he(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(t,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(t,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const i=e.angle,s=e.radius,a=e.center,o=Math.abs(180*(i-this._startAngle)/Math.PI),n=Math.abs(s-this._startRadius),l=this._startRadius/s;if(this._previousRadius&&this._previousCenter){const r=s/this._previousRadius;let u=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=u>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=n-o>0),this._zoomOnly===null||this._zoomOnly?u=0:this.addToRotateEstimator(i-this._startAngle,e.timestamp)):u=0,this.addToZoomEstimator(e,l),this.navigation.setViewpoint([a.x,a.y],1/r,u,[this._previousCenter.x-a.x,a.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=a}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,e){this._rotationMomentumEstimator.add(t,.001*e)}addToZoomEstimator(t,e){this._zoomMomentumEstimator.add(e,.001*t.timestamp)}canZoomIn(t){const e=t.scale,i=t.constraints.effectiveMaxScale;return i===0||e>i}canZoomOut(t){const e=t.scale,i=t.constraints.effectiveMinScale;return i===0||e<i}onAnimationUpdate(t){this.navigation.animationManager?.animateContinuous(t.viewpoint,(e,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,a=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),o=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),n=.001*i;if(this._momentumFinished=a&&o,!this._momentumFinished){const l=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,n))*this._rotationDirection*180/Math.PI:0;let r=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,n)):1;const u=nt(),m=nt();if(this._previousCenter){qt(u,this._previousCenter.x,this._previousCenter.y),He(m,t.size,t.padding),ni(u,u,m);const{constraints:_,scale:p}=t,g=p*r;r<1&&!_.canZoomInTo(g)?(r=p/_.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):r>1&&!_.canZoomOutTo(g)&&(r=p/_.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Qe(e,t.viewpoint,r,l,u,t.size),t.constraints.constrainByGeometry(e)}}this._animationTime+=n})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};c([f()],U.prototype,"_momentumFinished",void 0),c([f()],U.prototype,"viewpoint",void 0),c([f()],U.prototype,"navigation",void 0),U=c([X("esri.views.2d.navigation.actions.Pinch")],U);const vi=U,It=nt(),ae=nt();let et=class extends W{constructor(t){super(t),this._previousCenter=nt(),this.viewpoint=new St({targetGeometry:new xt,scale:0,rotation:0})}begin(t,e){this.navigation.begin(),qt(this._previousCenter,e.center.x,e.center.y)}update(t,e){const{state:{size:i,padding:s}}=t;qt(It,e.center.x,e.center.y),Ke(ae,i,s),t.viewpoint=Ot(this.viewpoint,t.state.paddedViewState.viewpoint,Je(ae,this._previousCenter,It)),oi(this._previousCenter,It)}end(){this.navigation.end()}};c([f()],et.prototype,"viewpoint",void 0),c([f()],et.prototype,"navigation",void 0),et=c([X("esri.views.2d.navigation.actions.Rotate")],et);const fi=et,O=10,re=1,Pt=new St({targetGeometry:new xt}),At=[0,0],le=250;let V=class extends W{constructor(t){super(t),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new gi({navigation:this}),this.rotate=new fi({navigation:this}),this.pinch=new vi({navigation:this}),this.zoomBox=new mi({view:this.view,navigation:this})}destroy(){this.pan=mt(this.pan),this.rotate=mt(this.rotate),this.pinch=mt(this.pinch),this.zoomBox=mt(this.zoomBox),this.animationManager=null}begin(){this.stop(),this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(le)}async zoom(t,e=this._getDefaultAnchor()){if(this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(e):this.zoomOut(e);this.setViewpoint(e,t,0,[0,0])}async zoomIn(t){const e=this.view,i=e.constraints.snapToNextScale(e.scale);return this._zoomToScale(i,t)}async zoomOut(t){const e=this.view,i=e.constraints.snapToPreviousScale(e.scale);return this._zoomToScale(i,t)}setViewpoint(t,e,i,s){this.begin(),this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,e,i,s),this.end()}setViewpointImmediate(t,e=0,i=[0,0],s=this._getDefaultAnchor()){this.view.stateManager.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,s,t,e,i)}continuousRotateClockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinuous(t,e=>{Ot(e,e,-re)})}continuousRotateCounterclockwise(){const t=this.view.viewpoint;this.animationManager?.animateContinuous(t,e=>{Ot(e,e,re)})}resetRotation(){this.view.constraints.rotationEnabled&&(this.view.rotation=0)}continuousPanLeft(){this._continuousPan([-O,0])}continuousPanRight(){this._continuousPan([O,0])}continuousPanUp(){this._continuousPan([0,O])}continuousPanDown(){this._continuousPan([0,-O])}continuousPanVector({x:t,y:e}){this._continuousPan([t*O,e*O])}stop(){this.pan.stopMomentumNavigation(),this.animationManager?.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const e=this.view.viewpoint;this.animationManager?.animateContinuous(e,i=>{ft(i,i,t),this.view.constraints.constrainByGeometry(i)})}_startTimer(t){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{this._endTimer=null;const e=performance.now()-(this._lastEventTimestamp??0);e<le?this._endTimer=this._startTimer(e):this._set("interacting",!1)},t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:e,right:i,top:s,bottom:a}}=this.view;return At[0]=.5*(t[0]-i+e),At[1]=.5*(t[1]-a+s),At}async _zoomToScale(t,e=this._getDefaultAnchor()){const{view:i}=this,{constraints:s,scale:a,viewpoint:o,size:n,padding:l}=i,r=s.canZoomInTo(t),u=s.canZoomOutTo(t);if(!(t<a&&!r||t>a&&!u))return ie(Pt,o,t/a,0,e,n,l),s.constrainByGeometry(Pt),i.goTo(Pt,{animate:!0,animationMode:"always",duration:pe(),pickClosestTarget:!1})}_scaleRotateTranslateViewpoint(t,e,i,s,a){const{view:o}=this,{size:n,padding:l,constraints:r,scale:u,viewpoint:m}=o,_=u*i,p=r.canZoomInTo(_),g=r.canZoomOutTo(_);return(i<1&&!p||i>1&&!g)&&(i=1),ft(m,m,a),ie(t,m,i,s,e,n,l),r.constrainByGeometry(t)}};c([f()],V.prototype,"animationManager",void 0),c([f({type:Boolean,readOnly:!0})],V.prototype,"interacting",void 0),c([f()],V.prototype,"pan",void 0),c([f()],V.prototype,"pinch",void 0),c([f()],V.prototype,"rotate",void 0),c([f()],V.prototype,"view",void 0),c([f()],V.prototype,"zoomBox",void 0),V=c([X("esri.views.2d.navigation.MapViewNavigation")],V);const Ni=V;class fe extends Ct{}c([Mt(0,S)],fe.prototype,"position",void 0);class bi extends Ft{}class z extends ot{}c([w(j)],z.prototype,"readbackTexture",void 0),c([w(j)],z.prototype,"maskTexture",void 0),c([w(j)],z.prototype,"overlayTexture",void 0),c([w(y)],z.prototype,"background",void 0),c([w(y)],z.prototype,"drawPos",void 0),c([w(h)],z.prototype,"maskEnabled",void 0),c([w(h)],z.prototype,"overlayEnabled",void 0);class Zt extends Tt{vertex(e){const i=e.position,s=e.position.subtract(new S(.5)).multiply(this.config.drawPos.zw),a=this.config.drawPos.xy.add(s);return{glPosition:new y(a,0,1),texCoord:i}}fragment(e){let i=G(this.config.readbackTexture,xi(e.texCoord));i=i.add(new h(1).subtract(i.a)).multiply(this.config.background);const s=C(D(this.config.maskEnabled,new h(1)),G(this.config.maskTexture,e.texCoord).a,new h(1));i=i.multiply(s);const a=C(D(this.config.overlayEnabled,new h(1)),G(this.config.overlayTexture,e.texCoord),new y(0)),o=new kt;return o.glFragColor=a.add(new h(1).subtract(a.a).multiply(i)),o}}function xi(t){const e=t.multiply(new S(2)).subtract(1);return C(D(e.x,new h(0)).and(D(e.y,new h(0))),new S(.5),()=>{const i=Ae(e.y,e.x),s=Ze(Be(e),new h(Ne)),a=new S(Oe(i),qe(i));return s.multiply(a).multiply(new S(.5)).add(new h(.5))})}c([w(z)],Zt.prototype,"config",void 0),c([I(0,A(fe))],Zt.prototype,"vertex",null),c([I(0,A(bi))],Zt.prototype,"fragment",null);class be extends Ct{}c([Mt(0,S)],be.prototype,"position",void 0);class Mi extends Ft{}class xe extends ot{}c([w(Ue)],xe.prototype,"dvs",void 0);class N extends ot{}c([w(h)],N.prototype,"halfWidth",void 0),c([w(h)],N.prototype,"aaWidth",void 0),c([w(h)],N.prototype,"pxPerCell",void 0),c([w(y)],N.prototype,"minorLineColor",void 0),c([w(y)],N.prototype,"majorLineColor",void 0),c([w(Bt)],N.prototype,"majorLineInterval",void 0);class yt extends Tt{vertex(e){const i=e.position.multiply(2).subtract(1);return{gridPos:this.transform.dvs.multiply(new b(i,1)).xy,glPosition:new y(i,0,1)}}fragment(e){const i=ce(e.gridPos),s=Le(i),a=F(s.x,new h(1).subtract(s.x)),o=F(s.y,new h(1).subtract(s.y)),n=new S(a,o).multiply(this.config.pxPerCell).subtract(this.config.halfWidth),l=F(n.x,n.y),r=new h(1).subtract(ze(new h(0),this.config.aaWidth,l)),u=new Bt(Jt(i.x)),m=new Bt(Jt(i.y)),_=new h(te(u,this.config.majorLineInterval)),p=new h(te(m,this.config.majorLineInterval)),g=C(de(n.x,n.y),_,p),v=Xt(Re(P(n.x,this.config.aaWidth),P(n.y,this.config.aaWidth)),new h(.5)),T=F(_,p),at=C(v,T,g),rt=$e(this.config.majorLineColor,this.config.minorLineColor,F(at,new h(1))),Y=new kt;return Y.glFragColor=rt.multiply(r),Y}}c([w(xe)],yt.prototype,"transform",void 0),c([w(N)],yt.prototype,"config",void 0),c([I(0,A(be))],yt.prototype,"vertex",null),c([I(0,A(Mi))],yt.prototype,"fragment",null);export{Zt as E,Ni as F,Rt as T,$i as a,Ii as b,Pi as c,Zi as d,K as j,Ai as m,yt as r,dt as t};
