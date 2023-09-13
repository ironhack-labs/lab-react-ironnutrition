import { useState } from "react";

function AddFoodForm(props) {
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
    <section key="{name}">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            required={true}
            placeholder="Cassoulet, Raclette"
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
            placeholder="http://site.com/img.jpg"
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
            min={0}
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
            min={1}
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

export default AddFoodForm;
