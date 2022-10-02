import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  let [isOpen, setOpen] = useState(true);
  let [name, setName] = useState('');
  let [image, setImage] = useState('');
  let [calories, setCalories] = useState('');
  let [servings, setServings] = useState('');

  function displayDrawer() {
    if (isOpen) {
      return (
        <form>
          <Divider>Add Food Entry</Divider>
          <label>Name</label>
          <Input
            value={name}
            type="text"
            onChange={({ target: { value } }) => setName(value)}
          />
          <label>Image</label>
          <Input
            value={image}
            type="text"
            onChange={({ target: { value } }) => setImage(value)}
          />
          <label>Calories</label>
          <Input
            value={calories}
            type="text"
            onChange={({ target: { value } }) => setCalories(value)}
          />
          <label>Servings</label>
          <Input
            value={servings}
            type="text"
            onChange={({ target: { value } }) => setServings(value)}
          />
          <Button
            type="primary"
            onClick={() => onAddFood({ name, image, calories, servings })}
          >
            Create
          </Button>
          <Divider />
          <Button type="primary" onClick={() => setOpen(false)}>
            Hide Form
          </Button>
        </form>
      );
    } else {
      return (
        <Button type="primary" onClick={() => setOpen(true)}>
          Add New Food
        </Button>
      );
    }
  }

  return displayDrawer();
}

export default AddFoodForm;
