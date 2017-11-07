const emojisObj = require('emojis-list')
const { map, keys, prop, append, isNil } = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')
// create color document

const createEmoji = k => ({
  id: uuid.v4(),
  value: prop(k, emojisObj)
})

let emojis = map(createEmoji, keys(emojisObj))

module.exports = app => {
  app.use(bodyParser.json())

  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })

  app.post('/emojis/new', (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        message:
          'Must have a json document {id, name, value} to post a document'
      })
      return
    }
    req.body.id = uuid.v4()
    emojis = append(req.body, emojis)
    res.send({ ok: true })
  })
}
