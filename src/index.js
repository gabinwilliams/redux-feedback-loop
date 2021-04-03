import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';



const questions = (state = {

  feedback1: 'How are you feeling today?',
  feedback2: 'How well are you understanding the content?',
  feedback3: 'How well are you being supported?',
  feedback4: 'Any comments you want to leave?'

  }, action) => {

  if(action.type === 'page1') {
    state = state.feedback1;
  }

  return state;
}


const feedback = (state = {

  feeling: 0,
  understanding: 0,
  support: 0,
  comments: ''
  
}, action) => {

  return state;
}


const count = (state = 1, action) => {

  if(action.type === 'count++') {
    state ++;
  }
  if(action.type === 'count--') {
    state  --;
  }
  return state;
}



const store = createStore(
  combineReducers({
    questions: questions,
    feedback: feedback,
    count: count,
  }),
  applyMiddleware(logger)
);





ReactDOM.render(
<Provider store = { store }>
  <App />
</Provider>, document.getElementById('root'));

