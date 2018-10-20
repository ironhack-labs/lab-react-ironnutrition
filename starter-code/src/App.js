import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";

class FoodBox extends Component {
  render() {
    const { img, name, calories, quantity } = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={quantity} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

class Addfood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      name: "",
      calories: ""
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>img:</label>
          <input type="text" name="image" value={this.state.image} />

          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} />

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class CoolButton extends Component {
  render() {
    const { className, value } = this.props;
    return (
      <button
        className={`button ${className} ${this.props.isSmall &&
          "is-small"} ${this.props.isText && "is-text"} ${this.props.isLink &&
          "is-link"} ${this.props.isDanger && "is-danger"} ${this.props
          .isSuccess && "is-success"}`}
      >
        {this.props.children}
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { foods, displayForm: false };
  }

  toggleForm() {
    this.setState({ displayForm: !this.state.displayForm });
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <h1 class="title">IronNutrition</h1>
          <div>
            <input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
              value=""
            />
          </div>
          <div class="columns">
            <div class="column">
              <button isSuccess onClick={this.toggleForm.bind(this)}>
                {this.state.displayForm ? "Hide food form" : "Show food form"}
              </button>
              {this.state.foods.map(food => {
                return (
                  <FoodBox
                    name={food.name}
                    calories={food.calories}
                    img={food.image}
                    quantity={food.quantity}
                  />
                );
              })}
            </div>
            <div class="column content">
              <h2 class="subtitle">Today's foods</h2>
              <ul>
                <li>1 Pizza = 400 cal</li>
                <li>2 Salad = 300 cal</li>
              </ul>
              <strong>Total: 700 cal</strong>

              {this.state.displayForm ? <Addfood /> : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
