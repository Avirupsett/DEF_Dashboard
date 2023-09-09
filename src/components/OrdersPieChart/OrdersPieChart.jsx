import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";
import 'jspdf-autotable';
import css from './OrdersPieChart.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartPie } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, ToggleButton, ToggleButtonGroup, createTheme } from '@mui/material';


const OrdersPieChart = ({
  echarts,ReactECharts,
  themeMode,
  selectedRange,
  selectedOffice,
  isAdmin,
  showGraph,
  alldata,
  isLoading,
  officeName
}) => {
  const [sellData, setSellData] = useState([]);
  const [chartData2, setChartData2] = useState([])
  const [chartData, setChartData] = useState([])
  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  const legendButtonRef = useRef(null);
  const { t } = useTranslation();


  const [showLegend, setShowLegend] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tableData, setTableData] = useState([])
  const [tableStatus, setTableStatus] = useState(false)
  const [alignment, setAlignment] = useState('Sale');


  function calculateTotalSales(dataArray) {
    const flatProducts = dataArray.flatMap((item) => item.lstproduct);

    const totalSalesByProduct = flatProducts.reduce((result, product) => {
      const { productName, totalSales, qty, color, unitShortName } = product;

      if (totalSales !== 0) {
        if (result[productName]) {
          result[productName].totalSales += totalSales;
          result[productName].qty += qty;
        } else {
          result[productName] = {
            totalSales,
            qty,
            color, unitShortName
          };
        }
      }

      return result;
    }, {});

    return totalSalesByProduct;
  }

  useEffect(() => {
    setTableStatus(!showGraph)
  
  }, [showGraph])
  
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



  // useEffect(() => {
  //   // Function to update the window width state on window resize
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Add a window resize event listener
  //   window.addEventListener("resize", handleWindowResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);

  useEffect(() => {
    // setIsLoading(true)
    // const startDate = formatDate(selectedRange[0]);
    // const endDate = formatDate(selectedRange[1]);
      if (alldata.graph2) {
        const calculateTotal = calculateTotalSales(alldata.graph2)

        const result = Object.entries(calculateTotal).map(([pipeline, { totalSales, color }]) => ({
          value: totalSales.toFixed(2),
          name: pipeline,
          itemStyle: {
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: shadeColor(color,30)
              },
              {
                offset: 0,
                color: shadeColor(color,70)
              }
            ]),
          },
        }));

        setChartData(result);

        const result2 = Object.entries(calculateTotal).map(([pipeline, { qty, color }]) => ({
          value: qty.toFixed(2),
          name: pipeline,
          itemStyle: {
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: shadeColor(color,30)
              },
              {
                offset: 0,
                color: shadeColor(color,70)
              }
            ]),
          },
        }));

        setChartData2(result2);
        const result_export = Object.entries(calculateTotal).map(([pipeline, { totalSales, color, qty, unitShortName }]) => ({
          "productName": pipeline, "totalSale": totalSales.toFixed(2), "color": color, "totalQty":qty.toFixed(2), "unit": unitShortName
        }));
        setSellData(result_export)

        const result_table = Object.entries(calculateTotal).map(([pipeline, { totalSales, qty, unitShortName }]) => ({
          "ProductName": pipeline, "Sales": totalSales.toFixed(1), "Quantity": `${qty.toFixed(1)} ${unitShortName}`,
        }));
        const salesTotal = result_export.reduce((total, item) => total + parseFloat(item.totalSale), 0).toFixed(2);
        const qtyTotal = result_export.reduce(
          (total, item) => total + parseFloat(item.totalQty),
          0
        );
        result_table.push({ "ProductName": t("Total"), "Sales": `${salesTotal}`, "Quantity": `${qtyTotal}` })
        setTableData(result_table)


      }


  }, [alldata]);

  const toggleLegend = () => {
    if (sellData.length > 0) {
      setShowLegend(!showLegend);
      setShowExportOptions(false);
      setTableStatus(false)
    }; // Toggle the state for showLegend
    // Toggle the state for showScrollbar
  };

  // const colors = [
  //   "#009AEE",
  //   "#FFD700",
  //   "#FF7F50",
  //   "#ADFF2F",
  //   "#40E0D0",
  //   "#FF00FF",
  //   "#FF1493",
  //   "#228B22",
  //   "#FF4500",
  //   "#4682B4",
  //   // Add more colors as needed
  // ];



  const option = {

    tooltip: {
      trigger: "item",
      formatter: alignment === 'Sale' ? `<b>{b}</b><br><b>${t("Total Sales")}:</b> {c}` : `<b>{b}</b><br><b>${t("Total Qty")}:</b> {c}`,
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
      },
    },
    legend: {
      orient: "vertical",
      backgroundColor: themeMode === "dark" ? "#111111df" : "rgb(249 249 249 / 97%)",
      // shadowBlur: 2,
      left: "8px",
      top: "0",
      borderRadius: 7,
      padding: 10,
      show: showLegend,
      shadowColor: "#ececec",
      borderColor: "rgba(57, 50, 50, 0.7)",
      borderWidth: 1,

      itemGap: 10, // Adjust the itemGap to create a gap
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 1496 ? 12 : 14,
        padding: 4
      },

      type: "scroll", // Set the type of scrollbar (can be 'scroll' or 'slider')
      // You can also adjust other scrollbar properties here if needed
      scroll: {
        show: true,
        orient: "horizontal", // Scroll orientation (can be 'vertical' or 'horizontal')
      },
    },

    graphic: {
      type: "text",
      left: "center",
      top: "2%",
      style: {
        // text: "Product Volume",
        fill: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 1496 ? 16 : 18,
        fontWeight: "bold",

      },
    },
    series: [
      {
        name: "Product Sales",
        type: "pie",
        radius: alignment === 'Sale' ? ["40%", "65%"] : ["35%", "70%"],
        roseType: alignment === 'Sale' ? "" : "radius",
        center: ["50%", "50%"],
        selectedMode: "single",
        avoidLabelOverlap: true,
        label: {
          show: chartData.length <= 10 ? true : false,
          color: themeMode === "dark" ? "#ffffff" : "#111111"
          // position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 9,
            fontWeight: "bold",
          }
        },
        data: alignment === 'Sale' ? (chartData.length > 0 ? chartData : []) : (chartData2.length > 0 ? chartData2 : []),


        // labelLine: {
        //   length: 30,
        //   length2: 10,
        // },
        itemStyle: {
          borderWidth: 2, // Set the border width
          borderColor: '#ffffff00',
          borderRadius: 4 // Set the border color
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
  const formatDate = (date) => {
    if (!date) {
      return ""; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
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
          extraHeaderCell.value = `${t("Product Wise Summary Data")} (${officeName})`;
          extraHeaderCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 14,
          };
          extraHeaderCell.alignment = {
            vertical: "middle",
            horizontal: "center",
          };
          worksheet.mergeCells("A1:D1"); // Shifted down by one row

          // Add period - startDate to endDate
          const periodCell = worksheet.getCell("A2"); // Shifted down by two rows
          periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
          periodCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };
          periodCell.alignment = { horizontal: "center" }; // Center alignment
          worksheet.mergeCells("A2:D2"); // Shifted down by two rows

          // Set column widths
          worksheet.getColumn(1).width = 15;
          worksheet.getColumn(2).width = 50;
          worksheet.getColumn(3).width = 15;
          worksheet.getColumn(4).width = 15;

          // Add headers
          const headerRow = worksheet.addRow([t("#"), t("Product Name"), t("Quantity"), t("Total Sales")]);

          headerRow.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };

          // Apply underline and border style to each cell
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
          sellData.forEach((item, index) => {
            const row = worksheet.addRow([
              index + 1,
              item.productName,
              `${item.totalQty} ${item.unit}`,
              item.totalSale,
            ]); // Add "₹" symbol before the totalSale value

            // Align the serial number to the left
            row.getCell(1).alignment = { horizontal: "left" };
            row.getCell(2).alignment = { horizontal: "left" };
            row.getCell(3).alignment = { horizontal: "right" };
            row.getCell(4).alignment = { horizontal: "right" };
          });


          const totalRow = worksheet.addRow(["", t("Total"), "", ""]);
          totalRow.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };

          // Calculate total values
          const totalSales = sellData.reduce((total, item) => total + parseFloat(item.totalSale), 0);
          // const totalQty = sellData.reduce((total, item) => total + item.totalQty, 0);

          // Set total values in the total row
          // const totalSalesCell = worksheet.getCell(`B${totalRow.number}`);
          // totalSalesCell.value = `${totalQty.toFixed(2)}`;
          // totalSalesCell.alignment = { horizontal: "right" }; // Align to the right

          const totalExpenseCell = worksheet.getCell(`D${totalRow.number}`);
          totalExpenseCell.value = `₹ ${totalSales.toFixed(2)}`;
          totalExpenseCell.alignment = { horizontal: "right" };

          // Generate a unique filename
          const uniqueIdentifier = Date.now();
          const fileName = `${uniqueIdentifier}product_wise_summary_${officeName}_${startDate}_${endDate}.xlsx`;

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

      // Set table headers
      const headers = [[t("#"), t("Product Name"), t("Quantity"), t("Total Sale")]];
      const columnStyles = {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },

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
      const summaryHeader = [[`${t("Product Wise Summary Data")} (${officeName})`]];
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

      // Set table rows
      let rows = sellData.map((item, index) => [
        index + 1,
        item.productName,
        `${item.totalQty} ${item.unit}`,
        `₹ ${item.totalSale}`,
      ]);


      // Calculate total values
      const totalSales = sellData.reduce((total, item) => total + parseFloat(item.totalSale), 0);
      // const totalQty = sellData.reduce((total, item) => total + item.totalQty, 0);

      rows.push([
        ``,
        t("Total"),
        ``,
        `₹ ${totalSales.toFixed(2)}`,
      ]);

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
      const fileName = `${uniqueIdentifier}product_wise_summary_${officeName}_${startDate}_${endDate}.pdf`;

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

  const handleIconClick = () => {
    setShowLegend(false)
    setShowExportOptions(!showExportOptions);
  };


  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  })
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

  return (
    <>
      <div  ref={legendButtonRef}
        className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
          }`}
      ><ToastContainer
          position="top-center"
          theme={themeMode}
        />

        <div className="container-fluid" >
          <div className="d-flex w-100 g-0 align-items-center justify-content-between">
            <button
              className={css.legendButton}
              onClick={toggleLegend} // Call the toggleLegend function when the button is clicked
             
            >
              <img
                src={import.meta.env.VITE_LEGEND_LOGO}
                alt="Code Block Icon"
                className={css.codeBlockIcon}
                title="Legends"
                style={{ filter: showLegend || sellData.length === 0 ? "opacity(0.4)" : "opacity(1)", transition: "all .25s ease-in-out" }}
              />{" "}

            </button>
            <div className='d-flex align-items-center'>
              <div className={`fw-bold noselect me-2 fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                }`}>{t("Product")}</div>
              <ThemeProvider theme={theme}>
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                  style={{ fontFamily: `"Public Sans", sans-serif !important` }}
                >
                  <ToggleButton style={{ color: alignment == 'Sale' ? '' : `var(--text-color)` }} className={`fw-bold fs-${window.innerWidth <= 1300 ? 7 : 6}`} value="Sale">{t("Sale")}</ToggleButton>
                  <ToggleButton style={{ color: alignment == 'Qty' ? '' : `var(--text-color)` }} className={`fw-bold fs-${window.innerWidth <= 1300 ? 7 : 6}`} value="Qty">{t("Qty")}</ToggleButton>
                </ToggleButtonGroup>
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
                    <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
                      <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
                      <span>{t("View Table")}</span>
                    </div> :
                    <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
                      <FaChartPie style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
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
          <div className={css.NoDataOverlay}>
            <img src={loading} alt="Loading..." width={50} height={50} />
          </div>
        )}
        {tableData.length == 1 && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
          {t("No Data Found")}
        </div> : ''}

        {!tableStatus ? <ReactECharts
          key={sellData.length}
          option={option}
          style={{
            // marginTop: window.innerWidth <= 1496 ? "-8%" : "-6%",
            height: "297px",
            width: "100%",
            maxWidth: "2300px",
          }}
          className={css.piechart}
        // className={themeMode === "dark" ? css.darkMode : css.lightMode}
        /> : <div className="container-fluid mt-2 table-responsive" style={{ height: "289px" }}>
          <table className={`table  ${themeMode == 'dark' ? 'table-dark' : ''}`}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t("Product")}</th>
                <th scope="col">{t("Quantity")}</th>
                <th scope="col">{t("Sales")}(₹)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={item.ProductName}>
                    <th scope="row">{tableData.length - 1 === index ? '' : index + 1}</th>
                    <td>{item.ProductName}</td>
                    <td>{tableData.length - 1 === index ? '' : item.Quantity}</td>
                    <td>{parseFloat(item.Sales).toFixed(2)}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>

        }


      </div>
    </>
  );
};

export default OrdersPieChart;
