import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// load emojis
const li = emoji => {
  return <li key={emoji.id}>{emoji.value}</li>
}

const Emojis = props => {
  return (
    <div>
      <h1>Emojis</h1>
      <Link to="/emojis/new">Add New Emoji</Link>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { emojis: state.emojis }
}

const connector = connect(mapStateToProps)

// replace export statement
export default connector(Emojis)
