function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},r={},o=t.parcelRequire35cb;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire35cb=o);var l=o.register;l("dBs8J",function(e,t){function n(e,t,n,r,o,l){return{tag:e,key:t,attrs:n,children:r,text:o,dom:l,is:void 0,domSize:void 0,state:void 0,events:void 0,instance:void 0}}n.normalize=function(e){return Array.isArray(e)?n("[",void 0,void 0,n.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:n("#",void 0,void 0,String(e),void 0,void 0)},n.normalizeChildren=function(e){var t=[];if(e.length){for(var r=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==r)throw TypeError(r&&(null!=e[o]||"boolean"==typeof e[o])?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var o=0;o<e.length;o++)t[o]=n.normalize(e[o])}return t},e.exports=n}),l("e2F9W",function(e,t){var n=o("dBs8J");e.exports=function(e){return null==e&&(e=""),n("<",void 0,void 0,e,void 0,void 0)}}),l("7PZrX",function(e,t){var n=o("dBs8J"),r=o("5sRXF");e.exports=function(){var e=r.apply(0,arguments);return e.tag="[",e.children=n.normalizeChildren(e.children),e}}),l("5sRXF",function(e,t){var n=o("dBs8J");e.exports=function(){var e,t=arguments[this],r=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},r=this),arguments.length===r+1)e=arguments[r],Array.isArray(e)||(e=[e]);else for(e=[];r<arguments.length;)e.push(arguments[r++]);return n("",t.key,t,e)}}),l("j25vk",function(e,t){e.exports=o("6JDlc")("undefined"!=typeof window?window:null)}),l("6JDlc",function(e,t){var n=o("dBs8J"),r=o("7srYg"),l=r.delayedRemoval,a=r.domFor;e.exports=function(){var e,t,r,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.ownerDocument}function s(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function u(e,t){if(e.state!==t)throw Error("'vnode.state' must not be modified.")}function c(e){var t=e.state;try{return this.apply(t,arguments)}finally{u(e,t)}}function f(e){try{return i(e).activeElement}catch(e){return null}}function d(e,t,n,r,o,l,a){for(var i=n;i<r;i++){var s=t[i];null!=s&&p(e,s,o,a,l)}}function p(e,t,r,o,l){var a,u,f,m,v,g,y,w,b=t.tag;if("string"==typeof b)switch(t.state={},null!=t.attrs&&I(t.attrs,t,r),b){case"#":a=e,u=t,f=l,u.dom=i(a).createTextNode(u.children),k(a,u.dom,f);break;case"<":h(e,t,o,l);break;case"[":var S=e,z=t,O=r,E=o,j=l,M=i(S).createDocumentFragment();if(null!=z.children){var $=z.children;d(M,$,0,$.length,O,null,E)}z.dom=M.firstChild,z.domSize=M.childNodes.length,k(S,M,j);break;default:!function(e,t,n,r,o){var l=t.tag,a=t.attrs,u=t.is,c=(r=s(t)||r)?u?i(e).createElementNS(r,l,{is:u}):i(e).createElementNS(r,l):u?i(e).createElement(l,{is:u}):i(e).createElement(l);if(t.dom=c,null!=a&&function(e,t,n){for(var r in t)A(e,r,null,t[r],n)}(t,a,r),k(e,c,o),!x(t)&&null!=t.children){var f=t.children;d(c,f,0,f.length,n,null,r),"select"===t.tag&&null!=a&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;(e.dom.value!==n||-1===e.dom.selectedIndex)&&(e.dom.value=n)}"selectedIndex"in t&&A(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,a)}}(e,t,r,o,l)}else{m=e,v=t,g=r,y=o,w=l,!function(e,t){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(I(e.state,e,t),null!=e.attrs&&I(e.attrs,e,t),e.instance=n.normalize(c.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null}(v,g),null!=v.instance?(p(m,v.instance,g,y,w),v.dom=v.instance.dom,v.domSize=null!=v.dom?v.instance.domSize:0):v.domSize=0}}var m={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function h(e,t,n,r){var o,l=t.children.match(/^\s*?<(\w+)/im)||[],a=i(e).createElement(m[l[1]]||"div");"http://www.w3.org/2000/svg"===n?(a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",a=a.firstChild):a.innerHTML=t.children,t.dom=a.firstChild,t.domSize=a.childNodes.length;for(var s=i(e).createDocumentFragment();o=a.firstChild;)s.appendChild(o);k(e,s,r)}function v(e,t,n,r,o,l){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)d(e,n,0,n.length,r,o,l);else if(null==n||0===n.length)S(e,t,0,t.length);else{var a=null!=t[0]&&null!=t[0].key,i=null!=n[0]&&null!=n[0].key,s=0,u=0;if(!a)for(;u<t.length&&null==t[u];)u++;if(!i)for(;s<n.length&&null==n[s];)s++;if(a!==i)S(e,t,u,t.length),d(e,n,s,n.length,r,o,l);else if(i){for(var c,f,m,h,v,k,x=t.length-1,z=n.length-1;x>=u&&z>=s&&(h=t[x],v=n[z],h.key===v.key);)h!==v&&g(e,h,v,r,o,l),null!=v.dom&&(o=v.dom),x--,z--;for(;x>=u&&z>=s&&(f=t[u],m=n[s],f.key===m.key);)u++,s++,f!==m&&g(e,f,m,r,w(t,u,o),l);for(;x>=u&&z>=s&&s!==z&&f.key===v.key&&h.key===m.key;)b(e,h,k=w(t,u,o)),h!==m&&g(e,h,m,r,k,l),++s<=--z&&b(e,f,o),f!==v&&g(e,f,v,r,o,l),null!=v.dom&&(o=v.dom),u++,h=t[--x],v=n[z],f=t[u],m=n[s];for(;x>=u&&z>=s&&h.key===v.key;)h!==v&&g(e,h,v,r,o,l),null!=v.dom&&(o=v.dom),x--,z--,h=t[x],v=n[z];if(s>z)S(e,t,u,x+1);else if(u>x)d(e,n,s,z+1,r,o,l);else{var c,O,j=o,A=z-s+1,M=Array(A),$=0,C=0,T=0x7fffffff,R=0;for(C=0;C<A;C++)M[C]=-1;for(C=z;C>=s;C--){null==c&&(c=function(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var l=o.key;null!=l&&(r[l]=t)}}return r}(t,u,x+1));var I=c[(v=n[C]).key];null!=I&&(T=I<T?I:-1,M[C-s]=I,h=t[I],t[I]=null,h!==v&&g(e,h,v,r,o,l),null!=v.dom&&(o=v.dom),R++)}if(o=j,R!==x-u+1&&S(e,t,u,x+1),0===R)d(e,n,s,z+1,r,o,l);else if(-1===T)for($=(O=function(e){for(var t=[0],n=0,r=0,o=0,l=y.length=e.length,o=0;o<l;o++)y[o]=e[o];for(var o=0;o<l;++o)if(-1!==e[o]){var a=t[t.length-1];if(e[a]<e[o]){y[o]=a,t.push(o);continue}for(n=0,r=t.length-1;n<r;){var i=(n>>>1)+(r>>>1)+(n&r&1);e[t[i]]<e[o]?n=i+1:r=i}e[o]<e[t[n]]&&(n>0&&(y[o]=t[n-1]),t[n]=o)}for(n=t.length,r=t[n-1];n-- >0;)t[n]=r,r=y[r];return y.length=0,t}(M)).length-1,C=z;C>=s;C--)m=n[C],-1===M[C-s]?p(e,m,r,l,o):O[$]===C-s?$--:b(e,m,o),null!=m.dom&&(o=n[C].dom);else for(C=z;C>=s;C--)m=n[C],-1===M[C-s]&&p(e,m,r,l,o),null!=m.dom&&(o=n[C].dom)}}else{var N=t.length<n.length?t.length:n.length;for(s=s<u?s:u;s<N;s++)(f=t[s])!==(m=n[s])&&(null!=f||null!=m)&&(null==f?p(e,m,r,l,w(t,s+1,o)):null==m?E(e,f):g(e,f,m,r,w(t,s+1,o),l));t.length>N&&S(e,t,s,t.length),n.length>N&&d(e,n,s,n.length,r,o,l)}}}function g(e,t,r,o,l,a){var i=t.tag;if(i===r.tag&&t.is===r.is){if(r.state=t.state,r.events=t.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=c.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=c.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(!1)return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(r,t))return;if("string"==typeof i)switch(null!=r.attrs&&N(r.attrs,r,o),i){case"#":u=t,d=r,u.children.toString()!==d.children.toString()&&(u.dom.nodeValue=d.children),d.dom=u.dom;break;case"<":m=e,y=t,w=r,b=a,k=l,y.children!==w.children?(j(m,y),h(m,w,b,k)):(w.dom=y.dom,w.domSize=y.domSize);break;case"[":var u,d,m,y,w,b,k,S,z,O,T,I,P=e,D=t,L=r,F=o,U=l,_=a;v(P,D.children,L.children,F,U,_);var Z=0,q=L.children;if(L.dom=null,null!=q){for(var J=0;J<q.length;J++){var B=q[J];null!=B&&null!=B.dom&&(null==L.dom&&(L.dom=B.dom),Z+=B.domSize||1)}1!==Z&&(L.domSize=Z)}break;default:S=t,z=r,O=o,T=a,I=z.dom=S.dom,T=s(z)||T,function(e,t,n,r){var o;if(null!=t)for(var l in t===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),t)null!=(o=t[l])&&(null==n||null==n[l])&&function(e,t,n,r){if(!("key"===t||null==n||M(t)))if("o"===t[0]&&"n"===t[1])R(e,t,void 0);else if("style"===t)C(e.dom,n,null);else if($(e,t,r)&&"className"!==t&&"title"!==t&&("value"!==t||"option"!==e.tag&&("select"!==e.tag||-1!==e.dom.selectedIndex||e.dom!==f(e.dom)))&&("input"!==e.tag||"type"!==t))e.dom[t]=null;else{var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}}(e,l,o,r);if(null!=n)for(var l in n)A(e,l,t&&t[l],n[l],r)}(z,S.attrs,z.attrs,T),x(z)||v(I,S.children,z.children,O,null,T)}else{var H=e,K=t,V=r,W=o,X=l,Y=a;if(V.instance=n.normalize(c.call(V.state.view,V)),V.instance===V)throw Error("A view cannot return the vnode it received as argument");N(V.state,V,W),null!=V.attrs&&N(V.attrs,V,W),null!=V.instance?(null==K.instance?p(H,V.instance,W,Y,X):g(H,K.instance,V.instance,W,X,Y),V.dom=V.instance.dom,V.domSize=V.instance.domSize):null!=K.instance?(E(H,K.instance),V.dom=void 0,V.domSize=0):(V.dom=K.dom,V.domSize=K.domSize)}}else E(e,t),p(e,r,o,a,l)}var y=[];function w(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function b(e,t,n){if(null!=t.dom){var r;if(null==t.domSize)r=t.dom;else for(var o of(r=i(e).createDocumentFragment(),a(t)))r.appendChild(o);k(e,r,n)}}function k(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function x(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=t&&0!==t.length)throw Error("Child node of a contenteditable must be trusted.");return!0}function S(e,t,n,r){for(var o=n;o<r;o++){var l=t[o];null!=l&&E(e,l)}}function z(e,n,r,o){var i=n.state,s=c.call(r.onbeforeremove,n);if(null!=s){var f=t;for(var d of a(n))l.set(d,f);o.v++,Promise.resolve(s).finally(function(){u(n,i),O(e,n,o)})}}function O(e,t,n){0==--n.v&&(function e(t){if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&c.call(t.state.onremove,t),t.attrs&&"function"==typeof t.attrs.onremove&&c.call(t.attrs.onremove,t),"string"!=typeof t.tag)null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(t),j(e,t))}function E(e,t){var n={v:1};"string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&z(e,t,t.state,n),t.attrs&&"function"==typeof t.attrs.onbeforeremove&&z(e,t,t.attrs,n),O(e,t,n)}function j(e,t){if(null!=t.dom)if(null==t.domSize)e.removeChild(t.dom);else for(var n of a(t))e.removeChild(n)}function A(e,t,n,r,o){var l,a;if(!("key"===t||null==r||M(t))&&(n!==r||(l=e,"value"===(a=t)||"checked"===a||"selectedIndex"===a||"selected"===a&&(l.dom===f(l.dom)||"option"===l.tag&&l.dom.parentNode===f(l.dom)))||"object"==typeof r)){if("o"===t[0]&&"n"===t[1])return R(e,t,r);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),r);else if("style"===t)C(e.dom,n,r);else if($(e,t,o)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+r||"select"===e.tag&&null!==n&&e.dom.value===""+r||"option"===e.tag&&null!==n&&e.dom.value===""+r)return;if("input"===e.tag&&"file"===e.attrs.type&&""+r!="")return void console.error("`value` is read-only on file inputs!")}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,r):e.dom[t]=r}else"boolean"==typeof r?r?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,r)}}function M(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function $(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||e.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}function C(e,t,n){if(t===n);else if(null==n)e.style="";else if("object"!=typeof n)e.style=n;else if(null==t||"object"!=typeof t)for(var r in e.style="",n){var o=n[r];null!=o&&(r.includes("-")?e.style.setProperty(r,String(o)):e.style[r]=String(o))}else{for(var r in t)null!=t[r]&&null==n[r]&&(r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(var r in n){var o=n[r];null!=o&&(o=String(o))!==String(t[r])&&(r.includes("-")?e.style.setProperty(r,o):e.style[r]=o)}}}function T(){this._=e}function R(t,n,r){null!=t.events?(t.events._=e,t.events[n]!==r&&(null!=r&&("function"==typeof r||"object"==typeof r)?(null==t.events[n]&&t.dom.addEventListener(n.slice(2),t.events,!1),t.events[n]=r):(null!=t.events[n]&&t.dom.removeEventListener(n.slice(2),t.events,!1),t.events[n]=void 0))):null!=r&&("function"==typeof r||"object"==typeof r)&&(t.events=new T,t.dom.addEventListener(n.slice(2),t.events,!1),t.events[n]=r)}function I(e,t,n){"function"==typeof e.oninit&&c.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(c.bind(e.oncreate,t))}function N(e,t,n){"function"==typeof e.onupdate&&n.push(c.bind(e.onupdate,t))}return T.prototype=Object.create(null),T.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(o,l,a){if(!o)throw TypeError("DOM element being rendered to does not exist.");if(null!=r&&o.contains(r))throw TypeError("Node is currently being rendered to and thus is locked.");var i=e,s=r,u=[],c=f(o),d=o.namespaceURI;r=o,e="function"==typeof a?a:void 0,t={};try{null==o.vnodes&&(o.textContent=""),l=n.normalizeChildren(Array.isArray(l)?l:[l]),v(o,o.vnodes,l,u,null,"http://www.w3.org/1999/xhtml"===d?void 0:d),o.vnodes=l,null!=c&&f(o)!==c&&"function"==typeof c.focus&&c.focus();for(var p=0;p<u.length;p++)u[p]()}finally{e=i,r=s}}}}),l("7srYg",function(e,t){var n=new WeakMap;e.exports={delayedRemoval:n,domFor:function*(e){var t=e.dom,r=e.domSize,o=n.get(t);if(null!=t)do{var l=t.nextSibling;n.get(t)===o&&(yield t,r--),t=l}while(r)}}}),l("iZais",function(e,t){var n=o("dBs8J");e.exports=function(e,t,r){var o=[],l=!1,a=-1;function i(){for(a=0;a<o.length;a+=2)try{e(o[a],n(o[a+1]),s)}catch(e){r.error(e)}a=-1}function s(){l||(l=!0,t(function(){l=!1,i()}))}return s.sync=i,{mount:function(t,r){if(null!=r&&null==r.view&&"function"!=typeof r)throw TypeError("m.mount expects a component, not a vnode.");var l=o.indexOf(t);l>=0&&(o.splice(l,2),l<=a&&(a-=2),e(t,[])),null!=r&&(o.push(t,r),e(t,n(r),s))},redraw:s}}}),l("5y2KI",function(e,t){var n=o("cITMw"),r=o("9eOch");e.exports=function(e,t){function o(e){return new Promise(e)}function l(e,t){for(var n in e.headers)if(r.call(e.headers,n)&&n.toLowerCase()===t)return!0;return!1}return o.prototype=Promise.prototype,o.__proto__=Promise,{request:function(a,i){"string"!=typeof a?(i=a,a=a.url):null==i&&(i={});var s,u,c=(s=a,u=i,new Promise(function(t,o){s=n(s,u.params);var a,i=null!=u.method?u.method.toUpperCase():"GET",c=u.body,f=(null==u.serialize||u.serialize===JSON.serialize)&&!(c instanceof e.FormData||c instanceof e.URLSearchParams),d=u.responseType||("function"==typeof u.extract?"":"json"),p=new e.XMLHttpRequest,m=!1,h=!1,v=p,g=p.abort;for(var y in p.abort=function(){m=!0,g.call(this)},p.open(i,s,!1!==u.async,"string"==typeof u.user?u.user:void 0,"string"==typeof u.password?u.password:void 0),f&&null!=c&&!l(u,"content-type")&&p.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof u.deserialize||l(u,"accept")||p.setRequestHeader("Accept","application/json, text/*"),u.withCredentials&&(p.withCredentials=u.withCredentials),u.timeout&&(p.timeout=u.timeout),p.responseType=d,u.headers)r.call(u.headers,y)&&p.setRequestHeader(y,u.headers[y]);p.onreadystatechange=function(e){if(!m&&4===e.target.readyState)try{var n,r=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(s),l=e.target.response;if("json"===d){if(!e.target.responseType&&"function"!=typeof u.extract)try{l=JSON.parse(e.target.responseText)}catch(e){l=null}}else d&&"text"!==d||null!=l||(l=e.target.responseText);if("function"==typeof u.extract?(l=u.extract(e.target,u),r=!0):"function"==typeof u.deserialize&&(l=u.deserialize(l)),r){if("function"==typeof u.type)if(Array.isArray(l))for(var a=0;a<l.length;a++)l[a]=new u.type(l[a]);else l=new u.type(l);t(l)}else{var i=function(){try{n=e.target.responseText}catch(e){n=l}var t=Error(n);t.code=e.target.status,t.response=l,o(t)};0===p.status?setTimeout(function(){h||i()}):i()}}catch(e){o(e)}},p.ontimeout=function(e){h=!0;var t=Error("Request timed out");t.code=e.target.status,o(t)},"function"==typeof u.config&&(p=u.config(p,u,s)||p)!==v&&(a=p.abort,p.abort=function(){m=!0,a.call(this)}),null==c?p.send():"function"==typeof u.serialize?p.send(u.serialize(c)):c instanceof e.FormData||c instanceof e.URLSearchParams?p.send(c):p.send(JSON.stringify(c))}));if(!0===i.background)return c;var f=0;function d(){0==--f&&"function"==typeof t&&t()}return function e(t){var n=t.then;return t.constructor=o,t.then=function(){f++;var r=n.apply(t,arguments);return r.then(d,function(e){if(d(),0===f)throw e}),e(r)},t}(c)}}}}),l("cITMw",function(e,t){var n=o("iRA82");e.exports=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(null==t)return e;var r=e.indexOf("?"),o=e.indexOf("#"),l=o<0?e.length:o,a=e.slice(0,r<0?l:r),i={};Object.assign(i,t);var s=a.replace(/:([^\/\.-]+)(\.{3})?/g,function(e,n,r){return(delete i[n],null==t[n])?e:r?t[n]:encodeURIComponent(String(t[n]))}),u=s.indexOf("?"),c=s.indexOf("#"),f=c<0?s.length:c,d=s.slice(0,u<0?f:u);r>=0&&(d+=e.slice(r,l)),u>=0&&(d+=(r<0?"?":"&")+s.slice(u,f));var p=n(i);return p&&(d+=(r<0&&u<0?"?":"&")+p),o>=0&&(d+=e.slice(o)),c>=0&&(d+=(o<0?"":"&")+s.slice(c)),d}}),l("iRA82",function(e,t){e.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)!function e(n,r){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(n+"["+o+"]",r[o]);else if("[object Object]"===Object.prototype.toString.call(r))for(var o in r)e(n+"["+o+"]",r[o]);else t.push(encodeURIComponent(n)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))}(n,e[n]);return t.join("&")}}),l("9eOch",function(e,t){e.exports=({}).hasOwnProperty}),l("4Ppi2",function(e,t){var n=o("7EF0O");e.exports=o("eFHZ8")("undefined"!=typeof window?window:null,n)}),l("7EF0O",function(e,t){var n=o("j25vk");e.exports=o("iZais")(n,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)}),l("eFHZ8",function(e,t){var n=o("dBs8J"),r=o("iVcuU"),l=o("cITMw"),a=o("7lWrV"),i=o("8KlxE"),s=o("e9o88"),u={};function c(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e,t){var o,f,d,p,m,h,v=null==e?null:"function"==typeof e.setImmediate?e.setImmediate:e.setTimeout,g=Promise.resolve(),y=!1,w=!1,b=0,k=u,x={onbeforeupdate:function(){return!(!(b=b?2:1)||u===k)},onremove:function(){e.removeEventListener("popstate",O,!1),e.removeEventListener("hashchange",z,!1)},view:function(){if(b&&u!==k){var e=[n(d,p.key,p)];return k&&(e=k.render(e[0])),e}}},S=j.SKIP={};function z(){y=!1;var n=e.location.hash;"#"!==j.prefix[0]&&(n=e.location.search+n,"?"!==j.prefix[0]&&"/"!==(n=e.location.pathname+n)[0]&&(n="/"+n));var r=n.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,c).slice(j.prefix.length),l=a(r);function i(e){console.error(e),E(f,null,{replace:!0})}Object.assign(l.params,e.history.state),function e(n){for(;n<o.length;n++)if(o[n].check(l)){var a=o[n].component,s=o[n].route,u=a,c=h=function(o){if(c===h){if(o===S)return e(n+1);d=null!=o&&("function"==typeof o.view||"function"==typeof o)?o:"div",p=l.params,m=r,h=null,k=a.render?a:null,2===b?t.redraw():(b=2,t.redraw.sync())}};a.view||"function"==typeof a?(a={},c(u)):a.onmatch?g.then(function(){return a.onmatch(l.params,r,s)}).then(c,r===f?null:i):c("div");return}if(r===f)throw Error("Could not resolve default route "+f+".");E(f,null,{replace:!0})}(0)}function O(){y||(y=!0,v(z))}function E(t,n,r){if(t=l(t,n),w){O();var o=r?r.state:null,a=r?r.title:null;r&&r.replace?e.history.replaceState(o,a,j.prefix+t):e.history.pushState(o,a,j.prefix+t)}else e.location.href=j.prefix+t}function j(n,r,l){if(!n)throw TypeError("DOM element being rendered to does not exist.");if(o=Object.keys(l).map(function(e){if("/"!==e[0])throw SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:e,component:l[e],check:i(e)}}),f=r,null!=r){var s=a(r);if(!o.some(function(e){return e.check(s)}))throw ReferenceError("Default route doesn't match any known routes.")}"function"==typeof e.history.pushState?e.addEventListener("popstate",O,!1):"#"===j.prefix[0]&&e.addEventListener("hashchange",z,!1),w=!0,t.mount(n,x),z()}return j.set=function(e,t,n){null!=h&&((n=n||{}).replace=!0),h=null,E(e,t,n)},j.get=function(){return m},j.prefix="#!",j.Link={view:function(e){var t,n,o,a=r(e.attrs.selector||"a",s(e.attrs,["options","params","selector","onclick"]),e.children);return(a.attrs.disabled=!!a.attrs.disabled)?(a.attrs.href=null,a.attrs["aria-disabled"]="true"):(t=e.attrs.options,n=e.attrs.onclick,o=l(a.attrs.href,e.attrs.params),a.attrs.href=j.prefix+o,a.attrs.onclick=function(e){var r;"function"==typeof n?r=n.call(e.currentTarget,e):null==n||"object"!=typeof n||"function"==typeof n.handleEvent&&n.handleEvent(e),!1===r||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,j.set(o,null,t))}),a}},j.param=function(e){return p&&null!=e?p[e]:p},j}}),l("iVcuU",function(e,t){var n=o("dBs8J"),r=o("5sRXF"),l=o("9eOch"),a=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i=Object.create(null);e.exports=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t,o,s,u,c=r.apply(1,arguments);return"string"==typeof e&&(c.children=n.normalizeChildren(c.children),"["!==e)?(t=i[e]||function(e){for(var t,n="div",r=[],o={};t=a.exec(e);){var s=t[1],u=t[2];if(""===s&&""!==u)n=u;else if("#"===s)o.id=u;else if("."===s)r.push(u);else if("["===t[3][0]){var c=t[6];c&&(c=c.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(c):o[t[4]]=""===c?c:c||!0}}return r.length>0&&(o.className=r.join(" ")),function(e){for(var t in e)if(l.call(e,t))return!1;return!0}(o)&&(o=null),i[e]={tag:n,attrs:o}}(e),o=c.attrs,u=(s=l.call(o,"class"))?o.class:o.className,c.tag=t.tag,null!=t.attrs?(o=Object.assign({},t.attrs,o),(null!=u||null!=t.attrs.className)&&(o.className=null!=u?null!=t.attrs.className?String(t.attrs.className)+" "+String(u):u:null!=t.attrs.className?t.attrs.className:null)):null!=u&&(o.className=u),s&&(o.class=null),"input"===t.tag&&l.call(o,"type")&&(o=Object.assign({type:o.type},o)),c.is=o.is,c.attrs=o,c):(c.tag=e,c)}}),l("7lWrV",function(e,t){var n=o("gZZfO");e.exports=function(e){var t=e.indexOf("?"),r=e.indexOf("#"),o=r<0?e.length:r,l=e.slice(0,t<0?o:t).replace(/\/{2,}/g,"/");return l?"/"!==l[0]&&(l="/"+l):l="/",{path:l,params:t<0?{}:n(e.slice(t+1,o))}}}),l("gZZfO",function(e,t){function n(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),r={},o={},l=0;l<t.length;l++){var a=t[l].split("="),i=n(a[0]),s=2===a.length?n(a[1]):"";"true"===s?s=!0:"false"===s&&(s=!1);var u=i.split(/\]\[?|\[/),c=o;i.indexOf("[")>-1&&u.pop();for(var f=0;f<u.length;f++){var d=u[f],p=u[f+1],m=""==p||!isNaN(parseInt(p,10));if(""===d){var i=u.slice(0,f).join();null==r[i]&&(r[i]=Array.isArray(c)?c.length:0),d=r[i]++}else if("__proto__"===d)break;if(f===u.length-1)c[d]=s;else{var h=Object.getOwnPropertyDescriptor(c,d);null!=h&&(h=h.value),null==h&&(c[d]=h=m?[]:{}),c=h}}}return o}}),l("8KlxE",function(e,t){var n=o("7lWrV");e.exports=function(e){var t=n(e),r=Object.keys(t.params),o=[],l=RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(e,t,n){return null==t?"\\"+e:(o.push({k:t,r:"..."===n}),"..."===n)?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||"")})+"$");return function(e){for(var n=0;n<r.length;n++)if(t.params[r[n]]!==e.params[r[n]])return!1;if(!o.length)return l.test(e.path);var a=l.exec(e.path);if(null==a)return!1;for(var n=0;n<o.length;n++)e.params[o[n].k]=o[n].r?a[n+1]:decodeURIComponent(a[n+1]);return!0}}}),l("e9o88",function(e,t){var n=o("9eOch"),r=RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");e.exports=function(e,t){var o={};if(null!=t)for(var l in e)n.call(e,l)&&!r.test(l)&&0>t.indexOf(l)&&(o[l]=e[l]);else for(var l in e)n.call(e,l)&&!r.test(l)&&(o[l]=e[l]);return o}});var a={},i={},s=o("iVcuU");s.trust=o("e2F9W"),s.fragment=o("7PZrX"),i=s;var u={},c=o("7EF0O");u=o("5y2KI")("undefined"!=typeof window?window:null,c.redraw);var c=o("7EF0O"),f=o("7srYg"),d=function(){return i.apply(this,arguments)};d.m=i,d.trust=i.trust,d.fragment=i.fragment,d.Fragment="[",d.mount=c.mount,d.route=o("4Ppi2"),d.render=o("j25vk"),d.redraw=c.redraw,d.request=u.request,d.parseQueryString=o("gZZfO"),d.buildQueryString=o("iRA82"),d.parsePathname=o("7lWrV"),d.buildPathname=o("cITMw"),d.vnode=o("dBs8J"),d.censor=o("e9o88"),d.domFor=f.domFor;var p={},m=w(a=d),h={};function v(){}Object.defineProperty(h,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(h,"default",{get:()=>g,set:void 0,enumerable:!0,configurable:!0});var g=function(e){function t(t){return new Proxy(v,{apply:(n,r,o)=>e(t,[],...o),get:(n,r)=>{let o=[r],l=new Proxy(v,{get:(e,t)=>(o.push(t),l),apply:(n,r,l)=>e(t,o,...l)});return l}})}return new Proxy(e=>t(e),{get:(e,n)=>t(e[n]||n)})},y=w(h);function w(e){return e&&e.__esModule?e:{default:e}}var b=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e[0].toLowerCase()})};const{address:k,aside:x,footer:S,header:z,h1:O,h2:E,h3:j,h4:A,h5:M,h6:$,hgroup:C,main:T,nav:R,section:I,article:N,blockquote:P,dd:D,dir:L,div:F,dl:U,dt:_,figcaption:Z,figure:q,hr:J,li:B,ol:H,p:K,pre:V,ul:W,a:X,abbr:Y,b:Q,bdi:G,bdo:ee,br:et,cite:en,code:er,data:eo,dfn:el,em:ea,i:ei,kdm:es,mark:eu,q:ec,rb:ef,rp:ed,rt:ep,rtc:em,ruby:eh,s:ev,samp:eg,small:ey,span:ew,strong:eb,sub:ek,sup:ex,time:eS,tt:ez,u:eO,wbr:eE,area:ej,audio:eA,img:eM,map:e$,track:eC,video:eT,embed:eR,iframe:eI,noembed:eN,object:eP,param:eD,picture:eL,source:eF,canvas:eU,noscript:e_,script:eZ,del:eq,ins:eJ,caption:eB,col:eH,colgroup:eK,table:eV,tbody:eW,td:eX,tfoot:eY,th:eQ,thead:eG,tr:e0,button:e1,datalist:e2,fieldset:e6,form:e8,formfield:e3,input:e4,label:e9,legend:e5,meter:e7,optgroup:te,option:tt,output:tn,progress:tr,select:to,textarea:tl,details:ta,dialog:ti,menu:ts,menuitem:tu,summary:tc,content:tf,element:td,slot:tp,template:tm}=e(p=function(){return(0,y.default)(function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var l=t.map(b).join("."),a=l.length?[e,l].join(".").replace(".$","#"):e;return m.default.apply(void 0,[a].concat(r))})})(e(a)),{svg:th,circle:tv,title:tg,g:ty,path:tw,defs:tb,use:tk,style:tx}=e(p)(e(a));var tS=e=>({view(e){let{hour:t,minute:n,second:r}=e.attrs;return[th({xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"-1024 -1024 2048 2048",width:"600",height:"600"},[tg("Swiss Railway Clock"),tx({type:"text/css"}," .bg {stroke: none; fill: white;} .fc {stroke: none; fill: black;} .h3 {stroke: none; fill: black;} .h2 {stroke: none; fill: #0000aa;} .h1 {stroke: none; fill: #aa0000;} "),tb([tw({id:"mark1",d:"M -20,-1000 l 40,0 0,100 -40,0 z"}),tw({id:"mark2",d:"M -40,-1000 l 80,0 0,240 -80,0 z"}),tw({id:"mark3",d:"M -40,-1000 l 80,0 0,300 -80,0 z"}),tw({id:"handh",d:"M -50,-600  l 50,-50 50,50 0,800  -100,0 z"}),tw({id:"handm",d:"M -40,-900  l 40,-40 40,40 0,1180 -80,0  z"}),ty({id:"hands"},[tw({d:"M -10,-910 l  10,-10 10,10 2,300 -24,0 z\n               M -13,-390 l  26,0         7,690 -40,0 z"}),tw({d:"M   0,-620 a 120,120 0 0 1 0,240\n                          a 120,120 0 0 1 0,-240 z\n               M   0,-560 a  60,60  0 0 0 0,120\n                          a  60,60  0 0 0 0,-120 z"})]),ty({id:"face1"},[tk({"xlink:href":"#mark1",transform:"rotate(06)"}),tk({"xlink:href":"#mark1",transform:"rotate(12)"}),tk({"xlink:href":"#mark1",transform:"rotate(18)"}),tk({"xlink:href":"#mark1",transform:"rotate(24)"})]),ty({id:"face2"},[tk({"xlink:href":"#face1"}),tk({"xlink:href":"#face1",transform:"rotate(30)"}),tk({"xlink:href":"#face1",transform:"rotate(60)"}),tk({"xlink:href":"#mark3"}),tk({"xlink:href":"#mark2",transform:"rotate(30)"}),tk({"xlink:href":"#mark2",transform:"rotate(60)"})]),ty({id:"face"},[tk({"xlink:href":"#face2"}),tk({"xlink:href":"#face2",transform:"rotate(90)"}),tk({"xlink:href":"#face2",transform:"rotate(180)"}),tk({"xlink:href":"#face2",transform:"rotate(270)"})])]),tv({class:"bg",r:"1024"}),tk({class:"fc","xlink:href":"#face"}),null==t?null:tk({class:"h1","xlink:href":"#handh",transform:`rotate(${360*t/12})`}),null==n?null:tk({class:"h2","xlink:href":"#handm",transform:`rotate(${360*n/60})`}),null==r?null:tk({class:"h3","xlink:href":"#hands",transform:`rotate(${360*r/60})`})])]}});const{h1:tz,div:tO,p:tE,input:tj,button:tA,select:tM,option:t$,span:tC}=e(p)(e(a)),{trunc:tT}=Math;setInterval(e(a).redraw,10);const tR={hour:0,minute:0,second:null,size:120,modus:"linear",tz:"Europe/Berlin"},tI=()=>{tR.hour=null,tR.minute=null,tR.second=null,e(a).redraw()},tN=t=>({view:t=>tO.container(tA({onclick:()=>e(a).route.set("/")},"Uhr"),tA({onclick:()=>e(a).route.set("/clock")},"Spielen"))}),tP={linear:(e,t,n)=>({hour:e,minute:t,second:n}),clack:(e,t,n)=>({hour:tT(e),minute:tT(t),second:tT(n)}),Sekunden:(e,t,n)=>({hour:e,minute:t,second:tT(n)})},tD=e=>{tR.hour=(tR.hour+e+24)%24},tL=e=>{tR.minute=(tR.minute+e+60)%60,0===tR.minute&&e>0&&tD(1),59===tR.minute&&e<0&&tD(-1)},tF=e=>{tR.second=(tR.second+e+60)%60,0===tR.second&&e>0&&tL(1),59===tR.second&&e<0&&tL(-1)},tU=t=>{"ArrowUp"===t.key&&tD(1),"ArrowDown"===t.key&&tD(-1),e(a).redraw(),t.preventDefault()},t_=t=>{"ArrowUp"===t.key&&tL(1),"ArrowDown"===t.key&&tL(-1),e(a).redraw(),t.preventDefault()},tZ=t=>{"ArrowUp"===t.key&&tF(1),"ArrowDown"===t.key&&tF(-1),e(a).redraw(),t.preventDefault()};e(a).route(document.body,"/",{"/":t=>({view:t=>{let n=new Date(new Date().toLocaleString("en-US",{timeZone:tR.tz})),r=n.getHours()+n.getMinutes()/60+n.getSeconds()/3600,o=n.getMinutes()+n.getSeconds()/60+n.getMilliseconds()/6e4,l=n.getSeconds()+n.getMilliseconds()/1e3,{hour:i,minute:s,second:u}=tP[tR.modus](r,o,l);return tO.container(tz("Lerne die Uhrzeit"),e(a)(tN),tM({onchange:t=>{tR.modus=t.target.value,e(a).redraw()}},Object.keys(tP).map(e=>t$({value:e},e))),tM({value:tR.tz,onchange:e=>tR.tz=e.target.value},Intl.supportedValuesOf("timeZone").map(e=>t$({value:e},e))),tz(`${tT(r).toString().padStart(2,"0")}:${tT(o).toString().padStart(2,"0")}:${tT(l).toString().padStart(2,"0")}`),e(a)(tS,{hour:i,minute:s,second:u,size:120}))}}),"/clock":t=>({view:t=>{let n=new Date,r=null===tR.second?n.getSeconds()+n.getMilliseconds()/1e3:tR.second;r=(null!=tR.hour||null!=tR.minute)&&null==tR.second?null:r;let o=(null===tR.minute?n.getMinutes():tR.minute)+r%60/60,l=(null===tR.hour?n.getHours():tR.hour)+o%60/60;return tO.container(e(a)(tN),tA({onclick:()=>tR.hour=(tR.hour+12)%24},"+"),tj({type:"number",value:tR.hour,onkeydown:tU,oninput:e=>tR.hour=(+e.target.value+24)%24}),tj({type:"number",value:tR.minute,onkeydown:t_,oninput:e=>tR.minute=""!==e.target.value?(+e.target.value+60)%60:null}),tj({type:"number",value:tR.second,onkeydown:tZ,oninput:e=>tR.second=""!==e.target.value?(+e.target.value+60)%60:null}),tA({onclick:()=>tI()},"×"),tz(tC({style:"color:#cc0000"},`${tT((l+12)%24).toString().padStart(2,"0")}`),tC(":"),tC({style:"color:#0000bb"},`${tT(o).toString().padStart(2,"0")}`)),tz(tC({style:"color:#cc0000"},`${tT(l).toString().padStart(2,"0")}`),tC(":"),tC({style:"color:#0000bb"},`${tT(o).toString().padStart(2,"0")}`)),e(a)(tS,{hour:l,minute:o,second:r,size:tR.size}))}})});
//# sourceMappingURL=tick-tack.8c36e2e5.js.map
