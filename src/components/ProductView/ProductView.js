import React, { Component } from 'react'
import Loading from '../ProductList/Loading'
import './productView.css'

class ProductView extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="product-view-name">
          {this.props.products.product.name}
        </h1>
        <p className="product-price">${this.props.products.product.price}</p>
        <p className="product-description">
          {this.props.products.product.description}
        </p>
        <button onClick={() => this.props.history.push('/')}>
          BACK TO PRODUCTS
        </button>
      </div>
    )
  }
}
export default ProductView
