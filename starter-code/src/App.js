import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Meal from "./components/Meal";
import Form from "./components/Form";

class App extends Component {
  state = {
    totalCalories: 0,
    search: "",
    meals: [],
    meal: {
      name: "",
      calories: 0,
      image: ""
    },
    err: ""
  };

  handleSearch = e => {
    let { search } = this.state;
    search = e.target.value;
    this.setState({ search });
  };

  handleChange = e => {
    const field = e.target.name;
    let { meal } = this.state;
    meal[field] = e.target.value;
    this.setState({ meal });
  };

  calculateTotalCalories = () => {
    let { meals, totalCalories } = this.state;
    totalCalories = meals.reduce(
      (acc, meal) => (acc += meal.calories * meal.quantity),
      0
    );
    this.setState({ meals, totalCalories });
  };

  handleAdd = (id, name, qty, cals) => {
    const quantity = Number.parseInt(qty, 10);
    let found = false;
    let { meals } = this.state;
    const meal = {
      id,
      name,
      quantity,
      calories: cals
    };

    // to avoid "duplicated" meals
    for (let index = 0; index < meals.length && !found; index++) {
      const element = meals[index];
      if (element.id === id) {
        meals[index].quantity += quantity;
        found = true;
      }
    }
    if (!found) meals.push(meal);

    this.setState({ meals });
    this.calculateTotalCalories();
  };

  handleDelete = id => {
    let { meals } = this.state;
    meals.forEach((meal, index) => {
      if (meal.id === id) meals.splice(index, 1);
    });
    this.setState({ meals });
    this.calculateTotalCalories();
  };

  activateModal = () => {
    document.getElementById("modal").className += " is-active";
  };

  closeModal = () => {
    let modalClasses = document.getElementById("modal").className;
    let classes = modalClasses.split(" ").filter(item => item !== "is-active");
    document.getElementById("modal").className = classes;
  };

  closeNotification = (e)=>{
    const err="";
    this.setState({err});
  }

  addMeal = e => {
    e.preventDefault();
    let { meal, err } = this.state;
    err="";
    if (meal.name.length === 0) {
      this.setState({ err: "Meal is missing name" });
      this.closeModal();
      return;
    }
    if (meal.calories === 0) {
      this.setState({ err: "Meal is missing calories" });
      this.closeModal();
      return;
    }
    if (meal.image.length === 0) {
      this.setState({ err: "Meal is missing image" });
      this.closeModal();
      return;
    }
    foods.push(meal);
    this.closeModal();
    meal = {
      name: "",
      calories: 0,
      image: ""
    };
    this.setState({ meal,err });
  };

  render() {
    const { totalCalories, meals, meal, err } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-left marginBottom">
                IronNutrition
              </h1>
            </div>
            <div className="column">
              <button onClick={this.activateModal} className="button is-info">
                Add Meal
              </button>
            </div>
          </div>

          <div>
            <h2 className="title marginBottom">Search for meals</h2>
            <input
              onChange={this.handleSearch}
              className="input search-bar marginBottom"
              type="text"
            />
          </div>
          <div className="columns">
            <div className="column">
              {foods
                .filter(meal => {
                  const { search } = this.state;
                  if (search.length === 0) return true;
                  else
                    return meal.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                })
                .map((food, index) => (
                  <FoodBox
                    key={index}
                    id={index}
                    {...food}
                    handleSearch={this.handleSearch}
                    handleAdd={this.handleAdd}
                  />
                ))}
            </div>
            <div className="column content has-text-left">
              <h2 className="title has-text-left">Today's foods</h2>
              <ul>
                {meals.map((meal, index) => (
                  <Meal
                    key={index}
                    {...meal}
                    handleDelete={this.handleDelete}
                  />
                ))}
              </ul>
              <div className="has-text-left">
                <strong>Total:{totalCalories} calories</strong>
              </div>
            </div>
          </div>
        </div>
        {err ? <div className="notification is-danger"><button id="errorNotification" onClick={this.closeNotification} className="delete"></button>{err}</div> : ""}
        <div id="modal" className="modal">
          <div className="modal-background" />
          <div className="modal-content">
            <Form
              closeModal={this.closeModal}
              addMeal={this.addMeal}
              handleChange={this.handleChange}
              {...meal}
            />
          </div>
          <button
            onClick={this.closeModal}
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      </div>
    );
  }
}

export default App;
