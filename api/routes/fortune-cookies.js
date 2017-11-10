const fortunecookieObj = require('fortune-cookie')
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

// create color document
const createFortune = k => ({
  id: uuid.v4(),
  value: prop(k, fortunecookieObj)
})

let fortuneCookies = map(createFortune, keys(fortunecookieObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/fortune-cookies', (req, res) => {
    res.send(fortuneCookies)
  })

  app.get('/fortune-cookies/:id', (req, res) => {
    res.send(find(propEq('id', req.params.id))(fortuneCookies))
  })

  app.post('/fortune-cookies', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    fortuneCookies = append(req.body, fortuneCookies)
    res.send({ ok: true })
  })

  app.delete('/fortune-cookies/:id', (req, res) => {
    fortuneCookies = reject(
      compose(equals(req.params.id), prop('id')),
      fortuneCookies
    )
    res.send({ ok: true })
  })

  app.put('/fortune-cookies/:id', (req, res) => {
    if (!req.body) {
      return res
        .status(500)
        .send({ ok: false, message: 'Fortune Object Required' })
    }
    fortuneCookies = map(
      fortuneCookie =>
        propEq('id', req.params.id, fortuneCookie) ? req.body : fortuneCookie,
      fortuneCookies
    )
    res.send({ ok: true })
  })
}
