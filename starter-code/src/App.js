import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";



class App extends Component {
  constructor() {
    super();
    this.state = {
      foods,
      list:[]
    };
  }

  
  addFood = (e,state,props) =>{
    let newMenu = {
        quantity:state.quantity,
        name:props.name,
        totalCalories:(state.quantity * props.calories)
    }
   this.state.list.push(newMenu);
   console.log(this.state)
   this.setState({ list: this.state.list });
 }

 setList = ()=>{
   return this.state.list.map((list) => {
       return <li> · {list.quantity} {list.name} =  {list.totalCalories} cal</li>
   })
 }


  
  render() {
    return (
      <div className="App">
        <div className="columns">
          <div className="column">
            {this.state.foods.map((e) => (<FoodBox key={this.name} {...e} addFood={this.addFood}  />))}
          </div>
          <div className="column">
            <h1>Today's foods</h1>
              <ul>
                {this.setList()}
              </ul>
              <br />
              <br />
            <p>----</p>
            <br />
            <br />
            <h1>Add food</h1>
              <AddFood addItem={(name, calories, img) => this.handleAdd(name, calories, img)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
