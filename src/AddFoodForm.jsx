import { useState } from 'react';
import { Divider, Input } from 'antd';
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState(5);
  const [servings, setServings] = useState(true);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = { name, calories, image, servings };
    // console.log(newMovie);
    props.addNewFood(newFood);

    setName('');
    setCalories('');
    setImage('');
    setServings('');
  };

  return (
    <div className="add-food">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleNameInput}
          />
        </label>
        <label>
          Calories:
          <Input
            type="text"
            name="calories"
            value={calories}
            onChange={handleCaloriesInput}
          />
        </label>
        <label>
          Image:
          <Input
            type="text"
            name="image"
            value={image}
            onChange={handleImageInput}
          />
        </label>
        <label>
          Servings:
          <Input
            type="text"
            name="servings"
            checked={servings}
            onChange={handleServingsInput}
          />
        </label>
        <button type="submit">Add a Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
