import { useState } from 'react';
import { Divider, Input, Card, Row } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleImageInput(e) {
    setImage(e.target.value);
  }

  function handleCaloriesInput(e) {
    setCalories(e.target.value);
  }

  function handleServingsInput(e) {
    setServings(e.target.value);
  }

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
    <Row style={{ justifyContent: 'center' }}>
      <Card style={{ width: 600, margin: 10, backgroundColor: '#efefef' }}>
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={name} type="text" onChange={handleNameInput} />

          <label>Image</label>
          <Input value={image} type="text" onChange={handleImageInput} />

          <label>Calories</label>
          <Input value={calories} type="text" onChange={handleCaloriesInput} />

          <label>Servings</label>
          <Input value={servings} type="text" onChange={handleServingsInput} />

          <button type="submit">Create</button>
        </form>
      </Card>
    </Row>
  );
}

export default AddFoodForm;
