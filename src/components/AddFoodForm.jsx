import { useState } from "react";


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
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={generateNewFood}>
        <label>Name</label>
        <input onChange={changeName} type="text" name="name" />
        <label>Image</label>
        <input onChange={changeImage} type="text" name="image" />
        <label>Calories</label>
        <input onChange={changeCalories} type="number" name="calories" />
        <label>Servings</label>
        <input onChange={changeServings} type="number" name="servings" />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default AddFoodForm;
