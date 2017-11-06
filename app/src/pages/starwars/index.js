import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

// load starwars
const li = starwar => {
  return <li key={starwar.id}>{starwar.value}</li>
}

class Starwars extends React.Component {
  state = {
    starwars: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(starwars => this.setState({ starwars }))
  }

  render() {
    return (
      <div>
        <h1>Starwars</h1>
        <ul>{map(li, this.state.starwars)}</ul>
      </div>
    )
  }
}

export default Starwars
