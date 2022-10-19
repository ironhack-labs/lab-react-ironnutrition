import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  const [showForm, setShowForm] = useState(false);

  const nameEntry = (e) => {
    setName(e.target.value);
  };
  const imageEntry = (e) => {
    setImage(e.target.value);
  };
  const caloriesEntry = (e) => {
    setCalories(e.target.value);
  };
  const servingsEntry = (e) => {
    setServings(e.target.value);
  };
  const sendData = (e) => {
    e.preventDefault();
    props.foodEntry({ name, image, calories, servings });
  };

  return (
    <div>
      <form onSubmit={sendData}>
        {showForm === false && (
          <Button
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add New Form
          </Button>
        )}
        {showForm === true && (
          <div>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={name} type="text" onChange={nameEntry} />

            <label>Image</label>
            <Input value={image} type="text" onChange={imageEntry} />

            <label>Calories</label>
            <Input value={calories} type="number" onChange={caloriesEntry} />

            <label>Servings</label>
            <Input value={servings} type="number" onChange={servingsEntry} />

            <button type="submit">Create</button>

            <br />
            <br />
            <Button
              onClick={() => {
                setShowForm(false);
              }}
              className="btn"
            >
              Hide Form
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddFoodForm;
