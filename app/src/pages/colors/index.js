import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

// load colors
const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

class Colors extends React.Component {
  state = {
    colors: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/colors')
      .then(res => res.json())
      .then(colors => this.setState({ colors }))
  }

  render() {
    return (
      <div>
        <h1>Colors</h1>
        <ul>{map(li, this.state.colors)}</ul>
      </div>
    )
  }
}

export default Colors
