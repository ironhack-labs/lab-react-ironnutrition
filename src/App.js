import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFoodForm'
import Search from './components/Search'

import { Card, Row, Col, Divider, Input, Button } from 'antd';


function App() {
const [foodArr, setFoodArr] = useState(foods);
const [query, setQuery] = useState('');
const [showForm, setShowForm] = useState(true);

  const addFood = (newFood) => {
    setFoodArr((prevFoodArr) => {
      const newList = [newFood, ...prevFoodArr];
      return newList;
    });
  };
  
    const deleteFood = (foodName) => {
      const newList = foodArr.filter(
        (foodDetails) => foodDetails.name !== foodName
      );
      setFoodArr(newList);
    };

    const filteredFoods = foodArr.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    ); 

      
      const toggleForm = () => {setShowForm(!showForm)};

return (
  <div className="App">
    <Search setQuery={setQuery} />

    <button onClick={toggleForm}>
      {showForm ? 'Hide Form' : 'Add new form'}
    </button>
    {showForm && ( 
    <AddFood callbackToAdd={addFood} />)}
    {filteredFoods.map((foodObj) => {
      return <FoodBox food={foodObj} callbackToDelete={deleteFood} />;
    })}
  </div>
);
    }


export default App;
