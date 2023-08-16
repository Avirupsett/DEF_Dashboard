import{a as V,t as T,u as ye,b as F,s as ce,e as re,c as le,d as de,f as me,g as _e,r as s,h as ue,j as e,F as ge,i as we,k as Se,l as be,D as $e,m as Pe,S as y,n as ve,o as De,p as Ee}from"./vendor-5be16ce1.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function u(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function p(o){if(o.ep)return;o.ep=!0;const t=u(o);fetch(o.href,t)}})();const Ne="modulepreload",Te=function(l){return"/"+l},pe={},k=function(c,u,p){if(!u||u.length===0)return c();const o=document.getElementsByTagName("link");return Promise.all(u.map(t=>{if(t=Te(t),t in pe)return;pe[t]=!0;const d=t.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!p)for(let b=o.length-1;b>=0;b--){const m=o[b];if(m.href===t&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${h}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":Ne,d||(x.as="script",x.crossOrigin=""),x.href=t,document.head.appendChild(x),d)return new Promise((b,m)=>{x.addEventListener("load",b),x.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>c()).catch(t=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=t,window.dispatchEvent(d),!d.defaultPrevented)throw t})},ke="_container_1ahtk_1",Oe="_dashboard_1ahtk_33",Ce="_dashboardHead_1ahtk_47",je="_head_1ahtk_61",Re="_durationButton_1ahtk_99",Le="_lightMode_1ahtk_117",Ae="_cards_1ahtk_117",Ie="_darkMode_1ahtk_133",Fe="_card1_1ahtk_151",Ve="_card2_1ahtk_171",We="_card3_1ahtk_191",Me="_card4_1ahtk_213",Ue="_cardHead_1ahtk_297",Be="_cardAmount_1ahtk_331",Qe="_container2_1ahtk_439",ze="_cardHeadLight_1ahtk_1151",Ye="_cardAmountLight_1ahtk_1159",He="_switchIcon_1ahtk_1167",S={container:ke,dashboard:Oe,dashboardHead:Ce,head:je,durationButton:Re,lightMode:Le,cards:Ae,darkMode:Ie,card1:Fe,card2:Ve,card3:We,card4:Me,cardHead:Ue,cardAmount:Be,container2:Qe,cardHeadLight:ze,cardAmountLight:Ye,switchIcon:He},Ge="_container_nli5c_3",Ke="_title_nli5c_27",qe="_cards_nli5c_49",Je="_card_nli5c_49",Xe="_arrowIcon_nli5c_107",Ze="_durationButton_nli5c_131",et="_lightMode_nli5c_151",tt="_dateFilter_nli5c_169",at="_officefilter_nli5c_277",st="_boldOption_nli5c_377",ot="_topContainer_nli5c_465",nt="_darkMode_nli5c_489",it="_dateRangePicker_nli5c_761",f={container:Ge,"rs-picker-toggle-textbox":"_rs-picker-toggle-textbox_nli5c_19","rs-stack-item":"_rs-stack-item_nli5c_21","theme2-container":"_theme2-container_nli5c_23",title:Ke,cards:qe,card:Je,arrowIcon:Xe,durationButton:Ze,lightMode:et,dateFilter:tt,officefilter:at,boldOption:st,topContainer:ot,darkMode:nt,dateRangePicker:it};const fe=l=>{if(!l)return"";const c=l.getFullYear(),u=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0");return`${c}-${u}-${p}`};async function he(l,c,u,p){try{let o=await V.get(`https://def-dash-route-api.inspirigenceworks.co.in/api/v1/dashboard/sales_list/${fe(l)}/${fe(c)}/${u}/${p}`);const{data:t}=o;return t}catch(o){console.log(o)}}const ct=T.lazy(()=>k(()=>import("./StatisticsChart-fc900612.js"),["assets/StatisticsChart-fc900612.js","assets/vendor-5be16ce1.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/StatisticsChart-5ea32f12.css"])),rt=T.lazy(()=>k(()=>import("./StatisticsChart2-470ee543.js"),["assets/StatisticsChart2-470ee543.js","assets/vendor-5be16ce1.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/StatisticsChart2-4d3da148.css"])),lt=T.lazy(()=>k(()=>import("./OrdersPieChart-9accbdbd.js"),["assets/OrdersPieChart-9accbdbd.js","assets/vendor-5be16ce1.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/OrdersPieChart-6ea8c40b.css"])),dt=T.lazy(()=>k(()=>import("./SalesCustomer-96064837.js"),["assets/SalesCustomer-96064837.js","assets/vendor-5be16ce1.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-d6392853.js","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css","assets/SalesCustomer-dd99e2b7.css"])),mt=({themeMode:l,officeId:c,adminStatus:u,userId:p,userOfficeName:o})=>{const{t}=ye(),d=[{label:t("Today"),value:[new Date,new Date],placement:"left"},{label:t("Yesterday"),value:[F(new Date,-1),F(new Date,-1)],placement:"left"},{label:t("This week"),value:[ce(new Date),re(new Date)],placement:"left"},{label:t("Last 7 days"),value:[le(new Date,6),new Date],placement:"left"},{label:t("Last 30 days"),value:[le(new Date,29),new Date],placement:"left"},{label:t("This month"),value:[de(new Date),new Date],placement:"left"},{label:t("Last month"),value:[de(me(new Date,-1)),_e(me(new Date,-1))],placement:"left"},{label:t("This year"),value:[new Date(new Date().getFullYear(),0,1),new Date],placement:"left"},{label:t("Last year"),value:[new Date(new Date().getFullYear()-1,0,1),new Date(new Date().getFullYear(),0,0)],placement:"left"},{label:t("Last week"),closeOverlay:!1,value:a=>{const[i=new Date]=a||[];return[F(ce(i,{weekStartsOn:0}),-7),F(re(i,{weekStartsOn:0}),-7)]},appearance:"default"},{label:t("Next week"),closeOverlay:!1,value:a=>{const[i=new Date]=a||[];return[F(ce(i,{weekStartsOn:0}),7),F(re(i,{weekStartsOn:0}),7)]},appearance:"default"}],[h,W]=s.useState([ue(le(new Date,6)),ue(new Date)]),[x,b]=s.useState([]),[m,M]=s.useState(c),[g,U]=s.useState(u),[A,O]=s.useState([]),[B,Q]=s.useState([]),[z,Y]=s.useState([]),[$,v]=s.useState(!0),[n,J]=s.useState(""),[P,H]=s.useState([]),[I,C]=s.useState(!0),[ee,X]=s.useState([]),[D,G]=s.useState(c),[K,te]=s.useState(""),[w,j]=s.useState("");s.useEffect(()=>{(async()=>{try{if(p&&c){const N=await(await V.get(`https://def-dash-route-api.inspirigenceworks.co.in/api/v1/dashboard/dropdown_list/${p}`)).data;if(N){J(o),j(o),M(c),U(u),G(c),b(N);let L=[];N.map(r=>{L.push({officeId:r.OfficeId,officeName:r.OfficeName,officeType:r.OfficeTypeName})}),O(L.filter(r=>r.officeType==="Company")),Q(L.filter(r=>r.officeType==="Wholesale Pumps")),Y(L.filter(r=>r.officeType==="Retail Pumps")),X({officeId:c,adminStatus:u,userOfficeName:o})}}}catch(i){console.log("Error fetching office data:",i)}})()},[p,c,u]),s.useEffect(()=>{m&&Z()},[m,g]);const Z=async()=>{C(!0);let a=await he(h[0],h[1],m,g);a&&(H(a),C(!1))},q=async a=>{if(a===null)W([null,null]);else{C(!0),W(a);let i=await he(a[0],a[1],m,g);i&&(H(i),C(!1))}},R=async a=>{const i=a.target.selectedOptions[0];te({state:!1,Ovalue:a.target.value});const N=i.getAttribute("data-isadmin");M(a.target.value),U(N),j(a.target.selectedOptions[0].getAttribute("data-officename"))},E=(a,i)=>window.innerWidth>500||a.length<=i?a:a.substring(0,i)+"...";return e.jsxs("div",{className:`${f.container} ${l==="dark"?"theme-container":"theme2-container"} pb-5`,children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("div",{className:`fs-${window.innerWidth<=768?3:2} mx-sm-0 mx-md-3 fw-bold`,children:[e.jsx("span",{className:"me-2 ms-md-1  ms-2 text-primary",children:e.jsx(ge,{})})," ",t("Sales Overview")]}),e.jsxs("button",{className:"btn btn-primary btn-lg mx-2 d-flex align-items-center shadow border-2 border-white",type:"submit",onClick:()=>v(!$),children:[e.jsx("span",{className:"d-flex",children:$?e.jsx(we,{style:{fontSize:"1.4rem",marginRight:window.innerWidth>500?"4px":"0px"}}):e.jsx(Se,{style:{fontSize:"1.2rem",marginRight:window.innerWidth>500?"8px":"0px"}})}),"  ",window.innerWidth>500?t($?"Close":"Filter"):""]})]}),e.jsx("div",{style:{visibility:$?"visible":"hidden",opacity:$?1:0,height:$?window.innerWidth>=768?"85px":"130px":0,marginBottom:$?"10px":0},className:`${f.topContainer} ${l==="dark"?f.darkMode:f.lightMode}`,children:e.jsxs("div",{className:"row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100",style:{width:"100% !important"},children:[e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3  ms-1 ms-lg-2",children:e.jsx(be,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsx($e,{ranges:d,size:"lg",showOneCalendar:!0,style:{color:"black",width:"100%"},value:h,onChange:q,appearance:"default",className:`${f.dateRangePicker}`})]}),e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3 ms-1 ms-lg-2 mt-1",children:e.jsx(Pe,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsxs("select",{value:K.state?K.Ovalue:null,className:"form-select form-select-lg","aria-label":"Default select example",id:"office",onChange:R,style:{paddingBottom:"4px !important",paddingTop:"4px !important"},children:[A.length>1?e.jsxs(e.Fragment,{children:[e.jsxs("option",{value:D,"data-officename":n,"data-isretail":"-1","data-isadmin":"6",className:`${f.boldOption}`,children:[t("Entities"),"(",E(n,10),")"]})," "]}):"",A.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:D,"data-officename":n,"data-isretail":"0","data-isadmin":"4",className:`${f.boldOption}`,children:["  ",t("Companies"),"(",E(n,10),")"]})}):"",A.map(a=>e.jsxs("option",{value:a.officeId,"data-officename":a.officeName,"data-isadmin":"5",className:`${f.optionGroup}`,children:["      ",E(a.officeName,20)]},a.officeId)),B.length>1||z.length>1?e.jsxs(e.Fragment,{children:[" ",e.jsxs("option",{value:D,"data-officename":n,"data-isretail":"-1","data-isadmin":"1",className:`${f.boldOption}`,children:["  ",t("Pumps"),"(",E(n,10),")"]})]}):"",B.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:D,"data-officename":n,"data-isretail":"0","data-isadmin":"3",className:`${f.boldOption}`,children:["   ",t("Wholesale Pumps")]})}):"",B.map(a=>e.jsxs("option",{value:a.officeId,"data-officename":a.officeName,"data-isadmin":"0",className:`${f.optionGroup}`,children:["      ",E(a.officeName,20)]},a.officeId)),z.length>0?e.jsxs("option",{value:D,"data-officename":n,"data-isretail":"1","data-isadmin":"2",className:`${f.boldOption}`,children:["   ",t("Retail Pumps")]}):"",z.map(a=>e.jsxs("option",{value:a.officeId,"data-officename":a.officeName,"data-isadmin":"0",className:`${f.optionGroup}`,children:["      ",a.officeName]},a.officeId))]})]})]})}),e.jsx("div",{className:`${window.innerWidth>550?"container-fluid":""}`,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-8",children:e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ct,{selectedRange:h,themeMode:l,selectedOffice:m,isAdmin:g,alldata:P,isLoading:I,officeName:w})})}),e.jsx("div",{className:"col-md-12 col-lg-4",children:e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(lt,{selectedRange:h,themeMode:l,selectedOffice:m,isAdmin:g,alldata:P,isLoading:I,officeName:w})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(dt,{selectedRange:h,themeMode:l,selectedOffice:m,isAdmin:g,officeName:w,alldata:P,isLoading:I})})}),e.jsx("div",{className:"col-md-12 col-lg-6 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",style:{paddingTop:"410px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(rt,{selectedRange:h,themeMode:l,selectedOffice:m,isAdmin:g,alldata:P,isLoading:I,setSelectedOfficeName:J,selectedOfficeNameLocal:w,setSelectedOfficeNameLocal:j,SelectedOfficeName:n,setSelectedOffice:M,setIsAdmin:U,setCompanies:O,setWholesales:Q,setRetails:Y,originallist:ee,setOfficeIdLocal:G,officeIdLocal:D,setOptionvalue:te})})})]})})]})},ut=T.lazy(()=>k(()=>import("./UserCard-9b2d1eb3.js"),["assets/UserCard-9b2d1eb3.js","assets/vendor-5be16ce1.js"])),pt=T.lazy(()=>k(()=>import("./OfficeCard-28e44f7d.js"),["assets/OfficeCard-28e44f7d.js","assets/vendor-5be16ce1.js"])),ft=T.lazy(()=>k(()=>import("./SalesCard-fc0f5f4c.js"),["assets/SalesCard-fc0f5f4c.js","assets/vendor-5be16ce1.js"])),ht=T.lazy(()=>k(()=>import("./ExpenseCard-680559fc.js"),["assets/ExpenseCard-680559fc.js","assets/vendor-5be16ce1.js"])),yt=()=>{const c=new URLSearchParams(window.location.search).get("theme")||"light",{t:u,i18n:p}=ye();c==="light"?(document.documentElement.style.setProperty("--rs-body","rgb(210 210 210)"),document.documentElement.style.setProperty("--text-color","#282829d4"),document.documentElement.style.setProperty("--option-color","white"),document.documentElement.style.setProperty("--backgroundOverlay","rgb(249 249 249 / 81%)"),document.documentElement.style.setProperty("--bs-table-bg","#ffffff00")):(document.documentElement.style.setProperty("--rs-body","#111111"),document.documentElement.style.setProperty("--text-color","white"),document.documentElement.style.setProperty("--option-color","#111111"),document.documentElement.style.setProperty("--backgroundOverlay","#1a1c2db8"),document.documentElement.style.setProperty("--bs-table-bg","#00000000"));const[o,t]=s.useState(0),[d,h]=s.useState(0),[W,x]=s.useState(0),[b,m]=s.useState(0),[M,g]=s.useState(0),[U,A]=s.useState(0),O=c,[B,Q]=s.useState(""),[z,Y]=s.useState(""),[$,v]=s.useState(""),[n,J]=s.useState(window.innerWidth),[P,H]=s.useState({}),[I,C]=s.useState(""),[ee,X]=s.useState(0),[D,G]=s.useState(0),K=()=>{J(window.innerWidth)};return s.useEffect(()=>(window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K)}),[]),s.useEffect(()=>{(async()=>{try{const w=new URLSearchParams(window.location.search),j=w.get("userId"),Z=w.get("jwtToken");let q="";if(Z&&(q=JSON.parse(atob(Z.split(".")[1]))),p.changeLanguage(w.get("lang")||"en"),j){Q(j);const R=`https://def-pumps-api.inspirigenceworks.co.in/api/Auth/User/${j}`,a=await(await V.get(R)).data;Y(a),C(a.officeName),a.roleName==="CompanyAdmin"?v(6):(a.roleName,v(0));const N=`https://def-pumps-api.inspirigenceworks.co.in/api/Dashboard/AdminDashboradData/${a.officeId}/${a.roleName==="PumpUser"||a.roleName==="CompanyAdmin",1}`,r=await(await V.get(N)).data;H(r);const _=r.userCount||[],ae=r.officeCount||[],se=r.incomeDetails.total,oe=r.incomeDetails.count,ne=r.expenseDetails.total,ie=r.expenseDetails.count;G(r.incomeDetailsCurrentDay.total),X(r.expenseDetailsCurrentDay.total),t(_),h(ae),x(se),m(ne),g(oe),A(ie)}else if(q){const R=q.sub;if(R){Q(R);const E=`https://def-pumps-api.inspirigenceworks.co.in/api/Auth/User/${R}`,i=await(await V.get(E)).data;Y(i),C(i.officeName),i.roleName==="CompanyAdmin"?v(6):(i.roleName,v(0));const L=`https://def-pumps-api.inspirigenceworks.co.in/api/Dashboard/AdminDashboradData/${i.officeId}/${i.roleName==="PumpUser"||i.roleName==="CompanyAdmin",1}`,_=await(await V.get(L)).data;H(_);const ae=_.userCount||[],se=_.officeCount||[],oe=_.incomeDetails.total,ne=_.incomeDetails.count,ie=_.expenseDetails.total,xe=_.expenseDetails.count;G(_.incomeDetailsCurrentDay.total),X(_.expenseDetailsCurrentDay.total),t(ae),h(se),x(oe),m(ie),g(ne),A(xe)}}}catch(w){console.log("Error fetching data:",w)}})()},[]),e.jsx("div",{className:`${S.container} ${O==="dark"?S.darkMode:S.lightMode} ${S.scrollableContainer}`,children:e.jsxs("div",{className:`${S.dashboard} `,children:[e.jsx("div",{className:`${S.dashboardHead} ${S.container2}  ${O==="dark"?"theme-container":"theme2-container"}`,style:{minWidth:"100%"},children:e.jsxs("div",{className:`${S.cards} mb-1 ${O==="dark"?S.darkMode:S.lightMode}`,children:[e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:P?e.jsx(ut,{userCountData:o}):e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:P?e.jsx(pt,{officeCountData:d}):e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:P?e.jsx(ft,{totalIncome:W,countIncome:M,todaySales:D}):e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:P?e.jsx(ht,{totalExpense:b,countExpense:U,todayExpense:ee}):e.jsx(y,{variant:"rounded",width:n>900?"22%":n>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})})]})}),e.jsx(mt,{themeMode:O,officeId:z.officeId,adminStatus:$,userId:B,userOfficeName:I})]})})};const xt=()=>e.jsx("div",{id:"dashboard",children:e.jsx(yt,{})});const _t="Users",gt="Office",wt="Sales",St="Expense",bt="days",$t="CompanyAdmin",Pt="PumpUser",vt="PumpAdmin",Dt="Company",Et="Filter",Nt="Close",Tt="Entities",kt="Companies",Ot="Pumps",Ct="Today",jt="Yesterday",Rt="Total",Lt="Period",At="Quantity",It="to",Ft="Product",Vt="Rows",Wt="Sale",Mt="Qty",Ut="of",Bt="Name",Qt="Mobile",zt="Vehicle",Yt="Top",Ht="Visit",Gt={Users:_t,Office:gt,Sales:wt,Expense:St,days:bt,CompanyAdmin:$t,PumpUser:Pt,PumpAdmin:vt,Company:Dt,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:Et,Close:Nt,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF",Entities:Tt,Companies:kt,Pumps:Ot,Today:Ct,Yesterday:jt,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:Rt,Period:Lt,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:At,to:It,Product:Ft,"No Data Found":"No Data Found",Rows:Vt,"Total Sale":"Total Sale","Product Wise":"Product Wise",Sale:Wt,Qty:Mt,of:Ut,"Top Customers":"Top Customers",Name:Bt,Mobile:Qt,Vehicle:zt,Top:Yt,Visit:Ht},Kt="उपयोगकर्ता",qt="कार्यालय",Jt="बिक्री",Xt="खर्च",Zt="दिन",ea="कंपनी प्रशासक",ta="पंप उपयोगकर्ता",aa="पंप व्यवस्थापक",sa="कंपनी",oa="फ़िल्टर",na="बंद करें",ia="संस्थान",ca="कंपनियाँ",ra="पंप",la="आज",da="कल",ma="कुल",ua="अवधि",pa="मात्रा",fa="से",ha="उत्पाद",ya="पंक्तियाँ",xa="बिक्री",_a="मात्रा",ga="की",wa="नाम",Sa="मोबाइल",ba="वाहन",$a="शीर्ष",Pa="यात्रा",va={Users:Kt,Office:qt,Sales:Jt,Expense:Xt,days:Zt,CompanyAdmin:ea,PumpUser:ta,PumpAdmin:aa,Company:sa,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:oa,Close:na,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें",Entities:ia,Companies:ca,Pumps:ra,Today:la,Yesterday:da,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:ma,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:ua,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:pa,to:fa,Product:ha,"No Data Found":"कोई डेटा नहीं मिला",Rows:ya,"Product Wise Summary Data":"उत्पाद वार संक्षिप्त आंकड़े","Total Sale":"कुल बिक्री","Product Wise":"उत्पाद वार",Sale:xa,Qty:_a,of:ga,"Top Customers":"शीर्ष ग्राहक",Name:wa,Mobile:Sa,Vehicle:ba,Top:$a,Visit:Pa},Da="ব্যবহারকারী",Ea="অফিস",Na="বিক্রয়",Ta="ব্যয়",ka="দিন",Oa="কোম্পানি প্রশাসক",Ca="পাম্প ব্যবহারকারী",ja="পাম্প প্রশাসক",Ra="কোম্পানি",La="ফিল্টার",Aa="বন্ধ করুন",Ia="ইণ্টিটি",Fa="কোম্পানি",Va="পাম্প",Wa="আজ",Ma="গতকাল",Ua="মোট",Ba="সময়কাল",Qa="পরিমাণ",za="থেকে",Ya="পণ্য",Ha="সারি",Ga="বিক্রি",Ka="পরিমাণ",qa="এর",Ja="নাম",Xa="মোবাইল",Za="যানবাহন",es="শীর্ষ",ts="দর্শন",as={Users:Da,Office:Ea,Sales:Na,Expense:Ta,days:ka,CompanyAdmin:Oa,PumpUser:Ca,PumpAdmin:ja,Company:Ra,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:La,Close:Aa,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন",Entities:Ia,Companies:Fa,Pumps:Va,Today:Wa,Yesterday:Ma,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:Ua,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:Ba,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:Qa,to:za,Product:Ya,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:Ha,"Product Wise Summary Data":"পণ্য ভিত্তিক সংক্ষিপ্ত উপাদান","Total Sale":"মোট বিক্রি","Product Wise":"পণ্য অনুযায়ী",Sale:Ga,Qty:Ka,of:qa,"Top Customers":"শীর্ষ গ্রাহকগণ",Name:Ja,Mobile:Xa,Vehicle:Za,Top:es,Visit:ts},ss={en:{translation:Gt},hi:{translation:va},bn:{translation:as}};ve.use(De).init({resources:ss,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Ee.createRoot(document.getElementById("root")).render(e.jsx(xt,{}));export{k as _,S as c};
