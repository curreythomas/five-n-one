import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addStarwar, chgStarwar } from '../../action-creators/starwars'

const StarwarForm = props => {
  return (
    <div>
      <h1>Add New Starwar</h1>
      <Form
        {...props.currentStarwar}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        cancelUrl="/Starwars"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentStarwar: state.currentStarwar
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgStarwar(field, value))
    },
    onSubmit: history => starwar => e => {
      e.preventDefault()
      dispatch(addStarwar(starwar, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(StarwarForm)
