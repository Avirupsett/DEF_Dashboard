import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';

import {
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';

echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    SVGRenderer,
    LabelLayout,
]);

export default function TankerLevelChart() {

    const ref=useRef()
    useEffect(() => {
        const chartDom = ref.current;
        const myChart = echarts.init(chartDom, null, { renderer: 'svg' });

        const option = {
            color: ['var(--driver-primary)', 'var(--driver-secondary)'],
            title: {
                text: '80%',
                left: 'center',
                top: 'center'
            },
            tooltip: {
                show: false,
                // trigger: 'item',
                // formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                show: false,
                left: 'center',
                top: 'bottom',

            },

            series: [
                {
                    // name: 'Radius Mode',
                    silent: true,
                    type: 'pie',
                    radius: [45, 60],
                    itemStyle: {
                        borderRadius: 5,
                    },
                    label: {
                        show: false,
                    },

                    data: [
                        { value: 15000, name: 'rose 1' },
                        { value: 4100, name: 'rose 2' }
                    ],
                }

            ],
        };

        option && myChart.setOption(option);

        return () => {
            // Clean up the chart when the component unmounts
            myChart.dispose();
        };
    }, []);

    return (
        <div className='text-center'>
        <div ref={ref} style={{ minWidth: '100%', height: '150px' }}>
        </div>
        <div style={{width:"140px"}}>
        Tanker Fuel Level
        </div>
        </div>)

};

