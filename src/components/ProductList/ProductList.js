import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import './productList.css'

class ProductList extends Component {
  render() {
    return (
      <div className="products-list">
        {this.props.products.products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    )
  }
}
export default ProductList
