import{v as e,S as i,i as p,aa as P,e as I,ad as Ie,a0 as l,ac as a,e3 as tt,bQ as re,bI as it,bH as ot,P as C,n as nt,ag as Fe,J as Te,d7 as st,dX as Oe,e4 as Pe,e5 as Me,e6 as Re,e7 as rt,a1 as pt,cs as Ze}from"./story-C_BD4NO7.js";import{n as lt,i as ze}from"./Field-C6hA1tZj-BXzQ4VMf.js";import{$ as at,s as ut,n as dt,t as yt,Z as ct}from"./commonProperties-BtIqvFU_-Q4meFjb2.js";import{M as mt}from"./HeightModelInfo-C5vFqzyF-xTAroly5.js";import{x as ht,T as vt}from"./arcgisLayerUrl-HNYh8jvG-CIqW6FTw.js";import{k as xt,d as ft,O as X,n as wt,r as gt,a as bt}from"./featureLayerUtils-DgfQQyK4-CSdslG0v.js";import{v as jt}from"./LayerFloorInfo-DRJ8wfwx-LB9ez2on.js";import{p as St}from"./Relationship-PyhUibYK-DBHh3gT0.js";import{x as It}from"./serviceCapabilitiesUtils-rPjN5QBe-DkKicPJn.js";var pe;let T=pe=class extends I{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new pe({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([i({type:String,json:{write:!0}})],T.prototype,"expression",void 0),e([i({type:String,json:{write:!0}})],T.prototype,"name",void 0),e([i({type:["boolean","date","number","string"],json:{write:!0}})],T.prototype,"returnType",void 0),e([i({type:String,json:{write:!0}})],T.prototype,"title",void 0),T=pe=e([p("esri.form.ExpressionInfo")],T);const Et=T;let O=class extends I{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([i({type:String,json:{write:!0}})],O.prototype,"description",void 0),e([i({type:String,json:{write:!0}})],O.prototype,"label",void 0),e([i()],O.prototype,"type",void 0),e([i({type:String,json:{write:!0}})],O.prototype,"visibilityExpression",void 0),O=e([p("esri.form.elements.Element")],O);const M=O;let Z=class extends P(I){constructor(t){super(t),this.type=null}};e([i()],Z.prototype,"type",void 0),Z=e([p("esri.form.elements.inputs.attachments.Input")],Z);const F=Z,K=["any","capture","upload"];let D=class extends F{constructor(t){super(t),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([i({type:["audio"],readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0),e([i({type:K,json:{write:!0}})],D.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],D.prototype,"maxDuration",void 0),D=e([p("esri.form.elements.inputs.attachments.AudioInput")],D);const De=D;let $=class extends F{constructor(t){super(t),this.type="document",this.maxFileSize=null}};e([i({type:["document"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),e([i({type:Number,json:{write:!0}})],$.prototype,"maxFileSize",void 0),$=e([p("esri.form.elements.inputs.attachments.DocumentInput")],$);const Ve=$;let V=class extends F{constructor(t){super(t),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([i({type:["image"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([i({type:K,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],V.prototype,"maxImageSize",void 0),V=e([p("esri.form.elements.inputs.attachments.ImageInput")],V);const Ne=V;let G=class extends F{constructor(t){super(t),this.type="signature",this.inputMethod="any"}};e([i({type:["signature"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),e([i({type:K,json:{write:!0}})],G.prototype,"inputMethod",void 0),G=e([p("esri.form.elements.inputs.attachments.SignatureInput")],G);const Be=G;let N=class extends F{constructor(t){super(t),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([i({type:["video"],readOnly:!0,json:{write:!0}})],N.prototype,"type",void 0),e([i({type:K,json:{write:!0}})],N.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],N.prototype,"maxDuration",void 0),N=e([p("esri.form.elements.inputs.attachments.VideoInput")],N);const ke=N;function qe(t){return{nestableTypes:{base:F,key:"type",typeMap:{audio:De,document:Ve,image:Ne,signature:Be,video:ke}},allTypes:{base:F,key:"type",typeMap:{attachment:t,audio:De,document:Ve,image:Ne,signature:Be,video:ke}}}}function Ft(t,o,s){return t?t.map(n=>Ze(o.nestableTypes,n)):null}function Tt(t,o,s){if(!t)return null;const n=o.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Ot(t,o,s){if(!t)return null;const n=o.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}let f=class extends F{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return Ft(t,Y)}readInputs(t,o){return Tt(o.inputTypes,Y)}writeInputs(t,o){o.inputTypes=Ot(t,Y)}};e([i({type:["attachment"],readOnly:!0,json:{write:!0}})],f.prototype,"type",void 0),e([i({type:["any","exact","exactOrNone"],json:{write:!0}})],f.prototype,"attachmentAssociationType",void 0),e([i({json:{write:{isRequired:!0}}})],f.prototype,"inputTypes",void 0),e([Ie("inputTypes")],f.prototype,"castInputs",null),e([l("inputTypes")],f.prototype,"readInputs",null),e([a("inputTypes")],f.prototype,"writeInputs",null),f=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],f);const Y=qe(f),Mt=f;var le;const Rt=qe(Mt);let d=le=class extends M{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new le({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([i({type:Boolean,json:{write:!0}})],d.prototype,"allowUserRename",void 0),e([i({type:String,json:{write:{isRequired:!0}}})],d.prototype,"attachmentKeyword",void 0),e([i({type:Boolean,json:{write:!0}})],d.prototype,"displayFilename",void 0),e([i({type:String,json:{write:!0}})],d.prototype,"editableExpression",void 0),e([i({type:String,json:{write:!0}})],d.prototype,"filenameExpression",void 0),e([i({types:Rt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],d.prototype,"input",void 0),e([i({type:Number,json:{write:!0}})],d.prototype,"maxAttachmentCount",void 0),e([i({type:Number,json:{write:!0}})],d.prototype,"minAttachmentCount",void 0),e([i({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),e([i({type:Boolean,json:{write:!0}})],d.prototype,"useOriginalFilename",void 0),d=le=e([p("esri.form.elements.AttachmentElement")],d);const Ae=d;let z=class extends I{constructor(t){super(t),this.type=null}};e([i()],z.prototype,"type",void 0),z=e([p("esri.form.elements.inputs.Input")],z);const E=z;let Q=class extends E{constructor(t){super(t),this.maxLength=null,this.minLength=0}};e([i({type:Number,json:{write:!0}})],Q.prototype,"maxLength",void 0),e([i({type:Number,json:{write:!0}})],Q.prototype,"minLength",void 0),Q=e([p("esri.form.elements.inputs.TextInput")],Q);const Ee=Q;var ae;let q=ae=class extends Ee{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new ae({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["barcode-scanner"],json:{read:!1,write:!0}})],q.prototype,"type",void 0),q=ae=e([p("esri.form.elements.inputs.BarcodeScannerInput")],q);const Dt=q;var ue;let B=ue=class extends E{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ue({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([i({type:String,json:{write:!0}})],B.prototype,"noValueOptionLabel",void 0),e([i({type:Boolean,json:{write:!0}})],B.prototype,"showNoValueOption",void 0),e([i({type:["combo-box"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=ue=e([p("esri.form.elements.inputs.ComboBoxInput")],B);const Vt=B;var de;function Ue(t){return t??null}function Le(t){return t??null}let x=de=class extends E{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,o){return Ue(o.max)}writeMax(t,o){o.max=Le(t)}readMin(t,o){return Ue(o.min)}writeMin(t,o){o.min=Le(t)}clone(){return new de({max:this.max,min:this.min})}};e([i({type:String,json:{type:String,write:!0}})],x.prototype,"max",void 0),e([l("max")],x.prototype,"readMax",null),e([a("max")],x.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],x.prototype,"min",void 0),e([l("min")],x.prototype,"readMin",null),e([a("min")],x.prototype,"writeMin",null),e([i({type:["date-picker"],json:{read:!1,write:!0}})],x.prototype,"type",void 0),x=de=e([p("esri.form.elements.inputs.DatePickerInput")],x);const Nt=x;var ye;function ee(t){return t??null}function te(t){return t??null}let u=ye=class extends E{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,o){return ee(o.max)}writeMax(t,o){o.max=te(t)}readMin(t,o){return ee(o.min)}writeMin(t,o){o.min=te(t)}readTimeResolution(t,o){return ee(o.timeResolution)}writeTimeResolution(t,o){o.timeResolution=te(t)}clone(){return new ye({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([i({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),e([l("max")],u.prototype,"readMax",null),e([a("max")],u.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),e([l("min")],u.prototype,"readMin",null),e([a("min")],u.prototype,"writeMin",null),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),e([l("timeResolution")],u.prototype,"readTimeResolution",null),e([a("timeResolution")],u.prototype,"writeTimeResolution",null),e([i({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=ye=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const Bt=u;var ce;function Ce(t){return t!=null?new Date(t):null}function $e(t){return t?t.getTime():null}let h=ce=class extends E{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,o){return Ce(o.max)}writeMax(t,o){o.max=$e(t)}readMin(t,o){return Ce(o.min)}writeMin(t,o){o.min=$e(t)}clone(){return new ce({includeTime:this.includeTime,max:this.max,min:this.min})}};e([i({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([i({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([a("max")],h.prototype,"writeMax",null),e([i({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([a("min")],h.prototype,"writeMin",null),e([i({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=ce=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const kt=h;var me;let k=me=class extends E{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new me({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([i({type:String,json:{write:!0}})],k.prototype,"noValueOptionLabel",void 0),e([i({type:Boolean,json:{write:!0}})],k.prototype,"showNoValueOption",void 0),e([i({type:["radio-buttons"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=me=e([p("esri.form.elements.inputs.RadioButtonsInput")],k);const At=k;var he;let A=he=class extends E{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new he({offValue:this.offValue,onValue:this.onValue})}};e([i({type:[String,Number],json:{write:!0}})],A.prototype,"offValue",void 0),e([i({type:[String,Number],json:{write:!0}})],A.prototype,"onValue",void 0),e([i({type:["switch"],json:{read:!1,write:!0}})],A.prototype,"type",void 0),A=he=e([p("esri.form.elements.inputs.SwitchInput")],A);const Ut=A;var ve;let H=ve=class extends Ee{constructor(t){super(t),this.type="text-area"}clone(){return new ve({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["text-area"],json:{read:!1,write:!0}})],H.prototype,"type",void 0),H=ve=e([p("esri.form.elements.inputs.TextAreaInput")],H);const Lt=H;var xe;let J=xe=class extends Ee{constructor(t){super(t),this.type="text-box"}clone(){return new xe({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["text-box"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=xe=e([p("esri.form.elements.inputs.TextBoxInput")],J);const Ct=J;var fe;function ie(t){return t??null}function oe(t){return t??null}let y=fe=class extends E{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,o){return ie(o.max)}writeMax(t,o){o.max=oe(t)}readMin(t,o){return ie(o.min)}writeMin(t,o){o.min=oe(t)}readTimeResolution(t,o){return ie(o.timeResolution)}writeTimeResolution(t,o){o.timeResolution=oe(t)}clone(){return new fe({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([i({type:String,json:{type:String,write:!0}})],y.prototype,"max",void 0),e([l("max")],y.prototype,"readMax",null),e([a("max")],y.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],y.prototype,"min",void 0),e([l("min")],y.prototype,"readMin",null),e([a("min")],y.prototype,"writeMin",null),e([i({type:String,json:{type:String,write:!0}})],y.prototype,"timeResolution",void 0),e([l("timeResolution")],y.prototype,"readTimeResolution",null),e([a("timeResolution")],y.prototype,"writeTimeResolution",null),e([i({type:["time-picker"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=fe=e([p("esri.form.elements.inputs.TimePickerInput")],y);const $t=y,Gt={base:E,key:"type",typeMap:{"barcode-scanner":Dt,"combo-box":Vt,"date-picker":Nt,"datetime-picker":kt,"datetimeoffset-picker":Bt,"radio-buttons":At,switch:Ut,"text-area":Lt,"text-box":Ct,"time-picker":$t}};var we;let m=we=class extends M{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new we({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([i({types:lt,json:{read:{reader:ze},write:!0}})],m.prototype,"domain",void 0),e([i({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([i({types:Gt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([i({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=we=e([p("esri.form.elements.FieldElement")],m);const Ge=m;var ge;let b=ge=class extends M{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new ge({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:C(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([i({type:Number,json:{write:!0}})],b.prototype,"displayCount",void 0),e([i({type:["list"],json:{write:!0}})],b.prototype,"displayType",void 0),e([i({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),e([i({type:[tt],json:{write:!0}})],b.prototype,"orderByFields",void 0),e([i({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),e([i({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=ge=e([p("esri.form.elements.RelationshipElement")],b);const Qe=b;var be;let U=be=class extends M{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new be({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([i({type:String,json:{write:!0}})],U.prototype,"text",void 0),e([i({type:String,json:{write:!0}})],U.prototype,"textFormat",void 0),e([i({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],U.prototype,"type",void 0),U=be=e([p("esri.form.elements.TextElement")],U);const We=U;function He(t){return{typesWithGroup:{base:M,key:"type",typeMap:{attachment:Ae,field:Ge,group:t,relationship:Qe,text:We}},typesWithoutGroup:{base:M,key:"type",typeMap:{attachment:Ae,field:Ge,relationship:Qe,text:We}}}}function Je(t,o,s=!0){if(!t)return null;const n=s?o.typesWithGroup.typeMap:o.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Ke(t,o,s=!0){if(!t)return null;const n=s?o.typesWithGroup.typeMap:o.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}function _e(t,o,s=!0){return t?t.map(n=>Ze(s?o.typesWithGroup:o.typesWithoutGroup,n)):null}var je;let w=je=class extends M{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return _e(t,ne,!1)}readElements(t,o){return Je(o.formElements,ne,!1)}writeElements(t,o){o.formElements=Ke(t,ne,!1)}clone(){return new je({description:this.description,elements:C(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([i({json:{write:!0}})],w.prototype,"elements",void 0),e([Ie("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([a("elements")],w.prototype,"writeElements",null),e([i({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([i({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=je=e([p("esri.form.elements.GroupElement")],w);const ne=He(w),Qt=w,Wt=t=>t.type==="field",Pt=t=>t.type==="group",Zt=t=>t.type==="text";var Se;const se=He(Qt);let v=Se=class extends I{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return _e(t,se)}readElements(t,o){return Je(o.formElements,se)}writeElements(t,o){o.formElements=Ke(t,se)}clone(){return new Se({description:this.description,expressionInfos:C(this.expressionInfos),elements:C(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,o){const s=new Set,{description:n,elements:r,expressionInfos:c,title:R}=this;if(W(s,t,n),W(s,t,R),!r)return[];const et=zt(r,c).map(_=>st(s,t,_));await Promise.all(et);for(const _ of r)Xe(s,{fieldsIndex:t,relationships:o},_);return Array.from(s).sort()}};function Xe(t,o,s){const{fieldsIndex:n}=o;if(!n||n.fields.length!==t.size)switch(W(t,n,s.label),W(t,n,s.description),s.type){case"field":Oe(t,n,s.fieldName);break;case"group":s.elements.forEach(r=>Xe(t,o,r));break;case"relationship":if(o.relationships){const r=o.relationships.find(c=>c.id===s.relationshipId);r&&Oe(t,n,r.keyField)}Pe(t,n,s.orderByFields?.map(r=>r.field));break;case"text":W(t,n,s.text)}}function zt(t,o){if(!o||o.length===0)return[];const s=Ye(t),n=[];for(const r of o)s.has(r.name)&&n.push(r.expression);return n}function Ye(t){const o=new Set;for(const s of t)if(Me(o,s.visibilityExpression),!Zt(s)){if(Pt(s))Re(o,Ye(s.elements));else if(Me(o,s.editableExpression),Wt(s)){const{requiredExpression:n,valueExpression:r}=s;Re(o,[n,r])}}return o}function W(t,o,s){Pe(t,o,rt(s))}e([i({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([i({json:{write:!0}})],v.prototype,"elements",void 0),e([Ie("elements")],v.prototype,"castElements",null),e([l("elements",["formElements"])],v.prototype,"readElements",null),e([a("elements")],v.prototype,"writeElements",null),e([i({type:[Et],json:{write:!0}})],v.prototype,"expressionInfos",void 0),e([i({type:Boolean,json:{default:!1,write:!0}})],v.prototype,"preserveFieldValuesWhenHidden",void 0),e([i({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=Se=e([p("esri.form.FormTemplate")],v);const si=v;let j=class extends P(I){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([i()],j.prototype,"creatorField",void 0),e([i()],j.prototype,"creationDateField",void 0),e([i()],j.prototype,"editorField",void 0),e([i()],j.prototype,"editDateField",void 0),e([i()],j.prototype,"realm",void 0),e([i(re("dateFieldsTimeReference",!0))],j.prototype,"timeZone",void 0),j=e([p("esri.layers.support.EditFieldsInfo")],j);const qt=j;let g=class extends P(I){constructor(t){super(t)}};e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let L=class extends P(I){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([i({type:String,json:{read:{source:"shapeAreaFieldName"}}})],L.prototype,"shapeAreaField",void 0),e([i({type:String,json:{read:{source:"shapeLengthFieldName"}}})],L.prototype,"shapeLengthField",void 0),e([i({type:String,json:{read:t=>it.read(t)||ot.read(t)}})],L.prototype,"units",void 0),L=e([p("esri.layers.support.GeometryFieldsInfo")],L);const Ht=L;let S=class extends P(I){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const o={};for(const s of Object.keys(t))o[s]=ze(t[s]);return o}writeDomains(t,o){if(!t)return;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=t[n]?.toJSON());o.domains=s}};e([i({type:Number,json:{write:!0}})],S.prototype,"code",void 0),e([i({type:Object,json:{write:!0}})],S.prototype,"defaultValues",void 0),e([i({json:{write:!0}})],S.prototype,"domains",void 0),e([l("domains")],S.prototype,"readDomains",null),e([a("domains")],S.prototype,"writeDomains",null),e([i({type:String,json:{write:!0}})],S.prototype,"name",void 0),S=e([p("esri.layers.support.Subtype")],S);const Jt=S,ri=t=>{let o=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Fe.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Te.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:r,operations:c,editing:R}=s;if(!r.supportsQueryByOthers||!r.supportsQueryByAnonymous||c.supportsEditing&&!(R.supportsUpdateByOthers&&R.supportsUpdateByAnonymous&&R.supportsDeleteByOthers&&R.supportsDeleteByAnonymous))return"load"}if(this.serviceDefinitionExpression?.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(ft(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const n=this.editFieldsInfo;return(n?.creatorField||n?.editorField)&&s?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(s,n){return It(n,this.url)}readEditingInfo(s,n){const{editingInfo:r}=n;return r?{lastEditDate:r.lastEditDate!=null?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const n=C(s),{operations:r,editing:c}=n;return X(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),n):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=c.supportsDeleteByOthers=c.supportsGeometryUpdate=c.supportsUpdateByOthers=!0,n):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=c.supportsGeometryUpdate=!0),n)}readGlobalIdFieldFromService(s,n){return wt(n)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||X(this))return!1;const{operations:n,editing:r}=s;return n.supportsEditing&&!(n.supportsAdd&&n.supportsDelete&&n.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:n,editing:r}=s;return X(this)?!n.supportsQuery:!(n.supportsAdd&&n.supportsDelete&&n.supportsEditing&&n.supportsQuery&&n.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(s,n){return n.type==="Table"}readMaxScale(s,n){return n.effectiveMaxScale||s||0}readMinScale(s,n){return n.effectiveMinScale||s||0}readObjectIdFieldFromService(s,n){return gt(n)}readServiceDefinitionExpression(s,n){return n.definitionQuery||n.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const n=ht({layer:this,url:s,nonStandardUrlAllowed:!0,logger:pt.getLogger(this)});this._set("url",n.url),n.layerId!=null&&this._set("layerId",n.layerId)}writeUrl(s,n,r,c){vt(this,s,null,n,c)}readVersion(s,n){return bt(n)}};return e([i({readOnly:!0})],o.prototype,"authenticationTriggerEvent",null),e([i({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],o.prototype,"copyright",void 0),e([i({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],o.prototype,"capabilities",void 0),e([l("service","capabilities")],o.prototype,"readCapabilitiesFromService",null),e([i(re("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),e([i({type:Boolean})],o.prototype,"datesInUnknownTimezone",void 0),e([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),e([i({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],o.prototype,"displayField",void 0),e([i({readOnly:!0,type:qt})],o.prototype,"editFieldsInfo",void 0),e([i({readOnly:!0})],o.prototype,"editingInfo",void 0),e([l("editingInfo")],o.prototype,"readEditingInfo",null),e([i({readOnly:!0})],o.prototype,"effectiveCapabilities",null),e([i((()=>{const s=C(at),n=s.json.origins;return n["web-map"]={read:!1,write:!1},n["portal-item"]={read:!1,write:!1},s})())],o.prototype,"elevationInfo",void 0),e([i({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:ut}}}}})],o.prototype,"floorInfo",void 0),e([i({type:nt,json:{origins:{service:{read:{source:"extent"}}}}})],o.prototype,"fullExtent",void 0),e([i()],o.prototype,"gdbVersion",void 0),e([i({readOnly:!0,type:Ht,json:{read:{source:"geometryProperties"}}})],o.prototype,"geometryFieldsInfo",void 0),e([i({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:xt.read}}}})],o.prototype,"geometryType",void 0),e([i({type:String})],o.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],o.prototype,"readGlobalIdFieldFromService",null),e([i({readOnly:!0})],o.prototype,"hasFullEditingRestrictions",null),e([i({type:Boolean,json:{origins:{service:{read:!0}}}})],o.prototype,"hasM",void 0),e([i({readOnly:!0})],o.prototype,"hasUpdateItemRestrictions",null),e([i({type:Boolean,json:{origins:{service:{read:!0}}}})],o.prototype,"hasZ",void 0),e([i({readOnly:!0,type:mt})],o.prototype,"heightModelInfo",void 0),e([i({type:Date})],o.prototype,"historicMoment",void 0),e([i({type:Fe.ofType(g),readOnly:!0})],o.prototype,"indexes",void 0),e([i({readOnly:!0})],o.prototype,"isTable",void 0),e([l("service","isTable",["type"])],o.prototype,"readIsTableFromService",null),e([i({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],o.prototype,"layerId",void 0),e([i(dt)],o.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],o.prototype,"readMaxScale",null),e([i(yt)],o.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],o.prototype,"readMinScale",null),e([i({type:String})],o.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],o.prototype,"readObjectIdFieldFromService",null),e([i(re("preferredTimeReference"))],o.prototype,"preferredTimeZone",void 0),e([i({type:[St],readOnly:!0})],o.prototype,"relationships",void 0),e([i({type:Boolean})],o.prototype,"returnM",void 0),e([i({type:Boolean})],o.prototype,"returnZ",void 0),e([i({readOnly:!0,json:{write:!1}})],o.prototype,"serverGens",void 0),e([i({readOnly:!0})],o.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],o.prototype,"readServiceDefinitionExpression",null),e([i({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"serviceItemId",void 0),e([i()],o.prototype,"sourceJSON",void 0),e([i({type:Te,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),e([i({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"subtypeField",void 0),e([i({type:[Jt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"subtypes",void 0),e([i({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],o.prototype,"trackIdField",void 0),e([i(ct)],o.prototype,"url",null),e([a("url")],o.prototype,"writeUrl",null),e([i({json:{origins:{service:{read:!0}},read:!1}})],o.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],o.prototype,"readVersion",null),o=e([p("esri.layers.mixins.FeatureLayerBase")],o),o};export{ri as $,si as H};
