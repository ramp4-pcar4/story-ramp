import{p as o,b as n,W as l,a as t,D as c}from"./themeUtils-YjM7iIiX-yF3pxfku.js";import{l as r,p as h}from"./interactive-DqhNilgd-Bz8DWmfA.js";import{t as f}from"./resources4-Bi43yZeq-Ca3PT_gb.js";import"./story-C_BD4NO7.js";import"./main-C59lxR2D.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";const i={container:"container",heading:"heading"},p=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",m=p,a=o(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=l(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}componentDidRender(){r(this)}render(){const{disabled:e,heading:d}=this;return t(c,{key:"e1e0304c3d4fe02909fd0075de2e4f5ef806be39"},t(h,{key:"5fb0861fb58de90808e98b7061d3c906c822203c",disabled:e},t("tr",{key:"c77af78f937c3135601df2c4574b858662d5fcdb",class:i.container},t("td",{key:"f1ae6b9e09e78f87b814287f8eaeb0a105575c7a",class:i.heading,colSpan:f},d)),t("slot",{key:"7346d5d774173403910eddd35bf700ccd1437c4f",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return m}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function s(){typeof customElements>"u"||["calcite-list-item-group"].forEach(e=>{switch(e){case"calcite-list-item-group":customElements.get(e)||customElements.define(e,a);break}})}s();const D=a,S=s;export{D as CalciteListItemGroup,S as defineCustomElement};
