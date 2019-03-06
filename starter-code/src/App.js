import React, { Component } from 'react'
import './App.css'
import Foodbox from './Foodbox.js'

import 'bulma/css/bulma.css'
import foods from './foods.json'
import Addfood from './Addfood.js'
import Tab from './Tab.js'

class App extends Component {
  state = { 
    foods: foods,
    displayForm: false,
    searchText: "",
    todaylist: [],
    totalCalories: parseInt(0)
   }

   toggleForm() {
    this.setState({ displayForm: !this.state.displayForm });
  }   

  addNewFood = (food) => {
    const newFoodList = [...this.state.foods];
    newFoodList.push(food);
    // this.state.listFoods.push(food);
    this.setState({
      foods: newFoodList,
      displayForm: false,
      totalCalories: parseInt(0)
    });
  }

  handleNewFoodInApp = (food) => {
    const newFoodList = [...this.state.foods];
    newFoodList.push(food);
    this.setState({
      foods: newFoodList,
    })
  };

  searchFilterFood(food) {
    return food.name
      .toLowerCase()
      .includes(this.state.searchText.toLowerCase());
  }

  // addTodaysList(dish, dishCalories, q) {
  //   q = parseInt(q) || 1;
  //   let { name, calories } = dish;
  //   if (this.state.todaylist.map(e => e.name).includes(name)) {
  //     this.state.todaylist.forEach(dish => {
  //       if (dish.name === name) dish.quantity += q;
  //       console.log("dish calories", dishCalories);
  //       this.setState({
  //         totalCalories: this.state.totalCalories + dishCalories
  //       });
  //     });
  //   } else {
  //     let newFoodList = [...this.state.todaylist];
  //     newFoodList.push({
  //       name,
  //       quantity: dish.quantity + q,
  //       calories
  //     });
  //     this.setState({
  //       todaylist: newFoodList,
  //       totalCalories: this.state.totalCalories + dishCalories
  //     });
  //   }
  // }


  render () {
    return (
      
    <div className="App">
      <div className='container'>
          <br/>
          <h1 className='title'>IronNutrition</h1>
          <br/>
          
          <div className='search-bar'>
            <input type='text'className='input search-bar' name='search' placeholder='Search' onChange={e => this.setState({ searchText: e.target.value })}/>
          </div>
      
        <div className="columns">
        <div className="column">
        <button className='button' isSuccess onClick={this.toggleForm.bind(this)}>{this.state.displayForm ? "Hide Foodform" : "Show Foodform"}</button>
        <br/>
        <br/>

        
                  {this.state.foods
                  .filter(this.searchFilterFood.bind(this))
                  .map((food, index) => {
                    return (
                      <Foodbox 
                      key={index} 
                      image={food.image} 
                      name={food.name} 
                      calories={food.calories}/>
                      // processDeleteTodaysList={this.deleteTodaysList.bind(this)}/>
                    )
                  })}
        </div>
        <div className="column">
            <div className="column">
            <h2 class="subtitle">Today's foods</h2>
            <ul>
                {this.state.todaylist.map(dish => {
                  return (
                    <Tab
                      dish={dish}
                      key={dish.name}
                      name={dish.name}
                      calories={dish.calories}
                      quantity={dish.quantity}
                      dishCalories={dish.dishCalories}
                      processDeleteTodaysList={this.deleteTodaysList.bind(this)}
                    />
                  );
                })}
              </ul>
              <strong>Total:</strong>
              {/* {this.state.todaylist.map(el => {
                return <p>{el.calories}</p>;
              })} */}
              {this.state.totalCalories}
            </div>
          

            <div className="column">
               {this.state.displayForm ? (<Addfood addNewFood={this.handleNewFoodInApp}/>) : ("")}
            </div>
        </div>
        </div>
        </div>
    </div>
    )
  }
}

export default App
