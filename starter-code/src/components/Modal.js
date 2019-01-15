import React, { Component } from "react";
import InputField from "./InputField";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      modalClasses: "modal",
      newFood:{},
      message: false
    };
  }

  openModal() {
    this.setState({ isActive: !this.state.isActive });
    this.setState({ modalClasses: this.state.modalClasses + " is-active" });
  }

  closeModal() {
    this.setState({ isActive: !this.state.isActive });
    this.setState({ modalClasses: "modal" });
    this.setState({ message: false });
  }

  handleChange(input,name) {
    this.state.message ? this.setState({ message: !this.state.message }) : null;
    
    this.state.newFood[name] = input;
    this.setState({ newFood: this.state.newFood });
    console.log(this.state.newFood)
  }

  handleAdd() {
    if (
      this.state.newFood.name === "" ||
      this.state.newFood.calories === "" ||
      this.state.newFood.image === ""
    ) {
      this.setState({ message: !this.state.message });
    } else {
      this.props.addFood(this.state.newFood);
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="container">
        <a
          onClick={() => this.openModal()}
          className="button is-rounded is-primary is-inverted is-large"
        >
          <span className="icon is-small"> 🍔 </span>
          <span> Add Food</span>
        </a>
        {/********** modal ************/}
        <div className={this.state.modalClasses}>
          <div onClick={() => this.closeModal()} className="modal-background" />
          <div className="modal-content">
            {/********** modal content ************/}
            <InputField
              onChange={(input,name) => this.handleChange(input,name)}
              key="name"
              name="name"
              fasClass="fas fa-carrot"
              placeholder="Name"
            />
            <InputField
              onChange={(input,name) => this.handleChange(input,name)}
              key="calories"
              name="calories"
              fasClass="fas fa-dumbbell"
              placeholder="Calories"
            />
            <InputField
              onChange={(input,name) => this.handleChange(input,name)}
              key="image"
              name="image"
              fasClass="fas fa-images"
              placeholder="Image URL"
            />

            <div className="field">
              <p className="control">
                <a
                  onClick={() => this.handleAdd()}
                  className="button is-danger"
                >
                  <span className="icon is-small">
                    <i className="fas fa-plus-square" />
                  </span>
                  <span>Add</span>
                </a>
              </p>
            </div>
            {this.state.message ? (
              <div className="notification is-danger">
                Please enter all data on fields
              </div>
            ) : null}

            {/********** END -- modal content ************/}
          </div>
          <button
            onClick={() => this.closeModal()}
            className="modal-close is-large"
            aria-label="close"
          />
        </div>
      </div>
    );
  }
}
