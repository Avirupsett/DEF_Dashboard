import{t as d,j as o,R as P,a as m,i as S,b as T,c as $,B as h}from"./vendor-36ea1262.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const f="modulepreload",N=function(a){return"/"+a},C={},y=function(r,i,c){if(!i||i.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=N(e),e in C)return;C[e]=!0;const s=e.endsWith(".css"),p=s?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":f,s||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),s)return new Promise((l,u)=>{n.addEventListener("load",l),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})};const g=d.lazy(()=>y(()=>import("./DriverDashboardWeb-5ff7ad3c.js"),["assets/DriverDashboardWeb-5ff7ad3c.js","assets/vendor-36ea1262.js","assets/index.esm-3c2af03d.js","assets/index.esm-2987d02e.js"])),v=d.lazy(()=>y(()=>import("./DriverDashboard-fb438608.js").then(a=>a.D),["assets/DriverDashboard-fb438608.js","assets/vendor-36ea1262.js","assets/index.esm-3c2af03d.js","assets/index.esm-2987d02e.js","assets/Skeleton-7f30ae53.js","assets/useTheme-0af4770a.js","assets/ButtonBase-959669a6.js","assets/ToggleButtonGroup-78539232.js","assets/DriverDashboard-49a25ed2.css"])),E=d.lazy(()=>y(()=>import("./Dashboard-5095ba06.js").then(a=>a.D),["assets/Dashboard-5095ba06.js","assets/vendor-36ea1262.js","assets/Skeleton-7f30ae53.js","assets/install-b5fa7292.js","assets/index.esm-3c2af03d.js","assets/Dashboard-5c3f3713.css"])),D=()=>o.jsxs(P,{children:[o.jsx(m,{path:"/",element:o.jsx("div",{id:"dashboard",children:o.jsx(E,{})})}),o.jsx(m,{path:"/driver",element:o.jsx(v,{})}),o.jsx(m,{path:"/driverstatistic",element:o.jsx(g,{})})]});const x="Users",w="Office",V="Sales",b="Expense",L="days",M="CompanyAdmin",A="PumpUser",F="PumpAdmin",B="Company",W="Filter",k="Close",O="Entities",R="Companies",U="Pumps",Q="Today",_="Yesterday",I="Total",j="Period",Y="Quantity",G="to",H="Product",J="Rows",q="Sale",z="Qty",K="of",X="Name",Z="Mobile",ee="Vehicle",te="Top",se="Visit",oe="Payment",ae="Count",ne="Card",re="UPI",ie="Cash",le="NetBanking",ce="Customers",ue="Hello",me="Metrics",de="Status",ye="Delivered",Ce="Pending",pe="All",Pe="Distance",Se="Duration",Te="MobileNo",$e="VehicleNo",he="Page",fe="Search",Ne="Current",ge="Bottom",ve={Users:x,Office:w,Sales:V,Expense:b,days:L,CompanyAdmin:M,PumpUser:A,PumpAdmin:F,Company:B,"Retail Pumps":"Retail Pumps","Wholesale Pumps":"Wholesale Pumps","Sales Overview":"Sales Overview","Sales-Expense":"Sales-Expense","Product Volume":"Product Volume","Product Quantity":"Product Quantity","Total Sales by Business Entity":"Total Sales by Business Entity","Average Sales":"Average Sales",Date:"Date",Filter:W,Close:k,"No office data available":"No office data available","No user data available":"No user data available","Total Sales":"Total Sales","Total Qty":"Total Qty","View Table":"View Table","View Graph":"View Graph","Export to Excel":"Export to Excel","Export to PDF":"Export to PDF",Entities:O,Companies:R,Pumps:U,Today:Q,Yesterday:_,"This week":"This week","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","This month":"This month","Last month":"Last month","This year":"This year","Last year":"Last year","Last week":"Last week","Next week":"Next week",Total:I,Period:j,"Sales-Expense Summary":"Sales-Expense Summary","Product Wise Summary Data":"Product Wise Summary Data","Product Name":"Product Name","Office Name":"Office Name",Quantity:Y,to:G,Product:H,"No Data Found":"No Data Found",Rows:J,"Total Sale":"Total Sale","Product Wise":"Product Wise",Sale:q,Qty:z,of:K,"Top Customers":"Top Customers",Name:X,Mobile:Z,Vehicle:ee,Top:te,Visit:se,"Sales (Day Wise)":"Sales (Day Wise)","Sales (Month Wise)":"Sales (Month Wise)","Sales (Year Wise)":"Sales (Year Wise)","Payment Mode":"Payment Mode",Payment:oe,Count:ae,Card:ne,UPI:re,Cash:ie,NetBanking:le,Customers:ce,"Customer Type":"Customer Type","Total Count":"Total Count","Existing Customers":"Existing Customers","New Customers":"New Customers","Existing Customer Count":"Existing Customer Count","Existing Customer Sales":"Existing Customer Sales","New Customer Count":"New Customer Count","New Customer Sales":"New Customer Sales","Customers Summary Data":"Customers Summary Data","Customer Name":"Customer Name","Mobile No":"Mobile No","Vehicle No":"Vehicle No","Top Customers Summary Data":"Top Customers Summary Data","Distance Covered":"Distance Covered",Hello:ue,"Driving Time":"Driving Time","Idle Time":"Idle Time","Average Speed":"Average Speed","Tanker Fuel Level":"Tanker Fuel Level","Jobs Completed":"Jobs Completed",Metrics:me,"My Trips":"My Trips","Prev Journey":"Prev Journey",Status:de,Delivered:ye,Pending:Ce,All:pe,Distance:Pe,"Tank Level":"Tank Level",Duration:Se,"Travel Routes":"Travel Routes","Big Buyers":"Big Buyers","Former Customers":"Former Customers","Former Low-Value Customers":"Former Low-Value Customers","Most Valuable Customers":"Most Valuable Customers","Most Frequent Customers":"Most Frequent Customers","Non Follow-Up Customers":"Most Follow-Up Customers","Customer Profiling":"Customer Profiling",MobileNo:Te,VehicleNo:$e,"Last Visit":"Last Visit","Total Visits":"Total Visits","Go to page":"Go to page",Page:he,"days ago":"days ago",Search:fe,"Office Wise Sales":"Office Wise Sales",Current:Ne,"All Time":"All Time",Bottom:ge},Ee="उपयोगकर्ता",De="कार्यालय",xe="बिक्री",we="खर्च",Ve="दिन",be="कंपनी प्रशासक",Le="पंप उपयोगकर्ता",Me="पंप व्यवस्थापक",Ae="कंपनी",Fe="फ़िल्टर",Be="बंद करें",We="संस्थान",ke="कंपनियाँ",Oe="पंप",Re="आज",Ue="कल",Qe="कुल",_e="अवधि",Ie="मात्रा",je="से",Ye="उत्पाद",Ge="पंक्तियाँ",He="बिक्री",Je="मात्रा",qe="की",ze="नाम",Ke="मोबाइल",Xe="वाहन",Ze="शीर्ष",et="यात्रा",tt="भुगतान",st="गणना",ot="कार्ड",at="यूपीआई",nt="नकद",rt="नेट बैंकिंग",it="ग्राहक",lt="नमस्ते",ct="मैट्रिक्स",ut="स्थिति",mt="पहुंचाया गया",dt="बकाया",yt="सभी",Ct="दूरी",pt="अवधि",Pt="मोबाइल नंबर",St="वाहन नंबर",Tt="पृष्ठ",$t="खोजें",ht="वर्तमान",ft="नीचे",Nt={Users:Ee,Office:De,Sales:xe,Expense:we,days:Ve,CompanyAdmin:be,PumpUser:Le,PumpAdmin:Me,Company:Ae,"Retail Pumps":"खुदरा पंप","Wholesale Pumps":"थोक पंप","Sales Overview":"बिक्री अवलोकन","Sales-Expense":"बिक्री-खर्च","Product Volume":"उत्पाद आयतन","Product Quantity":"उत्पाद मात्रा","Total Sales by Business Entity":"व्यवसायिक एकाधिकारी द्वारा कुल बिक्री","Average Sales":"औसत बिक्री",Date:"तारीख",Filter:Fe,Close:Be,"No office data available":"कोई कार्यालय डेटा उपलब्ध नहीं है","No user data available":"कोई उपयोगकर्ता डेटा उपलब्ध नहीं है","Total Sales":"कुल बिक्री","Total Qty":"कुल मात्रा","View Table":"टेबल देखें","View Graph":"ग्राफ़ देखें","Export to Excel":"एक्सेल में निर्यात करें","Export to PDF":"पीडीएफ में निर्यात करें",Entities:We,Companies:ke,Pumps:Oe,Today:Re,Yesterday:Ue,"This week":"इस सप्ताह","Last 7 days":"पिछले 7 दिन","Last 30 days":"पिछले 30 दिन","This month":"इस महीने","Last month":"पिछले महीने","This year":"इस साल","Last year":"पिछले साल","Last week":"पिछले सप्ताह","Next week":"अगले सप्ताह","Sales-Expense Summary":"बिक्री-व्यय सारांश","Sales-Expense Summary Data":"बिक्री-व्यय सारांश डेटा",Total:Qe,"Sub Total":"उप कुल","Total Expenses":"कुल व्यय","Total Profit":"कुल लाभ",Period:_e,"Product Name":"उत्पाद का नाम","Office Name":"कार्यालय का नाम",Quantity:Ie,to:je,Product:Ye,"No Data Found":"कोई डेटा नहीं मिला",Rows:Ge,"Product Wise Summary Data":"उत्पाद वार संक्षिप्त आंकड़े","Total Sale":"कुल बिक्री","Product Wise":"उत्पाद वार",Sale:He,Qty:Je,of:qe,"Top Customers":"शीर्ष ग्राहक",Name:ze,Mobile:Ke,Vehicle:Xe,Top:Ze,Visit:et,"Sales (Day Wise)":"दिन के आधार पर बिक्री","Sales (Month Wise)":"महीने के आधार पर बिक्री","Sales (Year Wise)":"वर्ष के आधार पर बिक्री","Payment Mode":"भुगतान मोड",Payment:tt,Count:st,Card:ot,UPI:at,Cash:nt,NetBanking:rt,Customers:it,"Customer Type":"ग्राहक प्रकार","Total Count":"कुल गणना","Existing Customers":"मौजूदा ग्राहक","New Customers":"नए ग्राहक","Existing Customer Count":"मौजूदा ग्राहक गणना","Existing Customer Sales":"मौजूदा ग्राहक बिक्री","New Customer Count":"नए ग्राहक गणना","New Customer Sales":"नए ग्राहक बिक्री","Customers Summary Data":"ग्राहक संक्षेप डेटा","Customer Name":"ग्राहक का नाम","Mobile No":"मोबाइल नंबर","Vehicle No":"वाहन नंबर","Top Customers Summary Data":"शीर्ष ग्राहक संक्षेप डेटा","Distance Covered":"प्रवेशित दूरी",Hello:lt,"Driving Time":"ड्राइविंग समय","Idle Time":"निरक्रिय समय","Average Speed":"औसत गति","Tanker Fuel Level":"टैंकर ईंधन स्तर","Jobs Completed":"काम पूरा किया",Metrics:ct,"My Trips":"मेरी यात्राएँ","Prev Journey":"पिछली यात्रा",Status:ut,Delivered:mt,Pending:dt,All:yt,Distance:Ct,"Tank Level":"टैंक स्तर",Duration:pt,"Travel Routes":"यात्रा मार्ग","Big Buyers":"बड़े खरीददार","Former Customers":"पूर्व ग्राहक","Former Low-Value Customers":"पूर्व कम मूल्य वाले ग्राहक","Most Valuable Customers":"सबसे मूल्यवान ग्राहक","Most Frequent Customers":"सबसे आवाजन ग्राहक","Non Follow-Up Customers":"गैर फॉलो-अप ग्राहक","Customer Profiling":"ग्राहक प्रोफ़ाइलिंग",MobileNo:Pt,VehicleNo:St,"Last Visit":"आखिरी दौरा","Total Visits":"कुल दौरे","Go to page":"पृष्ठ पर जाएं",Page:Tt,"days ago":"दिन पहले",Search:$t,"Office Wise Sales":"कार्यालय के आधार पर बिक्री",Current:ht,"All Time":"सभी समय",Bottom:ft},gt="ব্যবহারকারী",vt="অফিস",Et="বিক্রয়",Dt="ব্যয়",xt="দিন",wt="কোম্পানি প্রশাসক",Vt="পাম্প ব্যবহারকারী",bt="পাম্প প্রশাসক",Lt="কোম্পানি",Mt="ফিল্টার",At="বন্ধ করুন",Ft="ইণ্টিটি",Bt="কোম্পানি",Wt="পাম্প",kt="আজ",Ot="গতকাল",Rt="মোট",Ut="সময়কাল",Qt="পরিমাণ",_t="থেকে",It="পণ্য",jt="সারি",Yt="বিক্রি",Gt="পরিমাণ",Ht="এর",Jt="নাম",qt="মোবাইল",zt="যানবাহন",Kt="শীর্ষ",Xt="দর্শন",Zt="পেমেন্ট",es="গণনা",ts="কার্ড",ss="উপি",os="নগদ",as="নেটব্যাংকিং",ns="গ্রাহক",rs="হ্যালো",is="মেট্রিক্স",ls="স্থিতি",cs="প্রদান করা",us="মুলতুবি",ms="সব",ds="দূরত্ব",ys="সময়কাল",Cs="মোবাইল নম্বর",ps="যানবাহন নম্বর",Ps="পৃষ্ঠা",Ss="অনুসন্ধান",Ts="বর্তমান",$s="নীচে",hs={Users:gt,Office:vt,Sales:Et,Expense:Dt,days:xt,CompanyAdmin:wt,PumpUser:Vt,PumpAdmin:bt,Company:Lt,"Retail Pumps":"রিটেল পাম্প","Wholesale Pumps":"হোলসেল পাম্প","Sales Overview":"বিক্রয় ওভারভিউ","Sales-Expense":"বিক্রয়-ব্যয়","Product Volume":"প্রোডাক্ট আয়তন","Product Quantity":"প্রোডাক্ট পরিমাণ","Total Sales by Business Entity":"ব্যবসায় ইণ্টিটি অনুসারে মোট বিক্রয়","Average Sales":"গড় বিক্রয়",Date:"তারিখ",Filter:Mt,Close:At,"No office data available":"কোন অফিস তথ্য পাওয়া যায়নি","No user data available":"কোন ব্যবহারকারী তথ্য পাওয়া যায়নি","Total Sales":"মোট বিক্রয়","Total Qty":"মোট পরিমাণ","View Table":"টেবিল দেখুন","View Graph":"গ্রাফ দেখুন","Export to Excel":"এক্সেলে রপ্তানি করুন","Export to PDF":"পিডিএফে রপ্তানি করুন",Entities:Ft,Companies:Bt,Pumps:Wt,Today:kt,Yesterday:Ot,"This week":"এই সপ্তাহ","Last 7 days":"গত ৭ দিন","Last 30 days":"গত ৩০ দিন","This month":"এই মাস","Last month":"গত মাস","This year":"এই বছর","Last year":"গত বছর","Last week":"গত সপ্তাহ","Next week":"পরবর্তী সপ্তাহ","Sales-Expense Summary":"বিক্রয়-ব্যয় সারাংশ","Sales-Expense Summary Data":"বিক্রয়-ব্যয় সারাংশ ডেটা",Total:Rt,"Sub Total":"উপ মোট","Total Expenses":"মোট ব্যয়",Period:Ut,"Product Name":"পণ্যের নাম","Office Name":"অফিসের নাম",Quantity:Qt,to:_t,Product:It,"No Data Found":"কোন ডেটা পাওয়া যায়নি",Rows:jt,"Product Wise Summary Data":"পণ্য ভিত্তিক সংক্ষিপ্ত উপাদান","Total Sale":"মোট বিক্রি","Product Wise":"পণ্য অনুযায়ী",Sale:Yt,Qty:Gt,of:Ht,"Top Customers":"শীর্ষ গ্রাহকগণ",Name:Jt,Mobile:qt,Vehicle:zt,Top:Kt,Visit:Xt,"Sales (Day Wise)":"দিনভিত্তিক বিক্রয়","Sales (Month Wise)":"মাসিক বিক্রয়","Sales (Year Wise)":"বার্ষিক বিক্রয়","Payment Mode":"পেমেন্ট মোড",Payment:Zt,Count:es,Card:ts,UPI:ss,Cash:os,NetBanking:as,Customers:ns,"Customer Type":"গ্রাহক প্রকার","Total Count":"মোট গণনা","Existing Customers":"বিদ্যমান গ্রাহক","New Customers":"নতুন গ্রাহক","Existing Customer Count":"বিদ্যমান গ্রাহকের সংখ্যা","Existing Customer Sales":"বিদ্যমান গ্রাহকের বিপণি","New Customer Count":"নতুন গ্রাহকের সংখ্যা","New Customer Sales":"নতুন গ্রাহকের বিপণি","Customers Summary Data":"গ্রাহক সংক্ষিপ্ত তথ্য","Customer Name":"গ্রাহকের নাম","Mobile No":"মোবাইল নম্বর","Vehicle No":"গাড়ির নম্বর","Top Customers Summary Data":"শীর্ষ গ্রাহকের সংক্ষেপণ তথ্য","Distance Covered":"যানবাহন পার করা দূরত্ব",Hello:rs,"Driving Time":"গাড়ি চালানোর সময়","Idle Time":"শূন্য সময়","Average Speed":"গড় গতি","Tanker Fuel Level":"ট্যাঙ্কার ঈধন স্তর","Jobs Completed":"কাজ সম্পন্ন",Metrics:is,"My Trips":"আমার যাত্রা","Prev Journey":"পূর্ববর্তী যাত্রা",Status:ls,Delivered:cs,Pending:us,All:ms,Distance:ds,"Tank Level":"ট্যাঙ্ক স্তর",Duration:ys,"Travel Routes":"ভ্রমণ মার্গ","Big Buyers":"বড় ক্রেতা","Former Customers":"পূর্ববর্তী গ্রাহক","Former Low-Value Customers":"পূর্ববর্তী নিম্ন-মূল্য গ্রাহক","Most Valuable Customers":"সবচেয়ে মূল্যবান গ্রাহক","Most Frequent Customers":"সবচেয়ে সম্প্রচারিত গ্রাহক","Non Follow-Up Customers":"অনুসরণ করা হয়নি গ্রাহক","Customer Profiling":"গ্রাহক প্রোফাইলিং",MobileNo:Cs,VehicleNo:ps,"Last Visit":"শেষ দর্শন","Total Visits":"মোট দর্শন","Go to page":"পৃষ্ঠা যান",Page:Ps,"days ago":"দিন আগে",Search:Ss,"Office Wise Sales":"অফিস ভাবে বিক্রয়",Current:Ts,"All Time":"সর্বকাল",Bottom:$s},fs={en:{translation:ve},hi:{translation:Nt},bn:{translation:hs}};S.use(T).init({resources:fs,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});$.createRoot(document.getElementById("root")).render(o.jsx(h,{children:o.jsx(D,{})}));export{y as _};
