import fetch from 'isomorphic-fetch'
import { SET_COLORS } from '../constants'
import { CHG_CURRENT_COLOR } from '../constants'
const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export const addColor = (color, history) => async (dispatch, getState) => {
  console.log('color2', color)
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(color)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  })
    .then(res => res.json())
    .catch(err => console.log('error fetching add color', err))
  if (result.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {
    console.log('result not okay', result)
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } })
}
