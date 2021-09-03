import React, { useEffect } from 'react'
import * as echarts from 'echarts/core'
import { DatasetComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([DatasetComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer])
export default function maker() {
  const drawImg = () => {
    const chartDom = document.getElementById('bar')
    const myChart = echarts.init(chartDom)
    const option = {
      legend: {
        data: ['美国', '欧洲', '南美洲', '非洲', '东南亚', '南亚', '澳大利亚'],
        x: 'right'
      },
      title: {
        text: '销售报告',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#666'
        },
        y: '-5',
        x: '-5'
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '美国', '欧洲', '南美洲', '非洲', '东南亚', '南亚', '澳大利亚'],
          ['2013', 43.3, 85.8, 93.7, 33, 44, 33, 55],
          ['2014', 83.1, 73.4, 55.1, 33, 55, 11, 55],
          ['2015', 86.4, 65.2, 82.5, 34, 23, 44, 51],
          ['2016', 43.3, 85.8, 93.7, 33, 44, 33, 55],
          ['2017', 83.1, 73.4, 55.1, 33, 55, 11, 55],
          ['2018', 86.4, 65.2, 82.5, 34, 23, 44, 51],
          ['2019', 72.4, 53.9, 39.1, 44, 42, 32, 12],
          ['2020', 43.3, 85.8, 93.7, 33, 44, 33, 55],
          ['2021', 83.1, 73.4, 55.1, 33, 55, 11, 55]
        ]
      },
      grid: {
        x: 25,
        y: 30,
        x2: 10,
        y2: 20,
        with: '100%'
      },

      xAxis: {
        type: 'category',
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#999'
          }
        }
      },
      yAxis: {},
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
      ]
    }
    option && myChart.setOption(option)
  }
  useEffect(() => {
    drawImg()
  }, [])
  return (
    <div
      id="bar"
      style={{
        flex: 1,
        background: '#fff',
        borderRadius: '8px',
        padding: '12px',
        boxSizing: 'border-box',
        height: '100%'
      }}
    />
  )
}
