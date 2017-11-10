import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { getColor, chgColor, updateColor } from '../../action-creators/colors'

class EditColorForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Color</h1>
        <Form
          {...props.currentColor}
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.currentColor, props.history)}
          cancelUrl={`/colors/${props.currentColor.id}`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentColor: state.currentColor }
}
const mapActionsToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    onChange: (field, value) => dispatch(chgColor(field, value)),
    onSubmit: (color, history) => e => {
      dispatch(updateColor(color, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditColorForm)
