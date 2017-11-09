import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  getFortune,
  removeFortune
} from '../../action-creators/fortune-cookies'

class ShowFortune extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getFortune(id)
  }

  render() {
    const props = this.props
    console.log('props.currentFortune.id', props.currentFortune.id)
    console.log('props.match.params.id', props.match.params.id)

    if (props.currentFortune.id !== props.match.params.id) {
      return <h1>Loading Fortune...</h1>
    }

    return (
      <div className="vh-100">
        <h1>{props.currentFortune.value}</h1>
        <Link to={`/fortune-cookies/${props.currentFortune.id}/edit`}>
          Edit
        </Link>
        <button
          onClick={e =>
            props.removeFortune(props.currentFortune.id, props.history)}
        >
          Remove
        </button>
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
    removeFortune: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeFortune(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowFortune)
