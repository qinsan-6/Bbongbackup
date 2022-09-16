import { onMounted } from 'vue';
import * as echarts from 'echarts/core';
import {
    GridComponent,
    GridComponentOption
} from 'echarts/components';
import {
    LineChart,
    LineSeriesOption
} from 'echarts/charts';
import {
    UniversalTransition
} from 'echarts/features';
import {
    CanvasRenderer
} from 'echarts/renderers';


export function useLineChart(){
    onMounted(()=>{
        echarts.use(
            [GridComponent, LineChart, CanvasRenderer, UniversalTransition]
        );
        
        type EChartsOption = echarts.ComposeOption<
            GridComponentOption | LineSeriesOption
        >
          let chartDom = document.getElementById('main')!;
          let myChart = echarts.init(chartDom);
          let option: EChartsOption;
        
        option = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        };
        
        option && myChart.setOption(option);
        
        
        })
}