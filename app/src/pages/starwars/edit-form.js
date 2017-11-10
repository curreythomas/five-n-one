import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import {
  getStarwar,
  chgStarwar,
  updateStarwar
} from '../../action-creators/starwars'

class EditStarwarForm extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getStarwar(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Starwar</h1>
        <Form
          {...props.currentStarwar}
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.currentStarwar, props.history)}
          cancelUrl={`/starwars/${props.currentStarwar.id}`}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { currentStarwar: state.currentStarwar }
}
const mapActionsToProps = dispatch => {
  return {
    getStarwar: id => dispatch(getStarwar(id)),
    onChange: (field, value) => dispatch(chgStarwar(field, value)),
    onSubmit: (starwar, history) => e => {
      dispatch(updateStarwar(starwar, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditStarwarForm)
