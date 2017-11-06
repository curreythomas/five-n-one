import fetch from 'isomorphic-fetch'
import { SET_FORTUNES } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setFortunes = async (dispatch, getState) => {
  const fortunes = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNES, payload: fortunes })
}
