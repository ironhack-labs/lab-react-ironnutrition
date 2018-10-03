import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox.js';
import 'bulma/css/bulma.css';
import './App.css';
import Form from './Form.js';



class App extends Component {

  constructor(){
    super();
    this.state = {
      Food:foods,
      showingForm: false
    };
  };

  showForm = () => {
    this.setState({
      showingForm: !this.state.showingForm
    });
  };

  addFood = (food) => {
    this.state.FoodBox.unshift(food);
    this.state({Food: this.state.Food, showingForm: !this.state.showingForm})
  };

  render() {
    return (
      <div>
      <h1>IronNutrition</h1>
      <input type="text" placeholder="Search food"/>
       {foods.map((e)=>{
         return <FoodBox key={e.name} {...e}/>
       })}
     
      <div>
        {!this.state.showingForm && (
          <button onClick={this.showForm}>Add food!</button>)}
      </div>
      
        {this.state.showingForm && (
          <Form newFoods= {food => this.addFood(food)}/>)}
      </div>
    );
  }
}

export default App;
