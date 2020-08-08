import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { Step1, Step2, Step3, Step4 } from 'pages/Steps'
import { Error } from 'pages/Error'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Step1} />
      <Route exact path='/Step2' component={Step2} />
      <Route exact path='/Step3' component={Step3} />
      <Route exact path='/Step4' component={Step4} />
      <Route exact path='/null' render={() => (<Redirect to='/' />)} />
      <Route component={Error} />
    </Switch>
  )
}

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
