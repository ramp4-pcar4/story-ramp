import{v as e,S as o,ar as p,bB as c,ac as d,i as n,cr as v,aa as y,e as i,bz as h}from"./story-BJQwqSiV.js";var l;let t=l=class extends i{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,a,u){a[u]=r??0}clone(){return new l({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};e([o({type:p,json:{type:[c],write:!0}})],t.prototype,"color",void 0),e([o({type:String,json:{write:!0}})],t.prototype,"label",void 0),e([o({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],t.prototype,"value",void 0),e([d("value")],t.prototype,"writeValue",null),t=l=e([n("esri.renderers.visualVariables.support.ColorStop")],t);const g=t,w=v()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let s=class extends y(i){constructor(r){super(r),this.title=null,this.order=null}};e([o({type:String,json:{write:!0}})],s.prototype,"title",void 0),e([h(w)],s.prototype,"order",void 0),s=e([n("esri.renderers.support.RendererLegendOptions")],s);const V=s;export{g as h,V as w};
