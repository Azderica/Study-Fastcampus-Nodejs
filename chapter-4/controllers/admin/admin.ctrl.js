const models = require('../../models')

exports.get_products = (_, res) => {
  models.Products.findAll({}).then((products) => {
    // DB에서 받은 products를 products변수명으로 내보냄
    res.render('admin/products.html', { products: products })
    // 아래처림 일치하는 경우, 줄여쓸 수도 있습니다.
    // res.render('admin/products.html', { products })
  })
}

exports.get_products_write = (_, res) => {
  res.render('admin/write.html')
}

exports.post_products_write = (req, res) => {
  models.Products.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  }).then(() => {
    res.redirect('/admin/products')
  })

  // models.Products.create(req.body).then(() => {
  //   res.redirect('/admin/products')
  // })
}

exports.get_products_detail = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    res.render('admin/detail.html', { product: product })
  })
}
