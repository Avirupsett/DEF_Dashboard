import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';

import {
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { t } from 'i18next';

echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    SVGRenderer,
    LabelLayout,
]);

export default function TankerLevelChart({ title, filllevel, emptylevel, fillTitle, emptyTitle }) {

    const ref = useRef()
    useEffect(() => {
        const chartDom = ref.current;
        const myChart = echarts.init(chartDom, null, { renderer: 'svg' });

        const option = {
            // color: ['var(--driver-primary)', 'var(--driver-secondary)'],
            title: {
                text: `${(filllevel / (filllevel + emptylevel) * 100).toFixed(0)}%`,
                left: 'center',
                top: 'center'
            },
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: '{b}: {c}',
                position: ['10%', '40%']
            },
            legend: {
                show: true,
                bottom: '0'
            },

            series: [
                {
                    name: 'Radius Mode',
                    // silent: true,
                    type: 'pie',
                    radius: [45, 60],
                    color: ['#239dab','#EAECF1'],
                    itemStyle: {
                        borderRadius: 5,
                    },
                    label: {
                        show: false,
                        
                    },
                    // emphasis: {
                    //     label: {
                    //         show: true,
                    //         fontSize: 40,
                    //         fontWeight: 'bold'
                    //     }
                    // },
                    labelLine: {
                        show: false
                    },

                    data: [
                        { value: filllevel, name: fillTitle },
                        { value: emptylevel, name: emptyTitle }
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
            <div ref={ref} style={{ minWidth: '100%', height: '250px' }}>
            </div>
            <div style={{ width: "140px", marginTop: "5px" }}>
                {t(title)}
            </div>
        </div>)

};

