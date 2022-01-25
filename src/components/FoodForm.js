import React, { useState } from 'react';

const FoodForm = ({ addNewFood, toogleShowForm }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories) return alert('Fill all the information, please')
    addNewFood({ name, calories, image });
    setName('');
    setCalories(0);
    setImage('');
    toogleShowForm();
  };

  const cancelClick = () => {
    setName('');
    setCalories(0);
    setImage('');
    toogleShowForm();
  };

  return (
    <>
      <form className="section" onSubmit={(e) =>handleSubmit(e)}>
        <div className="field">
          <label className="label">Food</label>
          <div className="control">
            <input
              className="input"
              placeholder="Tomato"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              placeholder="0"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image url</label>
          <div className="control">
            <input
              className="input"
              placeholder="Image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped is-justify-content-flex-end">
          <div className="control">
            <button className="button is-info is-small">Submit</button>
          </div>
          <div className="control">
            <button
              className="button is-info is-small is-light"
              onClick={cancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FoodForm;
