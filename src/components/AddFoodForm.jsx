import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm({ listOfFood, setListOfFood }) {
  const [values, setValues] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });


  function handleSubmit(ev) {
    ev.preventDefault();

    setListOfFood([values, ...listOfFood]);
  }

  const handleAddFood = (ev) => {
    const { target } = ev;
    const { name, value } = target;

    const newValues = {
      ...values,
      [name]: value, // Edgar explícamelo!! 
    };

    setValues(newValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={values.name}
        name="name"
        type="text"
        onChange={handleAddFood}
      />

      <label>Image</label>
      <Input
        value={values.image}
        name="image"
        type="text"
        onChange={handleAddFood}
      />

      <label>Calories</label>
      <Input
        value={values.calories}
        name="calories"
        type="number"
        onChange={handleAddFood}
      />

      <label>Servings</label>
      <Input
        value={values.servings}
        name="servings"
        type="number"
        onChange={handleAddFood}
      />

      <button onClick={handleAddFood} className="my-2" type="submit">
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
