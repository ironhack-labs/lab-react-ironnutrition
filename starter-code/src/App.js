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
    }
  }

  addFoodHandler = (newFood) => {
    let updatedFood = [...this.state.foods];
    updatedFood.push(newFood);

    this.setState({ ...this.state, foods: updatedFood });
  }

  quantityHandler = (id, quantity) => {
    let updatedFood = [...this.state.foods];
    updatedFood[id].quantity = quantity;

    this.setState({ ...this.state, foods: updatedFood });
  }

  searchBarHandler = (e) => {
    let newSearchValue = e.target.value;
  
    this.setState({...this.state, searchValue: newSearchValue});
  }

  

  render() {
  
    let foodsToRender = [...this.state.foods]

    if (this.state.searchValue!=="") {
      foodsToRender = foodsToRender.filter((food)=>{
        let regExp = new RegExp(`[a-zA-Z]*${this.state.searchValue}[a-zA-Z]*`, 'gi')
        return food.name.match(regExp) //[a-zA-Z]*i[a-zA-Z]*
      })
    }
    console.table(foodsToRender);
    let foodsList = foodsToRender.map((foodElem, i) => { 
      return <FoodBox quantityHandler={this.quantityHandler} key={i} index={i} food={foodElem}></FoodBox> 
    })

    return (
      <div className="App">
        <input type="text" name="searchBar" id="searchBar" onChange={(e)=> this.searchBarHandler(e)}/>
        <AddButton addFoodHandler={this.addFoodHandler}></AddButton>
        {foodsList}
      </div>
    );
  }
}

export default App;
