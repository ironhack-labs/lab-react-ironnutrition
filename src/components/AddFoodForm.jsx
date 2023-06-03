import { Divider, Input } from 'antd';
import '../App.css'
import { useState } from 'react';
// Iteration 4
function AddFoodForm({ food, setFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  
  function onSubmit (event) {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings
    };
    setFood([newFood, ...food]);
    event.addFood(newfood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");

  };

  
  



    return (
      <div className="form">
    <form onSubmit={onSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
          <Input
            value={name}
            name="name"
            type="text"
            onChange={(e) =>
  { setName(e.target.value); }} />

      <label>Image</label>
          <Input
            name="image"
            type="text" 
            value={image}
            onChange={(e) =>
  { setImage(e.target.value); }}
            />  

      <label>Calories</label>
          <Input
            name="calories"
            type="number"
            value={calories} 
            onChange={(e) =>
  { setCalories(e.target.value); }}
            />  

      <label>Servings</label>
          <Input
            name="servings"
            type="number" 
            value={servings}
            onChange={(e) =>
  { setServings(e.target.value); }}
            /> 

      <button type="submit">Create</button>
            </form>
        </div>
  );
}

export default AddFoodForm;