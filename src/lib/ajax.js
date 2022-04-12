
import { Message } from 'shineout'
import { formatParams } from './utils'

const orgin = 'http://localhost:3000/api'

export const ajax = (url, option) => {
  url = orgin + url
  if (option && option.method === 'GET' && option.body) {
    const obj = option.body
    const arr = []
    Object.keys(obj).forEach(i => arr.push(`${i}=${obj[i]}`))
    if (url.search(/\?/) === -1) {
      url += `?${arr.join('&')}`
    } else {
      url += `&${arr.join('&')}`
    }
    delete option.body
  }
  if (option.body) {
    option.body = JSON.stringify(formatParams(option.body))
  }
  return fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    ...option
  }).then(res => res.json())
    .catch((err) => {
      Message.error('网络错误')
      return new Promise((resolve, reject) => {
        reject(err)
      })
    })
}

