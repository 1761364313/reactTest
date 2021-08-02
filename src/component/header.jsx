import React from 'react'
import { Input, Button, Image } from 'shineout'
import Icons from './icon'
import './header.scss'

export default function header() {
  return (
    <header className="header">
      <div className="fl item">
        <Icons name="align-right" size={16} />
        <Icons name="area-chart" size={16} />
        <Input.Group >
          <Input placeholder="输入关键字" />
          <Button text>
            <Icons name="search" size={16} />
          </Button>
        </Input.Group>
      </div>
      <div className="fr item">
        <Image width={40} height={40} style={{ marginRight: '20px' }} shape="circle" src="https://shine.wiki/images/1_b.jpg" title="circle" />
        <Icons name="th-large" size={16} />
        <Icons name="volume-down" size={16} />
      </div>
    </header>
  )
}
