(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3162:function(e,t,n){var r,o,i;o=[],r=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){u(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var l=a.URL||a.webkitURL,u=document.createElement("a");t=t||e.name||"download",u.download=t,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?i(u):o(u.href)?r(e,t,n):i(u,u.target="_blank")):(u.href=l.createObjectURL(e),setTimeout((function(){l.revokeObjectURL(u.href)}),4e4),setTimeout((function(){i(u)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(o(e))r(e,n,a);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){i(l)}))}}:function(e,t,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,n);var i="application/octet-stream"===e.type,u=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&u||l)&&"undefined"!=typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},s.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout((function(){f.revokeObjectURL(d)}),4e4)}});a.saveAs=u.saveAs=u,e.exports=u},void 0===(i="function"===typeof r?r.apply(t,o):r)||(e.exports=i)},3454:function(e,t,n){"use strict";var r,o;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(7663)},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},l=n(6273),u=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),i=a.default.useMemo((function(){var t=o(l.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,v=i.as,m=e.children,p=e.replace,y=e.shallow,h=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],A=w[1],L=a.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);a.default.useEffect((function(){var e=A&&n&&l.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+v+(t?"%"+t:"")];e&&!o&&f(r,d,v,{locale:t})}),[v,d,A,g,n,r]);var T={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:a}))}(e,r,d,v,p,y,h,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,v,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof g?g:r&&r.locale,I=r&&r.isLocaleDomain&&l.getDomainLocale(v,k,r&&r.locales,r&&r.domainLocales);T.href=I||l.addBasePath(l.addLocale(v,k,r&&r.defaultLocale))}return a.default.cloneElement(t,T)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],v=f[1],m=o(i.useState(t?t.current:null),2),p=m[0],y=m[1],h=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=u.get(r):(t=u.get(n),c.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:p,rootMargin:n}))}),[r,p,n,d]);return i.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&y(t.current)}),[t]),[h,d]};var i=n(7294),a=n(9311),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l,u=[],c=!1,s=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):s=-1,u.length&&d())}function d(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(l=u,u=[];++s<t;)l&&l[s].run();s=-1,t=u.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new v(e,t)),1!==u.length||c||a(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(162);e.exports=o}()},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1190:function(e,t,n){"use strict";n.d(t,{u:function(){return U}});var r=n(7294),o=n(3935),i=n(4184),a=n.n(i);var l=!1;if("undefined"!==typeof window){var u={get passive(){l=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var c="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],f=!1,d=-1,v=void 0,m=void 0,p=function(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},y=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){void 0!==m&&(document.body.style.paddingRight=m,m=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0)},g=function(e,t){if(e){if(!s.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s),[n]),c?(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-d;!p(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?y(e):e.stopPropagation())}(t,e)},f||(document.addEventListener("touchmove",y,l?{passive:!1}:void 0),f=!0)):function(e){if(void 0===m){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(m=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")};function b(e){const t=function(e=null){let[t,n]=r.useState(e);const{current:o}=r.useRef({current:t});return Object.defineProperty(o,"current",{get:()=>t,set:e=>{Object.is(t,e)||(t=e,n(e))}}),o}(null);return r.useEffect((()=>{e&&("function"===typeof e?e(t.current):e.current=t.current)})),t}n(3454);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var E=function(e){var t=e.classes,n=e.classNames,o=e.styles,i=e.id,l=e.closeIcon,u=e.onClick;return r.createElement("button",{id:i,className:a()(t.closeButton,null==n?void 0:n.closeButton),style:null==o?void 0:o.closeButton,onClick:u,"data-testid":"close-button"},l||r.createElement("svg",{className:null==n?void 0:n.closeIcon,style:null==o?void 0:o.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},r.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},A="undefined"!==typeof window,L=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function T(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}function k(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!0;var t=(e.form||e.ownerDocument).querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return n===e||void 0===n&&t[0]===e}function I(e){for(var t=document.activeElement,n=e.querySelectorAll(L.join(",")),r=[],o=0;o<n.length;o++){var i=n[o];(t===i||!i.disabled&&S(i)>-1&&!T(i)&&k(i))&&r.push(i)}return r}function S(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return e.getAttribute("contentEditable")}(e)?0:e.tabIndex:t}var C=function(e){var t=e.container,n=e.initialFocusRef,o=(0,r.useRef)();return(0,r.useEffect)((function(){var e=function(e){(null==t?void 0:t.current)&&function(e,t){if(e&&"Tab"===e.key){if(!t||!t.contains)return!1;if(!t.contains(e.target))return!1;var n=I(t),r=n[0],o=n[n.length-1];e.shiftKey&&e.target===r?(o.focus(),e.preventDefault()):!e.shiftKey&&e.target===o&&(r.focus(),e.preventDefault())}}(e,t.current)};if(A&&document.addEventListener("keydown",e),A&&(null==t?void 0:t.current)){var r=function(){-1!==L.findIndex((function(e){var t;return null==(t=document.activeElement)?void 0:t.matches(e)}))&&(o.current=document.activeElement)};if(n)r(),requestAnimationFrame((function(){var e;null==(e=n.current)||e.focus()}));else{var i=I(t.current);i[0]&&(r(),i[0].focus())}}return function(){var t;A&&(document.removeEventListener("keydown",e),null==(t=o.current)||t.focus())}}),[t,n]),null},O=[],R=function(e){O.push(e)},x=function(e){O=O.filter((function(t){return t!==e}))},j=function(e){return!!O.length&&O[O.length-1]===e};var M=function(e,t,n,o,i){var a=(0,r.useRef)(null);(0,r.useEffect)((function(){return t&&e.current&&o&&(a.current=e.current,g(e.current,{reserveScrollBarGap:i})),function(){var e;a.current&&((e=a.current)?(s=s.filter((function(t){return t.targetElement!==e})),c?(e.ontouchstart=null,e.ontouchmove=null,f&&0===s.length&&(document.removeEventListener("touchmove",y,l?{passive:!1}:void 0),f=!1)):s.length||h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."),a.current=null)}}),[t,n,e,o,i])},B={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},U=r.forwardRef((function(e,t){var n,i,l,u,c=e.open,s=e.center,f=e.blockScroll,d=void 0===f||f,v=e.closeOnEsc,m=void 0===v||v,p=e.closeOnOverlayClick,y=void 0===p||p,h=e.container,g=e.showCloseIcon,L=void 0===g||g,T=e.closeIconId,k=e.closeIcon,I=e.focusTrapped,S=void 0===I||I,O=e.initialFocusRef,U=void 0===O?void 0:O,N=e.animationDuration,D=void 0===N?300:N,P=e.classNames,_=e.styles,H=e.role,K=void 0===H?"dialog":H,q=e.ariaDescribedby,F=e.ariaLabelledby,G=e.modalId,W=e.onClose,z=e.onEscKeyDown,X=e.onOverlayClick,Y=e.onAnimationEnd,$=e.children,J=e.reserveScrollBarGap,Q=b(t),V=(0,r.useRef)(null),Z=(0,r.useRef)(null),ee=(0,r.useRef)(null);null===ee.current&&A&&(ee.current=document.createElement("div"));var te=(0,r.useState)(!1),ne=te[0],re=te[1];!function(e,t){(0,r.useEffect)((function(){return t&&R(e),function(){x(e)}}),[t,e])}(V,c),M(V,c,ne,d,J);var oe=function(e){27===e.keyCode&&j(V)&&(null==z||z(e),m&&W())};(0,r.useEffect)((function(){return function(){ne&&(ee.current&&!h&&document.body.contains(ee.current)&&document.body.removeChild(ee.current),document.removeEventListener("keydown",oe))}}),[ne]),(0,r.useEffect)((function(){c&&!ne&&(re(!0),!ee.current||h||document.body.contains(ee.current)||document.body.appendChild(ee.current),document.addEventListener("keydown",oe))}),[c]);var ie=function(){Z.current=!1},ae=h||ee.current,le=c?null!=(n=null==P?void 0:P.overlayAnimationIn)?n:B.overlayAnimationIn:null!=(i=null==P?void 0:P.overlayAnimationOut)?i:B.overlayAnimationOut,ue=c?null!=(l=null==P?void 0:P.modalAnimationIn)?l:B.modalAnimationIn:null!=(u=null==P?void 0:P.modalAnimationOut)?u:B.modalAnimationOut;return ne&&ae?o.createPortal(r.createElement("div",{className:a()(B.root,null==P?void 0:P.root),style:null==_?void 0:_.root,"data-testid":"root"},r.createElement("div",{className:a()(B.overlay,null==P?void 0:P.overlay),"data-testid":"overlay","aria-hidden":!0,style:w({animation:le+" "+D+"ms"},null==_?void 0:_.overlay)}),r.createElement("div",{ref:V,className:a()(B.modalContainer,s&&B.modalContainerCenter,null==P?void 0:P.modalContainer),style:null==_?void 0:_.modalContainer,"data-testid":"modal-container",onClick:function(e){null===Z.current&&(Z.current=!0),Z.current?(null==X||X(e),y&&W(),Z.current=null):Z.current=null}},r.createElement("div",{ref:Q,className:a()(B.modal,null==P?void 0:P.modal),style:w({animation:ue+" "+D+"ms"},null==_?void 0:_.modal),onMouseDown:ie,onMouseUp:ie,onClick:ie,onAnimationEnd:function(){c||re(!1),null==Y||Y()},id:G,role:K,"aria-modal":"true","aria-labelledby":F,"aria-describedby":q,"data-testid":"modal",tabIndex:-1},S&&r.createElement(C,{container:Q,initialFocusRef:U}),$,L&&r.createElement(E,{classes:B,classNames:P,styles:_,closeIcon:k,onClick:W,id:T})))),ae):null}))}}]);