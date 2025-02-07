import{p as k,b as L,W as c,a as i,D as q}from"./themeUtils-YjM7iIiX-D_8MMBUS.js";import{A as C,G as m,X as I,p as X}from"./dom-N58V0tYi-DBU3jlah.js";import{l as E,p as A}from"./interactive-DqhNilgd-BqlPGC1u.js";import{K as w,q as D}from"./locale-Cn_GDVD_-C_lrYbAZ.js";import{d as H,h as T,M,l as z}from"./t9n-C_hcZMZJ-p8BzMN9P.js";import{o as F,r as $,f as P}from"./loadable-DbNDKH4r-YQBziuUO.js";import{h as J,m as Q,u as V,f as Y}from"./utils3-BSH0zqNl-mD0kIDZA.js";import{c as y,o as f,n as a,e as p}from"./resources4-Bi43yZeq-Ca3PT_gb.js";import{m as Z}from"./action-GCQoufcz-BwYVPCQt.js";import{m as B}from"./icon-BXFbBbop-C1I_zXmT.js";import{v as ee}from"./loader-Ch7Jr16w-FZfttAui.js";import"./story-DukCeLi3.js";import"./main-B3PZTcgA.js";import"./uuid-Dj9mdEVg-BaKSCiyT.js";import"./key-CZySMiwx-kmS7VeUz.js";import"./observers-BigwqTsw-jMRecJJJ.js";import"./guid-Dls486Er-CBh637k4.js";import"./component-CWGf1hug-BASJpoEG.js";const x={handle:"handle",handleSelected:"handle--selected"},te={drag:"drag"},b={itemLabel:"{itemLabel}",position:"{position}",total:"{total}"},ne=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-handle-icon-color, var(--calcite-color-border-input));background-color:var(--calcite-handle-background-color, transparent);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-hover, var(--calcite-color-foreground-2))}:host(:not([disabled])) .handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          );color:var(--calcite-handle-icon-color-hover, var(--calcite-color-text-1))}:host(:not([disabled])) .handle--selected{color:var(--calcite-handle-icon-color-selected, var(--calcite-color-text-1));background-color:var(--calcite-handle-background-color-selected, var(--calcite-color-foreground-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,ie=ne,ae=k(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=c(this,"calciteHandleChange",6),this.calciteHandleNudge=c(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=c(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"});break}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){H(this),w(this)}async componentWillLoad(){F(this),await T(this)}componentDidLoad(){$(this)}componentDidRender(){E(this)}disconnectedCallback(){M(this),D(this)}effectiveLocaleChange(){z(this,this.effectiveLocale)}async setFocus(){await P(this),this.handleButton?.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(b.itemLabel,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:n,label:l,messages:s,selected:o}=this;return!s||!l||typeof n!="number"||typeof t!="number"?null:(e==="label"?o?s.dragHandleChange:s.dragHandleIdle:o?s.dragHandleActive:s.dragHandleCommit).replace(b.position,t.toString()).replace(b.itemLabel,l).replace(b.total,n.toString())}render(){return i(A,{key:"1a694de393421691c83e7265850275c217ef7ffe",disabled:this.disabled},i("span",{key:"82ff692c15c2d9294ceb814b3f7f06bb4d8ff0e0","aria-checked":this.disabled?null:C(this.selected),"aria-disabled":this.disabled?C(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[x.handle]:!0,[x.handleSelected]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,ref:e=>{this.handleButton=e},role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip()},i("calcite-icon",{key:"25862a953826aea2d594507157aaffc21d07001c",icon:te.drag,scale:"s"})))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ie}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[1040],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function O(){typeof customElements>"u"||["calcite-handle","calcite-icon"].forEach(e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,ae);break;case"calcite-icon":customElements.get(e)||B();break}})}O();const le=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-icon-color:var(--calcite-color-brand)}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-color-border-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-color-foreground-1)}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);margin-inline-start:var(--calcite-list-item-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}tr,td{outline-color:transparent}tr{position:relative}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-block:0px;color:var(--calcite-color-border-input);padding-inline:var(--calcite-spacing-md) var(--calcite-spacing-xxs)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-handle,.actions-end calcite-action,.actions-end calcite-handle,.content-start calcite-action,.content-start calcite-handle,.content-end calcite-action,.content-end calcite-handle,.selection-container calcite-action,.selection-container calcite-handle,.drag-container calcite-action,.drag-container calcite-handle,.open-container calcite-action,.open-container calcite-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0px}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}tr:focus .actions-start,tr:focus .actions-end{inset-block:0.125rem}tr:focus .actions-start .close,tr:focus .actions-start ::slotted(calcite-action),tr:focus .actions-start ::slotted(calcite-action-menu),tr:focus .actions-start ::slotted(calcite-handle),tr:focus .actions-start ::slotted(calcite-dropdown),tr:focus .actions-end .close,tr:focus .actions-end ::slotted(calcite-action),tr:focus .actions-end ::slotted(calcite-action-menu),tr:focus .actions-end ::slotted(calcite-handle),tr:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - 0.25rem)}tr:focus::after,tr:focus::before{position:absolute;content:"";inline-size:0.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-brand);inset-block:0}tr:focus::before{inset-inline-start:0}tr:focus::after{inset-inline-end:0}.container--border:focus::before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}`,se=le,S=new Map,oe="calcite-list",G=k(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=c(this,"calciteListItemSelect",6),this.calciteListItemClose=c(this,"calciteListItemClose",6),this.calciteListItemDragHandleChange=c(this,"calciteListItemDragHandleChange",6),this.calciteListItemToggle=c(this,"calciteListItemToggle",6),this.calciteInternalListItemSelect=c(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemSelectMultiple=c(this,"calciteInternalListItemSelectMultiple",6),this.calciteInternalListItemActive=c(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=c(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=c(this,"calciteInternalListItemChange",6),this.calciteInternalListItemToggle=c(this,"calciteInternalListItemToggle",6),this.dragHandleSelectedChangeHandler=e=>{this.dragSelected=e.target.selected,this.calciteListItemDragHandleChange.emit(),e.stopPropagation()},this.emitInternalListItemActive=()=>{this.calciteInternalListItemActive.emit()},this.focusCellHandle=()=>{this.handleCellFocusIn(this.handleGridEl)},this.focusCellActionsStart=()=>{this.handleCellFocusIn(this.actionsStartEl)},this.focusCellContent=()=>{this.handleCellFocusIn(this.contentEl)},this.focusCellActionsEnd=()=>{this.handleCellFocusIn(this.actionsEndEl)},this.handleCloseClick=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=m(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=m(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=m(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=m(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=m(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=m(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.handleToggleClick=()=>{this.toggle()},this.toggle=(e=!this.open)=>{this.open=e,this.calciteListItemToggle.emit()},this.handleItemClick=e=>{e.defaultPrevented||this.toggleSelected(e.shiftKey)},this.toggleSelected=e=>{const{selectionMode:t,selected:n}=this;this.disabled||(t==="multiple"||t==="single"?this.selected=!n:t==="single-persist"&&(this.selected=!0),this.calciteInternalListItemSelectMultiple.emit({selectMultiple:e&&t==="multiple"}),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:l,actionsStartEl:s,actionsEndEl:o,open:d,openable:u}=this,r=this.getGridCells(),h=r.findIndex(g=>n.includes(g));if(t==="Enter"&&!n.includes(s)&&!n.includes(o))e.preventDefault(),this.toggleSelected(e.shiftKey);else if(t==="ArrowRight"){e.preventDefault();const g=h+1;h===-1?!d&&u?(this.toggle(!0),this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[h]&&r[g]&&this.focusCell(r[g])}else if(t==="ArrowLeft"){e.preventDefault();const g=h-1;h===-1?(this.focusCell(null),d&&u?this.toggle(!1):this.calciteInternalFocusPreviousItem.emit()):h===0?(this.focusCell(null),l.focus()):r[h]&&r[g]&&this.focusCell(r[g])}},this.focusCellNull=()=>{this.focusCell(null)},this.handleCellFocusIn=e=>{this.setFocusCell(e,I(e),!0)},this.setFocusCell=(e,t,n)=>{const{parentListEl:l}=this;n&&S.set(l,null);const s=this.getGridCells();s.forEach(o=>{o.tabIndex=-1,o.removeAttribute(y)}),e&&(e.tabIndex=e===t?0:-1,e.setAttribute(y,""),n&&S.set(l,s.indexOf(e)))},this.focusCell=(e,t=!0)=>{const n=I(e);this.setFocusCell(e,n,t),n?.focus()},this.active=!1,this.bordered=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragDisabled=!1,this.dragHandle=!1,this.dragSelected=!1,this.filterHidden=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.unavailable=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleOpenChange(){this.emitCalciteInternalListItemToggle()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){z(this,this.effectiveLocale)}connectedCallback(){w(this),H(this);const{el:e}=this;this.parentListEl=e.closest(oe),this.level=J(e)+1,this.setSelectionDefaults()}async componentWillLoad(){F(this),await T(this)}componentDidLoad(){$(this)}componentDidRender(){E(this)}disconnectedCallback(){D(this),M(this)}async setFocus(){await P(this);const{containerEl:e,parentListEl:t}=this,n=S.get(t);if(typeof n=="number"){const l=this.getGridCells();l[n]?this.focusCell(l[n]):e?.focus();return}e?.focus()}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return t==="none"||n==="border"?null:i("td",{class:{[a.selectionContainer]:!0,[a.selectionContainerSingle]:t==="single"||t==="single-persist"},key:"selection-container",onClick:this.handleItemClick},i("calcite-icon",{icon:e?t==="multiple"?f.selectedMultiple:f.selectedSingle:t==="multiple"?f.unselectedMultiple:f.unselectedSingle,scale:"s"}))}renderDragHandle(){const{label:e,dragHandle:t,dragSelected:n,dragDisabled:l,setPosition:s,setSize:o}=this;return t?i("td",{"aria-label":e,class:a.dragContainer,key:"drag-handle-container",onFocusin:this.focusCellHandle,ref:d=>this.handleGridEl=d,role:"gridcell"},i("calcite-handle",{disabled:l,label:e,onCalciteHandleChange:this.dragHandleSelectedChangeHandler,selected:n,setPosition:s,setSize:o})):null}renderOpen(){const{el:e,open:t,openable:n,messages:l}=this,s=X(e),o=t?f.open:s==="rtl"?f.closedRTL:f.closedLTR,d=t?l.collapse:l.expand;return n?i("td",{class:a.openContainer,key:"open-container",onClick:this.handleToggleClick,title:d},i("calcite-icon",{icon:o,key:o,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return i("td",{"aria-label":e,class:a.actionsStart,hidden:!t,key:"actions-start-container",onFocusin:this.focusCellActionsStart,ref:n=>this.actionsStartEl=n,role:"gridcell"},i("slot",{name:p.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:l}=this;return i("td",{"aria-label":e,class:a.actionsEnd,hidden:!(t||n),key:"actions-end-container",onFocusin:this.focusCellActionsEnd,ref:s=>this.actionsEndEl=s,role:"gridcell"},i("slot",{name:p.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?i("calcite-action",{appearance:"transparent",class:a.close,icon:f.close,key:"close-action",label:l.close,onClick:this.handleCloseClick,text:l.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return i("div",{class:a.contentStart,hidden:!e},i("slot",{name:p.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return i("div",{class:a.customContent,hidden:!e},i("slot",{name:p.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return i("div",{class:a.contentEnd,hidden:!e},i("slot",{name:p.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e}=this;return i("div",{class:a.contentBottom,hidden:!e},i("slot",{name:p.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return i("div",{class:{[a.nestedContainer]:!0,[a.nestedContainerOpen]:this.openable&&this.open}},i("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return!n&&(e||t)?i("div",{class:a.content,key:"content"},e?i("div",{class:a.label,key:"label"},e):null,t?i("div",{class:a.description,key:"description"},t):null):null}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:l,unavailable:s}=this,o=l||!!t||!!e,d=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return i("td",{"aria-label":t,class:{[a.contentContainer]:!0,[a.contentContainerUnavailable]:s,[a.contentContainerSelectable]:n!=="none",[a.contentContainerHasCenterContent]:o},key:"content-container",onClick:this.handleItemClick,onFocusin:this.focusCellContent,ref:u=>this.contentEl=u,role:"gridcell"},d)}render(){const{openable:e,open:t,level:n,setPosition:l,setSize:s,active:o,label:d,selected:u,selectionAppearance:r,selectionMode:h,closed:g,filterHidden:_,bordered:U,disabled:N}=this,v=h!=="none"&&r==="border",R=v&&u,j=v&&!u;return i(q,{key:"a610ab740c82b6088400839884d58d4d867829db"},i(A,{key:"f05bf10e82fab03ddfdaf3ab2e100dcbd6d69c63",disabled:N},i("div",{key:"4bf63ed08d2a4a049e060d26d3699656558d495e",class:{[a.wrapper]:!0,[a.wrapperBordered]:U}},i("tr",{key:"d231a113c3bd8ee7f67c2ffb0cf804c142a95fb9","aria-expanded":e?C(t):null,"aria-label":d,"aria-level":n,"aria-posinset":l,"aria-selected":C(u),"aria-setsize":s,class:{[a.container]:!0,[a.containerHover]:!0,[a.containerBorder]:v,[a.containerBorderSelected]:R,[a.containerBorderUnselected]:j},hidden:g||_,onFocus:this.focusCellNull,onFocusin:this.emitInternalListItemActive,onKeyDown:this.handleItemKeyDown,ref:W=>this.containerEl=W,role:"row",tabIndex:o?0:-1},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom()),this.renderDefaultContainer()))}emitCalciteInternalListItemToggle(){this.calciteInternalListItemToggle.emit()}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const t=Q(e),n=V(e);Y(t),this.openable=!!t.length||!!n.length}getGridCells(){return[this.handleGridEl,this.actionsStartEl,this.contentEl,this.actionsEndEl].filter(e=>e&&!e.hidden)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return se}},[1,"calcite-list-item",{active:[4],bordered:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragDisabled:[516,"drag-disabled"],dragHandle:[4,"drag-handle"],dragSelected:[1540,"drag-selected"],filterHidden:[516,"filter-hidden"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],unavailable:[516],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]],{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],open:["handleOpenChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function K(){typeof customElements>"u"||["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,G);break;case"calcite-action":customElements.get(e)||Z();break;case"calcite-handle":customElements.get(e)||O();break;case"calcite-icon":customElements.get(e)||B();break;case"calcite-loader":customElements.get(e)||ee();break}})}K();const Ee=G,Ae=K;export{Ee as CalciteListItem,Ae as defineCustomElement};
