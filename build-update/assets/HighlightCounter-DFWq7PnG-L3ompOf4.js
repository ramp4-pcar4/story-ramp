const r=new Set;class u{constructor(){this._idToCounters=new Map}get empty(){return this._idToCounters.size===0}addGroup(n,e){for(const o of n){let t=this._idToCounters.get(o);t||(t=new Map,this._idToCounters.set(o,t)),t.set(e,(t.get(e)||0)+1)}}deleteGroup(n,e){for(const o of n){const t=this._idToCounters.get(o);if(!t)continue;let s=t.get(e);if(s==null)return;s--,s>0?t.set(e,s):t.delete(e),t.size===0&&this._idToCounters.delete(o)}}getHighlightGroups(n){const e=this._idToCounters.get(n);if(!e)return r;const o=new Set;for(const[t,s]of e)s>0&&o.add(t);return o}ids(){return this._idToCounters.keys()}}export{u as i};