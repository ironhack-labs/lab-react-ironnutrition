import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Food from "./components/FoodBox"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            search:""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    handleSearchChange(event) {
        let inputValue= event.target.value;
        this.setState({
            search:inputValue
        })
    }
  render() {
    return (
        <div className="page-view">
        <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
        <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
        
        {foods
        .filter(food =>
        food.name.toLowerCase().includes(this.state.search.toLowerCase())
        )
        .map(food=>
        <Food
            key={food.name+food.image}
            name={food.name} 
            calories={food.calories}
            image={food.image}
            quantity={food.queantity}
        />
        )}
        </div>
    );
  }
}

export default App;
