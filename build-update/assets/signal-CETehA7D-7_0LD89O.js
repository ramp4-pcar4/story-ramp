import{dy as i,cU as a,cV as u}from"./story-_2qqwocf.js";class l{constructor(t,s){this._observable=new a,this._value=t,this._equalityFunction=s}get value(){return u(this._observable),this._value}set value(t){this._equalityFunction(t,this._value)||(this._value=t,this._observable.notify())}mutate(t){t(this._value),this._observable.notify()}}function n(e,t=i){return new l(e,t)}export{n as o};
