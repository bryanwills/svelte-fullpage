!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Fullpage={})}(this,(function(t){"use strict";function e(){}const n=t=>t;function i(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(i)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,i){if(t){const s=a(t,e,n,i);return t[0](s)}}function a(t,e,n,i){return t[1]&&i?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](i(e))):n.ctx}function u(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|s[i];return t}return e.dirty|s}return e.dirty}function d(t){return null==t?"":t}const f="undefined"!=typeof window;let p=f?()=>window.performance.now():()=>Date.now(),v=f?t=>requestAnimationFrame(t):e;const m=new Set;function h(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),0!==m.size&&v(h)}function g(t){let e;return 0===m.size&&v(h),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}function y(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function _(){return q(" ")}function S(){return q("")}function k(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function I(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e,n){t.classList[n?"add":"remove"](e)}const E=new Set;let D,z=0;function F(t,e,n,i,s,l,o,r=0){const c=16.666/i;let a="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*l(t);a+=100*t+`%{${o(i,1-i)}}\n`}const u=a+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${r}`,f=t.ownerDocument;E.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(w("style")).sheet),v=f.__svelte_rules||(f.__svelte_rules={});v[d]||(v[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${i}ms linear ${s}ms 1 both`,z+=1,d}function C(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||v(()=>{z||(E.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),E.clear())}))}function A(t){D=t}const O=[],B=[],T=[],M=[],N=Promise.resolve();let R=!1;function Y(t){T.push(t)}let L=!1;const P=new Set;function X(){if(!L){L=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];A(e),W(e.$$)}for(O.length=0;B.length;)B.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];P.has(e)||(P.add(e),e())}T.length=0}while(O.length);for(;M.length;)M.pop()();R=!1,L=!1,P.clear()}}function W(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}let U;function G(){return U||(U=Promise.resolve(),U.then(()=>{U=null})),U}function H(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function V(){K.r||l(K.c),K=K.p}function Z(t,e){t&&t.i&&(J.delete(t),t.i(e))}function tt(t,e,n,i){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push(()=>{J.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const et={duration:0};function nt(t,i,s,r){let c=i(t,s),a=r?0:1,u=null,d=null,f=null;function v(){f&&C(t,f)}function m(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(i){const{delay:s=0,duration:o=300,easing:r=n,tick:h=e,css:y}=c||et,$={start:p()+s,b:i};i||($.group=K,K.r+=1),u?d=$:(y&&(v(),f=F(t,a,i,o,s,r,y)),i&&h(0,1),u=m($,o),Y(()=>H(t,i,"start")),g(e=>{if(d&&e>d.start&&(u=m(d,o),d=null,H(t,u.b,"start"),y&&(v(),f=F(t,a,u.b,u.duration,0,r,c.css))),u)if(e>=u.end)h(a=u.b,1-a),H(t,u.b,"end"),d||(u.b?v():--u.group.r||l(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;a=u.a+u.d*r(t/u.duration),h(a,1-a)}return!(!u&&!d)}))}return{run(t){o(c)?G().then(()=>{c=c(),h(t)}):h(t)},end(){v(),u=d=null}}}function it(t,e){-1===t.$$.dirty[0]&&(O.push(t),R||(R=!0,N.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(t,n,r,c,a,u,d=[-1]){const f=D;A(t);const p=n.props||{},v=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:d};let m=!1;if(v.ctx=r?r(t,p,(e,n,...i)=>{const s=i.length?i[0]:n;return v.ctx&&a(v.ctx[e],v.ctx[e]=s)&&(v.bound[e]&&v.bound[e](s),m&&it(t,e)),n}):[],v.update(),m=!0,l(v.before_update),v.fragment=!!c&&c(v.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);v.fragment&&v.fragment.l(t),t.forEach(b)}else v.fragment&&v.fragment.c();n.intro&&Z(t.$$.fragment),function(t,e,n){const{fragment:s,on_mount:r,on_destroy:c,after_update:a}=t.$$;s&&s.m(e,n),Y(()=>{const e=r.map(i).filter(o);c?c.push(...e):l(e),t.$$.on_mount=[]}),a.forEach(Y)}(t,n.target,n.anchor),X()}A(f)}class lt{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ot(t,e,n){const i=t.slice();return i[30]=e[n],i[32]=n,i}function rt(t){let e,n,i,s,l;function o(...e){return t[24](t[32],...e)}return{c(){e=w("li"),n=w("button"),s=_(),I(n,"class",i="svelte-fp-indicator-list-item-btn "+(t[0]===t[32]?"svelte-fp-active":"")+" svelte-1uq79ci"),I(e,"class","svelte-fp-indicator-list-item svelte-1uq79ci")},m(t,i,r){$(t,e,i),y(e,n),y(e,s),r&&l(),l=k(n,"click",o)},p(e,s){t=e,1&s[0]&&i!==(i="svelte-fp-indicator-list-item-btn "+(t[0]===t[32]?"svelte-fp-active":"")+" svelte-1uq79ci")&&I(n,"class",i)},d(t){t&&b(e),l()}}}function ct(t){let e,n,i,s,o,r,f,p;const v=t[22].default,m=c(v,t,t[21],null);let h=t[2],g=[];for(let e=0;e<h.length;e+=1)g[e]=rt(ot(t,h,e));return{c(){e=w("div"),n=w("div"),m&&m.c(),i=_(),s=w("div"),o=w("ul");for(let t=0;t<g.length;t+=1)g[t].c();I(o,"class","svelte-fp-indicator-list svelte-1uq79ci"),I(s,"class","svelte-fp-indicator svelte-1uq79ci"),I(n,"class","svelte-fp-container svelte-1uq79ci"),I(e,"class",r=d(t[3])+" svelte-1uq79ci"),I(e,"style",t[1])},m(r,c,a){$(r,e,c),y(e,n),m&&m.m(n,null),y(n,i),y(n,s),y(s,o);for(let t=0;t<g.length;t+=1)g[t].m(o,null);f=!0,a&&l(p),p=[k(window,"keydown",t[23]),k(e,"wheel",t[25]),k(e,"touchstart",t[26]),k(e,"touchmove",t[27]),k(e,"drag",at),k(e,"mousedown",t[28]),k(e,"mouseup",t[29])]},p(t,n){if(m&&m.p&&2097152&n[0]&&m.p(a(v,t,t[21],null),u(v,t[21],n,null)),5&n[0]){let e;for(h=t[2],e=0;e<h.length;e+=1){const i=ot(t,h,e);g[e]?g[e].p(i,n):(g[e]=rt(i),g[e].c(),g[e].m(o,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=h.length}(!f||2&n[0])&&I(e,"style",t[1])},i(t){f||(Z(m,t),f=!0)},o(t){tt(m,t),f=!1},d(t){t&&b(e),m&&m.d(t),x(g,t),l(p)}}}const at=()=>!1;function ut(t,e,n){let i,s,{class:l=""}=e,{style:o=""}=e,{activeSection:r=0}=e,{sections:c=[]}=e,{transitionDuration:a=500}=e,{arrows:u=!1}=e,{drag:d=!1}=e,f=`${l} svelte-fp-wrapper`,p=0,v=!0;const m=t=>{let e=t.deltaY,n=(new Date).getTime();a<n-p&&(p=n,e<0?h():e>0&&g())},h=async()=>{r>0&&n(0,r--,r)},g=async()=>{r<c.length-1&&n(0,r++,r)},y=t=>{if(u)switch(t.key){case"ArrowDown":g();break;case"ArrowUp":h()}},$=t=>{d&&(i=t.screenY)},b=t=>{if(d){const e=t.screenY;i-e>100?g():i-e<-100&&h()}},x=t=>{s=t.touches[0].screenY},w=t=>{let e=(new Date).getTime();const n=t.touches[0].screenY;a<e-p&&(s-n>100?(g(),p=e):s-n<-100&&(h(),p=e))};let{$$slots:q={},$$scope:_}=e;return t.$set=t=>{"class"in t&&n(10,l=t.class),"style"in t&&n(1,o=t.style),"activeSection"in t&&n(0,r=t.activeSection),"sections"in t&&n(2,c=t.sections),"transitionDuration"in t&&n(11,a=t.transitionDuration),"arrows"in t&&n(12,u=t.arrows),"drag"in t&&n(13,d=t.drag),"$$scope"in t&&n(21,_=t.$$scope)},[r,o,c,f,m,y,$,b,x,w,l,a,u,d,i,s,p,v,()=>{v=!v},h,g,_,q,t=>y(t),t=>n(0,r=t),t=>m(t),t=>x(t),t=>w(t),t=>$(t),t=>b(t)]}function dt(t){const e=t-1;return e*e*e+1}function ft(t,{delay:e=0,duration:n=400,easing:i=dt,x:s=0,y:l=0,opacity:o=0}){const r=getComputedStyle(t),c=+r.opacity,a="none"===r.transform?"":r.transform,u=c*(1-o);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*l}px);\n\t\t\topacity: ${c-u*e}`}}function pt(t,{delay:e=0,duration:n=400,easing:i=dt}){const s=getComputedStyle(t),l=+s.opacity,o=parseFloat(s.height),r=parseFloat(s.paddingTop),c=parseFloat(s.paddingBottom),a=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:i,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*l};`+`height: ${t*o}px;`+`padding-top: ${t*r}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*d}px;`+`border-bottom-width: ${t*f}px;`}}function vt(t,e,n){const i=t.slice();return i[34]=e[n],i[36]=n,i}function mt(t){let n,i,s,o,r,f,p;const v=t[27].default,m=c(v,t,t[26],null),h=m||{c:e,m:e,d:e};let g=t[3][0]&&ht(t);return{c(){n=w("section"),i=w("div"),h&&h.c(),s=_(),g&&g.c(),I(i,"class","svelte-fp-container svelte-fp-flexbox-expand svelte-l4liqa"),j(i,"svelte-fp-flexbox-center",t[4]),I(n,"class",o=d(t[7])+" svelte-l4liqa"),I(n,"style",t[1])},m(e,o,r){$(e,n,o),y(n,i),h&&h.m(i,null),y(n,s),g&&g.m(n,null),f=!0,r&&l(p),p=[k(n,"selectstart",t[8]),k(n,"mousedown",t[30]),k(n,"mouseup",t[31]),k(n,"touchstart",t[32]),k(n,"touchmove",t[33])]},p(t,e){m&&m.p&&67108864&e[0]&&m.p(a(v,t,t[26],null),u(v,t[26],e,null)),16&e[0]&&j(i,"svelte-fp-flexbox-center",t[4]),t[3][0]?g?g.p(t,e):(g=ht(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null),(!f||128&e[0]&&o!==(o=d(t[7])+" svelte-l4liqa"))&&I(n,"class",o),(!f||2&e[0])&&I(n,"style",t[1])},i(e){f||(Z(h,e),Y(()=>{r||(r=nt(n,pt,t[5],!0)),r.run(1)}),f=!0)},o(e){tt(h,e),r||(r=nt(n,pt,t[5],!1)),r.run(0),f=!1},d(t){t&&b(n),h&&h.d(t),g&&g.d(),t&&r&&r.end(),l(p)}}}function ht(t){let e,n,i=t[3],s=[];for(let e=0;e<i.length;e+=1)s[e]=gt(vt(t,i,e));return{c(){e=w("div"),n=w("ul");for(let t=0;t<s.length;t+=1)s[t].c();I(n,"class","svelte-fp-indicator-list-horizontal svelte-l4liqa"),I(e,"class","svelte-fp-indicator-horizontal svelte-l4liqa")},m(t,i){$(t,e,i),y(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,e){if(584&e[0]){let l;for(i=t[3],l=0;l<i.length;l+=1){const o=vt(t,i,l);s[l]?s[l].p(o,e):(s[l]=gt(o),s[l].c(),s[l].m(n,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=i.length}},d(t){t&&b(e),x(s,t)}}}function gt(t){let e,n,i,s,l;function o(...e){return t[29](t[36],...e)}return{c(){e=w("li"),n=w("button"),s=_(),I(n,"class",i="svelte-fp-indicator-list-item-btn "+(t[6]===t[36]?"svelte-fp-active":"")+" svelte-l4liqa"),I(e,"class","svelte-fp-indicator-list-item svelte-l4liqa")},m(t,i,r){$(t,e,i),y(e,n),y(e,s),r&&l(),l=k(n,"click",o)},p(e,s){t=e,64&s[0]&&i!==(i="svelte-fp-indicator-list-item-btn "+(t[6]===t[36]?"svelte-fp-active":"")+" svelte-l4liqa")&&I(n,"class",i)},d(t){t&&b(e),l()}}}function yt(t){let e,n,i,s=t[0]===t[2]&&mt(t);return{c(){s&&s.c(),e=S()},m(l,o,r){s&&s.m(l,o),$(l,e,o),n=!0,r&&i(),i=k(window,"keydown",t[28])},p(t,n){t[0]===t[2]?s?(s.p(t,n),Z(s,1)):(s=mt(t),s.c(),Z(s,1),s.m(e.parentNode,e)):s&&(Q(),tt(s,1,1,()=>{s=null}),V())},i(t){n||(Z(s),n=!0)},o(t){tt(s),n=!1},d(t){s&&s.d(t),t&&b(e),i()}}}function $t(t,e,n){let{class:i=""}=e,{style:s=""}=e,{sectionId:l}=e,{activeSection:o}=e,{slides:r=[]}=e,{activeSlide:c=!1}=e,{center:a=!1}=e,{arrows:u=!1}=e,{select:d=!1}=e,{transitionDuration:f=500}=e,{transition:p={duration:f}}=e;l=parseInt(l);let v,m,h=c,g=0,y=`${i} svelte-fp-section svelte-fp-flexbox-center`;d||(y=`${y} svelte-fp-unselectable`);const $=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}},b=()=>{const t=$(c);t.num<r.length-1?(n(6,h=t.num+1),n(15,c=-h)):(n(15,c=0),n(6,h=c))},x=()=>{const t=$(c);t.num>0?n(15,c=t.num-1):n(15,c=r.length-1),n(6,h=c)},w=t=>{if(t>h)for(;t>h;)b();else for(;t<h;)x()},q=t=>{if(u)switch(t.key){case"ArrowLeft":x();break;case"ArrowRight":b()}},_=t=>{v=t.screenX},S=t=>{const e=t.screenX;v-e>100?b():v-e<-100&&x()},k=t=>{m=t.touches[0].screenX},I=t=>{let e=(new Date).getTime();const n=t.touches[0].screenX;f<e-g&&(m-n>100?(b(),g=e):m-n<-100&&(x(),g=e))};let{$$slots:j={},$$scope:E}=e;return t.$set=t=>{"class"in t&&n(16,i=t.class),"style"in t&&n(1,s=t.style),"sectionId"in t&&n(0,l=t.sectionId),"activeSection"in t&&n(2,o=t.activeSection),"slides"in t&&n(3,r=t.slides),"activeSlide"in t&&n(15,c=t.activeSlide),"center"in t&&n(4,a=t.center),"arrows"in t&&n(17,u=t.arrows),"select"in t&&n(18,d=t.select),"transitionDuration"in t&&n(19,f=t.transitionDuration),"transition"in t&&n(5,p=t.transition),"$$scope"in t&&n(26,E=t.$$scope)},[l,s,o,r,a,p,h,y,()=>{if(!d)return!1},w,q,_,S,k,I,c,i,u,d,f,v,m,g,$,b,x,E,j,t=>q(t),t=>w(t),t=>_(t),t=>S(t),t=>k(t),t=>I(t)]}function bt(t){let i,s,r,f,v;const m=t[9].default,h=c(m,t,t[8],null),y=h||{c:e,m:e,d:e};return{c(){i=w("div"),y&&y.c(),I(i,"class",s=d(`${t[4]} svelte-fp-content`)+" svelte-1jzpibp"),I(i,"style",t[5]),j(i,"svelte-fp-flexbox-center",t[6])},m(t,e){$(t,i,e),y&&y.m(i,null),v=!0},p(t,e){h&&h.p&&256&e&&h.p(a(m,t,t[8],null),u(m,t[8],e,null)),(!v||16&e&&s!==(s=d(`${t[4]} svelte-fp-content`)+" svelte-1jzpibp"))&&I(i,"class",s),(!v||32&e)&&I(i,"style",t[5]),80&e&&j(i,"svelte-fp-flexbox-center",t[6])},i(s){v||(Z(y,s),Y(()=>{f&&f.end(1),r||(r=function(t,i,s){let l,r,c=i(t,s),a=!1,u=0;function d(){l&&C(t,l)}function f(){const{delay:i=0,duration:s=300,easing:o=n,tick:f=e,css:v}=c||et;v&&(l=F(t,0,1,s,i,o,v,u++)),f(0,1);const m=p()+i,h=m+s;r&&r.abort(),a=!0,Y(()=>H(t,!0,"start")),r=g(e=>{if(a){if(e>=h)return f(1,0),H(t,!0,"end"),d(),a=!1;if(e>=m){const t=o((e-m)/s);f(t,1-t)}}return a})}let v=!1;return{start(){v||(C(t),o(c)?(c=c(),G().then(f)):f())},invalidate(){v=!1},end(){a&&(d(),a=!1)}}}(i,ft,t[2])),r.start()}),v=!0)},o(s){tt(y,s),r&&r.invalidate(),f=function(t,i,s){let r,c=i(t,s),a=!0;const u=K;function d(){const{delay:i=0,duration:s=300,easing:o=n,tick:d=e,css:f}=c||et;f&&(r=F(t,1,0,s,i,o,f));const v=p()+i,m=v+s;Y(()=>H(t,!1,"start")),g(e=>{if(a){if(e>=m)return d(0,1),H(t,!1,"end"),--u.r||l(u.c),!1;if(e>=v){const t=o((e-v)/s);d(1-t,t)}}return a})}return u.r+=1,o(c)?G().then(()=>{c=c(),d()}):d(),{end(e){e&&c.tick&&c.tick(1,0),a&&(r&&C(t,r),a=!1)}}}(i,ft,t[3]),v=!1},d(t){t&&b(i),y&&y.d(t),t&&f&&f.end()}}}function xt(t){let e,n,i=t[0]===t[1]&&bt(t);return{c(){i&&i.c(),e=S()},m(t,s){i&&i.m(t,s),$(t,e,s),n=!0},p(t,[n]){t[0]===t[1]?i?(i.p(t,n),Z(i,1)):(i=bt(t),i.c(),Z(i,1),i.m(e.parentNode,e)):i&&(Q(),tt(i,1,1,()=>{i=null}),V())},i(t){n||(Z(i),n=!0)},o(t){tt(i),n=!1},d(t){i&&i.d(t),t&&b(e)}}}function wt(t,e,n){let{class:i=""}=e,{style:s=""}=e,{slideId:l}=e,{activeSlide:o}=e,{center:r=!1}=e,{transitionIn:c={duration:250,x:-200}}=e,{transitionOut:a={duration:250,x:200}}=e;l=parseInt(l);const u=t=>{let e=!1;return t<0&&(e=!0,t=-t),{num:t,negative:e}};let{$$slots:d={},$$scope:f}=e;return t.$set=t=>{"class"in t&&n(4,i=t.class),"style"in t&&n(5,s=t.style),"slideId"in t&&n(0,l=t.slideId),"activeSlide"in t&&n(1,o=t.activeSlide),"center"in t&&n(6,r=t.center),"transitionIn"in t&&n(2,c=t.transitionIn),"transitionOut"in t&&n(3,a=t.transitionOut),"$$scope"in t&&n(8,f=t.$$scope)},t.$$.update=()=>{if(2&t.$$.dirty){const t=u(o);t.negative?(n(2,c.x=200,c),n(3,a.x=-200,a)):(n(2,c.x=-200,c),n(3,a.x=200,a)),n(1,o=t.num)}},[l,o,c,a,i,s,r,u,f,d]}t.Fullpage=class extends lt{constructor(t){var e;super(),document.getElementById("svelte-1uq79ci-style")||((e=w("style")).id="svelte-1uq79ci-style",e.textContent=".svelte-fp-wrapper.svelte-1uq79ci{height:100vh;overflow:hidden;left:0;right:0;top:0;bottom:0}.svelte-fp-container.svelte-1uq79ci{height:inherit;width:inherit;position:relative}.svelte-fp-indicator.svelte-1uq79ci{height:inherit;width:5rem;overflow:hidden;position:absolute;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list.svelte-1uq79ci{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-1uq79ci{margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-1uq79ci{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-1uq79ci{background-color:#767676}@media only screen and (max-width: 600px){.svelte-fp-indicator.svelte-1uq79ci{width:2rem}.svelte-fp-indicator-list.svelte-1uq79ci{margin:0.3rem;padding:0.3rem}.svelte-fp-indicator-list-item-btn.svelte-1uq79ci{width:0.5rem;height:0.5rem;border-radius:0.25rem}}",y(document.head,e)),st(this,t,ut,ct,r,{class:10,style:1,activeSection:0,sections:2,transitionDuration:11,arrows:12,drag:13},[-1,-1])}},t.FullpageSection=class extends lt{constructor(t){var e;super(),document.getElementById("svelte-l4liqa-style")||((e=w("style")).id="svelte-l4liqa-style",e.textContent="section.svelte-l4liqa{height:inherit;position:relative}.svelte-fp-flexbox-expand.svelte-l4liqa{flex:1}.svelte-fp-container.svelte-l4liqa{height:inherit;width:inherit;position:relative}.svelte-fp-flexbox-center.svelte-l4liqa{display:flex;justify-content:center;align-items:center}.svelte-fp-unselectable.svelte-l4liqa{user-select:none}.svelte-fp-indicator-horizontal.svelte-l4liqa{width:inherit;height:5rem;overflow:hidden;position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}.svelte-fp-indicator-list-horizontal.svelte-l4liqa{margin:1rem;padding:1rem;list-style-type:none}.svelte-fp-indicator-list-item.svelte-l4liqa{display:inline-block;margin:1rem;padding:0}.svelte-fp-indicator-list-item-btn.svelte-l4liqa{width:1rem;height:1rem;border-radius:0.5rem;border:solid 1px #767676;background-color:transparent}.svelte-fp-active.svelte-l4liqa{background-color:#767676}",y(document.head,e)),st(this,t,$t,yt,r,{class:16,style:1,sectionId:0,activeSection:2,slides:3,activeSlide:15,center:4,arrows:17,select:18,transitionDuration:19,transition:5},[-1,-1])}},t.FullpageSlide=class extends lt{constructor(t){var e;super(),document.getElementById("svelte-1jzpibp-style")||((e=w("style")).id="svelte-1jzpibp-style",e.textContent=".svelte-fp-content.svelte-1jzpibp{height:inherit;width:inherit;position:absolute;left:0;right:0;top:0;bottom:0}.svelte-fp-flexbox-center.svelte-1jzpibp{display:flex;justify-content:center;align-items:center}",y(document.head,e)),st(this,t,wt,xt,r,{class:4,style:5,slideId:0,activeSlide:1,center:6,transitionIn:2,transitionOut:3})}},Object.defineProperty(t,"__esModule",{value:!0})}));
