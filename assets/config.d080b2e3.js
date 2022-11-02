var j=Object.defineProperty;var O=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(t,e,r)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))D.call(e,r)&&x(t,r,e[r]);if(O)for(var r of O(e))T.call(e,r)&&x(t,r,e[r]);return t};import{w as A}from"./vendor.2602b6d8.js";import{r as l}from"./index.57296617.js";import{r as d,R as _}from"./index.d86aa3fc.js";import{j as p}from"./jsx-runtime.696f64bc.js";function w(t){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function F(t,e,r){return e&&S(t.prototype,e),r&&S(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function W(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}function b(t,e){return b=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},b(t,e)}function C(t){var e=U();return function(){var n=m(t),o;if(e){var i=m(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return B(this,o)}}function B(t,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}function I(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function U(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},m(t)}function P(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){r(f);return}u.done?e(c):Promise.resolve(c).then(n,o)}function R(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(c){P(i,n,o,a,u,"next",c)}function u(c){P(i,n,o,a,u,"throw",c)}a(void 0)})}}var s=A.FRAMEWORK_OPTIONS,y=new Map,ee=function(e,r){var n=r.id,o=r.component;if(!o)throw new Error("Unable to render story ".concat(n," as the component annotation is missing from the default export"));return p(o,v({},e))},$=function(e){var r=e.callback,n=e.children,o=l.exports.useRef();return l.exports.useLayoutEffect(function(){o.current!==r&&(o.current=r,r())},[r]),n},G=function(){var t=R(regeneratorRuntime.mark(function e(r,n){var o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,q(n);case 2:return o=a.sent,a.abrupt("return",new Promise(function(u){o?o.render(p($,{callback:function(){return u(null)},children:r})):_.render(r,n,function(){return u(null)})}));case 4:case"end":return a.stop()}},e)}));return function(r,n){return t.apply(this,arguments)}}(),K=d.exports.version&&(d.exports.version.startsWith("18")||d.exports.version.startsWith("0.0.0")),z=(s==null?void 0:s.legacyRootApi)!==!0,k=z&&K,L=function(e){var r=y.get(e);r&&k?(r.unmount(),y.delete(e)):_.unmountComponentAtNode(e)},q=function(){var t=R(regeneratorRuntime.mark(function e(r){var n,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(k){a.next=2;break}return a.abrupt("return",null);case 2:if(n=y.get(r),n){a.next=9;break}return a.next=6,import("./client.4954d80d.js").then(function(u){return u.c});case 6:o=a.sent.default,n=o.createRoot(r),y.set(r,n);case 9:return a.abrupt("return",n);case 10:case"end":return a.stop()}},e)}));return function(r){return t.apply(this,arguments)}}(),H=function(t){W(r,t);var e=C(r);function r(){var n;N(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i)),n.state={hasError:!1},n}return F(r,[{key:"componentDidMount",value:function(){var o=this.state.hasError,i=this.props.showMain;o||i()}},{key:"componentDidCatch",value:function(o){var i=this.props.showException;i(o)}},{key:"render",value:function(){var o=this.state.hasError,i=this.props.children;return o?null:i}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),r}(l.exports.Component),M=s!=null&&s.strictMode?l.exports.StrictMode:l.exports.Fragment;function re(t,e){return g.apply(this,arguments)}function g(){return g=R(regeneratorRuntime.mark(function t(e,r){var n,o,i,a,u,c,f,E;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return n=e.storyContext,o=e.unboundStoryFn,i=e.showMain,a=e.showException,u=e.forceRemount,c=o,f=p(H,{showMain:i,showException:a,children:p(c,v({},n))}),E=M?p(M,{children:f}):f,u&&L(r),h.next=7,G(E,r);case 7:case"end":return h.stop()}},t)})),g.apply(this,arguments)}var te={framework:"react"};export{te as parameters,ee as render,re as renderToDOM};
//# sourceMappingURL=config.d080b2e3.js.map