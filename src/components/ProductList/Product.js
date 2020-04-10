import React from 'react'
import { Link } from 'react-router-dom'
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
      <button className="add-to-cart">Add to cart</button>
    </div>
  )
}
export default Product
