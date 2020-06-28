import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupContainer from '../pages/signup/Signup.container'
import Signin from '../pages/signin/Signin'
import Dashboard from '../pages/mypage/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppRouter = () => (
  <Router>
    <Route exact path="/" component={Signin}></Route>
    <Route exact path="/signup" component={SignupContainer}></Route>
    <Route exact path="/mypage/dashboard" component={Dashboard}></Route>
  </Router>
)

export default AppRouter
