import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addFortune, chgFortune } from '../../action-creators/fortune-cookies'

const FortuneForm = props => {
  return (
    <div>
      <h1>Add New Fortune</h1>
      <Form
        cancelUrl="/fortune-cookies"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentFortune}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentFortune: state.currentFortune
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgFortune(field, value))
    },
    onSubmit: history => fortune => e => {
      e.preventDefault()
      dispatch(addFortune(fortune, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(FortuneForm)
