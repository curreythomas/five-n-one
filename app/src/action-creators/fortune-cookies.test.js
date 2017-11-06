import { setFortunes } from './fortune-cookies'
import { SET_FORTUNES } from '../constants'

test('get and dispatch colors from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_FORTUNES)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setFortunes(mockDispatch)
})
