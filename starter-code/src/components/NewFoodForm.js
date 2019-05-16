import React from "react";

const NewFoodForm = ({handleChange, handleSubmit, name, calories, image}) => (
  <div className="new-food-form-container">
    <form className="new-food-form">
    <h3>Add a new food to the list</h3>
      <div className="content">
        <label>Food:</label>
        <input className="input" onChange={handleChange} name="name" type="text" value={name} />
      </div>
      <div className="content">
        <label>Calories:</label>
        <input className="input" onChange={handleChange} name="calories" type="number" value={calories}/>
      </div>
      <div className="content">
        <label>Image:</label>
        <textarea className="input" onChange={handleChange} name="image" id="" value={image}/>
      </div>
      <button onClick={handleSubmit} className="button is-info">Submit</button>
    </form>
  </div>
);

export default NewFoodForm;
