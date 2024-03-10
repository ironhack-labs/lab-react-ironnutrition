import { useState } from "react";
import { Divider, Input, Button } from "antd";


function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeImage = (e) => {
    setImage(e.target.value);
  };

  const changeCalories = (e) => {
    setCalories(e.target.value);
  };

  const changeServings = (e) => {
    setServings(e.target.value);
  };

  const generateNewFood = (e) => {
    e.preventDefault();
    const newFoodItem = { name, image, calories, servings };
    addNewFood(newFoodItem);
  };

  return (
    <div className= "form">
      <Divider>Add Food Entry</Divider>
      <form   onSubmit={generateNewFood}>
        <label>Name</label>
        <Input onChange={changeName} type="text" name="name" />
        <label>Image</label>
        <Input onChange={changeImage} type="text" name="image" />
        <label>Calories</label>
        <Input onChange={changeCalories} type="number" name="calories" />
        <label>Servings</label>
        <Input onChange={changeServings} type="number" name="servings" />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
