import React from "react";

function FoodForm(props) {
  return (
    <div id = "form-div" className = "hidden">
      <div className="field">
        <label htmlFor = "name" className="label">Name</label>
        <div className="control">
          <input className="input" id = "name" name = "name" type="text" placeholder="Name" />
        </div>
      </div>
      <div className="field">
        <label htmlFor = "calories" className="label">Calories</label>
        <div className="control">
          <input className="input" id = "calories" name = "calories" type="number" placeholder="Calories" />
        </div>
      </div>
      <div className="field">
        <label htmlFor = "image" className="label">Image</label>
        <div className="control">
          <input className="input" id = "image" name = "image" type="text" placeholder="Image Url" />
        </div>
      </div>
      <div className="field">
        <label htmlFor = "quantity" className="label">Quantity</label>
        <div className="control">
          <input className="input" id = "quantity" name = "quantity" type="number" placeholder="Quantity" />
        </div>
      </div>
      <div className="control has-icons-right" >
        <button onClick={props.submitForm} className="button is-link is-pulled-right">Submit</button>
      </div>
    </div>

  )
}

export default FoodForm
