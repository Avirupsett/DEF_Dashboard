import React, { useEffect, useState, useRef } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import css from "./StatisticsChart2.module.css";
import { saveAs } from "file-saver";

import "jspdf-autotable";
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable,FaRegChartBar, FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";

import MUIDataTable from "mui-datatables";
import { useTranslation } from "react-i18next";

import loading from '/assets/loading.gif';

const StatisticsChart2 = ({ themeMode, selectedRange, selectedOffice, isAdmin, SelectedOfficeName,setSelectedOffice,setIsAdmin }) => {
  const [chartData, setChartData] = useState([]);

  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  // const iconRef = useRef(null);


  const [isLoading, setIsLoading] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tableStatus, setTableStatus] = useState(false)
  const [tableData, setTableData] = useState([])
  const [selectionHistory, setSelectionHistory] = useState([]);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showResetButton, setShowResetButton] = useState(false);
  const [originalSelection, setOriginalSelection] = useState({
    selectedOffice,
    isAdmin,
  });
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

  const fetchData = () => {
    setIsLoading(true);
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);



    axios
      .get(`http://115.124.120.251:5064/api/v1/dashboard/total_sales/${startDate}/${endDate}/${selectedOffice}/${isAdmin}`)
      .then((response) => {
        const { data } = response;
        if (data['graph1']) {
          let temp = [];
          let tabletemp = [];
          for (let i = 0; i < data['graph1'].length; i++) {
            temp.push({
              "officeId": data['graph1'][i].officeId,
              "officeName": data['graph1'][i].officeName,
              "officeType": data['graph1'][i].officeType,
              "sales": data['graph1'][i].totalIncome.toFixed(0),
              "color": data['graph1'][i].officeTypeColor
            });
            tabletemp.push({
              "officeName": data['graph1'][i].officeName,
              "sales": data['graph1'][i].totalIncome.toFixed(2),
            });
          }
          tabletemp.push({ "officeName": "Total", "sales": temp.reduce((sales, item) => sales + parseFloat(item.sales), 0).toFixed(2) });

          setTableData(tabletemp);
          setChartData(temp);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {

    if (selectedRange && selectedOffice) {
      fetchData();
    }
  }, [selectedRange, selectedOffice, isAdmin]); // eslint-disable-line react-hooks/exhaustive-deps








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
      left: window.innerWidth <= 768 ? 85 : 100, // Adjust the left margin to give space for the y-axis labels
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
        data: chartData.map((item, index) => ({
          value: item.sales,
          name: item.officeName,
          itemStyle: {
            color: item.color,
          },
        })),
        label: {
          show: chartData.length <= 5 ? true : false,
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
      ext: { width: 40, height: 40 },
    });

    // Add extra header - Sales-Expense Summary
    const extraHeaderCell = worksheet.getCell("A1");
    extraHeaderCell.value = t("Total Sales by Business Entity");
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
    worksheet.getColumn(1).width = 50;
    worksheet.getColumn(2).width = 15;
    worksheet.getColumn(3).width = 15;

    // Add headers
    const headerRow = worksheet.addRow([t("Office Name"), t("Sales")]);
    headerRow.font = { bold: true };

    // Add data rows
    chartData.forEach((item) => {
      worksheet.addRow([item.officeName, item.sales]);
    });

    // Add the total row
    const totalRow = worksheet.addRow([t("Total"), ""]);
    totalRow.font = {
      bold: true,
      color: { argb: "000000" }, // Black color
      size: 12,
    };

    // Calculate total value
    const totalSales = chartData.reduce((sales, item) => sales + parseFloat(item.sales), 0);

    // Set total value in the total row
    const totalSalesCell = worksheet.getCell(`B${totalRow.number}`);
    totalSalesCell.value = `₹${totalSales}`;
    totalSalesCell.numFmt = "0.00";
    totalSalesCell.alignment = { horizontal: "right" };


    // Generate a Blob from the workbook
    workbook.xlsx.writeBuffer().then((buffer) => {
      const excelBlob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(excelBlob, "total_sales_by_office.xlsx");
    });
  };


  const exportToPDF = async () => {
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
    // Add image file
    const response = await axios.get(logo, {
      responseType: "arraybuffer",
    });
    const imageBase64 = arrayBufferToBase64(response.data);
    import('jspdf').then(module => {
      let jsPDF = module.default
      const doc = new jsPDF();

      // Add the image
      const imgData = imageBase64;
      const imgWidth = 35;
      const imgHeight = 20;
      doc.addImage(imgData, "PNG", 15, 9, imgWidth, imgHeight);

      // Add Sales-Expense Summary header
      const summaryHeader = [[t("Total Sales by Business Entity")]];
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
      });

      // Add period - startDate to endDate
      const periodCell = [[`${t(Period)}: ${startDate} ${t(to)} ${endDate}`]];
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
      });

      // Convert chart data to table format
      const tableData = chartData.map((item) => [
        item.officeName,
        parseFloat(item.sales.toFixed(2)),
      ]);

      // Calculate total sales
      const totalSales = chartData.reduce(
        (sales, item) => sales + parseFloat(item.sales),
        0
      );

      // Add total row
      tableData.push([t("Total"), `${totalSales.toFixed(2)}`]);

      // Set table headers
      const headers = [t("Office Name"), t("Sales")];
      const columnStyles = {
        1: { halign: "right" }, // Align Sales column to center
        2: { halign: "right" }, // Align Expense column to center
      };

      // Set header styles
      const headerStyles = {
        fontSize: 12,
        fontStyle: "bold",
        halign: "center",
        fillColor: "#75AAF0", // Sky blue color for Office Name, Sales header
        textColor: "#FFFFFF", // White color
      };

      // Add table to PDF
      doc.autoTable(headers, tableData, {
        startY: 45, // Start below the header and period
        headStyles: headerStyles,
        columnStyles: columnStyles,
      });

      // Save PDF
      doc.save("total_sales_by_office.pdf");
    })
  };

  // Function to handle the graph click event...
  const handleGraphClick = (params) => {
    // Check if the click event occurred on a valid data point
    if (params && params.data && params.dataIndex >= 0 && chartData[params.dataIndex]) {
      // Get the office name and ID from the clicked data point
      const clickedOfficeId = chartData[params.dataIndex].officeId;
      const clickedOfficeType = chartData[params.dataIndex].officeType;

      // Save the current selectedOffice and isAdmin values to the history
      setSelectionHistory((prevHistory) => [...prevHistory, { selectedOffice, isAdmin }]);

      // Update the selectedOffice state variable
      setSelectedOffice(clickedOfficeId);

      // Check if the officeName contains "Pump" (case-insensitive)
      if (clickedOfficeType === "Retail Pumps") {
        setIsAdmin(0); // Set to 0 for "pumps"
      } else if (clickedOfficeType === "Wholesale Pumps") {
        setIsAdmin(0); // Set to 5 or appropriate value for other offices
      } else if (clickedOfficeType === "Company") {
        setIsAdmin(5);
      }

      // Save the original selectedOffice and isAdmin values
      setOriginalSelection({
        selectedOffice,
        isAdmin,
      });

      // Fetch data for the selected office
      fetchData();


      // Show the reset button after the graph click event is triggered
      setShowResetButton(true);
      setShowPreviousButton(true);
    }
  };
  // Function to handle the "Previous" button click event
  const handlePrevious = () => {
    // Check if there is a history of selections
    if (selectionHistory.length > 0) {
      // Get the last entry from the selectionHistory array
      const lastSelection = selectionHistory.pop();

      // Update the localSelectedOffice and localIsAdmin states with the last entry values
      setSelectedOffice(lastSelection.selectedOffice);
      setIsAdmin(lastSelection.isAdmin);

      // Update the selectionHistory state with the updated array
      setSelectionHistory([...selectionHistory]);

      // Fetch data with the original selectedOffice and isAdmin values
      fetchData();



      // Show the "Reset" button if there is no more previous state to go back
      if (selectionHistory.length === 0) {
        setShowResetButton(false);
      }

      // Check if the "Previous" button should be hidden
      if (selectionHistory.length === 0) {
        setShowPreviousButton(false);
      }
    }
  };
  // Function to handle the "Reset" button click event
  const handleReset = () => {
    // Reset the selectedOffice and isAdmin states to their original values
    setSelectedOffice(originalSelection.selectedOffice);
    setIsAdmin(originalSelection.isAdmin);

    // Clear the selectionHistory array
    setSelectionHistory([]);

    // Fetch data with the original selectedOffice and isAdmin values
    fetchData();

    // Hide the reset button after resetting the state
    setShowResetButton(false);

    // Hide the previous button as well since we are resetting to the original state
    setShowPreviousButton(false);
  };




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
    return `${year}-${month}-${day}`;
  };



  return (
    <div
      className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
        }`}
    >
      <div className="container-fluid">
        <div className="d-flex w-100 g-0 align-items-start justify-content-between">
          <div className={`fw-bold fs-5 ${themeMode === "dark" ? css.darkMode : css.lightMode
            }`} >{t("Total Sales by Business Entity")}</div>
          {/* Stylish "Reset" button */}
          {showResetButton && selectedOffice !== originalSelection.selectedOffice && isAdmin !== originalSelection.isAdmin ? (
            <div className={css.resetButtonContainer}>
              <button className={css.resetButton} onClick={handleReset}>
                <FaAnglesLeft style={{ fontSize: "1rem" }} />
              </button>
            </div>

          ) : null}
          {/* "Previous" button */}
          {showPreviousButton && selectionHistory.length > 0 ? (
            <div className={css.resetButtonContainer}>
              <button className={css.resetButton} onClick={handlePrevious}>
                <FaAngleLeft style={{ fontSize: "1rem" }} />
              </button>
            </div>

          ) : null}
          <div className="d-flex g-0" ref={iconContainerRef}><div className={`${css.iconsContainer} d-flex justify-content-center align-items-center`} >
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

          height: "300px",
          width: "100%",
          maxWidth: "2300px",
        }}
        onEvents={{
          click: handleGraphClick,
        }}
        className={themeMode === "dark" ? css.darkMode : css.lightMode}
      /> :
        <div className="container-fluid mt-2">
          <MUIDataTable
            // title={"Employee List"}
            data={tableData}
            columns={columns}
            options={options}
          />
        </div>}
    </div>

  );
};

export default StatisticsChart2;