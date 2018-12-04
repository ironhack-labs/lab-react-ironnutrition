import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'

class App extends Component {
  constructor(){
    super()
    this.state ={
      foods: foods
    }
  }
  render() {

    let foodboxs=this.state.foods.map((food,index)=>{
      return (<FoodBox name={food.name} quantity={food.quantity} img={food.image} cal={food.calories} id={index}/>)
    })
    return (
      <div className="App">
        {foodboxs}
      </div>
    );
  }
}

export default App;
