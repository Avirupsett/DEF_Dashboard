import{a as U,R as j,u as xe,b as F,s as oe,e as ie,c as re,d as me,f as ue,g as _e,r as s,t as pe,j as e,F as ge,h as we,i as Se,k as be,D as Pe,l as $e,S as _,m as De,n as ve,o as Ee}from"./vendor-abef7372.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))f(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&f(l)}).observe(document,{childList:!0,subtree:!0});function u(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(n){if(n.ep)return;n.ep=!0;const t=u(n);fetch(n.href,t)}})();const Oe="modulepreload",ke=function(i){return"/"+i},fe={},C=function(o,u,f){if(!u||u.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(u.map(t=>{if(t=ke(t),t in fe)return;fe[t]=!0;const l=t.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!f)for(let P=n.length-1;P>=0;P--){const m=n[P];if(m.href===t&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const x=document.createElement("link");if(x.rel=l?"stylesheet":Oe,l||(x.as="script",x.crossOrigin=""),x.href=t,document.head.appendChild(x),l)return new Promise((P,m)=>{x.addEventListener("load",P),x.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o()).catch(t=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=t,window.dispatchEvent(l),!l.defaultPrevented)throw t})},Ne="_container_1ahtk_1",Te="_dashboard_1ahtk_33",je="_dashboardHead_1ahtk_47",Ce="_head_1ahtk_61",Ae="_durationButton_1ahtk_99",Re="_lightMode_1ahtk_117",Le="_cards_1ahtk_117",Ie="_darkMode_1ahtk_133",Fe="_card1_1ahtk_151",Ue="_card2_1ahtk_171",We="_card3_1ahtk_191",Be="_card4_1ahtk_213",Me="_cardHead_1ahtk_297",Ve="_cardAmount_1ahtk_331",ze="_container2_1ahtk_439",Qe="_cardHeadLight_1ahtk_1151",Ye="_cardAmountLight_1ahtk_1159",He="_switchIcon_1ahtk_1167",b={container:Ne,dashboard:Te,dashboardHead:je,head:Ce,durationButton:Ae,lightMode:Re,cards:Le,darkMode:Ie,card1:Fe,card2:Ue,card3:We,card4:Be,cardHead:Me,cardAmount:Ve,container2:ze,cardHeadLight:Qe,cardAmountLight:Ye,switchIcon:He},Ge="_container_nli5c_3",Ke="_title_nli5c_27",qe="_cards_nli5c_49",Je="_card_nli5c_49",Xe="_arrowIcon_nli5c_107",Ze="_durationButton_nli5c_131",et="_lightMode_nli5c_151",tt="_dateFilter_nli5c_169",at="_officefilter_nli5c_277",st="_boldOption_nli5c_377",nt="_topContainer_nli5c_465",ot="_darkMode_nli5c_489",it="_dateRangePicker_nli5c_761",h={container:Ge,"rs-picker-toggle-textbox":"_rs-picker-toggle-textbox_nli5c_19","rs-stack-item":"_rs-stack-item_nli5c_21","theme2-container":"_theme2-container_nli5c_23",title:Ke,cards:qe,card:Je,arrowIcon:Xe,durationButton:Ze,lightMode:et,dateFilter:tt,officefilter:at,boldOption:st,topContainer:nt,darkMode:ot,dateRangePicker:it};const he=i=>{if(!i)return"";const o=i.getFullYear(),u=String(i.getMonth()+1).padStart(2,"0"),f=String(i.getDate()).padStart(2,"0");return`${o}-${u}-${f}`};async function q(i,o,u,f){try{let n=await U.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${he(i)}/${he(o)}/${u}/${f}`);const{data:t}=n;return t}catch(n){console.log(n)}}const rt=j.lazy(()=>C(()=>import("./StatisticsChart-2c1ed17d.js"),["assets/StatisticsChart-2c1ed17d.js","assets/vendor-abef7372.js","assets/index-e248b1af.js","assets/StatisticsChart-5ea32f12.css"])),lt=j.lazy(()=>C(()=>import("./StatisticsChart2-ba416689.js"),["assets/StatisticsChart2-ba416689.js","assets/vendor-abef7372.js","assets/index-e248b1af.js","assets/StatisticsChart2-4d3da148.css"])),ct=j.lazy(()=>C(()=>import("./OrdersPieChart-42530c6c.js"),["assets/OrdersPieChart-42530c6c.js","assets/vendor-abef7372.js","assets/index-e248b1af.js","assets/OrdersPieChart-6ea8c40b.css"])),dt=j.lazy(()=>C(()=>import("./ProductQtyChart-60f2df97.js"),["assets/ProductQtyChart-60f2df97.js","assets/vendor-abef7372.js","assets/index-e248b1af.js","assets/ProductQtyChart-fd977282.css"])),mt=({themeMode:i,officeId:o,adminStatus:u,userId:f,userOfficeName:n})=>{const{t}=xe(),l=[{label:t("Today"),value:[new Date,new Date],placement:"left"},{label:t("Yesterday"),value:[F(new Date,-1),F(new Date,-1)],placement:"left"},{label:t("This week"),value:[oe(new Date),ie(new Date)],placement:"left"},{label:t("Last 7 days"),value:[re(new Date,6),new Date],placement:"left"},{label:t("Last 30 days"),value:[re(new Date,29),new Date],placement:"left"},{label:t("This month"),value:[me(new Date),new Date],placement:"left"},{label:t("Last month"),value:[me(ue(new Date,-1)),_e(ue(new Date,-1))],placement:"left"},{label:t("This year"),value:[new Date(new Date().getFullYear(),0,1),new Date],placement:"left"},{label:t("Last year"),value:[new Date(new Date().getFullYear()-1,0,1),new Date(new Date().getFullYear(),0,0)],placement:"left"},{label:t("Last week"),closeOverlay:!1,value:a=>{const[c=new Date]=a||[];return[F(oe(c,{weekStartsOn:0}),-7),F(ie(c,{weekStartsOn:0}),-7)]},appearance:"default"},{label:t("Next week"),closeOverlay:!1,value:a=>{const[c=new Date]=a||[];return[F(oe(c,{weekStartsOn:0}),7),F(ie(c,{weekStartsOn:0}),7)]},appearance:"default"}],[d,W]=s.useState([pe(re(new Date,6)),pe(new Date)]),[x,P]=s.useState([]),[m,B]=s.useState(o),[$,M]=s.useState(u),[D,L]=s.useState([]),[V,Y]=s.useState([]),[A,H]=s.useState([]),[v,O]=s.useState(!1),[r,G]=s.useState(""),[k,R]=s.useState([]),[z,g]=s.useState(!0);s.useEffect(()=>{(async()=>{try{if(f&&o){const p=await(await U.get(`http://115.124.120.251:5064/api/v1/dashboard/dropdown_list/${f}`)).data;g(!0);let E=await q(d[0],d[1],o,u);E&&(R(E),g(!1)),p&&(p.length===1&&G(n),B(o),M(u),P(p),L(p.filter(y=>y.OfficeTypeName==="Company")),Y(p.filter(y=>y.OfficeTypeName==="Wholesale Pumps")),H(p.filter(y=>y.OfficeTypeName==="Retail Pumps")))}}catch(c){console.log("Error fetching office data:",c)}})()},[f,o,u]),s.useEffect(()=>{m&&J()},[m]);const J=async()=>{g(!0);let a=await q(d[0],d[1],m,$);a&&(R(a),g(!1))},K=async a=>{if(a===null)W([null,null]);else{g(!0),W(a);let c=await q(a[0],a[1],m,$);c&&(R(c),g(!1))}},X=async a=>{const c=a.target.selectedOptions[0];g(!0);const p=c.getAttribute("data-isadmin");B(a.target.value),M(p),x.filter(y=>y.OfficeId===a.target.value).length>0&&G(x.filter(y=>y.OfficeId===a.target.value)[0].OfficeName);let E=await q(d[0],d[1],a.target.value,p);E&&(R(E),g(!1))},I=(a,c)=>window.innerWidth>500||a.length<=c?a:a.substring(0,c)+"...";return e.jsxs("div",{className:`${h.container} ${i==="dark"?"theme-container":"theme2-container"} pb-5`,children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("div",{className:"fs-2 mx-sm-0 mx-md-3 fw-bold",children:[e.jsx("span",{className:"me-2 ms-md-1  ms-2 text-primary",children:e.jsx(ge,{})})," ",t("Sales Overview")]}),e.jsxs("button",{className:"btn btn-primary btn-lg mx-2 d-flex align-items-center",type:"submit",onClick:()=>O(!v),children:[e.jsx("span",{className:"d-flex",children:v?e.jsx(we,{style:{fontSize:"1.4rem",marginRight:window.innerWidth>500?"4px":"0px"}}):e.jsx(Se,{style:{fontSize:"1.2rem",marginRight:window.innerWidth>500?"8px":"0px"}})}),"  ",window.innerWidth>500?t(v?"Close":"Filter"):""]})]}),e.jsx("div",{style:{visibility:v?"visible":"hidden",opacity:v?1:0,height:v?window.innerWidth>=768?"85px":"130px":0,marginBottom:v?"10px":0},className:`${h.topContainer} ${i==="dark"?h.darkMode:h.lightMode}`,children:e.jsxs("div",{className:"row d-flex justify-content-start flex-wrap align-items-center mx-0 mx-sm-2 mx-md-0 w-100",style:{width:"100% !important"},children:[e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center pw-md-0 mx-0 ",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3  ms-1 ms-lg-2",children:e.jsx(be,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsx(Pe,{ranges:l,size:"lg",showOneCalendar:!0,style:{color:"black",width:"100%"},value:d,onChange:K,appearance:"default",className:`${h.dateRangePicker}`})]}),e.jsxs("div",{className:"col-md-6 col-lg-5 col-xl-4 col-xxl-4 my-sm-2   my-2 d-flex justify-content-center align-items-center mx-0",children:[window.innerWidth>400?e.jsx("div",{className:"me-2 me-sm-3 ms-1 ms-lg-2 mt-1",children:e.jsx($e,{style:{fontSize:"2.3rem",color:"white"}})}):"",e.jsxs("select",{className:"form-select form-select-lg","aria-label":"Default select example",id:"office",onChange:X,style:{paddingBottom:"4px !important",paddingTop:"4px !important"},children:[D.length>1?e.jsxs(e.Fragment,{children:[e.jsx("option",{value:o,"data-isretail":"-1","data-isadmin":"6",className:`${h.boldOption}`,children:t("All Entities")})," "]}):"",D.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:o,"data-isretail":"0","data-isadmin":"4",className:`${h.boldOption}`,children:["  ",t("All Companies")]})}):"",D.map(a=>e.jsxs("option",{value:a.OfficeId,"data-isretail":a.OfficeTypeId===2?"1":"0","data-isadmin":"5",className:`${h.optionGroup}`,children:["      ",I(a.OfficeName,20)]},a.OfficeId)),V.length>1||A.length>1?e.jsxs(e.Fragment,{children:[" ",e.jsxs("option",{value:o,"data-isretail":"-1","data-isadmin":"1",className:`${h.boldOption}`,children:["  ",t("All Pumps")]})]}):"",V.length>0&&D.length>0?e.jsx(e.Fragment,{children:e.jsxs("option",{value:o,"data-isretail":"0","data-isadmin":"3",className:`${h.boldOption}`,children:["   ",t("Wholesale Pumps")]})}):"",V.map(a=>e.jsxs("option",{value:a.OfficeId,"data-isretail":a.OfficeTypeId===2?"1":"0","data-isadmin":"0",className:`${h.optionGroup}`,children:["      ",I(a.OfficeName,20)]},a.OfficeId)),A.length>0&&D.length>0?e.jsxs("option",{value:o,"data-isretail":"1","data-isadmin":"2",className:`${h.boldOption}`,children:["   ",t("Retail Pumps")]}):"",A.length>0&&D.length>0?A.map(a=>e.jsxs("option",{value:a.OfficeId,"data-isretail":a.OfficeTypeId===2?"1":"0","data-isadmin":"0",className:`${h.optionGroup}`,children:["      ",a.OfficeName]},a.OfficeId)):A.map(a=>e.jsx("option",{value:a.OfficeId,"data-isretail":a.OfficeTypeId===2?"1":"0","data-isadmin":"0",className:`${h.optionGroup}`,children:I(a.OfficeName,20)},a.OfficeId))]})]})]})}),e.jsx("div",{className:`${window.innerWidth>550?"container-fluid":""}`,children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 col-lg-8",children:e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(rt,{selectedRange:d,themeMode:i,selectedOffice:m,isAdmin:$,alldata:k,isLoading:z})})}),e.jsx("div",{className:"col-md-12 col-lg-4",children:e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(ct,{selectedRange:d,themeMode:i,selectedOffice:m,isAdmin:$,alldata:k,isLoading:z})})}),e.jsx("div",{className:"col-md-12 col-lg-4 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(dt,{selectedRange:d,themeMode:i,selectedOffice:m,isAdmin:$,alldata:k,isLoading:z})})}),e.jsx("div",{className:"col-md-12 col-lg-8 mt-2",children:e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",style:{paddingTop:"360px",borderRadius:"8px",marginBottom:"5px"}}),children:e.jsx(lt,{selectedRange:d,themeMode:i,selectedOffice:m,isAdmin:$,SelectedOfficeName:r,setSelectedOffice:B,setIsAdmin:M})})})]})})]})},ut=j.lazy(()=>C(()=>import("./UserCard-d5b82d06.js"),["assets/UserCard-d5b82d06.js","assets/vendor-abef7372.js"])),pt=j.lazy(()=>C(()=>import("./OfficeCard-0982e2e0.js"),["assets/OfficeCard-0982e2e0.js","assets/vendor-abef7372.js"])),ft=j.lazy(()=>C(()=>import("./SalesCard-c179737c.js"),["assets/SalesCard-c179737c.js","assets/vendor-abef7372.js"])),ht=j.lazy(()=>C(()=>import("./ExpenseCard-852752bd.js"),["assets/ExpenseCard-852752bd.js","assets/vendor-abef7372.js"])),xt=()=>{const o=new URLSearchParams(window.location.search).get("theme")||"light",{t:u,i18n:f}=xe();o==="light"?(document.documentElement.style.setProperty("--rs-body","rgb(210 210 210)"),document.documentElement.style.setProperty("--text-color","#111111"),document.documentElement.style.setProperty("--option-color","white"),document.documentElement.style.setProperty("--backgroundOverlay","rgb(249 249 249 / 81%)")):(document.documentElement.style.setProperty("--rs-body","#111111"),document.documentElement.style.setProperty("--text-color","white"),document.documentElement.style.setProperty("--option-color","#111111"),document.documentElement.style.setProperty("--backgroundOverlay","#1a1c2db8"));const[n,t]=s.useState(0),[l,d]=s.useState(0),[W,x]=s.useState(0),[P,m]=s.useState(0),[B,$]=s.useState(0),[M,D]=s.useState(0),L=o,[V,Y]=s.useState(""),[A,H]=s.useState(""),[v,O]=s.useState(""),[r,G]=s.useState(window.innerWidth),[k,R]=s.useState({}),[z,g]=s.useState(""),[J,K]=s.useState(0),[X,I]=s.useState(0),a=()=>{G(window.innerWidth)};return s.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),s.useEffect(()=>{(async()=>{try{const p=new URLSearchParams(window.location.search),E=p.get("userId"),y=p.get("jwtToken");let Z="";if(y&&(Z=JSON.parse(atob(y.split(".")[1]))),f.changeLanguage(p.get("lang")||"en"),E){Y(E);const Q=`http://115.124.120.251:5059/api/Auth/User/${E}`,N=await(await U.get(Q)).data;H(N),g(N.officeName),N.roleName==="CompanyAdmin"?O(6):(N.roleName,O(0));const ce=`http://115.124.120.251:5059/api/Dashboard/AdminDashboradData/${N.officeId}/${N.roleName==="PumpUser"||N.roleName==="CompanyAdmin",1}`,S=await(await U.get(ce)).data;R(S);const w=S.userCount||[],ee=S.officeCount||[],te=S.incomeDetails.total,ae=S.incomeDetails.count,se=S.expenseDetails.total,ne=S.expenseDetails.count;I(S.incomeDetailsCurrentDay.total),K(S.expenseDetailsCurrentDay.total),t(w),d(ee),x(te),m(se),$(ae),D(ne)}else if(Z){const Q=Z.sub;if(Q){Y(Q);const le=`http://115.124.120.251:5059/api/Auth/User/${Q}`,T=await(await U.get(le)).data;H(T),g(T.officeName),T.roleName==="CompanyAdmin"?O(6):(T.roleName,O(0));const de=`http://115.124.120.251:5059/api/Dashboard/AdminDashboradData/${T.officeId}/${T.roleName==="PumpUser"||T.roleName==="CompanyAdmin",1}`,w=await(await U.get(de)).data;R(w);const ee=w.userCount||[],te=w.officeCount||[],ae=w.incomeDetails.total,se=w.incomeDetails.count,ne=w.expenseDetails.total,ye=w.expenseDetails.count;I(w.incomeDetailsCurrentDay.total),K(w.expenseDetailsCurrentDay.total),t(ee),d(te),x(ae),m(ne),$(se),D(ye)}}}catch(p){console.log("Error fetching data:",p)}})()},[]),e.jsx("div",{className:`${b.container} ${L==="dark"?b.darkMode:b.lightMode} ${b.scrollableContainer}`,children:e.jsxs("div",{className:`${b.dashboard} `,children:[e.jsx("div",{className:`${b.dashboardHead} ${b.container2}  ${L==="dark"?"theme-container":"theme2-container"}`,style:{minWidth:"100%"},children:e.jsxs("div",{className:`${b.cards} mb-1 ${L==="dark"?b.darkMode:b.lightMode}`,children:[e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:k?e.jsx(ut,{userCountData:n}):e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:k?e.jsx(pt,{officeCountData:l}):e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:k?e.jsx(ft,{totalIncome:W,countIncome:B,todaySales:X}):e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})}),e.jsx(s.Suspense,{fallback:e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}}),children:k?e.jsx(ht,{totalExpense:P,countExpense:M,todayExpense:J}):e.jsx(_,{variant:"rounded",width:r>900?"22%":r>768?"45%":"40%",height:"auto",style:{borderRadius:"10px",paddingTop:"155px",margin:"10px"}})})]})}),e.jsx(mt,{themeMode:L,officeId:A.officeId,adminStatus:v,userId:V,userOfficeName:z})]})})};const yt=()=>e.jsx("div",{id:"dashboard",children:e.jsx(xt,{})});const _t="Users",gt="Office",wt="Sales",St="Expense",bt="days",Pt="CompanyAdmin",$t="PumpUser",Dt="PumpAdmin",vt="Company",Et="Filter",Ot="Close",kt="Today",Nt="Yesterday",Tt="Total",jt="Period",Ct="Quantity",At="to",Rt="Product",Lt="Rows",It={Users:_t,Office:gt,Sales:wt,Expense:St,days:bt,CompanyAdmin:Pt,PumpUser:$t,PumpAdmin:Dt,Company:vt,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:Et,Close:Ot,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF","All Entities":"All Entities","All Companies":"All Companies","All Pumps":"All Pumps",Today:kt,Yesterday:Nt,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:Tt,Period:jt,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:Ct,to:At,Product:Rt,"No Data Found":"No Data Found",Rows:Lt},Ft="उपयोगकर्ता",Ut="कार्यालय",Wt="बिक्री",Bt="खर्च",Mt="दिन",Vt="कंपनी प्रशासक",zt="पंप उपयोगकर्ता",Qt="पंप व्यवस्थापक",Yt="कंपनी",Ht="फ़िल्टर",Gt="बंद करें",Kt="आज",qt="कल",Jt="कुल",Xt="अवधि",Zt="मात्रा",ea="से",ta="उत्पाद",aa="पंक्तियाँ",sa={Users:Ft,Office:Ut,Sales:Wt,Expense:Bt,days:Mt,CompanyAdmin:Vt,PumpUser:zt,PumpAdmin:Qt,Company:Yt,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:Ht,Close:Gt,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें","All Entities":"सभी संस्थान","All Companies":"सभी कंपनियाँ","All Pumps":"सभी पंप",Today:Kt,Yesterday:qt,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:Jt,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:Xt,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:Zt,to:ea,Product:ta,"No Data Found":"कोई डेटा नहीं मिला",Rows:aa},na="ব্যবহারকারী",oa="অফিস",ia="বিক্রয়",ra="ব্যয়",la="দিন",ca="কোম্পানি প্রশাসক",da="পাম্প ব্যবহারকারী",ma="পাম্প প্রশাসক",ua="কোম্পানি",pa="ফিল্টার",fa="বন্ধ করুন",ha="আজ",xa="গতকাল",ya="মোট",_a="সময়কাল",ga="পরিমাণ",wa="থেকে",Sa="পণ্য",ba="সারি",Pa={Users:na,Office:oa,Sales:ia,Expense:ra,days:la,CompanyAdmin:ca,PumpUser:da,PumpAdmin:ma,Company:ua,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:pa,Close:fa,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন","All Entities":"সমস্ত ইণ্টিটি","All Companies":"সমস্ত কোম্পানি","All Pumps":"সমস্ত পাম্প",Today:ha,Yesterday:xa,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:ya,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:_a,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:ga,to:wa,Product:Sa,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:ba},$a={en:{translation:It},hi:{translation:sa},bn:{translation:Pa}};De.use(ve).init({resources:$a,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});Ee.createRoot(document.getElementById("root")).render(e.jsx(yt,{}));export{C as _,b as c};
