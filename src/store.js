import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import userReducer from './redux/userReducer'
import productsReducer from './redux/productsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
