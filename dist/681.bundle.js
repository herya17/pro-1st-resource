/*! For license information please see 681.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwarteji=self.webpackChunkwarteji||[]).push([[681],{745:function(t,e,r){var i=r(3935);e.s=i.createRoot,i.hydrateRoot},3935:function(t,e,r){!function t(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(t){console.error(t)}}(),t.exports=r(4448)},9655:function(t,e,r){var i;r.d(e,{VK:function(){return h},rU:function(){return p}});var s=r(7294),n=r(9250),o=r(2599);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},a.apply(this,arguments)}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const l=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],c=(i||(i=r.t(s,2))).startTransition;function h(t){let{basename:e,children:r,future:i,window:a}=t,l=s.useRef();null==l.current&&(l.current=(0,o.lX)({window:a,v5Compat:!0}));let h=l.current,[u,d]=s.useState({action:h.action,location:h.location}),{v7_startTransition:p}=i||{},f=s.useCallback((t=>{p&&c?c((()=>d(t))):d(t)}),[d,p]);return s.useLayoutEffect((()=>h.listen(f)),[h,f]),s.createElement(n.F0,{basename:e,children:r,location:u.location,navigationType:u.action,navigator:h})}const u="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,p=s.forwardRef((function(t,e){let r,{onClick:i,relative:c,reloadDocument:h,replace:p,state:f,target:v,to:_,preventScrollReset:y}=t,E=function(t,e){if(null==t)return{};var r,i,s={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,l),{basename:S}=s.useContext(n.Us),m=!1;if("string"==typeof _&&d.test(_)&&(r=_,u))try{let t=new URL(window.location.href),e=_.startsWith("//")?new URL(t.protocol+_):new URL(_),r=(0,o.Zn)(e.pathname,S);e.origin===t.origin&&null!=r?_=r+e.search+e.hash:m=!0}catch(t){}let w=(0,n.oQ)(_,{relative:c}),b=function(t,e){let{target:r,replace:i,state:a,preventScrollReset:l,relative:c}=void 0===e?{}:e,h=(0,n.s0)(),u=(0,n.TH)(),d=(0,n.WU)(t,{relative:c});return s.useCallback((e=>{if(function(t,e){return!(0!==t.button||e&&"_self"!==e||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t))}(e,r)){e.preventDefault();let r=void 0!==i?i:(0,o.Ep)(u)===(0,o.Ep)(d);h(t,{replace:r,state:a,preventScrollReset:l,relative:c})}}),[u,h,d,i,a,r,t,l,c])}(_,{replace:p,state:f,target:v,preventScrollReset:y,relative:c});return s.createElement("a",a({},E,{href:r||w,onClick:m||h?i:function(t){i&&i(t),t.defaultPrevented||b(t)},ref:e,target:v}))}));var f,v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(f||(f={})),function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"}(v||(v={}))},7898:function(t,e,r){r.d(e,{fl:function(){return S},iv:function(){return l}});const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new a(r,t,n)},c=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),s=i.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,t.appendChild(r)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var u;const d=window,p=d.trustedTypes,f=p?p.emptyScript:"",v=d.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},y=(t,e)=>e!==t&&(e==e||t==t),E={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};class S extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this._$Ep(r,e);void 0!==i&&(this._$Ev.set(i,r),t.push(i))})),t}static createProperty(t,e=E){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||E}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=E){var i;const s=this.constructor._$Ep(t,r);if(void 0!==s&&!0===r.reflect){const n=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:_).toAttribute(e,r.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:_;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||y)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}S.finalized=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:S}),(null!==(u=d.reactiveElementVersions)&&void 0!==u?u:d.reactiveElementVersions=[]).push("1.4.1")},5862:function(t,e,r){r.d(e,{dy:function(){return i.dy},iv:function(){return i.iv},oi:function(){return i.oi}}),r(7898),r(3692);var i=r(8922)}}]);
//# sourceMappingURL=681.bundle.js.map