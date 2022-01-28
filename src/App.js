import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Main from './views/Main';
import About from './views/About';
import Reiki from './views/Reiki';
import PastLife from './views/PastLife';
import EnergyClearing from './views/EnergyClearing';
import SoulCoaching from './views/SoulCoaching';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';
import Resources from './views/Resources';

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
          <Contact />
        </Route>

        <Route exact path="/reiki">
          <Reiki />
        </Route>

        <Route exact path="/testimonials">
          <Testimonials />
        </Route>

        <Route exact path="/pastlife">
          <PastLife />
        </Route>

        <Route exact path="/energyclearing">
          <EnergyClearing />
        </Route>

        <Route exact path="/soulcoaching">
          <SoulCoaching />
        </Route>

        <Route exact path="/resources">
          <Resources/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
