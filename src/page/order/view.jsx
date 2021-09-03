import loadable from '@loadable/component'
import Test from './store'

const Number = loadable(() => import('../number/view'))

function User() {
  return (
    <div>
      <Number />
      <Test />
    </div>
  )
}

export default User
