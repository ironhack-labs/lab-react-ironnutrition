import React, { useState } from 'react';

function Modal(props) {
  const [isActive, setActive] = useState('');

  //Objecto
  const [newFood, setNewFood] = useState({ name: '', calories: '', image: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevState) => {
      return { ...prevState, [name]: value };
    });
  };


  const handleSubmit = (e)=>{
      e.preventDefault();
      props.addFood(newFood)
  }
  return (
    <div>
      <div className={'modal ' + isActive}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {/* Form */}
          <form
            className="card"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Name Food</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Queso"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Number calories</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Calories"
                  name="calories"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Add Image</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={() => setActive('')}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          type="reset"
          onClick={() => setActive('')}
        ></button>
      </div>
      <button
        className="button is-primary is-large modal-button"
        data-target="modal"
        aria-haspopup="true"
        
        onClick={() => setActive('is-active')}
      >
        Add New Food
      </button>
    </div>
  );
}

export default Modal;
