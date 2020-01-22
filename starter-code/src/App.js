import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import Form from "./components/Form"
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search:"",
      foods: foods,
      showfoods: foods,
      quantity: 0,
      formStyle: {
        display: "none"
      }
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  } 
  
  addHandler = () => {
    if(this.state.formStyle.display === "none"){
      this.setState({
        formStyle: {
          display: "block"
        }
      })
    }
  }

  submitHandler = (props, state) => {
    props.preventDefault();

    this.state.showfoods.push(state);

    this.setState({
      showfoods: this.state.showfoods,
      formStyle: {
        display: "none"
      }
    })
  }
  
  addFoodHandler = (food, state) => {
    let pickedFoodCopy = [...this.state.pickedFood]
    pickedFoodCopy.push(food)
    this.setState({
      pickedFood: pickedFoodCopy,
    })
    this.calculateCalories(food.calories, state.quantity)
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
        <button onClick={this.addHandler}>Add New Food</button>
        <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
        {foods
          .filter(food =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase()))
            .map(food=>  
              <FoodBox
                key = {food.name+food.image}
                name = {food.name} 
                calories = {food.calories}
                image = {food.image}
                quantity = {food.queantity}
              />
            )
        }
      </div>
    );
  }
}

export default App;
