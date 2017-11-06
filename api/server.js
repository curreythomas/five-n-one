const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ credentials: true }))

// load routes here
const colorRoutes = require('./routes/colors')
const starwarsRoutes = require('./routes/starwars')
const buzzwordsRoutes = require('./routes/buzzwords')
const fortuneCookieRoutes = require('./routes/fortune-cookies')
const emojisRoutes = require('./routes/emojis')

app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)
starwarsRoutes(app)
buzzwordsRoutes(app)
fortuneCookieRoutes(app)
emojisRoutes(app)

app.listen(5000)
console.log('Server listening at 5000')
