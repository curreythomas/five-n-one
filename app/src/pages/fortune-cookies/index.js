import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'

// load fortunes
const li = fortune => {
  return <li key={fortune.id}>{fortune.value}</li>
}

const FortuneCookie = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      <ul>{map(li, props.fortuneCookies)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { fortuneCookies: state.fortuneCookies }
}

const connector = connect(mapStateToProps)

// replace export statement
export default connector(FortuneCookie)
