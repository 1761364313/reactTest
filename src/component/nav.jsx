import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'shineout'
import menu from '../config/menu.json'
import Icons from './icon'

export default function Nav() {
  const { pathname } = useLocation()
  const history = useHistory()
  const [active, setActive] = useState(pathname)
  const data = menu

  const handleClick = (item) => {
    history.push({
      pathname: item.link,
      state: { id: 1 }
    })
    setActive(item.link)
  }
  const renderItem = (da) => {
    if (da.icon) {
      return (
        <span>
          <Icons name={da.icon} /> {da.title}
        </span>
      )
    }
    return da.title
  }

  return (
    <Menu
      mode="inline"
      keygen="id"
      data={data.nav}
      renderItem={renderItem}
      active={d => active === d.link}
      style={{ width: 200, minHeight: '100vh', background: '#1f273b' }}
      inlineIndent={24}
      onClick={handleClick}
      theme="dark"
    />
  )
}

