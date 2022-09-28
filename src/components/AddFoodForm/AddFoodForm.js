import React, { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = ({ setFood, food }) => {
  const [name, setName] = useState(''); // state value for the name of the food input
  const [image, setImage] = useState(''); // state value for the image of the food input
  const [calories, setCalories] = useState(0); // state value for the calories of the food input
  const [servings, setServings] = useState(0); // state value for the servings of the food input

  console.log(name);
  return (
    <form
      style={{
        maxWidth: 500,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
      }}
      onSubmit={(event) => {
        event.preventDefault();
        setName('');
        setImage('');
        setCalories(0);
        setServings(0);
      }}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input
        value={image}
        type="text"
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={calories}
        type="number"
        onChange={(event) => {
          setCalories(event.target.value);
        }}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={servings}
        type="number"
        onChange={(event) => {
          setServings(event.target.value);
        }}
      />

      <button
        type="submit"
        onClick={() => setFood([{ name, image, calories, servings }, ...food])}
        // name, image, calories, servings are coming from the input fields and from the local states of this component, than we copying the food state from the app component to add the new foods to the data file of food.
      >
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
