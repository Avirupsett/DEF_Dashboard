import{_ as et}from"./index-458025c0.js";import{r as f,u as wt,j as t}from"./vendor-36ea1262.js";import{i as Ct,j as L}from"./Skeleton-7f30ae53.js";import{l as vt}from"./ReactToastify-0f247959.js";import{c as Ft,h as jt,i as $t,p as Nt,k as kt,l as Dt}from"./index.esm-3c2af03d.js";import{l as ot,f as Bt,a as Ot}from"./NotoSansDevanagari-VariableFont_wdth_wght-7a6127ac.js";import{k as Tt,Q as C}from"./react-toastify.esm-56fcd767.js";import{T as Pt}from"./ButtonBase-959669a6.js";import{T as It,a as at}from"./ToggleButtonGroup-78539232.js";import"./jspdf.es.min-e03163d6.js";import"./Dashboard-5095ba06.js";import"./install-b5fa7292.js";const zt="_piechart_1ah4s_11",Et="_chartContainer_1ah4s_23",Lt="_legendButtonContainer_1ah4s_49",Rt="_legendButton_1ah4s_49",Wt="_codeBlockIcon_1ah4s_133",Qt="_lightMode_1ah4s_191",Gt="_dateFilter_1ah4s_195",Mt="_officefilter_1ah4s_351",Ht="_topContainer_1ah4s_443",At="_darkMode_1ah4s_463",qt="_iconsContainer_1ah4s_631",Ut="_icon_1ah4s_631",Vt="_exportOptions_1ah4s_715",Yt="_exportOption_1ah4s_715",Jt="_NoDataOverlay_1ah4s_861",Xt="_tableContainer_1ah4s_993",Kt="_table_1ah4s_993",Zt="_summaryHeader_1ah4s_1029",te="_periodHeader_1ah4s_1037",ee="_closeButton_1ah4s_1069",oe="_tableWrapper_1ah4s_1099",ae="_loadingOverlay_1ah4s_1107",ne="_loadingSpinner_1ah4s_1133",se="_boldOption_1ah4s_1145",re="_optionGroup_1ah4s_1155",c={piechart:zt,chartContainer:Et,"legend-text":"_legend-text_1ah4s_31",legendButtonContainer:Lt,legendButton:Rt,codeBlockIcon:Wt,lightMode:Qt,"label-text":"_label-text_1ah4s_191",dateFilter:Gt,officefilter:Mt,topContainer:Ht,darkMode:At,"theme-container":"_theme-container_1ah4s_473",iconsContainer:qt,icon:Ut,exportOptions:Vt,exportOption:Yt,NoDataOverlay:Jt,tableContainer:Xt,table:Kt,summaryHeader:Zt,periodHeader:te,closeButton:ee,tableWrapper:oe,loadingOverlay:ae,loadingSpinner:ne,boldOption:se,optionGroup:re},we=({echarts:V,ReactECharts:nt,themeMode:S,selectedRange:k,selectedOffice:le,isAdmin:ie,showGraph:Y,alldata:R,isLoading:J,officeName:D})=>{const[_,st]=f.useState([]),[X,rt]=f.useState([]),[W,lt]=f.useState([]),[Q,v]=f.useState(!1),G=f.useRef(null),M=f.useRef(null),H=f.useRef(null),{t:r}=wt(),[A,q]=f.useState(!1),[B,it]=f.useState([]),[F,O]=f.useState(!1),[w,ct]=f.useState("Sale");function dt(a){return a.flatMap(e=>e.lstproduct).reduce((e,o)=>{const{productName:l,totalSales:h,qty:i,color:u,unitShortName:p}=o;return h!==0&&(e[l]?(e[l].totalSales+=h,e[l].qty+=i):e[l]={totalSales:h,qty:i,color:u,unitShortName:p}),e},{})}f.useEffect(()=>{O(!Y)},[Y]),f.useEffect(()=>{if(R.graph2){const a=dt(R.graph2),s=Object.entries(a).map(([i,{totalSales:u,color:p}])=>({value:u.toFixed(2),name:i,itemStyle:{color:new V.graphic.LinearGradient(0,0,0,1,[{offset:1,color:j(p,30)},{offset:0,color:j(p,70)}])}}));lt(s);const n=Object.entries(a).map(([i,{qty:u,color:p}])=>({value:u.toFixed(2),name:i,itemStyle:{color:new V.graphic.LinearGradient(0,0,0,1,[{offset:1,color:j(p,30)},{offset:0,color:j(p,70)}])}}));rt(n);const e=Object.entries(a).map(([i,{totalSales:u,color:p,qty:b,unitShortName:d}])=>({productName:i,totalSale:u.toFixed(2),color:p,totalQty:b.toFixed(2),unit:d}));st(e);const o=Object.entries(a).map(([i,{totalSales:u,qty:p,unitShortName:b}])=>({ProductName:i,Sales:u.toFixed(1),Quantity:`${p.toFixed(1)} ${b}`})),l=e.reduce((i,u)=>i+parseFloat(u.totalSale),0).toFixed(2),h=e.reduce((i,u)=>i+parseFloat(u.totalQty),0);o.push({ProductName:r("Total"),Sales:`${l}`,Quantity:`${h}`}),it(o)}},[R]);const ht=()=>{_.length>0&&(q(!A),v(!1),O(!1))},ut={tooltip:{trigger:"item",formatter:w==="Sale"?`<b>{b}</b><br><b>${r("Total Sales")}:</b> {c}`:`<b>{b}</b><br><b>${r("Total Qty")}:</b> {c}`,textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{orient:"vertical",backgroundColor:S==="dark"?"#111111df":"rgb(249 249 249 / 97%)",left:"8px",top:"0",borderRadius:7,padding:10,show:A,shadowColor:"#ececec",borderColor:"rgba(57, 50, 50, 0.7)",borderWidth:1,itemGap:10,textStyle:{color:S==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4},type:"scroll",scroll:{show:!0,orient:"horizontal"}},graphic:{type:"text",left:"center",top:"2%",style:{fill:S==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?16:18,fontWeight:"bold"}},series:[{name:"Product Sales",type:"pie",radius:w==="Sale"?["40%","65%"]:["35%","70%"],roseType:w==="Sale"?"":"radius",center:["50%","50%"],selectedMode:"single",avoidLabelOverlap:!0,label:{show:W.length<=10,color:S==="dark"?"#ffffff":"#111111"},emphasis:{label:{show:!0,fontSize:9,fontWeight:"bold"}},data:w==="Sale"?W.length>0?W:[]:X.length>0?X:[],itemStyle:{borderWidth:2,borderColor:"#ffffff00",borderRadius:4}}]},K=a=>{let s="";const n=new Uint8Array(a),e=n.byteLength;for(let o=0;o<e;o++)s+=String.fromCharCode(n[o]);return window.btoa(s)},T=a=>{if(!a)return"";const s=a.getFullYear(),n=String(a.getMonth()+1).padStart(2,"0");return`${String(a.getDate()).padStart(2,"0")}-${n}-${s}`},pt=async()=>{const a=C.loading("Please wait..."),s=T(k[0]),n=T(k[1]),e=await et(()=>import("./exceljs.min-6ae529e9.js").then(h=>h.e),["assets/exceljs.min-6ae529e9.js","assets/vendor-36ea1262.js"]),o=new e.Workbook,l=o.addWorksheet("Data");fetch(ot).then(h=>h.blob()).then(async h=>{const i=new FileReader;i.onload=async function(){const u=i.result,p=o.addImage({base64:u,extension:"png"});l.addImage(p,{tl:{col:0,row:0},ext:{width:100,height:60}});const b=l.getCell("A1");b.value=`${r("Product Wise Summary Data")} (${D})`,b.font={bold:!0,color:{argb:"000000"},size:14},b.alignment={vertical:"middle",horizontal:"center"},l.mergeCells("A1:D1");const d=l.getCell("A2");d.value=`${r("Period")}: ${s} ${r("to")} ${n}`,d.font={bold:!0,color:{argb:"000000"},size:12},d.alignment={horizontal:"center"},l.mergeCells("A2:D2"),l.getColumn(1).width=15,l.getColumn(2).width=50,l.getColumn(3).width=15,l.getColumn(4).width=15;const P=l.addRow([r("#"),r("Product Name"),r("Quantity"),r("Total Sales")]);P.font={bold:!0,color:{argb:"000000"},size:12},P.eachCell(g=>{g.font={bold:!0,color:{argb:"000000"},size:12},g.border={bottom:{style:"thin",color:{argb:"000000"}}}}),_.forEach((g,y)=>{const m=l.addRow([y+1,g.productName,`${g.totalQty} ${g.unit}`,g.totalSale]);m.getCell(1).alignment={horizontal:"left"},m.getCell(2).alignment={horizontal:"left"},m.getCell(3).alignment={horizontal:"right"},m.getCell(4).alignment={horizontal:"right"}});const I=l.addRow(["",r("Total"),"",""]);I.font={bold:!0,color:{argb:"000000"},size:12};const z=_.reduce((g,y)=>g+parseFloat(y.totalSale),0),$=l.getCell(`D${I.number}`);$.value=`₹ ${z.toFixed(2)}`,$.alignment={horizontal:"right"};const U=`${Date.now()}product_wise_summary_${D}_${s}_${n}.xlsx`;o.xlsx.writeBuffer().then(async g=>{const y=new FormData;y.append("file",new Blob([g]),U);try{const m=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",y,{headers:{"Content-Type":"multipart/form-data"}});m.status==200?C.update(a,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(a,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const E=m.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${E}`}catch(m){console.error("Error saving Excel file:",m)}})},i.readAsDataURL(h)})},ft=async()=>{const a=C.loading("Please wait..."),s=T(k[0]),n=T(k[1]),o=new URLSearchParams(window.location.search).get("lang"),l=await L.get(Bt,{responseType:"arraybuffer"}),h=K(l.data),i=await L.get(Ot,{responseType:"arraybuffer"}),u=K(i.data);et(()=>import("./jspdf.es.min-e03163d6.js").then(p=>p.j),["assets/jspdf.es.min-e03163d6.js","assets/index-458025c0.js","assets/vendor-36ea1262.js","assets/index-ce24f766.css","assets/Dashboard-5095ba06.js","assets/Skeleton-7f30ae53.js","assets/install-b5fa7292.js","assets/index.esm-3c2af03d.js","assets/Dashboard-5c3f3713.css"]).then(async p=>{let b=p.default;const d=new b;d.addFileToVFS("NotoSansBengali.ttf",h),d.addFont("NotoSansBengali.ttf","NotoSansBengali","normal"),d.setFont("NotoSansBengali"),d.addFileToVFS("NotoSansDevanagari.ttf",u),d.addFont("NotoSansDevanagari.ttf","NotoSansDevanagari","normal"),d.setFont("NotoSansDevanagari");const P=[[r("#"),r("Product Name"),r("Quantity"),r("Total Sale")]],I={0:{halign:"center"},1:{halign:"center"},2:{halign:"center"},3:{halign:"center"}},z={fontSize:12,fontStyle:"bold",halign:"center"},$={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},Z=ot,U=35,g=20;d.addImage(Z,"PNG",15,12,U,g);const y=[[`${r("Product Wise Summary Data")} (${D})`]];d.autoTable({head:y,body:[],headStyles:{...z,fillColor:$.summaryHeader,textColor:"#FFFFFF"},margin:{top:30},styles:{font:o==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});const m=[[`${r("Period")}: ${s} ${r("to")} ${n}`]];d.autoTable({startY:39.5,head:m,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30},styles:{font:o==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}});let E=_.map((x,N)=>[N+1,x.productName,`${x.totalQty} ${x.unit}`,`₹ ${x.totalSale}`]);const St=_.reduce((x,N)=>x+parseFloat(N.totalSale),0);E.push(["",r("Total"),"",`₹ ${St.toFixed(2)}`]);const bt={startY:d.autoTable.previous.finalY+1,head:P,body:E,headStyles:{...z,fillColor:$.secondHeader,textColor:"#FFFFFF"},columnStyles:I,styles:{font:o==="hi"?"NotoSansDevanagari":"NotoSansBengali",fontStyle:"bold"}};d.autoTable(bt);const yt=`${Date.now()}product_wise_summary_${D}_${s}_${n}.pdf`,_t=d.output("blob"),tt=new FormData;tt.append("file",_t,yt);try{const x=await L.post("https://dev-def-dash-route-api.inspirigenceworks.co.in//api/uploader",tt,{headers:{"Content-Type":"multipart/form-data"}});x.status==200?C.update(a,{render:"Download Starting...",type:"success",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1}):C.update(a,{render:"Download Failed !",type:"error",isLoading:!1,autoClose:5e3,closeOnClick:!0,pauseOnFocusLoss:!1});const N=await x.data.url;window.location.href=`https://dev-def-dash-route-api.inspirigenceworks.co.in//static/downloads/${N}`}catch(x){console.error("Error saving PDF file:",x)}})};f.useEffect(()=>{const a=s=>{G.current&&!G.current.contains(s.target)&&M.current&&!M.current.contains(s.target)&&s.target.tagName!=="svg"&&s.target.tagName!=="path"&&v(!1),H.current&&!H.current.contains(s.target)&&q(!1)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[]);const gt=()=>{q(!1),v(!Q)},mt=(a,s)=>{s!==null&&ct(s)},xt=Ct({typography:{button:{textTransform:"none"}}});function j(a,s){var n=parseInt(a.substring(1,3),16),e=parseInt(a.substring(3,5),16),o=parseInt(a.substring(5,7),16);n=parseInt(n*(100+s)/100),e=parseInt(e*(100+s)/100),o=parseInt(o*(100+s)/100),n=n<255?n:255,e=e<255?e:255,o=o<255?o:255,n=Math.round(n),e=Math.round(e),o=Math.round(o);var l=n.toString(16).length==1?"0"+n.toString(16):n.toString(16),h=e.toString(16).length==1?"0"+e.toString(16):e.toString(16),i=o.toString(16).length==1?"0"+o.toString(16):o.toString(16);return"#"+l+h+i}return t.jsx(t.Fragment,{children:t.jsxs("div",{ref:H,className:`${c.chartContainer} ${S==="dark"?c.darkMode:c.lightMode}`,children:[t.jsx(Tt,{position:"top-center",theme:S}),t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("button",{className:c.legendButton,onClick:ht,children:[t.jsx("img",{src:"https://dev-def-pumps.inspirigenceworks.co.in/images/code-block.png",alt:"Code Block Icon",className:c.codeBlockIcon,title:"Legends",style:{filter:A||_.length===0?"opacity(0.4)":"opacity(1)",transition:"all .25s ease-in-out"}})," "]}),t.jsxs("div",{className:"d-flex align-items-center",children:[t.jsx("div",{className:`fw-bold noselect me-2 fs-${window.innerWidth<=768?7:5} ${S==="dark"?c.darkMode:c.lightMode}`,children:r("Product")}),t.jsx(Pt,{theme:xt,children:t.jsxs(It,{size:"small",color:"primary",value:w,exclusive:!0,onChange:mt,"aria-label":"Platform",style:{fontFamily:'"Public Sans", sans-serif !important'},children:[t.jsx(at,{style:{color:w=="Sale"?"":"var(--text-color)"},className:`fw-bold fs-${window.innerWidth<=1300?7:6}`,value:"Sale",children:r("Sale")}),t.jsx(at,{style:{color:w=="Qty"?"":"var(--text-color)"},className:`fw-bold fs-${window.innerWidth<=1300?7:6}`,value:"Qty",children:r("Qty")})]})})]}),t.jsx("div",{title:"Export Options",className:"d-flex g-0",ref:G,children:t.jsxs("div",{className:`${c.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${c.icon} ${S==="dark"?c.darkMode:c.lightMode} px-2 py-1`,onClick:gt,children:Q?t.jsx(Ft,{style:{fontSize:"1.1rem"}}):t.jsx(jt,{style:{fontSize:"1.1rem"}})}),Q&&t.jsxs("div",{className:`${c.exportOptions} ${S==="dark"?c.darkMode:c.lightMode}`,ref:M,children:[F?t.jsxs("div",{className:c.exportOption,onClick:()=>{O(!F),v(!1)},children:[t.jsx(Nt,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:r("View Graph")})]}):t.jsxs("div",{className:c.exportOption,onClick:()=>{O(!F),v(!1)},children:[t.jsx($t,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:r("View Table")})]}),t.jsxs("div",{className:c.exportOption,onClick:pt,children:[t.jsx(kt,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:r("Export to Excel")})]}),t.jsxs("div",{className:c.exportOption,onClick:ft,children:[t.jsx(Dt,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:r("Export to PDF")})]})]})]})})]})}),J&&t.jsx("div",{className:c.NoDataOverlay,children:t.jsx("img",{src:vt,alt:"Loading...",width:50,height:50})}),B.length==1&&!F&&!J?t.jsx("div",{className:`${c.NoDataOverlay} fs-5`,children:r("No Data Found")}):"",F?t.jsx("div",{className:"container-fluid mt-2 table-responsive",style:{height:"289px"},children:t.jsxs("table",{className:`table  ${S=="dark"?"table-dark":""}`,children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",children:"#"}),t.jsx("th",{scope:"col",children:r("Product")}),t.jsx("th",{scope:"col",children:r("Quantity")}),t.jsxs("th",{scope:"col",children:[r("Sales"),"(₹)"]})]})}),t.jsx("tbody",{children:B.map((a,s)=>t.jsxs("tr",{children:[t.jsx("th",{scope:"row",children:B.length-1===s?"":s+1}),t.jsx("td",{children:a.ProductName}),t.jsx("td",{children:B.length-1===s?"":a.Quantity}),t.jsx("td",{children:parseFloat(a.Sales).toFixed(2)})]},a.ProductName))})]})}):t.jsx(nt,{option:ut,style:{height:"297px",width:"100%",maxWidth:"2300px"},className:c.piechart},_.length)]})})};export{we as default};
