import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class AddFood extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAdd}>
        <div className="field">
          <label className="label">Food Name</label>
          <div className="control">
            <input
              name="foodName"
              className="input"
              type="text"
              placeholder="add name of food e.g. hummus"
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              name="foodCalories"
              className="input"
              type="number"
              placeholder="enter amount of calories"
            ></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              name="foodImage"
              className="input"
              type="text"
              placeholder="enter image URL"
            ></input>
          </div>
        </div>
        <button type="submit">Add Food</button>
      </form>
    );
  }
}
