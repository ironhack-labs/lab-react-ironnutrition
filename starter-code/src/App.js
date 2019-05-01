import React, { Component } from "react";
import "./App.css";
import foodData from "./foods.json";
import Foodbox from "./Foodbox";
import "bulma/css/bulma.min.css";
import AddFood from "./AddFood";
import Search from "./Search";

class App extends Component {
  state = {
    foods: foodData,
    menu: []
  };

  addNewFood(food) {
    const newFoods = [...this.state.foods];
    newFoods.push(food);
    this.setState({
      ...this.state,
      foods: newFoods
    });
  }

  filterFoods(keyword) {
    const newFoods = [...foodData].filter(food =>
      food.name.toLowerCase().includes(keyword)
    );
    this.setState({
      ...this.state,
      foods: newFoods
    });
  }

  addToMenu(newFood) {
    const newMenu = [...this.state.menu];

    let idx = newMenu.findIndex(el => {
      return el.name === newFood.name
    })

    if(idx < 0) { newMenu.push(newFood) } else { newMenu[idx].quantity = +newMenu[idx].quantity + +newFood.quantity }
    
    this.setState({
      ...this.state,
      menu: newMenu
    });
  }

  removeFromMenu(idx) {
    const newMenu = [...this.state.menu];
    newMenu.splice(idx, 1);

    this.setState({
      ...this.state,
      menu: newMenu
    })
  }

  render() {
    const foods = this.state.foods;
    const menu = this.state.menu;
    const totalCal =
      menu.length > 0
        ? menu.reduce((acum, el) => acum + el.calories * el.quantity, 0)
        : 0;
    return (
      <div className="App">
        <div className="foodControls">
          <Search search={keyword => this.filterFoods(keyword)} />
          <AddFood newFood={newFood => this.addNewFood(newFood)} />
        </div>
        <div className="foodContainer">
          <div className="foodSelector">
            {foods.map((food, idx) => (
              <Foodbox
                key={idx}
                {...food}
                addToMenu={newFood => this.addToMenu(newFood)}
              />
            ))}
          </div>
          <div className="foodSummary">
            <h1>Today's foods</h1>
            <ul>
              {menu.map((food, idx) => {
                return (
                  <li key={idx}>
                    {food.quantity} {food.name} - {food.calories}
                    <a onClick={(idx) => this.removeFromMenu(idx)}>  X</a>
                  </li>
                );
              })}
            </ul>
            <p>Total {totalCal} cal</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
