import{_ as ee}from"./index-563da8c0.js";import{r as u,u as Ye,K as Je,j as t,I as Qe,T as Ke,O as be,P as Xe,Q as Se,R as Y,i as Ze,A as et,B as tt,C as ot,E as at,G as nt,a as O}from"./vendor-95b9cd9c.js";import{L as we,R as rt}from"./index-837eb269.js";import{k as lt,l as Ce,Q as $,a as te,f as _e,b as Fe}from"./NotoSansDevanagari-VariableFont_wdth_wght-d4d26ad0.js";const st="_piechart_1hrwn_11",it="_chartContainer_1hrwn_23",ct="_legendButtonContainer_1hrwn_49",dt="_legendButton_1hrwn_49",ft="_codeBlockIcon_1hrwn_133",ut="_lightMode_1hrwn_191",ht="_dateFilter_1hrwn_195",pt="_officefilter_1hrwn_351",mt="_topContainer_1hrwn_443",gt="_darkMode_1hrwn_463",xt="_iconsContainer_1hrwn_631",yt="_icon_1hrwn_631",bt="_exportOptions_1hrwn_715",St="_exportOption_1hrwn_715",wt="_NoDataOverlay_1hrwn_861",Ct="_tableContainer_1hrwn_993",_t="_table_1hrwn_993",Ft="_summaryHeader_1hrwn_1029",vt="_periodHeader_1hrwn_1037",Dt="_closeButton_1hrwn_1069",Nt="_tableWrapper_1hrwn_1099",$t="_loadingOverlay_1hrwn_1107",jt="_loadingSpinner_1hrwn_1133",kt="_boldOption_1hrwn_1145",Bt="_optionGroup_1hrwn_1155",d={piechart:st,chartContainer:it,"legend-text":"_legend-text_1hrwn_31",legendButtonContainer:ct,legendButton:dt,codeBlockIcon:ft,lightMode:ut,"label-text":"_label-text_1hrwn_191",dateFilter:ht,officefilter:pt,topContainer:mt,darkMode:gt,"theme-container":"_theme-container_1hrwn_473",iconsContainer:xt,icon:yt,exportOptions:bt,exportOption:St,NoDataOverlay:wt,tableContainer:Ct,table:_t,summaryHeader:Ft,periodHeader:vt,closeButton:Dt,tableWrapper:Nt,loadingOverlay:$t,loadingSpinner:jt,boldOption:kt,optionGroup:Bt},zt=({themeMode:f,selectedRange:v,selectedOffice:ve,isAdmin:De,showGraph:de,alldata:oe,officeName:L,isLoading:fe})=>{const[m,E]=u.useState([]),[ae,J]=u.useState(!1),ne=u.useRef(null),re=u.useRef(null),ue=u.useRef(null),{t:a}=Ye(),[Tt,he]=u.useState(!1),[le,A]=u.useState([]),[q,Q]=u.useState(!1),[x,Ne]=u.useState("Name"),[V,$e]=u.useState([]),[R,je]=u.useState([]),[W,ke]=u.useState([]),[se,Be]=u.useState(5),[pe,Te]=u.useState([]),[P,ie]=u.useState(!1),[M,Ie]=u.useState(""),[Oe,me]=u.useState(!1),[G,Le]=u.useState([]);u.useEffect(()=>{if(oe.graph4){ie(!1);const e=oe.graph4,n=e.byName,o=e.byMobile,l=e.byVehicle;je(o),ke(l),$e(n)}},[oe]),u.useEffect(()=>{Q(!de)},[de]);function ge(e,n){var o=parseInt(e.substring(1,3),16),l=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);o=parseInt(o*(100+n)/100),l=parseInt(l*(100+n)/100),r=parseInt(r*(100+n)/100),o=o<255?o:255,l=l<255?l:255,r=r<255?r:255,o=Math.round(o),l=Math.round(l),r=Math.round(r);var s=o.toString(16).length==1?"0"+o.toString(16):o.toString(16),p=l.toString(16).length==1?"0"+l.toString(16):l.toString(16),c=r.toString(16).length==1?"0"+r.toString(16):r.toString(16);return"#"+s+p+c}const Pe={title:{textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{data:[a("Visit"),a("Sales")],bottom:0,textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"9%":"4%",right:"4%",top:"15%",bottom:"10%",containLabel:m.length>0},xAxis:[{type:"category",data:m.map(e=>e.filterName),axisPointer:{type:"shadow"},axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000",rotate:45,fontSize:11,formatter:e=>e.length>10?e.substring(0,10)+"...":e}}],yAxis:[{type:"value",name:a("Visit"),min:0,minInterval:1,axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000"}},{type:"value",name:a("Sales"),min:0,axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e}}],series:[{name:a("Visit"),type:"bar",barWidth:"35%",data:m.map(e=>e.count),itemStyle:{borderRadius:[10,10,0,0],color:new we(0,0,0,1,[{offset:0,color:"#a6ffcb"},{offset:1,color:"#1fa2ff"}])}},{name:a("Sales"),type:"line",yAxisIndex:1,data:m.map(e=>e.total),markPoint:{data:m.map((e,n)=>({value:e.total>=1e3?parseInt(e.total/1e3)+"k":e.total,xAxis:n,yAxis:e.total}))}}]},ze={title:{textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{show:!1,bottom:0,textStyle:{color:f==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?10:12}},grid:{left:window.innerWidth<=768?"14%":"9%",right:"4%",top:"15%",bottom:"10%",containLabel:pe.length>0},xAxis:[{type:"time",axisPointer:{label:{formatter:function(e){let n=new Date(e.value);return B(n)}}},axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{hideOverlap:!0,formatter:"{d} {MMM}",color:f==="dark"?"#ffffff":"#000000"}}],yAxis:{type:"value",axisLine:{lineStyle:{color:f==="dark"?"#ffffff":"#000000"}},axisLabel:{color:f==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e4?e/1e3+"k":e},splitLine:{show:!0,lineStyle:{color:f==="dark"?"grey":"silver",type:"dashed"}}},dataZoom:[{show:!0,type:"inside",filterMode:"none",xAxisIndex:[0],startValue:new Date(v[0]),endValue:new Date(v[1])}],series:Object.values(pe).map(e=>({name:e.productName,type:"bar",stack:"total",barWidth:"40%",label:{show:!1},itemStyle:{borderRadius:[5,5,5,5],color:new we(0,0,0,1,[{offset:1,color:ge(e.color,20)},{offset:0,color:ge(e.color,60)}])},data:Object.entries(e.daySales)}))},K=e=>{let n="";const o=new Uint8Array(e),l=o.byteLength;for(let r=0;r<l;r++)n+=String.fromCharCode(o[r]);return window.btoa(n)},B=e=>{if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${o}-${n}`},xe=e=>{if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${l}`},Ee=async()=>{const e=$.loading("Please wait..."),n=B(v[0]),o=B(v[1]),l=await ee(()=>import("./exceljs.min-03f8d777.js").then(p=>p.e),["assets/exceljs.min-03f8d777.js","assets/vendor-95b9cd9c.js"]),r=new l.Workbook,s=r.addWorksheet("Data");fetch(te).then(p=>p.blob()).then(async p=>{const c=new FileReader;c.onload=async function(){const S=c.result,w=r.addImage({base64:S,extension:"png"});s.addImage(w,{tl:{col:0,row:0},ext:{width:100,height:60}});const g=s.getCell("A1");g.value=`${a("Top Customers Summary Data")} (${L})`,g.font={bold:!0,color:{argb:"000000"},size:14},g.alignment={vertical:"middle",horizontal:"center"},s.mergeCells("A1:D1");const i=s.getCell("A2");i.value=`${a("Period")}: ${n} ${a("to")} ${o}`,i.font={bold:!0,color:{argb:"000000"},size:12},i.alignment={horizontal:"center"},s.mergeCells("A2:D2"),s.getColumn(1).width=15,s.getColumn(2).width=50,s.getColumn(3).width=15,s.getColumn(4).width=15;const C=s.addRow([a("#"),a(x),a("Visit"),a("Sales")]);C.font={bold:!0,color:{argb:"000000"},size:12},C.eachCell(b=>{b.font={bold:!0,color:{argb:"000000"},size:12},b.border={bottom:{style:"thin",color:{argb:"000000"}}}}),m.forEach((b,_)=>{const F=s.addRow([_+1,b.filterName,b.count,b.total]);F.getCell(1).alignment={horizontal:"left"},F.getCell(2).alignment={horizontal:"left"},F.getCell(3).alignment={horizontal:"right"},F.getCell(4).alignment={horizontal:"right"}});const k=s.addRow(["",a("Total"),"",""]);k.font={bold:!0,color:{argb:"000000"},size:12};const j=m.reduce((b,_)=>b+_.total,0),y=m.reduce((b,_)=>b+_.count,0),D=s.getCell(`C${k.number}`);D.value=`${y}`,D.alignment={horizontal:"right"};const h=s.getCell(`D${k.number}`);h.value=`₹ ${j.toFixed(2)}`,h.alignment={horizontal:"right"};const U=`${Date.now()}Top_Customers_Summary_by${x}_${L}_${n}_${o}.xlsx`;r.xlsx.writeBuffer().then(async b=>{const _=new FormData;_.append("file",new Blob([b]),U);try{const F=await O.post("http://115.124.120.251:5064/api/uploader",_,{headers:{"Content-Type":"multipart/form-data"}});F.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const X=F.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${X}`}catch(F){console.error("Error saving Excel file:",F)}})},c.readAsDataURL(p)})},Ae=async()=>{const e=$.loading("Please wait..."),n=B(v[0]),o=B(v[1]),l=await ee(()=>import("./exceljs.min-03f8d777.js").then(p=>p.e),["assets/exceljs.min-03f8d777.js","assets/vendor-95b9cd9c.js"]),r=new l.Workbook,s=r.addWorksheet("Data");fetch(te).then(p=>p.blob()).then(async p=>{const c=new FileReader;c.onload=async function(){const S=c.result,w=r.addImage({base64:S,extension:"png"});s.addImage(w,{tl:{col:0,row:0},ext:{width:100,height:60}});const g=s.getCell("A1");g.value=`${M} Sales (${L})`,g.font={bold:!0,color:{argb:"000000"},size:14},g.alignment={vertical:"middle",horizontal:"center"},s.mergeCells("A1:D1");const i=s.getCell("A2");i.value=`${a("Period")}: ${n} ${a("to")} ${o}`,i.font={bold:!0,color:{argb:"000000"},size:12},i.alignment={horizontal:"center"},s.mergeCells("A2:D2"),s.getColumn(1).width=15,s.getColumn(2).width=50,s.getColumn(3).width=15,s.getColumn(4).width=15;const C=s.addRow([a("#"),a("Date"),a("Sales")]);C.font={bold:!0,color:{argb:"000000"},size:12},C.eachCell(y=>{y.font={bold:!0,color:{argb:"000000"},size:12},y.border={bottom:{style:"thin",color:{argb:"000000"}}}}),G.forEach((y,D)=>{if(D==G.length-2){const h=s.addRow([D+1,y.requestedDate,y.totalIncome]);h.getCell(1).alignment={horizontal:"left"},h.getCell(2).alignment={horizontal:"left"},h.getCell(3).alignment={horizontal:"right"},h.getCell(4).alignment={horizontal:"right"}}else{const h=s.addRow(["",a("Total"),"",""]);h.font={bold:!0,color:{argb:"000000"},size:12};const T=s.getCell(`C${h.number}`);T.value=`₹ ${y.totalIncome}`,T.alignment={horizontal:"right"}}});const j=`${Date.now()}Sales_of_${M}_${L}_${n}_${o}.xlsx`;r.xlsx.writeBuffer().then(async y=>{const D=new FormData;D.append("file",new Blob([y]),j);try{const h=await O.post("http://115.124.120.251:5064/api/uploader",D,{headers:{"Content-Type":"multipart/form-data"}});h.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const T=h.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${T}`}catch(h){console.error("Error saving Excel file:",h)}})},c.readAsDataURL(p)})},Ve=async()=>{const e=$.loading("Please wait..."),n=B(v[0]),o=B(v[1]),r=new URLSearchParams(window.location.search).get("lang"),s=await O.get(_e,{responseType:"arraybuffer"}),p=K(s.data),c=await O.get(Fe,{responseType:"arraybuffer"}),S=K(c.data);ee(()=>import("./NotoSansDevanagari-VariableFont_wdth_wght-d4d26ad0.js").then(w=>w.j),["assets/NotoSansDevanagari-VariableFont_wdth_wght-d4d26ad0.js","assets/vendor-95b9cd9c.js","assets/index-563da8c0.js","assets/index-ccf11cd4.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css"]).then(async w=>{let g=w.default;const i=new g;i.addFileToVFS("NotoSansBengali.ttf",p),i.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),i.setFont("NotoSansBengali"),i.addFileToVFS("NotoSansDevanagari.ttf",S),i.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),i.setFont("NotoSansDevanagari");const C=[[a("#"),a(x),a("Visit"),a("Sales")]],k={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},j={fontSize:12,fontStyle:"bold",halign:"center"},y={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},D=te,h=35,T=20;i.addImage(D,"PNG",15,12,h,T);const U=[[`${a("Top Customers Summary Data")} (${L})`]];i.autoTable({head:U,body:[],headStyles:{...j,fillColor:y.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const b=[[`${a("Period")}: ${n} ${a("to")} ${o}`]];i.autoTable({startY:39.5,head:b,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let _=m.map((N,z)=>[z+1,N.filterName,`${N.count}`,`₹ ${parseFloat(N.total).toFixed(2)}`]);const F=m.reduce((N,z)=>N+z.total,0),X=m.reduce((N,z)=>N+z.count,0);_.push(["",a("Total"),X,`₹ ${F.toFixed(2)}`]);const ce={startY:i.autoTable.previous.finalY+1,head:C,body:_,headStyles:{...j,fillColor:y.secondHeader,textColor:"#FFFFFF"},columnStyles:k,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};i.autoTable(ce);const Z=`${Date.now()}Top_Customerss_Summary_by${x}_${L}_${n}_${o}.pdf`,I=i.output("blob"),H=new FormData;H.append("file",I,Z);try{const N=await O.post("http://115.124.120.251:5064/api/uploader",H,{headers:{"Content-Type":"multipart/form-data"}});N.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const z=await N.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${z}`}catch(N){console.error("Error saving PDF file:",N)}})},Re=async()=>{const e=$.loading("Please wait..."),n=B(v[0]),o=B(v[1]),r=new URLSearchParams(window.location.search).get("lang"),s=await O.get(_e,{responseType:"arraybuffer"}),p=K(s.data),c=await O.get(Fe,{responseType:"arraybuffer"}),S=K(c.data);ee(()=>import("./NotoSansDevanagari-VariableFont_wdth_wght-d4d26ad0.js").then(w=>w.j),["assets/NotoSansDevanagari-VariableFont_wdth_wght-d4d26ad0.js","assets/vendor-95b9cd9c.js","assets/index-563da8c0.js","assets/index-ccf11cd4.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css"]).then(async w=>{let g=w.default;const i=new g;i.addFileToVFS("NotoSansBengali.ttf",p),i.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),i.setFont("NotoSansBengali"),i.addFileToVFS("NotoSansDevanagari.ttf",S),i.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),i.setFont("NotoSansDevanagari");const C=[[a("#"),a("Date"),a("Sales")]],k={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},j={fontSize:12,fontStyle:"bold",halign:"center"},y={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},D=te,h=35,T=20;i.addImage(D,"PNG",15,12,h,T);const U=[[`${M} Sales (${L})`]];i.autoTable({head:U,body:[],headStyles:{...j,fillColor:y.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const b=[[`${a("Period")}: ${n} ${a("to")} ${o}`]];i.autoTable({startY:39.5,head:b,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let _=G.map((I,H)=>[H+1,I.requestedDate,`₹ ${parseFloat(I.totalIncome).toFixed(2)}`]);const F={startY:i.autoTable.previous.finalY+1,head:C,body:_,headStyles:{...j,fillColor:y.secondHeader,textColor:"#FFFFFF"},columnStyles:k,styles:{font:r==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};i.autoTable(F);const ce=`${Date.now()}Sales_of_${M}_${L}_${n}_${o}.pdf`,ye=i.output("blob"),Z=new FormData;Z.append("file",ye,ce);try{const I=await O.post("http://115.124.120.251:5064/api/uploader",Z,{headers:{"Content-Type":"multipart/form-data"}});I.status==200?$.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):$.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const H=await I.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${H}`}catch(I){console.error("Error saving PDF file:",I)}})};u.useEffect(()=>{const e=n=>{ne.current&&!ne.current.contains(n.target)&&re.current&&!re.current.contains(n.target)&&n.target.tagName!=="svg"&&n.target.tagName!=="path"&&J(!1),ue.current&&!ue.current.contains(n.target)&&he(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const We=()=>{he(!1),J(!ae)};u.useEffect(()=>{Me(se)},[x,se,V,R,W]);const He=e=>{Ne(e.target.value)},qe=e=>{if(e&&e.data&&e.dataIndex>=0&&m[e.dataIndex]){me(!0);let n=JSON.stringify({CustomerName:x==="Name"?m[e.dataIndex].filterName:null,MobileNo:x==="Mobile"?m[e.dataIndex].filterName:null,VehicleNo:x==="Vehicle"?m[e.dataIndex].filterName:null}),o={"Content-Type":"application/json"},l={url:`http://115.124.120.251:5064/api/v1/dashboard/sales_customer/${xe(v[0])}/${xe(v[1])}/${ve}/${De}`,method:"POST",headers:o,data:n};O.request(l).then(r=>{let s={};Array.from(new Set(r.data.flatMap(c=>c.lstproduct.map(S=>S.productId)))).map(c=>{s[c]={productName:"",color:"",daySales:{}},r.data.map(S=>{s[c].daySales[S.requestedDate]=""})}),Le([...r.data.filter(c=>c.totalIncome>0),{requestedDate:a("Total"),totalIncome:r.data.reduce((c,S)=>c+S.totalIncome,0)}]),ie(!0),r.data.map(c=>{const S=c.requestedDate,w=c.lstproduct;w.length>0&&w.map(g=>{console.log(g.productName);const i=g.color,C=g.productId,k=g.productName,j=g.total;s[C].productName=k,s[C].color=i,s[C].daySales[S]=j})}),console.log(s),Te(s)}).finally(()=>{me(!1)}),Ie(m[e.dataIndex].filterName)}},Me=e=>{if(e===10)x==="Name"?(E(V),A([...V,{filterName:a("Total"),total:V.reduce((n,o)=>n+o.total,0),count:V.reduce((n,o)=>n+o.count,0)}])):x==="Mobile"?(E(R),A([...R,{filterName:a("Total"),total:R.reduce((n,o)=>n+o.total,0),count:R.reduce((n,o)=>n+o.count,0)}])):x==="Vehicle"&&(E(W),A([...W,{filterName:a("Total"),total:W.reduce((n,o)=>n+o.total,0),count:W.reduce((n,o)=>n+o.count,0)}]));else if(x==="Name"){let o=V.slice().reverse().slice(0,5).map(l=>l);E(o.slice().reverse()),A([...o.slice().reverse(),{filterName:a("Total"),total:o.slice().reverse().reduce((l,r)=>l+r.total,0),count:o.slice().reverse().reduce((l,r)=>l+r.count,0)}])}else if(x==="Mobile"){let o=R.slice().reverse().slice(0,5).map(l=>l);E(o.slice().reverse()),A([...o.slice().reverse(),{filterName:a("Total"),total:o.slice().reverse().reduce((l,r)=>l+r.total,0),count:o.slice().reverse().reduce((l,r)=>l+r.count,0)}])}else if(x==="Vehicle"){let o=W.slice().reverse().slice(0,5).map(l=>l);E(o.slice().reverse()),A([...o.slice().reverse(),{filterName:a("Total"),total:o.slice().reverse().reduce((l,r)=>l+r.total,0),count:o.slice().reverse().reduce((l,r)=>l+r.count,0)}])}},Ge=Je({typography:{button:{textTransform:"none"}}}),Ue=()=>{ie(!1),Q(!1)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:`${d.chartContainer} ${f==="dark"?d.darkMode:d.lightMode}`,children:[t.jsx(lt,{position:"top-center",theme:f}),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("div",{className:"d-flex align-items-center",children:[P?t.jsx("div",{title:"Previous",className:d.resetButtonContainer,children:t.jsx("button",{title:"Previous",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:Ue,children:t.jsx(Qe,{style:{fontSize:"1rem"}})})}):null,t.jsx("div",{className:`fw-bold me-2 fs-${window.innerWidth<=768?7:5} ${f==="dark"?d.darkMode:d.lightMode}`,children:a("")}),P?t.jsx("div",{className:`fw-bold ms-2 fs-${window.innerWidth<=768?7:5} ${f==="dark"?d.darkMode:d.lightMode}`,children:M}):t.jsxs(Ke,{theme:Ge,children:[t.jsxs(be,{sx:{mx:1,mt:1,minWidth:120},size:"small",children:[t.jsx(Xe,{id:"demo-simple-select-helper-label",style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},children:a("Top Customers")}),t.jsxs(Se,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:x,onChange:He,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},label:a("Top Customers"),children:[t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Name",children:a("Name")}),t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Mobile",children:a("Mobile")}),t.jsx(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:"Vehicle",children:a("Vehicle")})]})]}),t.jsx(be,{sx:{mx:1,mt:1,minWidth:100},size:"small",children:t.jsxs(Se,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",displayEmpty:!0,value:se,style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},onChange:e=>{Be(e.target.value)},children:[t.jsxs(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:5,children:[a("Top")," 5"]}),t.jsxs(Y,{style:{color:"var(--text-color)",fontFamily:'"Public Sans", sans-serif !important'},value:10,children:[a("Top")," 10"]})]})})]})]}),t.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:ne,children:t.jsxs("div",{className:`${d.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${d.icon} ${f==="dark"?d.darkMode:d.lightMode} px-2 py-1`,onClick:We,children:ae?t.jsx(Ze,{style:{fontSize:"1.1rem"}}):t.jsx(et,{style:{fontSize:"1.1rem"}})}),ae&&t.jsxs("div",{className:`${d.exportOptions} ${f==="dark"?d.darkMode:d.lightMode}`,ref:re,children:[q?t.jsxs("div",{className:d.exportOption,onClick:()=>{Q(!q),J(!1)},children:[t.jsx(ot,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:a("View Graph")})]}):t.jsxs("div",{className:d.exportOption,onClick:()=>{Q(!q),J(!1)},children:[t.jsx(tt,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:a("View Table")})]}),t.jsxs("div",{className:d.exportOption,onClick:P?Ae:Ee,children:[t.jsx(at,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:a("Export to Excel")})]}),t.jsxs("div",{className:d.exportOption,onClick:P?Re:Ve,children:[t.jsx(nt,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:a("Export to PDF")})]})]})]})})]})}),fe&&t.jsx("div",{className:d.loadingOverlay,children:t.jsx("img",{src:Ce,alt:"Loading...",width:50,height:50})}),Oe&&t.jsx("div",{className:d.loadingOverlay,children:t.jsx("img",{src:Ce,alt:"Loading...",width:50,height:50})}),le.length==1&&!q&&!fe?t.jsx("div",{className:`${d.NoDataOverlay} fs-5`,children:a("No Data Found")}):"",q?t.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"334px"},children:t.jsxs("table",{className:`table  ${f=="dark"?"table-dark":""}`,children:[t.jsx("thead",{children:P?t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:a("Date")}),t.jsxs("th",{scope:"col",children:[a("Sales"),"(₹)"]})]}):t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:a(x)}),t.jsx("th",{scope:"col",children:a("Visit")}),t.jsxs("th",{scope:"col",children:[a("Sales"),"(₹)"]})]})}),t.jsx("tbody",{children:P?G.map((e,n)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:G.length-1===n?"":n+1}),t.jsx("td",{children:e.requestedDate}),t.jsx("td",{children:parseFloat(e.totalIncome).toFixed(2)})]},e.requestedDate)):le.map((e,n)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:le.length-1===n?"":n+1}),t.jsx("td",{children:e.filterName}),t.jsx("td",{children:e.count}),t.jsx("td",{children:parseFloat(e.total).toFixed(2)})]},e.filterName))})]})}):t.jsx(rt,{option:P?ze:Pe,style:{height:P?"350px":"342px",width:"100%",maxWidth:"2300px"},onEvents:{click:qe},className:d.piechart},m.length)]})})};export{zt as default};