import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox.js';
import AddNewFood from './components/AddNewFood.js'
import TodayFood from './components/TodayFood';



class App extends React.Component {
  state = {
    foodArray: foods,
    newFood: false,
    newInputValue: '',
    today: [{
      foodState: '',
      inputValueFoodBox: ''
    }]
    
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

  handleFoodState = (x, y) => {
    
    this.setState ({
      today: {
        foodState: x,
        inputValueFoodBox: y
      }
    })
  }

 
  render() {
    const filteredFoods = this.state.foodArray.filter((el)=>el.name.toLowerCase().includes(this.state.newInputValue.toLowerCase()));
    
    return (
      <>
        <h1 className="title is-2">IronNutrition</h1>

        <button id="app-btn" className="button is-small" onClick={this.handleAddNewFood}>Add New Food</button>
        <div>{this.state.newFood ? <AddNewFood addSubmit={this.handleNewFoodArray} submitBtn={this.handleSubmitButton}/> : null}</div>

        <form>
         <label>Search:</label>
         <input id="search" className="input is-small" type="text" name="search" value={this.state.newInputValue} onChange={this.handleInputChange}/>
        </form>

        <div className="divisor">
          <ul className="today-container">
            {filteredFoods.map((el)=><li><FoodBox key={el.name} food={{...el}} handleFood={this.handleFoodState}/></li>)}
          </ul>

          {/*<div>{this.state.foodArray.map((el)=><FoodBox key={el.name} {...el}/>)} </div>*/}
          <div className="today-container">
            <h3>Today's Food</h3>
            <TodayFood foodState={{...this.state.today.foodState}} inputValue={this.state.today.inputValueFoodBox}/>
          </div>
        </div>
        
      </>
      
    )
  }
}

export default App;