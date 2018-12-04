import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox.js'
import foods from './foods.json'

class App extends Component {

  constructor (){
    super()
    this.state = {
      foods: foods
    }

  }


  render() {
    return (
        
        <div className="App">
    
    <FoodBox></FoodBox>
    {this.state.foods.map((food, index) => (<FoodBox key={index}  {...food}/>))}  
 
    
      </div>
      
    );
  }
}

export default App;
