import{eS as _,o as I,ck as A,gT as Z,cl as Q,ay as $,aU as v,a1 as G,aC as P,f as M,bK as R}from"./story-OWO1toEx.js";import{z,n as N,A as H,j as L,k as Y}from"./featureConversionUtils-D6hFQ4Af-CH1lr5RT.js";import{I as B}from"./FeatureStore-Co2V0sVE-CBOL0wx4.js";import{f as E,h as b}from"./queryUtils-Brxu6254-B8rOWvAz.js";import{Z as J}from"./QueryEngine-CH5uUhZK-CJVcQjST.js";import{Y as U,_ as V,X as W}from"./geojson-CNt_qtQf-DZg0OTv3.js";import{A as K,f as X,d as ee}from"./clientSideDefaults-BqqayPct-o2kfqOLg.js";import{G as te,F as T,j,c as F,x as k}from"./sourceUtils-BMeqkJ5g-BI-1SnNn.js";import{o as C}from"./FieldsIndex-HmzMbJQG-B1ITYMbz.js";import{i as ie}from"./fieldType-CD2CL2hr-D07779A5.js";import"./main-Cp6FG-iA.js";import"./OptimizedFeature-EIithYlr-Cq64mIT3.js";import"./OptimizedFeatureSet-DfZGBuxJ-C08BOAgi.js";import"./BoundsStore--N6o1xkF-C87L2PEk.js";import"./PooledRBush-DbfAmeLn-Dz85-MnK.js";import"./quickselect-DHTstthl-Ds_Aj0x5.js";import"./timeSupport-jPViR5jn-apl4Qtps.js";import"./optimizedFeatureQueryEngineAdapter-DFdaawxC-BlhaHVy_.js";import"./projection-BA9M1R7d-C5weT4We.js";import"./projectBuffer-CvCBvJ6W-DrUyDECL.js";import"./normalizeUtils-Bxmy9MNI-BQqaAqXk.js";import"./normalizeUtilsCommon-CRJlkfEA-C8fnSlfw.js";import"./utils-9sQxfkoa-DQSLw7Pa.js";import"./utils-Bq23Xwmj-ayLC1AfK.js";import"./json-BI97KiBB-Ce5cWfI2.js";import"./LRUCache-C3erQTWv-QSuzJC_8.js";import"./WhereClause-DxwoyBMS-CZJohqjx.js";import"./TimeOnly-DSMefxKy-mvUspclV.js";import"./UnknownTimeZone-C--TOcPG-LMAhLg5Z.js";import"./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js";import"./quantizationUtils-bJy1cRwp-F6VPkfIl.js";import"./utils-HtkT8Fn3-CJzVMirU.js";import"./TimeExtent-Cn0Jofqr-COXge9ax.js";import"./heatmapUtils-seiMkkkR-CJhAzdAG.js";import"./vec42-D8CJyqHG-DnfLTeQH.js";import"./common-CYWrYyJl-E8-sukrT.js";import"./vec4f64-hf2nxvhQ-CaAr8PTM.js";import"./utils-DyydRFHu-D3eIVUhu.js";import"./Basemap-BEqqSTw9-ZlVMFK6x.js";import"./loadAll-e978YItg-BZ-ioEqO.js";import"./PortalItem-CctGdnxF-CvISlx3T.js";import"./writeUtils-D5qlLkwk-CPP0zvEW.js";import"./mat4f32-CiZjBg9k-CUm34GoR.js";import"./mat4-DX7gBViE-CrCJSnkw.js";import"./utils-tNxq3jkf-CUwwCDL6.js";import"./ClassBreaksDefinition-bYRgYgPp-CXagko9O.js";import"./Scheduler-B7UX7Wr5-BcnVbZsF.js";import"./signal-CETehA7D-CfCuhORb.js";import"./date-Cqvy-TgA-DIf-QFLz.js";import"./capabilities-Cjn77swe-Y9lFlGVh.js";const se={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class tt{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[],[i]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),r=U(i,{geometryType:e.geometryType}),l=e.fields||r.fields||[],p=e.hasZ!=null?e.hasZ:r.hasZ,d=r.geometryType;let c=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let a=e.timeInfo;l===r.fields&&r.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});const o=new C(l);let u=o.get(c);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,c=u.name):(u={alias:c,name:c,type:r.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},l.unshift(u));const y={};for(const n of l){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:n});if(!ie.jsonValues.includes(n.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n});if(n.name!==u.name){const g=A(n);g!==void 0&&(y[n.name]=g)}n.length==null&&(n.length=Z(n))}if(a){if(a.startTimeField){const n=o.get(a.startTimeField);n?(a.startTimeField=n.name,n.type="esriFieldTypeDate"):a.startTimeField=null}if(a.endTimeField){const n=o.get(a.endTimeField);n?(a.endTimeField=n.name,n.type="esriFieldTypeDate"):a.endTimeField=null}if(a.trackIdField){const n=o.get(a.trackIdField);n?a.trackIdField=n.name:(a.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:a}}))}a.startTimeField||a.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:a}}),a=null)}const m=d?ee(d):void 0,w=o.dateFields.length?{timeZoneIANA:Q}:null,f={warnings:s,featureErrors:[],layerDefinition:{...se,drawingInfo:m??void 0,templates:K(y),extent:void 0,geometryType:d,objectIdField:c,fields:l,hasZ:!!p,timeInfo:a,dateFieldsTimeReference:w}};this._queryEngine=new J({fieldsIndex:C.fromLayerJSON({fields:l,timeInfo:a,dateFieldsTimeReference:w}),geometryType:d,hasM:!1,hasZ:p,objectIdField:c,spatialReference:h,timeInfo:a,featureStore:new B({geometryType:d,hasM:!1,hasZ:p})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=X(y,c);const x=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const O=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(O);const{fullExtent:D,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=D,S){const{start:n,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[n,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([te(t,s),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=$(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const r=this._normalizeFeatures(i);r&&this._queryEngine.featureStore.addMany(r)},i=>{this._queryEngine.featureStore.clear(),v(i)||G.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:s}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,r=V(e,{geometryType:t,hasZ:s,objectIdField:i});if(!P(this._queryEngine.spatialReference,_))for(const l of r)l.geometry!=null&&(l.geometry=z(b(N(l.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,i=(await M(t??"",{responseType:"json",query:{...s},signal:e})).data;return W(i),i}_normalizeFeatures(e,t){const{objectIdField:s,fieldsIndex:i}=this._queryEngine,r=[];for(const l of e){const p=this._createDefaultAttributes(),d=T(i,p,l.attributes,!0);d?t?.push(d):(this._assignObjectId(p,l.attributes,!0),l.attributes=p,l.objectId=p[s],r.push(l))}return r}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),i?.length){for(const d of i)r.deleteResults.push(j(d));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:l,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();return{extent:l,timeExtent:p,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:l,objectIdField:p,spatialReference:d,featureStore:c,fieldsIndex:h}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&i!==R(o.geometry)){s.push(F("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),y=T(h,u,o.attributes);if(y)s.push(y);else{if(this._assignObjectId(u,o.attributes),o.attributes=u,o.uid!=null){const m=o.attributes[p];e.uidToObjectId[o.uid]=m}if(o.geometry!=null){const m=o.geometry.spatialReference??d;o.geometry=b(k(o.geometry,m),m,d)}a.push(o),s.push(j(o.attributes[p]))}}c.addMany(H([],a,i,l,r,p))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:l,spatialReference:p,featureStore:d,fieldsIndex:c}=this._queryEngine;for(const h of t){const{attributes:a,geometry:o}=h,u=a?.[l];if(u==null){e.push(F(`Identifier field ${l} missing`));continue}if(!d.has(u)){e.push(F(`Feature with object id ${u} missing`));continue}const y=L(d.getFeature(u),s,r,i);if(o!=null){if(s!==R(o)){e.push(F("Incorrect geometry type."));continue}const m=o.spatialReference??p;y.geometry=b(k(o,m),m,p)}if(a){const m=T(c,y.attributes,a);if(m){e.push(m);continue}}d.add(Y(y,s,r,i,l)),e.push(j(u))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{tt as default};
