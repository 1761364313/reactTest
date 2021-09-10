// 时间格式化
export const formatTime = (fmt, time = Date.now()) => {
  let ret
  const date = new Date(time)
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString()
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    }
  }
  return fmt
}

export const isPromise = obj => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
// 这里对dispatch函数进行一个封装，使其支持处理异步action
// 简而言之就是判断传进来的action是不是Promise对象，如果是的话
// 先执行loading_start，将loading置为true
// 然后执行完成Promise后，将获得的结果执行一次action
// 再执行loading_end（实际项目中请求失败也应该执行loading_end，因项目而异，不展开了）
// 注意：这个loading是我项目中喜欢用的一个标志位，用来记录当前是不是处于请求中
// 因为经常需要有如果在请求中，按钮需要禁用，防止用户再点击这种需求
// 另外实际项目中,loading可以扩展成对象，记录各种异步请求的状态
// 这个灵感来源于dva-loading，感谢！
export const wraperDispatch = dispatch => (action) => {
  if (isPromise(action.payload)) {
    dispatch({ type: 'loadingStart' })
    action.payload.then((v) => {
      dispatch({ type: action.type, payload: v })
      dispatch({ type: 'loadingEnd' })
    })
  } else {
    dispatch(action)
  }
}

// 传参 格式化
export const formatParams = (params) => {
  if (!params) return null
  Object.keys(params).forEach((item) => {
    if (item && !params[item]) delete params[item]
  })
  return params
}
