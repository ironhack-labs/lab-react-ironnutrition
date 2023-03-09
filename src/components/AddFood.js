import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFood(props) {
  const [inputs, setInputs] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.image || !inputs.calories || !inputs.servings)
      return;
      
    props.addFood({ ...inputs });
    setInputs({
      name: '',
      image: '',
      calories: 0,
      servings: 1,
    });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={inputs.name}
        name={'name'}
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        value={inputs.image}
        name={'image'}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        value={inputs.calories}
        name={'calories'}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        value={inputs.servings}
        name={'servings'}
        type="number"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFood;
