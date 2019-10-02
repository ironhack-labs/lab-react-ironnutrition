import React, { Component } from 'react';


export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      calories: 0,
      image: "",
      quantity: 0,
    };
  }

  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
    // App.props.closeForm(App.state);
  }

  updateFormData(e, field, fieldType) {
    let newState = {
      ...this.state
    }
    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={e => this.updateFormData(e, "name", "string")}></input>
          <input type="number" name="calories" placeholder="calories" value={this.state.calories} onChange={e => this.updateFormData(e, "calories", "number")}></input>
          <input type="text" name="image" placeholder="image url" value={this.state.image} onChange={e => this.updateFormData(e, "image", "string")}></input>
          <input type="number" name="quantity" placeholder="quantity" value={this.state.quantity} onChange={e => this.updateFormData(e, "quantity", "number")}></input>
          <button onClick={e => this.sendState(e)}>Submit</button> 
          
        </form>
      </div>
    )
  }
}
