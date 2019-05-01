import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import NewFoodForm from './NewFoodForm';

class App extends Component {
  constructor(){
    super();
    this.state =  {
      foods : this.filterUniques(foods),
      toggleButtonForm: true}
  }

  changeToggleState = ()=>{
    let newState = !this.state.toggleButtonForm;
    this.setState({
      ...this.state,
      toggleButtonForm: newState
    })
  }

  filterUniques(foods){
    let names = [];
    let resultMap = [];
    foods.map((food, idx, arr)=>{
        if(names.indexOf(food.name) === -1){
          resultMap.push(food);
          names.push(food.name)
        }
    })
    return resultMap;
  }

  addNewFood(newFoodDetails) {
    var foodsIncludingNewFood = [...this.state.foods]
    foodsIncludingNewFood.push(newFoodDetails)
    this.setState({
      ...this.state,
      foods: foodsIncludingNewFood
    }, ()=>{
      console.log(this.state.foods);
      this.changeToggleState();
    });
    
  }

  render(){
    
    let mappedFoods = this.state.foods.map(food => {
      food["key"] = Math.round(Math.random() * 10000000);
      //console.log(food)
      return (
        <React.Fragment>
          <FoodBox {...food} />
        </React.Fragment>
      );
      })

    return(
      
      <React.Fragment>        
        <div className="columns">
          <div className="column">
            {mappedFoods}
          </div>
          <div className="column"> 

            {this.state.toggleButtonForm 
              ? <button id="btn" class="button is-primary" onClick={this.changeToggleState} >Add New Food</button>
              : <NewFoodForm newFood={(newFood) => this.addNewFood(newFood)}/> 
            } 

          </div>
        </div>
      </React.Fragment>
    );
};
}

export default App;