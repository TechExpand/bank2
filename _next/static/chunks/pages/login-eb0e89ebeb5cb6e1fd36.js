_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"+Css":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},"7LId":function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"H+61":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},O2ls:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("H+61"),c=n("UlJF"),a=n("7LId"),i=n("VIvw"),s=n("iHvq"),l=n("q1tI"),u=n("YFqc"),f=n.n(u);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var p=function(e){Object(a.a)(n,e);var t=d(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"login-area",children:Object(r.jsxs)("div",{className:"row m-0",children:[Object(r.jsx)("div",{className:"col-lg-6 col-md-12 p-0",children:Object(r.jsx)("div",{className:"login-image",children:Object(r.jsx)("img",{src:"/images/login-bg.jpg",alt:"image"})})}),Object(r.jsx)("div",{className:"col-lg-6 col-md-12 p-0",children:Object(r.jsx)("div",{className:"login-content",children:Object(r.jsx)("div",{className:"d-table",children:Object(r.jsx)("div",{className:"d-table-cell",children:Object(r.jsxs)("div",{className:"login-form",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(f.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:"/images/black-logo.png",alt:"image"})})})}),Object(r.jsx)("h3",{children:"Welcome back"}),Object(r.jsxs)("p",{children:["New to Haiper? ",Object(r.jsx)(f.a,{href:"/sign-up",children:Object(r.jsx)("a",{children:"Sign up"})})]}),Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Your email address",className:"form-control"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"Your password",className:"form-control"})}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(r.jsx)("div",{className:"forgot-password",children:Object(r.jsx)(f.a,{href:"/forgot-password",children:Object(r.jsx)("a",{children:"Forgot Password?"})})}),Object(r.jsxs)("div",{className:"connect-with-social",children:[Object(r.jsxs)("button",{type:"submit",className:"facebook",children:[Object(r.jsx)("i",{className:"fab fa-facebook-square"})," Connect with Facebook"]}),Object(r.jsxs)("button",{type:"submit",className:"google",children:[Object(r.jsx)("i",{className:"fab fa-google"})," Connect with Google"]})]})]})]})})})})})]})})})}}]),n}(l.Component);t.default=p},UlJF:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},VIvw:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return c}));var o=n("+Css");function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var c=o(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,b=e.children,j=e.replace,m=e.shallow,h=e.scroll,v=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var y=c.Children.only(b),O=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),w=r(g,2),x=w[0],N=w[1],_=c.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,c.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&u(n,d,p,{locale:r})}),[p,d,N,v,t,n]);var E={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s,scroll:i}))}(e,n,d,p,j,m,h,v)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var k="undefined"!==typeof v?v:n&&n.locale,L=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,k,n&&n.locales,n&&n.domainLocales);E.href=L||(0,a.addBasePath)((0,a.addLocale)(p,k,n&&n.defaultLocale))}return c.default.cloneElement(y,E)};t.default=f},iHvq:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("O2ls")}])},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n("q1tI"),c=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["u6Hu",0,2,1]]]);