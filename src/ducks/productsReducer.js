import axios from 'axios'

const initialState = {
  products: [],
  product: {},
  loading: false,
}

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export function fetchProducts() {
  const productsPromise = axios.get('/api/products')

  return {
    type: FETCH_PRODUCTS,
    payload: productsPromise,
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS + '_PENDING':
      return { ...state, loading: true }
    case FETCH_PRODUCTS + '_FULFILLED':
      return { ...state, loading: false, products: action.payload.data }
    case FETCH_PRODUCTS + '_REJECTED':
      return { ...state, loading: false }
    default:
      return state
  }
}
