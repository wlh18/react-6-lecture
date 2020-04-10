import axios from 'axios'

const initialState = {
  product: {},
  products: [],
  loading: false,
}

const GET_PRODUCTS = 'GET_PRODUCTS'

export function getProducts() {
  const products = axios.get('/api/products')

  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS + '_PENDING':
      return { ...state, loading: true }
    case GET_PRODUCTS + '_FULFILLED':
      return { ...state, loading: false, products: action.payload.data }
    case GET_PRODUCTS + '_REJECTED':
      return { ...state, loading: false }
    default:
      return state
  }
}
