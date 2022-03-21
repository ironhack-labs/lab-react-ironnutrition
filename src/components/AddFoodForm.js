import React, { useState } from 'react';
const AddFoodForm = ({ addFoodToList }) => {
  const [formInfo, setFormInfo] = useState({
    name: '',
    calories: 0,
    image: '',
  });

  console.log(formInfo);

  const handleForm = (e) => {
    e.preventDefault();
    addFoodToList(formInfo);
  };

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setFormInfo({ ...formInfo, [name]: value });
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
            handleOnChange(e);
          }}
        />
        <input
          className="input mb-3"
          type="number"
          placeholder="number of calories"
          name="calories"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />

        <input
          className="input mb-3"
          type="text"
          placeholder="image"
          name="image"
          onChange={(e) => {
            handleOnChange(e);
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
