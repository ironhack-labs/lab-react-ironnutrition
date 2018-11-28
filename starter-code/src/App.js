import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodButton from './components/AddFoodButton';
import Search from './components/Search';
import FoodList from './components/FoodList';
import foods from './foods.json'
import 'bulma/css/bulma.css';
 class App extends Component {
   state = {
    foodArray: foods,
    todaysFood: [],
    searchValue: '',
  }
   handleArrows = (name, value) => {
    const {foodArray} = this.state;
    const index = foodArray.map(function(food) { return food.name; }).indexOf(name);
    foodArray[index].quantity = value;
    this.setState({
      foodArray
    })
  }
   handleAddNew = formValues => {
    let {foodArray} = this.state;
    formValues.quantity = 0;
    foodArray.push(formValues);
    this.setState({
      foodArray
    })
  }
   handleSearch = searchValue => {
    this.setState({
      searchValue,
    })
  }
   handleAddToList = food => {
    food = Object.assign({}, food)
    if(food.quantity > 0) {
      let {todaysFood, foodArray} = this.state;
      this.resetFoodQuantity(foodArray, food);
      this.updateFoodList(todaysFood, food);
      this.setState({
        foodArray,
        todaysFood,
      })
    }
  }
   resetFoodQuantity = (foodArray, food) => {
    const index = foodArray.map(function(food) { return food.name; }).indexOf(food.name);
    foodArray[index].quantity = 0;
  }
   updateFoodList = (todaysFood, food) => {
    const index = todaysFood.map(function(food) { return food.name; }).indexOf(food.name);
      if(index === -1) {
        todaysFood.push(food);
      } else {
        todaysFood[index].quantity += food.quantity;
      }
    return todaysFood
  }
   handleDelete = index => {
    let { todaysFood } = this.state;
    todaysFood.splice(index,1)
    this.setState({
      todaysFood,
    });
  }
   renderList = (foodArray, searchValue) => {
    const filteredArray = foodArray.filter( food => {
      return food.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return filteredArray.map( food => {
      return <FoodBox 
                key={food.name}
                index={food.name}
                food={food}
                handleArrows={this.handleArrows}
                handleAddToList={this.handleAddToList}
              />
    })
  }
   render() {
    const {searchValue, todaysFood, foodArray} = this.state;
    return (
      <div className="App">
        <h1 className="title is-1">Iron Nutrition</h1>
        <AddFoodButton handleAddNew={this.handleAddNew}/>
        <Search handleSearch={this.handleSearch}/>
        <div className="columns" id="columns">
          <div className="column">
            { this.renderList(foodArray, searchValue) }
          </div>
          <div className="column">
            <FoodList todaysFood={todaysFood} 
                      handleDelete={this.handleDelete} 
            />
          </div>
        </div>
      </div>
    );
  }
}
 export default App;