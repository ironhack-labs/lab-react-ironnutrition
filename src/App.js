import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddNewFood from './components/AddNewFood';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
  state = {
    food: foods,
    showForm: false,
    searchTerm: '',
  };

  addFoodHandler = (theFood) => {
    // hacemos una copia del array de movies del state
    const foodCopy = [...this.state.food];
    // agregamos la nueva movie a la constante (copia del state) moviesCopy
    foodCopy.push(theFood);
    // actualizamos el state para lograr una nueva renderización del componente con la nueva comida agregada
    this.setState({
      food: foodCopy,
    });
  };

  dynamicSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
  };

  render() {
    let eachFood = this.state.food;
    //Si han buscado, filtramos los resultados para que nos pinte lo que buscamos
    if (this.state.searchTerm !== '') {
      eachFood = eachFood.filter((food) => {
        //Filtramos solamente los que contengan el nombre que buscamos (searchTerm) en minúscula
        if (food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
          return food;
        }
      });
    }
    //Pintamos los resultados
    eachFood = eachFood.map(function (meal) {
      return (
        <FoodBox
          key={meal.name}
          image={meal.image}
          name={meal.name}
          calories={meal.calories}
          quantity={meal.quantity}
        />
      );
    });

    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <AddNewFood addTheMeal={(e) => this.addFoodHandler(e)} />
        {/* Al componente Search le pasamos a la propiedad searchOnTime el método dynamicSearch con la información del searchTerm */}
        <Search searchOnTime={(searchTerm) => this.dynamicSearch(searchTerm)} />
        <div>{eachFood}</div>
      </div>
    );
  }
}

export default App;
