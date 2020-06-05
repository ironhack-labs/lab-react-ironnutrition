import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foodsFromJason from './foods.json';
import FoodBox from './components/FoodBox.js'
import AddFood from './components/AddFood.js'


class App extends Component {

  state = {
    foods : foodsFromJason,
    showForm: false
  }

  showFormHandler = () => {
    this.setState({
      showForm : !this.state.showForm
    })
  }

  addFoodHandler = (food) => {
    this.setState({
      foods : this.state.foods.concat(food),
      showForm : !this.state.showForm

    })
  }

  render () {
    return (
      <div className="App">

        <button onClick={this.showFormHandler}>Show the form to add food</button>
        {this.state.showForm &&
        <AddFood addFoodHandler={this.addFoodHandler} />
        }
        {this.state.foods.map((f) => <FoodBox key={f.name} name={f.name} calories={f.calories} image={f.image} />)}

      </div>
    );
  }
  
}

export default App;
