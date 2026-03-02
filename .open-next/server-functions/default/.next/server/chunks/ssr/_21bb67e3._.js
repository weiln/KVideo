module.exports=[38783,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactServerDOMTurbopackClient},35112,(a,b,c)=>{"use strict";b.exports=a.r(42602).vendored["react-ssr"].ReactDOM},34904,a=>{"use strict";var b=a.i(87924);function c({children:a,className:c="",hover:d=!0,blur:e=!0,onClick:f,style:g}){let h=`
    ${e?"bg-[var(--glass-bg)]":"bg-[var(--bg-color)]/90"}
    rounded-[var(--radius-2xl)]
    shadow-[0_2px_8px_var(--shadow-color)] md:shadow-[var(--shadow-md)]
    border
    border-[var(--glass-border)]
    p-4 md:p-6
    relative
    ${d?"hover:translate-y-[-2px] hover:shadow-[0_8px_24px_var(--shadow-color)] cursor-pointer transition-transform duration-200 ease-out":""}
    ${c}
  `;return f?(0,b.jsx)("button",{type:"button",onClick:f,className:`${h} text-left w-full`,style:g,children:a}):(0,b.jsx)("div",{className:h,style:g,children:a})}a.s(["Card",()=>c])},12466,a=>{"use strict";var b=a.i(87924);let c=(0,a.i(72131).forwardRef)(({variant:a="primary",children:c,className:d="",...e},f)=>{let g={primary:`
      bg-[var(--accent-color)] 
      text-white 
      border-none 
      rounded-[var(--radius-2xl)] 
      shadow-[0_2px_8px_color-mix(in_srgb,var(--shadow-color)_50%,transparent)]
      hover:brightness-110 
      hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--shadow-color)_70%,transparent)]
      active:scale-[0.98] 
      active:brightness-95
    `,secondary:`
      bg-[var(--glass-bg)] 
      backdrop-blur-xl
      [-webkit-backdrop-filter:blur(25px)_saturate(180%)]
      saturate-[180%]
      border 
      border-[var(--glass-border)] 
      rounded-[var(--radius-2xl)]
      text-[var(--text-color)]
      shadow-[0_2px_8px_color-mix(in_srgb,var(--shadow-color)_50%,transparent)]
      hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--shadow-color)_70%,transparent)]
      active:scale-[0.98]
    `,ghost:`
      bg-transparent
      text-[var(--text-color)]
      hover:bg-[var(--glass-border)]
      active:scale-[0.98]
    `};return(0,b.jsx)("button",{ref:f,className:`inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 font-semibold text-sm md:text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation cursor-pointer ${g[a]} ${d}`,...e,children:c})});c.displayName="Button",a.s(["Button",0,c])},57581,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(12466),e=a.i(34904);function f({isOpen:a,title:f,message:g,onConfirm:h,onCancel:i,confirmText:j="确认",cancelText:k="取消",variant:l="warning",dangerous:m=!1}){let n=(0,c.useRef)(null),o=(0,c.useRef)(null);return((0,c.useEffect)(()=>(a?(o.current?.focus(),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),(0,c.useEffect)(()=>{if(!a)return;let b=a=>{"Escape"===a.key&&(a.preventDefault(),i())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[a,i]),a)?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm animate-fade-in",onClick:i,"aria-hidden":"true"}),(0,b.jsx)("div",{ref:n,role:"alertdialog","aria-modal":"true","aria-labelledby":"dialog-title","aria-describedby":"dialog-description",className:"fixed top-1/2 left-1/2 z-[9999] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-slide-up",children:(0,b.jsxs)(e.Card,{className:"p-6",children:[(0,b.jsx)("h2",{id:"dialog-title",className:"text-xl font-semibold text-[var(--text-color)] mb-3",children:f}),(0,b.jsx)("p",{id:"dialog-description",className:"text-[var(--text-color-secondary)] mb-6 leading-relaxed",children:g}),(0,b.jsxs)("div",{className:"flex gap-3 justify-end",children:[(0,b.jsx)(d.Button,{ref:o,variant:"secondary",onClick:i,className:"min-w-[100px]",children:k}),(0,b.jsx)(d.Button,{onClick:h,className:`min-w-[100px] ${{danger:"bg-red-500 hover:bg-red-600",warning:"bg-[var(--accent-color)] hover:brightness-110",info:"bg-blue-500 hover:bg-blue-600"}[m?"danger":l]}`,children:j})]})]})})]}):null}a.s(["ConfirmDialog",()=>f])},41759,a=>{"use strict";function b(){return{sources:[],danmakuApis:[],activeDanmakuApiId:null}}function c(a){}a.i(36608);let d={listeners:new Set,subscribe(a){return this.listeners.add(a),()=>{this.listeners.delete(a)}},notifyListeners(){this.listeners.forEach(a=>a())},getState:b,getSources:()=>b().sources,getDanmakuApis:()=>b().danmakuApis,getActiveDanmakuApi(){let a=b();return a.activeDanmakuApiId?a.danmakuApis.find(b=>b.id===a.activeDanmakuApiId)??null:null},addSource(a){let d=b();d.sources.find(b=>b.id===a.id)||c({...d,sources:[...d.sources,{...a,enabled:!0}]})},removeSource(a){let d=b();c({...d,sources:d.sources.filter(b=>b.id!==a)})},toggleSource(a){let d=b();c({...d,sources:d.sources.map(b=>b.id===a?{...b,enabled:!b.enabled}:b)})},addDanmakuApi(a){let d=b();d.danmakuApis.find(b=>b.id===a.id)||c({...d,danmakuApis:[...d.danmakuApis,a]})},removeDanmakuApi(a){let d=b(),e=d.danmakuApis.filter(b=>b.id!==a),f=d.activeDanmakuApiId===a?null:d.activeDanmakuApiId;c({...d,danmakuApis:e,activeDanmakuApiId:f})},setActiveDanmakuApi(a){c({...b(),activeDanmakuApiId:a})}};a.s(["userSourcesStore",0,d])},63760,a=>{"use strict";let b={getSettings:()=>({sortBy:"default",autoNextEpisode:!0,autoSkipIntro:!1,skipIntroSeconds:0,autoSkipOutro:!1,skipOutroSeconds:0,showModeIndicator:!1,adFilterMode:"heuristic",fullscreenType:"auto",proxyMode:"retry",realtimeLatency:!1,searchDisplayMode:"normal",episodeReverseOrder:!1,rememberScrollPosition:!0,personalizedRecommendations:!0,danmakuEnabled:!1,danmakuApiUrl:process.env.NEXT_PUBLIC_DANMAKU_API_URL||"",danmakuOpacity:.7,danmakuFontSize:20,danmakuDisplayArea:.5}),listeners:new Set,subscribe(a){return this.listeners.add(a),()=>{this.listeners.delete(a)}},notifyListeners(){this.listeners.forEach(a=>a())},saveSettings(a){}};a.s(["premiumModeSettingsStore",0,b])}];

//# sourceMappingURL=_21bb67e3._.js.map