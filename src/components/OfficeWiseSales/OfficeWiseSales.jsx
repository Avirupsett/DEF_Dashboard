import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";
import 'jspdf-autotable';
import css from './OfficeWiseSales.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn, FaAngleLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';

const OfficeWiseSales = ({
    echarts, ReactECharts,
    themeMode,
    selectedRange,
    selectedOffice,
    isAdmin,
    showGraph,
    alldata,
    officeName,
    isLoading
}) => {

    // const staticData={
    //     "graph3": {
    //         "top5": [
    //           {
    //             "officeId": "A78599E0-A1E1-4B3B-183F-08DAF95AD4EF",
    //             "officeName": "Badhalganj Pump",
    //             "total": 457629.4,
    //             "quantity": 7657.09
    //           },
    //           {
    //             "officeId": "E2F1F785-6E62-4ED0-1840-08DAF95AD4EF",
    //             "officeName": "Kaptanganj Pump",
    //             "total": 337218.64,
    //             "quantity": 5766.07
    //           },
    //           {
    //             "officeId": "06D5DDA0-6834-4EA1-183D-08DAF95AD4EF",
    //             "officeName": "Phoolpur Pump",
    //             "total": 331100.8,
    //             "quantity": 5579.49
    //           },
    //           {
    //             "officeId": "55E0F82C-ED3B-40E0-183E-08DAF95AD4EF",
    //             "officeName": "Latghat Pump",
    //             "total": 268419.76,
    //             "quantity": 4474.19
    //           },
    //           {
    //             "officeId": "3B66922C-791C-427E-A472-08DB18DC8D10",
    //             "officeName": "Faizabad Pump",
    //             "total": 153846,
    //             "quantity": 2687.8
    //           }
    //         ],
    //         "bottom5": [
    //           {
    //             "officeId": "8982D3D1-6F30-4D08-0B5B-08DBA781DEDC",
    //             "officeName": "Oilman Filter",
    //             "total": 480,
    //             "quantity": 8
    //           },
    //           {
    //             "officeId": "2D2F6436-61DD-42EA-0B5A-08DBA781DEDC",
    //             "officeName": "Dev Wholesale",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "289694A9-A819-4B52-325A-08DBA6FE7D8E",
    //             "officeName": "Test Pump1",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "86911F3F-0781-4032-0B57-08DBA781DEDC",
    //             "officeName": "Retail 3 Avirup",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "87B5D53F-D7A8-4AC9-A6AF-08DB7457BA8D",
    //             "officeName": "MUKUND UREA PUMP",
    //             "total": 165,
    //             "quantity": 3
    //           }
    //         ],
    //         "top10": [
    //           {
    //             "officeId": "A78599E0-A1E1-4B3B-183F-08DAF95AD4EF",
    //             "officeName": "Badhalganj Pump",
    //             "total": 457629.4,
    //             "quantity": 7657.09
    //           },
    //           {
    //             "officeId": "E2F1F785-6E62-4ED0-1840-08DAF95AD4EF",
    //             "officeName": "Kaptanganj Pump",
    //             "total": 337218.64,
    //             "quantity": 5766.07
    //           },
    //           {
    //             "officeId": "06D5DDA0-6834-4EA1-183D-08DAF95AD4EF",
    //             "officeName": "Phoolpur Pump",
    //             "total": 331100.8,
    //             "quantity": 5579.49
    //           },
    //           {
    //             "officeId": "55E0F82C-ED3B-40E0-183E-08DAF95AD4EF",
    //             "officeName": "Latghat Pump",
    //             "total": 268419.76,
    //             "quantity": 4474.19
    //           },
    //           {
    //             "officeId": "3B66922C-791C-427E-A472-08DB18DC8D10",
    //             "officeName": "Faizabad Pump",
    //             "total": 153846,
    //             "quantity": 2687.8
    //           },
    //           {
    //             "officeId": "61F7473C-D9B8-40CA-4C71-08DB2523436A",
    //             "officeName": "Kaptanganj-2 Pump",
    //             "total": 90541.94,
    //             "quantity": 1617.81
    //           },
    //           {
    //             "officeId": "19F34F04-D370-4A80-A474-08DB18DC8D10",
    //             "officeName": "Mohammedpur Pump",
    //             "total": 69113.8,
    //             "quantity": 1167.83
    //           },
    //           {
    //             "officeId": "2D09FBA4-95A8-412D-A471-08DB18DC8D10",
    //             "officeName": "Samaria, Tanda Pump",
    //             "total": 65798.58,
    //             "quantity": 1173.6
    //           },
    //           {
    //             "officeId": "23496355-D87A-4E44-A473-08DB18DC8D10",
    //             "officeName": "Ukraora Pump",
    //             "total": 46500,
    //             "quantity": 775
    //           },
    //           {
    //             "officeId": "47CAE688-8D29-4FDE-8A90-08DB16119D3F",
    //             "officeName": "Mazgawa",
    //             "total": 44093,
    //             "quantity": 735.57
    //           }
    //         ],
    //         "bottom10": [
    //           {
    //             "officeId": "23D60098-7D4D-40F1-A6A9-08DB7457BA8D",
    //             "officeName": "DIVOL DAAFI",
    //             "total": 21435.4,
    //             "quantity": 389.02
    //           },
    //           {
    //             "officeId": "FE92A819-C945-407E-C46E-08DB5C470D8B",
    //             "officeName": "Umraha Maharaja Pump",
    //             "total": 7940,
    //             "quantity": 144
    //           },
    //           {
    //             "officeId": "788AB696-9F12-40A9-0B5C-08DBA781DEDC",
    //             "officeName": "BBBA4",
    //             "total": 2700,
    //             "quantity": 45
    //           },
    //           {
    //             "officeId": "823A12BF-5554-49A0-0B5D-08DBA781DEDC",
    //             "officeName": "Suraj Ent",
    //             "total": 1240,
    //             "quantity": 20
    //           },
    //           {
    //             "officeId": "D5CDA415-8955-4816-775D-08DB46684854",
    //             "officeName": "Ashok Urea filling station",
    //             "total": 882,
    //             "quantity": 14
    //           },
    //           {
    //             "officeId": "8982D3D1-6F30-4D08-0B5B-08DBA781DEDC",
    //             "officeName": "Oilman Filter",
    //             "total": 480,
    //             "quantity": 8
    //           },
    //           {
    //             "officeId": "2D2F6436-61DD-42EA-0B5A-08DBA781DEDC",
    //             "officeName": "Dev Wholesale",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "289694A9-A819-4B52-325A-08DBA6FE7D8E",
    //             "officeName": "Test Pump1",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "86911F3F-0781-4032-0B57-08DBA781DEDC",
    //             "officeName": "Retail 3 Avirup",
    //             "total": 300,
    //             "quantity": 5
    //           },
    //           {
    //             "officeId": "87B5D53F-D7A8-4AC9-A6AF-08DB7457BA8D",
    //             "officeName": "MUKUND UREA PUMP",
    //             "total": 165,
    //             "quantity": 3
    //           }
    //         ]
    //       }
    // }
    const [chartData, setChartData] = useState(alldata?.top5)
    const [showExportOptions, setShowExportOptions] = useState(false);
    const iconContainerRef = useRef(null);
    const exportOptionsRef = useRef(null);
    const legendButtonRef = useRef(null);

    const { t } = useTranslation();



    const [showLegend, setShowLegend] = useState(false);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [tableStatus, setTableStatus] = useState(false)
 
    const [topSelect, setTopSelect] = useState("Top5")

  


    useEffect(() => {
        setTableStatus(!showGraph)

    }, [showGraph])

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
    useEffect(()=>{
        if(topSelect==="Top5"){
            setChartData(alldata?.top5)
        }
        else if(topSelect==="Top10"){
            setChartData(alldata?.top10)
        }
        else if(topSelect==="Bottom5"){
            setChartData(alldata?.bottom5)
        }
        else if(topSelect==="Bottom10"){
            setChartData(alldata?.bottom10)
        }
    },[selectedRange,alldata])



    const option = {
        title: {
            textStyle: {
                color: themeMode === "dark" ? "#ffffff" : "#000000",
                fontSize: window.innerWidth <= 768 ? 18 : 25,
            },
        },
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize: window.innerWidth <= 768 ? 10 : 14,
            },
        },

        legend: {
            data: [t('Quantity'), t('Sales')],
            bottom: 0,
            textStyle: {
                color: themeMode === "dark" ? "#ffffff" : "#000000",
                fontSize: window.innerWidth <= 768 ? 10 : 12,
            }
        },
        grid: {
            left: window.innerWidth <= 768 ? '10%' : '8%',
            right: window.innerWidth <= 768 ?"12%":"9%",
            top: "15%",
            bottom: window.innerWidth <= 768 ?"35%":"25%",
            containLabel: alldata && alldata.length > 0 ? true : false,
        },
        xAxis: [
            {
                type: 'category',
                data: chartData ?chartData.map((item) => item.officeName):[],
                axisPointer: {
                    type: 'shadow'
                },

                axisLine: {
                    lineStyle: {
                        color: themeMode === "dark" ? "#ffffff" : "#000000",
                    },
                },
                axisLabel: {
                    color: themeMode === "dark" ? "#ffffff" : "#000000",
                    rotate: 45,
                    fontSize: 11,
                    formatter: (value) => {
                        // Custom logic to make labels shorter, e.g., show only the first 10 characters
                        return value.length > 10 ? value.substring(0, 10) + "..." : value
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: t('Quantity'),
                min: 0,
                minInterval: 1,
                // max: 250,
                // interval: 5,
                // axisLabel: {
                //   formatter: '{value} ml'
                // },
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
                },
            },
            {
                type: 'value',
                name: t('Sales'),
                min: 0,
                // interval: 5000,
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
                },
                // axisLabel: {
                //   formatter: '{value} °C'
                // }
            }
        ],
        series: [

            {
                name: t('Quantity'),
                type: 'bar',
                barWidth: "35%",
                data:chartData?chartData.map((item) => item.quantity):[],
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#a6ffcb'
                        },
                        {
                            offset: 1,
                            color: '#1fa2ff'
                        }
                    ])
                },

            },

            {
                name: t('Sales'),
                type: 'line',
                yAxisIndex: 1,
                data: chartData ?chartData.map((item) => item.total):[],
                markPoint: {
                    data: chartData?chartData.map((item, index) => { return { "value": item.total >= 1000 ? parseInt(item.total / 1000) + "k" : item.total, xAxis: index, yAxis: item.total } }):[]
                }
            }
        ]
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
                    extraHeaderCell.value = `${t("Office Wise Sales")} (${officeName})`;
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
                    const headerRow = worksheet.addRow([t("#"), t("Office"), t("Sales"),t("Quantity")]);

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
                    chartData.forEach((item, index) => {
                        const row = worksheet.addRow([
                            index + 1,
                            item.officeName,
                            item.total,
                            item.quantity,
                        ]); // Add "₹" symbol before the totalSale value

                        // Align the serial number to the left
                        row.getCell(1).alignment = { horizontal: "left" };
                        row.getCell(2).alignment = { horizontal: "left" };
                        row.getCell(3).alignment = { horizontal: "right" };
                        row.getCell(4).alignment = { horizontal: "right" };
                    });


                    // const totalRow = worksheet.addRow(["", t("Total"), "", ""]);
                    // totalRow.font = {
                    //     bold: true,
                    //     color: { argb: "000000" }, // Black color
                    //     size: 12,
                    // };

                    // Calculate total values
                    // const totalSales = chartData.reduce((total, item) => total + item.total, 0);
                    // const totalVisit = chartData.reduce((total, item) => total + item.count, 0);

                    // Set total values in the total row
                    // const totalSalesCell = worksheet.getCell(`C${totalRow.number}`);
                    // totalSalesCell.value = `${totalVisit}`;
                    // totalSalesCell.alignment = { horizontal: "right" }; // Align to the right

                    // const totalExpenseCell = worksheet.getCell(`D${totalRow.number}`);
                    // totalExpenseCell.value = `₹ ${totalSales.toFixed(2)}`;
                    // totalExpenseCell.alignment = { horizontal: "right" };

                    // Generate a unique filename
                    const uniqueIdentifier = Date.now();
                    const fileName = `${uniqueIdentifier}OfficeWiseSales${topSelect}_${officeName}_${startDate}_${endDate}.xlsx`;

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
            const headers = [[t("#"), t("Office"), t("Sales"),t("Quantity")]];
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
            const summaryHeader = [[`${t("Office Wise Sales")} (${officeName})`]];
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
            let rows = chartData.map((item, index) => [
                index + 1,
                item.officeName,
                `₹ ${parseFloat(item.total)}`,
                `${parseFloat(item.quantity)}`,

            ]);


            // Calculate total values
            // const totalSales = chartData.reduce((total, item) => total + item.total, 0);
            // const totalVisit = chartData.reduce((total, item) => total + item.count, 0);

            // rows.push([
            //     ``,
            //     t("Total"),
            //     totalVisit,
            //     `₹ ${totalSales.toFixed(2)}`,
            // ]);

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
            const fileName = `${uniqueIdentifier}OfficeWiseSales${topSelect}_${officeName}_${startDate}_${endDate}.pdf`;

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

    const handleSelect=(val)=>{
        if(val==="Top5"){
            setChartData(alldata?.top5)
        }
        else if(val==="Top10"){
            setChartData(alldata?.top10)
        }
        else if(val==="Bottom5"){
            setChartData(alldata?.bottom5)
        }
        else if(val==="Bottom10"){
            setChartData(alldata?.bottom10)
        }
        setTopSelect(val)
    }




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

    //   useEffect(() => {
    //     handleChangeTop(topSelect)

    //   }, [alignment, topSelect, chartByName, chartByMobile, chartByVehicle])




    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    })


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
                        <div className='d-flex align-items-center'>
     
                           
                            <ThemeProvider theme={theme}>


                                <FormControl sx={{ mx: 1, mt: 1, minWidth: 100 }} size="small">
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        displayEmpty
                                        value={topSelect}
                                        style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}
                                        onChange={(e) => { handleSelect(e.target.value) }}

                                    >
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Top5"}>{t('Top')} 5</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Top10"}>{t('Top')} 10</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Bottom5"}>{t('Bottom')} 5</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Bottom10"}>{t('Bottom')} 10</MenuItem>
                                    </Select>
                                </FormControl>
                            </ThemeProvider>
                        </div>
                            <div className={`fw-bold me-2 fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                                }`}>{t("Office Wise Sales")}</div>

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
                                            <FaChartColumn style={{ fontSize: "1.1rem", color: "#6c3fb5" }} />
                                            <span>{t("View Graph")}</span>
                                        </div>}
                                    <div className={css.exportOption} onClick={ exportToExcel }>
                                        <FaFileExcel style={{ fontSize: "1.1rem", color: "green" }} />
                                        <span>{t("Export to Excel")}</span>
                                    </div>
                                    <div className={css.exportOption} onClick={ exportToPDF }>
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
               
                {chartData && chartData.length == 0 && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
                    {t("No Data Found")}
                </div> : ''}

                {!tableStatus ? <ReactECharts
                    key={chartData}
                    option={option}
                    style={{
                        // marginTop: window.innerWidth <= 1496 ? "-8%" : "-6%",
                        height:  "350px" ,
                        width: "100%",
                        maxWidth: "2300px",
                    }}

                    className={css.piechart}
                // className={themeMode === "dark" ? css.darkMode : css.lightMode}
                /> : <div className="container-fluid mt-2 table-responsive" style={{ height: "334px" }}>
                    <table className={`table  ${themeMode == 'dark' ? 'table-dark' : ''}`}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t("Office")}</th>
                                <th scope="col">{t("Sales")}(₹)</th>
                                <th scope="col">{t("Quantity")}</th>
                            </tr> 
                        </thead>
                        <tbody>
                          {chartData.map((item, index) => {
                                return (
                                    <tr key={item.officeName}>
                                        <th scope="row">{ index + 1}</th>
                                        <td>{item.officeName}</td>
                                        <td>{parseFloat(item.total).toFixed(2)}</td>
                                        <td>{parseFloat(item.quantity).toFixed(2)}</td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>

                }


            </div>
        </>
    );
};

export default OfficeWiseSales;
