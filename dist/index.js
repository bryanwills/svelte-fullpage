!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Fullpage={})}(this,(function(t){"use strict";function e(){}const n=t=>t;function l(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(l)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,l){if(t){const i=a(t,e,n,l);return t[0](i)}}function a(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function u(t,e,n,l){if(t[2]&&l){const i=t[2](l(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|i[l];return t}return e.dirty|i}return e.dirty}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):e;const v=new Set;function m(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),0!==v.size&&h(m)}function g(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function _(){return x(" ")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e,n){t.classList[n?"add":"remove"](e)}const E=new Set;let D,F=0;function A(t,e,n,l,i,o,s,r=0){const c=16.666/l;let a="{\n";for(let t=0;t<=1;t+=c){const l=e+(n-e)*o(t);a+=100*t+`%{${s(l,1-l)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;E.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(b("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${d} ${l}ms linear ${i}ms 1 both`,F+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-l.length;i&&(t.style.animation=l.join(", "),F-=i,F||h(()=>{F||(E.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),E.clear())}))}function C(t){D=t}const I=[],T=[],z=[],B=[],M=Promise.resolve();let O=!1;function R(t){z.push(t)}let Y=!1;const L=new Set;function N(){if(!Y){Y=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];C(e),P(e.$$)}for(I.length=0;T.length;)T.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];L.has(e)||(L.add(e),e())}z.length=0}while(I.length);for(;B.length;)B.pop()();O=!1,Y=!1,L.clear()}}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let X;function W(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const U=new Set;let G;function H(t,e){t&&t.i&&(U.delete(t),t.i(e))}function J(t,e,n,l){if(t&&t.o){if(U.has(t))return;U.add(t),G.c.push(()=>{U.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}const K={duration:0};function Q(t,l,i,r){let c=l(t,i),a=r?0:1,u=null,d=null,f=null;function g(){f&&j(t,f)}function y(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function w(l){const{delay:i=0,duration:s=300,easing:r=n,tick:w=e,css:$}=c||K,b={start:p()+i,b:l};l||(b.group=G,G.r+=1),u?d=b:($&&(g(),f=A(t,a,l,s,i,r,$)),l&&w(0,1),u=y(b,s),R(()=>W(t,l,"start")),function(t){let e;0===v.size&&h(m),new Promise(n=>{v.add(e={c:t,f:n})})}(e=>{if(d&&e>d.start&&(u=y(d,s),d=null,W(t,u.b,"start"),$&&(g(),f=A(t,a,u.b,u.duration,0,r,c.css))),u)if(e>=u.end)w(a=u.b,1-a),W(t,u.b,"end"),d||(u.b?g():--u.group.r||o(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*r(t/u.duration),w(a,1-a)}return!(!u&&!d)}))}return{run(t){s(c)?(X||(X=Promise.resolve(),X.then(()=>{X=null})),X).then(()=>{c=c(),w(t)}):w(t)},end(){g(),u=d=null}}}function V(t,e){-1===t.$$.dirty[0]&&(I.push(t),O||(O=!0,M.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,n,r,c,a,u,d=[-1]){const f=D;C(t);const p=n.props||{},h=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:i(),dirty:d};let v=!1;if(h.ctx=r?r(t,p,(e,n,...l)=>{const i=l.length?l[0]:n;return h.ctx&&a(h.ctx[e],h.ctx[e]=i)&&(h.bound[e]&&h.bound[e](i),v&&V(t,e)),n}):[],h.update(),v=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(w)}else h.fragment&&h.fragment.c();n.intro&&H(t.$$.fragment),function(t,e,n){const{fragment:i,on_mount:r,on_destroy:c,after_update:a}=t.$$;i&&i.m(e,n),R(()=>{const e=r.map(l).filter(s);c?c.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(R)}(t,n.target,n.anchor),N()}C(f)}class tt{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function et(t,e,n){const l=t.slice();return l[30]=e[n],l[32]=n,l}function nt(t){let e,n,l,i,o;function s(...e){return t[24](t[32],...e)}return{c(){e=b("li"),n=b("button"),i=_(),k(n,"class",l="svelte-fp-indicator-list-item-btn "+(t[0]===t[32]?"svelte-fp-active":"")+" svelte-1lli8rw"),k(e,"class","svelte-fp-indicator-list-item svelte-1lli8rw")},m(t,l,r){y(t,e,l),g(e,n),g(e,i),r&&o(),o=q(n,"click",s)},p(e,i){t=e,1&i[0]&&l!==(l="svelte-fp-indicator-list-item-btn "+(t[0]===t[32]?"svelte-fp-active":"")+" svelte-1lli8rw")&&k(n,"class",l)},d(t){t&&w(e),o()}}}function lt(t){let e,n,l,i,s,r,f,p;const h=t[22].default,v=c(h,t,t[21],null);let m=t[2],x=[];for(let e=0;e<m.length;e+=1)x[e]=nt(et(t,m,e));return{c(){e=b("div"),n=b("div"),v&&v.c(),l=_(),i=b("div"),s=b("ul");for(let t=0;t<x.length;t+=1)x[t].c();k(s,"class","svelte-fp-indicator-list svelte-1lli8rw"),k(i,"class","svelte-fp-indicator svelte-1lli8rw"),k(n,"class","svelte-fp-container svelte-1lli8rw"),k(e,"class",r=d(t[3])+" svelte-1lli8rw"),k(e,"style",t[1])},m(r,c,a){y(r,e,c),g(e,n),v&&v.m(n,null),g(n,l),g(n,i),g(i,s);for(let t=0;t<x.length;t+=1)x[t].m(s,null);f=!0,a&&o(p),p=[q(window,"keydown",t[23]),q(e,"wheel",t[25]),q(e,"touchstart",t[26]),q(e,"touchmove",t[27]),q(e,"drag",it),q(e,"mousedown",t[28]),q(e,"mouseup",t[29])]},p(t,n){if(v&&v.p&&2097152&n[0]&&v.p(a(h,t,t[21],null),u(h,t[21],n,null)),5&n[0]){let e;for(m=t[2],e=0;e<m.length;e+=1){const l=et(t,m,e);x[e]?x[e].p(l,n):(x[e]=nt(l),x[e].c(),x[e].m(s,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=m.length}(!f||2&n[0])&&k(e,"style",t[1])},i(t){f||(H(v,t),f=!0)},o(t){J(v,t),f=!1},d(t){t&&w(e),v&&v.d(t),$(x,t),o(p)}}}const it=()=>!1;function ot(t,e,n){let l,i,{class:o=""}=e,{style:s}=e,{activeSection:r=0}=e,{sections:c=[]}=e,{transitionDuration:a=500}=e,{arrows:u=!1}=e,{drag:d=!1}=e,f=`${o} svelte-fp-wrapper`,p=0,h=!0;const v=t=>{let e=t.deltaY,n=(new Date).getTime();a<n-p&&(p=n,e<0?m():e>0&&g())},m=async()=>{r>0&&n(0,r--,r)},g=async()=>{r<c.length-1&&n(0,r++,r)},y=t=>{if(u)switch(t.key){case"ArrowDown":g();break;case"ArrowUp":m()}},w=t=>{d&&(l=t.screenY)},$=t=>{if(d){const e=t.screenY;l-e>100?g():l-e<-100&&m()}},b=t=>{console.log(t.touches),i=t.touches[0].screenY,console.log(i)},x=t=>{console.log(t);let e=(new Date).getTime();const n=t.touches[0].screenY;a<e-p&&(i-n>100?(g(),p=e):i-n<-100&&(m(),p=e))};let{$$slots:_={},$$scope:q}=e;return t.$set=t=>{"class"in t&&n(10,o=t.class),"style"in t&&n(1,s=t.style),"activeSection"in t&&n(0,r=t.activeSection),"sections"in t&&n(2,c=t.sections),"transitionDuration"in t&&n(11,a=t.transitionDuration),"arrows"in t&&n(12,u=t.arrows),"drag"in t&&n(13,d=t.drag),"$$scope"in t&&n(21,q=t.$$scope)},[r,s,c,f,v,y,w,$,b,x,o,a,u,d,l,i,p,h,()=>{h=!h},m,g,q,_,t=>y(t),t=>n(0,r=t),t=>v(t),t=>b(t),t=>x(t),t=>w(t),t=>$(t)]}function st(t){const e=t-1;return e*e*e+1}function rt(t,{delay:e=0,duration:n=400,easing:l=st}){const i=getComputedStyle(t),o=+i.opacity,s=parseFloat(i.height),r=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),a=parseFloat(i.marginTop),u=parseFloat(i.marginBottom),d=parseFloat(i.borderTopWidth),f=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:l,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*o};`+`height: ${t*s}px;`+`padding-top: ${t*r}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function ct(t,e,n){const l=t.slice();return l[30]=e[n],l[32]=n,l}function at(t){let n,l,i,s,r,f,p;const h=t[23].default,v=c(h,t,t[22],null),m=v||{c:e,m:e,d:e};let $=t[3][0]&&ut(t);return{c(){n=b("section"),l=b("div"),m&&m.c(),i=_(),$&&$.c(),k(l,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-l4liqa"),S(l,"svelte-fp-flexbox-center",t[4]),k(n,"class",s=d(t[6])+" svelte-l4liqa")},m(e,s,r){y(e,n,s),g(n,l),m&&m.m(l,null),g(n,i),$&&$.m(n,null),f=!0,r&&o(p),p=[q(n,"selectstart",t[7]),q(n,"mousedown",t[26]),q(n,"mouseup",t[27]),q(n,"touchstart",t[28]),q(n,"touchmove",t[29])]},p(t,e){v&&v.p&&4194304&e[0]&&v.p(a(h,t,t[22],null),u(h,t[22],e,null)),16&e[0]&&S(l,"svelte-fp-flexbox-center",t[4]),t[3][0]?$?$.p(t,e):($=ut(t),$.c(),$.m(n,null)):$&&($.d(1),$=null),(!f||64&e[0]&&s!==(s=d(t[6])+" svelte-l4liqa"))&&k(n,"class",s)},i(e){f||(H(m,e),R(()=>{r||(r=Q(n,rt,t[5],!0)),r.run(1)}),f=!0)},o(e){J(m,e),r||(r=Q(n,rt,t[5],!1)),r.run(0),f=!1},d(t){t&&w(n),m&&m.d(t),$&&$.d(),t&&r&&r.end(),o(p)}}}function ut(t){let e,n,l=t[3],i=[];for(let e=0;e<l.length;e+=1)i[e]=dt(ct(t,l,e));return{c(){e=b("div"),n=b("ul");for(let t=0;t<i.length;t+=1)i[t].c();k(n,"class","svelte-fp-indicator-list-horizontal svelte-l4liqa"),k(e,"class","svelte-fp-indicator-horizontal svelte-l4liqa")},m(t,l){y(t,e,l),g(e,n);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,e){if(10&e[0]){let o;for(l=t[3],o=0;o<l.length;o+=1){const s=ct(t,l,o);i[o]?i[o].p(s,e):(i[o]=dt(s),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}},d(t){t&&w(e),$(i,t)}}}function dt(t){let e,n,l,i,o;function s(...e){return t[25](t[32],...e)}return{c(){e=b("li"),n=b("button"),i=_(),k(n,"class",l="svelte-fp-indicator-list-item-btn "+(t[1]===t[32]?"svelte-fp-active":"")+" svelte-l4liqa"),k(e,"class","svelte-fp-indicator-list-item svelte-l4liqa")},m(t,l,r){y(t,e,l),g(e,n),g(e,i),r&&o(),o=q(n,"click",s)},p(e,i){t=e,2&i[0]&&l!==(l="svelte-fp-indicator-list-item-btn "+(t[1]===t[32]?"svelte-fp-active":"")+" svelte-l4liqa")&&k(n,"class",l)},d(t){t&&w(e),o()}}}function ft(t){let e,n,l,i=t[0]===t[2]&&at(t);return{c(){i&&i.c(),e=x("")},m(o,s,r){i&&i.m(o,s),y(o,e,s),n=!0,r&&l(),l=q(window,"keydown",t[24])},p(t,n){t[0]===t[2]?i?(i.p(t,n),H(i,1)):(i=at(t),i.c(),H(i,1),i.m(e.parentNode,e)):i&&(G={r:0,c:[],p:G},J(i,1,1,()=>{i=null}),G.r||o(G.c),G=G.p)},i(t){n||(H(i),n=!0)},o(t){J(i),n=!1},d(t){i&&i.d(t),t&&w(e),l()}}}function pt(t,e,n){let l,i,{class:o=""}=e,{sectionId:s}=e,{activeSection:r}=e,{slides:c=[]}=e,{activeSlide:a=!1}=e,{center:u=!1}=e,{arrows:d=!1}=e,{select:f=!1}=e,{transitionDuration:p=500}=e,{transition:h={duration:p}}=e;s=parseInt(s);let v=0,m=`${o} svelte-fp-section svelte-fp-flexbox-center`;f||(m=`${m} svelte-fp-unselectable`);const g=()=>{a<c.length-1?n(1,a++,a):n(1,a=0)},y=()=>{a>0?n(1,a--,a):n(1,a=c.length-1)},w=t=>{if(d)switch(t.key){case"ArrowLeft":y();break;case"ArrowRight":g()}},$=t=>{l=t.screenX},b=t=>{const e=t.screenX;l-e>100?g():l-e<-100&&y()},x=t=>{i=t.touches[0].screenX},_=t=>{let e=(new Date).getTime();const n=t.touches[0].screenX;p<e-v&&(i-n>100?(g(),v=e):i-n<-100&&(y(),v=e))};let{$$slots:q={},$$scope:k}=e;return t.$set=t=>{"class"in t&&n(13,o=t.class),"sectionId"in t&&n(0,s=t.sectionId),"activeSection"in t&&n(2,r=t.activeSection),"slides"in t&&n(3,c=t.slides),"activeSlide"in t&&n(1,a=t.activeSlide),"center"in t&&n(4,u=t.center),"arrows"in t&&n(14,d=t.arrows),"select"in t&&n(15,f=t.select),"transitionDuration"in t&&n(16,p=t.transitionDuration),"transition"in t&&n(5,h=t.transition),"$$scope"in t&&n(22,k=t.$$scope)},[s,a,r,c,u,h,m,()=>{if(!f)return!1},w,$,b,x,_,o,d,f,p,l,i,v,g,y,k,q,t=>w(t),t=>n(1,a=t),t=>$(t),t=>b(t),t=>x(t),t=>_(t)]}t.Fullpage=class extends tt{constructor(t){var e;super(),document.getElementById("svelte-1lli8rw-style")||((e=b("style")).id="svelte-1lli8rw-style",e.textContent=".svelte-fp-wrapper.svelte-1lli8rw{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1lli8rw{height:inherit;width:inherit;position:relative}.svelte-fp-indicator.svelte-1lli8rw{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1lli8rw{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1lli8rw{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1lli8rw{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1lli8rw{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1lli8rw{display:none}}",g(document.head,e)),Z(this,t,ot,lt,r,{class:10,style:1,activeSection:0,sections:2,transitionDuration:11,arrows:12,drag:13},[-1,-1])}},t.FullpageSection=class extends tt{constructor(t){var e;super(),document.getElementById("svelte-l4liqa-style")||((e=b("style")).id="svelte-l4liqa-style",e.textContent="section.svelte-l4liqa{height:inherit;position:relative}.svelte-fp-flexbox-expand.svelte-l4liqa{flex:1}.svelte-fp-container.svelte-l4liqa{height:inherit;width:inherit;position:relative}.svelte-fp-flexbox-center.svelte-l4liqa{display:flex;justify-content:center;align-items:center}.svelte-fp-unselectable.svelte-l4liqa{user-select:none}.svelte-fp-indicator-horizontal.svelte-l4liqa{width:inherit;height:5rem;overflow:hidden;position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list-horizontal.svelte-l4liqa{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-l4liqa{display:inline-block;margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-l4liqa{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-l4liqa{background-color:#767676}",g(document.head,e)),Z(this,t,pt,ft,r,{class:13,sectionId:0,activeSection:2,slides:3,activeSlide:1,center:4,arrows:14,select:15,transitionDuration:16,transition:5},[-1,-1])}},Object.defineProperty(t,"__esModule",{value:!0})}));
