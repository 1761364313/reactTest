import { useState, useReducer, useEffect } from 'react'
import loadable from '@loadable/component'

import { reducer, defaultValue, context } from './reducers'
import { getList } from './serve'

const Myspin = loadable(() => import('../../component/mySpin'))
const Forms = loadable(() => import('./jsx/form'))
const List = loadable(() => import('./jsx/list'))
const Edit = loadable(() => import('./jsx/edit'))

function User() {
  const [state, dispatch] = useReducer(reducer, defaultValue)

  const { refresh, searchParams } = state
  const [loading] = useState(true)

  useEffect(() => {
    getList(searchParams).then((res) => {
      dispatch({
        type: 'changeVal',
        key: 'list',
        value: res
      })
    })
  }, [refresh])

  useEffect(() => () => dispatch({ type: 'resetInit' }), [])
  console.log('index')
  if (loading) {
    return (
      <context.Provider value={[state, dispatch]}>
        <div style={{ width: '100%', height: '100%', background: '#fff', padding: '22px', borderRadius: '8px' }}>
          <Forms />
          <List />
          <Edit />
        </div>
      </context.Provider>
    )
  }
  return (
    <Myspin />
  )
}

export default User
