# React-Redux feedback-loop

## Description

This is feedback-loop fullstack app!

The point of the project was to practice     using HashRouter, Route, and Link from `react-router-dom` and reinforce redux state-management in a single page app.

![screenshot of the app](https://github.com/gabinwilliams/redux-feedback-loop/blob/master/wireframes/gif/feedback-loop.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

## Installation

1. `Node.js/Express`
  - Open up your code editor of choice and run an `npm init`, `npm install`, `npm install express` in the terminal
  - Run `node server/server.js` -- path to your server.js file.

2. `axios`
  - In the terminal, run `npm install axios` which we will be using to communicate between the client and the server.

3. `@material-ui/core`
  - In terminal, run `npm install @material-ui/core` which will be used to do most of the styling.
    

## Dependencies

1. `"express": "^4.17.1"`
2. `"axios": "^0.19.2"`
2. `"@material-ui/icons": "^4.11.2`
4. `"@material-ui/core": "^4.11.3"`
5. `"pg": "^8.2.1"`
6. `"react": "^17.0.1"`
7. `"react-dom": "^17.0.1"`
8. `"react-redux": "^7.2.3"`
9. `"react-router-dom": "^5.2.0"`
10.`"react-scripts": "^4.0.1"`
11.`"redux-logger": "^3.0.6"`

## Usage

- Work through the feedback form and use the select menu to rate how your feeling according to the question.
- Once you have selected a rating, a button will appear allowing you to go to the next page.
- Once you have answer all the questions, you brought to a screen asking if you want to leave any comments.  Comments are optional.
- The next page thanks you for filling out the feedback and the button will alow you to go back to the homepage and fill in new feedback.  This button sends the feedback object to the database where it is store.
- The admin page is not built yet.  This is where a GET will be called to get the data on the server and display it in the admin portal.

## Built With

 Node.js, Express, react, redux, javaScript, material-ui.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application a reality.