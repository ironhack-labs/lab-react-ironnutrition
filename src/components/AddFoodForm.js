import { Divider, Form, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ setFood, food }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();
  return (
    <form>
      <Divider> Add Food Entry</Divider>
      <Form>
        <label htmlFor="name">Name</label>
        <Input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="image">Image</label>
        <Input
          value={image}
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <label htmlFor="calories">Calories</label>
        <Input
          value={calories}
          type="text"
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />
        <label htmlFor="servings">Servings</label>
        <Input
          value={servings}
          type="text"
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />
        <Button
          type="submit"
          onClick={() =>
            setFood((newItem) => [
              { name, image, calories, servings },
              ...newItem,
            ])
          }
        >
          Create
        </Button>
      </Form>
    </form>
  );
}

export default AddFoodForm;
