import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ submitFood }) {
  const [foodName, setFoodName] = useState('');
  const [foodImage, setFoodImage] = useState('');
  const [foodCalories, setFoodCalories] = useState(0);
  const [foodServings, setFoodServings] = useState(0);

  const handleNameInput = (e) => {
    setFoodName(e.target.value);
  };
  const handleImageInput = (e) => {
    setFoodImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setFoodCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setFoodServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: foodName,
      image: foodImage,
      calories: foodCalories,
      servings: foodServings,
    };

    submitFood(newFood);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodName} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={foodImage} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input
        value={foodCalories}
        type="number"
        onChange={handleCaloriesInput}
      />

      <label>Servings</label>
      <Input
        value={foodServings}
        type="number"
        onChange={handleServingsInput}
      />

      <Button
        style={{
          border: '2px solid green',
          color: 'green',
          backgroundColor: 'white',
          marginTop: 10,
        }}
        type="submit"
      >
        Create a meal
      </Button>
    </form>
  );
}

export default AddFoodForm;
