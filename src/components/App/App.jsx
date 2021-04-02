import React from 'react';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from '../Active/Home/Home';

function App() {

const Router = HashRouter;

  return (
    <div className='App'>
      <Router>

        <Route path='/' exact>
          <Home />
        </Route>

      </Router>
    </div>
  );
}

export default App;
