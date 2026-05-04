function e(e,t,o,i){var a,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}"function"==typeof SuppressedError&&SuppressedError;const t=e=>e.type.includes("energy-flow-card-plus");var o,i;function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(o||(o={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(i||(i={}));var n=function(e,t,i){var a=t?function(e){switch(e.number_format){case o.comma_decimal:return["en-US","en"];case o.decimal_comma:return["de","es","it"];case o.space_comma:return["fr","sv","cs"];case o.system:return;default:return e.language}}(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==o.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(a,r(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,r(e,i)).format(Number(e))}return"string"==typeof e?e:function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)}(e,void 0).toString()+""},r=function(e,t){var o=a({maximumFractionDigits:2},t);if("string"!=typeof e)return o;var i=e.indexOf(".")>-1?e.split(".")[1].length:0;return o.minimumFractionDigits=i,o.maximumFractionDigits=i,o},s=function(e,t,o,i){i=i||{},o=null==o?{}:o;var a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=o,e.dispatchEvent(a),a};const l=e=>e?.split("|").map(e=>e.trim()),c=e=>l(e).at(0)??"",d={maxFlowRate:6,minFlowRate:.75,baseDecimals:0,kiloDecimals:1,minExpectedPower:.01,maxExpectedPower:2e3,kiloThreshold:1e3,megaThreshold:1e6,transparencyZeroLines:0,displayZeroLines:{mode:"show",transparency:50,grey_color:[189,189,189]}};const u=(e,t)=>Number(`${Math.round(Number(`${e}e${t}`))}e-${t}`);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function p(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function h(e,t=0){return p(e)?Number(e):t}const _=(e,o,i,{unit:a,unitWhiteSpace:r,decimals:s,accept_negative:l})=>{const c=!1===r?"":" ",h=t(o),_=h?"Wh":"W",m=h?"kWh":"kW",f=h?"MWh":"MW";if(null==i||""===i)return`0${c}${a??_}`;if(!p(i))return i.toString();const g=Number(i),y=void 0===a&&g>=(o.kilo_threshold??d.kiloThreshold),v=void 0===a&&g>=(o.mega_threshold??d.megaThreshold),b=s??(v?o.mega_decimals:y?o.kilo_decimals:o.base_decimals);return`${n((e=>l?e:Math.abs(e))(v?u(g/1e6,b??2):y?u(g/1e3,b??2):u(g,b??0)),e.locale)}${c}${a||(v?f:y?m:_)}`},m=globalThis,f=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,g=Symbol(),y=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(f&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=y.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&y.set(t,e))}return e}toString(){return this.cssText}};const b=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new v(o,e,g)},w=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new v("string"==typeof e?e:e+"",void 0,g))(t)})(e):e,{is:x,defineProperty:k,getOwnPropertyDescriptor:S,getOwnPropertyNames:E,getOwnPropertySymbols:$,getPrototypeOf:C}=Object,D=globalThis,A=D.trustedTypes,P=A?A.emptyScript:"",M=D.reactiveElementPolyfillSupport,T=(e,t)=>e,z={toAttribute(e,t){switch(t){case Boolean:e=e?P:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},O=(e,t)=>!x(e,t),N={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:O};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=N){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&k(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){const{get:i,set:a}=S(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const n=i?.call(this);a?.call(this,t),this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??N}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=C(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,t=[...E(e),...$(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(w(e))}else void 0!==e&&t.push(w(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(f)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const o of t){const t=document.createElement("style"),i=m.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){const a=(void 0!==o.converter?.toAttribute?o.converter:z).toAttribute(t,o.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=o.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:z;this._$Em=i;const n=a.fromAttribute(t,e.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(e,t,o,i=!1,a){if(void 0!==e){const n=this.constructor;if(!1===i&&(a=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??O)(a,t)||o.useDefault&&o.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:a},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==a||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[T("elementProperties")]=new Map,I[T("finalized")]=new Map,M?.({ReactiveElement:I}),(D.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j=globalThis,B=e=>e,L=j.trustedTypes,R=L?L.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+H,G=`<${U}>`,V=document,W=()=>V.createComment(""),Z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Y=Array.isArray,X="[ \t\n\f\r]",q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,J=/>/g,Q=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,oe=/^(?:script|style|textarea|title)$/i,ie=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ae=ie(1),ne=ie(2),re=Symbol.for("lit-noChange"),se=Symbol.for("lit-nothing"),le=new WeakMap,ce=V.createTreeWalker(V,129);function de(e,t){if(!Y(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(t):t}class ue{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,c]=((e,t)=>{const o=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=q;for(let t=0;t<o;t++){const o=e[t];let s,l,c=-1,d=0;for(;d<o.length&&(r.lastIndex=d,l=r.exec(o),null!==l);)d=r.lastIndex,r===q?"!--"===l[1]?r=K:void 0!==l[1]?r=J:void 0!==l[2]?(oe.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=Q):void 0!==l[3]&&(r=Q):r===Q?">"===l[0]?(r=a??q,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?Q:'"'===l[3]?te:ee):r===te||r===ee?r=Q:r===K||r===J?r=q:(r=Q,a=void 0);const u=r===Q&&e[t+1].startsWith("/>")?" ":"";n+=r===q?o+G:c>=0?(i.push(s),o.slice(0,c)+F+o.slice(c)+H+u):o+H+(-2===c?t:u)}return[de(e,n+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=ue.createElement(l,o),ce.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=ce.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(F)){const t=c[n++],o=i.getAttribute(e).split(H),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:o,ctor:"."===r[1]?fe:"?"===r[1]?ge:"@"===r[1]?ye:me}),i.removeAttribute(e)}else e.startsWith(H)&&(s.push({type:6,index:a}),i.removeAttribute(e));if(oe.test(i.tagName)){const e=i.textContent.split(H),t=e.length-1;if(t>0){i.textContent=L?L.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],W()),ce.nextNode(),s.push({type:2,index:++a});i.append(e[t],W())}}}else if(8===i.nodeType)if(i.data===U)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(H,e+1));)s.push({type:7,index:a}),e+=H.length-1}a++}}static createElement(e,t){const o=V.createElement("template");return o.innerHTML=e,o}}function pe(e,t,o=e,i){if(t===re)return t;let a=void 0!==i?o._$Co?.[i]:o._$Cl;const n=Z(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,o,i)),void 0!==i?(o._$Co??=[])[i]=a:o._$Cl=a),void 0!==a&&(t=pe(e,a._$AS(e,t.values),a,i)),t}class he{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??V).importNode(t,!0);ce.currentNode=i;let a=ce.nextNode(),n=0,r=0,s=o[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new _e(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ve(a,this,e)),this._$AV.push(t),s=o[++r]}n!==s?.index&&(a=ce.nextNode(),n++)}return ce.currentNode=V,i}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class _e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=se,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),Z(e)?e===se||null==e||""===e?(this._$AH!==se&&this._$AR(),this._$AH=se):e!==this._$AH&&e!==re&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Y(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==se&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=ue.createElement(de(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new he(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=le.get(e.strings);return void 0===t&&le.set(e.strings,t=new ue(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const a of e)i===t.length?t.push(o=new _e(this.O(W()),this.O(W()),this,this.options)):o=t[i],o._$AI(a),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=B(e).nextSibling;B(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,a){this.type=1,this._$AH=se,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=se}_$AI(e,t=this,o,i){const a=this.strings;let n=!1;if(void 0===a)e=pe(this,e,t,0),n=!Z(e)||e!==this._$AH&&e!==re,n&&(this._$AH=e);else{const i=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=pe(this,i[o+r],t,r),s===re&&(s=this._$AH[r]),n||=!Z(s)||s!==this._$AH[r],s===se?e=se:e!==se&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!i&&this.j(e)}j(e){e===se?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fe extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===se?void 0:e}}class ge extends me{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==se)}}class ye extends me{constructor(e,t,o,i,a){super(e,t,o,i,a),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??se)===re)return;const o=this._$AH,i=e===se&&o!==se||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==se&&(o===se||i);i&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ve{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const be={I:_e},we=j.litHtmlPolyfillSupport;we?.(ue,_e),(j.litHtmlVersions??=[]).push("3.3.2");const xe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ke=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{const i=o?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=o?.renderBefore??null;i._$litPart$=a=new _e(t.insertBefore(W(),e),e,void 0,o??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}};ke._$litElement$=!0,ke.finalized=!0,xe.litElementHydrateSupport?.({LitElement:ke});const Se=xe.litElementPolyfillSupport;Se?.({LitElement:ke}),(xe.litElementVersions??=[]).push("4.2.2");const Ee=e=>!0!==e.disable_dots&&("undefined"==typeof document||"hidden"!==document.visibilityState),$e=(e,t)=>{const o=(e=>{const t=JSON.parse(JSON.stringify(e)).filter(e=>e?.has);return t})(e);return o?.[t]??void 0},Ce=(e,t)=>$e(e,t),De=e=>$e(e,3),Ae=e=>!!(e=>$e(e,2))(e)||!!De(e),Pe=e=>!!(e=>$e(e,1))(e)||!!De(e),Me=(e,t)=>t>0||"hide"!==e?.display_zero_lines?.mode,Te=(e,t)=>{if(e>0)return"";const o=t?.display_zero_lines?.mode;if("show"===o||void 0===o)return"";let i="";if("transparency"===o||"custom"===o){const e=t?.display_zero_lines?.transparency;(e??1)&&(i+="transparency ")}return"grey_out"!==o&&"custom"!==o||(i+="grey"),i},ze=1,Oe=2,Ne=e=>(...t)=>({_$litDirective$:e,values:t});let Ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const je=Ne(class extends Ie{constructor(e){if(super(e),e.type!==ze||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return re}}),Be=(e,{battery:t,grid:o,individual:i,newDur:a})=>o.has&&t.has&&Me(e,Math.max(o.state.toBattery||0,t.state.toGrid||0))?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="battery-grid-flow"
    >
      <path
        id="battery-grid"
        class="${Te(t.state.toGrid||o.state.toBattery||0,e)}"
        d="M45,100 v-15 c0,-30 -10,-30 -30,-30 h-20"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,o)=>Ee(e)&&t.state.toBattery?ne`<circle r="1" class="battery-from-grid" vector-effect="non-scaling-stroke">
      <animateMotion
        dur="${o.batteryGrid}s"
        repeatCount="indefinite"
        keyPoints="1;0"
        keyTimes="0;1"
        calcMode="paced"
      >
        <mpath xlink:href="#battery-grid" />
      </animateMotion>
    </circle>`:se)(e,o,a)} ${((e,t,o)=>Ee(e)&&t.state.toGrid?ne`
    <circle r="1" class="battery-to-grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.batteryGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-grid" />
      </animateMotion>
    </circle>
  `:se)(e,t,a)}
    </svg>
  </div>`:se,Le=(e,{battery:t,grid:o,individual:i,newDur:a})=>t.has&&Me(e,t.state.toHome)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
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
        d="M55,100 v-${o.has?15:17} c0,-30 10,-30 30,-30 h20"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,o)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="battery-home" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.batteryToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-home" />
      </animateMotion>
    </circle>`:se)(e,t,a)}
    </svg>
  </div>`:se,Re=(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})=>o.has&&Me(e,o.state.fromGrid)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
  >
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      id="grid-home-flow"
      class="flat-line"
    >
      <path
        class="grid ${Te(o.state.toHome||0,e)}"
        id="grid"
        d="M0,${t.has?50:a.has?56:53} H100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,o)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="grid" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.gridToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#grid" />
      </animateMotion>
    </circle>`:se)(e,o,n)}
    </svg>
  </div>`:se,Fe=(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})=>o.has&&o.hasReturnToGrid&&a.has&&Me(e,a.state.toGrid||0)?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
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
      ${((e,t,o)=>Ee(e)&&t.state.toGrid&&t.has?ne`<circle r="1" class="return" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.solarToGrid}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#return" />
      </animateMotion>
    </circle>`:se)(e,a,n)}
    </svg>
  </div>`:se,He=(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})=>a.has&&Me(e,a.state.toHome||0)&&!e.entities.home?.hide?ae`<div
    class="lines ${je({high:t.has||Pe(i),"individual1-individual2":!t.has&&i.every(e=>e?.has),"multi-individual":Ae(i)})}"
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
        d="M${t.has?55:53},0 v${o.has?15:17} c0,${t.has?"30 10,30 30,30":"35 10,35 30,35"} h25"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,o)=>Ee(e)&&t.state.toHome?ne`<circle r="1" class="solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.solarToHome}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#solar" />
      </animateMotion>
    </circle>`:se)(e,a,n)}
    </svg>
  </div>`:se,Ue=(e,{battery:t,individual:o,solar:i,newDur:a})=>t.has&&i.has&&Me(e,i.state.toBattery||0)?ae`<div
    class="lines ${je({high:t.has||Pe(o),"individual1-individual2":!t.has&&o.every(e=>e?.has),"multi-individual":Ae(o)})}"
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
        class="battery-solar ${Te(i.state.toBattery||0,e)}"
        d="M50,0 V100"
        vector-effect="non-scaling-stroke"
      ></path>
      ${((e,t,o)=>Ee(e)&&t.state.toBattery?ne`<circle r="1" class="battery-solar" vector-effect="non-scaling-stroke">
      <animateMotion dur="${o.solarToBattery}s" repeatCount="indefinite" calcMode="paced">
        <mpath xlink:href="#battery-solar" />
      </animateMotion>
    </circle>`:se)(e,i,a)}
    </svg>
  </div>`:se,Ge=["unavailable","unknown"],Ve=({main:e,className:t,template:o,value:i,entityId:a,icon:n,actions:r})=>i&&Ge.includes(i)?se:i||o?ae`<span
      class="secondary-info ${t}"
      @click=${t=>{t.stopPropagation(),e.onEntityClick(t,r,a)}}
      @dblclick=${t=>{t.stopPropagation(),e.onEntityDoubleClick(t,r,a)}}
      @pointerdown=${t=>{t.stopPropagation(),e.onEntityPointerDown(t,r,a)}}
      @pointerup=${t=>{t.stopPropagation(),e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{t.stopPropagation(),e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&(t.stopPropagation(),e.openDetails(t,r,a,"tap"))}}
    >
      ${n?ae`<ha-icon class="secondary-info small" .icon=${n}></ha-icon>`:se}
      ${o??i}</span
    >`:se,We=(e,t,o,i,a,n)=>a?.secondary?.has||a?.secondary?.template?Ve({main:t,className:n,entityId:a.secondary.entity,icon:a.secondary.icon,value:_(e,o,a.secondary.state,{unit:a.secondary.unit,unitWhiteSpace:a.secondary.unit_white_space,decimals:a.secondary.decimals,accept_negative:a.secondary.accept_negative}),actions:{tap_action:a.secondary.tap_action,hold_action:a.secondary.hold_action,double_tap_action:a.secondary.double_tap_action},template:i[`${n}Secondary`]}):se,Ze=(e,t,o)=>{const i=e.use_new_flow_rate_model??!0?((e,t)=>{const o=e.max_expected_power,i=e.min_expected_power;return((e,t,o,i,a)=>e>a?o:(e-i)*(o-t)/(a-i)+t)(t,e.max_flow_rate,e.min_flow_rate,i,o)})(e,t):((e,t,o)=>{const i=e.min_flow_rate,a=e.max_flow_rate;return a-t/(o>0?o:t>0?t:1)*(a-i)})(e,t,o);return Number.isFinite(i)?i:e.max_flow_rate},Ye=(e,t)=>!1!==e&&t?t:"number"==typeof e?e:1.66,Xe=ae`<div class="spacer"></div>`,qe=(e,t,o,i,a,n,r)=>{const s=i.individual[n],l=a?.secondary?.has?_(e,o,a?.secondary?.state,{unit:a?.secondary?.unit||void 0,unitWhiteSpace:a.secondary.unit_white_space,decimals:a?.secondary?.decimals||0,accept_negative:a?.secondary?.accept_negative||!1}):void 0;return(()=>{if(s)return!0;if(!0===a?.secondary?.displayZero)return!0;if(!a?.secondary?.state)return!1;if(!p(a?.secondary?.state))return!0;const e=a?.secondary?.displayZeroTolerance??0;return Number(a.secondary.state)>=e||a.secondary.accept_negative&&"number"==typeof Number(+a.secondary.state)})()?Ve({main:t,className:r,entityId:a?.field?.secondary_info?.entity||a?.secondary.entity||void 0,icon:a?.secondary?.icon||void 0,value:l,template:i.individual[n]||void 0,actions:{tap_action:a?.field?.secondary_info?.tap_action||a?.secondary?.tap_action,hold_action:a?.field?.secondary_info?.hold_action||a?.secondary?.hold_action,double_tap_action:a?.field?.secondary_info?.double_tap_action||a?.secondary?.double_tap_action}}):se},Ke=(e,t,{individualObj:o,templatesObj:i,displayState:a,newDur:n,columnIndex:r})=>{if(!o)return Xe;const s=!1===t.clickable_entities,l=t?.entities?.individual?.findIndex(e=>e.entity===o.entity);if(-1===l||void 0===l)return Xe;const c=n.individual[l]||1.66,d=r||1,u=d-1,p=100+80*u,h=45+80*u,_=20+80*u;return ae`<div
    class="circle-container individual-bottom individual-right individual-right-bottom"
  >
    <div
      class="circle ${s?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o?.field,o?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o?.field,o?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o?.field,o?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o?.field,o?.entity,"tap")}}
    >
      <ha-ripple .disabled=${s}></ha-ripple>
      ${qe(e.hass,e,t,i,o,l,"right-bottom")}
      ${" "!==o.icon?ae` <ha-icon id="individual-right-bottom-icon" .icon=${o.icon}></ha-icon>`:se}
      ${!1!==o?.field?.display_zero_state||(o.state||0)>(o.displayZeroTolerance??0)?ae` <span class="individual-bottom individual-right-bottom">
            ${o?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${o.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    <span class="label">${o.name}</span>
    ${Me(t,o.state||0)&&!t.entities.home?.hide?ae`
          <div class="right-individual-flow-container">
            <svg
              viewBox="0 0 ${p} 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMaxYMid slice"
              class="right-individual-flow"
              style="width: calc(var(--lines-svg-not-flat-multi-indiv-right-indiv-width) + ${80*u}px);"
            >
              <path
                id="individual-bottom-right-home-${d}"
                class="${Te(o.state||0,t)}"
                d="M${h},100 v-15 c0,-30 -10,-30 -30,-30 h-${_}"
                vector-effect="non-scaling-stroke"
              />
              ${Ee(t)&&o.state&&o.state>=(o.displayZeroTolerance??0)?ne`<circle r="1" class="individual-bottom" vector-effect="non-scaling-stroke">
                      <animateMotion
                        dur="${Ye(o?.field?.calculate_flow_rate,c)}s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        keyPoints="${o.invertAnimation?"0;1":"1;0"}"
                        keyTimes="0;1"
                      >
                        <mpath xlink:href="#individual-bottom-right-home-${d}" />
                      </animateMotion>
                    </circle>`:se}
            </svg>
          </div>
        `:se}
  </div>`},Je=(e,t,{individualObj:o,templatesObj:i,displayState:a,newDur:n,battery:r,individualObjs:s,columnIndex:l})=>{if(!o)return Xe;const c=!1===t.clickable_entities,d=t?.entities?.individual?.findIndex(e=>e.entity===o.entity);if(-1===d||void 0===d)return Xe;const u=n.individual[d]||1.66,p=!!r?.has||Pe(s),h=l||1,_=h-1,m=100+80*_,f=(p?45:47)+80*_,g=p?30:35,y=20+80*_;return ae`<div class="circle-container individual-top individual-right individual-right-top">
    <span class="label">${o.name}</span>
    <div
      class="circle ${c?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o?.field,o?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o?.field,o?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o?.field,o?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o?.field,o?.entity,"tap")}}
    >
      <ha-ripple .disabled=${c}></ha-ripple>
      ${qe(e.hass,e,t,i,o,d,"right-top")}
      ${" "!==o.icon?ae` <ha-icon id="individual-right-top-icon" .icon=${o.icon}></ha-icon>`:se}
      ${!1!==o?.field?.display_zero_state||(o.state||0)>(o.displayZeroTolerance??0)?ae` <span class="individual-top individual-right-top">
            ${o?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${o.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    ${Me(t,o.state||0)&&!t.entities.home?.hide?ae`
          <div class="right-individual-flow-container">
            <svg
              viewBox="0 0 ${m} 100"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMaxYMid slice"
              class="right-individual-flow"
              style="width: calc(var(--lines-svg-not-flat-multi-indiv-right-indiv-width) + ${80*_}px);"
            >
              <path
                id="individual-top-right-home-${h}"
                class="${Te(o.state||0,t)}"
                d="M${f},0 v15 c0,${g} -10,${g} -30,${g} h-${y}"
                vector-effect="non-scaling-stroke"
              />
              ${Ee(t)&&o.state&&o.state>=(o.displayZeroTolerance??0)?ne`<circle r="1" class="individual-top" vector-effect="non-scaling-stroke">
                      <animateMotion
                        dur="${Ye(o?.field?.calculate_flow_rate,u)}s"
                        repeatCount="indefinite"
                        calcMode="paced"
                        keyPoints="${o.invertAnimation?"0;1":"1;0"}"
                        keyTimes="0;1"
                      >
                        <mpath xlink:href="#individual-top-right-home-${h}" />
                      </animateMotion>
                    </circle>`:se}
            </svg>
          </div>
        `:se}
  </div>`},Qe=(e,t)=>{const o=l(t);for(const t of o)if(!p(e.states[t]?.state))return!1;return o.length>0};let et={name:"Unknown Card",version:"0.0.0",readme:"https://github.com/flixlix/"};const tt=function(e,t,o){var i;return void 0===o&&(o=!1),function(){var a=[].slice.call(arguments),n=this,r=o&&!i;clearTimeout(i),i=setTimeout(function(){i=null,o||e.apply(n,a)},t),r&&e.apply(n,a)}}(e=>{console.log(`%c⚡ ${et.name} v${et.version} %cError: ${e}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")},6e4),ot=e=>{tt(`Entity "${e??"Unknown"}" is not available or misconfigured`)},it=(e,t)=>{if(!t||!Qe(e,t))return ot(t),null;const o=l(t);let i,a=0;for(const t of o){const o=e.states[t];o&&(i=h(o.state),a+=i)}return a},at=["K","M","G","T","P","E","Z","Y"],nt=(e,t)=>{const o=it(e,t);if(!t||null===o)return 0;const i=e.states[c(t)];if(!i)return 0;const a=i.attributes.unit_of_measurement??"";return rt(o,a)},rt=(e,t)=>{const o=t.toUpperCase().slice(0,1),i=at.indexOf(o);return i>-1?e*Math.pow(1e3,i+1):e},st=(e,o,i,a,n)=>{const r=t(o)?"Wh":"W",s=o.entities.fossil_fuel_percentage?.unit_white_space??!0,l="percentage"===o.entities.fossil_fuel_percentage?.state_type?"%":r,c=o.entities.fossil_fuel_percentage?.display_zero_tolerance??0;if(n){const{nonFossilEnergy:t,nonFossilPercentage:i}=((e,t)=>{const o=1e3*Object.values(e).reduce((e,t)=>e+t,0),i=Math.max(t-o,0);return{nonFossilEnergy:i,nonFossilPercentage:t>0?i/t*100:0}})(n,a);if(l===r){let i=t;return c&&i<c&&(i=0),_(e,o,i,{unitWhiteSpace:s})}let d=i;return c&&d<c&&(d=0),_(e,o,d,{unit:"%",unitWhiteSpace:s,decimals:0})}if(!i||!Qe(e,i))return ot(i),"NaN";const d=1-(it(e,i)??0)/100;let u;if(u="string"==typeof o.entities.grid?.entity?a:nt(e,o.entities.grid?.entity.consumption)||0,l===r){let t=u*d;return c&&t<c&&(t=0),_(e,o,t,{unitWhiteSpace:s})}let p=100-(it(e,i)??0);return c&&p<c&&(p=0),_(e,o,p,{unit:"%",unitWhiteSpace:s,decimals:0})},lt=238.76104,ct=async(e,t,o,i)=>{((e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});a.detail=o,e.dispatchEvent(a)})(e,"hass-action",{config:o,action:i})};var dt={label:{car:"Cotxe",motorbike:"Moto"}},ut={accept_negative:"Accepta Negatius",action:"Acció",advanced:"Opcions Avançades",allow_layout_break:"Permet trencar el disseny",base_decimals:"Decimals de base",battery:"Bateria",calculate_flow_rate:"Calcula la Relació de Fluxe",circle_animation:"Animació Circular",clickable_entities:"Entitats cliquejables",color:"Color",color_circle:"Color de Cercle",color_dynamically:"Color dinàmic",color_icon:"Color de Icona",color_state_of_charge_value:"Color",color_value:"Color de Valor",combined:"Entitat Combinada (Una entitat amb valors positius i negatius)",consumption:"Consum",custom:"Personalitzat",custom_colors:"Colors Personalitzats",dashboard_link:"Enllaç al Panell",dashboard_link_label:"Nom del Panell",decimals:"Nombre de decimals",disable_dots:"Deshabilitar Punts",display_state:"Mostra Estat",display_zero:"Mostra Zero",display_zero_lines:"Mostra Línies Zero",display_zero_state:"Mostra Estat Zero",display_zero_tolerance:"Mostra Zero Tolerància",double_tap_action:"Acció en doble toc",entity_generator:"Generador",fossil_fuel_percentage:"Comb. Fòssils",grey_color:"Color Gris",grey_out:"En Gris",grid:"Xarxa",hide:"Amaga",hold_action:"Acció en mantenir premut",home:"Casa",icon_alert:"Icona per a Alerta",individual:"Individu",invert_state:"Inverteix l'estat",inverted_animation:"Invertir Animació",kilo_decimals:"Decimals de quilo",kilo_threshold:"Llindar de base a quilo",label_alert:"Etiqueta per a Alerta",max_expected_power:"Potència Màxima Esperada",max_flow_rate:"Rel. Màx de Fluxe",min_expected_power:"Potència Mínima Esperada",min_flow_rate:"Rel. Mín. de Fluxe",mode:"Mode de visualització",mega_decimals:"Decimals de mega",mega_threshold:"Llindar de quilo a mega",navigation_path:"Ruta de Navegació",no_color:"Sense color",no_labels:"Sense etiquetes",override_state:"Sobrescriu l'Estat",power_outage:"Pèrdua de Potència",production:"Producció",secondary_info:"Informació Secundària",separated:"Entitats Separades (Una entitat per a consum i una per a producció)",show:"Mostra",show_direction:"Mostrar Direcció",show_state_of_charge:"Mostra l'Estat de Càrrega",solar:"Energia solar",sort_individual_devices:"Ordena Dispositius Individuals",state_alert:"Estat d'Alerta",state_of_charge:"Estat de Càrrega",state_of_charge_decimals:"Nombre de decimals",state_of_charge_icon:"Icona",state_of_charge_unit:"Unitat",state_of_charge_unit_white_space:"Espai en Blanc",state_type:"Tipus d'Estat",subtract_individual:"Resta Individuals",sum_total:"Suma solar i secundària",tap_action:"Acció al Tocar",template:"Plantilla",transparency:"Transparència",unit_of_measurement:"Unitat",unit_white_space:"Unitat Espai en Blanc",use_metadata:"Empra Metadades",use_new_flow_rate_model:"Nou Model de Rel. de Fluxe"},pt={card:dt,editor:ut},ht=Object.freeze({__proto__:null,card:dt,default:pt,editor:ut}),_t={label:{car:"Auto",motorbike:"Motorka"}},mt={accept_negative:"Povolit záporné hodnoty",action:"Akce",advanced:"Pokročilá nastavení",allow_layout_break:"Povolit zalomení zobrazení",base_decimals:"Desetinná místa pro základ",battery:"Baterie",calculate_flow_rate:"Počítat průtok",circle_animation:"Kruhová animace",clickable_entities:"Klikatelné entity",color:"Barva",color_circle:"Barva kruhu",color_dynamically:"Dynamická barva",color_icon:"Barevná ikona",color_state_of_charge_value:"Barva",color_value:"Barevná hodnota",combined:"Kombinovaná entita (jedna entita s kladnými a zápornými hodnotami)",consumption:"Spotřeba",custom:"Vlastní",custom_colors:"Vlastní barvy",dashboard_link:"Odkaz na informační panel",dashboard_link_label:"Popisek odkazu na informační panel",decimals:"Desetinná místa",disable_dots:"Vypnout tečky",display_state:"Zobrazit stav",display_zero:"Zobrazit nulu",display_zero_lines:"Zobrazit nulové řádky",display_zero_state:"Zobrazit nulové stavy",display_zero_tolerance:"Zobrazit nulovou toleranci",double_tap_action:"Akce při dvojitém klepnutí",entity_generator:"Generátor",fossil_fuel_percentage:"Fosilní palivo",grey_color:"Šedá barva",grey_out:"Šedý výstup",grid:"Síť",hide:"Skrýt",hold_action:"Akce při podržení",home:"Dům",icon_alert:"Ikona pro upozornění",individual:"Individuální",invert_state:"Invertovat stav",inverted_animation:"Invertovat animaci",kilo_decimals:"Desetinná místa pro kilo",kilo_threshold:"Práh ze základu na kilo",label_alert:"Štítek pro upozornění",max_expected_power:"Maximální očekávaný výkon",max_flow_rate:"Maximální průtok",min_expected_power:"Minimální očekávaný výkon",min_flow_rate:"Minimální průtok",mode:"Režim",mega_decimals:"Desetinná místa pro mega",mega_threshold:"Práh z kila na mega",navigation_path:"Navigační cesta",no_color:"Bez barvy",no_labels:"Bez popisků",override_state:"Přepsat stav",power_outage:"Výpadek",production:"Výroba",secondary_info:"Sekundární informace",separated:"Oddělené entity (jedna entita pro spotřebu a jedna pro výrobu)",show:"Zobrazit",show_direction:"Zobrazit směr",show_state_of_charge:"Zobrazit stav nabití",solar:"Solární",sort_individual_devices:"Seřadit jednotlivá zařízení",state_alert:"Stav upozornění",state_of_charge:"Stav nabití",state_of_charge_decimals:"Desetinná místa",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednotky",state_of_charge_unit_white_space:"Mezera u jednotky",state_type:"Typ stavu",subtract_individual:"Odečíst individuální zařízení",sum_total:"Sečíst solární a sekundární",tap_action:"Akce po klepnutí",template:"Šablona",transparency:"Průhlednost",unit_of_measurement:"Jednotka",unit_white_space:"Mezera u jednotky",use_metadata:"Použít Metadata",use_new_flow_rate_model:"Nový model průtoku"},ft={card:_t,editor:mt},gt=Object.freeze({__proto__:null,card:_t,default:ft,editor:mt}),yt={label:{car:"Auto",motorbike:"Motorrad"}},vt={accept_negative:"Negative Werte akzeptieren",action:"Aktion",advanced:"Erweiterte Optionen",allow_layout_break:"Layoutumbruch zulassen",base_decimals:"Dezimalstellen für Basis",battery:"Batterie",calculate_flow_rate:"Flussrate berechnen",circle_animation:"Kreisanimation",clickable_entities:"Klickbare Entitäten",color:"Farbe",color_circle:"Farbe des Kreises",color_dynamically:"Farbe dynamisch",color_icon:"Farbe des Symbols",color_state_of_charge_value:"Farbe",color_value:"Farbe des Wertes",combined:"Kombinierte Entität (Eine Entität mit positiven und negativen Werten)",consumption:"Verbrauch",custom:"Benutzerdefiniert",custom_colors:"Benutzerdefinierte Farben",dashboard_link:"Dashboard-Link",dashboard_link_label:"Name des Dashboard-Links",decimals:"Dezimalstellen",disable_dots:"Punkte deaktivieren",display_state:"Zustand anzeigen",display_zero:"Null anzeigen",display_zero_lines:"Nulllinien anzeigen",display_zero_state:"Nullzustand anzeigen",display_zero_tolerance:"Nulltoleranz",double_tap_action:"Aktion beim Doppeltippen",entity_generator:"Generator",fossil_fuel_percentage:"Fossile Brennstoffe",grey_color:"Graue Farbe",grey_out:"Ausgrauen",grid:"Netz",hide:"Verstecken",hold_action:"Aktion beim Halten",home:"Zuhause",icon_alert:"Symbol für Alarm",individual:"Individuell",invert_state:"Zustand umkehren",inverted_animation:"Animation umkehren",kilo_decimals:"Dezimalstellen für Kilo",kilo_threshold:"Schwellenwert von Basis zu Kilo",label_alert:"Beschriftung für Alarm",max_expected_power:"Maximale erwartete Leistung",max_flow_rate:"Maximale Flussrate",min_expected_power:"Minimale erwartete Leistung",min_flow_rate:"Minimale Flussrate",mode:"Modus",mega_decimals:"Dezimalstellen für Mega",mega_threshold:"Schwellenwert von Kilo zu Mega",navigation_path:"Navigationspfad",no_color:"Keine Farbe",no_labels:"Keine Beschriftungen",override_state:"Zustand überschreiben",power_outage:"Stromausfall",production:"Produktion",secondary_info:"Sekundäre Information",separated:"Getrennte Entitäten (Eine Entität für den Verbrauch und eine für die Produktion)",show:"Anzeigen",show_direction:"Richtung anzeigen",show_state_of_charge:"Ladezustand anzeigen",solar:"Solarenergie",sort_individual_devices:"Individuelle Geräte sortieren",state_alert:"Alarmzustand",state_of_charge:"Ladezustand",state_of_charge_decimals:"Dezimalstellen",state_of_charge_icon:"Symbol",state_of_charge_unit:"Einheit",state_of_charge_unit_white_space:"Leerzeichen",state_type:"Typ des Zustands",subtract_individual:"Individuell abziehen",sum_total:"Solar und Sekundär summieren",tap_action:"Aktion beim Antippen",template:"Vorlage",transparency:"Transparenz",unit_of_measurement:"Einheit",unit_white_space:"Weißraum für Einheit",use_metadata:"Metadaten verwenden",use_new_flow_rate_model:"Neues Fluss-Modell verwenden"},bt={card:yt,editor:vt},wt=Object.freeze({__proto__:null,card:yt,default:bt,editor:vt}),xt={label:{car:"Bil",motorbike:"Motorcykel"}},kt={accept_negative:"Accepter negative værdier",action:"Handling",advanced:"Avancerede indstillinger",allow_layout_break:"Tillad layout-brud",base_decimals:"Decimaler for basis",battery:"Batteri",calculate_flow_rate:"Beregn Hastighed",circle_animation:"Cirkel Animation",clickable_entities:"Klikbare enheder",color:"Farve",color_circle:"Farve af Cirkel",color_dynamically:"Farve dynamisk",color_icon:"Farve af ikon",color_state_of_charge_value:"Farve",color_value:"Farve af værdi",combined:"Kombineret enhed (Én enhed med positive og negative værdier)",consumption:"Forbrug",custom:"Brugerdefinerede",custom_colors:"Brugerdefinerede farver",dashboard_link:"Dashboard-link",dashboard_link_label:"Navn på dashboard-link",decimals:"Decimaler",disable_dots:"Deaktiver prikker",display_state:"Vis Tilstand",display_zero:"Vis Nul",display_zero_lines:"Vis Nul Linjer",display_zero_state:"Vis Nultilstand",display_zero_tolerance:"Vis ingen tolerance",double_tap_action:"Dobbelttryk-handling",entity_generator:"Generator",fossil_fuel_percentage:"Fossilt Brændstof",grey_color:"Grå farve",grey_out:"Grået ud",grid:"El-Net",hide:"Skjul",hold_action:"Hold-handling",home:"Hjem",icon_alert:"Ikon for alarm",individual:"Individuel",invert_state:"Omvendt tilstand",inverted_animation:"Omvendt Animation",kilo_decimals:"Decimaler for kilo",kilo_threshold:"Tærskel fra basis til kilo",label_alert:"Etiket til Alarm",max_expected_power:"Maks. forventet effekt",max_flow_rate:"Maks. flowhastighed",min_expected_power:"Min. forventet effekt",min_flow_rate:"Min. flowhastighed",mode:"Tilstand",mega_decimals:"Decimaler for mega",mega_threshold:"Tærskel fra kilo til mega",navigation_path:"Navigationssti",no_color:"Ingen farve",no_labels:"Ingen etiketter",override_state:"Overskriv Tilstand",power_outage:"Strømafbrydelse",production:"Produktion",secondary_info:"Sekundær info",separated:"Adskilte enheder (én enhed til forbrug og én til produktion)",show:"Vis",show_direction:"Vis Retning",show_state_of_charge:"Vis ladningstilstand",solar:"Solenergi",sort_individual_devices:"Sorter individuelle enheder",state_alert:"Alarmtilstand",state_of_charge:"Ladningstilstand",state_of_charge_decimals:"Decimal",state_of_charge_icon:"Ikon",state_of_charge_unit:"Enhed",state_of_charge_unit_white_space:"Tomt mellemrum",state_type:"Tilstande",subtract_individual:"Fratræk individuel",sum_total:"Sum sol og sekundær",tap_action:"Tryk-handling",template:"Skabelon",transparency:"Transparens",unit_of_measurement:"Enhed",unit_white_space:"Enhed tomt mellemrum",use_metadata:"Brug Metadata",use_new_flow_rate_model:"Ny flowhastighedsmodel"},St={card:xt,editor:kt},Et=Object.freeze({__proto__:null,card:xt,default:St,editor:kt}),$t={label:{car:"Car",motorbike:"Motorbike"}},Ct={accept_negative:"Accept Negative",action:"Action",advanced:"Advanced Options",allow_layout_break:"Allow Layout Break",base_decimals:"Base Decimals",battery:"Battery",calculate_flow_rate:"Calculate Flow Rate",circle_animation:"Circle Animation",clickable_entities:"Clickable Entities",color:"Color",color_circle:"Color of Circle",color_dynamically:"Color Dynamically",color_icon:"Color of Icon",color_state_of_charge_value:"Color",color_value:"Color of Value",combined:"Combined Entity (One entity with positive and negative values)",consumption:"Consumption",custom:"Custom",custom_colors:"Custom Colors",dashboard_link:"Dashboard Link",dashboard_link_label:"Dashboard Link Name",decimals:"Decimals",disable_dots:"Disable Dots",display_state:"Display State",display_zero:"Display Zero",display_zero_lines:"Display Zero Lines",display_zero_state:"Display Zero State",display_zero_tolerance:"Display Zero Tolerance",double_tap_action:"Double Tap Action",entity_generator:"Generator",fossil_fuel_percentage:"Fossil Fuel",grey_color:"Grey Color",grey_out:"Grey Out",grid:"Grid",hide:"Hide",hold_action:"Hold Action",home:"Home",icon_alert:"Icon for Alert",individual:"Individual",invert_state:"Invert State",inverted_animation:"Invert Animation",kilo_decimals:"Kilo Decimals",kilo_threshold:"Base to Kilo Threshold",label_alert:"Label for Alert",max_expected_power:"Max Expected Power",max_flow_rate:"Max Flow Rate",min_expected_power:"Min Expected Power",min_flow_rate:"Min Flow Rate",mode:"Mode",mega_decimals:"Mega Decimals",mega_threshold:"Kilo to Mega Threshold",navigation_path:"Navigation Path",no_color:"No Color",no_labels:"No Labels",override_state:"Override State",power_outage:"Power Outage",production:"Production",secondary_info:"Secondary Info",separated:"Separated Entities (One entity for consumption and one for production)",show:"Show",show_direction:"Show Direction",show_state_of_charge:"Show State of Charge",solar:"Solar",sort_individual_devices:"Sort individual devices",state_alert:"State of Alert",state_of_charge:"State of Charge",state_of_charge_decimals:"Decimals",state_of_charge_icon:"Icon",state_of_charge_unit:"Unit",state_of_charge_unit_white_space:"White Space",state_type:"Type of State",subtract_individual:"Subtract Individual",sum_total:"Sum solar and secondary",tap_action:"Tap Action",template:"Template",transparency:"Transparency",unit_of_measurement:"Unit",unit_white_space:"Unit White Space",use_metadata:"Use Metadata",use_new_flow_rate_model:"New Flow Rate Model"},Dt={card:$t,editor:Ct},At=Object.freeze({__proto__:null,card:$t,default:Dt,editor:Ct}),Pt={label:{car:"Coche",motorbike:"Motocicleta"}},Mt={accept_negative:"Aceptar valores negativos",action:"Acción",advanced:"Opciones Avanzadas",allow_layout_break:"Permitir salto de diseño",base_decimals:"Decimales de base",battery:"Batería",calculate_flow_rate:"Calcular Tasa de Flujo",circle_animation:"Animación de Círculo",clickable_entities:"Entidades Clicables",color:"Color",color_circle:"Color del Círculo",color_dynamically:"Color dinámico",color_icon:"Color del Icono",color_state_of_charge_value:"Color",color_value:"Color del Valor",combined:"Entidad combinada (una entidad con valores positivos y negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Colores personalizados",dashboard_link:"Enlace del Tablero",dashboard_link_label:"Nombre del Enlace del Tablero",decimals:"Decimales",disable_dots:"Desactivar Puntos",display_state:"Mostrar Estado",display_zero:"Mostrar Cero",display_zero_lines:"Mostrar Líneas de Cero",display_zero_state:"Mostrar Estado Cero",display_zero_tolerance:"Tolerancia de Cero",double_tap_action:"Acción de Doble Toque",entity_generator:"Generador",fossil_fuel_percentage:"Combustible Fósil",grey_color:"Color Gris",grey_out:"Gris",grid:"Red eléctrica",hide:"Ocultar",hold_action:"Acción al Mantener",home:"Casa",icon_alert:"Ícono para Alerta",individual:"Individuales",invert_state:"Invertir Estado",inverted_animation:"Animación Invertida",kilo_decimals:"Decimales de kilo",kilo_threshold:"Umbral de base a kilo",label_alert:"Etiqueta para Alerta",max_expected_power:"Potencia Máxima Esperada",max_flow_rate:"Tasa de Flujo Máxima",min_expected_power:"Potencia Mínima Esperada",min_flow_rate:"Tasa de Flujo Mínima",mode:"Modo",mega_decimals:"Decimales de mega",mega_threshold:"Umbral de kilo a mega",navigation_path:"Ruta de Navegación",no_color:"Sin color",no_labels:"Sin etiquetas",override_state:"Sobrescribir Estado",power_outage:"Corte de energía",production:"Producción",secondary_info:"Información secundaria",separated:"Entidades separadas (una entidad de consumo y otra de producción)",show:"Mostrar",show_direction:"Mostrar Dirección",show_state_of_charge:"Mostrar Estado de Carga",solar:"Energía solar",sort_individual_devices:"Ordenar dispositivos individuales",state_alert:"Estado de Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Decimales",state_of_charge_icon:"Ícono",state_of_charge_unit:"Unidad",state_of_charge_unit_white_space:"Espacio en Blanco",state_type:"Tipo de Estado",subtract_individual:"Restar Individualmente",sum_total:"Sumar solar y secundario",tap_action:"Acción de Toque",template:"Plantilla",transparency:"Transparencia",unit_of_measurement:"Unidad",unit_white_space:"Espacio en Blanco de la Unidad",use_metadata:"Utilizar Metadatos",use_new_flow_rate_model:"Utilizar Nuevo Modelo de Tasa de Flujo"},Tt={card:Pt,editor:Mt},zt=Object.freeze({__proto__:null,card:Pt,default:Tt,editor:Mt}),Ot={label:{car:"Auto",motorbike:"Moottoripyörä"}},Nt={accept_negative:"Hyväksy negatiiviset arvot",action:"Toiminto",advanced:"Lisäasetukset",allow_layout_break:"Salli asettelun rivitys",base_decimals:"Whien desimaalit",battery:"Akku",calculate_flow_rate:"Laske virtausnopeus",circle_animation:"Ympyräanimaatio",clickable_entities:"Napautettavat kohteet",color:"Väri",color_circle:"Ympyrän väri",color_dynamically:"Väri dynaamisesti",color_icon:"Ikonin väri",color_state_of_charge_value:"Väri",color_value:"Arvon väri",combined:"Yhdistetty kokonaisuus (yksi kokonaisuus positiivisilla ja negatiivisilla arvoilla)",consumption:"Kulutus",custom:"Mukautettu",custom_colors:"Mukautetut värit",dashboard_link:"Ohjauspaneelin linkki",dashboard_link_label:"Ohjauspaneelin linkin nimi",decimals:"Desimaalit",disable_dots:"Poista pisteet",display_state:"Näytä tila",display_zero:"Näytä nolla",display_zero_lines:"Näytä nolla-viivat",display_zero_state:"Näytä nolla-tila",display_zero_tolerance:"Näytä nolla-toleranssi",double_tap_action:"Kaksoisnapautustoiminto",entity_generator:"Generaattori",fossil_fuel_percentage:"Fossiilinen polttoaine",grey_color:"Harmaa väri",grey_out:"Harmaa",grid:"Sähköverkko",hide:"Piilota",hold_action:"Pidä painettuna -toiminto",home:"Koti",icon_alert:"Hälytyksen kuvake",individual:"Yksittäinen",invert_state:"Käänteinen tila",inverted_animation:"Käänteinen animaatio",kilo_decimals:"kWhien desimaalit",kilo_threshold:"Whin ja kWhin kynnysarvo",label_alert:"Hälytyksen teksti",max_expected_power:"Ennustettu maksimiteho",max_flow_rate:"Maksimivirtausnopeus",min_expected_power:"Ennustettu minimiteho",min_flow_rate:"Minimivirtausnopeus",mode:"Tila",mega_decimals:"MWhien desimaalit",mega_threshold:"kWhin ja MWhin kynnysarvo",navigation_path:"Navigointipolku",no_color:"Ei väriä",no_labels:"Ei nimiöitä",override_state:"Korvaa tila",power_outage:"Sähkökatkos",production:"Tuotanto",secondary_info:"Toissijaiset tiedot",separated:"Erotetut kokonaisuudet (yksi kulutukseen ja yksi tuotantoon)",show:"Näytä",show_direction:"Näytä suunta",show_state_of_charge:"Näytä varauksen tila",solar:"Aurinko",sort_individual_devices:"Lajittele yksittäiset laitteet",state_alert:"Hälytyksen tila",state_of_charge:"Varauksen tila",state_of_charge_decimals:"Desimaalit",state_of_charge_icon:"Kuvake",state_of_charge_unit:"Yksikkö",state_of_charge_unit_white_space:"Välilyönti",state_type:"Tilan tyyppi",subtract_individual:"Vähennä yksittäinen",sum_total:"Summaa aurinko ja toissijainen",tap_action:"Napauta toimintoa",template:"Malli",transparency:"Läpinäkyvyys",unit_of_measurement:"Yksikkö",unit_white_space:"Yksikön välilyönti",use_metadata:"Käytä metatietoja",use_new_flow_rate_model:"Uusi virtausnopeusmalli"},It={card:Ot,editor:Nt},jt=Object.freeze({__proto__:null,card:Ot,default:It,editor:Nt}),Bt={label:{car:"Voiture",motorbike:"Moto"}},Lt={accept_negative:"Accepter les valeurs négatives",action:"Action",advanced:"Options avancées",allow_layout_break:"Autoriser la rupture de mise en page",base_decimals:"Décimales de base",battery:"Batterie",calculate_flow_rate:"Calculer le débit",circle_animation:"Animation de cercle",clickable_entities:"Entités cliquables",color:"Couleur",color_circle:"Couleur du cercle",color_dynamically:"Couleur dynamique",color_icon:"Couleur de l'icône",color_state_of_charge_value:"Couleur",color_value:"Couleur de la valeur",combined:"Entité combinée (une entité avec des valeurs positives et négatives)",consumption:"Consommation",custom:"Personnalisé",custom_colors:"Couleurs personnalisées",dashboard_link:"Lien du tableau de bord",dashboard_link_label:"Nom du lien du tableau de bord",decimals:"Décimales",disable_dots:"Désactiver les points",display_state:"Afficher l'état",display_zero:"Afficher zéro",display_zero_lines:"Afficher les lignes zéro",display_zero_state:"Afficher l'état zéro",display_zero_tolerance:"Tolérance de l'affichage zéro",double_tap_action:"Action de double tap",entity_generator:"Générateur",fossil_fuel_percentage:"Carburant fossile",grey_color:"Couleur grise",grey_out:"Griser",grid:"Réseau Électrique",hide:"Masquer",hold_action:"Action d'appui long",home:"Domicile",icon_alert:"Icône de l'alerte",individual:"Individuel",invert_state:"Inverser l'état",inverted_animation:"Animation inversée",kilo_decimals:"Décimales de kilo",kilo_threshold:"Seuil de base vers kilo",label_alert:"Libellé de l'alerte",max_expected_power:"Puissance maximale attendue",max_flow_rate:"Débit maximal",min_expected_power:"Puissance minimale attendue",min_flow_rate:"Débit minimal",mode:"Mode",mega_decimals:"Décimales de méga",mega_threshold:"Seuil de kilo vers méga",navigation_path:"Chemin de navigation",no_color:"Aucune couleur",no_labels:"Sans libellés",override_state:"Remplacer l'état",power_outage:"Panne de courant",production:"Production",secondary_info:"Informations secondaires",separated:"Entités séparées (une entité pour la consommation et une pour la production)",show:"Afficher",show_direction:"Afficher la direction",show_state_of_charge:"Afficher l'état de charge",solar:"Solaire",sort_individual_devices:"Trier les appareils individuels",state_alert:"État de l'alerte",state_of_charge:"État de charge",state_of_charge_decimals:"Décimales",state_of_charge_icon:"Icône",state_of_charge_unit:"Unité",state_of_charge_unit_white_space:"Espace blanc de l'unité",state_type:"Type d'état",subtract_individual:"Soustraire l'individuel",sum_total:"Somme solaire et secondaire",tap_action:"Action de tap",template:"Modèle",transparency:"Transparence",unit_of_measurement:"Unité",unit_white_space:"Espace blanc de l'unité",use_metadata:"Utiliser les métadonnées",use_new_flow_rate_model:"Nouveau modèle de débit"},Rt={card:Bt,editor:Lt},Ft=Object.freeze({__proto__:null,card:Bt,default:Rt,editor:Lt}),Ht={label:{car:"कार",motorbike:"मोटरसाइकिल"}},Ut={accept_negative:"नकारात्मक स्वीकार करें",action:"क्रिया",advanced:"उन्नत विकल्प",allow_layout_break:"लेआउट तोड़ने की अनुमति दें",base_decimals:"बेस दशमलव",battery:"बैटरी",calculate_flow_rate:"प्रवाह दर की गणना करें",circle_animation:"सर्कल एनिमेशन",clickable_entities:"क्लिक करने योग्य इकाइयाँ",color:"रंग",color_circle:"सर्कल का रंग",color_dynamically:"गतिशील रंग",color_icon:"आइकन का रंग",color_state_of_charge_value:"रंग",color_value:"मान का रंग",combined:"संयुक्त इकाई (सकारात्मक और नकारात्मक मानों के साथ)",consumption:"उपभोग",custom:"कस्टम",custom_colors:"कस्टम रंग",dashboard_link:"डैशबोर्ड लिंक",dashboard_link_label:"डैशबोर्ड लिंक नाम",decimals:"दशमलव",disable_dots:"डॉट्स अक्षम करें",display_state:"स्थिति दिखाएँ",display_zero:"शून्य दिखाएँ",display_zero_lines:"शून्य रेखाएँ दिखाएँ",display_zero_state:"शून्य स्थिति दिखाएँ",display_zero_tolerance:"शून्य सहिष्णुता दिखाएँ",double_tap_action:"डबल टैप क्रिया",entity_generator:"जनरेटर",fossil_fuel_percentage:"जीवाश्म ईंधन",grey_color:"धूसर रंग",grey_out:"धूसर करें",grid:"ग्रिड",hide:"छुपाएँ",hold_action:"होल्ड क्रिया",home:"घर",icon_alert:"अलर्ट के लिए आइकन",individual:"व्यक्तिगत",invert_state:"स्थिति उलटें",inverted_animation:"एनिमेशन उलटें",kilo_decimals:"किलो दशमलव",kilo_threshold:"बेस से किलो सीमा",label_alert:"अलर्ट के लिए लेबल",max_expected_power:"अधिकतम अपेक्षित शक्ति",max_flow_rate:"अधिकतम प्रवाह दर",min_expected_power:"न्यूनतम अपेक्षित शक्ति",min_flow_rate:"न्यूनतम प्रवाह दर",mode:"मोड",mega_decimals:"मेगा दशमलव",mega_threshold:"किलो से मेगा सीमा",navigation_path:"नेविगेशन पथ",no_color:"कोई रंग नहीं",no_labels:"कोई लेबल नहीं",override_state:"स्थिति ओवरराइड करें",power_outage:"बिजली गुल",production:"उत्पादन",secondary_info:"द्वितीयक जानकारी",separated:"अलग-अलग इकाइयाँ (उपभोग और उत्पादन के लिए)",show:"दिखाएँ",show_direction:"दिशा दिखाएँ",show_state_of_charge:"चार्ज की स्थिति दिखाएँ",solar:"सौर ऊर्जा",sort_individual_devices:"व्यक्तिगत डिवाइस क्रमबद्ध करें",state_alert:"अलर्ट की स्थिति",state_of_charge:"चार्ज की स्थिति",state_of_charge_decimals:"दशमलव",state_of_charge_icon:"आइकन",state_of_charge_unit:"इकाई",state_of_charge_unit_white_space:"स्पेस",state_type:"स्थिति प्रकार",subtract_individual:"व्यक्तिगत घटाएँ",sum_total:"सौर और द्वितीयक का योग",tap_action:"टैप क्रिया",template:"टेम्पलेट",transparency:"पारदर्शिता",unit_of_measurement:"माप की इकाई",unit_white_space:"यूनिट स्पेस",use_metadata:"मेटाडेटा का उपयोग करें",use_new_flow_rate_model:"नया प्रवाह दर मॉडल"},Gt={card:Ht,editor:Ut},Vt=Object.freeze({__proto__:null,card:Ht,default:Gt,editor:Ut}),Wt={label:{car:"Auto",motorbike:"Motocicletta"}},Zt={accept_negative:"Accetta Valori Negativi",action:"Azione",advanced:"Opzioni Avanzate",allow_layout_break:"Consenti interruzione del layout",base_decimals:"Decimali di base",battery:"Batteria",calculate_flow_rate:"Calcola Tasso di Flusso",circle_animation:"Animazione Cerchio",clickable_entities:"Entità Cliccabili",color:"Colore",color_circle:"Colore del Cerchio",color_dynamically:"Colore dinamico",color_icon:"Colore dell'Icona",color_state_of_charge_value:"Colore",color_value:"Colore del Valore",combined:"Entità combinata (un'entità con valori positivi e negativi)",consumption:"Consumo",custom:"Personalizzato",custom_colors:"Colori personalizzati",dashboard_link:"Collegamento Dashboard",dashboard_link_label:"Nome Collegamento Dashboard",decimals:"Decimali",disable_dots:"Disabilita Punti",display_state:"Mostra Stato",display_zero:"Mostra Zero",display_zero_lines:"Mostra Linee Zero",display_zero_state:"Mostra Stato Zero",display_zero_tolerance:"Tolleranza dello Zero",double_tap_action:"Azione al doppio tocco",entity_generator:"Generatore",fossil_fuel_percentage:"Carburante Fossile",grey_color:"Colore Sfumato",grey_out:"Sfuma",grid:"Rete Elettrica",hide:"Nascondi",hold_action:"Azione alla pressione prolungata",home:"Casa",icon_alert:"Icona per l'Allarme",individual:"Individuale",invert_state:"Inverti Stato",inverted_animation:"Animazione Invertita",kilo_decimals:"Decimali di chilo",kilo_threshold:"Soglia da base a chilo",label_alert:"Etichetta per l'Allarme",max_expected_power:"Potenza Massima Prevista",max_flow_rate:"Tasso di Flusso Massimo",min_expected_power:"Potenza Minima Prevista",min_flow_rate:"Tasso di Flusso Minimo",mode:"Modalità",mega_decimals:"Decimali di mega",mega_threshold:"Soglia da chilo a mega",navigation_path:"Percorso di navigazione",no_color:"Nessun colore",no_labels:"Senza etichette",override_state:"Sovrascrivi Stato",power_outage:"Interruzione di corrente",production:"Produzione",secondary_info:"Informazioni secondarie",separated:"Entità separate (Un'entità per il consumo e una per la produzione)",show:"Mostra",show_direction:"Mostra Direzione",show_state_of_charge:"Mostra Stato di Carica",solar:"Solare",sort_individual_devices:"Ordina i singoli individuale",state_alert:"Stato dell'Allarme",state_of_charge:"Stato di Carica",state_of_charge_decimals:"Decimali",state_of_charge_icon:"Icona",state_of_charge_unit:"Unità",state_of_charge_unit_white_space:"Spazio Bianco",state_type:"Tipo di Stato",subtract_individual:"Sottrai Individualmente",sum_total:"Somma solare e secondaria",tap_action:"Azione al tocco",template:"Modello",transparency:"Trasparenza",unit_of_measurement:"Unità",unit_white_space:"Spazio Bianco Unità",use_metadata:"Utilizza Metadati",use_new_flow_rate_model:"Utilizza Nuovo Modello di Tasso di Flusso"},Yt={card:Wt,editor:Zt},Xt=Object.freeze({__proto__:null,card:Wt,default:Yt,editor:Zt}),qt={label:{car:"Auto",motorbike:"Motorfiets"}},Kt={accept_negative:"Negatieve waarden accepteren",action:"Actie",advanced:"Geavanceerde Opties",allow_layout_break:"Lay-out doorbreken toestaan",base_decimals:"Decimalen voor basis",battery:"Batterij",calculate_flow_rate:"Stroomsnelheid Berekenen",circle_animation:"Cirkel Animatie",clickable_entities:"Klikbare Entiteiten",color:"Kleur",color_circle:"Kleur van Cirkel",color_dynamically:"Kleur dynamisch",color_icon:"Kleur van Pictogram",color_state_of_charge_value:"Kleur",color_value:"Kleur van Waarde",combined:"Gecombineerde entiteit (één entiteit met positieve en negatieve waarden)",consumption:"Verbruik",custom:"Aangepast",custom_colors:"Aangepaste kleuren",dashboard_link:"Dashboard-link",dashboard_link_label:"Naam van Dashboard Link",decimals:"Decimalen",disable_dots:"Punten Uitschakelen",display_state:"Toestand Weergeven",display_zero:"Nul Weergeven",display_zero_lines:"Nullijnen Weergeven",display_zero_state:"Nul Toestand Weergeven",display_zero_tolerance:"Nultolerantie Weergeven",double_tap_action:"Dubbel tik actie",entity_generator:"Generator",fossil_fuel_percentage:"Fossiele Brandstof",grey_color:"Grijstint",grey_out:"Grijstint",grid:"Elektriciteitsnet",hide:"Verbergen",hold_action:"Ingedrukt houden actie",home:"Thuis",icon_alert:"Pictogram voor Alarm",individual:"Individueel",invert_state:"Toestand Omkeren",inverted_animation:"Animatie Omkeren",kilo_decimals:"Decimalen voor kilo",kilo_threshold:"Drempel van basis naar kilo",label_alert:"Label voor Alarm",max_expected_power:"Maximaal Verwacht Vermogen",max_flow_rate:"Maximale Stroomsnelheid",min_expected_power:"Minimaal Verwacht Vermogen",min_flow_rate:"Minimale Stroomsnelheid",mode:"Modus",mega_decimals:"Decimalen voor mega",mega_threshold:"Drempel van kilo naar mega",navigation_path:"Navigatiepad",no_color:"Geen kleur",no_labels:"Geen labels",override_state:"Toestand Overschrijven",power_outage:"Stroomuitval",production:"Productie",secondary_info:"Secundaire informatie",separated:"Gescheiden entiteiten (één entiteit voor consumptie en één voor productie)",show:"Weergeven",show_direction:"Richting Weergeven",show_state_of_charge:"Laadstatus Weergeven",solar:"Zonne-energie",sort_individual_devices:"Sorteer individuele apparaten",state_alert:"Toestand van Alarm",state_of_charge:"Laadstatus",state_of_charge_decimals:"Decimalen",state_of_charge_icon:"Pictogram",state_of_charge_unit:"Eenheid",state_of_charge_unit_white_space:"Spaties",state_type:"Type Toestand",subtract_individual:"Individueel Aftrekken",sum_total:"Som van zon en secundair",tap_action:"Tik Actie",template:"Sjabloon",transparency:"Transparantie",unit_of_measurement:"Eenheid",unit_white_space:"Eenheid Spaties",use_metadata:"Metadata Gebruiken",use_new_flow_rate_model:"Nieuw Stroomsnelheid Model Gebruiken"},Jt={card:qt,editor:Kt},Qt=Object.freeze({__proto__:null,card:qt,default:Jt,editor:Kt}),eo={label:{car:"Samochód",motorbike:"Motocykl"}},to={accept_negative:"Akceptuj wartości ujemne",action:"Akcja",advanced:"Zaawansowane opcje",allow_layout_break:"Zezwól na łamanie układu",base_decimals:"Miejsca po przecinku dla podstawy",battery:"Bateria",calculate_flow_rate:"Oblicz wskaźnik przepływu",circle_animation:"Animacja okręgu",clickable_entities:"Klikalne jednostki",color:"Kolor",color_circle:"Kolor okręgu",color_dynamically:"Kolor dynamicznie",color_icon:"Kolor ikony",color_state_of_charge_value:"Kolor",color_value:"Kolor wartości",combined:"Jednostka połączona (jedna jednostka z wartościami dodatnimi i ujemnymi)",consumption:"Zużycie",custom:"Niestandardowy",custom_colors:"Kolory niestandardowe",dashboard_link:"Link do panelu",dashboard_link_label:"Nazwa linku do panelu",decimals:"Miejsca po przecinku",disable_dots:"Wyłącz kropki",display_state:"Wyświetl stan",display_zero:"Wyświetl zero",display_zero_lines:"Wyświetl linie zera",display_zero_state:"Wyświetl stan zera",display_zero_tolerance:"Wyświetl tolerancję zera",double_tap_action:"Akcja podwójnego dotknięcia",entity_generator:"Generator",fossil_fuel_percentage:"Paliwo kopalne",grey_color:"Kolor szary",grey_out:"Szary",grid:"Sieć elektryczna",hide:"Ukryj",hold_action:"Akcja przytrzymania",home:"Dom",icon_alert:"Ikona alertu",individual:"Indywidualne",invert_state:"Odwróć stan",inverted_animation:"Odwróć animację",kilo_decimals:"Miejsca po przecinku dla kilo",kilo_threshold:"Próg z podstawy na kilo",label_alert:"Etykieta alertu",max_expected_power:"Maksymalna oczekiwana moc",max_flow_rate:"Maksymalna szybkość przepływu",min_expected_power:"Minimalna oczekiwana moc",min_flow_rate:"Minimalna szybkość przepływu",mode:"Tryb",mega_decimals:"Miejsca po przecinku dla mega",mega_threshold:"Próg z kilo na mega",navigation_path:"Ścieżka nawigacji",no_color:"Bez koloru",no_labels:"Bez etykiet",override_state:"Nadpisanie stanu",power_outage:"Brak prądu",production:"Produkcja",secondary_info:"Informacje dodatkowe",separated:"Oddzielne podmioty (jeden podmiot do konsumpcji i jeden do produkcji)",show:"Pokaż",show_direction:"Pokaż kierunek",show_state_of_charge:"Pokaż stan naładowania",solar:"Energia słoneczna",sort_individual_devices:"Sortuj poszczególne urządzenia",state_alert:"Stan alertu",state_of_charge:"Stan naładowania",state_of_charge_decimals:"Miejsca po przecinku",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednostka",state_of_charge_unit_white_space:"Spacja jednostki",state_type:"Typ stanu",subtract_individual:"Odjęcie indywidualne",sum_total:"Zsumuj słoneczne i dodatkowe",tap_action:"Akcja dotknięcia",template:"Szablon",transparency:"Przezroczystość",unit_of_measurement:"Jednostka",unit_white_space:"Spacja jednostki",use_metadata:"Użyj metadanych",use_new_flow_rate_model:"Nowy model wskaźnika przepływu"},oo={card:eo,editor:to},io=Object.freeze({__proto__:null,card:eo,default:oo,editor:to}),ao={label:{car:"Carro",motorbike:"Mota"}},no={accept_negative:"Aceitar Valores Negativos",action:"Ação",advanced:"Opções Avançadas",allow_layout_break:"Permitir quebra de layout",base_decimals:"Casas decimais da base",battery:"Bateria",calculate_flow_rate:"Calcular Taxa de Fluxo",circle_animation:"Animação de Círculo",clickable_entities:"Entidades Clicáveis",color:"Cor",color_circle:"Cor do Círculo",color_dynamically:"Cor dinâmica",color_icon:"Cor do Ícone",color_state_of_charge_value:"Cor",color_value:"Cor do Valor",combined:"Entidade combinada (uma entidade com valores positivos e negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Cores personalizadas",dashboard_link:"Link do Painel",dashboard_link_label:"Nome do Link do Painel",decimals:"Casas Decimais",disable_dots:"Desativar Pontos",display_state:"Exibir Estado",display_zero:"Exibir Zero",display_zero_lines:"Exibir Linhas Zero",display_zero_state:"Exibir Estado Zero",display_zero_tolerance:"Tolerância de Zero",double_tap_action:"Ação de Toque Duplo",entity_generator:"Gerador",fossil_fuel_percentage:"Combustíveis Fósseis",grey_color:"Cor do Cinza",grey_out:"Cinza",grid:"Rede",hide:"Esconder",hold_action:"Ação ao Segurar",home:"Casa",icon_alert:"Ícone para Alerta",individual:"Individuais",invert_state:"Inverter Estado",inverted_animation:"Animação Invertida",kilo_decimals:"Casas decimais de quilo",kilo_threshold:"Limiar de base para quilo",label_alert:"Rótulo para Alerta",max_expected_power:"Potência Máxima Esperada",max_flow_rate:"Taxa de Fluxo Máxima",min_expected_power:"Potência Mínima Esperada",min_flow_rate:"Taxa de Fluxo Mínima",mode:"Modo",mega_decimals:"Casas decimais de mega",mega_threshold:"Limiar de quilo para mega",navigation_path:"Caminho de Navegação",no_color:"Sem cor",no_labels:"Sem rótulos",override_state:"Substituir Estado",power_outage:"Falta de energia",production:"Produção",secondary_info:"Informação Secundária",separated:"Entidades Separadas (Uma entidade para consumo e outra para produção)",show:"Mostrar",show_direction:"Mostrar Direção",show_state_of_charge:"Exibir Estado de Carga",solar:"Energia solar",sort_individual_devices:"Classifique dispositivos individuais",state_alert:"Estado do Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Casas Decimais",state_of_charge_icon:"Ícone",state_of_charge_unit:"Unidade",state_of_charge_unit_white_space:"Espaçamento",state_type:"Tipo de Estado",subtract_individual:"Subtrair Individualmente",sum_total:"Somar solar e secundário",tap_action:"Ação de Toque",template:"Modelo",transparency:"Transparência",unit_of_measurement:"Unidade",unit_white_space:"Espaçamento da Unidade",use_metadata:"Utilizar Metadados",use_new_flow_rate_model:"Utilizar Novo Modelo de Velocidade"},ro={card:ao,editor:no},so=Object.freeze({__proto__:null,card:ao,default:ro,editor:no}),lo={label:{car:"Carro",motorbike:"Mota"}},co={accept_negative:"Aceitar Valores Negativos",action:"Ação",advanced:"Opções Avançadas",allow_layout_break:"Permitir quebra de layout",base_decimals:"Casas decimais da base",battery:"Bateria",calculate_flow_rate:"Calcular Taxa de Fluxo",circle_animation:"Animação de Círculo",clickable_entities:"Entidades Clicáveis",color:"Cor",color_circle:"Cor do Círculo",color_dynamically:"Cor dinâmica",color_icon:"Cor do Ícone",color_state_of_charge_value:"Cor",color_value:"Cor do Valor",combined:"Entidade combinada (uma entidade com valores positivos e negativos)",consumption:"Consumo",custom:"Personalizado",custom_colors:"Cores personalizadas",dashboard_link:"Link do Painel de Controlo",dashboard_link_label:"Nome do Link do Painel de Controlo",decimals:"Casas Decimais",disable_dots:"Desativar Pontos",display_state:"Mostrar Estado",display_zero:"Mostrar Zero",display_zero_lines:"Mostrar Linhas Zero",display_zero_state:"Mostrar Estado Zero",display_zero_tolerance:"Tolerância do Zero",double_tap_action:"Ação de Toque Duplo",entity_generator:"Gerador",fossil_fuel_percentage:"Combustíveis Fósseis",grey_color:"Cor Cinzenta",grey_out:"Cinzento",grid:"Rede",hide:"Esconder",hold_action:"Ação ao Segurar",home:"Casa",icon_alert:"Ícone para Alerta",individual:"Individuais",invert_state:"Inverter Estado",inverted_animation:"Animação Invertida",kilo_decimals:"Casas decimais de quilo",kilo_threshold:"Limiar de base para quilo",label_alert:"Nome para Alerta",max_expected_power:"Potência Máxima Esperada",max_flow_rate:"Taxa de Fluxo Máxima",min_expected_power:"Potência Mínima Esperada",min_flow_rate:"Taxa de Fluxo Mínima",mode:"Modo",mega_decimals:"Casas decimais de mega",mega_threshold:"Limiar de quilo para mega",navigation_path:"Caminho de Navegação",no_color:"Sem cor",no_labels:"Sem etiquetas",override_state:"Substituir Estado",power_outage:"Falta de energia",production:"Produção",secondary_info:"Informação Secundária",separated:"Entidades Separadas (Uma entidade para consumo e outra para produção)",show:"Mostrar",show_direction:"Mostrar Direção",show_state_of_charge:"Mostrar Estado de Carga",solar:"Energia solar",sort_individual_devices:"Classifique dispositivos individuais",state_alert:"Estado do Alerta",state_of_charge:"Estado de Carga",state_of_charge_decimals:"Casas Decimais",state_of_charge_icon:"Ícone",state_of_charge_unit:"Unidade",state_of_charge_unit_white_space:"Espaçamento",state_type:"Tipo de Estado",subtract_individual:"Subtrair Individualmente",sum_total:"Somar solar e secundário",tap_action:"Ação de Toque",template:"Modelo",transparency:"Transparência",unit_of_measurement:"Unidade",unit_white_space:"Espaçamento da Unidade",use_metadata:"Utilizar Metadados",use_new_flow_rate_model:"Utilizar Novo Modelo de Velocidade"},uo={card:lo,editor:co},po={label:{car:"Автомобиль",motorbike:"Мотоцикл"}},ho={accept_negative:"Принять отрицательные значения",action:"Действие",advanced:"Расширенные настройки",allow_layout_break:"Разрешить разрыв макета",base_decimals:"Десятичные базовые",battery:"Батарея",calculate_flow_rate:"Рассчитать скорость потока",circle_animation:"Анимация круга",clickable_entities:"Кликабельные сущности",color:"Цвет",color_circle:"Цвет круга",color_dynamically:"Цвет динамически",color_icon:"Цвет иконки",color_state_of_charge_value:"Цвет",color_value:"Цвет значения",combined:"Комбинированный объект (один объект с положительными и отрицательными значениями)",consumption:"Потребление",custom:"Пользовательский",custom_colors:"Пользовательские цвета",dashboard_link:"Ссылка на панель управления",dashboard_link_label:"Название ссылки на панель управления",decimals:"Десятичные",disable_dots:"Отключить точки",display_state:"Отображать состояние",display_zero:"Отображать ноль",display_zero_lines:"Отображать нулевые линии",display_zero_state:"Отображать состояние нуля",display_zero_tolerance:"Допустимая погрешность нуля",double_tap_action:"действие двойного касания",entity_generator:"Генератор",fossil_fuel_percentage:"Полный объем ископаемого топлива",grey_color:"Серый цвет",grey_out:"Серый",grid:"Электрическая сеть",hide:"Скрыть",hold_action:"действие удержания",home:"Домашняя",icon_alert:"Иконка для предупреждения",individual:"Индивидуальная",invert_state:"Инвертировать состояние",inverted_animation:"Инвертированная анимация",kilo_decimals:"Десятичные кило",kilo_threshold:"Пороговое значение базового в кило",label_alert:"Метка для предупреждения",max_expected_power:"Максимальная ожидаемая мощность",max_flow_rate:"Максимальная скорость потока",min_expected_power:"Минимальная ожидаемая мощность",min_flow_rate:"Минимальная скорость потока",mode:"Режим",mega_decimals:"Десятичные мега",mega_threshold:"Пороговое значение кило в мега",navigation_path:"путь навигации",no_color:"Без цвета",no_labels:"Без подписей",override_state:"Переопределить состояние",power_outage:"Отключение электричества",production:"Производство",secondary_info:"Вторичная информация",separated:"Отдельные объекты (один объект для потребления и один для производства)",show:"Показать",show_direction:"Показать направление",show_state_of_charge:"Показать уровень заряда",solar:"Солнечная",sort_individual_devices:"Сортировка отдельных устройств",state_alert:"Состояние предупреждения",state_of_charge:"Уровень заряда",state_of_charge_decimals:"Десятичные",state_of_charge_icon:"Иконка",state_of_charge_unit:"Единица измерения",state_of_charge_unit_white_space:"Пробел",state_type:"Тип состояния",subtract_individual:"Вычесть индивидуально",sum_total:"Суммировать солнечную и вторичную",tap_action:"действие касания",template:"Шаблон",transparency:"Прозрачность",unit_of_measurement:"Единица измерения",unit_white_space:"Пробел единицы измерения",use_metadata:"Использовать метаданные",use_new_flow_rate_model:"Использовать новую модель скорости потока"},_o={card:po,editor:ho},mo={label:{car:"Auto",motorbike:"Motorka"}},fo={accept_negative:"Povoliť záporné hodnoty",action:"Akcia",advanced:"Pokročilé nastavenia",allow_layout_break:"Povoliť zalomenie rozloženia",base_decimals:"Desatinné miesta pre základ",battery:"Batéria",calculate_flow_rate:"Počítať prietok",circle_animation:"Kruhová animácia",clickable_entities:"Entity, na ktoré sa dá kliknúť",color:"Farba",color_circle:"Farba kruhu",color_dynamically:"Farba dynamicky",color_icon:"Farba ikony",color_state_of_charge_value:"Farba",color_value:"Farba hodnoty",combined:"Kombinovaná entita (jedna entita s kladnými a zápornými hodnotami)",consumption:"Spotreba",custom:"Voliteľné",custom_colors:"Vlastné farby",dashboard_link:"Odkaz na informačný panel",dashboard_link_label:"Názov odkazu na informačný panel",decimals:"Desatinné",disable_dots:"Vypnúť bodky",display_state:"Zobraziť stav",display_zero:"Zobraziť nulu",display_zero_lines:"Zobraziť nulové riadky",display_zero_state:"Zobrazenie nulového stavu",display_zero_tolerance:"Zobraziť nulovú toleranciu",double_tap_action:"Akcia pri dvojitom klepnutí",entity_generator:"Generátor",fossil_fuel_percentage:"Fosílne palivo",grey_color:"Šedá farba",grey_out:"Zosiviť",grid:"Sieť",hide:"Skryť",hold_action:"Akcia pri podržaní",home:"Doma",icon_alert:"Ikona pre upozornenie",individual:"Individuálne",invert_state:"Invertovať stav",inverted_animation:"Invertovať animáciu",kilo_decimals:"Desatinné miesta pre kilo",kilo_threshold:"Prah zo základu na kilo",label_alert:"Štítok pre upozornenie",max_expected_power:"Max očakávaný výkon",max_flow_rate:"Max prietok",min_expected_power:"Min očakávaný výkon",min_flow_rate:"Min prietok",mode:"Mód",mega_decimals:"Desatinné miesta pre mega",mega_threshold:"Prah z kila na mega",navigation_path:"Navigačná cesta",no_color:"Bez farby",no_labels:"Bez popisov",override_state:"Prepísať stav",power_outage:"Výpadok",production:"Výroba",secondary_info:"Sekundárne informácie",separated:"Oddelené subjekty (jeden subjekt pre spotrebu a jeden pre výrobu)",show:"Zobraziť",show_direction:"Zobraziť smer",show_state_of_charge:"Zobraziť stav nabitia",solar:"Solárne",sort_individual_devices:"Zoraďte jednotlivé zariadenia",state_alert:"Stav upozornenia",state_of_charge:"Stav nabitia",state_of_charge_decimals:"Desatinné",state_of_charge_icon:"Ikona",state_of_charge_unit:"Jednotky",state_of_charge_unit_white_space:"Biela plocha",state_type:"Typ stavu",subtract_individual:"Odčítať individuálne",sum_total:"Sčítať solárne a sekundárne",tap_action:"Akcia po klepnutí",template:"Šablóna",transparency:"Transparentnosť",unit_of_measurement:"Jednotka",unit_white_space:"Jednotka bielej plochy",use_metadata:"Použiť Metadata",use_new_flow_rate_model:"Nový model prietoku"},go={card:mo,editor:fo},yo={label:{car:"Bil",motorbike:"Motorcykel"}},vo={accept_negative:"Acceptera negativa värden",action:"Åtgärd",advanced:"Avancerade inställningar",allow_layout_break:"Tillåt layoutbrytning",base_decimals:"Decimaler för bas",battery:"Batteri",calculate_flow_rate:"Beräkna flöde",circle_animation:"Cirkelanimation",clickable_entities:"Klickbara entiteter",color:"Färg",color_circle:"Cirkelfärg",color_dynamically:"Färg dynamiskt",color_icon:"Ikonfärg",color_state_of_charge_value:"Färg",color_value:"Färg på värde",combined:"Sammansatt entitet (en entitet med postitiva och negativa värden)",consumption:"Konsumtion",custom:"Anpassad",custom_colors:"Anpassade färger",dashboard_link:"Länk till kontrollpanel",dashboard_link_label:"Länknamn till kontrollpanel",decimals:"Decimaler",disable_dots:"Avaktivera punkter",display_state:"Visningsläge",display_zero:"Visa vid nollvärde",display_zero_lines:"Vising av inaktiva linjer",display_zero_state:"Visning vid noll",display_zero_tolerance:"Tolerans för nollvärde",double_tap_action:"Dubbeltrycksåtgärd",entity_generator:"Generator",fossil_fuel_percentage:"Fossilt bränsle",grey_color:"Grå färg",grey_out:"Utgråad",grid:"Nät",hide:"Dölj",hold_action:"Hålltrycksåtgärd",home:"Hem",icon_alert:"Varningsikon",individual:"Individuell",invert_state:"Invertera status",inverted_animation:"Reversera animation",kilo_decimals:"Decimaler för kilo",kilo_threshold:"Tröskel från bas till kilo",label_alert:"Varningsetikett",max_expected_power:"Maximal förväntad effekt",max_flow_rate:"Maximalt flöde",min_expected_power:"Minimal förväntad effekt",min_flow_rate:"Minimalt flöde",mode:"Läge",mega_decimals:"Decimaler för mega",mega_threshold:"Tröskel från kilo till mega",navigation_path:"Navigationsväg",no_color:"Ingen färg",no_labels:"Inga etiketter",override_state:"Använd entitetsvärde",power_outage:"Strömavbrott",production:"Produktion",secondary_info:"Sekundär information",separated:"Separata entiteter (en entitet för konsumtion och en för produktion)",show:"Visa",show_direction:"Visa riktning",show_state_of_charge:"Visa laddningsnivå",solar:"Sol",sort_individual_devices:"Sortera enskilda enheter",state_alert:"Status vid strömavbrott",state_of_charge:"Laddningsnivå",state_of_charge_decimals:"Decimaler",state_of_charge_icon:"Ikon",state_of_charge_unit:"Enhet",state_of_charge_unit_white_space:"Mellanrum före enhet",state_type:"Statustyp",subtract_individual:"Individuell avräkning",sum_total:"Summera sol och sekundär",tap_action:"Tryckåtgärd",template:"Mall",transparency:"Transparens",unit_of_measurement:"Enhet",unit_white_space:"Mellanrum före enhet",use_metadata:"Använd metadata",use_new_flow_rate_model:"Ny flödesmodell"},bo={card:yo,editor:vo},wo={label:{car:"Автомобіль",motorbike:"Мотоцикл"}},xo={accept_negative:"Дозволити від’ємні значення",action:"Дія",advanced:"Розширені параметри",allow_layout_break:"Дозволити розрив макета",base_decimals:"Десяткові знаки для бази",battery:"Акумулятор",calculate_flow_rate:"Розраховувати швидкість потоку",circle_animation:"Анімація кола",clickable_entities:"Клікабельні сутності",color:"Колір",color_circle:"Колір кола",color_dynamically:"Колір динамічно",color_icon:"Колір іконки",color_state_of_charge_value:"Колір заряду",color_value:"Колір значення",combined:"Об’єднана сутність (одна сутність із позитивними та негативними значеннями)",consumption:"Споживання",custom:"Користувацький",custom_colors:"Власні кольори",dashboard_link:"Посилання на дашборд",dashboard_link_label:"Назва посилання на дашборд",decimals:"Кількість десяткових знаків",disable_dots:"Вимкнути точки",display_state:"Показувати стан",display_zero:"Показувати нульові значення",display_zero_lines:"Показувати лінії з нульовим значенням",display_zero_state:"Показувати стан при нулі",display_zero_tolerance:"Допуск для нульових значень",double_tap_action:"Дія при подвійному натисканні",entity_generator:"Генератор сутностей",fossil_fuel_percentage:"Частка викопного палива",grey_color:"Колір затемнення",grey_out:"Затемнити неактивні",grid:"Мережа",hide:"Приховати",hold_action:"Дія при утриманні",home:"Дім",icon_alert:"Іконка сповіщення",individual:"Окремо",invert_state:"Інвертувати стан",inverted_animation:"Інвертована анімація",kilo_decimals:"Десяткові знаки для кіло",kilo_threshold:"Поріг переходу база → кіло",label_alert:"Мітка сповіщення",max_expected_power:"Максимальна очікувана потужність",max_flow_rate:"Максимальна швидкість потоку",min_expected_power:"Мінімальна очікувана потужність",min_flow_rate:"Мінімальна швидкість потоку",mode:"Режим",mega_decimals:"Десяткові знаки для мега",mega_threshold:"Поріг переходу кіло → мега",navigation_path:"Шлях переходу",no_color:"Без кольору",no_labels:"Без підписів",override_state:"Перевизначити стан",power_outage:"Відключення живлення",production:"Виробництво",secondary_info:"Додаткова інформація",separated:"Розділені сутності (окрема для споживання та окрема для виробництва)",show:"Показати",show_direction:"Показувати напрямок",show_state_of_charge:"Показувати рівень заряду",solar:"Сонячна енергія",sort_individual_devices:"Сортувати окремі пристрої",state_alert:"Стан сповіщення",state_of_charge:"Рівень заряду",state_of_charge_decimals:"Десяткові знаки заряду",state_of_charge_icon:"Іконка заряду",state_of_charge_unit:"Одиниця виміру заряду",state_of_charge_unit_white_space:"Пробіл одиниці виміру заряду",state_type:"Тип стану",subtract_individual:"Віднімати індивідуальні значення",sum_total:"Сумувати сонячну та вторинну",tap_action:"Дія при натисканні",template:"Шаблон",transparency:"Прозорість",unit_of_measurement:"Одиниця виміру",unit_white_space:"Пробіл між числом і одиницею",use_metadata:"Використовувати метадані",use_new_flow_rate_model:"Новий алгоритм швидкості потоку"},ko={card:wo,editor:xo};const So={ca:ht,cs:gt,en:At,de:wt,dk:Et,pt:Object.freeze({__proto__:null,card:lo,default:uo,editor:co}),pt_BR:so,es:zt,nl:Qt,it:Xt,fr:Ft,ru:Object.freeze({__proto__:null,card:po,default:_o,editor:ho}),fi:jt,pl:io,sk:Object.freeze({__proto__:null,card:mo,default:go,editor:fo}),sv:Object.freeze({__proto__:null,card:yo,default:bo,editor:vo}),hi:Vt,ua:Object.freeze({__proto__:null,card:wo,default:ko,editor:xo})};function Eo(e,t){try{return e.split(".").reduce((e,t)=>e[t],So[t])}catch{return}}function $o(e){let t=Eo(e,(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_"));return t||(t=Eo(e,"en")),t??e}const Co=(e,t)=>!!e.entities[t]?.invert_state,Do=e=>Math.abs(Math.min(e,0)),Ao=e=>Math.max(e,0),Po=(e,t,o)=>{const i=t.entities?.[o]?.secondary_info?.entity;if("string"!=typeof i)return null;const a=e.states[c(i)];if(!a)return null;const n=a.state;return p(n)?Number(n):n},Mo=(e,t,o)=>{const i=t.entities[o]?.entity;if(void 0===i)return null;if("string"==typeof i){const a=nt(e,i);return Co(t,o)?Ao(a):Do(a)}return nt(e,i.production)},To=(e,t,o)=>{const i=t.entities[o]?.entity;if(void 0===i)return null;if("string"==typeof i){const a=nt(e,i);return Co(t,o)?Do(a):Ao(a)}return nt(e,i.consumption)},zo=(e,t)=>{const o=t.entities.battery?.state_of_charge;return void 0===o?null:it(e,o)},Oo=(e,t)=>Mo(e,t,"battery"),No=(e,t)=>To(e,t,"battery"),Io=(e,t)=>To(e,t,"grid"),jo=(e,t)=>Po(e,t,"grid"),Bo=(e,t)=>Po(e,t,"home"),Lo=(e,t)=>{if(t&&Qe(e,t))return e.states[c(t)];ot(t)},Ro=(e,t,o)=>t?.icon?t.icon:t?.use_metadata?"string"==typeof t?.entity?Lo(e,t?.entity)?.attributes?.icon||o:Lo(e,t?.entity?.consumption)?.attributes?.icon||Lo(e,t?.entity?.production)?.attributes?.icon||o:o,Fo=(e,t,o)=>t?.name?t.name:t?.use_metadata?"string"==typeof t?.entity?Lo(e,t.entity)?.attributes?.friendly_name||o:Lo(e,t?.entity?.consumption)?.attributes?.friendly_name||Lo(e,t?.entity?.production)?.attributes?.friendly_name||o:o,Ho=["K","M","G","T","P","E","Z","Y"],Uo=(e,t)=>{const o=t.toUpperCase().slice(0,1),i=Ho.indexOf(o);return i>-1?e*Math.pow(1e3,i+1):e},Go=(e,t,o,i)=>{if(!o)return((e,t)=>{const o=it(e,t);if(!t||null===o)return 0;const i=e.states[c(t)];if(!i)return 0;const a=i.attributes.unit_of_measurement??"";return Uo(o,a)})(e,i);if(!t)throw new Error("Energy growth map is required");return((e,t)=>t?l(t).reduce((t,o)=>t+(e[o]??0),0):0)(t,i)},Vo=(e,t)=>{if("string"!=typeof t?.entity)return null;const o=Lo(e,t?.secondary_info?.entity),i=o?.state;return p(i)?Number(i):i},Wo=(e,t)=>!!e&&e>=t,Zo=(e,t)=>e?t?Wo(e,t)?e:0:e:0,Yo={field:void 0,entity:"",has:!1,state:null,displayZero:!1,displayZeroTolerance:0,icon:"",name:"",color:null,unit:void 0,unit_white_space:!1,invertAnimation:!1,showDirection:!1,secondary:{entity:null,template:null,has:!1,state:null,icon:null,unit:null,unit_white_space:!1,displayZero:!1,accept_negative:!1,displayZeroTolerance:0,decimals:null}},Xo=({hass:e,config:o,energyGrowthMap:i,useDateSelection:a,field:n})=>{if(!n||!n?.entity)return Yo;const r=n.entity,s=(({hass:e,config:o,energyGrowthMap:i,useDateSelection:a,field:n})=>{const r=t(o),s=n?.entity;if(void 0===s)return null;if(r)return Math.abs(Go(e,i,a,s));const l=nt(e,s);return Math.abs(l)})({hass:e,config:o,energyGrowthMap:i,useDateSelection:a,field:n}),l=n?.display_zero||!1,c=n?.display_zero_tolerance||0,d=((e,t,o)=>!!e||!!Wo(t,o))(l,s,c),u=s&&s<0,p=n?.inverted_animation||!1,h=u?!p:p;let _=null;var m;return n?.color&&"string"==typeof n?.color?_=n.color:n?.color&&"object"==typeof n?.color&&(_=(m=n.color)?"#".concat(m.map(e=>e.toString(16).padStart(2,"0")).join("")):""),{field:n,entity:r,has:d,state:s,displayZero:l,displayZeroTolerance:c,icon:Ro(e,n,"mdi:flash"),name:Fo(e,n,"Individual"),color:_,unit:n?.unit_of_measurement,unit_white_space:!1!==n?.unit_white_space,decimals:n?.decimals,invertAnimation:h,showDirection:n?.show_direction||!1,secondary:{entity:n?.secondary_info?.entity||null,template:n?.secondary_info?.template||null,has:void 0!==n?.secondary_info?.entity,state:Vo(e,n)||null,accept_negative:n?.secondary_info?.accept_negative||!1,icon:n?.secondary_info?.icon||null,unit:n?.secondary_info?.unit_of_measurement||null,unit_white_space:!1!==n?.secondary_info?.unit_white_space,displayZero:n?.secondary_info?.display_zero||!1,displayZeroTolerance:n?.secondary_info?.display_zero_tolerance||0,decimals:n?.secondary_info?.decimals||null,tap_action:n?.secondary_info?.tap_action,hold_action:n?.secondary_info?.hold_action,double_tap_action:n?.secondary_info?.double_tap_action}}},qo=(e,t)=>{const o=t.entities.fossil_fuel_percentage,i=o?.entity,a=o?.display_zero,n=Io(e,t);return void 0!==i&&(!0===a||null!==n&&1*n-(it(e,i)??0)/100>0)},Ko=(e,t)=>{const o=t.entities.fossil_fuel_percentage,i=o?.entity,a=o?.display_zero,n=Io(e,t);return void 0!==i&&(!0===a||null!==n&&(!1!==qo(e,t)&&1*n-(it(e,i)??0)/100>0))},Jo=(e,t)=>Po(e,t,"fossil_fuel_percentage"),Qo=(e,t)=>{const o=t.entities.solar?.entity,i=t.entities.solar?.secondary_info?.entity;if(void 0===o)return null;const a=nt(e,o),n=i?Math.max(nt(e,i),0):0,r=t.entities.solar?.secondary_info?.sum_total,s=r?a+n:a;return Co(t,"solar")?Do(s):Ao(s)},ei=(e,t)=>Po(e,t,"solar"),ti=(e,t)=>e in t,oi=(e,t,o)=>{let i="var(--primary-text-color)";return"string"==typeof e&&ti(e,t)&&(i=t[e]?.color??i),!0===e&&ti(o,t)&&(i=t[o]?.color??i),i},ii=e=>e?"#".concat(e.map(e=>e.toString(16).padStart(2,"0")).join("")):"",ai=["#d0cc5b","#964cb5","#b54c9d","#5bd0cc","#ff7043","#66bb6a","#42a5f5","#ffa726","#ab47bc","#26c6da"],ni=["left-top","left-bottom","right-top","right-bottom"],ri=(e,t)=>{const{grid:o,solar:i,entities:a,individual:n,battery:r,homeSources:s,homeLargestSource:l,nonFossil:c,display_zero_lines_transparency:d,display_zero_lines_grey_color:u,isCardWideEnough:p}=t;if(e.style.setProperty("--icon-grid-color","consumption"===o.color.icon_type?"var(--energy-grid-consumption-color)":"production"===o.color.icon_type?"var(--energy-grid-return-color)":"color_dynamically"===o.color.icon_type?(o.state.fromGrid??0)>=(o.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--primary-text-color)"),e.style.setProperty("--circle-grid-color","consumption"===o.color.circle_type?"var(--energy-grid-consumption-color)":"production"===o.color.circle_type?"var(--energy-grid-return-color)":"no_color"!==o.color.circle_type?(o.state.fromGrid??0)>=(o.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--energy-grid-consumption-color)"),void 0!==o.color.fromGrid&&("object"==typeof o.color.fromGrid&&(o.color.fromGrid=ii(o.color.fromGrid)),e.style.setProperty("--energy-grid-consumption-color",o.color.fromGrid||"#a280db")),void 0!==o.color.toGrid&&("object"==typeof o.color.toGrid&&(o.color.toGrid=ii(o.color.toGrid)),e.style.setProperty("--energy-grid-return-color",o.color.toGrid||"#a280db")),e.style.setProperty("--secondary-text-grid-color","consumption"===o.secondary.color.type?"var(--energy-grid-consumption-color)":"production"===o.secondary.color.type?"var(--energy-grid-return-color)":!0===o.secondary.color.type?(o.state.fromGrid??0)>=(o.state.toGrid??0)?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)":"var(--primary-text-color)"),!1===a.grid?.color_value?(e.style.setProperty("--text-grid-consumption-color","var(--primary-text-color)"),e.style.setProperty("--text-grid-return-color","var(--primary-text-color)")):(e.style.setProperty("--text-grid-consumption-color","var(--energy-grid-consumption-color)"),e.style.setProperty("--text-grid-return-color","var(--energy-grid-return-color)")),e.style.setProperty("--text-solar-color",a.solar?.color_value?"var(--energy-solar-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-solar-color",a.solar?.secondary_info?.color_value?"var(--energy-solar-color)":"var(--primary-text-color)"),void 0!==a.solar?.color){let t=a.solar.color;"object"==typeof t&&(t=ii(t)),e.style.setProperty("--energy-solar-color",t||"#ff9800")}e.style.setProperty("--icon-solar-color",a.solar?.color_icon?"var(--energy-solar-color)":"var(--primary-text-color)"),void 0!==r.color.fromBattery&&("object"==typeof r.color.fromBattery&&(r.color.fromBattery=ii(r.color.fromBattery)),e.style.setProperty("--energy-battery-out-color",r.color.fromBattery||"#4db6ac")),void 0!==r.color.toBattery&&("object"==typeof r.color.toBattery&&(r.color.toBattery=ii(r.color.toBattery)),e.style.setProperty("--energy-battery-in-color",r.color.toBattery||"#a280db")),r.color.icon_type=a.battery?.color_icon,e.style.setProperty("--icon-battery-color","consumption"===r.color.icon_type?"var(--energy-battery-in-color)":"production"===r.color.icon_type?"var(--energy-battery-out-color)":"color_dynamically"===r.color.icon_type?r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)":"var(--primary-text-color)");const h=a.battery?.color_state_of_charge_value;if(e.style.setProperty("--text-battery-state-of-charge-color","consumption"===h?"var(--energy-battery-in-color)":"production"===h?"var(--energy-battery-out-color)":"color_dynamically"===h?r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)":"var(--primary-text-color)"),e.style.setProperty("--circle-battery-color","consumption"===r.color.circle_type?"var(--energy-battery-in-color)":"production"===r.color.circle_type||"no_color"!==r.color.circle_type&&r.state.fromBattery>=r.state.toBattery?"var(--energy-battery-out-color)":"var(--energy-battery-in-color)"),!1===a.battery?.color_value?(e.style.setProperty("--text-battery-in-color","var(--primary-text-color)"),e.style.setProperty("--text-battery-out-color","var(--primary-text-color)")):(e.style.setProperty("--text-battery-in-color","var(--energy-battery-in-color)"),e.style.setProperty("--text-battery-out-color","var(--energy-battery-out-color)")),void 0!==c.color&&("object"==typeof c.color&&(c.color=ii(c.color)),e.style.setProperty("--non-fossil-color",c.color||"var(--energy-non-fossil-color)")),e.style.setProperty("--icon-non-fossil-color",a.fossil_fuel_percentage?.color_icon?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--text-non-fossil-color",a.fossil_fuel_percentage?.color_value?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-non-fossil-color",a.fossil_fuel_percentage?.secondary_info?.color_value?"var(--non-fossil-color)":"var(--primary-text-color)"),e.style.setProperty("--secondary-text-home-color",a.home?.secondary_info?.color_value?"var(--text-home-color)":"var(--primary-text-color)"),e.style.setProperty("--icon-home-color",oi(a.home?.color_icon,s,l)),e.style.setProperty("--text-home-color",oi(a.home?.color_value,s,l)),!1===a.home?.circle_animation&&e.style.setProperty("--home-circle-animation","none"),e.style.setProperty("--battery-grid-line",o.state.toBattery?"var(--energy-grid-consumption-color)":"var(--energy-grid-return-color)"),e.style.setProperty("--transparency-unused-lines",d?d.toString():"0"),void 0!==u){let t=u;"object"==typeof t&&(t=ii(t)),e.style.setProperty("--greyed-out--line-color",t)}if(i.has&&(r.has?(e.style.setProperty("--lines-svg-not-flat-line-height","106%"),e.style.setProperty("--lines-svg-not-flat-line-top","-3%"),e.style.setProperty("--lines-svg-flat-width","calc(100% - 160px)"),e.style.setProperty("--lines-svg-flat-left","0"),e.style.setProperty("--lines-svg-not-flat-left","0")):(e.style.setProperty("--lines-svg-not-flat-line-top","-2%"),e.style.setProperty("--lines-svg-flat-width",p?"calc(100% - 154px)":"calc(100% - 157px)"),e.style.setProperty("--lines-svg-not-flat-width",p?"calc(103% - 172px)":"calc(103% - 169px)"),e.style.setProperty("--lines-svg-not-flat-left","3px"),e.style.setProperty("--lines-svg-flat-left","-3px"))),n?.some(e=>e.has)){const t=(t,o)=>{const i=(e=>e<ni.length?ni[e]:`ind-${e}`)(o);let a=t?.color;"object"==typeof a&&(a=ii(a)),e.style.setProperty(`--individual-${i}-color`,a||ai[o%ai.length]||"#d0cc5b"),e.style.setProperty(`--icon-individual-${i}-color`,!1!==t?.color_icon?`var(--individual-${i}-color)`:"var(--primary-text-color)"),e.style.setProperty(`--text-individual-${i}-color`,t?.color_value?`var(--individual-${i}-color)`:"var(--primary-text-color)"),e.style.setProperty(`--secondary-text-individual-${i}-color`,t?.secondary_info?.color_value?`var(--individual-${i}-color)`:"var(--primary-text-color)")},o=n.filter(e=>e?.has);for(let e=0;e<o.length;e++){const i=o[e];i&&t(i.field||{},e)}}},si=b`
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

  .card-content {
    max-width: 100%;
    overflow-x: auto;
    padding-bottom: 8px; /* avoid scrollbar clipping */
  }
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
`;const li=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ci={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:O},di=(e=ci,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const a=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,a,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const a=this[i];t.call(this,o),this.requestUpdate(i,a,e,!0,o)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ui(e){return(t,o)=>"object"==typeof o?di(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pi(e){return ui({...e,state:!0,attribute:!1})}
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
function hi(e,t){return(t,o,i)=>((e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o))(t,o,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}!function(e){const t=`https://github.com/flixlix/${e.type}`,o=window;var i;o.customCards=o.customCards||[],o.customCards.push({...e,preview:!0,documentationURL:t}),i={name:e.name,version:e.version,readme:t},et=i,console.groupCollapsed(`%c⚡ ${et.name} v${et.version} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:",et.readme),console.groupEnd()}({type:"power-flow-card-plus-extended",name:"Power Flow Card Plus Extended",description:"An extended version of the power flow card with richer options, advanced features and a few small UI enhancements. Supports up to 10+ individual sensors connected to Home.",version:"1.0.0"});let _i=class extends ke{constructor(){super(...arguments),this._config={},this._templateResults={},this._unsubRenderTemplates=new Map,this._width=0,this.wideEnoughForFourIndividuals=359,this._handleVisibilityChange=()=>{"undefined"!=typeof document&&"visible"===document.visibilityState&&this.requestUpdate()},this.previousDur={},this._pendingTapTimeouts=new WeakMap,this._holdTimeouts=new WeakMap,this._holdTriggered=new WeakMap,this._doubleTapDelay=250,this._holdDelay=500}static get styles(){return si}setConfig(e){if(e.entities.individual1||e.entities.individual2)throw new Error("You are using an outdated configuration. Please update your configuration to the latest version. The individual1 and individual2 properties are now just a single individual array property. The easiest way to do this is to remove the individual1 and individual2 properties and replace them in the UI Editor.");if(!e.entities||!e.entities?.battery?.entity&&!e.entities?.grid?.entity&&!e.entities?.solar?.entity)throw new Error("At least one entity for battery, grid or solar must be defined");this._config={...e,min_flow_rate:h(e.min_flow_rate,d.minFlowRate),max_flow_rate:h(e.max_flow_rate,d.maxFlowRate),base_decimals:h(e.base_decimals,d.baseDecimals),kilo_decimals:h(e.kilo_decimals,d.kiloDecimals),kilo_threshold:h(e.kilo_threshold,d.kiloThreshold),max_expected_power:h(e.max_expected_power,d.maxExpectedPower),min_expected_power:h(e.min_expected_power,d.minExpectedPower),display_zero_lines:{mode:e.display_zero_lines?.mode??d.displayZeroLines.mode,transparency:h(e.display_zero_lines?.transparency,d.displayZeroLines.transparency),grey_color:e.display_zero_lines?.grey_color??d.displayZeroLines.grey_color}}}connectedCallback(){super.connectedCallback(),"undefined"!=typeof document&&document.addEventListener("visibilitychange",this._handleVisibilityChange),this._tryConnectAll()}disconnectedCallback(){this._resizeObserver?.disconnect(),this._resizeObserver=void 0,"undefined"!=typeof document&&document.removeEventListener("visibilitychange",this._handleVisibilityChange),this._tryDisconnectAll(),super.disconnectedCallback()}static async getConfigElement(){return await Promise.resolve().then(function(){return Sn}),document.createElement("power-flow-card-plus-editor")}static getStubConfig(e){return function(e,t="power"){function o(t,o){const i=c(t),a=e.states[i]?.attributes.friendly_name;return o.some(e=>i.includes(e)||a?.includes(e))}let i;i="energy"===t?Object.keys(e.states).filter(t=>{const o=e.states[c(t)];return o?.state&&o.attributes&&"energy"===o.attributes.device_class||o?.entity_id.includes("energy")}):Object.keys(e.states).filter(t=>{const o=e.states[c(t)];return o?.state&&o.attributes&&"power"===o.attributes.device_class||o?.entity_id.includes("power")});const a=["grid","utility","net","meter"],n=["solar","pv","photovoltaic","inverter"],r=["battery"],s=["battery_percent","battery_level","state_of_charge","soc","percentage"],l=i.filter(e=>o(e,a))[0],u=i.filter(e=>o(e,n))[0];return{entities:{battery:{entity:i.filter(e=>o(e,r))[0]??"",state_of_charge:Object.keys(e.states).filter(t=>{const o=e.states[t];return o&&o.state&&o.attributes&&"%"===o.attributes.unit_of_measurement}).filter(e=>o(e,s))[0]??""},grid:l?{entity:l}:void 0,solar:u?{entity:u,display_zero_state:!0}:void 0},clickable_entities:!0,display_zero_lines:!0,use_new_flow_rate_model:!0,base_decimals:d.baseDecimals,kilo_decimals:d.kiloDecimals,min_flow_rate:d.minFlowRate,max_flow_rate:d.maxFlowRate,max_expected_power:d.maxExpectedPower,min_expected_power:d.minExpectedPower,kilo_threshold:d.kiloThreshold,mega_threshold:d.megaThreshold,transparency_zero_lines:d.transparencyZeroLines,sort_individual_devices:!1}}(e,"power")}getCardSize(){return 3}_normalizeActionConfig(e){if(e)return"tap_action"in e||"hold_action"in e||"double_tap_action"in e?e:{tap_action:{action:"more-info"}}}openDetails(e,t,o,i="tap"){e.stopPropagation();const a=this._normalizeActionConfig(t);if(!!!(a?.tap_action||a?.hold_action||a?.double_tap_action)){if(!o||!this._config.clickable_entities)return;if(!((e,t)=>{const o=l(t);for(const t of o)if(!(t in e.states))return!1;return!0})(this.hass,o))return;const e=new CustomEvent("hass-more-info",{composed:!0,detail:{entityId:o}});return void this.dispatchEvent(e)}ct(e.target,this.hass,{entity:o,tap_action:a?.tap_action,hold_action:a?.hold_action,double_tap_action:a?.double_tap_action},i)}onEntityClick(e,t,o){e.stopPropagation();const i=e.currentTarget,a=this._normalizeActionConfig(t);if(i)if(this._holdTriggered.get(i))this._holdTriggered.set(i,!1);else{if(a?.double_tap_action){const t=this._pendingTapTimeouts.get(i);t&&clearTimeout(t);const n=setTimeout(()=>{this.openDetails({stopPropagation:()=>e.stopPropagation(),target:i},a,o,"tap"),this._pendingTapTimeouts.delete(i)},this._doubleTapDelay);return void this._pendingTapTimeouts.set(i,n)}this.openDetails({stopPropagation:()=>e.stopPropagation(),target:i},a,o,"tap")}}onEntityDoubleClick(e,t,o){const i=e.currentTarget,a=this._normalizeActionConfig(t);if(!i)return;const n=this._pendingTapTimeouts.get(i);n&&(clearTimeout(n),this._pendingTapTimeouts.delete(i)),a?.double_tap_action&&this.openDetails({stopPropagation:()=>e.stopPropagation(),target:i},a,o,"double_tap")}onEntityPointerDown(e,t,o){const i=e.currentTarget,a=this._normalizeActionConfig(t);if(!i||!a?.hold_action)return;const n=this._holdTimeouts.get(i);n&&clearTimeout(n),this._holdTriggered.set(i,!1);const r=setTimeout(()=>{this._holdTriggered.set(i,!0),this.openDetails({stopPropagation:()=>e.stopPropagation(),target:i},a,o,"hold"),this._holdTimeouts.delete(i)},this._holdDelay);this._holdTimeouts.set(i,r)}onEntityPointerUp(e){const t=e.currentTarget;if(!t)return;const o=this._holdTimeouts.get(t);o&&(clearTimeout(o),this._holdTimeouts.delete(t))}_renderExtraIndividual(e,t,o){const i=(e=>{const t=["left-top","left-bottom","right-top","right-bottom"];return e<t.length?t[e]:`ind-${e}`})(o),a=!1===this._config.clickable_entities;return ae`
      <div class="circle-container extra-individual" style="--extra-ind-color: var(--individual-${i}-color); --extra-ind-icon-color: var(--icon-individual-${i}-color); --extra-ind-text-color: var(--text-individual-${i}-color); --extra-ind-secondary-color: var(--secondary-text-individual-${i}-color);">
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
    `}render(){if(!this._config||!this.hass)return se;const e=this._renderData??this._computeRenderData(),{entities:t,grid:o,solar:i,battery:a,home:n,nonFossil:r,individualObjs:s,newDur:l,templatesObj:c,homeBatteryCircumference:d,homeGridCircumference:u,homeNonFossilCircumference:h,homeSolarCircumference:m,homeUsageToDisplay:f,individualFieldLeftTop:g,individualFieldLeftBottom:y,individualFieldRightTop:v,individualFieldRightBottom:b,extraIndividuals:w}=e,x=e=>e?void 0===e?.state?"":_(this.hass,this._config,e?.state,{decimals:e?.decimals,unit:e?.unit,unitWhiteSpace:e?.unit_white_space}):"";return ae`
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
        ${(()=>{const e=[],w=s.slice(4);for(let t=0;t<w.length;t+=2)e.push({top:w[t],bottom:w[t+1],columnIndex:t/2+1});return ae`
          <div class="diagram-container" style="display: flex; flex-direction: row; width: max-content;">
            <div class="core-diagram" style="width: 470px; flex-shrink: 0; position: relative;">
              ${i.has||s?.some(e=>e?.has)||r.hasPercentage?ae`<div class="row">
                    ${((e,t,{nonFossil:o,entities:i,templatesObj:a,grid:n,newDur:r,fossilEnergyConsumption:s})=>{const l=!1===t.clickable_entities;return o.hasPercentage?ae`<div class="circle-container low-carbon">
    <span class="label">${o.name}</span>
    <div
      class="circle ${l?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i.fossil_fuel_percentage,i.fossil_fuel_percentage?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i.fossil_fuel_percentage,i.fossil_fuel_percentage?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i.fossil_fuel_percentage,i.fossil_fuel_percentage?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i.fossil_fuel_percentage,i.fossil_fuel_percentage?.entity,"tap")}}
    >
      <ha-ripple .disabled=${l}></ha-ripple>
      ${We(e.hass,e,t,a,o,"nonFossilFuel")}
      ${" "!==o.icon?ae` <ha-icon id="low-carbon-icon" .icon=${o.icon}></ha-icon>`:se}
      ${!1!==i.fossil_fuel_percentage?.display_zero_state||(o.state.power||0)>(i.fossil_fuel_percentage?.display_zero_tolerance||0)?ae`
            <span class="low-carbon"
              >${st(e.hass,t,i.fossil_fuel_percentage.entity,n.state.fromGrid,s)}</span
            >
          `:se}
    </div>
    ${Me(t,o.state.power||0)?ae`
          <svg width="80" height="30">
            <path
              d="M40 -10 v40"
              class="low-carbon ${Te(o.state.power||0,t)}"
              id="low-carbon"
            />
            ${Ee(t)&&o.has&&o.state.power>0?ne`<circle r="1.75" class="low-carbon" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(i.fossil_fuel_percentage?.calculate_flow_rate,r.nonFossil)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                    >
                      <mpath xlink:href="#low-carbon" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`:Xe})(this,this._config,{entities:t,grid:o,newDur:l,nonFossil:r,templatesObj:c})}
                    ${i.has?((e,t,{entities:o,solar:i,templatesObj:a})=>{const n=!1===t.clickable_entities,r=a.solarSecondary,s=o.solar?.secondary_info?.sum_total,l=t.entities.solar?.secondary_info?.entity,c=l?Math.max(nt(e.hass,l),0):0,d=s?i.state.total-c:i.state.total;return ae`<div class="circle-container solar">
    <span class="label">${i.name}</span>
    <div
      class="circle ${n?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,i,i.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,i,i.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,i,i.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i,i.entity,"tap")}}
    >
      <ha-ripple .disabled=${n}></ha-ripple>
      ${(()=>{if(r)return!0;if(!0===t.entities.solar?.secondary_info?.display_zero)return!0;if(!i?.secondary?.state)return!1;if(!p(i?.secondary?.state))return!0;const e=t.entities.solar?.secondary_info?.display_zero_tolerance??0;return Number(i.secondary.state)>=e||t.entities.solar?.secondary_info?.accept_negative&&"number"==typeof Number(+i.secondary.state)})()?We(e.hass,e,t,a,i,"solar"):se}
      ${" "!==i.icon?ae` <ha-icon id="solar-icon" .icon=${i.icon}></ha-icon>`:se}
      ${!1!==o.solar?.display_zero_state||(d||0)>0?ae` <span class="solar">
            ${_(e.hass,t,d,{unit:i.state.unit,unitWhiteSpace:i.state.unit_white_space,decimals:i.state.decimals})}
          </span>`:se}
    </div>
  </div>`})(this,this._config,{entities:t,solar:i,templatesObj:c}):s?.some(e=>e?.has)?Xe:se}
                    ${g?((e,t,{individualObj:o,templatesObj:i,displayState:a,newDur:n})=>{if(!o)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===o.entity)||0,l=n.individual[s]||0;return ae`<div class="circle-container individual-top">
    <span class="label">${o.name}</span>
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o?.field,o?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o?.field,o?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o?.field,o?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o?.field,o?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,i,o,s,"left-top")}
      ${" "!==o.icon?ae` <ha-icon id="individual-left-top-icon" .icon=${o.icon}></ha-icon>`:se}
      ${!1!==o?.field?.display_zero_state||(o.state||0)>(o.displayZeroTolerance??0)?ae` <span class="individual-top individual-left-top">
            ${o?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${o.invertAnimation?"mdi:arrow-down":"mdi:arrow-up"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    ${Me(t,o.state||0)&&!t.entities.home?.hide?ae`
          <svg width="80" height="30">
            <path
              d="M40 -10 v50"
              id="individual-top"
              class="${Te(o.state||0,t)}"
            />
            ${Ee(t)&&o.state&&o.state>=(o.displayZeroTolerance??0)?ne`<circle r="1.75" class="individual-top" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(o?.field?.calculate_flow_rate,l)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${o.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-top" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:se}
  </div>`})(this,this._config,{individualObj:g,displayState:x(g),newDur:l,templatesObj:c}):Xe}
                    ${v?Je(this,this._config,{displayState:x(v),individualObj:v,newDur:l,templatesObj:c,battery:a,individualObjs:s}):Xe}
                  </div>`:se}
              <div class="row">
                ${o.has?((e,t,{entities:o,grid:i,templatesObj:a})=>{const n=!1===t.clickable_entities;return ae`<div class="circle-container grid">
    <div
      class="circle ${n?"pointer-events-none":""}"
      @click=${t=>{const a=i.powerOutage?.entityGenerator??o.grid?.power_outage?.entity,n=i.powerOutage?.isOutage&&a?a:"string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityClick(t,i,n)}}
      @dblclick=${t=>{const a=i.powerOutage?.entityGenerator??o.grid?.power_outage?.entity,n=i.powerOutage?.isOutage&&a?a:"string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityDoubleClick(t,i,n)}}
      @pointerdown=${t=>{const a=i.powerOutage?.entityGenerator??o.grid?.power_outage?.entity,n=i.powerOutage?.isOutage&&a?a:"string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityPointerDown(t,o.grid,n)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{if("Enter"===t.key){const a=i.powerOutage?.entityGenerator??o.grid?.power_outage?.entity,n=i.powerOutage?.isOutage&&a?a:"string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.openDetails(t,o.grid,n,"tap")}}}
    >
      <ha-ripple .disabled=${n}></ha-ripple>
      ${We(e.hass,e,t,a,i,"grid")}
      ${" "!==i.icon?ae` <ha-icon id="grid-icon" .icon=${i.icon}></ha-icon>`:se}
      ${("two_way"===o.grid?.display_state||void 0===o.grid?.display_state||"one_way_no_zero"===o.grid?.display_state&&(i.state.toGrid??0)>0||"one_way"===o.grid?.display_state&&(null===i.state.fromGrid||0===i.state.fromGrid)&&0!==i.state.toGrid)&&null!==i.state.toGrid&&!i.powerOutage.isOutage?ae`<span
            class="return"
            @click=${t=>{const a="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.production;e.onEntityClick(t,i,a)}}
            @dblclick=${t=>{const a="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.production;e.onEntityDoubleClick(t,i,a)}}
            @pointerdown=${t=>{const i="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.production;e.onEntityPointerDown(t,o.grid,i)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.production;e.openDetails(t,o.grid,i,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-left"}></ha-icon>

            ${_(e.hass,t,i.state.toGrid,{unit:i.unit,unitWhiteSpace:i.unit_white_space,decimals:i.decimals})}
          </span>`:se}
      ${("two_way"===o.grid?.display_state||void 0===o.grid?.display_state||"one_way_no_zero"===o.grid?.display_state&&i.state.fromGrid>0||"one_way"===o.grid?.display_state&&(null===i.state.toGrid||0===i.state.toGrid))&&null!==i.state.fromGrid&&!i.powerOutage.isOutage||i.powerOutage.isOutage&&i.powerOutage.entityGenerator?ae` <span
            class="consumption"
            @click=${t=>{const a="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityClick(t,i,a)}}
            @dblclick=${t=>{const a="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityDoubleClick(t,i,a)}}
            @pointerdown=${t=>{const i="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.onEntityPointerDown(t,o.grid,i)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const i="string"==typeof o.grid.entity?o.grid.entity:o.grid.entity.consumption;e.openDetails(t,o.grid,i,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-right"}></ha-icon>
            ${_(e.hass,t,i.state.fromGrid,{unit:i.unit,unitWhiteSpace:i.unit_white_space,decimals:i.decimals})}
          </span>`:se}
      ${i.powerOutage?.isOutage&&!i.powerOutage?.entityGenerator?ae`<span class="grid power-outage">${i.powerOutage.name}</span>`:se}
    </div>
    <span class="label">${i.name}</span>
  </div>`})(this,this._config,{entities:t,grid:o,templatesObj:c}):Xe}
                ${Xe}
                ${t.home?.hide?Xe:((e,t,{home:o,entities:i,templatesObj:a,homeUsageToDisplay:n,homeSolarCircumference:r,CIRCLE_CIRCUMFERENCE:s,homeBatteryCircumference:l,homeNonFossilCircumference:c,homeGridCircumference:d,individual:u})=>{const p=u.filter(e=>e.has).length<=1,h=void 0!==i.home?.entity,_=["none",void 0],m=!_.includes(i.home?.tap_action?.action)||!_.includes(i.home?.hold_action?.action)||!_.includes(i.home?.double_tap_action?.action),f=h||m,g=!1===t.clickable_entities||!f;return ae`
    <div class="circle-container home">
      <div
        class="circle ${g?"pointer-events-none":""}"
        id="home-circle"
        @click=${t=>{e.onEntityClick(t,i.home,i.home?.entity)}}
        @dblclick=${t=>{e.onEntityDoubleClick(t,i.home,i.home?.entity)}}
        @pointerdown=${t=>{e.onEntityPointerDown(t,i.home,i.home?.entity)}}
        @pointerup=${t=>{e.onEntityPointerUp(t)}}
        @pointercancel=${t=>{e.onEntityPointerUp(t)}}
        @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,i.home,i.home?.entity,"tap")}}
      >
        <ha-ripple .disabled=${g}></ha-ripple>
        ${We(e.hass,e,t,a,o,"home")}
        ${" "!==o.icon?ae`<ha-icon id="home-icon" .icon=${o.icon}></ha-icon>`:se}
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
      ${p?ae`<span class="label">${o.name}</span>`:ae`<span class="label"></span>`}
    </div>
  `})(this,this._config,{CIRCLE_CIRCUMFERENCE:lt,entities:t,home:n,homeBatteryCircumference:d,homeGridCircumference:u,homeNonFossilCircumference:h,homeSolarCircumference:m,templatesObj:c,homeUsageToDisplay:f,individual:s})}
                ${Xe}
              </div>
              ${a.has||Pe(s)?ae`<div class="row">
                    ${Xe}
                    ${a.has?((e,t,{battery:o,entities:i})=>{const a=!1===t.clickable_entities;return ae`<div class="circle-container battery">
    <div
      class="circle ${a?"pointer-events-none":""}"
      @click=${t=>{const a=i.battery?.state_of_charge?i.battery?.state_of_charge:"string"==typeof i.battery?.entity?i.battery?.entity:i.battery?.entity.production;e.onEntityClick(t,o,a)}}
      @dblclick=${t=>{const a=i.battery?.state_of_charge?i.battery?.state_of_charge:"string"==typeof i.battery?.entity?i.battery?.entity:i.battery?.entity.production;e.onEntityDoubleClick(t,o,a)}}
      @pointerdown=${t=>{const a=i.battery?.state_of_charge?i.battery?.state_of_charge:"string"==typeof i.battery?.entity?i.battery?.entity:i.battery?.entity.production;e.onEntityPointerDown(t,o,a)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{if("Enter"===t.key){const a=i.battery?.state_of_charge?i.battery?.state_of_charge:"string"==typeof i.battery?.entity?i.battery.entity:i.battery?.entity.production;e.openDetails(t,o,a,"tap")}}}
    >
      <ha-ripple .disabled=${a}></ha-ripple>
      ${null!==o.state_of_charge.state&&!1!==i.battery?.show_state_of_charge?ae` <span
            @click=${t=>{e.onEntityClick(t,o,i.battery?.state_of_charge)}}
            @dblclick=${t=>{e.onEntityDoubleClick(t,o,i.battery?.state_of_charge)}}
            @pointerdown=${t=>{e.onEntityPointerDown(t,o,i.battery?.state_of_charge)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o,i.battery?.state_of_charge,"tap")}}
            id="battery-state-of-charge-text"
          >
            ${_(e.hass,t,o.state_of_charge.state,{unit:o.state_of_charge.unit??"%",unitWhiteSpace:o.state_of_charge.unit_white_space,decimals:o.state_of_charge.decimals,accept_negative:!0})}
          </span>`:se}
      ${" "!==o.icon?ae` <ha-icon
            id="battery-icon"
            .icon=${o.icon}
            @click=${t=>{e.onEntityClick(t,o,i.battery?.state_of_charge)}}
            @dblclick=${t=>{e.onEntityDoubleClick(t,o,i.battery?.state_of_charge)}}
            @pointerdown=${t=>{e.onEntityPointerDown(t,o,i.battery?.state_of_charge)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o,i.battery?.state_of_charge,"tap")}}
          ></ha-icon>`:se}
      ${"two_way"===i.battery?.display_state||void 0===i.battery?.display_state||"one_way_no_zero"===i.battery?.display_state&&o.state.toBattery>0||"one_way"===i.battery?.display_state&&0!==o.state.toBattery?ae`<span
            class="battery-in"
            @click=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.production;e.onEntityClick(t,i.battery,o)}}
            @dblclick=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.production;e.onEntityDoubleClick(t,i.battery,o)}}
            @pointerdown=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.production;e.onEntityPointerDown(t,i.battery,o)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.production;e.openDetails(t,i.battery,o,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-down"}></ha-icon>
            ${_(e.hass,t,o.state.toBattery,{unit:o.unit,unitWhiteSpace:o.unit_white_space,decimals:o.decimals})}</span
          >`:se}
      ${"two_way"===i.battery?.display_state||void 0===i.battery?.display_state||"one_way_no_zero"===i.battery?.display_state&&o.state.fromBattery>0||"one_way"===i.battery?.display_state&&(0===o.state.toBattery||0!==o.state.fromBattery)?ae`<span
            class="battery-out"
            @click=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.consumption;e.onEntityClick(t,i.battery,o)}}
            @dblclick=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.consumption;e.onEntityDoubleClick(t,i.battery,o)}}
            @pointerdown=${t=>{const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.consumption;e.onEntityPointerDown(t,i.battery,o)}}
            @pointerup=${t=>{e.onEntityPointerUp(t)}}
            @pointercancel=${t=>{e.onEntityPointerUp(t)}}
            @keyDown=${t=>{if("Enter"===t.key){const o="string"==typeof i.battery.entity?i.battery.entity:i.battery.entity.consumption;e.openDetails(t,i.battery,o,"tap")}}}
          >
            <ha-icon class="small" .icon=${"mdi:arrow-up"}></ha-icon>
            ${_(e.hass,t,o.state.fromBattery,{unit:o.unit,unitWhiteSpace:o.unit_white_space,decimals:o.decimals})}</span
          >`:se}
    </div>
    <span class="label">${o.name}</span>
  </div>`})(this,this._config,{battery:a,entities:t}):Xe}
                    ${y?((e,t,{individualObj:o,templatesObj:i,displayState:a,newDur:n})=>{if(!o)return Xe;const r=!1===t.clickable_entities,s=t?.entities?.individual?.findIndex(e=>e.entity===o.entity)||0,l=n.individual[s]||0;return ae`<div class="circle-container individual-bottom bottom">
    ${Me(t,o?.state||0)&&!t.entities.home?.hide?ae`
          <svg width="80" height="30">
            <path
              d="M40 40 v-40"
              id="individual-bottom"
              class="${Te(o?.state||0,t)}"
            />
            ${Ee(t)&&o?.state&&o.state>=(o.displayZeroTolerance??0)?ne`<circle r="1.75" class="individual-bottom" vector-effect="non-scaling-stroke">
                    <animateMotion
                      dur="${Ye(!1!==o.field?.calculate_flow_rate,l)}s"
                      repeatCount="indefinite"
                      calcMode="paced"
                      keyPoints="${o.invertAnimation?"0;1":"1;0"}"
                      keyTimes="0;1"
                    >
                      <mpath xlink:href="#individual-bottom" />
                    </animateMotion>
                  </circle>`:se}
          </svg>
        `:ae` <svg width="80" height="30"></svg> `}
    <div
      class="circle ${r?"pointer-events-none":""}"
      @click=${t=>{e.onEntityClick(t,o?.field,o?.entity)}}
      @dblclick=${t=>{e.onEntityDoubleClick(t,o?.field,o?.entity)}}
      @pointerdown=${t=>{e.onEntityPointerDown(t,o?.field,o?.entity)}}
      @pointerup=${t=>{e.onEntityPointerUp(t)}}
      @pointercancel=${t=>{e.onEntityPointerUp(t)}}
      @keyDown=${t=>{"Enter"===t.key&&e.openDetails(t,o?.field,o?.entity,"tap")}}
    >
      <ha-ripple .disabled=${r}></ha-ripple>
      ${qe(e.hass,e,t,i,o,s,"left-bottom")}
      ${" "!==o?.icon?ae` <ha-icon id="individual-left-bottom-icon" .icon=${o?.icon}></ha-icon>`:se}
      ${!1!==o?.field?.display_zero_state||(o?.state||0)>(o.displayZeroTolerance??0)?ae` <span class="individual-bottom individual-left-bottom"
            >${o?.showDirection?ae`<ha-icon
                  class="small"
                  .icon=${o?.invertAnimation?"mdi:arrow-up":"mdi:arrow-down"}
                ></ha-icon>`:se}${a}
          </span>`:se}
    </div>
    <span class="label">${o?.name}</span>
  </div> `})(this,this._config,{displayState:x(y),individualObj:y,newDur:l,templatesObj:c}):Xe}
                    ${b?Ke(this,this._config,{displayState:x(b),individualObj:b,newDur:l,templatesObj:c}):Xe}
                  </div>`:Xe}

              ${((e,{battery:t,grid:o,individual:i,solar:a,newDur:n})=>ae`
  ${He(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})}
  ${Fe(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})}
  ${Ue(e,{battery:t,individual:i,solar:a,newDur:n})}
  ${Re(e,{battery:t,grid:o,individual:i,solar:a,newDur:n})}
  ${Le(e,{battery:t,grid:o,individual:i,newDur:n})}
  ${Be(e,{battery:t,grid:o,individual:i,newDur:n})}
</div>`)(this._config,{battery:a,grid:o,individual:s,newDur:l,solar:i})}
            </div>

            ${e.length>0?ae`
                <div class="right-columns" style="display: flex; flex-direction: row; height: 100%;">
                  ${e.map(e=>ae`
                    <div class="column" style="display: flex; flex-direction: column; justify-content: space-between;">
                      ${e.top?Je(this,this._config,{displayState:x(e.top),individualObj:e.top,newDur:l,templatesObj:c,battery:a,individualObjs:s,columnIndex:e.columnIndex}):Xe}
                      ${Xe}
                      ${e.bottom?Ke(this,this._config,{displayState:x(e.bottom),individualObj:e.bottom,newDur:l,templatesObj:c,columnIndex:e.columnIndex}):Xe}
                    </div>
                  `)}
                </div>
              `:se}
          </div>
          `})()}

        </div>
        ${k=this._config,S=this.hass,k.dashboard_link||k.second_dashboard_link?ae`
    <div class="card-actions">
      ${k.dashboard_link?ae`
            <ha-button appearance="plain" size="small" href=${k.dashboard_link}>
              ${k.dashboard_link_label||S.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
            </ha-button>
          `:se}
      ${k.second_dashboard_link?ae`
            <ha-button appearance="plain" size="small" href=${k.second_dashboard_link}>
              ${k.second_dashboard_link_label||S.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
            </ha-button>
          `:se}
    </div>
  `:se}
      </ha-card>
    `;var k,S}updated(e){if(super.updated(e),!this._config||!this.hass)return;const t=this.shadowRoot?.querySelector("#power-flow-card-plus");if(t){this._resizeObserver||(this._resizeObserver=new ResizeObserver(e=>{const t=e[0];if(!t)return;const o=Math.round(t.contentRect.width);o!==this._width&&(this._width=o)})),this._resizeObserver.observe(t);const e=Math.round(t.getBoundingClientRect().width);e!==this._width&&(this._width=e)}this._tryConnectAll()}willUpdate(e){super.willUpdate(e),this._config&&this.hass&&(e.has("hass")||e.has("_config")||e.has("_templateResults")||e.has("_width")||void 0===this._renderData)&&(this.style.setProperty("--clickable-cursor",!1!==this._config.clickable_entities?"pointer":"default"),this._renderData=this._computeRenderData())}_generateIndividualKeys(){const e=[],t=["left-top","left-bottom","right-top","right-bottom"];for(let o=0;o<t.length;o++)e.push(t[o]);for(let t=4;t<10;t++)e.push(`ind-${t}`);return e}_computeRenderData(){const{entities:e}=this._config,t=null,o={entity:e.grid?.entity,has:void 0!==e?.grid?.entity,hasReturnToGrid:"string"==typeof e.grid?.entity||!!e.grid?.entity?.production,state:{fromGrid:Io(this.hass,this._config),toGrid:(i=this.hass,a=this._config,Mo(i,a,"grid")),toBattery:t,toHome:t},powerOutage:{has:void 0!==e.grid?.power_outage?.entity,isOutage:(e.grid&&this.hass.states[e.grid.power_outage?.entity]?.state)===(e.grid?.power_outage?.state_alert??"on"),icon:e.grid?.power_outage?.icon_alert||"mdi:transmission-tower-off",name:e.grid?.power_outage?.label_alert??ae`Power<br />Outage`,entityGenerator:e.grid?.power_outage?.entity_generator},icon:Ro(this.hass,e.grid,"mdi:transmission-tower"),name:Fo(this.hass,e.grid,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")),mainEntity:"object"==typeof e.grid?.entity?e.grid.entity.consumption||e.grid.entity.production:e.grid?.entity,color:{fromGrid:e.grid?.color?.consumption,toGrid:e.grid?.color?.production,icon_type:e.grid?.color_icon,circle_type:e.grid?.color_circle},tap_action:e.grid?.tap_action,hold_action:e.grid?.hold_action,double_tap_action:e.grid?.double_tap_action,secondary:{entity:e.grid?.secondary_info?.entity,decimals:e.grid?.secondary_info?.decimals,template:e.grid?.secondary_info?.template,has:void 0!==e.grid?.secondary_info?.entity,state:jo(this.hass,this._config),icon:e.grid?.secondary_info?.icon,unit:e.grid?.secondary_info?.unit_of_measurement,unit_white_space:e.grid?.secondary_info?.unit_white_space,accept_negative:e.grid?.secondary_info?.accept_negative||!1,color:{type:e.grid?.secondary_info?.color_value},tap_action:e.grid?.secondary_info?.tap_action,hold_action:e.grid?.secondary_info?.hold_action,double_tap_action:e.grid?.secondary_info?.double_tap_action}};var i,a;const n=void 0!==e.solar?.entity,r=(Qo(this.hass,this._config)??0)>0,s=!1!==e.solar?.display_zero||r,l={entity:e.solar?.entity,has:n&&s,state:{total:Qo(this.hass,this._config),toHome:t,toGrid:t,toBattery:t},icon:Ro(this.hass,e.solar,"mdi:solar-power"),name:Fo(this.hass,e.solar,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")),tap_action:e.solar?.tap_action,hold_action:e.solar?.hold_action,double_tap_action:e.solar?.double_tap_action,secondary:{entity:e.solar?.secondary_info?.entity,decimals:e.solar?.secondary_info?.decimals,template:e.solar?.secondary_info?.template,has:void 0!==e.solar?.secondary_info?.entity,accept_negative:e.solar?.secondary_info?.accept_negative||!1,state:ei(this.hass,this._config),icon:e.solar?.secondary_info?.icon,unit:e.solar?.secondary_info?.unit_of_measurement,unit_white_space:e.solar?.secondary_info?.unit_white_space,tap_action:e.solar?.secondary_info?.tap_action,hold_action:e.solar?.secondary_info?.hold_action,double_tap_action:e.solar?.secondary_info?.double_tap_action}},c={entity:e.battery?.entity,has:!!e.battery?.entity&&("object"==typeof e.battery?.entity?e.battery?.entity.consumption||e.battery?.entity.production:void 0!==e.battery?.entity),mainEntity:"object"==typeof e.battery?.entity?e.battery.entity.consumption:e.battery?.entity,name:Fo(this.hass,e.battery,this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")),icon:Ro(this.hass,e.battery,"mdi:battery-high"),state_of_charge:{state:zo(this.hass,this._config),unit:e?.battery?.state_of_charge_unit??"%",unit_white_space:e?.battery?.state_of_charge_unit_white_space??!0,decimals:e?.battery?.state_of_charge_decimals||0},state:{toBattery:Oo(this.hass,this._config),fromBattery:No(this.hass,this._config),toGrid:0,toHome:0},tap_action:e.battery?.tap_action,hold_action:e.battery?.hold_action,double_tap_action:e.battery?.double_tap_action,color:{fromBattery:e.battery?.color?.consumption,toBattery:e.battery?.color?.production,icon_type:void 0,circle_type:e.battery?.color_circle}},d={entity:e.home?.entity,has:void 0!==e?.home?.entity,state:t,icon:Ro(this.hass,e?.home,"mdi:home"),name:Fo(this.hass,e?.home,$o("editor.home")),tap_action:e.home?.tap_action,hold_action:e.home?.hold_action,double_tap_action:e.home?.double_tap_action,secondary:{entity:e.home?.secondary_info?.entity,template:e.home?.secondary_info?.template,has:void 0!==e.home?.secondary_info?.entity,state:Bo(this.hass,this._config),accept_negative:e.home?.secondary_info?.accept_negative||!1,unit:e.home?.secondary_info?.unit_of_measurement,unit_white_space:e.home?.secondary_info?.unit_white_space,icon:e.home?.secondary_info?.icon,decimals:e.home?.secondary_info?.decimals,tap_action:e.home?.secondary_info?.tap_action,hold_action:e.home?.secondary_info?.hold_action,double_tap_action:e.home?.secondary_info?.double_tap_action}},u=e.individual?.map(e=>Xo({hass:this.hass,config:this._config,field:e}))||[],p={entity:e.fossil_fuel_percentage?.entity,name:Fo(this.hass,e.fossil_fuel_percentage,this.hass.localize("card.label.non_fossil_fuel_percentage")),icon:Ro(this.hass,e.fossil_fuel_percentage,"mdi:leaf"),has:qo(this.hass,this._config),hasPercentage:Ko(this.hass,this._config),state:{power:t},color:e.fossil_fuel_percentage?.color,color_value:e.fossil_fuel_percentage?.color_value,tap_action:e.fossil_fuel_percentage?.tap_action,hold_action:e.fossil_fuel_percentage?.hold_action,double_tap_action:e.fossil_fuel_percentage?.double_tap_action,secondary:{entity:e.fossil_fuel_percentage?.secondary_info?.entity,decimals:e.fossil_fuel_percentage?.secondary_info?.decimals,template:e.fossil_fuel_percentage?.secondary_info?.template,has:void 0!==e.fossil_fuel_percentage?.secondary_info?.entity,state:Jo(this.hass,this._config),accept_negative:e.fossil_fuel_percentage?.secondary_info?.accept_negative||!1,icon:e.fossil_fuel_percentage?.secondary_info?.icon,unit:e.fossil_fuel_percentage?.secondary_info?.unit_of_measurement,unit_white_space:e.fossil_fuel_percentage?.secondary_info?.unit_white_space,color_value:e.fossil_fuel_percentage?.secondary_info?.color_value,tap_action:e.fossil_fuel_percentage?.secondary_info?.tap_action,hold_action:e.fossil_fuel_percentage?.secondary_info?.hold_action,double_tap_action:e.fossil_fuel_percentage?.secondary_info?.double_tap_action}};o.state.fromGrid=Zo(o.state.fromGrid,e.grid?.display_zero_tolerance),o.state.toGrid=Zo(o.state.toGrid,e.grid?.display_zero_tolerance);const h=0!==(o.state.fromGrid??0)||0!==(o.state.toGrid??0);!1!==e.grid?.display_zero||h||(o.has=!1),l.state.total=Zo(l.state.total,e.solar?.display_zero_tolerance),c.state.fromBattery=Zo(c.state.fromBattery,e.battery?.display_zero_tolerance),c.state.toBattery=Zo(c.state.toBattery,e.battery?.display_zero_tolerance);const m=0!==(c.state.fromBattery??0)||0!==(c.state.toBattery??0);!1!==e.battery?.display_zero||m||(c.has=!1),0===o.state.fromGrid&&(o.state.toHome=0,o.state.toBattery=0),0===l.state.total&&(l.state.toGrid=0,l.state.toBattery=0,l.state.toHome=0),0===c.state.fromBattery&&(c.state.toGrid=0,c.state.toHome=0),function(e){const{entities:t,grid:o,solar:i,battery:a,nonFossil:n,getEntityStateWatts:r,getEntityState:s}=e;i.has&&(i.state.toHome=(i.state.total??0)-(o.state.toGrid??0)-(a.state.toBattery??0));const l=Math.max(t.grid?.display_zero_tolerance??0,t.battery?.display_zero_tolerance??0);if(null!==i.state.toHome&&i.state.toHome<0?(a.has&&(o.state.toBattery=Math.abs(i.state.toHome),o.state.toBattery>(o.state.fromGrid??0)&&(a.state.toGrid=Math.min(o.state.toBattery-(o.state.fromGrid??0),0),o.state.toBattery=o.state.fromGrid)),i.state.toHome=0):null!==a.state.toBattery&&a.state.toBattery>0?(i.state.toBattery=(i.state.total??0)-(i.state.toHome||0)-(o.state.toGrid||0),o.state.toBattery=(a.state.toBattery??0)-i.state.toBattery):o.state.toBattery=0,o.state.toBattery=(o.state.toBattery??0)>l?o.state.toBattery:0,a.has&&(i.has?(a.state.toGrid||(a.state.toGrid=Math.max(0,(o.state.toGrid||0)-(i.state.total||0)-(a.state.toBattery||0)-(o.state.toBattery||0))),i.state.toBattery=(a.state.toBattery??0)-(o.state.toBattery||0),t.solar?.display_zero_tolerance&&t.solar.display_zero_tolerance>=(i.state.total||0)&&(i.state.toBattery=0)):a.state.toGrid=o.state.toGrid||0,a.state.toGrid=(a.state.toGrid||0)>l&&a.state.toGrid||0,a.state.toHome=(a.state.fromBattery??0)-(a.state.toGrid??0)),o.state.toHome=Math.max((o.state.fromGrid??0)-(o.state.toBattery??0),0),i.has&&o.state.toGrid&&(i.state.toGrid=o.state.toGrid-(a.state.toGrid??0)),o.powerOutage.isOutage&&(o.state.fromGrid=o.powerOutage.entityGenerator?Math.max(r(o.powerOutage.entityGenerator),0):0,o.state.toHome=Math.max((o.state.fromGrid??0)-(o.state.toBattery??0),0),o.state.toGrid=0,a.state.toGrid=0,i.state.toGrid=0,o.icon=o.powerOutage.icon,n.has=!1,n.hasPercentage=!1),n.has){const e=1-(s(t.fossil_fuel_percentage?.entity)??0)/100;n.state.power=(o.state.toHome??0)*e}}({entities:{grid:e.grid,battery:e.battery,solar:e.solar,fossil_fuel_percentage:e.fossil_fuel_percentage},grid:o,solar:l,battery:c,nonFossil:p,getEntityStateWatts:e=>nt(this.hass,e),getEntityState:e=>it(this.hass,e)}),o.has||(o.state.fromGrid=0,o.state.toGrid=0,o.state.toHome=0,o.state.toBattery=0,l.state.toGrid=0,c.state.toGrid=0,p.has=!1,p.hasPercentage=!1,p.state.power=0);const f=u?.reduce((e,t)=>e+(t.has&&t.state||0),0)||0,g=Math.max((o.state.toHome??0)+(l.state.toHome??0)+(c.state.toHome??0),0),y=c.state.toHome?lt*(c.state.toHome/g):0,v=l.state.toHome?lt*(l.state.toHome/g):0,b=p.state.power?lt*(p.state.power/g):0,w=lt*((g-(p.state.power??0)-(c.state.toHome??0)-(l.state.toHome??0))/g),x=e.home?.override_state&&e.home.entity?e.home?.subtract_individual?_(this.hass,this._config,nt(this.hass,e.home.entity)-f,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):_(this.hass,this._config,nt(this.hass,e.home.entity),{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):e.home?.subtract_individual?_(this.hass,this._config,g-f||0,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}):_(this.hass,this._config,g,{unit:e.home?.unit_of_measurement,unitWhiteSpace:e.home?.unit_white_space}),k=(o.state.toHome??0)+(l.state.toHome??0)+(l.state.toGrid??0)+(l.state.toBattery??0)+(c.state.toHome??0)+(o.state.toBattery??0)+(c.state.toGrid??0);null===c.state_of_charge.state?c.icon="mdi:battery":c.state_of_charge.state<=72&&c.state_of_charge.state>44?c.icon="mdi:battery-medium":c.state_of_charge.state<=44&&c.state_of_charge.state>16?c.icon="mdi:battery-low":c.state_of_charge.state<=16&&(c.icon="mdi:battery-outline"),void 0!==e.battery?.icon&&(c.icon=e.battery?.icon);const S=e.battery?.use_metadata;if(S){const t=Ro(this.hass,e.battery,"NO_ICON_METADATA");"NO_ICON_METADATA"!==t&&(c.icon=t)}const E={batteryGrid:Ze(this._config,Math.max(o.state.toBattery??0,c.state.toGrid??0,0),k),batteryToHome:Ze(this._config,c.state.toHome??0,k),gridToHome:Ze(this._config,o.state.toHome??0,k),solarToBattery:Ze(this._config,l.state.toBattery??0,k),solarToGrid:Ze(this._config,l.state.toGrid??0,k),solarToHome:Ze(this._config,l.state.toHome??0,k),individual:u?.map(e=>Ze(this._config,e.state??0,f))||[],nonFossil:Ze(this._config,p.state.power??0,k)};if(Ee(this._config)){["batteryGrid","batteryToHome","gridToHome","solarToBattery","solarToGrid","solarToHome"].forEach(e=>{const t=this[`${e}Flow`];t&&this.previousDur[e]&&this.previousDur[e]!==E[e]&&(t.pauseAnimations(),t.setCurrentTime(t.getCurrentTime()*(E[e]/this.previousDur[e])),t.unpauseAnimations()),this.previousDur[e]=E[e]})}else this.previousDur={};const $={battery:{value:y,color:"var(--energy-battery-out-color)"},solar:{value:v,color:"var(--energy-solar-color)"},grid:{value:w,color:"var(--energy-grid-consumption-color)"},gridNonFossil:{value:b,color:"var(--energy-non-fossil-color)"}},C=Object.keys($).reduce((e,t)=>$[e].value>$[t].value?e:t),D=this._generateIndividualKeys(),A={gridSecondary:this._templateResults.gridSecondary?.result,solarSecondary:this._templateResults.solarSecondary?.result,homeSecondary:this._templateResults.homeSecondary?.result,nonFossilFuelSecondary:this._templateResults.nonFossilFuelSecondary?.result,individual:u?.map((e,t)=>this._templateResults[`${D[t]}Secondary`]?.result)||[]},P=this._width>420,M=this._config.sort_individual_devices?(e=>e.map((e,t)=>({obj:e,index:t})).sort((e,t)=>{const o=(t.obj.state||0)-(e.obj.state||0);if(0!==o)return o;const i=e.obj.entity.localeCompare(t.obj.entity);return 0!==i?i:e.index-t.index}).map(({obj:e})=>e))(u):u,T=M.filter(e=>e.has).slice(0,10),z=Ce(T,0),O=Ce(T,1),N=Ce(T,2),I=Ce(T,3),j=T.length>4?T.slice(4):[];return ri(this,{grid:o,solar:l,battery:c,display_zero_lines_grey_color:"grey_out"===this._config.display_zero_lines?.mode?this._config.display_zero_lines?.grey_color:"",display_zero_lines_transparency:"transparency"===this._config.display_zero_lines?.mode?this._config.display_zero_lines?.transparency:void 0,entities:e,homeLargestSource:C,homeSources:$,individual:M,nonFossil:p,isCardWideEnough:P}),{entities:e,grid:o,solar:l,battery:c,home:d,nonFossil:p,individualObjs:T,newDur:E,templatesObj:A,homeBatteryCircumference:y,homeSolarCircumference:v,homeNonFossilCircumference:b,homeGridCircumference:w,homeUsageToDisplay:x,sortedIndividualObjects:T,individualFieldLeftTop:z,individualFieldLeftBottom:O,individualFieldRightTop:N,individualFieldRightBottom:I,extraIndividuals:j}}_tryConnectAll(){const{entities:e}=this._config,t={gridSecondary:e.grid?.secondary_info?.template,solarSecondary:e.solar?.secondary_info?.template,homeSecondary:e.home?.secondary_info?.template,individualSecondary:e.individual?.map(e=>e.secondary_info?.template),nonFossilFuelSecondary:e.fossil_fuel_percentage?.secondary_info?.template};for(const[e,o]of Object.entries(t))if(o)if(Array.isArray(o)){const e=this._generateIndividualKeys();o.forEach((t,o)=>{t&&o<e.length&&this._tryConnect(t,`${e[o]}Secondary`)})}else this._tryConnect(o,e)}async _tryConnect(e,t){var o,i,a;if(this.hass&&this._config&&void 0===this._unsubRenderTemplates?.get(t)&&""!==e)try{const n=this._config.entity_id,r="string"==typeof n||Array.isArray(n)&&n.every(e=>"string"==typeof e)?n:void 0,s=(o=this.hass.connection,i=e=>{this._templateResults[t]=e},a={template:e,entity_ids:r,variables:{config:this._config,user:this.hass.user.name},strict:!0},o.subscribeMessage(e=>i(e),{type:"render_template",...a}));this._unsubRenderTemplates?.set(t,s),await s}catch{this._templateResults={...this._templateResults,[t]:{result:e,listeners:{all:!1,domains:[],entities:[],time:!1}}},this._unsubRenderTemplates?.delete(t)}}async _tryDisconnectAll(){const{entities:e}=this._config,t={gridSecondary:e.grid?.secondary_info?.template,solarSecondary:e.solar?.secondary_info?.template,homeSecondary:e.home?.secondary_info?.template,individualSecondary:e.individual?.map(e=>e.secondary_info?.template)};for(const[e,o]of Object.entries(t))o&&this._tryDisconnect(e)}_tryDisconnect(e){const t=this._unsubRenderTemplates?.get(e);t&&(t.then(e=>e()),this._unsubRenderTemplates?.delete(e))}};e([ui({attribute:!1})],_i.prototype,"hass",void 0),e([pi()],_i.prototype,"_config",void 0),e([pi()],_i.prototype,"_templateResults",void 0),e([pi()],_i.prototype,"_unsubRenderTemplates",void 0),e([pi()],_i.prototype,"_width",void 0),e([hi("#battery-grid-flow")],_i.prototype,"batteryGridFlow",void 0),e([hi("#battery-home-flow")],_i.prototype,"batteryToHomeFlow",void 0),e([hi("#grid-home-flow")],_i.prototype,"gridToHomeFlow",void 0),e([hi("#solar-battery-flow")],_i.prototype,"solarToBatteryFlow",void 0),e([hi("#solar-grid-flow")],_i.prototype,"solarToGridFlow",void 0),e([hi("#solar-home-flow")],_i.prototype,"solarToHomeFlow",void 0),_i=e([li("power-flow-card-plus-extended")],_i);
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
const mi="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,fi=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},gi=`{{lit-${String(Math.random()).slice(2)}}}`,yi=`\x3c!--${gi}--\x3e`,vi=new RegExp(`${gi}|${yi}`),bi="$lit$";class wi{constructor(e,t){this.parts=[],this.element=t;const o=[],i=[],a=document.createTreeWalker(t.content,133,null,!1);let n=0,r=-1,s=0;const{strings:l,values:{length:c}}=e;for(;s<c;){const e=a.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let i=0;for(let e=0;e<o;e++)xi(t[e].name,bi)&&i++;for(;i-- >0;){const t=l[s],o=Ei.exec(t)[2],i=o.toLowerCase()+bi,a=e.getAttribute(i);e.removeAttribute(i);const n=a.split(vi);this.parts.push({type:"attribute",index:r,name:o,strings:n}),s+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(gi)>=0){const i=e.parentNode,a=t.split(vi),n=a.length-1;for(let t=0;t<n;t++){let o,n=a[t];if(""===n)o=Si();else{const e=Ei.exec(n);null!==e&&xi(e[2],bi)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),o=document.createTextNode(n)}i.insertBefore(o,e),this.parts.push({type:"node",index:++r})}""===a[n]?(i.insertBefore(Si(),e),o.push(e)):e.data=a[n],s+=n}}else if(8===e.nodeType)if(e.data===gi){const t=e.parentNode;null!==e.previousSibling&&r!==n||(r++,t.insertBefore(Si(),e)),n=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(o.push(e),r--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(gi,t+1));)this.parts.push({type:"node",index:-1}),s++}}else a.currentNode=i.pop()}for(const e of o)e.parentNode.removeChild(e)}}const xi=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},ki=e=>-1!==e.index,Si=()=>document.createComment(""),Ei=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function $i(e,t){const{element:{content:o},parts:i}=e,a=document.createTreeWalker(o,133,null,!1);let n=Di(i),r=i[n],s=-1,l=0;const c=[];let d=null;for(;a.nextNode();){s++;const e=a.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===s;)r.index=null!==d?-1:r.index-l,n=Di(i,n),r=i[n]}c.forEach(e=>e.parentNode.removeChild(e))}const Ci=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},Di=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(ki(t))return o}return-1};
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
const Ai=new WeakMap,Pi=e=>"function"==typeof e&&Ai.has(e),Mi={},Ti={};
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
class zi{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=mi?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let a,n=0,r=0,s=i.nextNode();for(;n<o.length;)if(a=o[n],ki(a)){for(;r<a.index;)r++,"TEMPLATE"===s.nodeName&&(t.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=t.pop(),s=i.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,a.name,a.strings,this.options));n++}else this.__parts.push(void 0),n++;return mi&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const Oi=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),Ni=` ${gi} `;class Ii{constructor(e,t,o,i){this.strings=e,this.values=t,this.type=o,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],a=e.lastIndexOf("\x3c!--");o=(a>-1||o)&&-1===e.indexOf("--\x3e",a+1);const n=Ei.exec(e);t+=null===n?e+(o?Ni:yi):e.substr(0,n.index)+n[1]+n[2]+bi+n[3]+gi}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==Oi&&(t=Oi.createHTML(t)),e.innerHTML=t,e}}
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
 */class ji{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Si()),this.endNode=e.appendChild(Si())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Si()),e.__insert(this.endNode=Si())}insertAfterPart(e){e.__insert(this.startNode=Si()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Pi(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Mi,e(this)}const e=this.__pendingValue;e!==Mi&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof Ii?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===Ti?(this.value=Ti,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof zi&&this.value.template===t)this.value.update(e.values);else{const o=new zi(t,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,i=0;for(const a of e)o=t[i],void 0===o&&(o=new ji(this.options),t.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(t[i-1])),o.setValue(a),o.commit(),i++;i<t.length&&(t.length=i,this.clear(o&&o.endNode))}clear(e=this.startNode){fi(this.startNode.parentNode,e.nextSibling,this.endNode)}}let Bi=!1;
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
function Li(e){let t=Ri.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ri.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(gi);return o=t.keyString.get(i),void 0===o&&(o=new wi(e,e.getTemplateElement()),t.keyString.set(i,o)),t.stringsArray.set(e.strings,o),o}(()=>{try{const e={get capture(){return Bi=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const Ri=new Map,Fi=new WeakMap;
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
 */const Hi=(e,t)=>`${e}--${t}`;let Ui=!0;void 0===window.ShadyCSS?Ui=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ui=!1);const Gi=e=>t=>{const o=Hi(t.type,e);let i=Ri.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Ri.set(o,i));let a=i.stringsArray.get(t.strings);if(void 0!==a)return a;const n=t.strings.join(gi);if(a=i.keyString.get(n),void 0===a){const o=t.getTemplateElement();Ui&&window.ShadyCSS.prepareTemplateDom(o,e),a=new wi(t,o),i.keyString.set(n,a)}return i.stringsArray.set(t.strings,a),a},Vi=["html","svg"],Wi=new Set,Zi=(e,t,o)=>{Wi.add(e);const i=o?o.element:document.createElement("template"),a=t.querySelectorAll("style"),{length:n}=a;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=a[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{Vi.forEach(t=>{const o=Ri.get(Hi(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),$i(e,o)})})})(e);const s=i.content;o?function(e,t,o=null){const{element:{content:i},parts:a}=e;if(null==o)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let r=Di(a),s=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===o&&(s=Ci(t),o.parentNode.insertBefore(t,o));-1!==r&&a[r].index===l;){if(s>0){for(;-1!==r;)a[r].index+=s,r=Di(a,r);return}r=Di(a,r)}}(o,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),$i(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Yi={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Xi=(e,t)=>t!==e&&(t==t||e==e),qi={attribute:!0,type:String,converter:Yi,reflect:!1,hasChanged:Xi},Ki="finalized";class Ji extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const i=this._attributeNameForProperty(o,t);void 0!==i&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=qi){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const a=this[e];this[t]=i,this.requestUpdateInternal(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||qi}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Ki)||e.finalize(),this[Ki]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=Xi){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,i=t.converter||Yi,a="function"==typeof i?i:i.fromAttribute;return a?a(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,i=t.converter;return(i&&i.toAttribute||Yi.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=qi){const i=this.constructor,a=i._attributeNameForProperty(e,o);if(void 0!==a){const e=i._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(a):this.setAttribute(a,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(e);if(void 0!==i){const e=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,o){let i=!0;if(void 0!==e){const a=this.constructor;o=o||a.getPropertyOptions(e),a._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ji[Ki]=!0;
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
const Qi=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(o){o.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ea(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):Qi(e,t)}const ta=e=>ea({attribute:!1,hasChanged:void 0});const oa=(e,t,o)=>{Object.defineProperty(t,o,e)},ia=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),aa=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,na=Symbol();class ra{constructor(e,t){if(t!==na)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(aa?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const sa={};class la extends Ji{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,o)=>e.reduceRight((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e),o),o=t(e,new Set),i=[];o.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!aa){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ra(String(t),na)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?aa?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==sa&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return sa}}la.finalized=!0,la.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,a=Fi.has(t),n=Ui&&11===t.nodeType&&!!t.host,r=n&&!Wi.has(i),s=r?document.createDocumentFragment():t;if(((e,t,o)=>{let i=Fi.get(t);void 0===i&&(fi(t,t.firstChild),Fi.set(t,i=new ji(Object.assign({templateFactory:Li},o))),i.appendInto(t)),i.setValue(e),i.commit()})(e,s,Object.assign({templateFactory:Gi(i)},o)),r){const e=Fi.get(s);Fi.delete(s);const o=e.value instanceof zi?e.value.template:void 0;Zi(i,s,o),fi(t,t.firstChild),t.appendChild(s),Fi.set(t,e)}!a&&n&&window.ShadyCSS.styleElement(t.host)},la.shadowRootOptions={mode:"open"};var ca="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",da=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function ua(e,t){return e===t||!(!da(e)||!da(t))}function pa(e,t){if(e.length!==t.length)return!1;for(var o=0;o<e.length;o++)if(!ua(e[o],t[o]))return!1;return!0}function ha(e,t){void 0===t&&(t=pa);var o=null;function i(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(o&&o.lastThis===this&&t(i,o.lastArgs))return o.lastResult;var n=e.apply(this,i);return o={lastResult:n,lastArgs:i,lastThis:this},n}return i.clear=function(){o=null},i}class _a extends TypeError{constructor(e,t){let o;const{message:i,explanation:a,...n}=e,{path:r}=e,s=0===r.length?i:`At path: ${r.join(".")} -- ${i}`;super(a??s),null!=a&&(this.cause=s),Object.assign(this,n),this.name=this.constructor.name,this.failures=()=>o??(o=[e,...t()])}}function ma(e){return"object"==typeof e&&null!=e}function fa(e){return"symbol"==typeof e?e.toString():"string"==typeof e?JSON.stringify(e):`${e}`}function ga(e,t,o,i){if(!0===e)return;!1===e?e={}:"string"==typeof e&&(e={message:e});const{path:a,branch:n}=t,{type:r}=o,{refinement:s,message:l=`Expected a value of type \`${r}\`${s?` with refinement \`${s}\``:""}, but received: \`${fa(i)}\``}=e;return{value:i,type:r,refinement:s,key:a[a.length-1],path:a,branch:n,...e,message:l}}function*ya(e,t,o,i){(function(e){return ma(e)&&"function"==typeof e[Symbol.iterator]})(e)||(e=[e]);for(const a of e){const e=ga(a,t,o,i);e&&(yield e)}}function*va(e,t,o={}){const{path:i=[],branch:a=[e],coerce:n=!1,mask:r=!1}=o,s={path:i,branch:a};if(n&&(e=t.coercer(e,s),r&&"type"!==t.type&&ma(t.schema)&&ma(e)&&!Array.isArray(e)))for(const o in e)void 0===t.schema[o]&&delete e[o];let l="valid";for(const i of t.validator(e,s))i.explanation=o.message,l="not_valid",yield[i,void 0];for(let[c,d,u]of t.entries(e,s)){const t=va(d,u,{path:void 0===c?i:[...i,c],branch:void 0===c?a:[...a,d],coerce:n,mask:r,message:o.message});for(const o of t)o[0]?(l=null!=o[0].refinement?"not_refined":"not_valid",yield[o[0],void 0]):n&&(d=o[1],void 0===c?e=d:e instanceof Map?e.set(c,d):e instanceof Set?e.add(d):ma(e)&&(void 0!==d||c in e)&&(e[c]=d))}if("not_valid"!==l)for(const i of t.refiner(e,s))i.explanation=o.message,l="not_refined",yield[i,void 0];"valid"===l&&(yield[void 0,e])}class ba{constructor(e){const{type:t,schema:o,validator:i,refiner:a,coercer:n=e=>e,entries:r=function*(){}}=e;this.type=t,this.schema=o,this.entries=r,this.coercer=n,this.validator=i?(e,t)=>ya(i(e,t),t,this,e):()=>[],this.refiner=a?(e,t)=>ya(a(e,t),t,this,e):()=>[]}assert(e,t){return wa(e,this,t)}create(e,t){return function(e,t,o){const i=xa(e,t,{coerce:!0,message:o});if(i[0])throw i[0];return i[1]}(e,this,t)}is(e){return function(e,t){const o=xa(e,t);return!o[0]}(e,this)}mask(e,t){return function(e,t,o){const i=xa(e,t,{coerce:!0,mask:!0,message:o});if(i[0])throw i[0];return i[1]}(e,this,t)}validate(e,t={}){return xa(e,this,t)}}function wa(e,t,o){const i=xa(e,t,{message:o});if(i[0])throw i[0]}function xa(e,t,o={}){const i=va(e,t,o),a=function(e){const{done:t,value:o}=e.next();return t?void 0:o}(i);if(a[0]){const e=new _a(a[0],function*(){for(const e of i)e[0]&&(yield e[0])});return[e,void 0]}return[void 0,a[1]]}function ka(e,t){return new ba({type:e,schema:null,validator:t})}function Sa(){return ka("any",()=>!0)}function Ea(){return ka("boolean",e=>"boolean"==typeof e)}function $a(){return ka("integer",e=>"number"==typeof e&&!isNaN(e)&&Number.isInteger(e)||`Expected an integer, but received: ${fa(e)}`)}function Ca(){return ka("number",e=>"number"==typeof e&&!isNaN(e)||`Expected a number, but received: ${fa(e)}`)}function Da(e){const t=e?Object.keys(e):[],o=ka("never",()=>!1);return new ba({type:"object",schema:e||null,*entries(i){if(e&&ma(i)){const a=new Set(Object.keys(i));for(const o of t)a.delete(o),yield[o,i[o],e[o]];for(const e of a)yield[e,i[e],o]}},validator:e=>ma(e)||`Expected an object, but received: ${fa(e)}`,coercer:e=>ma(e)?{...e}:e})}function Aa(e){return new ba({...e,validator:(t,o)=>void 0===t||e.validator(t,o),refiner:(t,o)=>void 0===t||e.refiner(t,o)})}function Pa(){return ka("string",e=>"string"==typeof e||`Expected a string, but received: ${fa(e)}`)}function Ma(){return{type:"expandable",title:$o("editor.combined"),schema:[{name:"entity",selector:{entity:{}}}]}}function Ta(){return{type:"expandable",title:$o("editor.separated"),name:"entity",schema:[{name:"consumption",label:"Consumption Entity",selector:{entity:{}}},{name:"production",label:"Production Entity",selector:{entity:{}}}]}}const za={name:"color",title:$o("editor.custom_colors"),type:"expandable",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"consumption",label:"Consumption",selector:{color_rgb:{}}},{name:"production",label:"Production",selector:{color_rgb:{}}}]}]},Oa=[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"double_tap_action",selector:{ui_action:{}}}],Na=[{name:"entity",selector:{entity:{}}},{name:"template",label:"Template (overrides entity, save to update)",selector:{template:{}}},{type:"grid",column_min_width:"200px",schema:[{name:"icon",selector:{icon:{}}},{name:"unit_of_measurement",label:"Unit of Measurement",selector:{text:{}}},{name:"decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:10,step:1}}},{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}}},{name:"accept_negative",label:"Accept Negative",selector:{boolean:{}}},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}}]},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Ia=[{name:"color_icon",label:"Color of Icon",selector:{select:{options:[{value:"no_color",label:$o("editor.no_color")},{value:"color_dynamically",label:$o("editor.color_dynamically")},{value:"production",label:$o("editor.production")},{value:"consumption",label:$o("editor.consumption")}],mode:"dropdown"}}},{name:"color_circle",label:"Color of Circle",selector:{select:{options:[{value:"color_dynamically",label:"Color dynamically"},{value:"consumption",label:"Consumption"},{value:"production",label:"Production"}],mode:"dropdown"}}},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{min:0,max:1e6,step:1,mode:"box"}}},{name:"display_state",label:"Display State",selector:{select:{options:[{value:"two_way",label:"Two Way"},{value:"one_way_no_zero",label:"One Way"},{value:"one_way",label:"One Way (Show Zero)"}],mode:"dropdown"}}}];function ja(e){const t={type:"grid",column_min_width:"200px",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}}]};return"battery"!==e&&"grid"!==e||t.schema.push(...Ia),t}const Ba={...ja("battery"),schema:[...ja("battery").schema,{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"color_value",label:"Color of Value",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},La=[{name:"state_of_charge",label:"State of Charge Entity",selector:{entity:{}}},{name:"",type:"grid",column_min_width:"200px",schema:[{name:"state_of_charge_unit",label:"Unit",selector:{text:{}}},{name:"state_of_charge_unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"state_of_charge_decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:4,step:1}}},{name:"show_state_of_charge",label:"Show State of Charge",selector:{boolean:{}}},{name:"color_state_of_charge_value",label:"Color of Value",selector:{select:{options:[{value:"no_color",label:$o("editor.no_color")},{value:"color_dynamically",label:$o("editor.color_dynamically")},{value:"production",label:$o("editor.production")},{value:"consumption",label:$o("editor.consumption")}],mode:"dropdown"}}}]}],Ra=[Ma(),Ta(),{title:$o("editor.state_of_charge"),name:"",type:"expandable",schema:La},Ba,za,{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Fa={name:"grey_color",selector:{color_rgb:{}}},Ha={name:"transparency",selector:{number:{min:0,max:100,step:1,mode:"box"}}},Ua={name:"",type:"grid",column_min_width:"200px",schema:[Ha,Fa]},Ga=e=>{switch(e){case"grey_out":return Fa;case"transparency":return Ha;case"custom":return Ua;default:return[]}},Va=ha((e,t)=>[{name:"display_zero_lines",type:"grid",column_min_width:"400px",schema:[{name:"mode",selector:{select:{mode:"dropdown",options:[{value:"show",label:e("editor.show")},{value:"hide",label:e("editor.hide")},{value:"transparency",label:e("editor.transparency")},{value:"grey_out",label:e("editor.grey_out")},{value:"custom",label:e("editor.custom")}]}}},Ga(t)]}]),Wa=[{name:"entity",selector:{entity:{}}},{...ja(),schema:[...ja().schema,{name:"state_type",label:"State Type",selector:{select:{options:[{value:"power",label:"Power"},{value:"percentage",label:"Percentage"}],mode:"dropdown"}}},{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"color_icon",label:"Color Icon",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"display_zero_state",label:"Display Zero State",selector:{boolean:{}},default:!0},{name:"unit_white_space",label:"Unit White Space",selector:{boolean:{}},default:!0},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:$o("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:Na},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Za={...ja("grid"),schema:[...ja("grid").schema,{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}},{name:"color_value",label:"Color of Value",selector:{boolean:{}},default:!0},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0}]},Ya=[Ma(),Ta(),Za,za,{title:$o("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:Na},{title:$o("editor.power_outage"),name:"power_outage",type:"expandable",schema:[{type:"grid",column_min_width:"200px",schema:[{name:"entity",selector:{entity:{}}},{name:"entity_generator",label:"Generator Entity",selector:{entity:{}}},{name:"label_alert",label:"Outage Label",selector:{text:{}}},{name:"icon_alert",label:"Outage Icon",selector:{icon:{}}},{name:"state_alert",label:"Outage State",selector:{text:{}}}]}]},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Xa=[{name:"entity",selector:{entity:{}}},{...ja(),schema:[...ja().schema,{name:"color_value",label:"Color Value",selector:{select:{options:[{value:!0,label:"Color dynamically"},{value:!1,label:"Do Not Color"},{value:"solar",label:"Solar"},{value:"grid",label:"Grid"},{value:"battery",label:"Battery"}],mode:"dropdown"}}},{name:"color_icon",label:"Color Icon",selector:{select:{options:[{value:!0,label:"Color dynamically"},{value:!1,label:"Do Not Color"},{value:"solar",label:"Solar"},{value:"grid",label:"Grid"},{value:"battery",label:"Battery"}],mode:"dropdown"}}},{name:"circle_animation",label:"Circle Animation",default:!0,selector:{boolean:{}}},{name:"subtract_individual",label:"Subtract Individual",selector:{boolean:{}}},{name:"override_state",label:"Override State (With Home Entity)",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}},{name:"hide",label:"Hide Home",selector:{boolean:{}}}]},{title:$o("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:Na},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],qa=[{name:"entity",selector:{entity:{}}},{...ja(),schema:[...ja().schema,{name:"color_value",label:"Color Value",selector:{boolean:{}},default:!0},{name:"color_icon",label:"Color Icon",selector:{boolean:{}},default:!0},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"display_zero_state",label:"Display Zero State",selector:{boolean:{}},default:!0},{name:"unit_of_measurement",label:"Unit of Measurement",selector:{text:{}}},{name:"calculate_flow_rate",label:"Calculate Flow Rate",selector:{boolean:{}}},{name:"decimals",label:"Decimals",selector:{number:{mode:"box",min:0,max:4,step:1}}},{name:"inverted_animation",label:"Invert Animation",selector:{boolean:{}}},{name:"show_direction",label:"Show Direction",selector:{boolean:{}}},{name:"unit_white_space",label:"Unit White Space",default:!0,selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:$o("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:Na},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Ka=[{name:"entity",selector:{entity:{}}},{...ja(),schema:[...ja().schema,{name:"color_value",label:"Color Value",selector:{boolean:{}}},{name:"color_icon",label:"Color Icon",selector:{boolean:{}}},{name:"display_zero",label:"Display Zero",selector:{boolean:{}},default:!0},{name:"display_zero_state",label:"Display State When Zero?",selector:{boolean:{}},default:!0},{name:"display_zero_tolerance",label:"Display Zero Tolerance",selector:{number:{mode:"box",min:0,max:1e6,step:.1}}},{name:"invert_state",label:"Invert State",selector:{boolean:{}}},{name:"use_metadata",label:"Use Metadata",selector:{boolean:{}}}]},{name:"color",label:"Color",selector:{color_rgb:{}}},{title:$o("editor.secondary_info"),name:"secondary_info",type:"expandable",schema:[...Na,{name:"sum_total",label:"Sum Total",selector:{boolean:{}}}]},{title:$o("editor.action"),name:"",type:"expandable",schema:Oa}],Ja=function(...e){const t="type"===e[0].type,o=e.map(e=>e.schema),i=Object.assign({},...o);return t?function(e){const t=Object.keys(e);return new ba({type:"type",schema:e,*entries(o){if(ma(o))for(const i of t)yield[i,o[i],e[i]]},validator:e=>ma(e)||`Expected an object, but received: ${fa(e)}`,coercer:e=>ma(e)?{...e}:e})}(i):Da(i)}(Da({type:Pa(),view_layout:Sa(),layout_options:Sa(),grid_options:Sa(),visibility:Sa(),disabled:Aa(Ea())}),Da({title:Aa(Pa()),theme:Aa(Pa()),dashboard_link:Aa(Pa()),dashboard_link_label:Aa(Pa()),second_dashboard_link:Aa(Pa()),second_dashboard_link_label:Aa(Pa()),inverted_entities:Aa(Sa()),base_decimals:Aa($a()),kilo_decimals:Aa($a()),mega_decimals:Aa($a()),mega_threshold:Aa(Ca()),min_flow_rate:Aa(Ca()),max_flow_rate:Aa(Ca()),min_expected_power:Aa(Ca()),max_expected_power:Aa(Ca()),kilo_threshold:Aa(Ca()),clickable_entities:Aa(Ea()),transparency_zero_lines:Aa(Ca()),greyout_zero_lines:Aa(Ea()),display_zero_lines:Aa(Sa()),use_new_flow_rate_model:Aa(Ea()),full_size:Aa(Ea()),style_ha_card:Aa(Sa()),style_card_content:Aa(Sa()),disable_dots:Aa(Ea()),no_labels:Aa(Ea()),entities:Da({battery:Aa(Sa()),grid:Aa(Sa()),solar:Aa(Sa()),home:Aa(Sa()),fossil_fuel_percentage:Aa(Sa()),individual:Aa(Sa()),individual1:Aa(Sa()),individual2:Aa(Sa())}),sort_individual_devices:Aa(Ea()),allow_layout_break:Aa(Ea()),watt_threshold:Aa(Ca()),w_decimals:Aa(Ca()),kw_decimals:Aa(Ca())})),Qa=[{name:"title",label:"Title",selector:{text:{}}}];ha(e=>[{name:"entities",type:"grid",column_min_width:"400px",schema:[{title:e("editor.grid"),name:"grid",type:"expandable",iconPath:"M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z",schema:Ya},{title:e("editor.solar"),name:"solar",type:"expandable",iconPath:"M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",schema:Ka},{title:e("editor.battery"),name:"battery",type:"expandable",iconPath:"M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z",schema:Ra},{title:e("editor.fossil_fuel_percentage"),name:"fossil_fuel_percentage",type:"expandable",iconPath:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z",schema:Wa},{title:e("editor.home"),name:"home",type:"expandable",iconPath:"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",schema:Xa}]}]);const en=ha(e=>[{name:"entities",type:"grid",column_min_width:"400px",schema:[{title:`${e("editor.individual")} 1`,name:"individual1",type:"expandable",schema:qa},{title:`${e("editor.individual")} 2`,name:"individual2",type:"expandable",schema:qa}]}]),tn=ha((e,t)=>[{type:"grid",column_min_width:"200px",schema:[{name:"dashboard_link",label:"Dashboard Link",selector:{navigation:{}}},{name:"dashboard_link_label",label:"Dashboard Link Label",selector:{text:{}}},{name:"base_decimals",label:"Watt Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"kilo_decimals",label:"kW Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"mega_decimals",label:"MW Decimals",selector:{number:{mode:"box",min:0,max:5,step:1}}},{name:"max_flow_rate",label:"Max Flow Rate (Sec/Dot)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"min_flow_rate",label:"Min Flow Rate (Sec/Dot)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"max_expected_power",label:"Max Expected Power (in Watts)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"min_expected_power",label:"Min Expected Power (in Watts)",selector:{number:{mode:"box",min:0,max:1e6,step:.01}}},{name:"kilo_threshold",label:"Kilowatt Threshold",selector:{number:{mode:"box",min:0,max:1e6,step:1}}},{name:"mega_threshold",label:"Megawatt Threshold",selector:{number:{mode:"box",min:0,max:1e7,step:1}}},{name:"clickable_entities",label:"Clickable Entities",selector:{boolean:{}},default:!0},{name:"disable_dots",label:"Disable Moving Dots",selector:{boolean:{}}},{name:"no_labels",label:e("editor.no_labels"),selector:{boolean:{}}},{name:"use_new_flow_rate_model",label:"New Flow Model?",selector:{boolean:{}},default:!0},{name:"sort_individual_devices",label:"Sort individual devices by usage",selector:{boolean:{}},default:!0},{name:"allow_layout_break",label:"Allow Layout Break",selector:{boolean:{}}}]},{type:"expandable",title:e("editor.display_zero_lines"),schema:[...Va(e,t)]}]),on=(e,t,o,i)=>{i=i||{},o=null==o?{}:o;const a=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=o,e.dispatchEvent(a),a},an=async()=>{if(customElements.get("ha-form")||customElements.get("hui-button-card")?.getConfigElement(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement(),customElements.get("ha-form"))return;await(window.loadCardHelpers?.())},nn=b`
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
`;let rn;const{I:sn}=be,ln=e=>e,cn=()=>document.createComment(""),dn=(e,t,o)=>{const i=e._$AA.parentNode,a=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(cn(),a),n=i.insertBefore(cn(),a);o=new sn(t,n,e,e.options)}else{const t=o._$AB.nextSibling,n=o._$AM,r=n!==e;if(r){let t;o._$AQ?.(e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==n._$AU&&o._$AP(t)}if(t!==a||r){let e=o._$AA;for(;e!==t;){const t=ln(e).nextSibling;ln(i).insertBefore(e,a),e=t}}}return o},un=(e,t,o=e)=>(e._$AI(t,o),e),pn={},hn=(e,t=pn)=>e._$AH=t,_n=e=>{e._$AR(),e._$AA.remove()},mn=(e,t,o)=>{const i=new Map;for(let a=t;a<=o;a++)i.set(e[a],a);return i},fn=Ne(class extends Ie{constructor(e){if(super(e),e.type!==Oe)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const a=[],n=[];let r=0;for(const t of e)a[r]=i?i(t,r):r,n[r]=o(t,r),r++;return{values:n,keys:a}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,i]){const a=(e=>e._$AH)(e),{values:n,keys:r}=this.dt(t,o,i);if(!Array.isArray(a))return this.ut=r,n;const s=this.ut??=[],l=[];let c,d,u=0,p=a.length-1,h=0,_=n.length-1;for(;u<=p&&h<=_;)if(null===a[u])u++;else if(null===a[p])p--;else if(s[u]===r[h])l[h]=un(a[u],n[h]),u++,h++;else if(s[p]===r[_])l[_]=un(a[p],n[_]),p--,_--;else if(s[u]===r[_])l[_]=un(a[u],n[_]),dn(e,l[_+1],a[u]),u++,_--;else if(s[p]===r[h])l[h]=un(a[p],n[h]),dn(e,a[u],a[p]),p--,h++;else if(void 0===c&&(c=mn(r,h,_),d=mn(s,u,p)),c.has(s[u]))if(c.has(s[p])){const t=d.get(r[h]),o=void 0!==t?a[t]:null;if(null===o){const t=dn(e,a[u]);un(t,n[h]),l[h]=t}else l[h]=un(o,n[h]),dn(e,a[u],o),a[t]=null;h++}else _n(a[p]),p--;else _n(a[u]),u++;for(;h<=_;){const t=dn(e,l[_+1]);un(t,n[h]),l[h++]=t}for(;u<=p;){const e=a[u++];null!==e&&_n(e)}return this.ut=r,hn(e,l),re}});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gn extends ke{constructor(){super(...arguments),this._indexBeingEdited=-1,this._entityKeys=new WeakMap,this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||$o(`editor.${e?.name}`)}connectedCallback(){super.connectedCallback(),an()}disconnectedCallback(){super.disconnectedCallback(),this._destroySortable()}_editRowElement(e){this._indexBeingEdited=e}_getKey(e){return this._entityKeys.has(e)||this._entityKeys.set(e,Math.random().toString()),this._entityKeys.get(e)}render(){return this.entities&&this.hass?-1!==this._indexBeingEdited?ae`
        <div class="individual-header">
          <h4>
            ${this._indexBeingEdited+1} / ${this.entities.length} ${$o("editor.individual")}
          </h4>
          <ha-icon-button
            .label=${this.hass.localize("ui.components.entity.entity-picker.clear")}
            .path=${ca}
            class="remove-icon"
            @click=${()=>this._indexBeingEdited=-1}
          ></ha-icon-button>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${this.entities[this._indexBeingEdited]}
          .schema=${qa}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._configChanged}
        ></ha-form>
      `:ae`
      <div class="entities">
        ${fn(this.entities,e=>this._getKey(e),(e,t)=>ae`
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
                .path=${ca}
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
    `:ae` <p>No entities configured.</p> `}_configChanged(e){const t=e.detail.value||"";if(!this.config||!this.hass)return;Array.isArray(this.config.entities.individual)||(this.config.entities.individual=[]);const o=[...this.config.entities.individual];if(!o)return;o[this._indexBeingEdited]=t;const i={...this.config,entities:{...this.config.entities,individual:o}};on(this,"config-changed",{config:i})}firstUpdated(){this._createSortable()}async _createSortable(){const e=await(async()=>(rn||(rn=(await Promise.resolve().then(function(){return Tc})).default),rn))();this._sortable=new e(this.shadowRoot.querySelector(".entities"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onChoose:e=>{e.item.placeholder=document.createComment("sort-placeholder"),e.item.after(e.item.placeholder)},onEnd:e=>{e.item.placeholder&&(e.item.placeholder.replaceWith(e.item),delete e.item.placeholder),this._rowMoved(e)}})}_destroySortable(){this._sortable?.destroy(),this._sortable=void 0}async _addEntity(e){const t=e.detail.value;if(""===t)return;const o=this.entities.concat({entity:t});e.target.value="",on(this,"entities-changed",{entities:o})}_rowMoved(e){if(e.oldIndex===e.newIndex)return;if(null==e.oldIndex||null==e.newIndex)return;const t=this.entities.concat(),[o]=t.splice(e.oldIndex,1);o&&(t.splice(e.newIndex,0,o),on(this,"entities-changed",{entities:t}))}_removeRow(e){const t=e.currentTarget.index,o=this.entities.concat();o.splice(t,1),on(this,"entities-changed",{entities:o})}_valueChanged(e){const t=e.detail.value,o=e.target.index,i=this.entities.concat();""===t||void 0===t?i.splice(o,1):i[o]={...i[o],entity:t},on(this,"entities-changed",{entities:i})}_editRow(e){const t=e.currentTarget.index;on(this,"edit-detail-element",{subElementConfig:{index:t,type:"row",elementConfig:this.entities[t]}})}static get styles(){return[nn,b`
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
      `]}}e([ui({attribute:!1})],gn.prototype,"hass",void 0),e([ui({attribute:!1})],gn.prototype,"config",void 0),e([ui({attribute:!1})],gn.prototype,"entities",void 0),e([ui()],gn.prototype,"label",void 0),e([pi()],gn.prototype,"_indexBeingEdited",void 0),customElements.get("individual-row-editor")||customElements.define("individual-row-editor",gn);class yn extends ke{constructor(){super(...arguments),this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||$o(`editor.${e?.name}`)}render(){return this.config&&this.hass?(this._configEntities=this.config.entities.individual,this._subElementEditorConfig?ae`
        <ha-form
          .hass=${this.hass}
          @value-changed=${this._valueChanged}
          .data=${this.config}
          .schema=${en(this.hass)}
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
    `):ae`<div>no config</div>`}_valueChanged(e){const t=e.detail.value||"";this.config&&this.hass&&s(this,"config-changed",{config:t})}_entitiesChanged(e){let t=this.config;t={...t,entities:{...t.entities,individual:e.detail.entities}},this._configEntities=(t.entities.individual??[]).map(e=>"string"==typeof e?{entity:e}:e),s(this,"config-changed",{config:t})}_editDetailElement(e){this._subElementEditorConfig=e.detail.subElementConfig}static get styles(){return b``}}e([ea({attribute:!1})],yn.prototype,"config",void 0),e([ta()],yn.prototype,"_subElementEditorConfig",void 0),e([ta()],yn.prototype,"_configEntities",void 0),customElements.get("individual-devices-editor")||customElements.define("individual-devices-editor",yn);class vn extends ke{constructor(){super(...arguments),this.outlined=!1,this.leftChevron=!1,this.icon="mdi:format-list-bulleted-type"}render(){return ae`
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
    `}}var bn;e([ea({type:String})],vn.prototype,"path",void 0),e([ea({type:Boolean,reflect:!0})],vn.prototype,"outlined",void 0),e([ea({type:Boolean,reflect:!0})],vn.prototype,"leftChevron",void 0),e([ea()],vn.prototype,"header",void 0),e([ea({type:String})],vn.prototype,"icon",void 0),e([ea()],vn.prototype,"secondary",void 0),e([(bn=".container",(e,t)=>{const o={get(){return this.renderRoot.querySelector(bn)},enumerable:!0,configurable:!0};return void 0!==t?oa(o,e,t):ia(o,e)})],vn.prototype,"_container",void 0),customElements.get("link-subpage")||customElements.define("link-subpage",vn);class wn extends ke{render(){return ae`
      <div class="header">
        <div class="back-title">
          <ha-icon-button
            .label=${"Go Back"}
            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
            @click=${this._goBack}
          ></ha-icon-button>
          <span>${$o(`editor.${this.page}`)}</span>
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
    `}}e([ea({attribute:!1})],wn.prototype,"config",void 0),e([ea()],wn.prototype,"page",void 0),customElements.get("subpage-header")||customElements.define("subpage-header",wn);const xn=[{page:"grid",icon:"mdi:transmission-tower",schema:Ya},{page:"solar",icon:"mdi:solar-power",schema:Ka},{page:"battery",icon:"mdi:battery-high",schema:Ra},{page:"fossil_fuel_percentage",icon:"mdi:leaf",schema:Wa},{page:"home",icon:"mdi:home",schema:Xa},{page:"individual",icon:"mdi:dots-horizontal-circle-outline"},{page:"advanced",icon:"mdi:cog",schema:tn}];let kn=class extends ke{constructor(){super(...arguments),this._configEntities=[],this._currentConfigPage=null,this._computeLabelCallback=e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e?.name}`)||$o(`editor.${e?.name}`)||e?.label}async setConfig(e){wa(e,Ja),this._config=e}connectedCallback(){super.connectedCallback(),an()}_editDetailElement(e){this._currentConfigPage=e}_goBack(){this._currentConfigPage=null}_hasLegacyFields(){return!!this._config&&(void 0!==this._config.watt_threshold||void 0!==this._config.w_decimals||void 0!==this._config.kw_decimals)}_migrateLegacyFields(){if(!this._config)return;const e={...this._config};"number"==typeof e.watt_threshold&&void 0===e.kilo_threshold&&(e.kilo_threshold=e.watt_threshold),"number"==typeof e.w_decimals&&void 0===e.base_decimals&&(e.base_decimals=e.w_decimals),"number"==typeof e.kw_decimals&&void 0===e.kilo_decimals&&(e.kilo_decimals=e.kw_decimals),delete e.watt_threshold,delete e.w_decimals,delete e.kw_decimals,this._config=e,s(this,"config-changed",{config:e})}_renderLegacyFieldsAlert(){return this._hasLegacyFields()?ae`
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
    `:se}_hasLegacyIndividualFields(){if(!this._config)return!1;const e=this._config.entities;return void 0!==e.individual1||void 0!==e.individual2}_migrateLegacyIndividualFields(){if(!this._config)return;const e={...this._config,entities:{...this._config.entities}},t=Array.isArray(e.entities.individual)?[...e.entities.individual]:[],o=e=>{Array.isArray(e)?t.push(...e):void 0!==e&&t.push(e)};o(e.entities.individual1),o(e.entities.individual2),e.entities.individual=t,delete e.entities.individual1,delete e.entities.individual2,this._config=e,s(this,"config-changed",{config:e})}_renderLegacyIndividualFieldsAlert(){return this._hasLegacyIndividualFields()?ae`
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
        `;const t=this._currentConfigPage,o="advanced"===t?tn($o,this._config.display_zero_lines?.mode??d.displayZeroLines.mode):xn.find(e=>e.page===t)?.schema,i="advanced"===t?e:e.entities[t];return ae`
        ${this._renderLegacyFieldsAlert()}${this._renderLegacyIndividualFieldsAlert()}
        <subpage-header @go-back=${this._goBack} page=${this._currentConfigPage}> </subpage-header>
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${o}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
      `}const t=(e,t="mdi:dots-horizontal-circle-outline")=>{if(null===e)return se;const o=(()=>{if("individual"===e||"advanced"===e)return t;const o=this?._config?.entities[e];return o?.icon||t})();return ae`
        <link-subpage
          path=${e}
          header="${$o(`editor.${e}`)}"
          @open-sub-element-editor=${()=>this._editDetailElement(e)}
          icon=${o}
        >
        </link-subpage>
      `};return ae`
      <div class="card-config">
        ${this._renderLegacyFieldsAlert()}${this._renderLegacyIndividualFieldsAlert()}
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Qa}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
        ${xn.map(e=>t(e.page,e.icon))}
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
    `}};e([ui({attribute:!1})],kn.prototype,"hass",void 0),e([pi()],kn.prototype,"_config",void 0),e([pi()],kn.prototype,"_configEntities",void 0),e([pi()],kn.prototype,"_currentConfigPage",void 0),kn=e([li("power-flow-card-plus-editor")],kn);var Sn=Object.freeze({__proto__:null,get PowerFlowCardPlusEditor(){return kn}});
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function En(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function $n(){return $n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},$n.apply(null,arguments)}function Cn(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function Dn(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?Cn(Object(o),!0).forEach(function(t){En(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Cn(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function An(e){return An="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},An(e)}function Pn(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var Mn=Pn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Tn=Pn(/Edge/i),zn=Pn(/firefox/i),On=Pn(/safari/i)&&!Pn(/chrome/i)&&!Pn(/android/i),Nn=Pn(/iP(ad|od|hone)/i),In=Pn(/chrome/i)&&Pn(/android/i),jn={capture:!1,passive:!1};function Bn(e,t,o){e.addEventListener(t,o,!Mn&&jn)}function Ln(e,t,o){e.removeEventListener(t,o,!Mn&&jn)}function Rn(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function Fn(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function Hn(e,t,o,i){if(e){o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&Rn(e,t):Rn(e,t))||i&&e===o)return e;if(e===o)break}while(e=Fn(e))}return null}var Un,Gn=/\s+/g;function Vn(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Gn," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(Gn," ")}}function Wn(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function Zn(e,t){var o="";if("string"==typeof e)o=e;else do{var i=Wn(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return a&&new a(o)}function Yn(e,t,o){if(e){var i=e.getElementsByTagName(t),a=0,n=i.length;if(o)for(;a<n;a++)o(i[a],a);return i}return[]}function Xn(){var e=document.scrollingElement;return e||document.documentElement}function qn(e,t,o,i,a){if(e.getBoundingClientRect||e===window){var n,r,s,l,c,d,u;if(e!==window&&e.parentNode&&e!==Xn()?(r=(n=e.getBoundingClientRect()).top,s=n.left,l=n.bottom,c=n.right,d=n.height,u=n.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||o)&&e!==window&&(a=a||e.parentNode,!Mn))do{if(a&&a.getBoundingClientRect&&("none"!==Wn(a,"transform")||o&&"static"!==Wn(a,"position"))){var p=a.getBoundingClientRect();r-=p.top+parseInt(Wn(a,"border-top-width")),s-=p.left+parseInt(Wn(a,"border-left-width")),l=r+n.height,c=s+n.width;break}}while(a=a.parentNode);if(i&&e!==window){var h=Zn(a||e),_=h&&h.a,m=h&&h.d;h&&(l=(r/=m)+(d/=m),c=(s/=_)+(u/=_))}return{top:r,left:s,bottom:l,right:c,width:u,height:d}}}function Kn(e,t,o){for(var i=or(e,!0),a=qn(e)[t];i;){if(!(a>=qn(i)[o]))return i;if(i===Xn())break;i=or(i,!1)}return!1}function Jn(e,t,o,i){for(var a=0,n=0,r=e.children;n<r.length;){if("none"!==r[n].style.display&&r[n]!==rs.ghost&&(i||r[n]!==rs.dragged)&&Hn(r[n],o.draggable,e,!1)){if(a===t)return r[n];a++}n++}return null}function Qn(e,t){for(var o=e.lastElementChild;o&&(o===rs.ghost||"none"===Wn(o,"display")||t&&!Rn(o,t));)o=o.previousElementSibling;return o||null}function er(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===rs.clone||t&&!Rn(e,t)||o++;return o}function tr(e){var t=0,o=0,i=Xn();if(e)do{var a=Zn(e),n=a.a,r=a.d;t+=e.scrollLeft*n,o+=e.scrollTop*r}while(e!==i&&(e=e.parentNode));return[t,o]}function or(e,t){if(!e||!e.getBoundingClientRect)return Xn();var o=e,i=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var a=Wn(o);if(o.clientWidth<o.scrollWidth&&("auto"==a.overflowX||"scroll"==a.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==a.overflowY||"scroll"==a.overflowY)){if(!o.getBoundingClientRect||o===document.body)return Xn();if(i||t)return o;i=!0}}}while(o=o.parentNode);return Xn()}function ir(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function ar(e,t){return function(){if(!Un){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),Un=setTimeout(function(){Un=void 0},t)}}}function nr(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function rr(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function sr(e,t,o){var i={};return Array.from(e.children).forEach(function(a){var n,r,s,l;if(Hn(a,t.draggable,e,!1)&&!a.animated&&a!==o){var c=qn(a);i.left=Math.min(null!==(n=i.left)&&void 0!==n?n:1/0,c.left),i.top=Math.min(null!==(r=i.top)&&void 0!==r?r:1/0,c.top),i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var lr="Sortable"+(new Date).getTime();function cr(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(e){if("none"!==Wn(e,"display")&&e!==rs.ghost){t.push({target:e,rect:qn(e)});var o=Dn({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=Zn(e,!0);i&&(o.top-=i.f,o.left-=i.e)}e.fromRect=o}})},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o);return-1}(t,{target:e}),1)},animateAll:function(o){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof o&&o());var a=!1,n=0;t.forEach(function(e){var t=0,o=e.target,r=o.fromRect,s=qn(o),l=o.prevFromRect,c=o.prevToRect,d=e.rect,u=Zn(o,!0);u&&(s.top-=u.f,s.left-=u.e),o.toRect=s,o.thisAnimationDuration&&ir(l,s)&&!ir(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(t=function(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}(d,l,c,i.options)),ir(s,r)||(o.prevFromRect=r,o.prevToRect=s,t||(t=i.options.animation),i.animate(o,d,s,t)),t&&(a=!0,n=Math.max(n,t),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout(function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null},t),o.thisAnimationDuration=t)}),clearTimeout(e),a?e=setTimeout(function(){"function"==typeof o&&o()},n):"function"==typeof o&&o(),t=[]},animate:function(e,t,o,i){if(i){Wn(e,"transition",""),Wn(e,"transform","");var a=Zn(this.el),n=a&&a.a,r=a&&a.d,s=(t.left-o.left)/(n||1),l=(t.top-o.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,Wn(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Wn(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),Wn(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){Wn(e,"transition",""),Wn(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}}var dr=[],ur={initializeByDefault:!0},pr={mount:function(e){for(var t in ur)ur.hasOwnProperty(t)&&!(t in e)&&(e[t]=ur[t]);dr.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),dr.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var a=e+"Global";dr.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][a]&&t[i.pluginName][a](Dn({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](Dn({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var a in dr.forEach(function(i){var a=i.pluginName;if(e.options[a]||i.initializeByDefault){var n=new i(e,t,e.options);n.sortable=e,n.options=e.options,e[a]=n,$n(o,n.defaults)}}),e.options)if(e.options.hasOwnProperty(a)){var n=this.modifyOption(e,a,e.options[a]);void 0!==n&&(e.options[a]=n)}},getEventProperties:function(e,t){var o={};return dr.forEach(function(i){"function"==typeof i.eventProperties&&$n(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return dr.forEach(function(a){e[a.pluginName]&&a.optionListeners&&"function"==typeof a.optionListeners[t]&&(i=a.optionListeners[t].call(e[a.pluginName],o))}),i}};var hr=["evt"],_r=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,a=function(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;o[i]=e[i]}return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}(o,hr);pr.pluginEvent.bind(rs)(e,t,Dn({dragEl:fr,parentEl:gr,ghostEl:yr,rootEl:vr,nextEl:br,lastDownEl:wr,cloneEl:xr,cloneHidden:kr,dragStarted:Ir,putSortable:Ar,activeSortable:rs.active,originalEvent:i,oldIndex:Sr,oldDraggableIndex:$r,newIndex:Er,newDraggableIndex:Cr,hideGhostForTarget:os,unhideGhostForTarget:is,cloneNowHidden:function(){kr=!0},cloneNowShown:function(){kr=!1},dispatchSortableEvent:function(e){mr({sortable:t,name:e,originalEvent:i})}},a))};function mr(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,a=e.targetEl,n=e.cloneEl,r=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,d=e.oldDraggableIndex,u=e.newDraggableIndex,p=e.originalEvent,h=e.putSortable,_=e.extraEventProperties;if(t=t||o&&o[lr]){var m,f=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||Mn||Tn?(m=document.createEvent("Event")).initEvent(i,!0,!0):m=new CustomEvent(i,{bubbles:!0,cancelable:!0}),m.to=r||o,m.from=s||o,m.item=a||o,m.clone=n,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=d,m.newDraggableIndex=u,m.originalEvent=p,m.pullMode=h?h.lastPutMode:void 0;var y=Dn(Dn({},_),pr.getEventProperties(i,t));for(var v in y)m[v]=y[v];o&&o.dispatchEvent(m),f[g]&&f[g].call(t,m)}}(Dn({putSortable:Ar,cloneEl:xr,targetEl:fr,rootEl:vr,oldIndex:Sr,oldDraggableIndex:$r,newIndex:Er,newDraggableIndex:Cr},e))}var fr,gr,yr,vr,br,wr,xr,kr,Sr,Er,$r,Cr,Dr,Ar,Pr,Mr,Tr,zr,Or,Nr,Ir,jr,Br,Lr,Rr,Fr=!1,Hr=!1,Ur=[],Gr=!1,Vr=!1,Wr=[],Zr=!1,Yr=[],Xr="undefined"!=typeof document,qr=Nn,Kr=Tn||Mn?"cssFloat":"float",Jr=Xr&&!In&&!Nn&&"draggable"in document.createElement("div"),Qr=function(){if(Xr){if(Mn)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),es=function(e,t){var o=Wn(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),a=Jn(e,0,t),n=Jn(e,1,t),r=a&&Wn(a),s=n&&Wn(n),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+qn(a).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+qn(n).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!n||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return a&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=i&&"none"===o[Kr]||n&&"none"===o[Kr]&&l+c>i)?"vertical":"horizontal"},ts=function(e){function t(e,o){return function(i,a,n,r){var s=i.options.group.name&&a.options.group.name&&i.options.group.name===a.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,a,n,r),o)(i,a,n,r);var l=(o?i:a).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==An(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},os=function(){!Qr&&yr&&Wn(yr,"display","none")},is=function(){!Qr&&yr&&Wn(yr,"display","")};Xr&&!In&&document.addEventListener("click",function(e){if(Hr)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Hr=!1,!1},!0);var as=function(e){if(fr){var t=function(e,t){var o;return Ur.some(function(i){var a=i[lr].options.emptyInsertThreshold;if(a&&!Qn(i)){var n=qn(i),r=e>=n.left-a&&e<=n.right+a,s=t>=n.top-a&&t<=n.bottom+a;return r&&s?o=i:void 0}}),o}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[lr]._onDragOver(o)}}},ns=function(e){fr&&fr.parentNode[lr]._isOutsideThisEl(e.target)};function rs(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=$n({},t),e[lr]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return es(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==rs.supportPointer&&"PointerEvent"in window&&(!On||Nn),emptyInsertThreshold:5};for(var i in pr.initializePlugins(this,e,o),o)!(i in t)&&(t[i]=o[i]);for(var a in ts(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&Jr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Bn(e,"pointerdown",this._onTapStart):(Bn(e,"mousedown",this._onTapStart),Bn(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Bn(e,"dragover",this),Bn(e,"dragenter",this)),Ur.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),$n(this,cr())}function ss(e,t,o,i,a,n,r,s){var l,c,d=e[lr],u=d.options.onMove;return!window.CustomEvent||Mn||Tn?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=a||t,l.relatedRect=n||qn(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function ls(e){e.draggable=!1}function cs(){Zr=!1}function ds(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function us(e){return setTimeout(e,0)}function ps(e){return clearTimeout(e)}rs.prototype={constructor:rs,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(jr=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,fr):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,a=i.preventOnFilter,n=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(function(e){Yr.length=0;var t=e.getElementsByTagName("input"),o=t.length;for(;o--;){var i=t[o];i.checked&&Yr.push(i)}}(o),!fr&&!(/mousedown|pointerdown/.test(n)&&0!==e.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!On||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Hn(s,i.draggable,o,!1))&&s.animated||wr===s)){if(Sr=er(s),$r=er(s,i.draggable),"function"==typeof c){if(c.call(this,e,s,this))return mr({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),_r("filter",t,{evt:e}),void(a&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(i){if(i=Hn(l,i.trim(),o,!1))return mr({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),_r("filter",t,{evt:e}),!0})))return void(a&&e.preventDefault());i.handle&&!Hn(l,i.handle,o,!1)||this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,o){var i,a=this,n=a.el,r=a.options,s=n.ownerDocument;if(o&&!fr&&o.parentNode===n){var l=qn(o);if(vr=n,gr=(fr=o).parentNode,br=fr.nextSibling,wr=o,Dr=r.group,rs.dragged=fr,Pr={target:fr,clientX:(t||e).clientX,clientY:(t||e).clientY},Or=Pr.clientX-l.left,Nr=Pr.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,fr.style["will-change"]="all",i=function(){_r("delayEnded",a,{evt:e}),rs.eventCanceled?a._onDrop():(a._disableDelayedDragEvents(),!zn&&a.nativeDraggable&&(fr.draggable=!0),a._triggerDragStart(e,t),mr({sortable:a,name:"choose",originalEvent:e}),Vn(fr,r.chosenClass,!0))},r.ignore.split(",").forEach(function(e){Yn(fr,e.trim(),ls)}),Bn(s,"dragover",as),Bn(s,"mousemove",as),Bn(s,"touchmove",as),r.supportPointer?(Bn(s,"pointerup",a._onDrop),!this.nativeDraggable&&Bn(s,"pointercancel",a._onDrop)):(Bn(s,"mouseup",a._onDrop),Bn(s,"touchend",a._onDrop),Bn(s,"touchcancel",a._onDrop)),zn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,fr.draggable=!0),_r("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(Tn||Mn))i();else{if(rs.eventCanceled)return void this._onDrop();r.supportPointer?(Bn(s,"pointerup",a._disableDelayedDrag),Bn(s,"pointercancel",a._disableDelayedDrag)):(Bn(s,"mouseup",a._disableDelayedDrag),Bn(s,"touchend",a._disableDelayedDrag),Bn(s,"touchcancel",a._disableDelayedDrag)),Bn(s,"mousemove",a._delayedDragTouchMoveHandler),Bn(s,"touchmove",a._delayedDragTouchMoveHandler),r.supportPointer&&Bn(s,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=setTimeout(i,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){fr&&ls(fr),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Ln(e,"mouseup",this._disableDelayedDrag),Ln(e,"touchend",this._disableDelayedDrag),Ln(e,"touchcancel",this._disableDelayedDrag),Ln(e,"pointerup",this._disableDelayedDrag),Ln(e,"pointercancel",this._disableDelayedDrag),Ln(e,"mousemove",this._delayedDragTouchMoveHandler),Ln(e,"touchmove",this._delayedDragTouchMoveHandler),Ln(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?Bn(document,"pointermove",this._onTouchMove):Bn(document,t?"touchmove":"mousemove",this._onTouchMove):(Bn(fr,"dragend",this),Bn(vr,"dragstart",this._onDragStart));try{document.selection?us(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Fr=!1,vr&&fr){_r("dragStarted",this,{evt:t}),this.nativeDraggable&&Bn(document,"dragover",ns);var o=this.options;!e&&Vn(fr,o.dragClass,!1),Vn(fr,o.ghostClass,!0),rs.active=this,e&&this._appendGhost(),mr({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(Mr){this._lastX=Mr.clientX,this._lastY=Mr.clientY,os();for(var e=document.elementFromPoint(Mr.clientX,Mr.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(Mr.clientX,Mr.clientY))!==t;)t=e;if(fr.parentNode[lr]._isOutsideThisEl(e),t)do{if(t[lr]){if(t[lr]._onDragOver({clientX:Mr.clientX,clientY:Mr.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=Fn(t));is()}},_onTouchMove:function(e){if(Pr){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,a=e.touches?e.touches[0]:e,n=yr&&Zn(yr,!0),r=yr&&n&&n.a,s=yr&&n&&n.d,l=qr&&Rr&&tr(Rr),c=(a.clientX-Pr.clientX+i.x)/(r||1)+(l?l[0]-Wr[0]:0)/(r||1),d=(a.clientY-Pr.clientY+i.y)/(s||1)+(l?l[1]-Wr[1]:0)/(s||1);if(!rs.active&&!Fr){if(o&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(yr){n?(n.e+=c-(Tr||0),n.f+=d-(zr||0)):n={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(n.a,",").concat(n.b,",").concat(n.c,",").concat(n.d,",").concat(n.e,",").concat(n.f,")");Wn(yr,"webkitTransform",u),Wn(yr,"mozTransform",u),Wn(yr,"msTransform",u),Wn(yr,"transform",u),Tr=c,zr=d,Mr=a}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!yr){var e=this.options.fallbackOnBody?document.body:vr,t=qn(fr,!0,qr,!0,e),o=this.options;if(qr){for(Rr=e;"static"===Wn(Rr,"position")&&"none"===Wn(Rr,"transform")&&Rr!==document;)Rr=Rr.parentNode;Rr!==document.body&&Rr!==document.documentElement?(Rr===document&&(Rr=Xn()),t.top+=Rr.scrollTop,t.left+=Rr.scrollLeft):Rr=Xn(),Wr=tr(Rr)}Vn(yr=fr.cloneNode(!0),o.ghostClass,!1),Vn(yr,o.fallbackClass,!0),Vn(yr,o.dragClass,!0),Wn(yr,"transition",""),Wn(yr,"transform",""),Wn(yr,"box-sizing","border-box"),Wn(yr,"margin",0),Wn(yr,"top",t.top),Wn(yr,"left",t.left),Wn(yr,"width",t.width),Wn(yr,"height",t.height),Wn(yr,"opacity","0.8"),Wn(yr,"position",qr?"absolute":"fixed"),Wn(yr,"zIndex","100000"),Wn(yr,"pointerEvents","none"),rs.ghost=yr,e.appendChild(yr),Wn(yr,"transform-origin",Or/parseInt(yr.style.width)*100+"% "+Nr/parseInt(yr.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,a=o.options;_r("dragStart",this,{evt:e}),rs.eventCanceled?this._onDrop():(_r("setupClone",this),rs.eventCanceled||((xr=rr(fr)).removeAttribute("id"),xr.draggable=!1,xr.style["will-change"]="",this._hideClone(),Vn(xr,this.options.chosenClass,!1),rs.clone=xr),o.cloneId=us(function(){_r("clone",o),rs.eventCanceled||(o.options.removeCloneOnHide||vr.insertBefore(xr,fr),o._hideClone(),mr({sortable:o,name:"clone"}))}),!t&&Vn(fr,a.dragClass,!0),t?(Hr=!0,o._loopId=setInterval(o._emulateDragOver,50)):(Ln(document,"mouseup",o._onDrop),Ln(document,"touchend",o._onDrop),Ln(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",a.setData&&a.setData.call(o,i,fr)),Bn(document,"drop",o),Wn(fr,"transform","translateZ(0)")),Fr=!0,o._dragStartId=us(o._dragStarted.bind(o,t,e)),Bn(document,"selectstart",o),Ir=!0,window.getSelection().removeAllRanges(),On&&Wn(document.body,"user-select","none"))},_onDragOver:function(e){var t,o,i,a,n=this.el,r=e.target,s=this.options,l=s.group,c=rs.active,d=Dr===l,u=s.sort,p=Ar||c,h=this,_=!1;if(!Zr){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),r=Hn(r,s.draggable,n,!0),A("dragOver"),rs.eventCanceled)return _;if(fr.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||h._ignoreWhileAnimating===r)return M(!1);if(Hr=!1,c&&!s.disabled&&(d?u||(i=gr!==vr):Ar===this||(this.lastPutMode=Dr.checkPull(this,c,fr,e))&&l.checkPut(this,c,fr,e))){if(a="vertical"===this._getDirection(e,r),t=qn(fr),A("dragOverValid"),rs.eventCanceled)return _;if(i)return gr=vr,P(),this._hideClone(),A("revert"),rs.eventCanceled||(br?vr.insertBefore(fr,br):vr.appendChild(fr)),M(!0);var m=Qn(n,s.draggable);if(!m||function(e,t,o){var i=qn(Qn(o.el,o.options.draggable)),a=sr(o.el,o.options,yr),n=10;return t?e.clientX>a.right+n||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>a.bottom+n||e.clientX>i.right&&e.clientY>i.top}(e,a,this)&&!m.animated){if(m===fr)return M(!1);if(m&&n===e.target&&(r=m),r&&(o=qn(r)),!1!==ss(vr,n,fr,t,r,o,e,!!r))return P(),m&&m.nextSibling?n.insertBefore(fr,m.nextSibling):n.appendChild(fr),gr=n,T(),M(!0)}else if(m&&function(e,t,o){var i=qn(Jn(o.el,0,o.options,!0)),a=sr(o.el,o.options,yr),n=10;return t?e.clientX<a.left-n||e.clientY<i.top&&e.clientX<i.right:e.clientY<a.top-n||e.clientY<i.bottom&&e.clientX<i.left}(e,a,this)){var f=Jn(n,0,s,!0);if(f===fr)return M(!1);if(o=qn(r=f),!1!==ss(vr,n,fr,t,r,o,e,!1))return P(),n.insertBefore(fr,f),gr=n,T(),M(!0)}else if(r.parentNode===n){o=qn(r);var g,y,v,b=fr.parentNode!==n,w=!function(e,t,o){var i=o?e.left:e.top,a=o?e.right:e.bottom,n=o?e.width:e.height,r=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===r||a===s||i+n/2===r+l/2}(fr.animated&&fr.toRect||t,r.animated&&r.toRect||o,a),x=a?"top":"left",k=Kn(r,"top","top")||Kn(fr,"top","top"),S=k?k.scrollTop:void 0;if(jr!==r&&(y=o[x],Gr=!1,Vr=!w&&s.invertSwap||b),g=function(e,t,o,i,a,n,r,s){var l=i?e.clientY:e.clientX,c=i?o.height:o.width,d=i?o.top:o.left,u=i?o.bottom:o.right,p=!1;if(!r)if(s&&Lr<c*a){if(!Gr&&(1===Br?l>d+c*n/2:l<u-c*n/2)&&(Gr=!0),Gr)p=!0;else if(1===Br?l<d+Lr:l>u-Lr)return-Br}else if(l>d+c*(1-a)/2&&l<u-c*(1-a)/2)return function(e){return er(fr)<er(e)?1:-1}(t);if((p=p||r)&&(l<d+c*n/2||l>u-c*n/2))return l>d+c/2?1:-1;return 0}(e,r,o,a,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Vr,jr===r),0!==g){var E=er(fr);do{E-=g,v=gr.children[E]}while(v&&("none"===Wn(v,"display")||v===yr))}if(0===g||v===r)return M(!1);jr=r,Br=g;var $=r.nextElementSibling,C=!1,D=ss(vr,n,fr,t,r,o,e,C=1===g);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),Zr=!0,setTimeout(cs,30),P(),C&&!$?n.appendChild(fr):r.parentNode.insertBefore(fr,C?$:r),k&&nr(k,0,S-k.scrollTop),gr=fr.parentNode,void 0===y||Vr||(Lr=Math.abs(y-qn(r)[x])),T(),M(!0)}if(n.contains(fr))return M(!1)}return!1}function A(s,l){_r(s,h,Dn({evt:e,isOwner:d,axis:a?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:u,fromSortable:p,target:r,completed:M,onMove:function(o,i){return ss(vr,n,fr,t,o,qn(o),e,i)},changed:T},l))}function P(){A("dragOverAnimationCapture"),h.captureAnimationState(),h!==p&&p.captureAnimationState()}function M(t){return A("dragOverCompleted",{insertion:t}),t&&(d?c._hideClone():c._showClone(h),h!==p&&(Vn(fr,Ar?Ar.options.ghostClass:c.options.ghostClass,!1),Vn(fr,s.ghostClass,!0)),Ar!==h&&h!==rs.active?Ar=h:h===rs.active&&Ar&&(Ar=null),p===h&&(h._ignoreWhileAnimating=r),h.animateAll(function(){A("dragOverAnimationComplete"),h._ignoreWhileAnimating=null}),h!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===fr&&!fr.animated||r===n&&!r.animated)&&(jr=null),s.dragoverBubble||e.rootEl||r===document||(fr.parentNode[lr]._isOutsideThisEl(e.target),!t&&as(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),_=!0}function T(){Er=er(fr),Cr=er(fr,s.draggable),mr({sortable:h,name:"change",toEl:n,newIndex:Er,newDraggableIndex:Cr,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Ln(document,"mousemove",this._onTouchMove),Ln(document,"touchmove",this._onTouchMove),Ln(document,"pointermove",this._onTouchMove),Ln(document,"dragover",as),Ln(document,"mousemove",as),Ln(document,"touchmove",as)},_offUpEvents:function(){var e=this.el.ownerDocument;Ln(e,"mouseup",this._onDrop),Ln(e,"touchend",this._onDrop),Ln(e,"pointerup",this._onDrop),Ln(e,"pointercancel",this._onDrop),Ln(e,"touchcancel",this._onDrop),Ln(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;Er=er(fr),Cr=er(fr,o.draggable),_r("drop",this,{evt:e}),gr=fr&&fr.parentNode,Er=er(fr),Cr=er(fr,o.draggable),rs.eventCanceled||(Fr=!1,Vr=!1,Gr=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ps(this.cloneId),ps(this._dragStartId),this.nativeDraggable&&(Ln(document,"drop",this),Ln(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),On&&Wn(document.body,"user-select",""),Wn(fr,"transform",""),e&&(Ir&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),yr&&yr.parentNode&&yr.parentNode.removeChild(yr),(vr===gr||Ar&&"clone"!==Ar.lastPutMode)&&xr&&xr.parentNode&&xr.parentNode.removeChild(xr),fr&&(this.nativeDraggable&&Ln(fr,"dragend",this),ls(fr),fr.style["will-change"]="",Ir&&!Fr&&Vn(fr,Ar?Ar.options.ghostClass:this.options.ghostClass,!1),Vn(fr,this.options.chosenClass,!1),mr({sortable:this,name:"unchoose",toEl:gr,newIndex:null,newDraggableIndex:null,originalEvent:e}),vr!==gr?(Er>=0&&(mr({rootEl:gr,name:"add",toEl:gr,fromEl:vr,originalEvent:e}),mr({sortable:this,name:"remove",toEl:gr,originalEvent:e}),mr({rootEl:gr,name:"sort",toEl:gr,fromEl:vr,originalEvent:e}),mr({sortable:this,name:"sort",toEl:gr,originalEvent:e})),Ar&&Ar.save()):Er!==Sr&&Er>=0&&(mr({sortable:this,name:"update",toEl:gr,originalEvent:e}),mr({sortable:this,name:"sort",toEl:gr,originalEvent:e})),rs.active&&(null!=Er&&-1!==Er||(Er=Sr,Cr=$r),mr({sortable:this,name:"end",toEl:gr,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){_r("nulling",this),vr=fr=gr=yr=br=xr=wr=kr=Pr=Mr=Ir=Er=Cr=Sr=$r=jr=Br=Ar=Dr=rs.dragged=rs.ghost=rs.clone=rs.active=null;var e=this.el;Yr.forEach(function(t){e.contains(t)&&(t.checked=!0)}),Yr.length=Tr=zr=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":fr&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,a=o.length,n=this.options;i<a;i++)Hn(e=o[i],n.draggable,this.el,!1)&&t.push(e.getAttribute(n.dataIdAttr)||ds(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var a=i.children[t];Hn(a,this.options.draggable,i,!1)&&(o[e]=a)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return Hn(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=pr.modifyOption(this,e,t);o[e]=void 0!==i?i:t,"group"===e&&ts(o)},destroy:function(){_r("destroy",this);var e=this.el;e[lr]=null,Ln(e,"mousedown",this._onTapStart),Ln(e,"touchstart",this._onTapStart),Ln(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ln(e,"dragover",this),Ln(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ur.splice(Ur.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!kr){if(_r("hideClone",this),rs.eventCanceled)return;Wn(xr,"display","none"),this.options.removeCloneOnHide&&xr.parentNode&&xr.parentNode.removeChild(xr),kr=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(kr){if(_r("showClone",this),rs.eventCanceled)return;fr.parentNode!=vr||this.options.group.revertClone?br?vr.insertBefore(xr,br):vr.appendChild(xr):vr.insertBefore(xr,fr),this.options.group.revertClone&&this.animate(fr,xr),Wn(xr,"display",""),kr=!1}}else this._hideClone()}},Xr&&Bn(document,"touchmove",function(e){(rs.active||Fr)&&e.cancelable&&e.preventDefault()}),rs.utils={on:Bn,off:Ln,css:Wn,find:Yn,is:function(e,t){return!!Hn(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:ar,closest:Hn,toggleClass:Vn,clone:rr,index:er,nextTick:us,cancelNextTick:ps,detectDirection:es,getChild:Jn,expando:lr},rs.get=function(e){return e[lr]},rs.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(rs.utils=Dn(Dn({},rs.utils),e.utils)),pr.mount(e)})},rs.create=function(e,t){return new rs(e,t)},rs.version="1.15.7";var hs,_s,ms,fs,gs,ys,vs=[],bs=!1;function ws(){vs.forEach(function(e){clearInterval(e.pid)}),vs=[]}function xs(){clearInterval(ys)}var ks=ar(function(e,t,o,i){if(t.scroll){var a,n=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,c=Xn(),d=!1;_s!==o&&(_s=o,ws(),hs=t.scroll,a=t.scrollFn,!0===hs&&(hs=or(o,!0)));var u=0,p=hs;do{var h=p,_=qn(h),m=_.top,f=_.bottom,g=_.left,y=_.right,v=_.width,b=_.height,w=void 0,x=void 0,k=h.scrollWidth,S=h.scrollHeight,E=Wn(h),$=h.scrollLeft,C=h.scrollTop;h===c?(w=v<k&&("auto"===E.overflowX||"scroll"===E.overflowX||"visible"===E.overflowX),x=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY||"visible"===E.overflowY)):(w=v<k&&("auto"===E.overflowX||"scroll"===E.overflowX),x=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY));var D=w&&(Math.abs(y-n)<=s&&$+v<k)-(Math.abs(g-n)<=s&&!!$),A=x&&(Math.abs(f-r)<=s&&C+b<S)-(Math.abs(m-r)<=s&&!!C);if(!vs[u])for(var P=0;P<=u;P++)vs[P]||(vs[P]={});vs[u].vx==D&&vs[u].vy==A&&vs[u].el===h||(vs[u].el=h,vs[u].vx=D,vs[u].vy=A,clearInterval(vs[u].pid),0==D&&0==A||(d=!0,vs[u].pid=setInterval(function(){i&&0===this.layer&&rs.active._onTouchMove(gs);var t=vs[this.layer].vy?vs[this.layer].vy*l:0,o=vs[this.layer].vx?vs[this.layer].vx*l:0;"function"==typeof a&&"continue"!==a.call(rs.dragged.parentNode[lr],o,t,e,gs,vs[this.layer].el)||nr(vs[this.layer].el,o,t)}.bind({layer:u}),24))),u++}while(t.bubbleScroll&&p!==c&&(p=or(p,!1)));bs=d}},30),Ss=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,a=e.activeSortable,n=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||a;r();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(n("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function Es(){}function $s(){}
/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Cs(e,t,o){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},Ds.apply(null,arguments)}function As(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)}return o}function Ps(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?As(Object(o),!0).forEach(function(t){Cs(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):As(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function Ms(e){return Ms="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ms(e)}Es.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=Jn(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:Ss},$n(Es,{pluginName:"revertOnSpill"}),$s.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:Ss},$n($s,{pluginName:"removeOnSpill"}),rs.mount(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?Bn(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Bn(document,"pointermove",this._handleFallbackAutoScroll):t.touches?Bn(document,"touchmove",this._handleFallbackAutoScroll):Bn(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?Ln(document,"dragover",this._handleAutoScroll):(Ln(document,"pointermove",this._handleFallbackAutoScroll),Ln(document,"touchmove",this._handleFallbackAutoScroll),Ln(document,"mousemove",this._handleFallbackAutoScroll)),xs(),ws(),clearTimeout(Un),Un=void 0},nulling:function(){gs=_s=hs=bs=ys=ms=fs=null,vs.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var o=this,i=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,n=document.elementFromPoint(i,a);if(gs=e,t||this.options.forceAutoScrollFallback||Tn||Mn||On){ks(e,this.options,n,t);var r=or(n,!0);!bs||ys&&i===ms&&a===fs||(ys&&xs(),ys=setInterval(function(){var n=or(document.elementFromPoint(i,a),!0);n!==r&&(r=n,ws()),ks(e,o.options,n,t)},10),ms=i,fs=a)}else{if(!this.options.bubbleScroll||or(n,!0)===Xn())return void ws();ks(e,this.options,or(n,!1),!1)}}},$n(e,{pluginName:"scroll",initializeByDefault:!0})}),rs.mount($s,Es);function Ts(e){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(e)}var zs=Ts(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Os=Ts(/Edge/i),Ns=Ts(/firefox/i),Is=Ts(/safari/i)&&!Ts(/chrome/i)&&!Ts(/android/i),js=Ts(/iP(ad|od|hone)/i),Bs=Ts(/chrome/i)&&Ts(/android/i),Ls={capture:!1,passive:!1};function Rs(e,t,o){e.addEventListener(t,o,!zs&&Ls)}function Fs(e,t,o){e.removeEventListener(t,o,!zs&&Ls)}function Hs(e,t){if(t){if(">"===t[0]&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch(e){return!1}return!1}}function Us(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function Gs(e,t,o,i){if(e){o=o||document;do{if(null!=t&&(">"===t[0]?e.parentNode===o&&Hs(e,t):Hs(e,t))||i&&e===o)return e;if(e===o)break}while(e=Us(e))}return null}var Vs,Ws=/\s+/g;function Zs(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ws," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(Ws," ")}}function Ys(e,t,o){var i=e&&e.style;if(i){if(void 0===o)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),void 0===t?o:o[t];t in i||-1!==t.indexOf("webkit")||(t="-webkit-"+t),i[t]=o+("string"==typeof o?"":"px")}}function Xs(e,t){var o="";if("string"==typeof e)o=e;else do{var i=Ys(e,"transform");i&&"none"!==i&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var a=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return a&&new a(o)}function qs(e,t,o){if(e){var i=e.getElementsByTagName(t),a=0,n=i.length;if(o)for(;a<n;a++)o(i[a],a);return i}return[]}function Ks(){var e=document.scrollingElement;return e||document.documentElement}function Js(e,t,o,i,a){if(e.getBoundingClientRect||e===window){var n,r,s,l,c,d,u;if(e!==window&&e.parentNode&&e!==Ks()?(r=(n=e.getBoundingClientRect()).top,s=n.left,l=n.bottom,c=n.right,d=n.height,u=n.width):(r=0,s=0,l=window.innerHeight,c=window.innerWidth,d=window.innerHeight,u=window.innerWidth),(t||o)&&e!==window&&(a=a||e.parentNode,!zs))do{if(a&&a.getBoundingClientRect&&("none"!==Ys(a,"transform")||o&&"static"!==Ys(a,"position"))){var p=a.getBoundingClientRect();r-=p.top+parseInt(Ys(a,"border-top-width")),s-=p.left+parseInt(Ys(a,"border-left-width")),l=r+n.height,c=s+n.width;break}}while(a=a.parentNode);if(i&&e!==window){var h=Xs(a||e),_=h&&h.a,m=h&&h.d;h&&(l=(r/=m)+(d/=m),c=(s/=_)+(u/=_))}return{top:r,left:s,bottom:l,right:c,width:u,height:d}}}function Qs(e,t,o){for(var i=al(e,!0),a=Js(e)[t];i;){if(!(a>=Js(i)[o]))return i;if(i===Ks())break;i=al(i,!1)}return!1}function el(e,t,o,i){for(var a=0,n=0,r=e.children;n<r.length;){if("none"!==r[n].style.display&&r[n]!==lc.ghost&&(i||r[n]!==lc.dragged)&&Gs(r[n],o.draggable,e,!1)){if(a===t)return r[n];a++}n++}return null}function tl(e,t){for(var o=e.lastElementChild;o&&(o===lc.ghost||"none"===Ys(o,"display")||t&&!Hs(o,t));)o=o.previousElementSibling;return o||null}function ol(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)"TEMPLATE"===e.nodeName.toUpperCase()||e===lc.clone||t&&!Hs(e,t)||o++;return o}function il(e){var t=0,o=0,i=Ks();if(e)do{var a=Xs(e),n=a.a,r=a.d;t+=e.scrollLeft*n,o+=e.scrollTop*r}while(e!==i&&(e=e.parentNode));return[t,o]}function al(e,t){if(!e||!e.getBoundingClientRect)return Ks();var o=e,i=!1;do{if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var a=Ys(o);if(o.clientWidth<o.scrollWidth&&("auto"==a.overflowX||"scroll"==a.overflowX)||o.clientHeight<o.scrollHeight&&("auto"==a.overflowY||"scroll"==a.overflowY)){if(!o.getBoundingClientRect||o===document.body)return Ks();if(i||t)return o;i=!0}}}while(o=o.parentNode);return Ks()}function nl(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}function rl(e,t){return function(){if(!Vs){var o=arguments;1===o.length?e.call(this,o[0]):e.apply(this,o),Vs=setTimeout(function(){Vs=void 0},t)}}}function sl(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function ll(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function cl(e,t,o){var i={};return Array.from(e.children).forEach(function(a){var n,r,s,l;if(Gs(a,t.draggable,e,!1)&&!a.animated&&a!==o){var c=Js(a);i.left=Math.min(null!==(n=i.left)&&void 0!==n?n:1/0,c.left),i.top=Math.min(null!==(r=i.top)&&void 0!==r?r:1/0,c.top),i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,c.right),i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var dl="Sortable"+(new Date).getTime();function ul(){var e,t=[];return{captureAnimationState:function(){(t=[],this.options.animation)&&[].slice.call(this.el.children).forEach(function(e){if("none"!==Ys(e,"display")&&e!==lc.ghost){t.push({target:e,rect:Js(e)});var o=Ps({},t[t.length-1].rect);if(e.thisAnimationDuration){var i=Xs(e,!0);i&&(o.top-=i.f,o.left-=i.e)}e.fromRect=o}})},addAnimationState:function(e){t.push(e)},removeAnimationState:function(e){t.splice(function(e,t){for(var o in e)if(e.hasOwnProperty(o))for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o);return-1}(t,{target:e}),1)},animateAll:function(o){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof o&&o());var a=!1,n=0;t.forEach(function(e){var t=0,o=e.target,r=o.fromRect,s=Js(o),l=o.prevFromRect,c=o.prevToRect,d=e.rect,u=Xs(o,!0);u&&(s.top-=u.f,s.left-=u.e),o.toRect=s,o.thisAnimationDuration&&nl(l,s)&&!nl(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(t=function(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}(d,l,c,i.options)),nl(s,r)||(o.prevFromRect=r,o.prevToRect=s,t||(t=i.options.animation),i.animate(o,d,s,t)),t&&(a=!0,n=Math.max(n,t),clearTimeout(o.animationResetTimer),o.animationResetTimer=setTimeout(function(){o.animationTime=0,o.prevFromRect=null,o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null},t),o.thisAnimationDuration=t)}),clearTimeout(e),a?e=setTimeout(function(){"function"==typeof o&&o()},n):"function"==typeof o&&o(),t=[]},animate:function(e,t,o,i){if(i){Ys(e,"transition",""),Ys(e,"transform","");var a=Xs(this.el),n=a&&a.a,r=a&&a.d,s=(t.left-o.left)/(n||1),l=(t.top-o.top)/(r||1);e.animatingX=!!s,e.animatingY=!!l,Ys(e,"transform","translate3d("+s+"px,"+l+"px,0)"),this.forRepaintDummy=function(e){return e.offsetWidth}(e),Ys(e,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),Ys(e,"transform","translate3d(0,0,0)"),"number"==typeof e.animated&&clearTimeout(e.animated),e.animated=setTimeout(function(){Ys(e,"transition",""),Ys(e,"transform",""),e.animated=!1,e.animatingX=!1,e.animatingY=!1},i)}}}}var pl=[],hl={initializeByDefault:!0},_l={mount:function(e){for(var t in hl)hl.hasOwnProperty(t)&&!(t in e)&&(e[t]=hl[t]);pl.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),pl.push(e)},pluginEvent:function(e,t,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var a=e+"Global";pl.forEach(function(i){t[i.pluginName]&&(t[i.pluginName][a]&&t[i.pluginName][a](Ps({sortable:t},o)),t.options[i.pluginName]&&t[i.pluginName][e]&&t[i.pluginName][e](Ps({sortable:t},o)))})},initializePlugins:function(e,t,o,i){for(var a in pl.forEach(function(i){var a=i.pluginName;if(e.options[a]||i.initializeByDefault){var n=new i(e,t,e.options);n.sortable=e,n.options=e.options,e[a]=n,Ds(o,n.defaults)}}),e.options)if(e.options.hasOwnProperty(a)){var n=this.modifyOption(e,a,e.options[a]);void 0!==n&&(e.options[a]=n)}},getEventProperties:function(e,t){var o={};return pl.forEach(function(i){"function"==typeof i.eventProperties&&Ds(o,i.eventProperties.call(t[i.pluginName],e))}),o},modifyOption:function(e,t,o){var i;return pl.forEach(function(a){e[a.pluginName]&&a.optionListeners&&"function"==typeof a.optionListeners[t]&&(i=a.optionListeners[t].call(e[a.pluginName],o))}),i}};var ml=["evt"],fl=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,a=function(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;o[i]=e[i]}return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}(o,ml);_l.pluginEvent.bind(lc)(e,t,Ps({dragEl:yl,parentEl:vl,ghostEl:bl,rootEl:wl,nextEl:xl,lastDownEl:kl,cloneEl:Sl,cloneHidden:El,dragStarted:Bl,putSortable:Ml,activeSortable:lc.active,originalEvent:i,oldIndex:$l,oldDraggableIndex:Dl,newIndex:Cl,newDraggableIndex:Al,hideGhostForTarget:ac,unhideGhostForTarget:nc,cloneNowHidden:function(){El=!0},cloneNowShown:function(){El=!1},dispatchSortableEvent:function(e){gl({sortable:t,name:e,originalEvent:i})}},a))};function gl(e){!function(e){var t=e.sortable,o=e.rootEl,i=e.name,a=e.targetEl,n=e.cloneEl,r=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,d=e.oldDraggableIndex,u=e.newDraggableIndex,p=e.originalEvent,h=e.putSortable,_=e.extraEventProperties;if(t=t||o&&o[dl]){var m,f=t.options,g="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||zs||Os?(m=document.createEvent("Event")).initEvent(i,!0,!0):m=new CustomEvent(i,{bubbles:!0,cancelable:!0}),m.to=r||o,m.from=s||o,m.item=a||o,m.clone=n,m.oldIndex=l,m.newIndex=c,m.oldDraggableIndex=d,m.newDraggableIndex=u,m.originalEvent=p,m.pullMode=h?h.lastPutMode:void 0;var y=Ps(Ps({},_),_l.getEventProperties(i,t));for(var v in y)m[v]=y[v];o&&o.dispatchEvent(m),f[g]&&f[g].call(t,m)}}(Ps({putSortable:Ml,cloneEl:Sl,targetEl:yl,rootEl:wl,oldIndex:$l,oldDraggableIndex:Dl,newIndex:Cl,newDraggableIndex:Al},e))}var yl,vl,bl,wl,xl,kl,Sl,El,$l,Cl,Dl,Al,Pl,Ml,Tl,zl,Ol,Nl,Il,jl,Bl,Ll,Rl,Fl,Hl,Ul=!1,Gl=!1,Vl=[],Wl=!1,Zl=!1,Yl=[],Xl=!1,ql=[],Kl="undefined"!=typeof document,Jl=js,Ql=Os||zs?"cssFloat":"float",ec=Kl&&!Bs&&!js&&"draggable"in document.createElement("div"),tc=function(){if(Kl){if(zs)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents}}(),oc=function(e,t){var o=Ys(e),i=parseInt(o.width)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth),a=el(e,0,t),n=el(e,1,t),r=a&&Ys(a),s=n&&Ys(n),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+Js(a).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Js(n).width;if("flex"===o.display)return"column"===o.flexDirection||"column-reverse"===o.flexDirection?"vertical":"horizontal";if("grid"===o.display)return o.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(a&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right";return!n||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}return a&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=i&&"none"===o[Ql]||n&&"none"===o[Ql]&&l+c>i)?"vertical":"horizontal"},ic=function(e){function t(e,o){return function(i,a,n,r){var s=i.options.group.name&&a.options.group.name&&i.options.group.name===a.options.group.name;if(null==e&&(o||s))return!0;if(null==e||!1===e)return!1;if(o&&"clone"===e)return e;if("function"==typeof e)return t(e(i,a,n,r),o)(i,a,n,r);var l=(o?i:a).options.group.name;return!0===e||"string"==typeof e&&e===l||e.join&&e.indexOf(l)>-1}}var o={},i=e.group;i&&"object"==Ms(i)||(i={name:i}),o.name=i.name,o.checkPull=t(i.pull,!0),o.checkPut=t(i.put),o.revertClone=i.revertClone,e.group=o},ac=function(){!tc&&bl&&Ys(bl,"display","none")},nc=function(){!tc&&bl&&Ys(bl,"display","")};Kl&&!Bs&&document.addEventListener("click",function(e){if(Gl)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Gl=!1,!1},!0);var rc=function(e){if(yl){var t=function(e,t){var o;return Vl.some(function(i){var a=i[dl].options.emptyInsertThreshold;if(a&&!tl(i)){var n=Js(i),r=e>=n.left-a&&e<=n.right+a,s=t>=n.top-a&&t<=n.bottom+a;return r&&s?o=i:void 0}}),o}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var o={};for(var i in e)e.hasOwnProperty(i)&&(o[i]=e[i]);o.target=o.rootEl=t,o.preventDefault=void 0,o.stopPropagation=void 0,t[dl]._onDragOver(o)}}},sc=function(e){yl&&yl.parentNode[dl]._isOutsideThisEl(e.target)};function lc(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=Ds({},t),e[dl]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return oc(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==lc.supportPointer&&"PointerEvent"in window&&(!Is||js),emptyInsertThreshold:5};for(var i in _l.initializePlugins(this,e,o),o)!(i in t)&&(t[i]=o[i]);for(var a in ic(t),this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!t.forceFallback&&ec,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?Rs(e,"pointerdown",this._onTapStart):(Rs(e,"mousedown",this._onTapStart),Rs(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(Rs(e,"dragover",this),Rs(e,"dragenter",this)),Vl.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),Ds(this,ul())}function cc(e,t,o,i,a,n,r,s){var l,c,d=e[dl],u=d.options.onMove;return!window.CustomEvent||zs||Os?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=a||t,l.relatedRect=n||Js(t),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function dc(e){e.draggable=!1}function uc(){Xl=!1}function pc(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function hc(e){return setTimeout(e,0)}function _c(e){return clearTimeout(e)}lc.prototype={constructor:lc,_isOutsideThisEl:function(e){this.el.contains(e)||e===this.el||(Ll=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,yl):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,o=this.el,i=this.options,a=i.preventOnFilter,n=e.type,r=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,s=(r||e).target,l=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||s,c=i.filter;if(function(e){ql.length=0;var t=e.getElementsByTagName("input"),o=t.length;for(;o--;){var i=t[o];i.checked&&ql.push(i)}}(o),!yl&&!(/mousedown|pointerdown/.test(n)&&0!==e.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!Is||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Gs(s,i.draggable,o,!1))&&s.animated||kl===s)){if($l=ol(s),Dl=ol(s,i.draggable),"function"==typeof c){if(c.call(this,e,s,this))return gl({sortable:t,rootEl:l,name:"filter",targetEl:s,toEl:o,fromEl:o}),fl("filter",t,{evt:e}),void(a&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(i){if(i=Gs(l,i.trim(),o,!1))return gl({sortable:t,rootEl:i,name:"filter",targetEl:s,fromEl:o,toEl:o}),fl("filter",t,{evt:e}),!0})))return void(a&&e.preventDefault());i.handle&&!Gs(l,i.handle,o,!1)||this._prepareDragStart(e,r,s)}}},_prepareDragStart:function(e,t,o){var i,a=this,n=a.el,r=a.options,s=n.ownerDocument;if(o&&!yl&&o.parentNode===n){var l=Js(o);if(wl=n,vl=(yl=o).parentNode,xl=yl.nextSibling,kl=o,Pl=r.group,lc.dragged=yl,Tl={target:yl,clientX:(t||e).clientX,clientY:(t||e).clientY},Il=Tl.clientX-l.left,jl=Tl.clientY-l.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,yl.style["will-change"]="all",i=function(){fl("delayEnded",a,{evt:e}),lc.eventCanceled?a._onDrop():(a._disableDelayedDragEvents(),!Ns&&a.nativeDraggable&&(yl.draggable=!0),a._triggerDragStart(e,t),gl({sortable:a,name:"choose",originalEvent:e}),Zs(yl,r.chosenClass,!0))},r.ignore.split(",").forEach(function(e){qs(yl,e.trim(),dc)}),Rs(s,"dragover",rc),Rs(s,"mousemove",rc),Rs(s,"touchmove",rc),r.supportPointer?(Rs(s,"pointerup",a._onDrop),!this.nativeDraggable&&Rs(s,"pointercancel",a._onDrop)):(Rs(s,"mouseup",a._onDrop),Rs(s,"touchend",a._onDrop),Rs(s,"touchcancel",a._onDrop)),Ns&&this.nativeDraggable&&(this.options.touchStartThreshold=4,yl.draggable=!0),fl("delayStart",this,{evt:e}),!r.delay||r.delayOnTouchOnly&&!t||this.nativeDraggable&&(Os||zs))i();else{if(lc.eventCanceled)return void this._onDrop();r.supportPointer?(Rs(s,"pointerup",a._disableDelayedDrag),Rs(s,"pointercancel",a._disableDelayedDrag)):(Rs(s,"mouseup",a._disableDelayedDrag),Rs(s,"touchend",a._disableDelayedDrag),Rs(s,"touchcancel",a._disableDelayedDrag)),Rs(s,"mousemove",a._delayedDragTouchMoveHandler),Rs(s,"touchmove",a._delayedDragTouchMoveHandler),r.supportPointer&&Rs(s,"pointermove",a._delayedDragTouchMoveHandler),a._dragStartTimer=setTimeout(i,r.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){yl&&dc(yl),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;Fs(e,"mouseup",this._disableDelayedDrag),Fs(e,"touchend",this._disableDelayedDrag),Fs(e,"touchcancel",this._disableDelayedDrag),Fs(e,"pointerup",this._disableDelayedDrag),Fs(e,"pointercancel",this._disableDelayedDrag),Fs(e,"mousemove",this._delayedDragTouchMoveHandler),Fs(e,"touchmove",this._delayedDragTouchMoveHandler),Fs(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?this.options.supportPointer?Rs(document,"pointermove",this._onTouchMove):Rs(document,t?"touchmove":"mousemove",this._onTouchMove):(Rs(yl,"dragend",this),Rs(wl,"dragstart",this._onDragStart));try{document.selection?hc(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(e,t){if(Ul=!1,wl&&yl){fl("dragStarted",this,{evt:t}),this.nativeDraggable&&Rs(document,"dragover",sc);var o=this.options;!e&&Zs(yl,o.dragClass,!1),Zs(yl,o.ghostClass,!0),lc.active=this,e&&this._appendGhost(),gl({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(zl){this._lastX=zl.clientX,this._lastY=zl.clientY,ac();for(var e=document.elementFromPoint(zl.clientX,zl.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(zl.clientX,zl.clientY))!==t;)t=e;if(yl.parentNode[dl]._isOutsideThisEl(e),t)do{if(t[dl]){if(t[dl]._onDragOver({clientX:zl.clientX,clientY:zl.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break}e=t}while(t=Us(t));nc()}},_onTouchMove:function(e){if(Tl){var t=this.options,o=t.fallbackTolerance,i=t.fallbackOffset,a=e.touches?e.touches[0]:e,n=bl&&Xs(bl,!0),r=bl&&n&&n.a,s=bl&&n&&n.d,l=Jl&&Hl&&il(Hl),c=(a.clientX-Tl.clientX+i.x)/(r||1)+(l?l[0]-Yl[0]:0)/(r||1),d=(a.clientY-Tl.clientY+i.y)/(s||1)+(l?l[1]-Yl[1]:0)/(s||1);if(!lc.active&&!Ul){if(o&&Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))<o)return;this._onDragStart(e,!0)}if(bl){n?(n.e+=c-(Ol||0),n.f+=d-(Nl||0)):n={a:1,b:0,c:0,d:1,e:c,f:d};var u="matrix(".concat(n.a,",").concat(n.b,",").concat(n.c,",").concat(n.d,",").concat(n.e,",").concat(n.f,")");Ys(bl,"webkitTransform",u),Ys(bl,"mozTransform",u),Ys(bl,"msTransform",u),Ys(bl,"transform",u),Ol=c,Nl=d,zl=a}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!bl){var e=this.options.fallbackOnBody?document.body:wl,t=Js(yl,!0,Jl,!0,e),o=this.options;if(Jl){for(Hl=e;"static"===Ys(Hl,"position")&&"none"===Ys(Hl,"transform")&&Hl!==document;)Hl=Hl.parentNode;Hl!==document.body&&Hl!==document.documentElement?(Hl===document&&(Hl=Ks()),t.top+=Hl.scrollTop,t.left+=Hl.scrollLeft):Hl=Ks(),Yl=il(Hl)}Zs(bl=yl.cloneNode(!0),o.ghostClass,!1),Zs(bl,o.fallbackClass,!0),Zs(bl,o.dragClass,!0),Ys(bl,"transition",""),Ys(bl,"transform",""),Ys(bl,"box-sizing","border-box"),Ys(bl,"margin",0),Ys(bl,"top",t.top),Ys(bl,"left",t.left),Ys(bl,"width",t.width),Ys(bl,"height",t.height),Ys(bl,"opacity","0.8"),Ys(bl,"position",Jl?"absolute":"fixed"),Ys(bl,"zIndex","100000"),Ys(bl,"pointerEvents","none"),lc.ghost=bl,e.appendChild(bl),Ys(bl,"transform-origin",Il/parseInt(bl.style.width)*100+"% "+jl/parseInt(bl.style.height)*100+"%")}},_onDragStart:function(e,t){var o=this,i=e.dataTransfer,a=o.options;fl("dragStart",this,{evt:e}),lc.eventCanceled?this._onDrop():(fl("setupClone",this),lc.eventCanceled||((Sl=ll(yl)).removeAttribute("id"),Sl.draggable=!1,Sl.style["will-change"]="",this._hideClone(),Zs(Sl,this.options.chosenClass,!1),lc.clone=Sl),o.cloneId=hc(function(){fl("clone",o),lc.eventCanceled||(o.options.removeCloneOnHide||wl.insertBefore(Sl,yl),o._hideClone(),gl({sortable:o,name:"clone"}))}),!t&&Zs(yl,a.dragClass,!0),t?(Gl=!0,o._loopId=setInterval(o._emulateDragOver,50)):(Fs(document,"mouseup",o._onDrop),Fs(document,"touchend",o._onDrop),Fs(document,"touchcancel",o._onDrop),i&&(i.effectAllowed="move",a.setData&&a.setData.call(o,i,yl)),Rs(document,"drop",o),Ys(yl,"transform","translateZ(0)")),Ul=!0,o._dragStartId=hc(o._dragStarted.bind(o,t,e)),Rs(document,"selectstart",o),Bl=!0,window.getSelection().removeAllRanges(),Is&&Ys(document.body,"user-select","none"))},_onDragOver:function(e){var t,o,i,a,n=this.el,r=e.target,s=this.options,l=s.group,c=lc.active,d=Pl===l,u=s.sort,p=Ml||c,h=this,_=!1;if(!Xl){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),r=Gs(r,s.draggable,n,!0),A("dragOver"),lc.eventCanceled)return _;if(yl.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||h._ignoreWhileAnimating===r)return M(!1);if(Gl=!1,c&&!s.disabled&&(d?u||(i=vl!==wl):Ml===this||(this.lastPutMode=Pl.checkPull(this,c,yl,e))&&l.checkPut(this,c,yl,e))){if(a="vertical"===this._getDirection(e,r),t=Js(yl),A("dragOverValid"),lc.eventCanceled)return _;if(i)return vl=wl,P(),this._hideClone(),A("revert"),lc.eventCanceled||(xl?wl.insertBefore(yl,xl):wl.appendChild(yl)),M(!0);var m=tl(n,s.draggable);if(!m||function(e,t,o){var i=Js(tl(o.el,o.options.draggable)),a=cl(o.el,o.options,bl),n=10;return t?e.clientX>a.right+n||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>a.bottom+n||e.clientX>i.right&&e.clientY>i.top}(e,a,this)&&!m.animated){if(m===yl)return M(!1);if(m&&n===e.target&&(r=m),r&&(o=Js(r)),!1!==cc(wl,n,yl,t,r,o,e,!!r))return P(),m&&m.nextSibling?n.insertBefore(yl,m.nextSibling):n.appendChild(yl),vl=n,T(),M(!0)}else if(m&&function(e,t,o){var i=Js(el(o.el,0,o.options,!0)),a=cl(o.el,o.options,bl),n=10;return t?e.clientX<a.left-n||e.clientY<i.top&&e.clientX<i.right:e.clientY<a.top-n||e.clientY<i.bottom&&e.clientX<i.left}(e,a,this)){var f=el(n,0,s,!0);if(f===yl)return M(!1);if(o=Js(r=f),!1!==cc(wl,n,yl,t,r,o,e,!1))return P(),n.insertBefore(yl,f),vl=n,T(),M(!0)}else if(r.parentNode===n){o=Js(r);var g,y,v,b=yl.parentNode!==n,w=!function(e,t,o){var i=o?e.left:e.top,a=o?e.right:e.bottom,n=o?e.width:e.height,r=o?t.left:t.top,s=o?t.right:t.bottom,l=o?t.width:t.height;return i===r||a===s||i+n/2===r+l/2}(yl.animated&&yl.toRect||t,r.animated&&r.toRect||o,a),x=a?"top":"left",k=Qs(r,"top","top")||Qs(yl,"top","top"),S=k?k.scrollTop:void 0;if(Ll!==r&&(y=o[x],Wl=!1,Zl=!w&&s.invertSwap||b),g=function(e,t,o,i,a,n,r,s){var l=i?e.clientY:e.clientX,c=i?o.height:o.width,d=i?o.top:o.left,u=i?o.bottom:o.right,p=!1;if(!r)if(s&&Fl<c*a){if(!Wl&&(1===Rl?l>d+c*n/2:l<u-c*n/2)&&(Wl=!0),Wl)p=!0;else if(1===Rl?l<d+Fl:l>u-Fl)return-Rl}else if(l>d+c*(1-a)/2&&l<u-c*(1-a)/2)return function(e){return ol(yl)<ol(e)?1:-1}(t);if((p=p||r)&&(l<d+c*n/2||l>u-c*n/2))return l>d+c/2?1:-1;return 0}(e,r,o,a,w?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Zl,Ll===r),0!==g){var E=ol(yl);do{E-=g,v=vl.children[E]}while(v&&("none"===Ys(v,"display")||v===bl))}if(0===g||v===r)return M(!1);Ll=r,Rl=g;var $=r.nextElementSibling,C=!1,D=cc(wl,n,yl,t,r,o,e,C=1===g);if(!1!==D)return 1!==D&&-1!==D||(C=1===D),Xl=!0,setTimeout(uc,30),P(),C&&!$?n.appendChild(yl):r.parentNode.insertBefore(yl,C?$:r),k&&sl(k,0,S-k.scrollTop),vl=yl.parentNode,void 0===y||Zl||(Fl=Math.abs(y-Js(r)[x])),T(),M(!0)}if(n.contains(yl))return M(!1)}return!1}function A(s,l){fl(s,h,Ps({evt:e,isOwner:d,axis:a?"vertical":"horizontal",revert:i,dragRect:t,targetRect:o,canSort:u,fromSortable:p,target:r,completed:M,onMove:function(o,i){return cc(wl,n,yl,t,o,Js(o),e,i)},changed:T},l))}function P(){A("dragOverAnimationCapture"),h.captureAnimationState(),h!==p&&p.captureAnimationState()}function M(t){return A("dragOverCompleted",{insertion:t}),t&&(d?c._hideClone():c._showClone(h),h!==p&&(Zs(yl,Ml?Ml.options.ghostClass:c.options.ghostClass,!1),Zs(yl,s.ghostClass,!0)),Ml!==h&&h!==lc.active?Ml=h:h===lc.active&&Ml&&(Ml=null),p===h&&(h._ignoreWhileAnimating=r),h.animateAll(function(){A("dragOverAnimationComplete"),h._ignoreWhileAnimating=null}),h!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===yl&&!yl.animated||r===n&&!r.animated)&&(Ll=null),s.dragoverBubble||e.rootEl||r===document||(yl.parentNode[dl]._isOutsideThisEl(e.target),!t&&rc(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),_=!0}function T(){Cl=ol(yl),Al=ol(yl,s.draggable),gl({sortable:h,name:"change",toEl:n,newIndex:Cl,newDraggableIndex:Al,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){Fs(document,"mousemove",this._onTouchMove),Fs(document,"touchmove",this._onTouchMove),Fs(document,"pointermove",this._onTouchMove),Fs(document,"dragover",rc),Fs(document,"mousemove",rc),Fs(document,"touchmove",rc)},_offUpEvents:function(){var e=this.el.ownerDocument;Fs(e,"mouseup",this._onDrop),Fs(e,"touchend",this._onDrop),Fs(e,"pointerup",this._onDrop),Fs(e,"pointercancel",this._onDrop),Fs(e,"touchcancel",this._onDrop),Fs(document,"selectstart",this)},_onDrop:function(e){var t=this.el,o=this.options;Cl=ol(yl),Al=ol(yl,o.draggable),fl("drop",this,{evt:e}),vl=yl&&yl.parentNode,Cl=ol(yl),Al=ol(yl,o.draggable),lc.eventCanceled||(Ul=!1,Zl=!1,Wl=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),_c(this.cloneId),_c(this._dragStartId),this.nativeDraggable&&(Fs(document,"drop",this),Fs(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Is&&Ys(document.body,"user-select",""),Ys(yl,"transform",""),e&&(Bl&&(e.cancelable&&e.preventDefault(),!o.dropBubble&&e.stopPropagation()),bl&&bl.parentNode&&bl.parentNode.removeChild(bl),(wl===vl||Ml&&"clone"!==Ml.lastPutMode)&&Sl&&Sl.parentNode&&Sl.parentNode.removeChild(Sl),yl&&(this.nativeDraggable&&Fs(yl,"dragend",this),dc(yl),yl.style["will-change"]="",Bl&&!Ul&&Zs(yl,Ml?Ml.options.ghostClass:this.options.ghostClass,!1),Zs(yl,this.options.chosenClass,!1),gl({sortable:this,name:"unchoose",toEl:vl,newIndex:null,newDraggableIndex:null,originalEvent:e}),wl!==vl?(Cl>=0&&(gl({rootEl:vl,name:"add",toEl:vl,fromEl:wl,originalEvent:e}),gl({sortable:this,name:"remove",toEl:vl,originalEvent:e}),gl({rootEl:vl,name:"sort",toEl:vl,fromEl:wl,originalEvent:e}),gl({sortable:this,name:"sort",toEl:vl,originalEvent:e})),Ml&&Ml.save()):Cl!==$l&&Cl>=0&&(gl({sortable:this,name:"update",toEl:vl,originalEvent:e}),gl({sortable:this,name:"sort",toEl:vl,originalEvent:e})),lc.active&&(null!=Cl&&-1!==Cl||(Cl=$l,Al=Dl),gl({sortable:this,name:"end",toEl:vl,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){fl("nulling",this),wl=yl=vl=bl=xl=Sl=kl=El=Tl=zl=Bl=Cl=Al=$l=Dl=Ll=Rl=Ml=Pl=lc.dragged=lc.ghost=lc.clone=lc.active=null;var e=this.el;ql.forEach(function(t){e.contains(t)&&(t.checked=!0)}),ql.length=Ol=Nl=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":yl&&(this._onDragOver(e),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move");e.cancelable&&e.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var e,t=[],o=this.el.children,i=0,a=o.length,n=this.options;i<a;i++)Gs(e=o[i],n.draggable,this.el,!1)&&t.push(e.getAttribute(n.dataIdAttr)||pc(e));return t},sort:function(e,t){var o={},i=this.el;this.toArray().forEach(function(e,t){var a=i.children[t];Gs(a,this.options.draggable,i,!1)&&(o[e]=a)},this),t&&this.captureAnimationState(),e.forEach(function(e){o[e]&&(i.removeChild(o[e]),i.appendChild(o[e]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return Gs(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var o=this.options;if(void 0===t)return o[e];var i=_l.modifyOption(this,e,t);o[e]=void 0!==i?i:t,"group"===e&&ic(o)},destroy:function(){fl("destroy",this);var e=this.el;e[dl]=null,Fs(e,"mousedown",this._onTapStart),Fs(e,"touchstart",this._onTapStart),Fs(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(Fs(e,"dragover",this),Fs(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Vl.splice(Vl.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!El){if(fl("hideClone",this),lc.eventCanceled)return;Ys(Sl,"display","none"),this.options.removeCloneOnHide&&Sl.parentNode&&Sl.parentNode.removeChild(Sl),El=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(El){if(fl("showClone",this),lc.eventCanceled)return;yl.parentNode!=wl||this.options.group.revertClone?xl?wl.insertBefore(Sl,xl):wl.appendChild(Sl):wl.insertBefore(Sl,yl),this.options.group.revertClone&&this.animate(yl,Sl),Ys(Sl,"display",""),El=!1}}else this._hideClone()}},Kl&&Rs(document,"touchmove",function(e){(lc.active||Ul)&&e.cancelable&&e.preventDefault()}),lc.utils={on:Rs,off:Fs,css:Ys,find:qs,is:function(e,t){return!!Gs(e,t,e,!1)},extend:function(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},throttle:rl,closest:Gs,toggleClass:Zs,clone:ll,index:ol,nextTick:hc,cancelNextTick:_c,detectDirection:oc,getChild:el,expando:dl},lc.get=function(e){return e[dl]},lc.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));e.utils&&(lc.utils=Ps(Ps({},lc.utils),e.utils)),_l.mount(e)})},lc.create=function(e,t){return new lc(e,t)},lc.version="1.15.7";var mc,fc,gc,yc,vc,bc,wc=[],xc=!1;function kc(){wc.forEach(function(e){clearInterval(e.pid)}),wc=[]}function Sc(){clearInterval(bc)}var Ec=rl(function(e,t,o,i){if(t.scroll){var a,n=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,s=t.scrollSensitivity,l=t.scrollSpeed,c=Ks(),d=!1;fc!==o&&(fc=o,kc(),mc=t.scroll,a=t.scrollFn,!0===mc&&(mc=al(o,!0)));var u=0,p=mc;do{var h=p,_=Js(h),m=_.top,f=_.bottom,g=_.left,y=_.right,v=_.width,b=_.height,w=void 0,x=void 0,k=h.scrollWidth,S=h.scrollHeight,E=Ys(h),$=h.scrollLeft,C=h.scrollTop;h===c?(w=v<k&&("auto"===E.overflowX||"scroll"===E.overflowX||"visible"===E.overflowX),x=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY||"visible"===E.overflowY)):(w=v<k&&("auto"===E.overflowX||"scroll"===E.overflowX),x=b<S&&("auto"===E.overflowY||"scroll"===E.overflowY));var D=w&&(Math.abs(y-n)<=s&&$+v<k)-(Math.abs(g-n)<=s&&!!$),A=x&&(Math.abs(f-r)<=s&&C+b<S)-(Math.abs(m-r)<=s&&!!C);if(!wc[u])for(var P=0;P<=u;P++)wc[P]||(wc[P]={});wc[u].vx==D&&wc[u].vy==A&&wc[u].el===h||(wc[u].el=h,wc[u].vx=D,wc[u].vy=A,clearInterval(wc[u].pid),0==D&&0==A||(d=!0,wc[u].pid=setInterval(function(){i&&0===this.layer&&lc.active._onTouchMove(vc);var t=wc[this.layer].vy?wc[this.layer].vy*l:0,o=wc[this.layer].vx?wc[this.layer].vx*l:0;"function"==typeof a&&"continue"!==a.call(lc.dragged.parentNode[dl],o,t,e,vc,wc[this.layer].el)||sl(wc[this.layer].el,o,t)}.bind({layer:u}),24))),u++}while(t.bubbleScroll&&p!==c&&(p=al(p,!1)));xc=d}},30),$c=function(e){var t=e.originalEvent,o=e.putSortable,i=e.dragEl,a=e.activeSortable,n=e.dispatchSortableEvent,r=e.hideGhostForTarget,s=e.unhideGhostForTarget;if(t){var l=o||a;r();var c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(c.clientX,c.clientY);s(),l&&!l.el.contains(d)&&(n("spill"),this.onSpill({dragEl:i,putSortable:o}))}};function Cc(){}function Dc(){}Cc.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,o=e.putSortable;this.sortable.captureAnimationState(),o&&o.captureAnimationState();var i=el(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),o&&o.animateAll()},drop:$c},Ds(Cc,{pluginName:"revertOnSpill"}),Dc.prototype={onSpill:function(e){var t=e.dragEl,o=e.putSortable||this.sortable;o.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),o.animateAll()},drop:$c},Ds(Dc,{pluginName:"removeOnSpill"});var Ac=[Dc,Cc];const Pc=globalThis,Mc=e=>{try{rs.mount(e)}catch(e){const t=e instanceof Error?e.message:String(e);if(!t.includes("Cannot mount plugin")||!t.includes("more than once"))throw e}};Pc.__flixlixCardsSortablePluginsMounted||(Mc(Ac),Mc(new function(){function e(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return e.prototype={dragStarted:function(e){var t=e.originalEvent;this.sortable.nativeDraggable?Rs(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Rs(document,"pointermove",this._handleFallbackAutoScroll):t.touches?Rs(document,"touchmove",this._handleFallbackAutoScroll):Rs(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(e){var t=e.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?Fs(document,"dragover",this._handleAutoScroll):(Fs(document,"pointermove",this._handleFallbackAutoScroll),Fs(document,"touchmove",this._handleFallbackAutoScroll),Fs(document,"mousemove",this._handleFallbackAutoScroll)),Sc(),kc(),clearTimeout(Vs),Vs=void 0},nulling:function(){vc=fc=mc=xc=bc=gc=yc=null,wc.length=0},_handleFallbackAutoScroll:function(e){this._handleAutoScroll(e,!0)},_handleAutoScroll:function(e,t){var o=this,i=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,n=document.elementFromPoint(i,a);if(vc=e,t||this.options.forceAutoScrollFallback||Os||zs||Is){Ec(e,this.options,n,t);var r=al(n,!0);!xc||bc&&i===gc&&a===yc||(bc&&Sc(),bc=setInterval(function(){var n=al(document.elementFromPoint(i,a),!0);n!==r&&(r=n,kc()),Ec(e,o.options,n,t)},10),gc=i,yc=a)}else{if(!this.options.bubbleScroll||al(n,!0)===Ks())return void kc();Ec(e,this.options,al(n,!1),!1)}}},Ds(e,{pluginName:"scroll",initializeByDefault:!0})}),Pc.__flixlixCardsSortablePluginsMounted=!0);var Tc=Object.freeze({__proto__:null,default:rs});export{_i as PowerFlowCardPlus};
//# sourceMappingURL=power-flow-card-plus-extended.js.map
