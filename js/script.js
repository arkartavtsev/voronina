!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,h=Object.create(null),p=function(){clearTimeout(t),t=setTimeout(e,100)},v=function(){},A=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,i,r;return window.XMLHttpRequest&&(n=new XMLHttpRequest,i=t(location),r=t(e),n=void 0===n.withCredentials&&""!==r&&r!==i?XDomainRequest||void 0:XMLHttpRequest),n},w="http://www.w3.org/1999/xlink";e=function(){var e,t,n,i,r,s,o,c,a,u,l=0;function d(){var e;0===(l-=1)&&(v(),window.addEventListener("resize",p,!1),window.addEventListener("orientationchange",p,!1),v=window.MutationObserver?((e=new MutationObserver(p)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),function(){try{e.disconnect(),window.removeEventListener("resize",p,!1),window.removeEventListener("orientationchange",p,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",p,!1),function(){document.documentElement.removeEventListener("DOMSubtreeModified",p,!1),window.removeEventListener("resize",p,!1),window.removeEventListener("orientationchange",p,!1)}))}function f(e){return function(){!0!==h[e.base]&&(e.useEl.setAttributeNS(w,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function m(i){return function(){var e,t=document.body,n=document.createElement("x");i.onload=null,n.innerHTML=i.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),d()}}function g(e){return function(){e.onerror=null,e.ontimeout=null,d()}}for(v(),a=document.getElementsByTagName("use"),r=0;r<a.length;r+=1){try{t=a[r].getBoundingClientRect()}catch(e){t=!1}e=(c=(i=a[r].getAttribute("href")||a[r].getAttributeNS(w,"href")||a[r].getAttribute("xlink:href"))&&i.split?i.split("#"):["",""])[0],n=c[1],s=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!s?(a[r].hasAttribute("href")&&a[r].setAttributeNS(w,"xlink:href",i),e.length&&(!0!==(u=h[e])&&setTimeout(f({useEl:a[r],base:e,hash:n}),0),void 0===u&&void 0!==(o=A(e))&&(u=new o,(h[e]=u).onload=m(u),u.onerror=g(u),u.ontimeout=g(u),u.open("GET",e),u.send(),l+=1))):s?e.length&&h[e]&&setTimeout(f({useEl:a[r],base:e,hash:n}),0):void 0===h[e]?h[e]=!0:h[e].onload&&(h[e].abort(),delete h[e].onload,h[e]=!0)}a="",l+=1,d()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();var objectFitImages=function(){"use strict";var s="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,e="undefined"==typeof Image?{style:{"object-position":1}}:new Image,c="object-fit"in e.style,r="object-position"in e.style,a="background-size"in e.style,u="string"==typeof e.currentSrc,l=e.getAttribute,d=e.setAttribute,f=!1;function m(e,t,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";l.call(e,"src")!==i&&d.call(e,"src",i)}function g(e,t){e.naturalWidth?t(e):setTimeout(g,100,e,t)}function h(t){var n,i,e=function(e){for(var t,n=getComputedStyle(e).fontFamily,i={};null!==(t=o.exec(n));)i[t[1]]=t[2];return i}(t),r=t[s];if(e["object-fit"]=e["object-fit"]||"fill",!r.img){if("fill"===e["object-fit"])return;if(!r.skipTest&&c&&!e["object-position"])return}if(!r.img){r.img=new Image(t.width,t.height),r.img.srcset=l.call(t,"data-ofi-srcset")||t.srcset,r.img.src=l.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),m(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{n=t,i={get:function(e){return n[s].img[e||"src"]},set:function(e,t){return n[s].img[t||"src"]=e,d.call(n,"data-ofi-"+t,e),h(n),e}},Object.defineProperty(n,"src",i),Object.defineProperty(n,"currentSrc",{get:function(){return i.get("currentSrc")}}),Object.defineProperty(n,"srcset",{get:function(){return i.get("srcset")},set:function(e){return i.set(e,"srcset")}})}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!u&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(r.img),t.style.backgroundImage='url("'+(r.img.currentSrc||r.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(r.img,function(){r.img.naturalWidth>t.width||r.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(r.img,function(e){m(t,e.naturalWidth,e.naturalHeight)})}function p(e,t){var n=!f&&!e;if(t=t||{},e=e||"img",r&&!t.skipTest||!a)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var i=0;i<e.length;i++)e[i][s]=e[i][s]||{skipTest:t.skipTest},h(e[i]);n&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&p(e.target,{skipTest:t.skipTest})},!0),f=!0,e="img"),t.watchMQ&&window.addEventListener("resize",p.bind(null,e,{skipTest:t.skipTest}))}return p.supportsObjectFit=c,p.supportsObjectPosition=r,function(){function n(e,t){return e[s]&&e[s].img&&("src"===t||"srcset"===t)?e[s].img:e}r||(HTMLImageElement.prototype.getAttribute=function(e){return l.call(n(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,t){return d.call(n(this,e),e,String(t))})}(),p}();function init(){var r=!0,n=!1,i=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function c(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function e(e){r=!1}function t(){document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("mouseup",a),document.addEventListener("pointermove",a),document.addEventListener("pointerdown",a),document.addEventListener("pointerup",a),document.addEventListener("touchmove",a),document.addEventListener("touchstart",a),document.addEventListener("touchend",a)}function a(e){"html"!==e.target.nodeName.toLowerCase()&&(r=!1,document.removeEventListener("mousemove",a),document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",a),document.removeEventListener("pointermove",a),document.removeEventListener("pointerdown",a),document.removeEventListener("pointerup",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchstart",a),document.removeEventListener("touchend",a))}document.addEventListener("keydown",function(e){o(document.activeElement)&&c(document.activeElement),r=!0},!0),document.addEventListener("mousedown",e,!0),document.addEventListener("pointerdown",e,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("focus",function(e){var t,n,i;o(e.target)&&(r||(t=e.target,n=t.type,"INPUT"==(i=t.tagName)&&s[n]&&!t.readOnly||"TEXTAREA"==i&&!t.readOnly||t.isContentEditable))&&c(e.target)},!0),document.addEventListener("blur",function(e){var t;o(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout(function(){n=!1,window.clearTimeout(i)},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))},!0),document.addEventListener("visibilitychange",function(e){"hidden"==document.visibilityState&&(n&&(r=!0),t())},!0),t(),document.body.classList.add("js-focus-visible")}function onDOMReady(e){var t;function n(){t||(t=!0,e())}0<=["interactive","complete"].indexOf(document.readyState)?e():(t=!1,document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1))}!function(e){var t,r,n,i,s,o,c,a=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(a)&&a.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(r=document.createElement("source"),n=function(e){var t,n,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=r.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),o&&o.addListener&&o.addListener(s)},r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s))}(window),function(e,s,u){"use strict";var r,l,a;s.createElement("picture");var L={},o=!1,t=function(){},n=s.createElement("img"),d=n.getAttribute,f=n.setAttribute,m=n.removeAttribute,c=s.documentElement,i={},S={algorithm:""},g="data-pfsrc",h=g+"set",p=navigator.userAgent,T=/rident/.test(p)||/ecko/.test(p)&&p.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",v=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,w=e.picturefillCFG,b="font-size:100%!important;",E=!0,y={},C={},R=e.devicePixelRatio,k={px:1,in:96},M=s.createElement("a"),D=!1,z=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,I=/^[^ \t\n\r\u000c]+/,_=/[,]+$/,j=/^\d+$/,q=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,H=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},P=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function W(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var O,N,G,U,F,$,Q,X,K,V,Y,J,Z,ee,te,ne,ie,re,se,oe=(O=/^([\d\.]+)(em|vw|px)$/,N=P(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in y))if(y[e]=!1,t&&(n=e.match(O)))y[e]=n[1]*k[n[2]];else try{y[e]=new Function("e",N(e))(k)}catch(e){}return y[e]}),ce=function(e,t){return e.w?(e.cWidth=L.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ae=function(e){if(o){var t,n,i,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),i=(t=r.elements||L.qsa(r.context||s,r.reevaluate||r.reselect?L.sel:L.selShort)).length){for(L.setupRun(r),D=!0,n=0;n<i;n++)L.fillImg(t[n],r);L.teardownRun(r)}}};function ue(e,t){return e.res-t.res}function le(e,t){var n,i,r;if(e&&t)for(r=L.parseSet(t),e=L.makeUrl(e),n=0;n<r.length;n++)if(e===L.makeUrl(r[n].url)){i=r[n];break}return i}e.console&&console.warn,x in n||(x="src"),i["image/jpeg"]=!0,i["image/gif"]=!0,i["image/png"]=!0,i["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),L.ns=("pf"+(new Date).getTime()).substr(0,9),L.supSrcset="srcset"in n,L.supSizes="sizes"in n,L.supPicture=!!e.HTMLPictureElement,L.supSrcset&&L.supPicture&&!L.supSizes&&(G=s.createElement("img"),n.srcset="data:,a",G.src="data:,a",L.supSrcset=n.complete===G.complete,L.supPicture=L.supSrcset&&L.supPicture),L.supSrcset&&!L.supSizes?(U="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",F=s.createElement("img"),$=function(){2===F.width&&(L.supSizes=!0),l=L.supSrcset&&!L.supSizes,o=!0,setTimeout(ae)},F.onload=$,F.onerror=$,F.setAttribute("sizes","9px"),F.srcset=U+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",F.src=U):o=!0,L.selShort="picture>img,img[srcset]",L.sel=L.selShort,L.cfg=S,L.DPR=R||1,L.u=k,L.types=i,L.setSize=t,L.makeUrl=P(function(e){return M.href=e,M.href}),L.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},L.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?L.matchesMedia=function(e){return!e||matchMedia(e).matches}:L.matchesMedia=L.mMQ,L.matchesMedia.apply(this,arguments)},L.mMQ=function(e){return!e||oe(e)},L.calcLength=function(e){var t=oe(e,!0)||!1;return t<0&&(t=!1),t},L.supportsType=function(e){return!e||i[e]},L.parseSize=P(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),L.parseSet=function(e){return e.cands||(e.cands=function(i,d){function e(e){var t,n=e.exec(i.substring(o));if(n)return t=n[0],o+=t.length,t}var f,m,t,n,r,s=i.length,o=0,g=[];function c(){var e,t,n,i,r,s,o,c,a,u=!1,l={};for(i=0;i<m.length;i++)s=(r=m[i])[r.length-1],o=r.substring(0,r.length-1),c=parseInt(o,10),a=parseFloat(o),j.test(o)&&"w"===s?((e||t)&&(u=!0),0===c?u=!0:e=c):q.test(o)&&"x"===s?((e||t||n)&&(u=!0),a<0?u=!0:t=a):j.test(o)&&"h"===s?((n||t)&&(u=!0),0===c?u=!0:n=c):u=!0;u||(l.url=f,e&&(l.w=e),t&&(l.d=t),n&&(l.h=n),n||t||e||(l.d=1),1===l.d&&(d.has1x=!0),l.set=d,g.push(l))}function a(){for(e(z),t="",n="in descriptor";;){if(r=i.charAt(o),"in descriptor"===n)if(W(r))t&&(m.push(t),t="",n="after descriptor");else{if(","===r)return o+=1,t&&m.push(t),void c();if("("===r)t+=r,n="in parens";else{if(""===r)return t&&m.push(t),void c();t+=r}}else if("in parens"===n)if(")"===r)t+=r,n="in descriptor";else{if(""===r)return m.push(t),void c();t+=r}else if("after descriptor"===n)if(W(r));else{if(""===r)return void c();n="in descriptor",o-=1}o+=1}}for(;;){if(e(B),s<=o)return g;f=e(I),m=[],","===f.slice(-1)?(f=f.replace(_,""),c()):a()}}(e.srcset,e)),e.cands},L.getEmValue=function(){var e;if(!r&&(e=s.body)){var t=s.createElement("div"),n=c.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=b,e.style.cssText=b,e.appendChild(t),r=t.offsetWidth,e.removeChild(t),r=parseFloat(r,10),c.style.cssText=n,e.style.cssText=i}return r||16},L.calcListLength=function(e){if(!(e in C)||S.uT){var t=L.calcLength(function(e){var t,n,i,r,s,o,c,a=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(n=function(e){var t,n="",i=[],r=[],s=0,o=0,c=!1;function a(){n&&(i.push(n),n="")}function u(){i[0]&&(r.push(i),i=[])}for(;;){if(""===(t=e.charAt(o)))return a(),u(),r;if(c){if("*"===t&&"/"===e[o+1]){c=!1,o+=2,a();continue}o+=1}else{if(W(t)){if(e.charAt(o-1)&&W(e.charAt(o-1))||!n){o+=1;continue}if(0===s){a(),o+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){a(),u(),o+=1;continue}if("/"===t&&"*"===e.charAt(o+1)){c=!0,o+=2;continue}}n+=t,o+=1}}}(e)).length,t=0;t<i;t++)if(s=(r=n[t])[r.length-1],c=s,a.test(c)&&0<=parseFloat(c)||u.test(c)||"0"===c||"-0"===c||"+0"===c){if(o=s,r.pop(),0===r.length)return o;if(r=r.join(" "),L.matchesMedia(r))return o}return"100vw"}(e));C[e]=t||k.width}return C[e]},L.setRes=function(e){var t;if(e)for(var n=0,i=(t=L.parseSet(e)).length;n<i;n++)ce(t[n],e.sizes);return t},L.setRes.res=ce,L.applySetCandidate=function(e,t){if(e.length){var n,i,r,s,o,c,a,u,l,d,f,m,g,h,p,v,A,w,b,E=t[L.ns],y=L.DPR;if(c=E.curSrc||t[x],(a=E.curCan||(d=t,f=c,!(m=e[0].set)&&f&&(m=(m=d[L.ns].sets)&&m[m.length-1]),(g=le(f,m))&&(f=L.makeUrl(f),d[L.ns].curSrc=f,(d[L.ns].curCan=g).res||ce(g,g.set.sizes)),g))&&a.set===e[0].set&&((l=T&&!t.complete&&a.res-.1>y)||(a.cached=!0,a.res>=y&&(o=a))),!o)for(e.sort(ue),o=e[(s=e.length)-1],i=0;i<s;i++)if((n=e[i]).res>=y){o=e[r=i-1]&&(l||c!==L.makeUrl(n.url))&&(h=e[r].res,p=n.res,v=y,A=e[r].cached,b=w=void 0,v<("saveData"===S.algorithm?2.7<h?v+1:(b=(p-v)*(w=Math.pow(h-.6,1.5)),A&&(b+=.1*w),h+b):1<v?Math.sqrt(h*p):h))?e[r]:n;break}o&&(u=L.makeUrl(o.url),E.curSrc=u,E.curCan=o,u!==c&&L.setSrc(t,o),L.setSize(t))}},L.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},L.getSet=function(e){var t,n,i,r=!1,s=e[L.ns].sets;for(t=0;t<s.length&&!r;t++)if((n=s[t]).srcset&&L.matchesMedia(n.media)&&(i=L.supportsType(n.type))){"pending"===i&&(n=i),r=n;break}return r},L.parseSets=function(e,t,n){var i,r,s,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),a=e[L.ns];(a.src===u||n.src)&&(a.src=d.call(e,"src"),a.src?f.call(e,g,a.src):m.call(e,g)),(a.srcset===u||n.srcset||!L.supSrcset||e.srcset)&&(i=d.call(e,"srcset"),a.srcset=i,o=!0),a.sets=[],c&&(a.pic=!0,function(e,t){var n,i,r,s,o=e.getElementsByTagName("source");for(n=0,i=o.length;n<i;n++)(r=o[n])[L.ns]=!0,(s=r.getAttribute("srcset"))&&t.push({srcset:s,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,a.sets)),a.srcset?(r={srcset:a.srcset,sizes:d.call(e,"sizes")},a.sets.push(r),(s=(l||a.src)&&v.test(a.srcset||""))||!a.src||le(a.src,r)||r.has1x||(r.srcset+=", "+a.src,r.cands.push({url:a.src,d:1,set:r}))):a.src&&a.sets.push({srcset:a.src,sizes:null}),a.curCan=null,a.curSrc=u,a.supported=!(c||r&&!L.supSrcset||s&&!L.supSizes),o&&L.supSrcset&&!a.supported&&(i?(f.call(e,h,i),e.srcset=""):m.call(e,h)),a.supported&&!a.srcset&&(!a.src&&e.src||e.src!==L.makeUrl(a.src))&&(null===a.src?e.removeAttribute("src"):e.src=a.src),a.parsed=!0},L.fillImg=function(e,t){var n,i,r,s,o,c=t.reselect||t.reevaluate;(e[L.ns]||(e[L.ns]={}),n=e[L.ns],c||n.evaled!==a)&&(n.parsed&&!t.reevaluate||L.parseSets(e,e.parentNode,t),n.supported?n.evaled=a:(i=e,s=L.getSet(i),o=!1,"pending"!==s&&(o=a,s&&(r=L.setRes(s),L.applySetCandidate(r,i))),i[L.ns].evaled=o))},L.setupRun=function(){D&&!E&&R===e.devicePixelRatio||(E=!1,R=e.devicePixelRatio,y={},C={},L.DPR=R||1,k.width=Math.max(e.innerWidth||0,c.clientWidth),k.height=Math.max(e.innerHeight||0,c.clientHeight),k.vw=k.width/100,k.vh=k.height/100,a=[k.height,k.width,R].join("-"),k.em=L.getEmValue(),k.rem=k.em)},L.supPicture?(ae=t,L.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=s.readyState||"";te=setTimeout(ee,"loading"===e?200:999),s.body&&(L.fillImgs(),(Q=Q||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,s.body?9:99),ne=c.clientHeight,H(e,"resize",(X=function(){E=Math.max(e.innerWidth||0,c.clientWidth)!==k.width||c.clientHeight!==ne,ne=c.clientHeight,E&&L.fillImgs()},K=99,J=function(){var e=new Date-Y;e<K?V=setTimeout(J,K-e):(V=null,X())},function(){Y=new Date,V||(V=setTimeout(J,K))})),H(s,"readystatechange",ee)),L.picturefill=ae,L.fillImgs=ae,L.teardownRun=t,ae._=L,e.picturefillCFG={pf:L,push:function(e){var t=e.shift();"function"==typeof L[t]?L[t].apply(L,e):(S[t]=e[0],D&&L.fillImgs({reselect:!0}))}};for(;w&&w.length;)e.picturefillCFG.push(w.shift());e.picturefill=ae,"object"==typeof module&&"object"==typeof module.exports?module.exports=ae:"function"==typeof define&&define.amd&&define("picturefill",function(){return ae}),L.supPicture||(i["image/webp"]=(ie="image/webp",re="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(se=new e.Image).onerror=function(){i[ie]=!1,ae()},se.onload=function(){i[ie]=1===se.width,ae()},se.src=re,"pending"))}(window,document),"undefined"!=typeof document&&onDOMReady(init),window.constants={resolution:{TABLET:768,DESKTOP:1120}},"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),function(){var e=document.querySelector(".page-header");e&&e.classList.add("page-header--js")}(),function(){var e=document.querySelector(".main-nav");if(e){var n=.8,i=.2,t=document.querySelector(".menu-btn"),r=t.querySelector(".menu-btn__text"),s=e.querySelectorAll(".main-nav__item"),o=e.querySelectorAll(".main-nav__link"),c=function(){e.style.transitionDuration="",document.body.classList.toggle("page-body--no-scroll"),e.classList.toggle("main-nav--open"),t.classList.toggle("menu-btn--close"),e.classList.contains("main-nav--open")?s.forEach(function(e,t){e.style.transitionDelay=n+t*i+"s"}):s.forEach(function(e){e.style.transitionDelay=""}),r.textContent=t.classList.contains("menu-btn--close")?"Закрыть меню":"Открыть меню"},a=function(){e.classList.contains("main-nav--open")&&(c(),e.style.transitionDuration="0s")};e.classList.add("main-nav--js"),t.classList.add("menu-btn--js"),t.hidden=!1,t.addEventListener("click",c),o.forEach(function(e){e.addEventListener("click",a)})}}(),function(){var e=document.querySelectorAll('a[href^="#"]');if(e.length){var n=function(e,t){e.preventDefault();var n=t.getAttribute("href");!function(e){var t=window.pageYOffset,n=t+e.getBoundingClientRect().top,i=t,r=Math.abs(t-n),s=Math.round(r/60);n<t&&(s=-s);var o=setInterval(function(){i+=s,Math.abs(t-i)>=r&&(i=n),window.scrollTo(0,i),i===n&&clearInterval(o)},5)}(document.querySelector(n))};e.forEach(function(t){t.addEventListener("click",function(e){n(e,t)})})}}(),function(){var e=document.querySelectorAll(".fade-in-block");if(e.length){var t=function(e){e.getBoundingClientRect().top<=window.innerHeight&&!e.classList.contains("fade-in-block--visible")&&e.classList.add("fade-in-block--visible")};e.forEach(function(e){e.classList.add("fade-in-block--js")}),document.addEventListener("DOMContentLoaded",function(){e.forEach(function(e){t(e)})}),window.addEventListener("scroll",function(){e.forEach(function(e){t(e)})})}}(),function(){var e=document.querySelector(".page-body__container"),t=e.querySelectorAll(".page-body__aside-block");if(t.length){var n=t[0],i=t[1],r=function(){n.style.left=e.getBoundingClientRect().left+"px",i.style.left=e.getBoundingClientRect().right-170+"px"};r(),t.forEach(function(e){e.classList.add("page-body__aside-block--js")}),window.addEventListener("resize",r)}}(),function(){var i=document.querySelector(".page-body__social-links");if(i){var r=document.querySelector(".intro"),e=function(){var e,t,n;n=r,(t=e=i).getBoundingClientRect().top<=n.getBoundingClientRect().bottom+50&&t.getBoundingClientRect().bottom>=n.getBoundingClientRect().top-50?e.classList.add("page-body__social-links--hidden"):e.classList.remove("page-body__social-links--hidden")};e(),window.addEventListener("scroll",e)}}(),function(){var n=document.querySelector(".section-counter");if(n){var i,r,e=document.querySelectorAll(".counted-section"),t=function(){e.forEach(function(e){if((t=e).getBoundingClientRect().top<.6*window.innerHeight&&t.getBoundingClientRect().bottom>.2*window.innerHeight&&e!==i)return i=e,r&&(r.classList.remove("section-counter__notch--current"),r.removeAttribute("tabindex")),(r=n.querySelector('a[href="#'+e.id+'"]')).classList.add("section-counter__notch--current"),void r.setAttribute("tabindex",-1);var t})};t(),window.addEventListener("scroll",t)}}(),function(){var e=document.querySelector(".portfolio");if(e){var t=e.querySelector(".portfolio__samples-wrapper"),n=t.querySelector(".portfolio__samples"),i=n.querySelectorAll(".portfolio__portfolio-item"),r=i[0],s=i[i.length-1],o=null,c=null,a=null,u=null,l=0,d=document.documentElement.clientWidth,f=function(){return d<window.constants.resolution.TABLET&&i.length&&r.offsetWidth*(i.length-1)+s.offsetWidth>t.offsetWidth},m=function(e){l+=e,n.style.transform="translateX("+l+"px)"},g=function(){var e=s.getBoundingClientRect().right-c.RIGHT>=o.WIDTH?-o.WIDTH:c.RIGHT-s.getBoundingClientRect().right-o.PADDING;m(e)},h=function(){var e=c.LEFT-r.getBoundingClientRect().left<o.WIDTH?c.LEFT-r.getBoundingClientRect().left+o.PADDING:o.WIDTH;m(e)},p=function(e){a=e.touches[0].clientX,u=e.touches[0].clientY},v=function(e){if(a&&u){var t=e.touches[0].clientX,n=e.touches[0].clientY,i=a-t,r=u-n;Math.abs(i)>Math.abs(r)&&(0<Math.abs(r)&&e.preventDefault(),0<i&&g(),i<0&&h()),u=a=null}},A=function(e){e.preventDefault(),a=e.clientX},w=function(e){if(a){var t=e.clientX,n=a-t;0<n&&g(),n<0&&h(),n&&(a=null)}},b=function(){e.classList.add("portfolio--with-slider"),o={WIDTH:r.offsetWidth,PADDING:parseFloat(getComputedStyle(r).paddingRight)},c={LEFT:t.getBoundingClientRect().left,RIGHT:t.getBoundingClientRect().right},l=0,n.style.transform="translateX("+l+"px)",t.addEventListener("touchstart",p),t.addEventListener("touchmove",v),t.addEventListener("mousedown",A),t.addEventListener("mousemove",w)};f()&&b(),window.addEventListener("resize",function(){d!==document.documentElement.clientWidth&&(d=document.documentElement.clientWidth,e.classList.remove("portfolio--with-slider"),n.style.transform="",t.removeEventListener("touchstart",p),t.removeEventListener("touchmove",v),t.removeEventListener("mousedown",A),t.removeEventListener("mousemove",w),f()&&b())})}}(),objectFitImages();