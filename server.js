require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 2000

app.use([cors()])
require('./startup/router')(app)

app.listen(Number(port), () => console.log('listening on port ' + port))