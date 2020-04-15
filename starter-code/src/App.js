import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    listFood: foods,
  }

  render() {
    return (
      <div>
        {this.state.listFood.map((list) => (
              <FoodBox name={ list.pictureUrl } calories={ list.name } image={ list.image } />
            ))}
      </div>
    );
  }
}

export default App;
