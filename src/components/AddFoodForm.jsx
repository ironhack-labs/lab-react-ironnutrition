import { useState } from 'react';
import { Divider, Input, Form } from 'antd';
import { uuid } from '../utils/uuid';

const defaultState = {
  name: '',
  image: '',
  calories: 0,
  servings: 0,
};

export const AddFoodForm = ({ addFood }) => {
  const [state, setState] = useState(defaultState);

  const handleChange = (event) => {
    setState((old) => {
      let newValue = event.target.value;
      if (typeof old[event.target.name] === 'number') {
        newValue = parseFloat(event.target.value);
      }

      if (typeof old[event.target.name] === 'boolean') {
        newValue = event.target.checked;
      }

      return { ...old, [event.target.name]: newValue };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: state.name || '',
      image: state.image || '',
      calories: state.calories || 0,
      servings: state.servings || 0,
      id: uuid(),
    };
    addFood(newFood);
    setState(defaultState);
  };

  return (
    <Form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>{' '}
      <Input
        name="name"
        value={state.name}
        type="text"
        onChange={handleChange}
      />
      <label>Image</label>{' '}
      <Input
        name="image"
        value={state.image}
        type="text"
        onChange={handleChange}
      />
      <label>Calories</label>{' '}
      <Input
        name="calories"
        value={state.calories}
        type="number"
        onChange={handleChange}
      />
      <label>Servings</label>{' '}
      <Input
        name="servings"
        value={state.servings}
        type="number"
        onChange={handleChange}
      />
      <button type="submit" onClick={handleFormSubmit}>
        Create
      </button>
    </Form>
  );
};
