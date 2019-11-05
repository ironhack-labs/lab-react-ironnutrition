import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import Box from "./components/Box";
import Form from "./components/Form";
import Search from "./components/Search";
import "bulma/css/bulma.css";

class App extends Component {
  state = {
    foods_list: foods,
    form_showed: false,
    filtered_foods: foods
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

  searchChange = e => {
    let stateCopyFilteredFoods = [...this.state.filtered_foods];
    let search = e.target.value;
    console.log("se esta guardando", search);
    const filteredFoods = stateCopyFilteredFoods.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredFoods);
    this.setState({ foods_list: filteredFoods });
  };

  addFoodHandler = newFood => {
    let stateCopy = { ...this.state };
    stateCopy.foods_list.unshift(newFood);
    this.setState({ foods_list: stateCopy.foods_list });
    this.showForm();
  };

  render() {
    return (
      <div className="App">
        {!this.state.form_showed ? (
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <button onClick={this.showForm}>Add New Food</button>
            <Search onChange={this.searchChange} />
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
