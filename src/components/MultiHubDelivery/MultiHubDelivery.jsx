import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";
import 'jspdf-autotable';
import css from './MultiHubDelivery.module.css';
import { FaFileExcel, FaXmark, FaFilePdf, FaListUl, FaTable, FaChartColumn, FaAngleLeft } from "react-icons/fa6";
import logo from "/assets/logo.png";
import { useTranslation } from 'react-i18next';
import loading from '/assets/loading.gif';
import font from '/assets/NotoSansBengali-VariableFont_wdth,wght.ttf'
import font2 from '/assets/NotoSansDevanagari-VariableFont_wdth,wght.ttf'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, createTheme } from '@mui/material';

const MultiHubDelivery = ({
    echarts, ReactECharts,
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
    setIsDateRangeActive,
    hubData
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


    // Your static data
    // const hubData =
    //     [{
    //         'HubName': 'GUJARAT HUB MON',
    //         'Ahmedabad International Airport T2': 1,
    //         'Barkol': 0,
    //         'CHINTAN ENGINEERS': 1,
    //         'Dev Test Pump2': 0,
    //         'Kuna': 0,
    //         'Maritus': 0,
    //         'Mohammedpur Pump': 0,
    //         'New Pump': 0,
    //         'Oilman Filter Technologies': 1,
    //         'Samaria, Tanda Pump': 0,
    //         'TATA TRUCK UREA PUMP': 0,
    //         'Test Pump1': 0
    //     },
    //     {
    //         'HubName': 'Gujarat Hub4',
    //         'Ahmedabad International Airport T2': 0,
    //         'Barkol': 1,
    //         'CHINTAN ENGINEERS': 0,
    //         'Dev Test Pump2': 0,
    //         'Kuna': 1,
    //         'Maritus': 1,
    //         'Mohammedpur Pump': 0,
    //         'New Pump': 0,
    //         'Oilman Filter Technologies': 0,
    //         'Samaria, Tanda Pump': 0,
    //         'TATA TRUCK UREA PUMP': 1,
    //         'Test Pump1': 0
    //     },
    //     {
    //         'HubName': 'Kolkata',
    //         'Ahmedabad International Airport T2': 0,
    //         'Barkol': 0,
    //         'CHINTAN ENGINEERS': 0,
    //         'Dev Test Pump2': 1,
    //         'Kuna': 0,
    //         'Maritus': 0,
    //         'Mohammedpur Pump': 0,
    //         'New Pump': 1,
    //         'Oilman Filter Technologies': 0,
    //         'Samaria, Tanda Pump': 0,
    //         'TATA TRUCK UREA PUMP': 0,
    //         'Test Pump1': 1
    //     },
    //     {
    //         'HubName': 'Varanasi',
    //         'Ahmedabad International Airport T2': 0,
    //         'Barkol': 0,
    //         'CHINTAN ENGINEERS': 0,
    //         'Dev Test Pump2': 0,
    //         'Kuna': 0,
    //         'Maritus': 0,
    //         'Mohammedpur Pump': 1,
    //         'New Pump': 0,
    //         'Oilman Filter Technologies': 0,
    //         'Samaria, Tanda Pump': 1,
    //         'TATA TRUCK UREA PUMP': 0,
    //         'Test Pump1': 0
    //     }];




    useEffect(() => {
        setTableStatus(!showGraph)

    }, [showGraph])



    // Extract unique OfficeNames for legend
    const officeNames =hubData? Array.from(new Set(hubData.flatMap(item => Object.keys(item).slice(1)))):[];

    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                let tooltipHtml = `<div style="text-align: left;"><strong>${params[0].name}</strong><br/>`;
                params.forEach((param) => {
                    if (param.value !== 0) {
                        tooltipHtml += `<span style="display:inline-block; margin-right:5px; border-radius: 50%; width: 8px; height: 8px; background-color: ${param.color};"></span>${param.seriesName}: <strong>${param.value}</strong><br/>`;
                    }
                });
                tooltipHtml += '</div>';
                return tooltipHtml;
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
        grid: {
            left: '7%',
            right: '4%',
            top: '10%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: hubData?hubData.map(item => item.HubName):[],
            axisLabel: {
                rotate: 45,
                formatter: function (params) {
                    return params.length > 10 ? params.substring(0, 10) + "..." : params;
                }
            },
        },
        yAxis: {
            type: 'value',
            name: 'DeliveryCount',
        },
        series: officeNames.map(officeName => ({
            name: officeName,
            type: 'bar',
            stack: 'stackedBar',
            data: hubData.map(item => item[officeName]),
            itemStyle: {
                // color: officeColors[officeName], // Assign a color to each OfficeName
                borderRadius: [5, 5, 5, 5],
            },
        })),
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
                    extraHeaderCell.value = `${t("Hub Deliveries Distribution")}`;
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
                    const headerRow = worksheet.addRow([t("#"), t("Hub Name"), t("Office")]);

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
                    hubData.forEach((item, index) => {

                            const row = worksheet.addRow([
                                index + 1,
                                item.HubName,
                                Object.keys(item).map(key => {if(key!=="HubName"&& item[key]>0) { return key}}).toString().replace("null,","").replace(/[,]{2,}/g, ',').replace(/^[,]/g, '').replace(/[,]$/g, '')
                            ]); // Add "₹" symbol before the totalSale value

                            // Align the serial number to the left
                            row.getCell(1).alignment = { horizontal: "left" };
                            row.getCell(2).alignment = { horizontal: "left" };
                            row.getCell(3).alignment = { horizontal: "left" };
                            row.getCell(4).alignment = { horizontal: "right" };
                        
                    });


                    // const totalRow = worksheet.addRow(["", t("Total"), "", ""]);
                    // totalRow.font = {
                    //     bold: true,
                    //     color: { argb: "000000" }, // Black color
                    //     size: 12,
                    // };

                    // Calculate total values
                    // const totalSales = sellData.reduce((total, item) => total + parseFloat(item.totalSale), 0);


                    // const totalExpenseCell = worksheet.getCell(`D${totalRow.number}`);
                    // totalExpenseCell.value = `₹ ${totalSales.toFixed(2)}`;
                    // totalExpenseCell.alignment = { horizontal: "right" };

                    // Generate a unique filename
                    const uniqueIdentifier = Date.now();
                    const fileName = `${uniqueIdentifier}hub_wise_summary_${officeName}_${startDate}_${endDate}.xlsx`;

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
    }


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
            const headers = [[t("#"), t("Hub Name"), t("Office")]];
            const columnStyles = {
                0: { halign: "center" },
                1: { halign: "center" },
                2: { halign: "left" },
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
            const summaryHeader = [[`${t("Hub Deliveries Distribution")}`]];
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
            let rows = hubData.map((item, index) => {
                return[
                    index + 1,
                    item.HubName,
                    Object.keys(item).map(key => {if(key!=="HubName"&& item[key]>0) { return key}}).toString().replace(/[,]{2,}/g, ',').replace(/^[,]/g, '').replace(/[,]$/g, '')
                ]
           });


            // Calculate total values
            //   const totalSales = sellData.reduce((total, item) => total + parseFloat(item.totalSale), 0);
            // const totalQty = sellData.reduce((total, item) => total + item.totalQty, 0);

            //   rows.push([
            //     ``,
            //     t("Total"),
            //     ``,
            //     `₹ ${totalSales.toFixed(2)}`,
            //   ]);

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
            const fileName = `${uniqueIdentifier}hub_wise_summary_${officeName}_${startDate}_${endDate}.pdf`;

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
    }


    const theme = createTheme({
        typography: {
            button: {
                textTransform: 'none'
            }
        }
    })
    const toggleLegend = () => {
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
                            onClick={toggleLegend}
                        >
                            <img
                                src={import.meta.env.VITE_LEGEND_LOGO}
                                alt="Code Block Icon"
                                className={css.codeBlockIcon}
                                title="Legends"
                                style={{
                                    filter: showLegend ? 'opacity(0.4)' : 'opacity(1)',
                                    transition: 'all .25s ease-in-out',
                                }}
                            />
                        </button>
                        <div className={`fw-bold noselect me-2 fs-${window.innerWidth <= 768 ? 7 : 5} ${themeMode === "dark" ? css.darkMode : css.lightMode
                }`}>{t("Hub Deliveries Distribution")}</div>


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
                {(hubData && hubData.length == 0) && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
                    {t("No Data Found")}
                </div> : ''}

                {!tableStatus ? <ReactECharts
                    key={chartData.length}
                    option={option}
                    // notMerge={merge}
                    style={{
                        // marginTop: window.innerWidth <= 1496 ? "-8%" : "-6%",
                        height: "341px",
                        width: "100%",
                        maxWidth: "2300px",
                    }}
                    className={css.piechart}

                // className={themeMode === "dark" ? css.darkMode : css.lightMode}
                /> : <div className="container-fluid mt-2 table-responsive" style={{ height: "333px" }}>
                    <table className={`table  ${themeMode == 'dark' ? 'table-dark' : ''}`}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t("Hub Name")}</th>
                                <th scope="col">{t("Office")}</th>
                            </tr>
                        </thead>
                        <tbody>

                            {hubData.map((item, index) => {

                                return (<tr key={`${item.HubName}`}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.HubName}</td>
                                    <td>{Object.keys(item).map(key => {if(key!=="HubName"&& item[key]!==0) { return key+", "}})}</td>
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

export default MultiHubDelivery;