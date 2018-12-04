import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/foodBox";
import FormFood from "./components/FormFood/formFood";
import Search from "./components/Search/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods,
      open: true,
      list:[]
    };
  }

  switchState = () => {
    this.setState({ open: !this.state.open });
  };
  addFood = (e, state) => {
    e.preventDefault();
    let newFoods = [...this.state.foods];
    newFoods.push(state);
    foods.push(state);
    this.setState({ ...this.state, foods: newFoods });
  };
  searchFood = e => {
    this.state.foods = foods;
    let searchFoods = [...this.state.foods];
    const resultFood = searchFoods.filter(food => {
      if (food.name.includes(e.target.value)) {
        return food.name;
      }
    });
    this.setState({ ...this.state, foods: resultFood });
  };

  addMenu = (e,state,props) =>{
     let newList = [...this.state.list];

     let newListItem = {
         quantity:state.quantity,
         name :props.name,
         totalCalories:(state.quantity * props.calories)
     }
    newList.push(newListItem);
    this.setState({ ...this.state, list: newList });
  }

  setList = ()=>{
    return this.state.list.map((list, index) => {
        return <li> {list.quantity} {list.name} =  {list.totalCalories} Cal</li>
    })
  }

 

  render() {
    return (
      <div className="App">
        <Search searchFood={this.searchFood} />
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, index) => (<FoodBox key={index} {...food} addMenu={this.addMenu}  />))}
          </div>
          <div className="column">
            <h1>Today's foods</h1>
            <ul>{this.setList()}</ul>
          </div>
        </div>

        <button onClick={this.switchState}>Switch open/close</button>
        <FormFood
          className={this.state.open ? "open" : "close"}
          addFood={this.addFood}
        />
      </div>
    );
  }
}

export default App;
