/*
 * Add food.
 */

import React, { Component } from 'react';

class AddFood extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onAdd}>
          {/* Name */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                type="text"
                placeholder="e.g. Johannisbeere"
              />
            </div>
          </div>

          {/* Calories */}
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input
                className="input"
                name="calories"
                type="number"
                placeholder="e.g. 350"
              />
            </div>
          </div>

          {/* Link to an image. */}
          <div className="field">
            <label className="label">Image link</label>
            <div className="control">
              <input
                className="input"
                name="image"
                type="text"
                placeholder="e.g. https://i.imgur.com/DupGBz5.jpg"
              />
            </div>
          </div>

          {/* Submit button. */}
          <button className="button is-success is-small" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
