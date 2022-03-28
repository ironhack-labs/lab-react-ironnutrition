import React from 'react';
import ReactDOM from 'react-dom';
import './model/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();