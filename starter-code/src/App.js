import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './foodBox/FoodBox';
import Button from './button/Button';
import AddFoodForm from './AddFoodForm/AddFoodForm';

class App extends Component {
  state = {
    foods: [...foods],
    addFoodButton: true
  }

  addForm = (e) => {

    let NewState = {
      ...this.state,
      addFoodButton: false
    }

    console.log("Muestro formulario, madafaca")
    this.setState(NewState)
  }


  handleFormSubmit = (newfood) => {

    console.log(newfood)

    /* let NewState = {
      ...this.state,
      addFoodButton: true
    }

    this.setState(NewState) */
  }

  render() {
    return (
      <div className="App">
        <Button
          name="Insertar Comida"
          evento={() => this.state.addFoodButton ? this.addForm() : ""}
          displayed={this.state.addFoodButton ? "block" : "none"} />

        <AddFoodForm
          evento={() => this.handleFormSubmit}
          displayed={this.state.addFoodButton ? "none" : "block"} />


        {this.state.foods.map((food, index) =>
          <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} key={index} />
        )}
      </div>
    );
  }
}

export default App;
