import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.callbackToAddFoodEntry(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        required={true}
      />

      <label>Image</label>
      <Input
        value={image}
        type="text"
        name="image"
        placeholder="http://example.com/food-image.jpg"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        min={100}
        name="calories"
        placeholder="Enter calories"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
        required={true}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        min={1}
        name="servings"
        placeholder="Enter servings"
        onChange={(e) => {
          setServings(e.target.value);
        }}
        required={true}
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
