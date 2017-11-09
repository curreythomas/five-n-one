import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getStarwar, removeStarwar } from '../../action-creators/starwars'

class ShowStarwar extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getStarwar(id)
  }

  render() {
    const props = this.props
    console.log('props.currentStarwar.id', props.currentStarwar.id)
    console.log('props.match.params.id', props.match.params.id)

    if (props.currentStarwar.id !== props.match.params.id) {
      return <h1>Loading Starwar...</h1>
    }

    return (
      <div className="vh-100">
        <h1>{props.currentStarwar.value}</h1>
        <Link to={`/starwars/${props.currentStarwar.id}/edit`}>Edit</Link>
        <button
          onClick={e =>
            props.removeStarwar(props.currentStarwar.id, props.history)}
        >
          Remove
        </button>
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
    removeStarwar: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeStarwar(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowStarwar)
