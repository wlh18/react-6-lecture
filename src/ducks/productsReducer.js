import axios from 'axios'

const initialState = {
  products: [],
  product: {},
  loading: false,
}

const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID'

export function fetchProducts() {
  const productsPromise = axios.get('/api/products')

  return {
    type: FETCH_PRODUCTS,
    payload: productsPromise,
  }
}

export function fetchProductById(id) {
  const productPromise = axios.get(`/api/products/${id}`)

  return {
    type: FETCH_PRODUCT_BY_ID,
    payload: productPromise,
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
    case FETCH_PRODUCT_BY_ID + '_PENDING':
      return { ...state, loading: true, product: {} }
    case FETCH_PRODUCT_BY_ID + '_FULFILLED':
      return { ...state, loading: false, product: action.payload.data }
    case FETCH_PRODUCT_BY_ID + '_REJECTED':
      return { ...state, loading: false }
    default:
      return state
  }
}
