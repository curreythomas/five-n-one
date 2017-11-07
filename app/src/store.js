import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { colors, currentColor } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { fortuneCookies } from './reducers/fortune-cookies'
import { emojis } from './reducers/emojis'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    starwars,
    fortuneCookies,
    emojis
  }),
  applyMiddleware(thunk)
)
