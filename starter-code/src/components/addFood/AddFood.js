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

  setVisibleForm = () => {
    this.setState({
      formVisible: true,
    });
  };

  handleInput = (el) => {
    this.setState({
      [el.target.name]: el.target.value,
    });
  };

  handleSubmit = () => {
    const { name, calories, image } = this.state;
    this.props.AddAfood({ name, calories, image, quantity: 0 });
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
              <button className="button is-success" onClick={this.handleSubmit}>
                Submit
              </button>
            </footer>
          </div>
        )}
      </div>
    );
  }
}
