import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Food name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="text" placeholder="Number of Calories" />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input className="input" type="text" placeholder="Image" />
          </div>
        </div>
        <button className="button is-normal is-success">Add Food</button>
      </div>
    );
  }
}

export default Form;