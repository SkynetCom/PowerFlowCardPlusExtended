function e(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=e=>e.type.includes("energy-flow-card-plus");var i,o;function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e}).apply(this,arguments)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(i||(i={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(o||(o={}));var n=function(e,t,o){var a=t?function(e){switch(e.number_format){case i.comma_decimal:return["en-US","en"];case i.decimal_comma:return["de","es","it"];case i.space_comma:return["fr","sv","cs"];case i.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==i.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,r(e,o)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,r(e,o)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,void 0).toString()+""},r=function(e,t){var i=a({maximumFractionDigits:2},t);if("string"!=typeof e)return i;var o=e.indexOf(".")>-1?e.split(".")[1].length:0;return i.minimumFractionDigits=o,i.maximumFractionDigits=o,i},s=function(e,t,i,o){o=o||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a};const l=e=>e?.split("|").map(e=>e.trim()),c=e=>l(e).at(0)??"",d={maxFlowRate:6,minFlowRate:.75,baseDecimals:0,kiloDecimals:1,minExpectedPower:.01,maxExpectedPower:2e3,kiloThreshold:1e3,megaThreshold:1e6,transparencyZeroLines:0,displayZeroLines:{mode:"show",transparency:50,grey_color:[189,189,189]}};const u=(e,t)=>Number(`${Math.round(Number(`${e}e${t}`))}e-${t}`);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function p(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function h(e,t=0){return p(e)?Number(e):t}const _=(e,i,o,{unit:a,unitWhiteSpace:r,decimals:s,accept_negative:l})=>{const c=!1===r?"":" ",h=t(i),_=h?"Wh":"W",m=h?"kWh":"kW",f=h?"MWh":"MW";if(null==o||""===o)return`0${c}${a??_}`;if(!p(o))return o.toString();const g=Number(o),y=void 0===a&&g>=(i.kilo_threshold??d.kiloThreshold),v=void 0===a&&g>=(i.mega_threshold??d.megaThreshold),b=s??(v?i.mega_decimals:y?i.kilo_decimals:i.base_decimals);return`${n((e=>l?e:Math.abs(e))(v?u(g/1e6,b??2):y?u(g/1e3,b??2):u(g,b??0)),e.locale)}${c}${a||(v?f:y?m:_)}`},m=globalThis,f=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g=Symbol(),y=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(f&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=y.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&y.set(t,e))}return e}toString(){return this.cssText}};const b=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new v(i,e,g)},w=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new v("string"==typeof e?e:e+"",void 0,g))(t)})(e):e,{is:k,defineProperty:x,getOwnPropertyDescriptor:S,getOwnPropertyNames:E,getOwnPropertySymbols:$,getPrototypeOf:C}=Object,D=globalThis,A=D.trustedTypes,P=A?A.emptyScript:"",M=D.reactiveElementPolyfillSupport,T=(e,t)=>e,z={toAttribute(e,t){switch(t){case Boolean:e=e?P:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},O=(e,t)=>!k(e,t),N={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:O};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=N){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&x(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:a}=S(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);a?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??N}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=C(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,t=[...E(e),...$(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(w(e))}else void 0!==e&&t.push(w(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(f)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=m.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:z).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:z;this._$Em=o;const n=a.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,a){if(void 0!==e){const n=this.constructor;if(!1===o&&(a=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??O)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[T("elementProperties")]=new Map,I[T("finalized")]=new Map,M?.({ReactiveElement:I}),(D.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j=globalThis,B=e=>e,L=j.trustedTypes,R=L?L.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+H,G=`<${U}>`,V=document,W=()=>V.createComment(""),Z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Y=Array.isArray,X="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,J=/>/g,Q=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,ie=/^(?:script|style|textarea|title)$/i,oe=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ae=oe(1),ne=oe(2),re=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),le=new WeakMap,ce=V.createTreeWalker(V,129);function de(e,t){if(!Y(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}class ue{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,c]=((e,t)=>{const i=e.length-1,o=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=q;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===q?"!--"===l[1]?r=K:void 0!==l[1]?r=J:void 0!==l[2]?(ie.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=Q):void 0!==l[3]&&(r=Q):r===Q?">"===l[0]?(r=a??q,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?Q:'"'===l[3]?te:ee):r===te||r===ee?r=Q:r===K||r===J?r=q:(r=Q,a=void 0);const u=r===Q&&e[t+1].startsWith("/>")?" ":"";n+=r===q?i+G:c>=0?(o.push(s),i.slice(0,c)+F+i.slice(c)+H+u):i+H+(-2===c?t:u)}return[de(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]})(e,t);if(this.el=ue.createElement(l,i),ce.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ce.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(F)){const t=c[n++],i=o.getAttribute(e).split(H),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?fe:"?"===r[1]?ge:"@"===r[1]?ye:me}),o.removeAttribute(e)}else e.startsWith(H)&&(s.push({type:6,index:a}),o.removeAttribute(e));if(ie.test(o.tagName)){const e=o.textContent.split(H),t=e.length-1;if(t>0){o.textContent=L?L.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],W()),ce.nextNode(),s.push({type:2,index:++a});o.append(e[t],W())}}}else if(8===o.nodeType)if(o.data===U)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(H,e+1));)s.push({type:7,index:a}),e+=H.length-1}a++}}static createElement(e,t){const i=V.createElement("template");return i.innerHTML=e,i}}function pe(e,t,i=e,o){if(t===re)return t;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const n=Z(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(t=pe(e,a._$AS(e,t.values),a,o)),t}class he{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??V).importNode(t,!0);ce.currentNode=o;let a=ce.nextNode(),n=0,r=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new _e(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ve(a,this,e)),this._$AV.push(t),s=i[++r]}n!==s?.index&&(a=ce.nextNode(),n++)}return ce.currentNode=V,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class _e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),Z(e)?e===se||null==e||""===e?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==re&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Y(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==se&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ue.createElement(de(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new he(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=le.get(e.strings);return void 0===t&&le.set(e.strings,t=new ue(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new _e(this.O(W()),this.O(W()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=B(e).nextSibling;B(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=se}_$AI(e,t=this,i,o){const a=this.strings;let n=!1;if(void 0===a)e=pe(this,e,t,0),n=!Z(e)||e!==this._$AH&&e!==re,n&&(this._$AH=e);else{const o=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=pe(this,o[i+r],t,r),s===re&&(s=this._$AH[r]),n||=!Z(s)||s!==this._$AH[r],s===se?e=se:e!==se&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!o&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fe extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}class ge extends me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==se)}}class ye extends me{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??se)===re)return;const i=this._$AH,o=e===se&&i!==se||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==se&&(i===se||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ve{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const be={I:_e},we=j.litHtmlPolyfillSupport;we?.(ue,_e),(j.litHtmlVersions??=[]).push("3.3.2");const ke=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let xe=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=i?.renderBefore??null;o._$litPart$=a=new _e(t.insertBefore(W(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}};xe._$litElement$=!0,xe.finalized=!0,ke.litElementHydrateSupport?.({LitElement:xe});const Se=ke.litElementPolyfillSupport;Se?.({LitElement:xe}),(ke.litElementVersions??=[]).push("4.2.2");const Ee=e=>!0!==e.disable_dots&&("undefined"==typeof document||"hidden"!==document.visibilityState),$e=(e,t)=>{const i=(e=>{const t=JSON.parse(JSON.stringify(e)).filter(e=>e?.has);return t})(e);return i?.[t]??void 0},Ce=(e,t)=>$e(e,t),De=e=>$e(e,3),Ae=e=>!!(e=>$e(e,2))(e)||!!De(e),Pe=e=>!!(e=>$e(e,1))(e)||!!De(e),Me=(e,t)=>t>0||"hide"!==e?.display_zero_lines?.mode,Te=(e,t)=>{if(e>0)return"";const i=t?.display_zero_lines?.mode;if("show"===i||void 0===i)return"";let o="";if("transparency"===i||"custom"===i){const e=t?.display_zero_lines?.transparency;(e??1)&&(o+="transparency ")}return"grey_out"!==i&&"custom"!==i||(o+="grey"),o},ze=1,Oe=2,Ne=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=Ne(class extends Ie{constructor(e){if(super(e),e.type!==ze||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return re}}),Be=(e,{battery:t,grid:i,individual:o,newDur:a})=>i.has&&t.has&&Me(e,Math.max(i.state.toBattery||0,t.state.toGrid||0))?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="battery-grid-flow"
    >
      <path
        id="battery-grid"
        class="${Te(t.state.toGrid||i.state.toBattery||0,e)}"
        d="M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toBattery?ne`<circle r="1" class="battery-from-grid" vector-effect="non-scaling-stroke">
      <animateMotion
        dur="${i.batteryGrid}s"
        repeatCount="indefinite"
        keyPoints="1;0"
        keyTimes="0;1"
        calcMode="paced"
      >
        <mpath xlink:href="#battery-grid" />
      </animateMotion>
    </circle>`:se)(e,i,a)} ${((e,t,i)=>Ee(e)&&t.state.toGrid?ne`
    <circle r="1" class="battery-to-grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.batteryGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-grid" />
      </animateMotion>
    </circle>
  `:se)(e,t,a)}
    </svg>
  </div>`:se,Le=(e,{battery:t,grid:i,individual:o,newDur:a})=>t.has&&Me(e,t.state.toHome)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="battery-home-flow"
    >
      <path
        id="battery-home"
        class="battery-home ${Te(t.state.toHome||0,e)}"
        d="M55,100 v-${i.has?15:17} c0,-30 10,-30 30,-30 h20"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="battery-home" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.batteryToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-home" />
      </animateMotion>
    </circle>`:se)(e,t,a)}
    </svg>
  </div>`:se,Re=(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})=>i.has&&Me(e,i.state.fromGrid)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="grid-home-flow"
      class="flat-line"
    >
      <path
        class="grid ${Te(i.state.toHome||0,e)}"
        id="grid"
        d="M0,${t.has?50:a.has?56:53} H100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.gridToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#grid" />
      </animateMotion>
    </circle>`:se)(e,i,n)}
    </svg>
  </div>`:se,Fe=(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})=>i.has&&i.hasReturnToGrid&&a.has&&Me(e,a.state.toGrid||0)?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="solar-grid-flow"
    >
      <path
        id="return"
        class="return ${Te(a.state.toGrid||0,e)}"
        d="M${t.has?45:47},0 v15 c0,${t.has?"30 -10,30 -30,30":"35 -10,35 -30,35"} h-20"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toGrid&&t.has?ne`<circle r="1" class="return" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.solarToGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#return" />
      </animateMotion>
    </circle>`:se)(e,a,n)}
    </svg>
  </div>`:se,He=(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})=>a.has&&Me(e,a.state.toHome||0)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="solar-home-flow"
    >
      <path
        id="solar"
        class="solar ${Te(a.state.toHome||0,e)}"
        d="M${t.has?55:53},0 v${i.has?15:17} c0,${t.has?"30 10,30 30,30":"35 10,35 30,35"} h25"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.solarToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#solar" />
      </animateMotion>
    </circle>`:se)(e,a,n)}
    </svg>
  </div>`:se,Ue=(e,{battery:t,individual:i,solar:o,newDur:a})=>t.has&&o.has&&Me(e,o.state.toBattery||0)?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="solar-battery-flow"
      class="flat-line"
    >
      <path
        id="battery-solar"
        class="battery-solar ${Te(o.state.toBattery||0,e)}"
        d="M50,0 V100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,i)=>Ee(e)&&t.state.toBattery?ne`<circle r="1" class="battery-solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${i.solarToBattery}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-solar" />
      </animateMotion>
    </circle>`:se)(e,o,a)}
    </svg>
  </div>`:se,Ge=["unavailable","unknown"],Ve=({main:e,className:t,template:i,value:o,entityId:a,icon:n,actions:r})=>o&&Ge.includes(o)?se:o||i?ae`<span
      class="secondary-info ${t}"
      @click=${t=>{t.stopPropagation(),e.onEntityClick(t,r,a)}}
      @dblclick=${t=>{t.stopPropagation(),e.onEntityDoubleClick(t,r,a)}}
      @pointerdown=${t=>{t.stopPropagation(),e.onEntityPointerDown(t,r,a)}}
      @pointerup=${t=>{t.stopPropagation(),e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{t.stopPropagation(),e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&(t.stopPropagation(),e.openDetails(t,r,a,"tap"))}}
    >
      ${n?ae`<ha-icon class="secondary-info small" .icon=${n}></ha-icon>`:se}
      ${i??o}</span
    >`:se,We=(e,t,i,o,a,n)=>a?.secondary?.has||a?.secondary?.template?Ve({main:t,className:n,entityId:a.secondary.entity,icon:a.secondary.icon,value:_(e,i,a.secondary.state,{unit:a.secondary.unit,unitWhiteSpace:a.secondary.unit_white_space,decimals:a.secondary.decimals,accept_negative:a.secondary.accept_negative}),actions:{tap_action:a.secondary.tap_action,hold_action:a.secondary.hold_action,double_tap_action:a.secondary.double_tap_action},template:o[`${n}Secondary`]}):se,Ze=(e,t,i)=>{const o=e.use_new_flow_rate_model??!0?((e,t)=>{const i=e.max_expected_power,o=e.min_expected_power;return((e,t,i,o,a)=>e>a?i:(e-o)*(i-t)/(a-o)+t)(t,e.max_flow_rate,e.min_flow_rate,o,i)})(e,t):((e,t,i)=>{const o=e.min_flow_rate,a=e.max_flow_rate;return a-t/(i>0?i:t>0?t:1)*(a-o)})(e,t,i);return Number.isFinite(o)?o:e.max_flow_rate},Ye=(e,t)=>!1!==e&&t?t:"number"==typeof e?e:1.66,Xe=ae`<div class="spacer"></div>`,qe=(e,t,i,o,a,n,r)=>{const s=o.individual[n],l=a?.secondary?.has?_(e,i,a?.secondary?.state,{unit:a?.secondary?.unit||void 0,unitWhiteSpace:a.secondary.unit_white_space,decimals:a?.secondary?.decimals||0,accept_negative:a?.secondary?.accept_negative||!1}):void 0;return(()=>{if(s)return!0;if(!0===a?.secondary?.displayZero)return!0;if(!a?.secondary?.state)return!1;if(!p(a?.secondary?.state))return!0;const e=a?.secondary?.displayZeroTolerance??0;return Number(a.secondary.state)>=e||a.secondary.accept_negative&&"number"==typeof Number(+a.secondary.state)})()?Ve({main:t,className:r,entityId:a?.field?.secondary_info?.entity||a?.secondary.entity||void 0,icon:a?.secondary?.icon||void 0,value:l,template:o.individual[n]||void 0,actions:{tap_action:a?.field?.secondary_info?.tap_action||a?.secondary?.tap_action,hold_action:a?.field?.secondary_info?.hold_action||a?.secondary?.hold_action,double_tap_action:a?.field?.secondary_info?.double_tap_action||a?.secondary?.double_tap_action}}):se},Ke=(e,t)=>{const i=l(t);for(const t of i)if(!p(e.states[t]?.state))return!1;return i.length>0};let Je={name:"Unknown Card",version:"0.0.0",readme:"https://github.com/flixlix/"};const Qe=function(e,t,i){var o;return void 0===i&&(i=!1),function(){var a=[].slice.call(arguments),n=this,r=i&&!o;clearTimeout(o),o=setTimeout(function(){o=null,i||e.apply(n,a)},t),r&&e.apply(n,a)}}(e=>{console.log(`%c⚡ ${Je.name} v${Je.version} %cError: ${e}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")},6e4),et=e=>{Qe(`Entity "${e??"Unknown"}" is not available or misconfigured`)},tt=(e,t)=>{if(!t||!Ke(e,t))return et(t),null;const i=l(t);let o,a=0;for(const t of i){const i=e.states[t];i&&(o=h(i.state),a+=o)}return a},it=["K","M","G","T","P","E","Z","Y"],ot=(e,t)=>{const i=tt(e,t);if(!t||null===i)return 0;const o=e.states[c(t)];if(!o)return 0;const a=o.attributes.unit_of_measurement??"";return at(i,a)},at=(e,t)=>{const i=t.toUpperCase().slice(0,1),o=it.indexOf(i);return o>-1?e*Math.pow(1e3,o+1):e},nt=(e,i,o,a,n)=>{const r=t(i)?"Wh":"W",s=i.entities.fossil_fuel_percentage?.unit_white_space??!0,l="percentage"===i.entities.fossil_fuel_percentage?.state_type?"%":r,c=i.entities.fossil_fuel_percentage?.display_zero_tolerance??0;if(n){const{nonFossilEnergy:t,nonFossilPercentage:o}=((e,t)=>{const i=1e3*Object.values(e).reduce((e,t)=>e+t,0),o=Math.max(t-i,0);return{nonFossilEnergy:o,nonFossilPercentage:t>0?o/t*100:0}})(n,a);if(l===r){let o=t;return c&&o<c&&(o=0),_(e,i,o,{unitWhiteSpace:s})}let d=o;return c&&d<c&&(d=0),_(e,i,d,{unit:"%",unitWhiteSpace:s,decimals:0})}if(!o||!Ke(e,o))return et(o),"NaN";const d=1-(tt(e,o)??0)/100;let u;if(u="string"==typeof i.entities.grid?.entity?a:ot(e,i.entities.grid?.entity.consumption)||0,l===r){let t=u*d;return c&&t<c&&(t=0),_(e,i,t,{unitWhiteSpace:s})}let p=100-(tt(e,o)??0);return c&&p<c&&(p=0),_(e,i,p,{unit:"%",unitWhiteSpace:s,decimals:0})},rt=238.76104,st=async(e,t,i,o)=>{((e,t,i,o)=>{o=o||{},i=null==i?{}:i;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});a.detail=i,e.dispatchEvent(a)})(e,"hass-action",{config:i,action:o})};var lt={label:{car:"Cotxe",motorbike:"Moto"}},ct={accept_negative:"Accepta Negatius",action:"Acció",advanced:"Opcions Avançades",allow_layout_break:"Permet trencar el disseny",base_decimals:"Decimals de base",battery:"Bateria",calculate_flow_rate:"Calcula la Relació de Fluxe",circle_animation:"Animació Circular",clickable_entities:"Entitats cliquejables",color:"Color",color_circle:"Color de Cercle",color_dynamically:"Color dinàmic",color_icon:"Color de Icona",color_state_of_charge_value:"Color",color_value:"Color de Valor",combined:"Entitat Combinada (Una entitat amb valors positius i negatius)",consumption:"Consum",custom:"Personalitzat",custom_colors:"Colors Personalitzats",dashboard_link:"Enllaç al Panell",dashboard_link_label:"Nom del Panell",decimals:"Nombre de decimals",disable_dots:"Deshabilitar Punts",display_state:"Mostra Estat",display_zero:"Mostra Zero",display_zero_lines:"Mostra Línies Zero",display_zero_state:"Mostra Estat Zero",display_zero_tolerance:"Mostra Zero Tolerància",double_tap_action:"Acció en doble toc",entity_generator:"Generador",fossil_fuel_percentage:"Comb. Fòssils",grey_color:"Color Gris",grey_out:"En Gris",grid:"Xarxa",hide:"Amaga",hold_action:"Acció en mantenir premut",home:"Casa",icon_alert:"Icona per a Alerta",individual:"Individu",invert_state:"Inverteix l'estat",inverted_animation:"Invertir Animació",kilo_decimals:"Decimals de quilo",kilo_threshold:"Llindar de base a quilo",label_alert:"Etiqueta per a Alerta",max_expected_power:"Potència Màxima Esperada",max_flow_rate:"Rel. Màx de Fluxe",min_expected_power:"Potència Mínima Esperada",min_flow_rate:"Rel. Mín. de Fluxe",mode:"Mode de visualització",mega_decimals:"Decimals de mega",mega_threshold:"Llindar de quilo a mega",navigation_path:"Ruta de Navegació",no_color:"Sense color",no_labels:"Sense etiquetes",override_state:"Sobrescriu l'Estat",power_outage:"Pèrdua de Potència",production:"Producció",secondary_info:"Informació Secundària",separated:"Entitats Separades (Una entitat per a consum i una per a producció)",show:"Mostra",show_direction:"Mostrar Direcció",show_state_of_charge:"Mostra l'Estat de Càrrega",solar:"Energia solar",sort_individual_devices:"Ordena Dispositius Individuals",state_alert:"Estat d'Alerta",state_of_charge:"Estat de Càrrega",state_of_charge_decimals:"Nombre de decimals",state_of_charge_icon:"Icona",state_of_charge_unit:"Unitat",state_of_charge_unit_white_space:"Espai en Blanc",state_type:"Tipus d'Estat",subtract_individual:"Resta Individuals",sum_total:"Suma solar i secundària",tap_action:"Acció al Tocar",template:"Plantilla",transparency:"Transparència",unit_of_measurement:"Unitat",unit_white_space:"Unitat Espai en Blanc",use_metadata:"Empra Metadades",use_new_flow_rate_model:"Nou Model de Rel. de Fluxe"},dt={card:lt,editor:ct},ut=Object.freeze({__proto__:null,card:lt,default:dt,editor:ct}),pt={label:{car:"Auto",motorbike:"Motorka"}},ht={accept_negative:"Povolit záporné hodnoty",action:"Akce",advanced:"Pokročilá nastavení",allow_layout_break:"Povolit zalomení zobrazení",base_decimals:"Desetinná místa pro základ",battery:"Baterie",calculate_flow_rate:"Počítat průtok",circle_animation:"Kruhová animace",clickable_entities:"Klikatelné entity",color:"Barva",color_circle:"Barva kruhu",color_dynamically:"Dynamická barva",color_icon:"Barevná ikona",color_state_of_charge_value:"Barva",color_value:"Barevná hodnota",combined:"Kombinovaná entita (jedna entita s kladnými a zápornými hodnotami)",consumption:"Spotřeba",custom:"Vlastní",custom_colors:"Vlastní barvy",dashboard_link:"Odkaz na informační panel",dashboard_link_label:"Popisek odkazu na informační panel",decimals:"Desetinná místa",disable_dots:"Vypnout tečky",display_state:"Zobrazit stav",display_zero:"Zobrazit nulu",display_zero_lines:"Zobrazit nulové řádky",display_zero_state:"Zobrazit nulové stavy",display_zero_tolerance:"Zobrazit nulovou toleranci",double_tap_action:"Akce při dvojitém klepnutí",entity_generator:"Generátor",fossil_fuel_percentage:"Fosilní palivo",grey_color:"Šedá barva",grey_out:"Šedý výstup",grid:"Síť",hide:"Skrýt",hold_action:"Akce při podržení",home:"Dům",icon_alert:"Ikona pro upozornění",individual:"Individuální",invert_state:"Invertovat stav",inverted_animation:"Invertovat animaci",kilo_decimals:"Desetinná místa pro kilo",kilo_threshold:"Práh ze základu na kilo",label_alert:"Štítek pro upozornění",max_expected_power:"Maximální očekávaný výkon",max_flow_rate:"Maximální průtok",min_expected_power:"Minimální očekávaný výkon",min_flow_rate:"Minimální průtok",mode:"Režim",mega_decimals:"Desetinná místa pro mega",mega_threshold:"Práh z kila na mega",navigation_path:"Navigační cesta",no_color:"Bez barvy",no_labels:"Bez popisků",override_state:"Přepsat stav",power_outage:"Výpadek",production:"Výroba",secondary_info:"Sekundární informace",separated:"Oddělené entity (jedna entita pro spotřebu a jedna pro výrobu)",show:"Zobrazit",show_direction:"Zobrazit směr",show_state_of_charge:"Zobrazit stav nabití",solar:"Solární",sort_individual_devices:"Seřadit jednotlivá zařízení",state_alert:"Stav upozornění",state_of_charge:"Stav nabití",state_of_charge_decimals:"Desetinná místa",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednotky",state_of_charge_unit_white_space:"Mezera u jednotky",state_type:"Typ stavu",subtract_individual:"Odečíst individuální zařízení",sum_total:"Sečíst solární a sekundární",tap_action:"Akce po klepnutí",template:"Šablona",transparency:"Průhlednost",unit_of_measurement:"Jednotka",unit_white_space:"Mezera u jednotky",use_metadata:"Použít Metadata",use_new_flow_rate_model:"Nový model průtoku"},_t={card:pt,editor:ht},mt=Object.freeze({__proto__:null,card:pt,default:_t,editor:ht}),ft={label:{car:"Auto",motorbike:"Motorrad"}},gt={accept_negative:"Negative Werte akzeptieren",action:"Aktion",advanced:"Erweiterte Optionen",allow_layout_break:"Layoutumbruch zulassen",base_decimals:"Dezimalstellen für Basis",battery:"Batterie",calculate_flow_rate:"Flussrate berechnen",circle_animation:"Kreisanimation",clickable_entities:"Klickbare Entitäten",color:"Farbe",color_circle:"Farbe des Kreises",color_dynamically:"Farbe dynamisch",color_icon:"Farbe des Symbols",color_state_of_charge_value:"Farbe",color_value:"Farbe des Wertes",combined:"Kombinierte Entität (Eine Entität mit positiven und negativen Werten)",consumption:"Verbrauch",custom:"Benutzerdefiniert",custom_colors:"Benutzerdefinierte Farben",dashboard_link:"Dashboard-Link",dashboard_link_label:"Name des Dashboard-Links",decimals:"Dezimalstellen",disable_dots:"Punkte deaktivieren",display_state:"Zustand anzeigen",display_zero:"Null anzeigen",display_zero_lines:"Nulllinien anzeigen",display_zero_state:"Nullzustand anzeigen",display_zero_tolerance:"Nulltoleranz",double_tap_action:"Aktion beim Doppeltippen",entity_generator:"Generator",fossil_fuel_percentage:"Fossile Brennstoffe",grey_color:"Graue Farbe",grey_out:"Ausgrauen",grid:"Netz",hide:"Verstecken",hold_action:"Aktion beim Halten",home:"Zuhause",icon_alert:"Symbol für Alarm",individual:"Individuell",invert_state:"Zustand umkehren",inverted_animation:"Animation umkehren",kilo_decimals:"Dezimalstellen für Kilo",kilo_threshold:"Schwellenwert von Basis zu Kilo",label_alert:"Beschriftung für Alarm",max_expected_power:"Maximale erwartete Leistung",max_flow_rate:"Maximale Flussrate",min_expected_power:"Minimale erwartete Leistung",min_flow_rate:"Minimale Flussrate",mode:"Modus",mega_decimals:"Dezimalstellen für Mega",mega_threshold:"Schwellenwert von Kilo zu Mega",navigation_path:"Navigationspfad",no_color:"Keine Farbe",no_labels:"Keine Beschriftungen",override_state:"Zustand überschreiben",power_outage:"Stromausfall",production:"Produktion",secondary_info:"Sekundäre Information",separated:"Getrennte Entitäten (Eine Entität für den Verbrauch und eine für die Produktion)",show:"Anzeigen",show_direction:"Richtung anzeigen",show_state_of_charge:"Ladezustand anzeigen",solar:"Solarenergie",sort_individual_devices:"Individuelle Geräte sortieren",state_alert:"Alarmzustand",state_of_charge:"Ladezustand",state_of_charge_decimals:"Dezimalstellen",state_of_charge_icon:"Symbol",state_of_charge_unit:"Einheit",state_of_charge_unit_white_space:"Leerzeichen",state_type:"Typ des Zustands",subtract_individual:"Individuell abziehen",sum_total:"Solar und Sekundär summieren",tap_action:"Aktion beim Antippen",template:"Vorlage",transparency:"Transparenz",unit_of_measurement:"Einheit",unit_white_space:"Weißraum für Einheit",use_metadata:"Metadaten verwenden",use_new_flow_rate_model:"Neues Fluss-Modell verwenden"},yt={card:ft,editor:gt},vt=Object.freeze({__proto__:null,card:ft,default:yt,editor:gt}),bt={label:{car:"Bil",motorbike:"Motorcykel"}},wt={accept_negative:"Accepter negative værdier",action:"Handling",advanced:"Avancerede indstillinger",allow_layout_break:"Tillad layout-brud",base_decimals:"Decimaler for basis",battery:"Batteri",calculate_flow_rate:"Beregn Hastighed",circle_animation:"Cirkel Animation",clickable_entities:"Klikbare enheder",color:"Farve",color_circle:"Farve af Cirkel",color_dynamically:"Farve dynamisk",color_icon:"Farve af ikon",color_state_of_charge_value:"Farve",color_value:"Farve af værdi",combined:"Kombineret enhed (Én enhed med positive og negative værdier)",consumption:"Forbrug",custom:"Brugerdefinerede",custom_colors:"Brugerdefinerede farver",dashboard_link:"Dashboard-link",dashboard_link_label:"Navn på dashboard-link",decimals:"Decimaler",disable_dots:"Deaktiver prikker",display_state:"Vis Tilstand",display_zero:"Vis Nul",display_zero_lines:"Vis Nul Linjer",display_zero_state:"Vis Nultilstand",display_zero_tolerance:"Vis ingen tolerance",double_tap_action:"Dobbelttryk-handling",entity_generator:"Generator",fossil_fuel_percentage:"Fossilt Brændstof",grey_color:"Grå farve",grey_out:"Grået ud",grid:"El-Net",hide:"Skjul",hold_action:"Hold-handling",home:"Hjem",icon_alert:"Ikon for alarm",individual:"Individuel",invert_state:"Omvendt tilstand",inverted_animation:"Omvendt Animation",kilo_decimals:"Decimaler for kilo",kilo_threshold:"Tærskel fra basis til kilo",label_alert:"Etiket til Alarm",max_expected_power:"Maks. forventet effekt",max_flow_rate:"Maks. flowhastighed",min_expected_power:"Min. forventet effekt",min_flow_rate:"Min. flowhastighed",mode:"Tilstand",mega_decimals:"Decimaler for mega",mega_threshold:"Tærskel fra kilo til mega",navigation_path:"Navigationssti",no_color:"Ingen farve",no_labels:"Ingen etiketter",override_state:"Overskriv Tilstand",power_outage:"Strømafbrydelse",production:"Produktion",secondary_info:"Sekundær info",separated:"Adskilte enheder (én enhed til forbrug og én til produktion)",show:"Vis",show_direction:"Vis Retning",show_state_of_charge:"Vis ladningstilstand",solar:"Solenergi",sort_individual_devices:"Sorter individuelle enheder",state_alert:"Alarmtilstand",state_of_charge:"Ladningstilstand",state_of_charge_decimals:"Decimal",state_of_charge_icon:"Ikon",state_of_charge_unit:"Enhed",state_of_charge_unit_white_space:"Tomt mellemrum",state_type:"Tilstande",subtract_individual:"Fratræk individuel",sum_total:"Sum sol og sekundær",tap_action:"Tryk-handling",template:"Skabelon",transparency:"Transparens",unit_of_measurement:"Enhed",unit_white_space:"Enhed tomt mellemrum",use_metadata:"Brug Metadata",use_new_flow_rate_model:"Ny flowhastighedsmodel"},kt={card:bt,editor:wt},xt=Object.freeze({__proto__:null,card:bt,default:kt,editor:wt}),St={label:{car:"Car",motorbike:"Motorbike"}},Et={accept_negative:"Accept Negative",action:"Action",advanced:"Advanced Options",allow_layout_break:"Allow Layout Break",base_decimals:"Base Decimals",battery:"Battery",calculate_flow_rate:"Calculate Flow Rate",circle_animation:"Circle Animation",clickable_entities:"Clickable Entities",color:"Color",color_circle:"Color of Circle",color_dynamically:"Color Dynamically",color_icon:"Color of Icon",color_state_of_charge_value:"Color",color_value:"Color of Value",combined:"Combined Entity (One entity with positive and negative values)",consumption:"Consumption",custom:"Custom",custom_colors:"Custom Colors",dashboard_link:"Dashboard Link",dashboard_link_label:"Dashboard Link Name",decimals:"Decimals",disable_dots:"Disable Dots",display_state:"Display State",display_zero:"Display Zero",display_zero_lines:"Display Zero Lines",display_zero_state:"Display Zero State",display_zero_tolerance:"Display Zero Tolerance",double_tap_action:"Double Tap Action",entity_generator:"Generator",fossil_fuel_percentage:"Fossil Fuel",grey_color:"Grey Color",grey_out:"Grey Out",grid:"Grid",hide:"Hide",hold_action:"Hold Action",home:"Home",icon_alert:"Icon for Alert",individual:"Individual",invert_state:"Invert State",inverted_animation:"Invert Animation",kilo_decimals:"Kilo Decimals",kilo_threshold:"Base to Kilo Threshold",label_alert:"Label for Alert",max_expected_power:"Max Expected Power",max_flow_rate:"Max Flow Rate",min_expected_power:"Min Expected Power",min_flow_rate:"Min Flow Rate",mode:"Mode",mega_decimals:"Mega Decimals",mega_threshold:"Kilo to Mega Threshold",navigation_path:"Navigation Path",no_color:"No Color",no_labels:"No Labels",override_state:"Override State",power_outage:"Power Outage",production:"Production",secondary_info:"Secondary Info",separated:"Separated Entities (One entity for consumption and one for production)",show:"Show",show_direction:"Show Direction",show_state_of_charge:"Show State of Charge",solar:"Solar",sort_individual_devices:"Sort individual devices",state_alert:"State of Alert",state_of_charge:"State of Charge",state_of_charge_decimals:"Decimals",state_of_charge_icon:"Icon",state_of_charge_unit:"Unit",state_of_charge_unit_white_space:"White Space",state_type:"Type of State",subtract_individual:"Subtract Individual",sum_total:"Sum solar and secondary",tap_action:"Tap Action",template:"Template",transparency:"Transparency",unit_of_measurement:"Unit",unit_white_space:"Unit White Space",use_metadata:"Use Metadata",use_new_flow_rate_model:"New Flow Rate Model"},$t={card:St,editor:Et},Ct=Object.freeze({__proto__:null,card:St,default:$t,editor:Et}),Dt={label:{car:"Coche",motorbike:"Motocicleta"}},At={accept_negative:"Aceptar valores negativos",action:"Acción",advanced:"Opciones Avanzadas",allow_layout_break:"Permitir salto de diseño",base_decimals:"Decimales de base",battery:"Batería",calculate_flow_rate:"Calcular Tasa de Flujo",circle_animation:"Animación de Círculo",clickable_entities:"Entidades Clicables",color:"Color",color_circle:"Color del Círculo",color_dynamically:"Color dinámico",color_icon:"Color del Icono",color_state_of_charge_value:"Color",color_value:"Color del Valor",combined:"Entidad combinada (una entidad con valores positivos y negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Colores personalizados",dashboard_link:"Enlace del Tablero",dashboard_link_label:"Nombre del Enlace del Tablero",decimals:"Decimales",disable_dots:"Desactivar Puntos",display_state:"Mostrar Estado",display_zero:"Mostrar Cero",display_zero_lines:"Mostrar Líneas de Cero",display_zero_state:"Mostrar Estado Cero",display_zero_tolerance:"Tolerancia de Cero",double_tap_action:"Acción de Doble Toque",entity_generator:"Generador",fossil_fuel_percentage:"Combustible Fósil",grey_color:"Color Gris",grey_out:"Gris",grid:"Red eléctrica",hide:"Ocultar",hold_action:"Acción al Mantener",home:"Casa",icon_alert:"Ícono para Alerta",individual:"Individuales",invert_state:"Invertir Estado",inverted_animation:"Animación Invertida",kilo_decimals:"Decimales de kilo",kilo_threshold:"Umbral de base a kilo",label_alert:"Etiqueta para Alerta",max_expected_power:"Potencia Máxima Esperada",max_flow_rate:"Tasa de Flujo Máxima",min_expected_power:"Potencia Mínima Esperada",min_flow_rate:"Tasa de Flujo Mínima",mode:"Modo",mega_decimals:"Decimales de mega",mega_threshold:"Umbral de kilo a mega",navigation_path:"Ruta de Navegación",no_color:"Sin color",no_labels:"Sin etiquetas",override_state:"Sobrescribir Estado",power_outage:"Corte de energía",production:"Producción",secondary_info:"Información secundaria",separated:"Entidades separadas (una entidad de consumo y otra de producción)",show:"Mostrar",show_direction:"Mostrar Dirección",show_state_of_charge:"Mostrar Estado de Carga",solar:"Energía solar",sort_individual_devices:"Ordenar dispositivos individuales",state_alert:"Estado de Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Decimales",state_of_charge_icon:"Ícono",state_of_charge_unit:"Unidad",state_of_charge_unit_white_space:"Espacio en Blanco",state_type:"Tipo de Estado",subtract_individual:"Restar Individualmente",sum_total:"Sumar solar y secundario",tap_action:"Acción de Toque",template:"Plantilla",transparency:"Transparencia",unit_of_measurement:"Unidad",unit_white_space:"Espacio en Blanco de la Unidad",use_metadata:"Utilizar Metadatos",use_new_flow_rate_model:"Utilizar Nuevo Modelo de Tasa de Flujo"},Pt={card:Dt,editor:At},Mt=Object.freeze({__proto__:null,card:Dt,default:Pt,editor:At}),Tt={label:{car:"Auto",motorbike:"Moottoripyörä"}},zt={accept_negative:"Hyväksy negatiiviset arvot",action:"Toiminto",advanced:"Lisäasetukset",allow_layout_break:"Salli asettelun rivitys",base_decimals:"Whien desimaalit",battery:"Akku",calculate_flow_rate:"Laske virtausnopeus",circle_animation:"Ympyräanimaatio",clickable_entities:"Napautettavat kohteet",color:"Väri",color_circle:"Ympyrän väri",color_dynamically:"Väri dynaamisesti",color_icon:"Ikonin väri",color_state_of_charge_value:"Väri",color_value:"Arvon väri",combined:"Yhdistetty kokonaisuus (yksi kokonaisuus positiivisilla ja negatiivisilla arvoilla)",consumption:"Kulutus",custom:"Mukautettu",custom_colors:"Mukautetut värit",dashboard_link:"Ohjauspaneelin linkki",dashboard_link_label:"Ohjauspaneelin linkin nimi",decimals:"Desimaalit",disable_dots:"Poista pisteet",display_state:"Näytä tila",display_zero:"Näytä nolla",display_zero_lines:"Näytä nolla-viivat",display_zero_state:"Näytä nolla-tila",display_zero_tolerance:"Näytä nolla-toleranssi",double_tap_action:"Kaksoisnapautustoiminto",entity_generator:"Generaattori",fossil_fuel_percentage:"Fossiilinen polttoaine",grey_color:"Harmaa väri",grey_out:"Harmaa",grid:"Sähköverkko",hide:"Piilota",hold_action:"Pidä painettuna -toiminto",home:"Koti",icon_alert:"Hälytyksen kuvake",individual:"Yksittäinen",invert_state:"Käänteinen tila",inverted_animation:"Käänteinen animaatio",kilo_decimals:"kWhien desimaalit",kilo_threshold:"Whin ja kWhin kynnysarvo",label_alert:"Hälytyksen teksti",max_expected_power:"Ennustettu maksimiteho",max_flow_rate:"Maksimivirtausnopeus",min_expected_power:"Ennustettu minimiteho",min_flow_rate:"Minimivirtausnopeus",mode:"Tila",mega_decimals:"MWhien desimaalit",mega_threshold:"kWhin ja MWhin kynnysarvo",navigation_path:"Navigointipolku",no_color:"Ei väriä",no_labels:"Ei nimiöitä",override_state:"Korvaa tila",power_outage:"Sähkökatkos",production:"Tuotanto",secondary_info:"Toissijaiset tiedot",separated:"Erotetut kokonaisuudet (yksi kulutukseen ja yksi tuotantoon)",show:"Näytä",show_direction:"Näytä suunta",show_state_of_charge:"Näytä varauksen tila",solar:"Aurinko",sort_individual_devices:"Lajittele yksittäiset laitteet",state_alert:"Hälytyksen tila",state_of_charge:"Varauksen tila",state_of_charge_decimals:"Desimaalit",state_of_charge_icon:"Kuvake",state_of_charge_unit:"Yksikkö",state_of_charge_unit_white_space:"Välilyönti",state_type:"Tilan tyyppi",subtract_individual:"Vähennä yksittäinen",sum_total:"Summaa aurinko ja toissijainen",tap_action:"Napauta toimintoa",template:"Malli",transparency:"Läpinäkyvyys",unit_of_measurement:"Yksikkö",unit_white_space:"Yksikön välilyönti",use_metadata:"Käytä metatietoja",use_new_flow_rate_model:"Uusi virtausnopeusmalli"},Ot={card:Tt,editor:zt},Nt=Object.freeze({__proto__:null,card:Tt,default:Ot,editor:zt}),It={label:{car:"Voiture",motorbike:"Moto"}},jt={accept_negative:"Accepter les valeurs négatives",action:"Action",advanced:"Options avancées",allow_layout_break:"Autoriser la rupture de mise en page",base_decimals:"Décimales de base",battery:"Batterie",calculate_flow_rate:"Calculer le débit",circle_animation:"Animation de cercle",clickable_entities:"Entités cliquables",color:"Couleur",color_circle:"Couleur du cercle",color_dynamically:"Couleur dynamique",color_icon:"Couleur de l'icône",color_state_of_charge_value:"Couleur",color_value:"Couleur de la valeur",combined:"Entité combinée (une entité avec des valeurs positives et négatives)",consumption:"Consommation",custom:"Personnalisé",custom_colors:"Couleurs personnalisées",dashboard_link:"Lien du tableau de bord",dashboard_link_label:"Nom du lien du tableau de bord",decimals:"Décimales",disable_dots:"Désactiver les points",display_state:"Afficher l'état",display_zero:"Afficher zéro",display_zero_lines:"Afficher les lignes zéro",display_zero_state:"Afficher l'état zéro",display_zero_tolerance:"Tolérance de l'affichage zéro",double_tap_action:"Action de double tap",entity_generator:"Générateur",fossil_fuel_percentage:"Carburant fossile",grey_color:"Couleur grise",grey_out:"Griser",grid:"Réseau Électrique",hide:"Masquer",hold_action:"Action d'appui long",home:"Domicile",icon_alert:"Icône de l'alerte",individual:"Individuel",invert_state:"Inverser l'état",inverted_animation:"Animation inversée",kilo_decimals:"Décimales de kilo",kilo_threshold:"Seuil de base vers kilo",label_alert:"Libellé de l'alerte",max_expected_power:"Puissance maximale attendue",max_flow_rate:"Débit maximal",min_expected_power:"Puissance minimale attendue",min_flow_rate:"Débit minimal",mode:"Mode",mega_decimals:"Décimales de méga",mega_threshold:"Seuil de kilo vers méga",navigation_path:"Chemin de navigation",no_color:"Aucune couleur",no_labels:"Sans libellés",override_state:"Remplacer l'état",power_outage:"Panne de courant",production:"Production",secondary_info:"Informations secondaires",separated:"Entités séparées (une entité pour la consommation et une pour la production)",show:"Afficher",show_direction:"Afficher la direction",show_state_of_charge:"Afficher l'état de charge",solar:"Solaire",sort_individual_devices:"Trier les appareils individuels",state_alert:"État de l'alerte",state_of_charge:"État de charge",state_of_charge_decimals:"Décimales",state_of_charge_icon:"Icône",state_of_charge_unit:"Unité",state_of_charge_unit_white_space:"Espace blanc de l'unité",state_type:"Type d'état",subtract_individual:"Soustraire l'individuel",sum_total:"Somme solaire et secondaire",tap_action:"Action de tap",template:"Modèle",transparency:"Transparence",unit_of_measurement:"Unité",unit_white_space:"Espace blanc de l'unité",use_metadata:"Utiliser les métadonnées",use_new_flow_rate_model:"Nouveau modèle de débit"},Bt={card:It,editor:jt},Lt=Object.freeze({__proto__:null,card:It,default:Bt,editor:jt}),Rt={label:{car:"कार",motorbike:"मोटरसाइकिल"}},Ft={accept_negative:"नकारात्मक स्वीकार करें",action:"क्रिया",advanced:"उन्नत विकल्प",allow_layout_break:"लेआउट तोड़ने की अनुमति दें",base_decimals:"बेस दशमलव",battery:"बैटरी",calculate_flow_rate:"प्रवाह दर की गणना करें",circle_animation:"सर्कल एनिमेशन",clickable_entities:"क्लिक करने योग्य इकाइयाँ",color:"रंग",color_circle:"सर्कल का रंग",color_dynamically:"गतिशील रंग",color_icon:"आइकन का रंग",color_state_of_charge_value:"रंग",color_value:"मान का रंग",combined:"संयुक्त इकाई (सकारात्मक और नकारात्मक मानों के साथ)",consumption:"उपभोग",custom:"कस्टम",custom_colors:"कस्टम रंग",dashboard_link:"डैशबोर्ड लिंक",dashboard_link_label:"डैशबोर्ड लिंक नाम",decimals:"दशमलव",disable_dots:"डॉट्स अक्षम करें",display_state:"स्थिति दिखाएँ",display_zero:"शून्य दिखाएँ",display_zero_lines:"शून्य रेखाएँ दिखाएँ",display_zero_state:"शून्य स्थिति दिखाएँ",display_zero_tolerance:"शून्य सहिष्णुता दिखाएँ",double_tap_action:"डबल टैप क्रिया",entity_generator:"जनरेटर",fossil_fuel_percentage:"जीवाश्म ईंधन",grey_color:"धूसर रंग",grey_out:"धूसर करें",grid:"ग्रिड",hide:"छुपाएँ",hold_action:"होल्ड क्रिया",home:"घर",icon_alert:"अलर्ट के लिए आइकन",individual:"व्यक्तिगत",invert_state:"स्थिति उलटें",inverted_animation:"एनिमेशन उलटें",kilo_decimals:"किलो दशमलव",kilo_threshold:"बेस से किलो सीमा",label_alert:"अलर्ट के लिए लेबल",max_expected_power:"अधिकतम अपेक्षित शक्ति",max_flow_rate:"अधिकतम प्रवाह दर",min_expected_power:"न्यूनतम अपेक्षित शक्ति",min_flow_rate:"न्यूनतम प्रवाह दर",mode:"मोड",mega_decimals:"मेगा दशमलव",mega_threshold:"किलो से मेगा सीमा",navigation_path:"नेविगेशन पथ",no_color:"कोई रंग नहीं",no_labels:"कोई लेबल नहीं",override_state:"स्थिति ओवरराइड करें",power_outage:"बिजली गुल",production:"उत्पादन",secondary_info:"द्वितीयक जानकारी",separated:"अलग-अलग इकाइयाँ (उपभोग और उत्पादन के लिए)",show:"दिखाएँ",show_direction:"दिशा दिखाएँ",show_state_of_charge:"चार्ज की स्थिति दिखाएँ",solar:"सौर ऊर्जा",sort_individual_devices:"व्यक्तिगत डिवाइस क्रमबद्ध करें",state_alert:"अलर्ट की स्थिति",state_of_charge:"चार्ज की स्थिति",state_of_charge_decimals:"दशमलव",state_of_charge_icon:"आइकन",state_of_charge_unit:"इकाई",state_of_charge_unit_white_space:"स्पेस",state_type:"स्थिति प्रकार",subtract_individual:"व्यक्तिगत घटाएँ",sum_total:"सौर और द्वितीयक का योग",tap_action:"टैप क्रिया",template:"टेम्पलेट",transparency:"पारदर्शिता",unit_of_measurement:"माप की इकाई",unit_white_space:"यूनिट स्पेस",use_metadata:"मेटाडेटा का उपयोग करें",use_new_flow_rate_model:"नया प्रवाह दर मॉडल"},Ht={card:Rt,editor:Ft},Ut=Object.freeze({__proto__:null,card:Rt,default:Ht,editor:Ft}),Gt={label:{car:"Auto",motorbike:"Motocicletta"}},Vt={accept_negative:"Accetta Valori Negativi",action:"Azione",advanced:"Opzioni Avanzate",allow_layout_break:"Consenti interruzione del layout",base_decimals:"Decimali di base",battery:"Batteria",calculate_flow_rate:"Calcola Tasso di Flusso",circle_animation:"Animazione Cerchio",clickable_entities:"Entità Cliccabili",color:"Colore",color_circle:"Colore del Cerchio",color_dynamically:"Colore dinamico",color_icon:"Colore dell'Icona",color_state_of_charge_value:"Colore",color_value:"Colore del Valore",combined:"Entità combinata (un'entità con valori positivi e negativi)",consumption:"Consumo",custom:"Personalizzato",custom_colors:"Colori personalizzati",dashboard_link:"Collegamento Dashboard",dashboard_link_label:"Nome Collegamento Dashboard",decimals:"Decimali",disable_dots:"Disabilita Punti",display_state:"Mostra Stato",display_zero:"Mostra Zero",display_zero_lines:"Mostra Linee Zero",display_zero_state:"Mostra Stato Zero",display_zero_tolerance:"Tolleranza dello Zero",double_tap_action:"Azione al doppio tocco",entity_generator:"Generatore",fossil_fuel_percentage:"Carburante Fossile",grey_color:"Colore Sfumato",grey_out:"Sfuma",grid:"Rete Elettrica",hide:"Nascondi",hold_action:"Azione alla pressione prolungata",home:"Casa",icon_alert:"Icona per l'Allarme",individual:"Individuale",invert_state:"Inverti Stato",inverted_animation:"Animazione Invertita",kilo_decimals:"Decimali di chilo",kilo_threshold:"Soglia da base a chilo",label_alert:"Etichetta per l'Allarme",max_expected_power:"Potenza Massima Prevista",max_flow_rate:"Tasso di Flusso Massimo",min_expected_power:"Potenza Minima Prevista",min_flow_rate:"Tasso di Flusso Minimo",mode:"Modalità",mega_decimals:"Decimali di mega",mega_threshold:"Soglia da chilo a mega",navigation_path:"Percorso di navigazione",no_color:"Nessun colore",no_labels:"Senza etichette",override_state:"Sovrascrivi Stato",power_outage:"Interruzione di corrente",production:"Produzione",secondary_info:"Informazioni secondarie",separated:"Entità separate (Un'entità per il consumo e una per la produzione)",show:"Mostra",show_direction:"Mostra Direzione",show_state_of_charge:"Mostra Stato di Carica",solar:"Solare",sort_individual_devices:"Ordina i singoli individuale",state_alert:"Stato dell'Allarme",state_of_charge:"Stato di Carica",state_of_charge_decimals:"Decimali",state_of_charge_icon:"Icona",state_of_charge_unit:"Unità",state_of_charge_unit_white_space:"Spazio Bianco",state_type:"Tipo di Stato",subtract_individual:"Sottrai Individualmente",sum_total:"Somma solare e secondaria",tap_action:"Azione al tocco",template:"Modello",transparency:"Trasparenza",unit_of_measurement:"Unità",unit_white_space:"Spazio Bianco Unità",use_metadata:"Utilizza Metadati",use_new_flow_rate_model:"Utilizza Nuovo Modello di Tasso di Flusso"},Wt={card:Gt,editor:Vt},Zt=Object.freeze({__proto__:null,card:Gt,default:Wt,editor:Vt}),Yt={label:{car:"Auto",motorbike:"Motorfiets"}},Xt={accept_negative:"Negatieve waarden accepteren",action:"Actie",advanced:"Geavanceerde Opties",allow_layout_break:"Lay-out doorbreken toestaan",base_decimals:"Decimalen voor basis",battery:"Batterij",calculate_flow_rate:"Stroomsnelheid Berekenen",circle_animation:"Cirkel Animatie",clickable_entities:"Klikbare Entiteiten",color:"Kleur",color_circle:"Kleur van Cirkel",color_dynamically:"Kleur dynamisch",color_icon:"Kleur van Pictogram",color_state_of_charge_value:"Kleur",color_value:"Kleur van Waarde",combined:"Gecombineerde entiteit (één entiteit met positieve en negatieve waarden)",consumption:"Verbruik",custom:"Aangepast",custom_colors:"Aangepaste kleuren",dashboard_link:"Dashboard-link",dashboard_link_label:"Naam van Dashboard Link",decimals:"Decimalen",disable_dots:"Punten Uitschakelen",display_state:"Toestand Weergeven",display_zero:"Nul Weergeven",display_zero_lines:"Nullijnen Weergeven",display_zero_state:"Nul Toestand Weergeven",display_zero_tolerance:"Nultolerantie Weergeven",double_tap_action:"Dubbel tik actie",entity_generator:"Generator",fossil_fuel_percentage:"Fossiele Brandstof",grey_color:"Grijstint",grey_out:"Grijstint",grid:"Elektriciteitsnet",hide:"Verbergen",hold_action:"Ingedrukt houden actie",home:"Thuis",icon_alert:"Pictogram voor Alarm",individual:"Individueel",invert_state:"Toestand Omkeren",inverted_animation:"Animatie Omkeren",kilo_decimals:"Decimalen voor kilo",kilo_threshold:"Drempel van basis naar kilo",label_alert:"Label voor Alarm",max_expected_power:"Maximaal Verwacht Vermogen",max_flow_rate:"Maximale Stroomsnelheid",min_expected_power:"Minimaal Verwacht Vermogen",min_flow_rate:"Minimale Stroomsnelheid",mode:"Modus",mega_decimals:"Decimalen voor mega",mega_threshold:"Drempel van kilo naar mega",navigation_path:"Navigatiepad",no_color:"Geen kleur",no_labels:"Geen labels",override_state:"Toestand Overschrijven",power_outage:"Stroomuitval",production:"Productie",secondary_info:"Secundaire informatie",separated:"Gescheiden entiteiten (één entiteit voor consumptie en één voor productie)",show:"Weergeven",show_direction:"Richting Weergeven",show_state_of_charge:"Laadstatus Weergeven",solar:"Zonne-energie",sort_individual_devices:"Sorteer individuele apparaten",state_alert:"Toestand van Alarm",state_of_charge:"Laadstatus",state_of_charge_decimals:"Decimalen",state_of_charge_icon:"Pictogram",state_of_charge_unit:"Eenheid",state_of_charge_unit_white_space:"Spaties",state_type:"Type Toestand",subtract_individual:"Individueel Aftrekken",sum_total:"Som van zon en secundair",tap_action:"Tik Actie",template:"Sjabloon",transparency:"Transparantie",unit_of_measurement:"Eenheid",unit_white_space:"Eenheid Spaties",use_metadata:"Metadata Gebruiken",use_new_flow_rate_model:"Nieuw Stroomsnelheid Model Gebruiken"},qt={card:Yt,editor:Xt},Kt=Object.freeze({__proto__:null,card:Yt,default:qt,editor:Xt}),Jt={label:{car:"Samochód",motorbike:"Motocykl"}},Qt={accept_negative:"Akceptuj wartości ujemne",action:"Akcja",advanced:"Zaawansowane opcje",allow_layout_break:"Zezwól na łamanie układu",base_decimals:"Miejsca po przecinku dla podstawy",battery:"Bateria",calculate_flow_rate:"Oblicz wskaźnik przepływu",circle_animation:"Animacja okręgu",clickable_entities:"Klikalne jednostki",color:"Kolor",color_circle:"Kolor okręgu",color_dynamically:"Kolor dynamicznie",color_icon:"Kolor ikony",color_state_of_charge_value:"Kolor",color_value:"Kolor wartości",combined:"Jednostka połączona (jedna jednostka z wartościami dodatnimi i ujemnymi)",consumption:"Zużycie",custom:"Niestandardowy",custom_colors:"Kolory niestandardowe",dashboard_link:"Link do panelu",dashboard_link_label:"Nazwa linku do panelu",decimals:"Miejsca po przecinku",disable_dots:"Wyłącz kropki",display_state:"Wyświetl stan",display_zero:"Wyświetl zero",display_zero_lines:"Wyświetl linie zera",display_zero_state:"Wyświetl stan zera",display_zero_tolerance:"Wyświetl tolerancję zera",double_tap_action:"Akcja podwójnego dotknięcia",entity_generator:"Generator",fossil_fuel_percentage:"Paliwo kopalne",grey_color:"Kolor szary",grey_out:"Szary",grid:"Sieć elektryczna",hide:"Ukryj",hold_action:"Akcja przytrzymania",home:"Dom",icon_alert:"Ikona alertu",individual:"Indywidualne",invert_state:"Odwróć stan",inverted_animation:"Odwróć animację",kilo_decimals:"Miejsca po przecinku dla kilo",kilo_threshold:"Próg z podstawy na kilo",label_alert:"Etykieta alertu",max_expected_power:"Maksymalna oczekiwana moc",max_flow_rate:"Maksymalna szybkość przepływu",min_expected_power:"Minimalna oczekiwana moc",min_flow_rate:"Minimalna szybkość przepływu",mode:"Tryb",mega_decimals:"Miejsca po przecinku dla mega",mega_threshold:"Próg z kilo na mega",navigation_path:"Ścieżka nawigacji",no_color:"Bez koloru",no_labels:"Bez etykiet",override_state:"Nadpisanie stanu",power_outage:"Brak prądu",production:"Produkcja",secondary_info:"Informacje dodatkowe",separated:"Oddzielne podmioty (jeden podmiot do konsumpcji i jeden do produkcji)",show:"Pokaż",show_direction:"Pokaż kierunek",show_state_of_charge:"Pokaż stan naładowania",solar:"Energia słoneczna",sort_individual_devices:"Sortuj poszczególne urządzenia",state_alert:"Stan alertu",state_of_charge:"Stan naładowania",state_of_charge_decimals:"Miejsca po przecinku",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednostka",state_of_charge_unit_white_space:"Spacja jednostki",state_type:"Typ stanu",subtract_individual:"Odjęcie indywidualne",sum_total:"Zsumuj słoneczne i dodatkowe",tap_action:"Akcja dotknięcia",template:"Szablon",transparency:"Przezroczystość",unit_of_measurement:"Jednostka",unit_white_space:"Spacja jednostki",use_metadata:"Użyj metadanych",use_new_flow_rate_model:"Nowy model wskaźnika przepływu"},ei={card:Jt,editor:Qt},ti=Object.freeze({__proto__:null,card:Jt,default:ei,editor:Qt}),ii={label:{car:"Carro",motorbike:"Mota"}},oi={accept_negative:"Aceitar Valores Negativos",action:"Ação",advanced:"Opções Avançadas",allow_layout_break:"Permitir quebra de layout",base_decimals:"Casas decimais da base",battery:"Bateria",calculate_flow_rate:"Calcular Taxa de Fluxo",circle_animation:"Animação de Círculo",clickable_entities:"Entidades Clicáveis",color:"Cor",color_circle:"Cor do Círculo",color_dynamically:"Cor dinâmica",color_icon:"Cor do Ícone",color_state_of_charge_value:"Cor",color_value:"Cor do Valor",combined:"Entidade combinada (uma entidade com valores positivos e negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Cores personalizadas",dashboard_link:"Link do Painel",dashboard_link_label:"Nome do Link do Painel",decimals:"Casas Decimais",disable_dots:"Desativar Pontos",display_state:"Exibir Estado",display_zero:"Exibir Zero",display_zero_lines:"Exibir Linhas Zero",display_zero_state:"Exibir Estado Zero",display_zero_tolerance:"Tolerância de Zero",double_tap_action:"Ação de Toque Duplo",entity_generator:"Gerador",fossil_fuel_percentage:"Combustíveis Fósseis",grey_color:"Cor do Cinza",grey_out:"Cinza",grid:"Rede",hide:"Esconder",hold_action:"Ação ao Segurar",home:"Casa",icon_alert:"Ícone para Alerta",individual:"Individuais",invert_state:"Inverter Estado",inverted_animation:"Animação Invertida",kilo_decimals:"Casas decimais de quilo",kilo_threshold:"Limiar de base para quilo",label_alert:"Rótulo para Alerta",max_expected_power:"Potência Máxima Esperada",max_flow_rate:"Taxa de Fluxo Máxima",min_expected_power:"Potência Mínima Esperada",min_flow_rate:"Taxa de Fluxo Mínima",mode:"Modo",mega_decimals:"Casas decimais de mega",mega_threshold:"Limiar de quilo para mega",navigation_path:"Caminho de Navegação",no_color:"Sem cor",no_labels:"Sem rótulos",override_state:"Substituir Estado",power_outage:"Falta de energia",production:"Produção",secondary_info:"Informação Secundária",separated:"Entidades Separadas (Uma entidade para consumo e outra para produção)",show:"Mostrar",show_direction:"Mostrar Direção",show_state_of_charge:"Exibir Estado de Carga",solar:"Energia solar",sort_individual_devices:"Classifique dispositivos individuais",state_alert:"Estado do Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Casas Decimais",state_of_charge_icon:"Ícone",state_of_charge_unit:"Unidade",state_of_charge_unit_white_space:"Espaçamento",state_type:"Tipo de Estado",subtract_individual:"Subtrair Individualmente",sum_total:"Somar solar e secundário",tap_action:"Ação de Toque",template:"Modelo",transparency:"Transparência",unit_of_measurement:"Unidade",unit_white_space:"Espaçamento da Unidade",use_metadata:"Utilizar Metadados",use_new_flow_rate_model:"Utilizar Novo Modelo de Velocidade"},ai={card:ii,editor:oi},ni=Object.freeze({__proto__:null,card:ii,default:ai,editor:oi}),ri={label:{car:"Carro",motorbike:"Mota"}},si={accept_negative:"Aceitar Valores Negativos",action:"Ação",advanced:"Opções Avançadas",allow_layout_break:"Permitir quebra de layout",base_decimals:"Casas decimais da base",battery:"Bateria",calculate_flow_rate:"Calcular Taxa de Fluxo",circle_animation:"Animação de Círculo",clickable_entities:"Entidades Clicáveis",color:"Cor",color_circle:"Cor do Círculo",color_dynamically:"Cor dinâmica",color_icon:"Cor do Ícone",color_state_of_charge_value:"Cor",color_value:"Cor do Valor",combined:"Entidade combinada (uma entidade com valores positivos e negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Cores personalizadas",dashboard_link:"Link do Painel de Controlo",dashboard_link_label:"Nome do Link do Painel de Controlo",decimals:"Casas Decimais",disable_dots:"Desativar Pontos",display_state:"Mostrar Estado",display_zero:"Mostrar Zero",display_zero_lines:"Mostrar Linhas Zero",display_zero_state:"Mostrar Estado Zero",display_zero_tolerance:"Tolerância do Zero",double_tap_action:"Ação de Toque Duplo",entity_generator:"Gerador",fossil_fuel_percentage:"Combustíveis Fósseis",grey_color:"Cor Cinzenta",grey_out:"Cinzento",grid:"Rede",hide:"Esconder",hold_action:"Ação ao Segurar",home:"Casa",icon_alert:"Ícone para Alerta",individual:"Individuais",invert_state:"Inverter Estado",inverted_animation:"Animação Invertida",kilo_decimals:"Casas decimais de quilo",kilo_threshold:"Limiar de base para quilo",label_alert:"Nome para Alerta",max_expected_power:"Potência Máxima Esperada",max_flow_rate:"Taxa de Fluxo Máxima",min_expected_power:"Potência Mínima Esperada",min_flow_rate:"Taxa de Fluxo Mínima",mode:"Modo",mega_decimals:"Casas decimais de mega",mega_threshold:"Limiar de quilo para mega",navigation_path:"Caminho de Navegação",no_color:"Sem cor",no_labels:"Sem etiquetas",override_state:"Substituir Estado",power_outage:"Falta de energia",production:"Produção",secondary_info:"Informação Secundária",separated:"Entidades Separadas (Uma entidade para consumo e outra para produção)",show:"Mostrar",show_direction:"Mostrar Direção",show_state_of_charge:"Mostrar Estado de Carga",solar:"Energia solar",sort_individual_devices:"Classifique dispositivos individuais",state_alert:"Estado do Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Casas Decimais",state_of_charge_icon:"Ícone",state_of_charge_unit:"Unidade",state_of_charge_unit_white_space:"Espaçamento",state_type:"Tipo de Estado",subtract_individual:"Subtrair Individualmente",sum_total:"Somar solar e secundário",tap_action:"Ação de Toque",template:"Modelo",transparency:"Transparência",unit_of_measurement:"Unidade",unit_white_space:"Espaçamento da Unidade",use_metadata:"Utilizar Metadados",use_new_flow_rate_model:"Utilizar Novo Modelo de Velocidade"},li={card:ri,editor:si},ci={label:{car:"Автомобиль",motorbike:"Мотоцикл"}},di={accept_negative:"Принять отрицательные значения",action:"Действие",advanced:"Расширенные настройки",allow_layout_break:"Разрешить разрыв макета",base_decimals:"Десятичные базовые",battery:"Батарея",calculate_flow_rate:"Рассчитать скорость потока",circle_animation:"Анимация круга",clickable_entities:"Кликабельные сущности",color:"Цвет",color_circle:"Цвет круга",color_dynamically:"Цвет динамически",color_icon:"Цвет иконки",color_state_of_charge_value:"Цвет",color_value:"Цвет значения",combined:"Комбинированный объект (один объект с положительными и отрицательными значениями)",consumption:"Потребление",custom:"Пользовательский",custom_colors:"Пользовательские цвета",dashboard_link:"Ссылка на панель управления",dashboard_link_label:"Название ссылки на панель управления",decimals:"Десятичные",disable_dots:"Отключить точки",display_state:"Отображать состояние",display_zero:"Отображать ноль",display_zero_lines:"Отображать нулевые линии",display_zero_state:"Отображать состояние нуля",display_zero_tolerance:"Допустимая погрешность нуля",double_tap_action:"действие двойного касания",entity_generator:"Генератор",fossil_fuel_percentage:"Полный объем ископаемого топлива",grey_color:"Серый цвет",grey_out:"Серый",grid:"Электрическая сеть",hide:"Скрыть",hold_action:"действие удержания",home:"Домашняя",icon_alert:"Иконка для предупреждения",individual:"Индивидуальная",invert_state:"Инвертировать состояние",inverted_animation:"Инвертированная анимация",kilo_decimals:"Десятичные кило",kilo_threshold:"Пороговое значение базового в кило",label_alert:"Метка для предупреждения",max_expected_power:"Максимальная ожидаемая мощность",max_flow_rate:"Максимальная скорость потока",min_expected_power:"Минимальная ожидаемая мощность",min_flow_rate:"Минимальная скорость потока",mode:"Режим",mega_decimals:"Десятичные мега",mega_threshold:"Пороговое значение кило в мега",navigation_path:"путь навигации",no_color:"Без цвета",no_labels:"Без подписей",override_state:"Переопределить состояние",power_outage:"Отключение электричества",production:"Производство",secondary_info:"Вторичная информация",separated:"Отдельные объекты (один объект для потребления и один для производства)",show:"Показать",show_direction:"Показать направление",show_state_of_charge:"Показать уровень заряда",solar:"Солнечная",sort_individual_devices:"Сортировка отдельных устройств",state_alert:"Состояние предупреждения",state_of_charge:"Уровень заряда",state_of_charge_decimals:"Десятичные",state_of_charge_icon:"Иконка",state_of_charge_unit:"Единица измерения",state_of_charge_unit_white_space:"Пробел",state_type:"Тип состояния",subtract_individual:"Вычесть индивидуально",sum_total:"Суммировать солнечную и вторичную",tap_action:"действие касания",template:"Шаблон",transparency:"Прозрачность",unit_of_measurement:"Единица измерения",unit_white_space:"Пробел единицы измерения",use_metadata:"Использовать метаданные",use_new_flow_rate_model:"Использовать новую модель скорости потока"},ui={card:ci,editor:di},pi={label:{car:"Auto",motorbike:"Motorka"}},hi={accept_negative:"Povoliť záporné hodnoty",action:"Akcia",advanced:"Pokročilé nastavenia",allow_layout_break:"Povoliť zalomenie rozloženia",base_decimals:"Desatinné miesta pre základ",battery:"Batéria",calculate_flow_rate:"Počítať prietok",circle_animation:"Kruhová animácia",clickable_entities:"Entity, na ktoré sa dá kliknúť",color:"Farba",color_circle:"Farba kruhu",color_dynamically:"Farba dynamicky",color_icon:"Farba ikony",color_state_of_charge_value:"Farba",color_value:"Farba hodnoty",combined:"Kombinovaná entita (jedna entita s kladnými a zápornými hodnotami)",consumption:"Spotreba",custom:"Voliteľné",custom_colors:"Vlastné farby",dashboard_link:"Odkaz na informačný panel",dashboard_link_label:"Názov odkazu na informačný panel",decimals:"Desatinné",disable_dots:"Vypnúť bodky",display_state:"Zobraziť stav",display_zero:"Zobraziť nulu",display_zero_lines:"Zobraziť nulové riadky",display_zero_state:"Zobrazenie nulového stavu",display_zero_tolerance:"Zobraziť nulovú toleranciu",double_tap_action:"Akcia pri dvojitom klepnutí",entity_generator:"Generátor",fossil_fuel_percentage:"Fosílne palivo",grey_color:"Šedá farba",grey_out:"Zosiviť",grid:"Sieť",hide:"Skryť",hold_action:"Akcia pri podržaní",home:"Doma",icon_alert:"Ikona pre upozornenie",individual:"Individuálne",invert_state:"Invertovať stav",inverted_animation:"Invertovať animáciu",kilo_decimals:"Desatinné miesta pre kilo",kilo_threshold:"Prah zo základu na kilo",label_alert:"Štítok pre upozornenie",max_expected_power:"Max očakávaný výkon",max_flow_rate:"Max prietok",min_expected_power:"Min očakávaný výkon",min_flow_rate:"Min prietok",mode:"Mód",mega_decimals:"Desatinné miesta pre mega",mega_threshold:"Prah z kila na mega",navigation_path:"Navigačná cesta",no_color:"Bez farby",no_labels:"Bez popisov",override_state:"Prepísať stav",power_outage:"Výpadok",production:"Výroba",secondary_info:"Sekundárne informácie",separated:"Oddelené subjekty (jeden subjekt pre spotrebu a jeden pre výrobu)",show:"Zobraziť",show_direction:"Zobraziť smer",show_state_of_charge:"Zobraziť stav nabitia",solar:"Solárne",sort_individual_devices:"Zoraďte jednotlivé zariadenia",state_alert:"Stav upozornenia",state_of_charge:"Stav nabitia",state_of_charge_decimals:"Desatinné",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednotky",state_of_charge_unit_white_space:"Biela plocha",state_type:"Typ stavu",subtract_individual:"Odčítať individuálne",sum_total:"Sčítať solárne a sekundárne",tap_action:"Akcia po klepnutí",template:"Šablóna",transparency:"Transparentnosť",unit_of_measurement:"Jednotka",unit_white_space:"Jednotka bielej plochy",use_metadata:"Použiť Metadata",use_new_flow_rate_model:"Nový model prietoku"},_i={card:pi,editor:hi},mi={label:{car:"Bil",motorbike:"Motorcykel"}},fi={accept_negative:"Acceptera negativa värden",action:"Åtgärd",advanced:"Avancerade inställningar",allow_layout_break:"Tillåt layoutbrytning",base_decimals:"Decimaler för bas",battery:"Batteri",calculate_flow_rate:"Beräkna flöde",circle_animation:"Cirkelanimation",clickable_entities:"Klickbara entiteter",color:"Färg",color_circle:"Cirkelfärg",color_dynamically:"Färg dynamiskt",color_icon:"Ikonfärg",color_state_of_charge_value:"Färg",color_value:"Färg på värde",combined:"Sammansatt entitet (en entitet med postitiva och negativa värden)",consumption:"Konsumtion",custom:"Anpassad",custom_colors:"Anpassade färger",dashboard_link:"Länk till kontrollpanel",dashboard_link_label:"Länknamn till kontrollpanel",decimals:"Decimaler",disable_dots:"Avaktivera punkter",display_state:"Visningsläge",display_zero:"Visa vid nollvärde",display_zero_lines:"Vising av inaktiva linjer",display_zero_state:"Visning vid noll",display_zero_tolerance:"Tolerans för nollvärde",double_tap_action:"Dubbeltrycksåtgärd",entity_generator:"Generator",fossil_fuel_percentage:"Fossilt bränsle",grey_color:"Grå färg",grey_out:"Utgråad",grid:"Nät",hide:"Dölj",hold_action:"Hålltrycksåtgärd",home:"Hem",icon_alert:"Varningsikon",individual:"Individuell",invert_state:"Invertera status",inverted_animation:"Reversera animation",kilo_decimals:"Decimaler för kilo",kilo_threshold:"Tröskel från bas till kilo",label_alert:"Varningsetikett",max_expected_power:"Maximal förväntad effekt",max_flow_rate:"Maximalt flöde",min_expected_power:"Minimal förväntad effekt",min_flow_rate:"Minimalt flöde",mode:"Läge",mega_decimals:"Decimaler för mega",mega_threshold:"Tröskel från kilo till mega",navigation_path:"Navigationsväg",no_color:"Ingen färg",no_labels:"Inga etiketter",override_state:"Använd entitetsvärde",power_outage:"Strömavbrott",production:"Produktion",secondary_info:"Sekundär information",separated:"Separata entiteter (en entitet för konsumtion och en för produktion)",show:"Visa",show_direction:"Visa riktning",show_state_of_charge:"Visa laddningsnivå",solar:"Sol",sort_individual_devices:"Sortera enskilda enheter",state_alert:"Status vid strömavbrott",state_of_charge:"Laddningsnivå",state_of_charge_decimals:"Decimaler",state_of_charge_icon:"Ikon",state_of_charge_unit:"Enhet",state_of_charge_unit_white_space:"Mellanrum före enhet",state_type:"Statustyp",subtract_individual:"Individuell avräkning",sum_total:"Summera sol och sekundär",tap_action:"Tryckåtgärd",template:"Mall",transparency:"Transparens",unit_of_measurement:"Enhet",unit_white_space:"Mellanrum före enhet",use_metadata:"Använd metadata",use_new_flow_rate_model:"Ny flödesmodell"},gi={card:mi,editor:fi},yi={label:{car:"Автомобіль",motorbike:"Мотоцикл"}},vi={accept_negative:"Дозволити від’ємні значення",action:"Дія",advanced:"Розширені параметри",allow_layout_break:"Дозволити розрив макета",base_decimals:"Десяткові знаки для бази",battery:"Акумулятор",calculate_flow_rate:"Розраховувати швидкість потоку",circle_animation:"Анімація кола",clickable_entities:"Клікабельні сутності",color:"Колір",color_circle:"Колір кола",color_dynamically:"Колір динамічно",color_icon:"Колір іконки",color_state_of_charge_value:"Колір заряду",color_value:"Колір значення",combined:"Об’єднана сутність (одна сутність із позитивними та негативними значеннями)",consumption:"Споживання",custom:"Користувацький",custom_colors:"Власні кольори",dashboard_link:"Посилання на дашборд",dashboard_link_label:"Назва посилання на дашборд",decimals:"Кількість десяткових знаків",disable_dots:"Вимкнути точки",display_state:"Показувати стан",display_zero:"Показувати нульові значення",display_zero_lines:"Показувати лінії з нульовим значенням",display_zero_state:"Показувати стан при нулі",display_zero_tolerance:"Допуск для нульових значень",double_tap_action:"Дія при подвійному натисканні",entity_generator:"Генератор сутностей",fossil_fuel_percentage:"Частка викопного палива",grey_color:"Колір затемнення",grey_out:"Затемнити неактивні",grid:"Мережа",hide:"Приховати",hold_action:"Дія при утриманні",home:"Дім",icon_alert:"Іконка сповіщення",individual:"Окремо",invert_state:"Інвертувати стан",inverted_animation:"Інвертована анімація",kilo_decimals:"Десяткові знаки для кіло",kilo_threshold:"Поріг переходу база → кіло",label_alert:"Мітка сповіщення",max_expected_power:"Максимальна очікувана потужність",max_flow_rate:"Максимальна швидкість потоку",min_expected_power:"Мінімальна очікувана потужність",min_flow_rate:"Мінімальна швидкість потоку",mode:"Режим",mega_decimals:"Десяткові знаки для мега",mega_threshold:"Поріг переходу кіло → мега",navigation_path:"Шлях переходу",no_color:"Без кольору",no_labels:"Без підписів",override_state:"Перевизначити стан",power_outage:"Відключення живлення",production:"Виробництво",secondary_info:"Додаткова інформація",separated:"Розділені сутності (окрема для споживання та окрема для виробництва)",show:"Показати",show_direction:"Показувати напрямок",show_state_of_charge:"Показувати рівень заряду",solar:"Сонячна енергія",sort_individual_devices:"Сортувати окремі пристрої",state_alert:"Стан сповіщення",state_of_charge:"Рівень заряду",state_of_charge_decimals:"Десяткові знаки заряду",state_of_charge_icon:"Іконка заряду",state_of_charge_unit:"Одиниця виміру заряду",state_of_charge_unit_white_space:"Пробіл одиниці виміру заряду",state_type:"Тип стану",subtract_individual:"Віднімати індивідуальні значення",sum_total:"Сумувати сонячну та вторинну",tap_action:"Дія при натисканні",template:"Шаблон",transparency:"Прозорість",unit_of_measurement:"Одиниця виміру",unit_white_space:"Пробіл між числом і одиницею",use_metadata:"Використовувати метадані",use_new_flow_rate_model:"Новий алгоритм швидкості потоку"},bi={card:yi,editor:vi};const wi={ca:ut,cs:mt,en:Ct,de:vt,dk:xt,pt:Object.freeze({__proto__:null,card:ri,default:li,editor:si}),pt_BR:ni,es:Mt,nl:Kt,it:Zt,fr:Lt,ru:Object.freeze({__proto__:null,card:ci,default:ui,editor:di}),fi:Nt,pl:ti,sk:Object.freeze({__proto__:null,card:pi,default:_i,editor:hi}),sv:Object.freeze({__proto__:null,card:mi,default:gi,editor:fi}),hi:Ut,ua:Object.freeze({__proto__:null,card:yi,default:bi,editor:vi})};function ki(e,t){try{return e.split(".").reduce((e,t)=>e[t],wi[t])}catch{return}}function xi(e){let t=ki(e,(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_"));return t||(t=ki(e,"en")),t??e}const Si=(e,t)=>!!e.entities[t]?.invert_state,Ei=e=>Math.abs(Math.min(e,0)),$i=e=>Math.max(e,0),Ci=(e,t,i)=>{const o=t.entities?.[i]?.secondary_info?.entity;if("string"!=typeof o)return null;const a=e.states[c(o)];if(!a)return null;const n=a.state;return p(n)?Number(n):n},Di=(e,t,i)=>{const o=t.entities[i]?.entity;if(void 0===o)return null;if("string"==typeof o){const a=ot(e,o);return Si(t,i)?$i(a):Ei(a)}return ot(e,o.production)},Ai=(e,t,i)=>{const o=t.entities[i]?.entity;if(void 0===o)return null;if("string"==typeof o){const a=ot(e,o);return Si(t,i)?Ei(a):$i(a)}return ot(e,o.consumption)},Pi=(e,t)=>{const i=t.entities.battery?.state_of_charge;return void 0===i?null:tt(e,i)},Mi=(e,t)=>Di(e,t,"battery"),Ti=(e,t)=>Ai(e,t,"battery"),zi=(e,t)=>Ai(e,t,"grid"),Oi=(e,t)=>Ci(e,t,"grid"),Ni=(e,t)=>Ci(e,t,"home"),Ii=(e,t)=>{if(t&&Ke(e,t))return e.states[c(t)];et(t)},ji=(e,t,i)=>t?.icon?t.icon:t?.use_metadata?"string"==typeof t?.entity?Ii(e,t?.entity)?.attributes?.icon||i:Ii(e,t?.entity?.consumption)?.attributes?.icon||Ii(e,t?.entity?.production)?.attributes?.icon||i:i,Bi=(e,t,i)=>t?.name?t.name:t?.use_metadata?"string"==typeof t?.entity?Ii(e,t.entity)?.attributes?.friendly_name||i:Ii(e,t?.entity?.consumption)?.attributes?.friendly_name||Ii(e,t?.entity?.production)?.attributes?.friendly_name||i:i,Li=["K","M","G","T","P","E","Z","Y"],Ri=(e,t)=>{const i=t.toUpperCase().slice(0,1),o=Li.indexOf(i);return o>-1?e*Math.pow(1e3,o+1):e},Fi=(e,t,i,o)=>{if(!i)return((e,t)=>{const i=tt(e,t);if(!t||null===i)return 0;const o=e.states[c(t)];if(!o)return 0;const a=o.attributes.unit_of_measurement??"";return Ri(i,a)})(e,o);if(!t)throw new Error("Energy growth map is required");return((e,t)=>t?l(t).reduce((t,i)=>t+(e[i]??0),0):0)(t,o)},Hi=(e,t)=>{if("string"!=typeof t?.entity)return null;const i=Ii(e,t?.secondary_info?.entity),o=i?.state;return p(o)?Number(o):o},Ui=(e,t)=>!!e&&e>=t,Gi=(e,t)=>e?t?Ui(e,t)?e:0:e:0,Vi={field:void 0,entity:"",has:!1,state:null,displayZero:!1,displayZeroTolerance:0,icon:"",name:"",color:null,unit:void 0,unit_white_space:!1,invertAnimation:!1,showDirection:!1,secondary:{entity:null,template:null,has:!1,state:null,icon:null,unit:null,unit_white_space:!1,displayZero:!1,accept_negative:!1,displayZeroTolerance:0,decimals:null}},Wi=({hass:e,config:i,energyGrowthMap:o,useDateSelection:a,field:n})=>{if(!n||!n?.entity)return Vi;const r=n.entity,s=(({hass:e,config:i,energyGrowthMap:o,useDateSelection:a,field:n})=>{const r=t(i),s=n?.entity;if(void 0===s)return null;if(r)return Math.abs(Fi(e,o,a,s));const l=ot(e,s);return Math.abs(l)})({hass:e,config:i,energyGrowthMap:o,useDateSelection:a,field:n}),l=n?.display_zero||!1,c=n?.display_zero_tolerance||0,d=((e,t,i)=>!!e||!!Ui(t,i))(l,s,c),u=s&&s<0,p=n?.inverted_animation||!1,h=u?!p:p;let _=null;var m;return n?.color&&"string"==typeof n?.color?_=n.color:n?.color&&"object"==typeof n?.color&&(_=(m=n.color)?"#".concat(m.map(e=>e.toString(16).padStart(2,"0")).join("")):""),{field:n,entity:r,has:d,state:s,displayZero:l,displayZeroTolerance:c,icon:ji(e,n,"mdi:flash"),name:Bi(e,n,"Individual"),color:_,unit:n?.unit_of_measurement,unit_white_space:!1!==n?.unit_white_space,decimals:n?.decimals,invertAnimation:h,showDirection:n?.show_direction||!1,secondary:{entity:n?.secondary_info?.entity||null,template:n?.secondary_info?.template||null,has:void 0!==n?.secondary_info?.entity,state:Hi(e,n)||null,accept_negative:n?.secondary_info?.accept_negative||!1,icon:n?.secondary_info?.icon||null,unit:n?.secondary_info?.unit_of_measurement||null,unit_white_space:!1!==n?.secondary_info?.unit_white_space,displayZero:n?.secondary_info?.display_zero||!1,displayZeroTolerance:n?.secondary_info?.display_zero_tolerance||0,decimals:n?.secondary_info?.decimals||null,tap_action:n?.secondary_info?.tap_action,hold_action:n?.secondary_info?.hold_action,double_tap_action:n?.secondary_info?.double_tap_action}}},Zi=(e,t)=>{const i=t.entities.fossil_fuel_percentage,o=i?.entity,a=i?.display_zero,n=zi(e,t);return void 0!==o&&(!0===a||null!==n&&1*n-(tt(e,o)??0)/100>0)},Yi=(e,t)=>{const i=t.entities.fossil_fuel_percentage,o=i?.entity,a=i?.display_zero,n=zi(e,t);return void 0!==o&&(!0===a||null!==n&&(!1!==Zi(e,t)&&1*n-(tt(e,o)??0)/100>0))},Xi=(e,t)=>Ci(e,t,"fossil_fuel_percentage"),qi=(e,t)=>{const i=t.entities.solar?.entity,o=t.entities.solar?.secondary_info?.entity;if(void 0===i)return null;const a=ot(e,i),n=o?Math.max(ot(e,o),0):0,r=t.entities.solar?.secondary_info?.sum_total,s=r?a+n:a;return Si(t,"solar")?Ei(s):$i(s)},Ki=(e,t)=>Ci(e,t,"solar"),Ji=(e,t)=>e in t,Qi=(e,t,i)=>{let o="var(--primary-text-color)";return"string"==typeof e&&Ji(e,t)&&(o=t[e]?.color??o),!0===e&&Ji(i,t)&&(o=t[i]?.color??o),o},eo=e=>e?"#".concat(e.map(e=>e.toString(16).padStart(2,"0")).join("")):"",to=["#d0cc5b","#964cb5","#b54c9d","#5bd0cc","#ff7043","#66bb6a","#42a5f5","#ffa726","#ab47bc","#26c6da"],io=["left-top","left-bottom","right-top","right-bottom"],oo=(e,t)=>{const{grid:i,solar:o,entities:a,individual:n,battery:r,homeSources:s,homeLargestSource:l,nonFossil:c,display_zero_lines_transparency:d,display_zero_lines_grey_color:u,isCardWideEnough:p}=t;if(e.style.setProperty("--icon-grid-color","consumption"===i.color.icon_type?"var(--energy-grid-consumption-color)":"production"===i.color.icon_type?"var(--energy-grid-return-color)":"color_dynamically"===i.color.icon_type?(i.state.fromGrid??0)>=(i.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--primary-text-color)"),e.style.setProperty("--circle-grid-color","consumption"===i.color.circle_type?"var(--energy-grid-consumption-color)":"production"===i.color.circle_type?"var(--energy-grid-return-color)":"no_color"!==i.color.circle_type?(i.state.fromGrid??0)>=(i.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--energy-grid-consumption-color)"),void 0!==i.color.fromGrid&&("object"==typeof i.color.fromGrid&&(i.color.fromGrid=eo(i.color.fromGrid)),e.style.setProperty("--energy-grid-consumption-color",i.color.fromGrid||"#a280db")),void 0!==i.color.toGrid&&("object"==typeof i.color.toGrid&&(i.color.toGrid=eo(i.color.toGrid)),e.style.setProperty("--energy-grid-return-color",i.color.toGrid||"#a280db")),e.style.setProperty("--secondary-text-grid-color","consumption"===i.secondary.color.type?"var(--energy-grid-consumption-color)":"production"===i.secondary.color.type?"var(--energy-grid-return-color)":!0===i.secondary.color.type?(i.state.fromGrid??0)>=(i.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--primary-text-color)"),!1===a.grid?.color_value?(e.style.setProperty("--text-grid-consumption-color","var(--primary-text-color)"),e.style.setProperty("--text-grid-return-color","var(--primary-text-color)")):(e.style.setProperty("--text-grid-consumption-color","var(--energy-grid-consumption-color)"),e.style.setProperty("--text-grid-return-color","var(--energy-grid-return-color)")),e.style.setProperty("--text-solar-color",a.solar?.color_value?"var(--energy-solar-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-solar-color",a.solar?.secondary_info?.color_value?"var(--energy-solar-color)":"var(--primary-text-color)"),void 0!==a.solar?.color){let t=a.solar.color;"object"==typeof t&&(t=eo(t)),e.style.setProperty("--energy-solar-color",t||"#ff9800")}e.style.setProperty("--icon-solar-color",a.solar?.color_icon?"var(--energy-solar-color)":"var(--primary-text-color)"),void 0!==r.color.fromBattery&&("object"==typeof r.color.fromBattery&&(r.color.fromBattery=eo(r.color.fromBattery)),e.style.setProperty("--energy-battery-out-color",r.color.fromBattery||"#4db6ac")),void 0!==r.color.toBattery&&("object"==typeof r.color.toBattery&&(r.color.toBattery=eo(r.color.toBattery)),e.style.setProperty("--energy-battery-in-color",r.color.toBattery||"#a280db")),r.color.icon_type=a.battery?.color_icon,e.style.setProperty("--icon-battery-color","consumption"===r.color.icon_type?"var(--energy-battery-in-color)":"production"===r.color.icon_type?"var(--energy-battery-out-color)":"color_dynamically"===r.color.icon_type?r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)":"var(--primary-text-color)");const h=a.battery?.color_state_of_charge_value;if(e.style.setProperty("--text-battery-state-of-charge-color","consumption"===h?"var(--energy-battery-in-color)":"production"===h?"var(--energy-battery-out-color)":"color_dynamically"===h?r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)":"var(--primary-text-color)"),e.style.setProperty("--circle-battery-color","consumption"===r.color.circle_type?"var(--energy-battery-in-color)":"production"===r.color.circle_type||"no_color"!==r.color.circle_type&&r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)"),!1===a.battery?.color_value?(e.style.setProperty("--text-battery-in-color","var(--primary-text-color)"),e.style.setProperty("--text-battery-out-color","var(--primary-text-color)")):(e.style.setProperty("--text-battery-in-color","var(--energy-battery-in-color)"),e.style.setProperty("--text-battery-out-color","var(--energy-battery-out-color)")),void 0!==c.color&&("object"==typeof c.color&&(c.color=eo(c.color)),e.style.setProperty("--non-fossil-color",c.color||"var(--energy-non-fossil-color)")),e.style.setProperty("--icon-non-fossil-color",a.fossil_fuel_percentage?.color_icon?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--text-non-fossil-color",a.fossil_fuel_percentage?.color_value?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-non-fossil-color",a.fossil_fuel_percentage?.secondary_info?.color_value?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-home-color",a.home?.secondary_info?.color_value?"var(--text-home-color)":"var(--primary-text-color)"),e.style.setProperty("--icon-home-color",Qi(a.home?.color_icon,s,l)),e.style.setProperty("--text-home-color",Qi(a.home?.color_value,s,l)),!1===a.home?.circle_animation&&e.style.setProperty("--home-circle-animation","none"),e.style.setProperty("--battery-grid-line",i.state.toBattery?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)"),e.style.setProperty("--transparency-unused-lines",d?d.toString():"0"),void 0!==u){let t=u;"object"==typeof t&&(t=eo(t)),e.style.setProperty("--greyed-out--line-color",t)}if(o.has&&(r.has?(e.style.setProperty("--lines-svg-not-flat-line-height","106%"),e.style.setProperty("--lines-svg-not-flat-line-top","-3%"),e.style.setProperty("--lines-svg-flat-width","calc(100% - 160px)"),e.style.setProperty("--lines-svg-flat-left","0"),e.style.setProperty("--lines-svg-not-flat-left","0")):(e.style.setProperty("--lines-svg-not-flat-line-top","-2%"),e.style.setProperty("--lines-svg-flat-width",p?"calc(100% - 154px)":"calc(100% - 157px)"),e.style.setProperty("--lines-svg-not-flat-width",p?"calc(103% - 172px)":"calc(103% - 169px)"),e.style.setProperty("--lines-svg-not-flat-left","3px"),e.style.setProperty("--lines-svg-flat-left","-3px"))),n?.some(e=>e.has)){const t=(t,i)=>{const o=(e=>e<io.length?io[e]:`ind-${e}`)(i);let a=t?.color;"object"==typeof a&&(a=eo(a)),e.style.setProperty(`--individual-${o}-color`,a||to[i%to.length]||"#d0cc5b"),e.style.setProperty(`--icon-individual-${o}-color`,!1!==t?.color_icon?`var(--individual-${o}-color)`:"var(--primary-text-color)"),e.style.setProperty(`--text-individual-${o}-color`,t?.color_value?`var(--individual-${o}-color)`:"var(--primary-text-color)"),e.style.setProperty(`--secondary-text-individual-${o}-color`,t?.secondary_info?.color_value?`var(--individual-${o}-color)`:"var(--primary-text-color)")},i=n.filter(e=>e?.has);for(let e=0;e<i.length;e++){const o=i[e];o&&t(o.field||{},e)}}},ao=b`
  :host {
    --size-circle-entity: 79.99px;
    --mdc-icon-size: 24px;
    --clickable-cursor: pointer;
    --individual-left-bottom-color: #d0cc5b;
    --individual-left-top-color: #964cb5;
    --individual-right-top-color: #b54c9d;
    --individual-right-bottom-color: #5bd0cc;
    --non-fossil-color: var(--energy-non-fossil-color, #0f9d58);
    --icon-non-fossil-color: var(--non-fossil-color, #0f9d58);
    --icon-solar-color: var(--energy-solar-color, #ff9800);
    --icon-individual-bottom-color: var(--individual-left-bottom-color, #d0cc5b);
    --icon-individual-top-color: var(--individual-left-top-color, #964cb5);
    --icon-grid-color: var(--energy-grid-consumption-color, #488fc2);
    --icon-battery-color: var(--energy-battery-in-color, #f06292);
    --icon-home-color: var(--energy-grid-consumption-color, #488fc2);
    --text-solar-color: var(--primary-text-color);
    --text-non-fossil-color: var(--primary-text-color);
    --text-individual-bottom-color: var(--primary-text-color);
    --text-individual-top-color: var(--primary-text-color);
    --text-home-color: var(--primary-text-color);
    --secondary-text-individual-bottom-color: var(--primary-text-color);
    --secondary-text-individual-top-color: var(--primary-text-color);
    --text-battery-state-of-charge-color: var(--primary-text-color);
    --cirlce-grid-color: var(--energy-grid-consumption-color, #488fc2);
    --circle-battery-color: var(--energy-battery-in-color, #f06292);
    --battery-grid-line: var(--energy-grid-return-color, #8353d1);
    --secondary-text-solar-color: var(--primary-text-color);
    --secondary-text-grid-color: var(--primary-text-color);
    --secondary-text-home-color: var(--primary-text-color);
    --secondary-text-non-fossil-color: var(--primary-text-color);
    --lines-svg-not-flat-line-height: 106%;
    --lines-svg-not-flat-line-top: -2%;
    --lines-svg-flat-width: calc(100% - 160px);
    --lines-svg-not-flat-width: calc(103% - 165px);
    --lines-svg-not-flat-multi-indiv-height: 104%;
    --lines-svg-not-flat-multi-indiv-width: calc(103% - var(--size-circle-entity) * 3.7);
    --lines-svg-not-flat-multi-indiv-width: calc(((106% - 165px) * 0.5));
    --lines-svg-not-flat-multi-indiv-width: calc(((130% - 246px) * 0.5));
    --lines-svg-not-flat-multi-indiv-right-indiv-width: calc(((130% - 210px) * 0.5));
    --lines-svg-not-flat-multi-indiv-right-indiv-height: 103%;
    --lines-svg-not-flat-multi-indiv-far-right-indiv-width: calc(((180% - 210px) * 0.5));
    --lines-svg-not-flat-multi-indiv-far-right-indiv-height: 103%;
    --lines-svg-flat-multi-indiv-width: calc((129% - 242px) * 0.5);
    --lines-svg-flat-left: 0;
    --lines-svg-not-flat-left: 0;
    --dot-size: 3.5px;

    --transparency: var(--transparency-unused-lines);
    --greyed-out--line-color: #bdbdbd;
    --text-grid-consumption-color: var(--energy-grid-consumption-color);
    --text-grid-return-color: var(--energy-grid-return-color);
    --text-battery-in-color: var(--energy-battery-in-color);
    --text-battery-out-color: var(--energy-battery-out-color);
    --home-circle-animation: rotate-in 0.6s ease-in;
  }

  ha-card {
    overflow: hidden;
  }

  ha-card.full-size {
    height: 100%;
  }

  .card-content.full-size {
    transform: scale(2) translateY(30%);
  }

  .card-content {
    position: relative;
    margin: 0 auto;
  }

  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    position: relative;
    text-decoration: none;
    color: var(--primary-text-color);
    gap: 2px;
    overflow: hidden;
  }

  .circle > ha-ripple {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }

  .circle > :not(ha-ripple) {
    position: relative;
    z-index: 1;
  }

  .card-content,
  .row {
    max-width: 470px;
  }
  .lines {
    position: absolute;
    bottom: 0;
    left: var(--size-circle-entity);
    width: 100%;
    height: 146px;
    display: flex;
    justify-content: flex-start;
    padding: 0 16px 16px;
    box-sizing: border-box;
    pointer-events: none;
  }

  :dir(rtl) .lines {
    justify-content: flex-end;
  }

  .lines:not(.multi-individual) svg.flat-line {
    left: var(--lines-svg-flat-left);
  }

  .lines:not(.multi-individual) svg:not(.flat-line) {
    left: var(--lines-svg-not-flat-left);
  }

  .lines:has(svg:not(.flat-line)) {
    margin-left: -1%;
  }
  .lines.individual-bottom-individual-top {
    bottom: 110px;
  }
  .lines.high {
    bottom: 100px;
    height: 156px;
  }
  .lines svg {
    width: var(--lines-svg-flat-width);
    height: 100%;
    max-width: 340px;
    position: relative;
  }

  .lines svg:not(.flat-line) {
    width: var(--lines-svg-not-flat-width);
    height: var(--lines-svg-not-flat-line-height);
    top: var(--lines-svg-not-flat-line-top);
  }

  .multi-individual {
    left: calc(var(--size-circle-entity) + 2%);
    margin-left: -2.2% !important;
  }

  .multi-individual svg {
    width: var(--lines-svg-flat-multi-indiv-width);
  }

  .multi-individual svg:not(.flat-line) {
    width: var(--lines-svg-not-flat-multi-indiv-width);
    margin-top: 1px;
    height: var(--lines-svg-not-flat-multi-indiv-height);
  }

  .row {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin: 0 auto;
  }

  .pf-layout {
    display: flex;
    align-items: stretch;
    max-width: 680px;
    margin: 0 auto;
  }

  .pf-main {
    flex: 1;
    max-width: 470px;
    position: relative;
  }

  .pf-far-right {
    display: flex;
    flex-direction: column;
    width: 120px;
    align-items: center;
    flex-shrink: 0;
    padding-left: 8px;
  }

  .pf-far-right-top {
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  .pf-far-right-mid {
    flex: 1;
  }

  .pf-far-right-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .circle-container.solar {
    height: 130px;
  }
  .circle-container.individual-top {
    height: 130px;
  }
  .circle-container.individual-bottom {
    justify-content: flex-end;
  }
  .circle-container.individual-bottom.bottom {
    position: relative;
    top: -20px;
    margin-bottom: -20px;
  }
  .circle-container.battery {
    height: 110px;
    justify-content: flex-end;
  }
  .spacer {
    width: var(--size-circle-entity);
  }

  .circle-container .circle {
    cursor: var(--clickable-cursor);
  }
  #battery-grid {
    stroke: var(--battery-grid-line);
  }
  ha-icon {
    display: inline;
    padding-bottom: 2px;
  }
  ha-icon.small {
    --mdc-icon-size: 12px;
  }
  .label {
    color: var(--secondary-text-color);
    font-size: 12px;
    max-width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    min-height: 20px;
  }

  .card-content.no-labels .label {
    display: none;
  }

  .card-content.no-labels .circle-container.solar,
  .card-content.no-labels .circle-container.low-carbon,
  .card-content.no-labels .circle-container.individual-top {
    height: 110px !important;
  }

  .card-content.no-labels .right-individual-flow-container,
  .card-content.no-labels .lines {
    transform: translateY(20px);
  }

  line,
  path {
    stroke: var(--disabled-text-color);
    stroke-width: 1;
    fill: none;
  }
  path.transparency {
    opacity: calc(calc(100 - var(--transparency)) / 100);
  }
  path.grey {
    stroke: var(--greyed-out--line-color) !important;
  }
  .circle svg {
    position: absolute;
    fill: none;
    stroke-width: 4px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  span.secondary-info {
    color: var(--primary-text-color);
    font-size: 12px;
    max-width: 60px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .individual-top path,
  .individual-top circle {
    stroke: var(--individual-left-top-color);
  }

  #individual-left-bottom-icon {
    color: var(--icon-individual-left-bottom-color);
  }
  #individual-left-top-icon {
    color: var(--icon-individual-left-top-color);
  }

  #individual-right-bottom-icon {
    color: var(--icon-individual-right-bottom-color);
  }
  #individual-right-top-icon {
    color: var(--icon-individual-right-top-color);
  }

  #solar-icon {
    color: var(--icon-solar-color);
  }
  circle.individual-top {
    stroke-width: 4;
    width: var(--dot-size);
    fill: var(--individual-left-top-color);
  }
  circle.individual-bottom {
    stroke-width: 4;
    width: var(--dot-size);
    fill: var(--individual-left-bottom-color);
  }
  .individual-top .circle {
    border-color: var(--individual-left-top-color);
  }
  .individual-bottom path,
  .individual-bottom circle {
    stroke: var(--individual-left-bottom-color);
  }
  .individual-bottom .circle {
    border-color: var(--individual-left-bottom-color);
  }

  .individual-right-top .circle {
    border-color: var(--individual-right-top-color);
  }

  circle.individual-right-top .circle {
    fill: var(--individual-right-top-color);
  }

  .individual-right-top path,
  .individual-right-top circle {
    stroke: var(--individual-right-top-color);
  }
  .individual-right-bottom .circle {
    border-color: var(--individual-right-bottom-color);
  }

  circle.individual-right-bottom .circle {
    fill: var(--individual-right-bottom-color);
  }

  .individual-right-bottom path,
  .individual-right-bottom circle {
    stroke: var(--individual-right-bottom-color);
  }

  .right-individual-flow-container {
    position: absolute;
    right: calc(var(--size-circle-entity) - 27% * 1.1 + 6px);
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 156px;
    bottom: 100px;
    padding: 0 16px 16px;
    margin-right: -1.2%;
    box-sizing: border-box;
    pointer-events: none;
  }
  .right-individual-flow-container > svg {
    width: var(--lines-svg-not-flat-multi-indiv-right-indiv-width);
  }

  .right-individual-flow {
    height: var(--lines-svg-not-flat-multi-indiv-right-indiv-height);
    margin-top: 2px;
    width: var(--lines-svg-not-flat-multi-indiv-width);
    top: var(--lines-svg-not-flat-line-top);
    max-width: 340px;
    position: relative;
  }

  .far-right-individual-flow-line {
    width: 100%;
    height: 10px;
    pointer-events: none;
    margin-top: 2px;
  }
  .circle-container.low-carbon {
    height: 130px;
  }
  .low-carbon path {
    stroke: var(--non-fossil-color);
  }
  .low-carbon .circle {
    border-color: var(--non-fossil-color);
  }
  .low-carbon ha-icon:not(.small) {
    color: var(--icon-non-fossil-color);
  }
  circle.low-carbon {
    stroke-width: 4;
    fill: var(--non-fossil-color);
    stroke: var(--non-fossil-color);
  }
  .solar {
    color: var(--primary-text-color);
  }
  .solar .circle {
    border-color: var(--energy-solar-color);
  }
  .solar ha-icon:not(.small) {
    color: var(--icon-solar-color);
  }
  circle.solar,
  path.solar {
    stroke: var(--energy-solar-color);
  }
  circle.solar {
    stroke-width: 4;
    fill: var(--energy-solar-color);
  }
  .battery .circle {
    border-color: var(--circle-battery-color);
  }
  circle.battery,
  path.battery {
    stroke: var(--energy-battery-out-color);
  }
  path.battery-home,
  circle.battery-home {
    stroke: var(--energy-battery-out-color);
  }
  circle.battery-home {
    stroke-width: 4;
    fill: var(--energy-battery-out-color);
  }
  path.battery-solar,
  circle.battery-solar {
    stroke: var(--energy-battery-in-color);
  }
  circle.battery-solar {
    stroke-width: 4;
    fill: var(--energy-battery-in-color);
  }
  .battery-in {
    color: var(--energy-battery-in-color);
  }
  .battery-out {
    color: var(--energy-battery-out-color);
  }
  span.battery-in {
    color: var(--text-battery-in-color);
  }
  span.battery-out {
    color: var(--text-battery-out-color);
  }
  path.battery-from-grid {
    stroke: var(--energy-grid-consumption-color);
  }
  path.battery-to-grid {
    stroke: var(--battery-grid-line);
  }
  .battery ha-icon:not(.small) {
    color: var(--icon-battery-color);
  }

  path.return,
  circle.return,
  circle.battery-to-grid {
    stroke: var(--energy-grid-return-color);
  }
  circle.return,
  circle.battery-to-grid {
    stroke-width: 4;
    fill: var(--energy-grid-return-color);
  }
  .return {
    color: var(--energy-grid-return-color);
  }
  span.return {
    color: var(--text-grid-return-color);
  }
  .grid .circle {
    border-color: var(--circle-grid-color);
  }
  .consumption {
    color: var(--energy-grid-consumption-color);
  }
  span.consumption {
    color: var(--text-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid,
  path.grid {
    stroke: var(--energy-grid-consumption-color);
  }
  circle.grid,
  circle.battery-from-grid {
    stroke-width: 4;
    fill: var(--energy-grid-consumption-color);
  }
  .grid ha-icon:not(.small) {
    color: var(--icon-grid-color);
  }
  .home .circle {
    border-width: 0;
    border-color: var(--primary-color);
  }
  .home .circle.border {
    border-width: 2px;
  }
  .home ha-icon:not(.small) {
    color: var(--icon-home-color);
  }
  .circle svg circle {
    animation: var(--home-circle-animation);
    transition:
      stroke-dashoffset 0.4s,
      stroke-dasharray 0.4s;
    fill: none;
  }
  span.solar {
    color: var(--text-solar-color);
  }

  span.low-carbon {
    color: var(--text-non-fossil-color);
  }

  span.low-carbon.secondary-info {
    color: var(--secondary-text-non-fossil-color);
  }

  #home-circle {
    color: var(--text-home-color);
    z-index: 2;
  }

  .individual-bottom .circle {
    color: var(--text-individual-bottom-color);
  }

  .individual-top .circle {
    color: var(--text-individual-top-color);
  }

  .individual-bottom span.secondary-info {
    color: var(--secondary-text-individual-bottom-color);
  }

  .individual-top span.secondary-info {
    color: var(--secondary-text-individual-top-color);
  }

  span.secondary-info.left-top {
    color: var(--secondary-text-individual-left-top-color);
  }
  span.individual-left-top {
    color: var(--text-individual-left-top-color);
  }
  span.secondary-info.left-bottom {
    color: var(--secondary-text-individual-left-bottom-color);
  }
  span.individual-left-bottom {
    color: var(--text-individual-left-bottom-color);
  }
  span.secondary-info.right-top {
    color: var(--secondary-text-individual-right-top-color);
  }
  span.individual-right-top {
    color: var(--text-individual-right-top-color);
  }

  span.secondary-info.right-bottom {
    color: var(--secondary-text-individual-right-bottom-color);
  }
  span.individual-right-bottom {
    color: var(--text-individual-right-bottom-color);
  }

  .solar span.secondary-info {
    color: var(--secondary-text-solar-color);
  }

  .grid span.secondary-info {
    color: var(--secondary-text-grid-color);
  }

  .home span.secondary-info {
    color: var(--secondary-text-home-color);
  }

  #battery-state-of-charge-text {
    color: var(--text-battery-state-of-charge-color);
  }

  @keyframes rotate-in {
    from {
      stroke-dashoffset: 238.76104;
      stroke-dasharray: 238.76104;
    }
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-actions a {
    text-decoration: none;
  }

  .home-circle-sections {
    pointer-events: none;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  /* ===== Extra Individual Sensors Grid (5+ sensors) ===== */
  .extra-individuals-section {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--divider-color, rgba(128, 128, 128, 0.15));
  }

  .extra-individuals-grid {
    display: grid;
    grid-template-columns: repeat(4, var(--size-circle-entity));
    gap: 4px 0;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .extra-individuals-grid .circle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;
  }

  .extra-individuals-grid .circle {
    width: 64px;
    height: 64px;
    font-size: 10px;
    line-height: 10px;
  }

  .extra-individuals-grid .label {
    font-size: 10px;
    max-width: 70px;
    text-align: center;
  }

  /* Extra individual sensor color classes - dynamic via CSS custom properties */
  .extra-individual .circle {
    border-color: var(--extra-ind-color, #888);
  }

  .extra-individual .circle {
    color: var(--extra-ind-text-color, var(--primary-text-color));
  }

  .extra-individual ha-icon:not(.small) {
    color: var(--extra-ind-icon-color, var(--primary-text-color));
  }

  .extra-individual span.secondary-info {
    color: var(--extra-ind-secondary-color, var(--primary-text-color));
  }
`;const no=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ro={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:O},so=(e=ro,t,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lo(e){return(t,i)=>"object"==typeof i?so(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function co(e){return lo({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function uo(e,t){return(t,i,o)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}!function(e){const t=`https://github.com/flixlix/${e.type}`,i=window;var o;i.customCards=i.customCards||[],i.customCards.push({...e,preview:!0,documentationURL:t}),o={name:e.name,version:e.version,readme:t},Je=o,console.groupCollapsed(`%c⚡ ${Je.name} v${Je.version} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:",Je.readme),console.groupEnd()}({type:"power-flow-card-plus-extended",name:"Power Flow Card Plus Extended",description:"An extended version of the power flow card with richer options, advanced features and a few small UI enhancements. Supports up to 10+ individual sensors connected to Home.",version:"1.0.0"});let po=class extends xe{constructor(){super(...arguments),this._config={},this._templateResults={},this._unsubRenderTemplates=new Map,this._width=0,this.wideEnoughForFourIndividuals=359,this._handleVisibilityChange=()=>{"undefined"!=typeof document&&"visible"===document.visibilityState&&this.requestUpdate()},this.previousDur={},this._pendingTapTimeouts=new WeakMap,this._holdTimeouts=new WeakMap,this._holdTriggered=new WeakMap,this._doubleTapDelay=250,this._holdDelay=500}setConfig(e){if(e.entities.individual1||e.entities.individual2)throw new Error("You are using an outdated configuration. Please update your configuration to the latest version. The individual1 and individual2 properties are now just a single individual array property. The easiest way to do this is to remove the individual1 and individual2 properties and replace them in the UI Editor.");if(!e.entities||!e.entities?.battery?.entity&&!e.entities?.grid?.entity&&!e.entities?.solar?.entity)throw new Error("At least one entity for battery, grid or solar must be defined");this._config={...e,min_flow_rate:h(e.min_flow_rate,d.minFlowRate),max_flow_rate:h(e.max_flow_rate,d.maxFlowRate),base_decimals:h(e.base_decimals,d.baseDecimals),kilo_decimals:h(e.kilo_decimals,d.kiloDecimals),kilo_threshold:h(e.kilo_threshold,d.kiloThreshold),max_expected_power:h(e.max_expected_power,d.maxExpectedPower),min_expected_power:h(e.min_expected_power,d.minExpectedPower),display_zero_lines:{mode:e.display_zero_lines?.mode??d.displayZeroLines.mode,transparency:h(e.display_zero_lines?.transparency,d.displayZeroLines.transparency),grey_color:e.display_zero_lines?.grey_color??d.displayZeroLines.grey_color}}}connectedCallback(){super.connectedCallback(),"undefined"!=typeof document&&document.addEventListener("visibilitychange",this._handleVisibilityChange),this._tryConnectAll()}disconnectedCallback(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,"undefined"!=typeof document&&document.removeEventListener("visibilitychange",this._handleVisibilityChange),this._tryDisconnectAll(),super.disconnectedCallback()}static async getConfigElement(){return await Promise.resolve().then(function(){return kn}),document.createElement("power-flow-card-plus-editor")}static getStubConfig(e){return function(e,t="power"){function i(t,i){const o=c(t),a=e.states[o]?.attributes.friendly_name;return i.some(e=>o.includes(e)||a?.includes(e))}let o;o="energy"===t?Object.keys(e.states).filter(t=>{const i=e.states[c(t)];return i?.state&&i.attributes&&"energy"===i.attributes.device_class||i?.entity_id.includes("energy")}):Object.keys(e.states).filter(t=>{const i=e.states[c(t)];return i?.state&&i.attributes&&"power"===i.attributes.device_class||i?.entity_id.includes("power")});const a=["grid","utility","net","meter"],n=["solar","pv","photovoltaic","inverter"],r=["battery"],s=["battery_percent","battery_level","state_of_charge","soc","percentage"],l=o.filter(e=>i(e,a))[0],u=o.filter(e=>i(e,n))[0];return{entities:{battery:{entity:o.filter(e=>i(e,r))[0]??"",state_of_charge:Object.keys(e.states).filter(t=>{const i=e.states[t];return i&&i.state&&i.attributes&&"%"===i.attributes.unit_of_measurement}).filter(e=>i(e,s))[0]??""},grid:l?{entity:l}:void 0,solar:u?{entity:u,display_zero_state:!0}:void 0},clickable_entities:!0,display_zero_lines:!0,use_new_flow_rate_model:!0,base_decimals:d.baseDecimals,kilo_decimals:d.kiloDecimals,min_flow_rate:d.minFlowRate,max_flow_rate:d.maxFlowRate,max_expected_power:d.maxExpectedPower,min_expected_power:d.minExpectedPower,kilo_threshold:d.kiloThreshold,mega_threshold:d.megaThreshold,transparency_zero_lines:d.transparencyZeroLines,sort_individual_devices:!1}}(e,"power")}getCardSize(){return 3}_normalizeActionConfig(e){if(e)return"tap_action"in e||"hold_action"in e||"double_tap_action"in e?e:{tap_action:{action:"more-info"}}}openDetails(e,t,i,o="tap"){e.stopPropagation();const a=this._normalizeActionConfig(t);if(!!!(a?.tap_action||a?.hold_action||a?.double_tap_action)){if(!i||!this._config.clickable_entities)return;if(!((e,t)=>{const i=l(t);for(const t of i)if(!(t in e.states))return!1;return!0})(this.hass,i))return;const e=new CustomEvent("hass-more-info",{composed:!0,detail:{entityId:i}});return void this.dispatchEvent(e)}st(e.target,this.hass,{entity:i,tap_action:a?.tap_action,hold_action:a?.hold_action,double_tap_action:a?.double_tap_action},o)}onEntityClick(e,t,i){e.stopPropagation();const o=e.currentTarget,a=this._normalizeActionConfig(t);if(o)if(this._holdTriggered.get(o))this._holdTriggered.set(o,!1);else{if(a?.double_tap_action){const t=this._pendingTapTimeouts.get(o);t&&clearTimeout(t);const n=setTimeout(()=>{this.openDetails({stopPropagation:()=>e.stopPropagation(),target:o},a,i,"tap"),this._pendingTapTimeouts.delete(o)},this._doubleTapDelay);return void this._pendingTapTimeouts.set(o,n)}this.openDetails({stopPropagation:()=>e.stopPropagation(),target:o},a,i,"tap")}}onEntityDoubleClick(e,t,i){const o=e.currentTarget,a=this._normalizeActionConfig(t);if(!o)return;const n=this._pendingTapTimeouts.get(o);n&&(clearTimeout(n),this._pendingTapTimeouts.delete(o)),a?.double_tap_action&&this.openDetails({stopPropagation:()=>e.stopPropagation(),target:o},a,i,"double_tap")}onEntityPointerDown(e,t,i){const o=e.currentTarget,a=this._normalizeActionConfig(t);if(!o||!a?.hold_action)return;const n=this._holdTimeouts.get(o);n&&clearTimeout(n),this._holdTriggered.set(o,!1);const r=setTimeout(()=>{this._holdTriggered.set(o,!0),this.openDetails({stopPropagation:()=>e.stopPropagation(),target:o},a,i,"hold"),this._holdTimeouts.delete(o)},this._holdDelay);this._holdTimeouts.set(o,r)}onEntityPointerUp(e){const t=e.currentTarget;if(!t)return;const i=this._holdTimeouts.get(t);i&&(clearTimeout(i),this._holdTimeouts.delete(t))}_renderExtraIndividual(e,t,i){const o=(e=>{const t=["left-top","left-bottom","right-top","right-bottom"];return e<t.length?t[e]:`ind-${e}`})(i),a=!1===this._config.clickable_entities;return ae`
      <div class="circle-container extra-individual" style="--extra-ind-color: var(--individual-${o}-color); --extra-ind-icon-color: var(--icon-individual-${o}-color); --extra-ind-text-color: var(--text-individual-${o}-color); --extra-ind-secondary-color: var(--secondary-text-individual-${o}-color);">
        <span class="label">${e.name}</span>
        <div
          class="circle ${a?"pointer-events-none":""}"
          @click=${t=>{this.onEntityClick(t,e?.field,e?.entity)}}
          @dblclick=${t=>{this.onEntityDoubleClick(t,e?.field,e?.entity)}}
          @pointerdown=${t=>{this.onEntityPointerDown(t,e?.field,e?.entity)}}
          @pointerup=${e=>{this.onEntityPointerUp(e)}}
          @pointercancel=${e=>{this.onEntityPointerUp(e)}}
          @keyDown=${t=>{"Enter"===t.key&&this.openDetails(t,e?.field,e?.entity,"tap")}}
        >
          <ha-ripple .disabled=${a}></ha-ripple>
          ${" "!==e.icon?ae`<ha-icon .icon=${e.icon}></ha-icon>`:se}
          ${!1!==e?.field?.display_zero_state||(e.state||0)>(e.displayZeroTolerance??0)?ae`<span>
                ${e?.showDirection?ae`<ha-icon
                      class="small"
                      .icon=${e.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                    ></ha-icon>`:se}${t}
              </span>`:se}
        </div>
      </div>
    `}render(){if(!this._config||!this.hass)return se;const e=this._renderData??this._computeRenderData(),{entities:t,grid:i,solar:o,battery:a,home:n,nonFossil:r,individualObjs:s,newDur:l,templatesObj:c,homeBatteryCircumference:d,homeGridCircumference:u,homeNonFossilCircumference:h,homeSolarCircumference:m,homeUsageToDisplay:f,individualFieldLeftTop:g,individualFieldLeftBottom:y,individualFieldRightTop:v,individualFieldRightBottom:b,individualFieldFarRightTop:w,individualFieldFarRightBottom:k,extraIndividuals:x}=e,S=e=>e?void 0===e?.state?"":_(this.hass,this._config,e?.state,{decimals:e?.decimals,unit:e?.unit,unitWhiteSpace:e?.unit_white_space}):"";return ae`
      <ha-card
        .header=${this._config.title}
        class=${this._config.full_size?"full-size":""}
        style=${this._config.style_ha_card?this._config.style_ha_card:""}
      >
        <div
          class="card-content ${this._config.full_size?"full-size":""} ${this._config.no_labels?"no-labels":""}"
          id="power-flow-card-plus"
          style=${this._config.style_card_content?this._config.style_card_content:""}
        >
          <div class="pf-layout">
            <div class="pf-main">
              ${o.has||s?.some(e=>e?.has)||r.hasPercentage?ae`<div class="row">
                    ${((e,t,{nonFossil:i,entities:o,templatesObj:a,grid:n,newDur:r,fossilEnergyConsumption:s})=>{const l=!1===t.clickable_entities;return i.hasPercentage?ae`<div class="circle-container low-carbon">
    <span class="label">${i.name}</span>
    <div
      class="circle ${l?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o.fossil_fuel_percentage,o.fossil_fuel_percentage?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o.fossil_fuel_percentage,o.fossil_fuel_percentage?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o.fossil_fuel_percentage,o.fossil_fuel_percentage?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o.fossil_fuel_percentage,o.fossil_fuel_percentage?.entity,"tap")}}
    >
      <ha-ripple .disabled=${l}></ha-ripple>
      ${We(e.hass,e,t,a,i,"nonFossilFuel")}
      ${" "!==i.icon?ae` <ha-icon id="low-carbon-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==o.fossil_fuel_percentage?.display_zero_state||(i.state.power||0)>(o.fossil_fuel_percentage?.display_zero_tolerance||0)?ae`
            <span class="low-carbon"
              >${nt(e.hass,t,o.fossil_fuel_percentage.entity,n.state.fromGrid,s)}</span
            >
          `:se}
    </div>
    ${Me(t,i.state.power||0)?ae`
          <svg width="80" height="30">
            <path
              d="M40 -10 v40"
              class="low-carbon ${Te(i.state.power||0,t)}"
              id="low-carbon"
            />
            ${Ee(t)&&i.has&&i.state.power>0?ne`<circle r="1.75" class="low-carbon" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(o.fossil_fuel_percentage?.calculate_flow_rate,r.nonFossil)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                    >
                      <mpath xlink:href="#low-carbon" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`:Xe})(this,this._config,{entities:t,grid:i,newDur:l,nonFossil:r,templatesObj:c})}
                    ${o.has?((e,t,{entities:i,solar:o,templatesObj:a})=>{const n=!1===t.clickable_entities,r=a.solarSecondary,s=i.solar?.secondary_info?.sum_total,l=t.entities.solar?.secondary_info?.entity,c=l?Math.max(ot(e.hass,l),0):0,d=s?o.state.total-c:o.state.total;return ae`<div class="circle-container solar">
    <span class="label">${o.name}</span>
    <div
      class="circle ${n?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o,o.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o,o.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o,o.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o,o.entity,"tap")}}
    >
      <ha-ripple .disabled=${n}></ha-ripple>
      ${(()=>{if(r)return!0;if(!0===t.entities.solar?.secondary_info?.display_zero)return!0;if(!o?.secondary?.state)return!1;if(!p(o?.secondary?.state))return!0;const e=t.entities.solar?.secondary_info?.display_zero_tolerance??0;return Number(o.secondary.state)>=e||t.entities.solar?.secondary_info?.accept_negative&&"number"==typeof Number(+o.secondary.state)})()?We(e.hass,e,t,a,o,"solar"):se}
      ${" "!==o.icon?ae` <ha-icon id="solar-icon" .icon=${o.icon}></ha-icon>`:se}
      ${!1!==i.solar?.display_zero_state||(d||0)>0?ae` <span class="solar">
            ${_(e.hass,t,d,{unit:o.state.unit,unitWhiteSpace:o.state.unit_white_space,decimals:o.state.decimals})}
          </span>`:se}
    </div>
  </div>`})(this,this._config,{entities:t,solar:o,templatesObj:c}):s?.some(e=>e?.has)?Xe:se}
                    ${g?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n})=>{if(!i)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===i.entity)||0,l=n.individual[s]||0;return ae`<div class="circle-container individual-top">
    <span class="label">${i.name}</span>
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,o,i,s,"left-top")}
      ${" "!==i.icon?ae` <ha-icon id="individual-left-top-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-top individual-left-top">
            ${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    ${Me(t,i.state||0)&&!t.entities.home?.hide?ae`
          <svg width="80" height="30">
            <path
              d="M40 -10 v50"
              id="individual-top"
              class="${Te(i.state||0,t)}"
            />
            ${Ee(t)&&i.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1.75" class="individual-top" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(i?.field?.calculate_flow_rate,l)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-top" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`})(this,this._config,{individualObj:g,displayState:S(g),newDur:l,templatesObj:c}):Xe}
                    ${Ae(s)?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n,battery:r,individualObjs:s})=>{if(!i)return Xe;const l=!1===t.clickable_entities,c=t?.entities?.individual?.findIndex(e=>e.entity===i.entity);if(-1===c||void 0===c)return Xe;const d=n.individual[c]||1.66,u=!!r?.has||Pe(s);return ae`<div class="circle-container individual-top individual-right individual-right-top">
    <span class="label">${i.name}</span>
    <div
      class="circle ${l?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${l}></ha-ripple>
      ${qe(e.hass,e,t,o,i,c,"right-top")}
      ${" "!==i.icon?ae` <ha-icon id="individual-right-top-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-top individual-right-top">
            ${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    ${Me(t,i.state||0)&&!t.entities.home?.hide?ae`
          <div class="right-individual-flow-container">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              class="right-individual-flow"
            >
              <path
                id="individual-top-right-home"
                class="${Te(i.state||0,t)}"
                d="M${u?45:47},0 v15 c0,${u?"30 -10,30 -30,30":"35 -10,35 -30,35"} h-20"
                vector-effect="non-scaling-stroke"
              />
              ${Ee(t)&&i.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1" class="individual-top" vector-effect="non-scaling-stroke">
                      <animateMotion
                        dur="${Ye(i?.field?.calculate_flow_rate,d)}s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                        keyTimes="0;1"
                      >
                        <mpath xlink:href="#individual-top-right-home" />
                      </animateMotion>
                    </circle>`:se}
            </svg>
          </div>
        `:se}
  </div>`})(this,this._config,{displayState:S(v),individualObj:v,newDur:l,templatesObj:c,battery:a,individualObjs:s}):se}
                  </div>`:se}
              <div class="row">
                ${i.has?((e,t,{entities:i,grid:o,templatesObj:a})=>{const n=!1===t.clickable_entities;return ae`<div class="circle-container grid">
    <div
      class="circle ${n?"pointer-events-none":""}"
      @click=${t=>{const a=o.powerOutage?.entityGenerator??i.grid?.power_outage?.entity,n=o.powerOutage?.isOutage&&a?a:"string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityClick(t,o,n)}}
      @dblclick=${t=>{const a=o.powerOutage?.entityGenerator??i.grid?.power_outage?.entity,n=o.powerOutage?.isOutage&&a?a:"string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityDoubleClick(t,o,n)}}
      @pointerdown=${t=>{const a=o.powerOutage?.entityGenerator??i.grid?.power_outage?.entity,n=o.powerOutage?.isOutage&&a?a:"string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityPointerDown(t,i.grid,n)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{if("Enter"===t.key){const a=o.powerOutage?.entityGenerator??i.grid?.power_outage?.entity,n=o.powerOutage?.isOutage&&a?a:"string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.openDetails(t,i.grid,n,"tap")}}}
    >
      <ha-ripple .disabled=${n}></ha-ripple>
      ${We(e.hass,e,t,a,o,"grid")}
      ${" "!==o.icon?ae` <ha-icon id="grid-icon" .icon=${o.icon}></ha-icon>`:se}
      ${("two_way"===i.grid?.display_state||void 0===i.grid?.display_state||"one_way_no_zero"===i.grid?.display_state&&(o.state.toGrid??0)>0||"one_way"===i.grid?.display_state&&(null===o.state.fromGrid||0===o.state.fromGrid)&&0!==o.state.toGrid)&&null!==o.state.toGrid&&!o.powerOutage.isOutage?ae`<span
            class="return"
            @click=${t=>{const a="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.production;e.onEntityClick(t,o,a)}}
            @dblclick=${t=>{const a="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.production;e.onEntityDoubleClick(t,o,a)}}
            @pointerdown=${t=>{const o="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.production;e.onEntityPointerDown(t,i.grid,o)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const o="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.production;e.openDetails(t,i.grid,o,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-left"}></ha-icon>

            ${_(e.hass,t,o.state.toGrid,{unit:o.unit,unitWhiteSpace:o.unit_white_space,decimals:o.decimals})}
          </span>`:se}
      ${("two_way"===i.grid?.display_state||void 0===i.grid?.display_state||"one_way_no_zero"===i.grid?.display_state&&o.state.fromGrid>0||"one_way"===i.grid?.display_state&&(null===o.state.toGrid||0===o.state.toGrid))&&null!==o.state.fromGrid&&!o.powerOutage.isOutage||o.powerOutage.isOutage&&o.powerOutage.entityGenerator?ae` <span
            class="consumption"
            @click=${t=>{const a="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityClick(t,o,a)}}
            @dblclick=${t=>{const a="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityDoubleClick(t,o,a)}}
            @pointerdown=${t=>{const o="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.onEntityPointerDown(t,i.grid,o)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const o="string"==typeof i.grid.entity?i.grid.entity:i.grid.entity.consumption;e.openDetails(t,i.grid,o,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-right"}></ha-icon>
            ${_(e.hass,t,o.state.fromGrid,{unit:o.unit,unitWhiteSpace:o.unit_white_space,decimals:o.decimals})}
          </span>`:se}
      ${o.powerOutage?.isOutage&&!o.powerOutage?.entityGenerator?ae`<span class="grid power-outage">${o.powerOutage.name}</span>`:se}
    </div>
    <span class="label">${o.name}</span>
  </div>`})(this,this._config,{entities:t,grid:i,templatesObj:c}):Xe}
                ${Xe}
                ${t.home?.hide?Xe:((e,t,{home:i,entities:o,templatesObj:a,homeUsageToDisplay:n,homeSolarCircumference:r,CIRCLE_CIRCUMFERENCE:s,homeBatteryCircumference:l,homeNonFossilCircumference:c,homeGridCircumference:d,individual:u})=>{const p=u.filter(e=>e.has).length<=1,h=void 0!==o.home?.entity,_=["none",void 0],m=!_.includes(o.home?.tap_action?.action)||!_.includes(o.home?.hold_action?.action)||!_.includes(o.home?.double_tap_action?.action),f=h||m,g=!1===t.clickable_entities||!f;return ae`
    <div class="circle-container home">
      <div
        class="circle ${g?"pointer-events-none":""}"
        id="home-circle"
        @click=${t=>{e.onEntityClick(t,o.home,o.home?.entity)}}
        @dblclick=${t=>{e.onEntityDoubleClick(t,o.home,o.home?.entity)}}
        @pointerdown=${t=>{e.onEntityPointerDown(t,o.home,o.home?.entity)}}
        @pointerup=${t=>{e.onEntityPointerUp(t)}}
        @pointercancel=${t=>{e.onEntityPointerUp(t)}}
        @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o.home,o.home?.entity,"tap")}}
      >
        <ha-ripple .disabled=${g}></ha-ripple>
        ${We(e.hass,e,t,a,i,"home")}
        ${" "!==i.icon?ae`<ha-icon id="home-icon" .icon=${i.icon}></ha-icon>`:se}
        ${n}
        <svg class="home-circle-sections">
          ${void 0!==r?ne`<circle
                  class="solar"
                  cx="40"
                  cy="40"
                  r="38"
                  stroke-dasharray="${r} ${s-r}"
                  shape-rendering="geometricPrecision"
                  stroke-dashoffset="-${s-r}"
                />`:se}
          ${l?ne`<circle
                  class="battery"
                  cx="40"
                  cy="40"
                  r="38"
                  stroke-dasharray="${l} ${s-l}"
                  stroke-dashoffset="-${s-l-(r||0)}"
                  shape-rendering="geometricPrecision"
                />`:se}
          ${void 0!==c?ne`<circle
                  class="low-carbon"
                  cx="40"
                  cy="40"
                  r="38"
                  stroke-dasharray="${c} ${s-c}"
                  stroke-dashoffset="-${s-c-(l||0)-(r||0)}"
                  shape-rendering="geometricPrecision"
                />`:se}
          <circle
            class="grid"
            cx="40"
            cy="40"
            r="38"
            stroke-dasharray="${d??s-r-(l||0)} ${void 0!==d?s-d:r+(l||0)}"
            stroke-dashoffset="0"
            shape-rendering="geometricPrecision"
          />
        </svg>
      </div>
      ${p?ae`<span class="label">${i.name}</span>`:ae`<span class="label"></span>`}
    </div>
  `})(this,this._config,{CIRCLE_CIRCUMFERENCE:rt,entities:t,home:n,homeBatteryCircumference:d,homeGridCircumference:u,homeNonFossilCircumference:h,homeSolarCircumference:m,templatesObj:c,homeUsageToDisplay:f,individual:s})}
                ${Ae(s)?Xe:se}
              </div>
              ${a.has||Pe(s)?ae`<div class="row">
                    ${Xe}
                    ${a.has?((e,t,{battery:i,entities:o})=>{const a=!1===t.clickable_entities;return ae`<div class="circle-container battery">
    <div
      class="circle ${a?"pointer-events-none":""}"
      @click=${t=>{const a=o.battery?.state_of_charge?o.battery?.state_of_charge:"string"==typeof o.battery?.entity?o.battery?.entity:o.battery?.entity.production;e.onEntityClick(t,i,a)}}
      @dblclick=${t=>{const a=o.battery?.state_of_charge?o.battery?.state_of_charge:"string"==typeof o.battery?.entity?o.battery?.entity:o.battery?.entity.production;e.onEntityDoubleClick(t,i,a)}}
      @pointerdown=${t=>{const a=o.battery?.state_of_charge?o.battery?.state_of_charge:"string"==typeof o.battery?.entity?o.battery?.entity:o.battery?.entity.production;e.onEntityPointerDown(t,i,a)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{if("Enter"===t.key){const a=o.battery?.state_of_charge?o.battery?.state_of_charge:"string"==typeof o.battery?.entity?o.battery.entity:o.battery?.entity.production;e.openDetails(t,i,a,"tap")}}}
    >
      <ha-ripple .disabled=${a}></ha-ripple>
      ${null!==i.state_of_charge.state&&!1!==o.battery?.show_state_of_charge?ae` <span
            @click=${t=>{e.onEntityClick(t,i,o.battery?.state_of_charge)}}
            @dblclick=${t=>{e.onEntityDoubleClick(t,i,o.battery?.state_of_charge)}}
            @pointerdown=${t=>{e.onEntityPointerDown(t,i,o.battery?.state_of_charge)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i,o.battery?.state_of_charge,"tap")}}
            id="battery-state-of-charge-text"
          >
            ${_(e.hass,t,i.state_of_charge.state,{unit:i.state_of_charge.unit??"%",unitWhiteSpace:i.state_of_charge.unit_white_space,decimals:i.state_of_charge.decimals,accept_negative:!0})}
          </span>`:se}
      ${" "!==i.icon?ae` <ha-icon
            id="battery-icon"
            .icon=${i.icon}
            @click=${t=>{e.onEntityClick(t,i,o.battery?.state_of_charge)}}
            @dblclick=${t=>{e.onEntityDoubleClick(t,i,o.battery?.state_of_charge)}}
            @pointerdown=${t=>{e.onEntityPointerDown(t,i,o.battery?.state_of_charge)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i,o.battery?.state_of_charge,"tap")}}
          ></ha-icon>`:se}
      ${"two_way"===o.battery?.display_state||void 0===o.battery?.display_state||"one_way_no_zero"===o.battery?.display_state&&i.state.toBattery>0||"one_way"===o.battery?.display_state&&0!==i.state.toBattery?ae`<span
            class="battery-in"
            @click=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.production;e.onEntityClick(t,o.battery,i)}}
            @dblclick=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.production;e.onEntityDoubleClick(t,o.battery,i)}}
            @pointerdown=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.production;e.onEntityPointerDown(t,o.battery,i)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.production;e.openDetails(t,o.battery,i,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-down"}></ha-icon>
            ${_(e.hass,t,i.state.toBattery,{unit:i.unit,unitWhiteSpace:i.unit_white_space,decimals:i.decimals})}</span
          >`:se}
      ${"two_way"===o.battery?.display_state||void 0===o.battery?.display_state||"one_way_no_zero"===o.battery?.display_state&&i.state.fromBattery>0||"one_way"===o.battery?.display_state&&(0===i.state.toBattery||0!==i.state.fromBattery)?ae`<span
            class="battery-out"
            @click=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.consumption;e.onEntityClick(t,o.battery,i)}}
            @dblclick=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.consumption;e.onEntityDoubleClick(t,o.battery,i)}}
            @pointerdown=${t=>{const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.consumption;e.onEntityPointerDown(t,o.battery,i)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof o.battery.entity?o.battery.entity:o.battery.entity.consumption;e.openDetails(t,o.battery,i,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-up"}></ha-icon>
            ${_(e.hass,t,i.state.fromBattery,{unit:i.unit,unitWhiteSpace:i.unit_white_space,decimals:i.decimals})}</span
          >`:se}
    </div>
    <span class="label">${i.name}</span>
  </div>`})(this,this._config,{battery:a,entities:t}):Xe}
                    ${y?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n})=>{if(!i)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===i.entity)||0,l=n.individual[s]||0;return ae`<div class="circle-container individual-bottom bottom">
    ${Me(t,i?.state||0)&&!t.entities.home?.hide?ae`
          <svg width="80" height="30">
            <path
              d="M40 40 v-40"
              id="individual-bottom"
              class="${Te(i?.state||0,t)}"
            />
            ${Ee(t)&&i?.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1.75" class="individual-bottom" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(!1!==i.field?.calculate_flow_rate,l)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-bottom" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:ae` <svg width="80" height="30"></svg> `}
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,o,i,s,"left-bottom")}
      ${" "!==i?.icon?ae` <ha-icon id="individual-left-bottom-icon" .icon=${i?.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i?.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-bottom individual-left-bottom"
            >${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i?.invertAnimation?"mdi:arrow-up":"mdi:arrow-down"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    <span class="label">${i?.name}</span>
  </div> `})(this,this._config,{displayState:S(y),individualObj:y,newDur:l,templatesObj:c}):Xe}
                    ${Ae(s)?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n})=>{if(!i)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===i.entity);if(-1===s||void 0===s)return Xe;const l=n.individual[s]||1.66;return ae`<div
    class="circle-container individual-bottom individual-right individual-right-bottom"
  >
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,o,i,s,"right-bottom")}
      ${" "!==i.icon?ae` <ha-icon id="individual-right-bottom-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-bottom individual-right-bottom">
            ${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    <span class="label">${i.name}</span>
    ${Me(t,i.state||0)&&!t.entities.home?.hide?ae`
          <div class="right-individual-flow-container">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              class="right-individual-flow"
            >
              <path
                id="individual-bottom-right-home"
                class="${Te(i.state||0,t)}"
                d="M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20"
                vector-effect="non-scaling-stroke"
              />
              ${Ee(t)&&i.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1" class="individual-bottom" vector-effect="non-scaling-stroke">
                      <animateMotion
                        dur="${Ye(i?.field?.calculate_flow_rate,l)}s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                        keyTimes="0;1"
                      >
                        <mpath xlink:href="#individual-bottom-right-home" />
                      </animateMotion>
                    </circle>`:se}
            </svg>
          </div>
        `:se}
  </div>`})(this,this._config,{displayState:S(b),individualObj:b,newDur:l,templatesObj:c}):se}
                  </div>`:Xe}
              ${((e,{battery:t,grid:i,individual:o,solar:a,newDur:n})=>ae`
  ${He(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})}
  ${Fe(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})}
  ${Ue(e,{battery:t,individual:o,solar:a,newDur:n})}
  ${Re(e,{battery:t,grid:i,individual:o,solar:a,newDur:n})}
  ${Le(e,{battery:t,grid:i,individual:o,newDur:n})}
  ${Be(e,{battery:t,grid:i,individual:o,newDur:n})}
  `)(this._config,{battery:a,grid:i,individual:s,newDur:l,solar:o})}
            </div>
            ${w||k?ae`<div class="pf-far-right">
                  <div class="pf-far-right-top">
                    ${w?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n,battery:r,individualObjs:s})=>{if(!i)return Xe;const l=!1===t.clickable_entities,c=t?.entities?.individual?.findIndex(e=>e.entity===i.entity);if(-1===c||void 0===c)return Xe;const d=n.individual[c]||1.66;return r?.has||Pe(s),ae`<div class="circle-container individual-top individual-right individual-right-top">
    <span class="label">${i.name}</span>
    <div
      class="circle ${l?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${l}></ha-ripple>
      ${qe(e.hass,e,t,o,i,c,"far-right-top")}
      ${" "!==i.icon?ae` <ha-icon id="individual-far-right-top-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-top individual-far-right-top">
            ${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    ${Me(t,i.state||0)&&!t.entities.home?.hide?ae`
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            class="far-right-individual-flow-line"
          >
            <path
              id="individual-top-far-right-home"
              class="individual-top ${Te(i.state||0,t)}"
              d="M100,5 H0"
              vector-effect="non-scaling-stroke"
            />
            ${Ee(t)&&i.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1" class="individual-top" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(i?.field?.calculate_flow_rate,d)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-top-far-right-home" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`})(this,this._config,{displayState:S(w),individualObj:w,newDur:l,templatesObj:c,battery:a,individualObjs:s}):se}
                  </div>
                  <div class="pf-far-right-mid"></div>
                  <div class="pf-far-right-bottom">
                    ${k?((e,t,{individualObj:i,templatesObj:o,displayState:a,newDur:n})=>{if(!i)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===i.entity);if(-1===s||void 0===s)return Xe;const l=n.individual[s]||1.66;return ae`<div
    class="circle-container individual-bottom individual-right individual-right-bottom"
  >
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i?.field,i?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i?.field,i?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i?.field,i?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i?.field,i?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,o,i,s,"far-right-bottom")}
      ${" "!==i.icon?ae` <ha-icon id="individual-far-right-bottom-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==i?.field?.display_zero_state||(i.state||0)>(i.displayZeroTolerance??0)?ae` <span class="individual-bottom individual-far-right-bottom">
            ${i?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${i.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    <span class="label">${i.name}</span>
    ${Me(t,i.state||0)&&!t.entities.home?.hide?ae`
          <svg
            viewBox="0 0 100 10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            class="far-right-individual-flow-line"
          >
            <path
              id="individual-bottom-far-right-home"
              class="individual-bottom ${Te(i.state||0,t)}"
              d="M100,5 H0"
              vector-effect="non-scaling-stroke"
            />
            ${Ee(t)&&i.state&&i.state>=(i.displayZeroTolerance??0)?ne`<circle r="1" class="individual-bottom" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(i?.field?.calculate_flow_rate,l)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${i.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-bottom-far-right-home" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`})(this,this._config,{displayState:S(k),individualObj:k,newDur:l,templatesObj:c}):se}
                  </div>
                </div>`:se}
          </div>
          ${x.length>0?ae`<div class="extra-individuals-section">
                <div class="extra-individuals-grid">
                  ${x.map((e,t)=>this._renderExtraIndividual(e,S(e),t+6))}
                </div>
              </div>`:se}
        </div>
        ${E=this._config,$=this.hass,E.dashboard_link||E.second_dashboard_link?ae`
    <div class="card-actions">
      ${E.dashboard_link?ae`
            <ha-button appearance="plain" size="small" href=${E.dashboard_link}>
              ${E.dashboard_link_label||$.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
            </ha-button>
          `:se}
      ${E.second_dashboard_link?ae`
            <ha-button appearance="plain" size="small" href=${E.second_dashboard_link}>
              ${E.second_dashboard_link_label||$.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
            </ha-button>
          `:se}
    </div>
  `:se}
      </ha-card>
    `;var E,$}updated(e){if(super.updated(e),!this._config||!this.hass)return;const t=this.shadowRoot?.querySelector("#power-flow-card-plus");if(t){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{const t=e[0];if(!t)return;const i=Math.round(t.contentRect.width);i!==this._width&&(this._width=i)})),this._resizeObserver.observe(t);const e=Math.round(t.getBoundingClientRect().width);e!==this._width&&(this._width=e)}this._tryConnectAll()}willUpdate(e){super.willUpdate(e),this._config&&this.hass&&(e.has("hass")||e.has("_config")||e.has("_templateResults")||e.has("_width")||void 0===this._renderData)&&(this.style.setProperty("--clickable-cursor",!1!==this._config.clickable_entities?"pointer":"default"),this._renderData=this._computeRenderData())}_generateIndividualKeys(){const e=[],t=["left-top","left-bottom","right-top","right-bottom"];for(let i=0;i<t.length;i++)e.push(t[i]);for(let t=4;t<10;t++)e.push(`ind-${t}`);return e}_computeRenderData(){const{entities:e}=this._config,t=null,i={entity:e.grid?.entity,has:void 0!==e?.grid?.entity,hasReturnToGrid:"string"==typeof e.grid?.entity||!!e.grid?.entity?.production,state:{fromGrid:zi(this.hass,this._config),toGrid:(o=this.hass,a=this._config,Di(o,a,"grid")),toBattery:t,toHome:t},powerOutage:{has:void 0!==e.grid?.power_outage?.entity,isOutage:(e.grid&&this.hass.states[e.grid.power_outage?.entity]?.state)===(e.grid?.power_outage?.state_alert??"on"),icon:e.grid?.power_outage?.icon_alert||"mdi:transmission-tower-off",name:e.grid?.power_outage?.label_alert??ae`Power<br />Outage`,entityGenerator:e.grid?.power_outage?.entity_generator},icon:ji(this.hass,e.grid,"mdi:transmission-tower"),name:Bi(this.hass,e.grid,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")),mainEntity:"object"==typeof e.grid?.entity?e.grid.entity.consumption||e.grid.entity.production:e.grid?.entity,color:{fromGrid:e.grid?.color?.consumption,toGrid:e.grid?.color?.production,icon_type:e.grid?.color_icon,circle_type:e.grid?.color_circle},tap_action:e.grid?.tap_action,hold_action:e.grid?.hold_action,double_tap_action:e.grid?.double_tap_action,secondary:{entity:e.grid?.secondary_info?.entity,decimals:e.grid?.secondary_info?.decimals,template:e.grid?.secondary_info?.template,has:void 0!==e.grid?.secondary_info?.entity,state:Oi(this.hass,this._config),icon:e.grid?.secondary_info?.icon,unit:e.grid?.secondary_info?.unit_of_measurement,unit_white_space:e.grid?.secondary_info?.unit_white_space,accept_negative:e.grid?.secondary_info?.accept_negative||!1,color:{type:e.grid?.secondary_info?.color_value},tap_action:e.grid?.secondary_info?.tap_action,hold_action:e.grid?.secondary_info?.hold_action,double_tap_action:e.grid?.secondary_info?.double_tap_action}};var o,a;const n=void 0!==e.solar?.entity,r=(qi(this.hass,this._config)??0)>0,s=!1!==e.solar?.display_zero||r,l={entity:e.solar?.entity,has:n&&s,state:{total:qi(this.hass,this._config),toHome:t,toGrid:t,toBattery:t},icon:ji(this.hass,e.solar,"mdi:solar-power"),name:Bi(this.hass,e.solar,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")),tap_action:e.solar?.tap_action,hold_action:e.solar?.hold_action,double_tap_action:e.solar?.double_tap_action,secondary:{entity:e.solar?.secondary_info?.entity,decimals:e.solar?.secondary_info?.decimals,template:e.solar?.secondary_info?.template,has:void 0!==e.solar?.secondary_info?.entity,accept_negative:e.solar?.secondary_info?.accept_negative||!1,state:Ki(this.hass,this._config),icon:e.solar?.secondary_info?.icon,unit:e.solar?.secondary_info?.unit_of_measurement,unit_white_space:e.solar?.secondary_info?.unit_white_space,tap_action:e.solar?.secondary_info?.tap_action,hold_action:e.solar?.secondary_info?.hold_action,double_tap_action:e.solar?.secondary_info?.double_tap_action}},c={entity:e.battery?.entity,has:!!e.battery?.entity&&("object"==typeof e.battery?.entity?e.battery?.entity.consumption||e.battery?.entity.production:void 0!==e.battery?.entity),mainEntity:"object"==typeof e.battery?.entity?e.battery.entity.consumption:e.battery?.entity,name:Bi(this.hass,e.battery,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")),icon:ji(this.hass,e.battery,"mdi:battery-high"),state_of_charge:{state:Pi(this.hass,this._config),unit:e?.battery?.state_of_charge_unit??"%",unit_white_space:e?.battery?.state_of_charge_unit_white_space??!0,decimals:e?.battery?.state_of_charge_decimals||0},state:{toBattery:Mi(this.hass,this._config),fromBattery:Ti(this.hass,this._config),toGrid:0,toHome:0},tap_action:e.battery?.tap_action,hold_action:e.battery?.hold_action,double_tap_action:e.battery?.double_tap_action,color:{fromBattery:e.battery?.color?.consumption,toBattery:e.battery?.color?.production,icon_type:void 0,circle_type:e.battery?.color_circle}},d={entity:e.home?.entity,has:void 0!==e?.home?.entity,state:t,icon:ji(this.hass,e?.home,"mdi:home"),name:Bi(this.hass,e?.home,xi("editor.home")),tap_action:e.home?.tap_action,hold_action:e.home?.hold_action,double_tap_action:e.home?.double_tap_action,secondary:{entity:e.home?.secondary_info?.entity,template:e.home?.secondary_info?.template,has:void 0!==e.home?.secondary_info?.entity,state:Ni(this.hass,this._config),accept_negative:e.home?.secondary_info?.accept_negative||!1,unit:e.home?.secondary_info?.unit_of_measurement,unit_white_space:e.home?.secondary_info?.unit_white_space,icon:e.home?.secondary_info?.icon,decimals:e.home?.secondary_info?.decimals,tap_action:e.home?.secondary_info?.tap_action,hold_action:e.home?.secondary_info?.hold_action,double_tap_action:e.home?.secondary_info?.double_tap_action}},u=e.individual?.map(e=>Wi({hass:this.hass,config:this._config,field:e}))||[],p={entity:e.fossil_fuel_percentage?.entity,name:Bi(this.hass,e.fossil_fuel_percentage,this.hass.localize("card.label.non_fossil_fuel_percentage")),icon:ji(this.hass,e.fossil_fuel_percentage,"mdi:leaf"),has:Zi(this.hass,this._config),hasPercentage:Yi(this.hass,this._config),state:{power:t},color:e.fossil_fuel_percentage?.color,color_value:e.fossil_fuel_percentage?.color_value,tap_action:e.fossil_fuel_percentage?.tap_action,hold_action:e.fossil_fuel_percentage?.hold_action,double_tap_action:e.fossil_fuel_percentage?.double_tap_action,secondary:{entity:e.fossil_fuel_percentage?.secondary_info?.entity,decimals:e.fossil_fuel_percentage?.secondary_info?.decimals,template:e.fossil_fuel_percentage?.secondary_info?.template,has:void 0!==e.fossil_fuel_percentage?.secondary_info?.entity,state:Xi(this.hass,this._config),accept_negative:e.fossil_fuel_percentage?.secondary_info?.accept_negative||!1,icon:e.fossil_fuel_percentage?.secondary_info?.icon,unit:e.fossil_fuel_percentage?.secondary_info?.unit_of_measurement,unit_white_space:e.fossil_fuel_percentage?.secondary_info?.unit_white_space,color_value:e.fossil_fuel_percentage?.secondary_info?.color_value,tap_action:e.fossil_fuel_percentage?.secondary_info?.tap_action,hold_action:e.fossil_fuel_percentage?.secondary_info?.hold_action,double_tap_action:e.fossil_fuel_percentage?.secondary_info?.double_tap_action}};i.state.fromGrid=Gi(i.state.fromGrid,e.grid?.display_zero_tolerance),i.state.toGrid=Gi(i.state.toGrid,e.grid?.display_zero_tolerance);const h=0!==(i.state.fromGrid??0)||0!==(i.state.toGrid??0);!1!==e.grid?.display_zero||h||(i.has=!1),l.state.total=Gi(l.state.total,e.solar?.display_zero_tolerance),c.state.fromBattery=Gi(c.state.fromBattery,e.battery?.display_zero_tolerance),c.state.toBattery=Gi(c.state.toBattery,e.battery?.display_zero_tolerance);const m=0!==(c.state.fromBattery??0)||0!==(c.state.toBattery??0);!1!==e.battery?.display_zero||m||(c.has=!1),0===i.state.fromGrid&&(i.state.toHome=0,i.state.toBattery=0),0===l.state.total&&(l.state.toGrid=0,l.state.toBattery=0,l.state.toHome=0),0===c.state.fromBattery&&(c.state.toGrid=0,c.state.toHome=0),function(e){const{entities:t,grid:i,solar:o,battery:a,nonFossil:n,getEntityStateWatts:r,getEntityState:s}=e;o.has&&(o.state.toHome=(o.state.total??0)-(i.state.toGrid??0)-(a.state.toBattery??0));const l=Math.max(t.grid?.display_zero_tolerance??0,t.battery?.display_zero_tolerance??0);if(null!==o.state.toHome&&o.state.toHome<0?(a.has&&(i.state.toBattery=Math.abs(o.state.toHome),i.state.toBattery>(i.state.fromGrid??0)&&(a.state.toGrid=Math.min(i.state.toBattery-(i.state.fromGrid??0),0),i.state.toBattery=i.state.fromGrid)),o.state.toHome=0):null!==a.state.toBattery&&a.state.toBattery>0?(o.state.toBattery=(o.state.total??0)-(o.state.toHome||0)-(i.state.toGrid||0),i.state.toBattery=(a.state.toBattery??0)-o.state.toBattery):i.state.toBattery=0,i.state.toBattery=(i.state.toBattery??0)>l?i.state.toBattery:0,a.has&&(o.has?(a.state.toGrid||(a.state.toGrid=Math.max(0,(i.state.toGrid||0)-(o.state.total||0)-(a.state.toBattery||0)-(i.state.toBattery||0))),o.state.toBattery=(a.state.toBattery??0)-(i.state.toBattery||0),t.solar?.display_zero_tolerance&&t.solar.display_zero_tolerance>=(o.state.total||0)&&(o.state.toBattery=0)):a.state.toGrid=i.state.toGrid||0,a.state.toGrid=(a.state.toGrid||0)>l&&a.state.toGrid||0,a.state.toHome=(a.state.fromBattery??0)-(a.state.toGrid??0)),i.state.toHome=Math.max((i.state.fromGrid??0)-(i.state.toBattery??0),0),o.has&&i.state.toGrid&&(o.state.toGrid=i.state.toGrid-(a.state.toGrid??0)),i.powerOutage.isOutage&&(i.state.fromGrid=i.powerOutage.entityGenerator?Math.max(r(i.powerOutage.entityGenerator),0):0,i.state.toHome=Math.max((i.state.fromGrid??0)-(i.state.toBattery??0),0),i.state.toGrid=0,a.state.toGrid=0,o.state.toGrid=0,i.icon=i.powerOutage.icon,n.has=!1,n.hasPercentage=!1),n.has){const e=1-(s(t.fossil_fuel_percentage?.entity)??0)/100;n.state.power=(i.state.toHome??0)*e}}({entities:{grid:e.grid,battery:e.battery,solar:e.solar,fossil_fuel_percentage:e.fossil_fuel_percentage},grid:i,solar:l,battery:c,nonFossil:p,getEntityStateWatts:e=>ot(this.hass,e),getEntityState:e=>tt(this.hass,e)}),i.has||(i.state.fromGrid=0,i.state.toGrid=0,i.state.toHome=0,i.state.toBattery=0,l.state.toGrid=0,c.state.toGrid=0,p.has=!1,p.hasPercentage=!1,p.state.power=0);const f=u?.reduce((e,t)=>e+(t.has&&t.state||0),0)||0,g=Math.max((i.state.toHome??0)+(l.state.toHome??0)+(c.state.toHome??0),0),y=c.state.toHome?rt*(c.state.toHome/g):0,v=l.state.toHome?rt*(l.state.toHome/g):0,b=p.state.power?rt*(p.state.power/g):0,w=rt*((g-(p.state.power??0)-(c.state.toHome??0)-(l.state.toHome??0))/g),k=e.home?.override_state&&e.home.entity?e.home?.subtract_individual?_(this.hass,this._config,ot(this.hass,e.home.entity)-f,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):_(this.hass,this._config,ot(this.hass,e.home.entity),{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):e.home?.subtract_individual?_(this.hass,this._config,g-f||0,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):_(this.hass,this._config,g,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}),x=(i.state.toHome??0)+(l.state.toHome??0)+(l.state.toGrid??0)+(l.state.toBattery??0)+(c.state.toHome??0)+(i.state.toBattery??0)+(c.state.toGrid??0);null===c.state_of_charge.state?c.icon="mdi:battery":c.state_of_charge.state<=72&&c.state_of_charge.state>44?c.icon="mdi:battery-medium":c.state_of_charge.state<=44&&c.state_of_charge.state>16?c.icon="mdi:battery-low":c.state_of_charge.state<=16&&(c.icon="mdi:battery-outline"),void 0!==e.battery?.icon&&(c.icon=e.battery?.icon);const S=e.battery?.use_metadata;if(S){const t=ji(this.hass,e.battery,"NO_ICON_METADATA");"NO_ICON_METADATA"!==t&&(c.icon=t)}const E={batteryGrid:Ze(this._config,Math.max(i.state.toBattery??0,c.state.toGrid??0,0),x),batteryToHome:Ze(this._config,c.state.toHome??0,x),gridToHome:Ze(this._config,i.state.toHome??0,x),solarToBattery:Ze(this._config,l.state.toBattery??0,x),solarToGrid:Ze(this._config,l.state.toGrid??0,x),solarToHome:Ze(this._config,l.state.toHome??0,x),individual:u?.map(e=>Ze(this._config,e.state??0,f))||[],nonFossil:Ze(this._config,p.state.power??0,x)};if(Ee(this._config)){["batteryGrid","batteryToHome","gridToHome","solarToBattery","solarToGrid","solarToHome"].forEach(e=>{const t=this[`${e}Flow`];t&&this.previousDur[e]&&this.previousDur[e]!==E[e]&&(t.pauseAnimations(),t.setCurrentTime(t.getCurrentTime()*(E[e]/this.previousDur[e])),t.unpauseAnimations()),this.previousDur[e]=E[e]})}else this.previousDur={};const $={battery:{value:y,color:"var(--energy-battery-out-color)"},solar:{value:v,color:"var(--energy-solar-color)"},grid:{value:w,color:"var(--energy-grid-consumption-color)"},gridNonFossil:{value:b,color:"var(--energy-non-fossil-color)"}},C=Object.keys($).reduce((e,t)=>$[e].value>$[t].value?e:t),D=this._generateIndividualKeys(),A={gridSecondary:this._templateResults.gridSecondary?.result,solarSecondary:this._templateResults.solarSecondary?.result,homeSecondary:this._templateResults.homeSecondary?.result,nonFossilFuelSecondary:this._templateResults.nonFossilFuelSecondary?.result,individual:u?.map((e,t)=>this._templateResults[`${D[t]}Secondary`]?.result)||[]},P=this._width>420,M=this._config.sort_individual_devices?(e=>e.map((e,t)=>({obj:e,index:t})).sort((e,t)=>{const i=(t.obj.state||0)-(e.obj.state||0);if(0!==i)return i;const o=e.obj.entity.localeCompare(t.obj.entity);return 0!==o?o:e.index-t.index}).map(({obj:e})=>e))(u):u,T=M.filter(e=>e.has).slice(0,10),z=Ce(T,0),O=Ce(T,1),N=Ce(T,2),I=Ce(T,3),j=Ce(T,4),B=Ce(T,5),L=T.length>6?T.slice(6):[];return oo(this,{grid:i,solar:l,battery:c,display_zero_lines_grey_color:"grey_out"===this._config.display_zero_lines?.mode?this._config.display_zero_lines?.grey_color:"",display_zero_lines_transparency:"transparency"===this._config.display_zero_lines?.mode?this._config.display_zero_lines?.transparency:void 0,entities:e,homeLargestSource:C,homeSources:$,individual:M,nonFossil:p,isCardWideEnough:P}),{entities:e,grid:i,solar:l,battery:c,home:d,nonFossil:p,individualObjs:T,newDur:E,templatesObj:A,homeBatteryCircumference:y,homeSolarCircumference:v,homeNonFossilCircumference:b,homeGridCircumference:w,homeUsageToDisplay:k,sortedIndividualObjects:T,individualFieldLeftTop:z,individualFieldLeftBottom:O,individualFieldRightTop:N,individualFieldRightBottom:I,individualFieldFarRightTop:j,individualFieldFarRightBottom:B,extraIndividuals:L}}_tryConnectAll(){const{entities:e}=this._config,t={gridSecondary:e.grid?.secondary_info?.template,solarSecondary:e.solar?.secondary_info?.template,homeSecondary:e.home?.secondary_info?.template,individualSecondary:e.individual?.map(e=>e.secondary_info?.template),nonFossilFuelSecondary:e.fossil_fuel_percentage?.secondary_info?.template};for(const[e,i]of Object.entries(t))if(i)if(Array.isArray(i)){const e=this._generateIndividualKeys();i.forEach((t,i)=>{t&&i<e.length&&this._tryConnect(t,`${e[i]}Secondary`)})}else this._tryConnect(i,e)}async _tryConnect(e,t){var i,o,a;if(this.hass&&this._config&&void 0===this._unsubRenderTemplates?.get(t)&&""!==e)try{const n=this._config.entity_id,r="string"==typeof n||Array.isArray(n)&&n.every(e=>"string"==typeof e)?n:void 0,s=(i=this.hass.connection,o=e=>{this._templateResults[t]=e},a={template:e,entity_ids:r,variables:{config:this._config,user:this.hass.user.name},strict:!0},i.subscribeMessage(e=>o(e),{type:"render_template",...a}));this._unsubRenderTemplates?.set(t,s),await s}catch{this._templateResults={...this._templateResults,[t]:{result:e,listeners:{all:!1,domains:[],entities:[],time:!1}}},this._unsubRenderTemplates?.delete(t)}}async _tryDisconnectAll(){const{entities:e}=this._config,t={gridSecondary:e.grid?.secondary_info?.template,solarSecondary:e.solar?.secondary_info?.template,homeSecondary:e.home?.secondary_info?.template,individualSecondary:e.individual?.map(e=>e.secondary_info?.template)};for(const[e,i]of Object.entries(t))i&&this._tryDisconnect(e)}_tryDisconnect(e){const t=this._unsubRenderTemplates?.get(e);t&&(t.then(e=>e()),this._unsubRenderTemplates?.delete(e))}};po.styles=ao,e([lo({attribute:!1})],po.prototype,"hass",void 0),e([co()],po.prototype,"_config",void 0),e([co()],po.prototype,"_templateResults",void 0),e([co()],po.prototype,"_unsubRenderTemplates",void 0),e([co()],po.prototype,"_width",void 0),e([uo("#battery-grid-flow")],po.prototype,"batteryGridFlow",void 0),e([uo("#battery-home-flow")],po.prototype,"batteryToHomeFlow",void 0),e([uo("#grid-home-flow")],po.prototype,"gridToHomeFlow",void 0),e([uo("#solar-battery-flow")],po.prototype,"solarToBatteryFlow",void 0),e([uo("#solar-grid-flow")],po.prototype,"solarToGridFlow",void 0),e([uo("#solar-home-flow")],po.prototype,"solarToHomeFlow",void 0),po=e([no("power-flow-card-plus-extended")],po);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ho="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,_o=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},mo=`{{lit-${String(Math.random()).slice(2)}}}`,fo=`\x3c!--${mo}--\x3e`,go=new RegExp(`${mo}|${fo}`),yo="$lit$";class vo{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],a=document.createTreeWalker(t.content,133,null,!1);let n=0,r=-1,s=0;const{strings:l,values:{length:c}}=e;for(;s<c;){const e=a.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)bo(t[e].name,yo)&&o++;for(;o-- >0;){const t=l[s],i=xo.exec(t)[2],o=i.toLowerCase()+yo,a=e.getAttribute(o);e.removeAttribute(o);const n=a.split(go);this.parts.push({type:"attribute",index:r,name:i,strings:n}),s+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(mo)>=0){const o=e.parentNode,a=t.split(go),n=a.length-1;for(let t=0;t<n;t++){let i,n=a[t];if(""===n)i=ko();else{const e=xo.exec(n);null!==e&&bo(e[2],yo)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),i=document.createTextNode(n)}o.insertBefore(i,e),this.parts.push({type:"node",index:++r})}""===a[n]?(o.insertBefore(ko(),e),i.push(e)):e.data=a[n],s+=n}}else if(8===e.nodeType)if(e.data===mo){const t=e.parentNode;null!==e.previousSibling&&r!==n||(r++,t.insertBefore(ko(),e)),n=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(i.push(e),r--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(mo,t+1));)this.parts.push({type:"node",index:-1}),s++}}else a.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const bo=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},wo=e=>-1!==e.index,ko=()=>document.createComment(""),xo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function So(e,t){const{element:{content:i},parts:o}=e,a=document.createTreeWalker(i,133,null,!1);let n=$o(o),r=o[n],s=-1,l=0;const c=[];let d=null;for(;a.nextNode();){s++;const e=a.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===s;)r.index=null!==d?-1:r.index-l,n=$o(o,n),r=o[n]}c.forEach(e=>e.parentNode.removeChild(e))}const Eo=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},$o=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(wo(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Co=new WeakMap,Do=e=>"function"==typeof e&&Co.has(e),Ao={},Po={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Mo{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=ho?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let a,n=0,r=0,s=o.nextNode();for(;n<i.length;)if(a=i[n],wo(a)){for(;r<a.index;)r++,"TEMPLATE"===s.nodeName&&(t.push(s),o.currentNode=s.content),null===(s=o.nextNode())&&(o.currentNode=t.pop(),s=o.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,a.name,a.strings,this.options));n++}else this.__parts.push(void 0),n++;return ho&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const To=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),zo=` ${mo} `;class Oo{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],a=e.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===e.indexOf("--\x3e",a+1);const n=xo.exec(e);t+=null===n?e+(i?zo:fo):e.substr(0,n.index)+n[1]+n[2]+yo+n[3]+mo}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==To&&(t=To.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class No{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ko()),this.endNode=e.appendChild(ko())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ko()),e.__insert(this.endNode=ko())}insertAfterPart(e){e.__insert(this.startNode=ko()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Do(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ao,e(this)}const e=this.__pendingValue;e!==Ao&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof Oo?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===Po?(this.value=Po,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Mo&&this.value.template===t)this.value.update(e.values);else{const i=new Mo(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const a of e)i=t[o],void 0===i&&(i=new No(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(a),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){_o(this.startNode.parentNode,e.nextSibling,this.endNode)}}let Io=!1;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function jo(e){let t=Bo.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Bo.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(mo);return i=t.keyString.get(o),void 0===i&&(i=new vo(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}(()=>{try{const e={get capture(){return Io=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const Bo=new Map,Lo=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ro=(e,t)=>`${e}--${t}`;let Fo=!0;void 0===window.ShadyCSS?Fo=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Fo=!1);const Ho=e=>t=>{const i=Ro(t.type,e);let o=Bo.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},Bo.set(i,o));let a=o.stringsArray.get(t.strings);if(void 0!==a)return a;const n=t.strings.join(mo);if(a=o.keyString.get(n),void 0===a){const i=t.getTemplateElement();Fo&&window.ShadyCSS.prepareTemplateDom(i,e),a=new vo(t,i),o.keyString.set(n,a)}return o.stringsArray.set(t.strings,a),a},Uo=["html","svg"],Go=new Set,Vo=(e,t,i)=>{Go.add(e);const o=i?i.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=a[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{Uo.forEach(t=>{const i=Bo.get(Ro(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),So(e,i)})})})(e);const s=o.content;i?function(e,t,i=null){const{element:{content:o},parts:a}=e;if(null==i)return void o.appendChild(t);const n=document.createTreeWalker(o,133,null,!1);let r=$o(a),s=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===i&&(s=Eo(t),i.parentNode.insertBefore(t,i));-1!==r&&a[r].index===l;){if(s>0){for(;-1!==r;)a[r].index+=s,r=$o(a,r);return}r=$o(a,r)}}(i,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),So(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Wo={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Zo=(e,t)=>t!==e&&(t==t||e==e),Yo={attribute:!0,type:String,converter:Wo,reflect:!1,hasChanged:Zo},Xo="finalized";class qo extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Yo){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdateInternal(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Yo}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Xo)||e.finalize(),this[Xo]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Zo){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||Wo,a="function"==typeof o?o:o.fromAttribute;return a?a(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||Wo.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Yo){const o=this.constructor,a=o._attributeNameForProperty(e,i);if(void 0!==a){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let o=!0;if(void 0!==e){const a=this.constructor;i=i||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}qo[Xo]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ko=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Jo(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Ko(e,t)}const Qo=e=>Jo({attribute:!1,hasChanged:void 0});const ea=(e,t,i)=>{Object.defineProperty(t,i,e)},ta=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),ia=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oa=Symbol();class aa{constructor(e,t){if(t!==oa)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ia?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const na={};class ra extends qo{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ia){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new aa(String(t),oa)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ia?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==na&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return na}}ra.finalized=!0,ra.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,a=Lo.has(t),n=Fo&&11===t.nodeType&&!!t.host,r=n&&!Go.has(o),s=r?document.createDocumentFragment():t;if(((e,t,i)=>{let o=Lo.get(t);void 0===o&&(_o(t,t.firstChild),Lo.set(t,o=new No(Object.assign({templateFactory:jo},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,s,Object.assign({templateFactory:Ho(o)},i)),r){const e=Lo.get(s);Lo.delete(s);const i=e.value instanceof Mo?e.value.template:void 0;Vo(o,s,i),_o(t,t.firstChild),t.appendChild(s),Lo.set(t,e)}!a&&n&&window.ShadyCSS.styleElement(t.host)},ra.shadowRootOptions={mode:"open"};var sa="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",la=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function ca(e,t){return e===t||!(!la(e)||!la(t))}function da(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!ca(e[i],t[i]))return!1;return!0}function ua(e,t){void 0===t&&(t=da);var i=null;function o(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(i&&i.lastThis===this&&t(o,i.lastArgs))return i.lastResult;var n=e.apply(this,o);return i={lastResult:n,lastArgs:o,lastThis:this},n}return o.clear=function(){i=null},o}class pa extends TypeError{constructor(e,t){let i;const{message:o,explanation:a,...n}=e,{path:r}=e,s=0===r.length?o:`At path: ${r.join(".")} -- ${o}`;super(a??s),null!=a&&(this.cause=s),Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>i??(i=[e,...t()])}}function ha(e){return"object"==typeof e&&null!=e}function _a(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function ma(e,t,i,o){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:n}=t,{type:r}=i,{refinement:s,message:l=`Expected a value of type \`${r}\`${s?` with refinement \`${s}\``:""}, but received: \`${_a(o)}\``}=e;return{value:o,type:r,refinement:s,key:a[a.length-1],path:a,branch:n,...e,message:l}}function*fa(e,t,i,o){(function(e){return ha(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=ma(a,t,i,o);e&&(yield e)}}function*ga(e,t,i={}){const{path:o=[],branch:a=[e],coerce:n=!1,mask:r=!1}=i,s={path:o,branch:a};if(n&&(e=t.coercer(e,s),r&&"type"!==t.type&&ha(t.schema)&&ha(e)&&!Array.isArray(e)))for(const i in e)void 0===t.schema[i]&&delete e[i];let l="valid";for(const o of t.validator(e,s))o.explanation=i.message,l="not_valid",yield[o,void 0];for(let[c,d,u]of t.entries(e,s)){const t=ga(d,u,{path:void 0===c?o:[...o,c],branch:void 0===c?a:[...a,d],coerce:n,mask:r,message:i.message});for(const i of t)i[0]?(l=null!=i[0].refinement?"not_refined":"not_valid",yield[i[0],void 0]):n&&(d=i[1],void 0===c?e=d:e instanceof Map?e.set(c,d):e instanceof Set?e.add(d):ha(e)&&(void 0!==d||c in e)&&(e[c]=d))}if("not_valid"!==l)for(const o of t.refiner(e,s))o.explanation=i.message,l="not_refined",yield[o,void 0];"valid"===l&&(yield[void 0,e])}class ya{constructor(e){const{type:t,schema:i,validator:o,refiner:a,coercer:n=e=>e,entries:r=function*(){}}=e;this.type=t,this.schema=i,this.entries=r,this.coercer=n,this.validator=o?(e,t)=>fa(o(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>fa(a(e,t),t,this,e):()=>[]}assert(e,t){return va(e,this,t)}create(e,t){return function(e,t,i){const o=ba(e,t,{coerce:!0,message:i});if(o[0])throw o[0];return o[1]}(e,this,t)}is(e){return function(e,t){const i=ba(e,t);return!i[0]}(e,this)}mask(e,t){return function(e,t,i){const o=ba(e,t,{coerce:!0,mask:!0,message:i});if(o[0])throw o[0];return o[1]}(e,this,t)}validate(e,t={}){return ba(e,this,t)}}function va(e,t,i){const o=ba(e,t,{message:i});if(o[0])throw o[0]}function ba(e,t,i={}){const o=ga(e,t,i),a=function(e){const{done:t,value:i}=e.next();return t?void 0:i}(o);if(a[0]){const e=new pa(a[0],function*(){for(const e of o)e[0]&&(yield e[0])});return[e,void 0]}return[void 0,a[1]]}function wa(e,t){return new ya({type:e,schema:null,validator:t})}function ka(){return wa("any",()=>!0)}function xa(){return wa("boolean",e=>"boolean"==typeof e)}function Sa(){return wa("integer",e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${_a(e)}`)}function Ea(){return wa("number",e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${_a(e)}`)}function $a(e){const t=e?Object.keys(e):[],i=wa("never",()=>!1);return new ya({type:"object",schema:e||null,*entries(o){if(e&&ha(o)){const a=new Set(Object.keys(o));for(const i of t)a.delete(i),yield[i,o[i],e[i]];for(const e of a)yield[e,o[e],i]}},validator:e=>ha(e)||`Expected an object, but received: ${_a(e)}`,coercer:e=>ha(e)?{...e}:e})}function Ca(e){return new ya({...e,validator:(t,i)=>void 0===t||e.validator(t,i),refiner:(t,i)=>void 0===t||e.refiner(t,i)})}function Da(){return wa("string",e=>"string"==typeof e||`Expected a string, but received: ${_a(e)}`)}function Aa(){return{type:"expandable",title:xi("editor.combined"),schema:[{name:"entity",selector:{entity:{}}}]}}function Pa(){return{type:"expandable",title:xi("editor.separated"),name:"entity",schema:[{name:"consumption",label:"Consumption Entity",selector:{entity:{}}},{name:"production",label:"Production Entity",selector:{entity:{}}}]}}const Ma={name:"color",title:xi("editor.custom_colors"),type:"expandable",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"consumption",label:"Consumption",selector:{color_rgb:{}}},{name:"production",label:"Production",selector:{color_rgb:{}}}]}]},Ta=[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}],za=[{name:"entity",selector:{entity:{}}},{name:"template",label:"Template (overrides entity, save to update)",selector:{template:{}}},{type:"grid",column_min_width:"200px",schema:[{name:"icon",selector:{icon:{}}},{name:"unit_of_measurement",label:"Unit of Measurement",selector:{text:{}}},{name:"decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:10,step:1}}},{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}}},{name:"accept_negative",label:"Accept Negative",selector:{boolean:{}}},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}}]},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],Oa=[{name:"color_icon",label:"Color of Icon",selector:{select:{options:[{value:"no_color",label:xi("editor.no_color")},{value:"color_dynamically",label:xi("editor.color_dynamically")},{value:"production",label:xi("editor.production")},{value:"consumption",label:xi("editor.consumption")}],mode:"dropdown"}}},{name:"color_circle",label:"Color of Circle",selector:{select:{options:[{value:"color_dynamically",label:"Color dynamically"},{value:"consumption",label:"Consumption"},{value:"production",label:"Production"}],mode:"dropdown"}}},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{min:0,max:1e6,step:1,mode:"box"}}},{name:"display_state",label:"Display State",selector:{select:{options:[{value:"two_way",label:"Two Way"},{value:"one_way_no_zero",label:"One Way"},{value:"one_way",label:"One Way (Show Zero)"}],mode:"dropdown"}}}];function Na(e){const t={type:"grid",column_min_width:"200px",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]};return"battery"!==e&&"grid"!==e||t.schema.push(...Oa),t}const Ia={...Na("battery"),schema:[...Na("battery").schema,{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"color_value",label:"Color of Value",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},ja=[{name:"state_of_charge",label:"State of Charge Entity",selector:{entity:{}}},{name:"",type:"grid",column_min_width:"200px",schema:[{name:"state_of_charge_unit",label:"Unit",selector:{text:{}}},{name:"state_of_charge_unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"state_of_charge_decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:4,step:1}}},{name:"show_state_of_charge",label:"Show State of Charge",selector:{boolean:{}}},{name:"color_state_of_charge_value",label:"Color of Value",selector:{select:{options:[{value:"no_color",label:xi("editor.no_color")},{value:"color_dynamically",label:xi("editor.color_dynamically")},{value:"production",label:xi("editor.production")},{value:"consumption",label:xi("editor.consumption")}],mode:"dropdown"}}}]}],Ba=[Aa(),Pa(),{title:xi("editor.state_of_charge"),name:"",type:"expandable",schema:ja},Ia,Ma,{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],La={name:"grey_color",selector:{color_rgb:{}}},Ra={name:"transparency",selector:{number:{min:0,max:100,step:1,mode:"box"}}},Fa={name:"",type:"grid",column_min_width:"200px",schema:[Ra,La]},Ha=e=>{switch(e){case"grey_out":return La;case"transparency":return Ra;case"custom":return Fa;default:return[]}},Ua=ua((e,t)=>[{name:"display_zero_lines",type:"grid",column_min_width:"400px",schema:[{name:"mode",selector:{select:{mode:"dropdown",options:[{value:"show",label:e("editor.show")},{value:"hide",label:e("editor.hide")},{value:"transparency",label:e("editor.transparency")},{value:"grey_out",label:e("editor.grey_out")},{value:"custom",label:e("editor.custom")}]}}},Ha(t)]}]),Ga=[{name:"entity",selector:{entity:{}}},{...Na(),schema:[...Na().schema,{name:"state_type",label:"State Type",selector:{select:{options:[{value:"power",label:"Power"},{value:"percentage",label:"Percentage"}],mode:"dropdown"}}},{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"color_icon",label:"Color Icon",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"display_zero_state",label:"Display Zero State",selector:{boolean:{}},default:!0},{name:"unit_white_space",label:"Unit White Space",selector:{boolean:{}},default:!0},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:xi("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:za},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],Va={...Na("grid"),schema:[...Na("grid").schema,{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}},{name:"color_value",label:"Color of Value",selector:{boolean:{}},default:!0},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0}]},Wa=[Aa(),Pa(),Va,Ma,{title:xi("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:za},{title:xi("editor.power_outage"),name:"power_outage",type:"expandable",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"entity",selector:{entity:{}}},{name:"entity_generator",label:"Generator Entity",selector:{entity:{}}},{name:"label_alert",label:"Outage Label",selector:{text:{}}},{name:"icon_alert",label:"Outage Icon",selector:{icon:{}}},{name:"state_alert",label:"Outage State",selector:{text:{}}}]}]},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],Za=[{name:"entity",selector:{entity:{}}},{...Na(),schema:[...Na().schema,{name:"color_value",label:"Color Value",selector:{select:{options:[{value:!0,label:"Color dynamically"},{value:!1,label:"Do Not Color"},{value:"solar",label:"Solar"},{value:"grid",label:"Grid"},{value:"battery",label:"Battery"}],mode:"dropdown"}}},{name:"color_icon",label:"Color Icon",selector:{select:{options:[{value:!0,label:"Color dynamically"},{value:!1,label:"Do Not Color"},{value:"solar",label:"Solar"},{value:"grid",label:"Grid"},{value:"battery",label:"Battery"}],mode:"dropdown"}}},{name:"circle_animation",label:"Circle Animation",default:!0,selector:{boolean:{}}},{name:"subtract_individual",label:"Subtract Individual",selector:{boolean:{}}},{name:"override_state",label:"Override State (With Home Entity)",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}},{name:"hide",label:"Hide Home",selector:{boolean:{}}}]},{title:xi("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:za},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],Ya=[{name:"entity",selector:{entity:{}}},{...Na(),schema:[...Na().schema,{name:"color_value",label:"Color Value",selector:{boolean:{}},default:!0},{name:"color_icon",label:"Color Icon",selector:{boolean:{}},default:!0},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"display_zero_state",label:"Display Zero State",selector:{boolean:{}},default:!0},{name:"unit_of_measurement",label:"Unit of Measurement",selector:{text:{}}},{name:"calculate_flow_rate",label:"Calculate Flow Rate",selector:{boolean:{}}},{name:"decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:4,step:1}}},{name:"inverted_animation",label:"Invert Animation",selector:{boolean:{}}},{name:"show_direction",label:"Show Direction",selector:{boolean:{}}},{name:"unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:xi("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:za},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],Xa=[{name:"entity",selector:{entity:{}}},{...Na(),schema:[...Na().schema,{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"color_icon",label:"Color Icon",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_state",label:"Display State When Zero?",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:xi("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:[...za,{name:"sum_total",label:"Sum Total",selector:{boolean:{}}}]},{title:xi("editor.action"),name:"",type:"expandable",schema:Ta}],qa=function(...e){const t="type"===e[0].type,i=e.map(e=>e.schema),o=Object.assign({},...i);return t?function(e){const t=Object.keys(e);return new ya({type:"type",schema:e,*entries(i){if(ha(i))for(const o of t)yield[o,i[o],e[o]]},validator:e=>ha(e)||`Expected an object, but received: ${_a(e)}`,coercer:e=>ha(e)?{...e}:e})}(o):$a(o)}($a({type:Da(),view_layout:ka(),layout_options:ka(),grid_options:ka(),visibility:ka(),disabled:Ca(xa())}),$a({title:Ca(Da()),theme:Ca(Da()),dashboard_link:Ca(Da()),dashboard_link_label:Ca(Da()),second_dashboard_link:Ca(Da()),second_dashboard_link_label:Ca(Da()),inverted_entities:Ca(ka()),base_decimals:Ca(Sa()),kilo_decimals:Ca(Sa()),mega_decimals:Ca(Sa()),mega_threshold:Ca(Ea()),min_flow_rate:Ca(Ea()),max_flow_rate:Ca(Ea()),min_expected_power:Ca(Ea()),max_expected_power:Ca(Ea()),kilo_threshold:Ca(Ea()),clickable_entities:Ca(xa()),transparency_zero_lines:Ca(Ea()),greyout_zero_lines:Ca(xa()),display_zero_lines:Ca(ka()),use_new_flow_rate_model:Ca(xa()),full_size:Ca(xa()),style_ha_card:Ca(ka()),style_card_content:Ca(ka()),disable_dots:Ca(xa()),no_labels:Ca(xa()),entities:$a({battery:Ca(ka()),grid:Ca(ka()),solar:Ca(ka()),home:Ca(ka()),fossil_fuel_percentage:Ca(ka()),individual:Ca(ka()),individual1:Ca(ka()),individual2:Ca(ka())}),sort_individual_devices:Ca(xa()),allow_layout_break:Ca(xa()),watt_threshold:Ca(Ea()),w_decimals:Ca(Ea()),kw_decimals:Ca(Ea())})),Ka=[{name:"title",label:"Title",selector:{text:{}}}];ua(e=>[{name:"entities",type:"grid",column_min_width:"400px",schema:[{title:e("editor.grid"),name:"grid",type:"expandable",iconPath:"M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",schema:Wa},{title:e("editor.solar"),name:"solar",type:"expandable",iconPath:"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",schema:Xa},{title:e("editor.battery"),name:"battery",type:"expandable",iconPath:"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z",schema:Ba},{title:e("editor.fossil_fuel_percentage"),name:"fossil_fuel_percentage",type:"expandable",iconPath:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",schema:Ga},{title:e("editor.home"),name:"home",type:"expandable",iconPath:"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",schema:Za}]}]);const Ja=ua(e=>[{name:"entities",type:"grid",column_min_width:"400px",schema:[{title:`${e("editor.individual")} 1`,name:"individual1",type:"expandable",schema:Ya},{title:`${e("editor.individual")} 2`,name:"individual2",type:"expandable",schema:Ya}]}]),Qa=ua((e,t)=>[{type:"grid",column_min_width:"200px",schema:[{name:"dashboard_link",label:"Dashboard Link",selector:{navigation:{}}},{name:"dashboard_link_label",label:"Dashboard Link Label",selector:{text:{}}},{name:"base_decimals",label:"Watt Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"kilo_decimals",label:"kW Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"mega_decimals",label:"MW Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"max_flow_rate",label:"Max Flow Rate (Sec/Dot)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"min_flow_rate",label:"Min Flow Rate (Sec/Dot)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"max_expected_power",label:"Max Expected Power (in Watts)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"min_expected_power",label:"Min Expected Power (in Watts)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"kilo_threshold",label:"Kilowatt Threshold",selector:{number:{mode:"box",min:0,max:1e6,step:1}}},{name:"mega_threshold",label:"Megawatt Threshold",selector:{number:{mode:"box",min:0,max:1e7,step:1}}},{name:"clickable_entities",label:"Clickable Entities",selector:{boolean:{}},default:!0},{name:"disable_dots",label:"Disable Moving Dots",selector:{boolean:{}}},{name:"no_labels",label:e("editor.no_labels"),selector:{boolean:{}}},{name:"use_new_flow_rate_model",label:"New Flow Model?",selector:{boolean:{}},default:!0},{name:"sort_individual_devices",label:"Sort individual devices by usage",selector:{boolean:{}},default:!0},{name:"allow_layout_break",label:"Allow Layout Break",selector:{boolean:{}}}]},{type:"expandable",title:e("editor.display_zero_lines"),schema:[...Ua(e,t)]}]),en=(e,t,i,o)=>{o=o||{},i=null==i?{}:i;const a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a},tn=async()=>{if(customElements.get("ha-form")||customElements.get("hui-button-card")?.getConfigElement(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement(),customElements.get("ha-form"))return;await(window.loadCardHelpers?.())},on=b`
  #sortable a:nth-of-type(2n) paper-icon-item {
    animation-name: keyframes1;
    animation-iteration-count: infinite;
    transform-origin: 50% 10%;
    animation-delay: -0.75s;
    animation-duration: 0.25s;
  }

  #sortable a:nth-of-type(2n-1) paper-icon-item {
    animation-name: keyframes2;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 30% 5%;
    animation-delay: -0.5s;
    animation-duration: 0.33s;
  }

  #sortable a {
    height: 48px;
    display: flex;
  }

  #sortable {
    outline: none;
    display: block !important;
  }

  .hidden-panel {
    display: flex !important;
  }

  .sortable-fallback {
    display: none;
  }

  .sortable-ghost {
    opacity: 0.4;
  }

  .sortable-fallback {
    opacity: 0;
  }

  @keyframes keyframes1 {
    0% {
      transform: rotate(-1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(1.5deg);
      animation-timing-function: ease-out;
    }
  }

  @keyframes keyframes2 {
    0% {
      transform: rotate(1deg);
      animation-timing-function: ease-in;
    }

    50% {
      transform: rotate(-1.5deg);
      animation-timing-function: ease-out;
    }
  }

  .show-panel,
  .hide-panel {
    display: none;
    position: absolute;
    top: 0;
    right: 4px;
    --mdc-icon-button-size: 40px;
  }

  :host([rtl]) .show-panel {
    right: initial;
    left: 4px;
  }

  .hide-panel {
    top: 4px;
    right: 8px;
  }

  :host([rtl]) .hide-panel {
    right: initial;
    left: 8px;
  }

  :host([expanded]) .hide-panel {
    display: block;
  }

  :host([expanded]) .show-panel {
    display: inline-flex;
  }

  paper-icon-item.hidden-panel,
  paper-icon-item.hidden-panel span,
  paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
    color: var(--secondary-text-color);
    cursor: pointer;
  }
`;let an;const{I:nn}=be,rn=e=>e,sn=()=>document.createComment(""),ln=(e,t,i)=>{const o=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(sn(),a),n=o.insertBefore(sn(),a);i=new nn(t,n,e,e.options)}else{const t=i._$AB.nextSibling,n=i._$AM,r=n!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==n._$AU&&i._$AP(t)}if(t!==a||r){let e=i._$AA;for(;e!==t;){const t=rn(e).nextSibling;rn(o).insertBefore(e,a),e=t}}}return i},cn=(e,t,i=e)=>(e._$AI(t,i),e),dn={},un=(e,t=dn)=>e._$AH=t,pn=e=>{e._$AR(),e._$AA.remove()},hn=(e,t,i)=>{const o=new Map;for(let a=t;a<=i;a++)o.set(e[a],a);return o},_n=Ne(class extends Ie{constructor(e){if(super(e),e.type!==Oe)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);const a=[],n=[];let r=0;for(const t of e)a[r]=o?o(t,r):r,n[r]=i(t,r),r++;return{values:n,keys:a}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,o]){const a=(e=>e._$AH)(e),{values:n,keys:r}=this.dt(t,i,o);if(!Array.isArray(a))return this.ut=r,n;const s=this.ut??=[],l=[];let c,d,u=0,p=a.length-1,h=0,_=n.length-1;for(;u<=p&&h<=_;)if(null===a[u])u++;else if(null===a[p])p--;else if(s[u]===r[h])l[h]=cn(a[u],n[h]),u++,h++;else if(s[p]===r[_])l[_]=cn(a[p],n[_]),p--,_--;else if(s[u]===r[_])l[_]=cn(a[u],n[_]),ln(e,l[_+1],a[u]),u++,_--;else if(s[p]===r[h])l[h]=cn(a[p],n[h]),ln(e,a[u],a[p]),p--,h++;else if(void 0===c&&(c=hn(r,h,_),d=hn(s,u,p)),c.has(s[u]))if(c.has(s[p])){const t=d.get(r[h]),i=void 0!==t?a[t]:null;if(null===i){const t=ln(e,a[u]);cn(t,n[h]),l[h]=t}else l[h]=cn(i,n[h]),ln(e,a[u],i),a[t]=null;h++}else pn(a[p]),p--;else pn(a[u]),u++;for(;h<=_;){const t=ln(e,l[_+1]);cn(t,n[h]),l[h++]=t}for(;u<=p;){const e=a[u++];null!==e&&pn(e)}return this.ut=r,un(e,l),re}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mn extends xe{constructor(){super(...arguments),this._indexBeingEdited=-1,this._entityKeys=new WeakMap,this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||xi(`editor.${e?.name}`)}connectedCallback(){super.connectedCallback(),tn()}disconnectedCallback(){super.disconnectedCallback(),this._destroySortable()}_editRowElement(e){this._indexBeingEdited=e}_getKey(e){return this._entityKeys.has(e)||this._entityKeys.set(e,Math.random().toString()),this._entityKeys.get(e)}render(){return this.entities&&this.hass?-1!==this._indexBeingEdited?ae`
        <div class="individual-header">
          <h4>
            ${this._indexBeingEdited+1} / ${this.entities.length} ${xi("editor.individual")}
          </h4>
          <ha-icon-button
            .label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
            .path=${sa}
            class="remove-icon"
            @click=${()=>this._indexBeingEdited=-1}
          ></ha-icon-button>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${this.entities[this._indexBeingEdited]}
          .schema=${Ya}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._configChanged}
        ></ha-form>
      `:ae`
      <div class="entities">
        ${_n(this.entities,e=>this._getKey(e),(e,t)=>ae`
            <div class="entity">
              <div class="handle">
                <ha-svg-icon .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}></ha-svg-icon>
              </div>
              ${e.type?ae`
                    <div class="special-row">
                      <div>
                        <span>
                          ${this.hass.localize(`ui.panel.lovelace.editor.card.entities.entity_row.${e.type}`)}
                        </span>
                        <span class="secondary"
                          >${this.hass.localize("ui.panel.lovelace.editor.card.entities.edit_special_row")}</span
                        >
                      </div>
                    </div>
                  `:ae`
                    <ha-entity-picker
                      allow-custom-entity
                      hideClearIcon
                      .hass=${this.hass}
                      .value=${e.entity}
                      .index=${t}
                      @value-changed=${this._valueChanged}
                    ></ha-entity-picker>
                  `}
              <ha-icon-button
                .label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
                .path=${sa}
                class="remove-icon"
                .index=${t}
                @click=${this._removeRow}
              ></ha-icon-button>
              <ha-icon-button
                .label=${this.hass.localize("ui.components.entity.entity-picker.edit")}
                .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}
                class="edit-icon"
                .index=${t}
                @click=${()=>this._editRowElement(t)}
              ></ha-icon-button>
            </div>
          `)}
      </div>
      <ha-entity-picker
        class="add-entity"
        .hass=${this.hass}
        @value-changed=${this._addEntity}
      ></ha-entity-picker>
    `:ae` <p>No entities configured.</p> `}_configChanged(e){const t=e.detail.value||"";if(!this.config||!this.hass)return;Array.isArray(this.config.entities.individual)||(this.config.entities.individual=[]);const i=[...this.config.entities.individual];if(!i)return;i[this._indexBeingEdited]=t;const o={...this.config,entities:{...this.config.entities,individual:i}};en(this,"config-changed",{config:o})}firstUpdated(){this._createSortable()}async _createSortable(){const e=await(async()=>(an||(an=(await Promise.resolve().then(function(){return Pc})).default),an))();this._sortable=new e(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._rowMoved(e)}})}_destroySortable(){this._sortable?.destroy(),this._sortable=void 0}async _addEntity(e){const t=e.detail.value;if(""===t)return;const i=this.entities.concat({entity:t});e.target.value="",en(this,"entities-changed",{entities:i})}_rowMoved(e){if(e.oldIndex===e.newIndex)return;if(null==e.oldIndex||null==e.newIndex)return;const t=this.entities.concat(),[i]=t.splice(e.oldIndex,1);i&&(t.splice(e.newIndex,0,i),en(this,"entities-changed",{entities:t}))}_removeRow(e){const t=e.currentTarget.index,i=this.entities.concat();i.splice(t,1),en(this,"entities-changed",{entities:i})}_valueChanged(e){const t=e.detail.value,i=e.target.index,o=this.entities.concat();""===t||void 0===t?o.splice(i,1):o[i]={...o[i],entity:t},en(this,"entities-changed",{entities:o})}_editRow(e){const t=e.currentTarget.index;en(this,"edit-detail-element",{subElementConfig:{index:t,type:"row",elementConfig:this.entities[t]}})}static get styles(){return[on,b`
        ha-entity-picker {
          margin-top: 8px;
        }

        .individual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-inline: 0.2rem;
          margin-bottom: 1rem;
        }

        .add-entity {
          display: block;
          margin-left: 31px;
          margin-right: 71px;
          margin-inline-start: 31px;
          margin-inline-end: 71px;
          direction: var(--direction);
        }
        .entity {
          display: flex;
          align-items: center;
        }

        .entity .handle {
          padding-right: 8px;
          cursor: move;
          padding-inline-end: 8px;
          padding-inline-start: initial;
          direction: var(--direction);
        }
        .entity .handle > * {
          pointer-events: none;
        }

        .entity ha-entity-picker {
          flex-grow: 1;
          min-width: 0px;
        }

        .special-row {
          height: 60px;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-grow: 1;
        }

        .special-row div {
          display: flex;
          flex-direction: column;
        }

        .remove-icon,
        .edit-icon {
          --mdc-icon-button-size: 36px;
          color: var(--secondary-text-color);
        }

        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
        }
      `]}}e([lo({attribute:!1})],mn.prototype,"hass",void 0),e([lo({attribute:!1})],mn.prototype,"config",void 0),e([lo({attribute:!1})],mn.prototype,"entities",void 0),e([lo()],mn.prototype,"label",void 0),e([co()],mn.prototype,"_indexBeingEdited",void 0),customElements.get("individual-row-editor")||customElements.define("individual-row-editor",mn);class fn extends xe{constructor(){super(...arguments),this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||xi(`editor.${e?.name}`)}render(){return this.config&&this.hass?(this._configEntities=this.config.entities.individual,this._subElementEditorConfig?ae`
        <ha-form
          .hass=${this.hass}
          @value-changed=${this._valueChanged}
          .data=${this.config}
          .schema=${Ja(this.hass)}
          .computeLabel=${this._computeLabelCallback}
        ></ha-form>
      `:ae`
      <individual-row-editor
        .hass=${this.hass}
        .config=${this.config}
        .entities=${this._configEntities||[]}
        @open-sub-element-editor=${this._editDetailElement}
        @entities-changed=${this._entitiesChanged}
        style="width: 100%;"
      ></individual-row-editor>
    `):ae`<div>no config</div>`}_valueChanged(e){const t=e.detail.value||"";this.config&&this.hass&&s(this,"config-changed",{config:t})}_entitiesChanged(e){let t=this.config;t={...t,entities:{...t.entities,individual:e.detail.entities}},this._configEntities=(t.entities.individual??[]).map(e=>"string"==typeof e?{entity:e}:e),s(this,"config-changed",{config:t})}_editDetailElement(e){this._subElementEditorConfig=e.detail.subElementConfig}static get styles(){return b``}}e([Jo({attribute:!1})],fn.prototype,"config",void 0),e([Qo()],fn.prototype,"_subElementEditorConfig",void 0),e([Qo()],fn.prototype,"_configEntities",void 0),customElements.get("individual-devices-editor")||customElements.define("individual-devices-editor",fn);class gn extends xe{constructor(){super(...arguments),this.outlined=!1,this.leftChevron=!1,this.icon="mdi:format-list-bulleted-type"}render(){return ae`
      <div
        class="link-subpage"
        @click=${this._openSubElementPage}
        @keydown=${this._openSubElementPage}
        @focus=${this._focusChanged}
        @blur=${this._focusChanged}
        role="button"
      >
        <ha-icon icon=${this.icon} class="summary-icon"></ha-icon>
        <slot name="header">
          <div class="header">
            ${this.header}
            <slot class="secondary" name="secondary">${this.secondary}</slot>
          </div>
        </slot>
        <ha-svg-icon .path=${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"} class="summary-icon-right"></ha-svg-icon>
      </div>
    `}_focusChanged(e){this.shadowRoot.querySelector(".top").classList.toggle("focused","focus"===e.type)}_openSubElementPage(){s(this,"open-sub-element-editor",{open:!0})}static get styles(){return b`
      :host {
        display: block;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        border-radius: var(--ha-card-border-radius, 12px);
      }

      :host([leftchevron]) .summary-icon {
        margin-left: 0;
        margin-right: 8px;
      }

      .link-subpage {
        width: 100%;
        display: flex;
        gap: 1rem;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        direction: var(--direction);
        color: var(--secondary-text-color);
      }

      .header,
      ::slotted([slot="header"]) {
        flex: 1;
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        height: auto;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `}}var yn;e([Jo({type:String})],gn.prototype,"path",void 0),e([Jo({type:Boolean,reflect:!0})],gn.prototype,"outlined",void 0),e([Jo({type:Boolean,reflect:!0})],gn.prototype,"leftChevron",void 0),e([Jo()],gn.prototype,"header",void 0),e([Jo({type:String})],gn.prototype,"icon",void 0),e([Jo()],gn.prototype,"secondary",void 0),e([(yn=".container",(e,t)=>{const i={get(){return this.renderRoot.querySelector(yn)},enumerable:!0,configurable:!0};return void 0!==t?ea(i,e,t):ta(i,e)})],gn.prototype,"_container",void 0),customElements.get("link-subpage")||customElements.define("link-subpage",gn);class vn extends xe{render(){return ae`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${"Go Back"}
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._goBack}
          ></ha-icon-button>
          <span>${xi(`editor.${this.page}`)}</span>
        </div>
      </div>
    `}_goBack(){s(this,"go-back")}static get styles(){return b`
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
    `}}e([Jo({attribute:!1})],vn.prototype,"config",void 0),e([Jo()],vn.prototype,"page",void 0),customElements.get("subpage-header")||customElements.define("subpage-header",vn);const bn=[{page:"grid",icon:"mdi:transmission-tower",schema:Wa},{page:"solar",icon:"mdi:solar-power",schema:Xa},{page:"battery",icon:"mdi:battery-high",schema:Ba},{page:"fossil_fuel_percentage",icon:"mdi:leaf",schema:Ga},{page:"home",icon:"mdi:home",schema:Za},{page:"individual",icon:"mdi:dots-horizontal-circle-outline"},{page:"advanced",icon:"mdi:cog",schema:Qa}];let wn=class extends xe{constructor(){super(...arguments),this._configEntities=[],this._currentConfigPage=null,this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||xi(`editor.${e?.name}`)||e?.label}async setConfig(e){va(e,qa),this._config=e}connectedCallback(){super.connectedCallback(),tn()}_editDetailElement(e){this._currentConfigPage=e}_goBack(){this._currentConfigPage=null}_hasLegacyFields(){return!!this._config&&(void 0!==this._config.watt_threshold||void 0!==this._config.w_decimals||void 0!==this._config.kw_decimals)}_migrateLegacyFields(){if(!this._config)return;const e={...this._config};"number"==typeof e.watt_threshold&&void 0===e.kilo_threshold&&(e.kilo_threshold=e.watt_threshold),"number"==typeof e.w_decimals&&void 0===e.base_decimals&&(e.base_decimals=e.w_decimals),"number"==typeof e.kw_decimals&&void 0===e.kilo_decimals&&(e.kilo_decimals=e.kw_decimals),delete e.watt_threshold,delete e.w_decimals,delete e.kw_decimals,this._config=e,s(this,"config-changed",{config:e})}_renderLegacyFieldsAlert(){return this._hasLegacyFields()?ae`
      <ha-alert class="legacy-fields-alert" alert-type="warning">
        Legacy config fields detected. Field names changed: w_decimals -> base_decimals, kw_decimals
        -> kilo_decimals, watt_threshold -> kilo_threshold.<br />
        More info: https://github.com/flixlix/power-flow-card-plus/releases/tag/v0.3.5
        <button
          class="legacy-fields-alert-button"
          slot="action"
          @click=${this._migrateLegacyFields}
        >
          Convert automatically
        </button>
      </ha-alert>
    `:se}_hasLegacyIndividualFields(){if(!this._config)return!1;const e=this._config.entities;return void 0!==e.individual1||void 0!==e.individual2}_migrateLegacyIndividualFields(){if(!this._config)return;const e={...this._config,entities:{...this._config.entities}},t=Array.isArray(e.entities.individual)?[...e.entities.individual]:[],i=e=>{Array.isArray(e)?t.push(...e):void 0!==e&&t.push(e)};i(e.entities.individual1),i(e.entities.individual2),e.entities.individual=t,delete e.entities.individual1,delete e.entities.individual2,this._config=e,s(this,"config-changed",{config:e})}_renderLegacyIndividualFieldsAlert(){return this._hasLegacyIndividualFields()?ae`
      <ha-alert class="legacy-fields-alert" alert-type="warning">
        Legacy individual fields detected. Field names changed: entities.individual1/individual2 ->
        entities.individual[].
        <button
          class="legacy-fields-alert-button"
          slot="action"
          @click=${this._migrateLegacyIndividualFields}
        >
          Convert automatically
        </button>
      </ha-alert>
    `:se}render(){if(!this.hass||!this._config)return se;const e={...this._config,display_zero_lines:{mode:this._config.display_zero_lines?.mode??d.displayZeroLines.mode,transparency:this._config.display_zero_lines?.transparency??d.displayZeroLines.transparency,grey_color:this._config.display_zero_lines?.grey_color??d.displayZeroLines.grey_color}};if(null!==this._currentConfigPage){if("individual"===this._currentConfigPage)return ae`
          ${this._renderLegacyFieldsAlert()}${this._renderLegacyIndividualFieldsAlert()}
          <subpage-header @go-back=${this._goBack} page=${this._currentConfigPage}>
          </subpage-header>
          <individual-devices-editor
            .hass=${this.hass}
            .config=${this._config}
            @config-changed=${this._valueChanged}
          ></individual-devices-editor>
        `;const t=this._currentConfigPage,i="advanced"===t?Qa(xi,this._config.display_zero_lines?.mode??d.displayZeroLines.mode):bn.find(e=>e.page===t)?.schema,o="advanced"===t?e:e.entities[t];return ae`
        ${this._renderLegacyFieldsAlert()}${this._renderLegacyIndividualFieldsAlert()}
        <subpage-header @go-back=${this._goBack} page=${this._currentConfigPage}> </subpage-header>
        <ha-form
          .hass=${this.hass}
          .data=${o}
          .schema=${i}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `}const t=(e,t="mdi:dots-horizontal-circle-outline")=>{if(null===e)return se;const i=(()=>{if("individual"===e||"advanced"===e)return t;const i=this?._config?.entities[e];return i?.icon||t})();return ae`
        <link-subpage
          path=${e}
          header="${xi(`editor.${e}`)}"
          @open-sub-element-editor=${()=>this._editDetailElement(e)}
          icon=${i}
        >
        </link-subpage>
      `};return ae`
      <div class="card-config">
        ${this._renderLegacyFieldsAlert()}${this._renderLegacyIndividualFieldsAlert()}
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Ka}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
        ${bn.map(e=>t(e.page,e.icon))}
      </div>
    `}_valueChanged(e){let t=e.detail.value||"";this._config&&this.hass&&(null!==this._currentConfigPage&&"advanced"!==this._currentConfigPage&&"individual"!==this._currentConfigPage&&(t={...this._config,entities:{...this._config.entities,[this._currentConfigPage]:t}}),s(this,"config-changed",{config:t}))}static get styles(){return b`
      ha-form {
        width: 100%;
      }

      ha-icon-button {
        align-self: center;
      }

      .entities-section * {
        background-color: #f00;
      }

      .card-config {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 10px;
      }

      .legacy-fields-alert {
        margin-bottom: 8px;
      }

      .legacy-fields-alert-button {
        border: none;
        background: var(--warning-color);
        border-radius: 99px;
        color: var(--card-background-color);
        cursor: pointer;
        font: inherit;
        padding: 4px 8px;
      }

      .config-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .config-header.sub-header {
        margin-top: 24px;
      }

      ha-icon {
        padding-bottom: 2px;
        position: relative;
        top: -4px;
        right: 1px;
      }
    `}};e([lo({attribute:!1})],wn.prototype,"hass",void 0),e([co()],wn.prototype,"_config",void 0),e([co()],wn.prototype,"_configEntities",void 0),e([co()],wn.prototype,"_currentConfigPage",void 0),wn=e([no("power-flow-card-plus-editor")],wn);var kn=Object.freeze({__proto__:null,get PowerFlowCardPlusEditor(){return wn}});
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function xn(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Sn(){return Sn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Sn.apply(null,arguments)}function En(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function $n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?En(Object(i),!0).forEach(function(t){xn(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):En(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function Cn(e){return Cn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cn(e)}function Dn(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var An=Dn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Pn=Dn(/Edge/i),Mn=Dn(/firefox/i),Tn=Dn(/safari/i)&&!Dn(/chrome/i)&&!Dn(/android/i),zn=Dn(/iP(ad|od|hone)/i),On=Dn(/chrome/i)&&Dn(/android/i),Nn={capture:!1,passive:!1};function In(e,t,i){e.addEventListener(t,i,!An&&Nn)}function jn(e,t,i){e.removeEventListener(t,i,!An&&Nn)}function Bn(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function Ln(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function Rn(e,t,i,o){if(e){i=i||document;do{if(null!=t&&(">"===t[0]?e.parentNode===i&&Bn(e,t):Bn(e,t))||o&&e===i)return e;if(e===i)break}while(e=Ln(e))}return null}var Fn,Hn=/\s+/g;function Un(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(Hn," ").replace(" "+t+" "," ");e.className=(o+(i?" "+t:"")).replace(Hn," ")}}function Gn(e,t,i){var o=e&&e.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),void 0===t?i:i[t];t in o||-1!==t.indexOf("webkit")||(t="-webkit-"+t),o[t]=i+("string"==typeof i?"":"px")}}function Vn(e,t){var i="";if("string"==typeof e)i=e;else do{var o=Gn(e,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!t&&(e=e.parentNode));var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return a&&new a(i)}function Wn(e,t,i){if(e){var o=e.getElementsByTagName(t),a=0,n=o.length;if(i)for(;a<n;a++)i(o[a],a);return o}return[]}function Zn(){var e=document.scrollingElement;return e||document.documentElement}function Yn(e,t,i,o,a){if(e.getBoundingClientRect||e===window){var n,r,s,l,c,d,u;if(e!==window&&e.parentNode&&e!==Zn()?(r=(n=e.getBoundingClientRect()).top,s=n.left,l=n.bottom,c=n.right,d=n.height,u=n.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||i)&&e!==window&&(a=a||e.parentNode,!An))do{if(a&&a.getBoundingClientRect&&("none"!==Gn(a,"transform")||i&&"static"!==Gn(a,"position"))){var p=a.getBoundingClientRect();r-=p.top+parseInt(Gn(a,"border-top-width")),s-=p.left+parseInt(Gn(a,"border-left-width")),l=r+n.height,c=s+n.width;break}}while(a=a.parentNode);if(o&&e!==window){var h=Vn(a||e),_=h&&h.a,m=h&&h.d;h&&(l=(r/=m)+(d/=m),c=(s/=_)+(u/=_))}return{top:r,left:s,bottom:l,right:c,width:u,height:d}}}function Xn(e,t,i){for(var o=er(e,!0),a=Yn(e)[t];o;){if(!(a>=Yn(o)[i]))return o;if(o===Zn())break;o=er(o,!1)}return!1}function qn(e,t,i,o){for(var a=0,n=0,r=e.children;n<r.length;){if("none"!==r[n].style.display&&r[n]!==as.ghost&&(o||r[n]!==as.dragged)&&Rn(r[n],i.draggable,e,!1)){if(a===t)return r[n];a++}n++}return null}function Kn(e,t){for(var i=e.lastElementChild;i&&(i===as.ghost||"none"===Gn(i,"display")||t&&!Bn(i,t));)i=i.previousElementSibling;return i||null}function Jn(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===as.clone||t&&!Bn(e,t)||i++;return i}function Qn(e){var t=0,i=0,o=Zn();if(e)do{var a=Vn(e),n=a.a,r=a.d;t+=e.scrollLeft*n,i+=e.scrollTop*r}while(e!==o&&(e=e.parentNode));return[t,i]}function er(e,t){if(!e||!e.getBoundingClientRect)return Zn();var i=e,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var a=Gn(i);if(i.clientWidth<i.scrollWidth&&("auto"==a.overflowX||"scroll"==a.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==a.overflowY||"scroll"==a.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Zn();if(o||t)return i;o=!0}}}while(i=i.parentNode);return Zn()}function tr(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function ir(e,t){return function(){if(!Fn){var i=arguments;1===i.length?e.call(this,i[0]):e.apply(this,i),Fn=setTimeout(function(){Fn=void 0},t)}}}function or(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function ar(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function nr(e,t,i){var o={};return Array.from(e.children).forEach(function(a){var n,r,s,l;if(Rn(a,t.draggable,e,!1)&&!a.animated&&a!==i){var c=Yn(a);o.left=Math.min(null!==(n=o.left)&&void 0!==n?n:1/0,c.left),o.top=Math.min(null!==(r=o.top)&&void 0!==r?r:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var rr="Sortable"+(new Date).getTime();function sr(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(e){if("none"!==Gn(e,"display")&&e!==as.ghost){t.push({target:e,rect:Yn(e)});var i=$n({},t[t.length-1].rect);if(e.thisAnimationDuration){var o=Vn(e,!0);o&&(i.top-=o.f,i.left-=o.e)}e.fromRect=i}})},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var i in e)if(e.hasOwnProperty(i))for(var o in t)if(t.hasOwnProperty(o)&&t[o]===e[i][o])return Number(i);return-1}(t,{target:e}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof i&&i());var a=!1,n=0;t.forEach(function(e){var t=0,i=e.target,r=i.fromRect,s=Yn(i),l=i.prevFromRect,c=i.prevToRect,d=e.rect,u=Vn(i,!0);u&&(s.top-=u.f,s.left-=u.e),i.toRect=s,i.thisAnimationDuration&&tr(l,s)&&!tr(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(t=function(e,t,i,o){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*o.animation}(d,l,c,o.options)),tr(s,r)||(i.prevFromRect=r,i.prevToRect=s,t||(t=o.options.animation),o.animate(i,d,s,t)),t&&(a=!0,n=Math.max(n,t),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},t),i.thisAnimationDuration=t)}),clearTimeout(e),a?e=setTimeout(function(){"function"==typeof i&&i()},n):"function"==typeof i&&i(),t=[]},animate:function(e,t,i,o){if(o){Gn(e,"transition",""),Gn(e,"transform","");var a=Vn(this.el),n=a&&a.a,r=a&&a.d,s=(t.left-i.left)/(n||1),l=(t.top-i.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,Gn(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Gn(e,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Gn(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){Gn(e,"transition",""),Gn(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},o)}}}}var lr=[],cr={initializeByDefault:!0},dr={mount:function(e){for(var t in cr)cr.hasOwnProperty(t)&&!(t in e)&&(e[t]=cr[t]);lr.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),lr.push(e)},pluginEvent:function(e,t,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var a=e+"Global";lr.forEach(function(o){t[o.pluginName]&&(t[o.pluginName][a]&&t[o.pluginName][a]($n({sortable:t},i)),t.options[o.pluginName]&&t[o.pluginName][e]&&t[o.pluginName][e]($n({sortable:t},i)))})},initializePlugins:function(e,t,i,o){for(var a in lr.forEach(function(o){var a=o.pluginName;if(e.options[a]||o.initializeByDefault){var n=new o(e,t,e.options);n.sortable=e,n.options=e.options,e[a]=n,Sn(i,n.defaults)}}),e.options)if(e.options.hasOwnProperty(a)){var n=this.modifyOption(e,a,e.options[a]);void 0!==n&&(e.options[a]=n)}},getEventProperties:function(e,t){var i={};return lr.forEach(function(o){"function"==typeof o.eventProperties&&Sn(i,o.eventProperties.call(t[o.pluginName],e))}),i},modifyOption:function(e,t,i){var o;return lr.forEach(function(a){e[a.pluginName]&&a.optionListeners&&"function"==typeof a.optionListeners[t]&&(o=a.optionListeners[t].call(e[a.pluginName],i))}),o}};var ur=["evt"],pr=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,a=function(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;i[o]=e[o]}return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],-1===t.indexOf(i)&&{}.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(i,ur);dr.pluginEvent.bind(as)(e,t,$n({dragEl:_r,parentEl:mr,ghostEl:fr,rootEl:gr,nextEl:yr,lastDownEl:vr,cloneEl:br,cloneHidden:wr,dragStarted:Or,putSortable:Cr,activeSortable:as.active,originalEvent:o,oldIndex:kr,oldDraggableIndex:Sr,newIndex:xr,newDraggableIndex:Er,hideGhostForTarget:es,unhideGhostForTarget:ts,cloneNowHidden:function(){wr=!0},cloneNowShown:function(){wr=!1},dispatchSortableEvent:function(e){hr({sortable:t,name:e,originalEvent:o})}},a))};function hr(e){!function(e){var t=e.sortable,i=e.rootEl,o=e.name,a=e.targetEl,n=e.cloneEl,r=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,d=e.oldDraggableIndex,u=e.newDraggableIndex,p=e.originalEvent,h=e.putSortable,_=e.extraEventProperties;if(t=t||i&&i[rr]){var m,f=t.options,g="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||An||Pn?(m=document.createEvent("Event")).initEvent(o,!0,!0):m=new CustomEvent(o,{bubbles:!0,cancelable:!0}),m.to=r||i,m.from=s||i,m.item=a||i,m.clone=n,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=d,m.newDraggableIndex=u,m.originalEvent=p,m.pullMode=h?h.lastPutMode:void 0;var y=$n($n({},_),dr.getEventProperties(o,t));for(var v in y)m[v]=y[v];i&&i.dispatchEvent(m),f[g]&&f[g].call(t,m)}}($n({putSortable:Cr,cloneEl:br,targetEl:_r,rootEl:gr,oldIndex:kr,oldDraggableIndex:Sr,newIndex:xr,newDraggableIndex:Er},e))}var _r,mr,fr,gr,yr,vr,br,wr,kr,xr,Sr,Er,$r,Cr,Dr,Ar,Pr,Mr,Tr,zr,Or,Nr,Ir,jr,Br,Lr=!1,Rr=!1,Fr=[],Hr=!1,Ur=!1,Gr=[],Vr=!1,Wr=[],Zr="undefined"!=typeof document,Yr=zn,Xr=Pn||An?"cssFloat":"float",qr=Zr&&!On&&!zn&&"draggable"in document.createElement("div"),Kr=function(){if(Zr){if(An)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),Jr=function(e,t){var i=Gn(e),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),a=qn(e,0,t),n=qn(e,1,t),r=a&&Gn(a),s=n&&Gn(n),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+Yn(a).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Yn(n).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!n||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return a&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=o&&"none"===i[Xr]||n&&"none"===i[Xr]&&l+c>o)?"vertical":"horizontal"},Qr=function(e){function t(e,i){return function(o,a,n,r){var s=o.options.group.name&&a.options.group.name&&o.options.group.name===a.options.group.name;if(null==e&&(i||s))return!0;if(null==e||!1===e)return!1;if(i&&"clone"===e)return e;if("function"==typeof e)return t(e(o,a,n,r),i)(o,a,n,r);var l=(i?o:a).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var i={},o=e.group;o&&"object"==Cn(o)||(o={name:o}),i.name=o.name,i.checkPull=t(o.pull,!0),i.checkPut=t(o.put),i.revertClone=o.revertClone,e.group=i},es=function(){!Kr&&fr&&Gn(fr,"display","none")},ts=function(){!Kr&&fr&&Gn(fr,"display","")};Zr&&!On&&document.addEventListener("click",function(e){if(Rr)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Rr=!1,!1},!0);var is=function(e){if(_r){var t=function(e,t){var i;return Fr.some(function(o){var a=o[rr].options.emptyInsertThreshold;if(a&&!Kn(o)){var n=Yn(o),r=e>=n.left-a&&e<=n.right+a,s=t>=n.top-a&&t<=n.bottom+a;return r&&s?i=o:void 0}}),i}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var i={};for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);i.target=i.rootEl=t,i.preventDefault=void 0,i.stopPropagation=void 0,t[rr]._onDragOver(i)}}},os=function(e){_r&&_r.parentNode[rr]._isOutsideThisEl(e.target)};function as(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Sn({},t),e[rr]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Jr(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==as.supportPointer&&"PointerEvent"in window&&(!Tn||zn),emptyInsertThreshold:5};for(var o in dr.initializePlugins(this,e,i),i)!(o in t)&&(t[o]=i[o]);for(var a in Qr(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&qr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?In(e,"pointerdown",this._onTapStart):(In(e,"mousedown",this._onTapStart),In(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(In(e,"dragover",this),In(e,"dragenter",this)),Fr.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Sn(this,sr())}function ns(e,t,i,o,a,n,r,s){var l,c,d=e[rr],u=d.options.onMove;return!window.CustomEvent||An||Pn?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=i,l.draggedRect=o,l.related=a||t,l.relatedRect=n||Yn(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function rs(e){e.draggable=!1}function ss(){Vr=!1}function ls(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,o=0;i--;)o+=t.charCodeAt(i);return o.toString(36)}function cs(e){return setTimeout(e,0)}function ds(e){return clearTimeout(e)}as.prototype={constructor:as,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(Nr=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,_r):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,i=this.el,o=this.options,a=o.preventOnFilter,n=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=o.filter;if(function(e){Wr.length=0;var t=e.getElementsByTagName("input"),i=t.length;for(;i--;){var o=t[i];o.checked&&Wr.push(o)}}(i),!_r&&!(/mousedown|pointerdown/.test(n)&&0!==e.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Tn||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Rn(s,o.draggable,i,!1))&&s.animated||vr===s)){if(kr=Jn(s),Sr=Jn(s,o.draggable),"function"==typeof c){if(c.call(this,e,s,this))return hr({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),pr("filter",t,{evt:e}),void(a&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=Rn(l,o.trim(),i,!1))return hr({sortable:t,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),pr("filter",t,{evt:e}),!0})))return void(a&&e.preventDefault());o.handle&&!Rn(l,o.handle,i,!1)||this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,i){var o,a=this,n=a.el,r=a.options,s=n.ownerDocument;if(i&&!_r&&i.parentNode===n){var l=Yn(i);if(gr=n,mr=(_r=i).parentNode,yr=_r.nextSibling,vr=i,$r=r.group,as.dragged=_r,Dr={target:_r,clientX:(t||e).clientX,clientY:(t||e).clientY},Tr=Dr.clientX-l.left,zr=Dr.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,_r.style["will-change"]="all",o=function(){pr("delayEnded",a,{evt:e}),as.eventCanceled?a._onDrop():(a._disableDelayedDragEvents(),!Mn&&a.nativeDraggable&&(_r.draggable=!0),a._triggerDragStart(e,t),hr({sortable:a,name:"choose",originalEvent:e}),Un(_r,r.chosenClass,!0))},r.ignore.split(",").forEach(function(e){Wn(_r,e.trim(),rs)}),In(s,"dragover",is),In(s,"mousemove",is),In(s,"touchmove",is),r.supportPointer?(In(s,"pointerup",a._onDrop),!this.nativeDraggable&&In(s,"pointercancel",a._onDrop)):(In(s,"mouseup",a._onDrop),In(s,"touchend",a._onDrop),In(s,"touchcancel",a._onDrop)),Mn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,_r.draggable=!0),pr("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(Pn||An))o();else{if(as.eventCanceled)return void this._onDrop();r.supportPointer?(In(s,"pointerup",a._disableDelayedDrag),In(s,"pointercancel",a._disableDelayedDrag)):(In(s,"mouseup",a._disableDelayedDrag),In(s,"touchend",a._disableDelayedDrag),In(s,"touchcancel",a._disableDelayedDrag)),In(s,"mousemove",a._delayedDragTouchMoveHandler),In(s,"touchmove",a._delayedDragTouchMoveHandler),r.supportPointer&&In(s,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=setTimeout(o,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){_r&&rs(_r),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;jn(e,"mouseup",this._disableDelayedDrag),jn(e,"touchend",this._disableDelayedDrag),jn(e,"touchcancel",this._disableDelayedDrag),jn(e,"pointerup",this._disableDelayedDrag),jn(e,"pointercancel",this._disableDelayedDrag),jn(e,"mousemove",this._delayedDragTouchMoveHandler),jn(e,"touchmove",this._delayedDragTouchMoveHandler),jn(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?In(document,"pointermove",this._onTouchMove):In(document,t?"touchmove":"mousemove",this._onTouchMove):(In(_r,"dragend",this),In(gr,"dragstart",this._onDragStart));try{document.selection?cs(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Lr=!1,gr&&_r){pr("dragStarted",this,{evt:t}),this.nativeDraggable&&In(document,"dragover",os);var i=this.options;!e&&Un(_r,i.dragClass,!1),Un(_r,i.ghostClass,!0),as.active=this,e&&this._appendGhost(),hr({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Ar){this._lastX=Ar.clientX,this._lastY=Ar.clientY,es();for(var e=document.elementFromPoint(Ar.clientX,Ar.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Ar.clientX,Ar.clientY))!==t;)t=e;if(_r.parentNode[rr]._isOutsideThisEl(e),t)do{if(t[rr]){if(t[rr]._onDragOver({clientX:Ar.clientX,clientY:Ar.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=Ln(t));ts()}},_onTouchMove:function(e){if(Dr){var t=this.options,i=t.fallbackTolerance,o=t.fallbackOffset,a=e.touches?e.touches[0]:e,n=fr&&Vn(fr,!0),r=fr&&n&&n.a,s=fr&&n&&n.d,l=Yr&&Br&&Qn(Br),c=(a.clientX-Dr.clientX+o.x)/(r||1)+(l?l[0]-Gr[0]:0)/(r||1),d=(a.clientY-Dr.clientY+o.y)/(s||1)+(l?l[1]-Gr[1]:0)/(s||1);if(!as.active&&!Lr){if(i&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(fr){n?(n.e+=c-(Pr||0),n.f+=d-(Mr||0)):n={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(n.a,",").concat(n.b,",").concat(n.c,",").concat(n.d,",").concat(n.e,",").concat(n.f,")");Gn(fr,"webkitTransform",u),Gn(fr,"mozTransform",u),Gn(fr,"msTransform",u),Gn(fr,"transform",u),Pr=c,Mr=d,Ar=a}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!fr){var e=this.options.fallbackOnBody?document.body:gr,t=Yn(_r,!0,Yr,!0,e),i=this.options;if(Yr){for(Br=e;"static"===Gn(Br,"position")&&"none"===Gn(Br,"transform")&&Br!==document;)Br=Br.parentNode;Br!==document.body&&Br!==document.documentElement?(Br===document&&(Br=Zn()),t.top+=Br.scrollTop,t.left+=Br.scrollLeft):Br=Zn(),Gr=Qn(Br)}Un(fr=_r.cloneNode(!0),i.ghostClass,!1),Un(fr,i.fallbackClass,!0),Un(fr,i.dragClass,!0),Gn(fr,"transition",""),Gn(fr,"transform",""),Gn(fr,"box-sizing","border-box"),Gn(fr,"margin",0),Gn(fr,"top",t.top),Gn(fr,"left",t.left),Gn(fr,"width",t.width),Gn(fr,"height",t.height),Gn(fr,"opacity","0.8"),Gn(fr,"position",Yr?"absolute":"fixed"),Gn(fr,"zIndex","100000"),Gn(fr,"pointerEvents","none"),as.ghost=fr,e.appendChild(fr),Gn(fr,"transform-origin",Tr/parseInt(fr.style.width)*100+"% "+zr/parseInt(fr.style.height)*100+"%")}},_onDragStart:function(e,t){var i=this,o=e.dataTransfer,a=i.options;pr("dragStart",this,{evt:e}),as.eventCanceled?this._onDrop():(pr("setupClone",this),as.eventCanceled||((br=ar(_r)).removeAttribute("id"),br.draggable=!1,br.style["will-change"]="",this._hideClone(),Un(br,this.options.chosenClass,!1),as.clone=br),i.cloneId=cs(function(){pr("clone",i),as.eventCanceled||(i.options.removeCloneOnHide||gr.insertBefore(br,_r),i._hideClone(),hr({sortable:i,name:"clone"}))}),!t&&Un(_r,a.dragClass,!0),t?(Rr=!0,i._loopId=setInterval(i._emulateDragOver,50)):(jn(document,"mouseup",i._onDrop),jn(document,"touchend",i._onDrop),jn(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",a.setData&&a.setData.call(i,o,_r)),In(document,"drop",i),Gn(_r,"transform","translateZ(0)")),Lr=!0,i._dragStartId=cs(i._dragStarted.bind(i,t,e)),In(document,"selectstart",i),Or=!0,window.getSelection().removeAllRanges(),Tn&&Gn(document.body,"user-select","none"))},_onDragOver:function(e){var t,i,o,a,n=this.el,r=e.target,s=this.options,l=s.group,c=as.active,d=$r===l,u=s.sort,p=Cr||c,h=this,_=!1;if(!Vr){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),r=Rn(r,s.draggable,n,!0),A("dragOver"),as.eventCanceled)return _;if(_r.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||h._ignoreWhileAnimating===r)return M(!1);if(Rr=!1,c&&!s.disabled&&(d?u||(o=mr!==gr):Cr===this||(this.lastPutMode=$r.checkPull(this,c,_r,e))&&l.checkPut(this,c,_r,e))){if(a="vertical"===this._getDirection(e,r),t=Yn(_r),A("dragOverValid"),as.eventCanceled)return _;if(o)return mr=gr,P(),this._hideClone(),A("revert"),as.eventCanceled||(yr?gr.insertBefore(_r,yr):gr.appendChild(_r)),M(!0);var m=Kn(n,s.draggable);if(!m||function(e,t,i){var o=Yn(Kn(i.el,i.options.draggable)),a=nr(i.el,i.options,fr),n=10;return t?e.clientX>a.right+n||e.clientY>o.bottom&&e.clientX>o.left:e.clientY>a.bottom+n||e.clientX>o.right&&e.clientY>o.top}(e,a,this)&&!m.animated){if(m===_r)return M(!1);if(m&&n===e.target&&(r=m),r&&(i=Yn(r)),!1!==ns(gr,n,_r,t,r,i,e,!!r))return P(),m&&m.nextSibling?n.insertBefore(_r,m.nextSibling):n.appendChild(_r),mr=n,T(),M(!0)}else if(m&&function(e,t,i){var o=Yn(qn(i.el,0,i.options,!0)),a=nr(i.el,i.options,fr),n=10;return t?e.clientX<a.left-n||e.clientY<o.top&&e.clientX<o.right:e.clientY<a.top-n||e.clientY<o.bottom&&e.clientX<o.left}(e,a,this)){var f=qn(n,0,s,!0);if(f===_r)return M(!1);if(i=Yn(r=f),!1!==ns(gr,n,_r,t,r,i,e,!1))return P(),n.insertBefore(_r,f),mr=n,T(),M(!0)}else if(r.parentNode===n){i=Yn(r);var g,y,v,b=_r.parentNode!==n,w=!function(e,t,i){var o=i?e.left:e.top,a=i?e.right:e.bottom,n=i?e.width:e.height,r=i?t.left:t.top,s=i?t.right:t.bottom,l=i?t.width:t.height;return o===r||a===s||o+n/2===r+l/2}(_r.animated&&_r.toRect||t,r.animated&&r.toRect||i,a),k=a?"top":"left",x=Xn(r,"top","top")||Xn(_r,"top","top"),S=x?x.scrollTop:void 0;if(Nr!==r&&(y=i[k],Hr=!1,Ur=!w&&s.invertSwap||b),g=function(e,t,i,o,a,n,r,s){var l=o?e.clientY:e.clientX,c=o?i.height:i.width,d=o?i.top:i.left,u=o?i.bottom:i.right,p=!1;if(!r)if(s&&jr<c*a){if(!Hr&&(1===Ir?l>d+c*n/2:l<u-c*n/2)&&(Hr=!0),Hr)p=!0;else if(1===Ir?l<d+jr:l>u-jr)return-Ir}else if(l>d+c*(1-a)/2&&l<u-c*(1-a)/2)return function(e){return Jn(_r)<Jn(e)?1:-1}(t);if((p=p||r)&&(l<d+c*n/2||l>u-c*n/2))return l>d+c/2?1:-1;return 0}(e,r,i,a,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ur,Nr===r),0!==g){var E=Jn(_r);do{E-=g,v=mr.children[E]}while(v&&("none"===Gn(v,"display")||v===fr))}if(0===g||v===r)return M(!1);Nr=r,Ir=g;var $=r.nextElementSibling,C=!1,D=ns(gr,n,_r,t,r,i,e,C=1===g);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),Vr=!0,setTimeout(ss,30),P(),C&&!$?n.appendChild(_r):r.parentNode.insertBefore(_r,C?$:r),x&&or(x,0,S-x.scrollTop),mr=_r.parentNode,void 0===y||Ur||(jr=Math.abs(y-Yn(r)[k])),T(),M(!0)}if(n.contains(_r))return M(!1)}return!1}function A(s,l){pr(s,h,$n({evt:e,isOwner:d,axis:a?"vertical":"horizontal",revert:o,dragRect:t,targetRect:i,canSort:u,fromSortable:p,target:r,completed:M,onMove:function(i,o){return ns(gr,n,_r,t,i,Yn(i),e,o)},changed:T},l))}function P(){A("dragOverAnimationCapture"),h.captureAnimationState(),h!==p&&p.captureAnimationState()}function M(t){return A("dragOverCompleted",{insertion:t}),t&&(d?c._hideClone():c._showClone(h),h!==p&&(Un(_r,Cr?Cr.options.ghostClass:c.options.ghostClass,!1),Un(_r,s.ghostClass,!0)),Cr!==h&&h!==as.active?Cr=h:h===as.active&&Cr&&(Cr=null),p===h&&(h._ignoreWhileAnimating=r),h.animateAll(function(){A("dragOverAnimationComplete"),h._ignoreWhileAnimating=null}),h!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===_r&&!_r.animated||r===n&&!r.animated)&&(Nr=null),s.dragoverBubble||e.rootEl||r===document||(_r.parentNode[rr]._isOutsideThisEl(e.target),!t&&is(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),_=!0}function T(){xr=Jn(_r),Er=Jn(_r,s.draggable),hr({sortable:h,name:"change",toEl:n,newIndex:xr,newDraggableIndex:Er,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){jn(document,"mousemove",this._onTouchMove),jn(document,"touchmove",this._onTouchMove),jn(document,"pointermove",this._onTouchMove),jn(document,"dragover",is),jn(document,"mousemove",is),jn(document,"touchmove",is)},_offUpEvents:function(){var e=this.el.ownerDocument;jn(e,"mouseup",this._onDrop),jn(e,"touchend",this._onDrop),jn(e,"pointerup",this._onDrop),jn(e,"pointercancel",this._onDrop),jn(e,"touchcancel",this._onDrop),jn(document,"selectstart",this)},_onDrop:function(e){var t=this.el,i=this.options;xr=Jn(_r),Er=Jn(_r,i.draggable),pr("drop",this,{evt:e}),mr=_r&&_r.parentNode,xr=Jn(_r),Er=Jn(_r,i.draggable),as.eventCanceled||(Lr=!1,Ur=!1,Hr=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ds(this.cloneId),ds(this._dragStartId),this.nativeDraggable&&(jn(document,"drop",this),jn(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Tn&&Gn(document.body,"user-select",""),Gn(_r,"transform",""),e&&(Or&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),fr&&fr.parentNode&&fr.parentNode.removeChild(fr),(gr===mr||Cr&&"clone"!==Cr.lastPutMode)&&br&&br.parentNode&&br.parentNode.removeChild(br),_r&&(this.nativeDraggable&&jn(_r,"dragend",this),rs(_r),_r.style["will-change"]="",Or&&!Lr&&Un(_r,Cr?Cr.options.ghostClass:this.options.ghostClass,!1),Un(_r,this.options.chosenClass,!1),hr({sortable:this,name:"unchoose",toEl:mr,newIndex:null,newDraggableIndex:null,originalEvent:e}),gr!==mr?(xr>=0&&(hr({rootEl:mr,name:"add",toEl:mr,fromEl:gr,originalEvent:e}),hr({sortable:this,name:"remove",toEl:mr,originalEvent:e}),hr({rootEl:mr,name:"sort",toEl:mr,fromEl:gr,originalEvent:e}),hr({sortable:this,name:"sort",toEl:mr,originalEvent:e})),Cr&&Cr.save()):xr!==kr&&xr>=0&&(hr({sortable:this,name:"update",toEl:mr,originalEvent:e}),hr({sortable:this,name:"sort",toEl:mr,originalEvent:e})),as.active&&(null!=xr&&-1!==xr||(xr=kr,Er=Sr),hr({sortable:this,name:"end",toEl:mr,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){pr("nulling",this),gr=_r=mr=fr=yr=br=vr=wr=Dr=Ar=Or=xr=Er=kr=Sr=Nr=Ir=Cr=$r=as.dragged=as.ghost=as.clone=as.active=null;var e=this.el;Wr.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Wr.length=Pr=Mr=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":_r&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],i=this.el.children,o=0,a=i.length,n=this.options;o<a;o++)Rn(e=i[o],n.draggable,this.el,!1)&&t.push(e.getAttribute(n.dataIdAttr)||ls(e));return t},sort:function(e,t){var i={},o=this.el;this.toArray().forEach(function(e,t){var a=o.children[t];Rn(a,this.options.draggable,o,!1)&&(i[e]=a)},this),t&&this.captureAnimationState(),e.forEach(function(e){i[e]&&(o.removeChild(i[e]),o.appendChild(i[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return Rn(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var i=this.options;if(void 0===t)return i[e];var o=dr.modifyOption(this,e,t);i[e]=void 0!==o?o:t,"group"===e&&Qr(i)},destroy:function(){pr("destroy",this);var e=this.el;e[rr]=null,jn(e,"mousedown",this._onTapStart),jn(e,"touchstart",this._onTapStart),jn(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(jn(e,"dragover",this),jn(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Fr.splice(Fr.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!wr){if(pr("hideClone",this),as.eventCanceled)return;Gn(br,"display","none"),this.options.removeCloneOnHide&&br.parentNode&&br.parentNode.removeChild(br),wr=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(wr){if(pr("showClone",this),as.eventCanceled)return;_r.parentNode!=gr||this.options.group.revertClone?yr?gr.insertBefore(br,yr):gr.appendChild(br):gr.insertBefore(br,_r),this.options.group.revertClone&&this.animate(_r,br),Gn(br,"display",""),wr=!1}}else this._hideClone()}},Zr&&In(document,"touchmove",function(e){(as.active||Lr)&&e.cancelable&&e.preventDefault()}),as.utils={on:In,off:jn,css:Gn,find:Wn,is:function(e,t){return!!Rn(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},throttle:ir,closest:Rn,toggleClass:Un,clone:ar,index:Jn,nextTick:cs,cancelNextTick:ds,detectDirection:Jr,getChild:qn,expando:rr},as.get=function(e){return e[rr]},as.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(as.utils=$n($n({},as.utils),e.utils)),dr.mount(e)})},as.create=function(e,t){return new as(e,t)},as.version="1.15.7";var us,ps,hs,_s,ms,fs,gs=[],ys=!1;function vs(){gs.forEach(function(e){clearInterval(e.pid)}),gs=[]}function bs(){clearInterval(fs)}var ws=ir(function(e,t,i,o){if(t.scroll){var a,n=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,c=Zn(),d=!1;ps!==i&&(ps=i,vs(),us=t.scroll,a=t.scrollFn,!0===us&&(us=er(i,!0)));var u=0,p=us;do{var h=p,_=Yn(h),m=_.top,f=_.bottom,g=_.left,y=_.right,v=_.width,b=_.height,w=void 0,k=void 0,x=h.scrollWidth,S=h.scrollHeight,E=Gn(h),$=h.scrollLeft,C=h.scrollTop;h===c?(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX||"visible"===E.overflowX),k=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY||"visible"===E.overflowY)):(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX),k=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY));var D=w&&(Math.abs(y-n)<=s&&$+v<x)-(Math.abs(g-n)<=s&&!!$),A=k&&(Math.abs(f-r)<=s&&C+b<S)-(Math.abs(m-r)<=s&&!!C);if(!gs[u])for(var P=0;P<=u;P++)gs[P]||(gs[P]={});gs[u].vx==D&&gs[u].vy==A&&gs[u].el===h||(gs[u].el=h,gs[u].vx=D,gs[u].vy=A,clearInterval(gs[u].pid),0==D&&0==A||(d=!0,gs[u].pid=setInterval(function(){o&&0===this.layer&&as.active._onTouchMove(ms);var t=gs[this.layer].vy?gs[this.layer].vy*l:0,i=gs[this.layer].vx?gs[this.layer].vx*l:0;"function"==typeof a&&"continue"!==a.call(as.dragged.parentNode[rr],i,t,e,ms,gs[this.layer].el)||or(gs[this.layer].el,i,t)}.bind({layer:u}),24))),u++}while(t.bubbleScroll&&p!==c&&(p=er(p,!1)));ys=d}},30),ks=function(e){var t=e.originalEvent,i=e.putSortable,o=e.dragEl,a=e.activeSortable,n=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=i||a;r();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(n("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function xs(){}function Ss(){}
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Es(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},$s.apply(null,arguments)}function Cs(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)}return i}function Ds(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Cs(Object(i),!0).forEach(function(t){Es(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Cs(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function As(e){return As="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},As(e)}xs.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=qn(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(t,o):this.sortable.el.appendChild(t),this.sortable.animateAll(),i&&i.animateAll()},drop:ks},Sn(xs,{pluginName:"revertOnSpill"}),Ss.prototype={onSpill:function(e){var t=e.dragEl,i=e.putSortable||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:ks},Sn(Ss,{pluginName:"removeOnSpill"}),as.mount(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?In(document,"dragover",this._handleAutoScroll):this.options.supportPointer?In(document,"pointermove",this._handleFallbackAutoScroll):t.touches?In(document,"touchmove",this._handleFallbackAutoScroll):In(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?jn(document,"dragover",this._handleAutoScroll):(jn(document,"pointermove",this._handleFallbackAutoScroll),jn(document,"touchmove",this._handleFallbackAutoScroll),jn(document,"mousemove",this._handleFallbackAutoScroll)),bs(),vs(),clearTimeout(Fn),Fn=void 0},nulling:function(){ms=ps=us=ys=fs=hs=_s=null,gs.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var i=this,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,n=document.elementFromPoint(o,a);if(ms=e,t||this.options.forceAutoScrollFallback||Pn||An||Tn){ws(e,this.options,n,t);var r=er(n,!0);!ys||fs&&o===hs&&a===_s||(fs&&bs(),fs=setInterval(function(){var n=er(document.elementFromPoint(o,a),!0);n!==r&&(r=n,vs()),ws(e,i.options,n,t)},10),hs=o,_s=a)}else{if(!this.options.bubbleScroll||er(n,!0)===Zn())return void vs();ws(e,this.options,er(n,!1),!1)}}},Sn(e,{pluginName:"scroll",initializeByDefault:!0})}),as.mount(Ss,xs);function Ps(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var Ms=Ps(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Ts=Ps(/Edge/i),zs=Ps(/firefox/i),Os=Ps(/safari/i)&&!Ps(/chrome/i)&&!Ps(/android/i),Ns=Ps(/iP(ad|od|hone)/i),Is=Ps(/chrome/i)&&Ps(/android/i),js={capture:!1,passive:!1};function Bs(e,t,i){e.addEventListener(t,i,!Ms&&js)}function Ls(e,t,i){e.removeEventListener(t,i,!Ms&&js)}function Rs(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function Fs(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function Hs(e,t,i,o){if(e){i=i||document;do{if(null!=t&&(">"===t[0]?e.parentNode===i&&Rs(e,t):Rs(e,t))||o&&e===i)return e;if(e===i)break}while(e=Fs(e))}return null}var Us,Gs=/\s+/g;function Vs(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(Gs," ").replace(" "+t+" "," ");e.className=(o+(i?" "+t:"")).replace(Gs," ")}}function Ws(e,t,i){var o=e&&e.style;if(o){if(void 0===i)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),void 0===t?i:i[t];t in o||-1!==t.indexOf("webkit")||(t="-webkit-"+t),o[t]=i+("string"==typeof i?"":"px")}}function Zs(e,t){var i="";if("string"==typeof e)i=e;else do{var o=Ws(e,"transform");o&&"none"!==o&&(i=o+" "+i)}while(!t&&(e=e.parentNode));var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return a&&new a(i)}function Ys(e,t,i){if(e){var o=e.getElementsByTagName(t),a=0,n=o.length;if(i)for(;a<n;a++)i(o[a],a);return o}return[]}function Xs(){var e=document.scrollingElement;return e||document.documentElement}function qs(e,t,i,o,a){if(e.getBoundingClientRect||e===window){var n,r,s,l,c,d,u;if(e!==window&&e.parentNode&&e!==Xs()?(r=(n=e.getBoundingClientRect()).top,s=n.left,l=n.bottom,c=n.right,d=n.height,u=n.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||i)&&e!==window&&(a=a||e.parentNode,!Ms))do{if(a&&a.getBoundingClientRect&&("none"!==Ws(a,"transform")||i&&"static"!==Ws(a,"position"))){var p=a.getBoundingClientRect();r-=p.top+parseInt(Ws(a,"border-top-width")),s-=p.left+parseInt(Ws(a,"border-left-width")),l=r+n.height,c=s+n.width;break}}while(a=a.parentNode);if(o&&e!==window){var h=Zs(a||e),_=h&&h.a,m=h&&h.d;h&&(l=(r/=m)+(d/=m),c=(s/=_)+(u/=_))}return{top:r,left:s,bottom:l,right:c,width:u,height:d}}}function Ks(e,t,i){for(var o=il(e,!0),a=qs(e)[t];o;){if(!(a>=qs(o)[i]))return o;if(o===Xs())break;o=il(o,!1)}return!1}function Js(e,t,i,o){for(var a=0,n=0,r=e.children;n<r.length;){if("none"!==r[n].style.display&&r[n]!==rc.ghost&&(o||r[n]!==rc.dragged)&&Hs(r[n],i.draggable,e,!1)){if(a===t)return r[n];a++}n++}return null}function Qs(e,t){for(var i=e.lastElementChild;i&&(i===rc.ghost||"none"===Ws(i,"display")||t&&!Rs(i,t));)i=i.previousElementSibling;return i||null}function el(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===rc.clone||t&&!Rs(e,t)||i++;return i}function tl(e){var t=0,i=0,o=Xs();if(e)do{var a=Zs(e),n=a.a,r=a.d;t+=e.scrollLeft*n,i+=e.scrollTop*r}while(e!==o&&(e=e.parentNode));return[t,i]}function il(e,t){if(!e||!e.getBoundingClientRect)return Xs();var i=e,o=!1;do{if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var a=Ws(i);if(i.clientWidth<i.scrollWidth&&("auto"==a.overflowX||"scroll"==a.overflowX)||i.clientHeight<i.scrollHeight&&("auto"==a.overflowY||"scroll"==a.overflowY)){if(!i.getBoundingClientRect||i===document.body)return Xs();if(o||t)return i;o=!0}}}while(i=i.parentNode);return Xs()}function ol(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function al(e,t){return function(){if(!Us){var i=arguments;1===i.length?e.call(this,i[0]):e.apply(this,i),Us=setTimeout(function(){Us=void 0},t)}}}function nl(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function rl(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function sl(e,t,i){var o={};return Array.from(e.children).forEach(function(a){var n,r,s,l;if(Hs(a,t.draggable,e,!1)&&!a.animated&&a!==i){var c=qs(a);o.left=Math.min(null!==(n=o.left)&&void 0!==n?n:1/0,c.left),o.top=Math.min(null!==(r=o.top)&&void 0!==r?r:1/0,c.top),o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var ll="Sortable"+(new Date).getTime();function cl(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(e){if("none"!==Ws(e,"display")&&e!==rc.ghost){t.push({target:e,rect:qs(e)});var i=Ds({},t[t.length-1].rect);if(e.thisAnimationDuration){var o=Zs(e,!0);o&&(i.top-=o.f,i.left-=o.e)}e.fromRect=i}})},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var i in e)if(e.hasOwnProperty(i))for(var o in t)if(t.hasOwnProperty(o)&&t[o]===e[i][o])return Number(i);return-1}(t,{target:e}),1)},animateAll:function(i){var o=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof i&&i());var a=!1,n=0;t.forEach(function(e){var t=0,i=e.target,r=i.fromRect,s=qs(i),l=i.prevFromRect,c=i.prevToRect,d=e.rect,u=Zs(i,!0);u&&(s.top-=u.f,s.left-=u.e),i.toRect=s,i.thisAnimationDuration&&ol(l,s)&&!ol(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(t=function(e,t,i,o){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*o.animation}(d,l,c,o.options)),ol(s,r)||(i.prevFromRect=r,i.prevToRect=s,t||(t=o.options.animation),o.animate(i,d,s,t)),t&&(a=!0,n=Math.max(n,t),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},t),i.thisAnimationDuration=t)}),clearTimeout(e),a?e=setTimeout(function(){"function"==typeof i&&i()},n):"function"==typeof i&&i(),t=[]},animate:function(e,t,i,o){if(o){Ws(e,"transition",""),Ws(e,"transform","");var a=Zs(this.el),n=a&&a.a,r=a&&a.d,s=(t.left-i.left)/(n||1),l=(t.top-i.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,Ws(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Ws(e,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),Ws(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){Ws(e,"transition",""),Ws(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},o)}}}}var dl=[],ul={initializeByDefault:!0},pl={mount:function(e){for(var t in ul)ul.hasOwnProperty(t)&&!(t in e)&&(e[t]=ul[t]);dl.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),dl.push(e)},pluginEvent:function(e,t,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var a=e+"Global";dl.forEach(function(o){t[o.pluginName]&&(t[o.pluginName][a]&&t[o.pluginName][a](Ds({sortable:t},i)),t.options[o.pluginName]&&t[o.pluginName][e]&&t[o.pluginName][e](Ds({sortable:t},i)))})},initializePlugins:function(e,t,i,o){for(var a in dl.forEach(function(o){var a=o.pluginName;if(e.options[a]||o.initializeByDefault){var n=new o(e,t,e.options);n.sortable=e,n.options=e.options,e[a]=n,$s(i,n.defaults)}}),e.options)if(e.options.hasOwnProperty(a)){var n=this.modifyOption(e,a,e.options[a]);void 0!==n&&(e.options[a]=n)}},getEventProperties:function(e,t){var i={};return dl.forEach(function(o){"function"==typeof o.eventProperties&&$s(i,o.eventProperties.call(t[o.pluginName],e))}),i},modifyOption:function(e,t,i){var o;return dl.forEach(function(a){e[a.pluginName]&&a.optionListeners&&"function"==typeof a.optionListeners[t]&&(o=a.optionListeners[t].call(e[a.pluginName],i))}),o}};var hl=["evt"],_l=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.evt,a=function(e,t){if(null==e)return{};var i,o,a=function(e,t){if(null==e)return{};var i={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;i[o]=e[o]}return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],-1===t.indexOf(i)&&{}.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}(i,hl);pl.pluginEvent.bind(rc)(e,t,Ds({dragEl:fl,parentEl:gl,ghostEl:yl,rootEl:vl,nextEl:bl,lastDownEl:wl,cloneEl:kl,cloneHidden:xl,dragStarted:Il,putSortable:Al,activeSortable:rc.active,originalEvent:o,oldIndex:Sl,oldDraggableIndex:$l,newIndex:El,newDraggableIndex:Cl,hideGhostForTarget:ic,unhideGhostForTarget:oc,cloneNowHidden:function(){xl=!0},cloneNowShown:function(){xl=!1},dispatchSortableEvent:function(e){ml({sortable:t,name:e,originalEvent:o})}},a))};function ml(e){!function(e){var t=e.sortable,i=e.rootEl,o=e.name,a=e.targetEl,n=e.cloneEl,r=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,d=e.oldDraggableIndex,u=e.newDraggableIndex,p=e.originalEvent,h=e.putSortable,_=e.extraEventProperties;if(t=t||i&&i[ll]){var m,f=t.options,g="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||Ms||Ts?(m=document.createEvent("Event")).initEvent(o,!0,!0):m=new CustomEvent(o,{bubbles:!0,cancelable:!0}),m.to=r||i,m.from=s||i,m.item=a||i,m.clone=n,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=d,m.newDraggableIndex=u,m.originalEvent=p,m.pullMode=h?h.lastPutMode:void 0;var y=Ds(Ds({},_),pl.getEventProperties(o,t));for(var v in y)m[v]=y[v];i&&i.dispatchEvent(m),f[g]&&f[g].call(t,m)}}(Ds({putSortable:Al,cloneEl:kl,targetEl:fl,rootEl:vl,oldIndex:Sl,oldDraggableIndex:$l,newIndex:El,newDraggableIndex:Cl},e))}var fl,gl,yl,vl,bl,wl,kl,xl,Sl,El,$l,Cl,Dl,Al,Pl,Ml,Tl,zl,Ol,Nl,Il,jl,Bl,Ll,Rl,Fl=!1,Hl=!1,Ul=[],Gl=!1,Vl=!1,Wl=[],Zl=!1,Yl=[],Xl="undefined"!=typeof document,ql=Ns,Kl=Ts||Ms?"cssFloat":"float",Jl=Xl&&!Is&&!Ns&&"draggable"in document.createElement("div"),Ql=function(){if(Xl){if(Ms)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),ec=function(e,t){var i=Ws(e),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),a=Js(e,0,t),n=Js(e,1,t),r=a&&Ws(a),s=n&&Ws(n),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+qs(a).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+qs(n).width;if("flex"===i.display)return"column"===i.flexDirection||"column-reverse"===i.flexDirection?"vertical":"horizontal";if("grid"===i.display)return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!n||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return a&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=o&&"none"===i[Kl]||n&&"none"===i[Kl]&&l+c>o)?"vertical":"horizontal"},tc=function(e){function t(e,i){return function(o,a,n,r){var s=o.options.group.name&&a.options.group.name&&o.options.group.name===a.options.group.name;if(null==e&&(i||s))return!0;if(null==e||!1===e)return!1;if(i&&"clone"===e)return e;if("function"==typeof e)return t(e(o,a,n,r),i)(o,a,n,r);var l=(i?o:a).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var i={},o=e.group;o&&"object"==As(o)||(o={name:o}),i.name=o.name,i.checkPull=t(o.pull,!0),i.checkPut=t(o.put),i.revertClone=o.revertClone,e.group=i},ic=function(){!Ql&&yl&&Ws(yl,"display","none")},oc=function(){!Ql&&yl&&Ws(yl,"display","")};Xl&&!Is&&document.addEventListener("click",function(e){if(Hl)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Hl=!1,!1},!0);var ac=function(e){if(fl){var t=function(e,t){var i;return Ul.some(function(o){var a=o[ll].options.emptyInsertThreshold;if(a&&!Qs(o)){var n=qs(o),r=e>=n.left-a&&e<=n.right+a,s=t>=n.top-a&&t<=n.bottom+a;return r&&s?i=o:void 0}}),i}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var i={};for(var o in e)e.hasOwnProperty(o)&&(i[o]=e[o]);i.target=i.rootEl=t,i.preventDefault=void 0,i.stopPropagation=void 0,t[ll]._onDragOver(i)}}},nc=function(e){fl&&fl.parentNode[ll]._isOutsideThisEl(e.target)};function rc(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=$s({},t),e[ll]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ec(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==rc.supportPointer&&"PointerEvent"in window&&(!Os||Ns),emptyInsertThreshold:5};for(var o in pl.initializePlugins(this,e,i),i)!(o in t)&&(t[o]=i[o]);for(var a in tc(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&Jl,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Bs(e,"pointerdown",this._onTapStart):(Bs(e,"mousedown",this._onTapStart),Bs(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Bs(e,"dragover",this),Bs(e,"dragenter",this)),Ul.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),$s(this,cl())}function sc(e,t,i,o,a,n,r,s){var l,c,d=e[ll],u=d.options.onMove;return!window.CustomEvent||Ms||Ts?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=i,l.draggedRect=o,l.related=a||t,l.relatedRect=n||qs(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function lc(e){e.draggable=!1}function cc(){Zl=!1}function dc(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,o=0;i--;)o+=t.charCodeAt(i);return o.toString(36)}function uc(e){return setTimeout(e,0)}function pc(e){return clearTimeout(e)}rc.prototype={constructor:rc,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(jl=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,fl):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,i=this.el,o=this.options,a=o.preventOnFilter,n=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=o.filter;if(function(e){Yl.length=0;var t=e.getElementsByTagName("input"),i=t.length;for(;i--;){var o=t[i];o.checked&&Yl.push(o)}}(i),!fl&&!(/mousedown|pointerdown/.test(n)&&0!==e.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Os||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Hs(s,o.draggable,i,!1))&&s.animated||wl===s)){if(Sl=el(s),$l=el(s,o.draggable),"function"==typeof c){if(c.call(this,e,s,this))return ml({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:i,fromEl:i}),_l("filter",t,{evt:e}),void(a&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(o){if(o=Hs(l,o.trim(),i,!1))return ml({sortable:t,rootEl:o,name:"filter",targetEl:s,fromEl:i,toEl:i}),_l("filter",t,{evt:e}),!0})))return void(a&&e.preventDefault());o.handle&&!Hs(l,o.handle,i,!1)||this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,i){var o,a=this,n=a.el,r=a.options,s=n.ownerDocument;if(i&&!fl&&i.parentNode===n){var l=qs(i);if(vl=n,gl=(fl=i).parentNode,bl=fl.nextSibling,wl=i,Dl=r.group,rc.dragged=fl,Pl={target:fl,clientX:(t||e).clientX,clientY:(t||e).clientY},Ol=Pl.clientX-l.left,Nl=Pl.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,fl.style["will-change"]="all",o=function(){_l("delayEnded",a,{evt:e}),rc.eventCanceled?a._onDrop():(a._disableDelayedDragEvents(),!zs&&a.nativeDraggable&&(fl.draggable=!0),a._triggerDragStart(e,t),ml({sortable:a,name:"choose",originalEvent:e}),Vs(fl,r.chosenClass,!0))},r.ignore.split(",").forEach(function(e){Ys(fl,e.trim(),lc)}),Bs(s,"dragover",ac),Bs(s,"mousemove",ac),Bs(s,"touchmove",ac),r.supportPointer?(Bs(s,"pointerup",a._onDrop),!this.nativeDraggable&&Bs(s,"pointercancel",a._onDrop)):(Bs(s,"mouseup",a._onDrop),Bs(s,"touchend",a._onDrop),Bs(s,"touchcancel",a._onDrop)),zs&&this.nativeDraggable&&(this.options.touchStartThreshold=4,fl.draggable=!0),_l("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(Ts||Ms))o();else{if(rc.eventCanceled)return void this._onDrop();r.supportPointer?(Bs(s,"pointerup",a._disableDelayedDrag),Bs(s,"pointercancel",a._disableDelayedDrag)):(Bs(s,"mouseup",a._disableDelayedDrag),Bs(s,"touchend",a._disableDelayedDrag),Bs(s,"touchcancel",a._disableDelayedDrag)),Bs(s,"mousemove",a._delayedDragTouchMoveHandler),Bs(s,"touchmove",a._delayedDragTouchMoveHandler),r.supportPointer&&Bs(s,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=setTimeout(o,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){fl&&lc(fl),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Ls(e,"mouseup",this._disableDelayedDrag),Ls(e,"touchend",this._disableDelayedDrag),Ls(e,"touchcancel",this._disableDelayedDrag),Ls(e,"pointerup",this._disableDelayedDrag),Ls(e,"pointercancel",this._disableDelayedDrag),Ls(e,"mousemove",this._delayedDragTouchMoveHandler),Ls(e,"touchmove",this._delayedDragTouchMoveHandler),Ls(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?Bs(document,"pointermove",this._onTouchMove):Bs(document,t?"touchmove":"mousemove",this._onTouchMove):(Bs(fl,"dragend",this),Bs(vl,"dragstart",this._onDragStart));try{document.selection?uc(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Fl=!1,vl&&fl){_l("dragStarted",this,{evt:t}),this.nativeDraggable&&Bs(document,"dragover",nc);var i=this.options;!e&&Vs(fl,i.dragClass,!1),Vs(fl,i.ghostClass,!0),rc.active=this,e&&this._appendGhost(),ml({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Ml){this._lastX=Ml.clientX,this._lastY=Ml.clientY,ic();for(var e=document.elementFromPoint(Ml.clientX,Ml.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Ml.clientX,Ml.clientY))!==t;)t=e;if(fl.parentNode[ll]._isOutsideThisEl(e),t)do{if(t[ll]){if(t[ll]._onDragOver({clientX:Ml.clientX,clientY:Ml.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=Fs(t));oc()}},_onTouchMove:function(e){if(Pl){var t=this.options,i=t.fallbackTolerance,o=t.fallbackOffset,a=e.touches?e.touches[0]:e,n=yl&&Zs(yl,!0),r=yl&&n&&n.a,s=yl&&n&&n.d,l=ql&&Rl&&tl(Rl),c=(a.clientX-Pl.clientX+o.x)/(r||1)+(l?l[0]-Wl[0]:0)/(r||1),d=(a.clientY-Pl.clientY+o.y)/(s||1)+(l?l[1]-Wl[1]:0)/(s||1);if(!rc.active&&!Fl){if(i&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<i)return;this._onDragStart(e,!0)}if(yl){n?(n.e+=c-(Tl||0),n.f+=d-(zl||0)):n={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(n.a,",").concat(n.b,",").concat(n.c,",").concat(n.d,",").concat(n.e,",").concat(n.f,")");Ws(yl,"webkitTransform",u),Ws(yl,"mozTransform",u),Ws(yl,"msTransform",u),Ws(yl,"transform",u),Tl=c,zl=d,Ml=a}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!yl){var e=this.options.fallbackOnBody?document.body:vl,t=qs(fl,!0,ql,!0,e),i=this.options;if(ql){for(Rl=e;"static"===Ws(Rl,"position")&&"none"===Ws(Rl,"transform")&&Rl!==document;)Rl=Rl.parentNode;Rl!==document.body&&Rl!==document.documentElement?(Rl===document&&(Rl=Xs()),t.top+=Rl.scrollTop,t.left+=Rl.scrollLeft):Rl=Xs(),Wl=tl(Rl)}Vs(yl=fl.cloneNode(!0),i.ghostClass,!1),Vs(yl,i.fallbackClass,!0),Vs(yl,i.dragClass,!0),Ws(yl,"transition",""),Ws(yl,"transform",""),Ws(yl,"box-sizing","border-box"),Ws(yl,"margin",0),Ws(yl,"top",t.top),Ws(yl,"left",t.left),Ws(yl,"width",t.width),Ws(yl,"height",t.height),Ws(yl,"opacity","0.8"),Ws(yl,"position",ql?"absolute":"fixed"),Ws(yl,"zIndex","100000"),Ws(yl,"pointerEvents","none"),rc.ghost=yl,e.appendChild(yl),Ws(yl,"transform-origin",Ol/parseInt(yl.style.width)*100+"% "+Nl/parseInt(yl.style.height)*100+"%")}},_onDragStart:function(e,t){var i=this,o=e.dataTransfer,a=i.options;_l("dragStart",this,{evt:e}),rc.eventCanceled?this._onDrop():(_l("setupClone",this),rc.eventCanceled||((kl=rl(fl)).removeAttribute("id"),kl.draggable=!1,kl.style["will-change"]="",this._hideClone(),Vs(kl,this.options.chosenClass,!1),rc.clone=kl),i.cloneId=uc(function(){_l("clone",i),rc.eventCanceled||(i.options.removeCloneOnHide||vl.insertBefore(kl,fl),i._hideClone(),ml({sortable:i,name:"clone"}))}),!t&&Vs(fl,a.dragClass,!0),t?(Hl=!0,i._loopId=setInterval(i._emulateDragOver,50)):(Ls(document,"mouseup",i._onDrop),Ls(document,"touchend",i._onDrop),Ls(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",a.setData&&a.setData.call(i,o,fl)),Bs(document,"drop",i),Ws(fl,"transform","translateZ(0)")),Fl=!0,i._dragStartId=uc(i._dragStarted.bind(i,t,e)),Bs(document,"selectstart",i),Il=!0,window.getSelection().removeAllRanges(),Os&&Ws(document.body,"user-select","none"))},_onDragOver:function(e){var t,i,o,a,n=this.el,r=e.target,s=this.options,l=s.group,c=rc.active,d=Dl===l,u=s.sort,p=Al||c,h=this,_=!1;if(!Zl){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),r=Hs(r,s.draggable,n,!0),A("dragOver"),rc.eventCanceled)return _;if(fl.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||h._ignoreWhileAnimating===r)return M(!1);if(Hl=!1,c&&!s.disabled&&(d?u||(o=gl!==vl):Al===this||(this.lastPutMode=Dl.checkPull(this,c,fl,e))&&l.checkPut(this,c,fl,e))){if(a="vertical"===this._getDirection(e,r),t=qs(fl),A("dragOverValid"),rc.eventCanceled)return _;if(o)return gl=vl,P(),this._hideClone(),A("revert"),rc.eventCanceled||(bl?vl.insertBefore(fl,bl):vl.appendChild(fl)),M(!0);var m=Qs(n,s.draggable);if(!m||function(e,t,i){var o=qs(Qs(i.el,i.options.draggable)),a=sl(i.el,i.options,yl),n=10;return t?e.clientX>a.right+n||e.clientY>o.bottom&&e.clientX>o.left:e.clientY>a.bottom+n||e.clientX>o.right&&e.clientY>o.top}(e,a,this)&&!m.animated){if(m===fl)return M(!1);if(m&&n===e.target&&(r=m),r&&(i=qs(r)),!1!==sc(vl,n,fl,t,r,i,e,!!r))return P(),m&&m.nextSibling?n.insertBefore(fl,m.nextSibling):n.appendChild(fl),gl=n,T(),M(!0)}else if(m&&function(e,t,i){var o=qs(Js(i.el,0,i.options,!0)),a=sl(i.el,i.options,yl),n=10;return t?e.clientX<a.left-n||e.clientY<o.top&&e.clientX<o.right:e.clientY<a.top-n||e.clientY<o.bottom&&e.clientX<o.left}(e,a,this)){var f=Js(n,0,s,!0);if(f===fl)return M(!1);if(i=qs(r=f),!1!==sc(vl,n,fl,t,r,i,e,!1))return P(),n.insertBefore(fl,f),gl=n,T(),M(!0)}else if(r.parentNode===n){i=qs(r);var g,y,v,b=fl.parentNode!==n,w=!function(e,t,i){var o=i?e.left:e.top,a=i?e.right:e.bottom,n=i?e.width:e.height,r=i?t.left:t.top,s=i?t.right:t.bottom,l=i?t.width:t.height;return o===r||a===s||o+n/2===r+l/2}(fl.animated&&fl.toRect||t,r.animated&&r.toRect||i,a),k=a?"top":"left",x=Ks(r,"top","top")||Ks(fl,"top","top"),S=x?x.scrollTop:void 0;if(jl!==r&&(y=i[k],Gl=!1,Vl=!w&&s.invertSwap||b),g=function(e,t,i,o,a,n,r,s){var l=o?e.clientY:e.clientX,c=o?i.height:i.width,d=o?i.top:i.left,u=o?i.bottom:i.right,p=!1;if(!r)if(s&&Ll<c*a){if(!Gl&&(1===Bl?l>d+c*n/2:l<u-c*n/2)&&(Gl=!0),Gl)p=!0;else if(1===Bl?l<d+Ll:l>u-Ll)return-Bl}else if(l>d+c*(1-a)/2&&l<u-c*(1-a)/2)return function(e){return el(fl)<el(e)?1:-1}(t);if((p=p||r)&&(l<d+c*n/2||l>u-c*n/2))return l>d+c/2?1:-1;return 0}(e,r,i,a,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Vl,jl===r),0!==g){var E=el(fl);do{E-=g,v=gl.children[E]}while(v&&("none"===Ws(v,"display")||v===yl))}if(0===g||v===r)return M(!1);jl=r,Bl=g;var $=r.nextElementSibling,C=!1,D=sc(vl,n,fl,t,r,i,e,C=1===g);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),Zl=!0,setTimeout(cc,30),P(),C&&!$?n.appendChild(fl):r.parentNode.insertBefore(fl,C?$:r),x&&nl(x,0,S-x.scrollTop),gl=fl.parentNode,void 0===y||Vl||(Ll=Math.abs(y-qs(r)[k])),T(),M(!0)}if(n.contains(fl))return M(!1)}return!1}function A(s,l){_l(s,h,Ds({evt:e,isOwner:d,axis:a?"vertical":"horizontal",revert:o,dragRect:t,targetRect:i,canSort:u,fromSortable:p,target:r,completed:M,onMove:function(i,o){return sc(vl,n,fl,t,i,qs(i),e,o)},changed:T},l))}function P(){A("dragOverAnimationCapture"),h.captureAnimationState(),h!==p&&p.captureAnimationState()}function M(t){return A("dragOverCompleted",{insertion:t}),t&&(d?c._hideClone():c._showClone(h),h!==p&&(Vs(fl,Al?Al.options.ghostClass:c.options.ghostClass,!1),Vs(fl,s.ghostClass,!0)),Al!==h&&h!==rc.active?Al=h:h===rc.active&&Al&&(Al=null),p===h&&(h._ignoreWhileAnimating=r),h.animateAll(function(){A("dragOverAnimationComplete"),h._ignoreWhileAnimating=null}),h!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===fl&&!fl.animated||r===n&&!r.animated)&&(jl=null),s.dragoverBubble||e.rootEl||r===document||(fl.parentNode[ll]._isOutsideThisEl(e.target),!t&&ac(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),_=!0}function T(){El=el(fl),Cl=el(fl,s.draggable),ml({sortable:h,name:"change",toEl:n,newIndex:El,newDraggableIndex:Cl,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ls(document,"mousemove",this._onTouchMove),Ls(document,"touchmove",this._onTouchMove),Ls(document,"pointermove",this._onTouchMove),Ls(document,"dragover",ac),Ls(document,"mousemove",ac),Ls(document,"touchmove",ac)},_offUpEvents:function(){var e=this.el.ownerDocument;Ls(e,"mouseup",this._onDrop),Ls(e,"touchend",this._onDrop),Ls(e,"pointerup",this._onDrop),Ls(e,"pointercancel",this._onDrop),Ls(e,"touchcancel",this._onDrop),Ls(document,"selectstart",this)},_onDrop:function(e){var t=this.el,i=this.options;El=el(fl),Cl=el(fl,i.draggable),_l("drop",this,{evt:e}),gl=fl&&fl.parentNode,El=el(fl),Cl=el(fl,i.draggable),rc.eventCanceled||(Fl=!1,Vl=!1,Gl=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),pc(this.cloneId),pc(this._dragStartId),this.nativeDraggable&&(Ls(document,"drop",this),Ls(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Os&&Ws(document.body,"user-select",""),Ws(fl,"transform",""),e&&(Il&&(e.cancelable&&e.preventDefault(),!i.dropBubble&&e.stopPropagation()),yl&&yl.parentNode&&yl.parentNode.removeChild(yl),(vl===gl||Al&&"clone"!==Al.lastPutMode)&&kl&&kl.parentNode&&kl.parentNode.removeChild(kl),fl&&(this.nativeDraggable&&Ls(fl,"dragend",this),lc(fl),fl.style["will-change"]="",Il&&!Fl&&Vs(fl,Al?Al.options.ghostClass:this.options.ghostClass,!1),Vs(fl,this.options.chosenClass,!1),ml({sortable:this,name:"unchoose",toEl:gl,newIndex:null,newDraggableIndex:null,originalEvent:e}),vl!==gl?(El>=0&&(ml({rootEl:gl,name:"add",toEl:gl,fromEl:vl,originalEvent:e}),ml({sortable:this,name:"remove",toEl:gl,originalEvent:e}),ml({rootEl:gl,name:"sort",toEl:gl,fromEl:vl,originalEvent:e}),ml({sortable:this,name:"sort",toEl:gl,originalEvent:e})),Al&&Al.save()):El!==Sl&&El>=0&&(ml({sortable:this,name:"update",toEl:gl,originalEvent:e}),ml({sortable:this,name:"sort",toEl:gl,originalEvent:e})),rc.active&&(null!=El&&-1!==El||(El=Sl,Cl=$l),ml({sortable:this,name:"end",toEl:gl,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){_l("nulling",this),vl=fl=gl=yl=bl=kl=wl=xl=Pl=Ml=Il=El=Cl=Sl=$l=jl=Bl=Al=Dl=rc.dragged=rc.ghost=rc.clone=rc.active=null;var e=this.el;Yl.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Yl.length=Tl=zl=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":fl&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],i=this.el.children,o=0,a=i.length,n=this.options;o<a;o++)Hs(e=i[o],n.draggable,this.el,!1)&&t.push(e.getAttribute(n.dataIdAttr)||dc(e));return t},sort:function(e,t){var i={},o=this.el;this.toArray().forEach(function(e,t){var a=o.children[t];Hs(a,this.options.draggable,o,!1)&&(i[e]=a)},this),t&&this.captureAnimationState(),e.forEach(function(e){i[e]&&(o.removeChild(i[e]),o.appendChild(i[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return Hs(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var i=this.options;if(void 0===t)return i[e];var o=pl.modifyOption(this,e,t);i[e]=void 0!==o?o:t,"group"===e&&tc(i)},destroy:function(){_l("destroy",this);var e=this.el;e[ll]=null,Ls(e,"mousedown",this._onTapStart),Ls(e,"touchstart",this._onTapStart),Ls(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ls(e,"dragover",this),Ls(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ul.splice(Ul.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!xl){if(_l("hideClone",this),rc.eventCanceled)return;Ws(kl,"display","none"),this.options.removeCloneOnHide&&kl.parentNode&&kl.parentNode.removeChild(kl),xl=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(xl){if(_l("showClone",this),rc.eventCanceled)return;fl.parentNode!=vl||this.options.group.revertClone?bl?vl.insertBefore(kl,bl):vl.appendChild(kl):vl.insertBefore(kl,fl),this.options.group.revertClone&&this.animate(fl,kl),Ws(kl,"display",""),xl=!1}}else this._hideClone()}},Xl&&Bs(document,"touchmove",function(e){(rc.active||Fl)&&e.cancelable&&e.preventDefault()}),rc.utils={on:Bs,off:Ls,css:Ws,find:Ys,is:function(e,t){return!!Hs(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},throttle:al,closest:Hs,toggleClass:Vs,clone:rl,index:el,nextTick:uc,cancelNextTick:pc,detectDirection:ec,getChild:Js,expando:ll},rc.get=function(e){return e[ll]},rc.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(rc.utils=Ds(Ds({},rc.utils),e.utils)),pl.mount(e)})},rc.create=function(e,t){return new rc(e,t)},rc.version="1.15.7";var hc,_c,mc,fc,gc,yc,vc=[],bc=!1;function wc(){vc.forEach(function(e){clearInterval(e.pid)}),vc=[]}function kc(){clearInterval(yc)}var xc=al(function(e,t,i,o){if(t.scroll){var a,n=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,c=Xs(),d=!1;_c!==i&&(_c=i,wc(),hc=t.scroll,a=t.scrollFn,!0===hc&&(hc=il(i,!0)));var u=0,p=hc;do{var h=p,_=qs(h),m=_.top,f=_.bottom,g=_.left,y=_.right,v=_.width,b=_.height,w=void 0,k=void 0,x=h.scrollWidth,S=h.scrollHeight,E=Ws(h),$=h.scrollLeft,C=h.scrollTop;h===c?(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX||"visible"===E.overflowX),k=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY||"visible"===E.overflowY)):(w=v<x&&("auto"===E.overflowX||"scroll"===E.overflowX),k=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY));var D=w&&(Math.abs(y-n)<=s&&$+v<x)-(Math.abs(g-n)<=s&&!!$),A=k&&(Math.abs(f-r)<=s&&C+b<S)-(Math.abs(m-r)<=s&&!!C);if(!vc[u])for(var P=0;P<=u;P++)vc[P]||(vc[P]={});vc[u].vx==D&&vc[u].vy==A&&vc[u].el===h||(vc[u].el=h,vc[u].vx=D,vc[u].vy=A,clearInterval(vc[u].pid),0==D&&0==A||(d=!0,vc[u].pid=setInterval(function(){o&&0===this.layer&&rc.active._onTouchMove(gc);var t=vc[this.layer].vy?vc[this.layer].vy*l:0,i=vc[this.layer].vx?vc[this.layer].vx*l:0;"function"==typeof a&&"continue"!==a.call(rc.dragged.parentNode[ll],i,t,e,gc,vc[this.layer].el)||nl(vc[this.layer].el,i,t)}.bind({layer:u}),24))),u++}while(t.bubbleScroll&&p!==c&&(p=il(p,!1)));bc=d}},30),Sc=function(e){var t=e.originalEvent,i=e.putSortable,o=e.dragEl,a=e.activeSortable,n=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=i||a;r();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(n("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function Ec(){}function $c(){}Ec.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,i=e.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=Js(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(t,o):this.sortable.el.appendChild(t),this.sortable.animateAll(),i&&i.animateAll()},drop:Sc},$s(Ec,{pluginName:"revertOnSpill"}),$c.prototype={onSpill:function(e){var t=e.dragEl,i=e.putSortable||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:Sc},$s($c,{pluginName:"removeOnSpill"});var Cc=[$c,Ec];const Dc=globalThis,Ac=e=>{try{as.mount(e)}catch(e){const t=e instanceof Error?e.message:String(e);if(!t.includes("Cannot mount plugin")||!t.includes("more than once"))throw e}};Dc.__flixlixCardsSortablePluginsMounted||(Ac(Cc),Ac(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?Bs(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Bs(document,"pointermove",this._handleFallbackAutoScroll):t.touches?Bs(document,"touchmove",this._handleFallbackAutoScroll):Bs(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?Ls(document,"dragover",this._handleAutoScroll):(Ls(document,"pointermove",this._handleFallbackAutoScroll),Ls(document,"touchmove",this._handleFallbackAutoScroll),Ls(document,"mousemove",this._handleFallbackAutoScroll)),kc(),wc(),clearTimeout(Us),Us=void 0},nulling:function(){gc=_c=hc=bc=yc=mc=fc=null,vc.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var i=this,o=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,n=document.elementFromPoint(o,a);if(gc=e,t||this.options.forceAutoScrollFallback||Ts||Ms||Os){xc(e,this.options,n,t);var r=il(n,!0);!bc||yc&&o===mc&&a===fc||(yc&&kc(),yc=setInterval(function(){var n=il(document.elementFromPoint(o,a),!0);n!==r&&(r=n,wc()),xc(e,i.options,n,t)},10),mc=o,fc=a)}else{if(!this.options.bubbleScroll||il(n,!0)===Xs())return void wc();xc(e,this.options,il(n,!1),!1)}}},$s(e,{pluginName:"scroll",initializeByDefault:!0})}),Dc.__flixlixCardsSortablePluginsMounted=!0);var Pc=Object.freeze({__proto__:null,default:as});export{po as PowerFlowCardPlus};
//# sourceMappingURL=power-flow-card-plus-extended.js.map
