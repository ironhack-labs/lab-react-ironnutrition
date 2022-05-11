import React, { useState } from 'react';

function Form(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('https://picsum.photos/200/300/?blur=2');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFood((prevFood) => {
      const newFood = {
        name: name,
        calories: calories,
        image: image,
      };
      return [newFood, ...prevFood];
    });
    props.setFiltered((prevFiltered) => {
      const newFood = {
        name: name,
        calories: calories,
        image: image,
      };
      return [newFood, ...prevFiltered];
    });
    props.setForm(false);
    setName('');
    setCalories(0);
    setImage('https://picsum.photos/200/300/?blur=2');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={handleNameChange}
        value={name}
        placeholder="Name of Product"
      />
      <input
        type="number"
        name="calories"
        onChange={handleCaloriesChange}
        value={calories}
      />
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Add Product!</button>
    </form>
  );
}

export default Form;
