// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ callbackToCreate }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    callbackToCreate(newFood);

    //clear form
    setName('');
    setCalories('');
    setImage('');
    setServings('');
  };

  return (
    <div className="AddFood">
      <form onSubmit={handleFormSubmit}>
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input
          key="changeName"
          name="name"
          placeholder="Name of the food"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Image</label>
        <Input
          key="changeImage"
          name="image"
          placeholder="URL of an image"
          value={image}
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        {/* render antd <Input /> type="text" here */}

        <label>Calories</label>
        <Input
          key="changeCalories"
          name="calories"
          placeholder="Amount of calories"
          value={calories}
          type="number"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />

        {/* render antd <Input /> type="number" here */}

        <label>Servings</label>
        <Input
          key="changeServings"
          name="servings"
          placeholder="Amount of servings"
          value={servings}
          type="number"
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />
        {/* render antd <Input /> type="number" here */}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
