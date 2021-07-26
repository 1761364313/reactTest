import loadable from '@loadable/component'

const Number = loadable(() => import('../number/view'))

function User() {
  return (
    <div>
      <Number />
      order
    </div>
  )
}

export default User
