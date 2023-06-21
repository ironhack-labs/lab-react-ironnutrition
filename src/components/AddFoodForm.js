import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.callbackToCreate(newFood);

    // Clear form
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        placeholder="Type the food"
        required={true}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="url"
        required={true}
        placeholder="Type the food"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        required={true}
        placeholder="How many calories?"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        required={true}
        placeholder="How many servings?"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
