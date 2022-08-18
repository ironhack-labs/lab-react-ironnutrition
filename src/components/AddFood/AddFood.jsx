import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFood(props) {
  const { createFood } = props;

  //create State
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  //create Handler
  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  //submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, image, calories, servings };
    createFood(newFood);
    console.log(newFood);

    //clear state
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input
        placeholder="http://exemple.com/food-image.jpg"
        value={image}
        type="text"
        onChange={handleImage}
      />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFood;
