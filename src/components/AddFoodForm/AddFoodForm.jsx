import React from 'react'
import { useState } from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';



function AddFoodForm(props) {


    
const {createFood} = props;

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://www.example.food-image.jpg");
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

    const handleSubmit = (e) => {
      e.preventDefault();

      const newFood = { name, image, calories, servings };
      createFood(newFood);

      setName("");
      setImage("");
      setCalories(1);
      setServings(1);
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
      {/* The onChange triggers everytime the input changes value */}
      <Input type="text" name="name" value={name} onChange={handleName} />

      <label htmlFor="image">image</label>
      <Input type="url" name="image" placeholder={image} onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input type="number" name="calories" value={calories} onChange={handleCalories} />

      <label htmlFor="servings">Servings</label>
      <Input type="number" name="servings" checked={servings} onChange={handleServings} />

      <button type="submit">Add Food</button>
    </form>
  </div>
  )
}

export default AddFoodForm