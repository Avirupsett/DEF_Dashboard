import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';

import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { t } from 'i18next';

echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    SVGRenderer,
    LabelLayout,
]);

export default function TankerLevelChart({ title, filllevel, emptylevel, fillTitle, emptyTitle }) {

    const ref = useRef()

    function shadeColor(color, percent) {

        var R = parseInt(color.substring(1,3),16);
        var G = parseInt(color.substring(3,5),16);
        var B = parseInt(color.substring(5,7),16);
    
        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);
    
        R = (R<255)?R:255;  
        G = (G<255)?G:255;  
        B = (B<255)?B:255;  
    
        R = Math.round(R)
        G = Math.round(G)
        B = Math.round(B)
    
        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    
        return "#"+RR+GG+BB;
    }
    
    useEffect(() => {
        const chartDom = ref.current;
        const myChart = echarts.init(chartDom, null, { renderer: 'svg' });

        const option = {
            // color: ['var(--driver-primary)', 'var(--driver-secondary)'],
            title: {
                text: `${(filllevel + emptylevel)>0?(filllevel / (filllevel + emptylevel) * 100).toFixed(0):0}%`,
                left: 'center',
                top: 'center'
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                confine: true,
                // position: ['10%', '40%']
            },
            legend: {
                show: false,
                bottom: '0'
            },

            series: [
                {
                    name: 'Radius Mode',
                    // silent: true,
                    type: 'pie',
                    radius: [50, 65],
                    // color: ['#4b8587','#EAECF1'],
                    itemStyle: {
                        borderRadius: 5,
                    },
                    label: {
                        show: false,
                        
                    },
                    labelLine: {
                        show: false
                    },

                    data: [
                        { value:filllevel>0?filllevel:'', name: fillTitle,itemStyle:{color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                              offset: 1,
                              color: shadeColor('#4b8587',30)
                            },
                            {
                              offset: 0,
                              color: shadeColor('#4b8587',50)
                            }
                          ])} },
                        { value: emptylevel, name: emptyTitle,itemStyle:{color:'#eaecf1'} }
                    ],
                }

            ],
        };

        option && myChart.setOption(option);

        return () => {
            // Clean up the chart when the component unmounts
            myChart.dispose();
        };
    }, [filllevel, emptylevel]);

    return (
        <div className='text-center'>
            <div ref={ref} style={{ minWidth: '100%', height: '150px' }}>
            </div>
            <div className='text-dark fw-semibold' style={{ width: "150px", marginTop: "5px" }}>
                {t(title)}
            </div>
        </div>)

};

