import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodAdd from "./components/FoodAdd";
import Search from "./components/Search";
import TodayFood from "./components/TodayFood";

class App extends Component {
  state = {
    foods: foods,
    search: "",
    todays: []
  };
  updateFood = food => {
    const copy = [...this.state.foods];
    copy.push(food);
    this.setState({ foods: copy });
  };

  setSearch = evt => {
    const s = evt.target.value.toUpperCase();
    this.setState({ search: s });
  };
  filterFoods(query) {
    const filteredFood = this.state.foods.filter(food =>
      food.name.toUpperCase().includes(query)
    );
    return filteredFood;
  }

  addQuantity = evt => {
    const copy = [...this.state.foods];
    copy[evt.target.id].quantity = evt.target.value;
    this.setState({ foods: copy });
  };

  addToToday = evt => {
    console.log(evt.target.value);
    const copy = [...this.state.foods];
    const copy2 = [...this.state.todays];
    const selectedFood = copy[evt.target.value];
    if (!copy2.includes(selectedFood)){
      copy2.push(selectedFood);
      this.setState({ todays: copy2 });
    }     
  };

  removeFood = evt=>{
    const copy =[...this.state.todays]
    copy.splice(evt.target.id,1)
 
    this.setState({ todays: copy })
  }

  render() {
    return (
      <div className="App">
        <Search clbk={this.setSearch} />
        <FoodAdd clbk={this.updateFood} />
        <div className="columns">
          <div className="column">
            <FoodBox
              clbkChange={this.addQuantity}
              clbkClick={this.addToToday}
              foods={this.filterFoods(this.state.search)}
            />
          </div>
          <div className="column">
            <TodayFood selectedFood={this.state.todays} clbkDelete={this.removeFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
