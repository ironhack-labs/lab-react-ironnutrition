import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/foodbox/FoodBox'
import Form from './components/form/Form'
import Search from './components/search/Search'
import foods from './foods.json'

class App extends Component {
  
  state = {
    foods : [...foods],
    addedByUser : []
  }

  addFoodBox= (newBox) => {
    const {foods, addedByUser} = this.state
    this.setState({
      foods : [...foods, newBox],
      addedByUser: [...addedByUser, newBox]
    });
  }

  filterFoodBoxList= (searchValue) => {
    const { addedByUser} = this.state;
    const totalFood = [...foods, ...addedByUser];
    const filteredFoods = totalFood.filter(food => food.name.includes(searchValue));  
    this.setState({
      foods : filteredFoods
    });
  }
  
  render() {
    const {foods} = this.state
    return (
      <div>
        <Form addFoodBox={this.addFoodBox} />
        <Search filterFoodBoxList={this.filterFoodBoxList} />
        {foods.map((food, index)=> {
            const {name, calories, image, quantity} = food;
            return <FoodBox key={index} name={name} calories={calories} image={image} quantity={quantity} />
        })}
      </div>
    );
  }
}

export default App;
