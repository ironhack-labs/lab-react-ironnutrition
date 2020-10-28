import React, { Component } from 'react';
import './styles/AddForm.css';

export default class AddFood extends Component {
  render() {
    const { onAdd } = this.props;

    return (
      <div className="addFood__container">
        <div className="box">
          <form onSubmit={onAdd} className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="addFoodName"
              placeholder="Name"
            />

            <label className="label">Calories</label>
            <input
              type="number"
              className="input"
              name="addFoodCalories"
              placeholder="Calories"
            />

            <label className="label">Image</label>
            <input
              type="text"
              className="input"
              name="addFoodImage"
              placeholder="Image URL"
            />

            <div className="field is-grouped addForm__btn__container">
              <div className="control ">
                <button type="submit" className="button is-link addForm__btn">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
