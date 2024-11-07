import { useState } from "react";

const AddFoodForm = ({ addFood }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="formContainer">
      <h1>Add Food</h1>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Image Link</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        <label>Calories</label>
        <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />

        <label>Servings</label>
        <input type="number" value={servings} onChange={(e) => setServings(e.target.value)} />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};
export default AddFoodForm;
