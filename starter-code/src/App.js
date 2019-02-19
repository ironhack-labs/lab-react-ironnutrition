import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.css";
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import foods from './foods.json';

class App extends Component {
  constructor() {
    super();
    this.state= {
      foods:foods,
      showForm:false
    }
  }

  addFood = (theFood) => {
    let foodsCopy = this.state.foods;
    foodsCopy.push(theFood);
    this.setState({foods:foodsCopy});
  }

  toggleShowForm() {
    const newShowForm = !this.state.showForm
    this.setState({showForm:newShowForm});
  }

  render() {
    //const food = foods[0];
    //console.log(food);
    //console.log(...food);
    let addFoodForm
    if (this.state.showForm) addFoodForm = <FoodForm addFood={this.addFood}/>;
    else addFoodForm = undefined; 
    return (
      <div className="App">
        {/* {this.showForm} */}
        {addFoodForm}
        <button name="addFood" onClick={() => this.toggleShowForm()}>Add new Food</button>
        {
          foods.map((food,idx) => <FoodBox key={idx} {...food}/>)
        }                    
      </div>
    );
  }
}

export default App;
