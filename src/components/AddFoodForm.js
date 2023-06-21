import { Input, Button } from 'antd';
import { useState } from 'react';

export const AddFoodForm = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    props.callback(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <section className="AddFood">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            placeholder="enter a name"
            required={true}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <Input
            type="url"
            name="image"
            placeholder="enter a image"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>
        <label>
          Calories:
          <Input
            type="number"
            name="calories"
            placeholder="enter calories"
            value={calories}
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        </label>
        <label>
          Servings:
          <Input
            type="number"
            name="servings"
            placeholder="enter servings"
            value={servings}
            onChange={(event) => {
              setServings(event.target.value);
            }}
          />
        </label>
        <Button htmlType="submit" type="primary">
          Add Food
        </Button>
      </form>
    </section>
  );
};
