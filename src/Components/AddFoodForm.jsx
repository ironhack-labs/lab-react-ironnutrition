import { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(100);
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    addFood(newFood);

    // Reset the state
    setName('');
    setImage('');
    setCalories(100);
    setServings(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{ display: 'flex', textAlign: 'left', margin: '1rem 3rem' }}
        >
          <label>Name: </label>
          <Input
            value={name}
            placeholder="Banana"
            type="text"
            style={{
              width: 300,
            }}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </div>

        <div
          style={{ display: 'flex', textAlign: 'left', margin: '1rem 3rem' }}
        >
          <label>Image: </label>
          <Input
            value={image}
            placeholder="https://i.imgur.com/BMdJhu5.jpg"
            type="text"
            style={{
              width: 300,
            }}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div
          style={{ display: 'flex', textAlign: 'left', margin: '1rem 3rem' }}
        >
          <label>Calories: </label>
          <Input
            value={calories}
            placeholder="175"
            type="text"
            style={{
              width: 300,
            }}
            onChange={(e) => setCalories(e.target.value)}
          ></Input>
        </div>

        <div
          style={{ display: 'flex', textAlign: 'left', margin: '1rem 3rem' }}
        >
          <label>Servings: </label>
          <Input
            value={servings}
            placeholder="1"
            type="text"
            style={{
              width: 300,
            }}
            onChange={(e) => setServings(e.target.value)}
          ></Input>
        </div>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
