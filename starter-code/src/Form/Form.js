import React from "react";

const Form = ({ data, handleChange, handleSubmit }) => (
  <div className="App">
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            name="calories"
            className="input"
            type="number"
            placeholder="Calories"
            value={data.calories}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            name="quantity"
            className="input"
            type="number"
            placeholder="Quantity"
            value={data.quantity}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            name="image"
            className="input"
            type="text"
            placeholder="Image Link"
            value={data.image}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
