import React, {useState} from "react";
import { Divider, Input } from 'antd';

function FS({onAddFood}) {
    const [foodData, setFoodData] = useState({
        name: '',
        image: '',
        calories: '',
        servings: '',
    });

    const handleChange = (name, value) => {
        setFoodData({
            ...foodData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddFood(foodData);
        setFoodData({
            name: '',
            image: '',
            calories: '',
            servings: '',
        });
    };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={foodData.name} type="text" onChange={(e) => handleChange('name', e.target.value)} />

      <label>Image</label>
      <Input value={foodData.image} type="text" onChange={(e) => handleChange('image', e.target.value)} />

      <label>Calories</label>
      <Input value={foodData.calories} type="number" onChange={(e) => handleChange('calories', e.target.value)} />

      <label>Servings</label>
      <Input value={foodData.servings} type="number" onChange={(e) => handleChange('servings', e.target.value)} />

      <button type="submit">Create</button>
    </form>
  );
}


export default FS;