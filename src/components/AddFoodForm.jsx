import { Divider, Input } from 'antd';
import { useEffect, useState } from 'react';

const defaultFormState = {
  name: '',
  image: '',
  calories: '',
  servings: '',
};

export const AddFoodForm = ({ addFoodItem }) => {
  const [formState, setFormState] = useState(defaultFormState);

  const handleChange = (e) => {
    setFormState((old) => {
      let newValue = e.target.value;
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const newFoodItem = {
      name: formState.name,
      image: formState.image,
      calories: formState.calories,
      servings: formState.servings,
    };
    addFoodItem(newFoodItem);
    setFormState(defaultFormState);
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        name="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <label>Image</label>
      <Input
        name="image"
        type="text"
        value={formState.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      <Input
        name="calories"
        type="number"
        value={formState.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      <Input
        name="servings"
        type="number"
        value={formState.servings}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmitBtn}>
        Create
      </button>
    </form>
  );
};
