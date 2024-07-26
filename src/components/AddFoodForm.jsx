import React, { useState } from "react";
import { Divider, Input, Button } from "antd";

const AddFoodForm = ({ onAddFood }) => {
  const [foodData, setFoodData] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddFood(foodData);
    setFoodData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <div>
        <label htmlFor="name">Name:</label>
        <Input
          type="text"
          name="name"
          value={foodData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <Input
          type="text"
          name="image"
          value={foodData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories:</label>
        <Input
          type="number"
          name="calories"
          value={foodData.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <Input
          type="number"
          name="servings"
          value={foodData.servings}
          onChange={handleChange}
        />
      </div>
      <Button style={{margin:"20px"}} type="primary" htmlType="submit">Create</Button>
    </form>
  );
};

export default AddFoodForm;
