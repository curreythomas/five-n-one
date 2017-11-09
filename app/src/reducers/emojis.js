import { SET_EMOJIS, CHG_CURRENT_EMOJI, SET_CURRENT_EMOJI } from '../constants'
const { merge } = require('ramda')

export const emojis = (state = [], action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return action.payload
    default:
      return state
  }
}

export const currentEmoji = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_EMOJI:
      return merge(state, action.payload)
    case SET_CURRENT_EMOJI:
      return action.payload
    default:
      return state
  }
}
