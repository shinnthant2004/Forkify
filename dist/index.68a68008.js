function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire7e89;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire7e89=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.68a68008.js","eyyUD":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,d,p,f={},h="object"==typeof document&&document.all,g=(p={all:h,IS_HTMLDDA:void 0===h&&void 0!==h}).all;f=p.IS_HTMLDDA?function(e){return"function"==typeof e||e===g}:function(e){return"function"==typeof e};var v,m={},y={};v=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var b=Function.prototype,_=b.call,w=v&&b.bind.bind(_,_);y=v?w:function(e){return function(){return _.apply(e,arguments)}};var k,E,S;S=function(e){return null==e};var O=TypeError;E=function(e){if(S(e))throw O("Can't call method on "+e);return e};var j=Object;k=function(e){return j(E(e))};var L=y({}.hasOwnProperty);m=Object.hasOwn||function(e,t){return L(k(e),t)};var F,$=Function.prototype,x=c&&Object.getOwnPropertyDescriptor,M=m($,"name"),P={EXISTS:M,PROPER:M&&"something"===function(){}.name,CONFIGURABLE:M&&(!c||c&&x($,"name").configurable)}.CONFIGURABLE,T={},I={},q=Object.defineProperty;F=function(e,t){try{q(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var H=a["__core-js_shared__"]||F("__core-js_shared__",{});I=H;var A=y(Function.toString);f(I.inspectSource)||(I.inspectSource=function(e){return A(e)}),T=I.inspectSource;var N,C,R=a.WeakMap;C=f(R)&&/native code/.test(String(R));var D={},W=p.all;D=p.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:f(e)||e===W}:function(e){return"object"==typeof e?null!==e:f(e)};var z,U,B,G={},J=a.document,V=D(J)&&D(J.createElement);B=function(e){return V?J.createElement(e):{}},U=!c&&!u((function(){return 7!=Object.defineProperty(B("div"),"a",{get:function(){return 7}}).a}));var Y;Y=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Q,K=String,X=TypeError;Q=function(e){if(D(e))return e;throw X(K(e)+" is not an object")};var Z,ee,te={},ne=Function.prototype.call;te=v?ne.bind(ne):function(){return ne.apply(ne,arguments)};var re,ie={},oe=function(e){return f(e)?e:void 0};re=function(e,t){return arguments.length<2?oe(a[e]):a[e]&&a[e][t]};var ae={};ae=y({}.isPrototypeOf);var se,ce,ue,le={};le=re("navigator","userAgent")||"";var de,pe,fe=a.process,he=a.Deno,ge=fe&&fe.versions||he&&he.version,ve=ge&&ge.v8;ve&&(pe=(de=ve.split("."))[0]>0&&de[0]<4?1:+(de[0]+de[1])),!pe&&le&&(!(de=le.match(/Edge\/(\d+)/))||de[1]>=74)&&(de=le.match(/Chrome\/(\d+)/))&&(pe=+de[1]),ue=pe,ce=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})),se=ce&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;ie=se?function(e){return"symbol"==typeof e}:function(e){var t=re("Symbol");return f(t)&&ae(t.prototype,me(e))};var ye,be,_e,we=String;_e=function(e){try{return we(e)}catch(e){return"Object"}};var ke=TypeError;be=function(e){if(f(e))return e;throw ke(_e(e)+" is not a function")},ye=function(e,t){var n=e[t];return S(n)?void 0:be(n)};var Ee,Se=TypeError;Ee=function(e,t){var n,r;if("string"===t&&f(n=e.toString)&&!D(r=te(n,e)))return r;if(f(n=e.valueOf)&&!D(r=te(n,e)))return r;if("string"!==t&&f(n=e.toString)&&!D(r=te(n,e)))return r;throw Se("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var je,Le=0,Fe=Math.random(),$e=y(1..toString);je=function(e){return"Symbol("+(void 0===e?"":e)+")_"+$e(++Le+Fe,36)};var xe=Oe("wks"),Me=a.Symbol,Pe=Me&&Me.for,Te=se?Me:Me&&Me.withoutSetter||je,Ie=TypeError,qe=function(e){if(!m(xe,e)||!ce&&"string"!=typeof xe[e]){var t="Symbol."+e;ce&&m(Me,e)?xe[e]=Me[e]:xe[e]=se&&Pe?Pe(t):Te(t)}return xe[e]}("toPrimitive");ee=function(e,t){if(!D(e)||ie(e))return e;var n,r=ye(e,qe);if(r){if(void 0===t&&(t="default"),n=te(r,e,t),!D(n)||ie(n))return n;throw Ie("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ee(e,t)},Z=function(e){var t=ee(e,"string");return ie(t)?t:t+""};var He=TypeError,Ae=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor;z=c?Y?function(e,t,n){if(Q(e),t=Z(t),Q(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ne(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ae(e,t,n)}:Ae:function(e,t,n){if(Q(e),t=Z(t),Q(n),U)try{return Ae(e,t,n)}catch(e){}if("get"in n||"set"in n)throw He("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ce;Ce=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},G=c?function(e,t,n){return z(e,t,Ce(1,n))}:function(e,t,n){return e[t]=n,e};var Re,De=Oe("keys");Re=function(e){return De[e]||(De[e]=je(e))};var We={};We={};var ze,Ue,Be,Ge=a.TypeError,Je=a.WeakMap;if(C||I.state){var Ve=I.state||(I.state=new Je);Ve.get=Ve.get,Ve.has=Ve.has,Ve.set=Ve.set,ze=function(e,t){if(Ve.has(e))throw Ge("Object already initialized");return t.facade=e,Ve.set(e,t),t},Ue=function(e){return Ve.get(e)||{}},Be=function(e){return Ve.has(e)}}else{var Ye=Re("state");We[Ye]=!0,ze=function(e,t){if(m(e,Ye))throw Ge("Object already initialized");return t.facade=e,G(e,Ye,t),t},Ue=function(e){return m(e,Ye)?e[Ye]:{}},Be=function(e){return m(e,Ye)}}var Qe=(N={set:ze,get:Ue,has:Be,enforce:function(e){return Be(e)?Ue(e):ze(e,{})},getterFor:function(e){return function(t){var n;if(!D(t)||(n=Ue(t)).type!==e)throw Ge("Incompatible receiver, "+e+" required");return n}}}).enforce,Ke=N.get,Xe=Object.defineProperty,Ze=c&&!u((function(){return 8!==Xe((function(){}),"length",{value:8}).length})),et=String(String).split("String"),tt=d=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!m(e,"name")||P&&e.name!==t)&&(c?Xe(e,"name",{value:t,configurable:!0}):e.name=t),Ze&&n&&m(n,"arity")&&e.length!==n.arity&&Xe(e,"length",{value:n.arity});try{n&&m(n,"constructor")&&n.constructor?c&&Xe(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Qe(e);return m(r,"source")||(r.source=et.join("string"==typeof t?t:"")),e};Function.prototype.toString=tt((function(){return f(this)&&Ke(this).source||T(this)}),"toString"),l=function(e,t,n){return n.get&&d(n.get,t,{getter:!0}),n.set&&d(n.set,t,{setter:!0}),z(e,t,n)};var nt;nt=function(){var e=Q(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var rt=a.RegExp,it=rt.prototype;c&&u((function(){var e=!0;try{rt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},o={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(o.hasIndices="d"),o)i(a,o[a]);return Object.getOwnPropertyDescriptor(it,"flags").get.call(t)!==r||n!==r}))&&l(it,"flags",{configurable:!0,get:nt});var ot,at,st,ct={}.propertyIsEnumerable,ut=Object.getOwnPropertyDescriptor,lt=ut&&!ct.call({1:2},1);st=lt?function(e){var t=ut(this,e);return!!t&&t.enumerable}:ct;var dt,pt,ft={},ht=y({}.toString),gt=y("".slice);pt=function(e){return gt(ht(e),8,-1)};var vt=Object,mt=y("".split);ft=u((function(){return!vt("z").propertyIsEnumerable(0)}))?function(e){return"String"==pt(e)?mt(e,""):vt(e)}:vt,dt=function(e){return ft(E(e))};var yt,bt=Object.getOwnPropertyDescriptor,_t=at=c?bt:function(e,t){if(e=dt(e),t=Z(t),U)try{return bt(e,t)}catch(e){}if(m(e,t))return Ce(!te(st,e,t),e[t])};yt=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(f(n)&&d(n,o,r),r.global)i?e[t]=n:F(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:z(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var wt,kt,Et,St,Ot,jt={},Lt={},Ft=Math.ceil,$t=Math.floor;Lt=Math.trunc||function(e){var t=+e;return(t>0?$t:Ft)(t)},Ot=function(e){var t=+e;return t!=t||0===t?0:Lt(t)};var xt=Math.max,Mt=Math.min;St=function(e,t){var n=Ot(e);return n<0?xt(n+t,0):Mt(n,t)};var Pt,Tt,It=Math.min;Tt=function(e){return e>0?It(Ot(e),9007199254740991):0},Pt=function(e){return Tt(e.length)};var qt=function(e){return function(t,n,r){var i,o=dt(t),a=Pt(o),s=St(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Ht={includes:qt(!0),indexOf:qt(!1)}.indexOf,At=y([].push);Et=function(e,t){var n,r=dt(e),i=0,o=[];for(n in r)!m(We,n)&&m(r,n)&&At(o,n);for(;t.length>i;)m(r,n=t[i++])&&(~Ht(o,n)||At(o,n));return o};var Nt,Ct=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");kt=Object.getOwnPropertyNames||function(e){return Et(e,Ct)},Nt=Object.getOwnPropertySymbols;var Rt=y([].concat);jt=re("Reflect","ownKeys")||function(e){var t=kt(Q(e));return Nt?Rt(t,Nt(e)):t},wt=function(e,t,n){for(var r=jt(t),i=z,o=at,a=0;a<r.length;a++){var s=r[a];m(e,s)||n&&m(n,s)||i(e,s,o(t,s))}};var Dt={},Wt=/#|\.prototype\./,zt=function(e,t){var n=Bt[Ut(e)];return n==Jt||n!=Gt&&(f(t)?u(t):!!t)},Ut=zt.normalize=function(e){return String(e).replace(Wt,".").toLowerCase()},Bt=zt.data={},Gt=zt.NATIVE="N",Jt=zt.POLYFILL="P";Dt=zt,ot=function(e,t){var n,r,i,o,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||F(c,{}):(a[c]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(s=_t(n,r))&&s.value:n[r],!Dt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;wt(o,i)}(e.sham||i&&i.sham)&&G(o,"sham",!0),yt(n,r,o,e)}};var Vt,Yt={},Qt=Function.prototype,Kt=Qt.apply,Xt=Qt.call;Yt="object"==typeof Reflect&&Reflect.apply||(v?Xt.bind(Kt):function(){return Xt.apply(Kt,arguments)});var Zt,en,tn=(en=function(e){if("Function"===pt(e))return y(e)})(en.bind);Zt=function(e,t){return be(e),void 0===t?e:v?tn(e,t):function(){return e.apply(t,arguments)}};var nn={};nn=re("document","documentElement");var rn={};rn=y([].slice);var on,an=TypeError;on=function(e,t){if(e<t)throw an("Not enough arguments");return e};var sn;sn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var cn;cn="process"==pt(a.process);var un,ln,dn,pn,fn=a.setImmediate,hn=a.clearImmediate,gn=a.process,vn=a.Dispatch,mn=a.Function,yn=a.MessageChannel,bn=a.String,_n=0,wn={};try{un=a.location}catch(e){}var kn=function(e){if(m(wn,e)){var t=wn[e];delete wn[e],t()}},En=function(e){return function(){kn(e)}},Sn=function(e){kn(e.data)},On=function(e){a.postMessage(bn(e),un.protocol+"//"+un.host)};fn&&hn||(fn=function(e){on(arguments.length,1);var t=f(e)?e:mn(e),n=rn(arguments,1);return wn[++_n]=function(){Yt(t,void 0,n)},ln(_n),_n},hn=function(e){delete wn[e]},cn?ln=function(e){gn.nextTick(En(e))}:vn&&vn.now?ln=function(e){vn.now(En(e))}:yn&&!sn?(pn=(dn=new yn).port2,dn.port1.onmessage=Sn,ln=Zt(pn.postMessage,pn)):a.addEventListener&&f(a.postMessage)&&!a.importScripts&&un&&"file:"!==un.protocol&&!u(On)?(ln=On,a.addEventListener("message",Sn,!1)):ln="onreadystatechange"in B("script")?function(e){nn.appendChild(B("script")).onreadystatechange=function(){nn.removeChild(this),kn(e)}}:function(e){setTimeout(En(e),0)});var jn=(Vt={set:fn,clear:hn}).clear;ot({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==jn},{clearImmediate:jn});var Ln=Vt.set;ot({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==Ln},{setImmediate:Ln});var Fn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new $(r||[]);return i(a,"_invoke",{value:O(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,n){var r=p;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return M()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?h:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=x,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=Fn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Fn:Function("r","regeneratorRuntime = r")(Fn)}const $n=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},xn=async e=>{try{const t=await Promise.race([fetch(e),$n(10)]),n=await t.json();if(!t.ok)throw new Error(`${n.message} ${t.status}`);return n}catch(e){throw e}},Mn=async(e,t)=>{try{const n=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await Promise.race([n,$n(10)]),i=await r.json();if(!r.ok)throw new Error(`${i.message} ${r.status}`);return i}catch(e){}},Pn={recipe:{},search:{query:"",page:1,resultsPerPage:10,results:[]},bookmarks:[]},Tn=e=>{let{recipe:t}=e.data;Pn.recipe={id:t.id,title:t.title,cookingTime:t.cooking_time,servings:t.servings,publisher:t.publisher,ingredients:t.ingredients,image:t.image_url,sourceUrl:t.source_url,...t.key&&{key:t.key}}},In=(e=Pn.search.page)=>{Pn.search.page=e;const t=10*(e-1),n=10*e;return Pn.search.page=1,Pn.search.results.slice(t,n)},qn=()=>{localStorage.setItem("bookmarks",JSON.stringify(Pn.bookmarks))},Hn=e=>{Pn.recipe.bookmarked=!0,Pn.bookmarks.push(e),qn()},An=async e=>{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw new Error("Please fill as format");const[n,r,i]=t;return{quantity:+n,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Mn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=0a398169-449b-45fd-93b0-0136e05b7dba",n);Tn(r),Hn(Pn.recipe)};(()=>{const e=JSON.parse(localStorage.getItem("bookmarks"));e&&(Pn.bookmarks=e)})();var Nn;Nn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Cn{_data;render(e,t=!0){if(this._data=e,!this._data&&Array.isArray(this._data)&&this._data.length)return;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>{n.setAttribute(e.name,e.value)}))}))}renderErrorMessage(e=this._errorMessage){const t=`\n     <div class="error">\n       <div>\n         <svg>\n           <use href="${n(Nn)}#icon-alert-triangle"></use>\n         </svg>\n       </div>\n       <p>${e}</p>\n     </div>\n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderSuccessMessage(e=this._successMessage){const t=`\n     <div class="">\n       <div>\n         <svg>\n           <use href="${n(Nn)}#icon-alert-triangle"></use>\n         </svg>\n       </div>\n       <p>${e}</p>\n     </div>\n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}renderSpinner=()=>{const e=`\n    <div class="spinner">\n    <svg>\n      <use href="${n(Nn)}#icon-loader"></use>\n    </svg>\n  </div>\n    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}}var Rn=new class extends Cn{_parentEl="";_generateMarkup(){return`\n          <li class="preview">\n             <a class="preview__link ${window.location.hash.slice(1)===this._data.id?"preview__link--active":""}" href="#${this._data.id}">\n              <figure class="preview__fig">\n                <img src="${this._data.image}" alt="${this._data.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">${this._data.title}</h4>\n                <p class="preview__publisher">${this._data.publisher}</p>\n                <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                  <svg>\n                  <use href="${n(Nn)}#icon-user"></use>\n                  </svg>\n                </div>\n              </div>\n            </a>\n          </li>\n    `}};var Dn=new class extends Cn{_parentEl=document.querySelector(".bookmarks");addHandlerBookmark(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>Rn.render(e,!1))).join(" ")}};var Wn,zn,Un,Bn=new class extends Cn{_parentEl=document.querySelector(".pagination");addPaginatorClick(e){this._parentEl.addEventListener("click",(function(t){const n=+t.target.closest(".btn--inline").dataset.gotopage;e(n)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n         <button data-goToPage='${e+1}' class="btn--inline pagination__btn--next">\n             <span>Page ${e+1}</span>\n             <svg class="search__icon">\n                <use href="${n(Nn)}#icon-arrow-right"></use>\n             </svg>\n         </button>\n    `:e===t&&t>1?`\n        <button data-goToPage='${e-1}' class="btn--inline pagination__btn--prev">\n            <svg class="search__icon">\n              <use href="${n(Nn)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t-1}</span>\n        </button>\n    `:e>1?`\n         <button data-goToPage='${e-1}' class="btn--inline pagination__btn--prev">\n             <svg class="search__icon">\n                <use href="${n(Nn)}#icon-arrow-left"></use>\n             </svg>\n             <span>Page ${e-1}</span>\n         </button>\n\n         <button data-goToPage='${e+1}' class="btn--inline pagination__btn--next">\n         <span>Page ${e+1}</span>\n         <svg class="search__icon">\n            <use href="${n(Nn)}#icon-arrow-right"></use>\n         </svg>\n        </button>\n   `:""}};Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(zn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Un=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(zn(this.denominator)){var e=Un(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}zn(this.numerator)&&(e=Un(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},Wn=Fraction;var Gn=new class extends Cn{_parentEl=document.querySelector(".recipe");_errorMessage="We couldn't find the recipe !!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerServings(e){this._parentEl.addEventListener("click",(function(t){const n=t.target.closest(".btn--update--servings");if(!n)return;const r=n.dataset.updateTo;+r&&+r>0&&e(+r)}))}addHandlerBookmark(e){this._parentEl.addEventListener("click",(function(t){t.target.closest(".btn--round")&&e()}))}_generateMarkupIngredients(e){return`\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(Nn)}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${new Wn(e.quantity).toString()}</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${e.unit}</span>\n        ${e.description}\n      </div>\n    </li>\n    `}_generateMarkup(){return`\n    <figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n  <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(Nn)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(Nn)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button data-update-to='${this._data.servings-1}' class="btn--tiny btn--update--servings">\n          <svg>\n            <use href="${n(Nn)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button data-update-to='${this._data.servings+1}' class="btn--tiny btn--update--servings">\n          <svg>\n            <use href="${n(Nn)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n      <use href="${n(Nn)}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round">\n      <svg class="">\n        <use href="${n(Nn)}g#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n      ${this._data.ingredients.map(this._generateMarkupIngredients).join(" ")}\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(Nn)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n    `}};var Jn=new class extends Cn{_parentEl=document.querySelector(".results");_generateMarkup(){return this._data.map((e=>Rn.render(e,!1))).join(" ")}};var Vn=new class extends Cn{parentEl=document.querySelector(".search");getQuery(){const e=document.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){document.querySelector(".search__field").value=""}addHandlerSearch(e){this.parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var Yn=new class extends Cn{_parentEl=document.querySelector(".upload");_successMessage="Recipe was successfully uploaded :)";_overlay=document.querySelector(".overlay");_recipeWindow=document.querySelector(".add-recipe-window");_closeWindowBtn=document.querySelector(".btn--close-modal");_openWindowBtn=document.querySelector(".nav__btn--add-recipe");_uploadBtn=document.querySelector(".nav__btn--add-recipe");_uploadForm=document.querySelector(".upload");constructor(){super(),this.addCloseWindowHandler(),this.addOpenWindowHandler()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._recipeWindow.classList.toggle("hidden")}addOpenWindowHandler(){this._openWindowBtn.addEventListener("click",this.toggleWindow.bind(this))}addCloseWindowHandler(){this._overlay.addEventListener("click",this.toggleWindow.bind(this)),this._closeWindowBtn.addEventListener("click",this.toggleWindow.bind(this))}addUploadRecipeHandler(e){this._uploadForm.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}};const Qn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Gn.renderSpinner(),await(async e=>{try{const t=await xn(`https://forkify-api.herokuapp.com/api/v2/recipes//${e}?key=0a398169-449b-45fd-93b0-0136e05b7dba`);Tn(t)}catch(e){throw e}})(e),Jn.update(In()),Dn.update(Pn.bookmarks),Pn.bookmarks.some((e=>Pn.recipe.id===e.id))?Pn.recipe.bookmarked=!0:Pn.recipe.bookmarked=!1,Gn.render(Pn.recipe)}catch(e){Gn.renderErrorMessage()}},Kn=async()=>{try{const e=Vn.getQuery();if(!e)return;await(async e=>{try{const t=await xn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=0a398169-449b-45fd-93b0-0136e05b7dba`);Pn.search.query=e,Pn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})))}catch(e){console.log(e)}})(e),Jn.render(In()),Bn.render(Pn.search)}catch(e){console.log(e)}},Xn=e=>{Jn.render(In(e)),Bn.render(Pn.search)},Zn=e=>{(e=>{Pn.recipe.ingredients.forEach((t=>t.quantity=t.quantity*e/Pn.recipe.servings)),Pn.recipe.servings=e})(e),Gn.update(Pn.recipe)},er=()=>{Pn.recipe.bookmarked?(e=>{const t=Pn.bookmarks.findIndex((t=>t.id===e));Pn.bookmarks.splice(t,1),Pn.recipe.bookmarked=!1,qn()})(Pn.recipe.id):Hn(Pn.recipe),Gn.update(Pn.recipe),Dn.render(Pn.bookmarks)},tr=async e=>{try{await An(e),Gn.update(Pn.recipe),Dn.render(Pn.bookmarks),Yn.toggleWindow(),window.history.pushState(null,"",`#${Pn.recipe.id}`)}catch(e){console.error(e.message)}},nr=()=>{Dn.render(Pn.bookmarks)};Dn.addHandlerBookmark(nr),Gn.addHandlerRender(Qn),Gn.addHandlerServings(Zn),Gn.addHandlerBookmark(er),Vn.addHandlerSearch(Kn),Bn.addPaginatorClick(Xn),Yn.addUploadRecipeHandler(tr);
//# sourceMappingURL=index.68a68008.js.map