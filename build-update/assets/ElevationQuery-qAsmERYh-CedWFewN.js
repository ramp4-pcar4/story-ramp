import{w as q,o as d,gH as Y,O as G,a_ as I,W as Z,bh as N,b6 as ee,G as D,m as te,dD as U,p as R,gI as W,a1 as ne,a2 as ie,gJ as se,b8 as ae}from"./story-_2qqwocf.js";import{N as z,K as M}from"./projection-BA9M1R7d-BNPaubfz.js";import{e as B}from"./TileKey-B_6qmYK--BtZdR-Xy.js";import"./main-C0sSK5MQ.js";import"./projectBuffer-CvCBvJ6W-CjFsH9Cb.js";const V=()=>ne.getLogger("esri.layers.support.ElevationSampler");class H{queryElevation(e){return oe(e.clone(),this)}on(){return ie()}projectIfRequired(e,t){return J(e,t)}}class le extends H{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=W(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const s=R(t.spatialReference),a=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:a,max:a}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return t!=null&&this.containsAt(t.x,t.y)}containsAt(e,t){return se(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const n=this.extent,i=`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;return V().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}}class O extends H{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),typeof t=="number"?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map(a=>new le(a,i,this.noDataValue)):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:a,max:o}=s.demResolution;this.demResolution={min:a,max:o};for(let r=1;r<this.samplers.length;r++){const c=this.samplers[r];this.extent.union(c.extent),this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}}else this.extent=W(N(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){let n,i=!1;for(const s of this.samplers)if(s.containsAt(e,t)&&(i=!0,n=s.elevationAt(e,t),n!==s.noDataValue))return n;return n??(i||V().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue)}}function oe(l,e){const t=J(l,e.spatialReference);if(!t)return null;switch(l.type){case"point":re(l,t,e);break;case"polyline":ce(l,t,e);break;case"multipoint":ue(l,t,e)}return l}function J(l,e){if(l==null)return null;const t=l.spatialReference;if(t.equals(e))return l;const n=ae(l,e);return n||V().error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),n}function re(l,e,t){l.z=t.elevationAt(e.x,e.y)}function ce(l,e,t){y.spatialReference=e.spatialReference;const n=l.hasM&&!l.hasZ;for(let i=0;i<l.paths.length;i++){const s=l.paths[i],a=e.paths[i];for(let o=0;o<s.length;o++){const r=s[o],c=a[o];y.x=c[0],y.y=c[1],n&&(r[3]=r[2]),r[2]=t.elevationAt(y.x,y.y)}}l.hasZ=!0}function ue(l,e,t){y.spatialReference=e.spatialReference;const n=l.hasM&&!l.hasZ;for(let i=0;i<l.points.length;i++){const s=l.points[i],a=e.points[i];y.x=a[0],y.y=a[1],n&&(s[3]=s[2]),s[2]=t.elevationAt(y.x,y.y)}l.hasZ=!0}const y=new q;let he=class{constructor(l,e){this.data=l,this.safeWidth=.99999999*(l.width-1),this.dx=(l.width-1)/(e[2]-e[0]),this.dy=(l.width-1)/(e[3]-e[1]),this.x0=e[0],this.y1=e[3]}};class K{constructor(e,t=null){if(this.tile=e,t!=null&&e!=null){const n=e.extent;this._samplerData=new he(t,n)}}get zmin(){return this._samplerData!=null?this._samplerData.data.minValue:0}get zmax(){return this._samplerData!=null?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(e,t){if(this._samplerData==null)return;const{safeWidth:n,data:i,dx:s,dy:a,y1:o,x0:r}=this._samplerData,{width:c,values:u,noDataValue:m}=i,f=P(a*(o-t),0,n),h=P(s*(e-r),0,n),w=Math.floor(f),b=Math.floor(h),_=w*c+b,F=_+c,A=u[_],E=u[F],S=u[_+1],k=u[F+1];if(A!==m&&E!==m&&S!==m&&k!==m){const L=h-b,$=A+(S-A)*L;return $+(E+(k-E)*L-$)*(f-w)}}}function P(l,e,t){return l<e?e:l>t?t:l}class Ie{async queryAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=x.fromGeometry(t);let s=!1;n?.returnSampleInfo||(s=!0);const a={...g,...n,returnSampleInfo:!0},o=await this.query(e[e.length-1],i,a),r=await this._queryAllContinue(e,o,a);return r.geometry=r.geometry.export(),s&&delete r.sampleInfo,r}async query(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof x)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...g,...n},s=new fe(e,t.spatialReference,i),a=i.signal;return await e.load({signal:a}),await me(s,t,a),await this._selectTiles(s,a),await T(s,a),ge(s),Te(s,a)}async createSampler(e,t,n){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...g,...n};return this._createSampler(e,t,i)}async createSamplerAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter(a=>a.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...g,...n,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,s,i)}async _createSampler(e,t,n,i){const s=n.signal;await e.load({signal:s});const a=t.spatialReference,o=e.tileInfo.spatialReference;a.equals(o)||(await z([{source:a,dest:o}],{signal:s}),t=M(t,o));const r=new pe(e,t,n,i);return await this._selectTiles(r,s),await T(r,s),new O(r.elevationTiles,r.layer.tileInfo,r.options.noDataValue)}async _createSamplerAllContinue(e,t,n,i){if(e.pop(),!e.length)return n;const s=n.samplers.filter(c=>!c.tile.hasNoDataValues).map(c=>Y(c.extent)),a=await this._createSampler(e[e.length-1],t,i,s);if(a.samplers.length===0)return n;const o=n.samplers.concat(a.samplers),r=new O(o,i.noDataValue);return this._createSamplerAllContinue(e,t,r,i)}async _queryAllContinue(e,t,n){const i=e.pop(),s=t.geometry.coordinates,a=t.sampleInfo;G(a);const o=[],r=[];for(let f=0;f<s.length;f++){const h=a[f];h.demResolution>=0?h.source||(h.source=i):e.length&&(o.push(s[f]),r.push(f))}if(!e.length||o.length===0)return t;const c=t.geometry.clone(o),u=await this.query(e[e.length-1],c,n),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return r.forEach((f,h)=>{s[f].z=u.geometry.coordinates[h].z,a[f].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,n)}async _selectTiles(e,t){e.type==="geometry"&&de(e);const n=e.options.demResolution;if(typeof n=="number")xe(e,n);else if(n==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(n!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}async _selectTilesFinestContiguous(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=X(n,i,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=i.tilemapCache,a=e.getTilesToFetch();try{if(s&&!C(s))await I(Promise.all(a.map(o=>s.fetchAvailability(o.level,o.row,o.col,{signal:n}))),n);else if(await T(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(o){Z(o),await this._selectTilesFinestContiguousAt(e,t-1,n)}}async _selectTilesAuto(e,t){we(e),ve(e);const n=e.layer.tilemapCache;if(!n||C(n))return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),s={},a=i.map(async o=>{const r=new B(null,0,0,0,N()),c=await ee(n.fetchAvailabilityUpsample(o.level,o.row,o.col,r,{signal:t}));c.ok!==!1?o.id!=null&&(s[o.id]=r):Z(c.error)});await I(Promise.all(a),t),e.remapTiles(s)}async _selectTilesAutoPrefetchUpsample(e,t){const n=e.layer.tileInfo;await T(e,t);let i=!1;e.forEachTileToFetch((s,a)=>{n.upsampleTile(s)?i=!0:a()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(n=>n.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await z([{source:this.spatialReference,dest:e}],{signal:t});const n=new D({spatialReference:this.spatialReference,points:this.coordinates.map(o=>[o.x,o.y])}),i=M(n,e);if(!i)return null;const s=this.coordinates.map((o,r)=>{const c=o.clone(),u=i.points[r];return c.x=u[0],c.y=u[1],c}),a=this.clone(s);return a.spatialReference=e,a}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map(n=>n.clone()),t._exporter=(n,i)=>{const s=e.clone(n);return s.spatialReference=i,s};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?[new p(n.x,n.y,n.z,n.m)]:i?[new p(n.x,n.y,n.z)]:s?[new p(n.x,n.y,null,n.m)]:[new p(n.x,n.y)],t._exporter=(a,o)=>e.hasM?new q(a[0].x,a[0].y,a[0].z,a[0].m,o):new q(a[0].x,a[0].y,a[0].z,o);break}case"multipoint":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?n.points.map(a=>new p(a[0],a[1],a[2],a[3])):i?n.points.map(a=>new p(a[0],a[1],a[2])):s?n.points.map(a=>new p(a[0],a[1],null,a[2])):n.points.map(a=>new p(a[0],a[1])),t._exporter=(a,o)=>e.hasM?new D({points:a.map(r=>[r.x,r.y,r.z,r.m]),hasZ:!0,hasM:!0,spatialReference:o}):new D(a.map(r=>[r.x,r.y,r.z]),o);break}case"polyline":{const n=e,i=[],s=[],{hasZ:a,hasM:o}=e;let r=0;for(const c of n.paths)if(s.push([r,r+c.length]),r+=c.length,a&&o)for(const u of c)i.push(new p(u[0],u[1],u[2],u[3]));else if(a)for(const u of c)i.push(new p(u[0],u[1],u[2]));else if(o)for(const u of c)i.push(new p(u[0],u[1],null,u[2]));else for(const u of c)i.push(new p(u[0],u[1]));t.coordinates=i,t._exporter=(c,u)=>{const m=e.hasM?c.map(h=>[h.x,h.y,h.z??0,h.m??0]):c.map(h=>[h.x,h.y,h.z??0]),f=s.map(h=>m.slice(h[0],h[1]));return new te({paths:f,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class p{constructor(e,t,n=null,i=null,s=null,a=null){this.x=e,this.y=t,this.z=n,this.m=i,this.tile=s,this.elevationTile=a}clone(){return new p(this.x,this.y,this.z,this.m)}}class Q{constructor(e,t){this.layer=e,this.options=t}}class fe extends Q{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>t.tile=null);else{const{tileInfo:t,tilemapCache:n}=this.layer,i=v(t,n)[e].level;this.geometry.coordinates.forEach(s=>s.tile=t.tileAt(i,s.x,s.y))}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const n=t.tile?.id;t.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;if(!i)continue;const s=n.tile?.id;n.elevationTile||!s||e[s]||(e[s]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class pe extends Q{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=v(t,n);if(!e)return i.length-1;const s=this.extent;if(s==null)return-1;for(let a=i.length-1;a>=0;a--){const o=i[a],r=o.resolution*t.size[0],c=o.resolution*t.size[1];if(Math.ceil(s.width/r)*Math.ceil(s.height/c)<=e)return a}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=j(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,()=>s=!0),s?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=j(this._candidateTiles,t)}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(t==null)return;const{tileInfo:n,tilemapCache:i}=this.layer,s=v(n,i)[e],a=n.tileAt(s.level,t.xmin,t.ymin),o=a.extent;if(o==null)return;const r=s.resolution*n.size[0],c=s.resolution*n.size[1],u=Math.ceil((t.xmax-o[0])/r),m=Math.ceil((t.ymax-o[1])/c);for(let f=0;f<m;f++)for(let h=0;h<u;h++){const w=new B(null,a.level,a.row-f,a.col+h);n.updateTileInfo(w),this._tileIsMasked(w)||this._candidateTiles.push(w)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&U(t,e.extent))}}function X(l,e,t=0){const n=v(l,e);let i=n.length-1;if(t>0){const s=t/R(l.spatialReference),a=n.findIndex(o=>o.resolution<s);a===0?i=0:a>0&&(i=a-1)}return i}const g={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};async function me(l,e,t){let n;const i=l.layer.tileInfo.spatialReference;if(e instanceof x?n=await e.project(i,t):(await z([{source:e.spatialReference,dest:i}],{signal:t}),n=M(e,i)),!n)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${e.spatialReference.wkid}' on an elevation service in '${i.wkid}'`);l.geometry=x.fromGeometry(n)}function de(l){if(l.layer.fullExtent==null)return;const e=new K(null);e.sample=()=>l.options.noDataValue,l.outsideExtentTile=e;const t=l.layer.fullExtent;l.geometry.coordinates.forEach(n=>{const i=n.x,s=n.y;(i<t.xmin||i>t.xmax||s<t.ymin||s>t.ymax)&&(n.elevationTile=e)})}function ye(l,e){const{tileInfo:t,tilemapCache:n}=l.layer,i=e/R(t.spatialReference),s=v(t,n);let a=s[0],o=0;for(let r=1;r<s.length;r++){const c=s[r];Math.abs(c.resolution-i)<Math.abs(a.resolution-i)&&(a=c,o=r)}return o}function xe(l,e){const t=ye(l,e);l.selectTilesAtLOD(t)}function we(l){const{tileInfo:e,tilemapCache:t}=l.layer,n=X(e,t,l.options.minDemResolution);l.selectTilesAtLOD(n,l.options.maximumAutoTileRequests)}function v(l,e){const t=l.lods;if(C(e)){const{effectiveMinLOD:n,effectiveMaxLOD:i}=e;return t.filter(s=>s.level>=n&&s.level<=i)}return t}async function T(l,e){const t=l.getTilesToFetch(),n={},i=l.options.cache,s=l.options.noDataValue,a=t.map(async o=>{if(o.id==null)return;const r=`${l.layer.uid}:${o.id}:${s}`,c=i!=null?i.get(r):null,u=c??await l.layer.fetchTile(o.level,o.row,o.col,{noDataValue:s,signal:e});i?.put(r,u),n[o.id]=new K(o,u)});await I(Promise.allSettled(a),e),l.populateElevationTiles(n)}function ve(l){const e=l.layer.tileInfo;let t=0;const n={},i=o=>{o.id!=null&&(o.id in n?n[o.id]++:(n[o.id]=1,t++))},s=o=>{if(o.id==null)return;const r=n[o.id];r===1?(delete n[o.id],t--):n[o.id]=r-1};l.forEachTileToFetch(i,s);let a=!0;for(;a&&(a=!1,l.forEachTileToFetch(o=>{t<=l.options.maximumAutoTileRequests||(s(o),e.upsampleTile(o)&&(a=!0),i(o))},s),a););}function ge(l){l.geometry.coordinates.forEach(e=>{const t=e.elevationTile;let n=l.options.noDataValue;if(t){const i=t.sample(e.x,e.y);i!=null?n=i:e.elevationTile=null}e.z=n})}function j(l,e){const t={},n=[];for(const s of l){const a=s.id;a&&!t[a]?(t[a]=s,n.push(s)):e&&e(s)}const i=n.sort((s,a)=>s.level-a.level);return i.filter((s,a)=>{for(let o=0;o<a;o++){const r=i[o].extent;if(r&&s.extent&&U(r,s.extent))return e&&e(s),!1}return!0})}async function Te(l,e){const t=await l.geometry.project(l.outSpatialReference,e);G(t);const n={geometry:t.export(),noDataValue:l.options.noDataValue};return l.options.returnSampleInfo&&(n.sampleInfo=Re(l)),l.geometry.coordinates.forEach(i=>{i.tile=null,i.elevationTile=null}),n}function Re(l){const e=l.layer.tileInfo,t=R(e.spatialReference);return l.geometry.coordinates.map(n=>{let i=-1;return n.elevationTile&&n.elevationTile!==l.outsideExtentTile&&(i=e.lodAt(n.elevationTile.tile.level).resolution*t),{demResolution:i}})}function C(l){return l?.tileInfo!=null}export{Ie as ElevationQuery,x as GeometryDescriptor,X as getFinestLodIndex};
