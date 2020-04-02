import {
  SET_STARWARS,
  CHG_CURRENT_STARWAR,
  SET_CURRENT_STARWAR
} from '../constants'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const url = 'http://localhost:5000/starwars'

export const setStarwars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: starwars })
}

export const addStarwar = (starwar, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(starwar)

  const result = await fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setStarwars)
    history.push('/starwars')
  } else {
    console.log('result not ok', result)
  }
}

export const chgStarwar = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_STARWAR, payload: { [field]: value } })
}

export const getStarwar = id => async (dispatch, getState) => {
  const starwar = await fetch(url + '/' + id).then(res => res.json())
  dispatch({ type: SET_CURRENT_STARWAR, payload: starwar })
}

export const removeStarwar = (id, history) => async (dispatch, getState) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setStarwars)
    history.push('/starwars')
  } else {
    //handle error
  }
}

export const updateStarwar = (starwar, history) => async (
  dispatch,
  getState
) => {
  const result = await fetch(url + '/' + starwar.id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(starwar)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setStarwars)
    history.push('/starwars/' + starwar.id)
  }
}
