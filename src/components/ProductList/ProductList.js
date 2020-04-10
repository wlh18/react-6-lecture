import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import { connect } from 'react-redux'
import { getProducts } from '../../redux/productsReducer'
import './productList.css'

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div className="products-list">
        {this.props.products.products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
        {this.props.products.loading && <Loading />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getProducts })(ProductList)
