import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import Box from "./components/Box";
import Form from "./components/Form";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    foods_list: foods,
    form_showed: false
  };

  render() {
    console.log("food", this.state.foods_list);
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <button>Add New Food</button>
          <div>
            <input
              type="text"
              className="input search-bar"
              name="search"
              placeholder="Search"
              defaultValue=""
            />
          </div>
          <div className="columns">
            <div className="column">
              {this.state.foods_list.map((food, index) => {
                return <Box key={index} {...food} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
