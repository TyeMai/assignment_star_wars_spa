import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navlink
} from 'react-router-dom'

import FilmsContainer from '../containers/FilmsContainer'
import PlanetsContainer from '../containers/PlanetsContainer'
import PeopleContainer from '../containers/PeopleContainer'

const NavLinks = () => {

}

const App = () => (
  <Router>
    <div>
      {/* <NavLinks /> */}
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/films" component={FilmsContainer} />
      <Route path="/people" render={() => <h1>species</h1>} />
      <Route path="/planets" component={PlanetsContainer} />
      <Route path="/species" render={() => <h1>species</h1>} />
      <Route path="/starships" render={() => <h1>starships</h1>} />
      <Route path="/vehicles" render={() => <h1>vehicles</h1>} />
    </div>
  </Router>
)

export default App;
