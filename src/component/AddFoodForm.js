import { useState } from 'react';
import { Input, Button } from 'antd';

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
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            value={name}
            type="text"
            placeholder="enter the food name"
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Image
          <Input
            value={image}
            type="url"
            placeholder="https://example.com/food.image.jpg"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>

        <label>
          Calories
          <Input
            value={calories}
            type="number"
            min={1}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </label>

        <label>
          Servings
          <Input
            value={servings}
            type="number"
            min={1}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </label>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </form>
    </section>
  );
}

export default AddFoodForm;
