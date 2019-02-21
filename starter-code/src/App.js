import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css';

import FoodBox from "./component/FoodBox.js"
import FoodArray from "./foods.json"

import AddFood from "./component/FoodForm.js"

import List from "./component/Search.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {FoodArray,
      appearForm: false,
      filtered: [],
    }
}

toggleShowForm(){
  const hideForm = this.state.appearForm;

  this.setState({appearForm: !hideForm})
}
addNewMeal(mealObject){
  const{FoodArray}= this.state;

  FoodArray.unshift(mealObject);

  this.setState({ FoodArray});

}
  render() {
    const {FoodArray, appearForm} = this.state
    return (

      <div className="App">
      <div class="buttons">
        <span class="button is-success" onClick={()=>this.toggleShowForm()}>
        Add some food
        </span>
        {appearForm ? <AddFood mealSubmit={mealObject => this.addNewMeal(mealObject)}/> : null}
      </div>
      <List items={this.state.FoodArray} />
        {FoodArray.map((oneMeal, index) =>{
            return (
            <FoodBox food ={oneMeal} />
            );

        })}
      </div>
    );
  }
}

export default App;
