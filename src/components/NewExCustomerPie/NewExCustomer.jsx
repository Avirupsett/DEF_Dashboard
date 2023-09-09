import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";
import 'jspdf-autotable';
import css from './NewExCustomer.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn, FaAngleLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';
import { FaChartPie } from 'react-icons/fa';





const NewExCustomer = ({
    echarts,ReactECharts,
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
    const [chartByName, setChartByName] = useState([])
    const [chartByMobile, setChartByMobile] = useState([])
    const [chartByVehicle, setChartByVehicle] = useState([])
    const [topSelect, setTopSelect] = useState(5)
    const [chartData2, setChartData2] = useState([])
    const [isBack, setIsBack] = useState(false)
    const [filterName, setFilterName] = useState("Customers")
   
    const [tableData2, setTableData2] = useState([])



    const [newCustomerData, setNewCustomerData] = useState([]);
    const [existingCustomerData, setExistingCustomerData] = useState([]);

    useEffect(() => {
        const startDate = formatDate2(selectedRange[0]);
        const endDate = formatDate2(selectedRange[1]);

        const fetchData = async () => {
            try {

                const data = newExData


                if (data.graph1) {
                    setIsBack(false);

                    const byName = data.graph1.byName;
                    const byMobile = data.graph1.byMobile;
                    const byVehicle = data.graph1.byVehicle;

                    // Extract existingCustomerCount and newCustomerCount for each category
                    const existingCustomerCountByName = byName.existingCustomerCount;
                    const newCustomerCountByName = byName.newCustomerCount;

                    const existingCustomerCountByMobile = byMobile.existingCustomerCount;
                    const newCustomerCountByMobile = byMobile.newCustomerCount;

                    const existingCustomerCountByVehicle = byVehicle.existingCustomerCount;
                    const newCustomerCountByVehicle = byVehicle.newCustomerCount;

                    // Set the state variables with the extracted counts
                    setChartByName({
                        existingCustomerCount: existingCustomerCountByName,
                        newCustomerCount: newCustomerCountByName,
                        existingCustomer: byName.existingCustomer,
                        newCustomer: byName.newCustomer,
                    });

                    setChartByMobile({
                        existingCustomerCount: existingCustomerCountByMobile,
                        newCustomerCount: newCustomerCountByMobile,
                        existingCustomer: byMobile.existingCustomer,
                        newCustomer: byMobile.newCustomer,
                    });

                    setChartByVehicle({
                        existingCustomerCount: existingCustomerCountByVehicle,
                        newCustomerCount: newCustomerCountByVehicle,
                        existingCustomer: byVehicle.existingCustomer,
                        newCustomer: byVehicle.newCustomer,
                    });
                    let dataToShow = [];

                    switch (alignment) {
                        case 'Name':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': existingCustomerCountByName,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': newCustomerCountByName,
                                },
                            ];
                            break;
                        case 'Mobile':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': existingCustomerCountByMobile,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': newCustomerCountByMobile,
                                },
                            ];
                            break;
                        case 'Vehicle':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': existingCustomerCountByVehicle,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': newCustomerCountByVehicle,
                                },
                            ];
                            break;
                        default:
                            return;
                    }

                    setTableData(dataToShow);


                }




            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error state or display an error message
            }
        };

        fetchData();
    }, [newExData]);



    const getPieChartData = () => {
        switch (alignment) {
            case 'Name':
                return chartByName.existingCustomerCount === 0 && chartByName.newCustomerCount === 0
                    ? {}
                    : {
                        existingCustomerCount: chartByName.existingCustomerCount,
                        newCustomerCount: chartByName.newCustomerCount,
                    };
            case 'Mobile':
                return chartByMobile.existingCustomerCount === 0 && chartByMobile.newCustomerCount === 0
                    ? {}
                    : {
                        existingCustomerCount: chartByMobile.existingCustomerCount,
                        newCustomerCount: chartByMobile.newCustomerCount,
                    };
            case 'Vehicle':
                return chartByVehicle.existingCustomerCount === 0 && chartByVehicle.newCustomerCount === 0
                    ? {}
                    : {
                        existingCustomerCount: chartByVehicle.existingCustomerCount,
                        newCustomerCount: chartByVehicle.newCustomerCount,
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

    const option = {
        title: {
            //text: 'Customer Distribution by Category',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                const roundedPercent = Math.round(params.percent);
                return `${params.seriesName} <br/>${params.name}: ${params.value} (${roundedPercent}%)`;
            },
        },
        legend: {
            orient: 'horizontal',
            bottom: 0, // You can adjust the positioning of the legend
            data: [t('Existing Customers'), t('New Customers')],
            textStyle: {
                color: themeMode === "dark" ? "#ffffff" : "#000000",
                fontSize: window.innerWidth <= 1496 ? 12 : 14,
                padding: 4
            },
        },
        series: [
            {
                name: t('Customers'),
                type: 'pie',
                radius: ['35%', '70%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: true,
                label: {
                    show: true, // Set to true to show labels on the pie chart
                    position: 'inside', // Display the label inside the pie chart
                    formatter: (params) => {
                        // Calculate the rounded percentage
                        const roundedPercent = Math.round(params.percent);
                        if (roundedPercent > 0)
                            return `${roundedPercent}%`; // Display the formatted percentage
                        else
                            return ''
                    },
                    fontSize: 15, // Adjust font size of the label
                    fontWeight: 'bold',
                    color: 'white',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    {
                        value: getPieChartData().existingCustomerCount,
                        name: t('Existing Customers'),
                        itemStyle: {
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
                        value: getPieChartData().newCustomerCount,
                        name: t('New Customers'),
                        itemStyle: {
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
                ],
                itemStyle: {
                    borderWidth: 2, // Set the border width
                    borderColor: '#ffffff00', // Set the border color
                    borderRadius: 4,
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
                    worksheet.mergeCells("A1:C1"); // Shifted down by one row

                    // Add period - startDate to endDate
                    const periodCell = worksheet.getCell("A2"); // Shifted down by two rows
                    periodCell.value = `${t("Period")}: ${startDate} ${t("to")} ${endDate}`;
                    periodCell.font = {
                        bold: true,
                        color: { argb: "000000" }, // Black color
                        size: 12,
                    };
                    periodCell.alignment = { horizontal: "center" }; // Center alignment
                    worksheet.mergeCells("A2:C2"); // Shifted down by two rows

                    // Set column widths
                    worksheet.getColumn(1).width = 15;
                    worksheet.getColumn(2).width = 50;
                    worksheet.getColumn(3).width = 15;


                    // Add headers
                    const headerRow = worksheet.addRow([t("#"), t('Customer Type'), t("Total Count")]);

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

                    // Define an array to hold the data based on newAlignment
                    let dataToShow = [];

                    switch (alignment) {
                        case 'Name':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': chartByName.existingCustomerCount,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': chartByName.newCustomerCount,
                                },
                            ];
                            break;
                        case 'Mobile':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': chartByMobile.existingCustomerCount,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': chartByMobile.newCustomerCount,
                                },
                            ];
                            break;
                        case 'Vehicle':
                            dataToShow = [
                                {
                                    '#': 1,
                                    'CustomerName': 'Existing Customers',
                                    'Total Count': chartByVehicle.existingCustomerCount,
                                },
                                {
                                    '#': 2,
                                    'CustomerName': 'New Customers',
                                    'Total Count': chartByVehicle.newCustomerCount,
                                },
                            ];
                            break;
                        default:
                            return;
                    }

                    // Calculate total values
                    const totalTotalCount = dataToShow.reduce((total, item) => total + item['Total Count'], 0);

                    // Add total row to dataToShow
                    dataToShow.push({
                        '#': '', // Leave the column empty for serial number
                        'CustomerName': t('Total'),
                        'Total Count': totalTotalCount,
                    });

                    // Populate the data rows in the worksheet
                    dataToShow.forEach((rowData, index) => {
                        const row = worksheet.addRow([
                            index + 1,
                            rowData.CustomerName,
                            rowData['Total Count'],
                        ]);



                        // Align the serial number to the left
                        row.getCell(1).alignment = { horizontal: "left" };
                        row.getCell(2).alignment = { horizontal: "left" };
                        row.getCell(3).alignment = { horizontal: "right" };

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
    const exportToExcel2 = async () => {
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
                    extraHeaderCell.value = `${filterName} (${officeName})`;
                    extraHeaderCell.font = {
                        bold: true,
                        color: { argb: "000000" }, // Black color
                        size: 14,
                    };
                    extraHeaderCell.alignment = {
                        vertical: "middle",
                        horizontal: "center",
                    };
                    worksheet.mergeCells("A1:C1"); // Shifted down by one row

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


                    // Add headers
                    const headerRow = worksheet.addRow([t("#"), t(alignment), t("Count")]);

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

                    let dataToShow = [];


                    switch (alignment) {
                        case 'Name':
                            dataToShow = filterName === 'Existing Customers'
                                ? chartByName.existingCustomer
                                : chartByName.newCustomer;
                            break;
                        case 'Mobile':
                            dataToShow = filterName === 'Existing Customers'
                                ? chartByMobile.existingCustomer
                                : chartByMobile.newCustomer;
                            break;
                        case 'Vehicle':
                            dataToShow = filterName === 'Existing Customers'
                                ? chartByVehicle.existingCustomer
                                : chartByVehicle.newCustomer;
                            break;
                        default:
                            return;
                    }

                    // Populate the data rows in the worksheet
                    dataToShow.forEach((item, index) => {
                        const row = worksheet.addRow([
                            index + 1,
                            item[alignment === 'Name' ? 'CustomerName' : alignment === 'Mobile' ? 'MobileNo' : 'VehicleNo'],

                            item.totalCount,
                        ]);




                        // Align the serial number to the left
                        row.getCell(1).alignment = { horizontal: "left" };
                        row.getCell(2).alignment = { horizontal: "left" };
                        row.getCell(3).alignment = { horizontal: "right" };


                    });

                    // Calculate total values
                    const totalTotalCount = dataToShow.reduce((total, item) => total + item.totalCount, 0);

                    // Add total row
                    const totalRow = worksheet.addRow(['', t('Total'), totalTotalCount]);
                    totalRow.font = {
                        bold: true,
                    };
                    totalRow.getCell(2).alignment = { horizontal: "left" };



                    // Generate a unique filename
                    const uniqueIdentifier = Date.now();
                    const fileName = `${uniqueIdentifier} ${filterName}${officeName}${startDate}_${endDate}.xlsx`;

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
            const headers = [[t("#"), t('Customer Type'), t("Total Count")]];
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

            // Define an array to hold the data based on newAlignment
            let dataToShow = [];

            switch (alignment) {
                case 'Name':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByName.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByName.newCustomerCount,
                        },
                    ];
                    break;
                case 'Mobile':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByMobile.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByMobile.newCustomerCount,
                        },
                    ];
                    break;
                case 'Vehicle':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByVehicle.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByVehicle.newCustomerCount,
                        },
                    ];
                    break;
                default:
                    return;
            }

            // Calculate total values
            const totalTotalCount = dataToShow.reduce((total, item) => total + item['Total Count'], 0);

            // Add total row to dataToShow
            dataToShow.push({
                '#': '', // Leave the column empty for serial number
                'CustomerName': t('Total'),
                'Total Count': totalTotalCount,
            });



            // Set table rows
            let rows = dataToShow.map((item, index) => [
                index + 1,
                item.CustomerName,
                item['Total Count'],
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
            const fileName = `${uniqueIdentifier}Customers_Summary_by${alignment}${officeName}${startDate}_${endDate}.pdf`;

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
    const exportToPDF2 = async () => {
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
            const headers = [[t("#"), t(alignment), t("Count")]];
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
            const summaryHeader = [[`${filterName} (${officeName})`]];
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
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByName.existingCustomer
                        : chartByName.newCustomer;
                    break;
                case 'Mobile':
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByMobile.existingCustomer
                        : chartByMobile.newCustomer;
                    break;
                case 'Vehicle':
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByVehicle.existingCustomer
                        : chartByVehicle.newCustomer;
                    break;
                default:
                    return;
            }


            // Set table rows
            let rows = dataToShow.map((item, index) => [
                index + 1,
                item[alignment === 'Name' ? 'CustomerName' : alignment === 'Mobile' ? 'MobileNo' : 'VehicleNo'],
                item.totalCount,
            ]);

            // Calculate total values
            const totalTotalCount = dataToShow.reduce((total, item) => total + item.totalCount, 0);

            // Add total row to the rows array
            const totalRow = ['', t('Total'), totalTotalCount];
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
            const fileName = `${uniqueIdentifier}Sales_of_${filterName}${officeName}${startDate}_${endDate}.pdf`;

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

    useEffect(() => {
        setTableStatus(!showGraph)
    
      }, [showGraph])
    


    const handleChangeCustomer = (event) => {
        const newAlignment = event.target.value;
        setAlignment(newAlignment);

        if (isBack === true) {
            // Update the table data based on the new alignment
            let dataToShow = [];

            switch (newAlignment) {
                case 'Name':
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByName.existingCustomer
                        : chartByName.newCustomer;
                    break;
                case 'Mobile':
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByMobile.existingCustomer
                        : chartByMobile.newCustomer;
                    break;
                case 'Vehicle':
                    dataToShow = filterName === 'Existing Customers'
                        ? chartByVehicle.existingCustomer
                        : chartByVehicle.newCustomer;
                    break;
                default:
                    return;
            }

            // Create the table data format
            const tableDataToShow = dataToShow.map((item, index) => ({
                '#': index + 1,
                [newAlignment === 'Name' ? 'CustomerName' :
                    newAlignment === 'Mobile' ? 'MobileNo' : 'VehicleNo']: item[newAlignment === 'Name' ? 'CustomerName' : newAlignment === 'Mobile' ? 'MobileNo' : 'VehicleNo'],
                'Total Count': item.totalCount,
            }));

            setTableData(tableDataToShow);


        } else {

            let dataToShow = [];


            switch (newAlignment) {
                case 'Name':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByName.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByName.newCustomerCount,
                        },
                    ];
                    break;
                case 'Mobile':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByMobile.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByMobile.newCustomerCount,
                        },
                    ];
                    break;
                case 'Vehicle':
                    dataToShow = [
                        {
                            '#': 1,
                            'CustomerName': 'Existing Customers',
                            'Total Count': chartByVehicle.existingCustomerCount,
                        },
                        {
                            '#': 2,
                            'CustomerName': 'New Customers',
                            'Total Count': chartByVehicle.newCustomerCount,
                        },
                    ];
                    break;
                default:
                    return;
            }

            setTableData(dataToShow);




        }



    };



    const handleGraphClick = (params) => {
        if (params && params.data && params.dataIndex >= 0) {
            const dataIndex = params.dataIndex;
            const selectedSeries = params.data.name; // 'Existing Customers' or 'New Customers'

            let dataToShow = [];
            console.log(params)

            switch (alignment) {
                case 'Name':
                    dataToShow = selectedSeries === 'Existing Customers'
                        ? chartByName.existingCustomer
                        : chartByName.newCustomer;
                    break;
                case 'Mobile':
                    dataToShow = selectedSeries === 'Existing Customers'
                        ? chartByMobile.existingCustomer
                        : chartByMobile.newCustomer;
                    break;
                case 'Vehicle':
                    dataToShow = selectedSeries === 'Existing Customers'
                        ? chartByVehicle.existingCustomer
                        : chartByVehicle.newCustomer;
                    break;
                default:
                    return;
            }


            // Create the table data format
            const tableDataToShow = dataToShow.map((item, index) => ({
                '#': index + 1,
                [alignment === 'Name' ? 'CustomerName' :
                    alignment === 'Mobile' ? 'MobileNo' : 'VehicleNo']: item[alignment === 'Name' ? 'CustomerName' : alignment === 'Mobile' ? 'MobileNo' : 'VehicleNo'],
                'Total Count': item.totalCount,
            }));

            console.log(selectedSeries)

            setTableData(tableDataToShow);
            setTableStatus(true);
            setFilterName(selectedSeries); // Set the filter name for display

            // Update isBack to true when switching to the table view
            setIsBack(true);
        }
    };








    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    })
    const handlePrevious = () => {
        setIsBack(false)
        setTableStatus(false)
        setFilterName("Customers");


    }

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
        setIsBack(false); // Set isBack to false when clicking on "View Graph"
        setShowExportOptions(false); // Hide the export options
        setTableStatus(!tableStatus);
        setFilterName('Customers'); // Set the filter name for display
    };

    const handleViewTable = () => {
        let dataToShow = [];

        switch (alignment) {
            case 'Name':
                dataToShow = [
                    {
                        '#': 1,
                        'CustomerName': 'Existing Customers',
                        'Total Count': chartByName.existingCustomerCount,
                    },
                    {
                        '#': 2,
                        'CustomerName': 'New Customers',
                        'Total Count': chartByName.newCustomerCount,
                    },
                ];
                break;
            case 'Mobile':
                dataToShow = [
                    {
                        '#': 1,
                        'CustomerName': 'Existing Customers',
                        'Total Count': chartByMobile.existingCustomerCount,
                    },
                    {
                        '#': 2,
                        'CustomerName': 'New Customers',
                        'Total Count': chartByMobile.newCustomerCount,
                    },
                ];
                break;
            case 'Vehicle':
                dataToShow = [
                    {
                        '#': 1,
                        'CustomerName': 'Existing Customers',
                        'Total Count': chartByVehicle.existingCustomerCount,
                    },
                    {
                        '#': 2,
                        'CustomerName': 'New Customers',
                        'Total Count': chartByVehicle.newCustomerCount,
                    },
                ];
                break;
            default:
                return;
        }

        setTableData(dataToShow);
        setTableStatus(true);
        setShowExportOptions(false)
    };

    const startDate = formatDate(selectedRange[0]);
    const endDate = formatDate(selectedRange[1]);


    return (
        <>
            <div
                className={`${css.chartContainer} ${themeMode === "dark" ? css.darkMode : css.lightMode
                    }`}
            ><ToastContainer
                    position="top-center"
                    theme={themeMode}
                />

                <div className="container-fluid" >
                    <div className="d-flex w-100 g-0 align-items-center justify-content-between">

                        {isBack ? (
                            <div title="Previous" className={css.resetButtonContainer}>
                                <button title="Previous" className={`btn btn-primary mx-1 ${window.innerWidth < 500 ? 'btn-sm' : ''} shadow border-2 border-white`} onClick={handlePrevious}>
                                    <FaAngleLeft style={{ fontSize: "1rem" }} />
                                </button>
                            </div>

                        ) : null}



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
                                            <FaChartPie style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
                                            <span>{t("View Graph")}</span>
                                        </div>}
                                    <div className={css.exportOption} onClick={!isBack ? exportToExcel : exportToExcel2}>
                                        <FaFileExcel style={{ fontSize: "1.1rem", color: "green" }} />
                                        <span>{t("Export to Excel")}</span>
                                    </div>
                                    <div className={css.exportOption} onClick={!isBack ? exportToPDF : exportToPDF2}>
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
             
                {(tableData.reduce((total, item) => total + item['Total Count'], 0) == 0) && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
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
                        onEvents={{
                            click: handleGraphClick,
                        }}
                    />
                ) : (
                    <div className="container-fluid mt-2 table-responsive" style={{ height: "290px" }}>
                        <table className={`table ${themeMode == 'dark' ? 'table-dark' : ''}`}>
                            <thead>
                                <tr>
                                    <th colSpan="3" style={{ textAlign: "center" }}>
                                        {t("Period")}: {startDate} {t("to")} {endDate}
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">
                                        {isBack === true ?
                                            alignment === "Name"
                                                ? t("Customer Name")
                                                : alignment === "Mobile"
                                                    ? t("Mobile No")
                                                    : t("Vehicle No")
                                            : t('Customer Type')}
                                    </th>
                                    <th scope="col">{isBack == true ? t("Count") : t("Total Count")}</th>

                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td> {isBack === true
                                            ? alignment === 'Name'
                                                ? item.CustomerName
                                                : alignment === 'Mobile'
                                                    ? item.MobileNo
                                                    : item.VehicleNo
                                            : item['CustomerName']}</td>
                                        <td>{item['Total Count']}</td>
                                    </tr>
                                ))}
                                {/* Render the Total row */}
                                {tableData.length > 0 && (
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{t("Total")}</td>
                                        <td>
                                            {tableData.reduce((total, item) => total + item['Total Count'], 0)}
                                        </td>
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

export default NewExCustomer;