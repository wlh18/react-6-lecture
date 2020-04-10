import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import ProductView from './components/ProductView/ProductView'

export default (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route path="/cart" component={Cart} />
    <Route path="/product/:id" component={ProductView} />
  </Switch>
)
