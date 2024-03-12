import { useState } from 'react';
import { Divider, Input, Button } from "antd";


function AddFoodForm({ onAddFood }) {
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onAddFood(formState);
    setFormState({ name: '', image: '', calories: 0, servings: 0 }); // Reset the form
  }

  return (
    <form onSubmit={handleSubmit}>

    <Divider>Add Food Entry</Divider>

    <label>Name</label>
    <Input name="name" value={formState.name} type="text" onChange={() => {handleChange}} />
      {/* <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      /> */}
      
    <label>Image</label>
    <Input name="image" value={formState.name} type="text" onChange={() => {handleChange}} />
      {/* <input
        type="text"
        name="image"
        value={formState.image}
        onChange={handleChange}
        placeholder="Image URL"
      /> */}

      <label>Calories</label>
      <Input name="calories" value={formState.calories} type="number" onChange={() => {handleChange}} />
      {/* <input
        type="number"
        name="calories"
        value={formState.calories}
        onChange={handleChange}
        placeholder="Calories"
      /> */}
      
      <label>Servings</label>
      <Input name="servings" value={formState.servings} type="number" onChange={() => {handleChange}} />
      {/* <input
        type="number"
        name="servings"
        value={formState.servings}
        onChange={handleChange}
        placeholder="Servings"
      /> */}

      <Button type="primary">Create</Button>
      {/* <button type="submit">Create</button> */}
    </form>
  );
}

export default AddFoodForm;