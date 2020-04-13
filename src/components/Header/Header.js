import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <div className="first-line-hold">
          <img
            src="https://pngimg.com/uploads/letter_p/letter_p_PNG83.png"
            className="fancy-p"
            alt="P"
            onClick={() => props.history.push('/')}
          />
          <p>ARTIAL</p>
        </div>
        <p>FOODS</p>
        <p>MARKET</p>
      </div>

      <h1 className="user">WELCOME, {props.user}!</h1>

      <Link className="cart-hold" to="/cart">
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png"
          alt="cart"
          className="cart"
        />
        {props.cart && <p className="cart-notification">{props.cart.length}</p>}
      </Link>
    </header>
  )
}

const mapStateToProps = (reduxState) => {
  return reduxState.user
}

export default connect(mapStateToProps)(withRouter(Header))
