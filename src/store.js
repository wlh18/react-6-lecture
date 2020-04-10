import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import userReducer from './redux/userReducer'

const rootReducer = combineReducers({ userReducer })

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
