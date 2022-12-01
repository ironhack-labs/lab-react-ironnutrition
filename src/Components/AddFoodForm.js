import React, { useState } from 'react';
import { Divider, Input, Button } from 'antd';

const AddFoodForm = ({ onCreate, onClose, updateFilter }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      name,
      image,
      calories,
      servings,
    };

    onCreate((prevState) => {
      return [...prevState, newEntry];
    });

    updateFilter((prevState) => {
      return [...prevState, newEntry];
    });

    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };
  return (
    <React.Fragment>
      <Divider>Add Food Entry</Divider>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '80%',
          padding: '5%',
          backgroundColor: 'dodgerblue',
          borderRadius: '20px',
          margin: '0 auto',
          color: 'white',
        }}
      >
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="image">Image</label>
        <Input
          id="image"
          placeholder="image url"
          value={image}
          onChange={({ target }) => setImage(target.value)}
        />
        <label htmlFor="calories">Calories</label>
        <Input
          id="calories"
          placeholder="calories"
          value={calories}
          onChange={({ target }) => setCalories(target.value)}
        />
        <label htmlFor="servings">Servings</label>
        <Input
          id="servings"
          placeholder="servings"
          value={servings}
          onChange={({ target }) => setServings(target.value)}
        />
        <Button
          htmlType="submit"
          style={{ marginTop: '20px', marginRight: '20px' }}
        >
          create new food
        </Button>
        <Button onClick={() => onClose(false)}>Cancel</Button>
      </form>
    </React.Fragment>
  );
};

export default AddFoodForm;
