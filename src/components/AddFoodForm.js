// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //it prevents react to reload. This is important because if we send information the application will reload from the beginning and the new info would be lost

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    props.setFood((prevFood) => {
      return [newFood, ...prevFood]; // this is an alternative way to do push/unshift
    });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
    // clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        required
        type="text"
        name="name"
        value={name}
        placeholder="enter that dish name"
        onChange={(e) => {
          setName(e.target.value); //using useState to show the text being typed
        }}
      />

      <label>Image</label>
      <Input
        type="text"
        name="image"
        value={image}
        placeholder="enter the image URL"
        onChange={(e) => {
          setImage(e.target.value); //using useState to show the text being typed
        }}
      />

      <label>Calories</label>
      <Input
        type="number"
        name="calories"
        value={calories}
        placeholder="bring those calories up"
        onChange={(e) => {
          setCalories(e.target.value); //using useState to show the text being typed
        }}
      />

      <label>Servings</label>
      <Input
        type="number"
        name="servings"
        value={servings}
        placeholder="any amount servings?"
        onChange={(e) => {
          setServings(e.target.value); //using useState to show the text being typed
        }}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
