import React from 'react';
import 'bulma/css/bulma.css';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import { Component } from 'react';

class App extends Component {

  state = {
    foods: [...foods]
  }
  
  render(){
    const { foods } =this.state
    return (
      <div className="App">
        <h1 className='title'>Iron Nutrition</h1>
        <div style={{width:500}} className='mx-4 mt-5'>
          {foods.map((food)=>{
            return <FoodBox {...food} key={food.id}/>

          })}

        
        </div>
        
      </div>
    )
  }
}

export default App;
