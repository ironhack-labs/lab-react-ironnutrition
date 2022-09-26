import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ addFoodFunction }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
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
        onChange={(e) => {
          setNewFood({ ...newFood, image: e.target.value });
        }}
      />

      <label>Calories</label>
      <Input
        value={newFood.calories}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, calories: e.target.value });
        }}
      />

      <label>Servings</label>
      <Input
        value={newFood.servings}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, servings: e.target.value });
        }}
      />
      <button
        type="submit"
        onClick={() => {
          // console.log('New Food: ', newFood);
          addFoodFunction((kira) => [newFood, ...kira]);
          setNewFood({ name: '', image: '', calories: 0, servings: 0 });
        }}
      >
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
