import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';
import SearchBar from './SearchBar';


class App extends Component {
  state = {
    allFoods: foods,
    showForm: false,
  }

  addFood = newFood => {
    console.log(newFood)
    console.log(foods)
    const copyFoods = [...this.state.allFoods];
    copyFoods.push(newFood)
    this.setState({ allFoods: copyFoods });

  }

  displayForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  //search bar marche mais pas quand on revient en arrière...notre liste n'est reloadée
  handleSearch = (value) => {
    let filteredFood = this.state.allFoods.filter(food => food.name.toUpperCase().includes(value.toUpperCase()));
    this.setState({ allFoods: filteredFood });
  }

  render() {
    return (
      <div className="App">
        <h1>Track your food</h1>

        <button
          className="add-food"
          onClick={this.displayForm}
        >add food</button>

        {/* affiche le formulaire pour add a food */}
        <FormFood isVisible={this.state.showForm} clbk={this.addFood} handleDisplayForm={this.displayForm} />

        {/* affiche la searchBar et filtre */}
        <SearchBar clbk={this.handleSearch} />

        {/* affiche tous les foods */}
        {
          this.state.allFoods.map((food, index) =>
            <FoodBox
              key={index}
              image={food.image}
              name={food.name}
              calories={food.calories}
              quantity={food.quantity} />
          )
        }
      </div >
    );
  }
}

export default App;
