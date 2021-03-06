import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "../Active/Home/Home";
import Page2 from "../Active/Page2/Page2";
import Page3 from "../Active/Page3/Page3";
import Page4 from "../Active/Page4/Page4";
import Page5 from "../Active/Page5/Page5";
import ReviewPage from '../Active/ReviewPage/ReviewPage';

function App() {
  const Router = HashRouter;

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/Page2" exact>
          <Page2 />
        </Route>

        <Route path="/Page3" exact>
          <Page3 />
        </Route>

        <Route path="/Page4" exact>
          <Page4 />
        </Route>

        <Route path="/ReviewPage" exact>
          <ReviewPage />
        </Route>

        <Route path="/Page5" exact>
          <Page5 />
        </Route>
      </Router>
    </div>
  );
}

export default App;
