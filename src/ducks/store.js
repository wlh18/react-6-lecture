import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
