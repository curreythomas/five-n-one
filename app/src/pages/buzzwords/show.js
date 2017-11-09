import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBuzzword, removeBuzzword } from '../../action-creators/buzzwords'

class ShowBuzzword extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getBuzzword(id)
  }

  render() {
    const props = this.props
    console.log('props.currentBuzzword.id', props.currentBuzzword.id)
    console.log('props.match.params.id', props.match.params.id)

    if (props.currentBuzzword.id !== props.match.params.id) {
      return <h1>Loading Buzzword...</h1>
    }

    return (
      <div className="vh-100">
        <h1>{props.currentBuzzword.value}</h1>
        <Link to={`/buzzwords/${props.currentBuzzword.id}/edit`}>Edit</Link>
        <button
          onClick={e =>
            props.removeBuzzword(props.currentBuzzword.id, props.history)}
        >
          Remove
        </button>
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
    removeBuzzword: (id, history) => {
      if (window.confirm('Are you sure?')) {
        dispatch(removeBuzzword(id, history))
      }
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowBuzzword)
