import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';



class App extends Component {
  state = {
    foods: foods,
    bootFoodFiltered: "",
  };

  addFoodHandler = theFood => {
    // hacemos una copia del array de movies del state
    const foodCopy = [...this.state.foods]
    // agregamos la nueva movie a la constante (copia del state) moviesCopy
    foodCopy.push(theFood)
    // actualizamos el state para lograr una nueva renderización del componente con la nueva película agregada
    this.setState({
      foods: foodCopy
    })
  }
  
  searchFood = event => {
    const foodCopy = [...this.state.foods];
    const search = foodCopy.filter((foods) => {
       return foods.name.includes(event.target.value);
    })
    this.setState({
      bootFoodFiltered: search
    })
  }


    render(){
      // const { button } = this.state
      const allFoods = this.state.foods.map(function (food) {
          return (
            <FoodBox 
              quantity={food.quantity}
              image={food.image}
              name={food.name}
              calories={food.calories}
            />
          );
        })


    let filter = this.state.bootFoodFiltered?this.state.bootFoodFiltered.map(function(food){
      return(
        <FoodBox
        name = {food.name}
        calories = {food.calories}
        image = {food.image}
        quantity = {food.quantity}
        />
      )
    }): null
      
        return (
          <div>
          <div>
          <input type="search" className="search" name="search" placeholder="Search" value={this.state.search} onChange={(e) => this.searchFood(e)}/>
          </div>
            <div>
            <AddFood addTheFood={(e)=>this.addFoodHandler(e)}/> 
            </div>

            <div>
            {filter ? filter: allFoods}
            </div>
    
          </div>
        );  
    }
}

export default App;
