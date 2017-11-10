import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getBuzzword,
  chgBuzzword,
  updateBuzzword
} from '../../action-creators/buzzwords'

class EditBuzzwordForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBuzzword(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Buzzword</h1>
        <Form
          {...props.currentBuzzword}
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.currentBuzzword, props.history)}
          cancelUrl={`/buzzwords/${props.currentBuzzword.id}`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentBuzzword: state.currentBuzzword }
}
const mapActionsToProps = dispatch => {
  return {
    getBuzzword: id => dispatch(getBuzzword(id)),
    onChange: (field, value) => dispatch(chgBuzzword(field, value)),
    onSubmit: (buzzword, history) => e => {
      dispatch(updateBuzzword(buzzword, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditBuzzwordForm)
