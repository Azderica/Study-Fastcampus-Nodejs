const models = require('./models')

async function getProducts() {
  try {
    const product1 = await models.Products.findByPk(1)
    const product4 = await models.Products.findByPk(4)

    console.log(product1.dataValues)
    console.log(product4.dataValues)
  } catch (err) {
    console.log(err)
  }
}

getProducts()
