import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import css from "./StatisticsChart.module.css";

import "jspdf-autotable"
import loading from '/assets/loading.gif';
import logo from "/assets/logo.png";
import { differenceInDays } from 'date-fns';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'

const StatisticsChart = ({ echarts,ReactECharts,selectedRange, themeMode,showGraph, selectedOffice, isAdmin, alldata, isLoading, officeName }) => {
  const [chartData, setChartData] = useState([]);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  // const iconRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBarChart, setIsBarChart] = useState(true); // State to track the chart type

  const [tableData, setTableData] = useState([])
  const [tableStatus, setTableStatus] = useState(false)
  const { t } = useTranslation();



  


  useEffect(() => {

    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);

    const fetchData = () => {

      const data = alldata;

      if (Array.isArray(data.graph1)) {
        const filteredData = data.graph1.map((item) => ({
          requestedDate: formatDate(new Date(item.requestedDate)),
          sales: item.totalIncome,
          expense: item.totalExpense,
        }));

        let addedFilteredData = filteredData.filter((item) => item.sales !== 0 || item.expense !== 0)
        const salesTotal = filteredData.reduce((total, item) => total + item.sales, 0).toFixed(2);
        const expenseTotal = filteredData.reduce(
          (total, item) => total + item.expense,
          0
        ).toFixed(2);
        addedFilteredData.push({ "requestedDate": t("Total"), "sales": salesTotal, "expense": expenseTotal })


        setTableData(addedFilteredData)

        setChartData(data.graph1);
      } else {
        // console.log("Invalid data format:", data);
      }

    };
    if (startDate && endDate && selectedOffice) {
      fetchData();
    }

  }, [alldata]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTableStatus(!showGraph)
  
  }, [showGraph])
  



  // const averageSales = (
  //   chartData.reduce((total, item) => total + item.sales, 0) / chartData.length
  // ).toFixed(2);
  // console.log(chartData)
  //Find the average Sales of chartData if sales>0
  const averageSales = (chartData.filter((item) => item.totalIncome > 0).reduce((total, item) => total + item.totalIncome, 0) / chartData.length).toFixed(0);







  useEffect(() => {
    // Calculate the number of days between start and end dates
    if (selectedRange[0] && selectedRange[1]) {
      const startDate = new Date(selectedRange[0]);
      const endDate = new Date(selectedRange[1]);
      const days = differenceInDays(endDate, startDate) + 1; // +1 to include the end date

      // Check if the number of days is 7 or less to decide the chart type
      setIsBarChart(days <= 7);

    }
  }, [selectedRange, selectedOffice]);

  function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}



  const option = {
    color: ["#66BA69", "#E81A1A", "#FFC107"],
    title: {


      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 18 : 25,

      },
    },
    tooltip: {
      trigger: "axis",
      // formatter: function (params) {
      //   var tooltip = `<b>${t("Date")}:</b> ` + params[0].value[0] + "<br/>";
      //   for (var i = 0; i < params.length; i++) {
      //     tooltip +=
      //       "<b>" + params[i].seriesName + ":</b> " + params[i].value[1] + "<br/>";
      //   }
      //   return tooltip;
      // },
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
      },
    },
    legend: {
      top: window.innerWidth > 550 ? 270 : 270,

      data: [t("Sales"), t("Expense"), t("Average Sales")],
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 10 : 12,
      }
    },
    grid: {
      left: '4%' ,
      right: "3%",
      top: "10%",
      bottom: chartData.length > 0 ? "15%" : "20%",
      containLabel: chartData.length > 0 ? true : false,
    },
    xAxis: {
      type: "time",
      axisPointer: {
        label:  {
          formatter: function(params) {
            let oT = new Date(params.value);
            return formatDate(oT);
          },
       },},
      nameLocation: "middle",
      nameGap: 35,
      // nameTextStyle: {
      //   color: themeMode === "dark" ? "#ffffff" : "#000000",
      //   fontWeight: "bold",
      //   fontSize: window.innerWidth <= 768 ? 14 : 16,
      // },
      // boundaryGap: true,
      data: chartData.map((item) => item.requestedDate),
      axisLine: {
        lineStyle: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      axisLabel: {
        rotate:window.innerWidth<768?45:0,
        hideOverlap: true,
        formatter:'{d} {MMM}',
        color: themeMode === "dark" ? "#ffffff" : "#000000",
      },
    },
    yAxis: [
      {
        type: "value",
        name: window.innerWidth > 550 ? "" : "",
        nameLocation: "middle",
        nameGap: 42,


        // nameTextStyle: {
        //   color: themeMode === "dark" ? "#ffffff" : "#000000",
        //   fontWeight: "bold",
        //   fontSize: window.innerWidth <= 768 ? 14 : 16,
        // },
        axisLine: {
          lineStyle: {
            color: themeMode === "dark" ? "#ffffff" : "#000000",
          },
        },
        axisLabel: {
          
          color: themeMode === "dark" ? "#ffffff" : "#000000",
          formatter: (value) => {
            if (value >= 10000) {
              return (value / 1000) + "k";
            } else {
              return value;
            }
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: themeMode === "dark" ? "grey" : "silver",
            type: "dashed",
          },
        },
      },
      {
        type: "value",
        show: false,
      },
      {
        type: "value",
        show: false,
      }

    ],
    dataZoom: [
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: new Date(selectedRange[0]),
        endValue: new Date(selectedRange[1])
      },

    ],
    series: isBarChart // Conditional check for the chart type
      ? [
        {
          name: t("Sales"),
          type: "bar", // Display as a bar chart if the selected range is 7 days or less
          data: chartData.map((item) => [item.requestedDate,item.totalIncome]),
          yAxisIndex: 0,
          barWidth:'35%',
          itemStyle:{
            borderRadius:[5,5,0,0],
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: shadeColor("#66BA69",0)
              },
              {
                offset: 0,
                color: shadeColor("#66BA69",30)
              }
            ])
          }
        },
        {
          name: t("Expense"),
          type: "bar", // Display as a bar chart if the selected range is 7 days or less
          data: chartData.map((item) => [item.requestedDate,item.totalExpense]),
          yAxisIndex: 0,
          barWidth:'35%',
          itemStyle:{
            borderRadius:[5,5,0,0],
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: shadeColor("#E81A1A",0)
              },
              {
                offset: 0,
                color: shadeColor("#ff1A1A",40)
              }
            ])
          }
        },
        {
          name: t("Average Sales"),
          type: "line", // Display as a line chart if the selected range is 7 days or less
          yAxisIndex: 0,
          smooth: true,
          itemStyle:{
            color:"#FFC107"
          },
          lineStyle: {
            color: "#FFC107",
            width: 2,
            type: "dashed",
          },
          data: chartData.map((item) => [item.requestedDate,averageSales])
        },
      ]
      : [
        {
          name: t("Sales"),
          type: "line", // Display as a line chart if the selected range is more than 7 days
          smooth: true,
          symbol: 'none',
          data: chartData.map((item) => [item.requestedDate,item.totalIncome]),
          
        },
        {
          name: t("Expense"),
          type: "line", // Display as a line chart if the selected range is more than 7 days
          smooth: true,
          symbol: 'none',
          data: chartData.map((item) => [item.requestedDate,item.totalExpense]),
         
        },
        {
          name: t("Average Sales"),
          itemStyle:{
            color:"#FFC107"
          },
          type: "line", // Display as a line chart if the selected range is more than 7 days
          symbol: 'none',
          
          smooth: true,
          lineStyle: {
            color: "#FFC107",
            width: 2,
            type: "dashed",
          },
          data: chartData.map((item) => [item.requestedDate,averageSales])
        },
      ],
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const exportToExcel = async () => {
    const id = toast.loading("Please wait...")
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
    const ExcelJS = await import('exceljs');
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Graph Data");

    const response = await axios.get(logo, {
      responseType: "blob",
    });


    // Convert image file to base64 string
    const fileReader = new FileReader();
    fileReader.onload = function () {
      const imageBase64 = fileReader.result;

      // Add the image to the workbook
      const logoImage = workbook.addImage({
        base64: imageBase64,
        extension: "png",
      });
      worksheet.addImage(logoImage, {
        tl: { col: 0, row: 0 }, // Adjusted offset values for padding
        ext: { width: 100, height: 60 },
      });

      // Add extra header - Sales-Expense Summary
      const extraHeaderCell = worksheet.getCell("A1");
      extraHeaderCell.value = `${t("Sales-Expense Summary")} (${officeName})`;
      extraHeaderCell.font = {
        bold: true,
        color: { argb: "000000" }, // Black color
        size: 14,
      };
      extraHeaderCell.alignment = { vertical: "middle", horizontal: "center" };
      worksheet.mergeCells("A1:D1");

      // Add period - startDate to endDate
      const periodCell = worksheet.getCell("A2");
      periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
      periodCell.font = {
        bold: true,
        color: { argb: "000000" }, // Black color
        size: 12,
      };
      periodCell.alignment = { horizontal: "center" }; // Center alignment
      worksheet.mergeCells("A2:D2");

      // Set column widths
      worksheet.getColumn(1).width = 15;
      worksheet.getColumn(2).width = 50;
      worksheet.getColumn(3).width = 15;

      // Add headers
      const headerRow = worksheet.addRow([t("#"), t("Date"), t("Sales"), t("Expense")]);
      headerRow.font = {
        bold: true,
        color: { argb: "000000" }, // Black color
        size: 12,
        underline: true,
      };

      headerRow.eachCell((cell) => {
        cell.font = {
          bold: true,
          color: { argb: "000000" }, // Black color
          size: 12,
        };
        cell.border = {
          bottom: { style: "thin", color: { argb: "000000" } }, // Black color
        };
      });

      // Filter chartData to exclude sales or expense values with zero
      const filteredData = chartData.filter((item) => item.totalIncome !== 0 || item.totalExpense !== 0);

      // Add data rows
      filteredData.forEach((item, index) => {
        const row = worksheet.addRow([
          index + 1,
          formatDate(new Date(item.requestedDate)), // Convert to a Date object
          Number(item.totalIncome), // Convert to a Number
          Number(item.totalExpense), // Convert to a Number
        ]);

        // Set the number format for sales and expense columns
        row.getCell(2).numFmt = "0.00"; // Sales
        row.getCell(3).numFmt = "0.00"; // Expense

        // Align the serial number to the left
      row.getCell(1).alignment = { horizontal: "left" };
      row.getCell(2).alignment = { horizontal: "left" };
      row.getCell(3).alignment = { horizontal: "right" };
      row.getCell(4).alignment = { horizontal: "right" };
      });

      // Add the total row
      const totalRow = worksheet.addRow(["",t("Total"), "", ""]);
      totalRow.font = {
        bold: true,
        color: { argb: "000000" }, // Black color
        size: 12,
      };

      // Calculate total values
      const totalSales = filteredData.reduce((total, item) => total + item.totalIncome, 0);
      const totalExpense = filteredData.reduce((total, item) => total + item.totalExpense, 0);

      // Set total values in the total row
      const totalSalesCell = worksheet.getCell(`C${totalRow.number}`);
      totalSalesCell.value = `₹ ${totalSales.toFixed(2)}`;
      totalSalesCell.alignment = { horizontal: "right" }; // Align to the right

      const totalExpenseCell = worksheet.getCell(`D${totalRow.number}`);
      totalExpenseCell.value = `₹ ${totalExpense.toFixed(2)}`;
      totalExpenseCell.alignment = { horizontal: "right" }; // Align to the right


      // Generate a Blob from the workbook
      workbook.xlsx.writeBuffer().then(async (buffer) => {
        const excelBlob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        // Create a FormData object to send the Blob to the server
        const formData = new FormData();
        formData.append("file", excelBlob, `${Date.now()}sales-expense_${officeName}_${startDate}_${endDate}.xlsx`);

        // Send FormData to the server using axios or fetch
        try {
         
          //do something else
          const response = await axios.post(`${import.meta.env.VITE_API_URL_1}/api/uploader`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); // Replace with your API endpoint
          if (response.status==200)
            toast.update(id, { render: "Download Starting...", type: "success", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
          else
            toast.update(id, { render: "Download Failed !", type: "error", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
          const excelFileUrl = response.data.url; // Assuming the API returns the file URL
          window.location.href=`${import.meta.env.VITE_API_URL_1}/static/downloads/${excelFileUrl}`
        } catch (error) {
          console.error("Error saving Excel file:", error);
        }
      });
    };
    fileReader.readAsDataURL(response.data);
  };


  const exportToPDF = async () => {
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
    const id = toast.loading("Please wait...")

    // Get the 'lang' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');

    const fontBytes = await axios.get(font, { responseType: 'arraybuffer' });
    const fontBase64 = arrayBufferToBase64(fontBytes.data);

    const fontBytes2 = await axios.get(font2, { responseType: 'arraybuffer' });
    const fontBase642 = arrayBufferToBase64(fontBytes2.data);


    import('jspdf').then(async module => {
      let jsPDF = module.default
      const doc = new jsPDF();
      doc.setFontSize(12); // Set the font size

      // Add font to PDF
      doc.addFileToVFS('NotoSansBengali.ttf', fontBase64);
      doc.addFont('NotoSansBengali.ttf', 'NotoSansBengali', 'normal');
      doc.setFont('NotoSansBengali');

      doc.addFileToVFS('NotoSansDevanagari.ttf', fontBase642);
      doc.addFont('NotoSansDevanagari.ttf', 'NotoSansDevanagari', 'normal');
      doc.setFont('NotoSansDevanagari');

      // Add the image
      const imgData = logo; // Replace with the path or URL of your image file
      const imgWidth = 35;
      const imgHeight = 20;
      doc.addImage(imgData, "PNG", 15, 9, imgWidth, imgHeight);

      // Add Sales-Expense Summary header
      const summaryHeader = [[`${t("Sales-Expense Summary")} (${officeName})`]];
      doc.autoTable({
        startY: 27,
        head: summaryHeader,
        body: [],
        headStyles: {
          fontSize: 12,
          fontStyle: "bold",
          halign: "center",
          fillColor: "#3CB043", // Green color for Sales-Expense Summary header
          textColor: "#FFFFFF", // White color
        },
        margin: { top: 20, bottom: 0 }, // Move it a little down after the image
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
        }
      });

      // Add period - startDate to endDate
      const periodCell = [[`${t("Period")}: ${startDate} ${t("to")} ${endDate}`]];
      doc.autoTable({
        startY: 36,
        head: periodCell,
        body: [],
        headStyles: {
          fontSize: 12,
          fontStyle: "bold",
          halign: "center",
          fillColor: "#3CB043",
          textColor: "#FFFFFF",
        },
        margin: { top: 30 }, // Move it upwards and provide some space at the bottom
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
        }
      });

      // Filter out rows with zero sales and expense values
      const filteredData = chartData.filter(
        (item) => item.totalIncome !== 0 || item.totalExpense !== 0
      );

            // Convert filtered chart data to table format
      const tableData = filteredData.map((item, index) => [
        index + 1, // Serial number starting from 1
        formatDate(new Date(item.requestedDate)),
        `₹ ${item.totalIncome.toFixed(2)}`, // Add ₹ symbol before totalIncome
        `₹ ${item.totalExpense.toFixed(2)}`, // Add ₹ symbol before totalExpense
        
      ]);


      // Calculate totals
      const salesTotal = filteredData.reduce((total, item) => total + item.totalIncome, 0);
      const expenseTotal = filteredData.reduce(
        (total, item) => total + item.totalExpense,
        0
      );

      // Add totals row if there are non-zero values
      if (salesTotal !== 0 || expenseTotal !== 0) {
        tableData.push([
          '', // Empty cell for serial number column
          t("Total"), // Label for the total row
          `₹ ${salesTotal.toFixed(2)}`, // Add ₹ symbol before salesTotal
          `₹ ${expenseTotal.toFixed(2)}`, // Add ₹ symbol before expenseTotal
        ]);
      }

            // Add serial number header
      const headers = [t("#"), t("Date"), t("Sales"), t("Expense")];
      const columnStyles = {
        0: { halign: "center" }, // Align serial number column to center
        1: { halign: "center" }, // Align Date column to center
        2: { halign: "center" }, // Align Sales column to center
        3: { halign: "center" }, // Align Expense column to center
      };

      // Set header styles
      const headerStyles = {
        fontSize: 12,
        fontStyle: "bold",
        halign: "center",
        fillColor: "#75AAF0", // Sky blue color for Date, Expense, Sales header
        textColor: "#FFFFFF", // White color
      };

          // Define column widths
    const columnWidths = {
      0: 5, // Width for the serial number column (#)
      1: 25, // Width for the Date column
      2: 25, // Width for the Sales column
      3: 25, // Width for the Expense column
    };

      // Add table to PDF
doc.autoTable(headers, tableData, {
  startY: 45, // Start below the header and period
  headStyles: headerStyles,
  columnStyles: columnStyles,
  styles: {
    font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
  },
  columnWidth: 'wrap', // Set the default column width behavior to 'wrap'
  columnWidths: columnWidths, // Apply specific column widths
});

      // Generate a unique identifier
      const uniqueIdentifier = Date.now(); // You can use any unique value generation logic

      // Generate a Blob from the PDF
      const pdfBlob = new Blob([doc.output('blob')], {
        type: 'application/pdf',
      });

      // Create a FormData object to send the Blob to the server
      const formData = new FormData();
      formData.append('file', pdfBlob, `${uniqueIdentifier}sales-expense_${officeName}_${startDate}_${endDate}.pdf`);

      // Send FormData to the server using axios or fetch
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_1}/api/uploader`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); // Replace with your API endpoint
        if (response.status==200)
        toast.update(id, { render: "Download Starting...", type: "success", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
      else
        toast.update(id, { render: "Download Failed !", type: "error", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
        const pdfFileUrl = await response.data.url; // Assuming the API returns the file URL
        window.location.href=`${import.meta.env.VITE_API_URL_1}/static/downloads/${pdfFileUrl}`
      } catch (error) {
        console.error('Error saving PDF file:', error);
      }

    });
  };



  useEffect(() => {
    // Function to handle the click event outside the iconContainer
    const handleClickOutsideIconContainer = (event) => {
      // Check if the click event occurred outside the iconContainer and exportOptions

      if (
        iconContainerRef.current &&
        !iconContainerRef.current.contains(event.target) &&
        exportOptionsRef.current &&
        !exportOptionsRef.current.contains(event.target) &&
        event.target.tagName !== "svg" && event.target.tagName !== "path" // Check if the click occurred on an SVG element
      ) {
        setShowExportOptions(false);
      }

    };

    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutsideIconContainer);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideIconContainer);
    };
  }, []);

  const handleIconClick = () => {
    setShowExportOptions(!showExportOptions);
  };



  const formatDate = (date) => {
    if (!date) {
      return ''; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };
  const handleTableClick = () => {
    setTableStatus(!tableStatus); setShowExportOptions(false)
  }
  const trimName = (name, maxLength) => {
    if (window.innerWidth > 500) {
      return name; // For larger screens, show the full name without truncation
    } else {
      if (name.length <= maxLength) {
        return name;
      } else {
        return name.substring(0, maxLength) + '...';
      }
    }
  };

  return (

    <div
      className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
        }`}
    >
      <ToastContainer
      position="top-center"
      theme={themeMode}
      />
      <div className="container-fluid" >
        <div className="d-flex w-100 g-0 align-items-center justify-content-between">
          <div className={`fw-bold noselect fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
            }`} >{t("Sales-Expense")} {t("of")} {trimName(officeName,10)}</div>
          {/* <div className={css.exportOption}
            onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
            <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
            <span>{t("View Table")}</span>
          </div> */}

          {/* <a href="javascript:void(0)" className="btn btn-primary btn-sm" onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>Graph</a> */}
          <div title='Export Options' className="d-flex g-0" ref={iconContainerRef}><div className={`${css.iconsContainer} d-flex justify-content-center align-items-center`} >
            {/* Data grid icon */}
            <div
              className={`${css.icon} ${themeMode === "dark" ? css.darkMode : css.lightMode
                } px-2 py-1`}

              onClick={handleIconClick}
            >
              {showExportOptions ? <FaXmark style={{ fontSize: "1.1rem" }} /> : <FaListUl style={{ fontSize: "1.1rem" }} />}
            </div>

            {showExportOptions && (
              <div
                className={`${css.exportOptions} ${themeMode === "dark" ? css.darkMode : css.lightMode
                  }`}
                ref={exportOptionsRef}
              >
                {!tableStatus ?
                  <div className={css.exportOption}

                    onClick={handleTableClick}
                  >
                    <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
                    <span>{t("View Table")}</span>
                  </div> :
                  <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
                    <FaChartColumn style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
                    <span>{t("View Graph")}</span>
                  </div>}
                <div className={css.exportOption} onClick={exportToExcel}>
                  <FaFileExcel style={{ fontSize: "1.1rem", color: "green" }} />
                  <span>{t("Export to Excel")}</span>
                </div>
                <div className={css.exportOption} onClick={exportToPDF}>
                  <FaFilePdf style={{ fontSize: "1.1rem", color: "red" }} />
                  <span>{t("Export to PDF")}</span>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>




      {/* Loading spinner */}
      {isLoading && (
        <div className={css.NoDataOverlay}>
          <img src={loading} alt="Loading..." width={50} height={50} />
        </div>
      )}

      {tableData.length == 1 && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
        {t("No Data Found")}
      </div> : ''}

      {!tableStatus ? <ReactECharts
        option={option}
        style={{

          height: "300px",
          width: "100%",
          maxWidth: "2300px",
        }}
        className={themeMode === "dark" ? css.darkMode : css.lightMode}
      /> :
        <div className="container-fluid mt-2 table-responsive" style={{ height: "291px" }}>
          <table className={`table ${themeMode == 'dark' ? 'table-dark' : ''}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t("Date")}</th>
                <th scope="col">{t("Sales")}(₹)</th>
                <th scope="col">{t("Expense")}(₹)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={item.requestedDate}>
                    <th scope="row">{tableData.length-1===index?'':index + 1}</th>
                    <td>{item.requestedDate}</td>
                    <td>{parseFloat(item.sales).toFixed(2)}</td>
                    <td>{parseFloat(item.expense).toFixed(2)}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>}
    </div>

  );
};

export default StatisticsChart;
