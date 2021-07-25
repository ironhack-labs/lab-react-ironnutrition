import React, { Component } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import SubmitNewFood from '../SubmitNewFood/SubmitNewFood';

import foods from "../../Data/foods.json"
import 'bulma/css/bulma.css';
import './App.css'
import Search from '../Search/Search';
import TodayFoods from '../TodayFoods/TodayFoods';

class App extends Component {

  state = {
    foods: foods,
    form: false,
    filteredFoods: foods,
    todayFoods: [],
  }

  handleShowForm(){
    this.setState({form: !this.state.form});
  }

  handleNewCards= (food) =>{
    let newFoods = [...this.state.foods]
    newFoods.push(food)
    this.setState({
      foods: newFoods,
      form: false
    })
  }

  filterFoods = (input) => {
    const filtered = this.state.foods.filter( (food) => {
      return food.name.toLowerCase().includes(input.toLowerCase())
    } );
    this.setState( {filteredFoods: filtered} )
  }

  handleTodayFood = (newTodayFoods) => {
    this.setState( {todayFoods: newTodayFoods} )
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div className='input-and-button'>
            <Search filter = {this.filterFoods}/>
            <button className="button is-info"
            onClick = {() => this.handleShowForm()}
            > {!this.state.form ? "Show Form" : "Hide"} </button>
          </div>
          {this.state.form && <SubmitNewFood newFoods={this.handleNewCards}/>}

          <div className="columns">

            <div className="column-food">
              {this.state.filteredFoods.map( (food, index) => <FoodCard key={index} {...food}/>)}
            </div>
              <TodayFoods />
          </div>
        </div>
      </>
    );
  }
}

export default App;
