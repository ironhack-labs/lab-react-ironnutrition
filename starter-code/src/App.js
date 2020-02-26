import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from "./component/FoodBox"
import FoodBoxForm from "./component/FoodBoxForm"
import SearchForm from "./component/SearchForm"




class App extends Component {
  
  state = {
    foods: foods,
    showForm:false,
    filteredFood:foods
  }
  
  toggleForm = () => {
    this.setState({showForm:!this.state.showForm});
  }


  addFood = (oneFood) => {
    const foodsCopy = [...foods];
    const updatedFood = foodsCopy.unshift(oneFood);
    
    this.setState({foods:updatedFood})
  }
  
  filterFoodFoodDisplay = (searchWord) => {
    const foodsToBeFilter = [...this.state.foods];

    const foodsFiltered = foodsToBeFilter.filter( (foodsToBeFilterE) => {
      return foodsToBeFilterE.name.toLowerCase().includes(searchWord)
      } 
    ) 
    this.setState({filteredFood:foodsFiltered})  
  } 


  render() {
    return (
      <div className="App">
       <button onClick={this.toggleForm}>Want to add food?</button>
       
       {
         this.state.showForm
          ? <FoodBoxForm addOneFood={this.addFood} toggleTheForm={this.toggleForm}/>
          : null
       }
       
       {this.state.filteredFood.map( (foodsElement) => {
              return <FoodBox {...foodsElement}/>
            }
          )
       }

       <SearchForm filterFoodDisplay={this.filterFoodFoodDisplay}/>

      </div>
    );
  }
}

export default App;
