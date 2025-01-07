import{p as ue,b as fe,W as F,n as Oe,a as h,D as Ce,u as Be,m as Te}from"./themeUtils-YjM7iIiX-CpWzbU7H.js";import{A as G,g as Ie,U as Fe,M as pe,j as Ae,D as Me,d as S,k as Le,c as Re,s as P,R as T}from"./dom-N58V0tYi-DBU3jlah.js";import{i as he}from"./guid-Dls486Er-CBh637k4.js";import{n as ve}from"./key-CZySMiwx-kmS7VeUz.js";import{o as me,r as be,f as ge}from"./loadable-DbNDKH4r-DyDwqoXd.js";import{m as Ee}from"./action-GCQoufcz-Db81jJpr.js";import{m as ye}from"./icon-BXFbBbop-BKvGneFm.js";import{v as we}from"./loader-Ch7Jr16w-B4sW6aLS.js";import{I as He,U as Ne,X as Se,q as ze,_ as Ge,j as J}from"./floating-ui-DKFFlLv3-elIRTcW0.js";import{p as Q}from"./openCloseComponent-BGQ6h7vg-CRyJWWhi.js";import{K as je,q as $e}from"./locale-Cn_GDVD_-CnEFMUdd.js";import{l as Ke,d as _e,h as Ue,M as qe}from"./t9n-C_hcZMZJ-DI6xkvhp.js";import{c as We}from"./observers-BigwqTsw-BCNzxmob.js";import{$ as Ve}from"./FloatingArrow-BG9llDYg-ljy-TIYj.js";import{e as Xe}from"./component-CWGf1hug-BASJpoEG.js";function Ye(e,t,n){return(t=Qe(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,s)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(s){Ye(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Je(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qe(e){var t=Je(e,"string");return typeof t=="symbol"?t:t+""}var te={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var s=e.indexOf(t);s===-1||e.splice(s,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},Ze=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},et=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},A=function(e){return e?.key==="Tab"||e?.keyCode===9},tt=function(e){return A(e)&&!e.shiftKey},nt=function(e){return A(e)&&e.shiftKey},ne=function(e){return setTimeout(e,0)},ie=function(e,t){var n=-1;return e.every(function(s,r){return t(s)?(n=r,!1):!0}),n},I=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return typeof e=="function"?e.apply(void 0,n):e},L=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},it=[],ot=function(e,t){var n=t?.document||document,s=t?.trapStack||it,r=ee({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:tt,isKeyBackward:nt},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},m,v=function(i,o,c){return i&&i[o]!==void 0?i[o]:r[c||o]},g=function(i,o){var c=typeof o?.composedPath=="function"?o.composedPath():void 0;return a.containerGroups.findIndex(function(d){var l=d.container,u=d.tabbableNodes;return l.contains(i)||c?.includes(l)||u.find(function(f){return f===i})})},y=function(i){var o=r[i];if(typeof o=="function"){for(var c=arguments.length,d=new Array(c>1?c-1:0),l=1;l<c;l++)d[l-1]=arguments[l];o=o.apply(void 0,d)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var u=o;if(typeof o=="string"&&(u=n.querySelector(o),!u))throw new Error("`".concat(i,"` as selector refers to no known node"));return u},D=function(){var i=y("initialFocus");if(i===!1)return!1;if(i===void 0||!S(i,r.tabbableOptions))if(g(n.activeElement)>=0)i=n.activeElement;else{var o=a.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||y("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},O=function(){if(a.containerGroups=a.containers.map(function(i){var o=Le(i,r.tabbableOptions),c=Re(i,r.tabbableOptions),d=o.length>0?o[0]:void 0,l=o.length>0?o[o.length-1]:void 0,u=c.find(function(p){return P(p)}),f=c.slice().reverse().find(function(p){return P(p)}),b=!!o.find(function(p){return T(p)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:b,firstTabbableNode:d,lastTabbableNode:l,firstDomTabbableNode:u,lastDomTabbableNode:f,nextTabbableNode:function(p){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,B=o.indexOf(p);return B<0?x?c.slice(c.indexOf(p)+1).find(function(w){return P(w)}):c.slice(0,c.indexOf(p)).reverse().find(function(w){return P(w)}):o[B+(x?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(i){return i.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},j=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?j(o.shadowRoot):o},k=function(i){if(i!==!1&&i!==j(document)){if(!i||!i.focus){k(D());return}i.focus({preventScroll:!!r.preventScroll}),a.mostRecentlyFocusedNode=i,Ze(i)&&i.select()}},$=function(i){var o=y("setReturnFocus",i);return o||(o===!1?!1:i)},K=function(i){var o=i.target,c=i.event,d=i.isBackward,l=d===void 0?!1:d;o=o||L(c),O();var u=null;if(a.tabbableGroups.length>0){var f=g(o,c),b=f>=0?a.containerGroups[f]:void 0;if(f<0)l?u=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:u=a.tabbableGroups[0].firstTabbableNode;else if(l){var p=ie(a.tabbableGroups,function(H){var N=H.firstTabbableNode;return o===N});if(p<0&&(b.container===o||S(o,r.tabbableOptions)&&!P(o,r.tabbableOptions)&&!b.nextTabbableNode(o,!1))&&(p=f),p>=0){var x=p===0?a.tabbableGroups.length-1:p-1,B=a.tabbableGroups[x];u=T(o)>=0?B.lastTabbableNode:B.lastDomTabbableNode}else A(c)||(u=b.nextTabbableNode(o,!1))}else{var w=ie(a.tabbableGroups,function(H){var N=H.lastTabbableNode;return o===N});if(w<0&&(b.container===o||S(o,r.tabbableOptions)&&!P(o,r.tabbableOptions)&&!b.nextTabbableNode(o))&&(w=f),w>=0){var De=w===a.tabbableGroups.length-1?0:w+1,Y=a.tabbableGroups[De];u=T(o)>=0?Y.firstTabbableNode:Y.firstDomTabbableNode}else A(c)||(u=b.nextTabbableNode(o))}}else u=y("fallbackFocus");return u},M=function(i){var o=L(i);if(!(g(o,i)>=0)){if(I(r.clickOutsideDeactivates,i)){m.deactivate({returnFocus:r.returnFocusOnDeactivate});return}I(r.allowOutsideClick,i)||i.preventDefault()}},_=function(i){var o=L(i),c=g(o,i)>=0;if(c||o instanceof Document)c&&(a.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var d,l=!0;if(a.mostRecentlyFocusedNode)if(T(a.mostRecentlyFocusedNode)>0){var u=g(a.mostRecentlyFocusedNode),f=a.containerGroups[u].tabbableNodes;if(f.length>0){var b=f.findIndex(function(p){return p===a.mostRecentlyFocusedNode});b>=0&&(r.isKeyForward(a.recentNavEvent)?b+1<f.length&&(d=f[b+1],l=!1):b-1>=0&&(d=f[b-1],l=!1))}}else a.containerGroups.some(function(p){return p.tabbableNodes.some(function(x){return T(x)>0})})||(l=!1);else l=!1;l&&(d=K({target:a.mostRecentlyFocusedNode,isBackward:r.isKeyBackward(a.recentNavEvent)})),k(d||a.mostRecentlyFocusedNode||D())}a.recentNavEvent=void 0},xe=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=i;var c=K({event:i,isBackward:o});c&&(A(i)&&i.preventDefault(),k(c))},U=function(i){(r.isKeyForward(i)||r.isKeyBackward(i))&&xe(i,r.isKeyBackward(i))},q=function(i){et(i)&&I(r.escapeDeactivates,i)!==!1&&(i.preventDefault(),m.deactivate())},W=function(i){var o=L(i);g(o,i)>=0||I(r.clickOutsideDeactivates,i)||I(r.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},V=function(){if(a.active)return te.activateTrap(s,m),a.delayInitialFocusTimer=r.delayInitialFocus?ne(function(){k(D())}):k(D()),n.addEventListener("focusin",_,!0),n.addEventListener("mousedown",M,{capture:!0,passive:!1}),n.addEventListener("touchstart",M,{capture:!0,passive:!1}),n.addEventListener("click",W,{capture:!0,passive:!1}),n.addEventListener("keydown",U,{capture:!0,passive:!1}),n.addEventListener("keydown",q),m},X=function(){if(a.active)return n.removeEventListener("focusin",_,!0),n.removeEventListener("mousedown",M,!0),n.removeEventListener("touchstart",M,!0),n.removeEventListener("click",W,!0),n.removeEventListener("keydown",U,!0),n.removeEventListener("keydown",q),m},Pe=function(i){var o=i.some(function(c){var d=Array.from(c.removedNodes);return d.some(function(l){return l===a.mostRecentlyFocusedNode})});o&&k(D())},R=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Pe):void 0,C=function(){R&&(R.disconnect(),a.active&&!a.paused&&a.containers.map(function(i){R.observe(i,{subtree:!0,childList:!0})}))};return m={get active(){return a.active},get paused(){return a.paused},activate:function(i){if(a.active)return this;var o=v(i,"onActivate"),c=v(i,"onPostActivate"),d=v(i,"checkCanFocusTrap");d||O(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement,o?.();var l=function(){d&&O(),V(),C(),c?.()};return d?(d(a.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(i){if(!a.active)return this;var o=ee({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},i);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,X(),a.active=!1,a.paused=!1,C(),te.deactivateTrap(s,m);var c=v(o,"onDeactivate"),d=v(o,"onPostDeactivate"),l=v(o,"checkCanReturnFocus"),u=v(o,"returnFocus","returnFocusOnDeactivate");c?.();var f=function(){ne(function(){u&&k($(a.nodeFocusedBeforeActivation)),d?.()})};return u&&l?(l($(a.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(i){if(a.paused||!a.active)return this;var o=v(i,"onPause"),c=v(i,"onPostPause");return a.paused=!0,o?.(),X(),C(),c?.(),this},unpause:function(i){if(!a.paused||!a.active)return this;var o=v(i,"onUnpause"),c=v(i,"onPostUnpause");return a.paused=!1,o?.(),O(),V(),C(),c?.(),this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return a.containers=o.map(function(c){return typeof c=="string"?n.querySelector(c):c}),a.active&&O(),C(),this}},m.updateContainerElements(e),m};function at(e,t){const{el:n}=e,s=n;if(!s)return;const r={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:s,setReturnFocus:a=>(pe(a),!1),...t?.focusTrapOptions,document:n.ownerDocument,tabbableOptions:Ae,trapStack:Te};e.focusTrap=ot(s,r)}function oe(e,t){e.focusTrapDisabled||e.focusTrap?.activate(t)}function z(e,t){e.focusTrap?.deactivate(t)}function rt(e){e.focusTrap?.updateContainerElements(e.el)}function ae(e,t){return(e+t)%t}const st=(e,t)=>{const n=e.level?`h${e.level}`:"div";return delete e.level,h(n,{class:e.class,key:e.key},t)};class ct{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=t=>{const{registeredElements:n}=this,s=t.find(r=>n.has(r));return n.get(s)},this.togglePopovers=t=>{const n=t.composedPath(),s=this.queryPopover(n);s&&!s.triggerDisabled&&(s.open=!s.open),Array.from(this.registeredElements.values()).filter(r=>r!==s&&r.autoClose&&r.open&&!n.includes(r)).forEach(r=>r.open=!1)},this.keyDownHandler=t=>{t.defaultPrevented||(t.key==="Escape"?this.closeAllPopovers():ve(t.key)&&this.togglePopovers(t))},this.clickHandler=t=>{Me(t)||this.togglePopovers(t)}}registerElement(t,n){this.registeredElementCount++,this.registeredElements.set(t,n),this.registeredElementCount===1&&this.addListeners()}unregisterElement(t){this.registeredElements.delete(t)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(t=>t.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const E={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},lt="auto",re="aria-controls",se="aria-expanded",dt=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",ut=dt,ce=new ct,ft=ue(class extends fe{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=F(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=F(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=F(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=F(this,"calcitePopoverOpen",6),this.mutationObserver=We("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${he()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?He(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),Ne(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:n,effectiveReferenceElement:s}=this;e&&n&&!s&&console.warn(`${t.tagName}: reference-element id "${n}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(se,G(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(re,t),ce.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(re),e.removeAttribute(se)),ce.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=Se,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=lt,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?z(this):oe(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){Q(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){Ke(this,this.effectiveLocale)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),je(this),_e(this),at(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await Ue(this),me(this)}componentDidLoad(){be(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&Q(this),this.hasLoaded=!0}disconnectedCallback(){this.mutationObserver?.disconnect(),this.removeReferences(),$e(this),qe(this),ze(this,this.effectiveReferenceElement,this.el),z(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:n,placement:s,overlayPositioning:r,flipDisabled:a,filteredFlipPlacements:m,offsetDistance:v,offsetSkidding:g,arrowEl:y}=this;return Ge(this,{floatingEl:t,referenceEl:n,overlayPositioning:r,placement:s,flipDisabled:a,flipPlacements:m,offsetDistance:v,offsetSkidding:g,arrowEl:y,type:"popover"},e)}async setFocus(){await ge(this),Oe(this.el),Ie(this.el)}async updateFocusTrapElements(){rt(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?Fe(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),oe(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),z(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?h("div",{class:E.closeButtonContainer,key:E.closeButtonContainer},h("calcite-action",{appearance:"transparent",class:E.closeButton,onClick:this.hide,ref:n=>this.closeButtonEl=n,scale:this.scale,text:e.close},h("calcite-icon",{icon:"x",scale:Xe(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,n=e?h(st,{class:E.heading,level:t},e):null;return n?h("div",{class:E.header,key:E.header},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:n,open:s,pointerDisabled:r,floatingLayout:a}=this,m=e&&s,v=!m,g=r?null:h(Ve,{floatingLayout:a,key:"floating-arrow",ref:this.storeArrowEl});return h(Ce,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":G(v),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":v,id:this.getId(),role:"dialog"},h("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[E.container]:!0,[J.animation]:!0,[J.animationActive]:m},ref:this.setTransitionEl},g,h("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[E.hasHeader]:!!t,[E.headerContainer]:!0}},this.renderHeader(),h("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:E.content},h("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ut}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function ke(){typeof customElements>"u"||["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,ft);break;case"calcite-action":customElements.get(e)||Ee();break;case"calcite-icon":customElements.get(e)||ye();break;case"calcite-loader":customElements.get(e)||we();break}})}ke();const le={menu:"menu",defaultTrigger:"default-trigger"},de={tooltip:"tooltip",trigger:"trigger"},pt={menu:"ellipsis"},ht="data-active",vt=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}",mt=vt,bt=["ArrowUp","ArrowDown","End","Home"],gt=ue(class extends fe{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=F(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${he()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:s}=this,r=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==r&&(this.disconnectMenuButtonEl(),this.menuButtonEl=r,this.setTooltipReferenceElement(),r&&(r.active=n,r.setAttribute("aria-controls",t),r.setAttribute("aria-expanded",G(n)),r.setAttribute("aria-haspopup","true"),r.id||(r.id=e),r.label||(r.label=s),r.text||(r.text=s),r.addEventListener("click",this.menuButtonClick),r.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:s}=this;e&&(e.referenceElement=!t&&!s?n:null)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:s}=this,r=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=r),e.toggleAttribute(ht,t===s)},this.updateActions=e=>{e?.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).reduce((n,s)=>s?.matches("calcite-action")?(n.push(s),n):s?.matches("calcite-action-group")?n.concat(Array.from(s.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:s,open:r}=this;if(n.length){if(ve(t)){if(e.preventDefault(),!r){this.toggleOpen();return}const a=n[s];a?a.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,bt))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);const s=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=ae(Math.max(s-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=ae(s+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){me(this)}componentDidLoad(){be(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await ge(this),pe(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:s}=this;return h("slot",{name:de.trigger,onSlotchange:this.setMenuButtonEl},h("calcite-action",{appearance:e,class:le.defaultTrigger,icon:pt.menu,ref:this.setDefaultMenuButtonEl,scale:n,text:t,textEnabled:s}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:s,menuButtonEl:r,label:a,placement:m,overlayPositioning:v,flipPlacements:g}=this,y=e[t]?.id||null;return h("calcite-popover",{autoClose:!0,flipPlacements:g,focusTrapDisabled:!0,label:a,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:v,placement:m,pointerDisabled:!0,referenceElement:r},h("div",{"aria-activedescendant":y,"aria-labelledby":r?.id,class:le.menu,id:s,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},h("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return h(Be,{key:"d13aa4f3d43fb5651c0487ccfa456813f69955d2"},this.renderMenuButton(),this.renderMenuItems(),h("slot",{key:"b63d187516c766db6a1b1db3df34050fdec9e6ce",name:de.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find(n=>n===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return mt}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function Et(){typeof customElements>"u"||["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,gt);break;case"calcite-action":customElements.get(e)||Ee();break;case"calcite-icon":customElements.get(e)||ye();break;case"calcite-loader":customElements.get(e)||we();break;case"calcite-popover":customElements.get(e)||ke();break}})}Et();export{rt as E,z as H,ke as K,Et as O,de as _,at as g,oe as j,st as w};
