import { SET_STARWARS, CHG_CURRENT_STARWAR } from '../constants'

const { merge } = require('ramda')

export const starwars = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}

export const currentStarwar = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_STARWAR:
      return merge(state, action.payload)
    case SET_STARWARS:
      return ''
    default:
      return state
  }
}
