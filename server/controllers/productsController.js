const products = require('../products.json')

module.exports = {
  getAllProducts: (req, res) => {
    setTimeout(() => {
      res.status(200).send(products)
    }, 5000)
  },

  getProductById: (req, res) => {
    const product = products.find((e) => e.id === +req.params.id)

    setTimeout(() => {
      if (product) {
        res.status(200).send(product)
      } else {
        res.status(404).send('Product not found')
      }
    }, 5000)
  },
}
