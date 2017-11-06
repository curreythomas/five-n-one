import { SET_FORTUNES } from '../constants'

export const fortuneCookies = (state = [], action) => {
  switch (action.type) {
    case SET_FORTUNES:
      return action.payload
    default:
      return state
  }
}
