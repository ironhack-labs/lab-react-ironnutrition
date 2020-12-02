import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox.js';
import AddFoodForm from './components/AddFoodForm.js';

class App extends React.Component {
  state = {
    food: foods,
    displayedFood: foods,
    todaysFoods: [],
    showForm: false
  }
  showFoodForm = () => {
    this.setState({ showForm: !this.state.showForm})
  }
  addNewFood = (foodObj) => {
    const updatedFoods = [...this.state.food, foodObj];
    this.setState({food: updatedFoods, displayedFood: updatedFoods});
    this.showFoodForm();
  }
  handleSearch = (event) => {
    const value = event.target.value
    const iWrestledABearOnce = this.state.food.filter(foodObj => {
      if (foodObj.name.includes(value)) {
        console.log("HELLO", foodObj.name.includes(value))
        return true
      } else {
        return false
      }
    })
    this.setState({displayedFood: iWrestledABearOnce})
  }

  // addFoodToday = (name) => {
  //   let foundFoodObj;
  //   this.state.food.map((foodObj) => {
  //     if (foodObj.name === name) {
  //       foundFoodObj = foodObj; 
  //       foundFoodObj.quantity++;
  //     } 
  //   })

  //   let updatedFoodToday = [...this.state.todaysFoods, foundFoodObj]; 

  //   let uniqueFoodToday = [];

  //    updatedFoodToday.forEach(foodObj => {
  //       for (let i=0; i<updatedFoodToday.length; i++) {
  //         if (foodObj.name === updatedFoodToday[i].name) {
  //           foodObj.quantity++;
  //           uniqueFoodToday.push(foodObj)
  //         } 
  //       }
  //    })    
  //   this.setState({todaysFoods: updatedFoodToday})
  // }


  render () {
    return (
      <div className="App">
      <input type="text" placeholder="Search for food" onChange={ this.handleSearch }></input>
      <div>
        {/* <h2>Today's Foods</h2>
        <ul>
          {this.state.todaysFoods.map(foodObj => {
            return (<li key={foodObj.name}>{foodObj.quantity} {foodObj.name} = {foodObj.calories * foodObj.quantity} cal</li>)
          })}
        </ul>
        <p>Total:     cal</p> */}

        {this.state.displayedFood.map((foodObj) => {
          return (
            <Foodbox key={foodObj.name} food={foodObj} addFoodToday={this.addFoodToday}/>
          )
        })}
      </div>
      
       <aside>
        <button onClick={this.showFoodForm} type="submit">Add New Food</button>
        {this.state.showForm 
        ? <AddFoodForm addNewFood={this.addNewFood}/>
        : null }
       </aside>
       
      </div>
    );
  }
}
export default App;