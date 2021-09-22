import { useState } from "react";

export default function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(50);
  const [servings, setServings] = useState(5);

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);

    //reset setState
    setName("");
    setImage("");
    setCalories("50");
    setServings("5");
  };

  return (
    <div className="addFood">
      {/*adding the form*/}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label>Servings:</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <button type="submit">CREATE</button>
      </form>
    </div>
  );
}
