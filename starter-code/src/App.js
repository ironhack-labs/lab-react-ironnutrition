import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddFood from "./components/AddFood.js";
import Search from './components/Search.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodTable: foods,
      showForm: true,
      searchText : ''
    };
  }

  showForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  addFoodHandler = theFood => {
    const foodCopy = [...this.state.foodTable];
    foodCopy.push(theFood);
    this.setState({
      foodTable: foodCopy
    });
  };

  searchFoodHandler = theText => {
    this.setState({
      searchText: theText
    });
  }

  render() {


    return (
      <div className="App">

        <Search searchTheText={this.searchFoodHandler}/>

        <button onClick={() => this.showForm()}>Add Food</button>

        {this.state.showForm && <AddFood addtheFood={this.addFoodHandler} />}
        
        {this.state.foodTable.filter(food =>  food.name.includes(this.state.searchText)).map(item => {
          return (
            <FoodBox
              name={item.name}
              calories={item.calories}
              image={item.image}
            />
          );
        })

        }
      </div>
    );
  }
}
export default App;
