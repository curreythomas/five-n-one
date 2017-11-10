const buzzwordObj = require('buzzwords')
const {
  map,
  keys,
  prop,
  append,
  isNil,
  find,
  propEq,
  equals,
  compose,
  reject
} = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

// create buzzwords document
const createBuzzword = k => ({
  id: uuid.v4(),
  value: prop(k, buzzwordObj)
})

let buzzwords = map(createBuzzword, keys(buzzwordObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/buzzwords', (req, res) => {
    res.send(buzzwords)
  })

  app.get('/buzzwords/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(buzzwords))
  })

  app.post('/buzzwords', (req, res) => {
    if (!req.body) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    console.log('body', req.body)
    buzzwords = append(req.body, buzzwords)
    res.send({ ok: true })
  })

  app.delete('/buzzwords/:id', (req, res) => {
    buzzwords = reject(compose(equals(req.params.id), prop('id')), buzzwords)
    res.send({ ok: true })
  })

  app.put('/buzzwords/:id', (req, res) => {
    if (!req.body) {
      return res
        .status(500)
        .send({ ok: false, message: 'Color Object Required' })
    }

    buzzwords = map(
      buzzword => (propEq('id', req.params.id, buzzword) ? req.body : buzzword),
      buzzwords
    )
    res.send({ ok: true })
  })
}
