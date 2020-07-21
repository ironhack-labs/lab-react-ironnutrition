import React from 'react'
import {NavLink} from "react-router-dom";

export default function AddForm(props) {

    return (
      <div className="container">
        <form className="form" onSubmit={props.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" placeholder="Food name" value={props.name} onChange={props.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Number of calories</label>
            <div className="control">
              <input className="input" name="calories" type="number" placeholder="0" value={props.calories} onChange={props.handleChange} />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input className="input" type="text" name="image" placeholder="Image URL" value={props.image} onChange={props.handleChange} />
            </div>
          </div>
          <div className="control">
            <button className="button is-info" type="submit">Add food</button>
          </div>
        </form>

        <NavLink to="/" className="button is-danger mt-5">
          Home
        </NavLink>
      </div>
    );
}
