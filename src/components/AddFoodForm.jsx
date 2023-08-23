import { useState } from "react";

function AddFood(props) {
  const [name, setFoodName] = useState("");
  const [image, setFoodImg] = useState("");
  const [calories, setFoodCal] = useState("");
  const [servings, setFoodServings] = useState("");
  const { addNewFood } = props;

  const handleNameInput = (event) => {
    setFoodName(event.target.value)
  }

  const handleImageInput = (event) => {
    setFoodImg(event.target.value)
  }

  const handleCaloriesInput = (event) => {
    setFoodCal(event.target.value)
  }

  const handleServingsInput = (event) => {
    setFoodServings(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };
    addNewFood(newFood);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleNameInput} />
          </label>
          <label>
            Image:
            <input type="text" name="image" value={image} onChange={handleImageInput} />
          </label>
          <label>
            Calories:
            <input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />
          </label>
          <label>
            Servings:
            <input type="number" name="serving" value={servings} onChange={handleServingsInput} />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}

export default AddFood;
