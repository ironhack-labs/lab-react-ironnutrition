import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './foodBox/FoodBox';
import Button from './button/Button';
import AddFoodForm from './AddFoodForm/AddFoodForm';
import SearchForm from './SearchForm/SearchForm';
import Papeo from './Papeo/Papeo'

class App extends Component {
  state = {
    foods: [...foods],
    addFoodButton: true,
    lista: []
  }

  allFoods = [...foods]



  addForm = (e) => {

    let NewState = {
      ...this.state,
      addFoodButton: false
    }

    this.setState(NewState)
  }




  handleFormSubmit = (newfood) => {
    let newState = {
      ...this.state,
      addFoodButton: true,
      papeo: []
    }

    newState.foods.push(newfood)


    this.allFoods.push(newfood)

    this.setState(newState)

  }

  updateSearch = (query) => {

    let newState = {
      ...this.state
    }

    newState.foods = this.allFoods.filter(comida => comida.name.toLowerCase().startsWith(query.toLowerCase())
    )

    this.setState(newState)
  }

  addComida = (nombre, cantidad) => {

    let newState = {
      ...this.state
    }

    newState.lista.push({ nombre, cantidad })

    this.setState(newState)
  }


  render() {
    return (
      <div className="App">
        <h1>IronNutrion</h1>
        <SearchForm
          evento={this.updateSearch}
        />
        <Button
          name="Insertar Comida"
          evento={() => this.state.addFoodButton ? this.addForm() : ""}
          displayed={this.state.addFoodButton ? "block" : "none"} />

        <AddFoodForm
          evento={this.handleFormSubmit}
          displayed={this.state.addFoodButton ? "none" : "block"} />
        {this.state.foods.map((food, index) =>
          <FoodBox evento={this.addComida} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} key={index} />
        )}
        <Papeo contenido={this.state.lista} />
      </div>
    );
  }
}

export default App;
