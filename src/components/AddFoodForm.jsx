import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  
  return (
    <form onSubmit={props.addFood}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />

      <label htmlFor="image">
        Image
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />

      <label htmlFor="calories">
        Calories
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
      </label>
      <br />

      <label htmlFor="servings">
        Servings
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
      </label>
      <br />

      <button>Create</button>
    </form>
  );
}

export default AddFoodForm;
