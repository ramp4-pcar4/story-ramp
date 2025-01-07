import{v as i,S as s,a0 as x,ac as u,i as S,aK as C,dN as j,ee as I,ef as B,eg as h,e as P,eh as N,ei as $,P as d,o as D,a1 as G}from"./story-OUarUCIt.js";import{p as g,$ as M,u as O,t as V,b as z,m as J}from"./labelUtils-BW14kBqX-DeXQjA1z.js";var m;let p=m=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?g(r.value):e}writeExpression(e,r,n){this.value!=null&&(e=g(this.value)),e!=null&&(r[n]=e)}clone(){return new m({expression:this.expression,title:this.title,value:this.value})}};i([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),i([x("expression",["expression","value"])],p.prototype,"readExpression",null),i([u("expression")],p.prototype,"writeExpression",null),i([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),i([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=m=i([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var f;const v=new C({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function w(e,r,n){return{enabled:!N(n?.layer)}}function E(e){return!e||e.origin!=="service"&&e.layer?.type!=="map-image"}function R(e){return e?.type==="map-image"}function A(e){return!!R(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function U(e){return E(e)||A(e?.layer)}let l=f=class extends P{static evaluateWhere(e,r){const n=(t,o,a)=>{switch(o){case"=":return t==a;case"<>":return t!=a;case">":return t>a;case">=":return t>=a;case"<":return t<a;case"<=":return t<=a}return!1};try{if(e==null)return!0;const t=e.split(" ");if(t.length===3)return n(r[t[0]],t[1],t[2]);if(t.length===7){const o=n(r[t[0]],t[1],t[2]),a=t[3],c=n(r[t[4]],t[5],t[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=$,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const n=r.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,r,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=M(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const t=O(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}}e!=null&&(r[n]=e)}writeLabelExpressionInfo(e,r,n,t){if(e==null&&this.labelExpression!=null&&E(t))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(t);o.expression&&(r[n]=o)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return V(this)}getLabelExpressionArcade(){return z(this)}getLabelExpressionSingleField(){return J(this)}hash(){return JSON.stringify(this)}clone(){return new f({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:d(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:d(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};i([s({type:String,json:{write:!0}})],l.prototype,"name",void 0),i([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:w}}}}})],l.prototype,"allowOverrun",void 0),i([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:w}}}}})],l.prototype,"deconflictionStrategy",void 0),i([s({type:String,json:{write:{overridePolicy(e,r,n){return this.labelExpressionInfo&&n?.origin==="service"&&A(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],l.prototype,"labelExpression",void 0),i([x("labelExpression")],l.prototype,"readLabelExpression",null),i([u("labelExpression")],l.prototype,"writeLabelExpression",null),i([s({type:L,json:{write:{overridePolicy:(e,r,n)=>U(n)?{allowNull:!0}:{enabled:!1}}}})],l.prototype,"labelExpressionInfo",void 0),i([u("labelExpressionInfo")],l.prototype,"writeLabelExpressionInfo",null),i([s({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],l.prototype,"labelPlacement",void 0),i([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"labelPosition",void 0),i([s({type:Number})],l.prototype,"maxScale",void 0),i([u("maxScale")],l.prototype,"writeMaxScale",null),i([s({type:Number})],l.prototype,"minScale",void 0),i([u("minScale")],l.prototype,"writeMinScale",null),i([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],l.prototype,"repeatLabel",void 0),i([s({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],l.prototype,"repeatLabelDistance",void 0),i([s({types:I,json:{origins:{"web-scene":{types:B,write:h,default:null}},write:h,default:null}})],l.prototype,"symbol",void 0),i([s({type:Boolean,json:{write:!0}})],l.prototype,"useCodedValues",void 0),i([s({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=f=i([S("esri.layers.support.LabelClass")],l);const Z=l,y=()=>G.getLogger("esri.layers.support.labelingInfo"),F=/\[([^[\]]+)\]/gi;function q(e,r,n){return e?e.map(t=>{const o=new Z;if(o.read(t,n),o.labelExpression){const a=r.fields||r.layerDefinition?.fields||this.fields;o.labelExpression=o.labelExpression.replaceAll(F,(c,b)=>`[${k(b,a)}]`)}return o}):null}function k(e,r){if(!r)return e;const n=e.toLowerCase();for(let t=0;t<r.length;t++){const o=r[t].name;if(o.toLowerCase()===n)return o}return e}const H={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function Q(e,r){const n=[];for(const t of e){const o=t.labelPlacement,a=H[r];if(!t.symbol)return y().warn("No ILabelClass symbol specified."),[];if(!a)return y().error(new D("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),[];if(a.includes(o))n.push(t);else{const c=a[0];o&&y().warn(`Found invalid label placement type ${o} for ${r}. Defaulting to ${c}`);const b=t.clone();b.labelPlacement=c,n.push(b)}}return n}export{Z as C,Q,q};
