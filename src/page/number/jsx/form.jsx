import { useState, useContext, useImperativeHandle } from 'react'
import { Form, Input, DatePicker, Button } from 'shineout'

import { context } from '../reducers'

export default function from(props) {
  const [formData, setFormdata] = useState({})
  const [state, dispatch] = useContext(context)
  useImperativeHandle(props.childRef, () => ({
    getValue: () => ({
      username: 'tets',
      pwd: 'aaasd'
    }),
    sss: () => {
      console.log(2222)
    }
  }))
  const search = (e) => {
    console.log(e)
  }
  return (
    <div>
      <Form
        inline
        value={formData}
        onChange={e => setFormdata(e)}
        onSubmit={search}
        style={{ marginBottom: '12px' }}
      >
        <Form.Item label="ID:">
          <Input name="id" type="text" placeholder="输入查询ID" />
        </Form.Item>
        <Form.Item label="名称:">
          <Input name="name" placeholder="输入名称" />
        </Form.Item>
        <Form.Item label="时间:">
          <DatePicker range style={{ width: '250px' }} name={['startTime', 'endTime']} placeholder={['开始时间', '结束时间']} />
        </Form.Item>
        <Form.Submit onClick={() => props.setTest('hello')}>查询</Form.Submit>
        <Form.Reset>重置</Form.Reset>
        <Button
          type="primary"
          onClick={() => {
            dispatch({ type: 'changeVisible', payload: true })
            dispatch({ type: 'changeType', payload: 'add' })
          }
        }
        >
          新增 {state.getCount}
        </Button>
      </Form>
    </div>

  )
}

