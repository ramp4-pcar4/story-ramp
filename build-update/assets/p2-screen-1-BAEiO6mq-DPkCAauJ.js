import{p0 as c,p4 as i,p7 as b,p8 as g,p9 as u,pa as n,pP as s,pp as r,pd as m,pb as p}from"./story-u82SUoyt.js";import"./main-CmCzAIzx.js";const d={class:"flex flex-row justify-center items-center mt-16"},h={class:"mt-16"},w=c({__name:"p2-screen-1",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(t){const{t:o}=i();return(x,e)=>{const a=b("panel-screen");return g(),u(a,{panel:t.panel},{header:n(()=>e[2]||(e[2]=[s(" Gazebo/Panel 2/Screen A ")])),content:n(()=>[s(r(m(o)("gz.hello"))+" ",1),p("div",d,[p("button",{type:"button",onClick:e[0]||(e[0]=l=>t.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),p("button",{type:"button",onClick:e[1]||(e[1]=l=>t.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),p("p",h,r(t.greeting),1)]),_:1},8,["panel"])}}});export{w as default};
