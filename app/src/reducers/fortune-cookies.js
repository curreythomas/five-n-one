import { SET_FORTUNES, CHG_CURRENT_FORTUNE } from '../constants'

const { merge } = require('ramda')
export const fortuneCookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNES:
      return action.payload
    default:
      return state
  }
}

export const currentFortune = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_FORTUNE:
      return merge(state, action.payload)
    case SET_FORTUNES:
      return ''
    default:
      return state
  }
}
