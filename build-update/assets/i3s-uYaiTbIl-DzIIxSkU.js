import{v as cr}from"./story-u82SUoyt.js";import"./main-CmCzAIzx.js";var He,ze={exports:{}};function sr(){return He||(He=1,oe=ze,J=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,ae=function(K={}){var ue,z,i=K!==void 0?K:{};i.ready=new Promise((e,n)=>{ue=e,z=n});var ce=Object.assign({},i),se=typeof window=="object",D=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var Y,b="";function De(e){return i.locateFile?i.locateFile(e,b):b+e}(se||D)&&(D?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),J&&(b=J),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D&&(Y=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var I,V,Ve=i.print||console.log.bind(console),F=i.printErr||console.warn.bind(console);Object.assign(i,ce),ce=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(I=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var E,v,R,M,W,p,fe,le,de,pe=!1;function ve(){var e=V.buffer;i.HEAP8=E=new Int8Array(e),i.HEAP16=R=new Int16Array(e),i.HEAP32=W=new Int32Array(e),i.HEAPU8=v=new Uint8Array(e),i.HEAPU16=M=new Uint16Array(e),i.HEAPU32=p=new Uint32Array(e),i.HEAPF32=fe=new Float32Array(e),i.HEAPF64=le=new Float64Array(e)}var he=[],me=[],ge=[];function Me(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Ne(i.preRun.shift());Q(he)}function Be(){Q(me)}function qe(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Ge(i.postRun.shift());Q(ge)}function Ne(e){he.unshift(e)}function Le(e){me.unshift(e)}function Ge(e){ge.unshift(e)}var k=0,O=null;function Xe(e){k++,i.monitorRunDependencies&&i.monitorRunDependencies(k)}function Ze(e){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),k==0&&O){var n=O;O=null,n()}}function B(e){i.onAbort&&i.onAbort(e),F(e="Aborted("+e+")"),pe=!0,e+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(e);throw z(n),n}var U,$e="data:application/octet-stream;base64,";function ye(e){return e.startsWith($e)}function _e(e){try{if(e==U&&I)return new Uint8Array(I);if(Y)return Y(e);throw"both async and sync fetching of the wasm failed"}catch(n){B(n)}}function Je(e){return I||!se&&!D||typeof fetch!="function"?Promise.resolve().then(()=>_e(e)):fetch(e,{credentials:"same-origin"}).then(n=>{if(!n.ok)throw"failed to load wasm binary file at '"+e+"'";return n.arrayBuffer()}).catch(()=>_e(e))}function we(e,n,r){return Je(e).then(t=>WebAssembly.instantiate(t,n)).then(t=>t).then(r,t=>{F("failed to asynchronously prepare wasm: "+t),B(t)})}function Ke(e,n,r,t){return e||typeof WebAssembly.instantiateStreaming!="function"||ye(n)||typeof fetch!="function"?we(n,r,t):fetch(n,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,r).then(t,function(u){return F("wasm streaming compile failed: "+u),F("falling back to ArrayBuffer instantiation"),we(n,r,t)}))}function Ye(){var e={env:xe,wasi_snapshot_preview1:xe};function n(t,o){var u=t.exports;return i.asm=u,V=i.asm.memory,ve(),de=i.asm.__indirect_function_table,Le(i.asm.__wasm_call_ctors),Ze(),u}function r(t){n(t.instance)}if(Xe(),i.instantiateWasm)try{return i.instantiateWasm(e,n)}catch(t){F("Module.instantiateWasm callback failed with error: "+t),z(t)}return Ke(I,U,e,r).catch(z),{}}function Q(e){for(;e.length>0;)e.shift()(i)}ye(U="i3s.wasm")||(U=De(U));var q=[];function ee(e){var n=q[e];return n||(e>=q.length&&(q.length=e+1),q[e]=n=de.get(e)),n}function Qe(e,n){ee(e)(n)}function en(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(n){p[this.ptr+4>>2]=n},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(n){p[this.ptr+8>>2]=n},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(n){n=n?1:0,E[this.ptr+12|0]=n},this.get_caught=function(){return E[this.ptr+12|0]!=0},this.set_rethrown=function(n){n=n?1:0,E[this.ptr+13|0]=n},this.get_rethrown=function(){return E[this.ptr+13|0]!=0},this.init=function(n,r){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(r)},this.set_adjusted_ptr=function(n){p[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Oe(this.get_type()))return p[this.excPtr>>2];var n=this.get_adjusted_ptr();return n!==0?n:this.excPtr}}function nn(e,n,r){throw new en(e).init(n,r),e}var N={};function be(e){for(;e.length;){var n=e.pop();e.pop()(n)}}function L(e){return this.fromWireType(W[e>>2])}var S={},j={},G={},rn=48,tn=57;function on(e){if(e===void 0)return"_unknown";var n=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=rn&&n<=tn?"_"+e:e}function an(e,n){return e=on(e),{[e]:function(){return n.apply(this,arguments)}}[e]}function ne(e,n){var r=an(n,function(t){this.name=n,this.message=t;var o=new Error(t).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},r}var Ae=void 0;function Te(e){throw new Ae(e)}function Ce(e,n,r){function t(a){var s=r(a);s.length!==e.length&&Te("Mismatched type converter count");for(var f=0;f<e.length;++f)A(e[f],s[f])}e.forEach(function(a){G[a]=n});var o=new Array(n.length),u=[],c=0;n.forEach((a,s)=>{j.hasOwnProperty(a)?o[s]=j[a]:(u.push(a),S.hasOwnProperty(a)||(S[a]=[]),S[a].push(()=>{o[s]=j[a],++c===u.length&&t(o)}))}),u.length===0&&t(o)}function un(e){var n=N[e];delete N[e];var r=n.rawConstructor,t=n.rawDestructor,o=n.fields;Ce([e],o.map(u=>u.getterReturnType).concat(o.map(u=>u.setterArgumentType)),u=>{var c={};return o.forEach((a,s)=>{var f=a.fieldName,l=u[s],d=a.getter,C=a.getterContext,y=u[s+o.length],_=a.setter,P=a.setterContext;c[f]={read:w=>l.fromWireType(d(C,w)),write:(w,ie)=>{var $=[];_(P,w,y.toWireType($,ie)),be($)}}}),[{name:n.name,fromWireType:function(a){var s={};for(var f in c)s[f]=c[f].read(a);return t(a),s},toWireType:function(a,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=r();for(f in c)c[f].write(l,s[f]);return a!==null&&a.push(t,l),l},argPackAdvance:8,readValueFromPointer:L,destructorFunction:t}]})}function cn(e,n,r,t,o){}function re(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function sn(){for(var e=new Array(256),n=0;n<256;++n)e[n]=String.fromCharCode(n);Pe=e}var Pe=void 0;function h(e){for(var n="",r=e;v[r];)n+=Pe[v[r++]];return n}var Ee=void 0;function m(e){throw new Ee(e)}function A(e,n,r={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=n.name;if(e||m('type "'+t+'" must have a positive integer typeid pointer'),j.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;m("Cannot register type '"+t+"' twice")}if(j[e]=n,delete G[e],S.hasOwnProperty(e)){var o=S[e];delete S[e],o.forEach(u=>u())}}function fn(e,n,r,t,o){var u=re(r);A(e,{name:n=h(n),fromWireType:function(c){return!!c},toWireType:function(c,a){return a?t:o},argPackAdvance:8,readValueFromPointer:function(c){var a;if(r===1)a=E;else if(r===2)a=R;else{if(r!==4)throw new TypeError("Unknown boolean type size: "+n);a=W}return this.fromWireType(a[c>>u])},destructorFunction:null})}function ln(){this.allocated=[void 0],this.freelist=[],this.get=function(e){return this.allocated[e]},this.allocate=function(e){let n=this.freelist.pop()||this.allocated.length;return this.allocated[n]=e,n},this.free=function(e){this.allocated[e]=void 0,this.freelist.push(e)}}var g=new ln;function We(e){e>=g.reserved&&--g.get(e).refcount==0&&g.free(e)}function dn(){for(var e=0,n=g.reserved;n<g.allocated.length;++n)g.allocated[n]!==void 0&&++e;return e}function pn(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=dn}var X={toValue:e=>(e||m("Cannot use deleted val. handle = "+e),g.get(e).value),toHandle:e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:e})}}};function vn(e,n){A(e,{name:n=h(n),fromWireType:function(r){var t=X.toValue(r);return We(r),t},toWireType:function(r,t){return X.toHandle(t)},argPackAdvance:8,readValueFromPointer:L,destructorFunction:null})}function hn(e,n){switch(n){case 2:return function(r){return this.fromWireType(fe[r>>2])};case 3:return function(r){return this.fromWireType(le[r>>3])};default:throw new TypeError("Unknown float type: "+e)}}function mn(e,n,r){var t=re(r);A(e,{name:n=h(n),fromWireType:function(o){return o},toWireType:function(o,u){return u},argPackAdvance:8,readValueFromPointer:hn(n,t),destructorFunction:null})}function gn(e,n,r,t,o,u){var c=n.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=n[1]!==null&&r!==null,s=!1,f=1;f<n.length;++f)if(n[f]!==null&&n[f].destructorFunction===void 0){s=!0;break}var l=n[0].name!=="void",d=c-2,C=new Array(d),y=[],_=[];return function(){var P;arguments.length!==d&&m("function "+e+" called with "+arguments.length+" arguments, expected "+d+" args!"),_.length=0,y.length=a?2:1,y[0]=o,a&&(P=n[1].toWireType(_,this),y[1]=P);for(var w=0;w<d;++w)C[w]=n[w+2].toWireType(_,arguments[w]),y.push(C[w]);function ie($){if(s)be(_);else for(var x=a?1:2;x<n.length;x++){var ur=x===1?P:C[x-2];n[x].destructorFunction!==null&&n[x].destructorFunction(ur)}if(l)return n[0].fromWireType($)}return ie(t.apply(null,y))}}function yn(e,n,r){if(e[n].overloadTable===void 0){var t=e[n];e[n]=function(){return e[n].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[n].overloadTable+")!"),e[n].overloadTable[arguments.length].apply(this,arguments)},e[n].overloadTable=[],e[n].overloadTable[t.argCount]=t}}function _n(e,n,r){i.hasOwnProperty(e)?((r===void 0||i[e].overloadTable!==void 0&&i[e].overloadTable[r]!==void 0)&&m("Cannot register public name '"+e+"' twice"),yn(i,e,e),i.hasOwnProperty(r)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[e].overloadTable[r]=n):(i[e]=n,r!==void 0&&(i[e].numArguments=r))}function wn(e,n){for(var r=[],t=0;t<e;t++)r.push(p[n+4*t>>2]);return r}function bn(e,n,r){i.hasOwnProperty(e)||Te("Replacing nonexistant public symbol"),i[e].overloadTable!==void 0&&r!==void 0?i[e].overloadTable[r]=n:(i[e]=n,i[e].argCount=r)}function An(e,n,r){var t=i["dynCall_"+e];return r&&r.length?t.apply(null,[n].concat(r)):t.call(null,n)}function Tn(e,n,r){return e.includes("j")?An(e,n,r):ee(n).apply(null,r)}function Cn(e,n){var r=[];return function(){return r.length=0,Object.assign(r,arguments),Tn(e,n,r)}}function H(e,n){function r(){return e.includes("j")?Cn(e,n):ee(n)}e=h(e);var t=r();return typeof t!="function"&&m("unknown function pointer with signature "+e+": "+n),t}var ke=void 0;function je(e){var n=Ie(e),r=h(n);return T(n),r}function Pn(e,n){var r=[],t={};function o(u){t[u]||j[u]||(G[u]?G[u].forEach(o):(r.push(u),t[u]=!0))}throw n.forEach(o),new ke(e+": "+r.map(je).join([", "]))}function En(e,n,r,t,o,u,c){var a=wn(n,r);e=h(e),o=H(t,o),_n(e,function(){Pn("Cannot call "+e+" due to unbound types",a)},n-1),Ce([],a,function(s){var f=[s[0],null].concat(s.slice(1));return bn(e,gn(e,f,null,o,u),n-1),[]})}function Wn(e,n,r){switch(n){case 0:return r?function(t){return E[t]}:function(t){return v[t]};case 1:return r?function(t){return R[t>>1]}:function(t){return M[t>>1]};case 2:return r?function(t){return W[t>>2]}:function(t){return p[t>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function kn(e,n,r,t,o){n=h(n);var u=re(r),c=l=>l;if(t===0){var a=32-8*r;c=l=>l<<a>>>a}var s=n.includes("unsigned"),f=(l,d)=>{};A(e,{name:n,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:Wn(n,u,t!==0),destructorFunction:null})}function jn(e,n,r){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function o(u){var c=p,a=c[u>>=2],s=c[u+1];return new t(c.buffer,s,a)}A(e,{name:r=h(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function Fn(e,n,r,t){if(!(t>0))return 0;for(var o=r,u=r+t-1,c=0;c<e.length;++c){var a=e.charCodeAt(c);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++c)),a<=127){if(r>=u)break;n[r++]=a}else if(a<=2047){if(r+1>=u)break;n[r++]=192|a>>6,n[r++]=128|63&a}else if(a<=65535){if(r+2>=u)break;n[r++]=224|a>>12,n[r++]=128|a>>6&63,n[r++]=128|63&a}else{if(r+3>=u)break;n[r++]=240|a>>18,n[r++]=128|a>>12&63,n[r++]=128|a>>6&63,n[r++]=128|63&a}}return n[r]=0,r-o}function Rn(e,n,r){return Fn(e,v,n,r)}function Sn(e){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);t<=127?n++:t<=2047?n+=2:t>=55296&&t<=57343?(n+=4,++r):n+=3}return n}var Fe=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Re(e,n,r){for(var t=n+r,o=n;e[o]&&!(o>=t);)++o;if(o-n>16&&e.buffer&&Fe)return Fe.decode(e.subarray(n,o));for(var u="";n<o;){var c=e[n++];if(128&c){var a=63&e[n++];if((224&c)!=192){var s=63&e[n++];if((c=(240&c)==224?(15&c)<<12|a<<6|s:(7&c)<<18|a<<12|s<<6|63&e[n++])<65536)u+=String.fromCharCode(c);else{var f=c-65536;u+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else u+=String.fromCharCode((31&c)<<6|a)}else u+=String.fromCharCode(c)}return u}function xn(e,n){return e?Re(v,e,n):""}function In(e,n){var r=(n=h(n))==="std::string";A(e,{name:n,fromWireType:function(t){var o,u=p[t>>2],c=t+4;if(r)for(var a=c,s=0;s<=u;++s){var f=c+s;if(s==u||v[f]==0){var l=xn(a,f-a);o===void 0?o=l:(o+="\0",o+=l),a=f+1}}else{var d=new Array(u);for(s=0;s<u;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(t),o},toWireType:function(t,o){var u;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),u=r&&c?Sn(o):o.length;var a=te(4+u+1),s=a+4;if(p[a>>2]=u,r&&c)Rn(o,s,u+1);else if(c)for(var f=0;f<u;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<u;++f)v[s+f]=o[f];return t!==null&&t.push(T,a),a},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(t){T(t)}})}var Se=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function On(e,n){for(var r=e,t=r>>1,o=t+n/2;!(t>=o)&&M[t];)++t;if((r=t<<1)-e>32&&Se)return Se.decode(v.subarray(e,r));for(var u="",c=0;!(c>=n/2);++c){var a=R[e+2*c>>1];if(a==0)break;u+=String.fromCharCode(a)}return u}function Un(e,n,r){if(r===void 0&&(r=2147483647),r<2)return 0;for(var t=n,o=(r-=2)<2*e.length?r/2:e.length,u=0;u<o;++u){var c=e.charCodeAt(u);R[n>>1]=c,n+=2}return R[n>>1]=0,n-t}function Hn(e){return 2*e.length}function zn(e,n){for(var r=0,t="";!(r>=n/4);){var o=W[e+4*r>>2];if(o==0)break;if(++r,o>=65536){var u=o-65536;t+=String.fromCharCode(55296|u>>10,56320|1023&u)}else t+=String.fromCharCode(o)}return t}function Dn(e,n,r){if(r===void 0&&(r=2147483647),r<4)return 0;for(var t=n,o=t+r-4,u=0;u<e.length;++u){var c=e.charCodeAt(u);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&e.charCodeAt(++u)),W[n>>2]=c,(n+=4)+4>o)break}return W[n>>2]=0,n-t}function Vn(e){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);t>=55296&&t<=57343&&++r,n+=4}return n}function Mn(e,n,r){var t,o,u,c,a;r=h(r),n===2?(t=On,o=Un,c=Hn,u=()=>M,a=1):n===4&&(t=zn,o=Dn,c=Vn,u=()=>p,a=2),A(e,{name:r,fromWireType:function(s){for(var f,l=p[s>>2],d=u(),C=s+4,y=0;y<=l;++y){var _=s+4+y*n;if(y==l||d[_>>a]==0){var P=t(C,_-C);f===void 0?f=P:(f+="\0",f+=P),C=_+n}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+r);var l=c(f),d=te(4+l+n);return p[d>>2]=l>>a,o(f,d+4,l+n),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(s){T(s)}})}function Bn(e,n,r,t,o,u){N[e]={name:h(n),rawConstructor:H(r,t),rawDestructor:H(o,u),fields:[]}}function qn(e,n,r,t,o,u,c,a,s,f){N[e].fields.push({fieldName:h(n),getterReturnType:r,getter:H(t,o),getterContext:u,setterArgumentType:c,setter:H(a,s),setterContext:f})}function Nn(e,n){A(e,{isVoid:!0,name:n=h(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(r,t){}})}function Ln(e){e>4&&(g.get(e).refcount+=1)}var Gn={};function Xn(e){var n=Gn[e];return n===void 0?h(e):n}function Zn(e){return X.toHandle(Xn(e))}function $n(e,n){var r=j[e];return r===void 0&&m(n+" has unknown type "+je(e)),r}function Jn(e,n){var r=(e=$n(e,"_emval_take_value")).readValueFromPointer(n);return X.toHandle(r)}function Kn(){B("")}function Yn(e,n,r){v.copyWithin(e,n,n+r)}function Qn(){return 2147483648}function er(e){var n=V.buffer;try{return V.grow(e-n.byteLength+65535>>>16),ve(),1}catch{}}function nr(e){var n=v.length;e>>>=0;var r=Qn();if(e>r)return!1;let t=(c,a)=>c+(a-c%a)%a;for(var o=1;o<=4;o*=2){var u=n*(1+.2/o);if(u=Math.min(u,e+100663296),er(Math.min(r,t(Math.max(e,u),65536))))return!0}return!1}function rr(e){return 52}function tr(e,n,r,t,o){return 70}var ir=[null,[],[]];function or(e,n){var r=ir[e];n===0||n===10?((e===1?Ve:F)(Re(r,0)),r.length=0):r.push(n)}function ar(e,n,r,t){for(var o=0,u=0;u<r;u++){var c=p[n>>2],a=p[n+4>>2];n+=8;for(var s=0;s<a;s++)or(e,v[c+s]);o+=a}return p[t>>2]=o,0}Ae=i.InternalError=ne(Error,"InternalError"),sn(),Ee=i.BindingError=ne(Error,"BindingError"),pn(),ke=i.UnboundTypeError=ne(Error,"UnboundTypeError");var xe={__call_sighandler:Qe,__cxa_throw:nn,_embind_finalize_value_object:un,_embind_register_bigint:cn,_embind_register_bool:fn,_embind_register_emval:vn,_embind_register_float:mn,_embind_register_function:En,_embind_register_integer:kn,_embind_register_memory_view:jn,_embind_register_std_string:In,_embind_register_std_wstring:Mn,_embind_register_value_object:Bn,_embind_register_value_object_field:qn,_embind_register_void:Nn,_emval_decref:We,_emval_incref:Ln,_emval_new_cstring:Zn,_emval_take_value:Jn,abort:Kn,emscripten_memcpy_big:Yn,emscripten_resize_heap:nr,fd_close:rr,fd_seek:tr,fd_write:ar};Ye();var te=function(){return(te=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},Ie=function(){return(Ie=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Z,Oe=function(){return(Oe=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Ue(){function e(){Z||(Z=!0,i.calledRun=!0,pe||(Be(),ue(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),qe()))}k>0||(Me(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),e()},1)):e()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},O=function e(){Z||Ue(),Z||(O=e)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Ue(),K.ready},oe.exports=ae),ze.exports;var oe,J,ae}const fr=cr(sr()),pr=Object.freeze(Object.defineProperty({__proto__:null,default:fr},Symbol.toStringTag,{value:"Module"}));export{pr as i};
