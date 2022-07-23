//import logo from './logo.svg';
import './App.css';
import foodsArray from './foods.json';
import FoodBox from './components/Foodbox';
import React, { useState } from 'react';
import { Divider, Row } from 'antd';
import AddFoodForm from './components/addFoodForm';
import Search from './components/Search';


function App() {

  const [foodForm, setFoodForm] = useState ({
    name: '',
    calories: 0,
    servings: 1, 
    image: "https://i.imgur.com/eTmWoAN.png"
  });

  const updateFoodForm = event => {
    setFoodForm({
      ...foodForm,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleAddFood = event => {
    event.preventdefault();

    const foodFormCopy = {...foodForm}
    setFoods([
        ...foods,
        foodFormCopy
    ])

    setFoodForm({
      name: '',
      calories: 0,
      servings: 1, 
      image: "https://i.imgur.com/eTmWoAN.png"
    })
  }

  const [foods, setFoods] = useState(foodsArray);

  const [filteredFoodArray, setFilteredFoodArray] = useState(foodsArray);

  const [search, setSearch] = useState('');

  const updateSearch = event => {
    
  const newFilteredArray = foods.filter(individualFood => {
      return individualFood.name.toLowerCase().includes(event.currentTarget.value.toLowerCase());

    });

    setFilteredFoodArray(newFilteredArray);

    setSearch(event.currentTarget.value)
  }

  const handleDeleteFood = name => {
      const foundFoodIndex = foods.findIndex(individualFood => individualFood.name === name)

      const foodArrayCopy = [...foodsArray];

      const removedFood = foodArrayCopy.splice(foundFoodIndex, 1);

      setFoods(foodArrayCopy);

      setFilteredFoodArray(foodArrayCopy);
  }

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <AddFoodForm foodForm = {foodForm} updateFoodForm = {updateFoodForm} handleAddFood = {handleAddFood}/>
        <Search search = {search} updateSearch = {updateSearch} />
      </div>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {filteredFoodArray.map(individualFood => {
        return <FoodBox food={individualFood} handleDeleteFood={handleDeleteFood} />;
      })}
      </Row>
     </div>
  );
}
export default App;

