const fortunecookieObj = require('fortune-cookie')
const { map, keys, prop, append, isNil } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

// create color document
const createFortune = k => ({
  id: uuid.v4(),
  value: prop(k, fortunecookieObj)
})

let fortuneCookies = map(createFortune, keys(fortunecookieObj))

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(fortuneCookies)
  })

  app.post('/fortune-cookies/new', bodyParser.json(), (req, res) => {
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
}
