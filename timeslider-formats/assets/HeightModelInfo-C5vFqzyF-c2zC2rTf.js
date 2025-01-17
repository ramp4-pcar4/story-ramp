import{cr as c,cJ as p,v as s,S as l,ac as v,a0 as a,e as y,cK as m,cL as w,b0 as g,i as S}from"./story-BJQwqSiV.js";var n;const h=c()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=h.jsonValues.slice();p(u,"orthometric");const o=c()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let r=n=class extends y{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,i){return h.write(e,t,i)}readHeightModel(e,t,i){return h.read(e)||(i?.messages&&i.messages.push(f(e,{context:i})),null)}readHeightUnit(e,t,i){return o.read(e)||(i?.messages&&i.messages.push(d(e,{context:i})),null)}readHeightUnitService(e,t,i){return m(e)||o.read(e)||(i?.messages&&i.messages.push(d(e,{context:i})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new n({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const i=w(t);return new n({heightModel:e.heightModel,heightUnit:i??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new n;return t.read(e,{origin:"web-scene"}),t}};function d(e,t){return new g("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new g("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}s([l({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal"}}}})],r.prototype,"heightModel",void 0),s([v("web-scene","heightModel")],r.prototype,"writeHeightModel",null),s([a(["web-scene","service"],"heightModel")],r.prototype,"readHeightModel",null),s([l({type:o.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:o.jsonValues,write:o.write}}}})],r.prototype,"heightUnit",void 0),s([a("web-scene","heightUnit")],r.prototype,"readHeightUnit",null),s([a("service","heightUnit")],r.prototype,"readHeightUnitService",null),s([l({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"vertCRS",void 0),s([a("service","vertCRS",["vertCRS","ellipsoid","geoid"])],r.prototype,"readVertCRS",null),r=n=s([S("esri.geometry.HeightModelInfo")],r);const U=r;export{U as M};
