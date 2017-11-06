const fortunecookieObj = require('fortune-cookie')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createFortune = k => ({
  id: uuid.v4(),
  value: prop(k, fortunecookieObj)
})

const fortuneCookies = map(createFortune, keys(fortunecookieObj))

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(fortuneCookies)
  })
}
