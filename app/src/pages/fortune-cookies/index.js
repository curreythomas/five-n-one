import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

// load fortunes
const li = fortune => {
  return <li key={fortune.id}>{fortune.value}</li>
}

class FortuneCookie extends React.Component {
  state = {
    fortunes: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/fortune-cookies')
      .then(res => res.json())
      .then(fortunes => this.setState({ fortunes }))
  }

  render() {
    return (
      <div>
        <h1>Fortune Cookies</h1>
        <ul>{map(li, this.state.fortunes)}</ul>
      </div>
    )
  }
}

export default FortuneCookie
