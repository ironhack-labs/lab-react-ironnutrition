import { useState } from "react";

const AddFoodForm = ({ handleAddFood }) => {
    const [ name, setName ] = useState("");
    const [ image, setImage ] = useState("");
    const [ calories, setCalories ] = useState(0);
    const [ servings, setServings ] = useState(0); 


    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };

        console.log("Submitted: ", newFood);
        handleAddFood(newFood);
    }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label htmlFor="name">Name:</label>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={handleNameInput}
      />

      <label htmlFor="image">Image:</label>
      <input 
        type="text"
        name="image"
        value={image}
        onChange={handleImageInput}
      />

      <label htmlFor="calories">Calories:</label>
      <input 
        type="number"
        name="calories"
        value={calories}
        onChange={handleCaloriesInput}
      />

      <label htmlFor="servings">Number:</label>
      <input 
        type="number"
        name="servings"
        value={servings}
        onChange={handleServingsInput}
      />

      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFoodForm;
