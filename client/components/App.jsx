import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home';
import AddNew from './AddNew';
import Edit from './Edit';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/add-new' component={AddNew} />
        <Route path='/edit' component={Edit} />
      </React.Fragment>
    </Router>
  )
}

export default App
