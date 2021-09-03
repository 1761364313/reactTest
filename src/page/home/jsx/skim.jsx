import React, { useEffect } from 'react'
import * as echarts from 'echarts/core'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import BaseItem from 'shineout/lib/DataList/BaseItem'

echarts.use([TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer])
export default function skim(props) {
  const { data } = props
  const time = []
  const day = new Date().getHours()

  for (let i = day - 24; i <= day; i++) {
    if (i < 0) {
      time.push(i + 24)
    } else {
      time.push(i)
    }
  }
  console.log(time)
  const drawImage = () => {
    const chartDom = document.getElementById('skim')
    const myChart = echarts.init(chartDom)
    const colors = ['#37A2FF', '#56bbaa']

    const option = {
      color: colors,
      title: {
        text: '最近24小时的访问量',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: '#666'
        }
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          animation: false
        }
      },

      legend: {
        data: ['浏览量 {PM}', '访问量 {UV}'],
        x: 'right'
      },
      grid: {
        x: 25,
        y: 60,
        x2: 0,
        y2: 20,
        with: '100%'
      },

      xAxis: [
        {
          type: 'category',
          nameLocation: 'middle',
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#999'
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          data: time
        }
      ],
      yAxis: [
        {
          type: 'value'

        }
      ],
      series: [
        {
          name: '浏览量 {PM}',
          type: 'line',
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          showSymbol: false,
          areaStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236, 0.01)'
            }])
          },
          data: [8, 5, 6, 2, 11, 32, 33, 55, 66, 44, 33, 66, 33, 77, 11, 22, 33, 44, 22, 33, 11, 21, 11, 33, 22]
        },
        {
          name: '访问量 {UV}',
          type: 'line',
          smooth: true,
          showSymbol: false,
          emphasis: {
            focus: 'series'
          },
          areaStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236, 0.01)'
            }])
          },
          data: [33, 44, 22, 4, 5, 55, 21.6, 46.6, 55.4, 18.4, 10.3, 0.7, 3, 34, 34, 34, 34, 34, 55, 44, 66, 22, 56, 33, 22]
        }
      ]
    }
    option && myChart.setOption(option)
  }
  useEffect(() => {
    drawImage()
  }, [])
  return (
    <div
      id="skim"
      style={{
        flex: 3,
        maxWidth: 'calc(75% + 10px)',
        height: '100%',
        background: '#fff',
        borderRadius: '8px',
        boxSizing: 'border-box',
        padding: '24px'
      }}
    />
  )
}
