import { Divider, Input, Button, Col } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFoodDetails = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    props.callBackToCreate(newFoodDetails);

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <section>
      <Divider>Add Food Entry</Divider>
  
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          
          <label>
            Name:
            <Input
              className="input-container"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Image:
            <Input
              className="input-container"
              value={image}
              type="text"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Calories:
            <Input
              className="input-container"
              value={calories}
              type="text"
              onChange={(e) => {
                setCalories(e.target.value);
              }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Servings:
            <Input
              className="input-container"
              value={servings}
              type="text"
              onChange={(e) => {
                setServings(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </form>
      
    </section>
  );
}

export default AddFoodForm;
