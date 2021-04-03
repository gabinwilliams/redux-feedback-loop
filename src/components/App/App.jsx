import React from 'react';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from '../Active/Home/Home';
import Page2 from '../Active/Page2/Page2';
import Page3 from '../Active/Page3/Page3';

function App() {

const Router = HashRouter;

  return (
    <div className='App'>
      <Router>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/Page2' exact>
          <Page2 />
        </Route>

        <Route path='/Page3' exact>
          <Page3 />
        </Route>

      </Router>
    </div>
  );
}

export default App;
