import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

const emptyFood = {
  name: "",
  image: "",
  calories: "",
  servings: ""
}

function AddFoodForm({ addFood }) {

  const [food, setFood] = useState(emptyFood);
  const [showAddForm, setShowAddForm] = useState(false);


  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFood({
      ...food,
      [key]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood(food);
    setFood(emptyFood);
  };

  if (showAddForm) {

    return (
      <form onSubmit={handleSubmit} className="">
        <Divider>Add Food Entry</Divider>
        <div className='m-3'>
          <label htmlFor="name">Name</label>
          <Input value={food.name} id="name" type="text" onChange={handleChange} />

          <label htmlFor='image'>Image</label>
          <Input value={food.image} id="image" type="text" onChange={handleChange} />

          <label htmlFor="calories">Calories</label>
          <Input value={food.calories} id="calories" type="number" onChange={handleChange} />

          <label htmlFor="servings">Servings</label>
          <Input value={food.servings} id="servings" type='number' onChange={handleChange} />

          <button type="submit" className='mt-3 btn btn-secondary'>Create</button>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>Hide Form</Button>
      </form>
    );
  } else {
    return (
      <Button onClick={() => setShowAddForm(!showAddForm)}>Add New Food</Button>
    )

  }
}


export default AddFoodForm;
