import {
  SET_FORTUNES,
  CHG_CURRENT_FORTUNE,
  SET_CURRENT_FORTUNE
} from '../constants'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'http://localhost:5000/fortune-cookies'

export const setFortunes = async (dispatch, getState) => {
  const fortunes = await fetch(url).then(res => res.json())
  dispatch({ type: SET_FORTUNES, payload: fortunes })
}

export const addFortune = (fortune, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(fortune)

  const result = await fetch(url, {
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

export const getFortune = id => async (dispatch, getState) => {
  const fortune = await fetch(url + '/' + id).then(res => res.json())
  dispatch({ type: SET_CURRENT_FORTUNE, payload: fortune })
}

export const removeFortune = (id, history) => async (dispatch, getState) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setFortunes)
    history.push('/fortune-cookies')
  } else {
    //handle error
  }
}

export const updateFortune = (fortune, history) => async (
  dispatch,
  getState
) => {
  const result = await fetch(url + '/' + fortune.id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(fortune)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setFortunes)
    history.push('/fortune-cookies/' + fortune.id)
  }
}
