import React, { useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddFood = (props) => {
  const { foods, setFood } = props;
  const arrLength = foods.items.length + 1;
  const [localFood, setLocalFood] = useState({
    id: arrLength.toString(),
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  });

  const handleChange = (e) => {
    setLocalFood({ ...localFood, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFood((foods) => ({ items: [...foods.items, localFood] }));
    setLocalFood({
      id: (arrLength + 1).toString(),
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="field">
          <Form.Label htmlFor="name">Name: </Form.Label>
          <FormControl
            className="control"
            type="text"
            name="name"
            onChange={handleChange}
            value={localFood.name}
          />
        </FormGroup>
        <FormGroup className="field">
          <Form.Label htmlFor="title">Calories: </Form.Label>
          <FormControl
            className="control"
            type="number"
            name="calories"
            onChange={handleChange}
            value={localFood.calories}
          />
        </FormGroup>
        <FormGroup className="field">
          <Form.Label htmlFor="image">Image: </Form.Label>
          <FormControl
            className="control"
            type="text"
            name="image"
            onChange={handleChange}
            value={localFood.image}
          />
        </FormGroup>
        <Button className="button is-link" type="submit">
          SAVE
        </Button>
      </Form>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AddFood;
