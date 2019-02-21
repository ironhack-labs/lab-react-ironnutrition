import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import NewForm from './components/NewForm'
import Search from './components/Search'
import TodaysFood from './components/TodaysFood'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newForwOn: false,
      filtered: "",
      selected: []
    }
    this.foods = foods
    this.clickHandler = this.clickHandler.bind(this)
    this.addFood = this.addFood.bind(this)
    this.addToTodaysFood = this.addToTodaysFood.bind(this)
  }

  addFood(e){
    this.foods.push({
      "name":  e.target.name.value,
      "calories": e.target.cal.value,
      "image": e.target.img.value,
      "quantity": 1
    })
    this.setState({
      newFormOn: false
    })
  }

  clickHandler(){
    this.setState({
      newFormOn: true
    })
  }

  showFoods(){
    return this.foods.map((food, index) => 
    <FoodBox key={index} name={food.name} cal={food.calories} img={food.image} qty={food.quantity} addToListHandler={(food)=>this.addToTodaysFood(food)}/>)
  }

  searchFoodHandler(query){
    let filteredFood = this.foods.filter(food => {
      const foodLowerCase = food.name.toLowerCase();
      const filter = query;
      return foodLowerCase.includes(filter)
    })
    this.setState({ filtered: filteredFood })
    console.log(this.state.filtered)
  }

  showFiltered(){
    return this.state.filtered.map((food, index) => 
    <FoodBox key={index} name={food.name} cal={food.calories} img={food.image} qty={food.quantity}/>)
  }

  addToTodaysFood(food){
    console.log(food)
    let updatedSelected = [...this.state.selected, food]
    this.setState({
      selected: updatedSelected
    })
  }
  render() {
    return (
      <div className="App">
        <div className="box">
          <Search searchFood={food => this.searchFoodHandler(food)} />
        </div>
        <div className="box">
          {!this.state.newFormOn &&  
          <button className="button is-primary" 
            onClick={this.clickHandler}>
            ADD NEW FOOD
          </button>}
          {this.state.newFormOn && <NewForm addFood={(event)=>this.addFood(event)} />}
        </div>
        <div className="box">
          <div className="columns">
            <div className="column">
              {this.state.filtered ? this.showFiltered() : this.showFoods()}
            </div>
            <div className="column">
              {this.state.selected.length > 0 && <TodaysFood selected={this.state.selected}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
