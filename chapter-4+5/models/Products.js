const moment = require('moment')

module.exports = function (sequelize, DataTypes) {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
  })

  // prototype에 추가하면 함수를 추가한다고 생각.
  Products.prototype.dateFormat = (date) => moment(date).format('YYYY-MM-DD')

  return Products
}
