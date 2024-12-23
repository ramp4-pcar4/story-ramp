import{rf as w,re as F,z as I,aZ as U,fx as M,cY as V,aU as Q,ob as D,iT as N,T as E,a_ as R,c as t,d as r,rs as O,h0 as Z,rF as q,j as _,lG as G,rG as k,rH as L,rk as H,rI as $,am as g,rt as z,rJ as K,rK as X,rL as J,rM as Y,rN as W,rO as ee,rm as te,oq as re,rP as ie,rl as oe,rQ as ne,rR as ae,rS as se,rT as le,rU as pe,rg as de,y as ye,B as ue,$ as he,ro as ce,rp as me,C as fe,q as f,k0 as ge,h as ve,cU as be,rV as we,aY as h,rW as Fe,rX as Ie,rY as Oe,L as _e,o as Te,ae as j,ai as x,M as c,cX as Se,rx as Ee,rZ as Le,l4 as je,os as xe,rv as Pe}from"./story-u82SUoyt.js";import{k as P}from"./utils-DN5yax8A-BldUqjOY.js";import Ce from"./FeatureLayerSource-Boc5do0a-CD91P1VZ.js";import{p as Ve}from"./fetchService-DhIYtzwD-BirXnlBq.js";import"./main-CmCzAIzx.js";import"./MeshLocalVertexSpace-DkOk3052-DA9z6oPs.js";import"./meshVertexSpaceUtils-VVkhP71b-BcqfT28l.js";import"./External-BllXL05R-BYhHZ9lu.js";import"./MeshTransform-BFYjlBv2-1cNhPh-U.js";import"./mat4f64-Dn1WEGBx-C99QVUMW.js";import"./quat-Xt9oEsiT-Bb4pvhR4.js";import"./mat3f64-Dh9_zhFu-BIT-k8Dm.js";import"./quatf64-C16JxGFv-BKWK1F8U.js";import"./editingSupport-tOQy13o6-D7hPyNAV.js";import"./clientSideDefaults-DaxivApY-B8xV4T7A.js";import"./QueryEngineCapabilities-Gr588n9t-DjYb9CEb.js";import"./capabilities-Cjn77swe-Y9lFlGVh.js";let d=class extends w(F(I(c))){constructor(e){super(e),this._layerCache=new U(20,i=>i.destroy()),this._oidToReference=new M,this._layerToReference=new Map,this.legendEnabled=!0,this.layers=new V,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",({item:e})=>{e.parent=this}),this.layers.on("after-remove",({item:e})=>{e.parent=null}),Q(()=>this._orderBy,()=>{this._updateLayerSortValues(),this._sortAllLayers()})])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){return this.parent?this.parent.orderBy?.find(e=>!e.valueExpression&&e.field)??new D({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const i=this.parent.fieldsIndex.get(e.field),a=P(i?.toJSON().type,e.order==="descending"),n=P("esriFieldTypeOID",e.order==="descending");return(l,p)=>a(p.sortValue,l.sortValue)||n(p.objectId,l.objectId)}get fullExtent(){return this.parent?.fullExtent??null}get updating(){return N(this._oidToReference,({pending:e})=>e!=null)}acquireLayer(e){if(this.destroyed)return E();const i=this._getLayerReference(e);return i.count++,E(()=>{i.count--,i.count||this._destroyLayerReference(i)})}_getLayerReference(e){const i=e.getObjectId();return R(this._oidToReference,i,()=>{const a=e.getObjectId(),n=`${a}`,l=e.getAttribute(this.parent.itemSourceField),p=new Re(e,a,l),y=this._layerCache.pop(n);return y?(this._addLayer(p,y),p):(p.pending=this.parent.createLayerFromFootprint(e).then(u=>{p.count?this._addLayer(p,u):(this.destroyed||this._layerCache.get(n)||this._layerCache.put(n,u),p.layer=null)}).catch(()=>{}).finally(()=>{p.pending=null}),p)})}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,i){e.layer=i,i.persistenceEnabled=!1,this._layerToReference.set(i,e),this._updateLayerSortValue(e),this.layers.add(i),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort((e,i)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(i)))}};t([r()],d.prototype,"_orderBy",null),t([r({readOnly:!0})],d.prototype,"_referenceComparator",null),t([r(O)],d.prototype,"legendEnabled",void 0),t([r({type:["show","hide","hide-children"],json:{write:!0}})],d.prototype,"listMode",void 0),t([r({readOnly:!0})],d.prototype,"fullExtent",null),t([r({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),t([r({readOnly:!0})],d.prototype,"layers",void 0),t([r({type:Z,range:{min:0,max:50},json:{write:!0,default:10}})],d.prototype,"maximumVisibleSublayers",void 0),t([r(q)],d.prototype,"opacity",void 0),t([r({clonable:!1})],d.prototype,"parent",void 0),t([r({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"title",void 0),t([r({json:{read:!1}})],d.prototype,"type",void 0),t([r({readOnly:!0})],d.prototype,"updating",null),t([r({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),d=t([_("esri.layers.catalog.CatalogDynamicGroupLayer")],d);const A=d;class Re{constructor(i,a,n){this.footprint=i,this.objectId=a,this.itemSource=n,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=G(null)}get pending(){return this._pending.value}set pending(i){this._pending.value=i}}function qe(){const e=new je({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new xe({symbol:e})}let o=class extends w(k(F(I(c)))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),L(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",i=>this.emit("apply-edits",i)),this.parent.on("edits",i=>this.emit("edits",i)),this.parent.on("refresh",i=>this.emit("refresh",i))])}get apiKey(){return this.parent?.apiKey}get capabilities(){return this.parent?.capabilities}get customParameters(){return this.parent?.customParameters}get dateFieldsTimeZone(){return this.parent?.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this.parent?.datesInUnknownTimezone??!1}get definitionExpression(){return this.parent?.definitionExpression}get editingInfo(){return this.parent?.editingInfo}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get createQueryVersion(){return this.parent?.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){return this.parent?.displayField}get effectiveEditingEnabled(){return!1}get fields(){return this.parent?.fields}get fieldsIndex(){return this.parent?.fieldsIndex}get fullExtent(){return this.parent?.fullExtent}get geometryFieldsInfo(){return this.parent?.geometryFieldsInfo}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?.globalIdField}get hasM(){return this.parent?.hasM??!1}get hasZ(){return this.parent?.hasZ??!1}get objectIdField(){return this.parent?.objectIdField}get orderBy(){return this.parent?.orderBy??null}get outFields(){return this.parent?.outFields}get parsedUrl(){return this.parent?.parsedUrl??null}get preferredTimeZone(){return this.parent?.preferredTimeZone??null}set renderer(e){L(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):qe()}get returnM(){return this.parent?.returnM}get returnZ(){return this.parent?.returnZ}get source(){return this.parent?.source}get timeExtent(){return this.parent?.timeExtent}get timeInfo(){return this.parent?.timeInfo}get timeOffset(){return this.parent?.timeOffset}get typeIdField(){return this.parent?.typeIdField}get types(){return this.parent?.types}get useViewTime(){return this.parent?.useViewTime??!0}get version(){return this.parent?.version}async applyEdits(e,i){return await this.load(),this.parent.applyEdits(e,i)}createPopupTemplate(e){const i={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return H(i,e)}createQuery(){return this.parent?.createQuery()}getField(e){return this.parent?.getField(e)}getFieldDomain(e,i){return this.parent?.getFieldDomain(e,i)}async queryExtent(e,i){return await this.load(),this.parent.queryExtent(e,i)}async queryFeatures(e,i){return await this.load(),this.parent.queryFeatures(e,i)}async queryFeatureCount(e,i){return await this.load(),this.parent.queryFeatureCount(e,i)}async queryObjectIds(e,i){return await this.load(),this.parent.queryObjectIds(e,i)}};t([r($)],o.prototype,"attributeTableTemplate",void 0),t([r({readOnly:!0})],o.prototype,"apiKey",null),t([r({readOnly:!0})],o.prototype,"capabilities",null),t([r({readOnly:!0})],o.prototype,"customParameters",null),t([r()],o.prototype,"dateFieldsTimeZone",null),t([r({readOnly:!0})],o.prototype,"datesInUnknownTimezone",null),t([r({readOnly:!0})],o.prototype,"definitionExpression",null),t([r({readOnly:!0})],o.prototype,"editingInfo",null),t([r({readOnly:!0})],o.prototype,"effectiveCapabilities",null),t([r({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),t([r({readOnly:!0})],o.prototype,"createQueryVersion",null),t([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"displayField",null),t([r({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),t([r({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),t([r((()=>{const e=g(z);return e.json.origins["web-map"]={read:!1,write:!1},e})())],o.prototype,"elevationInfo",void 0),t([r({readOnly:!0})],o.prototype,"fields",null),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({type:K,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),t([r({readOnly:!0})],o.prototype,"fullExtent",null),t([r({readOnly:!0})],o.prototype,"geometryFieldsInfo",null),t([r({readOnly:!0})],o.prototype,"geometryType",null),t([r({readOnly:!0})],o.prototype,"globalIdField",null),t([r({readOnly:!0})],o.prototype,"hasM",null),t([r({readOnly:!0})],o.prototype,"hasZ",null),t([r({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),t([r({type:[X],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:J,write:!0}})],o.prototype,"labelingInfo",void 0),t([r(Y)],o.prototype,"labelsVisible",void 0),t([r(O)],o.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r((()=>{const e=g(W);return e.json.origins.service.read=!1,e})())],o.prototype,"maxScale",void 0),t([r((()=>{const e=g(ee);return e.json.origins.service.read=!1,e})())],o.prototype,"minScale",void 0),t([r({readOnly:!0})],o.prototype,"objectIdField",null),t([r(q)],o.prototype,"opacity",void 0),t([r({readOnly:!0})],o.prototype,"orderBy",null),t([r({readOnly:!0})],o.prototype,"outFields",null),t([r({clonable:!1})],o.prototype,"parent",void 0),t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r(te)],o.prototype,"popupEnabled",void 0),t([r({type:re,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0})],o.prototype,"preferredTimeZone",null),t([r({types:ie,json:{origins:{"web-scene":{types:oe}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,i){return{ignoreOrigin:this.originIdOf(i)<ne.PORTAL_ITEM}}}}})],o.prototype,"renderer",null),t([r({readOnly:!0})],o.prototype,"returnM",null),t([r({readOnly:!0})],o.prototype,"returnZ",null),t([r({readOnly:!0})],o.prototype,"source",null),t([r({readOnly:!0})],o.prototype,"timeExtent",null),t([r({readOnly:!0})],o.prototype,"timeInfo",null),t([r({readOnly:!0})],o.prototype,"timeOffset",null),t([r({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"title",void 0),t([r({json:{read:!1}})],o.prototype,"type",void 0),t([r({readOnly:!0})],o.prototype,"typeIdField",null),t([r({readOnly:!0})],o.prototype,"types",null),t([r({readOnly:!0})],o.prototype,"useViewTime",null),t([r({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),o=t([_("esri.layers.catalog.CatalogFootprintLayer")],o);const B=o,v=Pe();function Ae(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}function Be(e){return typeof e=="object"&&e!=null&&"url"in e}function Ue(e){if(e==null)return!0;const i=Object.keys(e);return!i.length||i.length===1&&i[0]==="id"}function C(e,i,a,n){const l=e.write({},n);Ue(l)||(i[a]=l)}let s=class extends ae(se(F(le(pe(w(de(ye(ue(he(I(ce(me(c))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new A({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new B({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new V([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new Ce({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const i=e!=null?e.signal:null,a=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(fe).then(async()=>{const{url:n,source:l,portalItem:p}=this;if(!n)throw new f("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.layerId==null){const u=await this._fetchFirstValidLayerId(i);if(u==null)throw new f("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:n});this.layerId=u}await l.load({signal:i});const{sourceJSON:y}=l;y&&(this.sourceJSON=y,this.read(y,{origin:"service",portalItem:p,portal:p?.portal,url:this.parsedUrl}))}).then(()=>{const n=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],l=n.filter(p=>!this.fieldsIndex.has(p));if(l.length)throw new f("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:n,missingFields:l})}).then(()=>ge(this,"load",e));return this.addResolvingPromise(a),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=ve(this.url);return e!=null&&this.layerId!=null&&(e.path=be(e.path,this.layerId.toString())),e}async applyEdits(e,i){return we(this,e,i)}on(e,i){return super.on(e,i)}async createLayerFromFootprint(e){const i=await this._createLayer(e);return this._configureLayer(i,e),this._layerToFootprint.set(i,e),i}createFootprintFromLayer(e){return this._layerToFootprint.get(e)?.clone()}createQuery(){const e=new h,i=this.capabilities?.query;e.returnGeometry=!0,i&&(e.compactGeometryEnabled=i.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=i.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:a,timeExtent:n}=this;return e.timeExtent=a!=null&&n!=null?n.offset(-a.value,a.unit):n||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return Fe(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){const a=i?.feature,n=this.getFeatureType(a);if(n){const l=n.domains&&n.domains[e];if(l&&l.type!=="inherited")return l}return this.getField(e)?.domain}async hasDataChanged(){return Ie(this)}async queryFeatures(e,i){const a=await this.load(),n=await a.source.queryFeatures(h.from(e)??a.createQuery(),i);if(n?.features)for(const l of n.features)l.layer=l.sourceLayer=a.footprintLayer;return n}async queryObjectIds(e,i){return(await this.load()).source.queryObjectIds(h.from(e)??this.createQuery(),i)}async queryFeatureCount(e,i){return(await this.load()).source.queryFeatureCount(h.from(e)??this.createQuery(),i)}async queryExtent(e,i){return(await this.load()).source.queryExtent(h.from(e)??this.createQuery(),i)}serviceSupportsSpatialReference(e){return this.loaded&&Oe(this,e)}read(e,i){if(super.read(e,i),e){const{footprintLayer:a,dynamicGroupLayer:n}=e;a&&this.footprintLayer.read(a,i),n&&this.dynamicGroupLayer.read(n,i)}}async _fetchFirstValidLayerId(e){const{data:i}=await _e(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(i?.layers))return i.layers.find(({type:a})=>this.supportedSourceTypes.has(a))?.id}async _createLayer(e){const i=e.getAttribute(this.itemSourceField);if(!i)throw new f("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const a=JSON.parse(i);if(Ae(a)){const{itemId:n,portalUrl:l}=a,p=Te(l),y=this.portalItem?.portal,u=j.getDefault();let m,T=!0;y&&x(l,y.url)?m=y:x(l,u.url)?m=u:(m=R(this._portals,p,()=>new j({url:p})),T=!1);const S=await c.fromPortalItem(new Se({id:n,portal:m}));return T||await b(S),S}return Be(a)?c.fromArcGISServerUrl({url:a.url}):new(await Ve.UnsupportedLayer())}_configureLayer(e,i){const a=i.getAttribute(this.itemNameField);a&&(e.title=a);const n=i.getAttribute(this.maxScaleField);n!=null&&"maxScale"in e&&(e.maxScale=n);const l=i.getAttribute(this.minScaleField);l!=null&&"minScale"in e&&(e.minScale=l)}};async function b(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,e.type==="group"&&await Promise.allSettled([...e.layers.map(i=>b(i)),...e.tables.map(i=>b(i))])}}t([r(O)],s.prototype,"legendEnabled",void 0),t([r({readOnly:!0})],s.prototype,"createQueryVersion",null),t([r({readOnly:!0})],s.prototype,"drawOrderField",void 0),t([r({type:A,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:C}}})],s.prototype,"dynamicGroupLayer",void 0),t([r({readOnly:!0})],s.prototype,"editingEnabled",null),t([r({readOnly:!0})],s.prototype,"effectiveEditingEnabled",null),t([r({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],s.prototype,"elevationInfo",void 0),t([r({...v.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],s.prototype,"fields",void 0),t([r(v.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],s.prototype,"floorInfo",void 0),t([r({type:B,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:C}}})],s.prototype,"footprintLayer",void 0),t([r(Ee)],s.prototype,"id",void 0),t([r({readOnly:!0})],s.prototype,"itemNameField",void 0),t([r({readOnly:!0})],s.prototype,"itemSourceField",void 0),t([r({readOnly:!0})],s.prototype,"itemTypeField",void 0),t([r({readOnly:!0})],s.prototype,"layers",void 0),t([r({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),t([r({readOnly:!0})],s.prototype,"maxScaleField",void 0),t([r({readOnly:!0})],s.prototype,"minScaleField",void 0),t([r({value:"CatalogLayer",type:["CatalogLayer"]})],s.prototype,"operationalLayerType",void 0),t([r({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],s.prototype,"orderBy",void 0),t([r(v.outFields)],s.prototype,"outFields",void 0),t([r({readOnly:!0})],s.prototype,"parsedUrl",null),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({json:{read:!1}})],s.prototype,"type",void 0),t([r({type:String})],s.prototype,"typeIdField",void 0),t([r({type:[Le]})],s.prototype,"types",void 0),s=t([_("esri.layers.CatalogLayer")],s);const rt=s;export{rt as default};
