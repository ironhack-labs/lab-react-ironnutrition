import React, { Component } from 'react';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    foodList: foods,
  };

  addOneFood = (newFoodObj) => {
    const foodListCopy = [...this.state.foodList];
    foodListCopy.unshift(newFoodObj); //añadimos el nuevo alimento al principio de la lista

    this.setState({ foodList: foodListCopy });
  };

  searchedFood = (input) => {
    let foodListCopy = [...foods].filter((
      food //at the end worked this way...still not sure why I needed to bind filter to the array directly and not to the variable i created to store it...
    ) => food.name.toLowerCase().includes(input.toLowerCase()));

    this.setState({ foodList: foodListCopy });
  };

  render() {
    return (
      <div className="App">
        <h1>
          <b>IronNutrition</b>
        </h1>
        <SearchBar searchedFood={this.searchedFood} />
        <AddNewFood addNewFood={this.addOneFood} />
        {this.state.foodList.map((foodObj) => {
          return <FoodBox {...foodObj} key={foodObj.name} />; //paso objct foo destructurado
        })}
      </div>
    );
  }
}

export default App;
