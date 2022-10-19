import { useState } from 'react';
import { Divider, Input } from 'antd';


function AddFoodForm({ callBackToAddFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  const [displayForm, setDisplayForm] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    callBackToAddFood(newFood);

    //clear form
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div className="AddFoodForm">
      <form onSubmit={handleFormSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          type="text"
          name="name"
          placeholder="name of food"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Image</label>
        <Input
          type="text"
          name="image"
          placeholder="image url"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />

        <label>Calories</label>
        <Input
          type="number"
          name="calories"
          placeholder="enter calories here"
          value={calories}
          onChange={(event) => {
            setCalories(event.target.value);
          }}
        />

        <label>Servings</label>
        <Input
          type="number"
          name="servings"
          placeholder="enter servings here"
          value={servings}
          onChange={(event) => {
            setServings(event.target.value);
          }}
        />

        <button className="form">Create new Food Item</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
