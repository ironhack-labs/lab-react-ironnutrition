import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './App/Components/FoodBox';
import FoodForm from './App/Components/NewFoodForm';

class App extends Component {
  state = {
    data: {
      foods: foodsJSON,
    },
    showFoodForm: false
  }

  showNewFoodForm = () => {
    let { showFoodForm } = this.state;

    showFoodForm = true;

    this.setState({ showFoodForm });
  }

  render() {
    let { foods, showFoodForm } = this.state.data;
    let { showNewFoodForm, addNewFood } = this;

    return (
      <div className="App">
        <div className="container isfluid">
          <div className="columns">
            <div className="column">
              {foods.map( (food, index) => <FoodBox food={food} key={index}/> )}
            </div>
            <div className="column">
              <button className="button is-info" onClick={event => showNewFoodForm()}>{showFoodForm ? "Close" : "Add new food" }</button>
              {this.state.showFoodForm ? <FoodForm foods={foods}/> : <p>placeholder</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;