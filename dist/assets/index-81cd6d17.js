import{a as U,R as O,u as xe,b as F,s as le,e as ce,c as de,d as me,f as ue,g as _e,r as s,t as pe,j as e,F as ge,h as we,i as Se,k as be,D as Pe,l as ve,S as g,m as $e,n as De,o as Ee}from"./vendor-1b7ca1de.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function d(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(n){if(n.ep)return;n.ep=!0;const t=d(n);fetch(n.href,t)}})();const ke="modulepreload",Ne=function(r){return"/"+r},fe={},j=function(o,d,f){if(!d||d.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(d.map(t=>{if(t=Ne(t),t in fe)return;fe[t]=!0;const c=t.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(!!f)for(let $=n.length-1;$>=0;$--){const u=n[$];if(u.href===t&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${m}`))return;const x=document.createElement("link");if(x.rel=c?"stylesheet":ke,c||(x.as="script",x.crossOrigin=""),x.href=t,document.head.appendChild(x),c)return new Promise(($,u)=>{x.addEventListener("load",$),x.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o()).catch(t=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=t,window.dispatchEvent(c),!c.defaultPrevented)throw t})},Te="_container_1ahtk_1",Oe="_dashboard_1ahtk_33",je="_dashboardHead_1ahtk_47",Ce="_head_1ahtk_61",Ae="_durationButton_1ahtk_99",Re="_lightMode_1ahtk_117",Le="_cards_1ahtk_117",Ie="_darkMode_1ahtk_133",Fe="_card1_1ahtk_151",Ue="_card2_1ahtk_171",We="_card3_1ahtk_191",Be="_card4_1ahtk_213",Me="_cardHead_1ahtk_297",Ve="_cardAmount_1ahtk_331",ze="_container2_1ahtk_439",Qe="_cardHeadLight_1ahtk_1151",Ye="_cardAmountLight_1ahtk_1159",He="_switchIcon_1ahtk_1167",v={container:Te,dashboard:Oe,dashboardHead:je,head:Ce,durationButton:Ae,lightMode:Re,cards:Le,darkMode:Ie,card1:Fe,card2:Ue,card3:We,card4:Be,cardHead:Me,cardAmount:Ve,container2:ze,cardHeadLight:Qe,cardAmountLight:Ye,switchIcon:He},Ge="_container_nli5c_3",Ke="_title_nli5c_27",qe="_cards_nli5c_49",Je="_card_nli5c_49",Xe="_arrowIcon_nli5c_107",Ze="_durationButton_nli5c_131",et="_lightMode_nli5c_151",tt="_dateFilter_nli5c_169",at="_officefilter_nli5c_277",st="_boldOption_nli5c_377",nt="_topContainer_nli5c_465",ot="_darkMode_nli5c_489",it="_dateRangePicker_nli5c_761",y={container:Ge,"rs-picker-toggle-textbox":"_rs-picker-toggle-textbox_nli5c_19","rs-stack-item":"_rs-stack-item_nli5c_21","theme2-container":"_theme2-container_nli5c_23",title:Ke,cards:qe,card:Je,arrowIcon:Xe,durationButton:Ze,lightMode:et,dateFilter:tt,officefilter:at,boldOption:st,topContainer:nt,darkMode:ot,dateRangePicker:it};const he=r=>{if(!r)return"";const o=r.getFullYear(),d=String(r.getMonth()+1).padStart(2,"0"),f=String(r.getDate()).padStart(2,"0");return`${o}-${d}-${f}`};async function ee(r,o,d,f){try{let n=await U.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${he(r)}/${he(o)}/${d}/${f}`);const{data:t}=n;return t}catch(n){console.log(n)}}const rt=O.lazy(()=>j(()=>import("./StatisticsChart-208b701c.js"),["assets/StatisticsChart-208b701c.js","assets/vendor-1b7ca1de.js","assets/index-0a842ed6.js","assets/StatisticsChart-5ea32f12.css"])),lt=O.lazy(()=>j(()=>import("./StatisticsChart2-7b0b70f0.js"),["assets/StatisticsChart2-7b0b70f0.js","assets/vendor-1b7ca1de.js","assets/index-0a842ed6.js","assets/StatisticsChart2-4d3da148.css"])),ct=O.lazy(()=>j(()=>import("./OrdersPieChart-cc77d85a.js"),["assets/OrdersPieChart-cc77d85a.js","assets/vendor-1b7ca1de.js","assets/index-0a842ed6.js","assets/OrdersPieChart-6ea8c40b.css"])),dt=O.lazy(()=>j(()=>import("./ProductQtyChart-7d48ef16.js"),["assets/ProductQtyChart-7d48ef16.js","assets/vendor-1b7ca1de.js","assets/index-0a842ed6.js","assets/ProductQtyChart-fd977282.css"])),mt=({themeMode:r,officeId:o,adminStatus:d,userId:f,userOfficeName:n})=>{const{t}=xe(),c=[{label:t("Today"),value:[new Date,new Date],placement:"left"},{label:t("Yesterday"),value:[F(new Date,-1),F(new Date,-1)],placement:"left"},{label:t("This week"),value:[le(new Date),ce(new Date)],placement:"left"},{label:t("Last 7 days"),value:[de(new Date,6),new Date],placement:"left"},{label:t("Last 30 days"),value:[de(new Date,29),new Date],placement:"left"},{label:t("This month"),value:[me(new Date),new Date],placement:"left"},{label:t("Last month"),value:[me(ue(new Date,-1)),_e(ue(new Date,-1))],placement:"left"},{label:t("This year"),value:[new Date(new Date().getFullYear(),0,1),new Date],placement:"left"},{label:t("Last year"),value:[new Date(new Date().getFullYear()-1,0,1),new Date(new Date().getFullYear(),0,0)],placement:"left"},{label:t("Last week"),closeOverlay:!1,value:a=>{const[i=new Date]=a||[];return[F(le(i,{weekStartsOn:0}),-7),F(ce(i,{weekStartsOn:0}),-7)]},appearance:"default"},{label:t("Next week"),closeOverlay:!1,value:a=>{const[i=new Date]=a||[];return[F(le(i,{weekStartsOn:0}),7),F(ce(i,{weekStartsOn:0}),7)]},appearance:"default"}],[m,W]=s.useState([pe(de(new Date,6)),pe(new Date)]),[x,$]=s.useState([]),[u,B]=s.useState(o),[D,M]=s.useState(d),[L,C]=s.useState([]),[V,z]=s.useState([]),[Q,Y]=s.useState([]),[E,k]=s.useState(!1),[l,J]=s.useState(""),[N,A]=s.useState([]),[H,w]=s.useState(!0),[te,X]=s.useState([]),[T,G]=s.useState(o),[K,ae]=s.useState("");s.useEffect(()=>{(async()=>{try{if(f&&o){const p=await(await U.get(`http://115.124.120.251:5064/api/v1/dashboard/dropdown_list/${f}`)).data;w(!0);let h=await ee(m[0],m[1],o,d);if(h&&(A(h),w(!1)),p){p.length===1&&J(n),B(o),M(d),G(o),$(p);let S=[];p.map(_=>{S.push({officeId:_.OfficeId,officeName:_.OfficeName,officeType:_.OfficeTypeName})}),C(S.filter(_=>_.officeType==="Company")),z(S.filter(_=>_.officeType==="Wholesale Pumps")),Y(S.filter(_=>_.officeType==="Retail Pumps")),X({officeId:o,adminStatus:d})}}}catch(i){console.log("Error fetching office data:",i)}})()},[f,o,d]),s.useEffect(()=>{u&&R()},[u]);const R=async()=>{w(!0);let a=await ee(m[0],m[1],u,D);a&&(A(a),w(!1))},q=async a=>{if(a===null)W([null,null]);else{w(!0),W(a);let i=await ee(a[0],a[1],u,D);i&&(A(i),w(!1))}},Z=async a=>{const i=a.target.selectedOptions[0];ae({state:!1,Ovalue:a.target.value}),w(!0);const p=i.getAttribute("data-isadmin");B(a.target.value),M(p),x.filter(S=>S.OfficeId===a.target.value).length>0&&J(x.filter(S=>S.OfficeId===a.target.value)[0].OfficeName);let h=await ee(m[0],m[1],a.target.value,p);h&&(A(h),w(!1))},I=(a,i)=>window.innerWidth>500||a.length<=i?a:a.substring(0,i)+"...";return e.jsxs("div",{className:`${y.container} ${r==="dark"?"theme-container":"theme2-container"} pb-5`,children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("div",{className:`fs-${window.innerWidth<=768?3:2} mx-sm-0 mx-md-3 fw-bold`,children:[e.jsx("span",{className:"me-2 ms-md-1  ms-2 text-primary",children:e.jsx(ge,{})})," ",t("Sales Overview")]}),e.jsxs("button",{className:"btn btn-primary btn-lg mx-2 d-flex align-items-center shadow border-2 border-white",type:"submit",onClick:()=>k(!E),children:[e.jsx("span",{className:"d-flex",children:E?e.jsx(we,{style:{fontSize:"1.4rem",marginRight:window.innerWidth>500?"4px":"0px"}}):e.jsx(Se,{style:{fontSize:"1.2rem",marginRight:window.innerWidth>500?"8px":"0px"}})}),"  ",window.innerWidth>500?t(E?"Close":"Filter"):""]})]}),e.jsx("div",{style:{visibility:E?"visible":"hidden",opacity:E?1:0,height:E?window.innerWidth>=768?"85px":"130px":0,marginBottom:E?"10px":0},className:`${y.topContainer} ${r==="dark"?y.darkMode:y.lightMode}`,children:e.jsxs("div",{className:"row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100",style:{width:"100% !important"},children:[e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3  ms-1 ms-lg-2",children:e.jsx(be,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsx(Pe,{ranges:c,size:"lg",showOneCalendar:!0,style:{color:"black",width:"100%"},value:m,onChange:q,appearance:"default",className:`${y.dateRangePicker}`})]}),e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3 ms-1 ms-lg-2 mt-1",children:e.jsx(ve,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsxs("select",{value:K.state?K.Ovalue:null,className:"form-select form-select-lg","aria-label":"Default select example",id:"office",onChange:Z,style:{paddingBottom:"4px !important",paddingTop:"4px !important"},children:[L.length>1?e.jsxs(e.Fragment,{children:[e.jsx("option",{value:T,"data-isretail":"-1","data-isadmin":"6",className:`${y.boldOption}`,children:t("All Entities")})," "]}):"",L.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:T,"data-isretail":"0","data-isadmin":"4",className:`${y.boldOption}`,children:["  ",t("All Companies")]})}):"",L.map(a=>e.jsxs("option",{value:a.officeId,"data-isadmin":"5",className:`${y.optionGroup}`,children:["      ",I(a.officeName,20)]},a.officeId)),V.length>1||Q.length>1?e.jsxs(e.Fragment,{children:[" ",e.jsxs("option",{value:T,"data-isretail":"-1","data-isadmin":"1",className:`${y.boldOption}`,children:["  ",t("All Pumps")]})]}):"",V.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:T,"data-isretail":"0","data-isadmin":"3",className:`${y.boldOption}`,children:["   ",t("Wholesale Pumps")]})}):"",V.map(a=>e.jsxs("option",{value:a.officeId,"data-isadmin":"0",className:`${y.optionGroup}`,children:["      ",I(a.officeName,20)]},a.officeId)),Q.length>0?e.jsxs("option",{value:T,"data-isretail":"1","data-isadmin":"2",className:`${y.boldOption}`,children:["   ",t("Retail Pumps")]}):"",Q.map(a=>e.jsxs("option",{value:a.officeId,"data-isadmin":"0",className:`${y.optionGroup}`,children:["      ",a.officeName]},a.officeId))]})]})]})}),e.jsx("div",{className:`${window.innerWidth>550?"container-fluid":""}`,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-8",children:e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(rt,{selectedRange:m,themeMode:r,selectedOffice:u,isAdmin:D,alldata:N,isLoading:H})})}),e.jsx("div",{className:"col-md-12 col-lg-4",children:e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ct,{selectedRange:m,themeMode:r,selectedOffice:u,isAdmin:D,alldata:N,isLoading:H})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(dt,{selectedRange:m,themeMode:r,selectedOffice:u,isAdmin:D,alldata:N,isLoading:H})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(lt,{selectedRange:m,themeMode:r,selectedOffice:u,isAdmin:D,SelectedOfficeName:l,setSelectedOffice:B,setIsAdmin:M,setCompanies:C,setWholesales:z,setRetails:Y,originallist:te,setOfficeIdLocal:G,officeIdLocal:T,setOptionvalue:ae})})})]})})]})},ut=O.lazy(()=>j(()=>import("./UserCard-ff4e3159.js"),["assets/UserCard-ff4e3159.js","assets/vendor-1b7ca1de.js"])),pt=O.lazy(()=>j(()=>import("./OfficeCard-3d25e22d.js"),["assets/OfficeCard-3d25e22d.js","assets/vendor-1b7ca1de.js"])),ft=O.lazy(()=>j(()=>import("./SalesCard-407ad62d.js"),["assets/SalesCard-407ad62d.js","assets/vendor-1b7ca1de.js"])),ht=O.lazy(()=>j(()=>import("./ExpenseCard-d56d9f5e.js"),["assets/ExpenseCard-d56d9f5e.js","assets/vendor-1b7ca1de.js"])),xt=()=>{const o=new URLSearchParams(window.location.search).get("theme")||"light",{t:d,i18n:f}=xe();o==="light"?(document.documentElement.style.setProperty("--rs-body","rgb(210 210 210)"),document.documentElement.style.setProperty("--text-color","#111111"),document.documentElement.style.setProperty("--option-color","white"),document.documentElement.style.setProperty("--backgroundOverlay","rgb(249 249 249 / 81%)")):(document.documentElement.style.setProperty("--rs-body","#111111"),document.documentElement.style.setProperty("--text-color","white"),document.documentElement.style.setProperty("--option-color","#111111"),document.documentElement.style.setProperty("--backgroundOverlay","#1a1c2db8"));const[n,t]=s.useState(0),[c,m]=s.useState(0),[W,x]=s.useState(0),[$,u]=s.useState(0),[B,D]=s.useState(0),[M,L]=s.useState(0),C=o,[V,z]=s.useState(""),[Q,Y]=s.useState(""),[E,k]=s.useState(""),[l,J]=s.useState(window.innerWidth),[N,A]=s.useState({}),[H,w]=s.useState(""),[te,X]=s.useState(0),[T,G]=s.useState(0),K=()=>{J(window.innerWidth)};return s.useEffect(()=>(window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K)}),[]),s.useEffect(()=>{(async()=>{try{const R=new URLSearchParams(window.location.search),q=R.get("userId"),Z=R.get("jwtToken");let I="";if(Z&&(I=JSON.parse(atob(Z.split(".")[1]))),f.changeLanguage(R.get("lang")||"en"),q){z(q);const a=`http://115.124.120.251:5059/api/Auth/User/${q}`,p=await(await U.get(a)).data;Y(p),w(p.officeName),p.roleName==="CompanyAdmin"?k(6):(p.roleName,k(0));const S=`http://115.124.120.251:5059/api/Dashboard/AdminDashboradData/${p.officeId}/${p.roleName==="PumpUser"||p.roleName==="CompanyAdmin",1}`,P=await(await U.get(S)).data;A(P);const b=P.userCount||[],se=P.officeCount||[],ne=P.incomeDetails.total,oe=P.incomeDetails.count,ie=P.expenseDetails.total,re=P.expenseDetails.count;G(P.incomeDetailsCurrentDay.total),X(P.expenseDetailsCurrentDay.total),t(b),m(se),x(ne),u(ie),D(oe),L(re)}else if(I){const a=I.sub;if(a){z(a);const i=`http://115.124.120.251:5059/api/Auth/User/${a}`,h=await(await U.get(i)).data;Y(h),w(h.officeName),h.roleName==="CompanyAdmin"?k(6):(h.roleName,k(0));const _=`http://115.124.120.251:5059/api/Dashboard/AdminDashboradData/${h.officeId}/${h.roleName==="PumpUser"||h.roleName==="CompanyAdmin",1}`,b=await(await U.get(_)).data;A(b);const se=b.userCount||[],ne=b.officeCount||[],oe=b.incomeDetails.total,ie=b.incomeDetails.count,re=b.expenseDetails.total,ye=b.expenseDetails.count;G(b.incomeDetailsCurrentDay.total),X(b.expenseDetailsCurrentDay.total),t(se),m(ne),x(oe),u(re),D(ie),L(ye)}}}catch(R){console.log("Error fetching data:",R)}})()},[]),e.jsx("div",{className:`${v.container} ${C==="dark"?v.darkMode:v.lightMode} ${v.scrollableContainer}`,children:e.jsxs("div",{className:`${v.dashboard} `,children:[e.jsx("div",{className:`${v.dashboardHead} ${v.container2}  ${C==="dark"?"theme-container":"theme2-container"}`,style:{minWidth:"100%"},children:e.jsxs("div",{className:`${v.cards} mb-1 ${C==="dark"?v.darkMode:v.lightMode}`,children:[e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:N?e.jsx(ut,{userCountData:n}):e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:N?e.jsx(pt,{officeCountData:c}):e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:N?e.jsx(ft,{totalIncome:W,countIncome:B,todaySales:T}):e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:N?e.jsx(ht,{totalExpense:$,countExpense:M,todayExpense:te}):e.jsx(g,{variant:"rounded",width:l>900?"22%":l>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})})]})}),e.jsx(mt,{themeMode:C,officeId:Q.officeId,adminStatus:E,userId:V,userOfficeName:H})]})})};const yt=()=>e.jsx("div",{id:"dashboard",children:e.jsx(xt,{})});const _t="Users",gt="Office",wt="Sales",St="Expense",bt="days",Pt="CompanyAdmin",vt="PumpUser",$t="PumpAdmin",Dt="Company",Et="Filter",kt="Close",Nt="Today",Tt="Yesterday",Ot="Total",jt="Period",Ct="Quantity",At="to",Rt="Product",Lt="Rows",It={Users:_t,Office:gt,Sales:wt,Expense:St,days:bt,CompanyAdmin:Pt,PumpUser:vt,PumpAdmin:$t,Company:Dt,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:Et,Close:kt,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF","All Entities":"All Entities","All Companies":"All Companies","All Pumps":"All Pumps",Today:Nt,Yesterday:Tt,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:Ot,Period:jt,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:Ct,to:At,Product:Rt,"No Data Found":"No Data Found",Rows:Lt},Ft="उपयोगकर्ता",Ut="कार्यालय",Wt="बिक्री",Bt="खर्च",Mt="दिन",Vt="कंपनी प्रशासक",zt="पंप उपयोगकर्ता",Qt="पंप व्यवस्थापक",Yt="कंपनी",Ht="फ़िल्टर",Gt="बंद करें",Kt="आज",qt="कल",Jt="कुल",Xt="अवधि",Zt="मात्रा",ea="से",ta="उत्पाद",aa="पंक्तियाँ",sa={Users:Ft,Office:Ut,Sales:Wt,Expense:Bt,days:Mt,CompanyAdmin:Vt,PumpUser:zt,PumpAdmin:Qt,Company:Yt,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:Ht,Close:Gt,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें","All Entities":"सभी संस्थान","All Companies":"सभी कंपनियाँ","All Pumps":"सभी पंप",Today:Kt,Yesterday:qt,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:Jt,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:Xt,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:Zt,to:ea,Product:ta,"No Data Found":"कोई डेटा नहीं मिला",Rows:aa},na="ব্যবহারকারী",oa="অফিস",ia="বিক্রয়",ra="ব্যয়",la="দিন",ca="কোম্পানি প্রশাসক",da="পাম্প ব্যবহারকারী",ma="পাম্প প্রশাসক",ua="কোম্পানি",pa="ফিল্টার",fa="বন্ধ করুন",ha="আজ",xa="গতকাল",ya="মোট",_a="সময়কাল",ga="পরিমাণ",wa="থেকে",Sa="পণ্য",ba="সারি",Pa={Users:na,Office:oa,Sales:ia,Expense:ra,days:la,CompanyAdmin:ca,PumpUser:da,PumpAdmin:ma,Company:ua,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:pa,Close:fa,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন","All Entities":"সমস্ত ইণ্টিটি","All Companies":"সমস্ত কোম্পানি","All Pumps":"সমস্ত পাম্প",Today:ha,Yesterday:xa,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:ya,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:_a,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:ga,to:wa,Product:Sa,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:ba},va={en:{translation:It},hi:{translation:sa},bn:{translation:Pa}};$e.use(De).init({resources:va,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Ee.createRoot(document.getElementById("root")).render(e.jsx(yt,{}));export{j as _,v as c};
