const starwarsObj = require('starwars-names')
const {
  map,
  keys,
  prop,
  append,
  isNil,
  find,
  propEq,
  reject,
  compose,
  equals
} = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const individualStarWars = starwarsObj.all

const createStarWars = k => ({
  id: uuid.v4(),
  value: prop(k, individualStarWars)
})

let starwars = map(createStarWars, keys(individualStarWars))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/starwars', (req, res) => {
    res.send(starwars)
  })

  app.get('/starwars/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(starwars))
  })

  app.post('/starwars', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    console.log('body', req.body)
    starwars = append(req.body, starwars)
    res.send({ ok: true })
  })

  app.delete('/starwars/:id', (req, res) => {
    starwars = reject(compose(equals(req.params.id), prop('id')), starwars)
    res.send({ ok: true })
  })

  app.put('/starwars/:id', (req, res) => {
    if (!req.body) {
      return res
        .status(500)
        .send({ ok: false, message: 'Color Object Required' })
    }

    starwars = map(
      starwar => (propEq('id', req.params.id, starwar) ? req.body : starwar),
      starwars
    )
    res.send({ ok: true })
  })
}
