import React from 'react';

export default function FoodForm( { handleChange, onPress, newFood } = this.props ) {

  return (
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input type="text" className="input" name="name" value={newFood.name} onChange={ handleChange } />
      </div>
      <label className="label">Calories</label>
      <div className="control">
        <input type="text" className="input" name="calories" value={newFood.calories} onChange={ handleChange } />
      </div>
      <label className="label">Image URL</label>
      <div className="control">
        <input type="text" className="input" name="image" value={newFood.image} onChange={ handleChange } />
      </div>
      <div className="control has-text-centered">
        <button className="button is-info" onClick={event => onPress(event)}>Add to your foods!</button>
      </div>
    </div>
  );
}