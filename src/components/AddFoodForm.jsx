import { useState } from 'react';

function AddFoodForm({ onAdd }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, image, calories: parseInt(calories), servings: parseInt(servings) });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <br />
      </label>
      <label>
        Image:
        <input name="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <br />
        <br />
      </label>
      <label>
        Calories:
        <input name="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <br />
        <br />
      </label>
      <label>
        Servings:
        <input name="servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
