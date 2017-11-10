import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addColor, chgColor } from '../../action-creators/colors'

const ColorForm = props => {
  return (
    <div>
      <h1>Add New Color</h1>
      <Form
        {...props.currentColor}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.currentColor, props.history)}
        cancelUrl="/colors"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(field, value))
    },
    onSubmit: (color, history) => e => {
      dispatch(addColor(color, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(ColorForm)
