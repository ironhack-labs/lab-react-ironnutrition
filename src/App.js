import React, { Component } from "react";import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {

  state = {foods, filteredFoodsList: foods}

  addFoodHandler = theFood => {
    // hacemos una copia del array de movies del state
    const foodsCopy = [...this.state.foods]
    // le agregamos "manualmente" un nuevo id al objeto theMovie que llega por parámetro
    theFood.id = [...this.state.foods].pop().id + 1
    // agregamos la nueva movie a la constante (copia del state) moviesCopy
    foodsCopy.push(theFood)
    // actualizamos el state para lograr una nueva renderización del componente con la nueva película agregada
    this.setState({
      foods: foodsCopy
    })
  }

  filterFoods = foodName => {
    const otraFoodsCopy = [...this.state.foods]
    const foodNameList = foodName.toLowerCase()
    const filteredFoods = otraFoodsCopy.filter(food => {
      return  food.name.toLowerCase().includes(foodNameList);
    })
     

    this.setState({ filteredFoodsList: filteredFoods });
  }

  render() {
    return (
    <div className="App">
     <AddFood addTheFood={this.addFoodHandler}/> 
     <Search filterFoods={this.filterFoods}/>
      {this.state.filteredFoodsList.map((oneFood, index) => {
        return (
         
          <FoodBox key={index} name={oneFood.name} image={oneFood.image} calories={oneFood.calories} quantity={oneFood.quantity} />
           
        )
      })}
    </div>
    )
  }
}

export default App;
