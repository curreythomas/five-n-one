import { SET_COLORS } from '../constants'
import { CHG_CURRENT_COLOR } from '../constants'
const { merge } = require('ramda')

export const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}

export const currentColor = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      return merge(state, action.payload)
    case SET_COLORS:
      return ''
    default:
      return state
  }
}
