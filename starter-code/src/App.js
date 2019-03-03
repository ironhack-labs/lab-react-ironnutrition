import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import FoodBox from "./components/FoodBox"
import Navbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {
          <FoodBox />
        }
      </div>
    );
  }
}

export default App;
