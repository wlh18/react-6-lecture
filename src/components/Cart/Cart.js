import React, { Component } from 'react'
import { connect } from 'react-redux'
import './cart.css'

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="cart-title"> YOUR CART </h1>

        <div className="cart-hold">
          {this.props.cart.map((product) => {
            return (
              <div className="cart-product" key={product.id}>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <br />
                <br />
              </div>
            )
          })}
        </div>
        <h2 className="total">TOTAL: ${this.props.total.toFixed(2)}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => state.cart

export default connect(mapStateToProps)(Cart)
