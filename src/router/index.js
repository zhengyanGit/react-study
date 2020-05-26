import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

//页面载入
import Index from "../pages/index/index";
import Book from "../pages/book/index";
import User from "../pages/user/index";
import Detials from "../pages/details/index";
import About from "../pages/about/index";

class RouterIndex extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" exact render={() => {
          return <Redirect to="/index/child1" />
        }} />
        <Route path="/index" exact render={() => {
          return <Redirect to="/index/child1" />
        }} />
        <Route path="/index/:id" component={Index} />
        <Route path="/book" component={Book} />
        <Route path="/user" component={User} />
        <Route path="/details" component={Detials} />
        <Route path="/about" component={About} />
      </Switch>
    )
  }
}

export default RouterIndex