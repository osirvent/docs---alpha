import{_ as k}from"./ProseCodeIcon.vue.c888e378.js";import{d as x,aZ as C,ag as B,ah as w,r as I,E as b,b as n,c as p,e as f,F as $,a7 as A,n as m,aA as e,g as D,t as E,a8 as F,b0 as G,aa as N}from"./entry.18d49812.js";const P=["onClick"],z=x({inheritAttrs:!1,__name:"CodeGroup",props:{class:{}},setup(g){const v={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},y=g,c=C(),{ui:s,attrs:_}=B("content.codeGroup",void 0,v,w(y,"class"),!0),l=I(0),u=b(()=>{var o;return((o=c.default)==null?void 0:o.call(c).map((a,i)=>{var r,t,d;return{label:((r=a.props)==null?void 0:r.filename)||((t=a.props)==null?void 0:t.label)||`${i}`,icon:(d=a.props)==null?void 0:d.icon,component:a}}))||[]}),h=b(()=>u.value.find((o,a)=>a===l.value));return(o,a)=>{const i=k;return n(),p("div",N({class:e(s).wrapper},e(_)),[f("div",{class:m(e(s).header)},[(n(!0),p($,null,A(e(u),(r,t)=>(n(),p("button",{key:t,tabindex:"-1",class:m([e(s).tab.base,e(l)===t?e(s).tab.active:e(s).tab.inactive]),onClick:d=>l.value=t},[D(i,{icon:r.icon,filename:r.label,class:m(e(s).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,E(r.label),1)],10,P))),128))],2),(n(),F(G(e(h).component),{"hide-header":""}))],16)}}});export{z as default};
