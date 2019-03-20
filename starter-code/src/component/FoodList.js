import React, { Component } from 'react';
import foods from '../foods.json';
import FoodItem from './FoodItem';
import SearchBar from './SearchBar';
import TodayFoods from './TodayFoods';
import Form from './Form';

class FoodList extends Component {
  state = {
    display: false,
    foods: foods,
    todayFoods: []
  }

  showForm = () => {
    this.setState({
      display: !this.state.display
    })
  }

  handleSubmit = (event, state) => {
    event.preventDefault()
    const {name, calories, image} = state
    const food = {
      name,
      calories,
      image
    }
    this.setState({
      foods: [...this.state.foods, food]
    })
  }

  searchBar = (event, item) => {
    this.setState({
      foods: [...foods].filter(food =>  food.name.toLowerCase().includes(item.toLowerCase()))
    })
  }

  todayFoods = (event, item) => {
    event.preventDefault();
    this.setState({
      todayFoods: [...this.state.todayFoods, item]
    })
  }

  render() {
    const {display, foods, todayFoods} = this.state
    console.log(todayFoods)
    return (
      <div>
        <SearchBar searchBar={this.searchBar} />
        <div className="foods-container">
          <div>
            {foods.map((item, index) => (
              <FoodItem 
                key={index}
                name={item.name}
                calories={item.calories}
                image={item.image}
                quantity={item.quantity}
                todayFoods={this.todayFoods}
              />
            ))}
            {display ? <Form handleSubmit={this.handleSubmit} /> : null }
          </div>
          <TodayFoods foods={todayFoods} />
        </div>
        <button onClick={()=> {
          this.showForm()
        }}>Add Food</button>
        
      </div>
    );
  }
}

export default FoodList;