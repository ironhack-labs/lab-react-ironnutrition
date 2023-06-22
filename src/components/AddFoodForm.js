import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm( {addFood}) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    const newFood = {
        name: name,
        image: image,
        calories: calories,
        servings: servings
    }

    addFood(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };


    return (
        <section className="AddForm">
          <form onSubmit={handleSubmit}>
          <label>Name</label>
          <Input value={name} type="text" onChange={(e) => setName(e.target.value)} />
             
    
          <label>Image</label>
          <Input value={image} type="url" onChange={(e) => setImage(e.target.value)} />
    
          <label>Calories</label>
          <Input value={calories} type="number" min={1} onChange={(e) => setCalories(e.target.value)} />

    
          <label>Servings</label>
          <Input value={servings} type="number" min={1} onChange={(e) => setServings(e.target.value)} />

    
            <button type="submit">Create</button>
          </form>
        </section>
      );
}

export default AddFoodForm;