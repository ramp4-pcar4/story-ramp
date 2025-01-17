import{v as _,S as g,i as tt,j as et,aU as mt,a1 as at,w as pt,n as ft,ah as I,bi as _t,bj as H,et as V,$ as W}from"./story-BJQwqSiV.js";import{r as D}from"./BufferObject-BM_7mcDb-CnDCw64j.js";import{I as m,n as M,A as w,T as U,L as st,D as $,U as yt,G as gt}from"./enums-DBi1-Mm2-CUS1pvQe.js";import{H as vt,V as wt}from"./Texture-BCt2hphT-DAjxLhHq.js";import{c as N}from"./VertexArrayObject-M4iRGGoi--KFIk53r.js";import{n as x}from"./VertexElementDescriptor-BAy1DPb3-BOhpDZGx.js";import{$ as B,_ as Z,C as J}from"./dataUtils-BkPy4R3C-Bm4iMtn6.js";import{E as xt,e as k}from"./MapView-BGOJJ8ch-Bb0d_mdR.js";import{N as St,k as it}from"./WGLContainer-LxgEo4I_-CImKPVT-.js";import{I as At,G as K,C,D as rt,R as bt,H as Dt,E as Mt}from"./mat3-CC4Foazl-BWjyqE2v.js";import{T as ot}from"./Container-BcuL1ZEG-Bk_ctUyr.js";import{e as O}from"./vec2f32-CVhmN3Me-DxoqVD7C.js";import{G as Rt}from"./LabelMetric-BeluzH3o-Cu7nQeOP.js";function Tt(a){const t=nt(q(a)),e=t,s=!0,i=Math.max(t/2,5),r=Math.round(V(a.maxPathLength)/i)+1,o=10,{density:n}=a;return{smoothing:V(a.smoothing),interpolate:!0,velocityScale:a.flowRepresentation==="flow-from"?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:s,lineCollisionWidth:e,lineSpacing:o,density:n}}function nt(a){return a.kind==="constant"?a.value[0]:a.values[a.values.length-1]}function Q(a){const t=a.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Vt(a){return{kind:"constant",value:[.1,.1,.1,1]}}function q(a){if(!a.hasVisualVariables("size"))return{kind:"constant",value:[V(a.trailWidth)]};const t=a.getVisualVariablesForType("size")[0],e=[],s=[];let i;if(t.stops){for(const r of t.stops)e.push(r.value),s.push(V(r.size));i=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),s.push(V(t.minSize),V(t.maxSize)),i=2;return{kind:"ramp",stops:e,values:s,count:i}}function zt(a){if(!a.hasVisualVariables("color"))return{kind:"constant",value:Q(a.color)};const t=a.getVisualVariablesForType("color")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),Array.prototype.push.apply(s,Q(i.color));return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function Pt(a){if(!a.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=a.getVisualVariablesForType("opacity")[0],e=[],s=[];for(const i of t.stops)e.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:e,values:s,count:t.stops.length}}function G(a,t,e,s){switch(t){case"int":a.setUniform1iv(e,s);break;case"float":a.setUniform1fv(e,s);break;case"vec2":a.setUniform2fv(e,s);break;case"vec3":a.setUniform3fv(e,s);break;case"vec4":a.setUniform4fv(e,s)}}function A(a,t,e,s){s.kind==="constant"?G(a,e,`u_${t}`,s.value):(G(a,"float",`u_${t}_stops`,s.stops),G(a,e,`u_${t}_values`,s.values),a.setUniform1i(`u_${t}_count`,s.count))}function Et(a,t){let e=!0;return e=e&&a.collisions===t.collisions,e=e&&a.density===t.density,e=e&&a.interpolate===t.interpolate,e=e&&a.lineCollisionWidth===t.lineCollisionWidth,e=e&&a.lineSpacing===t.lineSpacing,e=e&&a.maxTurnAngle===t.maxTurnAngle,e=e&&a.minSpeedThreshold===t.minSpeedThreshold,e=e&&a.segmentLength===t.segmentLength,e=e&&a.smoothing===t.smoothing,e=e&&a.velocityScale===t.velocityScale,e=e&&a.verticesPerLine===t.verticesPerLine,e}function lt(a,t){return a===t||a!=null&&t!=null&&a.equals(t)}function ct(a,t){if(!Et(a.simulationSettings,t.simulationSettings)||!lt(a.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&a.loadImagery===t.loadImagery,e=e&&a.createFlowMesh===t.createFlowMesh,e=e&&a.color.kind===t.color.kind,e=e&&a.opacity.kind===t.opacity.kind,e=e&&a.size.kind===t.size.kind,e}let Ut=class ht{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof ht)||!lt(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:s,size:i}=t;W(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e);return new Ft(r,{color:this._params.color,opacity:this._params.opacity})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.bindTexture(s.texture,0),r.setUniform1i("u_texture",0),r.setUniform1f("u_Min",s.min),r.setUniform1f("u_Max",s.max),A(r,"color","vec4",this._params.color),A(r,"opacity","float",this._params.opacity),i.bindVAO(s.vertexArray),i.drawArrays(U.TRIANGLE_STRIP,0,4)}};const L=new Map;L.set("a_position",0),L.set("a_texcoord",1);const It=new Map([["geometry",[new x("a_position",2,m.UNSIGNED_SHORT,0,8),new x("a_texcoord",2,m.UNSIGNED_SHORT,4,8)]]]),Ot={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:L};class Ft{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:s,height:i}=this._flowData,r=D.createVertex(e,M.STATIC_DRAW,new Uint16Array([0,0,0,1,s,0,1,1,0,i,0,0,s,i,1,0])),o=new Map([["geometry",r]]),n=new N(e,L,It,o),l=[];this._values.color.kind==="ramp"&&l.push("vvColor"),this._values.opacity.kind==="ramp"&&l.push("vvOpacity");const u=t.painter.materialManager.getProgram(Ot,l);let p=1e6,c=-1e6;for(let h=0;h<i;h++)for(let d=0;d<s;d++)if(this._flowData.mask[h*s+d]!==0){const S=this._flowData.data[2*(h*s+d)],b=this._flowData.data[2*(h*s+d)+1],R=Math.sqrt(S*S+b*b);p=Math.min(p,R),c=Math.max(c,R)}const f=new Uint8Array(4*s*i);for(let h=0;h<i;h++)for(let d=0;d<s;d++)if(this._flowData.mask[h*s+d]!==0){const S=this._flowData.data[2*(h*s+d)],b=this._flowData.data[2*(h*s+d)+1],R=(Math.sqrt(S*S+b*b)-p)/(c-p);f[4*(h*s+d)]=255*R,f[4*(h*s+d)+1]=0,f[4*(h*s+d)+2]=0,f[4*(h*s+d)+3]=255}else f[4*(h*s+d)]=0,f[4*(h*s+d)+1]=0,f[4*(h*s+d)+2]=0,f[4*(h*s+d)+3]=0;const v=new vt;v.internalFormat=yt.RGBA,v.wrapMode=gt.CLAMP_TO_EDGE,v.flipped=!0,v.width=s,v.height=i;const E=new wt(e,v,f);this.vertexArray=n,this.program=u,this.texture=E,this.min=p,this.max=c,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.compiled}}let Ct=class dt{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof dt&&ct(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;W(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,r,e);return new Nt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),A(r,"color","vec4",this._params.color),A(r,"opacity","float",this._params.opacity),A(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(U.TRIANGLES,s.indexCount,m.UNSIGNED_INT,0)}};const z=new Map;z.set("a_xyts0",0),z.set("a_xyts1",1),z.set("a_typeIdDurationSeed",2),z.set("a_extrudeInfo",3);const kt=new Map([["geometry",[new x("a_xyts0",4,m.FLOAT,0,64),new x("a_xyts1",4,m.FLOAT,16,64),new x("a_typeIdDurationSeed",4,m.FLOAT,32,64),new x("a_extrudeInfo",4,m.FLOAT,48,64)]]]),Lt={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:z};let Nt=class{constructor(a,t,e){this._vertexData=a,this._indexData=t,this._values=e}attach(a){const{context:t}=a,e=D.createVertex(t,M.STATIC_DRAW,this._vertexData),s=D.createIndex(t,M.STATIC_DRAW,this._indexData),i=new Map([["geometry",e]]),r=new N(t,z,kt,i,s),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=a.painter.materialManager.getProgram(Lt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}},$t=class ut{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof ut)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let s=0;s<e;s++)if(!this._styles[s].isCompatible(t._styles[s]))return!1;return!0}async load(t,e){const s=await Promise.all(this._styles.map(i=>i.load(t,e)));return new Gt(s)}render(t,e,s){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,e,s.resources[i])}},Gt=class{constructor(a){this.resources=a}attach(a){for(const t of this.resources)t.attach(a)}detach(){for(const a of this.resources)a.detach()}get ready(){return this.resources.reduce((a,t)=>a&&t.ready,!0)}};class j{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof j&&ct(this._params,t._params)}async load(t,e){const{extent:s,size:i}=t;W(e);const r=await this._params.loadImagery(s,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,r,e);return new Wt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:i}=t,{program:r}=s;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(w.ONE,w.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),A(r,"color","vec4",this._params.color),A(r,"opacity","float",this._params.opacity),A(r,"size","float",this._params.size),i.bindVAO(s.vertexArray),i.drawElements(U.TRIANGLES,s.indexCount,m.UNSIGNED_INT,0)}}const P=new Map;P.set("a_positionAndSide",0),P.set("a_timeInfo",1),P.set("a_extrude",2),P.set("a_speed",3);const Ht=new Map([["geometry",[new x("a_positionAndSide",3,m.FLOAT,0,36),new x("a_timeInfo",3,m.FLOAT,12,36),new x("a_extrude",2,m.FLOAT,24,36),new x("a_speed",1,m.FLOAT,32,36)]]]),qt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:P};let Wt=class{constructor(a,t,e){this._vertexData=a,this._indexData=t,this._values=e}attach(a){const{context:t}=a,e=D.createVertex(t,M.STATIC_DRAW,this._vertexData),s=D.createIndex(t,M.STATIC_DRAW,this._indexData),i=new Map([["geometry",e]]),r=new N(t,P,Ht,i,s),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=a.painter.materialManager.getProgram(qt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.compiled}};const jt=4,Bt=1,Zt=.5,Jt=!0,Kt=!0,Qt=2.3;function Xt(a,t){const{flowSpeed:e,trailLength:s}=a,i=Tt(a);let r=null;const o={opacity:Pt(a),size:q(a)};let n=zt(a);if(a.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});const p={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};r=new Ut(p),o.color=Vt()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:s,flowSpeed:e,featheringSize:Bt,featheringOffset:Zt,introFade:Jt,fadeToZero:Kt,decayRate:Qt,color:o.color,opacity:o.opacity,size:o.size},u=a.trailCap==="butt"||nt(q(a))<=jt?new j(l):new Ct(l);return r!=null?new $t([r,u]):u}class Yt extends it{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:k(),displayViewMat3:k()}}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(st.EQUAL,0,255)}draw(t,e){const{requestRender:s,allowDelayedRender:i}=t,{displayData:r}=e;if(r==null||(r.state.name==="loaded"&&r.attach(t),r.state.name!=="attached"))return;const o=r.state.resources;!i||o.ready||s==null?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=t.state.displayViewMat3,r.flowStyle.render(t,this._visualState,o),r.flowStyle.animated&&s!=null&&s()):s()}}class te extends St{constructor(){super(...arguments),this.flowStyle=null}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[Yt],target:()=>this.children,drawPhase:xt.MAP});return[...super.prepareRenderPasses(t),e]}}class ee{constructor(t,e,s,i){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=s,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},s=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:s}}attach(t){if(this.state.name!=="loaded")return void at.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class ae extends ot{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){this._displayData!=null&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(e==null)return;const s=e.extent.xmin,i=e.extent.ymax,r=[0,0];t.toScreen(r,[s,i]);const o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=H(t.rotation),{displayViewScreenMat3:l}=this.transforms;At(l,[-1,1,0]),K(l,l,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),C(l,l,[r[0],r[1],0]),rt(l,l,n),K(l,l,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{displayViewScreenMat3:k()}}}const se=1.15;let T=class extends et{constructor(a){super(a),this._flowDisplayObject=new ae,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(a){const{flowStyle:t}=this.flowContainer;if(t==null)return void this._clear();const{extent:e,rotation:s,resolution:i,pixelRatio:r}=a.state,o=re(e,s);o.expand(se);const n=[Math.round((o.xmax-o.xmin)/i),Math.round((o.ymax-o.ymin)/i)],l=new ee(t,o,n,r);if(this._loading!=null){if(this._loading.update(l))return;this._loading.detach(),this._loading=null}this._flowDisplayObject.displayData!=null&&this._flowDisplayObject.displayData.update(l)||(l.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},u=>{mt(u)||(at.getLogger(this).error("A resource failed to load.",u),this._loading=null)}),this._loading=l)}_clear(){this._flowDisplayObject.clear(),this._loading!=null&&(this._loading.detach(),this._loading=null)}};_([g()],T.prototype,"_loading",void 0),_([g()],T.prototype,"flowContainer",void 0),_([g()],T.prototype,"updating",null),T=_([tt("esri.views.2d.engine.flow.FlowStrategy")],T);const ie=T;function re(a,t){const e=new pt({x:(a.xmax+a.xmin)/2,y:(a.ymax+a.ymin)/2,spatialReference:a.spatialReference}),s=a.xmax-a.xmin,i=a.ymax-a.ymin,r=Math.abs(Math.cos(H(t))),o=Math.abs(Math.sin(H(t))),n=r*s+o*i,l=o*s+r*i,u=new ft({xmin:e.x-n/2,ymin:e.y-l/2,xmax:e.x+n/2,ymax:e.y+l/2,spatialReference:a.spatialReference});return u.centerAt(e),u}let y=class extends et{constructor(){super(...arguments),this._loadImagery=(a,t,e,s,i)=>B(this.layer,a,t,e,s,i),this._createFlowMesh=(a,t,e,s)=>this.layer.createFlowMesh({meshType:a,flowData:e,simulationSettings:t},{signal:s}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this.attached||this._strategy.updating}attach(){const{layer:a}=this,t=()=>{this._loadImagery=(e,s,i,r,o)=>B(a,e,s,i,r,o),this._updateVisualization()};"multidimensionalDefinition"in a?this.addHandles(I(()=>a.multidimensionalDefinition,t)):this.addHandles([I(()=>a.mosaicRule,t),I(()=>a.rasterFunction,t),I(()=>a.definitionExpression,t)]),this.container=new te,this._strategy=new ie({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles()}update(a){a.stationary?this._strategy.update(a):this.layerView.requestUpdate()}hitTest(a){return new _t({attributes:{},geometry:a.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const a=this.layer.renderer;if(a==null||a.type!=="flow")return;const t=Xt(a,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};_([g()],y.prototype,"_strategy",void 0),_([g()],y.prototype,"attached",void 0),_([g()],y.prototype,"container",void 0),_([g()],y.prototype,"layer",void 0),_([g()],y.prototype,"layerView",void 0),_([g()],y.prototype,"type",void 0),_([g()],y.prototype,"updating",null),_([g()],y.prototype,"timeExtent",void 0),y=_([tt("esri.views.2d.engine.flow.FlowView2D")],y);const we=y,F=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),X=new Float32Array([0,92/255,230/255,1]),oe={beaufort_ft:F,beaufort_m:F,beaufort_km:F,beaufort_mi:F,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:X,single_arrow:X,wind_speed:new Float32Array([0,0,0,1])},Y=[0,20];class xe extends it{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}}}dispose(){}prepareState({context:t}){t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(w.ONE,w.ONE_MINUS_SRC_ALPHA,w.ONE,w.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!0),t.setStencilOp($.KEEP,$.KEEP,$.REPLACE)}draw(t,e){if(e.source==null||e.source.validPixelCount===0)return;const{context:s,timeline:i}=t;if(i.begin(this.name),s.setStencilFunction(st.EQUAL,e.stencilRef,255),e.updateVectorFieldVAO(t),t.renderPass==="scalar"){const r=e.vaoData.scalar;r&&this._drawScalars(t,e,r.vao,r.elementCount)}else{const r=e.vaoData.magdir;r&&this._drawTriangles(t,e,r.vao,r.elementCount)}i.end(this.name)}_drawTriangles(t,e,s,i){const{context:r,painter:o,requestRender:n,allowDelayedRender:l}=t,{symbolizerParameters:u}=e,p=u.dataRange?["dataRange"]:[];u.rotationType==="geographic"&&p.push("rotationGeographic");const c=o.materialManager.getProgram(this._desc.magdir,p);if(l&&n!=null&&!c.compiled)return void n();r.useProgram(c);const{coordScale:f,opacity:v,transforms:E}=e;c.setUniform2fv("u_coordScale",f),c.setUniform1f("u_opacity",v),c.setUniformMatrix3fv("u_dvsMat3",E.displayViewScreenMat3);const{style:h,dataRange:d,rotation:S,symbolPercentRange:b}=u;c.setUniform4fv("u_colors",oe[h]),c.setUniform2fv("u_dataRange",d||Y),c.setUniform1f("u_rotation",S),c.setUniform2fv("u_symbolPercentRange",b);const R=this._getSymbolSize(t,e);c.setUniform2fv("u_symbolSize",R),r.bindVAO(s),r.drawElements(U.TRIANGLES,i,m.UNSIGNED_INT,0)}_drawScalars(t,e,s,i){const{context:r,painter:o,requestRender:n,allowDelayedRender:l}=t,{symbolizerParameters:u}=e,p=[];u.style==="wind_speed"?p.push("innerCircle"):u.dataRange&&p.push("dataRange"),u.rotationType==="geographic"&&p.push("rotationGeographic");const c=o.materialManager.getProgram(this._desc.scalar,p);if(l&&n!=null&&!c.compiled)return void n();r.useProgram(c);const{coordScale:f,opacity:v,transforms:E}=e;c.setUniform2fv("u_coordScale",f),c.setUniform1f("u_opacity",v),c.setUniformMatrix3fv("u_dvsMat3",E.displayViewScreenMat3);const{dataRange:h,symbolPercentRange:d}=u;c.setUniform2fv("u_dataRange",h||Y),c.setUniform2fv("u_symbolPercentRange",d);const S=this._getSymbolSize(t,e);c.setUniform2fv("u_symbolSize",S),r.bindVAO(s),r.drawElements(U.TRIANGLES,i,m.UNSIGNED_INT,0)}_getSymbolSize(t,e){const s=e.key?2**(t.displayLevel-e.key.level):e.resolution/t.state.resolution,{symbolTileSize:i}=e.symbolizerParameters;return[i/(Math.round((e.width-e.offset[0])/i)*i)/s,i/(Math.round((e.height-e.offset[1])/i)*i)/s]}}class Se extends ot{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t}destroy(){this.vaoData!=null&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){this._vaoInvalidated||this.vaoData==null||(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,this.source!=null&&this.vaoData==null){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const s=Z(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:i}}break;case"simple_scalar":{const s=J(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={scalar:i}}break;case"wind_speed":{const s=Z(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s),r=J(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,r);this.vaoData={magdir:i,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{displayViewScreenMat3:k()}}setTransform(t){const e=bt(this.transforms.displayViewScreenMat3),[s,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,n=r*this.height,l=Math.PI*this.rotation/180;C(e,e,O(s,i)),C(e,e,O(o/2,n/2)),rt(e,e,-l),C(e,e,O(-o/2,-n/2)),Dt(e,e,O(o,n)),Mt(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:s,indexData:i}=e,r=D.createVertex(t,M.STATIC_DRAW,new Float32Array(s)),o=D.createIndex(t,M.STATIC_DRAW,new Uint32Array(i)),n=Rt("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:m.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:m.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:m.FLOAT,normalized:!1}]});return{vao:new N(t,n.attributes,n.bufferLayouts,new Map([["geometry",r]]),o),elementCount:i.length}}}export{Se as c,xe as l,we as o};
