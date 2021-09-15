import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'shineout'

import Icons from '../../component/icon'
import Myspin from '../../component/mySpin'
import Cart from './jsx/cart'
import Skim from './jsx/skim'
import Preformance from './jsx/preformance'
import Channel from './jsx/channel'
import Maker from './jsx/maker'

function Home() {
  const [loading] = useState(true)
  const history = useHistory()
  const cart = [
    {
      title: '订单数',
      tips: '周线',
      titleIcon: {
        name: 'bar-chart-o',
        size: '22px',
        color: '#37A2FF'
      },
      type: 'add',
      number: '22200',
      tag: '+4%',
      jtIcon: {
        name: 'long-arrow-up',
        size: '18',
        color: 'red'
      },
      canvas: {
        id: 'order',
        color: '#37A2FF',
        lineColor: ['rgb(55, 162, 255)', 'rgba(1, 191, 236, 0.01)'],
        data: [10, 40, 150, 30, 80, 300, 5]
      }
    },
    {
      title: '交易金额',
      tips: '周线',
      titleIcon: {
        name: 'shopping-basket',
        size: '22px',
        color: '#56bbaa'
      },
      number: '22200',
      type: 'reduce',
      tag: '-5%',
      jtIcon: {
        name: 'long-arrow-down',
        size: '18',
        color: 'green'
      },
      canvas: {
        id: 'money',
        color: '#56bbaa',
        lineColor: ['rgb(128, 255, 165)', 'rgba(1, 191, 236, 0.01)'],
        data: [300, 40, 150, 30, 80, 500, 5]
      }
    },
    {
      title: '浏览量',
      tips: '周线',
      titleIcon: {
        name: 'cubes',
        size: '22px',
        color: '#ea5b9f'
      },
      number: '22200',
      type: 'add',
      tag: '+22%',
      jtIcon: {
        name: 'long-arrow-up',
        size: '18',
        color: 'red'
      },
      canvas: {
        id: 'ready',
        color: '#ea5b9f',
        lineColor: ['#e058a0', 'rgba(135, 0, 157, 0.01)'],
        data: [10, 220, 150, 30, 80, 300, 5]
      }
    },
    {
      title: '客单价',
      tips: '周线',
      titleIcon: {
        name: 'pie-chart',
        size: '22px',
        color: '#FFBF00'
      },
      number: '22200',
      type: 'reduce',
      tag: '-4%',
      jtIcon: {
        name: 'long-arrow-down',
        size: '18',
        color: 'green'
      },
      canvas: {
        id: 'price',
        color: '#ff9900',
        lineColor: ['rgb(255, 191, 0)', 'rgba(224, 62, 76, 0.01)'],
        data: [20, 102, 181, 334, 210, 90, 250]
      }
    }

  ]

  const breadcrumb = [
    { icon: <Icons name="home" size={18} />, title: '首页', onClick: () => { history.push('/') } },
    { title: '数据中心', onClick: () => { history.push('/') } },
    { title: '市场分布' }
  ]
  if (loading) {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <Breadcrumb data={breadcrumb} />
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '12px',
          columnGap: '12px'
        }}
        >
          {cart.map(item => <Cart key={item.canvas.id} {...item} />)}
        </div>
        <div
          style={{
            width: '100%',
            height: '360px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: '12px',
            marginTop: '12px'
          }}
        >
          <Skim />
          <Preformance />
        </div>
        <div
          style={{
            width: '100%',
            height: 'calc(100% - 600px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            columnGap: '12px',
            marginTop: '12px'
          }}
        >
          <Channel />
          <Maker />
        </div>
      </div>
    )
  }
  return (
    <Myspin />
  )
}

export default Home
