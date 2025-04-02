import{p as h,b as u,a as m}from"./themeUtils-YjM7iIiX-ClrfYEsv.js";import{c as g}from"./observers-BigwqTsw-_8jCS05y.js";import{f as p,o as b,r as w}from"./loadable-DbNDKH4r-cr3qSQ-V.js";import"./story-OWO1toEx.js";import"./main-Cp6FG-iA.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";const c={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},v=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}",y=v,f=h(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=g("mutation",()=>this.updateFlowProps()),this.getFlowDirection=(t,e)=>{const o=t>1;return!(t&&e>1)&&!o?null:e<t?"retreating":"advancing"},this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:o}=this,s=Array.from(e.querySelectorAll(`calcite-flow-item${t?`,${t}`:""}`)).filter(i=>i.closest("calcite-flow")===e),n=o.length,a=s.length,r=s[a-1],l=s[a-2];if(a&&r&&s.forEach(i=>{i.showBackButton=i===r&&a>1,i.hidden=i!==r}),l&&(l.menuOpen=!1),this.items=s,n!==a){const i=this.getFlowDirection(n,a);this.itemCount=a,this.flowDirection=i}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const o=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await o.call(e)}catch{return}return e.remove(),e}async setFocus(){await p(this);const{items:t}=this;return t[t.length-1]?.setFocus()}connectedCallback(){this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){b(this)}componentDidLoad(){w(this)}disconnectedCallback(){this.itemMutationObserver?.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[c.frame]:!0,[c.frameAdvancing]:t==="advancing",[c.frameRetreating]:t==="retreating"};return m("div",{key:"01fbee965d48cb54fa5bd1b53a3435538df84332",class:e},m("slot",{key:"495880eceeb04387dd1352aa00337f037ab0636c"}))}get el(){return this}static get style(){return y}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){typeof customElements>"u"||["calcite-flow"].forEach(t=>{switch(t){case"calcite-flow":customElements.get(t)||customElements.define(t,f);break}})}d();const D=f,E=d;export{D as CalciteFlow,E as defineCustomElement};
