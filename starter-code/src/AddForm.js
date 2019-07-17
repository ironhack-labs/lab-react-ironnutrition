import React, { Component } from "react";

export default class AddForm extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      foodFormDetails: {
        name: "",
        calories: "",
        image: "",
        quantity: 0
      }
    };
  }

  handleFormChange(e, field) {
    let newState = { ...this.state };
    newState.foodFormDetails[field] = e.target.value;
    this.setState(newState);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.addNewFoodHandler(this.state.foodFormDetails);
  }
 
  toggleVisibility() {
    let isVisible = this.state.visible;
    let isVisibleModified = !isVisible;

    this.setState({
      ...this.state,
      visible: isVisibleModified
    });
  }

  render() {
    return (
      <div>
        <button className="button is-info"
        onClick={()=>this.toggleVisibility()}>Display Form
        </button>
       { this.state.visible ? 
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="please write the food NAME"
              value={this.state.foodFormDetails.name}
              onChange={e => this.handleFormChange(e, "name")}
            />
            <input
              type="text"
              placeholder="please write the food CALORIES"
              value={this.state.foodFormDetails.calories}
              onChange={e => this.handleFormChange(e, "calories")}
            />
            <input
              type="text"
              placeholder="please write the food IMAGE"
              value={this.state.foodFormDetails.image}
              onChange={e => this.handleFormChange(e, "image")}
            />
          </fieldset>
          <button
            className="button is-info"
            onClick={e => this.handleSubmitForm(e)}
          >
            Submit
          </button>
        </form>
        : null}
      </div>
    );
  }
}
