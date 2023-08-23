import { useState } from "react";

function AddFood(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleImageInput = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };

  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      image,
      calories,
      servings,
    };

    props.addNewFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <div>
      <h4>Add a Food</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </label>
        <button type="submit"> Create </button>
      </form>
    </div>
  );
}

export default AddFood;
