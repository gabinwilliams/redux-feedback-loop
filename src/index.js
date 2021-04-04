import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

// questions provided on each page
const questions = (
  state = {
    feedback: "How are you feeling today?",
  },
  action
) => {
  if (action.type === "page1") {
    state = { feedback: "How are you feeling today?" };
  }

  if (action.type === "page2") {
    state = { feedback: "How well are you understanding the content?" };
  }
  if (action.type === "page3") {
    state = { feedback: "How well are you being supported?" };
  }
  if (action.type === "page4") {
    state = { feedback: "Any comments you want to leave?" };
  }

  return state;
};

// stores the values selected on feedback pages and is the obj we send in POST to the server
const feedback = (
  state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: "",
  },
  action
) => {
  if (action.type === "reset") {
    state = {
      feeling: 0,
      understanding: 0,
      support: 0,
      comments: "",
    };
  }

  if (action.type === "updateFeeling") {
    state = { ...state, feeling: action.payload };
  }

  if (action.type === "updateUnderstanding") {
    state = { ...state, understanding: action.payload };
  }

  if (action.type === "updateSupport") {
    state = { ...state, support: action.payload };
  }

  if (action.type === "updateComment") {
    state = { ...state, comments: action.payload };
  }

  return state;
};

// used for page count and triggers other state
const count = (state = 1, action) => {
  if (action.type === "count++") {
    state++;
  }
  if (action.type === "count--") {
    state--;
  }

  if (action.type === "countRestart") {
    state = 1;
  }

  return state;
};

const store = createStore(
  combineReducers({
    questions: questions,
    feedback: feedback,
    count: count,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  // wrap app in provider to allow for redux logger in console log
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
