const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fabric-CZsIQ6qk-BHJPtmNJ.js","./story-u82SUoyt.js","./main-CmCzAIzx.js","./main-Ci7vwlHy.css","./story-Dafnv89Y.css","./index-Dyl_htzs-nek2QvIa.js","./index-CCTc-ZuK-BKUfn-bI.js","./index-r09zd3NW-Bm1fymFB.js","./index-Dmxwlr4l-C7u3qOzQ.js","./index-B3sR5Tw1-B3brLPll.js","./index-8hKUfhZy-q0sI1HSg.js","./index-BdFGz0ZK-CLx4wqU0.js"])))=>i.map(i=>d[i]);
import{_ as w}from"./main-CmCzAIzx.js";import{o_ as D,pD as M,p2 as S,p3 as P,pL as y,o$ as T,pz as k}from"./story-u82SUoyt.js";import B from"./screen-CvvgRI4n-CA6_YI4V.js";var R={exports:{}},j=R.exports,H;function N(){return H||(H=1,function($,o){(function(n,s){s()})(j,function(){function n(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function s(t,e,d){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){a(i.response,e,d)},i.onerror=function(){console.error("could not download file")},i.send()}function b(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function l(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof T=="object"&&T.global===T?T:void 0,_=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!_?function(t,e,d){var i=r.URL||r.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener",typeof t=="string"?(c.href=t,c.origin===location.origin?l(c):b(c.href)?s(t,e,d):l(c,c.target="_blank")):(c.href=i.createObjectURL(t),setTimeout(function(){i.revokeObjectURL(c.href)},4e4),setTimeout(function(){l(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,d){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(n(t,d),e);else if(b(t))s(t,e,d);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){l(i)})}}:function(t,e,d,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),typeof t=="string")return s(t,e,d);var c=t.type==="application/octet-stream",f=/constructor/i.test(r.HTMLElement)||r.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||c&&f||_)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var p=g.result;p=h?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=p:location=p,i=null},g.readAsDataURL(t)}else{var m=r.URL||r.webkitURL,x=m.createObjectURL(t);i?i.location=x:location.href=x,i=null,setTimeout(function(){m.revokeObjectURL(x)},4e4)}});r.saveAs=a.saveAs=a,$.exports=a})}(R)),R.exports}var U=N();const C=D(U),A=1200,u={TOP:40,RIGHT:40,BOTTOM:40,LEFT:40};class I extends k{fcFabric;fcFabricDownload;options={runningHeight:0,scale:1};customRendererFunc=void 0;customRenderer(o){this.customRendererFunc=o}get config(){return super.config}_parseConfig(o){if(!o)return;const n=y(this.$vApp.$pinia);n.componentSelectedState={title:o.title?.selected??!0,map:o.map?.selected??!0,mapElements:o.mapElements?.selected??!0,legend:o.legend?.selected??!0,footnote:o.footnote?.selected??!0,timestamp:o.timestamp?.selected??!0},n.fileName=o.fileName||"",this.handlePanelWidths(["export"]),this.handlePanelTeleports(["export"])}getSubFixture(o){return this.$iApi.fixture.get(o)}async make(o,n){const{fabric:s}=await w(()=>import("./fabric-CZsIQ6qk-BHJPtmNJ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(v=>v.f);s.Object.prototype.objectCaching=!1;const b=y(this.$vApp.$pinia),l={};this.fcFabric=new s.StaticCanvas(o,{backgroundColor:"#fff"}),this.fcFabricDownload=new s.StaticCanvas(null,{backgroundColor:"#fff"}),this.options.runningHeight=0;const r=b.componentSelectedState,_=this.getSubFixture("export-title"),a=this.getSubFixture("export-map"),t=this.getSubFixture("export-scalebar"),e=this.getSubFixture("export-northarrow"),d=this.getSubFixture("export-legend"),i=this.getSubFixture("export-footnote"),c=this.getSubFixture("export-timestamp");let f,h,g,m,x,p,F;if(r.title&&_&&(f=await _.make({top:this.options.runningHeight,left:0,originX:"left",width:n,textAlign:"center"}),this.options.runningHeight+=f.height+40,l.title=f),r.map&&a&&(h=await a.make({top:this.options.runningHeight}),f&&(f.left=h.width/2,f.originX="center"),this.options.runningHeight+=h.height+40,l.map=h),!h&&f&&(f.width=A),this.options.scale=n/((h?.width??A)+u.LEFT+u.RIGHT),r.mapElements&&t&&(g=await t.make({top:this.options.runningHeight,left:0}),this.options.runningHeight+=g.height+40,l.scaleBar=g,e&&(m=await e.make({top:g.top,left:n/this.options.scale}),m.top+=m.height/2-20,m.left+=-m.width*2,l.northArrow=m)),r.legend&&d&&(x=await d.make({width:d.config?.columnWidth??h?.width??A}),x.top=this.options.runningHeight,this.options.runningHeight+=x.height,l.legend=x),r.timestamp&&c&&(F=await c.make({top:this.options.runningHeight+40,width:n*1.5}),this.options.runningHeight+=!r.footnote||!i?F.height+40:F.height+20,l.timestamp=F),r.footnote&&i&&(p=await i.make({top:this.options.runningHeight-2.5,left:n/this.options.scale+40}),r.timestamp&&c?n-l.timestamp.getMinWidth()<=p.getMinWidth()+30?(p.top+=30,p.left=0,p.originX="left",this.options.runningHeight+=20):p.left+=-p.width*2:(p.top+=20,p.left+=-p.width*2,this.options.runningHeight+=20),this.options.runningHeight+=p.height,l.footnote=p),this.customRendererFunc){this.fcFabric.setWidth(n);const v={panelWidth:n,margin:u,defaultWidth:A,fabric:s};await this.customRendererFunc(this.fcFabric,l,v),this.fcFabric.renderAll(),this.fcFabric.clone(E=>{this.fcFabricDownload=E,this.fcFabricDownload.setDimensions({width:this.fcFabric?.getWidth(),height:this.fcFabric.getHeight()}),this.fcFabricDownload.renderAll()})}else{const v=new s.Group(Object.values(l),{top:u.TOP*this.options.scale,left:u.LEFT*this.options.scale}),E=await new Promise(O=>{v.clone(L=>{O(L)})});E.top=u.TOP,E.left=u.LEFT,this.fcFabricDownload.add(E),v.scale(this.options.scale),this.fcFabric.add(v),this.fcFabric.setDimensions({width:n,height:(this.options.runningHeight+u.TOP+u.BOTTOM)*this.options.scale}),this.fcFabric.renderAll(),this.fcFabricDownload.setDimensions({width:(h?.width??A)+u.LEFT+u.RIGHT,height:this.options.runningHeight+u.TOP+u.BOTTOM}),this.fcFabricDownload.renderAll()}}export(){if(!this.fcFabric)return;const o=new Date,n=this.config?.fileName||`map-carte - ${o.getFullYear()}-${o.getMonth()}-${o.getDay()}, ${o.getHours()}_${o.getMinutes()}`;C.saveAs(this.fcFabricDownload.toDataURL({format:"png",quality:1}),`${n}.png`)}}const W={en:{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},fr:{"export.title":"Exporter","export.alertName":"Exporter","export.download":"Télécharger l'image","export.refresh":"Rafraîchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des paramètres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Flèche du nord et échelle graphique","export.menu.component.legend":"Légende","export.menu.component.footnote":"Référence","export.menu.component.timestamp":"Horodatage"}};class z extends I{initialized(){}async needed(){const o=(await w(async()=>{const{default:a}=await import("./index-Dyl_htzs-nek2QvIa.js");return{default:a}},__vite__mapDeps([5,0,1,2,3,4]),import.meta.url)).default,n=(await w(async()=>{const{default:a}=await import("./index-CCTc-ZuK-BKUfn-bI.js");return{default:a}},__vite__mapDeps([6,0,1,2,3,4]),import.meta.url)).default,s=(await w(async()=>{const{default:a}=await import("./index-r09zd3NW-Bm1fymFB.js");return{default:a}},__vite__mapDeps([7,1,2,3,4,0]),import.meta.url)).default,b=(await w(async()=>{const{default:a}=await import("./index-Dmxwlr4l-C7u3qOzQ.js");return{default:a}},__vite__mapDeps([8,0,1,2,3,4]),import.meta.url)).default,l=(await w(async()=>{const{default:a}=await import("./index-B3sR5Tw1-B3brLPll.js");return{default:a}},__vite__mapDeps([9,0,1,2,3,4]),import.meta.url)).default,r=(await w(async()=>{const{default:a}=await import("./index-8hKUfhZy-q0sI1HSg.js");return{default:a}},__vite__mapDeps([10,0,1,2,3,4]),import.meta.url)).default,_=(await w(async()=>{const{default:a}=await import("./index-BdFGz0ZK-CLx4wqU0.js");return{default:a}},__vite__mapDeps([11,0,1,2,3,4]),import.meta.url)).default;this.$iApi.fixture.add("export-title",o),this.$iApi.fixture.add("export-map",n),this.$iApi.fixture.add("export-legend",s),this.$iApi.fixture.add("export-northarrow",b),this.$iApi.fixture.add("export-scalebar",l),this.$iApi.fixture.add("export-timestamp",r),this.$iApi.fixture.add("export-footnote",_)}added(){this.$iApi.panel.register({id:"export",config:{screens:{"export-screen":M(B)},style:{"flex-grow":"1","max-width":"800px"},button:{tooltip:"export.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'},alertName:"export.alertName"}},{i18n:{messages:W}});const o=this.$iApi.event.on(S.PANEL_OPENED,async s=>{s.id==="export"&&(this.$iApi.event.off(o),await this.needed(),s.exportMake())});this._parseConfig(this.config);const n=this.$vApp.$watch(()=>this.config,s=>this._parseConfig(s));this.removed=()=>{n(),this.$iApi.fixture.get("export-title")?.remove(),this.$iApi.fixture.get("export-map")?.remove(),this.$iApi.fixture.get("export-legend")?.remove(),this.$iApi.fixture.get("export-northarrow")?.remove(),this.$iApi.fixture.get("export-scalebar")?.remove(),this.$iApi.fixture.get("export-timestamp")?.remove(),this.$iApi.fixture.get("export-footnote")?.remove(),this.$iApi.fixture.exists("appbar")&&P(this.$vApp.$pinia).removeButton("export"),y(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("export")}}}export{z as default};
