import React, { useEffect, useState, useRef } from 'react'
import css from "./Dashboard.module.css";
import { FaArrowTrendUp, FaMoneyBill1, FaArrowTrendDown } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import ReactECharts from 'echarts-for-react';

export default function OfficeCard({ countExpense, totalExpense, todayExpense, alldata, selectedRange, officeId, adminStatus, expenseCardData }) {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState({ current7Days: [], previous7Days: [] });
  const [showToday, setShowToday] = useState(true);
  const [growthPercentageValue, setGrowthPercentage] = useState(0);

  const formatDate = (date) => {
    if (!date) {
      return ''; // Return an empty string or a default date string
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  // Inside your useEffect where you're preparing the chart data
  useEffect(() => {
    // Calculate the current date and 14 days ago
    const today = new Date();
    const endDate = new Date(today);
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 13);

    async function fetchData() {


      const data = expenseCardData

      if (Array.isArray(data)) {
        const filteredData = data.map((item) => ({
          requestedDate: new Date(item.requestedDate),
          expense: item.totalExpense,
        }));



        const today = new Date();
        const last7Days = new Date(today);
        last7Days.setDate(today.getDate() - 7);

        const current7DaysData = filteredData.filter((item) => {
          const itemDate = new Date(item.requestedDate);
          return itemDate >= last7Days && itemDate <= today;
        });

        // Calculate the start date for the previous 7 days
        const previous7DaysStart = new Date(last7Days);
        previous7DaysStart.setDate(last7Days.getDate() - 7);

        // Filter data for the previous 7 days using the calculated start date
        const previous7DaysData = filteredData.filter((item) => {
          const itemDate = new Date(item.requestedDate);
          return itemDate >= previous7DaysStart && itemDate < last7Days;
        });

        // Calculate growth percentage
        const currentWeekSales = current7DaysData.reduce((total, item) => total + item.expense, 0);
        const previousWeekSales = previous7DaysData.reduce((total, item) => total + item.expense, 0);
        const growthPercentageValue =
          Math.min(((currentWeekSales - previousWeekSales) / previousWeekSales) * 100, 100);


        setGrowthPercentage(growthPercentageValue);


        // console.log(current7DaysData)
        // console.log(previous7DaysData)

        setChartData({ current7Days: current7DaysData, previous7Days: previous7DaysData });
      } else {
        console.log('Invalid data format:', data);
      }
    }

    fetchData();
  }, [expenseCardData]); // Empty dependency array, so it runs once on component mount


  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


  const options = {
    grid: {
      left: 12,
      right: 12,
      top: 10,
      bottom: 20,
    },
    legend: {
      show: false,
      textStyle: {
        color: 'white',
        fontSize: window.innerWidth <= 768 ? 8 : 12, // Set font size to 0 to hide text
      },

      top: 20, // Adjust the vertical position of the legend
      left: 'center',
      itemWidth: window.innerWidth <= 768 ? 5 : 5, // Adjust the width of the legend switches
      itemHeight: window.innerWidth <= 768 ? 8 : 10, // Adjust the height of the legend switches

    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false, // Hide the x-axis line
      },
      axisTick: {
        show: false, // Hide the x-axis tick marks
      },
      axisLabel: {
        color: 'white', // Set label color to white
        left: 0,
        right: 0,

      },


      boundaryGap: false, // Adjust boundaryGap to align with labels
      data: chartData.current7Days.map((item) => {
        const date = new Date(item.requestedDate);
        return dayNames[date.getDay()];
      }),
    },
    yAxis: {
      type: 'value',
      show: false, // Hide the y-axis

    },


    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
        color: 'white',
      },
      formatter: function (params) {
        let tooltipContent = '<div>';
        tooltipContent += `<div>${params[0].name}</div>`; // Display the date

        params.forEach((param) => {
          tooltipContent += `<div style="display: flex; align-items: center;">`;
          tooltipContent += `<span style="color: ${param.color}; margin-right: 5px;">●</span>`; // Colored bullet
          tooltipContent += `<span style="font-weight: bold;">${param.seriesName}: ₹${param.value}</span>`; // Series name and value
          tooltipContent += `</div>`;
        });

        tooltipContent += '</div>';
        return tooltipContent;
      },
    },

    series: [
      {
        data: chartData.current7Days.map((item) => item.expense),
        name: 'This Week',
        type: 'line',
        yAxisIndex: 0,
        symbol: 'none',
        itemStyle: {
          color: 'pink',
        },
        areaStyle: {
          // Add areaStyle to create a shaded area beneath the line
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(255, 105, 180)' }, // Shaded area color with opacity
              { offset: 1, color: 'rgba(0, 0, 0, 0)' }, // Transparent color
            ],
          },
        },
        smooth: true,
        lineStyle: { // Set line width here
          width: 3, // Adjust the line width as needed
          shadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow color
          shadowBlur: 5, // Shadow blur radius
          shadowOffsetY: 5, // Vertical shadow offset
        },


      },

    ],

  };


  return (
    <div className={css.card4} onMouseEnter={() => setShowToday(true)}
      onMouseLeave={() => setShowToday(false)} >
      <div className={css.cardHead}   >
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t("Expense")}</span>

        <span>
          <FaMoneyBill1 size={50} />
        </span>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', height: '30px' }} >
            <div className='mb-0' style={{ display: 'flex', alignItems: 'center' }}  >
              <span style={{ marginRight: "5px", fontSize: window.innerWidth > 600 ? "1.1rem" : "0.8rem" }}> {!showToday ? t('Today') : '7 ' + t('days')}</span>
              <div>
                <div style={{ display: 'flex' }}>
                  <span style={{ marginRight: '2px', marginTop: '6px', fontWeight: 'bold', fontSize: window.innerWidth > 600 ? ".9rem" : "0.7rem" }}>₹</span>
                  <span style={{ fontWeight: 'bold', fontSize: window.innerWidth > 600 ? "2.1rem" : "1.7rem", marginRight: '5px' }}>{!showToday ? todayExpense : totalExpense}</span>
                </div>
              </div>
            </div>
            <div style={{ display: window.innerWidth > 600 ? 'flex' : 'none', alignItems: 'flex-start' }}>
              <div
                style={{
                  backgroundColor: 'rgba(255, 105, 180)',
                  padding: '2px 4px',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: window.innerWidth > 600 ? '0.9rem' : '0.7rem',
                    color: growthPercentageValue > 0 ? 'yellow' : 'rgba(255,0,0,0.6)',
                  }}
                >

                </span>
                <i style={{ marginLeft: '0px' }}>
                  {growthPercentageValue > 0 ? (
                    <FaArrowTrendUp
                      style={{
                        fontSize: window.innerWidth > 600 ? '0.9rem' : '0.7rem',
                        color: 'yellow',
                      }}
                    />
                  ) : (
                    <FaArrowTrendDown
                      style={{
                        fontSize: window.innerWidth > 600 ? '0.9rem' : '0.7rem',
                        color: 'rgba(255,0,0,0.6)',
                      }}
                    />
                  )}
                </i>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <ReactECharts option={options} style={{ height: '80%', width: '100%' }} />
          </div>

        </div>

      </div>
    </div>
  )
}