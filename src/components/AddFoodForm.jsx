import { useState } from "react";

function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.cbAddFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <section className="AddFood">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="title"
            placeholder="Name"
            required={true}
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
          type="number"
          name="servings"
          min={0}
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
