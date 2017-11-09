import fetch from 'isomorphic-fetch'
import {
  SET_STARWARS,
  CHG_CURRENT_STARWAR,
  SET_CURRENT_STARWAR
} from '../constants'

const url = 'http://localhost:5000/starwars'

export const setStarwars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARWARS, payload: starwars })
}

export const addStarwar = (starwar, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(starwar)

  const result = await fetch(url + '/new', {
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
