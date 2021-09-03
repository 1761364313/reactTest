import { Message } from 'shineout'
import { ajax } from '../../lib/ajax'

export const getList = params => new Promise((resolve) => {
  ajax('/order/list', {
    body: JSON.stringify(params),
    method: 'GET'
  }).then((res) => {
    if (res?.code === 0) {
      resolve(res)
    } else {
      Message.error(res.msg || '网络错误')
    }
  })
})

export const add = params => new Promise((resolve) => {
  ajax('/order/add', {
    body: JSON.stringify(params),
    method: 'POST'
  }).then((res) => {
    if (res?.code === 0) {
      Message.success('新增成功～')
      resolve(true)
    } else {
      resolve(false)
      Message.error(res.msg || '网络错误')
    }
  })
})

export const update = params => new Promise((resolve) => {
  ajax('/order/update', {
    body: JSON.stringify(params),
    method: 'POST'
  }).then((res) => {
    if (res?.code === 0) {
      Message.success('编辑成功～')
      resolve(true)
    } else {
      resolve(false)
      Message.error(res.msg || '网络错误')
    }
  })
})
