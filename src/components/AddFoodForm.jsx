import { useState } from "react";

function AddFoodForm({ onAddFood }) {
  const [data, setData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const onSubmit = (event) => {
    event.prevent.default();

    const newFood = {
      ...data,
      id: uuidv4(),
    };
    onAddFood(newFood);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={data.name}
          onChange={(event) => {
            setData({ ...data, name: event.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          value={data.image}
          onChange={(event) => {
            setData({ ...data, image: event.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          name="calories"
          type="number"
          value={data.calories}
          onChange={(event) => {
            setData({ ...data, calories: event.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          id="servings"
          name="servings"
          type="number"
          value={data.servings}
          onChange={(event) => {
            setData({ ...data, servings: event.target.value });
          }}
        />
      </div>

      <button type="submit">Create</button>
    </form>
  );
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

export default AddFoodForm;
