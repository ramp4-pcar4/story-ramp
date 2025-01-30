import{v as m,S as p,i as F,j as D,dE as R,c$ as A,ah as y,aL as v,al as w,aN as d,a1 as G,au as M,aF as Q,x as C,aS as I,t as V,dF as Y}from"./story-DfT1JADo.js";import{o as L}from"./signal-CETehA7D-DXH04Xq0.js";var o;(function(s){s[s.ANIMATING=0]="ANIMATING",s[s.INTERACTING=1]="INTERACTING",s[s.IDLE=2]="IDLE"})(o||(o={}));const U=Symbol("Yield");class H{constructor(){this._tasks=new Array,this._runningTasks=L(0)}get length(){return this._tasks.length}get running(){return this._runningTasks.value>0}destroy(){this.cancelAll()}runTask(n){if(this.length===0)return U;for(;!n.done&&this._process(n);)n.madeProgress()}push(n,a,_){return++this._runningTasks.value,new Promise((h,e)=>this._tasks.push(new f(h,e,n,a,_))).finally(()=>--this._runningTasks.value)}unshift(n,a,_){return++this._runningTasks.value,new Promise((h,e)=>this._tasks.unshift(new f(h,e,n,a,_))).finally(()=>--this._runningTasks.value)}_process(n){if(this._tasks.length===0)return!1;const a=this._tasks.shift();try{const _=C(a.signal);if(_&&!a.abortCallback)a.reject(I());else{const h=_?a.abortCallback?.(I()):a.callback(n);V(h)?h.then(a.resolve,a.reject):a.resolve(h)}}catch(_){a.reject(_)}return!0}cancelAll(){const n=I();for(const a of this._tasks)if(a.abortCallback){const _=a.abortCallback(n);a.resolve(_)}else a.reject(n);this._tasks.length=0}}class f{constructor(n,a,_,h=void 0,e=void 0){this.resolve=n,this.reject=a,this.callback=_,this.signal=h,this.abortCallback=e}}let c=class extends D{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};m([p()],c.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),m([p()],c.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),c=m([F("esri.views.support.debugFlags")],c);const B=new c;function z(){return new g.Scheduler}var i;(function(s){s.RESOURCE_CONTROLLER_IMMEDIATE="immediate",s.RESOURCE_CONTROLLER="schedule",s.SLIDE="slide",s.STREAM_DATA_LOADER="stream loader",s.ELEVATION_QUERY="elevation query",s.TERRAIN_SURFACE="terrain",s.SURFACE_GEOMETRY_UPDATES="surface geometry updates",s.LOD_RENDERER="LoD renderer",s.GRAPHICS_CORE="Graphics3D",s.I3S_CONTROLLER="I3S",s.POINT_CLOUD_LAYER="point cloud",s.FEATURE_TILE_FETCHER="feature fetcher",s.OVERLAY="overlay",s.STAGE="stage",s.GRAPHICS_DECONFLICTOR="graphics deconflictor",s.FILTER_VISIBILITY="Graphics3D filter visibility",s.SCALE_VISIBILITY="Graphics3D scale visibility",s.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",s.POINT_OF_INTEREST_FREQUENT="POI frequent",s.POINT_OF_INTEREST_INFREQUENT="POI infrequent",s.LABELER="labeler",s.FEATURE_QUERY_ENGINE="feature query",s.FEATURE_TILE_TREE="feature tile tree",s.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",s.ELEVATION_ALIGNMENT="elevation alignment",s.ELEVATION_ALIGNMENT_SCENE="elevation alignment scene",s.TEXT_TEXTURE_ATLAS="text texture atlas",s.TEXTURE_UNLOAD="texture unload",s.LINE_OF_SIGHT_TOOL="line of sight tool",s.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",s.ELEVATION_PROFILE="elevation profile",s.SNAPPING="snapping",s.SHADOW_ACCUMULATOR="shadow accumulator",s.CLOUDS_GENERATOR="clouds generator",s.MAPVIEW_FETCH_QUEUE="mapview fetch queue",s.MAPVIEW_LAYERVIEW_UPDATE="mapview layerview update",s.MAPVIEW_VECTOR_TILE_PARSING_QUEUE="mapview vector tile parsing queue",s[s.NONE=0]="NONE",s[s.TEST_PRIO=1]="TEST_PRIO"})(i||(i={}));const E=0,S=new Map([[i.RESOURCE_CONTROLLER_IMMEDIATE,E],[i.RESOURCE_CONTROLLER,4],[i.SLIDE,E],[i.STREAM_DATA_LOADER,E],[i.ELEVATION_QUERY,E],[i.TERRAIN_SURFACE,1],[i.SURFACE_GEOMETRY_UPDATES,1],[i.LOD_RENDERER,2],[i.GRAPHICS_CORE,2],[i.I3S_CONTROLLER,2],[i.POINT_CLOUD_LAYER,2],[i.FEATURE_TILE_FETCHER,2],[i.CLOUDS_GENERATOR,2],[i.OVERLAY,4],[i.STAGE,4],[i.GRAPHICS_DECONFLICTOR,4],[i.FILTER_VISIBILITY,4],[i.SCALE_VISIBILITY,4],[i.FRUSTUM_VISIBILITY,4],[i.POINT_OF_INTEREST_FREQUENT,6],[i.POINT_OF_INTEREST_INFREQUENT,30],[i.LABELER,8],[i.FEATURE_QUERY_ENGINE,8],[i.FEATURE_TILE_TREE,16],[i.FEATURE_TILE_TREE_ACTIVE,E],[i.ELEVATION_ALIGNMENT,12],[i.ELEVATION_ALIGNMENT_SCENE,14],[i.TEXT_TEXTURE_ATLAS,12],[i.TEXTURE_UNLOAD,12],[i.LINE_OF_SIGHT_TOOL,16],[i.LINE_OF_SIGHT_TOOL_INTERACTIVE,E],[i.SNAPPING,E],[i.SHADOW_ACCUMULATOR,30],[i.MAPVIEW_FETCH_QUEUE,E],[i.MAPVIEW_LAYERVIEW_UPDATE,2],[i.MAPVIEW_VECTOR_TILE_PARSING_QUEUE,E]]);function N(s){return S.has(s)?S.get(s):typeof s=="number"?s:1}const W=d(6.5),k=d(1),x=d(30),q=d(1e3/30),j=d(100),b=.9;var g,l;(function(s){class n{get updating(){return this._updating.value}_updatingChanged(){this._updating.value=this._tasks.some(e=>e.needsUpdate)}constructor(){this._updating=L(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new R("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new _,this._state=o.INTERACTING,this._tasks=new A,this._runQueue=new A,this._load=0,this._idleStateCallbacks=new A,this._idleUpdatesStartFired=!1,this._forceTask=!1,this._debug=!1,this._debugHandle=y(()=>B.SCHEDULER_LOG_SLOW_TASKS,e=>this._debug=e,v);for(const e of Object.keys(i))this.performanceInfo.tasks.set(i[e],new R(i[e]))}destroy(){this._tasks.toArray().forEach(e=>e.remove()),this._tasks.clear(),w(this._debugHandle),this._microTaskQueued=!1,this._updatingChanged()}taskRunningChanged(e){this._updatingChanged(),e&&this._budget.remaining>0&&!this._microTaskQueued&&(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.remaining>0&&this._schedule()&&this.frame())}))}registerTask(e,r){const t=new a(this,e,r);return this._tasks.push(t),this._updatingChanged(),this.performanceInfo.tasks.has(e)||this.performanceInfo.tasks.set(e,new R(e)),t}registerIdleStateCallbacks(e,r){const t={idleBegin:e,idleEnd:r};this._idleStateCallbacks.push(t),this.state===o.IDLE&&this._idleUpdatesStartFired&&t.idleBegin();const u=this;return{remove:()=>this._removeIdleStateCallbacks(t),set idleBegin(T){u._idleUpdatesStartFired&&(t.idleEnd(),u._state===o.IDLE&&T()),t.idleBegin=T},set idleEnd(T){t.idleEnd=T}}}get load(){return this._load}set state(e){this._state!==e&&(this._state=e,this.state!==o.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(r=>r.idleEnd())))}get state(){return this._state}updateBudget(e){this._test&&(this._test.usedBudget=0),++this._frameNumber;let r=W,t=e.frameDuration,u=k;switch(this.state){case o.IDLE:r=d(0),t=d(Math.max(j,e.frameDuration)),u=x;break;case o.INTERACTING:t=d(Math.max(q,e.frameDuration));case o.ANIMATING:}return t=d(t-e.elapsedFrameTime-r),this.state!==o.IDLE&&t<k&&!this._forceTask?(this._forceTask=!0,!1):(t=d(Math.max(t,u)),this._budget.reset(t,this.state),this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case o.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(e=>e.idleBegin())),this._runIdle();break;case o.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test&&(this._test.usedBudget=this._budget.elapsed)}stopFrame(){this._budget.reset(d(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(e){this._idleUpdatesStartFired&&e.idleEnd(),this._idleStateCallbacks.removeUnordered(e)}removeTask(e){this._tasks.removeUnordered(e),this._runQueue.removeUnordered(e),this._updatingChanged()}_updateTask(e){this._tasks.forAll(r=>{r.name===e&&r.setPriority(e)})}_getState(e){if(this._runQueue.some(t=>t.name===e))return l.SCHEDULED;let r=l.IDLE;return this._tasks.forAll(t=>{t.name===e&&t.needsUpdate&&(t.schedulePriority<=1?r=l.READY:r!==l.READY&&(r=l.WAITING))}),r}_getRuntime(e){let r=0;return this._tasks.forAll(t=>{t.name===e&&(r+=t.runtime)}),r}_resetRuntimes(){this._tasks.forAll(e=>e.runtime=0)}_getRunning(){const e=new Map;if(this._tasks.forAll(t=>{t.needsUpdate&&e.set(t.name,(e.get(t.name)||0)+1)}),e.size===0)return null;let r="";return e.forEach((t,u)=>{r+=t>1?` ${t}x ${u}`:` ${u}`}),r}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const e=this._tasks.reduce((r,t)=>t.needsUpdate?++r:r,0);this._load=this._load*b+e*(1-b)}_schedule(){for(this._runQueue.filterInPlace(e=>!!e.needsUpdate||(e.schedulePriority=e.basePriority,!1)),this._tasks.forAll(e=>{e.basePriority===E&&e.needsUpdate&&!this._runQueue.includes(e)&&e.blockFrame!==this._frameNumber&&this._runQueue.unshift(e)});this._runQueue.length===0;){let e=!1,r=0;if(this._tasks.forAll(t=>{t.needsUpdate&&t.schedulePriority!==0&&t.basePriority!==E&&t.blockFrame!==this._frameNumber&&(e=!0,r=Math.max(r,t.basePriority),t.schedulePriority===1?(t.schedulePriority=0,this._runQueue.push(t)):--t.schedulePriority)}),!e)return this._updatingChanged(),!1}return this._updatingChanged(),!0}_run(){const e=this._budget.now();this._startFrameTaskTimes();do for(;this._runQueue.length>0;){const r=this._budget.now(),t=this._runQueue.pop();this._budget.resetProgress();try{t.task.runTask(this._budget)===U&&(t.blockFrame=this._frameNumber)}catch(T){G.getLogger("esri.views.support.Scheduler").error(`Exception in task "${t.name}"`,T),t.blockFrame=this._frameNumber}!this._budget.hasProgressed&&t.blockFrame!==this._frameNumber&&t.needsUpdate&&(t.name,i.I3S_CONTROLLER,t.blockFrame=this._frameNumber),t.schedulePriority=t.basePriority;const u=this._budget.now()-r;if(t.runtime+=u,this._frameTaskTimes.set(t.priority,this._frameTaskTimes.get(t.priority)+u),this._budget.remaining<=0)return this._updatingChanged(),void this._recordFrameTaskTimes(this._budget.now()-e)}while(this._schedule());this._updatingChanged(),this._recordFrameTaskTimes(this._budget.now()-e)}_startFrameTaskTimes(){for(const e of Object.keys(i))this._frameTaskTimes.set(i[e],0)}_recordFrameTaskTimes(e){this._frameTaskTimes.forEach((r,t)=>this.performanceInfo.tasks.get(t).push(r)),this.performanceInfo.total.push(e)}get test(){return this._test}}s.Scheduler=n;class a{get task(){return this._task.value}get updating(){return this._queue.running}constructor(e,r,t){this._scheduler=e,this.name=r,this.blockFrame=0,this.runtime=0,this._queue=new H,this._handles=new M,this._basePriority=N(r),this.schedulePriority=this._basePriority,this._task=L(t??this._queue),this._handles.add(Q(()=>this.task.running,u=>e.taskRunningChanged(u)))}remove(){this.processQueue(P),this._scheduler.removeTask(this),this.schedule=O.schedule,this.reschedule=O.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(e){if(this.name===e)return;this.name=e;const r=N(e);this._basePriority!==E&&this.schedulePriority===0||(this.schedulePriority=r),this._basePriority=r}get priority(){return this.name}set priority(e){this.setPriority(e)}get needsUpdate(){return this.updating||this.task.running}schedule(e,r,t){return this._queue.push(e,r,t)}reschedule(e,r,t){return this._queue.unshift(e,r,t)}processQueue(e){return this._queue.runTask(e)}}class _{constructor(){this._begin=typeof performance<"u"?performance.now():0,this._budget=0,this._state=o.IDLE,this._done=!1,this._progressed=!1,this._enabled=!0}run(e){return!this.done&&(e()===!0&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){return this._progressed=!0,this._done=this.elapsed>=this._budget&&this._enabled,this._done}get state(){return this._state}get enabled(){return this._enabled}set enabled(e){this._enabled=e}reset(e,r){this._begin=this.now(),this._budget=e,this._state=r,this.resetProgress()}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return this.now()-this._begin}resetProgress(){this._progressed=!1,this._done=!1}get hasProgressed(){return this._progressed}}s.Budget=_})(g||(g={})),function(s){s.SCHEDULED="s",s.READY="r",s.WAITING="w",s.IDLE="i"}(l||(l={}));const P=(()=>{const s=new g.Budget;return s.enabled=!1,s})();class X{remove(){}processQueue(){}schedule(n,a,_){try{if(C(a)){const h=I();return _?Promise.resolve(_(h)):Promise.reject(h)}return Y(n(P))}catch(h){return Promise.reject(h)}}reschedule(n,a,_){return this.schedule(n,a,_)}}const O=new X;export{z as W,O as f,i,P as p,o as u};
