import{a as Q,t as C,u as ge,b as se,s as fe,e as xe,c as he,d as _e,f as Se,g as $e,r as t,h as we,j as e,F as Pe,i as Te,k as De,l as Ee,D as ke,m as Oe,S as h,n as U,E as ye,I as Re,o as de,p as Le,G as Ie,q as Ae,v as ze,w as Be,x as Fe,y as We,z as Me,A as Ve,B as Ue,C as Qe,H as Ye,J as He,L as Ge,K as Je,M as Ke,R as qe,N as Ne,O as Xe,P as Ze,Q as et,T as tt}from"./vendor-c3f28969.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))p(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const st="modulepreload",at=function(l){return"/"+l},Ce={},b=function(n,c,p){if(!c||c.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(c.map(o=>{if(o=at(o),o in Ce)return;Ce[o]=!0;const a=o.endsWith(".css"),T=a?'[rel="stylesheet"]':"";if(!!p)for(let O=r.length-1;O>=0;O--){const D=r[O];if(D.href===o&&(!a||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${T}`))return;const y=document.createElement("link");if(y.rel=a?"stylesheet":st,a||(y.as="script",y.crossOrigin=""),y.href=o,document.head.appendChild(y),a)return new Promise((O,D)=>{y.addEventListener("load",O),y.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},ot="_container_1vdz2_1",nt="_dashboard_1vdz2_33",it="_dashboardHead_1vdz2_47",rt="_head_1vdz2_61",lt="_durationButton_1vdz2_99",ct="_lightMode_1vdz2_117",dt="_cards_1vdz2_117",mt="_darkMode_1vdz2_133",ut="_card1_1vdz2_151",pt="_card2_1vdz2_171",ft="_card3_1vdz2_191",xt="_card4_1vdz2_213",ht="_cardHead_1vdz2_297",yt="_cardAmount_1vdz2_331",gt="_container2_1vdz2_439",vt="_cardHeadLight_1vdz2_1151",_t="_cardAmountLight_1vdz2_1159",St="_switchIcon_1vdz2_1167",z={container:ot,dashboard:nt,dashboardHead:it,head:rt,durationButton:lt,lightMode:ct,cards:dt,darkMode:mt,card1:ut,card2:pt,card3:ft,card4:xt,cardHead:ht,cardAmount:yt,container2:gt,cardHeadLight:vt,cardAmountLight:_t,switchIcon:St},wt="_container_nli5c_3",Nt="_title_nli5c_27",Ct="_cards_nli5c_49",bt="_card_nli5c_49",jt="_arrowIcon_nli5c_107",$t="_durationButton_nli5c_131",Pt="_lightMode_nli5c_151",Tt="_dateFilter_nli5c_169",Dt="_officefilter_nli5c_277",Et="_boldOption_nli5c_377",kt="_topContainer_nli5c_465",Ot="_darkMode_nli5c_489",Rt="_dateRangePicker_nli5c_761",N={container:wt,"rs-picker-toggle-textbox":"_rs-picker-toggle-textbox_nli5c_19","rs-stack-item":"_rs-stack-item_nli5c_21","theme2-container":"_theme2-container_nli5c_23",title:Nt,cards:Ct,card:bt,arrowIcon:jt,durationButton:$t,lightMode:Pt,dateFilter:Tt,officefilter:Dt,boldOption:Et,topContainer:kt,darkMode:Ot,dateRangePicker:Rt};const be=l=>{if(!l)return"";const n=l.getFullYear(),c=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0");return`${n}-${c}-${p}`};async function Lt(l,n,c,p){try{let r=await Q.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${be(l)}/${be(n)}/${c}/${p}`);const{data:o}=r;return o}catch(r){console.log(r)}}const It=C.lazy(()=>b(()=>import("./StatisticsChart-3b600900.js"),["assets/StatisticsChart-3b600900.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/StatisticsChart-5ea32f12.css"])),At=C.lazy(()=>b(()=>import("./StatisticsChart2-d81355da.js"),["assets/StatisticsChart2-d81355da.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/StatisticsChart2-088722a5.css"])),zt=C.lazy(()=>b(()=>import("./OrdersPieChart-86d02037.js"),["assets/OrdersPieChart-86d02037.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/OrdersPieChart-6ea8c40b.css"])),Bt=C.lazy(()=>b(()=>import("./SalesCustomer-69c68ada.js"),["assets/SalesCustomer-69c68ada.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/SalesCustomer-5b24a586.css"])),Ft=C.lazy(()=>b(()=>import("./SalesProductStacked-e6ad8ab0.js"),["assets/SalesProductStacked-e6ad8ab0.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/SalesProductStacked-93b57222.css"])),Wt=C.lazy(()=>b(()=>import("./PaymentMode-fd09e4c3.js"),["assets/PaymentMode-fd09e4c3.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/PaymentMode-d4f9808e.css"])),Mt=C.lazy(()=>b(()=>import("./NewExCustomer-5e2f213e.js"),["assets/NewExCustomer-5e2f213e.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/SalesCustomer-5b24a586.css"])),Vt=C.lazy(()=>b(()=>import("./NewExCustomerBar-1155e8f2.js"),["assets/NewExCustomerBar-1155e8f2.js","assets/vendor-c3f28969.js","assets/ReactToastify-65636384.js","assets/jspdf.es.min-9e3b0f0b.js","assets/ReactToastify-55fec1ff.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/SalesCustomer-5b24a586.css"])),Ut=C.lazy(()=>b(()=>import("./CustomerType-cabb78ef.js"),["assets/CustomerType-cabb78ef.js","assets/vendor-c3f28969.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-7e50f80e.js","assets/CustomerType-6f0fa183.css"])),Qt=({ReactECharts:l,themeMode:n,officeId:c,adminStatus:p,userId:r,userOfficeName:o})=>{const{t:a}=ge(),T=[{label:a("Today"),value:[new Date,new Date],placement:"left"},{label:a("Yesterday"),value:[se(new Date,-1),se(new Date,-1)],placement:"left"},{label:a("This week"),value:[fe(new Date),xe(new Date)],placement:"left"},{label:a("Last 7 days"),value:[he(new Date,6),new Date],placement:"left"},{label:a("Last 30 days"),value:[he(new Date,29),new Date],placement:"left"},{label:a("This month"),value:[_e(new Date),new Date],placement:"left"},{label:a("Last month"),value:[_e(Se(new Date,-1)),$e(Se(new Date,-1))],placement:"left"},{label:a("This year"),value:[new Date(new Date().getFullYear(),0,1),new Date],placement:"left"},{label:a("Last year"),value:[new Date(new Date().getFullYear()-1,0,1),new Date(new Date().getFullYear(),0,0)],placement:"left"},{label:a("Last week"),closeOverlay:!1,value:s=>{const[u=new Date]=s||[];return[se(fe(u,{weekStartsOn:0}),-7),se(xe(u,{weekStartsOn:0}),-7)]},appearance:"default"},{label:a("Next week"),closeOverlay:!1,value:s=>{const[u=new Date]=s||[];return[se(fe(u,{weekStartsOn:0}),7),se(xe(u,{weekStartsOn:0}),7)]},appearance:"default"}],[d,y]=t.useState([we(he(new Date,6)),we(new Date)]),[O,D]=t.useState([]),[f,j]=t.useState(c),[g,B]=t.useState(p),[R,J]=t.useState([]),[Y,X]=t.useState([]),[F,Z]=t.useState([]),[x,m]=t.useState(!0),[i,L]=t.useState(""),[$,H]=t.useState([]),[_,K]=t.useState(!0),[me,pe]=t.useState([]),[W,ae]=t.useState(c),[oe,ne]=t.useState(""),[I,M]=t.useState(""),[ie,re]=t.useState(!0),[S,q]=t.useState(!0),[ee,A]=t.useState([]),[P,le]=t.useState(!0);t.useEffect(()=>{(async()=>{try{if(r&&c){const E=await(await Q.get(`http://115.124.120.251:5064/api/v1/dashboard/dropdown_list/${r}`)).data;if(E){L(o),M(o),j(c),B(p),ae(c),D(E);let G=[];E.map(k=>{G.push({officeId:k.OfficeId,officeName:k.OfficeName,officeType:k.OfficeTypeName})}),J(G.filter(k=>k.officeType==="Company")),X(G.filter(k=>k.officeType==="Wholesale Pumps")),Z(G.filter(k=>k.officeType==="Retail Pumps")),pe({officeId:c,adminStatus:p,userOfficeName:o})}}}catch(u){console.log("Error fetching office data:",u)}})()},[r,c,p]),t.useEffect(()=>{f&&ue(),ce(f,g)},[f,d,g]);const ue=async()=>{K(!0);let s=await Lt(d[0],d[1],f,g);s&&(H(s),K(!1))},w=async s=>{re(!0),s===null?y([null,null]):(K(!0),y(s))},v=async s=>{const u=s.target.selectedOptions[0];ne({state:!1,Ovalue:s.target.value});const E=u.getAttribute("data-isadmin");j(s.target.value),B(E),M(s.target.selectedOptions[0].getAttribute("data-officename"))},V=(s,u)=>window.innerWidth>500||s.length<=u?s:s.substring(0,u)+"...";async function ce(s,u){const E=te(d[0]),G=te(d[1]);if(s!==void 0&&u!==void 0){le(!0);const k=`http://115.124.120.251:5064/api/v1/dashboard/customer_list/${E}/${G}/${s}/${u}`,ve=await(await Q.get(k)).data;ve&&(A(ve),le(!1))}}const te=s=>{if(!s)return"";const u=s.getFullYear(),E=String(s.getMonth()+1).padStart(2,"0"),G=String(s.getDate()).padStart(2,"0");return`${u}-${E}-${G}`};return e.jsxs("div",{className:`${N.container} ${n==="dark"?"theme-container":"theme2-container"} pb-5`,children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("div",{className:`fs-${window.innerWidth<=768?3:2} mx-sm-0 mx-md-3 fw-bold noselect`,children:[e.jsx("span",{className:"me-2 ms-md-1  ms-2 text-primary",children:e.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>q(!S)})})," ",a("Sales Overview")]}),e.jsxs("button",{className:"btn btn-primary btn-lg mx-2 d-flex align-items-center shadow border-2 border-white",type:"submit",onClick:()=>m(!x),children:[e.jsx("span",{className:"d-flex",children:x?e.jsx(Te,{style:{fontSize:"1.4rem",marginRight:window.innerWidth>500?"4px":"0px"}}):e.jsx(De,{style:{fontSize:"1.2rem",marginRight:window.innerWidth>500?"8px":"0px"}})}),"  ",window.innerWidth>500?a(x?"Close":"Filter"):""]})]}),e.jsx("div",{style:{visibility:x?"visible":"hidden",opacity:x?1:0,height:x?window.innerWidth>=768?"85px":"130px":0,marginBottom:x?"10px":0},className:`${N.topContainer} ${n==="dark"?N.darkMode:N.lightMode}`,children:e.jsxs("div",{className:"row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100",style:{width:"100% !important"},children:[e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3  ms-1 ms-lg-2",children:e.jsx(Ee,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsx(ke,{ranges:T,size:"lg",showOneCalendar:!0,style:{color:"black",width:"100%"},value:d,onChange:w,appearance:"default",className:`${N.dateRangePicker}`})]}),e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3 ms-1 ms-lg-2 mt-1",children:e.jsx(Oe,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsxs("select",{value:oe.state?oe.Ovalue:null,className:"form-select form-select-lg","aria-label":"Default select example",id:"office",onChange:v,style:{paddingBottom:"4px !important",paddingTop:"4px !important"},children:[R.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("option",{value:W,"data-officename":i,"data-isretail":"-1","data-isadmin":"6",className:`${N.boldOption}`,children:[a("Entities"),"(",V(i,10),")"]})," "]}):"",R.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:W,"data-officename":i,"data-isretail":"0","data-isadmin":"4",className:`${N.boldOption}`,children:["  ",a("Companies"),"(",V(i,10),")"]})}):"",R.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"5",className:`${N.optionGroup}`,children:["      ",V(s.officeName,20)]},s.officeId)),Y.length>1||F.length>1?e.jsxs(e.Fragment,{children:[" ",e.jsxs("option",{value:W,"data-officename":i,"data-isretail":"-1","data-isadmin":"1",className:`${N.boldOption}`,children:["  ",a("Pumps"),"(",V(i,10),")"]})]}):"",Y.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:W,"data-officename":i,"data-isretail":"0","data-isadmin":"3",className:`${N.boldOption}`,children:["   ",a("Wholesale Pumps")]})}):"",Y.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"0",className:`${N.optionGroup}`,children:["      ",V(s.officeName,20)]},s.officeId)),F.length>0?e.jsxs("option",{value:W,"data-officename":i,"data-isretail":"1","data-isadmin":"2",className:`${N.boldOption}`,children:["   ",a("Retail Pumps")]}):"",F.map(s=>e.jsxs("option",{value:s.officeId,"data-officename":s.officeName,"data-isadmin":"0",className:`${N.optionGroup}`,children:["      ",s.officeName]},s.officeId))]})]})]})}),e.jsx("div",{className:`${window.innerWidth>550?"container-fluid":""}`,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-8",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(It,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,alldata:$,isLoading:_,officeName:I,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-4",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(zt,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,alldata:$,isLoading:_,officeName:I,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Bt,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,alldata:$,isLoading:_,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(At,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,alldata:$,isLoading:_,setSelectedOfficeName:L,showGraph:S,selectedOfficeNameLocal:I,setSelectedOfficeNameLocal:M,SelectedOfficeName:i,setSelectedOffice:j,setIsAdmin:B,setCompanies:J,setWholesales:X,setRetails:Z,originallist:me,setOfficeIdLocal:ae,officeIdLocal:W,setOptionvalue:ne})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Ft,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,alldata:$,isLoading:_,showGraph:S,setSelectedRange:y,isDateRangeActive:ie,setIsDateRangeActive:re})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Wt,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,alldata:$,isLoading:_,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Mt,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,newExData:ee,isLoading:P,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Vt,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,newExData:ee,isLoading:P,showGraph:S})})}),e.jsx("div",{className:"col-md-12 col-lg-12 mt-2",children:e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(Ut,{echarts:U,ReactECharts:l,selectedRange:d,themeMode:n,selectedOffice:f,isAdmin:g,officeName:I,newExData:ee,isLoading:P})})})]})})]})},Yt=C.lazy(()=>b(()=>import("./UserCard-17f2351c.js"),["assets/UserCard-17f2351c.js","assets/vendor-c3f28969.js"])),Ht=C.lazy(()=>b(()=>import("./OfficeCard-014f55b8.js"),["assets/OfficeCard-014f55b8.js","assets/vendor-c3f28969.js"])),Gt=C.lazy(()=>b(()=>import("./SalesCard-237172a3.js"),["assets/SalesCard-237172a3.js","assets/vendor-c3f28969.js"])),Jt=C.lazy(()=>b(()=>import("./ExpenseCard-c7873c31.js"),["assets/ExpenseCard-c7873c31.js","assets/vendor-c3f28969.js"])),Kt=()=>{const n=new URLSearchParams(window.location.search).get("theme")||"light",{t:c,i18n:p}=ge();n==="light"?(document.documentElement.style.setProperty("--rs-body","rgb(210 210 210)"),document.documentElement.style.setProperty("--text-color","#282829d4"),document.documentElement.style.setProperty("--option-color","white"),document.documentElement.style.setProperty("--backgroundOverlay","rgb(249 249 249 / 81%)"),document.documentElement.style.setProperty("--bs-table-bg","#ffffff00")):(document.documentElement.style.setProperty("--rs-body","#111111"),document.documentElement.style.setProperty("--text-color","white"),document.documentElement.style.setProperty("--option-color","#111111"),document.documentElement.style.setProperty("--backgroundOverlay","#1a1c2db8"),document.documentElement.style.setProperty("--bs-table-bg","#00000000"));const[r,o]=t.useState(0),[a,T]=t.useState(0),[d,y]=t.useState(0),[O,D]=t.useState(0),[f,j]=t.useState(0),[g,B]=t.useState(0),R=n,[J,Y]=t.useState(""),[X,F]=t.useState(""),[Z,x]=t.useState(""),[m,i]=t.useState(window.innerWidth),[L,$]=t.useState({}),[H,_]=t.useState(""),[K,me]=t.useState(0),[pe,W]=t.useState(0),[ae,oe]=t.useState([]),ne=()=>{i(window.innerWidth)};return t.useEffect(()=>(window.addEventListener("resize",ne),()=>{window.removeEventListener("resize",ne)}),[]),t.useEffect(()=>{(async()=>{try{const M=new URLSearchParams(window.location.search),ie=M.get("userId"),re=M.get("jwtToken");let S="";if(re&&(S=JSON.parse(atob(re.split(".")[1]))),p.changeLanguage(M.get("lang")||"en"),ie){Y(ie);const q=`http://115.124.120.251:5059/api/Auth/User/${ie}`,A=await(await Q.get(q)).data;F(A),_(A.officeName),A.roleName==="CompanyAdmin"?x(6):(A.roleName,x(0));const le=`http://115.124.120.251:5064/api/v1/dashboard/card_details_list/${A.officeId}/${A.roleName==="PumpUser"||A.roleName==="CompanyAdmin"?1:0}`,w=await(await Q.get(le)).data;$(w);const v=w.userCount||[],V=w.officeCount||[],ce=w.incomeDetails.total,te=w.incomeDetails.count,s=w.expenseDetails.total,u=w.expenseDetails.count;W(w.incomeDetailsCurrentDay.total),me(w.expenseDetailsCurrentDay.total),oe(w.graph1),o(v),T(V),y(ce),D(s),j(te),B(u)}else if(S){const q=S.sub;if(q){Y(q);const ee=`http://115.124.120.251:5059/api/Auth/User/${q}`,P=await(await Q.get(ee)).data;F(P),_(P.officeName),P.roleName==="CompanyAdmin"?x(6):(P.roleName,x(0));const ue=`http://115.124.120.251:5064/api/v1/dashboard/card_details_list/${P.officeId}/${P.roleName==="PumpUser"||P.roleName==="CompanyAdmin"?1:0}`,v=await(await Q.get(ue)).data;$(v);const V=v.userCount||[],ce=v.officeCount||[],te=v.incomeDetails.total,s=v.incomeDetails.count,u=v.expenseDetails.total,E=v.expenseDetails.count;W(v.incomeDetailsCurrentDay.total),me(v.expenseDetailsCurrentDay.total),oe(v.graph1),o(V),T(ce),y(te),D(u),j(s),B(E)}}}catch(M){console.log("Error fetching data:",M)}})()},[]),e.jsx("div",{className:`${z.container} ${R==="dark"?z.darkMode:z.lightMode} ${z.scrollableContainer}`,children:e.jsxs("div",{className:`${z.dashboard} `,children:[e.jsx("div",{className:`${z.dashboardHead} ${z.container2}  ${R==="dark"?"theme-container":"theme2-container"}`,style:{minWidth:"100%"},children:e.jsxs("div",{className:`${z.cards} mb-1 ${R==="dark"?z.darkMode:z.lightMode}`,children:[e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:L?e.jsx(Yt,{userCountData:r}):e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:L?e.jsx(Ht,{officeCountData:a}):e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:L?e.jsx(Gt,{ReactECharts:ye,totalIncome:d,countIncome:f,todaySales:pe,salesCardData:ae}):e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(t.Suspense,{fallback:e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:L?e.jsx(Jt,{ReactECharts:ye,totalExpense:O,countExpense:g,todayExpense:K,expenseCardData:ae}):e.jsx(h,{variant:"rounded",width:m>900?"22%":m>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})})]})}),e.jsx(Qt,{ReactECharts:ye,themeMode:R,officeId:X.officeId,adminStatus:Z,userId:J,userOfficeName:H})]})})};function qt({distanceCovered:l,drivingTime:n,idleTime:c,averageSpeed:p}){return e.jsxs("div",{className:"row gap-2 mx-0 mb-3 d-flex align-items-stretch justify-content-center",children:[e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1",style:{width:"44%",fontSize:"12px",backgroundColor:"var(--driver-secondary)"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(Re,{className:"me-1 text-success",style:{marginBottom:"2px",fontSize:"16px"}}),de("Driving Time")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[n," ",e.jsx("span",{className:"fs-4",children:"hrs"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1",style:{width:"44%",fontSize:"12px",backgroundColor:"var(--driver-secondary)"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(Le,{className:"me-1 text-danger",style:{marginBottom:"3px",fontSize:"16px"}}),de("Distance Covered")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[l," ",e.jsx("span",{className:"fs-4",children:"km"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1",style:{width:"44%",fontSize:"12px",backgroundColor:"var(--driver-secondary)"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(Ie,{className:"me-1 text-success",style:{marginBottom:"3px",fontSize:"16px"}}),de("Idle Time")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[c," ",e.jsx("span",{className:"fs-4",children:"hrs"})]})]}),e.jsxs("div",{className:"px-2 rounded-4 py-2 mt-1 mx-1",style:{width:"44%",fontSize:"12px",backgroundColor:"var(--driver-secondary)"},children:[e.jsxs("div",{className:"text-dark",children:[e.jsx(Ae,{className:"me-2 text-warning",style:{marginBottom:"2px",fontSize:"16px"}}),de("Average Speed")]}),e.jsxs("div",{className:"fs-1 fw-bold py-1 px-1 text-dark",children:[p," ",e.jsx("span",{className:"fs-4",children:"km/hr"})]})]})]})}ze([Be,Fe,We,Me,Ve]);function je({title:l,filllevel:n,emptylevel:c,fillTitle:p,emptyTitle:r}){const o=t.useRef();return t.useEffect(()=>{const a=o.current,T=Ue(a,null,{renderer:"svg"}),d={title:{text:`${(n/(n+c)*100).toFixed(0)}%`,left:"center",top:"center"},tooltip:{show:!0,trigger:"item",formatter:"{b}: {c}",position:["10%","40%"]},legend:{show:!0,bottom:"0"},series:[{name:"Radius Mode",type:"pie",radius:[45,60],color:["#239dab","#EAECF1"],itemStyle:{borderRadius:5},label:{show:!1},labelLine:{show:!1},data:[{value:n,name:p},{value:c,name:r}]}]};return d&&T.setOption(d),()=>{T.dispose()}},[n,c]),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{ref:o,style:{minWidth:"100%",height:"250px"}}),e.jsx("div",{style:{width:"140px",marginTop:"5px"},children:de(l)})]})}function Xt(){const l=new URLSearchParams(window.location.search),{t:n,i18n:c}=ge(),[p,r]=t.useState({}),[o,a]=t.useState(0),[T,d]=t.useState(0),[y,O]=t.useState(0),[D,f]=t.useState(0),[j,g]=t.useState({name:".........",licenceNo:"....",ContactNo:".........."}),[B,R]=t.useState({filllevel:0,emptylevel:1}),[J,Y]=t.useState({filllevel:0,emptylevel:1}),[X,F]=t.useState(!1),Z=()=>{F(!0),setTimeout(()=>{F(!1)},2500)},x=i=>{r(i),a(i.distanceCovered.toFixed(1)),d(i.drivingTime.toFixed(1)),O(i.idleTime.toFixed(1)),f(i.averageSpeed.toFixed(1)),g({name:i.profile.driverName,licenceNo:i.profile.driverLicenceNo,ContactNo:i.profile.driverContactNo}),R({filllevel:i.graph1.totalTankFuel-i.graph1.fuelUnloaded,emptylevel:i.graph1.fuelUnloaded}),Y({filllevel:i.graph2.totalJob-i.graph2.jobCompleted,emptylevel:i.graph2.jobCompleted})},m=async()=>{try{c.changeLanguage(l.get("lang")||"en");let i="";const L=l.get("jwtToken");L&&(i=JSON.parse(atob(L.split(".")[1])));const $=l.get("driverId");if($){let H=await Q.get(`http://115.124.120.251:5064/api/v1/dashboard/driver/metrics/${$}`);const{data:_}=H;x(_)}else if(i){const H=i.sub;if(H){let _=await Q.get(`http://115.124.120.251:5064/api/v1/dashboard/driver/metrics/${H}`);const{data:K}=_;x(K)}}}catch(i){console.log(i)}};return t.useEffect(()=>{m();const i=setInterval(m,3e5);return()=>clearInterval(i)},[]),e.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif"},children:[e.jsxs("div",{className:"py-2",style:{borderBottomRightRadius:"20px",borderBottomLeftRadius:"20px",background:"-webkit-linear-gradient(45deg,#073660,#13a098)"},children:[e.jsxs("div",{className:"px-3 pt-3 pb-1 d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"text-light fs-2",style:{letterSpacing:".8px",fontWeight:500},children:[n("Hello"),","]}),e.jsx("div",{className:"text-light fs-1 lh-1",style:{letterSpacing:".5px",fontWeight:500},children:j.name}),e.jsxs("div",{className:"text-light ",style:{letterSpacing:"0px",lineHeight:1.75,fontSize:14,marginTop:"8px"},children:[e.jsx(Qe,{style:{marginBottom:"4px",fontSize:"12px"}})," +91 ",j.ContactNo.slice(0,5)," ",j.ContactNo.slice(5)]}),j.licenceNo!==""?e.jsxs("div",{className:"text-light ",style:{letterSpacing:"0px",lineHeight:.25,fontSize:14},children:[e.jsx(Ye,{style:{marginBottom:"2px",marginRight:"0px"}})," ",e.jsx("span",{style:{fontSize:"12px"},children:"(lic.)"})," ",j.licenceNo]}):null]}),e.jsxs("div",{className:"mx-2",children:[e.jsx(He,{className:"display-5 text-light mb-1 mx-1",onClick:()=>{m(),Z()}}),X?e.jsx(Ge,{color:"info"}):e.jsx("span",{style:{minHeight:"4px",position:"relative",overflow:"hidden",display:"block",height:"4px",zIndex:0}})]})]}),e.jsxs("div",{className:"display-6 text-light fw-semibold px-3 pt-2 pb-2",style:{},children:[e.jsx(Je,{className:"text-warning",style:{marginBottom:"3px",verticalAlign:"bottom",marginRight:"10px"}}),"Metrics"]}),e.jsx(qt,{distanceCovered:o,drivingTime:T,idleTime:y,averageSpeed:D})]}),e.jsxs("div",{className:"display-6 text-dark fw-semibold px-3 pt-3 pb-2",style:{},children:[e.jsx(Ke,{className:"display-5",style:{marginBottom:"4px",verticalAlign:"bottom",marginRight:"8px",color:"var(--driver-primary)"}}),"Stats"]}),e.jsxs("div",{className:"ms-4 me-4 d-flex align-items-center justify-content-between",style:{marginTop:"-55px"},children:[e.jsx(je,{title:"Tanker Fuel Level",filllevel:B.filllevel,emptylevel:B.emptylevel,fillTitle:"Fuel Left",emptyTitle:"Fuel Unloaded"}),e.jsx(je,{title:"Jobs Completed",filllevel:J.filllevel,emptylevel:J.emptylevel,fillTitle:"Job Done",emptyTitle:"Job Left"})]})]})}const Zt=()=>e.jsxs(qe,{children:[e.jsx(Ne,{path:"/",element:e.jsx("div",{id:"dashboard",children:e.jsx(Kt,{})})}),e.jsx(Ne,{path:"/driver",element:e.jsx(Xt,{})})]});const es="Users",ts="Office",ss="Sales",as="Expense",os="days",ns="CompanyAdmin",is="PumpUser",rs="PumpAdmin",ls="Company",cs="Filter",ds="Close",ms="Entities",us="Companies",ps="Pumps",fs="Today",xs="Yesterday",hs="Total",ys="Period",gs="Quantity",vs="to",_s="Product",Ss="Rows",ws="Sale",Ns="Qty",Cs="of",bs="Name",js="Mobile",$s="Vehicle",Ps="Top",Ts="Visit",Ds="Payment",Es="Count",ks="Card",Os="UPI",Rs="Cash",Ls="NetBanking",Is="Customers",As={Users:es,Office:ts,Sales:ss,Expense:as,days:os,CompanyAdmin:ns,PumpUser:is,PumpAdmin:rs,Company:ls,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:cs,Close:ds,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF",Entities:ms,Companies:us,Pumps:ps,Today:fs,Yesterday:xs,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:hs,Period:ys,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:gs,to:vs,Product:_s,"No Data Found":"No Data Found",Rows:Ss,"Total Sale":"Total Sale","Product Wise":"Product Wise",Sale:ws,Qty:Ns,of:Cs,"Top Customers":"Top Customers",Name:bs,Mobile:js,Vehicle:$s,Top:Ps,Visit:Ts,"Sales (Day Wise)":"Sales (Day Wise)","Sales (Month Wise)":"Sales (Month Wise)","Sales (Year Wise)":"Sales (Year Wise)","Payment Mode":"Payment Mode",Payment:Ds,Count:Es,Card:ks,UPI:Os,Cash:Rs,NetBanking:Ls,Customers:Is,"Customer Type":"Customer Type","Total Count":"Total Count","Existing Customers":"Existing Customers","New Customers":"New Customers","Existing Customer Count":"Existing Customer Count","Existing Customer Sales":"Existing Customer Sales","New Customer Count":"New Customer Count","New Customer Sales":"New Customer Sales","Customers Summary Data":"Customers Summary Data","Customer Name":"Customer Name","Mobile No":"Mobile No","Vehicle No":"Vehicle No","Top Customers Summary Data":"Top Customers Summary Data"},zs="उपयोगकर्ता",Bs="कार्यालय",Fs="बिक्री",Ws="खर्च",Ms="दिन",Vs="कंपनी प्रशासक",Us="पंप उपयोगकर्ता",Qs="पंप व्यवस्थापक",Ys="कंपनी",Hs="फ़िल्टर",Gs="बंद करें",Js="संस्थान",Ks="कंपनियाँ",qs="पंप",Xs="आज",Zs="कल",ea="कुल",ta="अवधि",sa="मात्रा",aa="से",oa="उत्पाद",na="पंक्तियाँ",ia="बिक्री",ra="मात्रा",la="की",ca="नाम",da="मोबाइल",ma="वाहन",ua="शीर्ष",pa="यात्रा",fa="भुगतान",xa="गणना",ha="कार्ड",ya="यूपीआई",ga="नकद",va="नेट बैंकिंग",_a="ग्राहक",Sa={Users:zs,Office:Bs,Sales:Fs,Expense:Ws,days:Ms,CompanyAdmin:Vs,PumpUser:Us,PumpAdmin:Qs,Company:Ys,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:Hs,Close:Gs,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें",Entities:Js,Companies:Ks,Pumps:qs,Today:Xs,Yesterday:Zs,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:ea,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:ta,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:sa,to:aa,Product:oa,"No Data Found":"कोई डेटा नहीं मिला",Rows:na,"Product Wise Summary Data":"उत्पाद वार संक्षिप्त आंकड़े","Total Sale":"कुल बिक्री","Product Wise":"उत्पाद वार",Sale:ia,Qty:ra,of:la,"Top Customers":"शीर्ष ग्राहक",Name:ca,Mobile:da,Vehicle:ma,Top:ua,Visit:pa,"Sales (Day Wise)":"दिन के आधार पर बिक्री","Sales (Month Wise)":"महीने के आधार पर बिक्री","Sales (Year Wise)":"वर्ष के आधार पर बिक्री","Payment Mode":"भुगतान मोड",Payment:fa,Count:xa,Card:ha,UPI:ya,Cash:ga,NetBanking:va,Customers:_a,"Customer Type":"ग्राहक प्रकार","Total Count":"कुल गणना","Existing Customers":"मौजूदा ग्राहक","New Customers":"नए ग्राहक","Existing Customer Count":"मौजूदा ग्राहक गणना","Existing Customer Sales":"मौजूदा ग्राहक बिक्री","New Customer Count":"नए ग्राहक गणना","New Customer Sales":"नए ग्राहक बिक्री","Customers Summary Data":"ग्राहक संक्षेप डेटा","Customer Name":"ग्राहक का नाम","Mobile No":"मोबाइल नंबर","Vehicle No":"वाहन नंबर","Top Customers Summary Data":"शीर्ष ग्राहक संक्षेप डेटा"},wa="ব্যবহারকারী",Na="অফিস",Ca="বিক্রয়",ba="ব্যয়",ja="দিন",$a="কোম্পানি প্রশাসক",Pa="পাম্প ব্যবহারকারী",Ta="পাম্প প্রশাসক",Da="কোম্পানি",Ea="ফিল্টার",ka="বন্ধ করুন",Oa="ইণ্টিটি",Ra="কোম্পানি",La="পাম্প",Ia="আজ",Aa="গতকাল",za="মোট",Ba="সময়কাল",Fa="পরিমাণ",Wa="থেকে",Ma="পণ্য",Va="সারি",Ua="বিক্রি",Qa="পরিমাণ",Ya="এর",Ha="নাম",Ga="মোবাইল",Ja="যানবাহন",Ka="শীর্ষ",qa="দর্শন",Xa="পেমেন্ট",Za="গণনা",eo="কার্ড",to="উপি",so="নগদ",ao="নেটব্যাংকিং",oo="গ্রাহক",no={Users:wa,Office:Na,Sales:Ca,Expense:ba,days:ja,CompanyAdmin:$a,PumpUser:Pa,PumpAdmin:Ta,Company:Da,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:Ea,Close:ka,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন",Entities:Oa,Companies:Ra,Pumps:La,Today:Ia,Yesterday:Aa,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:za,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:Ba,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:Fa,to:Wa,Product:Ma,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:Va,"Product Wise Summary Data":"পণ্য ভিত্তিক সংক্ষিপ্ত উপাদান","Total Sale":"মোট বিক্রি","Product Wise":"পণ্য অনুযায়ী",Sale:Ua,Qty:Qa,of:Ya,"Top Customers":"শীর্ষ গ্রাহকগণ",Name:Ha,Mobile:Ga,Vehicle:Ja,Top:Ka,Visit:qa,"Sales (Day Wise)":"দিনভিত্তিক বিক্রয়","Sales (Month Wise)":"মাসিক বিক্রয়","Sales (Year Wise)":"বার্ষিক বিক্রয়","Payment Mode":"পেমেন্ট মোড",Payment:Xa,Count:Za,Card:eo,UPI:to,Cash:so,NetBanking:ao,Customers:oo,"Customer Type":"গ্রাহক প্রকার","Total Count":"মোট গণনা","Existing Customers":"বিদ্যমান গ্রাহক","New Customers":"নতুন গ্রাহক","Existing Customer Count":"বিদ্যমান গ্রাহকের সংখ্যা","Existing Customer Sales":"বিদ্যমান গ্রাহকের বিপণি","New Customer Count":"নতুন গ্রাহকের সংখ্যা","New Customer Sales":"নতুন গ্রাহকের বিপণি","Customers Summary Data":"গ্রাহক সংক্ষিপ্ত তথ্য","Customer Name":"গ্রাহকের নাম","Mobile No":"মোবাইল নম্বর","Vehicle No":"গাড়ির নম্বর","Top Customers Summary Data":"শীর্ষ গ্রাহকের সংক্ষেপণ তথ্য"},io={en:{translation:As},hi:{translation:Sa},bn:{translation:no}};Xe.use(Ze).init({resources:io,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});et.createRoot(document.getElementById("root")).render(e.jsx(tt,{children:e.jsx(Zt,{})}));export{b as _,z as c};
