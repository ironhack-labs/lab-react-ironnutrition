import { useState } from 'react';


function AddFoodForm({ onAddFood }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(form);
    setForm({
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={form.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          value={form.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          name="servings"
          id="servings"
          value={form.servings}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;