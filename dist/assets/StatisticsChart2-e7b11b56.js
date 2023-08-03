import{_ as W}from"./index-0bab7b9d.js";import{r as f,j as o,g as X,w as q,x as K,B as Q,z as Z,A as ee,C as te,l as E}from"./vendor-770ffdd0.js";import{E as oe,M as ae,l as B,F as se}from"./index-82263592.js";const ne="_chartContainer_c41sl_1",re="_lightMode_c41sl_47",le="_dateFilter_c41sl_51",ie="_officefilter_c41sl_207",ce="_topContainer_c41sl_299",de="_darkMode_c41sl_319",fe="_iconsContainer_c41sl_487",pe="_icon_c41sl_487",he="_exportOptions_c41sl_571",me="_exportOption_c41sl_571",ge="_tableContainer_c41sl_831",xe="_table_c41sl_831",_e="_summaryHeader_c41sl_867",be="_periodHeader_c41sl_875",ue="_closeButton_c41sl_907",ye="_tableWrapper_c41sl_937",Se="_loadingOverlay_c41sl_945",we="_loadingSpinner_c41sl_971",Ce="_boldOption_c41sl_983",Fe="_optionGroup_c41sl_993",a={chartContainer:ne,lightMode:re,"label-text":"_label-text_c41sl_47",dateFilter:le,officefilter:ie,topContainer:ce,darkMode:de,"theme-container":"_theme-container_c41sl_329",iconsContainer:fe,icon:pe,exportOptions:he,exportOption:me,tableContainer:ge,table:xe,summaryHeader:_e,periodHeader:be,closeButton:ue,tableWrapper:ye,loadingOverlay:Se,loadingSpinner:we,boldOption:Ce,optionGroup:Fe},ve=({themeMode:n,selectedRange:p,selectedOffice:k,isAdmin:T,SelectedOfficeName:ke})=>{const[h,P]=f.useState([]),[j,y]=f.useState(!1),O=f.useRef(null),N=f.useRef(null),[L,D]=f.useState(!0),[S,$]=f.useState(!1),[A,H]=f.useState([]),I=[{name:"officeName",label:"Office"},{name:"sales",label:"Sales(₹)"}],R={selectableRowsHeader:!1,filter:!1,download:!1,print:!1,viewColumns:!1,search:!1,responsive:"standard",selectableRows:"none",rowsPerPage:10,rowsPerPageOptions:[10,25,50],tableBodyHeight:"228px",elevation:0,fixedHeader:!1,textLabels:{pagination:{rowsPerPage:"Rows"}}};f.useEffect(()=>{const e=s=>{O.current&&!O.current.contains(s.target)&&N.current&&!N.current.contains(s.target)&&s.target.tagName!=="svg"&&s.target.tagName!=="path"&&y(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),f.useEffect(()=>{p&&k&&(()=>{D(!0);const s=x(p[0]),c=x(p[1]);E.get(`http://115.124.120.251:5064/api/v1/dashboard/total_sales/${s}/${c}/${k}/${T}`).then(r=>{const{data:t}=r;if(t.graph1){let m=[],i=[];for(let l=0;l<t.graph1.length;l++)m.push({officeName:t.graph1[l].officeName,sales:t.graph1[l].totalIncome.toFixed(0)}),i.push({officeName:t.graph1[l].officeName,sales:t.graph1[l].totalIncome.toFixed(2)});i.push({officeName:"Total",sales:m.reduce((l,g)=>l+parseFloat(g.sales),0).toFixed(2)}),H(i),P(m)}}).catch(r=>{console.log("Error fetching data:",r)}).finally(()=>{D(!1)})})()},[p,k,T]);const G={color:["#66BA69"],title:{textStyle:{color:n==="dark"?"#ffffff":"#000000",fontSize:window.innerWidth<=768?18:25}},tooltip:{trigger:"axis",formatter:"<b>Office:</b> {b} <br> <b>Sales:</b> {c} ",textStyle:{fontSize:window.innerWidth<=768?10:14}},yAxis:{type:"category",name:(window.innerWidth>550,""),nameLocation:"middle",nameGap:80,nameTextStyle:{color:n==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},data:h.map(e=>e.officeName),axisLine:{lineStyle:{color:n==="dark"?"#ffffff":"#000000"}},axisLabel:{color:n==="dark"?"#ffffff":"#000000",fontSize:12,formatter:e=>window.innerWidth<=768?e.length>10?e.substring(0,10)+"...":e:e.length>0?e.substring(0,10)+"...":e}},grid:{left:window.innerWidth<=768?85:100,right:15,bottom:50,top:15},xAxis:{type:"value",name:window.innerWidth>550?"Sales":"",nameLocation:"middle",nameGap:30,nameTextStyle:{color:n==="dark"?"#ffffff":"#000000",fontWeight:"bold",fontSize:window.innerWidth<=768?14:16},axisLine:{lineStyle:{color:n==="dark"?"#ffffff":"#000000"}},axisLabel:{color:n==="dark"?"#ffffff":"#000000",formatter:e=>e>=1e3?e/1e3+"k":e,rotate:window.innerWidth<=768?45:0},splitLine:{show:!0,lineStyle:{color:n==="dark"?"grey":"silver",type:"line"}}},series:[{type:"bar",barWidth:"30%",data:h.map(e=>e.sales),label:{show:h.length<=5&&window.innerWidth>768,position:"inside",color:"#fff"}}]},z=e=>{let s="";const c=new Uint8Array(e),r=c.byteLength;for(let t=0;t<r;t++)s+=String.fromCharCode(c[t]);return window.btoa(s)},M=async()=>{const e=x(p[0]),s=x(p[1]),c=await W(()=>import("./exceljs.min-d8450118.js").then(d=>d.e),["assets/exceljs.min-d8450118.js","assets/vendor-770ffdd0.js"]),r=new c.Workbook,t=r.addWorksheet("Total Sales by Office"),m=await E.get(B,{responseType:"arraybuffer"}),i=z(m.data),l=r.addImage({base64:i,extension:"png"});t.addImage(l,{tl:{col:0,row:0},ext:{width:40,height:40}});const g=t.getCell("A1");g.value="Total Sales by Office",g.font={bold:!0,color:{argb:"000000"},size:14},g.alignment={vertical:"middle",horizontal:"center"},t.mergeCells("A1:C1");const _=t.getCell("A2");_.value=`Period: ${e} to ${s}`,_.font={bold:!0,color:{argb:"000000"},size:12},_.alignment={horizontal:"center"},t.mergeCells("A2:C2"),t.getColumn(1).width=50,t.getColumn(2).width=15,t.getColumn(3).width=15;const v=t.addRow(["Office Name","Sales"]);v.font={bold:!0},h.forEach(d=>{t.addRow([d.officeName,d.sales])});const w=t.addRow(["Total",""]);w.font={bold:!0,color:{argb:"000000"},size:12};const C=h.reduce((d,u)=>d+parseFloat(u.sales),0),b=t.getCell(`B${w.number}`);b.value=`₹${C}`,b.numFmt="0.00",b.alignment={horizontal:"right"},r.xlsx.writeBuffer().then(d=>{const u=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});se.saveAs(u,"total_sales_by_office.xlsx")})},Y=async()=>{const e=x(p[0]),s=x(p[1]),c=await E.get(B,{responseType:"arraybuffer"}),r=z(c.data);W(()=>import("./index-82263592.js").then(t=>t.j),["assets/index-82263592.js","assets/vendor-770ffdd0.js","assets/index-0bab7b9d.js","assets/index-7b634162.css"]).then(t=>{let m=t.default;const i=new m,l=r,g=35,_=20;i.addImage(l,"PNG",15,9,g,_);const v=[["Total Sales by Office"]];i.autoTable({startY:27,head:v,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:20,bottom:0}});const w=[[`Period: ${e} to ${s}`]];i.autoTable({startY:36,head:w,body:[],headStyles:{fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#3CB043",textColor:"#FFFFFF"},margin:{top:30}});const C=h.map(F=>[F.officeName,parseFloat(F.sales.toFixed(2))]),b=h.reduce((F,J)=>F+parseFloat(J.sales),0);C.push(["Total",`${b.toFixed(2)}`]);const d=["Office Name","Sales"],u={1:{halign:"right"},2:{halign:"right"}},V={fontSize:12,fontStyle:"bold",halign:"center",fillColor:"#75AAF0",textColor:"#FFFFFF"};i.autoTable(d,C,{startY:45,headStyles:V,columnStyles:u}),i.save("total_sales_by_office.pdf")})},U=()=>{y(!j)},x=e=>{if(!e)return"";const s=e.getFullYear(),c=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${s}-${c}-${r}`};return o.jsxs("div",{className:`${a.chartContainer} ${n==="dark"?a.darkMode:a.lightMode}`,children:[o.jsx("div",{className:"container-fluid",children:o.jsxs("div",{className:"d-flex w-100 g-0 align-items-center justify-content-between",children:[o.jsx("div",{className:`fw-bold fs-5 ${n==="dark"?a.darkMode:a.lightMode}`,children:"Total Sales by Business Entity"}),o.jsx("div",{className:"d-flex g-0",ref:O,children:o.jsxs("div",{className:`${a.iconsContainer} d-flex justify-content-center align-items-center`,children:[o.jsx("div",{className:`${a.icon} ${n==="dark"?a.darkMode:a.lightMode} px-2 py-1`,onClick:U,children:j?o.jsx(X,{style:{fontSize:"1.1rem"}}):o.jsx(q,{style:{fontSize:"1.1rem"}})}),j&&o.jsxs("div",{className:`${a.exportOptions} ${n==="dark"?a.darkMode:a.lightMode}`,ref:N,children:[S?o.jsxs("div",{className:a.exportOption,onClick:()=>{$(!S),y(!1)},children:[o.jsx(Q,{style:{fontSize:"1.1rem",color:"#6c3fb5"}}),o.jsx("span",{children:"Export to Graph"})]}):o.jsxs("div",{className:a.exportOption,onClick:()=>{$(!S),y(!1)},children:[o.jsx(K,{style:{fontSize:"1.1rem",color:"#0d6efd"}}),o.jsx("span",{children:"Export to Table"})]}),o.jsxs("div",{className:a.exportOption,onClick:M,children:[o.jsx(Z,{style:{fontSize:"1.1rem",color:"green"}}),o.jsx("span",{children:"Export to Excel"})]}),o.jsxs("div",{className:a.exportOption,onClick:Y,children:[o.jsx(ee,{style:{fontSize:"1.1rem",color:"red"}}),o.jsx("span",{children:"Export to PDF"})]})]})]})})]})}),L&&o.jsx("div",{className:a.loadingOverlay,children:o.jsx(te,{disableShrink:!0})}),S?o.jsx("div",{className:"container-fluid mt-2",children:o.jsx(ae,{data:A,columns:I,options:R})}):o.jsx(oe,{option:G,style:{height:"300px",width:"100%",maxWidth:"2300px"},className:n==="dark"?a.darkMode:a.lightMode})]})};export{ve as default};
