import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import css from "./StatisticsChart.module.css";
import { saveAs } from "file-saver";
import "jspdf-autotable"
import loading from '/assets/loading.gif';
import logo from "/assets/logo.png";
import { differenceInDays } from 'date-fns';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn } from "react-icons/fa6";

import MUIDataTable from "mui-datatables";
import ReactECharts from "echarts-for-react";
import { useTranslation } from "react-i18next";


const StatisticsChart = ({ selectedRange, themeMode, selectedOffice, isAdmin, alldata, isLoading }) => {
  const [chartData, setChartData] = useState([]);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const iconContainerRef = useRef(null);
  const exportOptionsRef = useRef(null);
  // const iconRef = useRef(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBarChart, setIsBarChart] = useState(true); // State to track the chart type

  const [tableData, setTableData] = useState([])
  const [tableStatus, setTableStatus] = useState(true)
  const { t } = useTranslation();



  const columns = [{ name: "requestedDate", label: t("Date") }, { name: "sales", label: `${t("Sales")}(₹)` }, { name: "expense", label: `${t("Expense")}(₹)` }];

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

    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);

    const fetchData = () => {

      const data = alldata;

      if (Array.isArray(data.graph1)) {
        const filteredData = data.graph1.map((item) => ({
          requestedDate: item.requestedDate,
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

  }, [selectedRange, selectedOffice, isAdmin, alldata]); // eslint-disable-line react-hooks/exhaustive-deps





  // const averageSales = (
  //   chartData.reduce((total, item) => total + item.sales, 0) / chartData.length
  // ).toFixed(2);
  // console.log(chartData)
  //Find the average Sales of chartData if sales>0
  const averageSales = (chartData.filter((item) => item.totalIncome > 0).reduce((total, item) => total + item.totalIncome, 0) / chartData.filter((item) => item.totalIncome > 0).length).toFixed(0);







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
      formatter: function (params) {
        var tooltip = `<b>${t("Date")}:</b> ` + params[0].name + "<br/>";
        for (var i = 0; i < params.length; i++) {
          tooltip +=
            "<b>" + params[i].seriesName + ":</b> " + params[i].value + "<br/>";
        }
        return tooltip;
      },
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
      },
    },
    legend: {
      top: window.innerWidth > 550 ? 0 : 270,

      data: [t("Sales"), t("Expense"), t("Average Sales")],
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 10 : 12,
      }
    },
    grid: {
      left: window.innerWidth <= 768 ? '7%' : '4%',
      right: "3%",
      top: "10%",
      bottom: chartData.length > 0 ? "15%" : "20%",
      containLabel: chartData.length > 0 ? true : false,
    },
    xAxis: {
      type: "category",
      name: window.innerWidth > 550 ? t("Date") : "",
      nameLocation: "middle",
      nameGap: 35,
      nameTextStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontWeight: "bold",
        fontSize: window.innerWidth <= 768 ? 14 : 16,
      },
      boundaryGap: true,
      data: chartData.map((item) => item.requestedDate),
      axisLine: {
        lineStyle: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      axisLabel: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
      },
    },
    yAxis: [
      {
        type: "value",
        name: window.innerWidth > 550 ? "" : "",
        nameLocation: "middle",
        nameGap: 42,


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
          data: chartData.map((item) => item.totalIncome),
          yAxisIndex: 0,
        },
        {
          name: t("Expense"),
          type: "bar", // Display as a bar chart if the selected range is 7 days or less
          data: chartData.map((item) => item.totalExpense),
          yAxisIndex: 0,
        },
        {
          name: t("Average Sales"),
          type: "line", // Display as a line chart if the selected range is 7 days or less
          yAxisIndex: 0,
          smooth: true,
          lineStyle: {
            color: "#FFC107",
            width: 2,
            type: "dashed",
          },
          data: chartData.map(() => averageSales)
        },
      ]
      : [
        {
          name: t("Sales"),
          type: "line", // Display as a line chart if the selected range is more than 7 days
          smooth: true,
          data: chartData.map((item) => item.totalIncome),
          yAxisIndex: 0,
        },
        {
          name: t("Expense"),
          type: "line", // Display as a line chart if the selected range is more than 7 days
          smooth: true,
          data: chartData.map((item) => item.totalExpense),
          yAxisIndex: 0,
        },
        {
          name: t("Average Sales"),
          type: "line", // Display as a line chart if the selected range is more than 7 days
          yAxisIndex: 0,
          smooth: true,
          lineStyle: {
            color: "#FFC107",
            width: 2,
            type: "dashed",
          },
          data: chartData.map(() => averageSales)
        },
      ],
  };

  const exportToExcel = async () => {
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
      extraHeaderCell.value = t("Sales-Expense Summary");
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
      const headerRow = worksheet.addRow([t("Date"), t("Sales"), t("Expense")]);
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
      filteredData.forEach((item) => {
        const row = worksheet.addRow([
          item.requestedDate, // Convert to a Date object
          Number(item.totalIncome), // Convert to a Number
          Number(item.totalExpense), // Convert to a Number
        ]);

        // Set the number format for sales and expense columns
        row.getCell(2).numFmt = "0.00"; // Sales
        row.getCell(3).numFmt = "0.00"; // Expense
      });

      // Add the total row
      const totalRow = worksheet.addRow([t("Total"), "", ""]);
      totalRow.font = {
        bold: true,
        color: { argb: "000000" }, // Black color
        size: 12,
      };

      // Calculate total values
      const totalSales = filteredData.reduce((total, item) => total + item.totalIncome, 0);
      const totalExpense = filteredData.reduce((total, item) => total + item.totalExpense, 0);

      // Set total values in the total row
      const totalSalesCell = worksheet.getCell(`B${totalRow.number}`);
      totalSalesCell.value = `₹${totalSales.toFixed(2)}`;
      totalSalesCell.alignment = { horizontal: "right" }; // Align to the right

      const totalExpenseCell = worksheet.getCell(`C${totalRow.number}`);
      totalExpenseCell.value = `₹${totalExpense.toFixed(2)}`;
      totalExpenseCell.alignment = { horizontal: "right" }; // Align to the right

      // Generate a Blob from the workbook
      workbook.xlsx.writeBuffer().then((buffer) => {
        const excelBlob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        saveAs(excelBlob, "sales-expense.xlsx");
      });
    };
    fileReader.readAsDataURL(response.data);
  };


  const exportToPDF = () => {
    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);
    import('jspdf').then(module => {
      let jsPDF = module.default
      const doc = new jsPDF();
      doc.setFontSize(12); // Set the font size

      // Add the image
      const imgData = logo; // Replace with the path or URL of your image file
      const imgWidth = 35;
      const imgHeight = 20;
      doc.addImage(imgData, "PNG", 15, 9, imgWidth, imgHeight);

      // Add Sales-Expense Summary header
      const summaryHeader = [["Sales-Expense Summary"]];
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
      const periodCell = [[`Period: ${startDate} to ${endDate}`]];
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

      // Filter out rows with zero sales and expense values
      const filteredData = chartData.filter(
        (item) => item.totalIncome !== 0 || item.totalExpense !== 0
      );

      // Convert filtered chart data to table format
      const tableData = filteredData.map((item) => [
        item.requestedDate,
        item.totalIncome.toFixed(2),
        item.totalExpense.toFixed(2),
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
          "Total",
          `${salesTotal.toFixed(2)}`,
          `${expenseTotal.toFixed(2)}`,
        ]);
      }

      // Set table headers
      const headers = ["Date", "Sales", "Expense"];
      const columnStyles = {
        1: { halign: "right" }, // Align Sales column to center
        2: { halign: "right" }, // Align Expense column to center
      };

      // Set header styles
      const headerStyles = {
        fontSize: 12,
        fontStyle: "bold",
        halign: "center",
        fillColor: "#75AAF0", // Sky blue color for Date, Expense, Sales header
        textColor: "#FFFFFF", // White color
      };

      // Add table to PDF
      doc.autoTable(headers, tableData, {
        startY: 45, // Start below the header and period
        headStyles: headerStyles,
        columnStyles: columnStyles,
      });


      // Save PDF
      doc.save("sales-expense.pdf");
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
    return `${year}-${month}-${day}`;
  };
  const handleTableClick = () => {
    setTableStatus(!tableStatus); setShowExportOptions(false) 
  }


  return (

    <div
      className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
        }`}
    >
      <div className="container-fluid" >
        <div className="d-flex w-100 g-0 align-items-center justify-content-between">
          <div className={`fw-bold fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
            }`} >{t("Sales-Expense")}</div>
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
             
                 onClick={handleTableClick }
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

export default StatisticsChart;
