import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddOne from './components/AddOne';


class App extends Component {

  state = {
    foods: foods,
    celebsList: []
  }


  render() {
    return (
      <div>
        <AddOne />
        {foods.map(el => <FoodBox key={el.name} {...el} />)}
      </div>
    );
  }
}

export default App;
