function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(r)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const o=l(t,e,n,r);return t[0](o)}}function l(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function u(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t){return null==t?"":t}const d="undefined"!=typeof window;let h=d?()=>window.performance.now():()=>Date.now(),m=d?t=>requestAnimationFrame(t):t;const g=new Set;function $(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),0!==g.size&&m($)}function y(t){let e;return 0===g.size&&m($),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}function v(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function S(){return x(" ")}function R(){return x("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function P(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r||n[r]&&n[r].set?t[r]=e[r]:P(t,r,e[r])}function L(t){return Array.from(t.childNodes)}function k(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):E(e)}function N(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return x(e)}function O(t){return N(t," ")}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}function j(t,e,n){t.classList[n?"add":"remove"](e)}function U(t,e=document.body){return Array.from(e.querySelectorAll(t))}const D=new Set;let I,T=0;function B(t,e,n,r,o,s,c,a=0){const i=16.666/r;let l="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*s(t);l+=100*t+`%{${c(r,1-r)}}\n`}const u=l+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,p=t.ownerDocument;D.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(E("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${r}ms linear ${o}ms 1 both`,T+=1,f}function J(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),(T-=o)||m(()=>{T||(D.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),D.clear())}))}function M(t){I=t}function z(t,e){(function(){if(!I)throw new Error("Function called outside component initialization");return I})().$$.context.set(t,e)}const H=[],K=[],F=[],V=[],G=Promise.resolve();let Q=!1;function W(t){F.push(t)}function X(t){V.push(t)}let Y=!1;const Z=new Set;function tt(){if(!Y){Y=!0;do{for(let t=0;t<H.length;t+=1){const e=H[t];M(e),et(e.$$)}for(H.length=0;K.length;)K.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];Z.has(e)||(Z.add(e),e())}F.length=0}while(H.length);for(;V.length;)V.pop()();Q=!1,Y=!1,Z.clear()}}function et(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let nt;function rt(){return nt||(nt=Promise.resolve()).then(()=>{nt=null}),nt}function ot(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const st=new Set;let ct;function at(){ct={r:0,c:[],p:ct}}function it(){ct.r||s(ct.c),ct=ct.p}function lt(t,e){t&&t.i&&(st.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),ct.c.push(()=>{st.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const ft={duration:0};function pt(n,r,o){let s,a,i=r(n,o),l=!1,u=0;function f(){s&&J(n,s)}function p(){const{delay:r=0,duration:o=300,easing:c=e,tick:p=t,css:d}=i||ft;d&&(s=B(n,0,1,o,r,c,d,u++)),p(0,1);const m=h()+r,g=m+o;a&&a.abort(),l=!0,W(()=>ot(n,!0,"start")),a=y(t=>{if(l){if(t>=g)return p(1,0),ot(n,!0,"end"),f(),l=!1;if(t>=m){const e=c((t-m)/o);p(e,1-e)}}return l})}let d=!1;return{start(){d||(J(n),c(i)?(i=i(),rt().then(p)):p())},invalidate(){d=!1},end(){l&&(f(),l=!1)}}}function dt(n,r,o){let a,i=r(n,o),l=!0;const u=ct;function f(){const{delay:r=0,duration:o=300,easing:c=e,tick:f=t,css:p}=i||ft;p&&(a=B(n,1,0,o,r,c,p));const d=h()+r,m=d+o;W(()=>ot(n,!1,"start")),y(t=>{if(l){if(t>=m)return f(0,1),ot(n,!1,"end"),--u.r||s(u.c),!1;if(t>=d){const e=c((t-d)/o);f(1-e,e)}}return l})}return u.r+=1,c(i)?rt().then(()=>{i=i(),f()}):f(),{end(t){t&&i.tick&&i.tick(1,0),l&&(a&&J(n,a),l=!1)}}}function ht(n,r,o,a){let i=r(n,o),l=a?0:1,u=null,f=null,p=null;function d(){p&&J(n,p)}function m(t,e){const n=t.b-l;return e*=Math.abs(n),{a:l,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:c=300,easing:a=e,tick:g=t,css:$}=i||ft,v={start:h()+o,b:r};r||(v.group=ct,ct.r+=1),u?f=v:($&&(d(),p=B(n,l,r,c,o,a,$)),r&&g(0,1),u=m(v,c),W(()=>ot(n,r,"start")),y(t=>{if(f&&t>f.start&&(u=m(f,c),f=null,ot(n,u.b,"start"),$&&(d(),p=B(n,l,u.b,u.duration,0,a,i.css))),u)if(t>=u.end)g(l=u.b,1-l),ot(n,u.b,"end"),f||(u.b?d():--u.group.r||s(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;l=u.a+u.d*a(e/u.duration),g(l,1-l)}return!(!u&&!f)}))}return{run(t){c(i)?rt().then(()=>{i=i(),g(t)}):g(t)},end(){d(),u=f=null}}}function mt(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function $t(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function yt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function bt(t,e,n){const{fragment:o,on_mount:a,on_destroy:i,after_update:l}=t.$$;o&&o.m(e,n),W(()=>{const e=a.map(r).filter(c);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(W)}function _t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function wt(t,e){-1===t.$$.dirty[0]&&(H.push(t),Q||(Q=!0,G.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Et(e,n,r,c,a,i,l=[-1]){const u=I;M(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let d=!1;if(p.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&wt(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=L(n.target);p.fragment&&p.fragment.l(t),t.forEach(_)}else p.fragment&&p.fragment.c();n.intro&&lt(e.$$.fragment),bt(e,n.target,n.anchor),tt()}M(u)}class xt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const St=[];function Rt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!St.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),St.push(n,e)}if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const At={},Pt=()=>({});function Ct(t){let e,n;const r=t[1].default,o=i(r,t,t[0],null);return{c(){e=E("main"),o&&o.c(),this.h()},l(t){var n=L(e=k(t,"MAIN",{class:!0}));o&&o.l(n),n.forEach(_),this.h()},h(){P(e,"class","svelte-ybpr1e")},m(t,r){b(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&o.p(l(r,t,t[0],null),u(r,t[0],e,null))},i(t){n||(lt(o,t),n=!0)},o(t){ut(o,t),n=!1},d(t){t&&_(e),o&&o.d(t)}}}function Lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=(t=>{"$$scope"in t&&n(0,o=t.$$scope)}),[o,r]}class kt extends xt{constructor(t){super(),Et(this,t,Lt,Ct,a,{})}}function Nt(t){let e,n,r=t[1].stack+"";return{c(){e=E("pre"),n=x(r)},l(t){var o=L(e=k(t,"PRE",{}));n=N(o,r),o.forEach(_)},m(t,r){b(t,e,r),v(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&q(n,r)},d(t){t&&_(e)}}}function Ot(e){let n,r,o,s,c,a,i,l,u,f=e[1].message+"";document.title=n=e[0];let p=e[2]&&e[1].stack&&Nt(e);return{c(){r=S(),o=E("h1"),s=x(e[0]),c=S(),a=E("p"),i=x(f),l=S(),p&&p.c(),u=R(),this.h()},l(t){U('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(_),r=O(t);var n=L(o=k(t,"H1",{class:!0}));s=N(n,e[0]),n.forEach(_),c=O(t);var d=L(a=k(t,"P",{class:!0}));i=N(d,f),d.forEach(_),l=O(t),p&&p.l(t),u=R(),this.h()},h(){P(o,"class","svelte-8od9u6"),P(a,"class","svelte-8od9u6")},m(t,e){b(t,r,e),b(t,o,e),v(o,s),b(t,c,e),b(t,a,e),v(a,i),b(t,l,e),p&&p.m(t,e),b(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&q(s,t[0]),2&e&&f!==(f=t[1].message+"")&&q(i,f),t[2]&&t[1].stack?p?p.p(t,e):((p=Nt(t)).c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&_(r),t&&_(o),t&&_(c),t&&_(a),t&&_(l),p&&p.d(t),t&&_(u)}}}function qt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)}),[r,o,!1]}class jt extends xt{constructor(t){super(),Et(this,t,qt,Ot,a,{status:0,error:1})}}function Ut(t){let e,r;const o=[t[4].props];var s=t[4].component;function c(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}if(s)var a=new s(c());return{c(){a&&yt(a.$$.fragment),e=R()},l(t){a&&vt(a.$$.fragment,t),e=R()},m(t,n){a&&bt(a,t,n),b(t,e,n),r=!0},p(t,n){const r=16&n?mt(o,[gt(t[4].props)]):{};if(s!==(s=t[4].component)){if(a){at();const t=a;ut(t.$$.fragment,1,0,()=>{_t(t,1)}),it()}s?(yt((a=new s(c())).$$.fragment),lt(a.$$.fragment,1),bt(a,e.parentNode,e)):a=null}else s&&a.$set(r)},i(t){r||(a&&lt(a.$$.fragment,t),r=!0)},o(t){a&&ut(a.$$.fragment,t),r=!1},d(t){t&&_(e),a&&_t(a,t)}}}function Dt(t){let e;const n=new jt({props:{error:t[0],status:t[1]}});return{c(){yt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,r){bt(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(lt(n.$$.fragment,t),e=!0)},o(t){ut(n.$$.fragment,t),e=!1},d(t){_t(n,t)}}}function It(t){let e,n,r,o;const s=[Dt,Ut],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=R()},l(t){n.l(t),r=R()},m(t,n){c[e].m(t,n),b(t,r,n),o=!0},p(t,o){let i=e;(e=a(t))===i?c[e].p(t,o):(at(),ut(c[i],1,1,()=>{c[i]=null}),it(),(n=c[e])||(n=c[e]=s[e](t)).c(),lt(n,1),n.m(r.parentNode,r))},i(t){o||(lt(n),o=!0)},o(t){ut(n),o=!1},d(t){c[e].d(t),t&&_(r)}}}function Tt(t){let e;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[It]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=n(o,r[t]);const s=new kt({props:o});return{c(){yt(s.$$.fragment)},l(t){vt(s.$$.fragment,t)},m(t,n){bt(s,t,n),e=!0},p(t,[e]){const n=12&e?mt(r,[4&e&&{segment:t[2][0]},8&e&&gt(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(lt(s.$$.fragment,t),e=!0)},o(t){ut(s.$$.fragment,t),e=!1},d(t){_t(s,t)}}}function Bt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e;return z(At,r),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1)}),[o,s,c,a,i,r]}class Jt extends xt{constructor(t){super(),Et(this,t,Bt,Tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Mt=[],zt=[{js:()=>import("./index.6134de0e.js"),css:["index.6134de0e.css","client.fc4521da.css"]},{js:()=>import("./readme.659d7456.js"),css:["client.fc4521da.css"]}],Ht=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/readme\/?$/,parts:[{i:1}]}];const Kt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ft,Vt,Gt,Qt=!1,Wt=[],Xt="{}";const Yt={page:Rt({}),preloading:Rt(null),session:Rt(Kt&&Kt.session)};let Zt,te;Yt.session.subscribe(async t=>{if(Zt=t,!Qt)return;te=!0;const e=ie(new URL(location.href)),n=Vt={},{redirect:r,props:o,branch:s}=await pe(e);n===Vt&&await fe(r,s,o,e.page)});let ee,ne=null;let re,oe=1;const se="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ce={};function ae(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Kt.baseUrl))return null;let e=t.pathname.slice(Kt.baseUrl.length);if(""===e&&(e="/"),!Mt.some(t=>t.test(e)))for(let n=0;n<Ht.length;n+=1){const r=Ht[n],o=r.pattern.exec(e);if(o){const n=ae(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function le(){return{x:pageXOffset,y:pageYOffset}}async function ue(t,e,n,r){if(e)re=e;else{const t=le();ce[re]=t,e=re=++oe,ce[re]=n?t:{x:0,y:0}}re=e,Ft&&Yt.preloading.set(!0);const o=ne&&ne.href===t.href?ne.promise:pe(t);ne=null;const s=Vt={},{redirect:c,props:a,branch:i}=await o;if(s===Vt&&(await fe(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ce[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}ce[re]=t,t&&scrollTo(t.x,t.y)}}async function fe(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=ie(new URL(t,document.baseURI));return n?(se[e.replaceState?"replaceState":"pushState"]({id:re},"",t),ue(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Yt.page.set(r),Yt.preloading.set(!1),Ft)Ft.$set(n);else{n.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},n.level0={props:await Gt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)he(t.nextSibling);he(t),he(e)}Ft=new Jt({target:ee,props:n,hydrate:!0})}Wt=e,Xt=JSON.stringify(r.query),Qt=!0,te=!1}async function pe(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;Gt||(Gt=Kt.preloaded[0]||Pt.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Zt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Xt)return!0;const o=Wt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!te&&!u&&Wt[a]&&Wt[a].part===e.i)return Wt[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(de);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(zt[e.i]);let m;return m=Qt||!Kt.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Zt):{}:Kt.preloaded[a+1],s[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function de(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function he(t){t.parentNode.removeChild(t)}function me(t){const e=ie(new URL(t,document.baseURI));if(e)return ne&&t===ne.href||function(t,e){ne={href:t,promise:e}}(t,pe(e)),ne.promise}let ge;function $e(t){clearTimeout(ge),ge=setTimeout(()=>{ye(t)},20)}function ye(t){const e=be(t.target);e&&"prefetch"===e.rel&&me(e.href)}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=be(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=ie(o);if(s){ue(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),se.pushState({id:re},"",o.href)}}function be(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function _e(t){if(ce[re]=le(),t.state){const e=ie(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else(function(t){re=t})(oe=oe+1),se.replaceState({id:re},"",location.href)}!function(t){var e;"scrollRestoration"in se&&(se.scrollRestoration="manual"),e=t.target,ee=e,addEventListener("click",ve),addEventListener("popstate",_e),addEventListener("touchstart",ye),addEventListener("mousemove",$e),Promise.resolve().then(()=>{const{hash:t,href:e}=location;se.replaceState({id:oe},"",e);const n=new URL(location.href);if(Kt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=Kt;Gt||(Gt=s&&s[0]),fe(null,[],{error:a,status:c,session:o,level0:{props:Gt},level1:{props:{status:c,error:a},component:jt},segments:s},{host:e,path:n,query:ae(r),params:{}})}();const r=ie(n);return r?ue(r,oe,!0,t):void 0})}({target:document.querySelector("#sapper")});export{t as A,pt as B,dt as C,n as D,C as E,mt as F,f as G,yt as H,U as I,vt as J,bt as K,_t as L,K as M,$t as N,X as O,x as P,N as Q,xt as S,S as a,k as b,i as c,L as d,E as e,_ as f,O as g,P as h,Et as i,b as j,v as k,A as l,l as m,p as n,u as o,ut as p,w as q,s as r,a as s,lt as t,j as u,W as v,ht as w,R as x,at as y,it as z};
