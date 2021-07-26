
import { Message } from 'shineout'

const orgin = 'http://localhost:8080'

export const ajax = (url, option) => {
  url = orgin + url
  if (option && option.method === 'GET' && option.body) {
    const obj = JSON.parse(option.body)
    const arr = []
    Object.keys(obj).forEach(i => arr.push(`${i}=${obj[i]}`))
    if (url.search(/\?/) === -1) {
      url += `?${arr.join('&')}`
    } else {
      url += `&${arr.join('&')}`
    }
    delete option.body
  }
  return fetch(url, {
    headers: {
      'content-type': 'application/json'
    },
    ...option
  }).then(res => res.json())
    .catch(() => Message.error('网络错误'))
}

