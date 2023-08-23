import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  // (e) event
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handleCaloriesInput = (e) => {
    setCalories(e.target.value);
  };
  const handleServingsInput = (e) => {
    setServings(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      calories,
      image,
      servings,
    };
    props.addNewFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div>
      <h2>Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          ></input>
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          ></input>
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          ></input>
        </label>
        <label>
          Servings :
          <input
            type="number"
            name="servings"
            value={servings}
            onChange={handleServingsInput}
          ></input>
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
export default AddFoodForm;
