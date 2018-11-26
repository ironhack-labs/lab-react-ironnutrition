import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./Home/FoodBox";
import Form from "./Form/Form";
import Search from "./Search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: [],
      showForm: false,
      form: {
        name: "",
        quantity: "",
        calories: "",
        image: ""
      },
      search: "",
      quantity: ""
    };
  }

  componentWillMount() {
    let { food } = this.state;

    food = foods;
    this.setState({ food });
  }

  newFood = e => {
    let { showForm } = this.state;

    showForm = true;
    this.setState({ showForm });
  };

  handleChange = e => {
    let { form } = this.state;
    let field = e.target.name;
    form[field] = e.target.value;

    this.setState({ form });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { showForm, form, food } = this.state;
    food.push(form);
    showForm = false;
    form = { name: "", quantity: "", calories: "", image: "" };
    this.setState({ showForm, form, food });
  };

  textSearch = e => {
    let { food, search } = this.state;

    search = e.target.value;

    food = foods.filter(food => food.name.includes(search));
    this.setState({ search, food });
  };

  numberChange = e => {
    let { quantity } = this.state;

    quantity = e.target.value;
    console.log(quantity);

    this.setState({ quantity });
  };

  render() {
    let { food, showForm, form } = this.state;

    return (
      <div className="App container is-fluid">
        <Search textSearch={this.textSearch} />
        <div className="columns">
          <div className="column is-one-quarter">
            {food.map((food, i) => (
              <FoodBox key={i} food={food} numberChange={this.numberChange} />
            ))}
          </div>
          <div className="column is-one-third">Nada</div>
          <div className="column is-two-fifths">
            <button className="button is-link" onClick={this.newFood}>
              New Food
            </button>
            {showForm ? (
              <Form
                data={form}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
