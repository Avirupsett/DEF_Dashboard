import{_ as de}from"./index-9709244e.js";import{r as d,f as Ee,j as o}from"./vendor-f48e548e.js";import{o as Re,p as He,e as Le,j as Ae,k as Ge,q as Ve,m as Me,n as Ue,a as _}from"./axios-aa9cae93.js";import{l as Ye}from"./loading-6f8dd2cd.js";import{l as fe,f as qe,a as Je}from"./NotoSansDevanagari-VariableFont_wdth_wght-7a6127ac.js";import{k as Qe,Q as C}from"./react-toastify.esm-81104cc6.js";/* empty css                      */import"./jspdf.es.min-4849f735.js";import"./Dashboard-c09c3291.js";import"./installSVGRenderer-7788c1a1.js";import"./assertThisInitialized-46084dcb.js";import"./Skeleton-26b4d238.js";const Xe="_chartContainer_1mn6g_1",Ke="_lightMode_1mn6g_47",Ze="_dateFilter_1mn6g_51",et="_officefilter_1mn6g_207",tt="_topContainer_1mn6g_299",ot="_darkMode_1mn6g_319",nt="_iconsContainer_1mn6g_487",at="_icon_1mn6g_487",st="_exportOptions_1mn6g_571",rt="_exportOption_1mn6g_571",it="_loadingOverlay_1mn6g_659",lt="_tableContainer_1mn6g_849",ct="_table_1mn6g_849",dt="_summaryHeader_1mn6g_885",ft="_periodHeader_1mn6g_893",pt="_closeButton_1mn6g_925",ht="_tableWrapper_1mn6g_955",gt="_loadingSpinner_1mn6g_989",ut="_boldOption_1mn6g_1001",mt="_optionGroup_1mn6g_1011",xt="_resetButtonContainer_1mn6g_1039",wt="_resetButton_1mn6g_1039",yt="_NoDataOverlay_1mn6g_1095",i={chartContainer:Xe,lightMode:Ke,"label-text":"_label-text_1mn6g_47",dateFilter:Ze,officefilter:et,topContainer:tt,darkMode:ot,"theme-container":"_theme-container_1mn6g_329",iconsContainer:nt,icon:at,exportOptions:st,exportOption:rt,loadingOverlay:it,tableContainer:lt,table:ct,summaryHeader:dt,periodHeader:ft,closeButton:pt,tableWrapper:ht,loadingSpinner:gt,boldOption:ut,optionGroup:mt,resetButtonContainer:xt,resetButton:wt,NoDataOverlay:yt},Pt=({echarts:pe,ReactECharts:he,themeMode:c,selectedRange:F,showGraph:oe,selectedOffice:L,isAdmin:ge,alldata:A,isLoading:ne,SelectedOfficeName:bt,setSelectedOfficeName:G,selectedOfficeNameLocal:y,setSelectedOfficeNameLocal:O,setSelectedOffice:T,setIsAdmin:P,setCompanies:ue,setWholesales:me,setRetails:xe,originallist:b,setOfficeIdLocal:V,officeIdLocal:we,setOptionvalue:I})=>{const[h,ye]=d.useState([]),[M,z]=d.useState(!1),U=d.useRef(null),Y=d.useRef(null),[v,q]=d.useState(!1),[J,be]=d.useState([]),[k,Q]=d.useState([]),[ae,se]=d.useState([]),[Se,X]=d.useState(!1),[_e,re]=d.useState(!1),[Ce,W]=d.useState(!0),[St,Fe]=d.useState([]),{t:a}=Ee();a("Office"),`${a("Sales")}`,a("Rows"),d.useEffect(()=>{const e=n=>{U.current&&!U.current.contains(n.target)&&Y.current&&!Y.current.contains(n.target)&&n.target.tagName!=="svg"&&n.target.tagName!=="path"&&z(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const ie=e=>{let n=[],s=[];if(A.graph3){A.graph3.map(t=>{n.push({officeId:t.officeId,officeName:t.officeName,officeType:t.officeType,sales:t.totalIncome.toFixed(2),color:t.officeTypeColor}),s.push({officeName:t.officeName,sales:t.totalIncome.toFixed(2)})}),s.push({officeName:"Total",sales:n.reduce((t,l)=>t+parseFloat(l.sales),0).toFixed(2)}),e===1&&(ue(n.filter(t=>t.officeType==="Company")),me(n.filter(t=>t.officeType==="Wholesale Pumps")),xe(n.filter(t=>t.officeType==="Retail Pumps")),W(!0));const r=n.reduce((t,l)=>{const{officeType:g}=l;return t[g]||(t[g]=[]),t[g].push(l),t},{});ye(n),Fe(r),be(s)}};d.useEffect(()=>{F&&L&&ie(Ce?0:1)},[A]);function le(e,n){var s=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),t=parseInt(e.substring(5,7),16);s=parseInt(s*(100+n)/100),r=parseInt(r*(100+n)/100),t=parseInt(t*(100+n)/100),s=s<255?s:255,r=r<255?r:255,t=t<255?t:255,s=Math.round(s),r=Math.round(r),t=Math.round(t);var l=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),g=r.toString(16).length==1?"0"+r.toString(16):r.toString(16),N=t.toString(16).length==1?"0"+t.toString(16):t.toString(16);return"#"+l+g+N}const ve={title:{textStyle:{color:c==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:`{b} <br> <b>${a("Sales")}:</b> {c} `,textStyle:{fontSize:window.innerWidth<=768?10:14}},yAxis:{type:"category",name:(window.innerWidth>550,""),nameGap:80,nameTextStyle:{color:c==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},data:h.map(e=>e.officeName),axisLine:{lineStyle:{color:c==="dark"?"#ffffff":"#000000"}},axisLabel:{color:c==="dark"?"#ffffff":"#000000",fontSize:12,formatter:e=>window.innerWidth<=768?e.length>10?e.substring(0,10)+"...":e:e.length>0?e.substring(0,10)+"...":e}},grid:{left:window.innerWidth<=768?90:105,right:50,bottom:50,top:15},xAxis:{type:"value",name:window.innerWidth>550?a("Sales"):"",nameLocation:"middle",nameGap:30,nameTextStyle:{color:c==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:c==="dark"?"#ffffff":"#000000"}},axisLabel:{color:c==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e,rotate:window.innerWidth<=768?45:0},splitLine:{show:!0,lineStyle:{color:c==="dark"?"grey":"silver",type:"line"}}},legend:{show:!0},series:[{type:"bar",barWidth:"30%",itemStyle:{borderRadius:[0,5,5,0]},data:h.map((e,n)=>({value:e.sales,name:e.officeName,itemStyle:{color:new pe.graphic.LinearGradient(0,0,0,1,[{offset:1,color:le(e.color,40)},{offset:0,color:le(e.color,100)}])}})),label:{show:!0,position:"right",color:c==="dark"?"#ffffff":"#000000"},emphasis:{focus:"series"}}]},E=e=>{let n="";const s=new Uint8Array(e),r=s.byteLength;for(let t=0;t<r;t++)n+=String.fromCharCode(s[t]);return window.btoa(n)},ke=async()=>{const e=C.loading("Please wait..."),n=R(F[0]),s=R(F[1]),r=await de(()=>import("./exceljs.min-15b947a5.js").then(p=>p.e),["assets/exceljs.min-15b947a5.js","assets/vendor-f48e548e.js"]),t=new r.Workbook,l=t.addWorksheet("Total Sales by Office"),g=await _.get(fe,{responseType:"arraybuffer"}),N=E(g.data),Z=t.addImage({base64:N,extension:"png"});l.addImage(Z,{tl:{col:0,row:0},ext:{width:100,height:60}});const j=l.getCell("A1");j.value=`${a("Sales")} ${a("of")} ${K(y,10)}`,j.font={bold:!0,color:{argb:"000000"},size:14},j.alignment={vertical:"middle",horizontal:"center"},l.mergeCells("A1:C1");const $=l.getCell("A2");$.value=`${a("Period")}: ${n} ${a("to")} ${s}`,$.font={bold:!0,color:{argb:"000000"},size:12},$.alignment={horizontal:"center"},l.mergeCells("A2:C2"),l.getColumn(1).width=15,l.getColumn(2).width=50,l.getColumn(3).width=15;const S=l.addRow([a("#"),a("Office Name"),a("Sales")]);S.font={bold:!0},S.eachCell(p=>{p.font={bold:!0,color:{argb:"000000"},size:12},p.border={bottom:{style:"thin",color:{argb:"000000"}}}}),h.forEach((p,x)=>{const m=l.addRow([x+1,p.officeName,p.sales]);m.getCell(1).alignment={horizontal:"left"},m.getCell(2).alignment={horizontal:"left"},m.getCell(3).alignment={horizontal:"right"}});const H=l.addRow(["",a("Total"),""]);H.font={bold:!0,color:{argb:"000000"},size:12};const f=h.reduce((p,x)=>p+parseFloat(x.sales),0),D=l.getCell(`C${H.number}`);D.value=`₹ ${f}`,D.numFmt="0.00",D.alignment={horizontal:"right"};const ee=Date.now();t.xlsx.writeBuffer().then(async p=>{const x=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),m=new FormData;m.append("file",x,`${ee}sales_of_${y}_${n}_${s}.xlsx`);try{const w=await _.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",m,{headers:{"Content-Type":"multipart/form-data"}});w.status==200?C.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const te=w.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${te}`}catch(w){console.error("Error saving Excel file:",w)}})},Ne=async()=>{const e=C.loading("Please wait..."),n=R(F[0]),s=R(F[1]),t=new URLSearchParams(window.location.search).get("lang"),l=await _.get(fe,{responseType:"arraybuffer"}),g=await _.get(qe,{responseType:"arraybuffer"}),N=E(g.data),Z=await _.get(Je,{responseType:"arraybuffer"}),j=E(Z.data),$=E(l.data);de(()=>import("./jspdf.es.min-4849f735.js").then(S=>S.j),["assets/jspdf.es.min-4849f735.js","assets/index-9709244e.js","assets/vendor-f48e548e.js","assets/index-74b21cfb.css","assets/Dashboard-c09c3291.js","assets/axios-aa9cae93.js","assets/installSVGRenderer-7788c1a1.js","assets/assertThisInitialized-46084dcb.js","assets/Skeleton-26b4d238.js","assets/Dashboard-5c3f3713.css"]).then(async S=>{let H=S.default;const f=new H,D=$,ee=35,p=20;f.addImage(D,"PNG",15,9,ee,p),f.addFileToVFS("NotoSansBengali.ttf",N),f.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),f.setFont("NotoSansBengali"),f.addFileToVFS("NotoSansDevanagari.ttf",j),f.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),f.setFont("NotoSansDevanagari");const x=[[`${a("Sales")} ${a("of")} ${K(y,10)}`]];f.autoTable({startY:27,head:x,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0},styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const m=[[`${a("Period")}: ${n} ${a("to")} ${s}`]];f.autoTable({startY:36,head:m,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const w=h.map((u,B)=>[B+1,u.officeName,`₹ ${u.sales}`]),te=h.reduce((u,B)=>u+parseFloat(B.sales),0);w.push(["",a("Total"),`₹ ${te.toFixed(2)}`]);const Oe=[a("#"),a("Office Name"),a("Sales")],Te={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"}},Pe={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"},Ie={0:5,1:25,2:25,3:25};f.autoTable(Oe,w,{startY:45,headStyles:Pe,columnStyles:Te,styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali"},columnWidth:"wrap",columnWidths:Ie});const ze=Date.now(),We=f.output("blob"),ce=new FormData;ce.append("file",We,`${ze}sales_of_${y}_${n}_${s}.pdf`);try{const u=await _.post("https://dev-def-dash-route-api.inspirigenceworks.co.in/api/uploader",ce,{headers:{"Content-Type":"multipart/form-data"}});u.status==200?C.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const B=await u.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in/static/downloads/${B}`}catch(u){console.error("Error saving PDF file:",u)}})},je=e=>{if(e&&e.data&&e.dataIndex>=0&&h[e.dataIndex]){const n=h[e.dataIndex].officeId,s=h[e.dataIndex].officeType,r=h[e.dataIndex].officeName;s==="Company"?(W(!1),Q(t=>[...t,{selectedOffice:L,isAdmin:ge,selectedOfficeNameLocal:y}]),se(t=>[...t,we]),I({state:!0,Ovalue:n}),G(r),O(r),T(n),P(6),V(n),re(!0),X(!0)):L!==n&&(I({state:!0,Ovalue:n}),O(r),T(n),P(0))}},$e=()=>{if(k.length>0){W(!1);const e=k.pop(),n=ae.pop();I({state:!0,Ovalue:n}),G(e.selectedOfficeNameLocal),O(e.selectedOfficeNameLocal),T(e.selectedOffice),V(n),P(e.isAdmin),Q([...k]),se([...ae]),k.length===0&&X(!1)}},De=()=>{W(!1),T(b.officeId),I({state:!0,Ovalue:b.officeId}),P(b.adminStatus),V(b.officeId),G(b.userOfficeName),O(b.userOfficeName),Q([]),re(!1),X(!1)};d.useEffect(()=>{q(!oe)},[oe]);const Be=()=>{z(!M)},R=e=>{if(!e)return"";const n=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${s}-${n}`},K=(e,n)=>window.innerWidth>500||e.length<=n?e:e.substring(0,n)+"...";return o.jsxs("div",{className:`${i.chartContainer} ${c==="dark"?i.darkMode:i.lightMode}`,children:[o.jsx(Qe,{position:"top-center",theme:c}),o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[o.jsxs("div",{className:`fw-bold noselect fs-${window.innerWidth<=768?7:5} ${c==="dark"?i.darkMode:i.lightMode}`,children:[a("Sales")," ",a("of")," ",K(y,10)]}),_e?o.jsx("div",{title:"Reset",className:i.resetButtonContainer,children:o.jsx("button",{title:"Reset",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:De,children:o.jsx(Re,{style:{fontSize:"1rem"}})})}):null,Se&&k.length>0?o.jsx("div",{title:"Previous",className:i.resetButtonContainer,children:o.jsx("button",{title:"Previous",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:$e,children:o.jsx(He,{style:{fontSize:"1rem"}})})}):null,o.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:U,children:o.jsxs("div",{className:`${i.iconsContainer} d-flex justify-content-center align-items-center`,children:[o.jsx("div",{className:`${i.icon} ${c==="dark"?i.darkMode:i.lightMode} px-2 py-1`,onClick:Be,children:M?o.jsx(Le,{style:{fontSize:"1.1rem"}}):o.jsx(Ae,{style:{fontSize:"1.1rem"}})}),M&&o.jsxs("div",{className:`${i.exportOptions} ${c==="dark"?i.darkMode:i.lightMode}`,ref:Y,children:[v?o.jsxs("div",{className:i.exportOption,onClick:()=>{q(!v),z(!1)},children:[o.jsx(Ve,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),o.jsx("span",{children:a("View Graph")})]}):o.jsxs("div",{className:i.exportOption,onClick:()=>{q(!v),z(!1)},children:[o.jsx(Ge,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),o.jsx("span",{children:a("View Table")})]}),o.jsxs("div",{className:i.exportOption,onClick:ke,children:[o.jsx(Me,{style:{fontSize:"1.1rem",color:"green"}}),o.jsx("span",{children:a("Export to Excel")})]}),o.jsxs("div",{className:i.exportOption,onClick:Ne,children:[o.jsx(Ue,{style:{fontSize:"1.1rem",color:"red"}}),o.jsx("span",{children:a("Export to PDF")})]})]})]})})]})}),ne&&o.jsx("div",{className:i.loadingOverlay,children:o.jsx("img",{src:Ye,alt:"Loading...",width:50,height:50})}),J.length==1&&!v&&!ne?o.jsx("div",{className:`${i.NoDataOverlay} fs-5`,children:a("No Data Found")}):"",v?o.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"342px"},children:o.jsxs("table",{className:`table ${c=="dark"?"table-dark":""}`,children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{scope:"col",children:"#"}),o.jsx("th",{scope:"col",children:a("Office")}),o.jsxs("th",{scope:"col",children:[a("Sales"),"(₹)"]})]})}),o.jsx("tbody",{children:J.map((e,n)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:J.length-1===n?"":n+1}),o.jsx("td",{children:e.officeName}),o.jsx("td",{children:parseFloat(e.sales).toFixed(2)})]},e.officeName))})]})}):o.jsx(he,{option:ve,style:{height:"350px",width:"100%",maxWidth:"2300px"},onEvents:{click:je},className:c==="dark"?i.darkMode:i.lightMode})]})};export{Pt as default};
