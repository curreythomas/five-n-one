const buzzwordObj = require('buzzwords')
const { map, keys, prop, append, isNil, find, propEq } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

// create buzzwords document
const createBuzzword = k => ({
  id: uuid.v4(),
  value: prop(k, buzzwordObj)
})

let buzzwords = map(createBuzzword, keys(buzzwordObj))

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })

  app.get('/buzzwords/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(buzzwords))
  })

  app.post('/buzzwords/new', bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    buzzwords = append(req.body, buzzwords)
    res.send({ ok: true })
  })
}
