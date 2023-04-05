import { useState } from "react";

import { Divider, Input, Button } from 'antd';

// Iteration 4
function AddFoodForm(props) {

    const [foodName, setFoodName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");

    const Submit = (e) =>{
        e.preventDefault();

        const newFood = {
            name: foodName,
            calories: calories,
            image: image,
            servings: servings
        };

        props.callbackNewFood(newFood);

        setFoodName("");
        setCalories("");
        setImage("");
        setServings("");

    };

  return (
    <form onSubmit={Submit}>
      

      <label>Name</label>
      <Input value={foodName} type="text" onChange={(e) => {setFoodName(e.target.value)}} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default AddFoodForm;