import { Divider, Input } from 'antd';
import { useState } from 'react';
// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(1);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    const newFoodie = {
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    props.callbackAdd(newFoodie);

    setName('');
    setCalories(1);
    setImage('');
    setServings(1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={image}
        type="image"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        min="0"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        min="1"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
