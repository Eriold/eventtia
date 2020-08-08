import React from 'react'
// import { BoardEvent, BoardRegisted } from 'components/Board'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Step1, Step2, Step3, Step4 } from 'pages/Steps'
import { Error } from 'pages/Error'

const Routes = () => {
  return (
    <>
      <Route exact path='/' component={Step1} />
      <Route exact path='/Step2' component={Step2} />
      <Route exact path='/Step3' component={Step3} />
      <Route exact path='/Step4' component={Step4} />
      <Route exact path='/null' render={() => (<Redirect to='/' />)} />
      <Route component={Error} />
    </>
  )
}

export const App = () => {
  return (
    <Router>
      <Routes />
      {/* <BoardEvent title='Live Event Analytics' liveShow />
      <BoardRegisted /> */}
    </Router>
  )
}
