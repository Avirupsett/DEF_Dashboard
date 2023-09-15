import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useTable, useSortBy, usePagination, useFilters } from 'react-table';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaSistrix, FaAnglesLeft, FaAnglesRight, FaAngleRight, FaAngleLeft, FaTable, FaChartColumn, } from 'react-icons/fa6'; // Import the AiOutlineSearch icon
import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import css from './CustomerType.module.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import logo from "/assets/logo.png";
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'


const CustomerType = ({ ReactECharts, echarts, newExData, themeMode, selectedRange, officeName, selectedOffice, isAdmin }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Big Buyers');
  const [showFullCustomerNames, setShowFullCustomerNames] = useState(false);
  const [showFullVehicleNos, setShowFullVehicleNos] = useState(false);
  const iconContainerRef = useRef(null);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const exportOptionsRef = useRef(null);
  const [expandedColumns, setExpandedColumns] = useState([]);
  const [tableStatus, setTableStatus] = useState(false)
  const [chartData, setChartData] = useState([])
  const [showGraph, setShowGraph] = useState(false); // Add this state variable
  const [showTable, setShowTable] = useState(false); // Add this state variable
  const [isBack, setIsBack] = useState(false)
  const [clickedMobileNo, setClickedMobileNo] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);





  const { t } = useTranslation();





  // Use selectedFilter to get the corresponding array data
  const filteredData = useMemo(() => {
    if (!selectedFilter || !newExData || !newExData.graph3 || !newExData.graph3[selectedFilter]) {
      return [];
    }
    return newExData.graph3[selectedFilter];
  }, [selectedFilter, newExData]);


  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    });
  }, [filteredData, sortConfig]);

  const pageCount = Math.ceil(sortedData.length / pageSize);

  const startIndex = pageIndex * pageSize;
  const endIndex = Math.min(startIndex + pageSize, sortedData.length);

  const applyFilter = (data, searchText) => {
    if (!searchText) return data;
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const paginatedData = useMemo(() => {
    const filtered = applyFilter(sortedData, searchText);
    return filtered.slice(startIndex, endIndex);
  }, [sortedData, searchText, startIndex, endIndex]);


  const columnsOrder = [
    'Name',
    'MobileNo',
    'VehicleNo',
    'Last Visit',
    'Total Visits',
    'Sales',
  ];

  const columnsData = useMemo(() => {
    if (paginatedData.length === 0) {
      return [];
    }

    const firstRow = paginatedData[0];
    const columns = columnsOrder
      .filter((header) => firstRow.hasOwnProperty(header)) // Ensure the header exists in the data
      .map((header) => {
        const key = columnsOrder.find((col) => col === header);

        let cellFormatter = (cellValue) => cellValue;

        if (key === 'Name' || key === 'VehicleNo') {
          cellFormatter = (cellValue) =>
            Array.isArray(cellValue) ? cellValue.join(', ') : cellValue;
        }

        if (key === 'Last Visit') {
          cellFormatter = (cellValue) => {
            if (cellValue === 0) {
              return 'Today'; // Display "Today" when the value is 0
            }
            return `${cellValue} days ago`;
          };
        }

        return {
          Header: key,
          accessor: key,
          Cell: ({ value }) => cellFormatter(value),
        };
      });

    // Add a serial number column at the beginning
    columns.unshift({
      Header: '#',
      accessor: (row, index) => index + 1, // Auto-incremented serial number
    });

    return columns;
  }, [paginatedData]);




  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
  } = useTable(
    {
      columns: columnsData, // Use columnsData instead of columns here
      data: paginatedData,
    },
    useFilters,
    useSortBy,
    usePagination
  );
  // Handle sorting
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });

  const isMobileView = window.innerWidth <= 768;



  const filteredDataForMobile = applyFilter(paginatedData, searchText);
  const filteredDataForDesktop = applyFilter(sortedData, searchText);

  const handleReadMoreClick = (columnData) => {
    if (expandedColumns.includes(columnData.accessor)) {
      setExpandedColumns(expandedColumns.filter((col) => col !== columnData.accessor));
    } else {
      setExpandedColumns([...expandedColumns, columnData.accessor]);
    }
  };


  const handleIconClick = () => {

    setShowExportOptions(!showExportOptions);
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

  const formatDate2 = (date) => {
    if (!date) {
      return ""; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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


  const handleRowClick = async (mobileNo, vehicleNo, customerName) => {


    const startDate = formatDate2(selectedRange[0]);
    const endDate = formatDate2(selectedRange[1]);

    try {
      const apiUrl = `${import.meta.env.VITE_API_URL_1}/api/v1/dashboard/sales_customer/${startDate}/${endDate}/${selectedOffice}/${isAdmin}`;

      // Create the request body
      const requestBody = {};

      if (mobileNo) {
        requestBody.MobileNo = mobileNo;
        setClickedMobileNo(mobileNo);
      } else {
        requestBody.MobileNo = null;


        if (vehicleNo[0] !== 'XXX') {
          requestBody.VehicleNo = vehicleNo[0];
          setClickedMobileNo(vehicleNo[0]);
        } else {
          requestBody.VehicleNo = null;

          if (customerName) {
            requestBody.CustomerName = customerName[0];
            setClickedMobileNo(customerName[0]);
          } else {
            requestBody.CustomerName = null;
          }
        }
      }

      // Send a POST request to the API
      const response = await axios.post(apiUrl, requestBody);

      // Handle the response data here
      const responseData = response.data;
      // console.log('Sales data:', responseData);

      // Map the responseData and update totalCount
      const updatedData = responseData.map((item) => ({
        ...item,
        totalCount: item.totalCount === 0 ? '' : item.totalCount.toString(),
      }));

      setChartData(updatedData);
      setShowGraph(true);
      setIsBack(true);

      setShowTable(false);

      // Handle the data or display it in your component
    } catch (error) {
      console.error('Error fetching sales data:', error);
      // Handle the error as needed (e.g., show an error message)
    }
  };


  const handlePrevious = () => {
    setIsBack(false)
    setShowGraph(false); // Hide the graph when the back button is clicked

  }

  const exportToExcel = async () => {
    const id = toast.loading("Please wait...");
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
          worksheet.mergeCells("A1:G1"); // Shifted down by one row and added one more cell

          // Add period - startDate to endDate
          const periodCell = worksheet.getCell("A2"); // Shifted down by two rows
          periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
          periodCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };
          periodCell.alignment = { horizontal: "center" }; // Center alignment
          worksheet.mergeCells("A2:G2"); // Shifted down by two rows and added one more cell

          // Set column widths
          worksheet.getColumn(1).width = 15; // Width for the serial number column
          worksheet.getColumn(2).width = 100; // Adjust column widths as needed
          worksheet.getColumn(3).width = 20;
          worksheet.getColumn(4).width = 105;
          worksheet.getColumn(5).width = 20;
          worksheet.getColumn(6).width = 20;
          worksheet.getColumn(7).width = 20;

          // Define column headers
          const columnHeaders = [
            "#", // Serial number column
            "Name",
            "MobileNo",
            "VehicleNo",
            "Last Visit",
            "Frequency",
            "Sales",
          ];

          // Set column headers
          const headerRow = worksheet.addRow(columnHeaders);
          headerRow.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };

          console.log(paginatedData)

          // Calculate total values for Frequency, Monetary Value, and Recency
          let totalFrequency = 0;
          let totalSales = 0;
          let totalLast_Visit = 0;

          paginatedData.forEach((item) => {
            totalLast_Visit += item['Last Visit'];
            totalFrequency += item.Frequency;
            totalSales += item.Sales;

          });

          // Iterate through the paginatedData and populate the Excel sheet
          paginatedData.forEach((item, index) => {
            const rowData = [
              index + 1, // Serial number (start from 1)
              item.Name.join(", "), // Join the array elements with a comma
              item.MobileNo,
              item.VehicleNo.join(", "), // Join the array elements with a comma
              item['Last Visit'] === 0 ? 'Today' : `${item['Last Visit']} days ago`,
              item.Frequency,
              item.Sales,
            ];

            // Add a new row with the data
            const row = worksheet.addRow(rowData);

            // Apply alignment to the cells
            row.eachCell((cell, cellNumber) => {
              if (cellNumber <= 4) {
                cell.alignment = { horizontal: "left" };
              } else {
                cell.alignment = { horizontal: "right" };
              }
            });
          });

          // Add the total row at the end
          const totalRow = worksheet.addRow([
            "", // Empty cell for serial number
            "Total", // Label for total row
            "", // Empty cell for MobileNo
            "", // Empty cell for VehicleNo
            `${totalLast_Visit} days ago`, // Total Recency
            totalFrequency, // Total Frequency
            `₹ ${totalSales}`, // Total Monetary Value

          ]);

          // Apply formatting to the total row
          totalRow.font = {
            bold: true,
          };
          totalRow.eachCell((cell, cellNumber) => {
            if (cellNumber <= 4) {
              cell.alignment = { horizontal: "left" };
            } else {
              cell.alignment = { horizontal: "right" };
            }
          });

          // Generate a unique filename
          const uniqueIdentifier = Date.now();
          const fileName = `${uniqueIdentifier}Customers_Summary_${officeName}_${startDate}_${endDate}.xlsx`;

          // Save the workbook
          workbook.xlsx.writeBuffer().then(async (buffer) => {
            // Create a FormData object to send the Blob to the server
            const formData = new FormData();
            formData.append("file", new Blob([buffer]), fileName);

            // Send FormData to the server using axios or fetch
            try {
              const response = await axios.post(
                `${import.meta.env.VITE_API_URL_1}/api/uploader`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
              );

              if (response.status === 200) {
                toast.update(id, { render: "Download Starting...", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
                const excelFileUrl = response.data.url; // Assuming the API returns the file URL
                window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${excelFileUrl}`;
              } else {
                toast.update(id, { render: "Download Failed !", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
              }
            } catch (error) {
              console.error("Error saving Excel file:", error);
            }
          });
        };

        fileReader.readAsDataURL(blob);
      });
  };
  const exportToExcel2 = async () => {
    const id = toast.loading("Please wait...");
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
          worksheet.mergeCells("A1:C1"); // Shifted down by one row and added one more cell

          // Add period - startDate to endDate
          const periodCell = worksheet.getCell("A2"); // Shifted down by two rows
          periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
          periodCell.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };
          periodCell.alignment = { horizontal: "center" }; // Center alignment
          worksheet.mergeCells("A2:C2"); // Shifted down by two rows and added one more cell

          // Set column widths
          worksheet.getColumn(1).width = 50; // Width for the serial number column
          worksheet.getColumn(2).width = 15; // Adjust column widths as needed
          worksheet.getColumn(3).width = 15;


          // Define column headers
          const columnHeaders = [
            "Date", // Serial number column
            "Visit",
            "Sales",

          ];

          // Set column headers
          const headerRow = worksheet.addRow(columnHeaders);
          headerRow.font = {
            bold: true,
            color: { argb: "000000" }, // Black color
            size: 12,
          };


          // Iterate through chartData and populate the Excel sheet
          let totalIncome = 0;
          let totalCount = 0;

          chartData.forEach((item) => {
            if (item.totalCount > 0 || item.totalIncome > 0) {
              const rowData = [
                item.requestedDate, // Date
                item.totalCount,    // Visit
                item.totalIncome,   // Sales
              ];

              // Add a new row with the data
              const row = worksheet.addRow(rowData);
              row.getCell(2).alignment = { horizontal: "right" };

              // Update totals
              totalIncome += item.totalIncome;
              totalCount += parseInt(item.totalCount);
            }
          });

          // Add the total row at the end
          const totalRow = worksheet.addRow(["Total", totalCount, `₹ ${totalIncome}`]);
          totalRow.font = {
            bold: true,
          };

          // Update alignment for total row cells
          totalRow.eachCell((cell, cellNumber) => {
            if (cellNumber === 2 || cellNumber === 3) {
              cell.alignment = { horizontal: "right" }; // Align visit and sales to the right
            } else {
              cell.alignment = { horizontal: "left" }; // Align date to the left
            }
          });







          // Generate a unique filename
          const uniqueIdentifier = Date.now();
          const fileName = `${uniqueIdentifier}Customers_Summary_${officeName}_${startDate}_${endDate}.xlsx`;

          // Save the workbook
          workbook.xlsx.writeBuffer().then(async (buffer) => {
            // Create a FormData object to send the Blob to the server
            const formData = new FormData();
            formData.append("file", new Blob([buffer]), fileName);

            // Send FormData to the server using axios or fetch
            try {
              const response = await axios.post(
                `${import.meta.env.VITE_API_URL_1}/api/uploader`,
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
              );

              if (response.status === 200) {
                toast.update(id, { render: "Download Starting...", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
                const excelFileUrl = response.data.url; // Assuming the API returns the file URL
                window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${excelFileUrl}`;
              } else {
                toast.update(id, { render: "Download Failed !", type: "error", isLoading: false, autoClose: 5000, closeOnClick: true, pauseOnFocusLoss: false });
              }
            } catch (error) {
              console.error("Error saving Excel file:", error);
            }
          });
        };

        fileReader.readAsDataURL(blob);
      });
  };


  const exportToPDF = async () => {
    const id = toast.loading("Please wait...");
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
      let jsPDF = module.default;
      const doc = new jsPDF();

      // Add font to PDF
      doc.addFileToVFS('NotoSansBengali.ttf', fontBase64);
      doc.addFont('NotoSansBengali.ttf', 'NotoSansBengali', 'normal');
      doc.setFont('NotoSansBengali');

      doc.addFileToVFS('NotoSansDevanagari.ttf', fontBase642);
      doc.addFont('NotoSansDevanagari.ttf', 'NotoSansDevanagari', 'normal');
      doc.setFont('NotoSansDevanagari');

      // Add table headers
      const headers = [
        [
          "#", // Serial number column
          "Name",
          "MobileNo",
          "VehicleNo",
          "Last Visit",
          "Frequency",
          "Sales",

        ],
      ];
      const columnStyles = {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },
        3: { halign: "center" },
        4: { halign: "center" },
        5: { halign: "center" },
        6: { halign: "center" },
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
      const summaryHeader = [
        [`${t("Customers Summary Data")} (${officeName})`],
      ];
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
          fontStyle: 'bold',
        },
      });

      const periodCell = [
        [`${t("Period")}: ${startDate} ${t("to")} ${endDate}`],
      ];
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
          fontStyle: 'bold',
        },
      });



      // Set table rows
      let rows = paginatedData.map((item, index) => [
        index + 1, // Serial number (start from 1)
        item.Name.join(", "), // Join the array elements with a comma
        item.MobileNo,
        item.VehicleNo.join(", "), // Join the array elements with a comma
        item['Last Visit'] === 0 ? 'Today' : `${item['Last Visit']} days ago`,
        item.Frequency,
        item.Sales,
      ]);

      // Calculate total values for Frequency, Monetary Value, and Recency
      let totalFrequency = 0;
      let totalSales = 0;
      let totalLast_Visit = 0;

      paginatedData.map((item) => {
        totalLast_Visit += item['Last Visit'];
        totalFrequency += item.Frequency;
        totalSales += item.Sales;
      });

      // Add the Total row data
      const totalRow = [
        "", // Serial number
        t("Total"), // Label for the total row
        "", // Empty cell for MobileNo
        "", // Empty cell for VehicleNo
        `${totalLast_Visit} days ago`, // Total Recency
        totalFrequency, // Total Frequency
        `₹ ${totalSales}`, // Total Monetary Value

      ];

      // Push the Total row to the 'rows' array
      rows.push(totalRow);

      // AutoTable configuration
      const tableConfig = {
        startY: doc.autoTable.previous.finalY + 1,
        head: headers,
        body: rows, // Use the modified 'rows' array
        headStyles: {
          ...headerStyles,
          fillColor: backgroundColors.secondHeader,
          textColor: "#FFFFFF", // White color
        },
        columnStyles: columnStyles,
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
          fontStyle: 'bold',
        },
      };

      // Add table to the PDF document
      doc.autoTable(tableConfig);

      // Generate a unique filename
      const uniqueIdentifier = Date.now();
      const fileName = `${uniqueIdentifier}Top_Customerss_Summary_by${officeName}${startDate}_${endDate}.pdf`;

      // Generate the Blob from the PDF data
      const pdfBlob = doc.output('blob');

      // Create a FormData object to send the Blob to the server
      const formData = new FormData();
      formData.append("file", pdfBlob, fileName);

      // Send FormData to the server using axios or fetch
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_1}/api/uploader`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        if (response.status == 200)
          toast.update(id, {
            render: "Download Starting...",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
          });
        else
          toast.update(id, {
            render: "Download Failed !",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
          });

        const pdfFileUrl = await response.data.url; // Assuming the API returns the file URL
        window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${pdfFileUrl}`
      } catch (error) {
        console.error("Error saving PDF file:", error);
      }
    });
  };

  const exportToPDF2 = async () => {
    const id = toast.loading("Please wait...");
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
      let jsPDF = module.default;
      const doc = new jsPDF();

      // Add font to PDF
      doc.addFileToVFS('NotoSansBengali.ttf', fontBase64);
      doc.addFont('NotoSansBengali.ttf', 'NotoSansBengali', 'normal');
      doc.setFont('NotoSansBengali');

      doc.addFileToVFS('NotoSansDevanagari.ttf', fontBase642);
      doc.addFont('NotoSansDevanagari.ttf', 'NotoSansDevanagari', 'normal');
      doc.setFont('NotoSansDevanagari');

      // Add table headers
      const headers = [
        [
          "Date", // Serial number column
          "Visit",
          "Sales",

        ],
      ];
      const columnStyles = {
        0: { halign: "center" },
        1: { halign: "center" },
        2: { halign: "center" },

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
      const summaryHeader = [
        [`${t("Customers Summary Data")} (${officeName})`],
      ];
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
          fontStyle: 'bold',
        },
      });

      const periodCell = [
        [`${t("Period")}: ${startDate} ${t("to")} ${endDate}`],
      ];
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
          fontStyle: 'bold',
        },
      });



      // Filter chartData to exclude rows where totalCount and totalIncome are greater than 0
      const filteredChartData = chartData.filter((item) => item.totalCount > 0 || item.totalIncome > 0);

      // Set table rows
      let rows = filteredChartData.map((item, index) => [
        item.requestedDate, // Date
        item.totalCount,    // Visit
        item.totalIncome,   // Sales
      ]);

      // Calculate total values for totalCount and totalIncome from the filtered data
      let totalIncome = 0;
      let totalCount = 0;
      filteredChartData.forEach((item) => {
        totalIncome += item.totalIncome;
        totalCount += parseInt(item.totalCount);
      });

      // Add the Total row data
      const totalRow = ["Total", totalCount, `₹ ${totalIncome}`];

      // Push the Total row to the 'rows' array
      rows.push(totalRow);




      // AutoTable configuration
      const tableConfig = {
        startY: doc.autoTable.previous.finalY + 1,
        head: headers,
        body: rows, // Use the modified 'rows' array
        headStyles: {
          ...headerStyles,
          fillColor: backgroundColors.secondHeader,
          textColor: "#FFFFFF", // White color
        },
        columnStyles: columnStyles,
        styles: {
          font: lang === 'hi' ? 'NotoSansDevanagari' : 'NotoSansBengali', // Set the correct font name here
          fontStyle: 'bold',
        },
      };

      // Add table to the PDF document
      doc.autoTable(tableConfig);

      // Generate a unique filename
      const uniqueIdentifier = Date.now();
      const fileName = `${uniqueIdentifier}Top_Customerss_Summary_by${officeName}${startDate}_${endDate}.pdf`;

      // Generate the Blob from the PDF data
      const pdfBlob = doc.output('blob');

      // Create a FormData object to send the Blob to the server
      const formData = new FormData();
      formData.append("file", pdfBlob, fileName);

      // Send FormData to the server using axios or fetch
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_1}/api/uploader`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        if (response.status == 200)
          toast.update(id, {
            render: "Download Starting...",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
          });
        else
          toast.update(id, {
            render: "Download Failed !",
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            pauseOnFocusLoss: false,
          });

        const pdfFileUrl = await response.data.url; // Assuming the API returns the file URL
        window.location.href = `${import.meta.env.VITE_API_URL_1}/static/downloads/${pdfFileUrl}`
      } catch (error) {
        console.error("Error saving PDF file:", error);
      }
    });
  };





  const option = {
    title: {
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 18 : 25,
      },
    },
    tooltip: {
      trigger: "axis",
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
      },
    },
    legend: {
      show: true,
      data: [t('Visit')],
      selected: { 'Visit': true },
      bottom: 0,
      textStyle: {
        color: themeMode === "dark" ? "#ffffff" : "#000000",
        fontSize: window.innerWidth <= 768 ? 10 : 12,
      },
    },
    grid: {
      left: window.innerWidth <= 768 ? '12%' : '5%',
      top: "15%",
      right: window.innerWidth <= 768 ? '12%' : '5%',
    },
    xAxis: [{
      type: 'time',
      //data: chartData.map(item => formatDate(item.requestedDate)), // Use map to extract requestedDate from chartData
      axisPointer: {
        label: {
          formatter: function (params) {
            let oT = new Date(params.value);
            return formatDate(oT);
          },
        },
      },
      axisLine: {
        lineStyle: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      axisLabel: {
        rotate: window.innerWidth < 768 ? 45 : 0,
        hideOverlap: true,
        formatter: '{d} {MMM}',
        color: themeMode === "dark" ? "#ffffff" : "#000000",
      },
    }],
    yAxis: [
      {
        type: 'value',
        name: t('Visit'),
        min: 0,
        minInterval: 1,
        axisLine: {
          lineStyle: {
            color: themeMode === "dark" ? "#ffffff" : "#000000",
          },
        },
        axisLabel: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
        },
      },
      {
        type: 'value',
        name: t('Sales'),
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
    ],
    dataZoom: [
      {
        show: true,
        type: 'inside',
        filterMode: 'none',
        xAxisIndex: [0],
        startValue: new Date(selectedRange[0]),
        endValue: new Date(selectedRange[1]),
      }
    ],
    series: [
      {
        name: t('Visit'),
        type: 'scatter',
        symbolSize: 20,
        data: chartData.map(item => [item.requestedDate, item.totalCount]), // Extract requestedDate and totalCount
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#a6ffcb',
            },
            {
              offset: 1,
              color: '#1fa2ff',
            }
          ])
        },
        yAxisIndex: 0,
        smooth: true,
      },
      {
        name: t('Sales'),
        type: 'bar',
        barWidth: "40%",
        data: chartData.map(item => [item.requestedDate, parseFloat(item.totalIncome).toFixed(2)]), // Extract and format totalIncome
        itemStyle: {
          borderRadius: [5, 5, 5, 5],
        },
        yAxisIndex: 1,
      },
    ],
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

  const handleSearchClick = () => {
    setIsExpanded((prev) => !prev);
  };




  return (
    <>
      <div
        className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
          }`}
      >
        <ToastContainer
          position="top-center"
          theme={themeMode}
        />
        {showGraph ? ( // Render the graph when showGraph is true
          <div style={{ width: '100%' }}>
            <div className="d-flex w-100 g-0 align-items-center justify-content-between">
              <div className='d-flex align-items-center'>
                {isBack ? (
                  <div title="Previous" className={css.resetButtonContainer}>
                    <button title="Previous" className={`btn btn-primary mx-1 ${window.innerWidth < 500 ? 'btn-sm' : ''} shadow border-2 border-white`} onClick={handlePrevious}>
                      <FaAngleLeft style={{ fontSize: "1rem" }} />
                    </button>
                  </div>

                ) : null}
                <div className={`fw-bold ms-2 fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                  }`}>{clickedMobileNo}</div>

              </div>
              <div title='Export Options' className="d-flex g-0" ref={iconContainerRef}><div className={`${css.iconsContainer} d-flex justify-content-center align-items-center`} >
                {/* Data grid icon */}

                <div
                  className={`${css.icon} ${themeMode === "dark" ? css.darkMode : css.lightMode
                    } px-2 py-1`}

                  onClick={handleIconClick}
                >
                  {showExportOptions ? <FaXmark style={{ fontSize: "1.1rem" }} /> : <FaListUl style={{ fontSize: "1.1rem", color: 'white' }} />}
                </div>
                {showExportOptions && (
                  <div
                    className={`${css.exportOptions} ${themeMode === "dark" ? css.darkMode : css.lightMode
                      }`}
                    ref={exportOptionsRef}
                  >
                    {!showTable ?
                      <div className={css.exportOption} onClick={() => { setShowTable(!showTable); setShowExportOptions(false) }}>
                        <FaTable style={{ fontSize: "1.1rem", color: "#0d6efd" }} />
                        <span>{t("View Table")}</span>
                      </div> :
                      <div className={css.exportOption} onClick={() => { setShowTable(!showTable); setShowExportOptions(false) }}>
                        <FaChartColumn style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
                        <span>{t("View Graph")}</span>
                      </div>}

                    <div className={css.exportOption} onClick={exportToExcel2}>
                      <FaFileExcel style={{ fontSize: "1.1rem", color: "green" }} />
                      <span>{t("Export to Excel")}</span>
                    </div>
                    <div className={css.exportOption} onClick={exportToPDF2}>
                      <FaFilePdf style={{ fontSize: "1.1rem", color: "red" }} />
                      <span>{t("Export to PDF")}</span>
                    </div>
                  </div>
                )}
              </div>
              </div>

            </div>
            {/* Render your graph component here */}
            {!showTable ? <ReactECharts
              option={option} // Pass your chart options to the graph component
            // Add any other props you need to pass to the graph component
            /> : <div className="container-fluid mt-2 table-responsive" style={{ height: "334px" }}>
              <table className={`table  ${themeMode == 'dark' ? 'table-dark' : ''}`}>
                <thead>
                  <tr>
                    <th scope="col">{t("Date")}</th>
                    <th scope="col">{t("Visit")}</th>
                    <th scope="col">{t("Sales")}(₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map through your data and render each row */}
                  {chartData.map((item) => (
                    // Only render rows where both totalCount and totalIncome are greater than 0
                    (item.totalCount > 0 && item.totalIncome > 0) && (
                      <tr key={item.id}>
                        <td>{item.requestedDate}</td>
                        <td>{parseInt(item.totalCount)}</td>
                        <td>{`₹ ${item.totalIncome}`}</td>
                      </tr>
                    )
                  ))}
                  {/* Total row */}
                  <tr>
                    <td>Total</td>
                    <td>
                      {/* Calculate the total of totalCount */}
                      {chartData
                        .filter((item) => item.totalCount > 0)
                        .reduce((total, item) => total + parseInt(item.totalCount), 0)}
                    </td>
                    <td>
                      {/* Calculate the total of totalIncome */}
                      {`₹ ${chartData
                        .filter((item) => item.totalIncome > 0)
                        .reduce((total, item) => total + item.totalIncome, 0)}`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            }
          </div>
        ) : (



          <div style={{ fontFamily: 'Arial, sans-serif', width: '100%', height: '100%' }}>
            <div className="container-fluid" >
              <div className="d-flex w-100 g-0 align-items-center justify-content-between my-2">
                <div>
                  <div className={`fw-bold d-inline me-2 noselect fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                    }`} >{t("Customer Profiling")} {t("of")} {trimName(officeName, 10)}</div>

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


            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',marginTop:"10px" }}>
              <ThemeProvider theme={theme}>
                <FormControl sx={{ minWidth: 280, marginRight: "5px" }} size="small">
                  <InputLabel
                    id="demo-simple-select-helper-label"
                    style={{ color: "var(--text-color)", fontFamily: '"Public Sans", sans-serif !important' }}
                  >
                    {t("Filter")}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    displayEmpty
                    value={newExData.graph3 ? selectedFilter : ""}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    style={{ color: "var(--text-color)", fontFamily: '"Public Sans", sans-serif !important' }}
                    label={t("Filter")}
                  >
                    {newExData.graph3 &&
                      Object.keys(newExData.graph3).map((filterOption) => (
                        <MenuItem
                          key={filterOption}
                          value={filterOption}
                          style={{ color: "var(--text-color)", fontFamily: '"Public Sans", sans-serif !important' }}
                        >
                          {filterOption}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </ThemeProvider>
              <button
                onClick={handleSearchClick}

                className='btn btn-outline-primary btn-lg mx-0 d-flex align-items-center'
              >
                <FaSistrix />
              </button>
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              {isExpanded && (
                <div
                  style={{
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'white', // Add your background color
                    marginBottom: '10px',
                  }}
                >
                  {/* Your search box content here */}
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    style={{
                      padding: '10px 25px 5px 35px',
                      fontSize: '16px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      color: '#272626',
                      width: '100%',
                    }}
                  />
                </div>
              )}
            </div>

            {isMobileView ? (
              // Render data in column-wise layout for mobile view
              <div style={{ borderRadius: '10px' }}>
                {filteredDataForMobile.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    style={{
                      marginBottom: '20px',
                      padding: '10px',
                      border: '1px solid rgb(230, 220, 220)',
                      borderRadius: '5px',
                      backgroundColor: themeMode === 'dark' ? '#272626' : '#f9f9f9',
                      borderLeft: '5px solid var(--driver-primary)',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleRowClick(row.MobileNo, row.VehicleNo, row.CustomerName)}
                  >
                    {columnsData.map((columnData, columnIndex) => {
                      const cellValue = row[columnData.accessor];
                      const shouldShowFull = expandedColumns.includes(columnData.accessor);
                      const isLongText =
                        (columnData.accessor === 'Name' && Array.isArray(cellValue) && cellValue.length > 1) ||
                        (columnData.accessor === 'VehicleNo' && Array.isArray(cellValue) && cellValue.length > 1);

                      // Display the serial number in the first column
                      if (columnIndex === 0) {
                        return (
                          <div
                            key={columnData.accessor}
                            style={{
                              marginBottom: '5px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: '10px 10px',
                              //  borderRadius: '5px',
                              //  justifyContent: 'space-between',
                              borderBottom: '1px solid var(--driver-primary)'
                            }}
                          >

                            <strong>{columnData.Header}</strong>
                            <div style={{ textAlign: 'right', marginLeft: "2px" }}>{rowIndex + 1}</div>
                          </div>
                        );
                      }

                      if (columnData.accessor === 'Last Visit') {
                        // Format "Last Visit" with "Today" when the value is 0
                        const lastVisitText = cellValue === 0 ? 'Today' : `${cellValue} days ago`;

                        return (
                          <div
                            key={columnData.accessor}
                            style={{
                              marginBottom: '5px',
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              padding: '10px 10px',
                              //  borderRadius: '5px',
                              justifyContent: 'space-between',
                              borderBottom: '1px solid #8080803b'
                            }}
                          >
                            <strong>{columnData.Header}</strong>
                            <div style={{ textAlign: 'right' }}>{lastVisitText}</div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={columnData.accessor}
                          style={{
                            marginBottom: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 10px',
                            //  borderRadius: '5px',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #8080803b'
                          }}
                        >
                          <strong>{columnData.Header}</strong>{' '}
                          <div style={{ textAlign: 'right' }}>
                            {isLongText && !shouldShowFull
                              ? cellValue[0].substring(0, 10)
                              : Array.isArray(cellValue)
                                ? cellValue.join(', ')
                                : cellValue}
                            {isLongText && (
                              <button
                                onClick={(event) => {
                                  event.stopPropagation(); // Stop event propagation
                                  handleReadMoreClick(columnData);
                                }}
                                style={{
                                  border: 'none',
                                  background: 'none',
                                  color: 'grey',
                                  textDecoration: 'underline',
                                  cursor: 'pointer',
                                }}
                              >
                                {shouldShowFull ? 'less' : 'more'}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>


            ) : (

              // Render data in row-wise layout for desktop view
              <div style={{ overflowX: 'auto', overflowY: 'auto', maxHeight: '400px' }}>
                <table
                  className={`${themeMode == 'dark' ? css.CustomerProfilingTable : ''}`}
                  {...getTableProps()}
                  style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr
                        {...headerGroup.getHeaderGroupProps()}
                        style={{
                          backgroundColor: '#f2f2f2',
                        }}
                      >
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                            style={{
                              padding: '10px',
                              borderBottom: '2px solid #ccc',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleSort(column.id)}
                          >
                            {column.render('Header')}
                            <span
                              style={{
                                marginLeft: '5px',
                                fontSize: '12px',
                              }}
                            >
                              {sortConfig.key === column.id &&
                                (sortConfig.direction === 'asc' ? '🔼' : '🔽')}
                            </span>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>

                    {page.map((row) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          style={{
                            borderBottom: '1px solid #ccc',
                            backgroundColor: row.index % 2 === 0 ? '#f9f9f9' : 'white',
                            cursor: 'pointer'
                          }}
                          // Attach click event to rows
                          onClick={() => handleRowClick(row.original.MobileNo, row.original.VehicleNo, row.original.Name)}
                        >
                          {row.cells.map((cell, cellIndex) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: '10px',
                                }}
                              >
                                {cellIndex === 0 ? cell.value : cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>


            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <div>
                {!isMobileView && (

                  <button
                    onClick={() => setPageIndex(0)}
                    disabled={pageIndex === 0}
                    style={{
                      padding: '5px 10px',
                      fontSize: '16px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      marginRight: '5px',
                      cursor: 'pointer',
                      marginBottom: '5px',
                    }}
                  >
                    <FaAnglesLeft />
                  </button>
                )}
                <button
                  onClick={() => setPageIndex(pageIndex - 1)}
                  disabled={pageIndex === 0}
                  style={{
                    padding: '5px 10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginRight: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <FaAngleLeft />
                </button>


                <button
                  onClick={() => setPageIndex(pageIndex + 1)}
                  disabled={pageIndex >= pageCount - 1}
                  style={{
                    padding: '5px 10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginRight: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <FaAngleRight />
                </button>
                {!isMobileView && (
                  <button
                    onClick={() => setPageIndex(pageCount - 1)}
                    disabled={pageIndex >= pageCount - 1}
                    style={{
                      padding: '5px 10px',
                      fontSize: '16px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      marginRight: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FaAnglesRight />
                  </button>
                )}
              </div>

              <div>
                <span
                  style={{
                    fontSize: '16px',
                    marginRight: '10px',
                  }}
                >
                  Page <strong>{pageIndex + 1}</strong> of {pageCount}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    value={pageIndex + 1}
                    onChange={(e) => {
                      const newPage = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      setPageIndex(newPage);
                    }}
                    style={{
                      padding: '5px',
                      fontSize: '16px',
                      borderRadius: '5px',
                      color: '#272626',
                      border: '1px solid #ccc',
                      marginRight: '10px',
                      width: '50px',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>


        )}
      </div>
    </>
  );
};


export default CustomerType;