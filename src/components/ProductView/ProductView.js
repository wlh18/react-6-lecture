import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../ProductList/Loading'
import { getProductById } from '../../redux/productsReducer'
import './productView.css'

class ProductView extends Component {
  componentDidMount() {
    this.props.getProductById(this.props.match.params.id)
  }

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
        {this.props.products.loading && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getProductById })(ProductView)
