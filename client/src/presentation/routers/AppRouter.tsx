import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Login}></Route>
    <Route exact path="/signup" component={Signup}></Route>
  </Router>
)

export default AppRouter
