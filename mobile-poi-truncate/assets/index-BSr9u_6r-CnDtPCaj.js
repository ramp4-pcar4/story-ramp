const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fabric-Df28hv38-ZgxCl9Ub.js","./story-BAzleJnS.js","./main-Dqar6lJ9.js","./main-Blpl9308.css","./story-Cjnzy4Ic.css","./index-DY4XJa1m-CSd-WVd8.js","./index--i98kM5n-B2w4lYV4.js","./index-DLWeBByc-wJnc8h5v.js","./index-98it_ulG-DuvKemjf.js","./index-7blUq_oP-DS013XAs.js","./index-B0lfXXMz-bCWqnq3g.js","./index-CWPzg1w2-k0eOoa0T.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./main-Dqar6lJ9.js";import{c0 as D,fu as M,eV as S,eW as k,fC as y,c1 as T,fq as P}from"./story-BAzleJnS.js";import B from"./screen-CmNk4p3g-Cf26kZrD.js";var H={exports:{}},j=H.exports,R;function C(){return R||(R=1,function($,o){(function(n,s){s()})(j,function(){function n(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function s(t,e,d){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){a(i.response,e,d)},i.onerror=function(){console.error("could not download file")},i.send()}function b(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function c(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof T=="object"&&T.global===T?T:void 0,_=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(t,e,d){var i=r.URL||r.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener",typeof t=="string"?(l.href=t,l.origin===location.origin?c(l):b(l.href)?s(t,e,d):c(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(l.href)},4e4),setTimeout(function(){c(l)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,d){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(n(t,d),e);else if(b(t))s(t,e,d);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){c(i)})}}:function(t,e,d,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return s(t,e,d);var l=t.type==="application/octet-stream",f=/constructor/i.test(r.HTMLElement)||r.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||l&&f||_)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var p=g.result;p=h?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=p:location=p,i=null},g.readAsDataURL(t)}else{var m=r.URL||r.webkitURL,x=m.createObjectURL(t);i?i.location=x:location.href=x,i=null,setTimeout(function(){m.revokeObjectURL(x)},4e4)}});r.saveAs=a.saveAs=a,$.exports=a})}(H)),H.exports}var I=C();const N=D(I),A=1200,u={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class U extends P{fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};customRendererFunc=void 0;customRenderer(o){this.customRendererFunc=o}get config(){return super.config}_parseConfig(o){if(!o)return;const n=y(this.$vApp.$pinia);n.componentSelectedState={title:o.title?.selected??!0,map:o.map?.selected??!0,mapElements:o.mapElements?.selected??!0,legend:o.legend?.selected??!0,footnote:o.footnote?.selected??!0,timestamp:o.timestamp?.selected??!0},n.fileName=o.fileName||"",this.handlePanelWidths(["export"]),this.handlePanelTeleports(["export"])}getSubFixture(o){return this.$iApi.fixture.get(o)}async make(o,n){const{fabric:s}=await w(()=>import("./fabric-Df28hv38-ZgxCl9Ub.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(v=>v.f);s.Object.prototype.objectCaching=!1;const b=y(this.$vApp.$pinia),c={};this.fcFabric=new s.StaticCanvas(o,{backgroundColor:"#fff"}),this.fcFabricDownload=new s.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;const r=b.componentSelectedState,_=this.getSubFixture("export-title"),a=this.getSubFixture("export-map"),t=this.getSubFixture("export-scalebar"),e=this.getSubFixture("export-northarrow"),d=this.getSubFixture("export-legend"),i=this.getSubFixture("export-footnote"),l=this.getSubFixture("export-timestamp");let f,h,g,m,x,p,F;if(r.title&&_&&(f=await _.make({top:this.options.runningHeight,left:0,originX:"left",width:n,textAlign:"center"}),this.options.runningHeight+=f.height+40,c.title=f),r.map&&a&&(h=await a.make({top:this.options.runningHeight}),f&&(f.left=h.width/2,f.originX="center"),this.options.runningHeight+=h.height+40,c.map=h),!h&&f&&(f.width=A),this.options.scale=n/((h?.width??A)+u.LEFT+u.RIGHT),r.mapElements&&t&&(g=await t.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=g.height+40,c.scaleBar=g,e&&(m=await e.make({top:g.top,left:n/this.options.scale}),m.top+=m.height/2-20,m.left+=-m.width*2,c.northArrow=m)),r.legend&&d&&(x=await d.make({width:d.config?.columnWidth??h?.width??A}),x.top=this.options.runningHeight,this.options.runningHeight+=x.height,c.legend=x),r.timestamp&&l&&(F=await l.make({top:this.options.runningHeight+40,width:n*1.5}),this.options.runningHeight+=!r.footnote||!i?F.height+40:F.height+20,c.timestamp=F),r.footnote&&i&&(p=await i.make({top:this.options.runningHeight-2.5,left:n/this.options.scale+40}),r.timestamp&&l?n-c.timestamp.getMinWidth()<=p.getMinWidth()+30?(p.top+=30,p.left=0,p.originX="left",this.options.runningHeight+=20):p.left+=-p.width*2:(p.top+=20,p.left+=-p.width*2,this.options.runningHeight+=20),this.options.runningHeight+=p.height,c.footnote=p),this.customRendererFunc){this.fcFabric.setWidth(n);const v={panelWidth:n,margin:u,defaultWidth:A,fabric:s};await this.customRendererFunc(this.fcFabric,c,v),this.fcFabric.renderAll(),this.fcFabric.clone(E=>{this.fcFabricDownload=E,this.fcFabricDownload.setDimensions({width:this.fcFabric?.getWidth(),height:this.fcFabric.getHeight()}),this.fcFabricDownload.renderAll()})}else{const v=new s.Group(Object.values(c),{top:u.TOP*this.options.scale,left:u.LEFT*this.options.scale}),E=await new Promise(O=>{v.clone(L=>{O(L)})});E.top=u.TOP,E.left=u.LEFT,this.fcFabricDownload.add(E),v.scale(this.options.scale),this.fcFabric.add(v),this.fcFabric.setDimensions({width:n,height:(this.options.runningHeight+u.TOP+u.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(h?.width??A)+u.LEFT+u.RIGHT,height:this.options.runningHeight+u.TOP+u.BOTTOM}),this.fcFabricDownload.renderAll()}}export(){if(!this.fcFabric)return;const o=new Date,n=this.config?.fileName||`map-carte - ${o.getFullYear()}-${o.getMonth()}-${o.getDay()}, ${o.getHours()}_${o.getMinutes()}`;N.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${n}.png`)}}const W={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"Exporter","export.alertName":"Exporter","export.download":"Télécharger l'image","export.refresh":"Rafraîchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des paramètres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Flèche du nord et échelle graphique","export.menu.component.legend":"Légende","export.menu.component.footnote":"Référence","export.menu.component.timestamp":"Horodatage"}};class X extends U{initialized(){}async needed(){const o=(await w(async()=>{const{default:a}=await import("./index-DY4XJa1m-CSd-WVd8.js");return{default:a}},__vite__mapDeps([5,0,1,2,3,4]),import.meta.url)).default,n=(await w(async()=>{const{default:a}=await import("./index--i98kM5n-B2w4lYV4.js");return{default:a}},__vite__mapDeps([6,0,1,2,3,4]),import.meta.url)).default,s=(await w(async()=>{const{default:a}=await import("./index-DLWeBByc-wJnc8h5v.js");return{default:a}},__vite__mapDeps([7,1,2,3,4,0]),import.meta.url)).default,b=(await w(async()=>{const{default:a}=await import("./index-98it_ulG-DuvKemjf.js");return{default:a}},__vite__mapDeps([8,0,1,2,3,4]),import.meta.url)).default,c=(await w(async()=>{const{default:a}=await import("./index-7blUq_oP-DS013XAs.js");return{default:a}},__vite__mapDeps([9,0,1,2,3,4]),import.meta.url)).default,r=(await w(async()=>{const{default:a}=await import("./index-B0lfXXMz-bCWqnq3g.js");return{default:a}},__vite__mapDeps([10,0,1,2,3,4]),import.meta.url)).default,_=(await w(async()=>{const{default:a}=await import("./index-CWPzg1w2-k0eOoa0T.js");return{default:a}},__vite__mapDeps([11,0,1,2,3,4]),import.meta.url)).default;this.$iApi.fixture.add("export-title",o),this.$iApi.fixture.add("export-map",n),this.$iApi.fixture.add("export-legend",s),this.$iApi.fixture.add("export-northarrow",b),this.$iApi.fixture.add("export-scalebar",c),this.$iApi.fixture.add("export-timestamp",r),this.$iApi.fixture.add("export-footnote",_)}added(){this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":M(B)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:W}});const o=this.$iApi.event.on(S.PANEL_OPENED,async s=>{s.id==="export"&&(this.$iApi.event.off(o),await this.needed(),s.exportMake())});this._parseConfig(this.config);const n=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{n(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("export-timestamp")?.remove(),this.$iApi.fixture.get("export-footnote")?.remove(),this.$iApi.fixture.exists("appbar")&&k(this.$vApp.$pinia).removeButton("export"),y(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("export")}}}export{X as default};
