import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/cartReducer'
import { connect } from 'react-redux'
import './productList.css'

const Product = (props) => {
  const {
    data: { name, price, description, id },
  } = props
  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-name">
        {name}
      </Link>

      <p>${price}</p>
      <p>{description}</p>
      <button
        onClick={() => props.addToCart(props.data)}
        className="add-to-cart"
      >
        Add to cart
      </button>
    </div>
  )
}

export default connect(null, { addToCart })(Product)
