import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

// load emojis
const li = emoji => {
  return <li key={emoji.id}>{emoji.value}</li>
}

class Emojis extends React.Component {
  state = {
    emojis: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/emojis')
      .then(res => res.json())
      .then(emojis => this.setState({ emojis }))
  }

  render() {
    return (
      <div>
        <h1>Emojis</h1>
        <ul>{map(li, this.state.emojis)}</ul>
      </div>
    )
  }
}

export default Emojis
