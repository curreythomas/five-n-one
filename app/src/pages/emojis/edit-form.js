import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { getEmoji, chgEmoji, updateEmoji } from '../../action-creators/emojis'

class EditEmojiForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getEmoji(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Emoji</h1>
        <Form
          {...props.currentEmoji}
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.currentEmoji, props.history)}
          cancelUrl={`/emojis/${props.currentEmoji.id}`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentEmoji: state.currentEmoji }
}
const mapActionsToProps = dispatch => {
  return {
    getEmoji: id => dispatch(getEmoji(id)),
    onChange: (field, value) => dispatch(chgEmoji(field, value)),
    onSubmit: (emoji, history) => e => {
      dispatch(updateEmoji(emoji, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditEmojiForm)
