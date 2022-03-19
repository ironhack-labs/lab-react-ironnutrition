import React, { useState } from 'react';
const AddFoodForm = ({ addFoodToList }) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    calories: 0,
    image: '',
  });

  const handleForm = (e) => {
    e.preventDefault();
    addFoodToList(formInfo);
  };
  const handleName = (e) => {
    setFormInfo({ ...formInfo, name: e.target.value });
  };
  const handleCalories = (e) => {
    setFormInfo({ ...formInfo, calories: Number(e.target.value) });
  };
  const handleImage = (e) => {
    setFormInfo({ ...formInfo, image: e.target.value });
  };

  return (
    <div className="box">
      <form onSubmit={() => handleForm()}>
        <input
          className="input mb-3"
          type="text"
          placeholder="Food name"
          name="name"
          onChange={(e) => {
            handleName(e);
          }}
        />
        <input
          className="input mb-3"
          type="number"
          placeholder="number of calories"
          name="calories"
          onChange={(e) => {
            handleCalories(e);
          }}
        />

        <input
          className="input mb-3"
          type="text"
          placeholder="image"
          name="image"
          onChange={(e) => {
            handleImage(e);
          }}
        />
        <div className="control">
          <button type="submit" className="button is-info mt-3">
            Add New Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoodForm;
