import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './addNewFood';
import Search from './Search';

class App extends React.Component {
  state = {
    foods: foodsJson,
    filteredFoods: foodsJson
  };

  handleFilterFood = (query) => {

    this.setState((previousState) => {
      return {
        filteredFoods: previousState.foods.filter((food) => {
          return food.name.toLowerCase().includes(query.toLowerCase());
        }),
      };
    });
  };

  addFoodHandler = (newFood) => {
    //Adicionar um novo filme no array
    this.setState((previousState) => {
      return {
        foods: previousState.foods.concat(newFood),
      };
    });
  };

  render() {
    const { filteredFoods } = this.state;

    return (
      <>
        <Search filterFood={this.handleFilterFood} />
        {filteredFoods.map((food) => {
          return (
            <>
              <FoodBox {...food} />
            </>
          );
        })}
        <AddNewFood addFood={this.addFoodHandler} />
      </>
    );
  }
}

export default App;
