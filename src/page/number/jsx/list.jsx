import { useContext } from 'react'
import { Table, Button } from 'shineout'
import { context } from '../reducers'
import { remove } from '../serve'

export default function list() {
  console.log('list')
  const [state, dispatch] = useContext(context)
  const { refresh, searchParams } = state
  const handleEdit = (data) => {
    dispatch({
      type: 'changeVal',
      key: ['visible', 'formDefault', 'modalType'],
      value: [true, data, 'edit']
    })
  }
  // 删除
  const handleDel = async (data) => {
    if (data) {
      await remove({ _id: data._id })
      dispatch({
        type: 'changeVal',
        key: 'refresh',
        value: refresh + 1
      })
    }
  }
  const columns = [
    { title: 'index', render: (r, i) => i + 1, width: 60 },
    { title: 'Id', render: '_id', width: 60 },
    { title: 'Name', render: 'name' },
    { title: 'Price', render: 'price' },
    { title: 'priceAll', render: 'priceAll' },
    { title: 'tel', render: 'tel' },
    { title: 'person', render: 'person' },
    { title: 'creatTime', render: 'creatTime' },
    {
      title: '操作',
      fixed: 'right',
      render: r => (
        <span>
          <Button type="primary" onClick={() => handleEdit(r)} size="small"> 编辑 </Button>
          &nbsp;
          <Button type="primary" onClick={() => handleDel(r)} size="small">删除</Button>
        </span>
      )
    }
  ]
  const onChangePage = (pageIndex, pageSize) => {
    dispatch({
      type: 'changeVal',
      key: ['searchParams', 'refresh'],
      value: [{ ...searchParams, pageIndex, pageSize }, refresh + 1]
    })
  }

  return (
    <Table
      keygen="_id"
      fixed="x"
      width={1200}
      bordered
      columns={columns}
      style={{ height: 'auto' }}
      data={state.list?.data}
      pagination={{
        align: 'right',
        layout: ['links', 'list'],
        current: searchParams.pageIndex,
        onChange: (pageIndex, pageSize) => onChangePage(pageIndex, pageSize),
        pageSizeList: [10, 15, 20],
        total: state?.list?.count,
        text: {
          page: '条/页'
        }
      }}
    />
  )
}
