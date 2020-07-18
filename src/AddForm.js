import React from 'react'
import {NavLink} from "react-router-dom";

export default function AddForm() {
    return (
      <div className="container">
        <div className="form">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Food name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Number of calories</label>
            <div className="control">
              <input className="input" type="number" />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input className="input" type="text" placeholder="Image URL" />
            </div>
          </div>
          <div className="control">
            <button className="button is-success">Add food</button>
          </div>
        </div>

        <NavLink to="/" className="button is-primary mt-5">
          Home
        </NavLink>
      </div>
    );
}
