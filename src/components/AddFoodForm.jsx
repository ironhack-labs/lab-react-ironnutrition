import { useState } from "react";

const AddFoodForm = ({ foods, setFoods }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleChange = (e) => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { ...formData };
    setFoods([...foods, newFood]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleChange} />
      <label htmlFor="image">Image</label>
      <input type="text" name="image" id="image" onChange={handleChange} />
      <label htmlFor="calories">Calories</label>
      <input
        type="number"
        name="calories"
        id="calories"
        onChange={handleChange}
      />
      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        name="servings"
        id="servings"
        onChange={handleChange}
      />

      <button>Create</button>
    </form>
  );
};

export default AddFoodForm;
