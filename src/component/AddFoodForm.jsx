import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    props.addFood(newFood);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  }

  return (
    <div>
      <form className="food-form" onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="name">Name</label>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />

        <label htmlFor="image">Image</label>
        <Input
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
        />

        <label htmlFor="calories">Calories</label>
        <Input
          value={calories}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          type="text"
        />

        <label htmlFor="servings">Servings</label>
        <Input
          value={servings}
          onChange={(e) => {
            setServings(e.target.value);
          }}
          type="text"
        />

        <button>Create</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
