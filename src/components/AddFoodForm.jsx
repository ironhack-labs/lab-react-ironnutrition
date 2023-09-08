import { useState } from "react";
import "./AddFoodForm.css";

function AddFoodForm(props) {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, image, calories, servings } = event.target;
    const newFood = {
      name: name.value,
      image: image.value,
      calories: calories.value,
      servings: servings.value,
    };
    const foodsCopy = [...props.foods];
    foodsCopy.unshift(newFood);
    props.setFoods(foodsCopy);
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div className="AddFoodForm">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" />
          <label htmlFor="calories">Calories</label>
          <input type="number" name="calories" id="calories" />
          <label htmlFor="servings">Servings</label>
          <input type="number" name="servings" id="servings" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="AddFoodForm">
        <button onClick={() => setShowForm(true)}>Show Form</button>
      </div>
    );
  }
}

export default AddFoodForm;
