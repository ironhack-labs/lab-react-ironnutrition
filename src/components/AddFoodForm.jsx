// Your code here
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

    // invoke function in the parent component
    props.callbackToAddFood(foodDetails);

    // clear form
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="name"
            required={true}
            placeholder="enter the name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
            Image:
          <input
            name="image"
            type="text"
            required={true}
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
            Calories: 
          <input
            name="calories"
            type="number"
            required={true}
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>
        <label>
            Servings: 
          <input
            name="servings"
            type="number"
            required={true}
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
