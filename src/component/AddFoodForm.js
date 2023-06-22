import { Row, Button, Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.callbackToCreate(newFood);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };
  return (
    <form className="addfood" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <Row justify={'center'}>
        <label style={{ width: '7vw' }}>Name</label>
        <Input
          style={{ maxWidth: '50vw' }}
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Row>
      <Row justify={'center'}>
        <label style={{ width: '7vw' }}>Image</label>
        <Input
          style={{ maxWidth: '50vw' }}
          value={image}
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </Row>
      <Row justify={'center'}>
        <label style={{ width: '7vw' }}>Calories</label>
        <Input
          style={{ maxWidth: '50vw' }}
          value={calories}
          type="number"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />
      </Row>
      <Row justify={'center'}>
        <label style={{ width: '7vw' }}>Servings</label>
        <Input
          style={{ maxWidth: '50vw' }}
          value={servings}
          type="number"
          onChange={(e) => {
            setServings(e.target.value);
          }}
        />
      </Row>

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
