import React from 'react'
// import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// load fortunes
const li = fortune => {
  return (
    <li key={fortune.id}>
      <Link to={`/fortune-cookies/${fortune.id}`}>{fortune.value}</Link>
    </li>
  )
}

const FortuneCookie = props => {
  return (
    <div>
      <h1>Fortune Cookies</h1>
      <Link to="/fortune-cookies/new">Add New Fortune</Link>
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
