import React, { Component } from 'react'
import './cart.css'

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="cart-title"> YOUR CART </h1>

        <div className="cart-hold">
          {this.props.cart.cart.map((product) => {
            return (
              <div className="cart-product" key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            )
          })}
        </div>
        <h2 className="total">TOTAL: ${this.props.cart.total}</h2>
      </div>
    )
  }
}
export default Cart
