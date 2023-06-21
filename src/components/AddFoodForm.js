import { Divider, Input } from 'antd';
import { useState } from 'react';

export default function AddFoodForm({addFood}) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");

    const createNewFood = (event) => {
        event.preventDefault();
        addFood({name, calories, image: image || "https://placehold.co/116x60?text=" + name, servings});
    }

    return (
      <form onSubmit={e => createNewFood(e)}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={e => setName(e.target.value)} required />
  
        <label>Image</label>
        <Input value={image} type="text" onChange={e => setImage(e.target.value)} />
  
        <label>Calories</label>
        <Input value={calories} type="number" onChange={e => setCalories(e.target.value)} required />
  
        <label>Servings</label>
        <Input value={servings} type="number" onChange={e => setServings(e.target.value)} required />
  
        <button type="submit">Create</button>
      </form>
    );
  }