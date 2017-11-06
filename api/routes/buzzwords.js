const buzzwordObj = require('buzzwords')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create buzzwords document
const createBuzzword = k => ({
  id: uuid.v4(),
  value: prop(k, buzzwordObj)
})

const buzzwords = map(createBuzzword, keys(buzzwordObj))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })
}
