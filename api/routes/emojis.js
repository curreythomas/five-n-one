const emojisObj = require('emojis-list')
const { map, keys, prop } = require('ramda')
const uuid = require('uuid')
// create color document
const createEmoji = k => ({
  id: uuid.v4(),
  value: prop(k, emojisObj)
})

const emojis = map(createEmoji, keys(emojisObj))

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emojis)
  })
}
