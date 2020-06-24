import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Resister from '../pages/signup/Signup'
import Login from '../pages/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Login}></Route>
    <Route exact path="/signup" component={Resister}></Route>
  </Router>
)

export default AppRouter
