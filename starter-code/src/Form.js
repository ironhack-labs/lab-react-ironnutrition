import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      calories: 0,
      quantity: 0,
      image: ""
    };
  }

  updateForm(e, field, fieldType) {
    let newState = {
      ...this.state
    };
    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;
  
    this.setState(newState);
  }
  
  sendState(e) {
    e.preventDefault();

    let newState = {
      ...this.state
    };


    this.setState(newState)

    this.props.sendStateFromApp(this.state);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            defaultValue={this.state.name}
            onChange={e => this.updateForm(e, "name", "string")}
          ></input>
          <input
            type="number"
            name="calories"
            defaultValue={this.state.calories}
            onChange={e => this.updateForm(e, "calories", "number")}
          ></input>
          <input
            type="number"
            name="quantity"
            defaultValue={this.state.quantity}
            onChange={e => this.updateForm(e, "quantity", "number")}
          ></input>
          <input
            type="text"
            name="image"
            defaultValue={this.state.image}
            onChange={e => this.updateForm(e, "image")}
          ></input>

          <button onClick={e => this.sendState(e)}>Add food</button>
        </form>
      </div>
    );
  }
}
