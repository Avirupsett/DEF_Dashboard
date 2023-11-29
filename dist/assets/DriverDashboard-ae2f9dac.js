import{_ as L}from"./index-9709244e.js";import{r as i,j as e,t as S,f as me,R}from"./vendor-f48e548e.js";import{f as pe,F as w,b as fe,G as ue,g as xe,h as ge,i as he,j as ve,k as be,B as ye}from"./index.esm-a6c8702e.js";import{G as ee,c as je,a as G}from"./axios-aa9cae93.js";import{g as Ce,d as Ne,k as $,e as B,j as d,b as g,l as D,f as ke,_ as Te,c as Se,h as we,m as Pe,n as Be,i as Ie}from"./assertThisInitialized-46084dcb.js";import{u as _e}from"./useTheme-8d3c7519.js";import{T as ze}from"./ThemeProvider-6ac86476.js";import{T as Le,a as H}from"./ToggleButtonGroup-1a585ab5.js";import{S as P}from"./Skeleton-26b4d238.js";function Re(r){return Ce("MuiLinearProgress",r)}Ne("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const $e=["className","color","value","valueBuffer","variant"];let h=r=>r,V,W,K,Y,X,Q;const z=4,De=$(V||(V=h`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),Fe=$(W||(W=h`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Me=$(K||(K=h`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Ae=r=>{const{classes:t,variant:a,color:o}=r,v={root:["root",`color${d(o)}`,a],dashed:["dashed",`dashedColor${d(o)}`],bar1:["bar",`barColor${d(o)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${d(o)}`,a==="buffer"&&`color${d(o)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return we(v,Re,t)},F=(r,t)=>t==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${t}Bg`]:r.palette.mode==="light"?Pe(r.palette[t].main,.62):Be(r.palette[t].main,.5),Oe=B("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.root,t[`color${d(a.color)}`],t[a.variant]]}})(({ownerState:r,theme:t})=>g({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:F(t,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),Je=B("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.dashed,t[`dashedColor${d(a.color)}`]]}})(({ownerState:r,theme:t})=>{const a=F(t,r.color);return g({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},D(Y||(Y=h`
    animation: ${0} 3s infinite linear;
  `),Me)),Ee=B("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.bar,t[`barColor${d(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&t.bar1Indeterminate,a.variant==="determinate"&&t.bar1Determinate,a.variant==="buffer"&&t.bar1Buffer]}})(({ownerState:r,theme:t})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(t.vars||t).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${z}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${z}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&D(X||(X=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),De)),Ue=B("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,t)=>{const{ownerState:a}=r;return[t.bar,t[`barColor${d(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&t.bar2Indeterminate,a.variant==="buffer"&&t.bar2Buffer]}})(({ownerState:r,theme:t})=>g({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(t.vars||t).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:F(t,r.color),transition:`transform .${z}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&D(Q||(Q=h`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),Fe)),qe=i.forwardRef(function(t,a){const o=ke({props:t,name:"MuiLinearProgress"}),{className:v,color:N="primary",value:b,valueBuffer:y,variant:c="indeterminate"}=o,j=Te(o,$e),f=g({},o,{color:N,variant:c}),m=Ae(f),k=_e(),p={},u={bar1:{},bar2:{}};if((c==="determinate"||c==="buffer")&&b!==void 0){p["aria-valuenow"]=Math.round(b),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let n=b-100;k.direction==="rtl"&&(n=-n),u.bar1.transform=`translateX(${n}%)`}if(c==="buffer"&&y!==void 0){let n=(y||0)-100;k.direction==="rtl"&&(n=-n),u.bar2.transform=`translateX(${n}%)`}return e.jsxs(Oe,g({className:Se(m.root,v),ownerState:f,role:"progressbar"},p,{ref:a},j,{children:[c==="buffer"?e.jsx(Je,{className:m.dashed,ownerState:f}):null,e.jsx(Ee,{className:m.bar1,ownerState:f,style:u.bar1}),c==="determinate"?null:e.jsx(Ue,{className:m.bar2,ownerState:f,style:u.bar2})]}))}),Ge=qe;function He({distanceCovered:r,drivingTime:t,idleTime:a,averageSpeed:o}){return e.jsxs("div",{className:"row gap-2 mx-0 mb-3 d-flex align-items-stretch justify-content-center",children:[e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1 ",style:{width:"44%",fontSize:"12px",boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"white"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(pe,{className:"me-1 text-success",style:{marginBottom:"2px",fontSize:"16px"}}),S("Driving Time")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[w(t)," ",e.jsx("span",{className:"fs-5",children:"hrs"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1 ",style:{width:"44%",fontSize:"12px",boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"white"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(fe,{className:"me-1 text-danger",style:{marginBottom:"3px",fontSize:"16px"}}),S("Distance Covered")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[w(r)," ",e.jsx("span",{className:"fs-5",children:"km"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1 ",style:{width:"44%",fontSize:"12px",boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"white"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(ue,{className:"me-1 text-success",style:{marginBottom:"3px",fontSize:"16px"}}),S("Idle Time")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[w(a)," ",e.jsx("span",{className:"fs-5",children:"hrs"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1 ",style:{width:"44%",fontSize:"12px",boxShadow:"0.1rem 0.2rem .4rem rgba(0,0,0,.075)",backgroundColor:"white"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(xe,{className:"me-2 text-primary",style:{marginBottom:"2px",fontSize:"16px"}}),S("Average Speed")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[w(o)," ",e.jsx("span",{className:"fs-5",children:"km/hr"})]})]})]})}function dr(r){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"}},{tag:"path",attr:{d:"M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"}}]})(r)}function Ve(r){return ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"}}]})(r)}const We="/assets/WelcomeBg.png",Ke="/assets/PathVe.svg";function Ye({name:r}){return e.jsx("div",{className:"",style:{height:"100vh",background:`url(${We})`,backgroundSize:"cover"},children:e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column px-4",style:{height:"100vh",backgroundColor:"rgb(216 236 242 / 70%)",fontFamily:"Poppins"},children:[e.jsx("div",{className:"display-1 fw-semibold text-dark mt-2",children:"Welcome"}),e.jsx("div",{className:"fs-1 lh-lg text-dark mb-4",children:r}),e.jsx("img",{src:Ke,style:{width:"17rem"}}),e.jsx("div",{className:"px-4 fs-6 text-center mt-4 mb-4 text-dark",children:'"Start Your First Trip and Monitor Your Trip on the Dashboard."'}),e.jsxs("div",{className:"mt-2 mb-4 text-center",children:["Tap the menu ",e.jsx(ge,{})," to start Your Trip"]})]})})}const Z=R.lazy(()=>L(()=>import("./TankerLevel-da152c9e.js"),["assets/TankerLevel-da152c9e.js","assets/vendor-f48e548e.js","assets/installSVGRenderer-7788c1a1.js"])),Xe=R.lazy(()=>L(()=>import("./Mytrips-7266b5c7.js"),["assets/Mytrips-7266b5c7.js","assets/vendor-f48e548e.js","assets/index.esm-a6c8702e.js","assets/axios-aa9cae93.js","assets/Tab-a45b3d1d.js","assets/assertThisInitialized-46084dcb.js","assets/react-is.production.min-3a7c3723.js","assets/useTheme-8d3c7519.js","assets/createSvgIcon-22bfe507.js","assets/index-9709244e.js","assets/index-74b21cfb.css","assets/ThemeProvider-6ac86476.js","assets/ToggleButtonGroup-1a585ab5.js","assets/Skeleton-26b4d238.js"])),Qe=R.lazy(()=>L(()=>import("./prevJourney-a50f353b.js"),["assets/prevJourney-a50f353b.js","assets/vendor-f48e548e.js"]));function Ze(){const r=new URLSearchParams(window.location.search),{t,i18n:a}=me(),[o,v]=i.useState({}),[N,b]=i.useState([]),[y,c]=i.useState([]),[j,f]=i.useState(0),[m,k]=i.useState(0),[p,u]=i.useState(0),[n,re]=i.useState(0),[x,te]=i.useState({name:".........",licenceNo:"....",ContactNo:".........."}),[M,ae]=i.useState({filllevel:"",emptylevel:0}),[A,se]=i.useState({filllevel:"",emptylevel:0}),[ie,O]=i.useState(!1),[J,E]=i.useState(!0),[l,oe]=i.useState("Current"),ne=()=>{O(!0),setTimeout(()=>{O(!1)},2500)},U=s=>{E(!1),v(s),f(s.distanceCovered.toFixed(1)),k(s.drivingTime.toFixed(1)),u(s.idleTime.toFixed(1)),re(s.averageSpeed.toFixed(1)),te({name:s.profile.driverName,licenceNo:s.profile.driverLicenceNo,ContactNo:s.profile.driverContactNo}),ae({filllevel:s.graph1.totalTankFuel-s.graph1.fuelUnloaded,emptylevel:s.graph1.fuelUnloaded}),se({filllevel:s.graph2.totalJob-s.graph2.jobCompleted,emptylevel:s.graph2.jobCompleted}),b(s.prevJourney),c(s.myTrip)},I=async()=>{try{a.changeLanguage(r.get("lang")||"en");let s="";const C=r.get("jwtToken");C&&(s=JSON.parse(atob(C.split(".")[1])));const q=r.get("driverId");if(q){let T=await G.get(`https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/dashboard/driver/metrics/${q}`);const{data:_}=T;U(_)}else if(s){const T=s.sub;if(T){let _=await G.get(`https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/dashboard/driver/metrics/${T}`);const{data:ce}=_;U(ce)}}}catch(s){console.log(s),E(!1)}};i.useEffect(()=>{I();const s=setInterval(I,3e5);return()=>clearInterval(s)},[]);const le=Ie({typography:{button:{textTransform:"none"}}}),de=(s,C)=>{C!==null&&oe(C)};return e.jsx(e.Fragment,{children:(j===0||j==="0.0")&&(m===0||m==="0.0")&&(p===0||p==="0.0")&&y.length===0&&N.length===0?J?e.jsx(e.Fragment,{}):e.jsx(Ye,{name:x.name}):J?e.jsx(e.Fragment,{}):e.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",height:"100vh"},children:[e.jsxs("div",{className:"py-0 pb-1",style:{borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px",backgroundColor:"#d0e8f0d4"},children:[e.jsxs("div",{className:"px-3 pt-3 pb-1 d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"fs-2 ",style:{letterSpacing:".8px",fontWeight:500,color:"var(--driver-primary)"},children:[t("Hello"),","]}),e.jsx("div",{className:"fs-1 lh-1",style:{letterSpacing:".5px",fontWeight:500,color:"var(--driver-primary)"},children:x.name}),e.jsxs("div",{className:"text-secondary ",style:{letterSpacing:"0px",lineHeight:1.75,fontSize:14,marginTop:"8px"},children:[e.jsx(he,{style:{marginBottom:"4px",fontSize:"12px"}})," +91 ",x.ContactNo.slice(0,5)," ",x.ContactNo.slice(5)]}),x.licenceNo!==""?e.jsxs("div",{className:"text-secondary ",style:{letterSpacing:"0px",lineHeight:.25,fontSize:14},children:[e.jsx(ve,{style:{marginBottom:"2px",marginRight:"0px"}})," ",e.jsx("span",{style:{fontSize:"12px"},children:"(lic.)"})," ",x.licenceNo]}):null]}),e.jsxs("div",{className:"mx-2",children:[e.jsx(be,{className:"display-5 mb-1 mx-1",style:{color:"var(--driver-primary)"},onClick:()=>{I(),ne()}}),ie?e.jsx(Ge,{color:"info"}):e.jsx("span",{style:{minHeight:"4px",position:"relative",overflow:"hidden",display:"block",height:"4px",zIndex:0}})]})]}),e.jsx("div",{className:"display-6 fw-semibold px-3 pt-3 pb-2",style:{color:"var(--driver-primary)",letterSpacing:".5px"},children:e.jsxs("div",{className:"d-flex align-items-center justify-content-between",style:{backgroundColor:"#d8ecf2",paddingRight:"0px"},children:[e.jsxs("div",{children:[e.jsx(ye,{className:"",style:{marginBottom:"3px",display:"inline-block",verticalAlign:"bottom",marginRight:"10px",color:"var(--driver-primary)"}}),t("Metrics")]}),e.jsx(ze,{theme:le,children:e.jsxs(Le,{size:"small",value:l,exclusive:!0,onChange:de,"aria-label":"Platform",style:{fontFamily:'"Public Sans", sans-serif !important'},children:[e.jsx(H,{style:{padding:"2px 6px",height:"fit-content",color:l=="Current"?"white":"var(--text-color)",backgroundColor:l=="Current"?"var(--driver-primary)":"transparent"},className:"fw-bold",value:"Current",children:t("Current")}),e.jsx(H,{style:{padding:"2px 6px",height:"fit-content",color:l=="All Time"?"white":"var(--text-color)",backgroundColor:l=="All Time"?"var(--driver-primary)":"transparent"},className:"fw-bold",value:"All Time",children:t("All Time")})]})})]})}),e.jsx(He,{distanceCovered:l=="Current"?j:o.alltime.distanceCovered.toFixed(1),drivingTime:l=="Current"?m:o.alltime.drivingTime.toFixed(1),idleTime:l=="Current"?p:o.alltime.idleTime.toFixed(1),averageSpeed:l=="Current"?n:o.alltime.averageSpeed.toFixed(1)})]}),e.jsxs("div",{className:"ms-4 me-4 d-flex align-items-center justify-content-between",style:{marginTop:"10px"},children:[e.jsx(i.Suspense,{fallback:e.jsx(P,{variant:"rounded",style:{paddingTop:"165px",borderRadius:"8px",width:"45%"}}),children:e.jsx(Z,{title:"Tanker Fuel Level",filllevel:M.filllevel,emptylevel:M.emptylevel,fillTitle:"Fuel Left",emptyTitle:"Fuel Unloaded"})}),e.jsx(i.Suspense,{fallback:e.jsx(P,{variant:"rounded",style:{paddingTop:"165px",borderRadius:"8px",width:"45%"}}),children:e.jsx(Z,{title:"Jobs Completed",filllevel:A.emptylevel,emptylevel:A.filllevel,fillTitle:"Job Done",emptyTitle:"Job Left"})})]}),e.jsx("div",{className:"display-6 text-dark fw-semibold px-3 pt-4 pb-2",style:{color:"var(--driver-primary)",letterSpacing:".5px"},children:e.jsxs("div",{style:{backgroundColor:"white",display:"inline-block",position:"relative",zIndex:1,paddingRight:"10px"},children:[e.jsx(Ve,{className:"display-5",style:{marginBottom:"3px",verticalAlign:"bottom",marginRight:"10px",color:"var(--driver-primary)"}}),t("My Trips")]})}),e.jsx(i.Suspense,{fallback:e.jsx(P,{variant:"rounded",style:{paddingTop:"250px",borderRadius:"8px",width:"100%"}}),children:e.jsx(Xe,{myTrip:y})}),e.jsx("div",{className:"display-6 text-dark fw-semibold px-3 pt-4 pb-3",style:{display:"flex",justifyContent:"space-between"},children:e.jsxs("div",{children:[e.jsx(je,{className:"display-5",style:{marginBottom:"3px",verticalAlign:"bottom",marginRight:"12px",color:"#4b8587"}}),t("Prev Journey")]})}),e.jsx(i.Suspense,{fallback:e.jsx(P,{variant:"rounded",style:{paddingTop:"250px",borderRadius:"8px",width:"100%"}}),children:e.jsx(Qe,{prevJourney:N})})]})})}const cr=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"}));export{dr as B,cr as D};
