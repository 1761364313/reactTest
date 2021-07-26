import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Input, Table, DatePicker, Message, Spin, Breadcrumb } from 'shineout'
import loadable from '@loadable/component'
import { ajax } from '../../lib/ajax'

import Icons from '../../component/icon'
import './style.scss'

const Number = loadable(() => import('../number/view'))

function Home() {
  const [formData, setFormData] = useState({})
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const getList = (params) => {
    ajax('/list', {
      body: JSON.stringify(params),
      method: 'POST'
    }).then((res) => {
      setLoading(true)
      if (res.code === 0) {
        setList(res.list)
      } else {
        Message.error(res.msg)
      }
    })
  }
  const handleChange = (data) => {
    setFormData(data)
  }
  useEffect(() => {
    getList({ a: 22, b: 22 })
  }, [])

  const columns = [
    {
      title: '序号',
      render: (r, i) => i + 1,
      width: 50
    },
    {
      title: '名称',
      render: 'name'
    },
    {
      title: '年龄',
      render: 'age'
    },
    {
      title: '时间',
      render: 'time'
    }
  ]
  const breadcrumb = [
    { icon: <Icons name="home" size={18} />, title: '首页', onClick: () => { history.push('/') } },
    { title: '数据中心', onClick: () => { history.push('/') } },
    { title: '市场分布' }
  ]
  if (loading) {
    return (
      <div className="home">
        <Breadcrumb data={breadcrumb} />
        <Number />
        <Table fixed="auto" keygen={(r, i) => i} columns={columns} bordered data={list} />
        <Form
          value={formData}
          onChange={handleChange}
          onSubmit={(data) => {
            console.log(data)
          }}
        >
          <Form.Item label="name">
            <Input name="name" />
          </Form.Item>

          <Form.Item label="age">
            <Input name="age" />
          </Form.Item>

          <Form.Item label="time">
            <DatePicker type="datetime" name="time" min={Date.now()} placeholder="Select min datetime" />
          </Form.Item>

          <Form.Item label="">
            <Form.Submit>Submit</Form.Submit>
            <Form.Reset>Reset</Form.Reset>
          </Form.Item>
        </Form>

      </div>
    )
  }
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Spin size="54px" name="three-bounce" color="#dc3545" />
    </div>
  )
}

export default Home
