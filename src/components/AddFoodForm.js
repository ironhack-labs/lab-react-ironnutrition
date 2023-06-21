// This is a controlled Component

import { useState } from "react";
import { Divider, Input } from 'antd';



// Iteration 4
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  // console.log(props);

  // handle the Form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    const newFood = {
      name: name, //// the key title comes from following the same pattern as we have in the Json) /// then, the value: name, is whatever the user types in the form and we defined it as value in the useState above
      image: image,
      calories: calories,
      servings: servings, ///idem> we take keys from the Json pattern  and  values from the useState above
    };
    // console.log(newFood);


    props.callBackToCreate(newFood);

    // clear the form after submitting it
    setName('');
    setImage('');
    setCalories('');
    setServings('');

  };




  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;