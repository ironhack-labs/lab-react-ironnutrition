import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import data from './foods.json'
import Food from './Components/Food'
import FoodForm from './Components/FoodForm'

class App extends Component {
  state = {
    foods:data,
    food: {},
    foodForm: undefined,
    filtered: []
  }

  addFood = e => {
    e.preventDefault();
    this.setState(prevState => {
      const { foods, food } = prevState;
      foods.push(food);

      return { foods, food: {}, foodForm: undefined };
    });
  };
   handleInput = e => {
    const key = e.target.name;
    const { value } = e.target;

    this.setState(prevState => {
      let { food } = prevState;
      food[key] = value;

      return { food };
    });
  };
   showForm = () => {
     console.log('asas')
    this.setState(prevState => {
      const foodForm = <FoodForm addFood={this.addFood} handleInput={this.handleInput} />;
      return {foodForm};
      
    });
  };

    search = (e) => {
    const {value} = e.target;
    const {foods} = this.state;
    const query = value.toLowerCase();
    const filtered = foods.filter(
      (food) => food.name.toLowerCase().includes(query)
    );
    this.setState({ filtered });
  };


  render() {
    const {foods, foodForm, filtered}=this.state
    return (
      <div id="main">
        <header>
          <h1 className="title">IronNutrition</h1>
          <button id="boton" className="button is-warning" onClick={this.showForm}>Add new food</button>
        </header>
        <div >
        <input onChange={this.search} type="text" name="search" id="searchBar"/>
        </div>
        <div id="body">
        <div id="elements">
        {foodForm}
         {filtered.length === 0 &&
          foods.map((food, idx) => (
            <Food
               name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                key={idx}
            />
          ))}
        {filtered.length !== 0 &&
          filtered.map((food, idx) => (
             <Food
               name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
                key={idx}
            />
          ))}
        </div>
        <div id="list">
        <h1 className="title">Today´s foods</h1>
        </div>
        </div>
      </div>
    );
    }
  }

export default App;
