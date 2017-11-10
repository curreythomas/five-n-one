import React from 'react'
// import fetch from 'isomorphic-fetch'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// load starwars
const li = starwar => {
  return (
    <li key={starwar.id}>
      <Link to={`/starwars/${starwar.id}`}>{starwar.value}</Link>
    </li>
  )
}

const Starwars = props => {
  return (
    <div>
      <h1>Starwars</h1>
      <Link to="/starwars/new">Add New Starwar</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { starwars: state.starwars }
}

const connector = connect(mapStateToProps)

// replace export statement
export default connector(Starwars)
