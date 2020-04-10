import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import userReducer from './redux/userReducer'
import productsReducer from './redux/productsReducer'
import cartReducer from './redux/cartReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
