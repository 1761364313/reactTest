import { createStore } from 'redux'
import React, { useState } from 'react'

// 静态数据
export const defaultValue = {
  visible: 'test',
  getCount: 11,
  list: [
    { aa: 222, bb: 333, cc: 2222 },
    { aa: 222, bb: 333, cc: 2222 }
  ]
}

// action
export const reducer = (state = defaultValue, action) => {
  switch (action.type) {
    case 'changeVisible':
      return Object.assign({}, state, { visible: action.value })
    case 'changeTime':
      return Object.assign({}, state, { getCount: 'hello' })
    default:
      return state
  }
}

const store = createStore(reducer)

function B() {
  const [state, setState] = useState(store.getState())
  const watchState = () => {
    setState(store.getState())
  }
  // 监听 store 数据变化
  store.subscribe(() => { watchState() })
  return (
    <div>
      <buttom onClick={() => { store.dispatch({ type: 'changeVisible', value: 'B组件改变的值' }) }}>changeB</buttom>
      <p>B:{state.visible}</p>
    </div>
  )
}

export default function A() {
  const [state, setState] = useState(store.getState())
  const watchState = () => {
    setState(store.getState())
  }
  // 监听 store 数据变化
  store.subscribe(() => { watchState() })
  return (
    <div>
      <buttom onClick={() => { store.dispatch({ type: 'changeVisible', value: 'A组件改变的值' }) }}>changeA</buttom>
      <p>A:{state.visible}</p>
      <B />
    </div>
  )
}

