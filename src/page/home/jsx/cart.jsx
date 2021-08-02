import React from 'react'
import Icon from '../../../component/icon'
import Canvas from './canvas'

export default function car(props) {
  return (
    <div
      style={{
        height: '180px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: '1',
        flexDirection: 'column',
        background: '#fff'
      }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 24px 0 24px',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Icon {...props.titleIcon} />
          <div
            style={{
              marginLeft: '8px'
            }}
          >
            <h4 style={{ fontSize: '16px', lineHeight: '12px' }}>{props.title}</h4>
            <p style={{ fontSize: '12px', color: '#888' }} >{props.tips}</p>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column'
        }}
        >
          <h4 style={{ fontSize: '28px', lineHeight: '22px' }} >{props.number}</h4>
          <p style={{ fontSize: '12px', color: props.type === 'add' ? 'red' : 'green' }}>{props.tag} <Icon {...props.jtIcon} /> </p>
        </div>
      </header>
      <Canvas {...props} />
    </div>
  )
}
