import React, { useEffect } from 'react'

import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'

import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer])

export default function canvas(props) {
  const { id, color, lineColor, data } = props.canvas
  const { title } = props
  const drawImg = () => {
    const chartDom = document.getElementById(id)
    const myChart = echarts.init(chartDom)

    const option = {
      color: [color],
      grid: {
        x: 0,
        y: 0,
        bottom: 0,
        width: '100%'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },

      xAxis: [
        {
          type: 'category',
          show: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          boundaryGap: false
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
          axisLine: {
            show: true
          },
          axisTick: {
            show: true
          },
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          name: title,
          type: 'line',
          stack: '总量',
          smooth: true,
          lineStyle: {
            width: 1
          },
          showSymbol: false,
          areaStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: lineColor[0]
            },
            {
              offset: 1,
              color: lineColor[1]
            }])
          },
          emphasis: {
            focus: 'series'
          },
          data
        }
      ]
    }
    option && myChart.setOption(option)
  }
  console.log(1111)
  useEffect(() => {
    drawImg()
  }, [])

  return (
    <div id={id} style={{ width: '100%', height: '100%' }} />
  )
}
