import loadable from '@loadable/component'
import { Provider, useTracked } from './reducers'

console.log('useTracked', useTracked)
console.log('Provider', Provider)

const Forms = loadable(() => import('./jsx/form'))
const List = loadable(() => import('./jsx/list'))
const Edit = loadable(() => import('./jsx/edit'))

function User() {
  return (
    <Provider>
      <div style={{ width: '100%', height: '100%', background: '#fff', padding: '22px', borderRadius: '8px' }}>
        <Forms />
        <List />
        <Edit />
      </div>
    </Provider>
  )
}

export default User
