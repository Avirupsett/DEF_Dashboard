import React, { useEffect, useState, useRef } from 'react';

import axios from "axios";
import 'jspdf-autotable';
import css from './CustomerRetention.module.css';
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





const CustomerRetention = ({
    echarts, ReactECharts,
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
    const [alignment, setAlignment] = useState('Daily');
    const [chartByName, setChartByName] = useState([])
    const [chartByMobile, setChartByMobile] = useState([])
    const [chartByVehicle, setChartByVehicle] = useState([])
    const [isBack, setIsBack] = useState(false)
    const [filterName, setFilterName] = useState("Customer Retention")






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

    useEffect(() => {
        // date difference in days
        const days = Math.round((new Date(selectedRange[1]).getTime() - new Date(selectedRange[0]).getTime()) / (1000 * 60 * 60 * 24));
        if(alldata.graph4){
        if (days <= 31) {
            setAlignment('Daily')
            setChartData(alldata.graph4.DaywiseRecurringCustomer)
        }
        else {
            setAlignment('Monthly')
            setChartData(alldata.graph4.MonthlyRecurringCustomer)
        }
        }

    }, [ alldata,selectedRange])
    const option = {
        tooltip: {
            position: 'top'
        },
        grid: {
            height: window.innerWidth > 768 ? '75%' : '65%',
            left: window.innerWidth > 768 ? '15%' : '25%',
            bottom: window.innerWidth > 768 ? '20%' : '29%',
        },
        xAxis: {
            type: 'category',
            data:chartData? chartData.cohort_index:[],
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: chartData?chartData.formatted_dates:[],
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            // bottom: '15%'
        },
        series: [
            {
                // name: 'Punch Card',
                type: 'heatmap',
                data: chartData && chartData.data ? chartData.data
                    .map(function (item) {
                        return [item[1], item[0], item[2] || '-'];
                    }) : [],
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
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

    // useEffect(() => {
    //     setTableStatus(!showGraph)

    // }, [showGraph])



    const handleChangeCustomer = (event) => {
        const newAlignment = event.target.value;
        setAlignment(newAlignment);
        // console.log(chartData)

        switch (newAlignment) {
            case 'Daily':
                setChartData(alldata.graph4.DaywiseRecurringCustomer);
                break;
            case 'Monthly':
                setChartData(alldata.graph4.MonthlyRecurringCustomer);
                break;
            case 'Yearly':
                setChartData(alldata.graph4.YearlyRecurringCustomer);
                break;
            default:
                return;
        }

        // Create the table data format
        // const tableDataToShow = dataToShow.map((item, index) => ({
        //     '#': index + 1,
        //     [newAlignment === 'Name' ? 'CustomerName' :
        //         newAlignment === 'Mobile' ? 'MobileNo' : 'VehicleNo']: item[newAlignment === 'Name' ? 'CustomerName' : newAlignment === 'Mobile' ? 'MobileNo' : 'VehicleNo'],
        //     'Total Count': item.totalCount,
        // }));

        // setTableData(tableDataToShow);


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


                        <div className='d-flex align-items-center'>


                            <ThemeProvider theme={theme}>


                                <FormControl sx={{ mx: 1, mt: 1, minWidth: 180 }} size="small">
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
                                        <MenuItem disabled={Math.round((new Date(selectedRange[1]).getTime() - new Date(selectedRange[0]).getTime()) / (1000 * 60 * 60 * 24))<= 31? false : true} style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Daily"}>{t("Daily")}</MenuItem>
                                        <MenuItem style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Monthly"}>{t("Monthly")}</MenuItem>
                                        <MenuItem disabled={Math.round((new Date(selectedRange[1]).getFullYear() - new Date(selectedRange[0]).getFullYear()))>=1? false : true} style={{ color: `var(--text-color)`, fontFamily: `"Public Sans", sans-serif !important` }} value={"Yearly"}>{t("Yearly")}</MenuItem>
                                    </Select>
                                </FormControl>

                            </ThemeProvider>
                        </div>



                        {/* <div title='Export Options' className="d-flex g-0" ref={iconContainerRef}><div className={`${css.iconsContainer} d-flex justify-content-center align-items-center`} >
                          

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
                        </div> */}
                    </div>
                </div>
                {isLoading && (
                    <div className={css.loadingOverlay}>
                        <img src={loading} alt="Loading..." width={50} height={50} />
                    </div>
                )}

                {chartData && chartData.length == 0 && !tableStatus && !isLoading ? <div className={`${css.NoDataOverlay} fs-5`}>
                    {t("No Data Found")}
                </div> : null}

                {!tableStatus ? (
                    <ReactECharts
                       
                        option={option}
                        // notMerge={merge}
                        style={{
                            height: "350px",
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

export default CustomerRetention;