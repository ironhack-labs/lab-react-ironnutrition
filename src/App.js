import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import Foodbox from "./Foodbox"
import FoodForm from './FoodForm';
import SearchFood from './SearchFood';
import Menu from './Menu';


class App extends React.Component {
  state = {
    foods: foodsData,
    todaysMenu: []
  }

  addFood = (foodObj) => {
    let copyFood = [...this.state.foods]
    copyFood.unshift(foodObj)

    this.setState({ foods: copyFood })

  }

  addToMenu = (foodname) => {
    let copyMenu = [...this.state.todaysMenu]
    let addedFoodArray = this.state.foods.filter( food => {
      if (food.name === foodname) return food
    })
    let oneFood = addedFoodArray[0]
    copyMenu.unshift(oneFood)
    this.setState({ todaysMenu: copyMenu })
  }
  search = (text) => {
    let filteredFood = foodsData.filter( (food) => {
         return food.name.toLowerCase().includes(text.toLowerCase()) 
      //food.name.tolowercase().includes(searchWord.lowercase())
    } )
    this.setState({ foods: filteredFood })

  } 
  // search = (input) => {
  //   let foodListCopy = [...foods].filter((food) => food.name.toLowerCase().includes(input.toLowerCase()));

  //   this.setState({ foods: foodListCopy });
  // };
  someFunc = () => { // remember to use this.someFunc
    let copyFood = [...this.state.foods]
  }

  render () {

    let foodArr = this.state.foods;
    let menu = this.state.todaysMenu; // unnecessary but tried it to fix passing the array for menu props

    return (
      <div className="App">
          <hi>hieee diet stuff</hi>
          <FoodForm addFood={this.addFood}/>

          <h4>search for foods:</h4>
          <SearchFood search={this.search} />

          <Menu menu={menu} />

          {foodArr.map((fooditem, key) => {
            console.log()
            
            return < Foodbox key={foodArr.indexOf(fooditem)} {...fooditem} addToMenu={this.addToMenu}  />
          })}
      </div>
    );
  }
}

export default App;
