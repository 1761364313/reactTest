import React, { useEffect } from 'react'
import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, PieChart, LegendComponent, CanvasRenderer])
export default function Preformance() {
  const drawImage = () => {
    const chartDom = document.getElementById('preformance')
    const myChart = echarts.init(chartDom)
    const option = {
      color: ['#37A2FF', '#e17288', '#ff9900'],
      title: {
        text: '人群分布',
        x: 'center',
        textStyle: {
          fontSize: 16,
          fontWeight: 'bolder',
          color: '#666'
        }
      },

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        left: 'center',
        bottom: 0
      },
      series: [
        {
          name: '市场占比',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
            textStyle: {
              lineHeight: 24,
              fontWeight: 'bolder',
              color: '#666'
            },
            formatter(params = {}) {
              const name = params.data.name
              const arr = name.split(':') || []
              const percent = params.percent || 0
              const str = `${arr[0]}占比\n${percent}%`
              return str
            },

            fontWeight: 'bold'
          },
          emphasis: {
            show: true,
            label: {
              show: true,
              fontSize: 18,
              lineHeight: 22,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 180, name: '男性' },
            { value: 584, name: '女性' },
            { value: 30, name: '其他' }
          ]
        }
      ]
    }
    option && myChart.setOption(option)
    setTimeout(() => {
      let index = 1
      myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 1 })
      myChart.on('mouseover', (e) => {
        if (e.dataIndex != index) {
          myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: index })
        }
      })

      myChart.on('mouseout', (e) => {
        index = e.dataIndex
        myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex })
      })
    }, 1000)
  }

  useEffect(() => {
    drawImage()
  }, [])
  return (
    <div
      id="preformance"
      style={{
        flex: 1,
        maxWidth: 'calc(25% - 10px)',
        height: '100%',
        background: '#fff',
        borderRadius: '8px',
        padding: '24px',
        boxSizing: 'border-box'
      }}
    />
  )
}
