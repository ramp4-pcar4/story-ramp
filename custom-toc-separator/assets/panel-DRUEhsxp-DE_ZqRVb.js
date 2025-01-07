import{p as k,b as E,W as b,a as t,D as w}from"./themeUtils-YjM7iIiX-CpWzbU7H.js";import{G as r,V as C,g as z,A as x}from"./dom-N58V0tYi-DBU3jlah.js";import{l as H,p as F}from"./interactive-DqhNilgd-Bw4n2n3w.js";import{o as B,r as P,f as T}from"./loadable-DbNDKH4r-DyDwqoXd.js";import{c as M}from"./observers-BigwqTsw-BCNzxmob.js";import{_ as L,K as D,O,w as I}from"./action-menu-DTIJuZNc-CadEd7O7.js";import{K as j,q as K}from"./locale-Cn_GDVD_-CnEFMUdd.js";import{d as $,h as N,M as R,l as W}from"./t9n-C_hcZMZJ-DI6xkvhp.js";import{$ as _}from"./floating-ui-DKFFlLv3-elIRTcW0.js";import{m as U}from"./action-GCQoufcz-Db81jJpr.js";import{m as q}from"./icon-BXFbBbop-BKvGneFm.js";import{v as G}from"./loader-Ch7Jr16w-B4sW6aLS.js";import{c as V}from"./scrim-BscQh4v9-DzezRv_f.js";const n={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer",footerContent:"footer-content",footerActions:"footer-actions",footerStart:"footer-start",footerEnd:"footer-end"},S={close:"close",collapse:"collapse"},g={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},s={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},X=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`,Y=X,Z=k(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=b(this,"calcitePanelClose",6),this.calcitePanelToggle=b(this,"calcitePanelToggle",6),this.calcitePanelScroll=b(this,"calcitePanelScroll",6),this.resizeObserver=M("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex"))},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch{requestAnimationFrame(()=>{this.closed=!1});return}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=r(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=r(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=r(e)},this.handleActionBarSlotChange=e=>{const o=C(e).filter(a=>a?.matches("calcite-action-bar"));o.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!o.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=r(e)},this.handleFabSlotChange=e=>{this.hasFab=r(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=r(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=r(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=r(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=r(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=r(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=r(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{C(e)?.map(o=>{o.nodeName==="CALCITE-ALERT"&&(o.embedded=!0)})},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuFlipPlacements=void 0,this.menuOpen=!1,this.menuPlacement=_,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){j(this),$(this)}async componentWillLoad(){B(this),this.isClosed=this.closed,await N(this)}componentDidLoad(){P(this)}componentDidRender(){H(this)}disconnectedCallback(){K(this),R(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){W(this,this.effectiveLocale)}async setFocus(){await T(this),z(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:o,description:a,hasHeaderContent:i}=this,l=e?t(I,{class:n.heading,level:o},e):null,c=a?t("span",{class:n.description},a):null;return!i&&(l||c)?t("div",{class:n.headerContent,key:"header-content"},l,c):null}renderActionBar(){return t("div",{class:n.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:n.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[n.headerActionsStart]:!0,[n.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:o,closable:a,collapsed:i,collapseDirection:l,collapsible:c,hasMenuItems:p}=this,{collapse:d,expand:h,close:f}=o,m=[g.expand,g.collapse];l==="up"&&m.reverse();const u=c?t("calcite-action",{"aria-expanded":x(!i),"aria-label":d,icon:i?m[0]:m[1],id:S.collapse,onClick:this.collapse,scale:this.scale,text:d,title:i?h:d}):null,v=a?t("calcite-action",{"aria-label":f,icon:g.close,id:S.close,onClick:this.handleUserClose,scale:this.scale,text:f,title:f}):null,y=t("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),A=e||u||v||p;return t("div",{class:{[n.headerActionsEnd]:!0,[n.headerActions]:!0},hidden:!A,key:"header-actions-end"},y,this.renderMenu(),u,v)}renderMenu(){const{hasMenuItems:e,messages:o,menuOpen:a,menuFlipPlacements:i,menuPlacement:l}=this;return t("calcite-action-menu",{flipPlacements:i??["top","bottom"],hidden:!e,key:"menu",label:o.options,open:a,overlayPositioning:this.overlayPositioning,placement:l},t("calcite-action",{icon:g.menu,scale:this.scale,slot:L.trigger,text:o.options}),t("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:o,hasEndActions:a,closable:i,collapsible:l,hasMenuItems:c,hasActionBar:p}=this,d=this.renderHeaderContent(),h=e||!!d||o||a||l||i||c;return this.showHeaderContent=h,t("header",{class:n.header,hidden:!(h||p)},t("div",{class:{[n.headerContainer]:!0,[n.headerContainerBorderEnd]:p},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:o,hasFooterContent:a,hasFooterActions:i}=this,l=o||e||a||i;return t("footer",{class:n.footer,hidden:!l},t("div",{class:n.footerContent,hidden:!a},t("slot",{name:s.footer,onSlotchange:this.handleFooterSlotChange})),t("div",{class:n.footerStart,hidden:a||!o},t("slot",{name:s.footerStart,onSlotchange:this.handleFooterStartSlotChange})),t("div",{class:n.footerEnd,hidden:a||!e},t("slot",{name:s.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),t("div",{class:n.footerActions,hidden:a||!i},t("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return t("div",{class:n.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:n.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:s.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:n.contentTop,hidden:!this.hasContentTop},t("slot",{name:s.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:n.fabContainer,hidden:!this.hasFab},t("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:o,isClosed:a}=this,i=t("article",{key:"0f439dffdca536eb6973ac386b0566091249aee3","aria-busy":x(o),class:n.container,hidden:a,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),t("slot",{key:"alerts",name:s.alerts,onSlotchange:this.handleAlertsSlotChange}));return t(w,{key:"6e5baec07ecb356871dea038ebc2d5ee2d8ed54f",onKeyDown:this.panelKeyDownHandler},t(F,{key:"924cda1799b359f1bb3fb119cebfff5a7349b72d",disabled:e},o?t("calcite-scrim",{loading:o}):null,i))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuFlipPlacements:[16],menuOpen:[516,"menu-open"],menuPlacement:[513,"menu-placement"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function J(){typeof customElements>"u"||["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,Z);break;case"calcite-action":customElements.get(e)||U();break;case"calcite-action-menu":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||q();break;case"calcite-loader":customElements.get(e)||G();break;case"calcite-popover":customElements.get(e)||D();break;case"calcite-scrim":customElements.get(e)||V();break}})}J();export{s,J as y};
