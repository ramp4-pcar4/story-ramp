import{cU as i,cV as e}from"./story-CeSwA6O5.js";class b{constructor(t){this._observable=new i,this._map=new Map(t)}get size(){return e(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(t){const s=this._map.delete(t);return s&&this._observable.notify(),s}entries(){return e(this._observable),this._map.entries()}forEach(t,s){e(this._observable),this._map.forEach((r,a)=>t.call(s,r,a,this),s)}get(t){return e(this._observable),this._map.get(t)}has(t){return e(this._observable),this._map.has(t)}keys(){return e(this._observable),this._map.keys()}set(t,s){return this._map.set(t,s),this._observable.notify(),this}values(){return e(this._observable),this._map.values()}[Symbol.iterator](){return e(this._observable),this._map[Symbol.iterator]()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}export{b as h};
