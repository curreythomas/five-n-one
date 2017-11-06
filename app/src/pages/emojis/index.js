import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

// load emojis
const li = emoji => {
  return <li key={emoji.id}>{emoji.value}</li>
}

const Emojis = props => {
  return (
    <div>
      <h1>Emojis</h1>
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
