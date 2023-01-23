import { useState } from 'react';
import { Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function handleNameInput(event) {
    setName(event.target.value);
  }

  function handleImageInput(event) {
    setImage(event.target.value);
  }

  function handleCaloriesInput(event) {
    setCalories(event.target.value);
  }

  function handleServingsInput(event) {
    setServings(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.handleNewFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
