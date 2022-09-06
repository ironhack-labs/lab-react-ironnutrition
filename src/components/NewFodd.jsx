import { useState } from 'react';
import { Divider, Input } from 'antd';

function NewFood({ createFood }) {
  const [name, setName] = useState('Food');
  const [image, setImage] = useState(
    'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png'
  );
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = { name, image, calories, servings };
    createFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food</Divider>
        <label>Name</label>
        <Input type="text" name="name" value={name} onChange={handleName} />

        <label>Image</label>
        <Input type="text" name="image" value={image} onChange={handleImage} />

        <label>Calories</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label>Servings</label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />

        <button className="btn btn-outline-secondary mt-2" type="submit">
          Add New Food
        </button>
      </form>
    </>
  );
}

export default NewFood;
