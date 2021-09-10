import { useState, useReducer, useEffect } from 'react'
import loadable from '@loadable/component'

import { reducer, defaultValue, context } from './reducers'
import { getList } from './serve'

import { wraperDispatch } from '../../lib/utils'
// import Myspin from '../../component/mySpin'
// import Forms from './jsx/form'
// import List from './jsx/list'

const Myspin = loadable(() => import('../../component/mySpin'))
const Forms = loadable(() => import('./jsx/form'))
const List = loadable(() => import('./jsx/list'))
const Edit = loadable(() => import('./jsx/edit'))

function User() {
  // eslint-disable-next-line prefer-const
  let [state, dispatch] = useReducer(reducer, defaultValue)
  dispatch = wraperDispatch(dispatch)
  const [loading] = useState(true)

  useEffect(() => {
    dispatch({ type: 'getList', payload: getList({ ...state.page }) })
  }, [])
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
