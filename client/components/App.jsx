import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import Search from './Search';
import Review from './Review';
import User from './User';
import Test from './Test';
import Reason from './Reason';
import Action from './Action';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path='/' component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/edit' component={Edit} />
        <Route path='/search' component={Search} />
        <Route path='/review' component={Review} />
        <Route path='/user' component={User} />
        <Route path='/test' component={Test} />
        <Route path='/reason' component={Reason} />
        <Route path='/action' component={Action} />

      </React.Fragment>
    </Router>
  )
}

export default App
