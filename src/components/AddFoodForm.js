import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm({addFood}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const submitFood = (e) => {
        e.preventDefault();

        const newFood = {
            name,
            image,
            calories,
            servings
        };
        addFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

  return (
    <form onSubmit={submitFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input required value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input required value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input required value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;