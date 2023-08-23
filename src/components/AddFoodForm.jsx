import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleImageInput = (event) => {
    setImage(event.target.value);
  };

  const handleCaloriesInput = (event) => {
    setCalories(event.target.value);
  };

  const handleServingsInput = (event) => {
    setServings(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // preventing from redirecting to another page
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
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </label>

        <label>
          {" "}
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
          {" "}
          Servings:
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          />
        </label>

        <button type="submit"> Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
