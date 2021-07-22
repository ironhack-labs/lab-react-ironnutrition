import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.js';
import AddNewFood from './components/AddNewFood.js'



class App extends React.Component {
  state = {
    foodArray: foods,
    newFood: false,
    newInputValue: ''
  }

  handleAddNewFood = () => {
    this.setState ({
      newFood: true
    }) 
  }

  handleNewFoodArray = (food) => {
    let newFoodArray = [...this.state.foodArray, food];
    this.setState ({
      foodArray: newFoodArray
    })
  }

  handleSubmitButton = () => {
    this.setState ({
      newFood: false
    })
  }


  handleInputChange = (event) => {
     this.setState ({
       newInputValue: event.target.value
     })
  }


  render() {
    const filteredFoods = this.state.foodArray.filter((el)=>el.name.toLowerCase().includes(this.state.newInputValue.toLowerCase()));

    
    return (
      <>
        <h1 className="title is-3">IronNutrition</h1>
        
        <form>
         <label>Search:</label>
         <input id="search" className="input is-small" type="text" name="search" value={this.state.newInputValue} onChange={this.handleInputChange}/>
        </form>
        <ul>
          {filteredFoods.map((el)=><li><FoodBox key={el.name} {...el}/></li>)}
        </ul>
      

        <button id="app-btn" className="button is-medium" onClick={this.handleAddNewFood}>Add New Food</button>

        <div>{this.state.newFood ? <AddNewFood addSubmit={this.handleNewFoodArray} submitBtn={this.handleSubmitButton}/> : null}</div>

        {/*<div>{this.state.foodArray.map((el)=><FoodBox key={el.name} {...el}/>)} </div>*/}

      </>
      
    )
  }
}

export default App;