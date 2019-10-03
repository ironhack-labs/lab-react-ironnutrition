import React, { Component } from "react";

export default class AddFood extends Component {
  render() {
    return (
      <div>
        <form className="foodFormList">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.props.parentState.name}
              onChange={e => this.props.handleInput(e)}
            />
          </label>
          <label>
            Calories:
            <input
              type="text"
              name="calories"
              value={this.props.parentState.calories}
              onChange={e => this.props.handleInput(e)}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={this.props.parentState.image}
              onChange={e => this.props.handleInput(e)}
            />
          </label>
          <button onClick={this.props.handleFormSubmit}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
