import React, { Component } from "react";
import "./AddFood.css";
import "bulma/css/bulma.css";

export default class AddFood extends Component {
  state = {
    formVisible: false,
    name: "",
    calories: 0,
    image: "",
  };

  addFood = (el) => {
    const { foods } = this.state;

    this.setState({
      foods: [...foods, el],
    });
  };

  setVisibleForm = () => {
    this.setState({
      formVisible: true,
    });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    const { click } = this.props;

    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };

    click(newFood);

    this.setState({
      formVisible: false,
      name: "",
      calories: "",
      image: "",
    });
  };

  render() {
    const { formVisible, name, calories, image } = this.state;

    return (
      <div className="addFood-container">
        <button
          className="buttonAddFood button is-info"
          onClick={this.setVisibleForm}
        >
          +
        </button>

        {formVisible && (
          <div className="addFood-form modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add a new Food</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInput}
                  placeholder="Name"
                ></input>

                <input
                  id="calories"
                  type="number"
                  name="calories"
                  value={calories}
                  onChange={this.handleInput}
                  placeholder="Calories"
                ></input>
              </div>
              <div>
                <input
                  id="image"
                  type="text"
                  name="image"
                  value={image}
                  onChange={this.handleInput}
                  placeholder="Image"
                ></input>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.handleClick}>
                Submit
              </button>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
