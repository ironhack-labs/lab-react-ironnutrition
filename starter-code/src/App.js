import React, { Component } from 'react';
import FootBox from './components/FoodBox';
import Search from './components/Search';
import "bulma/css/bulma.css";
import './App.css';
import foods from "./foods.json";

class App extends Component {
  state = {
    foods: foods
  }

  handleChange = (e) => {
    let { value } = e.target;
    let newFood = this.state.foods.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      foods: newFood
    })
  };

  handleDelete = (e) => {
    let { key } = e;
    if (key === "Backspace" || key === "Delete") {
      this.setState({
        foods: foods
      })
    }
  };

  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        <Search handleChange={this.handleChange} handleDelete={this.handleDelete}/>
        <div className="columns">
          <div className="column">
            {this.state.foods.map(item => {
              return <FootBox key={item.name} food={item}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
