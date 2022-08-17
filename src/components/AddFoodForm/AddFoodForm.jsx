import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
    const { createFood } = props;

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handleCalories = (e) => setCalories(e.target.value);
    const handleServings = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

    const newFood = {name, image, calories, servings};
    createFood(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
    };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={props.name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={props.image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={props.calories} type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={props.servings} type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;