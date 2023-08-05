import{_ as R}from"./index-203bbd60.js";import{r as d,u as X,l as K,j as t,g as Z,z as tt,A as et,I as ot,C as at,E as nt,G as rt}from"./vendor-0ae1ff03.js";import{E as st,M as lt,F as it}from"./index-a05dbcdb.js";const ct="_piechart_yc0ui_11",dt="_chartContainer_yc0ui_23",ut="_legendButtonContainer_yc0ui_49",pt="_legendButton_yc0ui_49",ft="_codeBlockIcon_yc0ui_133",ht="_lightMode_yc0ui_191",gt="_dateFilter_yc0ui_195",_t="_officefilter_yc0ui_351",mt="_topContainer_yc0ui_443",yt="_darkMode_yc0ui_463",xt="_iconsContainer_yc0ui_631",bt="_icon_yc0ui_631",Ct="_exportOptions_yc0ui_715",St="_NoDataOverlay_yc0ui_741",wt="_exportOption_yc0ui_715",kt="_tableContainer_yc0ui_999",vt="_table_yc0ui_999",Ft="_summaryHeader_yc0ui_1035",Nt="_periodHeader_yc0ui_1043",jt="_closeButton_yc0ui_1075",$t="_tableWrapper_yc0ui_1105",Dt="_loadingOverlay_yc0ui_1113",Ot="_loadingSpinner_yc0ui_1139",Pt="_boldOption_yc0ui_1151",Et="_optionGroup_yc0ui_1161",e={piechart:ct,chartContainer:dt,"legend-text":"_legend-text_yc0ui_31",legendButtonContainer:ut,legendButton:pt,codeBlockIcon:ft,lightMode:ht,"label-text":"_label-text_yc0ui_191",dateFilter:gt,officefilter:_t,topContainer:mt,darkMode:yt,"theme-container":"_theme-container_yc0ui_473",iconsContainer:xt,icon:bt,exportOptions:Ct,NoDataOverlay:St,exportOption:wt,tableContainer:kt,table:vt,summaryHeader:Ft,periodHeader:Nt,closeButton:jt,tableWrapper:$t,loadingOverlay:Dt,loadingSpinner:Ot,boldOption:Pt,optionGroup:Et},L="/assets/logo-ffc38f64.png",Ht=({themeMode:x,selectedRange:b,selectedOffice:F,isAdmin:T})=>{const[g,Q]=d.useState([]),[N,S]=d.useState(!1),j=d.useRef(null),$=d.useRef(null),D=d.useRef(null),[O,P]=d.useState(!1),[H,M]=d.useState([]),[w,E]=d.useState(!1),[I,W]=d.useState(!1),{t:n}=X(),A=[{name:"Product Name",label:n("Product")},{name:"Quantity",label:n("Quantity")},{name:"Sales",label:`${n("Sales")}(₹)`}],G={selectableRowsHeader:!1,filter:!1,download:!1,print:!1,viewColumns:!1,search:!1,responsive:"standard",selectableRows:"none",rowsPerPage:10,rowsPerPageOptions:[10,25,50],tableBodyHeight:"229px",elevation:0,fixedHeader:!1,textLabels:{pagination:{rowsPerPage:n("Rows")}}};d.useEffect(()=>{W(!0);const o=C(b[0]),s=C(b[1]);o&&s&&F&&K.get(`http://115.124.120.251:5064/api/v1/dashboard/sales_list/${o}/${s}/${F}/${T}`).then(u=>{const a=u.data.graph2;let l={},m={},h={},y={};if(a.forEach(p=>{const{lstproduct:f}=p;f.forEach(r=>{let{productName:c,totalSales:i,color:B,qty:k,unitShortName:z}=r;i!==0&&(l[c]?(l[c]+=i,h[c]+=k):(l[c]=i,m[c]=B,h[c]=k,y[c]=z))})}),l){let p=[],f=[];for(let r in l)p.push({productName:r,totalSale:l[r],color:m[r],totalQty:h[r],unit:y[r]}),f.push({"Product Name":r,Sales:l[r],Quantity:`${h[r]} ${y[r]}`});M(f),Q(p)}}).catch(u=>{}).finally(()=>{W(!1)})},[b,F,T]);const V=()=>{g.length>0&&P(!O),S(!1),E(!1)},Y={tooltip:{trigger:"item",formatter:`<b>{b}</b><br><b>${n("Total Qty")}:</b> {c}`,textStyle:{fontSize:window.innerWidth<=768?10:14}},legend:{orient:"vertical",backgroundColor:x==="dark"?"#111111df":"rgb(249 249 249 / 97%)",left:"8px",top:"0",borderRadius:7,padding:10,show:O,shadowColor:"#ececec",borderColor:"rgba(57, 50, 50, 0.7)",borderWidth:1,itemGap:10,textStyle:{color:x==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=1496?12:14,padding:4},type:"scroll",scroll:{show:!0,orient:"horizontal"}},graphic:{type:"text",left:"center",top:"top",style:{fontSize:window.innerWidth<=1496?16:18,fontWeight:"bold"}},series:[{name:"Product Qty",type:"pie",radius:["35%","70%"],center:["50%","50%"],roseType:"radius",selectedMode:"single",avoidLabelOverlap:!0,label:{show:g.length<=5,color:x==="dark"?"#ffffff":"#111111"},emphasis:{label:{show:!0,fontSize:9,fontWeight:"bold"}},data:g.length>0?g.map((o,s)=>({value:o.totalQty,name:o.productName,itemStyle:{color:o.color}})):[],itemStyle:{borderWidth:2,borderColor:"#ffffff00",borderRadius:4}}]},U=async()=>{const o=C(b[0]),s=C(b[1]),u=await R(()=>import("./exceljs.min-c5829cea.js").then(l=>l.e),["assets/exceljs.min-c5829cea.js","assets/vendor-0ae1ff03.js"]),_=new u.Workbook,a=_.addWorksheet("Data");fetch(L).then(l=>l.blob()).then(l=>{const m=new FileReader;m.onload=function(){const h=m.result,y=_.addImage({base64:h,extension:"png"});a.addImage(y,{tl:{col:0,row:0},ext:{width:100,height:70}});const p=a.getCell("A2");p.value=n("Product Wise Summary Data"),p.font={bold:!0,color:{argb:"000000"},size:14},p.alignment={vertical:"middle",horizontal:"center"},a.mergeCells("A2:C2");const f=a.getCell("A3");f.value=`${n("Period")}: ${o} ${n("to")} ${s}`,f.font={bold:!0,color:{argb:"000000"},size:12},f.alignment={horizontal:"center"},a.mergeCells("A3:C3"),a.getColumn(1).width=50,a.getColumn(2).width=15;const r=a.addRow([n("Product Name"),n("Quantity"),n("Total Sales")]);r.font={bold:!0,color:{argb:"000000"},size:12},r.eachCell(i=>{i.font={bold:!0,color:{argb:"000000"},size:12},i.border={bottom:{style:"thin",color:{argb:"000000"}}}}),g.forEach(i=>{a.addRow([i.productName,`${i.totalQty} ${i.unit}`,`₹${i.totalSale}`])});const c=`product_wise_summary_data_${Date.now()}.xlsx`;_.xlsx.writeBuffer().then(i=>{it.saveAs(new Blob([i]),c)})},m.readAsDataURL(l)})},C=o=>{if(!o)return"";const s=o.getFullYear(),u=String(o.getMonth()+1).padStart(2,"0"),_=String(o.getDate()).padStart(2,"0");return`${s}-${u}-${_}`},q=async()=>{const o=C(b[0]),s=C(b[1]);R(()=>import("./index-a05dbcdb.js").then(u=>u.j),["assets/index-a05dbcdb.js","assets/vendor-0ae1ff03.js","assets/index-203bbd60.js","assets/index-4da97eed.css"]).then(u=>{let _=u.default;const a=new _,l=[["Product Name","Quantity","Total Sale"]],m={1:{halign:"right"},2:{halign:"right"}},h={fontSize:12,fontStyle:"bold",halign:"center"},y={summaryHeader:"#3CB043",secondHeader:"#75AAF0"},p=L,f=35,r=20;a.addImage(p,"PNG",15,12,f,r);const c=[["Product Wise Summary Data"]];a.autoTable({head:c,body:[],headStyles:{...h,fillColor:y.summaryHeader,textColor:"#FFFFFF"},margin:{top:30}});const i=[[`Period: ${o} to ${s}`]];a.autoTable({startY:39.5,head:i,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30}});const B=g.map(v=>[v.productName,`${v.totalQty} ${v.unit}`,v.totalSale.toFixed(2)]),k={startY:a.autoTable.previous.finalY+1,head:l,body:B,headStyles:{...h,fillColor:y.secondHeader,textColor:"#FFFFFF"},columnStyles:m};a.autoTable(k);const z=`product_wise_summary_data_${Date.now()}.pdf`;a.save(z)})};d.useEffect(()=>{const o=s=>{j.current&&!j.current.contains(s.target)&&$.current&&!$.current.contains(s.target)&&s.target.tagName!=="svg"&&s.target.tagName!=="path"&&S(!1),D.current&&!D.current.contains(s.target)&&P(!1)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[]);const J=()=>{P(!1),S(!N)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:`${e.chartContainer} ${x==="dark"?e.darkMode:e.lightMode}`,children:[t.jsx("div",{className:"container-fluid",children:t.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[t.jsxs("button",{className:e.legendButton,onClick:V,ref:D,children:[t.jsx("img",{src:"http://115.124.120.251:5007/images/code-block.png",alt:"Code Block Icon",className:e.codeBlockIcon,title:"Legends",style:{filter:O||g.length===0?"opacity(0.4)":"opacity(1)",transition:"all .25s ease-in-out"}})," "]}),t.jsx("div",{className:`fw-bold fs-5 ${x==="dark"?e.darkMode:e.lightMode}`,children:n("Product Quantity")}),t.jsx("div",{className:"d-flex g-0",ref:j,children:t.jsxs("div",{className:`${e.iconsContainer} d-flex justify-content-center align-items-center`,children:[t.jsx("div",{className:`${e.icon} ${x==="dark"?e.darkMode:e.lightMode} px-2 py-1`,onClick:J,children:N?t.jsx(Z,{style:{fontSize:"1.1rem"}}):t.jsx(tt,{style:{fontSize:"1.1rem"}})}),N&&t.jsxs("div",{className:`${e.exportOptions} ${x==="dark"?e.darkMode:e.lightMode}`,ref:$,children:[w?t.jsxs("div",{className:e.exportOption,onClick:()=>{E(!w),S(!1)},children:[t.jsx(ot,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),t.jsx("span",{children:n("View Graph")})]}):t.jsxs("div",{className:e.exportOption,onClick:()=>{E(!w),S(!1)},children:[t.jsx(et,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),t.jsx("span",{children:n("View Table")})]}),t.jsxs("div",{className:e.exportOption,onClick:U,children:[t.jsx(at,{style:{fontSize:"1.1rem",color:"green"}}),t.jsx("span",{children:n("Export to Excel")})]}),t.jsxs("div",{className:e.exportOption,onClick:q,children:[t.jsx(nt,{style:{fontSize:"1.1rem",color:"red"}}),t.jsx("span",{children:n("Export to PDF")})]})]})]})})]})}),I&&t.jsx("div",{className:e.loadingOverlay,children:t.jsx(rt,{disableShrink:!0})}),H.length==0&&!w&&!I?t.jsx("div",{className:`${e.NoDataOverlay} fs-5`,children:n("No Data Found")}):"",w?t.jsx("div",{className:"container-fluid pt-2",children:t.jsx(lt,{data:H,columns:A,options:G})}):t.jsx(st,{option:Y,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:e.piechart},g.length)]})})};export{Ht as default};
