import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getFortune,
  chgFortune,
  updateFortune
} from '../../action-creators/fortune-cookies'

class EditFortuneForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFortune(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Fortune</h1>
        <Form
          {...props.currentFortune}
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.currentFortune, props.history)}
          cancelUrl={`/fortune-cookies/${props.currentFortune.id}`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentFortune: state.currentFortune }
}
const mapActionsToProps = dispatch => {
  return {
    getFortune: id => dispatch(getFortune(id)),
    onChange: (field, value) => dispatch(chgFortune(field, value)),
    onSubmit: (fortune, history) => e => {
      dispatch(updateFortune(fortune, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditFortuneForm)
