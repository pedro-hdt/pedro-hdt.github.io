_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),u=n("q1tI"),c=n.n(u),s=n("vUet"),l=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,u=e.as,l=void 0===u?"div":u,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(n,"container"),m="string"===typeof o?"-"+o:"-fluid";return c.a.createElement(l,Object(r.a)({ref:t},d,{className:i()(f,o?""+p+m:p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},t.a=l},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],f=r[s]||new Set;f.has(l)?o=!1:(f.add(l),r[s]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),u=n("7vrA"),c=n("wx14"),s=n("zLVn"),l=n("TSYQ"),f=n.n(l),d=n("vUet"),p=a.a.forwardRef((function(e,t){var n,r=e.as,o=void 0===r?"div":r,i=e.className,u=e.fluid,l=e.bsPrefix,p=Object(s.a)(e,["as","className","fluid","bsPrefix"]),m=((n={})[l=Object(d.a)(l,"jumbotron")]=!0,n[l+"-fluid"]=u,n);return a.a.createElement(o,Object(c.a)({ref:t},p,{className:f()(i,m)}))}));p.defaultProps={fluid:!1},p.displayName="Jumbotron";var m=p,v=["xl","lg","md","sm","xs"],b=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.noGutters,i=e.as,u=void 0===i?"div":i,l=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(d.a)(n,"row"),m=p+"-cols",b=[];return v.forEach((function(e){var t,n=l[e];delete l[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&b.push(""+m+r+"-"+t)})),a.a.createElement(u,Object(c.a)({ref:t},l,{className:f.a.apply(void 0,[r,p,o&&"no-gutters"].concat(b))}))}));b.displayName="Row",b.defaultProps={noGutters:!1};var y=b,h=["xl","lg","md","sm","xs"],g=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"div":o,u=Object(s.a)(e,["bsPrefix","className","as"]),l=Object(d.a)(n,"col"),p=[],m=[];return h.forEach((function(e){var t,n,r,a=u[e];if(delete u[e],"object"===typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+l+i:""+l+i+"-"+t),null!=r&&m.push("order"+i+"-"+r),null!=n&&m.push("offset"+i+"-"+n)})),p.length||p.push(l),a.a.createElement(i,Object(c.a)({},u,{ref:t,className:f.a.apply(void 0,[r].concat(p,m))}))}));g.displayName="Col";var x=g,w=n("17x9"),_=n.n(w),j=(_.a.string,_.a.bool,_.a.bool,_.a.bool,_.a.bool,a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.fluid,i=e.rounded,u=e.roundedCircle,l=e.thumbnail,p=Object(s.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(d.a)(n,"img");var m=f()(o&&n+"-fluid",i&&"rounded",u&&"rounded-circle",l&&n+"-thumbnail");return(a.a.createElement("img",Object(c.a)({ref:t},p,{className:f()(r,m)})))})));j.displayName="Image",j.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var O=j,P=n("dbZe"),N=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,o=e.size,i=e.active,u=e.className,l=e.block,p=e.type,m=e.as,v=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(d.a)(n,"btn"),y=f()(u,b,i&&"active",b+"-"+r,l&&b+"-block",o&&b+"-"+o);if(v.href)return a.a.createElement(P.a,Object(c.a)({},v,{as:m,ref:t,className:f()(y,v.disabled&&"disabled")}));t&&(v.ref=t),p?v.type=p:m||(v.type="button");var h=m||"button";return(a.a.createElement(h,Object(c.a)({},v,{className:y})))}));N.displayName="Button",N.defaultProps={variant:"primary",active:!1,disabled:!1};var k=N,C=n("vRNQ"),M=n.n(C),S=a.a.createElement;function A(){return S(a.a.Fragment,null,S(i.a,null,S("title",null,"Pedro Teixeira"),S("link",{rel:"icon",href:"/favicon.ico"})),S("main",null,S(u.a,{fluid:"md",className:M.a.container},S(m,{className:M.a.jumbo},S(y,null,S(x,{md:8},S("h1",null,"Hello World!"),S("h2",{className:M.a.intro},"My name is Pedro, and I'm an Amateur Baker, Academic Tutor, and aspiring Software Engineer"),S("div",{className:M.a.text},S("p",null,"As a final year Computer Science student, at the University of Edinburgh, for my honours project, I'm currently working on approaches for automatic compiler (LLVM) retargeting from an architecture specification."),S("p",null,"Recently, I've been interested in applied machine learning, compilers, and computer security (protocols and secure coding)."))),S(x,{md:4},S(O,{src:"/profile-pic.jpeg",roundedCircle:!0,className:M.a.profPic}),S(k,{href:"https://www.linkedin.com/in/phdteixeira/",className:M.a.social,style:{backgroundColor:"#0077b5"}},"LinkedIn")," ",S(k,{href:"https://www.github.com/pedro-hdt/",className:M.a.social,style:{backgroundColor:"#24292E"}},"GitHub")," "))))))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),u=n("7W2i"),c=n("a1gu"),s=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1,p=function(e){u(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,d&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),u=n("Qg85");function c(e){return!e||"#"===e.trim()}var s=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,s=e.disabled,l=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(s||c(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),s&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(u.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),l)}))}));s.displayName="SafeAnchor",t.a=s},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vRNQ:function(e,t,n){e.exports={jumbo:"Home_jumbo__hsSyK",intro:"Home_intro__kLSjQ",text:"Home_text__1sCQa",profPic:"Home_profPic__2GwZ7",social:"Home_social__2vdT0"}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["vlRD",0,1]]]);