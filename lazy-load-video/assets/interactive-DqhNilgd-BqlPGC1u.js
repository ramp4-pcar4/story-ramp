import{a as r}from"./themeUtils-YjM7iIiX-D_8MMBUS.js";function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function i(e){e.target.disabled&&e.preventDefault()}const o=["mousedown","mouseup","click"];function a(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const t={capture:!0};function p(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),l(e);return}s(e),e.el.removeAttribute("aria-disabled")}function l(e){e.el.click=c,d(e.el)}function d(e){e.addEventListener("pointerdown",i,t),o.forEach(n=>e.addEventListener(n,a,t))}function s(e){delete e.el.click,u(e.el)}function u(e){e.removeEventListener("pointerdown",i,t),o.forEach(n=>e.removeEventListener(n,a,t))}const f={container:"interaction-container"},v=({disabled:e},n)=>r("div",{class:f.container,inert:e},...n);export{p as l,v as p};
