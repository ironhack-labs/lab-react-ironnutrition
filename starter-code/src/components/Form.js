import React from "react";

const Form = ({ closeModal, handleChange, addMeal, name, calories, image }) => {
  return (
    <form onSubmit={addMeal}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="e.g Tacos al Pastor"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input
            className="input"
            type="number"
            placeholder="e.g. 150"
            name="calories"
            value={calories}
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="image"
            value={image}
            placeholder="e.g. http://site.public.dom/image.png"
            required
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
        <div className="control">
          <a onClick={closeModal} className="button is-light">
            Cancel
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;
