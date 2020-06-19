import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import TodaysFood from './components/TodaysFood';



class App extends React.Component {
  constructor(props){
      super(props);
      this.addFood = this.addFood.bind(this);
      this.showForm = this.showForm.bind(this);
      this.searchFood = this.searchFood.bind(this);
      this.todaysFoodHandler = this.todaysFoodHandler.bind(this);
      // this.todaysTotalCals = this.todaysTotalCals.bind(this);
    }

  state = {
    foods: foods,
    formShowing: false,
    filteredFoods: foods,
    todaysFood: [],
    totalCalories: 0
  }

  addFood(food){
    let foodsCopy = JSON.parse(JSON.stringify(this.state.foods));
    foodsCopy.unshift(food);
    this.setState({
      foods: foodsCopy,
      filteredFoods: foodsCopy,
      formShowing: false
    });
  }

  showForm(){
    // if (this.formShowing){
    //   this.setState({
    //     formShowing: false
    //   })
    // } else {
      this.setState({
        formShowing: true
      });
    // }
  }

  searchFood(e){
    let searchTerm = e.target.value;
    let newFilterFoods = this.state.foods.filter((food)=> food.name.includes(searchTerm));
    this.setState({
      filteredFoods: newFilterFoods 
    });
  }

  todaysFoodHandler(name, quantity, calories){
    let newTodaysFood = [...this.state.todaysFood];
    let dishesCalories = quantity * calories;
    let newFood = {name: name, quantity: quantity, calories: dishesCalories};
    newTodaysFood.unshift(newFood);
    let allCalories = newTodaysFood.map(food=> food.calories);
    let totalCals = allCalories.reduce(( accumulator, currentValue ) => accumulator + currentValue,0);
    this.setState({
      todaysFood: newTodaysFood,
      totalCalories: totalCals
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 class="title">IronNutrition</h1>
          <div>
            <input
              type="text"
              class="input search-bar"
              placeholder="Search"
              onChange={this.searchFood}
            />
          </div>
          <div className="addBox">
            <button className="button is-info" onClick={this.showForm}>Add your Food Form</button>
            {this.state.formShowing && <AddFood addFood={this.addFood} />}
          </div>

          <div className="columns">
            <div className="column FoodBox">
              {
                this.state.filteredFoods.map((food)=>
                <FoodBox name={food.name} calories={food.calories} image={food.image} todaysFoodHandler={this.todaysFoodHandler}/>
                )
              }
            </div>
            <div class="column content">
              <h2 class="subtitle">Today's foods</h2>
              <ul>
              {
                this.state.todaysFood.map((food)=>
                <TodaysFood name={food.name} quantity={food.quantity} calories={food.calories} />
                
                )
              }
              </ul>
              <strong>Total: {this.state.totalCalories}</strong>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
