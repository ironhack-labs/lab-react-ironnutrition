import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class App extends Component {
  state = {
   food: foods,
   showForm: false,

  };

handleAddFood = (event) => { 
  event.preventDefault()
      let name = event.target.name.value
      let calories = event.target.calories.value
      let image = event.target.image.value
      event.target.name.value = ''
      event.target.calories.value = ''
 
  this.setState({
      foods: [...this.state.foods, {name: name, calories: calories}],
      showingForm: !this.state.showingForm
      })
    }

    handleFilter = (event) => {
      let input = event.target.value;
      let newFoods = this.state.food.filter(() => {
        return foods.name.includes(inp);
      });
      this.setState({
        filteredFoods: newFoods,
      });
    };
  }

