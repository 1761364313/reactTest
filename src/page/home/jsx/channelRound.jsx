import React from 'react'
import ChannelItem from './channelItem'

export default function round() {
  const arr = [
    { id: '1', value: 33, color: '#37A2FF', channel: 'IOS', pro: '20' },
    { id: '2', value: 43, color: '#56bbaa', channel: 'Android', pro: '35' },
    { id: '3', value: 63, color: '#ea5b9f', channel: 'PC/MAC', pro: '40' },
    { id: '4', value: 366, color: '#ff9900', channel: 'Ipad', pro: '5' }
  ]
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        columnGap: '12px',
        marginTop: '12px'
      }}
    >
      {
        arr.map(item => <ChannelItem {...item} />)
      }
    </div>
  )
}
