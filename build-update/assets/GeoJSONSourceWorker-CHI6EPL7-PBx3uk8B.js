import{aO as _,a0 as R,q as F,bs as Q,aG as Z,aQ as v,aF as A,aN as E,aD as G,aE as P,Q as M,aH as $,bt as N,bu as b,a2 as H,L as z,bv as O,bw as L,bx as W,by as B}from"./story-u82SUoyt.js";import{I as J}from"./FeatureStore-CGZUrE_U-DjzILCiD.js";import{Z as V}from"./QueryEngine-DDOrno8f-B0kQO-fw.js";import{X as Y,Y as U,W as X}from"./geojson-C0tfEHKN-DIvEiqIJ.js";import{f as K,A as ee,d as te}from"./clientSideDefaults-DaxivApY-B8xV4T7A.js";import{G as se,F as j,j as T,u as I,x as k}from"./sourceUtils-0xHA9963-C_l53B74.js";import"./main-CmCzAIzx.js";import"./BoundsStore-5unyB8-T-CUwlNzjn.js";import"./PooledRBush-DFMOIq_L-CmIYbWqB.js";import"./timeSupport-sB9XTwIv-CgIn3vO1.js";import"./optimizedFeatureQueryEngineAdapter-kZ9wH51p-DW9KmICi.js";import"./WhereClause-D233Ox-8-BsuEUZuW.js";import"./TimeOnly-BR6daUyu-BGOh8DJt.js";import"./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js";import"./utils-CpnbG32Y-Bw47bfo6.js";import"./utils-BszyTz9P-C2orT8Qx.js";import"./utils-DN5yax8A-BldUqjOY.js";import"./date-Cqvy-TgA-DIf-QFLz.js";import"./capabilities-Cjn77swe-Y9lFlGVh.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class Te{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const i=[],[s]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),n=Y(s,{geometryType:e.geometryType}),l=e.fields||n.fields||[],d=e.hasZ!=null?e.hasZ:n.hasZ,p=n.geometryType;let y=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let a=e.timeInfo;l===n.fields&&n.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});const o=new R(l);let u=o.get(y);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,y=u.name):(u={alias:y,name:y,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},l.unshift(u));const h={};for(const r of l){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new F("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!Q.jsonValues.includes(r.type))throw new F("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==u.name){const g=Z(r);g!==void 0&&(h[r.name]=g)}r.length==null&&(r.length=v(r))}if(a){if(a.startTimeField){const r=o.get(a.startTimeField);r?(a.startTimeField=r.name,r.type="esriFieldTypeDate"):a.startTimeField=null}if(a.endTimeField){const r=o.get(a.endTimeField);r?(a.endTimeField=r.name,r.type="esriFieldTypeDate"):a.endTimeField=null}if(a.trackIdField){const r=o.get(a.trackIdField);r?a.trackIdField=r.name:(a.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:a}}))}a.startTimeField||a.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:a}}),a=null)}const c=p?te(p):void 0,w=o.dateFields.length?{timeZoneIANA:A}:null,f={warnings:i,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:K(h),extent:void 0,geometryType:p,objectIdField:y,fields:l,hasZ:!!d,timeInfo:a,dateFieldsTimeReference:w}};this._queryEngine=new V({fieldsIndex:R.fromLayerJSON({fields:l,timeInfo:a,dateFieldsTimeReference:w}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:a,featureStore:new J({geometryType:p,hasM:!1,hasZ:d})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=ee(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const C=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(C);const{fullExtent:D,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=D,S){const{start:r,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[r,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([se(t,i),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=G(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const n=this._normalizeFeatures(s);n&&this._queryEngine.featureStore.addMany(n)},s=>{this._queryEngine.featureStore.clear(),P(s)||M.getLogger("esri.layers.GeoJSONLayer").error(new F("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:i}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:i,objectIdField:s}=this._queryEngine,n=U(e,{geometryType:t,hasZ:i,objectIdField:s});if(!$(this._queryEngine.spatialReference,_))for(const l of n)l.geometry!=null&&(l.geometry=N(b(H(l.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this._loadOptions,s=(await z(t??"",{responseType:"json",query:{...i},signal:e})).data;return X(s),s}_normalizeFeatures(e,t){const{objectIdField:i,fieldsIndex:s}=this._queryEngine,n=[];for(const l of e){const d=this._createDefaultAttributes(),p=j(s,d,l.attributes,!0);p?t?.push(p):(this._assignObjectId(d,l.attributes,!0),l.attributes=d,l.objectId=d[i],n.push(l))}return n}async _applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(n,t),i?.length&&this._applyUpdateEdits(n,i),s?.length){for(const p of s)n.deleteResults.push(T(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:l,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:l,timeExtent:d,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:l,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&s!==O(o.geometry)){i.push(I("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=j(m,u,o.attributes);if(h)i.push(h);else{if(this._assignObjectId(u,o.attributes),o.attributes=u,o.uid!=null){const c=o.attributes[d];e.uidToObjectId[o.uid]=c}if(o.geometry!=null){const c=o.geometry.spatialReference??p;o.geometry=b(k(o.geometry,c),c,p)}a.push(o),i.push(T(o.attributes[d]))}}y.addMany(L([],a,s,l,n,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:l,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:a,geometry:o}=m,u=a?.[l];if(u==null){e.push(I(`Identifier field ${l} missing`));continue}if(!p.has(u)){e.push(I(`Feature with object id ${u} missing`));continue}const h=W(p.getFeature(u),i,n,s);if(o!=null){if(i!==O(o)){e.push(I("Incorrect geometry type."));continue}const c=o.spatialReference??d;h.geometry=b(k(o,c),c,d)}if(a){const c=j(y,h.attributes,a);if(c){e.push(c);continue}}p.add(B(h,i,n,s,l)),e.push(T(u))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const n of t)n.objectId&&(s=Math.max(s,n.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;e[s]=i&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new F("geojson-layer","Projection not supported")}}}export{Te as default};
