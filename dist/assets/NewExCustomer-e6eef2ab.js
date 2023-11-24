import{_ as X}from"./index-d667ba75.js";import{r as c,u as Le,j as o}from"./vendor-36ea1262.js";import{i as Ae,J as He,n as Re,B as We,C as Ge,E as Ue,H as qe,a as P}from"./axios-67c74b23.js";import{l as Ye}from"./ReactToastify-3f69f13c.js";import{l as K,f as pe,a as we}from"./NotoSansDevanagari-VariableFont_wdth_wght-7a6127ac.js";import{k as Je,Q as D}from"./react-toastify.esm-56fcd767.js";import{b as Qe}from"./Dashboard-ef62ae5f.js";import{T as Xe}from"./react-is.production.min-a7172f38.js";import{F as Ke,S as Ze,M as re}from"./Select-59912b68.js";import{I as et}from"./InputLabel-28742f83.js";import"./jspdf.es.min-6ff7be58.js";import"./installSVGRenderer-7788c1a1.js";import"./Skeleton-72dc062d.js";import"./isMuiElement-03f9640f.js";import"./useTheme-5e746bd8.js";import"./createSvgIcon-e54ccc0d.js";const tt="_piechart_1hrwn_11",ot="_chartContainer_1hrwn_23",nt="_legendButtonContainer_1hrwn_49",st="_legendButton_1hrwn_49",at="_codeBlockIcon_1hrwn_133",rt="_lightMode_1hrwn_191",it="_dateFilter_1hrwn_195",lt="_officefilter_1hrwn_351",ut="_topContainer_1hrwn_443",ct="_darkMode_1hrwn_463",dt="_iconsContainer_1hrwn_631",mt="_icon_1hrwn_631",Ct="_exportOptions_1hrwn_715",ht="_exportOption_1hrwn_715",gt="_NoDataOverlay_1hrwn_861",ft="_tableContainer_1hrwn_993",pt="_table_1hrwn_993",wt="_summaryHeader_1hrwn_1029",xt="_periodHeader_1hrwn_1037",bt="_closeButton_1hrwn_1069",yt="_tableWrapper_1hrwn_1099",Nt="_loadingOverlay_1hrwn_1107",St="_loadingSpinner_1hrwn_1133",_t="_boldOption_1hrwn_1145",Ft="_optionGroup_1hrwn_1155",p={piechart:tt,chartContainer:ot,"legend-text":"_legend-text_1hrwn_31",legendButtonContainer:nt,legendButton:st,codeBlockIcon:at,lightMode:rt,"label-text":"_label-text_1hrwn_191",dateFilter:it,officefilter:lt,topContainer:ut,darkMode:ct,"theme-container":"_theme-container_1hrwn_473",iconsContainer:dt,icon:mt,exportOptions:Ct,exportOption:ht,NoDataOverlay:gt,tableContainer:ft,table:pt,summaryHeader:wt,periodHeader:xt,closeButton:bt,tableWrapper:yt,loadingOverlay:Nt,loadingSpinner:St,boldOption:_t,optionGroup:Ft},Yt=({echarts:ie,ReactECharts:xe,themeMode:V,selectedRange:v,selectedOffice:Tt,isAdmin:vt,alldata:kt,showGraph:le,officeName:O,isLoading:ue,newExData:ce})=>{const[be,Dt]=c.useState([]),[Z,R]=c.useState(!1),ee=c.useRef(null),te=c.useRef(null),de=c.useRef(null),{t:n}=Le(),[$t,me]=c.useState(!1),[W,L]=c.useState([]),[ye,Bt]=c.useState(!0),[G,A]=c.useState(!1),[u,Ne]=c.useState("Name"),[d,Se]=c.useState([]),[m,_e]=c.useState([]),[C,Fe]=c.useState([]);c.useState(5),c.useState([]);const[I,U]=c.useState(!1),[b,oe]=c.useState("Customers");c.useState([]),c.useState([]),c.useState([]),c.useEffect(()=>{he(v[0]),he(v[1]),(async()=>{try{const t=ce;if(t.graph1){U(!1);const s=t.graph1.byName,l=t.graph1.byMobile,a=t.graph1.byVehicle,i=s.existingCustomerCount,h=s.newCustomerCount,w=l.existingCustomerCount,B=l.newCustomerCount,S=a.existingCustomerCount,_=a.newCustomerCount;Se({existingCustomerCount:i,newCustomerCount:h,existingCustomer:s.existingCustomer,newCustomer:s.newCustomer}),_e({existingCustomerCount:w,newCustomerCount:B,existingCustomer:l.existingCustomer,newCustomer:l.newCustomer}),Fe({existingCustomerCount:S,newCustomerCount:_,existingCustomer:a.existingCustomer,newCustomer:a.newCustomer});let r=[];switch(u){case"Name":r=[{"#":1,CustomerName:"Existing Customers","Total Count":i},{"#":2,CustomerName:"New Customers","Total Count":h}];break;case"Mobile":r=[{"#":1,CustomerName:"Existing Customers","Total Count":w},{"#":2,CustomerName:"New Customers","Total Count":B}];break;case"Vehicle":r=[{"#":1,CustomerName:"Existing Customers","Total Count":S},{"#":2,CustomerName:"New Customers","Total Count":_}];break;default:return}L(r)}}catch(t){console.error("Error fetching data:",t)}})()},[ce]);const Ce=()=>{switch(u){case"Name":return d.existingCustomerCount===0&&d.newCustomerCount===0?{}:{existingCustomerCount:d.existingCustomerCount,newCustomerCount:d.newCustomerCount};case"Mobile":return m.existingCustomerCount===0&&m.newCustomerCount===0?{}:{existingCustomerCount:m.existingCustomerCount,newCustomerCount:m.newCustomerCount};case"Vehicle":return C.existingCustomerCount===0&&C.newCustomerCount===0?{}:{existingCustomerCount:C.existingCustomerCount,newCustomerCount:C.newCustomerCount};default:return{}}};function q(e,t){var s=parseInt(e.substring(1,3),16),l=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16);s=parseInt(s*(100+t)/100),l=parseInt(l*(100+t)/100),a=parseInt(a*(100+t)/100),s=s<255?s:255,l=l<255?l:255,a=a<255?a:255,s=Math.round(s),l=Math.round(l),a=Math.round(a);var i=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),h=l.toString(16).length==1?"0"+l.toString(16):l.toString(16),w=a.toString(16).length==1?"0"+a.toString(16):a.toString(16);return"#"+i+h+w}const Te={title:{left:"center",textStyle:{color:"#333",fontSize:16}},tooltip:{trigger:"item",formatter:e=>{const t=Math.round(e.percent);return`${e.seriesName} <br/>${e.name}: ${e.value} (${t}%)`}},legend:{orient:"horizontal",bottom:0,data:[n("Existing Customers"),n("New Customers")],textStyle:{color:V==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4}},series:[{name:n("Customers"),type:"pie",radius:["35%","70%"],center:["50%","40%"],avoidLabelOverlap:!0,label:{show:!0,position:"inside",formatter:e=>{const t=Math.round(e.percent);return t>0?`${t}%`:""},fontSize:15,fontWeight:"bold",color:"white"},emphasis:{label:{show:!0,fontSize:15,fontWeight:"bold"}},labelLine:{show:!1},data:[{value:Ce().existingCustomerCount,name:n("Existing Customers"),itemStyle:{color:new ie.graphic.LinearGradient(0,1,0,0,[{offset:1,color:q("#8080ff",10)},{offset:0,color:q("#8080ff",-10)}])}},{value:Ce().newCustomerCount,name:n("New Customers"),itemStyle:{color:new ie.graphic.LinearGradient(0,1,0,0,[{offset:1,color:q("#3cb043",10)},{offset:0,color:q("#3cb043",-10)}])}}],itemStyle:{borderWidth:2,borderColor:"#ffffff00",borderRadius:4}}]},Y=e=>{let t="";const s=new Uint8Array(e),l=s.byteLength;for(let a=0;a<l;a++)t+=String.fromCharCode(s[a]);return window.btoa(t)},$=e=>{if(!e)return"";const t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${s}-${t}`},he=e=>{if(!e)return"";const t=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0");return`${t}-${s}-${l}`},ve=async()=>{const e=D.loading("Please wait..."),t=$(v[0]),s=$(v[1]),l=await X(()=>import("./exceljs.min-6ae529e9.js").then(h=>h.e),["assets/exceljs.min-6ae529e9.js","assets/vendor-36ea1262.js"]),a=new l.Workbook,i=a.addWorksheet("Data");fetch(K).then(h=>h.blob()).then(async h=>{const w=new FileReader;w.onload=async function(){const B=w.result,S=a.addImage({base64:B,extension:"png"});i.addImage(S,{tl:{col:0,row:0},ext:{width:100,height:60}});const _=i.getCell("A1");_.value=`${n("Customers Summary Data")} (${O})`,_.font={bold:!0,color:{argb:"000000"},size:14},_.alignment={vertical:"middle",horizontal:"center"},i.mergeCells("A1:C1");const r=i.getCell("A2");r.value=`${n("Period")}: ${t} ${n("to")} ${s}`,r.font={bold:!0,color:{argb:"000000"},size:12},r.alignment={horizontal:"center"},i.mergeCells("A2:C2"),i.getColumn(1).width=15,i.getColumn(2).width=50,i.getColumn(3).width=15;const E=i.addRow([n("#"),n("Customer Type"),n("Total Count")]);E.font={bold:!0,color:{argb:"000000"},size:12},E.eachCell(y=>{y.font={bold:!0,color:{argb:"000000"},size:12},y.border={bottom:{style:"thin",color:{argb:"000000"}}}});let x=[];switch(u){case"Name":x=[{"#":1,CustomerName:"Existing Customers","Total Count":d.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":d.newCustomerCount}];break;case"Mobile":x=[{"#":1,CustomerName:"Existing Customers","Total Count":m.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":m.newCustomerCount}];break;case"Vehicle":x=[{"#":1,CustomerName:"Existing Customers","Total Count":C.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":C.newCustomerCount}];break;default:return}const j=x.reduce((y,g)=>y+g["Total Count"],0);x.push({"#":"",CustomerName:n("Total"),"Total Count":j}),x.forEach((y,g)=>{const f=i.addRow([g+1,y.CustomerName,y["Total Count"]]);f.getCell(1).alignment={horizontal:"left"},f.getCell(2).alignment={horizontal:"left"},f.getCell(3).alignment={horizontal:"right"}});const z=`${Date.now()}Customers_Summary_by${u}${O}${t}_${s}.xlsx`;a.xlsx.writeBuffer().then(async y=>{const g=new FormData;g.append("file",new Blob([y]),z);try{const f=await P.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",g,{headers:{"Content-Type":"multipart/form-data"}});f.status==200?D.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):D.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const F=f.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${F}`}catch(f){console.error("Error saving Excel file:",f)}})},w.readAsDataURL(h)})},ke=async()=>{const e=D.loading("Please wait..."),t=$(v[0]),s=$(v[1]),l=await X(()=>import("./exceljs.min-6ae529e9.js").then(h=>h.e),["assets/exceljs.min-6ae529e9.js","assets/vendor-36ea1262.js"]),a=new l.Workbook,i=a.addWorksheet("Data");fetch(K).then(h=>h.blob()).then(async h=>{const w=new FileReader;w.onload=async function(){const B=w.result,S=a.addImage({base64:B,extension:"png"});i.addImage(S,{tl:{col:0,row:0},ext:{width:100,height:60}});const _=i.getCell("A1");_.value=`${b} (${O})`,_.font={bold:!0,color:{argb:"000000"},size:14},_.alignment={vertical:"middle",horizontal:"center"},i.mergeCells("A1:C1");const r=i.getCell("A2");r.value=`${n("Period")}: ${t} ${n("to")} ${s}`,r.font={bold:!0,color:{argb:"000000"},size:12},r.alignment={horizontal:"center"},i.mergeCells("A2:D2"),i.getColumn(1).width=15,i.getColumn(2).width=50,i.getColumn(3).width=15;const E=i.addRow([n("#"),n(u),n("Count")]);E.font={bold:!0,color:{argb:"000000"},size:12},E.eachCell(g=>{g.font={bold:!0,color:{argb:"000000"},size:12},g.border={bottom:{style:"thin",color:{argb:"000000"}}}});let x=[];switch(u){case"Name":x=b==="Existing Customers"?d.existingCustomer:d.newCustomer;break;case"Mobile":x=b==="Existing Customers"?m.existingCustomer:m.newCustomer;break;case"Vehicle":x=b==="Existing Customers"?C.existingCustomer:C.newCustomer;break;default:return}x.forEach((g,f)=>{const F=i.addRow([f+1,g[u==="Name"?"CustomerName":u==="Mobile"?"MobileNo":"VehicleNo"],g.totalCount]);F.getCell(1).alignment={horizontal:"left"},F.getCell(2).alignment={horizontal:"left"},F.getCell(3).alignment={horizontal:"right"}});const j=x.reduce((g,f)=>g+f.totalCount,0),M=i.addRow(["",n("Total"),j]);M.font={bold:!0},M.getCell(2).alignment={horizontal:"left"};const y=`${Date.now()} ${b}${O}${t}_${s}.xlsx`;a.xlsx.writeBuffer().then(async g=>{const f=new FormData;f.append("file",new Blob([g]),y);try{const F=await P.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",f,{headers:{"Content-Type":"multipart/form-data"}});F.status==200?D.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):D.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const T=F.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${T}`}catch(F){console.error("Error saving Excel file:",F)}})},w.readAsDataURL(h)})},De=async()=>{const e=D.loading("Please wait..."),t=$(v[0]),s=$(v[1]),a=new URLSearchParams(window.location.search).get("lang"),i=await P.get(pe,{responseType:"arraybuffer"}),h=Y(i.data),w=await P.get(we,{responseType:"arraybuffer"}),B=Y(w.data);X(()=>import("./jspdf.es.min-6ff7be58.js").then(S=>S.j),["assets/jspdf.es.min-6ff7be58.js","assets/index-d667ba75.js","assets/vendor-36ea1262.js","assets/index-74b21cfb.css","assets/Dashboard-ef62ae5f.js","assets/axios-67c74b23.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-72dc062d.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let _=S.default;const r=new _;r.addFileToVFS("NotoSansBengali.ttf",h),r.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),r.setFont("NotoSansBengali"),r.addFileToVFS("NotoSansDevanagari.ttf",B),r.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),r.setFont("NotoSansDevanagari");const E=[[n("#"),n("Customer Type"),n("Total Count")]],x={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"}},j={fontSize:12,fontStyle:"bold",halign:"center"},M={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},z=K,y=35,g=20;r.addImage(z,"PNG",15,12,y,g);const f=[[`${n("Customers Summary Data")} (${O})`]];r.autoTable({head:f,body:[],headStyles:{...j,fillColor:M.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const F=[[`${n("Period")}: ${t} ${n("to")} ${s}`]];r.autoTable({startY:39.5,head:F,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let T=[];switch(u){case"Name":T=[{"#":1,CustomerName:"Existing Customers","Total Count":d.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":d.newCustomerCount}];break;case"Mobile":T=[{"#":1,CustomerName:"Existing Customers","Total Count":m.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":m.newCustomerCount}];break;case"Vehicle":T=[{"#":1,CustomerName:"Existing Customers","Total Count":C.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":C.newCustomerCount}];break;default:return}const J=T.reduce((k,N)=>k+N["Total Count"],0);T.push({"#":"",CustomerName:n("Total"),"Total Count":J});let ne=T.map((k,N)=>[N+1,k.CustomerName,k["Total Count"]]);const se={startY:r.autoTable.previous.finalY+1,head:E,body:ne,headStyles:{...j,fillColor:M.secondHeader,textColor:"#FFFFFF"},columnStyles:x,styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};r.autoTable(se);const fe=`${Date.now()}Customers_Summary_by${u}${O}${t}_${s}.pdf`,ae=r.output("blob"),Q=new FormData;Q.append("file",ae,fe);try{const k=await P.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",Q,{headers:{"Content-Type":"multipart/form-data"}});k.status==200?D.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):D.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const N=await k.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${N}`}catch(k){console.error("Error saving PDF file:",k)}})},$e=async()=>{const e=D.loading("Please wait..."),t=$(v[0]),s=$(v[1]),a=new URLSearchParams(window.location.search).get("lang"),i=await P.get(pe,{responseType:"arraybuffer"}),h=Y(i.data),w=await P.get(we,{responseType:"arraybuffer"}),B=Y(w.data);X(()=>import("./jspdf.es.min-6ff7be58.js").then(S=>S.j),["assets/jspdf.es.min-6ff7be58.js","assets/index-d667ba75.js","assets/vendor-36ea1262.js","assets/index-74b21cfb.css","assets/Dashboard-ef62ae5f.js","assets/axios-67c74b23.js","assets/installSVGRenderer-7788c1a1.js","assets/Skeleton-72dc062d.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let _=S.default;const r=new _;r.addFileToVFS("NotoSansBengali.ttf",h),r.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),r.setFont("NotoSansBengali"),r.addFileToVFS("NotoSansDevanagari.ttf",B),r.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),r.setFont("NotoSansDevanagari");const E=[[n("#"),n(u),n("Count")]],x={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"}},j={fontSize:12,fontStyle:"bold",halign:"center"},M={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},z=K,y=35,g=20;r.addImage(z,"PNG",15,12,y,g);const f=[[`${b} (${O})`]];r.autoTable({head:f,body:[],headStyles:{...j,fillColor:M.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const F=[[`${n("Period")}: ${t} ${n("to")} ${s}`]];r.autoTable({startY:39.5,head:F,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let T=[];switch(u){case"Name":T=b==="Existing Customers"?d.existingCustomer:d.newCustomer;break;case"Mobile":T=b==="Existing Customers"?m.existingCustomer:m.newCustomer;break;case"Vehicle":T=b==="Existing Customers"?C.existingCustomer:C.newCustomer;break;default:return}let J=T.map((N,H)=>[H+1,N[u==="Name"?"CustomerName":u==="Mobile"?"MobileNo":"VehicleNo"],N.totalCount]);const ne=T.reduce((N,H)=>N+H.totalCount,0),se=["",n("Total"),ne];J.push(se);const ge={startY:r.autoTable.previous.finalY+1,head:E,body:J,headStyles:{...j,fillColor:M.secondHeader,textColor:"#FFFFFF"},columnStyles:x,styles:{font:a==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};r.autoTable(ge);const ae=`${Date.now()}Sales_of_${b}${O}${t}_${s}.pdf`,Q=r.output("blob"),k=new FormData;k.append("file",Q,ae);try{const N=await P.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",k,{headers:{"Content-Type":"multipart/form-data"}});N.status==200?D.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):D.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const H=await N.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${H}`}catch(N){console.error("Error saving PDF file:",N)}})};c.useEffect(()=>{const e=t=>{ee.current&&!ee.current.contains(t.target)&&te.current&&!te.current.contains(t.target)&&t.target.tagName!=="svg"&&t.target.tagName!=="path"&&R(!1),de.current&&!de.current.contains(t.target)&&me(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),c.useEffect(()=>{A(!le)},[le]);const Be=e=>{const t=e.target.value;if(Ne(t),I===!0){let s=[];switch(t){case"Name":s=b==="Existing Customers"?d.existingCustomer:d.newCustomer;break;case"Mobile":s=b==="Existing Customers"?m.existingCustomer:m.newCustomer;break;case"Vehicle":s=b==="Existing Customers"?C.existingCustomer:C.newCustomer;break;default:return}const l=s.map((a,i)=>({"#":i+1,[t==="Name"?"CustomerName":t==="Mobile"?"MobileNo":"VehicleNo"]:a[t==="Name"?"CustomerName":t==="Mobile"?"MobileNo":"VehicleNo"],"Total Count":a.totalCount}));L(l)}else{let s=[];switch(t){case"Name":s=[{"#":1,CustomerName:"Existing Customers","Total Count":d.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":d.newCustomerCount}];break;case"Mobile":s=[{"#":1,CustomerName:"Existing Customers","Total Count":m.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":m.newCustomerCount}];break;case"Vehicle":s=[{"#":1,CustomerName:"Existing Customers","Total Count":C.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":C.newCustomerCount}];break;default:return}L(s)}},Ee=e=>{if(e&&e.data&&e.dataIndex>=0){e.dataIndex;const t=e.data.name;let s=[];switch(console.log(e),u){case"Name":s=t==="Existing Customers"?d.existingCustomer:d.newCustomer;break;case"Mobile":s=t==="Existing Customers"?m.existingCustomer:m.newCustomer;break;case"Vehicle":s=t==="Existing Customers"?C.existingCustomer:C.newCustomer;break;default:return}const l=s.map((a,i)=>({"#":i+1,[u==="Name"?"CustomerName":u==="Mobile"?"MobileNo":"VehicleNo"]:a[u==="Name"?"CustomerName":u==="Mobile"?"MobileNo":"VehicleNo"],"Total Count":a.totalCount}));console.log(t),L(l),A(!0),oe(t),U(!0)}},je=Ae({typography:{button:{textTransform:"none"}}}),Me=()=>{U(!1),A(!1),oe("Customers")},Oe=()=>{me(!1),R(!Z)},Pe=()=>{U(!1),R(!1),A(!G),oe("Customers")},Ie=()=>{let e=[];switch(u){case"Name":e=[{"#":1,CustomerName:"Existing Customers","Total Count":d.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":d.newCustomerCount}];break;case"Mobile":e=[{"#":1,CustomerName:"Existing Customers","Total Count":m.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":m.newCustomerCount}];break;case"Vehicle":e=[{"#":1,CustomerName:"Existing Customers","Total Count":C.existingCustomerCount},{"#":2,CustomerName:"New Customers","Total Count":C.newCustomerCount}];break;default:return}L(e),A(!0),R(!1)},Ve=$(v[0]),ze=$(v[1]);return o.jsx(o.Fragment,{children:o.jsxs("div",{className:`${p.chartContainer} ${V==="dark"?p.darkMode:p.lightMode}`,children:[o.jsx(Je,{position:"top-center",theme:V}),o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[I?o.jsx("div",{title:"Previous",className:p.resetButtonContainer,children:o.jsx("button",{title:"Previous",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:Me,children:o.jsx(He,{style:{fontSize:"1rem"}})})}):null,o.jsx("div",{className:"d-flex align-items-center",children:o.jsx(Xe,{theme:je,children:o.jsxs(Ke,{sx:{mx:1,mt:1,minWidth:120},size:"small",children:[o.jsx(et,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:n(b)}),o.jsxs(Ze,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:u,onChange:Be,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:n(b),children:[o.jsx(re,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Name",children:n("Name")}),o.jsx(re,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Mobile",children:n("Mobile")}),o.jsx(re,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Vehicle",children:n("Vehicle")})]})]})})}),o.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:ee,children:o.jsxs("div",{className:`${p.iconsContainer} d-flex justify-content-center align-items-center`,children:[o.jsx("div",{className:`${p.icon} ${V==="dark"?p.darkMode:p.lightMode} px-2 py-1`,onClick:Oe,children:Z?o.jsx(Re,{style:{fontSize:"1.1rem"}}):o.jsx(We,{style:{fontSize:"1.1rem"}})}),Z&&o.jsxs("div",{className:`${p.exportOptions} ${V==="dark"?p.darkMode:p.lightMode}`,ref:te,children:[G?o.jsxs("div",{className:p.exportOption,onClick:Pe,children:[o.jsx(Qe,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),o.jsx("span",{children:n("View Graph")})]}):o.jsxs("div",{className:p.exportOption,onClick:Ie,children:[o.jsx(Ge,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),o.jsx("span",{children:n("View Table")})]}),o.jsxs("div",{className:p.exportOption,onClick:I?ke:ve,children:[o.jsx(Ue,{style:{fontSize:"1.1rem",color:"green"}}),o.jsx("span",{children:n("Export to Excel")})]}),o.jsxs("div",{className:p.exportOption,onClick:I?$e:De,children:[o.jsx(qe,{style:{fontSize:"1.1rem",color:"red"}}),o.jsx("span",{children:n("Export to PDF")})]})]})]})})]})}),ue&&o.jsx("div",{className:p.loadingOverlay,children:o.jsx("img",{src:Ye,alt:"Loading...",width:50,height:50})}),W.reduce((e,t)=>e+t["Total Count"],0)==0&&!G&&!ue?o.jsx("div",{className:`${p.NoDataOverlay} fs-5`,children:n("No Data Found")}):null,G?o.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"290px"},children:o.jsxs("table",{className:`table ${V=="dark"?"table-dark":""}`,children:[o.jsxs("thead",{children:[o.jsx("tr",{children:o.jsxs("th",{colSpan:"3",style:{textAlign:"center"},children:[n("Period"),": ",Ve," ",n("to")," ",ze]})}),o.jsxs("tr",{children:[o.jsx("th",{scope:"col",children:"#"}),o.jsx("th",{scope:"col",children:n(I===!0?u==="Name"?"Customer Name":u==="Mobile"?"Mobile No":"Vehicle No":"Customer Type")}),o.jsx("th",{scope:"col",children:I==!0?n("Count"):n("Total Count")})]})]}),o.jsxs("tbody",{children:[W.map((e,t)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:t+1}),o.jsxs("td",{children:[" ",I===!0?u==="Name"?e.CustomerName:u==="Mobile"?e.MobileNo:e.VehicleNo:e.CustomerName]}),o.jsx("td",{children:e["Total Count"]})]},t)),W.length>0&&o.jsxs("tr",{children:[o.jsx("th",{scope:"row"}),o.jsx("td",{children:n("Total")}),o.jsx("td",{children:W.reduce((e,t)=>e+t["Total Count"],0)})]})]})]})}):o.jsx(xe,{option:Te,notMerge:ye,style:{height:"297px",width:"100%",maxWidth:"2300px"},className:p.piechart,onEvents:{click:Ee}},be.length)]})})};export{Yt as default};
