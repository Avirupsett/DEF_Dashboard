import{_ as de}from"./index-f87c0876.js";import{r as d,u as Ee,j as o,K as ze,L as We,i as Re,C as Le,E as He,M as Ae,I as Ge,J as Me,a as _}from"./vendor-558e122b.js";import{L as Ve,R as Ue}from"./index-f49dd30b.js";import{k as Ye,l as qe,Q as C,a as fe,f as Je,b as Ke}from"./NotoSansDevanagari-VariableFont_wdth_wght-54ea2a3c.js";const Qe="_chartContainer_1mn6g_1",Xe="_lightMode_1mn6g_47",Ze="_dateFilter_1mn6g_51",et="_officefilter_1mn6g_207",tt="_topContainer_1mn6g_299",ot="_darkMode_1mn6g_319",at="_iconsContainer_1mn6g_487",nt="_icon_1mn6g_487",st="_exportOptions_1mn6g_571",rt="_exportOption_1mn6g_571",it="_loadingOverlay_1mn6g_659",lt="_tableContainer_1mn6g_849",ct="_table_1mn6g_849",dt="_summaryHeader_1mn6g_885",ft="_periodHeader_1mn6g_893",pt="_closeButton_1mn6g_925",ht="_tableWrapper_1mn6g_955",ut="_loadingSpinner_1mn6g_989",gt="_boldOption_1mn6g_1001",mt="_optionGroup_1mn6g_1011",xt="_resetButtonContainer_1mn6g_1039",yt="_resetButton_1mn6g_1039",bt="_NoDataOverlay_1mn6g_1095",i={chartContainer:Qe,lightMode:Xe,"label-text":"_label-text_1mn6g_47",dateFilter:Ze,officefilter:et,topContainer:tt,darkMode:ot,"theme-container":"_theme-container_1mn6g_329",iconsContainer:at,icon:nt,exportOptions:st,exportOption:rt,loadingOverlay:it,tableContainer:lt,table:ct,summaryHeader:dt,periodHeader:ft,closeButton:pt,tableWrapper:ht,loadingSpinner:ut,boldOption:gt,optionGroup:mt,resetButtonContainer:xt,resetButton:yt,NoDataOverlay:bt},Nt=({themeMode:c,selectedRange:F,showGraph:oe,selectedOffice:H,isAdmin:pe,alldata:A,isLoading:ae,SelectedOfficeName:wt,setSelectedOfficeName:G,selectedOfficeNameLocal:b,setSelectedOfficeNameLocal:O,setSelectedOffice:T,setIsAdmin:I,setCompanies:he,setWholesales:ue,setRetails:ge,originallist:w,setOfficeIdLocal:M,officeIdLocal:me,setOptionvalue:P})=>{const[h,xe]=d.useState([]),[V,E]=d.useState(!1),U=d.useRef(null),Y=d.useRef(null),[v,q]=d.useState(!1),[J,ye]=d.useState([]),[N,K]=d.useState([]),[ne,se]=d.useState([]),[be,Q]=d.useState(!1),[we,re]=d.useState(!1),[Se,z]=d.useState(!0),[St,_e]=d.useState([]),{t:n}=Ee();n("Office"),`${n("Sales")}`,n("Rows"),d.useEffect(()=>{const e=a=>{U.current&&!U.current.contains(a.target)&&Y.current&&!Y.current.contains(a.target)&&a.target.tagName!=="svg"&&a.target.tagName!=="path"&&E(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]);const ie=e=>{let a=[],s=[];if(A.graph3){A.graph3.map(t=>{a.push({officeId:t.officeId,officeName:t.officeName,officeType:t.officeType,sales:t.totalIncome.toFixed(2),color:t.officeTypeColor}),s.push({officeName:t.officeName,sales:t.totalIncome.toFixed(2)})}),s.push({officeName:"Total",sales:a.reduce((t,l)=>t+parseFloat(l.sales),0).toFixed(2)}),e===1&&(he(a.filter(t=>t.officeType==="Company")),ue(a.filter(t=>t.officeType==="Wholesale Pumps")),ge(a.filter(t=>t.officeType==="Retail Pumps")),z(!0));const r=a.reduce((t,l)=>{const{officeType:u}=l;return t[u]||(t[u]=[]),t[u].push(l),t},{});xe(a),_e(r),ye(s)}};d.useEffect(()=>{F&&H&&ie(Se?0:1)},[A]);function le(e,a){var s=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),t=parseInt(e.substring(5,7),16);s=parseInt(s*(100+a)/100),r=parseInt(r*(100+a)/100),t=parseInt(t*(100+a)/100),s=s<255?s:255,r=r<255?r:255,t=t<255?t:255,s=Math.round(s),r=Math.round(r),t=Math.round(t);var l=s.toString(16).length==1?"0"+s.toString(16):s.toString(16),u=r.toString(16).length==1?"0"+r.toString(16):r.toString(16),k=t.toString(16).length==1?"0"+t.toString(16):t.toString(16);return"#"+l+u+k}const Ce={title:{textStyle:{color:c==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:`{b} <br> <b>${n("Sales")}:</b> {c} `,textStyle:{fontSize:window.innerWidth<=768?10:14}},yAxis:{type:"category",name:(window.innerWidth>550,""),nameGap:80,nameTextStyle:{color:c==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},data:h.map(e=>e.officeName),axisLine:{lineStyle:{color:c==="dark"?"#ffffff":"#000000"}},axisLabel:{color:c==="dark"?"#ffffff":"#000000",fontSize:12,formatter:e=>window.innerWidth<=768?e.length>10?e.substring(0,10)+"...":e:e.length>0?e.substring(0,10)+"...":e}},grid:{left:window.innerWidth<=768?90:105,right:50,bottom:50,top:15},xAxis:{type:"value",name:window.innerWidth>550?n("Sales"):"",nameLocation:"middle",nameGap:30,nameTextStyle:{color:c==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:c==="dark"?"#ffffff":"#000000"}},axisLabel:{color:c==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e,rotate:window.innerWidth<=768?45:0},splitLine:{show:!0,lineStyle:{color:c==="dark"?"grey":"silver",type:"line"}}},legend:{show:!0},series:[{type:"bar",barWidth:"30%",itemStyle:{borderRadius:[0,5,5,0]},data:h.map((e,a)=>({value:e.sales,name:e.officeName,itemStyle:{color:new Ve(0,0,0,1,[{offset:1,color:le(e.color,40)},{offset:0,color:le(e.color,100)}])}})),label:{show:!0,position:"right",color:c==="dark"?"#ffffff":"#000000"},emphasis:{focus:"series"}}]},W=e=>{let a="";const s=new Uint8Array(e),r=s.byteLength;for(let t=0;t<r;t++)a+=String.fromCharCode(s[t]);return window.btoa(a)},Fe=async()=>{const e=C.loading("Please wait..."),a=R(F[0]),s=R(F[1]),r=await de(()=>import("./exceljs.min-219277f0.js").then(p=>p.e),["assets/exceljs.min-219277f0.js","assets/vendor-558e122b.js"]),t=new r.Workbook,l=t.addWorksheet("Total Sales by Office"),u=await _.get(fe,{responseType:"arraybuffer"}),k=W(u.data),Z=t.addImage({base64:k,extension:"png"});l.addImage(Z,{tl:{col:0,row:0},ext:{width:100,height:60}});const j=l.getCell("A1");j.value=`${n("Sales")} ${n("of")} ${X(b,10)}`,j.font={bold:!0,color:{argb:"000000"},size:14},j.alignment={vertical:"middle",horizontal:"center"},l.mergeCells("A1:C1");const $=l.getCell("A2");$.value=`${n("Period")}: ${a} ${n("to")} ${s}`,$.font={bold:!0,color:{argb:"000000"},size:12},$.alignment={horizontal:"center"},l.mergeCells("A2:C2"),l.getColumn(1).width=15,l.getColumn(2).width=50,l.getColumn(3).width=15;const S=l.addRow([n("#"),n("Office Name"),n("Sales")]);S.font={bold:!0},S.eachCell(p=>{p.font={bold:!0,color:{argb:"000000"},size:12},p.border={bottom:{style:"thin",color:{argb:"000000"}}}}),h.forEach((p,x)=>{const m=l.addRow([x+1,p.officeName,p.sales]);m.getCell(1).alignment={horizontal:"left"},m.getCell(2).alignment={horizontal:"left"},m.getCell(3).alignment={horizontal:"right"}});const L=l.addRow(["",n("Total"),""]);L.font={bold:!0,color:{argb:"000000"},size:12};const f=h.reduce((p,x)=>p+parseFloat(x.sales),0),D=l.getCell(`C${L.number}`);D.value=`₹ ${f}`,D.numFmt="0.00",D.alignment={horizontal:"right"};const ee=Date.now();t.xlsx.writeBuffer().then(async p=>{const x=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),m=new FormData;m.append("file",x,`${ee}sales_of_${b}_${a}_${s}.xlsx`);try{const y=await _.post("http://115.124.120.251:5064/api/uploader",m,{headers:{"Content-Type":"multipart/form-data"}});y.status==200?C.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const te=y.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${te}`}catch(y){console.error("Error saving Excel file:",y)}})},ve=async()=>{const e=C.loading("Please wait..."),a=R(F[0]),s=R(F[1]),t=new URLSearchParams(window.location.search).get("lang"),l=await _.get(fe,{responseType:"arraybuffer"}),u=await _.get(Je,{responseType:"arraybuffer"}),k=W(u.data),Z=await _.get(Ke,{responseType:"arraybuffer"}),j=W(Z.data),$=W(l.data);de(()=>import("./NotoSansDevanagari-VariableFont_wdth_wght-54ea2a3c.js").then(S=>S.j),["assets/NotoSansDevanagari-VariableFont_wdth_wght-54ea2a3c.js","assets/vendor-558e122b.js","assets/index-f87c0876.js","assets/index-0653e607.css","assets/NotoSansDevanagari-VariableFont_wdth_wght-55fec1ff.css"]).then(async S=>{let L=S.default;const f=new L,D=$,ee=35,p=20;f.addImage(D,"PNG",15,9,ee,p),f.addFileToVFS("NotoSansBengali.ttf",k),f.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),f.setFont("NotoSansBengali"),f.addFileToVFS("NotoSansDevanagari.ttf",j),f.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),f.setFont("NotoSansDevanagari");const x=[[`${n("Sales")} ${n("of")} ${X(b,10)}`]];f.autoTable({startY:27,head:x,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0},styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const m=[[`${n("Period")}: ${a} ${n("to")} ${s}`]];f.autoTable({startY:36,head:m,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali"}});const y=h.map((g,B)=>[B+1,g.officeName,`₹ ${g.sales}`]),te=h.reduce((g,B)=>g+parseFloat(B.sales),0);y.push(["",n("Total"),`₹ ${te.toFixed(2)}`]);const De=[n("#"),n("Office Name"),n("Sales")],Be={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"}},Oe={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"},Te={0:5,1:25,2:25,3:25};f.autoTable(De,y,{startY:45,headStyles:Oe,columnStyles:Be,styles:{font:t==="hi"?"NotoSansDevanagari":"NotoSansBengali"},columnWidth:"wrap",columnWidths:Te});const Ie=Date.now(),Pe=f.output("blob"),ce=new FormData;ce.append("file",Pe,`${Ie}sales_of_${b}_${a}_${s}.pdf`);try{const g=await _.post("http://115.124.120.251:5064/api/uploader",ce,{headers:{"Content-Type":"multipart/form-data"}});g.status==200?C.update(e,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(e,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const B=await g.data.url;window.location.href=`http://115.124.120.251:5064/static/downloads/${B}`}catch(g){console.error("Error saving PDF file:",g)}})},Ne=e=>{if(e&&e.data&&e.dataIndex>=0&&h[e.dataIndex]){const a=h[e.dataIndex].officeId,s=h[e.dataIndex].officeType,r=h[e.dataIndex].officeName;s==="Company"?(z(!1),K(t=>[...t,{selectedOffice:H,isAdmin:pe,selectedOfficeNameLocal:b}]),se(t=>[...t,me]),P({state:!0,Ovalue:a}),G(r),O(r),T(a),I(6),M(a),re(!0),Q(!0)):H!==a&&(P({state:!0,Ovalue:a}),O(r),T(a),I(0))}},ke=()=>{if(N.length>0){z(!1);const e=N.pop(),a=ne.pop();P({state:!0,Ovalue:a}),G(e.selectedOfficeNameLocal),O(e.selectedOfficeNameLocal),T(e.selectedOffice),M(a),I(e.isAdmin),K([...N]),se([...ne]),N.length===0&&Q(!1)}},je=()=>{z(!1),T(w.officeId),P({state:!0,Ovalue:w.officeId}),I(w.adminStatus),M(w.officeId),G(w.userOfficeName),O(w.userOfficeName),K([]),re(!1),Q(!1)};d.useEffect(()=>{q(!oe)},[oe]);const $e=()=>{E(!V)},R=e=>{if(!e)return"";const a=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0");return`${String(e.getDate()).padStart(2,"0")}-${s}-${a}`},X=(e,a)=>window.innerWidth>500||e.length<=a?e:e.substring(0,a)+"...";return o.jsxs("div",{className:`${i.chartContainer} ${c==="dark"?i.darkMode:i.lightMode}`,children:[o.jsx(Ye,{position:"top-center",theme:c}),o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[o.jsxs("div",{className:`fw-bold noselect fs-${window.innerWidth<=768?7:5} ${c==="dark"?i.darkMode:i.lightMode}`,children:[n("Sales")," ",n("of")," ",X(b,10)]}),we?o.jsx("div",{title:"Reset",className:i.resetButtonContainer,children:o.jsx("button",{title:"Reset",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:je,children:o.jsx(ze,{style:{fontSize:"1rem"}})})}):null,be&&N.length>0?o.jsx("div",{title:"Previous",className:i.resetButtonContainer,children:o.jsx("button",{title:"Previous",className:`btn btn-primary mx-1 ${window.innerWidth<500?"btn-sm":""} shadow border-2 border-white`,onClick:ke,children:o.jsx(We,{style:{fontSize:"1rem"}})})}):null,o.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:U,children:o.jsxs("div",{className:`${i.iconsContainer} d-flex justify-content-center align-items-center`,children:[o.jsx("div",{className:`${i.icon} ${c==="dark"?i.darkMode:i.lightMode} px-2 py-1`,onClick:$e,children:V?o.jsx(Re,{style:{fontSize:"1.1rem"}}):o.jsx(Le,{style:{fontSize:"1.1rem"}})}),V&&o.jsxs("div",{className:`${i.exportOptions} ${c==="dark"?i.darkMode:i.lightMode}`,ref:Y,children:[v?o.jsxs("div",{className:i.exportOption,onClick:()=>{q(!v),E(!1)},children:[o.jsx(Ae,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),o.jsx("span",{children:n("View Graph")})]}):o.jsxs("div",{className:i.exportOption,onClick:()=>{q(!v),E(!1)},children:[o.jsx(He,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),o.jsx("span",{children:n("View Table")})]}),o.jsxs("div",{className:i.exportOption,onClick:Fe,children:[o.jsx(Ge,{style:{fontSize:"1.1rem",color:"green"}}),o.jsx("span",{children:n("Export to Excel")})]}),o.jsxs("div",{className:i.exportOption,onClick:ve,children:[o.jsx(Me,{style:{fontSize:"1.1rem",color:"red"}}),o.jsx("span",{children:n("Export to PDF")})]})]})]})})]})}),ae&&o.jsx("div",{className:i.loadingOverlay,children:o.jsx("img",{src:qe,alt:"Loading...",width:50,height:50})}),J.length==1&&!v&&!ae?o.jsx("div",{className:`${i.NoDataOverlay} fs-5`,children:n("No Data Found")}):"",v?o.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"342px"},children:o.jsxs("table",{className:`table ${c=="dark"?"table-dark":""}`,children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{scope:"col",children:"#"}),o.jsx("th",{scope:"col",children:n("Office")}),o.jsxs("th",{scope:"col",children:[n("Sales"),"(₹)"]})]})}),o.jsx("tbody",{children:J.map((e,a)=>o.jsxs("tr",{children:[o.jsx("th",{scope:"row",children:J.length-1===a?"":a+1}),o.jsx("td",{children:e.officeName}),o.jsx("td",{children:parseFloat(e.sales).toFixed(2)})]},e.officeName))})]})}):o.jsx(Ue,{option:Ce,style:{height:"350px",width:"100%",maxWidth:"2300px"},onEvents:{click:Ne},className:c==="dark"?i.darkMode:i.lightMode})]})};export{Nt as default};