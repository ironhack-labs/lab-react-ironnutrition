import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";

class App extends Component {
  state = {
    total: 0,
    foods,
    selected: []
  };

  searchFood = e => {
    const text = e.target.value;
    const regEx = RegExp(text, "i");
    const filtered = foods.filter(f => regEx.test(f.name));
    this.setState({ foods: filtered });
  };

  selectFood = (name, calories, quantity) => {
    let { selected, total } = this.state;
    const s = {
      name,
      calories: calories * Number(quantity),
      quantity
    };
    //revisar que ya exista
    const item = selected.find(f => f.name === name);
    if (item) selected.splice(selected.indexOf(item), 1);
    selected.unshift(s);
    //sumo
    total = selected.reduce((acc, item) => acc + item.calories, 0);
    this.setState({ selected, total });
  };

  deleteFood = item => {
    let { selected, total } = this.state;
    selected = selected.filter(f => f.name !== item.name);
    total = selected.reduce((acc, item) => acc + item.calories, 0);
    this.setState({ selected, total });
  };

  render() {
    const { foods, selected, total } = this.state;
    return (
      <div className="container">
        <input
          onChange={this.searchFood}
          style={{
            margin: "20px",
            width: "50%",
            height: 60,
            fontSize: "2rem"
          }}
          placeholder="Buscale"
        />
        {foods.map((food, index) => {
          return <FoodBox selectFood={this.selectFood} key={index} {...food} />;
        })}

        <div style={{ position: "absolute", right: 0, top: 100 }}>
          {selected.map((item, index) => {
            return (
              <p className="selected-item" key={index}>
                {item.quantity} - {item.name} = {item.calories} cal
                <button onClick={() => this.deleteFood(item)}>X</button>
              </p>
            );
          })}
          {selected.length > 0 && `Total: ${total} cal`}
        </div>
      </div>
    );
  }
}

export default App;