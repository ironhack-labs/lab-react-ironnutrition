import React, { useState } from 'react';
import Input from './Input';

const Form = (props) => {
  const { onClose, onConfirm } = props;

  const [newFood, setNewFood] = useState({
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  });

  const onSave = () => {
    onConfirm(newFood);
  };
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <Input
            type="text"
            placeholder="Name"
            label="Name"
            value={newFood.name}
            onChange={(e) =>
              setNewFood({
                ...newFood,
                name: e.target.value,
              })
            }
          />
          <Input
            type="number"
            placeholder="calories"
            label="Calories"
            value={newFood.calories}
            onChange={(e) =>
              setNewFood({
                ...newFood,
                calories: e.target.value,
              })
            }
          />
          <Input
            type="text"
            placeholder="Image"
            label="Image"
            value={newFood.image}
            onChange={(e) =>
              setNewFood({
                ...newFood,
                image: e.target.value,
              })
            }
          />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSave}>
            Save changes
          </button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Form;
