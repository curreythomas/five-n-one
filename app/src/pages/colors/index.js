import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

// load colors
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
      <h1>Colors</h1>
      <ul>{map(li, props.colors)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}

const connector = connect(mapStateToProps)

// replace export statement
export default connector(Colors)
