import{eT as Y,fX as w,fq as q,fN as z,eY as N,f6 as s,eZ as b,fY as R,f8 as S,eV as T,fZ as W,f9 as B,fB as G,f_ as X,fK as F,f$ as O,g0 as V,e$ as Z,fb as j,f2 as D,fF as K}from"./story-C_BD4NO7.js";import"./main-C59lxR2D.js";class J extends q{_parseConfig(t){const a=w(this.$vApp.$pinia);t&&(a.arrowIcon=t.arrowIcon,a.poleIcon=t.poleIcon)}get config(){return super.config}}const U="path",Q=12,ee="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",te="#ff0000ff",ae=5,se=6,ie={style:U,size:Q,path:ee,colour:te,xOffset:ae,yOffset:se},oe=["innerHTML"],re=Y({__name:"northarrow",setup(y){const t=z(),a=w(),e=N("iApi"),n=s(),M=b(()=>a.arrowIcon),$=b(()=>a.poleIcon),p=s(0),r=s(0),h=s(!1),k=s(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`),A=s(!1),x=R([]),I=s([]);let P;S(()=>{const i=t.config.map;I.value=i.tileSchemas,M?.value&&(k.value=`<img width='25' src='${M.value}'>`),e.geo.map.esriView?.ready&&C(e.geo.map.getExtent()),x.push(e.event.on(T.MAP_EXTENTCHANGE,W(300,C)))}),B(()=>{x.forEach(i=>e.event.off(i))});const C=async i=>{P=t.activeBasemapConfig;let f;for(const d of I.value)if(P?.tileSchemaId===d.id){f=d?.hasNorthPole;break}const l=e.$vApp.$el.querySelector(".inner-shell"),c=n.value.querySelector(".northarrow").getBoundingClientRect().width,v=e.$vApp.$el.querySelector(".appbar")?.clientWidth||0,_=i.sr;if(f||typeof f>"u"&&!_.isWebMercator()){const d=new G("pole",{x:-96,y:90}),E=await e.geo.proj.projectGeometry(_,d),u=e.geo.map.mapPointToScreenPoint(E);if(u.screenY<0){h.value=!0;const o={screenX:l.clientWidth/2,screenY:l.clientHeight};p.value=Math.atan((u.screenX-o.screenX)/(o.screenY-u.screenY))*180/Math.PI,r.value=l.clientWidth/2+l.clientHeight*Math.tan(p.value*Math.PI/180)-c/2,r.value=Math.max(v-c/2,Math.min(e.geo.map.getPixelWidth()-c/2,r.value))}else if(h.value=!1,!A.value){A.value=!0;let o;$.value?o={style:X.ICON,icon:$.value,height:16.5,width:16.5}:o=ie;const g=e.geo.layer.createLayer({id:m,layerType:F.GRAPHIC,url:"",cosmetic:!0});e.geo.map.addLayer(g),g.loadPromise().then(()=>{const L=new O(E,"northpole"),H=new V(o);L.style=H,g.addGraphic(L)})}}else h.value=!0,p.value=0,r.value=v+(l.clientWidth-v-c)/2};return(i,f)=>(Z(),j("div",{class:"absolute transition-all duration-300 ease-out",style:K({"transform-origin":"top center",transform:`rotate(${p.value}deg)`,left:`${r.value}px`,visibility:h.value?"visible":"hidden"}),ref_key:"el",ref:n},[D("span",{class:"northarrow",innerHTML:k.value},null,8,oe)],4))}}),m="RampPoleMarker";class pe extends J{async added(){this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),{destroy:a,el:e}=this.mount(re,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this.removed=()=>{t(),this.$iApi.geo.layer.getLayer(m)&&this.$iApi.geo.map.removeLayer(m),w(this.$vApp.$pinia).$reset(),a()}}}export{m as POLE_MARKER_LAYER_ID,pe as default};
