import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  // console.log('Name:', newFood.name);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFood.name}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />

      <label>Image</label>
      <Input
        value={newFood.image}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
      />

      <label>Calories</label>
      <Input
        value={newFood.calories}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}
      />

      <label>Servings</label>
      <Input
        value={newFood.servings}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, servings: e.target.value })}
      />
      <Button
        type="submit"
        onClick={() => {
          // console.log('New Food: ', newFood);
          addFood((newItem) => [newFood, ...newItem]);

          setNewFood({ name: '0', image: '', calories: 0, servings: 0 });
        }}
      >
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
