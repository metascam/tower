"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[386],{102:function(e,a,n){n.d(a,{Z:function(){return p}});var s=n(5893),r=n(1664),t=n(6),i=n(3162),l=n.n(i),o=n(7294);var c=function(e){var a=e.isMobile,n=(0,t.oR)(),i=n.setShowLoginModal,c=n.logged,u=n.setShowMailModal,m=(0,o.useState)(!1),d=m[0],f=m[1];return(0,o.useEffect)((function(){f(!0)}),[]),(0,s.jsxs)("div",{className:"footer",children:[(0,s.jsx)(r.default,{href:"/",passHref:!0,children:(0,s.jsx)("a",{className:"footer-logo"})}),(0,s.jsx)("div",{className:"footer-menu",children:(0,s.jsxs)("div",{className:"footer-menu-list",children:[(0,s.jsx)(r.default,{href:"/games",passHref:!0,children:(0,s.jsx)("a",{className:"footer-menu-list__item _white",children:"Games"})}),d&&!a&&(c?(0,s.jsx)(r.default,{href:"/clientarea",passHref:!0,children:(0,s.jsx)("a",{className:"footer-menu-list__item",children:"Client Area"})}):(0,s.jsx)("div",{className:"footer-menu-list__item",onClick:function(){return i(!0)},children:"Client Area"})),(0,s.jsx)("div",{className:"footer-menu-list__item",onClick:function(){return u(!0)},children:"Contacts Us"})]})}),(0,s.jsx)("div",{className:"footer-menu",children:(0,s.jsxs)("div",{className:"footer-menu-list",children:[(0,s.jsx)("a",{target:"_blank",href:"/clientarea/Brandbook.pdf",className:"footer-menu-list__item",children:"Brandbook"}),(0,s.jsx)("div",{className:"footer-menu-list__item",onClick:function(){l().saveAs("/images/clientarea/logo.zip","logo.zip")},children:"Download Logo"})]})}),(0,s.jsxs)("div",{className:"footer-right",children:[(0,s.jsxs)("div",{className:"footer-right-socials",children:[(0,s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:sales@turbogames.io",className:"footer-right-socials__item _mail"}),(0,s.jsx)("a",{href:"https://www.linkedin.com/company/turbogames/",target:"_blank",rel:"noreferrer",className:"footer-right-socials__item _in"})]}),(0,s.jsx)("div",{className:"footer-copyright",children:"\xa9 2022 Turbo Games. All rights reserved."})]})]})},u=n(1190),m=n(1217);var d=function(e){var a=e.close,n=window.location.host,r=(0,o.useState)(""),t=r[0],i=r[1],l=(0,o.useState)(""),c=l[0],u=l[1],m=(0,o.useState)(""),d=m[0],f=m[1],h=function(){return t.length&&c.length&&d.length};return(0,s.jsxs)("div",{className:"mail-form",children:[(0,s.jsx)("div",{className:"mail-form__close",onClick:a}),(0,s.jsx)("div",{className:"mail-form__bg"}),(0,s.jsxs)("div",{className:"mail-form__info",children:[(0,s.jsx)("div",{className:"mail-form__title",children:"Become a Partner"}),(0,s.jsx)("div",{className:"mail-form__text",children:"Don't hesitate to contact us!"}),(0,s.jsx)("div",{className:"mail-form__icons",children:(0,s.jsxs)("div",{className:"mail-form__icons-item",children:[(0,s.jsx)("i",{className:"icon icon-mail"}),(0,s.jsx)("span",{children:"sales@turbogames.io"})]})}),(0,s.jsxs)("form",{onSubmit:function(e){return function(e){h()||e.preventDefault()}(e)},className:"mail-form__inputs",action:"https://formsubmit.co/b6928785d1775dfe71a86a5e29094f37",method:"POST",children:[(0,s.jsx)("input",{type:"hidden",name:"_next",value:"https://".concat(n,"?isSent=1")}),(0,s.jsxs)("div",{className:"mail-form__input-group",children:[(0,s.jsx)("div",{className:"mail-form__input",children:(0,s.jsx)("input",{required:!0,onChange:function(e){var a;return i(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)},value:t,type:"text",name:"name",placeholder:"Name",className:"input"})}),(0,s.jsx)("div",{className:"mail-form__input",children:(0,s.jsx)("input",{required:!0,onChange:function(e){var a;return u(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)},value:c,type:"email",name:"email",placeholder:"E-mail",className:"input"})})]}),(0,s.jsx)("div",{className:"mail-form__input",children:(0,s.jsx)("textarea",{value:d,required:!0,onChange:function(e){var a;return f(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)},className:"textarea",placeholder:"Message",name:"message"})}),(0,s.jsx)("button",{className:"mail-form__button",children:"SEND"})]})]})]})},f=n(1163);var h=(0,m.Pi)((function(e){var a=e.close,n=e.logUser,r=(0,f.useRouter)(),i=(0,o.useState)(""),l=i[0],c=i[1],u=(0,t.oR)(),m=u.logged,d=u.setShowLoginModal,h=u.setShowMailModal,v=u.passwordHasError,x=u.setPasswordHasError;return(0,o.useEffect)((function(){m&&(r.push("/clientarea"),d(!1))}),[m]),(0,s.jsxs)("div",{className:"mail-form _login-form",children:[(0,s.jsx)("div",{className:"mail-form__close",onClick:a}),(0,s.jsxs)("div",{className:"mail-form__info",children:[(0,s.jsx)("div",{className:"mail-form__text",children:"Please, enter the password provided by your account manager"}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(l)},className:"mail-form__inputs",children:[(0,s.jsx)("div",{className:"mail-form__input-group",children:(0,s.jsx)("div",{className:"mail-form__input",children:(0,s.jsx)("input",{required:!0,onChange:function(e){var a;x(!1),c(null===e||void 0===e||null===(a=e.target)||void 0===a?void 0:a.value)},value:l,type:"password",name:"password",placeholder:"Password",className:"input"})})}),v&&(0,s.jsx)("div",{className:"input-error",children:"Wrong Password"}),(0,s.jsx)("button",{className:"mail-form__button",children:"SUBMIT"}),(0,s.jsx)("div",{className:"mail-form__text-after",children:(0,s.jsxs)("span",{children:["\u24d8",(0,s.jsx)("span",{className:"contact-us-link",onClick:function(){d(!1),h(!0)},children:"contact us"}),"if you don't have one"]})})]})]})]})}));function v(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,s=new Array(a);n<a;n++)s[n]=e[n];return s}function x(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,r,t=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(t.push(s.value),!a||t.length!==a);i=!0);}catch(o){l=!0,r=o}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return t}}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return v(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=(0,m.Pi)((function(e){var a=e.children,n=e.isMobile,r=(0,t.oR)(),i=r.showLoginModal,l=r.setShowLoginModal,m=r.showMailModal,f=r.setShowMailModal,v=r.setLogged,p=r.setPasswordHasError,j=x(function(e,a){var n=(0,o.useState)(e),s=n[0],r=n[1];return(0,o.useEffect)((function(){var e=window.localStorage.getItem(a);null!==e&&r(JSON.parse(e))}),[a]),(0,o.useEffect)((function(){window.localStorage.setItem(a,JSON.stringify(s))}),[a,s]),[s,r]}("","password"),2),_=j[0],g=j[1],N=function(e){"turboclient33"===e?(v(!0),g(e)):p(!0)};return(0,o.useEffect)((function(){_&&N(_)}),[_]),(0,s.jsxs)("div",{className:"app",children:[a,(0,s.jsx)(c,{isMobile:n}),!n&&(0,s.jsx)(u.u,{open:i,onClose:function(){return l(!1)},center:!0,children:(0,s.jsx)(h,{logUser:N,close:function(){return l(!1)}})}),(0,s.jsx)(u.u,{open:m,onClose:function(){return f(!1)},center:!0,children:(0,s.jsx)(d,{close:function(){return f(!1)}})})]})}))},5331:function(e,a,n){n.d(a,{Z:function(){return c}});var s=n(5893),r=n(1664),t=n(1163),i=n(6),l=n(4184),o=n.n(l);var c=function(e){var a=e.isMobile,n=(0,i.oR)(),l=n.setShowLoginModal,c=n.logged,u=(0,t.useRouter)();return(0,s.jsxs)("div",{className:"menu",children:[(0,s.jsx)(r.default,{href:"/games",passHref:!0,children:(0,s.jsx)("a",{className:o()("menu-item",{active:"/games"==u.pathname}),children:"Games"})}),!a&&(c?(0,s.jsx)(r.default,{href:"/clientarea",passHref:!0,children:(0,s.jsx)("a",{className:o()("menu-item",{active:"/clientarea"==u.pathname}),children:"Client Area"})}):(0,s.jsx)("div",{className:"menu-item",onClick:function(){return l(!0)},children:"Client Area"})),(0,s.jsx)(r.default,{href:"/news",passHref:!0,children:(0,s.jsx)("a",{className:o()("menu-item",{active:"/news"==u.pathname}),children:"News"})})]})}}}]);