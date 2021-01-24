const express = require('express')
const nunjucks = require('nunjucks')
const logger = require('morgan')
const bodyParser = require('body-parser')

const admin = require('./routes/admin')
const contacts = require('./routes/contacts')

const app = express()
const port = 3000

nunjucks.configure('template', {
  autoescape: true,
  express: app,
})

// middleware 세팅
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/uploads', express.static('uploads'))

app.use((req, res, next) => {
  app.locals.isLogin = true
  app.locals.req_path = req.path
  next()
})

app.get('/', (req, res) => {
  res.send('hello express')
})

function vipMiddleware(req, res, next) {
  console.log('Highest Middleware')
  next()
}

// routing
app.use('/admin', vipMiddleware, admin)
app.use('/contacts', contacts)

app.use((req, res, _) => {
  res.status(400).render('common/404.html')
})

app.use((req, res, _) => {
  res.status(500).render('common/500.html')
})

app.listen(port, () => {
  console.log('Express listening on port', port)
})
