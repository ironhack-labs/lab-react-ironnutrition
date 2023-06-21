import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.onAddFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(e) => setCalories(parseInt(e.target.value))}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => setServings(parseInt(e.target.value))}
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;