import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import {FoodBox} from './component/FoodBox';
import FoodForm from "./component/FoodForm";


class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods,
      foodFormState: false
    }
  }
  showFoodForm = () => {
    this.setState({foodFormVisible: !this.state.foodFormVisible});
  }//para que muestre el formulario de foodForm


  addFood = (food) =>{
    this.state.foods.unshift(food);
    this.setState({foods:this.state.foods})
  }


deleteFood = (i) => {
  let copy = [...this.state.foods]
  copy.splice(i, 1);
  this.setState({
    foods: copy
  })
};
 
render(){
  return (
      <div style={{padding:'50px 0'}}>
        <div>
          <button onClick={ () => this.addFood(foods)}>Add new food</button>
          <FoodForm allFood={food => this.addFood(food)}/>      
           {this.state.foods.map((e,i) => {
                return (
                  <div>
                    <FoodBox key={i} {...e}/>
                    <button onClick={ () => {
                      console.log(i)
                      this.deleteFood(i)}}>Delete</button>
                  </div>
                )
              })
           }
        </div>
      </div>
  )
 } 



}

export default App;
