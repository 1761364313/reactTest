import React from 'react'
import { Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('../page/home/view'))
const User = loadable(() => import('../page/user/view'))
const Order = loadable(() => import('../page/order/view'))
const Number = loadable(() => import('../page/number/view'))

export default function index() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userInfo" component={User} />
        <Route path="/order" component={Order} />
        <Route path="/numberCenter/number" component={Number} />
      </Switch>
    </div>
  )
}
