import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';


class App extends Component {
  state = {
    foodsList: foods,
    showForm: false
  };

  addNewFood = newFoodObj => {
    const foodsListCopy = [...this.state.foodsList];

    foodsListCopy.unshift(newFoodObj);

    this.setState({ foodsList:foodsListCopy  });
  };

  toggleForm = () => {
    this.setState( {showForm: !this.state.showForm} )  
  }

  render() {
    return (
      <div className="App">
        {/* BUTTON FOR ADDING FOOD */}
        <button onClick={this.toggleForm} >Add a food </button>
          { this.state.showForm ? 
          <FoodForm toggle={this.toggleForm} addFood={this.addNewFood}/> 
          : null }

        {this.state.foodsList.map( (foodObj, index) => {
          return (
            <div className="food-card" key={index}>
              <FoodBox 
                // key={foodObj}
                {...foodObj}

              />
            </div>
          )
        })}

      </div>
    );
  }
}


export default App;
