import React from 'react'
import { formatTime } from '../../../lib/utils'

import ChannelRound from './channelRound'

export default function channel(props) {
  return (
    <div
      style={{
        flex: 1,
        background: '#fff',
        borderRadius: '8px',
        padding: '0 12px',
        boxSizing: 'border-box',
        height: '100%'
      }}
    >
      <header
        style={{
          width: '100%',
          height: '44px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #eee'
        }}
      >
        <h4
          style={{
            color: '#666',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          用户终端分布
        </h4>
        <p
          style={{
            lineHeight: '44px',
            color: '#666',
            fontSize: '14px',
            marginBottom: 0
          }}
        >
          {formatTime('YYYY-mm-dd HH:MM:SS')}
        </p>
      </header>
      <ChannelRound {...props} />
    </div>
  )
}
