import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json'
import FoodBox from './foodBox/foodBox'
import AddFoodInputs from './addFoodInputs/addFoodInputs'
import SearchBar from './searchBar/searchBar';

class App extends Component {

  state = {
    Foodie: foods,

    //ACORDEON BTN//
    open: false,

    //ADD MEAL//

    workPls: ''

  }

  // ACORDEON BTN //

  switchMenu() {

    this.setState({
      open: !this.state.open
    });

  }

  // ADD MEAL THROUGH FROM //
  addMeal(e, newFood) {
    e.preventDefault()

    console.log(newFood)
    let newState = { ...this.state };
    this.state.Foodie.push(newFood)
    this.setState(newState);

    this.switchMenu();

  }

  // SEARCH BAR //

  searchMeal(e) {

    /* let copyFoodies = {...this.state.Fodies} */
    
     

    console.log(e.target.workPls)
    

  }

  render() {
    return (
      <div className="App">

        <div>
          <button onClick={() => this.switchMenu()}>New Meal.</button>
          {this.state.open && <div className="meal">

            <AddFoodInputs clickToAdd={(e, newFood) => this.addMeal(e, newFood)} ></AddFoodInputs>

          </div>}
        </div>

        <SearchBar /* updateSearch={(e, name) => this.searchMeal(e, name)} */ value={this.state.workPls} onChange={this.searchMeal}></SearchBar>

        {this.state.Foodie.map(foods => (

          <FoodBox key={Math.random()} name={foods.name} calories={foods.calories} image={foods.image} alt={foods.name} quantity={foods.quantity}></FoodBox>

        ))}


      </div>
    );
  }
}

export default App;
