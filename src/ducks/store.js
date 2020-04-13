import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import productsReducer from './productsReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
