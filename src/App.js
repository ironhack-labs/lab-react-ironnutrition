import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodList from './components/FoodList/FoodList'

class App extends Component {

  state = {
    allFoods: foods,
  }

  render() {
    return (
      <div className="App">
        <FoodList db={this.state.allFoods}/>
      </div>
    );
  }
}

export default App;
