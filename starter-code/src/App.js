import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';

class App extends Component {


  state = {
    foodList: foods    
  }

newerFoodArray = this.state.foodList.map((eachFood, i) =>{
      return eachFood.name
    })



  render() {
    
    console.log(this.newerFoodArray)
    

    return (
      
      <div className="App">

<div className="foodList">

<FoodBox/>



</div>
      </div>
    );
  }
}

export default App;
