import React, { Component } from 'react';
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        calories: '',
        image: '',
      },
    };
  }
  render() {
    return (
      <form id="newfood-form" className="mb-4">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input className="input" type="number" name="calories" />
          </div>
        </div>
        <div className="field">
          <label className="label">Image url</label>
          <div className="control">
            <input className="input" type="text" name="image" />
          </div>
        </div>
        <button class="button is-success">Create</button>
      </form>
    );
  }
}
