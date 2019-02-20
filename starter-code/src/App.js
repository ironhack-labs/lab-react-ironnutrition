import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';


class App extends Component {
  state = {
    list: foods
  };

  render() {
    return (
      <div className="App">
        <FoodBox foodsProp={this.state.list}/>
      </div>
    );
  }
}

export default App;
