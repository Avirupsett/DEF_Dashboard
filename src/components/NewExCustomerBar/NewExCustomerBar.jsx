import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from "axios";
import 'jspdf-autotable';
import css from './NewExCustomerBar.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn, FaAngleLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as echarts from 'echarts';
import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';





const NewExCustomerBar = ({
  themeMode,
  selectedRange,
  selectedOffice,
  isAdmin,
  alldata,
  showGraph,
  officeName,
  isLoading,
  newExData
}) => {

  const [chartData, setChartData] = useState([])
  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  const legendButtonRef = useRef(null);

  const { t } = useTranslation();


  const [showLegend, setShowLegend] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tableData, setTableData] = useState([])
  const [merge, setMerge] = useState(true)
  const [tableStatus, setTableStatus] = useState(false)
  const [alignment, setAlignment] = useState('Name');
  const [alignment2, setAlignment2] = useState('Count');
  const [chartByName, setChartByName] = useState([])
  const [chartByMobile, setChartByMobile] = useState([])
  const [chartByVehicle, setChartByVehicle] = useState([])
  const [topSelect, setTopSelect] = useState(5)
  const [chartData2, setChartData2] = useState([])
  const [filterName, setFilterName] = useState("Customers")

  const [tableData2, setTableData2] = useState([])






  useEffect(() => {

    const fetchData = async () => {
      try {


        const data = newExData;


        if (data.graph2) {


          const byName = data.graph2.byName;
          const byMobile = data.graph2.byMobile;
          const byVehicle = data.graph2.byVehicle;

          // Extract requestedDate and count data for existing and new customers by name
          const existingCustomerByName = byName.existingCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));
          const newCustomerByName = byName.newCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));

          // Extract requestedDate and count data for existing and new customers by mobile
          const existingCustomerByMobile = byMobile.existingCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));
          const newCustomerByMobile = byMobile.newCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));

          // Extract requestedDate and count data for existing and new customers by vehicle
          const existingCustomerByVehicle = byVehicle.existingCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));
          const newCustomerByVehicle = byVehicle.newCustomer.map(item => ({
            requestedDate: item.requestedDate,
            count: item.count,
            sales: item.sales
          }));


          // Set the state variables with the extracted data
          setChartByName({
            existingCustomer: existingCustomerByName,
            newCustomer: newCustomerByName,

          });

          setChartByMobile({
            existingCustomer: existingCustomerByMobile,
            newCustomer: newCustomerByMobile,

          });

          setChartByVehicle({
            existingCustomer: existingCustomerByVehicle,
            newCustomer: newCustomerByVehicle,

          });

          let dataToShow = [];

          switch (alignment) {
            case 'Name':
              dataToShow = existingCustomerByName.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': newCustomerByName[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': newCustomerByName[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            case 'Mobile':
              dataToShow = existingCustomerByMobile.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': newCustomerByMobile[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': newCustomerByMobile[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            case 'Vehicle':
              dataToShow = existingCustomerByVehicle.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': newCustomerByVehicle[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': newCustomerByVehicle[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            default:
              return;
          }

          // Calculate total values
          const totalNewCustomerCount = dataToShow.reduce((total, item) => total + item['New Customer Count'], 0);
          const totalExistingCustomerCount = dataToShow.reduce((total, item) => total + item['Existing Customer Count'], 0);
          const totalNewCustomerSales = dataToShow.reduce((total, item) => total + item['New Customer Sales'], 0);
          const totalExistingCustomerSales = dataToShow.reduce((total, item) => total + item['Existing Customer Sales'], 0);

          // Add Total row to dataToShow
          dataToShow.push({
            '#': '', // Leave the column empty for serial number
            'Date': 'Total',
            'New Customer Count': totalNewCustomerCount,
            'Existing Customer Count': totalExistingCustomerCount,
            'New Customer Sales': `₹ ${totalNewCustomerSales.toFixed(2)}`,
            'Existing Customer Sales': `₹ ${totalExistingCustomerSales.toFixed(2)}`,
          });

          setTableData(dataToShow);


        }




      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or display an error message
      }
    };

    fetchData();
  }, [newExData]);

  useEffect(() => {
    setTableStatus(!showGraph)

  }, [showGraph])

  const getBarChartData = () => {
    const existingCustomerByName = chartByName?.existingCustomer || [];
    const newCustomerByName = chartByName?.newCustomer || [];

    const existingCustomerByMobile = chartByMobile?.existingCustomer || [];
    const newCustomerByMobile = chartByMobile?.newCustomer || [];

    const existingCustomerByVehicle = chartByVehicle?.existingCustomer || [];
    const newCustomerByVehicle = chartByVehicle?.newCustomer || [];

    switch (alignment) {
      case 'Name':
        return {
          existingCustomer: existingCustomerByName,
          newCustomer: newCustomerByName,
        };
      case 'Mobile':
        return {
          existingCustomer: existingCustomerByMobile,
          newCustomer: newCustomerByMobile,
        };
      case 'Vehicle':
        return {
          existingCustomer: existingCustomerByVehicle,
          newCustomer: newCustomerByVehicle,
        };
      default:
        return {}; // Return empty data for unknown filters
    }
  };



  function shadeColor(color, percent) {

    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    R = Math.round(R)
    G = Math.round(G)
    B = Math.round(B)

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
  }




  function getTimeSpanInDays() {
    const existingCustomerData = getBarChartData().existingCustomer;
    if (!existingCustomerData || existingCustomerData.length === 0) {
      return 0; // Return 0 days if no data is available
    }

    const startDate = new Date(existingCustomerData[0].requestedDate);
    const endDate = new Date(existingCustomerData[existingCustomerData.length - 1].requestedDate);
    const timeDiff = Math.abs(endDate - startDate);
    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    return days;
  }





  const option = {
    xAxis: {
      type: 'time',
      axisLabel: {
        hideOverlap: true,
        formatter: '{d} {MMM}',
        interval: 0, // Show all ticks without skipping
        rotate: window.innerWidth < 768 ? 45 : 0,
        color: themeMode === "dark" ? "#ffffff" : "#000000",
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            let oT = new Date(params.value);
            return formatDate(oT);
          },
        },
      },

      data: getBarChartData().existingCustomer.map(item => item.requestedDate),



    },
    yAxis: alignment2 == "Count" ? [
      {
        type: 'value',
        name: '',
        axisLabel: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
        axisLine: {
          lineStyle: {
            color: themeMode === "dark" ? "#ffffff" : "#000000",
          },
        },
      },

    ] : [
      {
        type: 'value',
        name: '',
        axisLabel: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
          formatter: (value) => {
            if (value >= 1000) {
              return (value / 1000) + "k";
            } else {
              return value;
            }
          },
        },
        axisLine: {
          lineStyle: {
            color: themeMode === "dark" ? "#ffffff" : "#000000",
          },
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: window.innerWidth <= 768 ? '10%' : '4%',
      right: '5%',
      top: '10%',
      bottom: '12%',
      containLabel: true,
    },
    series: alignment2 == "Count" ? [
      {
        name: 'Existing Customer Count',
        type: getTimeSpanInDays() > 30 ? 'line' : 'bar',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: shadeColor('#8080ff', 10), // Start color
            },
            {
              offset: 0,
              color: shadeColor('#8080ff', -10), // End color
            },
          ]),
        },
        symbol: 'none',
        smooth: true,

        step: true,
        stack: 'total',
        barWidth: "40%",
        emphasis: {
          focus: 'series'
        },
        data: getBarChartData().existingCustomer.map(item => [item.requestedDate, item.count]),
        yAxisIndex: 0,
        itemStyle: {
          borderRadius: [5, 5, 5, 5],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: shadeColor('#8080ff', 10), // Start color
            },
            {
              offset: 0,
              color: shadeColor('#8080ff', -10), // End color
            },
          ]),
        },
      },
      {
        name: 'New Customer Count',
        step: true,
        type: getTimeSpanInDays() > 30 ? 'line' : 'bar',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: shadeColor('#3cb043', 10), // Start color
            },
            {
              offset: 0,
              color: shadeColor('#3cb043', -10), // End color
            },
          ]),
        },
        symbol: 'none',
        smooth: true,
        stack: 'total',
        barWidth: "40%",
        emphasis: {
          focus: 'series'
        },
        data: getBarChartData().newCustomer.map(item => [item.requestedDate, item.count]),
        yAxisIndex: 0,
        itemStyle: {
          borderRadius: [5, 5, 5, 5],
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 1,
              color: shadeColor('#3cb043', 10), // Start color
            },
            {
              offset: 0,
              color: shadeColor('#3cb043', -10), // End color
            },
          ]),
        },
      },

    ] : [
      {
        name: 'Existing Customer Sales',
        type: 'line',
        symbol: "none",
        stack: 'total2',
        data: getBarChartData().existingCustomer.map(item => [item.requestedDate, item.sales]),
        yAxisIndex: 0,
        itemStyle: {
          color: 'blue',
        }

      },
      {
        name: 'New Customer Sales',
        type: 'line',
        symbol: "none",
        stack: 'total2',
        data: getBarChartData().newCustomer.map(item => [item.requestedDate, item.sales]),
        yAxisIndex: 0,
        itemStyle: {
          color: 'green',
        }
      },
    ],
    legend: {
      // orient: "vertical",
      // backgroundColor: themeMode === "dark" ? "#111111df" : "rgb(249 249 249 / 97%)",
      // // shadowBlur: 2,
      // left: "8px",
      bottom: "0",
      // borderRadius: 7,
      // padding: 10,
      // show: showLegend,
      // shadowColor: "#ececec",
      // borderColor: "rgba(57, 50, 50, 0.7)",
      // borderWidth: 1,

      // itemGap: 10, // Adjust the itemGap to create a gap
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 1496 ? 12 : 14,
        padding: 4
      },
      formatter: function (name) {
        if (window.innerWidth<768)
        return name.split(' ').slice(0,2).join(' ');
        else
        return name;
    }
      // type: "scroll", // Set the type of scrollbar (can be 'scroll' or 'slider')
      // // You can also adjust other scrollbar properties here if needed
      // scroll: {
      //   show: true,
      //   orient: "horizontal", // Scroll orientation (can be 'vertical' or 'horizontal')
      // }
    },
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
  const formatDate = (date) => {
    if (!date) {
      return ""; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };
  const formatDate2 = (date) => {
    if (!date) {
      return ""; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const exportToExcel = async () => {
    const id = toast.loading("Please wait...")
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
    const ExcelJS = await import('exceljs');
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Data");

    // Fetch the image file (replace "logo.png" with the correct path/URL)
    fetch(logo)
      .then((response) => response.blob())
      .then(async (blob) => {
        const fileReader = new FileReader();
        fileReader.onload = async function () {
          const imageBase64 = fileReader.result;

          // Add the image to the worksheet
          const logoImage = workbook.addImage({
            base64: imageBase64,
            extension: "png",
          });

          // Set the image position and size with padding
          worksheet.addImage(logoImage, {
            tl: { col: 0, row: 0 }, // Adjusted offset values for padding
            ext: { width: 100, height: 60 },
          });

          // Add extra header - Product Wise Summary Data
          const extraHeaderCell = worksheet.getCell("A1"); // Shifted down by one row
          extraHeaderCell.value = `${t("Customers Summary Data")} (${officeName})`;
          extraHeaderCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 14,
          };
          extraHeaderCell.alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet.mergeCells("A1:F1"); // Shifted down by one row

          // Add period - startDate to endDate
          const periodCell = worksheet.getCell("A2"); // Shifted down by two rows
          periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
          periodCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };
          periodCell.alignment = { horizontal: "center" }; // Center alignment
          worksheet.mergeCells("A2:F2"); // Shifted down by two rows

          // Set column widths
          worksheet.getColumn(1).width = 10;
          worksheet.getColumn(2).width = 15;
          worksheet.getColumn(3).width = 15;
          worksheet.getColumn(4).width = 15;
          worksheet.getColumn(5).width = 15;
          worksheet.getColumn(6).width = 15;

          // Add headers
          const headerRow1 = worksheet.addRow(["", "", t("Existing Customers"), "", t("New Customers"), ""]);
          const headerRow2 = worksheet.addRow(["#", t('Date'), t("Count"), t("Sales"), t("Count"), t("Sales")]);

          // Merge cells for "Existing Customers" and "New Customers" headings
          worksheet.mergeCells('C3:D3'); // Merge cells for "Existing Customers"
          worksheet.mergeCells('E3:F3'); // Merge cells for "New Customers"

          // Apply styles and alignment to the header rows
          [headerRow1, headerRow2].forEach((row) => {
            row.eachCell((cell) => {
              cell.font = {
                bold: true,
                color: { argb: "000000" }, // Black color
                size: 12,
              };
              cell.alignment = {
                horizontal: "center",
                vertical: "middle",
              };
            });
          })
          let dataToShow = [];

          switch (alignment) {
            case 'Name':
              dataToShow = chartByName.existingCustomer.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': chartByName.newCustomer[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': chartByName.newCustomer[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            case 'Mobile':
              dataToShow = chartByMobile.existingCustomer.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': chartByMobile.newCustomer[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': chartByMobile.newCustomer[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            case 'Vehicle':
              dataToShow = chartByVehicle.existingCustomer.map((item, index) => ({
                '#': index + 1,
                'Date': item.requestedDate,
                'New Customer Count': chartByVehicle.newCustomer[index].count,
                'Existing Customer Count': item.count,
                'New Customer Sales': chartByVehicle.newCustomer[index].sales,
                'Existing Customer Sales': item.sales,
              }));
              break;
            default:
              return;
          }

          dataToShow.forEach((item, index) => {
            const row = worksheet.addRow([
              item['#'],
              item['Date'],
              item['Existing Customer Count'],
              item['Existing Customer Sales'],
              item['New Customer Count'],
              item['New Customer Sales'],
            ]);

            // Apply alignment to the cells
            row.eachCell((cell, cellNumber) => {
              if (cellNumber === 1 || cellNumber === 2) {
                cell.alignment = { horizontal: "left" };
              } else {
                cell.alignment = { horizontal: "right" };
              }
            });
          });


          // Calculate total values for New Customer Count, Existing Customer Count, New Customer Sales, and Existing Customer Sales
          const totalNewCustomerCount = dataToShow.reduce((total, item) => total + item['New Customer Count'], 0);
          const totalExistingCustomerCount = dataToShow.reduce((total, item) => total + item['Existing Customer Count'], 0);
          const totalNewCustomerSales = dataToShow.reduce((total, item) => total + item['New Customer Sales'], 0);
          const totalExistingCustomerSales = dataToShow.reduce((total, item) => total + item['Existing Customer Sales'], 0);

          // Format the total sales with a Rupee symbol
          const formattedNewTotalSales = `₹ ${totalNewCustomerSales.toFixed(2)}`;
          const formattedExTotalSales = `₹ ${totalExistingCustomerSales.toFixed(2)}`;

          // Add the total row
          const totalRow = worksheet.addRow(["", t("Total"), totalNewCustomerCount, totalExistingCustomerCount, formattedNewTotalSales, formattedExTotalSales]);
          totalRow.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };

          // Apply styles and alignment to the total row
          totalRow.eachCell((cell) => {
            if (cell.column === 2) {
              cell.value = t('Total'); // Set the "#" value
              cell.alignment = { horizontal: "left" }; // Align the serial number to the left
            } else if (cell.column === 3 || cell.column === 4) {
              cell.value = ""; // Empty value for New Customer Count and Existing Customer Count
              cell.alignment = { horizontal: "right" }; // Align the values to the right
            } else {
              cell.alignment = { horizontal: "right" }; // Align the values to the right
            }
          });

          // Generate a unique filename
          const uniqueIdentifier = Date.now();
          const fileName = `${uniqueIdentifier}Customers_Summary_by${alignment}${officeName}${startDate}_${endDate}.xlsx`;

          // Save the workbook
          workbook.xlsx.writeBuffer().then(async (buffer) => {
            // Create a FormData object to send the Blob to the server
            const formData = new FormData();
            formData.append("file", new Blob([buffer]), fileName);

            // Send FormData to the server using axios or fetch
            try {
              const response = await axios.post(`${import.meta.env.VITE_API_URL_1}/api/uploader`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); // Replace with your API endpoint
              if (response.status == 200)
                toast.update(id, { render: "Download Starting...", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
              else
                toast.update(id, { render: "Download Failed !", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
              const excelFileUrl = response.data.url; // Assuming the API returns the file URL
              window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${excelFileUrl}`

            } catch (error) {
              console.error("Error saving Excel file:", error);
            }
          });
        };

        fileReader.readAsDataURL(blob);
      });
  };



  const exportToPDF = async () => {
    const id = toast.loading("Please wait...")
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);

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

      // Add font to PDF
      doc.addFileToVFS('NotoSansBengali.ttf', fontBase64);
      doc.addFont('NotoSansBengali.ttf', 'NotoSansBengali', 'normal');
      doc.setFont('NotoSansBengali');

      doc.addFileToVFS('NotoSansDevanagari.ttf', fontBase642);
      doc.addFont('NotoSansDevanagari.ttf', 'NotoSansDevanagari', 'normal');
      doc.setFont('NotoSansDevanagari');

      // Add table headers
      const headers = [[
        '',
        '',
        { content: t('Existing Customers'), colSpan: 2, styles: { halign: 'center' } },

        { content: t('New Customers'), colSpan: 2, styles: { halign: 'center' } }
      ], [
        '#',
        t('Date'),
        t('Count'),
        t('Sales'),
        t('Count'),
        t('Sales')
      ]];
      const columnStyles = {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },

      };

      const headerStyles = {
        fontSize: 12,
        fontStyle: "bold",
        halign: "center",
      };

      // Set background colors
      const backgroundColors = {
        summaryHeader: "#3CB043", // Green color for Sales-Expense Summary header
        secondHeader: "#75AAF0", // Sky blue color for Date, Expense, Sales header
      };

      // Add the image
      const imgData = logo; // Replace with the path or URL of your image file
      const imgWidth = 35;
      const imgHeight = 20;
      doc.addImage(imgData, "PNG", 15, 12, imgWidth, imgHeight);

      // Add Sales-Expense Summary header
      const summaryHeader = [[`${t("Customers Summary Data")} (${officeName})`]];
      doc.autoTable({
        head: summaryHeader,
        body: [],
        headStyles: {
          ...headerStyles,
          fillColor: backgroundColors.summaryHeader,
          textColor: "#FFFFFF", // White color
        },
        margin: { top: 30 }, // Move it a little down
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
          fontStyle: 'bold'
        },
      });

      const periodCell = [[`${t("Period")}: ${startDate} ${t("to")} ${endDate}`]];
      doc.autoTable({
        startY: 39.5,
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
          fontStyle: 'bold'
        },
      });



      let dataToShow = [];

      switch (alignment) {
        case 'Name':
          dataToShow = chartByName.existingCustomer.map((item, index) => ({
            '#': index + 1,
            'Date': item.requestedDate,
            'New Customer Count': chartByName.newCustomer[index].count,
            'Existing Customer Count': item.count,
            'New Customer Sales': chartByName.newCustomer[index].sales,
            'Existing Customer Sales': item.sales,
          }));
          break;
        case 'Mobile':
          dataToShow = chartByMobile.existingCustomer.map((item, index) => ({
            '#': index + 1,
            'Date': item.requestedDate,
            'New Customer Count': chartByMobile.newCustomer[index].count,
            'Existing Customer Count': item.count,
            'New Customer Sales': chartByMobile.newCustomer[index].sales,
            'Existing Customer Sales': item.sales,
          }));
          break;
        case 'Vehicle':
          dataToShow = chartByVehicle.existingCustomer.map((item, index) => ({
            '#': index + 1,
            'Date': item.requestedDate,
            'New Customer Count': chartByVehicle.newCustomer[index].count,
            'Existing Customer Count': item.count,
            'New Customer Sales': chartByVehicle.newCustomer[index].sales,
            'Existing Customer Sales': item.sales,
          }));
          break;
        default:
          return;
      }



      // Set table rows
      let rows = dataToShow.map((item, index) => [
        item['#'],
        item['Date'],
        item['Existing Customer Count'],
        item['Existing Customer Sales'],
        item['New Customer Count'],
        item['New Customer Sales'],

      ]);


      // Calculate total values for New Customer Count, Existing Customer Count, New Customer Sales, and Existing Customer Sales
      const totalNewCustomerCount = dataToShow.reduce((total, item) => total + item['New Customer Count'], 0);
      const totalExistingCustomerCount = dataToShow.reduce((total, item) => total + item['Existing Customer Count'], 0);
      const totalNewCustomerSales = dataToShow.reduce((total, item) => total + item['New Customer Sales'], 0);
      const totalExistingCustomerSales = dataToShow.reduce((total, item) => total + item['Existing Customer Sales'], 0);

      // Format the total sales with a Rupee symbol
      const formattedTotalNewCustomerSales = `₹ ${totalNewCustomerSales.toFixed(2)}`;
      const formattedTotalExistingCustomerSales = `₹ ${totalExistingCustomerSales.toFixed(2)}`;

      // Add the Total row data
      const totalRow = [
        "",
        t("Total"),
        totalExistingCustomerCount,
        formattedTotalExistingCustomerSales,
        totalNewCustomerCount,
        formattedTotalNewCustomerSales,

      ];

      // Push the Total row to the 'rows' array
      rows.push(totalRow);

      // AutoTable configuration
      const tableConfig = {
        startY: doc.autoTable.previous.finalY + 1,
        head: headers,
        body: rows,
        headStyles: {
          ...headerStyles,
          fillColor: backgroundColors.secondHeader,
          textColor: "#FFFFFF", // White color
        },
        columnStyles: columnStyles,
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
          fontStyle: 'bold'
        },
      };


      // Add table to the PDF document
      doc.autoTable(tableConfig);



      // Generate a unique filename
      const uniqueIdentifier = Date.now();
      const fileName = `${uniqueIdentifier}Top_Customerss_Summary_by${alignment}${officeName}${startDate}_${endDate}.pdf`;

      // Generate the Blob from the PDF data
      const pdfBlob = doc.output('blob');

      // Create a FormData object to send the Blob to the server
      const formData = new FormData();
      formData.append("file", pdfBlob, fileName);

      // Send FormData to the server using axios or fetch
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL_1}/api/uploader`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }); // Replace with your API endpoint
        if (response.status == 200)
          toast.update(id, { render: "Download Starting...", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
        else
          toast.update(id, { render: "Download Failed !", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
        const pdfFileUrl = await response.data.url; // Assuming the API returns the file URL
        window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${pdfFileUrl}`
      } catch (error) {
        console.error("Error saving PDF file:", error);
      }
    })
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
      if (legendButtonRef.current && !legendButtonRef.current.contains(event.target)) {
        setShowLegend(false);
      }


    };

    // Add the click event listener to the document
    document.addEventListener("click", handleClickOutsideIconContainer);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutsideIconContainer);
    };
  }, []);




  const handleChangeCustomer = (event) => {
    const newAlignment = event.target.value;
    setAlignment(newAlignment);

    let dataToShow = [];

    switch (newAlignment) {
      case 'Name':
        dataToShow = chartByName.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByName.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByName.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      case 'Mobile':
        dataToShow = chartByMobile.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByMobile.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByMobile.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      case 'Vehicle':
        dataToShow = chartByVehicle.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByVehicle.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByVehicle.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      default:
        return;
    }

    // Calculate total values
    const totalNewCustomerCount = dataToShow.reduce((total, item) => total + item['New Customer Count'], 0);
    const totalExistingCustomerCount = dataToShow.reduce((total, item) => total + item['Existing Customer Count'], 0);
    const totalNewCustomerSales = dataToShow.reduce((total, item) => total + item['New Customer Sales'], 0);
    const totalExistingCustomerSales = dataToShow.reduce((total, item) => total + item['Existing Customer Sales'], 0);

    // Add Total row to dataToShow
    dataToShow.push({
      '#': '', // Leave the column empty for serial number
      'Date': 'Total',
      'New Customer Count': totalNewCustomerCount,
      'Existing Customer Count': totalExistingCustomerCount,
      'New Customer Sales': `₹ ${totalNewCustomerSales.toFixed(2)}`,
      'Existing Customer Sales': `₹ ${totalExistingCustomerSales.toFixed(2)}`,
    });

    setTableData(dataToShow);

  };








  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  })


  const toggleLegend = () => {
    setMerge(false)
    setShowLegend(!showLegend);
    setShowExportOptions(false);
    setTableStatus(false)
  }; // Toggle the state for showLegend
  // Toggle the state for showScrollbar

  const handleIconClick = () => {
    setShowLegend(false)
    setShowExportOptions(!showExportOptions);
  };

  const handleViewGraph = () => {
    setShowExportOptions(false); // Hide the export options
    setTableStatus(!tableStatus);
  };

  const handleViewTable = () => {
    let dataToShow = [];

    switch (alignment) {
      case 'Name':
        dataToShow = chartByName.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByName.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByName.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      case 'Mobile':
        dataToShow = chartByMobile.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByMobile.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByMobile.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      case 'Vehicle':
        dataToShow = chartByVehicle.existingCustomer.map((item, index) => ({
          '#': index + 1,
          'Date': item.requestedDate,
          'New Customer Count': chartByVehicle.newCustomer[index].count,
          'Existing Customer Count': item.count,
          'New Customer Sales': chartByVehicle.newCustomer[index].sales,
          'Existing Customer Sales': item.sales,
        }));
        break;
      default:
        return;
    }

    // Calculate total values
    const totalNewCustomerCount = dataToShow.reduce((total, item) => total + item['New Customer Count'], 0);
    const totalExistingCustomerCount = dataToShow.reduce((total, item) => total + item['Existing Customer Count'], 0);
    const totalNewCustomerSales = dataToShow.reduce((total, item) => total + item['New Customer Sales'], 0);
    const totalExistingCustomerSales = dataToShow.reduce((total, item) => total + item['Existing Customer Sales'], 0);

    // Add Total row to dataToShow
    dataToShow.push({
      '#': '', // Leave the column empty for serial number
      'Date': 'Total',
      'New Customer Count': totalNewCustomerCount,
      'Existing Customer Count': totalExistingCustomerCount,
      'New Customer Sales': `₹ ${totalNewCustomerSales.toFixed(2)}`,
      'Existing Customer Sales': `₹ ${totalExistingCustomerSales.toFixed(2)}`,
    });

    setTableData(dataToShow);
    setTableStatus(true);
    setShowExportOptions(false);
  };





  return (
    <>
      <div ref={legendButtonRef}
        className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
          }`}
      ><ToastContainer
          position="top-center"
          theme={themeMode}
        />

        <div className="container-fluid" >
          <div className="d-flex w-100 g-0 align-items-center justify-content-between">

            {/* <button
              className={css.legendButton}
              onClick={toggleLegend} // Call the toggleLegend function when the button is clicked

            >
              <img
                src={import.meta.env.VITE_LEGEND_LOGO}
                alt="Code Block Icon"
                className={css.codeBlockIcon}
                title="Legends"
                style={{ filter: showLegend ? "opacity(0.4)" : "opacity(1)", transition: "all .25s ease-in-out" }}
              />{" "}
            </button> */}



            <div className='d-flex align-items-center'>


              <ThemeProvider theme={theme}>


                <FormControl sx={{ mx: 1, mt: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-simple-select-helper-label" style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}>{t(filterName)}</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    displayEmpty
                    value={alignment}
                    onChange={handleChangeCustomer}
                    style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}
                    // onChange={handleChange}
                    label={t(filterName)}
                  >
                    <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Name"}>{t("Name")}</MenuItem>
                    <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Mobile"}>{t("Mobile")}</MenuItem>
                    <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Vehicle"}>{t("Vehicle")}</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ mx: 1, mt: 1, minWidth: 90 }} size="small">
                  <InputLabel id="demo-simple-select-helper-label" style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}>{t("Filter")}</InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    displayEmpty
                    value={alignment2}
                    onChange={(e) => setAlignment2(e.target.value)}
                    style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}
                    // onChange={handleChange}
                    label={t("Filter")}
                  >
                    <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Count"}>{t("Count")}</MenuItem>
                    <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Sales"}>{t("Sales")}</MenuItem>
                  </Select>
                </FormControl>

              </ThemeProvider>
            </div>



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
                    <div className={css.exportOption} onClick={handleViewTable}>
                      <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
                      <span>{t("View Table")}</span>
                    </div> :
                    <div className={css.exportOption} onClick={handleViewGraph}>
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
        {isLoading && (
          <div className={css.loadingOverlay}>
            <img src={loading} alt="Loading..." width={50} height={50} />
          </div>
        )}

        {(tableData.length > 0 && tableData[tableData.length - 1]['Existing Customer Count'] == 0 && tableData[tableData.length - 1]['New Customer Count'] == 0) && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
          {t("No Data Found")}
        </div> : null}

        {!tableStatus ? (
          <ReactECharts
            key={chartData.length}
            option={option}
            notMerge={merge}
            style={{
              height: "297px",
              width: "100%",
              maxWidth: "2300px",
            }}
            className={css.piechart}

          />
        ) : (
          <div className="container-fluid mt-2 table-responsive" style={{ height: "290px" }}>
            <table className={`table ${themeMode == 'dark' ? 'table-dark' : ''}`}>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                  <th colSpan="2" >{t("Existing Customers")}</th>
                  <th colSpan="2" >{t("New Customers")}</th>
                </tr>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{t('Date')}</th>
                  <th scope="col">{t("Count")}</th>
                  <th scope="col">{t("Sales")}</th>
                  <th scope="col">{t("Count")}</th>
                  <th scope="col">{t("Sales")}</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item['#']}</th>
                    <td>{item['Date']}</td>
                    <td>{item['Existing Customer Count']}</td>
                    <td>{item['Existing Customer Sales']}</td>
                    <td>{item['New Customer Count']}</td>
                    <td>{item['New Customer Sales']}</td>
                  </tr>
                ))}

                {/* Render the Total row */}
                {tableData.length > 0 && tableData[tableData.length - 1]['Date'] === 'Total' && (
                  <tr>
                    <th scope="row">{[tableData.length - 1]['#']}</th>
                    <td>{[tableData.length - 1]['Date']}</td>
                    <td>{[tableData.length - 1]['Existing Customer Count']}</td>
                    <td>{[tableData.length - 1]['Existing Customer Sales']}</td>
                    <td>{[tableData.length - 1]['New Customer Count']}</td>
                    <td>{[tableData.length - 1]['New Customer Sales']}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>



        )}


      </div>
    </>
  );
};

export default NewExCustomerBar;