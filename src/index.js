import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import './index.css';

import * as serviceWorker from './serviceWorker';
import FoodBox from "./components/FoodBox";

ReactDOM.render(
  <React.StrictMode>
    <h1 className="title is-1">Iron Nutrition</h1>
    <FoodBox/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
