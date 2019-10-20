const express    = require('express')
const path       = require('path')
var cors         = require('cors')
const app        = express()
const bodyParser = require('body-parser')
const port       = process.env.PORT || 8000
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors({
    origin: '*'
}))

var routes_setter = require('./config/routes.js')
routes_setter(app)

app.listen(port, function () {
    console.log('Listening on', port)
})
