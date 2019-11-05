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

  showForm = () => {
    let stateCopy = { ...this.state };
    if (stateCopy.form_showed === false) {
      stateCopy.form_showed = true;
    } else {
      stateCopy.form_showed = false;
    }
    this.setState({ form_showed: stateCopy.form_showed });
  };

  addFoodHandler = newFood => {
    let stateCopy = { ...this.state };
    stateCopy.foods_list.unshift(newFood);
    this.setState({ foods_list: stateCopy.foods_list });
    this.showForm();
  };

  render() {
    console.log("food", this.state.foods_list);

    return (
      <div className="App">
        {!this.state.form_showed ? (
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <button onClick={this.showForm}>Add New Food</button>
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
        ) : (
          <Form buttonAbility={this.addFoodHandler} />
        )}
      </div>
    );
  }
}

export default App;
