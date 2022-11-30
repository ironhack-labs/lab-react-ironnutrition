import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleName = e => {
    setName(e.target.value);
  };

  const handleImage = e => {
    setImage(e.target.value);
  };

  const handleCalories = e => {
    setCalories(e.target.value);
  };

  const handleServings = e => {
    setServings(e.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings
    };
    props.addFood(newFood)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" type="text" onChange={handleName} />

      <label>Image</label>
      <Input name="image" type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input name="calories" type="text" onChange={handleCalories} />

      <label>Servings</label>
      <Input name="serving" type="text" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
