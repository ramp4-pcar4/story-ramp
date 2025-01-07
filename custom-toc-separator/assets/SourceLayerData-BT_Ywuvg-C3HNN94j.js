import{g as l}from"./GeometryUtils-NHgB9gGQ-Ds_R1Wcb.js";var g;(function(c){c[c.moveTo=1]="moveTo",c[c.lineTo=2]="lineTo",c[c.close=7]="close"})(g||(g={}));class m{constructor(e,t,o=0){this.values={},this._geometry=void 0,this._pbfGeometry=null,this.featureIndex=o;const s=t.keys,u=t.values,r=e.asUnsafe();for(;r.next();)switch(r.tag()){case 1:this.id=r.getUInt64();break;case 2:{const i=r.getMessage().asUnsafe(),a=this.values;for(;!i.empty();){const n=i.getUInt32(),h=i.getUInt32();a[s[n]]=u[h]}i.release();break}case 3:this.type=r.getUInt32();break;case 4:this._pbfGeometry=r.getMessage();break;default:r.skip()}}getGeometry(e){if(this._geometry!==void 0)return this._geometry;if(!this._pbfGeometry)return null;const t=this._pbfGeometry.asUnsafe();let o,s;this._pbfGeometry=null,e?e.reset(this.type):o=[];let u,r=g.moveTo,i=0,a=0,n=0;for(;!t.empty();){if(i===0){const h=t.getUInt32();r=7&h,i=h>>3}switch(i--,r){case g.moveTo:a+=t.getSInt32(),n+=t.getSInt32(),e?e.moveTo(a,n):o&&(s&&o.push(s),s=[],s.push(new l(a,n)));break;case g.lineTo:a+=t.getSInt32(),n+=t.getSInt32(),e?e.lineTo(a,n):s&&s.push(new l(a,n));break;case g.close:e?e.close():s&&!s[0].equals(a,n)&&s.push(s[0].clone());break;default:throw t.release(),new Error("Invalid path operation")}}return e?u=e.result():o&&(s&&o.push(s),u=o),t.release(),this._geometry=u,u}}class p{constructor(e){this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=e.clone();const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(p._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}}export{m as f,p as g};
