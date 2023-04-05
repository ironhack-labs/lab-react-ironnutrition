// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ setFoodsList }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //handle submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    setFoodsList((oldList) => {
      return [newFood, ...oldList];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        required
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input
        value={image}
        required
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={calories}
        required
        type="number"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={servings}
        type="text"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
