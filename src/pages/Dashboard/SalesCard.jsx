import React, { useEffect, useState } from 'react'
import { FaArrowTrendUp, FaMoneyBill, FaArrowTrendDown } from 'react-icons/fa6'
import css from "./Dashboard.module.css";
import { useTranslation } from 'react-i18next';
import ReactECharts from 'echarts-for-react';



export default function SalesCard({ totalIncome, todaySales, salesCardData }) {
  const [chartData, setChartData] = useState([]);
  const [showToday, setShowToday] = useState(false); // State variable to track what to display
  const [growthPercentageValue, setGrowthPercentage] = useState(0); // State variable to store growth percentage

  const { t } = useTranslation();



  // Inside your useEffect where you're preparing the chart data
  useEffect(() => {


    function fetchData() {

      if (salesCardData) {
        const data = salesCardData; // Extract data from graph1 property

        if (Array.isArray(data)) {
          const filteredData = data.map((item) => ({
            requestedDate: new Date(item.requestedDate),
            sales: item.totalIncome,
          }));

          setChartData(data.slice(-7,));
          const today = new Date();
          let last7Days = new Date(today);
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
          const currentWeekSales = current7DaysData.reduce((total, item) => total + item.sales, 0);
          const previousWeekSales = previous7DaysData.reduce((total, item) => total + item.sales, 0);
          const growthPercentageValue =
            Math.min(((currentWeekSales - previousWeekSales) / previousWeekSales) * 100, 100);

          setGrowthPercentage(growthPercentageValue);

          
        } else {
          console.log('Invalid data format:', data);
        }
      }
    }

    fetchData();
  }, [salesCardData]); // Empty dependency array, so it runs once on component mount


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
      // data: ['This Week', 'Previous Week'], // Add legend data
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
      data: chartData.map((item) => {
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
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      textStyle: {
        fontSize: window.innerWidth <= 768 ? 10 : 14,
        color: 'rgba(100, 100, 100, 1)',
      },
      formatter: function (params) {
        let tooltipContent = '<div>';
        tooltipContent += `<div>${params[0].name}</div>`; // Display the date

        params.forEach((param) => {
          tooltipContent += `<div style="display: flex; align-items: center;">`;
          tooltipContent += `<span style="color: ${param.color};margin-right: 5px;">●</span>`; // Colored bullet
          tooltipContent += `<span style="font-weight: bold;">${param.seriesName}: ₹${param.value}</span>`; // Series name and value
          tooltipContent += `</div>`;
        });

        tooltipContent += '</div>';
        return tooltipContent;
      },
    },

    series: [
      {
        data: chartData.map((item) => item.totalIncome),
        name: 'This Week',
        type: 'line',
        yAxisIndex: 0,
        symbol: 'none',
        itemStyle: {
          color: 'green',

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
              { offset: 0, color: 'green' }, // Shaded area color with opacity
              { offset: 1, color: 'rgba(0, 0, 0, 0)' }, // Transparent color
            ],
          },
        },

        smooth: true,
        lineStyle: {
          width: 3,
          shadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow color
          shadowBlur: 5, // Shadow blur radius
          shadowOffsetY: 5, // Vertical shadow offset
        },


      },

    ],

  };








  return (
    <div className={css.card3} onMouseEnter={() => setShowToday(true)}
      onMouseLeave={() => setShowToday(false)}>
      <div className={css.cardHead}   >
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{t("Sales")}</span>

        <span>
          <FaMoneyBill size={50} />
        </span>
      </div>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', height: '30px' }}  >
            <div className='mb-0' style={{ display: 'flex', alignItems: 'center' }}  >
              <span style={{ marginRight: "5px", fontSize: window.innerWidth > 600 ? "1.1rem" : "0.8rem" }}> {!showToday ? t('Today') : '7 ' + t('days')}</span>
              <div>
                <div style={{ display: 'flex' }}>
                  <span style={{ marginRight: '2px', marginTop: '6px', fontWeight: 'bold', fontSize: window.innerWidth > 600 ? ".9rem" : "0.7rem" }}>₹</span>
                  <span style={{ fontWeight: 'bold', fontSize: window.innerWidth > 600 ? "2.1rem" : "1.7rem", marginRight: '5px' }}>{!showToday ? todaySales : totalIncome}</span>
                </div>
              </div>
            </div>
            <div style={{ display: window.innerWidth > 600 ? 'flex' : 'none', alignItems: 'flex-start' }}>
              <div
                style={{
                  backgroundColor: 'rgba(144, 238, 144, 0.7)',
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