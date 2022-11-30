import React, { useState } from 'react';
import './App.css';
// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import Foods from './foods.json';
import 'antd';
import FoodBox from './FoodBox.jsx';
// import Search from './Search.jsx'
import { Divider, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const allFoods = Foods.slice();
  const [foods, setFoods] = useState(allFoods);
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handNameChange = (e) => {
    setName(e.target.value);
  };
  const handImageChange = (e) => {
    setImage(e.target.value);
  };
  const handCaloriesChange = (e) => {
    setCalories(e.target.value);
  };
  const handServingsChange = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      _id: uuidv4(),
      name,
      image,
      calories,
      servings,
    };

    setFoods([newFood, ...foods]);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  // const delete

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <lable htmlFor="name">Name</lable>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={handNameChange}
          placeholder="Name"
          required
        />

        <lable htmlFor="image">Image</lable>
        <Input
          id="image"
          type="text"
          value={image}
          onChange={handImageChange}
          placeholder="Image Address"
          required
        />

        <lable htmlFor="calories">Calories</lable>
        <Input
          id="calories"
          type="number"
          value={calories}
          onChange={handCaloriesChange}
          placeholder="Calories"
          required
        />

        <lable htmlFor="servings">Servings</lable>
        <Input
          id="servings"
          type="number"
          step="1"
          value={servings}
          onChange={handServingsChange}
          placeholder="Servings"
          required
        />
        <button type="submit">Add food</button>
      </form>

      <Divider>Search</Divider>
      <Input
        placeholder="Enter food name"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Divider>Food List</Divider>
      <div className="container">
        {foods
          .filter((food) => {
            return food.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((food) => {
            return <FoodBox food={food} foods={foods} setFoods={setFoods}/>;
          })}
      </div>
    </div>
  );
}
