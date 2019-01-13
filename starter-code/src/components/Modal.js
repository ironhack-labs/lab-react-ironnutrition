import React, { Component } from "react";
import InputField from "./InputField";

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      modalClasses: "modal",
      newFood: {
        name: "",
        calories: "",
        image: "",
        quantity: 0
      },
      message : false
    };
  }

  openModal() {
    this.setState({ isActive: !this.state.isActive });
    this.setState({ modalClasses: this.state.modalClasses + " is-active" });
  }

  closeModal() {
    this.setState({ isActive: !this.state.isActive });
    this.setState({ modalClasses: "modal" });
  }

  handleChangeName(name) {
    this.state.message ? this.setState({message:!this.state.message}) : null;
    let newObj = this.state.newFood;
    newObj.name = name;
    this.setState({ newFood: newObj });
  }
  handleChangeCalories(calories) {
    this.state.message ? this.setState({message:!this.state.message}) : null;
    let newObj = this.state.newFood;
    newObj.calories = calories;
    this.setState({ newFood: newObj });
  }
  handleChangeImage(image) {
    this.state.message ? this.setState({message:!this.state.message}) : null;
    let newObj = this.state.newFood;
    newObj.image = image;
    this.setState({ newFood: newObj });
  }

  handleAdd() {
    if (
      this.state.newFood.name === "" ||
      this.state.newFood.calories === "" ||
      this.state.newFood.image === ""
    ) {
      this.setState({message:!this.state.message})
    } else {
      console.log(this.state.newFood);
      this.props.add(this.state.newFood);
      this.closeModal();
    }
  }

  render() {
    return (
      <div className="container">
        <a onClick={() => this.openModal()} className="button">
          Add Food
        </a>
        {/********** modal ************/}
        <div className={this.state.modalClasses}>
          <div onClick={() => this.closeModal()} className="modal-background" />
          <div className="modal-content">
            {/********** modal content ************/}
            <InputField
              changeItem={input => this.handleChangeName(input)}
              key="name"
              fasClass="fas fa-carrot"
              placeholder="Name"
            />
            <InputField
              changeItem={input => this.handleChangeCalories(input)}
              key="calories"
              fasClass="fas fa-dumbbell"
              placeholder="Calories"
            />
            <InputField
              changeItem={input => this.handleChangeImage(input)}
              key="image"
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
            {this.state.message ? 
            <div className="notification is-danger">
              Please enter all data on fields
            </div> : 
            null}
            
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
