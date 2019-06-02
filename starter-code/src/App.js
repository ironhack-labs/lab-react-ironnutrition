import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.min.css'
import '../node_modules/bulma-helpers/css/bulma-helpers.min.css'
import './App.css';
import Header from './components/Header';
import FoodBox from './components/FoodBox';
import foods from './foods.json'

class App extends Component {
  render() {
    console.log(foods)
    return (
      <div>
        <Header />
        <div class="control container has-margin-top-20">
          <input class="input" type="text" placeholder="Search it..." />
        </div>
        <div className="is-centered has-margin-top-20">
            {foods.map(food => <FoodBox data={food} />)}
        </div>
      </div>
    );
  }
}

export default App;
