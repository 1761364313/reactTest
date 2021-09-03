import { useImperativeHandle, useEffect, useContext } from 'react'
import { Table, Button } from 'shineout'
import { context } from '../reducers'
import { getList } from '../serve'

export default function list(props) {
  const [state, dispatch] = useContext(context)
  useImperativeHandle(props.childRef, () => ({
    aa: () => console.log(222)
  }))
  const handleEdit = (data) => {
    dispatch({ type: 'changeVisible', payload: true })
    dispatch({ type: 'changeForm', payload: data })
    dispatch({ type: 'changeType', payload: 'edit' })
    console.log(data)
  }
  const columns = [
    { title: 'index', render: (r, i) => i + 1, width: 60 },
    { title: 'Name', render: 'name' },
    { title: 'Price', render: 'price' },
    { title: 'priceAll', render: 'priceAll' },
    { title: 'tel', render: 'tel' },
    { title: 'person', render: 'person' },
    {
      title: '操作',
      fixed: 'right',
      render: r => (
        <span>
          <Button data-info type="primary" onClick={() => handleEdit(r)} size="small"> 编辑 </Button>
          &nbsp;
          <Button data-call type="primary" size="small">删除</Button>
        </span>
      )
    }
  ]
  const onChangePage = (pageIndex, pageSize) => {
    console.log(pageSize)
    console.log(pageIndex)
    dispatch({ type: 'getList', payload: getList({ pageIndex, pageSize }) })
  }
  useEffect(() => {

  }, [])
  return (<Table
    keygen={() => Date.now()}
    fixed="x"
    width={1200}
    bordered
    columns={columns}
    height="auto"
    data={state.list?.list}
    pagination={{
      align: 'right',
      layout: ['links', 'list'],
      onChange: (pageIndex, pageSize) => onChangePage(pageIndex, pageSize),
      pageSizeList: [10, 15, 20],
      total: state?.list?.count,
      text: {
        page: '条/页'
      }
    }}
  />)
}
