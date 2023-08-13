import React, { useEffect, useState, useRef } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import css from "./StatisticsChart2.module.css";
import { saveAs } from "file-saver";

import "jspdf-autotable";
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaRegChartBar, FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";

import { useTranslation } from "react-i18next";

import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StatisticsChart2 = ({ themeMode, selectedRange, selectedOffice, isAdmin, alldata, isLoading, SelectedOfficeName,setSelectedOfficeName,selectedOfficeNameLocal,setSelectedOfficeNameLocal, setSelectedOffice, setIsAdmin, setCompanies, setWholesales, setRetails, originallist, setOfficeIdLocal, officeIdLocal, setOptionvalue }) => {
  const [chartData, setChartData] = useState([]);

  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  // const iconRef = useRef(null);


  // const [isLoading, setIsLoading] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tableStatus, setTableStatus] = useState(false)
  const [tableData, setTableData] = useState([])
  const [selectionHistory, setSelectionHistory] = useState([]);
  const [selectionHistoryOfficeId, setSelectionHistoryOfficeId] = useState([])
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const [switch1, setswitch1] = useState(true)
  const { t } = useTranslation();



  const columns = [{ name: "officeName", label: t("Office") }, { name: "sales", label: `${t("Sales")}(₹)` }];

  const options = {
    // filterType: 'checkbox',
    selectableRowsHeader: false,
    filter: false,
    download: false,
    print: false,
    viewColumns: false,
    search: false,
    responsive: 'standard',
    selectableRows: "none",
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50],
    tableBodyHeight: "228px",
    elevation: 0,
    fixedHeader: false,
    textLabels: {
      pagination: {
        rowsPerPage: t("Rows")
      }
    }
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

  const fetchData = (update) => {
    // setIsLoading(true);
    let temp = [];
    let tabletemp = [];
    if (alldata.graph3) {
      alldata.graph3.map((item) => {
        temp.push({
          "officeId": item.officeId,
          "officeName": item.officeName,
          "officeType": item.officeType,
          "sales": item.totalIncome.toFixed(2),
          "color": item.officeTypeColor
        });
        tabletemp.push({
          "officeName": item.officeName,
          "sales": item.totalIncome.toFixed(2),
        });
      })
      tabletemp.push({ "officeName": "Total", "sales": temp.reduce((sales, item) => sales + parseFloat(item.sales), 0).toFixed(2) });
      if (update === 1) {
        setCompanies(temp.filter(
          (office) => office.officeType === "Company"
        ));
        setWholesales(temp.filter(
          (office) => office.officeType === "Wholesale Pumps"
        ));
        setRetails(temp.filter(
          (office) => office.officeType === "Retail Pumps"
        ));

        setswitch1(true)
      }
     
        setChartData(temp);
        setTableData(tabletemp);
      
    }

  };

  useEffect(() => {

    if (selectedRange && selectedOffice) {
      if (switch1) {
        fetchData(0);
      }
      else {
        fetchData(1);
      }
    }
  }, [ alldata]); // eslint-disable-line react-hooks/exhaustive-deps








  const option = {
    // color: ["#66BA69"],
    title: {

      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 18 : 25,
      },
    },
    tooltip: {
      trigger: "axis",
      formatter: `{b} <br> <b>${t("Sales")}:</b> {c} `,
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
      },
    },
    yAxis: {
      type: "category",
      name: window.innerWidth > 550 ? "" : "",
      nameLocation: "middle",
      nameGap: 80,
      nameTextStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontWeight: "bold",
        fontSize: window.innerWidth <= 768 ? 14 : 16,
      },
      data: chartData.map((item) => item.officeName),
      axisLine: {
        lineStyle: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      axisLabel: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: 12,
        // Implement a custom formatter function to make the yAxis labels shorter
        formatter: (value) => {
          // Custom logic to make labels shorter, e.g., show only the first 10 characters
          return window.innerWidth <= 768 ? value.length > 10 ? value.substring(0, 10) + "..." : value : value.length > 0 ? value.substring(0, 10) + "..." : value;
        },
      },
    },
    grid: {
      left: window.innerWidth <= 768 ? 85 : 105, // Adjust the left margin to give space for the y-axis labels
      right: 50,
      bottom: 50,
      top: 15,
    },
    xAxis: {
      type: "value",
      name: window.innerWidth > 550 ? t("Sales") : "",
      nameLocation: "middle",
      nameGap: 30,
      nameTextStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontWeight: "bold",
        fontSize: window.innerWidth <= 768 ? 14 : 16,
      },


      axisLine: {
        lineStyle: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      axisLabel: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        formatter: (value) => {
          if (value >= 1000) {
            return (value / 1000) + "k";
          } else {
            return value;
          }
        },
        rotate: window.innerWidth <= 768 ? 45 : 0,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: themeMode === "dark" ? "grey" : "silver",
          type: "line",
        },
      },


    },
    series: [
      {
        type: "bar",
        barWidth: "30%",
        itemStyle:{
        
            borderRadius:[0,5,5,0]
        },
        data: chartData.map((item, index) => ({
          value: item.sales,
          name: item.officeName,
          itemStyle: {
            color: item.color,
          },
        })),
        label: {
          show: true,
          position: 'right',
          color: themeMode === "dark" ? "#ffffff" : "#000000",

        },
        emphasis: {
          focus: 'series',
        },

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
    const worksheet = workbook.addWorksheet("Total Sales by Office");

    // Add the image file
    const response = await axios.get(logo, {
      responseType: "arraybuffer",
    });

    // Convert image buffer to base64 string
    const imageBase64 = arrayBufferToBase64(response.data);


    // Add the image to the workbook
    const logoImage = workbook.addImage({
      base64: imageBase64,
      extension: "png",
    });
    worksheet.addImage(logoImage, {
      tl: { col: 0, row: 0 },
      ext: { width: 100, height: 60 },
    });

    // Add extra header - Sales-Expense Summary
    const extraHeaderCell = worksheet.getCell("A1");
    extraHeaderCell.value = `${t("Sales")} ${t("of")} ${trimName(selectedOfficeNameLocal, 10)}`;
    extraHeaderCell.font = {
      bold: true,
      color: { argb: "000000" }, // Black color
      size: 14,
    };
    extraHeaderCell.alignment = { vertical: "middle", horizontal: "center" };
    worksheet.mergeCells("A1:C1");

    // Add period - startDate to endDate
    const periodCell = worksheet.getCell("A2");
    periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
    periodCell.font = {
      bold: true,
      color: { argb: "000000" }, // Black color
      size: 12,
    };
    periodCell.alignment = { horizontal: "center" }; // Center alignment
    worksheet.mergeCells("A2:C2");

    // Set column widths
    worksheet.getColumn(1).width = 15;
    worksheet.getColumn(2).width = 50;
    worksheet.getColumn(3).width = 15;

    // Add headers
    const headerRow = worksheet.addRow([ t("#"), t("Office Name"), t("Sales")]);
    headerRow.font = { bold: true};

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

    
    // Add data rows
    chartData.forEach((item, index) => {
      const row = worksheet.addRow([index + 1, item.officeName, item.sales]);

      // Align the serial number to the left
      row.getCell(1).alignment = { horizontal: "left" };
      row.getCell(2).alignment = { horizontal: "left" };
      row.getCell(3).alignment = { horizontal: "right" };
      
    });

    // Add the total row
    const totalRow = worksheet.addRow([``,t("Total"), ""]);
    totalRow.font = {
      bold: true,
      color: { argb: "000000" }, // Black color
      size: 12,
    };

    // Calculate total value
    const totalSales = chartData.reduce((sales, item) => sales + parseFloat(item.sales), 0);

    // Set total value in the total row
    const totalSalesCell = worksheet.getCell(`C${totalRow.number}`);
    totalSalesCell.value = `₹ ${totalSales}`;
    totalSalesCell.numFmt = "0.00";
    totalSalesCell.alignment = { horizontal: "right" };


      // Generate a unique identifier
  const uniqueIdentifier = Date.now(); // You can use any unique value generation logic

  // Generate a Blob from the workbook
  workbook.xlsx.writeBuffer().then(async (buffer) => {
    const excelBlob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a FormData object to send the Blob to the server
    const formData = new FormData();
    formData.append("file", excelBlob, `${uniqueIdentifier}sales_of_${selectedOfficeNameLocal}_${startDate}_${endDate}.xlsx`);

    // Send FormData to the server using axios or fetch
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL_1}/api/uploader`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ); // Replace with your API endpoint
      if (response.status==200)
      toast.update(id, { render: "Download Starting...", type: "success", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
    else
      toast.update(id, { render: "Download Failed !", type: "error", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
      // Assuming the API returns the file URL
      const excelFileUrl = response.data.url;
      window.location.href=`${import.meta.env.VITE_API_URL_1}/static/downloads/${excelFileUrl}`

    } catch (error) {
      console.error("Error saving Excel file:", error);
    }
  })
  };


  const exportToPDF = async () => {
    const id = toast.loading("Please wait...")
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
  
    // Get the 'lang' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
  
    // Add image file
    const response = await axios.get(logo, {
      responseType: "arraybuffer",
    });
  
    const fontBytes = await axios.get(font, { responseType: 'arraybuffer' });
    const fontBase64 = arrayBufferToBase64(fontBytes.data);
  
    const fontBytes2 = await axios.get(font2, { responseType: 'arraybuffer' });
    const fontBase642 = arrayBufferToBase64(fontBytes2.data);
  
    const imageBase64 = arrayBufferToBase64(response.data);
    
    import('jspdf').then(async module => {
      let jsPDF = module.default
      const doc = new jsPDF();
  
      // Add the image
      const imgData = imageBase64;
      const imgWidth = 35;
      const imgHeight = 20;
      doc.addImage(imgData, "PNG", 15, 9, imgWidth, imgHeight);
  
      // Add font to PDF
      doc.addFileToVFS('NotoSansBengali.ttf', fontBase64);
      doc.addFont('NotoSansBengali.ttf', 'NotoSansBengali', 'normal');
      doc.setFont('NotoSansBengali');
  
      doc.addFileToVFS('NotoSansDevanagari.ttf', fontBase642);
      doc.addFont('NotoSansDevanagari.ttf', 'NotoSansDevanagari', 'normal');
      doc.setFont('NotoSansDevanagari');
  
      // Add Sales-Expense Summary header
      const summaryHeader = [[`${t("Sales")} ${t("of")} ${trimName(selectedOfficeNameLocal, 10)}`]];
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
          fontStyle: 'bold'
        },
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
        },
      });
  
      // Convert chart data to table format
      const tableData = chartData.map((item, index) => [
        index + 1,
        item.officeName,
        `₹ ${item.sales}`
      ]);
  
      // Calculate total sales
      const totalSales = chartData.reduce(
        (sales, item) => sales + parseFloat(item.sales),
        0
      );
  
      // Add total row
      tableData.push([ ``,t("Total"), `₹ ${totalSales.toFixed(2)}`]);
  
      // Set table headers
      const headers = [t("#"), t("Office Name"), t("Sales")];
      const columnStyles = {
        0: { halign: "center" }, // Align Sales column to center
        1: { halign: "center" }, // Align Sales column to center
        2: { halign: "center" }, // Align Expense column to center
      };
  
      // Set header styles
      const headerStyles = {
        fontSize: 12,
        fontStyle: "bold",
        halign: "center",
        fillColor: "#75AAF0", // Sky blue color for Office Name, Sales header
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
  
      // Generate a Blob from the PDF content
      const pdfBlob = doc.output('blob');
  
      // Create a FormData object to send the Blob to the server
      const formData = new FormData();
      formData.append("file", pdfBlob, `${uniqueIdentifier}sales_of_${selectedOfficeNameLocal}_${startDate}_${endDate}.pdf`);
  
      // Send FormData to the server using axios or fetch
      try {
        const response =await axios.post(
          `${import.meta.env.VITE_API_URL_1}/api/uploader`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        ); // Replace with your API endpoint
        if (response.status==200)
        toast.update(id, { render: "Download Starting...", type: "success", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
      else
        toast.update(id, { render: "Download Failed !", type: "error", isLoading: false,autoClose: 5000,closeOnClick: true,pauseOnFocusLoss:false });
        // Assuming the API returns the file URL
        const pdfFileUrl =await response.data.url;
        window.location.href=`${import.meta.env.VITE_API_URL_1}/static/downloads/${pdfFileUrl}`
  
      } catch (error) {
        console.error("Error saving PDF file:", error);
      }
    });
  };

  // Function to handle the graph click event...
  const handleGraphClick = (params) => {
    // Check if the click event occurred on a valid data point
    if (params && params.data && params.dataIndex >= 0 && chartData[params.dataIndex]) {
      // Get the office name and ID from the clicked data point
      const clickedOfficeId = chartData[params.dataIndex].officeId;
      const clickedOfficeType = chartData[params.dataIndex].officeType;
      const clickedOfficeName = chartData[params.dataIndex].officeName;
      if (clickedOfficeType === "Company") {
        setswitch1(false)
        // setIsLoading(true);
        // Save the current selectedOffice and isAdmin values to the history
        setSelectionHistory((prevHistory) => [...prevHistory, { selectedOffice, isAdmin,selectedOfficeNameLocal }]);
        setSelectionHistoryOfficeId((prevHistory) => [...prevHistory, officeIdLocal])
        // Update the selectedOffice state variable
        setOptionvalue({ state: true, Ovalue: clickedOfficeId})
        setSelectedOfficeName(clickedOfficeName)
        setSelectedOfficeNameLocal(clickedOfficeName)
        setSelectedOffice(clickedOfficeId);
        setIsAdmin(6);
        setOfficeIdLocal(clickedOfficeId)

        // Check if the officeName contains "Pump" (case-insensitive)
        // if (clickedOfficeType === "Retail Pumps") {
        //   setIsAdmin(0); // Set to 0 for "pumps"
        // } else if (clickedOfficeType === "Wholesale Pumps") {
        //   setIsAdmin(0); // Set to 5 or appropriate value for other offices
        // } else if (clickedOfficeType === "Company") {



        // Save the original selectedOffice and isAdmin values
        // setOriginalSelection({
        //   selectedOffice,
        //   isAdmin,
        // });

        // Fetch data for the selected office
        // fetchData();


        // Show the reset button after the graph click event is triggered
        setShowResetButton(true);
        setShowPreviousButton(true);
      }
      else{
        if(selectedOffice!==clickedOfficeId){
        setOptionvalue({ state: true, Ovalue: clickedOfficeId})
        // setSelectedOfficeName(clickedOfficeName)
        setSelectedOfficeNameLocal(clickedOfficeName)
        setSelectedOffice(clickedOfficeId);
        setIsAdmin(0);
        }
        // setShowResetButton(true);
        // setOfficeIdLocal(clickedOfficeId)
      }
    }
  };
  // Function to handle the "Previous" button click event
  const handlePrevious = () => {
    // Check if there is a history of selections
    if (selectionHistory.length > 0) {
      setswitch1(false)
      // Get the last entry from the selectionHistory array
      const lastSelection = selectionHistory.pop();
      const lastSelectionOfficeId = selectionHistoryOfficeId.pop();
      // setIsLoading(true);
      setOptionvalue({ state: true, Ovalue: lastSelectionOfficeId })
      // Update the localSelectedOffice and localIsAdmin states with the last entry values
      setSelectedOfficeName(lastSelection.selectedOfficeNameLocal)
      setSelectedOfficeNameLocal(lastSelection.selectedOfficeNameLocal)
      setSelectedOffice(lastSelection.selectedOffice);
      setOfficeIdLocal(lastSelectionOfficeId)
      setIsAdmin(lastSelection.isAdmin);

      // Update the selectionHistory state with the updated array
      setSelectionHistory([...selectionHistory]);
      setSelectionHistoryOfficeId([...selectionHistoryOfficeId]);

      // Fetch data with the original selectedOffice and isAdmin values
      // fetchData();



      // Show the "Reset" button if there is no more previous state to go back

      // Check if the "Previous" button should be hidden
      if (selectionHistory.length === 0) {
        setShowPreviousButton(false);
      }
    }
  };
  // Function to handle the "Reset" button click event
  const handleReset = () => {
    // Reset the selectedOffice and isAdmin states to their original values
    setswitch1(false)
    setSelectedOffice(originallist.officeId)
    setOptionvalue({ state: true, Ovalue: originallist.officeId })
    setIsAdmin(originallist.adminStatus)
    setOfficeIdLocal(originallist.officeId)
    setSelectedOfficeName(originallist.userOfficeName)
    setSelectedOfficeNameLocal(originallist.userOfficeName)
    // Clear the selectionHistory array
    setSelectionHistory([]);
    // Update the localSelectedOffice and localIsAdmin states with the original values

    // Fetch data with the original selectedOffice and isAdmin values
    // fetchData();

    // Hide the reset button after resetting the state
    setShowResetButton(false);

    // Hide the previous button as well since we are resetting to the original state
    setShowPreviousButton(false);
  };
  // const handleSelectionHistory=()=>{
  //   setSelectionHistory([])
  // }
  // useEffect(() => {
  //   handleSelectionHistory()
  // }, [selectedOffice])





  // useEffect(() => {
  //   function handleClick(event) {
  //     // Check if the click target or any of its parents match the iconContainer or iconRef
  //     if (
  //       (iconContainerRef.current &&
  //         iconContainerRef.current.contains(event.target)) ||
  //       (iconRef.current && iconRef.current.contains(event.target))
  //     ) {
  //       // setShowExportOptions(true);
  //     } else {
  //       setShowExportOptions(false);
  //     }
  //   }

  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

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
      <div className="container-fluid">
        <div className="d-flex w-100 g-0 align-items-start justify-content-between">
          <div className={`fw-bold fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
            }`} >{t("Sales")} {t("of")} {trimName(selectedOfficeNameLocal, 10)}</div>
          {/* Stylish "Reset" button */}
          {showResetButton ? (
            <div title="Reset" className={css.resetButtonContainer}>
              <button title="Reset" className={`btn btn-primary mx-1 ${window.innerWidth < 500 ? 'btn-sm' : ''} shadow border-2 border-white`} onClick={handleReset}>
                <FaAnglesLeft style={{ fontSize: "1rem" }} />
              </button>
            </div>

          ) : null}
          {/* "Previous" button */}
          {showPreviousButton && selectionHistory.length > 0 ? (
            <div title="Previous" className={css.resetButtonContainer}>
              <button title="Previous" className={`btn btn-primary mx-1 ${window.innerWidth < 500 ? 'btn-sm' : ''} shadow border-2 border-white`} onClick={handlePrevious}>
                <FaAngleLeft style={{ fontSize: "1rem" }} />
              </button>
            </div>

          ) : null}
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
              >{!tableStatus ?
                <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
                  <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
                  <span>{t("View Table")}</span>
                </div> :
                <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
                  <FaRegChartBar style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
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

          height: "350px",
          width: "100%",
          maxWidth: "2300px",
        }}
        onEvents={{
          click: handleGraphClick,
        }}
        className={themeMode === "dark" ? css.darkMode : css.lightMode}
      /> :
        <div className="container-fluid mt-2 table-responsive" style={{ height: "342px" }}>
          <table className={`table ${themeMode == 'dark' ? 'table-dark' : ''}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t("Office")}</th>
                <th scope="col">{t("Sales")}(₹)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={item.officeName}>
                    <th scope="row">{tableData.length-1===index?'':index + 1}</th>
                    <td>{item.officeName}</td>
                    <td>{parseFloat(item.sales).toFixed(2)}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>}
    </div>

  );
};

export default StatisticsChart2;