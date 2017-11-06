import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
let colors = []

// load colors
const color = fetch('http://localhost:5000/colors')
  .then(res => res.json())
  .then(colors => (colors = colors))

console.log(color)

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <p>{map(li, colors)}</p>
    </div>
  )
}

export default Colors
