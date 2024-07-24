const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.DnQi6Uae.js","_astro/preload-helper.BiBI96sQ.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./preload-helper.BiBI96sQ.js";class w extends HTMLElement{constructor(){super();const t=this.querySelector("select");t&&t.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=e.currentTarget.value)})}}customElements.define("starlight-lang-select",w);class L extends HTMLElement{constructor(){super();const t=this.querySelector("button[data-open-modal]"),e=this.querySelector("button[data-close-modal]"),n=this.querySelector("dialog"),s=this.querySelector(".dialog-frame"),o=i=>{("href"in(i.target||{})||document.body.contains(i.target)&&!s.contains(i.target))&&u()},r=i=>{n.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),i?.stopPropagation(),window.addEventListener("click",o)},u=()=>n.close();t.addEventListener("click",r),t.disabled=!1,e.addEventListener("click",u),n.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",o)}),window.addEventListener("keydown",i=>{(i.metaKey===!0||i.ctrlKey===!0)&&i.key==="k"&&(n.open?u():r(),i.preventDefault())});let m={};try{m=JSON.parse(this.dataset.translations||"{}")}catch{}const l=this.dataset.stripTrailingSlash!==void 0?i=>i.replace(/(.)\/(#.*)?$/,"$1$2"):i=>i;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(h=>setTimeout(h,1)))(async()=>{const{PagefindUI:h}=await v(async()=>{const{PagefindUI:d}=await import("./ui-core.DnQi6Uae.js");return{PagefindUI:d}},__vite__mapDeps([0,1]));new h({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:m,showSubResults:!0,processResult:d=>{d.url=l(d.url),d.sub_results=d.sub_results.map(f=>(f.url=l(f.url),f))}})})})}}customElements.define("site-search",L);const b="starlight-theme",y=c=>c==="auto"||c==="dark"||c==="light"?c:"auto",S=()=>y(typeof localStorage<"u"&&localStorage.getItem(b));function x(c){typeof localStorage<"u"&&localStorage.setItem(b,c==="light"||c==="dark"?c:"")}const k=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function E(c){StarlightThemeProvider.updatePickers(c),document.documentElement.dataset.theme=c==="auto"?k():c,x(c)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{S()==="auto"&&E("auto")});class q extends HTMLElement{constructor(){super(),E(S()),this.querySelector("select")?.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&E(y(t.currentTarget.value))})}}customElements.define("starlight-theme-select",q);class g extends HTMLElement{static#e=new Map;#t;constructor(){super();const t=this.querySelector('[role="tablist"]');if(this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.#t=this.dataset.syncKey,this.#t){const e=g.#e.get(this.#t)??[];e.push(this),g.#e.set(this.#t,e)}this.tabs.forEach((e,n)=>{e.addEventListener("click",s=>{s.preventDefault();const o=t.querySelector('[aria-selected="true"]');s.currentTarget!==o&&this.switchTab(s.currentTarget,n)}),e.addEventListener("keydown",s=>{const o=this.tabs.indexOf(s.currentTarget),r=s.key==="ArrowLeft"?o-1:s.key==="ArrowRight"?o+1:s.key==="Home"?0:s.key==="End"?this.tabs.length-1:null;r!==null&&this.tabs[r]&&(s.preventDefault(),this.switchTab(this.tabs[r],r))})})}switchTab(t,e,n=!0){if(!t)return;const s=n?this.getBoundingClientRect().top:0;this.tabs.forEach(r=>{r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const o=this.panels[e];o&&(o.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),n&&(t.focus(),g.#n(this,t.innerText),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-s)}))}static#n(t,e){const n=t.#t;if(!n||!e)return;const s=g.#e.get(n);if(s)for(const o of s){if(o===t)continue;const r=o.tabs.findIndex(u=>u.innerText===e);r!==-1&&o.switchTab(o.tabs[r],r,!1)}}}customElements.define("starlight-tabs",g);const H="_top";class T extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const t=[...this.querySelectorAll("a")],e=a=>{if(a instanceof HTMLHeadingElement){if(a.id===H)return!0;const l=a.tagName[1];if(l){const i=parseInt(l,10);if(i>=this.minH&&i<=this.maxH)return!0}}return!1},n=a=>{if(!a)return null;const l=a;for(;a;){if(e(a))return a;for(a=a.previousElementSibling;a?.lastElementChild;)a=a.lastElementChild;const i=n(a);if(i)return i}return n(l.parentElement)},s=a=>{for(const{isIntersecting:l,target:i}of a){if(!l)continue;const h=n(i);if(!h)continue;const d=t.find(f=>f.hash==="#"+encodeURIComponent(h.id));if(d){this.current=d;break}}},o=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let r;const u=()=>{r&&r.disconnect(),r=new IntersectionObserver(s,{rootMargin:this.getRootMargin()}),o.forEach(a=>r.observe(a))};u();const m=window.requestIdleCallback||(a=>setTimeout(a,1));let p;window.addEventListener("resize",()=>{r&&r.disconnect(),clearTimeout(p),p=setTimeout(()=>m(u),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){const t=document.querySelector("header")?.getBoundingClientRect().height||0,e=this.querySelector("summary")?.getBoundingClientRect().height||0,n=t+e+32,s=n+53,o=document.documentElement.clientHeight;return`-${n}px 0% ${s-o}px`}}customElements.define("starlight-toc",T);class I extends T{set current(t){super.current=t;const e=this.querySelector(".display-current");e&&(e.textContent=t.textContent)}constructor(){super();const t=this.querySelector("details");if(!t)return;const e=()=>{t.open=!1};t.querySelectorAll("a").forEach(n=>{n.addEventListener("click",e)}),window.addEventListener("click",n=>{t.contains(n.target)||e()}),window.addEventListener("keydown",n=>{if(n.key==="Escape"&&t.open){const s=t.contains(document.activeElement);if(e(),s){const o=t.querySelector("summary");o&&o.focus()}}})}}customElements.define("mobile-starlight-toc",I);class M extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const t=this.closest("nav");t&&t.addEventListener("keyup",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t){t.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",M);
