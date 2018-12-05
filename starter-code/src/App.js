import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodTable from "./components/foodTable";
import Toggle from "./components/toggle";
import Label from "./components/label";

class App extends Component {
  constructor (){
    super()
    this.state = {
      foods: foods
    }
   }

  render() {
    return (
      <div class="App">
      <Toggle>
                  <h1>Add new food</h1>
        <Label submitHandler={this.submitHandler}></Label>
      </Toggle>
      <header>
        {foods.map(food => {
          return  <FoodTable {...food} /> 
        })}
      </header>
</div>

    );
  }
}

export default App;
