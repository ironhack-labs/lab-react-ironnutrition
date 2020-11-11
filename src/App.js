import React, { Component } from 'react'
import './App.css';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>FORM</h1>
        <FoodBox/>
      </div>
    )
  }
}

export default App;
