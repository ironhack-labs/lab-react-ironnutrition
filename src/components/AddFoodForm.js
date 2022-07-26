import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const { foodForm, updatedFoodForm, handleAddFood } = props;

  return (
    <form style={{ width: '30%' }} onSubmit={handleAddFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={foodForm.name}
        name="name"
        type="text"
        onChange={updatedFoodForm}
      />

      <label>Image</label>
      <Input
        value={foodForm.image}
        name="image"
        type="text"
        onChange={updatedFoodForm}
      />

      <label>Calories</label>
      <Input
        value={foodForm.calories}
        name="calories"
        type="text"
        onChange={updatedFoodForm}
      />

      <label>Servings</label>
      <Input
        value={foodForm.servings}
        name="servings"
        type="text"
        onChange={updatedFoodForm}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
