import { Message } from 'shineout'
import { ajax } from '../../lib/ajax'

export const getList = params => new Promise((resolve) => {
  ajax('/order/list', {
    body: params,
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
    body: params,
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

export const update = params => new Promise((resolve, reject) => {
  ajax('/order/update', {
    body: params,
    method: 'POST'
  }).then((res) => {
    if (res?.code === 0) {
      Message.success('编辑成功～')
      resolve(true)
    } else {
      resolve(false)
      Message.error(res.msg || '网络错误')
    }
  }).catch((err) => {
    reject(err)
  })
})

export const remove = params => new Promise((resolve, reject) => {
  ajax('/order/remove', {
    body: params,
    method: 'POST'
  }).then((res) => {
    if (res?.code === 0) {
      Message.success('删除成功～')
      resolve(true)
    } else {
      resolve(false)
      Message.error(res.msg || '网络错误')
    }
  }).catch((err) => {
    reject(err)
  })
})
