import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from '../../utils/foods.json'
import FoodBox from '../FoodBox';
import FoodForm from '../FoodForm';
import SearchBar from '../SearchBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodList: foods,
      filteredFood: foods,
      showForm: false
    }
  }

  updateState(state) {
    let foodListCopy = [...this.state.foodList];
    
    let newFood = {
      name: state.name,
      calories: state.calories,
      image: state.image
    };

    foodListCopy.push(newFood);

    this.setState({
      ...this.state,
      foodList: foodListCopy,
      filteredFood: foodListCopy,
      showForm: false
    })
  }

  switchFoodFormVisibility() {
    this.setState({
      ...this.state,
        showForm: !this.state.showForm
    })
  }

  updateSearch(e) {
    console.log(e.target.value)
    let search = e.target.value;

    let filterFood = this.state.foodList.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase()))
    
    this.setState({
      ...this.state,
      filteredFood: filterFood
    })
    
  
  }


  render() {
    return (
      <div>
        <SearchBar updateSearch={e => this.updateSearch(e)}></SearchBar>
        <button onClick={() => this.switchFoodFormVisibility()}>Add Food</button>
        {this.state.showForm && <FoodForm sendStateFromApp={ state => this.updateState(state) }>Add</FoodForm>}
        {this.state.filteredFood.map( (food, i) => {
          return <FoodBox key={i}
          {...food} ></FoodBox>
        })}
      </div>
    );
  }
}

export default App;
