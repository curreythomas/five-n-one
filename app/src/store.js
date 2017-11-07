import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { starwars, currentStarwar } from './reducers/starwars'
import { fortuneCookies, currentFortune } from './reducers/fortune-cookies'
import { emojis, currentEmoji } from './reducers/emojis'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwars,
    currentStarwar,
    fortuneCookies,
    currentFortune,
    emojis,
    currentEmoji
  }),
  applyMiddleware(thunk)
)
