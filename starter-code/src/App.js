import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import "./App.css";
import FoodBox from "./FoodBox";
import Form from "./Form.js";
import Search from "./Search.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      formHidden: true
    };
  }
  showForm(e) {
    this.setState({
      ...this.state,
      formHidden: !this.state.formHidden
    });
  }

  addFood(newFood) {
    let newState={...this.state}
    newState.foods.push(newFood)
    this.setState(newState);
  }
  searchFood(e){
    let clonedState={...this.state}
    let searchWord = e.target.value;
    let filterMeals= [] 
    for (var i=0;i<this.state.foods.length;i++){
      console.log(foods[i])
      if(this.state.foods[i].name.toLowerCase().includes(searchWord.toLowerCase())){
        filterMeals.push(this.state.foods[i])
      }
    }

    clonedState.foods=filterMeals
    this.setState(
      clonedState
    )
  }
  render() {
    return (
      <div className="App">
        <Search includeFood={e => this.searchFood(e)}></Search>
        {this.state.formHidden === false && (
          <Form sendStateFromApp={newFood => this.addFood(newFood)}> </Form>
        )}
        <button onClick={() => this.showForm()}>Show form </button>
        {this.state.foods.map((food, idx) => (
          <FoodBox key={idx} {...food}></FoodBox>
        ))}
      </div>
    );
  }
}

export default App;
