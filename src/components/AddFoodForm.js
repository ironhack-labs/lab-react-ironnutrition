import { Divider, Form, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ setFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();
  return (
    <form>
      <Divider> Add Food Entry</Divider>
      <Form>
        <label>Name</label>
        <Input
          value={name}
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Image</label>
        <Input
          value={image}
          type="text"
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
        <label>Calories</label>
        <Input
          value={calories}
          type="text"
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />
        <label>Servings</label>
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
