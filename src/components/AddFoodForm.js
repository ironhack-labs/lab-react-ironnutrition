import { useState } from 'react';
import { Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);

    // Reset the state
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="AddFood">
      <h4>Add Food Entry</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label htmlFor="image">Image</label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label htmlFor="calories">Calories</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <label htmlFor="servings">Servings</label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
