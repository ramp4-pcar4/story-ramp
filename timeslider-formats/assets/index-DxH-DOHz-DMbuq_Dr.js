const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p2-screen-1-CQoqpp13-DLHWPxa0.js","./story-BJQwqSiV.js","./main-BWo3aSQp.js","./main-Cypivj38.css","./story-BAJNtvJN.css"])))=>i.map(i=>d[i]);
import{_ as w}from"./main-BWo3aSQp.js";import{eT as i,fq as v,fu as m,eY as x,e_ as b,e$ as u,f0 as g,f1 as r,f2 as e,fF as G,fG as c,eX as y,fg as p,f4 as h}from"./story-BJQwqSiV.js";const A=i({__name:"appbar-button",props:{options:{type:Object}},setup(l){const a=x("iApi"),t=()=>{a.panel.toggle({id:"p2",screen:"p-2-screen-2"})};return(n,s)=>{const d=b("appbar-button",!0);return u(),g(d,{onClickFunction:t,tooltip:"Gazebo"},{default:r(()=>[e("span",{style:G({color:l.options?.colour??"#BDBDBD"})},"G ",4)]),_:1})}}}),S={class:"flex flex-col items-center"},j=i({__name:"p1-screen-1",props:{panel:{type:Object,required:!0}},setup(l){return(a,t)=>{const n=b("panel-screen");return u(),g(n,{panel:l.panel},{header:r(()=>t[1]||(t[1]=[c(" Gazebo/Panel 1/Screen A ")])),controls:r(()=>t[2]||(t[2]=[e("a",{href:"javascript:;"},"Option 1",-1),e("a",{href:"javascript:;"},"Option 2",-1),e("a",{href:"javascript:;"},"Option 3",-1)])),content:r(()=>[e("div",S,[e("button",{type:"button",onClick:t[0]||(t[0]=s=>l.panel.show({screen:"p-1-screen-2"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 2 "),t[3]||(t[3]=e("br",null,null,-1)),t[4]||(t[4]=e("img",{src:"https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",alt:"Gazebo1"},null,-1))])]),_:1},8,["panel"])}}}),B={class:"flex flex-col items-center"},P=i({__name:"p1-screen-2",props:{panel:{type:Object,required:!0}},setup(l){return(a,t)=>{const n=b("panel-screen");return u(),g(n,{panel:l.panel},{header:r(()=>t[1]||(t[1]=[c(" Gazebo/Panel 1/Screen B ")])),content:r(()=>[e("div",B,[e("button",{type:"button",onClick:t[0]||(t[0]=s=>l.panel.show({screen:"p-1-screen-1"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 1 "),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=e("img",{src:"http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",alt:"Gazebo2"},null,-1))])]),_:1},8,["panel"])}}}),C={class:"flex flex-row justify-center items-center mt-16"},O={class:"mt-16"},k=i({__name:"p2-screen-2",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(l){const a=l,{t}=y(),n=x("iApi"),s=()=>{a.panel.show("p-2-screen-3"),n.event.emit("gazebo/beholdMyText","I am a cat")};return(d,o)=>{const z=b("panel-screen");return u(),g(z,{panel:l.panel},{header:r(()=>o[2]||(o[2]=[c(" Gazebo/Panel 2/Screen B ")])),content:r(()=>[c(p(h(t)("gz.hello2"))+" ",1),e("div",C,[e("button",{type:"button",onClick:o[0]||(o[0]=_=>l.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen B"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),e("button",{type:"button",onClick:o[1]||(o[1]=_=>s()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," See a cat ")]),e("p",O,p(l.greeting),1)]),_:1},8,["panel"])}}}),T={class:"flex flex-col items-center mt-16"},D={class:"ml-32 font-bold"},$={class:"ml-32 font-bold"},q={class:"ml-32 font-bold"},I=i({__name:"p2-screen-3",props:{panel:{type:Object,required:!0}},setup(l){const{t:a}=y({messages:{en:{lang_native:"En",who:"[me cat]"},fr:{lang_native:"Fr",who:"[moi chat]"}}});return(t,n)=>{const s=b("panel-screen");return u(),g(s,{panel:l.panel},{header:r(()=>n[1]||(n[1]=[c(" Gazebo/Panel 2/Screen C ")])),content:r(()=>[e("div",T,[e("button",{type:"button",onClick:n[0]||(n[0]=d=>l.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen C"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),n[5]||(n[5]=e("img",{class:"my-16",src:"https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",alt:"",srcset:""},null,-1)),n[6]||(n[6]=e("p",null,"Locale merging:",-1)),e("dl",null,[n[2]||(n[2]=e("dt",null,"global locale:",-1)),e("dd",D,p(h(a)("lang_native")),1),n[3]||(n[3]=e("dt",null,"fixture locale:",-1)),e("dd",$,p(h(a)("gz.hello")),1),n[4]||(n[4]=e("dt",null,"common panels locale:",-1)),e("dd",q,p(h(a)("who")),1)])])]),_:1},8,["panel"])}}}),f={en:{"gz.hello":"I'm a simple panel - but from a locale file","gz.hello2":"I'm a simple panel","gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},fr:{"gz.hello":'Bonjour. Je suis un panel"',"gz.hello2":'Bonjour. Je suis un panel"',"gz.alert1":"Gazebo","gz.alert2":"Gazebo deux"}},F="gazebo/beholdMyText";class J extends v{added(){this.$iApi.event.registerEventName(F),this.$iApi.component("gazebo-appbar-button",A),this.$iApi.panel.register({id:"p1",config:{screens:{"p-1-screen-1":m(j),"p-1-screen-2":m(P)},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert1"}},{i18n:{messages:f}}),this.$iApi.panel.register({id:"p2",config:{screens:{"p-2-screen-1":()=>new Promise(a=>setTimeout(()=>w(()=>import("./p2-screen-1-CQoqpp13-DLHWPxa0.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(t=>{a(t)}),2e3)),"p-2-screen-2":m(k),"p-2-screen-3":()=>new Promise(a=>a(m(I)))},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert2"}},{i18n:{messages:f}}),this.handlePanelTeleports(["p1","p2"])}}export{J as default};
