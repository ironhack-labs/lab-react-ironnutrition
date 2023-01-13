import { Input } from 'antd';
import { useState } from "react";

function AddFood(props) {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    
    console.log("Submitted", newFood);
    props.addFood(newFood);


    // Reset the state
    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  }


  return (
    <div className="AddFood">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <Input type="text" name="name" value={name} onChange={handleNameInput} />

        <label>Image:</label>
        <Input type="text" name="image" alt="food" value={image} onChange={handleImageInput} />

        <label>Calories:</label>
        <Input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />

        <label>Servings:</label>
        <Input type="number" name="servings" value={servings} onChange={handleServingsInput} />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFood;
