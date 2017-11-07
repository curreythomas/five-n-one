import fetch from 'isomorphic-fetch'
import { SET_EMOJIS, CHG_CURRENT_EMOJI } from '../constants'

const url = 'http://localhost:5000/emojis'

export const setEmojis = async (dispatch, getState) => {
  const emojis = await fetch(url).then(res => res.json())
  dispatch({ type: SET_EMOJIS, payload: emojis })
}

export const addEmoji = (emoji, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(emoji)

  const result = await fetch(url + '/new', {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setEmojis)
    history.push('/emojis')
  } else {
    console.log('result not ok', result)
  }
}

export const chgEmoji = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_EMOJI, payload: { [field]: value } })
}
