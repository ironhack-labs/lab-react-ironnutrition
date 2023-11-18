import { useState } from "react";

function AddFoodForm(props) {
  const [foodForm, setFoodForm] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFoodForm({ ...foodForm, [key]: value });
  };

  return (
    <div>
      <h1>Add Food Entry</h1>
      <form onSubmit={(event) => props.handleSubmit(event, foodForm)}>
        <div>
          <label htmlFor="name-input">Name</label>
          <input
            type="text"
            onChange={handleChange}
            id="name-input"
            placeholder="Name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="image-input">Image</label>
          <input
            type="text"
            onChange={handleChange}
            id="image-input"
            placeholder="https://www.example.com/image.png"
            name="image"
          />
        </div>
        <div>
          <label htmlFor="calories-input">Calories</label>
          <input
            type="number"
            onChange={handleChange}
            id="calories-input"
            name="calories"
          />
        </div>
        <div>
          <label htmlFor="servings-input">Servings</label>
          <input
            type="number"
            onChange={handleChange}
            id="servings-input"
            name="servings"
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
