import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import Onefood from "./components/FoodCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: foods,
      search: "",
      modalActive: false,
      name: "name",
      image: "image",
      calories: "calories",
      foodsOfToday: []
    };

    this.addFoodsToday = this.addFoodsToday.bind(this);
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  remove = e => {
    var rmFood = e.target.innerHTML;
    var oldFood = this.state.y;
    var updateFood = oldFood.filter(food => food !== rmFood);
    this.setState({ y: updateFood });
  };

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive }, function() {});
  };

  handleAdd = event => {
    var newFoodAttr = {};
    var keyName = event.target.name;
    var inputFieldValue = event.target.value;
    newFoodAttr[keyName] = inputFieldValue;

    this.setState(newFoodAttr, function() {});
  };

  addFoodsToday = (foodsObject, qty) => {
    var currentToday = this.state.foodsOfToday;
    foodsObject.quantity = qty;
    foodsObject.totalCalories = foodsObject.calories * qty;

    if (currentToday.length) {
      var replaced = false;
      currentToday.map(food => {
        if (food.name === foodsObject.name) {
          replaced = true;
        }

        return food;
      });
      if (replaced === false) {
        currentToday.push(foodsObject);
      }
    } else {
      currentToday.push(foodsObject);
    }

    this.setState({ foodsOfToday: currentToday }, function() {});
  };

  addIt = () => {
    var currentFoods = this.state.y;
    var newFoodItem = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };

    currentFoods.push(newFoodItem);
    this.setState({ y: currentFoods });
    document.getElementById("addName").value = "";
    document.getElementById("addImage").value = "";
    document.getElementById("addCalories").value = "";
    this.toggleModal();
  };

  handleDelete = food => {
    let foodiesToday = this.state.foodsOfToday.filter(
      e => e.name !== food.name
    );
    this.setState({ foodsOfToday: foodiesToday });
  };

  render() {
    if (this.state.modalActive) {
      var classNames = "modal is-active";
    } else {
      classNames = "modal";
    }

    var foodiesToday = this.state.foodsOfToday.map(food => {
      return (
        <div>
          <li key={food}>
            {food.name}, {food.quantity} = {food.totalCalories} cal
            <button
              onClick={e => {
                this.handleDelete(food);
              }}
            >
              remove
            </button>
          </li>
        </div>
      );
    });

    var allcalories = this.state.foodsOfToday.reduce((num, food) => {
      return food.totalCalories + num;
    }, 0);

    var foodDisplayed = this.state.y.filter(elem => {
      if (elem.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return elem;
      }
    });

    var y = foodDisplayed.map((elem, i) => (
      <Onefood key={i} food={elem} addFoodsToday={this.addFoodsToday} />
    ));

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            value={this.state.search}
          />
          <br />
          <br />
          <div>
            <button
              onClick={this.toggleModal}
              className="button is-primary is-large modal-button"
              data-target="modal"
              aria-haspopup="true"
            >
              Add food
            </button>
            <div className={classNames}>
              <div className="modal-background" />
              <div className="modal-content">
                <input
                  id="addName"
                  name="name"
                  onChange={this.handleAdd}
                  placeholder="name"
                />
                <input
                  id="addImage"
                  name="image"
                  onChange={this.handleAdd}
                  placeholder="image"
                />
                <input
                  id="addCalories"
                  name="calories"
                  onChange={this.handleAdd}
                  placeholder="calories"
                />
              </div>

              <button
                onClick={this.addIt}
                className="button is-primary is-large modal-button"
                data-target="modal"
                aria-haspopup="true"
              >
                Add food
              </button>
              <button
                onClick={this.toggleModal}
                className="modal-close is-large"
                aria-label="close"
              />
            </div>
          </div>
          <br />
          <div>
            <h3>Foods of Today:</h3>
            <ul>{foodiesToday}</ul>
            <p>Total Calories = {allcalories}</p>
          </div>
          <br />
          {y}
        </div>
      </div>
    );
  }
}

export default App;
