import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import SearchBar from './Search';
import NewFoodForm from "./NewFood"

  class App extends Component {
    constructor() {
      super()
      this.state = {
        search: "",
        filterFoods: foods,
        addMenuFood: []
      }
    }

    filterFood = filterWord => {
   
      let filterApplyFood = foods.filter(elm => elm.name.toLowerCase().includes(filterWord.toLowerCase()))
        this.setState({filterFoods: filterApplyFood})
    }
    addFood = newFood => {

      const newFilterFood = [...this.state.filterFoods]       // <= OJO! Copia
      newFilterFood.push(newFood)

      this.setState({ filterFoods: newFilterFood })
    }

    menuAdd = menuFood => {
      
      let addedFood = [...this.state.addMenuFood]
      
      let addNewMenuFood = this.state.filterFoods.filter(elm => elm.name === menuFood)
      
      addedFood.push({ "name": addNewMenuFood[0].name, "calories": addNewMenuFood[0].calories})
     
      this.setState({ addMenuFood: addedFood})
 
    }

    render() {

     
      return (
        <>
          
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <div>
              <SearchBar search={this.state.search} filterFood={this.filterFood}/>
            </div>
            <button className="button is-info add-food">Add New Food</button>
            <NewFoodForm addFood={this.addFood} />
            <div class="columns">
              <div class="column">
            <div className="box">
                  {this.state.filterFoods.map((elm, index) => <FoodBox key={index} {...elm} menuAdd={this.menuAdd}/>)}

            </div>
          </div>
            </div>
          <div class="column content">
            <h2 class="subtitle">Today's foods</h2>
            <ul>
                {this.state.addMenuFood.map((elm, index) => <li key={index}> {elm.name}, calories: {elm.calories} </li>)}
                {/* Total calories: {this.state.addMenuFood.reduce((acc, cur) => acc+cur) || 0} */}
            </ul>

            </div>
            </div>
        </>
      );
    }

}

export default App;
