import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox.js';
import AddFood from './AddFood.js'
import './App.css';

class App extends Component {
  state={//creo un state para poder tener una variable(Boolean) que pueda manipular
    isAddTrue:false,
    foodList: foods
  }

  showForm(){
    this.setState({
      isAddTrue:true
    })
  }

  addFood = (foodObject) =>{
    let foodListCopy = [...this.state.foodList]
    foodListCopy.push(foodObject);
    this.setState({
      foodList: foodListCopy
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.showForm.bind(this)}>Add new food</button>
        {this.state.isAddTrue && <AddFood/>} {/* Enseño AddFood si isAddTrue es verdadero */}
        
        {this.state.foodList.map((ele, index) => {
          return <FoodBox key={index} {...ele} addTheFood={this.addFood} />; //Estoy mostrando todos los elementos del array Foods
        })}
      </div>
    );
  }
}

export default App;
