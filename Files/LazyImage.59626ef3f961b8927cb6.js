"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[434],{1397:(t,r,e)=>{var n=e(1380);function a(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c={rootMargin:"500px"},u=function(t,r,e){"IMG"===t.tagName?(t.srcset="".concat(e," 2x"),t.src=r):"IFRAME"===t.tagName?t.src=r:t.style.backgroundImage="url(".concat(r,")"),t.classList.remove("img-lazy","iframe-lazy")},l=function(t,r){t.forEach((function(t){t.isIntersecting&&(u(t.target,t.target.getAttribute("data-src"),t.target.getAttribute("data-retina-src")),r.unobserve(t.target))}))},f=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,e;return r=t,e=[{key:"init",value:function(){var t=[].concat(a((0,n.R2)(".img-lazy")),a((0,n.R2)(".iframe-lazy")));if("IntersectionObserver"in window){var r=new IntersectionObserver(l,c);t.forEach((function(t){return r.observe(t)}))}else t.forEach((function(t){return u(t,t.getAttribute("data-src"))}))}}],null&&i(r.prototype,null),e&&i(r,e),Object.defineProperty(r,"prototype",{writable:!1}),t}();(0,n.hl)((function(){f.init(),(0,n.eH)("LazyImage")}))}},t=>{t(t.s=1397)}]);