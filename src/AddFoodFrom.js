import { Input, Divider } from 'antd';
import { useState } from 'react';

function AddFoodForm({ foodList, setFoodList }) {
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCal, setNewCal] = useState('');
  const [newServing, setNewServing] = useState('');

  function addNewItem(e) {
    e.preventDefault();
    const newItem = {
      name: newName,
      image: newImage,
      calories: newCal,
      servings: newServing,
    };
    setFoodList([...foodList, newItem]);
  }

  return (
    <form onSubmit={(e) => addNewItem(e)}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newName}
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />

      <label>Image</label>
      <Input
        value={newImage}
        type="text"
        onChange={(e) => {
          setNewImage(e.target.value);
        }}
      />

      <label>Calories</label>
      <Input
        value={newCal}
        type="number"
        onChange={(e) => {
          setNewCal(e.target.value);
        }}
      />
      <label>Servings</label>
      <Input
        value={newServing}
        type="number"
        onChange={(e) => {
          setNewServing(e.target.value);
        }}
      />

      <butoon type="submit">Create</butoon>
    </form>
  );
}
export default AddFoodForm;
