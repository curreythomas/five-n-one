import fetch from 'isomorphic-fetch'
import { SET_FORTUNES, CHG_CURRENT_FORTUNE } from '../constants'

const url = 'http://localhost:5000/fortune-cookies'

export const setFortunes = async (dispatch, getState) => {
  const fortunes = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNES, payload: fortunes })
}

export const addFortune = (fortune, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(fortune)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setFortunes)
    history.push('/fortune-cookies')
  } else {
    console.log('result not ok', result)
  }
}

export const chgFortune = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_FORTUNE, payload: { [field]: value } })
}
