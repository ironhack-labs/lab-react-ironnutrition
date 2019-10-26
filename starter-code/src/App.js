import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import SearchBar from './SearchBar'
import AddFoodForm from './AddFoodForm'


class App extends Component {

  state = {
    foods: foods,
    addFoodFormVisible: false,
    stringToFilterFor: ""
  }

  addFood = (food) => {
    const newArr = [food, ...this.state.foods]
    this.setState({
      foods: newArr
    })
  }

  toggleFoodForm = () => {
    this.setState(state => ({
      addFoodFormVisible: !state.addFoodFormVisible
    }))
  }

  render() {
    return (
      <div >
        <button onClick={this.toggleFoodForm}>
          {this.state.addFoodFormVisible && <div>Hide form to Add Food</div>}
          {!this.state.addFoodFormVisible && <div>Show form to Add Food</div>}
        </button>
        {this.state.addFoodFormVisible ?
          <AddFoodForm onNewFood={this.addFood}></AddFoodForm>
          : ""}
        <SearchBar stateLocation={this.state}>

        </SearchBar>
        {this.state.foods.map((oneFood, idx) => {
          return <div>
            < FoodBox key={idx} {...oneFood} >
            </FoodBox>
          </div>
        })
        }
      </div >
    );
  }
}

export default App;
