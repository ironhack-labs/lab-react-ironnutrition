import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'
import Form from './Form.js'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Food: foods,
      showingForm: false

    };
  }

  showForm = () => {
    this.setState({
      showingForm: !this.state.showingForm
    })
  };

  addFood = (food) => {
    this.state.FoodBox.unshift(food);
    this.setState({Food: this.state.Food, showingForm: !this.state.showingForm
    });
  };

  render() {
    return (
      <div>
        {foods.map((e) => {
          return <FoodBox class="column content" key={e.name} {...e} />
        })}
      <div>
        {!this.state.showingForm && (
        <button onClick={this.showForm}> Add food!! </button>)} 
        </div>   
        {this.state.showingForm && (
          <Form newFoods = {food =>this.addFood(food)}/>
        )}
    </div>  
  );
}}



export default App;
