import { useContext } from 'react'
import { Form, Input, DatePicker, Button } from 'shineout'

import { context } from '../reducers'

export default function from() {
  console.log('form')
  const [state, dispatch] = useContext(context)

  const { searchParams, refresh } = state

  const search = (e) => {
    dispatch({
      type: 'changeVal',
      key: ['searchParams', 'refresh'],
      value: [e, refresh + 1]
    })
  }
  return (
    <div>
      <Form
        value={searchParams}
        inline
        onSubmit={search}
        style={{ marginBottom: '12px' }}
      >
        <Form.Item label="ID:">
          <Input name="_id" type="text" placeholder="输入查询ID" />
        </Form.Item>
        <Form.Item label="名称:">
          <Input name="name" placeholder="输入名称" />
        </Form.Item>
        <Form.Item label="电话:">
          <Input name="tel" placeholder="输入电话" />
        </Form.Item>
        <Form.Item label="操作人:">
          <Input name="person" placeholder="请输入" />
        </Form.Item>
        <Form.Item label="时间:">
          <DatePicker range style={{ width: '250px' }} name={['startTime', 'endTime']} placeholder={['开始时间', '结束时间']} />
        </Form.Item>
        <Form.Submit>查询</Form.Submit>
        <Form.Reset onClick={search}>重置</Form.Reset>
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: 'changeVal',
              key: ['visible', 'modalType'],
              value: [true, 'add']
            })
          }}
        >
          新增
        </Button>
      </Form>
    </div>

  )
}

