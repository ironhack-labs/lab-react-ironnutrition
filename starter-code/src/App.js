import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import {FoodBoxList} from "./components/FoodBoxList";
import foodList from './foods.json'
import AddNewFood from "./components/AddNewFood"

class App extends Component {
  constructor(){
    super();
    this.state = {
      addNewFoodState: false,
      foods: foodList,

    }
  }

  addNewFood = (food) => {
    this.state.foods.unshift(food)
    this.setState({foods: this.state.foods, addNewFoodState: !this.state.addNewFoodState})
  }

  showAddNewFoodForm = () => {
    this.setState({addNewFoodState: !this.state.addNewFoodState});
  }




  render() {
    return (
      <div style={{width: "50%", margin: "0 auto"}}>
        <div>
          {
            !this.state.addNewFoodState ? 
            
            <button className="button" onClick={this.showAddNewFoodForm}>Add new food</button>
            :
            <div>
                <button className="button" onClick={this.showAddNewFoodForm}>Hide Form</button>
                <AddNewFood foodReady={food => this.addNewFood(food)}/>
            </div>
          }
        </div>
        <FoodBoxList/>
      </div>
    );
  }
}

export default App;



// <button onClick={this.toggleMovies}>{this.state.enableMovies ? 'Disable':'Enable'} Movies</button>
// {this.state.enableAddnewFood || 