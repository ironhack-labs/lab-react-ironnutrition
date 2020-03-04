import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import FormNewFood from './components/FormNewFood'

class App extends Component {
  state={
    toggle:false,
    foodList : foods
  }

  toggle = ()=>{
    this.setState({
      toggle : !this.state.toggle
    })
  }
  addFoodHandler = (newFood) =>{
    const foodCopy = [...this.state.foodList]
    foodCopy.push(newFood)
    this.setState({
      toggle:false,
      foodList : foodCopy
   
    })
  }
  render() {
   return (
      <div className="App">
        <div className="columns">
          <div className="column is-3">
          <button onClick={this.toggle}>Add new food</button>
          {this.state.toggle &&
          <FormNewFood  addFood ={this.addFoodHandler}/>
          }
          </div>
         
          <div className="column is-9">
          {this.state.foodList.map( (food, id) =>{
         return( <FoodBox key= {id} data ={food} />)
        })}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
