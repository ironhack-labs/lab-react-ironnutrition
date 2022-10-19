import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({callbackToCreate}) {
    const [name, setName] = useState("");
    const [image, SetImage] = useState("");
    const [calories, SetCalories] = useState("");
    const [servings, SetServings] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

    const newFood = {
        name: name,
        image: image,
        calories: calories,
        servings: servings
    }

    callbackToCreate(newFood);

    setName("");
    SetImage("");
    SetCalories("");
    SetServings(""); 

    }

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input 
        value={name}
        type="text" 
        onChange={(e) => { setName(e.target.value) }}
        />

      <label>Image</label>
      <Input 
        value={image}
        type="text" 
        onChange={(e) => { SetImage(e.target.value) }}
        />
      <label>Calories</label>
      <Input 
        value={calories}
        type="number" 
        min={1}
        max={5000}
        onChange={(e) => { SetCalories(e.target.value) }}
        />

      <label>Servings</label>
      <Input 
        value={servings}
        type="number" 
        min={1}
        max={10}
        onChange={(e) => { SetServings(e.target.value) }}
        />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
