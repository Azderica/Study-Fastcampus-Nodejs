const express = require('express')
const router = express.Router()
const nunjucks = require('nunjucks')

function testMiddleware(req, res, next) {
  console.log('First Middleware')
  next()
}

function testMiddleware2(req, res, next) {
  console.log('Second Middleware')
  next()
}

function loginRequired(req, res, next) {
  if (로그인이되어있지않으면) {
    res.redirect()
  } else {
    next()
  }
}

// '/' 이후 testMiddleware 이후 내가 정의한 함수로 가는 순서
router.get('/', testMiddleware, testMiddleware2, (req, res) => {
  res.send('admin')
})

router.get('/products', (req, res) => {
  // res.send('admin products')
  res.render('admin/products.html', {
    message: '<h1>hello!!!!!!</h1>',
    online: 'express',
  })
})

router.get('/products/write', (req, res) => {
  res.render('admin/write.html')
})

router.post('/products/write', (req, res) => {
  res.send(req.body)
})

module.exports = router
