import React from 'react';

const FoodForm = ({addFood, handleInput}) => (
  <form className="form" onSubmit={addFood}>
    <div className="field">
      <label htmlFor="name" className="label">
        Food:{' '}
      </label>
      <div className="control">
        <input type="text" name="name" id="name" className="input" onChange={handleInput} />
      </div>
    </div>
    <div className="field">
      <label htmlFor="calories" className="label">
        Calories{' '}
      </label>
      <div className="control">
        <input type="number" name="calories" id="calories" className="input" onChange={handleInput} />
      </div>
    </div>
    <div className="field">
      <label htmlFor="image" className="label">
        Image url:{' '}
      </label>
      <div className="control">
        <input type="text" name="image" id="image" className="input" onChange={handleInput} />
      </div>
    </div>
    <div className="field">
      <div
        className="control"
        style={{
          marginBottom: '20px'
        }}
      >
        <input type="submit" value="Add food" className="button is-warning" />
      </div>
    </div>
  </form>
);

export default FoodForm;