import React from 'react'
import { Spin } from 'shineout'

export default function mySpin() {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <Spin size="54px" name="three-bounce" color="#dc3545" />
    </div>
  )
}

