import axios from 'axios'

const initialState = {
  product: {},
  products: [],
  loading: false,
}

const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'

export function getProducts() {
  const products = axios.get('/api/products')

  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}

export function getProductById(id) {
  const product = axios.get(`/api/products/${id}`)

  return {
    type: GET_PRODUCT_BY_ID,
    payload: product,
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
    case GET_PRODUCT_BY_ID + '_PENDING':
      return { ...state, loading: true, product: {} }
    case GET_PRODUCT_BY_ID + '_FULFILLED':
      return { ...state, loading: false, product: action.payload.data }
    case GET_PRODUCT_BY_ID + '_REJECTED':
      return { ...state, loading: false }
    default:
      return state
  }
}
