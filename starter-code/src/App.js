import React, { Component } from 'react';
import './App.css';
import foods from './foods'
import FoodBox from './components/FoodBox'

class App extends Component {
  state = {
    foods: foods,
    food: {},
    filtered: []
  
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ foods: [...this.state.foods, this.state.food] });

  };

  handleInput = (e) => {
    const { food } = this.state;
    const key = e.target.name;
    food[key] = e.target.value;
    this.setState({ food });
  };

  search = (e) => {
    const { value } = e.target;
    const { foods } = this.state;
    const query = value.toLowerCase();
    const filtered = foods.filter(
      (foodPar) => foodPar.name.toLowerCase().includes(query)
    );
    this.setState({ filtered });
  };


  render() {
    const { foods, filtered } = this.state
    
    return (
      <div className="App">
         

      <form onSubmit={this.onSubmit}>
          <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
          <input onChange={this.handleInput} type="text" name="calories" placeholder="Calories" />
          <input onChange={this.handleInput} type="text" name="image" placeholder="Image URL" />
          <input type="submit" value="Add Food" />
      </form>

      <input onChange={this.search} type="text" name="search" placeholder="Search" />
        {filtered.length === 0 &&
          foods.map((food, idx) => (
            <div key={idx}>
            <FoodBox data={food}/>
            </div>
          ))}
          {filtered.length !== 0 &&
          filtered.map((food, idx) => (
            <div key={idx}>
            <FoodBox data={food}/>
            </div>
          ))}
        
      </div>
    );
  }
}
export default App;
