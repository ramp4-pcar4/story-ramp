import{c as t,d as r,j as s,a3 as G,a8 as m,s as y,Z as v}from"./story-u82SUoyt.js";let p=class extends y{constructor(e){super(e),this.properties=null}};t([r({json:{write:!0}})],p.prototype,"properties",void 0),p=t([s("esri.rest.knowledgeGraph.GraphObject")],p);const c=p;let i=class extends c{constructor(e){super(e),this.typeName=null,this.id=null}};t([r({type:String,json:{write:!0}})],i.prototype,"typeName",void 0),t([r({type:String,json:{write:!0}})],i.prototype,"id",void 0),i=t([s("esri.rest.knowledgeGraph.GraphNamedObject")],i);const h=i;let a=class extends h{constructor(e){super(e),this.layoutGeometry=null}};t([r({type:G,json:{write:!0}})],a.prototype,"layoutGeometry",void 0),a=t([s("esri.rest.knowledgeGraph.Entity")],a);const j=a;let n=class extends h{constructor(e){super(e),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};t([r({type:String,json:{write:!0}})],n.prototype,"originId",void 0),t([r({type:String,json:{write:!0}})],n.prototype,"destinationId",void 0),t([r({type:m,json:{write:!0}})],n.prototype,"layoutGeometry",void 0),n=t([s("esri.rest.knowledgeGraph.Relationship")],n);const x=n;let d=class extends c{constructor(e){super(e)}};d=t([s("esri.rest.knowledgeGraph.ObjectValue")],d);const k=d;let l=class extends y{constructor(e){super(e),this.path=null}};t([r({type:[c],json:{write:!0}})],l.prototype,"path",void 0),l=t([s("esri.rest.knowledgeGraph.Path")],l);const b=l;let u=class extends v{constructor(e){super(e),this.openCypherQuery=""}};t([r()],u.prototype,"openCypherQuery",void 0),u=t([s("esri.rest.knowledgeGraph.GraphQuery")],u);const w=u;let o=class extends w{constructor(e){super(e),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};t([r()],o.prototype,"bindParameters",void 0),t([r()],o.prototype,"bindGeometryQuantizationParameters",void 0),t([r()],o.prototype,"outputQuantizationParameters",void 0),t([r()],o.prototype,"outputSpatialReference",void 0),t([r()],o.prototype,"provenanceBehavior",void 0),o=t([s("esri.rest.knowledgeGraph.GraphQueryStreaming")],o);const Q=o;export{k as b,x as g,b as j,j as w,Q as x};
