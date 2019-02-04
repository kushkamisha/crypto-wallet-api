'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const controller = require('./controller')

app.use('/', controller)
app.use(bodyParser.json())

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`)
})
