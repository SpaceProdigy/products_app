(self.webpackChunkmedicine_delivery_app=self.webpackChunkmedicine_delivery_app||[]).push([[512],{3512:function(e,t,n){"use strict";n.d(t,{_:function(){return o}});var o=[{id:1,discount:5,couponsKey:"HA8MSCZO5NRmNSg10esZB"},{id:2,discount:10,couponsKey:"seS2fXE60vs0w7S5rAVQ7"},{id:3,discount:15,couponsKey:"LwNgURXtpJvupyyPF8CaU"}]},5512:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var o,r,i,c,a,u,l=n(9439),p=n(2791),s=n(3512),f=n(168),d=n(6934),y=n(890),b=n(9592),m=(0,d.ZP)("section")(o||(o=(0,f.Z)(["\n  margin-top: 80px;\n"]))),v=(0,d.ZP)("ul")(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 0;\n  gap: 25px;\n"]))),h=(0,d.ZP)("li")(i||(i=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  width: 250px;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  list-style: none;\n  border: solid 1px ",";\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: ",";\n  transition: transform 300ms linear;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.03);\n  }\n\n  &::before {\n    content: ",";\n    position: absolute;\n    top: 5px;\n    right: 7px;\n    background-color: ",";\n    color: ",";\n    padding: 4px 6px;\n    border-radius: 4px;\n    font-size: 10px;\n    opacity: 0;\n    transition: opacity 500ms linear;\n  }\n\n  &:hover::before {\n    opacity: 1;\n  }\n"])),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.shadows[2]}),(function(e){return e.$isCopy?'"Copied"':'"Click to copy"'}),(function(e){return e.$isCopy?"green":e.theme.palette.secondary.main}),(function(e){return e.theme.palette.primary.secondary})),g=(0,d.ZP)(y.Z)(c||(c=(0,f.Z)([""]))),w=(0,d.ZP)(y.Z)(a||(a=(0,f.Z)([""]))),C=(0,d.ZP)(y.Z)(u||(u=(0,f.Z)([""]))),x=(0,b.E)(h),O=n(140),j=n(184),P=function(){var e=(0,p.useState)(!1),t=(0,l.Z)(e,2),n=t[0],o=t[1],r=(0,p.useState)(null),i=(0,l.Z)(r,2),c=i[0],a=i[1];return(0,j.jsx)(m,{children:(0,j.jsx)(v,{children:s._.map((function(e){var t=e.id,r=e.discount,i=e.couponsKey;return(0,j.jsx)(O.CopyToClipboard,{text:i,onCopy:function(){return function(e){try{o(!0),a(e),setTimeout((function(){o(!1)}),2e3)}catch(t){o(!1),a(null),console.error("Error to copy",t.message)}}(i)},children:(0,j.jsxs)(x,{whileTap:{scale:.8},$isCopy:n&&i===c,children:[(0,j.jsx)(g,{variant:"h6",component:"div",children:"Discount"}),(0,j.jsxs)(w,{variant:"h6",component:"div",children:[r,"%"]}),(0,j.jsx)(C,{variant:"button",component:"div",children:i})]})},t)}))})})}},6998:function(e,t,n){"use strict";var o=n(2458),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,c,a,u,l,p=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),a=document.createRange(),u=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),a.selectNodeContents(l),u.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(a):u.removeAllRanges()),l&&document.body.removeChild(l),c()}return p}},568:function(e,t,n){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(2791)),i=a(n(6998)),c=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return b(this,n)}}function b(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,o,a=y(u);function u(){var e;s(this,u);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return h(m(e=a.call.apply(a,[this].concat(n))),"onClick",(function(t){var n=e.props,o=n.text,c=n.onCopy,a=n.children,u=n.options,l=r.default.Children.only(a),p=(0,i.default)(o,u);c&&c(o,p),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=p(e,c),o=r.default.Children.only(t);return r.default.cloneElement(o,l(l({},n),{},{onClick:this.onClick}))}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.PureComponent);t.CopyToClipboard=g,h(g,"defaultProps",{onCopy:void 0,options:void 0})},140:function(e,t,n){"use strict";var o=n(568).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},2458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=512.ab2a5aa9.chunk.js.map