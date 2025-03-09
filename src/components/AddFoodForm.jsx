// Your code here

import { useState } from "react";

const initialData = {
  name: "",
  image: "",
  calories: "",
  servings: 0,
};

function AddFoodForm({ onAddFood }) {
  const [data, setData] = useState(initialData);

  const onSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      ...data,
      id: uuidv4(),
    };

    onAddFood(newFood);

    setData(initialData);
  };

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(data)}

      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={data.name} onChange={onChange} />
      </div>

      <div>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" value={data.image} onChange={onChange} />
      </div>

      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          min="0"
          id="calories"
          name="calories"
          value={data.calories}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          min="0"
          id="servings"
          name="servings"
          value={data.servings}
          onChange={onChange}
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
