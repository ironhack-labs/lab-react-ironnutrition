import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends React.Component {
  state = {
    foods: foods,
  };

  addFood = (data) => {
    this.setState({
      foods: foods.push(data),
    });
  };

  render() {
    return (
      <div className="App">
        <AddFood addFood={this.addFood} />
        <div className="food-container">
          {foods.map((food) => (
            <FoodBox key={food.name} food={food} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
