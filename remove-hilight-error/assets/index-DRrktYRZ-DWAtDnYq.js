import{eT as r,fq as i,f6 as p,f8 as m,e$ as u,fb as d,f2 as l,eY as c,e_ as f,f0 as h,f1 as b}from"./story-CeSwA6O5.js";import"./main-B2WqJNyC.js";const v=["src"],g=r({__name:"snowman",props:{fixture:{type:i,required:!0},message:String},setup(s){const e=s,t=p(),a=p("https://i.imgur.com/p13yknD.png");return m(()=>{setTimeout(()=>{t.value.parentNode.removeChild(t.value),e.fixture.remove()},6e3)}),(n,o)=>(u(),d("div",{class:"absolute top-0 right-0",ref_key:"el",ref:t},[l("img",{style:{width:"250px"},src:a.value,alt:"Snowman",srcset:""},null,8,v)],512))}}),w=r({__name:"appbar-button",setup(s){const e=c("iApi"),t=()=>{e.fixture.add("snowman")};return(a,n)=>{const o=f("appbar-button",!0);return u(),h(o,{onClickFunction:t,tooltip:"⛄"},{default:b(()=>n[0]||(n[0]=[l("span",{class:"block h-24"},"⛄",-1)])),_:1})}}});class C extends i{added(){this.$iApi.component("snowman-appbar-button",w);const{el:e}=this.mount(g,{app:this.$element,props:{message:"This is a snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e.childNodes[0])}removed(){}}export{C as default};
