import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from "axios";
import 'jspdf-autotable';
import css from './SalesProductStacked.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as echarts from 'echarts';
import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';

const SalesProductStacked = ({
    themeMode,
    selectedRange,
    selectedOffice,
    showGraph,
    isAdmin,
    alldata,
    officeName,
    isLoading,
    setSelectedRange,
    isDateRangeActive,
    setIsDateRangeActive
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
    const [tableStatus, setTableStatus] = useState(false)
    const [alignment, setAlignment] = useState('Sales (Day Wise)');
    const [tableDataByMonth, setTableDataByMonth] = useState([])
    const [tableDataByDate, setTableDataByDate] = useState([])
    const [tableDataByYear, setTableDataByYear] = useState([])
    const [allDates, setAllDates] = useState([])
    const [allMonths, setAllMonths] = useState([])
    const [allYears, setAllYears] = useState([])
    const [daywiseSalesList, setDaywiseSalesList] = useState({})
    const [merge, setMerge] = useState(true)


    useEffect(() => {

        // const startDate = new Date(selectedRange[0]);
        // const endDate = new Date(selectedRange[1]);

        if (alldata.graph2) {
            const data = alldata.graph2
            setMerge(true)
            let daywiseSales = {};
            let dates = []


            // Extract all unique product IDs
            let productIds = Array.from(new Set(data.flatMap(entry => entry.lstproduct.map(product => product.productId))));

            // Get the unique years and months present in the data
            let years = Array.from(new Set(data.map(entry => entry.requestedDate.split('-'))));
            const months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];

            // Initialize daywiseSales object with zero sales for all products and dates using map
            productIds.map(productId => {
                daywiseSales[productId] = {
                    productName: '',
                    color: '',
                    daySales: {},
                    monthSales: {},
                    yearSales: {}
                };
                years.map(year => {
                    daywiseSales[productId].yearSales[year[0]] = '';
                    daywiseSales[productId].monthSales[year[0]] = daywiseSales[productId].monthSales[year[0]] || {};
                    daywiseSales[productId].monthSales[year[0]][months[parseInt(year[1]) - 1]] = '';

                });
                data.map(entry => {
                    daywiseSales[productId].daySales[entry.requestedDate] = '';

                });
            });

            // Fill in actual sales data from the given data array using map
            data.map(entry => {
                dates.push(entry.requestedDate)
                const requestedDate = entry.requestedDate;
                const productList = entry.lstproduct;

                productList.map(product => {
                    const productColor = product.color;
                    const productId = product.productId;
                    const productName = product.productName;
                    const totalSales = product.totalSales;

                    daywiseSales[productId].productName = productName;
                    daywiseSales[productId].color = productColor;
                    daywiseSales[productId].daySales[requestedDate] = (totalSales).toFixed(2);

                    const [year, month] = requestedDate.split('-');
                    const monthName = new Date(requestedDate + 'T00:00:00').toLocaleString('en-us', { month: 'short' });

                    // Initialize monthwise sales if not already done
                    if (!daywiseSales[productId].monthSales[year]) {
                        daywiseSales[productId].monthSales[year] = {};
                    }

                    if (!daywiseSales[productId].monthSales[year][monthName]) {
                        daywiseSales[productId].monthSales[year][monthName] = 0;
                    }

                    // Add the daily sales to the monthwise total
                    daywiseSales[productId].monthSales[year][monthName] += totalSales;

                    // Initialize yearwise sales if not already done
                    if (!daywiseSales[productId].yearSales[year]) {
                        daywiseSales[productId].yearSales[year] = 0;
                    }

                    // Add the daily sales to the yearwise total
                    daywiseSales[productId].yearSales[year] += totalSales;
                });
            })
            // Usage example
            // console.log(Object.values(daywiseSales))
            if (Object.values(daywiseSales).length > 0) {
                let yearCount = Object.keys(Object.values(daywiseSales)[0].yearSales).map(year => parseInt(year))
                let monthCount = Object.keys(Object.values(daywiseSales)[0].monthSales).flatMap(year => {
                    return Object.keys(Object.values(daywiseSales)[0].monthSales[year]).map(month => `${month} ${year}`);
                })
                setAllMonths(monthCount)
                setAllYears(yearCount)

                if (monthCount.length >= 12 || yearCount.length > 1) {
                    if (isDateRangeActive == true) {
                        setAlignment("Sales (Year Wise)")
                    }
                    else if (alignment == "Sales (Day Wise)") {
                        setAlignment("Sales (Year Wise)")
                    }
                }
                else if (monthCount.length > 1) {
                    if (isDateRangeActive == true) {
                        setAlignment("Sales (Month Wise)")
                    }
                    else if (alignment == "Sales (Day Wise)") {
                        setAlignment("Sales (Month Wise)")
                    }
                }
            }
            else {
                setAllMonths([])
                setAllYears([])
            }
            setDaywiseSalesList(daywiseSales);
            setAllDates(dates)

            const transformedDataDate = data.flatMap((item, index) => {
                return (
                    item.lstproduct.map((product) => {
                        return (
                            {
                                requestedDate: formatDate(item.requestedDate),
                                totalSales: parseFloat(product.totalSales),
                                productName: product.productName
                            }
                        )
                    })
                )
            })
            setTableDataByDate([...transformedDataDate, { "requestedDate": "Total", "productName": "", "totalSales": transformedDataDate.reduce((prev, c) => prev + c.totalSales, 0) }])
            let monthSales = (Object.values(daywiseSales)).map((item) => { return { "monthSales": item.monthSales, "productName": item.productName } })

            const transformedDataMonth = monthSales.flatMap(item => {
                const productName = item.productName;
                const year = Object.keys(item.monthSales);
                // const monthSales = item.monthSales[subyear];
                return year.flatMap((subyear) => {


                    return Object.keys(item.monthSales[subyear]).map(month => {

                        return {
                            requestedDate: `${month} ${subyear}`,
                            totalSales: item.monthSales[subyear][month],
                            productName: productName
                        };

                    });
                })
            });

            let filteredDataMonth = transformedDataMonth.filter(item => item.totalSales > 0);
            filteredDataMonth.sort((a, b) => {
                const dateA = new Date(a.requestedDate);
                const dateB = new Date(b.requestedDate);
                return dateA - dateB;
            });
            setTableDataByMonth([...filteredDataMonth, { "requestedDate": "Total", "productName": "", "totalSales": filteredDataMonth.reduce((prev, c) => prev + c.totalSales, 0) }])

            const transformedDataYear = Object.values(daywiseSales).flatMap(item => Object.entries(item.yearSales).map((subitem) => { return { "requestedDate": subitem[0], "productName": item.productName, "totalSales": subitem[1] } }))
            const filteredDataYear = transformedDataYear.filter(item => item.totalSales > 0);

            setTableDataByYear([...filteredDataYear, { "requestedDate": "Total", "productName": "", "totalSales": filteredDataYear.reduce((prev, c) => prev + c.totalSales, 0) }])
            if (alignment === 'Sales (Day Wise)') {
                setTableData([...transformedDataDate, { "requestedDate": "Total", "productName": "", "totalSales": transformedDataDate.reduce((prev, c) => prev + c.totalSales, 0) }])
            }
            else if (alignment === 'Sales (Month Wise)') {
                setTableData([...filteredDataMonth, { "requestedDate": "Total", "productName": "", "totalSales": filteredDataMonth.reduce((prev, c) => prev + c.totalSales, 0) }])
            }
            else if (alignment === 'Sales (Year Wise)') {
                setTableData([...filteredDataYear, { "requestedDate": "Total", "productName": "", "totalSales": filteredDataYear.reduce((prev, c) => prev + c.totalSales, 0) }])
            }
        }

    }, [alldata]);

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

    //   const option = {
    //     title: {
    //       textStyle: {
    //         color: themeMode === "dark" ? "#ffffff" : "#000000",
    //         fontSize: window.innerWidth <= 768 ? 18 : 25,
    //       },
    //     },
    //     tooltip: {
    //       trigger: 'axis',
    //       textStyle: {
    //         fontSize: window.innerWidth <= 768 ? 10 : 14,
    //       },
    //     },

    //     legend: {
    //       data: [t('Visit'), t('Sales')],
    //       bottom: 0,
    //       textStyle: {
    //         color: themeMode === "dark" ? "#ffffff" : "#000000",
    //         fontSize: window.innerWidth <= 768 ? 10 : 12,
    //       }
    //     },
    //     grid: {
    //       left: window.innerWidth <= 768 ? '9%' : '4%',
    //       right: "4%",
    //       top: "15%",
    //       bottom: "10%",
    //       containLabel: chartData.length > 0 ? true : false,
    //     },
    //     xAxis: [
    //       {
    //         type: 'category',
    //         data: chartData.map((item) => item.filterName),
    //         axisPointer: {
    //           type: 'shadow'
    //         },

    //         axisLine: {
    //           lineStyle: {
    //             color: themeMode === "dark" ? "#ffffff" : "#000000",
    //           },
    //         },
    //         axisLabel: {
    //           color: themeMode === "dark" ? "#ffffff" : "#000000",
    //           rotate: 45,
    //           fontSize: 11,
    //           formatter: (value) => {
    //             // Custom logic to make labels shorter, e.g., show only the first 10 characters
    //             return value.length > 10 ? value.substring(0, 10) + "..." : value
    //           },
    //         },
    //       }
    //     ],
    //     yAxis: [
    //       {
    //         type: 'value',
    //         name: t('Visit'),
    //         min: 0,
    //         minInterval:1,
    //         // max: 250,
    //         // interval: 5,
    //         // axisLabel: {
    //         //   formatter: '{value} ml'
    //         // },
    //         axisLine: {
    //           lineStyle: {
    //             color: themeMode === "dark" ? "#ffffff" : "#000000",
    //           },
    //         },
    //         axisLabel: {
    //           color: themeMode === "dark" ? "#ffffff" : "#000000",
    //         },
    //       },
    //       {
    //         type: 'value',
    //         name: t('Sales'),
    //         min: 0,
    //         // interval: 5000,
    //         axisLine: {
    //           lineStyle: {
    //             color: themeMode === "dark" ? "#ffffff" : "#000000",
    //           },
    //         },
    //         axisLabel: {
    //           color: themeMode === "dark" ? "#ffffff" : "#000000",
    //           formatter: (value) => {
    //             if (value >= 1000) {
    //               return (value / 1000) + "k";
    //             } else {
    //               return value;
    //             }
    //           },
    //         },
    //         // axisLabel: {
    //         //   formatter: '{value} °C'
    //         // }
    //       }
    //     ],
    //     series: [
    //       {
    //         name: t('Visit'),
    //         type: 'bar',
    //         barWidth: "35%",
    //         data: chartData.map((item) => item.count),
    //         itemStyle:{


    //             borderRadius:[10,10,0,0]

    //         }
    //       },

    //       {
    //         name: t('Sales'),
    //         type: 'line',
    //         yAxisIndex: 1,
    //         data: chartData.map((item) => item.total),
    //         markPoint: {
    //           data: chartData.map((item, index) => { return { "value": item.total >= 1000 ? parseInt(item.total / 1000) + "k" : item.total, xAxis: index, yAxis: item.total } })
    //         }
    //       }
    //     ]
    //   };
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
                label: {
                    formatter: function (params) {
                        return params[0].value[0] + "h"
                    }
                }
            }
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
        grid: {
            left: '3%',
            right: '4%',
            top: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            axisLabel: {
                hideOverlap: true,
                formatter: alignment === 'Sales (Day Wise)' ? '{d} {MMM}' : null,
                color: themeMode === "dark" ? "#ffffff" : "#000000",
            },
            type: alignment === 'Sales (Day Wise)' ? 'time' : 'category',
            axisPointer: {
                label: {
                    formatter: function (params) {
                        if (alignment === 'Sales (Day Wise)') {
                            let oT = new Date(params.value);
                            return formatDate(oT);
                        }
                        else
                            return params.value
                    },
                },
            },
            data: alignment === 'Sales (Day Wise)' ? allDates : alignment === 'Sales (Month Wise)' ? allMonths : allYears,
        },
        yAxis: {
            axisLabel: {
                color: themeMode === "dark" ? "#ffffff" : "#000000",
            },
            formatter: (value) => {
                if (value >= 10000) {
                    return (value / 1000) + "k";
                } else {
                    return value;
                }
            },
            type: 'value'
        },
        series:
            Object.values(daywiseSalesList).map(product => {
                return {
                    name: product.productName,
                    type: 'bar',
                    stack: 'total',
                    barWidth: "40%",
                    label: {
                        show: false
                    },
                    itemStyle: {
                        borderRadius: [5, 5, 5, 5],
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 1,
                                color: shadeColor(product.color, 40)
                            },
                            {
                                offset: 0,
                                color: shadeColor(product.color, 80)
                            }
                        ]),
                    },
                    // data: Object.entries(product.daySales)
                    data: alignment === 'Sales (Day Wise)' ? Object.entries(product.daySales) : alignment === 'Sales (Month Wise)' ? [].concat(...(Object.values(product.monthSales).map(yearData => Object.values(yearData).map(value => value ? parseFloat(value).toFixed(2) : value)))) : Object.values(product.yearSales).map((item) => item.toFixed(2))
                };
            })

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
        let dateMod = new Date(date)
        const year = dateMod.getFullYear();
        const month = String(dateMod.getMonth() + 1).padStart(2, "0");
        const day = String(dateMod.getDate()).padStart(2, "0");
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
                    extraHeaderCell.value = `${t("Products Summary Data")} (${officeName})`;
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
                    const headerRow = worksheet.addRow([t("#"), t("Dates"), t("Product Name"), t("Sales")]);

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
                    tableData.forEach((item, index) => {
                        if (index !== tableData.length - 1) {
                            const row = worksheet.addRow([
                                index + 1,
                                item.requestedDate,
                                item.productName,
                                item.totalSales.toFixed(2)
                            ]); // Add "₹" symbol before the totalSale value

                            // Align the serial number to the left
                            row.getCell(1).alignment = { horizontal: "left" };
                            row.getCell(2).alignment = { horizontal: "left" };
                            row.getCell(3).alignment = { horizontal: "right" };
                            row.getCell(4).alignment = { horizontal: "right" };
                        }
                        else {
                            const totalRow = worksheet.addRow(["", t("Total"), "", ""]);
                            totalRow.font = {
                                bold: true,
                                color: { argb: "000000" }, // Black color
                                size: 12,
                            };
                            const totalExpenseCell = worksheet.getCell(`D${totalRow.number}`);
                            totalExpenseCell.value = `₹ ${item.totalSales.toFixed(2)}`;
                            totalExpenseCell.alignment = { horizontal: "right" };

                        }
                    });



                    // Generate a unique filename
                    const uniqueIdentifier = Date.now();
                    const fileName = `${uniqueIdentifier}Products_Summary_by${alignment}_${officeName}_${startDate}_${endDate}.xlsx`;

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
            const headers = [[t("#"), t("Dates"), t("Product Name"), t("Sales")]];
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
            const summaryHeader = [[`${t("Products Summary Data")} (${officeName})`]];
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
            let rows = tableData.map((item, index) => [

                index + 1,
                item.requestedDate,
                item.productName,
                `₹ ${item.totalSales.toFixed(2)}`


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
            const fileName = `${uniqueIdentifier}Products_Summary_by${alignment}_${officeName}_${startDate}_${endDate}.pdf`;

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
        if (alignment === 'Sales (Day Wise)') {
            setTableData(tableDataByDate)
        }
        else if (alignment === 'Sales (Month Wise)') {
            setTableData(tableDataByMonth)
        }
        else if (alignment === 'Sales (Year Wise)') {
            setTableData(tableDataByYear)
        }
    };


    const handleChangeDropdown = (event) => {
        setAlignment(event.target.value);
        if (event.target.value === 'Sales (Day Wise)') {
            setTableData(tableDataByDate)
        }
        else if (event.target.value === 'Sales (Month Wise)') {
            setTableData(tableDataByMonth)
            if (isDateRangeActive === false) {
                const currentDateStart = new Date(selectedRange[0])
                const currentDateEnd = new Date(selectedRange[1])

                const startOfMonth = new Date(currentDateStart.getFullYear(), 0, 1);

                let endOfMonth;
                if (currentDateEnd.getFullYear() === new Date().getFullYear() && currentDateEnd.getMonth() > new Date().getMonth()) {
                    endOfMonth = new Date(currentDateEnd.getFullYear(), new Date().getMonth(), new Date().getDate());
                }
                else if (currentDateEnd.getFullYear() === new Date().getFullYear() && currentDateEnd.getMonth() <= new Date().getMonth()) {
                    endOfMonth = new Date(currentDateEnd.getFullYear(), new Date().getMonth(), new Date().getDate());
                }
                else {
                    endOfMonth = new Date(currentDateEnd.getFullYear(), 11, 31);
                }

                if (`${selectedRange[0].getFullYear()}-${selectedRange[0].getMonth() + 1}-${selectedRange[0].getDate()}` !==
                    `${startOfMonth.getFullYear()}-${startOfMonth.getMonth() + 1}-${startOfMonth.getDate()}` ||
                    `${selectedRange[1].getFullYear()}-${selectedRange[1].getMonth() + 1}-${selectedRange[1].getDate()}` !==
                    `${endOfMonth.getFullYear()}-${endOfMonth.getMonth() + 1}-${endOfMonth.getDate()}`
                ) {
                    setSelectedRange([startOfMonth, endOfMonth])
                }
            }

        }
        else if (event.target.value === 'Sales (Year Wise)') {
            setTableData(tableDataByYear)
            if (isDateRangeActive === false) {
                const currentDateStart = new Date(selectedRange[0])
                const currentDateEnd = new Date(selectedRange[1])

                const startOfMonth = new Date(currentDateStart.getFullYear(), 0, 1);

                let endOfMonth;
                if (currentDateEnd.getFullYear() === new Date().getFullYear()) {
                    endOfMonth = new Date(currentDateEnd.getFullYear(), new Date().getMonth(), new Date().getDate());
                } else {
                    endOfMonth = new Date(currentDateEnd.getFullYear(), 11, 31);
                }

                if (`${selectedRange[0].getFullYear()}-${selectedRange[0].getMonth() + 1}-${selectedRange[0].getDate()}` !==
                    `${startOfMonth.getFullYear()}-${startOfMonth.getMonth() + 1}-${startOfMonth.getDate()}` ||
                    `${selectedRange[1].getFullYear()}-${selectedRange[1].getMonth() + 1}-${selectedRange[1].getDate()}` !==
                    `${endOfMonth.getFullYear()}-${endOfMonth.getMonth() + 1}-${endOfMonth.getDate()}`
                ) {
                    setSelectedRange([startOfMonth, endOfMonth])
                }
            }
        }

    };

    const handleGraphClick = (params) => {
        // Check if the click event occurred on a valid data point

        if (params && params.data && params.dataIndex >= 0) {
            if (alignment === "Sales (Month Wise)") {

                const currentDate = new Date(allMonths[params.dataIndex])

                // Get the start of the month
                const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                setIsDateRangeActive(false)
                // Get the end of the month
                let endOfMonth;
                if (currentDate.getFullYear() === new Date().getFullYear() && currentDate.getMonth() === new Date().getMonth()) {
                    endOfMonth = new Date(currentDate.getFullYear(), new Date().getMonth(), new Date().getDate());
                } else {
                    endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
                }

                setSelectedRange([startOfMonth, endOfMonth])
                setAlignment("Sales (Day Wise)")

            }
            if (alignment === "Sales (Year Wise)") {
                // if(isDateRangeActive==true){
                setIsDateRangeActive(false)
                setAlignment("Sales (Month Wise)")
                // }
                // else{
                const currentDate = new Date(allMonths[params.dataIndex])
                // Get the start of the month
                const startOfMonth = new Date(currentDate.getFullYear(), 0, 1);
                // Get the end of the month
                let endOfMonth
                if (currentDate.getFullYear() === new Date().getFullYear()) {
                    endOfMonth = new Date(currentDate.getFullYear(), new Date().getMonth(), new Date().getDate());
                } else {
                    endOfMonth = new Date(currentDate.getFullYear() + 1, 0, 0);
                }
                if (`${selectedRange[0].getFullYear()}-${selectedRange[0].getMonth() + 1}-${selectedRange[0].getDate()}` !==
                    `${startOfMonth.getFullYear()}-${startOfMonth.getMonth() + 1}-${startOfMonth.getDate()}` ||
                    `${selectedRange[1].getFullYear()}-${selectedRange[1].getMonth() + 1}-${selectedRange[1].getDate()}` !==
                    `${endOfMonth.getFullYear()}-${endOfMonth.getMonth() + 1}-${endOfMonth.getDate()}`
                ) {
                    setSelectedRange([startOfMonth, endOfMonth])
                }
                // setAlignment("Sales (Month Wise)")
                // }
            }
            //   const clickedOfficeId = chartData[params.dataIndex].officeId;
        }
    }



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
                        <button
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
                        </button>
                        <div className='d-flex align-items-center'>
                            <div className={`fw-bold me-2 fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                                }`}>{t("")}</div>
                            <ThemeProvider theme={theme}>


                                <FormControl sx={{ mx: 1, mt: 1, minWidth: 190 }} size="small">
                                    <InputLabel id="demo-simple-select-helper-label" style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}>{t('Product Wise')}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        displayEmpty
                                        value={alignment}
                                        onChange={handleChangeDropdown}
                                        style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }}
                                        // onChange={handleChange}
                                        label={t("Product Wise")}
                                    >
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Sales (Day Wise)"}>{t("Sales (Day Wise)")}</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Sales (Month Wise)"}>{t("Sales (Month Wise)")}</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Sales (Year Wise)"}>{t("Sales (Year Wise)")}</MenuItem>
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
                                        <div className={css.exportOption} onClick={() => { setTableStatus(!tableStatus); setShowExportOptions(false) }}>
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
                {isLoading && (
                    <div className={css.loadingOverlay}>
                        <img src={loading} alt="Loading..." width={50} height={50} />
                    </div>
                )}
                {tableData.length == 1 && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
                    {t("No Data Found")}
                </div> : ''}

                {!tableStatus ? <ReactECharts
                    key={daywiseSalesList.length}
                    option={option}
                    notMerge={merge}
                    style={{
                        // marginTop: window.innerWidth <= 1496 ? "-8%" : "-6%",
                        height: "341px",
                        width: "100%",
                        maxWidth: "2300px",
                    }}
                    className={css.piechart}
                    onEvents={{
                        click: handleGraphClick,
                    }}
                // className={themeMode === "dark" ? css.darkMode : css.lightMode}
                /> : <div className="container-fluid mt-2 table-responsive" style={{ height: "333px" }}>
                    <table className={`table  ${themeMode == 'dark' ? 'table-dark' : ''}`}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t("Date")}</th>
                                <th scope="col">{t(alignment)}</th>
                                <th scope="col">{t("Sales")}(₹)</th>
                            </tr>
                        </thead>
                        <tbody>

                            {tableData.map((item, index) => {

                                return (<tr key={`${item.requestedDate} ${item.productName}`}>
                                    <th scope="row">{tableData.length - 1 === index ? '' : index + 1}</th>
                                    <td>{item.requestedDate}</td>
                                    <td>{item.productName}</td>
                                    <td>{parseFloat(item.totalSales).toFixed(2)}</td>
                                </tr>)
                            })
                            }

                        </tbody>
                    </table>
                </div>

                }


            </div>
        </>
    );
};

export default SalesProductStacked;
