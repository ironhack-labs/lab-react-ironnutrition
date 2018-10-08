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
      foodFormState: false,
      details : [],
      calories: 0
    }
  }
  showFoodForm = () => {
    this.setState({foodFormVisible: !this.state.foodFormVisible});
  }//para que muestre el formulario de foodForm


  addFood = (food) =>{
    //console.log(food)
    this.state.foods.unshift(food);
    this.setState({foods:this.state.foods})
  }


deleteFood = (i) => {
  console.log(i)
  let copy = [...this.state.foods]
  copy.splice(i, 1);
  this.setState({
    foods: copy
  })
  // console.log(this.state)
};

searchFood = (input) => {
  let { foods } = this.state;
  //let {details} = this.state;
  //console.log(detail)
  console.log(foods)
  console.log(this.state.foods)
   //console.log(input)
   let filter = this.state.foods.filter(e =>e.name.toLowerCase().includes(input));
   this.setState({foods : filter});

};

 addDetails = (detail) =>{
//console.log(detail)
 this.state.details.push(detail);
 this.setState({details : this.state.details, calories: this.state.calories + detail.calories})

 }
 
 
render(){
  return (
      <div style={{padding:'50px 0'}}>
        <div>
          {/* <button onClick={ () => this.addFood(foods)}>Add new food</button> */}
          <input type="text" onChange={e =>this.searchFood(e.currentTarget.value)} ></input>
          <FoodForm allFood={food => this.addFood(food)}/>      
           {this.state.foods.map((e,i) => {
                return (
                  <div>
                    <FoodBox key={i} {...e} addDetails={detail => this.addDetails(detail)}/>
                    <button onClick={ () => {
                      console.log(i)
                      this.deleteFood(i)}}>Delete</button>
                     
                
            </div>
                  
                )
              })
           }

           <h3 className="title">Today's foods</h3>
                <ul>
                  {this.state.details.map((e,i) => <li key={i}>{e.quantity} {e.name} = {e.calories} cal</li> )}
                </ul>
                <p>Total: {this.state.calories} cal</p>
        </div>
      </div>
  )
 } 



}

export default App;
