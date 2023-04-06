import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

// Iteration 4
const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
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
        type="text"
        onChange={(e) => setImage(e.target.value)}
      />

      <label>Calories</label>
      <Input
        value={calories}
        type="number"
        onChange={(e) => setCalories(e.target.value)}
      />

      <label>Servings</label>
      <Input
        value={servings}
        type="number"
        onChange={(e) => setServings(e.target.value)}
      />
      <Button className="btn-show" type="primary" htmlType="submit">
        {' '}
        Create{' '}
      </Button>
    </form>
  );
};

export default AddFoodForm;
