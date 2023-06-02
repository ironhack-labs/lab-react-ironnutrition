import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

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
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="addFood">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        ></Input>
        <label>Image:</label>
        <Input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        ></Input>
        <label>Calories:</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        ></Input>
        <label>Servings:</label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        ></Input>
        <Button type="primary" htmlType="submit">
          Add a dish
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
