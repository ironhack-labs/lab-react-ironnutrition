import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(110);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const o = {
            name: name,
            calories: calories,
            image: image,
            servings: servings,
          };
          props.addTheFood(o);

          setName("");
          setCalories(110);
          setImage("");
          setServings(1);
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          ></input>
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          ></input>
        </label>

        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          ></input>
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          ></input>
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
