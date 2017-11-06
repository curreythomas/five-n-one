import { setStarwars } from './starwars'
import { SET_STARWARS } from '../constants'

test('get and dispatch colors from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_STARWARS)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setStarwars(mockDispatch)
})
