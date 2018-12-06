import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox.js';
import AddButton from './components/AddButton/AddButton.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      foods: foods,
      searchValue: "",
      todaysFood: [],
    }
  }

  addFoodHandler = (newFood) => {
    let updatedFood = [...this.state.foods];
    updatedFood.push(newFood);

    this.setState({ ...this.state, foods: updatedFood });
  }

  quantityHandler = (food, quantity) => {
    let updatedFood = [...this.state.foods];
    let index = updatedFood.indexOf(food)
    updatedFood[index].quantity = quantity;
    this.setState({ ...this.state, foods: updatedFood });
  }

  searchBarHandler = (e) => {
    let newSearchValue = e.target.value;

    this.setState({ ...this.state, searchValue: newSearchValue });
  }

  addToListHandler = (food) =>{
    let updatedTodaysFood = [...this.state.todaysFood];
    updatedTodaysFood.push(food);
    console.table(updatedTodaysFood);
    this.setState({...this.state, todaysFood: updatedTodaysFood });
  }



  render() {

    let foodsToRender = [...this.state.foods]

    if (this.state.searchValue !== "") {
      foodsToRender = foodsToRender.filter((food) => {
        let regExp = new RegExp(`[a-zA-Z]*${this.state.searchValue}[a-zA-Z]*`, 'gi')
        return food.name.match(regExp) //[a-zA-Z]*i[a-zA-Z]*
      })
    }
    let foodsList = foodsToRender.map((foodElem, i) => {
      return <FoodBox quantityHandler={this.quantityHandler} addToListHandler={this.addToListHandler} key={i} index={i} food={foodElem}></FoodBox>
    })

    let todaysFoodList = this.state.todaysFood.map((foodElem, i)=>{
      return <li key={i}> {foodElem.quantity} {foodElem.name} = {foodElem.calories*foodElem.quantity}</li>
    })

    let caloriesTotal = 0;
    for (let i=0;i<this.state.todaysFood.length; i++){
      caloriesTotal += this.state.todaysFood[i].calories*this.state.todaysFood[i].quantity;
    }

    return (
      <div className="App">
            <input type="text" name="searchBar" id="searchBar" onChange={(e) => this.searchBarHandler(e)} />
            <AddButton addFoodHandler={this.addFoodHandler}></AddButton>
        <div className="main-container">
          <div className="leftside">
            {foodsList}
          </div>
          <div className="rightside">
            <h1>Today's food</h1>
            <ul id="todaysFoodList">{todaysFoodList}</ul>
            <p>Total: {caloriesTotal} calories</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
