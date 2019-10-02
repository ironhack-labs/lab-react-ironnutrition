import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: 0,
      image: ""
    };
  }
  updateFormData(e, field, fieldType) {
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
          defaultValue={this.state.name}
          onChange={e => this.updateFormData(e, "name", "string")}
        ></input>
        <input
          type="number"
          placeholder="calories"
          name="calories"
          defaultValue={this.state.calories}
          onChange={e => this.updateFormData(e, "calories", "number")}
        ></input>
        <input
          type="text"
          name="image"
          placeholder="image"
          defaultValue={this.state.image}
          onChange={e => this.updateFormData(e, "image", "string")}
        ></input>

        <button onClick={e => this.sendState(e)}>Submit</button>
      </div>
    );
  }
}
