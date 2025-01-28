import{aa as B,e as g,v as e,S as r,i as y,bG as h,aK as R,bz as d,cr as O,aE as M,a1 as N,J as x,af as V,g as I,dK as j}from"./story-DleBxxVb.js";import{Z as S}from"./queryUtils-Brxu6254-CK1gVI43.js";import{m as Z,a as L,s as $}from"./Query-BrwMGK8U-BZDRsLrY.js";import"./main-DiASSDZe.js";import"./projection-BA9M1R7d-CrV8atXF.js";import"./projectBuffer-CvCBvJ6W-BeU8pcSm.js";import"./normalizeUtils-Bxmy9MNI-BW2nI3WG.js";import"./normalizeUtilsCommon-CRJlkfEA-c1zNaJAb.js";import"./utils-9sQxfkoa-I4lFhn84.js";import"./utils-Bq23Xwmj-B12PcRDJ.js";import"./json-BI97KiBB-Ce5cWfI2.js";import"./Field-C6hA1tZj-Cmd26w1d.js";import"./fieldType-CD2CL2hr-C9KcS8M7.js";import"./TimeExtent-Cn0Jofqr-DIyoqlfS.js";let l=class extends B(g){constructor(t){super(t),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};e([r({type:String,json:{write:!0}})],l.prototype,"alias",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"expression",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],l.prototype,"responseType",void 0),l=e([y("esri.rest.support.BinParametersAttributes")],l);const w=l;l.from=h(l);const K=new R({naturalLog:"natural-log",squareRoot:"square-root"});let s=class extends B(g){constructor(t){super(t),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};e([r({type:String,json:{write:!0}})],s.prototype,"expression",void 0),e([r({type:String,json:{name:"onField",write:!0}})],s.prototype,"field",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"firstDayOfWeek",void 0),e([r({type:String,json:{write:!0}})],s.prototype,"hideUpperBound",void 0),e([r({type:w,json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(t,i)=>{t.field!=null&&(i.splitByField=t.field),t.expression!=null&&(i.splitBy=t.expression),t.alias!=null&&(i.splitByAlias=t.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(t,i)=>new w({field:i.splitByField,expression:i.splitBy,alias:i.splitByAlias})}}})],s.prototype,"splitByAttributes",void 0),e([r({type:w,json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(t,i)=>{t.field!=null&&(i.stackByField=t.field),t.expression!=null&&(i.stackBy=t.expression),t.alias!=null&&(i.stackByAlias=t.alias),t.responseType!=null&&(i.jsonStyle=t.responseType)},overridePolicy(){return{enabled:this.stackByAttributes?.field!=null||this.stackByAttributes?.expression!=null}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(t,i)=>new w({field:i.stackByField,expression:i.stackBy,alias:i.stackByAlias,responseType:i.jsonStyle})}}})],s.prototype,"stackByAttributes",void 0),e([d(K)],s.prototype,"transformation",void 0),s=e([y("esri.rest.support.BinParametersBase")],s);const f=s,H=O()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),T="percent-of-total",z="field",q=t=>{let i=class extends t{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let o=this._get("normalizationType");const v=!!this.normalizationField,b=this.normalizationTotal!=null;return v||b?(o=v&&z||b&&T||null,v&&b&&N.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):o!==z&&o!==T||(o=null),o}set normalizationType(o){this._set("normalizationType",o)}};return e([r({type:String,json:{name:"parameters.normalizationField",write:!0}})],i.prototype,"normalizationField",void 0),e([r({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],i.prototype,"normalizationMaxValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],i.prototype,"normalizationMinValue",void 0),e([r({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],i.prototype,"normalizationTotal",void 0),e([d(H,{name:"parameters.normalizationType"})],i.prototype,"normalizationType",null),i=e([y("esri.rest.support.NormalizationBinParametersMixin")],i),i};function A(t,i,o){j(o,t instanceof Date?t.getTime():t,i)}let p=class extends q(f){constructor(t){super(t),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};e([r({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],p.prototype,"bins",void 0),e([r({json:{name:"parameters.end",write:{writer:A}}})],p.prototype,"end",void 0),e([r({json:{name:"parameters.start",write:{writer:A}}})],p.prototype,"start",void 0),e([d({autoIntervalBin:"auto-interval"},{readOnly:!0})],p.prototype,"type",void 0),p=e([y("esri.rest.support.AutoIntervalBinParameters")],p);const U=p;p.from=h(p);const _=O()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let m=class extends B(g){constructor(t){super(t),this.value=null,this.units=null}};e([r({type:Number,json:{name:"number",write:!0}})],m.prototype,"value",void 0),e([d(_,{name:"unit"})],m.prototype,"units",void 0),m=e([y("esri.rest.support.DateBinTimeInterval")],m);const k=m;m.from=h(m);function F(t,i,o){j(o,typeof t=="string"?t:t?.getTime(),i)}function P(t,i){const o=t.parameters[i];return o?typeof o=="string"?o:new Date(o):null}let a=class extends f{constructor(t){super(t),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,i)=>P(i,"end")},write:{writer:F}}})],a.prototype,"end",void 0),e([r({type:k,json:{name:"parameters",write:!0}})],a.prototype,"interval",void 0),e([r({type:k,json:{name:"parameters.offset",write:!0}})],a.prototype,"offset",void 0),e([r({cast:t=>t?typeof t=="string"?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,i)=>P(i,"start")},write:{writer:F}}})],a.prototype,"start",void 0),e([d({dateBin:"date"},{readOnly:!0})],a.prototype,"type",void 0),a=e([y("esri.rest.support.DateBinParameters")],a);const G=a;a.from=h(a);function J(t){return t[0]instanceof Date}function W(t,i,o){j(o,t&&J(t)?t.map(v=>v.getTime()):t,i)}let c=class extends f{constructor(t){super(t),this.boundaries=null,this.type="fixed-boundaries"}};e([r({json:{name:"parameters.boundaries",write:{writer:W}}})],c.prototype,"boundaries",void 0),e([d({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],c.prototype,"type",void 0),c=e([y("esri.rest.support.FixedBoundariesBinParameters")],c);const C=c;c.from=h(c);function D(t,i,o){j(o,t instanceof Date?t.getTime():t,i)}let u=class extends q(f){constructor(t){super(t),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};e([r({json:{name:"parameters.end",write:{writer:D}}})],u.prototype,"end",void 0),e([r({type:Number,json:{name:"parameters.interval",write:!0}})],u.prototype,"interval",void 0),e([r({json:{name:"parameters.start",write:{writer:D}}})],u.prototype,"start",void 0),e([d({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],u.prototype,"type",void 0),u=e([y("esri.rest.support.FixedIntervalBinParameters")],u);const E=u;u.from=h(u);const Q=new R({asc:"ascending",desc:"descending"}),X={base:f,key:"type",typeMap:{"auto-interval":U,date:G,"fixed-boundaries":C,"fixed-interval":E}};let n=class extends B(g){constructor(t){super(t),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(t){this._set("outTimeZone",t),t&&!M(t)&&N.getLogger(this).warn("#outTimeZone",`the parsed value '${t}' may not be a valid IANA time zone`)}};e([r({types:X,json:{name:"bin",write:!0}})],n.prototype,"binParameters",void 0),e([d(Q)],n.prototype,"binOrder",void 0),e([r({type:Boolean,json:{write:!0}})],n.prototype,"cacheHint",void 0),e([r({json:{write:!0}})],n.prototype,"datumTransformation",void 0),e([r({type:x,json:{name:"defaultSR",write:!0}})],n.prototype,"defaultSpatialReference",void 0),e([r({type:Number,json:{write:{overridePolicy:t=>({enabled:t>0})}}})],n.prototype,"distance",void 0),e([r({types:V,json:{read:I,write:!0}})],n.prototype,"geometry",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"lowerBoundaryAlias",void 0),e([r({type:x,json:{name:"outSR",write:!0}})],n.prototype,"outSpatialReference",void 0),e([r({type:[Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],n.prototype,"outStatistics",void 0),e([r({value:null,json:{name:"outTimeReference",read:{reader:t=>t.ianaTimeZone},write:{writer:(t,i,o)=>{t&&(i[o]={ianaTimeZone:t})}}}})],n.prototype,"outTimeZone",null),e([r({type:L,json:{write:!0}})],n.prototype,"quantizationParameters",void 0),e([r({type:Boolean,json:{write:!0}})],n.prototype,"returnDistinctValues",void 0),e([d($,{name:"spatialRel"})],n.prototype,"spatialRelationship",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"upperBoundaryAlias",void 0),e([r({type:String,json:{read:S.read,write:{writer:S.write,overridePolicy(t){return{enabled:t!=null&&this.distance!=null&&this.distance>0}}}}})],n.prototype,"units",void 0),e([r({type:String,json:{write:!0}})],n.prototype,"where",void 0),n=e([y("esri.rest.support.BinsQuery")],n);const mt=n;n.from=h(n);export{mt as default};
