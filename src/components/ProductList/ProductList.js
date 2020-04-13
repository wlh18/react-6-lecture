import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import { connect } from 'react-redux'
import { fetchProducts } from '../../ducks/productsReducer'
import './productList.css'

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="products-list">
        {this.props.products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {this.props.loading && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState.products
}

export default connect(mapStateToProps, { fetchProducts })(ProductList)
