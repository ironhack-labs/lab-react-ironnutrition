// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFood(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newFood = {
            "name": name,
            "image": image,
            "calories": calories,
            "servings": servings
        };

        props.callbackToAdd(newFood);

        //clear form
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input name="image" value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input name="calories" value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input name="servings" value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFood;