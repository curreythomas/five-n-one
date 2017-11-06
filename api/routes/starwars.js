const starwarsObj = require('starwars-names')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')

const individualStarWars = starwarsObj.all

const createStarWars = k => ({
  id: uuid.v4(),
  value: prop(k, individualStarWars)
})

const starwars = map(createStarWars, keys(individualStarWars))

module.exports = app => {
  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })
}
