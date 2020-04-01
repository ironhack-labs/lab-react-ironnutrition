import React, { Component } from 'react';

import './App.css';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';
import foods from './foods.json'
import AddFood from './components/AddFood';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstFood: foods,
      displayIt: false
    }
  }
  displayTheBar = () => {
    this.setState({
      displayIt: !this.state.displayIt
    })
  }
  searchFilter = (search) => {

    //console.log(search.target.value)
    const filtr = [...foods].filter((e)=>e.name.toLowerCase().includes(search.target.value.toLowerCase()))
    //console.log(filtr);
     this.setState({
       firstFood: filtr
     })
  }
  addFoodHandler = (thefood) => {
    const foodCopy = [...this.state.firstFood];
    foodCopy.unshift(thefood)
    this.setState({
      firstFood: foodCopy
    })
  }
  render() {
    let mostrar
    if (this.state.displayIt) {
      mostrar = <AddFood addTheFood={this.addFoodHandler} />
    }

    return (

      <div className="App">
        <input
          type="text"
          placeholder="Search "
          name='textarea'
          onChange={this.searchFilter}
        />

        {mostrar}
        <button onClick={this.displayTheBar}>Show the text !</button>
        {this.state.firstFood.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity} />))}

      </div>
    );
  }
}

export default App;
