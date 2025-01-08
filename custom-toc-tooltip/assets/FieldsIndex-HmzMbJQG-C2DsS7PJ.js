import{cg as N,ch as S,ci as y,cj as _,ck as b,a1 as B,o as q,cl as h,cm as u,b_ as z,an as J,c7 as O,cn as L,co as $,cp as D,cq as c}from"./story-CqzOZAFN.js";import{t as R}from"./UnknownTimeZone-C--TOcPG-DVvEt3tW.js";function I(s){return"timeZone"in s}function x(s){return"timeZone"in s}function C(s){return"dateFieldsTimeZone"in s}const j=new Map;let A=class m{static fromJSON(e){return new m(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new m(e.fields??[],T(e))}static fromLayerJSON(e){return new m(e.fields??[],T(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const i of this.fields){const r=i?.name,o=g(r);if(r&&o){const l=a(r);this._fieldsMap.set(r,i),this._fieldsMap.set(l,i),this._normalizedFieldsMap.set(o,i),n.push(`${l}:${i.type}:${this._timeZoneByFieldName?.get(r)}`),N(i)?(this.dateFields.push(i),this._dateFieldsSet.add(i)):S(i)&&(this._numericFieldsSet.add(i),this.numericFields.push(i)),y(i)||_(i)||(i.editable=i.editable==null||!!i.editable,i.nullable=i.nullable==null||!!i.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)y(e)||_(e)||e.nullable||b(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return this.get(e)!=null}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(a(e))??this._normalizedFieldsMap.get(g(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&typeof e!="string"?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):t.type==="date"||t.type==="esriFieldTypeDate"?(B.getLogger("esri.layers.support.FieldsIndex").error(new q("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),h):Z.has(t.type)?u:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u?R.instance:t===h?z.utcInstance:J(j,t,()=>O.create(t)):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return L(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map(e=>$(e)?e.toJSON():e),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}};function a(s){return s.trim().toLowerCase()}function g(s){return D(s)?.toLowerCase()??""}const Z=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function T(s){const e=new Map;if(!s.fields)return e;const t=s.datesInUnknownTimezone===!0,{timeInfo:n,editFieldsInfo:i}=s,r=(n?"startField"in n?n.startField:n.startTimeField:"")??"",o=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l=C(s)?s.dateFieldsTimeZone??null:s.dateFieldsTimeReference?c(s.dateFieldsTimeReference):null,F=i?I(i)?i.timeZone??l:i.dateFieldsTimeReference?c(i.dateFieldsTimeReference):l??h:null,p=n?x(n)?n.timeZone??l:n.timeReference?c(n.timeReference):l:null,w=new Map([[a(i?.creationDateField??""),F],[a(i?.editDateField??""),F],[a(r),p],[a(o),p]]);for(const{name:d,type:f}of s.fields)if(Z.has(f))e.set(d,u);else if(f!=="date"&&f!=="esriFieldTypeDate")e.set(d,null);else if(t)e.set(d,u);else{const M=w.get(a(d??""))??l;e.set(d,M)}return e}export{A as o};
