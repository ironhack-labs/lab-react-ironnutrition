import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodList from "./foods.json"

import FoodBox from "./FoodBox.js"
import Main from "./Main.js"

class App extends Component {
 

  render() {

    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}

export default App;
