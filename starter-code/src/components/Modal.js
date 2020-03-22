import React from 'react';

export const FormModal = ({ isOpen, closeModal }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('form submited!');
    closeModal();
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
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="image">
                Image:
              </label>
              <input
                className="input is-rounded"
                type="text"
                placeholder="Image"
              />
            </div>

            <button className="button is-success is-light">Add Food</button>
          </form>

          <button className="button is-danger is-light" onClick={closeModal}>
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
