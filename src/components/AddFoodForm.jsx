import { useState } from "react";

function AddFoodForm({ addFood }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = {
      id: Date.now(),
      name: formData.name,
      image: formData.image,
      calories: formData.calories,
      servings: formData.servings,
    };
    addFood(newFood);
    setFormData({ name: "", image: "", calories: 0, servings: 0 });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image : </label>
          <input
            id="image"
            name="image"
            value={formData.image}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="calories">Calories :</label>
          <input
            id="calories"
            value={formData.calories}
            name="calories"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="servings">Servings :</label>
          <input
            name="servings"
            id="servings"
            value={formData.servings}
            type="number"
            onChange={handleChange}
          />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
