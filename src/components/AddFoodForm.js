import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4

function AddFoodForm(props) {


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);
  const [isShown, setIsShown] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      name,
      image,
      calories,
      servings
    };

    props.callbackToAdd(newFood);

    setName("");
    setImage("");
    setCalories(1);
    setServings(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      {isShown
        ? <>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={name} type="text" onChange={(e) => { setName(e.target.value) }} />

          <label>Image</label>
          <Input value={image} type="text" onChange={(e) => { setImage(e.target.value) }} />

          <label>Calories</label>
          <Input value={calories} type="number" onChange={(e) => { setCalories(e.target.value) }} />

          <label>Servings</label>
          <Input value={servings} type="number" onChange={(e) => { setServings(e.target.value) }} />

          <button type="submit">Create</button><br />

          <button type="button" onClick={() => { setIsShown(false)}}>Hide Form</button>
        </>

        : <button type="button" onClick={() => { setIsShown(true)}}>Add new food</button>
      }
    </form>
  );
}


export default AddFoodForm;