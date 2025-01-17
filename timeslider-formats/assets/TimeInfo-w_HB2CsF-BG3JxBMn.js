import{cr as y,aa as u,e as m,v as t,bz as T,S as l,i as d,a0 as r,ac as o,bQ as c}from"./story-BJQwqSiV.js";import{E as I,k as p}from"./TimeExtent-Cn0Jofqr-xF8LFpvf.js";const w=y()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});let s=class extends u(m){constructor(n){super(n),this.unit="milliseconds",this.value=0}toMilliseconds(){return I(this.value,this.unit,"milliseconds")}};t([T(w,{nonNullable:!0})],s.prototype,"unit",void 0),t([l({type:Number,json:{write:!0},nonNullable:!0})],s.prototype,"value",void 0),s=t([d("esri.time.TimeInterval")],s);const v=s;function a(n,e){return v.fromJSON({value:n,unit:e})}let i=class extends u(m){constructor(n){super(n),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(n,e){return e.timeExtent&&Array.isArray(e.timeExtent)&&e.timeExtent.length===2?p.fromArray(e.timeExtent):null}writeFullTimeExtent(n,e){n?.start!=null&&n.end!=null?e.timeExtent=n.toArray():e.timeExtent=null}readInterval(n,e){return e.timeInterval&&e.timeIntervalUnits?a(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?a(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(n,e){e.timeInterval=n?.toJSON().value??null,e.timeIntervalUnits=n?.toJSON().unit??null}};t([l({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],i.prototype,"cumulative",void 0),t([l({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],i.prototype,"endField",void 0),t([l({type:p,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"fullTimeExtent",void 0),t([r("fullTimeExtent",["timeExtent"])],i.prototype,"readFullTimeExtent",null),t([o("fullTimeExtent")],i.prototype,"writeFullTimeExtent",null),t([l({type:Boolean,json:{write:!0}})],i.prototype,"hasLiveData",void 0),t([l({type:v,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"interval",void 0),t([r("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],i.prototype,"readInterval",null),t([o("interval")],i.prototype,"writeInterval",null),t([l({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],i.prototype,"startField",void 0),t([l(c("timeReference",!0))],i.prototype,"timeZone",void 0),t([l({type:String,json:{write:{enabled:!0,allowNull:!0}}})],i.prototype,"trackIdField",void 0),t([l({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],i.prototype,"useTime",void 0),t([l({type:[Date],json:{read:!1}})],i.prototype,"stops",void 0),i=t([d("esri.layers.support.TimeInfo")],i);const U=i;export{v as r,w as v,U as w};
