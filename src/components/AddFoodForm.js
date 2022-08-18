import { Divider, Input } from 'antd';
import { useState} from 'react';

function AddFoodForm(props) {
const { name, image, calories, servings, updateName, updateImage, updateCalories, updateServings, handleSubmitFood } = props

    return (
    <form onSubmit={handleSubmitFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={updateName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={updateImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={updateCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={updateServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;