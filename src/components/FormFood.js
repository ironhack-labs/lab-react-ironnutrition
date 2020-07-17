import React from 'react';

const FormFood = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="e.g Egg"
            value={props.value.name}
            onChange={props.onChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input
            name="calories"
            className="input"
            type="number"
            placeholder="e.g 155"
            value={props.value.calories}
            onChange={props.onChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            name="image"
            className="input"
            type="url"
            placeholder="e.g. https://i.imgur.com/eTmWoAN.png"
            value={props.value.image}
            onChange={props.onChange}
          />
        </div>
      </div>
      <button type="submit" className="button is-primary">
        Add Food
      </button>
    </form>
  );
};

export default FormFood;
