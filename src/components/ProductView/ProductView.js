import React, { Component } from 'react'
import Loading from '../ProductList/Loading'
import { connect } from 'react-redux'
import { fetchProductById } from '../../ducks/productsReducer'
import './productView.css'

class ProductView extends Component {
  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id)
  }

  render() {
    return (
      <div className="container">
        <h1 className="product-view-name">{this.props.product.name}</h1>
        <p className="product-price">${this.props.product.price}</p>
        <p className="product-description">{this.props.product.description}</p>
        <button onClick={() => this.props.history.push('/')}>
          BACK TO PRODUCTS
        </button>
        {this.props.loading && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = (state) => state.products

export default connect(mapStateToProps, { fetchProductById })(ProductView)
