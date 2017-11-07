import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addEmoji, chgEmoji } from '../../action-creators/emojis'

const EmojiForm = props => {
  return (
    <div>
      <h1>Add New Emoji</h1>
      <Form
        {...props.currentEmoji}
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        cancelUrl="/Emojis"
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentEmoji: state.currentEmoji
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgEmoji(field, value))
    },
    onSubmit: history => emoji => e => {
      e.preventDefault()
      dispatch(addEmoji(emoji, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EmojiForm)
