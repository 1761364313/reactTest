import React from 'react'
import { Icon } from 'shineout'

const url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
const FontAwesome = Icon(url, 'FontAwesome', 'fa')

export default function Icons(props) {
  const { name, type, size = 20 } = props
  return (
    <FontAwesome name={name} type={type} fontSize={size} />
  )
}
