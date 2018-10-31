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
      let index = foodArray.map(function(food) { return food.name; }).indexOf(food.name);
      foodArray[index].quantity = 0;
      index = todaysFood.map(function(food) { return food.name; }).indexOf(food.name);
      if(index === -1) {
        todaysFood.push(food);
      } else {
        todaysFood[index].quantity += food.quantity;
      }
      this.setState({
        foodArray,
        todaysFood,
      })
    }
  }

  handleDelete = index => {
    let { todaysFood } = this.state;
    todaysFood.splice(index,1)
    this.setState({
      todaysFood,
    });
  }

  render() {
    const {searchValue, todaysFood} = this.state;
    const foodArray = this.state.foodArray.filter( food => {
      return food.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="title is-1">Iron Nutrition</h1>
        <AddFoodButton handleAddNew={this.handleAddNew}/>
        <Search handleSearch={this.handleSearch}/>
        <div className="columns" id="columns">
          <div className="column">
            { foodArray.map( food => {
              return <FoodBox 
                        key={food.name}
                        index={food.name}
                        food={food}
                        handleArrows={this.handleArrows}
                        handleAddToList={this.handleAddToList}
                      />
            })}
          </div>
          <div className="column">
            <FoodList todaysFood={todaysFood} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
