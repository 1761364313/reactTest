import { useContext } from 'react'
import { Form, Input, DatePicker, Button } from 'shineout'

import { context } from '../reducers'
import { getList } from '../serve'

export default function from() {
  const [state, dispatch] = useContext(context)
  console.log(useContext(context))

  const search = (e) => {
    const page = {
      pageIndex: 1,
      pageSize: 10
    }
    const params = {
      ...e,
      ...page
    }

    dispatch({ type: 'getList', payload: getList(params) })
    dispatch({ type: 'setPage', payload: page })
    dispatch({ type: 'setSearch', payload: params })
  }
  return (
    <div>
      <Form
        value={state.searchParams}
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
            dispatch({ type: 'changeVisible', payload: true })
            dispatch({ type: 'changeType', payload: 'add' })
          }
        }
        >
          新增
        </Button>
      </Form>
    </div>

  )
}

