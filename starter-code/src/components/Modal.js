import React, { useState } from 'react';

export const FormModal = ({ isOpen, closeModal, addFood }) => {
  const [newFood, setNewFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 0
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form submited!');

    closeModal();
    addFood(newFood);

    // clear inputs after submitting form
    setNewFood({
      ...newFood,
      name: '',
      calories: '',
      image: ''
    });
  };

  const handleClick = () => {
    closeModal();

    // clear inputs after closing form
    setNewFood({
      ...newFood,
      name: '',
      calories: '',
      image: ''
    });
  };

  return (
    <div className={`modal is-clipped ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Name"
                value={!isOpen ? '' : newFood.name}
                onChange={e => setNewFood({ ...newFood, name: e.target.value })}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="calories">
                Calories:
              </label>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Calories"
                value={!isOpen ? '' : newFood.calories}
                onChange={e =>
                  setNewFood({ ...newFood, calories: Number(e.target.value) })
                }
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="image">
                Image:
              </label>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Image url"
                value={!isOpen ? '' : newFood.image}
                onChange={e =>
                  setNewFood({ ...newFood, image: e.target.value })
                }
              />
            </div>

            <button className="button is-success is-light">Add Food</button>
          </form>

          <button
            className="button is-danger is-light"
            onClick={() => handleClick()}
          >
            Cancel
          </button>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
};
