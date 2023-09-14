import { useState } from "react";

function AddFood(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const foodDetails = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.callbackToAddFood(foodDetails);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            required={true}
            placeholder="Add image URL"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            required={true}
            placeholder="Add calories"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            required={true}
            placeholder="Add servings"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </label>

        <button>Create</button>
      </form>
    </section>
  );
}

export default AddFood;
