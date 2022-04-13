import { useEffect } from 'react'

import { Table, Button } from 'shineout'
import { useTracked } from '../reducers'
import { remove, getList } from '../serve'

export default function list() {
  const [state, setState] = useTracked()
  const { refresh, searchParams } = state
  useEffect(() => {
    getList(searchParams).then((res) => {
      setState(prev => ({
        ...prev,
        list: res
      }))
    })
  }, [refresh])

  console.log('list')

  const handleEdit = (data) => {
    setState(prev => ({
      ...prev,
      visible: true,
      formDefault: data,
      modalType: 'edit'
    }))
  }
  // 删除
  const handleDel = async (data) => {
    if (data) {
      await remove({ _id: data._id })
      setState(prev => ({
        ...prev,
        refresh: refresh + 1
      }))
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
    setState(prev => ({
      ...prev,
      searchParams: { ...searchParams, pageIndex, pageSize },
      refresh: refresh + 1
    }))
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
