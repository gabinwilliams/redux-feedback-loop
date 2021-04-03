import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';



// const currentPage = (state = 'page2', action) => {

//     if(action.type === 'page2') {

//       state = '/page3'
//     }

//     if(action.type === 'page3') {

//       state = '/page4'
//     }

//   return state;
// }

const questions = (state = {

  feedback: 'How are you feeling today?'
  // feedback2: 'How well are you understanding the content?',
  // feedback3: 'How well are you being supported?',
  // feedback4: 'Any comments you want to leave?'

  }, action) => {

  if(action.type === 'page2') {
    state = {feedback: 'How well are you understanding the content?'};
  }
  if(action.type === 'page3') {
    state = {feedback: 'How well are you being supported?'};
  }

  return state;
}


const feedback = (state = {

  feeling: 0,
  understanding: 0,
  support: 0,
  comments: ''
  
}, action) => {

  if(action.type === 'updateFeeling'){

    state = {...state, 
      feeling: action.payload
      }
  }

  if(action.type === 'updateUnderstanding'){

    state = {...state, 
      understanding: action.payload
      }
  }

  if(action.type === 'updateSupport'){

    state = {...state, 
      support: action.payload
      }
  }

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

