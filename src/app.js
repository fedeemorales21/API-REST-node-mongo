const express = require('express')

const app = express()

require('./db')

app.set('port', process.env.PORT || 3000)

app.use(express.urlencoded({ extended:false }))
app.use(express.json())

app.use(require('./routes/products.routes'))

module.exports = app