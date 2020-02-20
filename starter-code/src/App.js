import React, { Component } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";

import food from "./foods.json";
import FormFood from "./components/FormFood";
import List from "./components/List";

class App extends Component {
  state = {
    food,
    newfood: food,
    quantity: 0,
    name: "",
    calories: 0,
    image: "",
    search: "",
    list: [],
    show: false
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  richiSearch = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({
      newfood: this.state.newfood.filter(e =>
        e.name.toLowerCase().includes(this.state.search.toLowerCase())
      )
    });
  };

  addElement = e => {
    e.preventDefault();
    const { name, quantity, calories, image } = this.state;
    this.setState({ newfood: [...food, { name, quantity, calories, image }] });
  };

  addItem = (e, name, calories) => {
    e.preventDefault();
    // const nuevo = this.state.list.r
    this.setState({
      list: [
        ...this.state.list,
        { quantity: this.state.quantity, name, calories }
      ]
    });
  };

  showRichi = () => {
    this.setState(({show}) => ({
      show: !show
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <input
          style={{
            width: '100vw',
            border: 'transparent',
            padding:"3%",
            marginBottom:"3%",
            boxShadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)"
          }}
         name="search" placeholder="Search" onChange={this.richiSearch} />
         {this.state.show && (
            <FormFood handleInput={this.handleInput} addElement={this.addElement} />
         )}
         <button onClick={this.showRichi}>
          {this.state.show ? "hide" : "show"} add food
        </button>
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              width: "40%",
              margin: '20px'
            }}
          >
            {this.state.newfood.map((e, i) => (
              <FoodBox
                addItem={this.addItem}
                handleInput={this.handleInput}
                name={e.name}
                image={e.image}
                calories={e.calories}
                quantity={e.quantity}
                key={i}
              />
            ))}
          </div>
          <div
            style={{
              margin: '20px'
            }}
          >
            <List list={this.state.list} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
