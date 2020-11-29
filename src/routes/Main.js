import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Register from '../pages/Register'

const Main = () => {
  return (
    <Switch>
      {' '}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
  )
}

export default Main
