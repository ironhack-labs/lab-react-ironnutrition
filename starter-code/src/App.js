import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import FormAdd from './components/FormAdd';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';


class App extends Component {
  constructor(props) {
    super(props)
    this.foodsArr = [...foods]
    this.state = { 
      food: this.foodsArr,
      filteredFoods: this.foodsArr,
      addState: true,
      todaysFood: [],
    }
  }

  openForm() {
    const foodsNew = [...this.state.food];
    const newFormState = !this.state.addState;
    this.setState({
      addState: newFormState,
    })
  }

  addFood(newFood) {
    const foodsNew = [...this.state.food];
    foodsNew.unshift(newFood);
    this.setState({
      food: foodsNew,
      filteredFoods: foodsNew,
      addState: true,
    })
    console.log(this.state);
  }

  filterFoods(value) {
    const foods = this.state.food;
    const filterFoods = foods.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      filteredFoods: filterFoods,
    })
  }

  addTodaysFood(value) {
    let {name, calories, quantity} = value;
    quantity = parseInt(quantity);
    if (quantity > 0) {
      let exists = false;
      const todaysFood = [...this.state.todaysFood];
      todaysFood.forEach(el => {
        if (el.name.indexOf(name) >= 0) {
          el.quantity += parseInt(quantity);
          el.calories += calories;
          exists = true;
        }
      })
      if (!exists) todaysFood.push({name, calories, quantity});
      this.setState({
        todaysFood: todaysFood,
      })
    }
  }

  deleteTodaysFood(index) {
    const todaysFood = [...this.state.todaysFood];
    todaysFood.splice(index, 1);
    this.setState({
      todaysFood: todaysFood,
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-title">IronNutrition</h1>
          {
            this.state.addState ? 
              <Fragment>
                  <button className="button" onClick={() => this.openForm()}>Add New Food</button>
              </Fragment>
                  :
              <Fragment>
                  <button className="button" onClick={() => this.openForm()}>Hide Form</button>
                  <FormAdd addFoodHandler={this.addFood.bind(this)} />
              </Fragment>
              }
          <Search filterFoodsHandler={(value) => this.filterFoods(value)}/>
        </header>
        <div className="main-content">
          <div className="foods-list">
            {
              this.state.filteredFoods.map((e, index) => {
                return <FoodBox key={index} {...e} addTodaysHandler={(value) => this.addTodaysFood(value)}  />
              })
            }
          </div>
        <TodaysFood todaysFood={this.state.todaysFood} deleteTodaysHandler={(index) => this.deleteTodaysFood(index)}/>
        </div>
      </div>
    );
  }
}

export default App;
