import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from './views/Main';
import About from './views/About';
import Reiki from './views/Reiki';

function App() {
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          //contact
        </Route>

        <Route exact path="/reiki">
          <Reiki />
        </Route>

        <Route exact path="/testimonials">
          //testimonials
        </Route>

        <Route exact path="/pastlife">
          //pastlife
        </Route>

        <Route exact path="/energyclearing">
          //energyclearing
        </Route>

        <Route exact path="/soulcoaching">
          //soulcoaching
        </Route>

        <Route exact path="/resources">
          //resources
        </Route>

      </Switch>
    </div>
  );
}

export default App;
