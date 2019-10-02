import React, { Component } from "react";

export default class AddFoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "name",
      calories: undefined,
      image: undefined,
      quantity: 0
    };
  }
  addFood(e, field, fieldType) {
    let newState = {
      ...this.state
    };
    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;
    this.setState(newState);
  }
  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.addFood(e, "name", "text")}
        ></input>
        <input
          type="number"
          name="calories"
          placeholder="calories"
          value={this.state.calories}
          onChange={e => this.addFood(e, "calories", "number")}
        ></input>
        <input
          type="text"
          name="image"
          placeholder="image"
          value={this.state.image}
          onChange={e => this.addFood(e, "image", "text")}
        ></input>
        <button onClick={e=> this.sendState(e)}>Submit</button>
      </div>
    );
  }
}